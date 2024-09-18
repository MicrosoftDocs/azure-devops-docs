---
title: Set up billing for your organization
titleSuffix: Azure DevOps Services
ms.custom: freshness-fy22q1, engagement-fy23
description: Use an Azure subscription to configure billing and pay for users, CI/CD concurrency, and extensions for Azure DevOps.
ms.subservice: azure-devops-billing
ms.assetid: 87b994d6-2a92-46e5-b667-afe4eb198e25
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 09/17/2024
monikerRange: 'azure-devops'
---

# Set up billing

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Set up billing in Azure DevOps before you make purchases, so it's already in place once you're ready to buy. You only need to set up billing once for your organization. Once you select an Azure subscription for billing, you can purchase more user licenses by adding the user to the organization and assigning them a license.

*All services are billed via Azure*. You're not required to use any other Azure services.

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Prerequisites

* If you don't have an Azure subscription, [create one](https://azure.microsoft.com/pricing/purchase-options/).
* You must have the [Owner or Contributor role for the Azure subscription](add-backup-billing-managers.md) you want to use for billing.
* You must be a member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.

> [!NOTE]
> Azure DevOps doesn't support the [Azure Free Trial](https://azure.microsoft.com/offers/ms-azr-0044p/).

## Set up billing for your organization

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

1. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)
   
1. Select **Billing**.

   ![Screenshot showing highlighted Billing selection in Organization settings.](media/shared/select-billing-organization-settings.png)
   
1. Select **Set up billing**.

   ![Select Set up billing](media/shared/set-up-billing.png)
   
1. Select your Azure subscription, and then select **Save**.

   ![Select your Azure subscription](media/shared/select-azure-subscription.png)
   
        > [!TIP]
   > If you can't see your desired Azure Subscription, it’s likely due to the Azure subscription you’re trying to use being tied to a different Microsoft Entra ID tenant than the one you use to access your Azure DevOps organization. Here's how you can ensure this Azure Subscription will show up when configuring billing:
   > - Navigate directly to your profile (`https://aex.dev.azure.com/`).
   > - In the dropdown menu on the left, select the Microsoft Entra ID tenant that is tied to the Azure Subscription you want to use for billing
   > - Navigate back to your Azure DevOps organization
   > - Navigate to the **Billing** page under Organization Settings and click the **Set up billing** button. You should now see the subscription.

Billing is set up for your Azure DevOps organization. You can [review your individual Azure subscription bill](/azure/cost-management-billing/understand/review-individual-bill) at any time.

## Next steps

> [!div class="nextstepaction"]
> [Pay for users](buy-basic-access-add-users.md)

## Related articles

* [Change your subscription for billing](change-azure-subscription.md)
* [Add a user who can set up or change billing for Azure DevOps](add-backup-billing-managers.md)
* [Buy Azure Test Plans](buy-basic-access-add-users.md)
* [Learn about cost management and billing](/azure/cost-management-billing/cost-management-billing-overview)
