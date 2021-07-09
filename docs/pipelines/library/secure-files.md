---
title: Secure files for Azure Pipelines
ms.custom: seodec18, contperf-fy21q4
description: Understand secure files for Azure Pipelines
ms.assetid: 1B115D68-5667-445C-9130-00D658EEFE39
ms.author: vijayma
ms.date: 05/25/2021
monikerRange: '>= tfs-2015'
author: vijayma
---

# Use secure files

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Secure Files are a way to store files that you can share across pipelines. You can use the Secure Files library to store files such as signing certificates, Apple Provisioning Profiles, Android Keystore files, and SSH keys on the server without having to commit them to your repository. Secure files are defined and managed in the **Library** tab in **Azure Pipelines**.

The contents of the secure files are encrypted and can only be used when you consume them from a task. Secure files are a [protected resource](../security/resources.md). You can add approvals and checks to them and set pipeline permissions. Secure files also can use the [Library security model](index.md#library-security). 

There's a size limit of 10 MB for each secure file.

## Add a secure file

You can add Secure Files from **Pipelines** > **Library**.

1.  Go to **Library** and select the **Secure files** tab. 

    :::image type="content" source="secure-files-tab.png" alt-text="Select the Secure Files tab.":::

1. Select :::image type="icon" source="../../report/media/icons/blue-plus.png" border="false"::: to upload a new secure file. You can browse to upload or drag and drop your file. Once your file is uploaded, you'll be able to delete it but you will not be able to replace it. 

    :::image type="content" source="media/upload-secure-file.png" alt-text="Upload your file. ":::

1. Add permissions to your file. 
    1. You can apply security role restrictions for all files from the **Security** tab at **Pipelines** > **Library**.
    1. To add permissions for an individual file, in the file's edit view select **Pipeline permissions** to set per-pipeline permissions. Or, select **Security** to set security roles. You can also **Approvals and Checks** for the file. Learn more about [approvals and checks](../process/approvals.md). 
    :::image type="content" source="media/pipeline-security-options.png" alt-text="Set Pipeline security for secure files.":::

## Consume a secure file in a pipeline

Use the [Download Secure File](../tasks/utility/download-secure-file.md) Utility task to consume secure files in a pipeline. 

::: moniker range=">=azure-devops-2019"
This YAML pipeline example downloads a secure certificate file and installs it in a Linux environment.

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

::: moniker-end

## FAQ

<!-- BEGINSECTION class="md-qanda" -->
### How can I create a custom task using secure files?

You can build your own tasks that use secure files by using inputs with type `secureFile` in the `task.json`.
[Learn how to build a custom task](../../extend/develop/add-build-task.md).

The Install Apple Provisioning Profile task is a simple example of a task using a secure file. See the [reference documentation](../tasks/utility/install-apple-provisioning-profile.md) and [source code](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/InstallAppleProvisioningProfileV1).

To handle secure files during build or release, you can refer to the common module available [here](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/Common).

### My task can't access the secure files. What do I do?

Make sure your agent is running version of 2.116.0 or higher. See [Agent version and upgrades](../agents/agents.md#agent-version-and-upgrades).

<a name="secure-file-authorization"></a>

### How do I authorize a secure file for use in a specific pipeline?

 1. In **Azure Pipelines**, select the **Library** tab.
 1. Select the **Secure files** tab at the top. 
 1. Select the secure file you want to authorize. 
 1. Select the **Pipeline permissions** button. 
 1. In the open dialog, you are able to review and modify the access for each available pipeline.
 
### Why do I see an `Invalid Resource` error when downloading a secure file with Azure DevOps Server/TFS on-premises?

Make sure [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) is disabled on the TFS or Azure DevOps Server. 

### How are secure files secured?
 
Secure files, variable groups, and service connections are all secured in the same way in Azure DevOps. They are also all [protected resources](../security/resources.md). 

Secrets are encrypted and stored in the database. The keys to decrypt secrets are stored in Azure Key Vault. The keys are specific to each scale unit. So, two regions do not share the same keys. The keys are also rotated with every deployment of Azure DevOps.

The rights to retrieve secure keys are only given to the Azure DevOps service principals and (on special occasions) on-demand to diagnose problems. The secure storage does not have any certifications. 

[Azure Key Vault](/azure/key-vault/general/basic-concepts) is another, more secure option for securing sensitive information. If you decide to use Azure Key Vault, you can [use it with variable groups](../release/azure-key-vault.md). 
<!-- ENDSECTION -->
