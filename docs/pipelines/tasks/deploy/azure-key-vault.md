---
title: Azure Key Vault task
description: Use the Azure Key Vault task in Azure Pipelines to use key vault secrets in your pipelines
ms.assetid: 591A3606-F693-4DDD-9E9D-9F11BDD48C51
ms.topic: reference
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 09/30/2021
monikerRange: '> tfs-2018'
---

# Azure Key Vault task

[!INCLUDE [version-gt-eq-2019](../../../includes/version-gt-eq-2019.md)]

### Overview

Use this task to download secrets such as authentication keys, storage account keys, data encryption keys, .PFX files, and passwords
from an [Azure Key Vault](/rest/api/keyvault/about-keys--secrets-and-certificates) instance.
The task can be used to fetch the latest values of all or a subset of secrets from the vault, and set them as variables that can be used in subsequent tasks of a pipeline.
The task is Node-based, and works with agents on Linux, macOS, and Windows.

## Prerequisites

The task has the following Prerequisites:

* An Azure subscription linked to Azure Pipelines or Team Foundation Server using the [Azure Resource Manager service connection](../../library/connect-to-azure.md).
* An [Azure Key Vault](https://azure.microsoft.com/services/key-vault/) containing the secrets.

You can create a key vault:

* In the [Azure portal](https://ms.portal.azure.com/#create/Microsoft.KeyVault)
* By using [Azure PowerShell](/azure/key-vault/key-vault-get-started)
* By using the [Azure CLI](/azure/key-vault/key-vault-manage-with-cli2)

Add secrets to a key vault:

* By using the PowerShell cmdlet [Set-AzureKeyVaultSecret](/powershell/module/azurerm.keyvault/set-azurekeyvaultsecret).
  If the secret does not exist, this cmdlet creates it. If the secret already exists, this cmdlet creates a new version of that secret.
* By using the Azure CLI. To add a secret to a key vault, for example a secret named **SQLPassword** with the value **Pa$$w0rd**, type:

  ```azurecli
  az keyvault secret set --vault-name 'ContosoKeyVault' --name 'SQLPassword' --value 'Pa$$w0rd'
  ```

When you want to access secrets:

* Ensure the Azure service connection has at least **Get** and **List** permissions
  on the vault. You can set these permissions in the [Azure portal](https://portal.azure.com):

  - Open the **Settings** blade for the vault, choose **Access policies**, then **Add new**.
  - In the **Add access policy** blade, choose **Select principal** and select the service principal for your client account.
  - In the **Add access policy** blade, choose **Secret permissions** and ensure that **Get** and **List** are checked (ticked).
  - Choose **OK** to save the changes.<p />
  
> [!NOTE]
> If you're using a Microsoft-hosted agent, you must add the IP range of the Microsoft-hosted agent to your firewall. Get the weekly list of IP ranges from the [weekly JSON file](https://www.microsoft.com/download/details.aspx?id=56519), which is published every Wednesday. The new IP ranges become effective the following Monday. For more information, see [Microsoft-hosted agents](../../agents/hosted.md?tabs=yaml&view=azure-devops&preserve-view=true#networking).
> To find the IP ranges that are required for your Azure DevOps organization, learn how to [identify the possible IP ranges for Microsoft-hosted agents](../../agents/hosted.md?tabs=yaml&view=azure-devops&preserve-view=true#to-identify-the-possible-ip-ranges-for-microsoft-hosted-agents).
    
::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/azure-key-vault-v2.md)]

::: moniker-end

## Arguments

:::moniker range="azure-devops"

| Parameter | Description |
| --------- | ----------- |
|`connectedServiceName`<br/>Azure Subscription| (Required) Select the service connection for the Azure subscription containing the Azure Key Vault instance, or create a new connection. [Learn more](../../library/connect-to-azure.md) |
|`keyVaultName`<br/>Key Vault| (Required) Select the name of the Azure Key Vault from which the secrets will be downloaded. |
|`secretsFilter`<br/>Secrets filter| (Required) A comma-separated list of secret names to be downloaded or `*` to download all secrets from the selected key vault. <br/>Default value: `*`|
|`runAsPreJob`<br/>Make secrets available to whole job| (Required) Run the task before job execution begins. Exposes secrets to all tasks in the job, not just tasks that follow this one. <br/>Default value: `false`|

:::moniker-end

:::moniker range="< azure-devops"

| Parameter | Description |
| --------- | ----------- |
|`connectedServiceName`<br/>Azure Subscription| (Required) Select the service connection for the Azure subscription containing the Azure Key Vault instance, or create a new connection. [Learn more](../../library/connect-to-azure.md) |
|`keyVaultName`<br/>Key Vault| (Required) Select the name of the Azure Key Vault from which the secrets will be downloaded. |
|`secretsFilter`<br/>Secrets filter| (Required) A comma-separated list of secret names to be downloaded or `*` to download all secrets from the selected key vault. <br/>Default value: `*`|

:::moniker-end


> [!NOTE]
> Values are retrieved as strings. For example, if there is a secret named **connectionString**,
> a task variable `connectionString` is created with the latest value of the respective secret
> fetched from Azure key vault. This variable is then available in subsequent tasks.

If the value fetched from the vault is a certificate (for example, a PFX file), the task variable
will contain the contents of the PFX in string format. You can use the following PowerShell code
to retrieve the PFX file from the task variable:
 
```powershell
$kvSecretBytes = [System.Convert]::FromBase64String($(PfxSecret))
$certCollection = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2Collection
$certCollection.Import($kvSecretBytes,$null,[System.Security.Cryptography.X509Certificates.X509KeyStorageFlags]::Exportable)
```

If the certificate file will be stored locally on the machine, it is good practice
to encrypt it with a password: 

```powershell
 #Get the file created
$password = 'your password'
$protectedCertificateBytes = $certCollection.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Pkcs12, $password)
$pfxPath = [Environment]::GetFolderPath("Desktop") + "\MyCert.pfx"
[System.IO.File]::WriteAllBytes($pfxPath, $protectedCertificateBytes)
```

For more information, see [Get started with Azure Key Vault certificates](/archive/blogs/kv/get-started-with-azure-key-vault-certificates).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

### I get a `forbidden` error on pipelines at the point of getting credentials from Azure Key Vault

This occurs if the required permissions are missing in the Azure key vault. To resolve the issue, [add an access policy with the correct permissions](/azure/key-vault/general/assign-access-policy-portal).

[!INCLUDE [qa-agents](../../includes/qa-agents.md)]

### I can't connect with Key Vault from Azure DevOps

This happens when the Key Vault firewall isn't properly configured. Make sure that the agent pool and the Azure DevOps Service itself can access the key vault. To do this, ensure that [Azure DevOps IP Ranges for your Org's region](/azure/devops/organizations/security/allow-list-ip-url) are allowed, as well as [agent IP ranges for Microsoft-hosted agents](/azure/devops/pipelines/agents/hosted#agent-ip-ranges) are allowed if using MS Hosted agents.

<!-- ENDSECTION -->
