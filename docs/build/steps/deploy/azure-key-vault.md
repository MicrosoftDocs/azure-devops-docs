---
title: Team Services and Team Foundation Server Build and Deploy - Azure Key Vault task
description: Team Services and Team Foundation Server build task step to download secrets such as authentication keys, storage account keys, data encryption keys, .PFX files, and passwords from an Azure key vault
ms.prod: vs-devops-alm
ms.technology: vs-devops-release
ms.assetid: 591A3606-F693-4DDD-9E9D-9F11BDD48C51
ms.manager: douge
ms.author: ahomer
ms.date: 01/17/2017
---

# Deploy: Azure Key Vault

### Overview

![icon](_img/azure-key-vault-icon.png) This task is used to download secrets such as authentication keys, storage account keys, data encryption keys, .PFX files, and passwords
from an [Azure Key Vault](https://docs.microsoft.com/en-us/rest/api/keyvault/about-keys--secrets-and-certificates?redirectedfrom=MSDN#key-vault-secrets-1) instance.
The task can be used to fetch the latest values of all or a subset of secrets from the vault, and set them as variables that can be used in subsequent tasks of a definition.
The task is Node-based, and works with Xplat agents (Windows, Linux, or OSX).

## Pre-requisites for the task

The task has the following pre-requisites:

* An Azure subscription linked to Team Foundation Server or Visual Studio Team Services using the [Azure Resource Manager service endpoint](../../concepts/library/service-endpoints.md#sep-azure-rm).

* An [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/) containing the secrets.

You can create a key vault:

* In the [Azure portal](https://ms.portal.azure.com/#create/Microsoft.KeyVault)

* By using [Azure PowerShell](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-get-started#a-idvaultacreate-a-key-vault)

* By using the [Azure CLI](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-manage-with-cli2#create-a-key-vault)

Add secrets to a key vault:

* By using the PowerShell cmdlet [Set-AzureKeyVaultSecret](https://docs.microsoft.com/en-us/powershell/module/azurerm.keyvault/set-azurekeyvaultsecret?view=azurermps-4.0.0).
  If the secret does not exist, this cmdlet creates it. If the secret already exists, this cmdlet creates a new version of that secret.

* By using the Azure CLI. To add a secret to a key vault, for example a secret named **SQLPassword** with the value **Pa$$w0rd**, type:

  `az keyvault secret set --vault-name 'ContosoKeyVault' --name 'SQLPassword' --value 'Pa$$w0rd'`

When you want to access secrets:

* Ensure the Azure endpoint has at least **Get** and **List** permissions
  on the vault. You can set these permissions in the [Azure portal](https://portal.azure.com):

  - Open the **Settings** blade for the vault, choose **Access policies**, then **Add new**.

  - In the **Add access policy** blade, choose **Select principal** and select the service principal for your client account.

  - In the **Add access policy** blade, choose **Secret permissions** and ensure that **Get** and **List** are checked (ticked).

  - Choose **OK** to save the changes.<p />

### Parameters of the task:

| Parameter | Description |
| --------- | ----------- |
| **Azure Subscription** | Required. Select the service connection for the Azure subscription containing the Azure Key Vault instance, or create a new connection. [Learn more](../../concepts/library/service-endpoints.md#sep-azure-rm) |
| **Key Vault** | Required. Select the name of the Azure Key Vault from which the secrets will be downloaded. |
| **Secrets filter** | Required. A comma-separated list of secret names to be downloaded. Use the default value `*` to download all the secrets from the vault. |
 
## Contact Information

Contact [RM\_Customer\_Queries@microsoft.com](mailto:RM_Customer_Queries@microsoft.com) if you discover issues using the task, to share feedback about the task,
or to suggest new features that you would like to see.

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]

