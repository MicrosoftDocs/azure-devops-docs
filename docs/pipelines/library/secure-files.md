---
title: Secure files for Azure Pipelines
ms.custom: pipelinesresourcesrefresh
description: Understand how to add and consume secure files for Azure Pipelines.
ms.assetid: 1B115D68-5667-445C-9130-00D658EEFE39
ms.author: vijayma
author: vijayma
monikerRange: '<= azure-devops'
ms.date: 07/30/2024
ms.topic: how-to
---

# Use secure files

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes secure files and how to use them in Azure Pipelines. Secure files are a way to store files that you can use in pipelines without having to commit them to your repository.

You can use the secure files [library](index.md) to store files such as:

- Signing certificates.
- Apple provisioning profiles.
- Android keystore files.
- SSH keys.

The size limit for each secure file is 10 MB.

Secure files are stored on the server in encrypted form and can be consumed only from a pipeline task. Secure files are a [protected resource](../security/resources.md). You can use approvals, checks, and pipeline permissions to limit access to the files. Secure files also use [library security model](index.md#library-security) roles.

## Prerequisites

- An Azure DevOps project where you have permissions to create pipelines and add library items.
- A certificate, keystore, or provisioning file you want to use securely in your pipeline.

## Add a secure file

1. In your Azure DevOps project, go to **Pipelines** > **Library** and select the **Secure files** tab.

   :::image type="content" source="media/secure-files-tab.png" alt-text="Screenshot of selecting the Secure Files tab.":::

1. To upload a secure file, select **+ Secure file**, then browse to upload or drag and drop your file.

   :::image type="content" source="media/upload-secure-file.png" alt-text="Screenshot of uploading your file.":::

1. Select **OK**. Once you upload the file, you can delete it but not replace it.

### Define security roles and permissions

You can define security role restrictions and permissions for all items in a library, or for individual items.

- To assign security roles for all items in a library, select **Security** on the **Library** page.
- To define permissions for an individual file:
  1. Select the file from the **Secure files** list.
  1. At the top of the **Secure file** page, select:
     - **Pipeline permissions** to select YAML pipelines that can access the file.
     - **Security** to set users and security roles that can access the file.
     - **Approvals and checks** to set approvers and other checks for using the file. For more information, see [Approvals and checks](../process/approvals.md).

  :::image type="content" source="media/pipeline-security-options.png" alt-text="Set pipeline security for secure files.":::

<a name="secure-file-authorization"></a>
#### Authorize a pipeline to use a secure file

To use a secure file in YAML pipelines, you must authorize the pipeline to use the file. All Classic pipelines can access secure files.

To authorize a pipeline or all pipelines to use a secure file:

1. At the top of the page for the secure file, select **Pipeline permissions**.
1. On the **Pipeline permissions** screen, select **+**, and then select a project pipeline to authorize. Or, to authorize all pipelines to use the file, select the **More actions** icon, select **Open access**, and select **Open access** again to confirm.

## Consume a secure file in a pipeline

To consume secure files in a pipeline, use the [Download Secure File](/azure/devops/pipelines/tasks/reference/download-secure-file-v1) utility task. The pipeline agent must be running version 2.182.1 or greater. For more information, see [Agent version and upgrades](../agents/agents.md#agent-version-and-upgrades).

The following example YAML pipeline downloads a secure certificate file and installs it in a Linux environment.

```yaml
- task: DownloadSecureFile@1
  name: caCertificate
  displayName: 'Download CA certificate'
  inputs:
    secureFile: 'myCACertificate.pem'

- script: |
    echo Installing $(caCertificate.secureFilePath) to the trusted CA directory...
    sudo chown root:root $(caCertificate.secureFilePath)
    sudo chmod a+r $(caCertificate.secureFilePath)
    sudo ln -s -t /etc/ssl/certs/ $(caCertificate.secureFilePath)
```

::: moniker range="< azure-devops"
>[!NOTE]
>If you see an `Invalid Resource` error when downloading a secure file with Azure DevOps Server on-premises, make sure [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) is disabled on the server.
::: moniker-end

## Related content

- To create a custom task that uses secure files, use inputs with type `secureFile` in the *task.json*. For more information, see [Learn how to build a custom task](../../extend/develop/add-build-task.md).

- The [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) task is a simple example that uses a secure file. For the source code, see [InstallAppleProvisioningProfileV1](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/InstallAppleProvisioningProfileV1).

- To handle secure files during build or release, see the [Common module](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/Common) for tasks.

