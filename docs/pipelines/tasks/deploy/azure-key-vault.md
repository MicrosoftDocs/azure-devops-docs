---
title: Azure Key Vault task
description: Azure Key Vault task for use in the jobs of all of your build and release pipelines in Azure Pipelines and TFS
ms.assetid: 591A3606-F693-4DDD-9E9D-9F11BDD48C51
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Azure Key Vault task

**Azure Pipelines**

### Overview

Use this task in a build or release pipeline to download secrets such as authentication keys, storage account keys, data encryption keys, .PFX files, and passwords
from an [Azure Key Vault](/rest/api/keyvault/about-keys--secrets-and-certificates) instance.
The task can be used to fetch the latest values of all or a subset of secrets from the vault, and set them as variables that can be used in subsequent tasks of a pipeline.
The task is Node-based, and works with agents on Linux, macOS, and Windows.

## Prerequisites

The task has the following pre-requisites:

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

  `az keyvault secret set --vault-name 'ContosoKeyVault' --name 'SQLPassword' --value 'Pa$$w0rd'`

When you want to access secrets:

* Ensure the Azure service connection has at least **Get** and **List** permissions
  on the vault. You can set these permissions in the [Azure portal](https://portal.azure.com):

  - Open the **Settings** blade for the vault, choose **Access policies**, then **Add new**.

  - In the **Add access policy** blade, choose **Select principal** and select the service principal for your client account.

  - In the **Add access policy** blade, choose **Secret permissions** and ensure that **Get** and **List** are checked (ticked).

  - Choose **OK** to save the changes.<p />

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureKeyVaultV1.md)]
::: moniker-end

## Arguments

| Parameter | Description |
| --------- | ----------- |
| **Azure Subscription** | Required. Select the service connection for the Azure subscription containing the Azure Key Vault instance, or create a new connection. [Learn more](../../library/connect-to-azure.md) |
| **Key Vault** | Required. Select the name of the Azure Key Vault from which the secrets will be downloaded. |
| **Secrets filter** | Required. A comma-separated list of secret names to be downloaded. Use the default value `*` to download all the secrets from the vault. |

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

For more details, see [Get started with Azure Key Vault certificates](https://blogs.technet.microsoft.com/kv/2016/09/26/get-started-with-azure-key-vault-certificates).

## Contact Information

Contact [RM\_Customer\_Queries@microsoft.com](mailto:RM_Customer_Queries@microsoft.com) if you discover issues using the task, to share feedback about the task,
or to suggest new features that you would like to see.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->

