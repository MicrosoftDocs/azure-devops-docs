---
title: Secure files for Azure Pipelines
description: Understand how to add and use secure files in Azure Pipelines.
monikerRange: '<= azure-devops'
ms.date: 03/10/2026
ms.topic: how-to
ms.custom: pipelinesresourcesrefresh, sfi-image-nochange, awp-ai
ai-usage: ai-assisted
---

# Use secure files

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to securely store and use sensitive files, such as certificates and keys, in Azure Pipelines with the secure files library. Secure files help protect sensitive data by encrypting files at rest on the server. Only pipelines that you explicitly authorize can access secure files, which helps ensure your credentials and other critical files remain safe.

This article covers adding secure files, configuring permissions, and using secure files in a pipeline.

Use the secure files [library](index.md) to store files such as:

- Signing certificates
- Apple provisioning profiles
- Android keystore files
- SSH keys

The size limit for each secure file is 10 MB.

Secure files are stored on the server in encrypted form and can only be used from a pipeline task. Secure files are a [protected resource](../security/resources.md). You can use approvals, checks, and pipeline permissions to limit access to the files. Secure files also use [library security model](index.md#library-security) roles.

## Prerequisites

- An [Azure DevOps project](../../organizations/projects/create-project.md).
- Permissions to create pipelines and add library items.
- One of the following roles:
  - Project Administrator, Contributor, or a custom role with permissions to manage Library items.
  - To manage Library security and permissions, you need Project Administrator or equivalent permissions.
- Your Azure DevOps organization allows pipeline resource access and the project's pipeline settings don't restrict secure file usage.
- A certificate, keystore, or provisioning file you want to use securely in your pipeline. File size must not exceed 10 MB.

## Add a secure file

1. In your Azure DevOps project, go to **Pipelines** > **Library** from the left menu.
1. Select the **Secure files** tab.

   :::image type="content" source="media/secure-files-tab.png" alt-text="Screenshot of selecting the Secure Files tab.":::

1. Select **+ Secure file** to upload a secure file. Browse to upload or drag and drop your file.

   :::image type="content" source="media/upload-secure-file.png" alt-text="Screenshot of uploading your file.":::

1. Select **OK**.
1. Verify that the new file appears in the **Secure files** list. After you upload a secure file, you can't edit or replace its contents. To update a secure file, delete the existing file and then upload a new version. You might need to update any pipelines that reference the file if the file name changes.

## Define security roles and permissions

You can define security role restrictions and permissions for all items in a library or for individual items.

- To assign security roles for all items in a library, go to **Pipelines** > **Library** from the left menu, and then select **Security**.
- To define permissions for an individual file:
  1. In **Pipelines** > **Library** from the left menu, select the **Secure files** tab, and then select the file.
  1. At the top of the secure file detail page, select:
     - **Security** to set users and security roles that can access the file.
     - **Pipeline permissions** to select YAML pipelines that can access the file.
     - **Approvals and checks** to set approvers and other checks for using the file. For more information, see [Approvals and checks](../process/approvals.md).

  :::image type="content" source="media/pipeline-security-options.png" alt-text="Set pipeline security for secure files.":::

<a name="secure-file-authorization"></a>
## Authorize a YAML pipeline to use a secure file

To use a secure file in YAML pipelines, authorize the pipeline to use the file. All classic pipelines can access secure files.

To authorize a pipeline or all pipelines to use a secure file:

1. In **Pipelines** > **Library** from the left menu, select the **Secure files** tab, and then select the file.
1. At the top of the secure file detail page, select **Pipeline permissions**.
1. On the **Pipeline permissions** screen, select **+**, and then select a project pipeline to authorize. Or, to authorize all pipelines to use the file, select the **More actions** icon, select **Open access**, and select **Open access** again to confirm.

## Use a secure file in a pipeline

To use secure files in a pipeline, use the [Download Secure File](/azure/devops/pipelines/tasks/reference/download-secure-file-v1) utility task. Before you begin, make sure you [add the secure file](#add-a-secure-file) to the library and [authorize your pipeline](#secure-file-authorization) to use the file. The pipeline agent must be running version 2.182.1 or greater. For more information, see [Agent version and upgrades](../agents/agents.md#agent-version-and-upgrades).

The following example YAML pipeline downloads a secure certificate file and installs it in a Linux environment.

```yaml
- task: DownloadSecureFile@1
  name: caCertificate
  displayName: 'Download CA certificate'
  inputs:
    secureFile: 'myCACertificate.pem'

- script: |
    echo Installing $(caCertificate.secureFilePath) to the trusted CA directory...
    sudo chown root:root $(caCertificate.secureFilePath)          # Change file ownership to root
    sudo chmod a+r $(caCertificate.secureFilePath)                # Make the file readable by all users
    sudo ln -s -t /etc/ssl/certs/ $(caCertificate.secureFilePath) # Create a symbolic link in the trusted certificates directory
```

::: moniker range="< azure-devops"
>[!NOTE]
>If you see an `Invalid Resource` error when downloading a secure file with Azure DevOps Server on-premises, make sure [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) is disabled on the server.
::: moniker-end

## Related content

- To create a custom task that uses secure files, use inputs with type `secureFile` in the *task.json*. For more information, see [Learn how to build a custom task](../../extend/develop/add-build-task.md).

- The [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task is a simple example that uses a secure file. For the source code, see [InstallAppleProvisioningProfileV1](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/InstallAppleProvisioningProfileV1).

- To handle secure files during build or release tasks, see the [Common module](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/Common) for tasks.

