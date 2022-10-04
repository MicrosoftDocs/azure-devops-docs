---
title: Change Azure subscription used for billing
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contperf-fy21q1, freshness-fy22q1, contperf-fy22q3, engagement-fy23
description: Unlink the Azure subscription that your organization uses for billing and go back to free limits immediately.
ms.subservice: azure-devops-billing
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 10/04/2022
---

# Change your organization's billing subscription

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to change the Azure subscription that your Azure DevOps organization uses for billing. You might do so if your organization is tied to a subscription of a user who's left the organization. In this case, you'd likely switch to a common subscription or remove the billing. You can [remove your billing subscription](#remove-your-billing-subscription) at any time.   

See also the following related articles:
- [Pay for users](buy-basic-access-add-users.md)
- [Buy access to Azure Test Plans](buy-access-tfs-test-hub.md)
- [Buy parallel jobs](../../pipelines/licensing/concurrent-jobs.md#how-much-do-parallel-jobs-cost)
- [Sign up for Azure Artifacts](../../artifacts/start-using-azure-artifacts.md)
- [Try Azure Test Plans](try-additional-features-vs.md)

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Prerequisites

Have the following permissions to change your organization's billing subscription:

- [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.
- [Owner or Contributor permission for the Azure subscription](add-backup-billing-managers.md), which you can use to purchase.

<a id="change-subscription" />

## Change your billing subscription

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing highlighted Organization settings button.":::

3. Select **Billing** > **Change billing**. If you don't see the **Change billing** button, you don't have the [right permissions for access](#prerequisites).

   :::image type="content" source="media/shared/select-change-billing.png" alt-text="Screenshot showing highlighted Billing and Change billing buttons.":::

4. Choose your Azure subscription, and then select **Save**.

   :::image type="content" source="media/shared/select-azure-subscription.png" alt-text="Screenshot showing Azure subscription selection.":::

> [!NOTE]
> If your organization has access to more than 50 subscriptions and you can't find the target subscription, do one of the following workarounds for this UI limitation:
> 1. [Create a new user account](../accounts/add-organization-users.md). 
> 2. Grant the user account [Owner or Contributor permission](add-backup-billing-managers.md) to the target subscription in the Azure portal. 
> 3. Add the user account to the [**Project Collection Administrators** group](../security/change-organization-collection-level-permissions.md) for the Azure DevOps organization. 
> 4. Use the new user account to link the organization to the target subscription.
> 
> - Or open a [support ticket](https://developercommunity.visualstudio.com/spaces/21/index.html).

Azure DevOps bills the newly saved subscription for your organization.

## Remove your billing subscription 

> [!IMPORTANT]
> When you remove the billing subscription from your organization, any paid quantities of Basic, Azure Artifacts users, Azure Test Plans users, Microsoft-hosted CI/CD, and self-hosted CI/CD go back to the [free tier](billing-faq.yml) of service immediately.
>  
>If you delete your organization resource in the Azure Portal, do so *after* you change the billing subscription in Azure DevOps and not before, to avoid your organization reverting to the free tier of service.

1. Sign in to your organization, choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings** > **Billing**, and then **Change billing**, following steps 1 through 4 provided in the [Change the subscription](#change-subscription) section.

2. Choose **Remove billing**, and then choose **Save**. 

Azure DevOps removes your billing subscription from your organization.

## Next steps

> [!div class="nextstepaction"]
> [Pay for users](buy-basic-access-add-users.md)

## Related articles

- [Buy Azure Test Plans](buy-basic-access-add-users.md)
- [Buy parallel jobs](../../pipelines/licensing/concurrent-jobs.md#how-much-do-parallel-jobs-cost)
- [Sign up for Azure Artifacts](../../artifacts/start-using-azure-artifacts.md)
- [Add a backup billing manager](add-backup-billing-managers.md)
