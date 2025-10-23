---
title: Configure identity
description: Learn how to configure a managed identity for Azure Managed DevOps Pools.
ms.date: 11/18/2024
ms.custom: sfi-image-nochange
---

# Configure a Managed DevOps Pools identity

Azure resources can authenticate to cloud services by using user-assigned managed identities. This process is similar to using Azure Key Vault, but you don't need to store credentials in code. You can create these types of managed identities as standalone Azure resources, and they have their own lifecycle. A single resource, like a virtual machine (VM), can utilize multiple user-assigned managed identities. Similarly, multiple resources can share a single user-assigned managed identity.

## Create an identity and register it with Azure Managed DevOps Pools

The managed identity must be in the same Microsoft Entra directory as your Azure DevOps organization.

* [View your current directory in the Azure portal](/azure/azure-portal/set-preferences#directories--subscriptions).
* [View the directory for your Azure DevOps organization](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id). You can go directly to this page in the Azure DevOps portal by modifying this sample URL with your own information: `https://dev.azure.com/<your-organization>/_settings/organizationAad`.

If the two directories don't match, or your Azure DevOps organization isn't connected to Microsoft Entra, follow the steps in [Connect your organization to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id). Connect to the same directory that your Azure subscription uses.

1. Search for **Managed Identities** in the [Azure portal](https://portal.azure.com). Select **Managed Identities** from the available options, and then select **Create**. Ensure you're logged in to the tenant specified in the previous section. If not, you must switch to an Azure account with access to that tenant, or switch the tenant of your Azure DevOps organization. You can view your current **Tenant ID** by searching for **Microsoft Entra ID** in the search bar. You can also go to the Microsoft Entra ID option by using the portal menu in the upper-left of the Azure portal.

   :::image type="content" source="./media/prerequisites/create-identity-button.png" alt-text="Screenshot that shows the Create button in Managed Identities.":::

1. Select the desired options for **Subscription**, **Resource group**, **Region**, and **Name**, and then select **Review + Create**.

   :::image type="content" source="./media/prerequisites/create-identity.png" alt-text="Screenshot that shows the Create User Assigned Managed Identity window.":::

1. On the confirmation window, create the identity by selecting **Create**.

1. Go to your pool in the Azure portal, and select **Settings** > **Identity** > **Add**.

   :::image type="content" source="./media/configure-identity/add-identity-button.png" alt-text="Screenshot that shows the Add identity button.":::

1. Select your subscription. Select the managed identity from the list, and then select **Add**.

   :::image type="content" source="./media/configure-identity/add-identity.png" alt-text="Screenshot that shows the Add identity pane.":::

## Integrate with Azure Key Vault

You can use Managed DevOps Pools to fetch certificates from an Azure Key Vault instance during agent provisioning. The certificate already exists on the machine by the time it runs your Azure DevOps pipelines. To use this feature, add an identity to your pool as shown in the previous example, and assign the **Key Vault Secrets User** role to the identity.

Azure Key Vault integration is configured in **Settings** > **Security**. For more information, see [Configure security: Azure Key Vault integration](./configure-security.md#key-vault-configuration).

:::image type="content" source="./media/configure-security/key-vault-configuration-menu.png" alt-text="Screenshot that shows Azure Key Vault integration settings.":::

## See also

* [Configure pool settings](./configure-pool-settings.md)
