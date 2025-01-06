---
title: Configure identity
description: Learn how to configure a managed identity for Managed DevOps Pools.
ms.date: 11/18/2024
---

# Configure Managed DevOps Pools identity

User assigned managed identities enable Azure resources to authenticate to cloud services, like Azure Key Vault, without storing credentials in code. These types of managed identities are created as standalone Azure resources, and have their own lifecycle. A single resource, like a Virtual Machine, can utilize multiple user assigned managed identities. Similarly, a single user assigned managed identity can be shared across multiple resources.

## Create an identity and register it with Managed DevOps Pools

The managed identity must be in the same Microsoft Entra directory as your Azure DevOps organization.

* [View your current directory in the Azure portal](/azure/azure-portal/set-preferences#directories--subscriptions)
* [View the directory for your Azure DevOps organization](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id). You can go directly to this page in the Azure DevOps portal here: `https://dev.azure.com/<your-organization>/_settings/organizationAad`.

If the two directories don't match, or your Azure DevOps organization isn't connected to Microsoft Entra, follow the steps in [Connect your organization to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id) and connect to the same directory as your Azure subscription.

1. Go to the [Azure portal](https://portal.azure.com), search for **Managed Identities**, select it from the available options, and choose **Create**. Ensure you're logged in to the tenant specified in the previous section. If not, you must switch to an Azure account with access to that tenant, or switch the tenant of your Azure DevOps organization. You can view your current Tenant ID by searching for **Microsoft Entra Id** in the search bar, or by navigating the Microsoft Entra ID option using the portal menu in the top left of the Azure portal.

   :::image type="content" source="./media/prerequisites/create-identity-button.png" alt-text="Screenshot of Managed Identities Create button.":::

1. Choose the desired **Subscription**, **Resource group**, **Region**, and **Name**, and choose **Review + Create**.

   :::image type="content" source="./media/prerequisites/create-identity.png" alt-text="Screenshot of Create User Assigned Managed Identity window.":::

1. On the confirmation window, choose **Create** to create the identity.

1. Go to your Managed DevOps Pool in the Azure portal, and choose **Settings > Identity**, **Add**.

   :::image type="content" source="./media/configure-identity/add-identity-button.png" alt-text="Screenshot of Add identity button.":::

1. Choose your subscription, choose the managed identity from the list, and choose **Add**.

   :::image type="content" source="./media/configure-identity/add-identity.png" alt-text="Screenshot of Add identity pane.":::

## Azure Key Vault integration

Managed DevOps Pools offers the ability to fetch certificates from an Azure Key Vault during agent provisioning, which means the certificates will already exist on the machine by the time it runs your Azure DevOps pipelines. To use this feature, add an identity to your pool as shown in the previous example, and assign the **Key Vault Secrets User** role to the identity.

Key Vault integration is configured in **Settings > Security**. For more information, see [Configure security - Key Vault integration](./configure-security.md#key-vault-configuration).

:::image type="content" source="./media/configure-security/key-vault-configuration-menu.png" alt-text="Screenshot of Azure Key Vault integration settings.":::

## See also

* [Configure pool settings](./configure-pool-settings.md)
