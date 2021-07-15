---
title: Secure files for Azure Pipelines
ms.custom: seodec18, contperf-fy21q4
description: Understand how to add and consume secure files for Azure Pipelines.
ms.assetid: 1B115D68-5667-445C-9130-00D658EEFE39
ms.author: vijayma
author: vijayma
monikerRange: '>= tfs-2015'
ms.date: 07/14/2021

---

# Use secure files

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

Secure files give you a way to store files that you can share across pipelines. Use the secure files library to store files such as:

- signing certificates
- Apple Provisioning Profiles
- Android Keystore files
- SSH keys

These files can be stored on the server without having to commit them to your repository.

The contents of the secure files are encrypted and can only be used when you consume them from a task. Secure files are a [protected resource](../security/resources.md). You can add approvals and checks to them and set pipeline permissions. Secure files also can use the [Library security model](index.md#library-security).

The size limit for each secure file is 10 MB.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

## Add a secure file

1. Go to **Pipelines** > **Library** > **Secure files**.

   :::image type="content" source="media/secure-files-tab.png" alt-text="Select the Secure Files tab.":::

2. Select :::image type="icon" source="../../report/media/icons/blue-plus.png" border="false"::: **Secure file** to upload a new secure file. Browse to upload or drag and drop your file. You can delete this file, but you can't replace it.

   :::image type="content" source="media/upload-secure-file.png" alt-text="Upload your file. ":::

3. Add permissions to your file.
    1. Apply security role restrictions for all files from the **Security** tab at **Pipelines** > **Library**.
    2. To add permissions for an individual file, in the file's edit view, select **Pipeline permissions** to set per-pipeline permissions. Or, select **Security** to set security roles.
       - You can also set **Approvals and Checks** for the file. For more information, see [Approvals and checks](../process/approvals.md).

    :::image type="content" source="media/pipeline-security-options.png" alt-text="Set Pipeline security for secure files.":::

## Consume a secure file in a pipeline

Use the [Download Secure File](../tasks/utility/download-secure-file.md) utility task to consume secure files in a pipeline.

::: moniker range=">=azure-devops-2019"
The following YAML pipeline example downloads a secure certificate file and installs it in a Linux environment.

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

### Q: How can I create a custom task using secure files?

A: Build your own tasks that use secure files by using inputs with type `secureFile` in the `task.json`.
[Learn how to build a custom task](../../extend/develop/add-build-task.md).

The Install Apple Provisioning Profile task is a simple example of a task using a secure file. See the [reference documentation](../tasks/utility/install-apple-provisioning-profile.md) and [source code](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/InstallAppleProvisioningProfileV1).

To handle secure files during build or release, you can refer to the common module available [here](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/Common).

### Q: My task can't access the secure files. What do I do?

A: Make sure your agent is running version of 2.116.0 or higher. See [Agent version and upgrades](../agents/agents.md#agent-version-and-upgrades).

<a name="secure-file-authorization"></a>

### Q: How do I authorize a secure file for use in a specific pipeline?

A:

 1. In **Azure Pipelines**, select the **Library** tab.
 1. Select the **Secure files** tab at the top.
 1. Select the secure file you want to authorize.
 1. Select the **Pipeline permissions** button.
 1. Review and modify the access for each available pipeline.

### Q: Why do I see an `Invalid Resource` error when downloading a secure file with Azure DevOps Server/TFS on-premises?

A: Make sure [IIS Basic Authentication]( /iis/configuration/system.webserver/security/authentication/basicauthentication) is disabled on the TFS or Azure DevOps Server.

### Q: How are secure files secured?

A: Secure files, variable groups, and service connections are all secured in the same way in Azure DevOps. They're also all [protected resources](../security/resources.md).

Secrets are encrypted and stored in the database. The keys to decrypt secrets are stored in Azure Key Vault. The keys are specific to each scale unit. So, two regions don't share the same keys. The keys are also rotated with every deployment of Azure DevOps.

The rights to retrieve secure keys are only given to the Azure DevOps service principals and (on special occasions) on-demand to diagnose problems. The secure storage doesn't have any certifications.

[Azure Key Vault](/azure/key-vault/general/basic-concepts) is another, more secure option for securing sensitive information. If you decide to use Azure Key Vault, you can [use it with variable groups](../release/azure-key-vault.md).
