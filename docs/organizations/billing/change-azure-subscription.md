---
title: Change the Azure subscription used for organization billing
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Unlink the Azure subscription that your organization uses for billing via the Visual Studio Marketplace
ms.prod: devops
ms.technology: devops-billing
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 04/10/2019
monikerRange: 'azure-devops'
---

# Change the Azure subscription that your organization uses for billing

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

If you want to change the Azure subscription that your organization uses for billing, complete the following steps.

## Prerequisites

Ensure the following is true for the user who's changing the subscription:

* User has [project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)
* User has [an Azure subscription that you can use to purchase](add-backup-billing-managers.md)

## Change the subscription

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Billing**.

   ![Select Billing in Organization settings](_img/_shared/select-billing-organization-settings.png)

4. Select **Change Billing**.

   ![Select Change billing](_img/_shared/select-change-billing.png)

5. Select your Azure subscription, and then select **Save**.

   ![Select your Azure subscription](_img/_shared/select-azure-subscription.png)

## Remove the billing subscription and purchase again

### Prerequisites

- [Project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)
- [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

>[!NOTE]
> When you remove the billing subscription from your organization, any paid quantities of Basic, Azure Artifacts users, Test Manager users, Microsoft-hosted CI/CD, and self-hosted CI/CD you've paid for this month continue uninterrupted until the 1st of next month, but your organization reverts immediately to the Free Tier for [cloud-based load testing](../../test/load-test/overview.md). Removing the subscription also cancels any non-Microsoft paid extensions without refund or credit.

### Remove billing subscription

1. Sign in to the [Azure portal](https://ms.portal.azure.com/#home) as organization owner and as Azure subscription co-administrator or greater.
   If you experience browser problems with Azure, make sure that you use a [supported browser](https://azure.microsoft.com/documentation/articles/azure-preview-portal-supported-browsers-devices/).
2. Go to **All services** > **Azure DevOps organizations**.

   ![Azure portal Azure DevOps organizations](../accounts/_img/_shared/azure-portal-team-services-administration.png)!

3. Select your organization, and then [Remove billing](https://ms.portal.azure.com/#home).

   ![Azure portal remove billing](../accounts/_img/_shared/azure-portal-remove-billing.png)

### Purchase again by using the new subscription

1. Make your purchases again in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab. During your first purchase, select the new Azure subscription to use for billing going forward.

>[!NOTE]
> You only incur incremental charges only if the quantities of Microsoft resources that you select exceed what you've already paid for the current month. Purchases of non-Microsoft extensions are treated as new purchases and billed immediately to your new Azure subscription.
If you wait until the first of next month to make your purchases again, your organization reverts to the free tier and users in excess of the free limits appear as expired.

## Related articles

- [Azure DevOps users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
- [Microsoft-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
- [Self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)
- [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
- [Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed)
- Any non-Microsoft services you're buying through the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops).
