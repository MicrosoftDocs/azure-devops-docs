---
title: Change Azure subscription used for billing
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contperf-fy21q1, freshness-fy22q1, contperf-fy22q3
description: Unlink the Azure subscription that your organization uses for billing and go back to free limits immediately.
ms.technology: devops-billing
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/05/2022
---

# Change your organization's billing subscription

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to change the Azure subscription that your Azure DevOps organization uses for billing. You can remove your billing subscription at any time.   

[!INCLUDE [pricing-calculator-tip](../../includes/pricing-calculator-tip.md)]

## Prerequisites

To change or remove your billing subscription, you need the following permissions:

- [Organization Owner](../security/look-up-organization-owner.md) permissions or be a member of the [**Project Collection Administrators** group](../security/change-organization-collection-level-permissions.md).  
- [Owner or Contributor permission for an Azure subscription](add-backup-billing-managers.md), which you can use to purchase.

<a id="change-subscription" />

## Change your subscription

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Billing**.

   ![Screenshot showing Billing selection in Organization settings.](media/shared/select-billing-organization-settings.png)

4. Select **Change billing**. If you don't see the **Change billing** button, you don't have the [right permissions for access](#prerequisites).

   ![Screenshot showing highlighted Change billing button.](media/shared/select-change-billing.png)

5. Choose your Azure subscription, and then select **Save**.

   ![Screenshot showing Azure subscription selection.](media/shared/select-azure-subscription.png)

> [!NOTE]
> A user interface limitation prevents the subscription picker from displaying more than 50 subscriptions. If your user account has access to more than 50 subscriptions and the target subscription you want to change the billing for isn't visible, you can follow either of the following two workarounds:
> - [Create a new user account](../accounts/add-organization-users.md). Grant the user account [Owner or Contributor permission](add-backup-billing-managers.md) to the target subscription in the Azure portal. Add the user account to the [**Project Collection Administrators** group](../security/change-organization-collection-level-permissions.md) for the Azure DevOps organization. Use the new user account to link the organization to the target subscription.
> - Open a [support ticket](https://developercommunity.visualstudio.com/spaces/21/index.html).

## Remove your subscription 

1. Sign in to your organization, choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings** > **Billing**, and then **Change billing**, following steps 1 through 4 provided in the [Change the subscription](#change-subscription) section.

2. Choose **Remove billing**, and then choose **Save**. 

Your subscription gets removed from billing for your organization.

> [!NOTE]
> - When you remove the billing subscription from your organization, any paid quantities of Basic, Azure Artifacts users, Azure Test Plans users, Microsoft-hosted CI/CD, and self-hosted CI/CD go back to the [free tier](billing-faq.yml) of service immediately. 
> - If you delete your organization resource in the Azure Portal, do so *after* you change the billing subscription in Azure DevOps and not before, to avoid your organization reverting to the free tier of service.

## Next steps

> [!div class="nextstepaction"]
> [Pay for users](buy-basic-access-add-users.md)

## Related articles

- [Buy Basic access for users](buy-basic-access-add-users.md)
- [Buy Azure Test Plans](buy-basic-access-add-users.md)
- [Buy parallel jobs](../../pipelines/licensing/concurrent-jobs.md#how-much-do-parallel-jobs-cost)
- [Sign up for Azure Artifacts](../../artifacts/start-using-azure-artifacts.md)
