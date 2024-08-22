---
title: Configure identity
description: Learn how to configure a managed identity for Managed DevOps Pools.
ms.date: 08/22/2024
---

# Configure Managed DevOps Pools identity

User assigned managed identities enable Azure resources to authenticate to cloud services, like Azure Key Vault, without storing credentials in code. These types of managed identities are created as standalone Azure resources, and have their own lifecycle. A single resource, like a Virtual Machine, can utilize multiple user assigned managed identities. Similarly, a single user assigned managed identity can be shared across multiple resources.

### Create an identity and register it with Managed DevOps Pools

The managed identity must be in the same Microsoft Entra directory as your Azure DevOps organization.

* [View your current directory in the Azure portal](/azure/azure-portal/set-preferences#directories--subscriptions)
* [View the directory for your Azure DevOps organization](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id). You can go directly to this page in the Azure DevOps portal here: `https://dev.azure.com/<your-organization>/_settings/organizationAad`.

If the two directories don't match, or your Azure DevOps organization isn't connected to Microsoft Entra, follow the steps in [Connect your organization to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id) and connect to the same directory as your Azure subscription.

1. Go to the [Azure portal](https://portal.azure.com), search for **Managed Identities**, select it from the available options, and choose **Create**. Ensure you're logged in to the tenant specified in the previous section. If not, you must switch to an Azure account with access to that tenant, or switch the tenant of your Azure DevOps organization. You can view your current Tenant ID by searching for **Microsoft Entra Id** in the search bar, or by navigating the Microsoft Entra ID option using the portal menu in the top left of the Azure portal.

   :::image type="content" source="./media/prerequisites/create-identity-button.png" alt-text="Screenshot of Managed Identities Create button.":::

1. Choose the desired **Subscription**, **Resource group**, **Region**, and **Name**, and choose **Review + Create**.

   :::image type="content" source="./media/prerequisites/create-identity.png" alt-text="Screenshot of Create User Assigned Managed Identity window.":::

1. On the confirmation window, choose **Create** to create the identity.

## See also

* [Configure pool settings](./configure-pool-settings.md)
