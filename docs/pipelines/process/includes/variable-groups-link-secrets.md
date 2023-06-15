---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 04/29/2022
---

Link an existing Azure key vault to a variable group and map selective vault secrets to the variable group.

1. In the **Variable groups** page, enable **Link secrets from an Azure key vault as variables**.
   You'll need an existing key vault containing your secrets. Create a key vault using the [Azure portal](https://portal.azure.com).

   ![Screenshot of variable group with Azure key vault integration.](../../library/media/link-azure-key-vault-variable-group.png)

1. Specify your Azure subscription end point and the name of the vault containing your secrets.

   Ensure the Azure service connection has at least **Get** and **List** management permissions on the vault for secrets.
   Enable Azure Pipelines to set these permissions by choosing **Authorize** next to the vault name.
   Or, set the permissions manually in the [Azure portal](https://portal.azure.com):

   1. Open **Settings** for the vault, and then choose **Access policies** > **Add new**.
   1. Select **Select principal** and then choose the service principal for your client account.
   1. Select **Secret permissions** and ensure that **Get** and **List** have check marks.
   1. Select **OK** to save the changes.

1. On the **Variable groups** page, select **+ Add** to select specific secrets from your vault for mapping to this variable group.

### Manage key vault secrets

See the following list of helpful tips for managing secrets.

- Only the secret *names* get mapped to the variable group, not the secret values. The latest secret value, fetched from the vault, is used in the pipeline run that's linked to the variable group.

- Any change made to *existing* secrets in the key vault is automatically available to all the pipelines the variable group's used in.

- When new secrets get added to or deleted from the vault, the associated variable groups aren't automatically updated. The secrets included in the variable group must be explicitly updated so the pipelines that are using the variable group get executed correctly.

- Azure Key Vault supports storing and managing cryptographic keys and secrets in Azure.
  Currently, Azure Pipelines variable group integration supports mapping only secrets from the Azure key vault. Cryptographic keys and certificates aren't supported.