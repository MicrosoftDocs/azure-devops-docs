---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 04/29/2022
ms.custom: arm2024
---

You can create a variable group that links to an existing Azure key vault and map selected Key Vault secrets to the variable group. Only the secret names are mapped to the variable group, not the secret values. Pipeline runs that link to the variable group fetch the latest secret values from the vault.

Any changes made to existing secrets in the key vault are automatically available to all the pipelines that use the variable group. However, if secrets are added to or deleted from the vault, the associated variable groups don't automatically update. You must explicitly update the secrets to include in the variable group.

Although Key Vault supports storing and managing cryptographic keys and certificates in Azure, Azure Pipelines variable group integration only supports mapping key vault secrets. Cryptographic keys and certificates aren't supported.

> [!NOTE]
> Key vaults that use Azure role-based access control (Azure RBAC) aren't supported.

### Prerequisites

- An Azure key vault that contains your secrets. You can create a key vault by using the [Azure portal](https://portal.azure.com).
- An Azure [service connection](../../library/service-endpoints.md) for your project.

### Create the variable group

1. In your Azure DevOps project, select **Pipelines** > **Library** > **+ Variable group**.
1. On the **Variable groups** page, enter a name and optional description for the variable group.
1. Enable the **Link secrets from an Azure key vault as variables** toggle.
1. Select your Azure subscription endpoint and key vault name.
1. Enable Azure DevOps to access the key vault by selecting **Authorize** next to the vault name.
1. On the **Choose secrets** screen, select specific secrets from your vault for mapping to this variable group, and then select **OK**.
1. Select **Save** to save the secret variable group.

:::image type="content" source="../../library/media/link-azure-key-vault-variable-group.png" alt-text="Screenshot of variable group with Azure key vault integration.":::

>[!NOTE]
>Your Azure service connection must have at least **Get** and **List** permissions on the key vault, which you can authorize in the preceding steps. You can also provide these permissions from the Azure portal by following these steps:
>
>1. Open **Settings** for the key vault, and then choose **Access configuration** > **Go to access policies**.
>1. On the **Access policies** page, if your Azure Pipelines project isn't listed under **Applications** with at least **Get** and **List** permissions, select **Create**.
>1. Under **Secret permissions**, select **Get** and **List**, and then select **Next**.
>1. Select your service principal, and then select **Next**.
>1. Select **Next** again, review the settings, and then select **Create**.
