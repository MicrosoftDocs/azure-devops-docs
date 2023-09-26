---
title: Change Azure subscription used for billing
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contperf-fy21q1, freshness-fy22q1, contperf-fy22q3, engagement-fy23
description: Unlink the Azure subscription that your organization uses for billing, link to a different one, and go back to free limits immediately.
ms.subservice: azure-devops-billing
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/16/2023
---

# Change your organization's billing subscription

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to change the Azure subscription that your Azure DevOps organization uses for billing. This adjustment could be necessary if your organization's subscription is linked to a user who's no longer part of the group. In such situations, you may consider transitioning to a shared subscription or eliminating the billing arrangement. You can [remove your billing subscription](#remove-your-billing-subscription) at any time. [Migrating between resource groups isn't supported](billing-faq.yml).   

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

Azure DevOps bills the newly saved subscription for your organization.

## Remove your billing subscription 

> [!IMPORTANT]
> When you remove the billing subscription from your organization, any paid quantities of Basic, Azure Artifacts users, Azure Test Plans users, Microsoft-hosted CI/CD, and self-hosted CI/CD go back to the [free tier](billing-faq.yml) of service immediately.
>  
> If you delete your organization resource in the Azure Portal, do so *after* you change the billing subscription in Azure DevOps and not before, to avoid your organization reverting to the free tier of service.

1. Sign in to your organization, choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings** > **Billing**, and then **Change billing**, following steps 1 through 4 provided in the [Change the subscription](#change-subscription) section.

2. Choose **Remove billing**, and then choose **Save**. 

Azure DevOps removes your billing subscription from your organization.

## Next steps

> [!div class="nextstepaction"]
> [Pay for users](buy-basic-access-add-users.md)

## Related articles

* [Move Azure resources to a new resource group](/azure/azure-resource-manager/management/move-resource-group-and-subscription)
* [Add a backup billing manager](add-backup-billing-managers.md)
* [Pay for Basic + Test Plans](buy-basic-access-add-users.md)
* [Pay for Azure Pipelines](../../pipelines/licensing/concurrent-jobs.md#how-much-do-parallel-jobs-cost)
* [Get Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
