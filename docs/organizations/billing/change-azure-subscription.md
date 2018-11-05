---
title: Change the Azure subscription your Azure DevOps organization uses for billing
description: Steps for how to unlink the Azure subscription your organization uses for billing via the Visual Studio Marketplace
ms.prod: devops
ms.technology: devops-billing
ms.assetid: e447adb1-6208-49f6-a488-515aa4b2fdcf
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/29/2018
monikerRange: 'vsts'
---

# Change the Azure subscription your organization uses for billing

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

If you want to use a different Azure subscription to bill purchases for your organization, you can either move it to a different Azure subscription that you have access to, or remove the current Azure subscription and then buy again using a new subscription.

## Move to a different subscription

If the target subscription is in the same Azure Active Directory as the destination subscription and you have access to both, just follow the steps below or learn more about [moving resources to new resource groups or subscriptions](/azure/azure-resource-manager/resource-group-move-resources).

1. Sign in to the [Azure portal](https://portal.azure.com).
2. Select **Resource groups**.

   ![Select Azure Resource groups](_img/change-azure-subscription/azure-resource-groups.png)

3. Select the resource group containing your organization.
4. Choose **Move** > **Move to another subscription**.

   ![Choose Move > Move to another resource group](_img/change-azure-subscription/select-move-to-another-subscription.png)

5. Select your target subscription and resource group.
6. Choose **OK**.

## Remove billing subscription and purchase again

### Prerequisites

1. [Project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)
2. [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

>[!NOTE]
> When you remove the billing subscription from your organization, any paid quantities of Basic, Azure Artifacts users, Test Manager users, Microsoft-hosted CI/CD, and self-hosted CI/CD you’ve paid for this month will continue uninterrupted until the 1st of next month, but your organization will revert immediately to the Free Tier for cloud-based load testing. Removing the subscription will also cancel any non-Microsoft paid extensions without refund or credit.

[Remove billing subscription](#remove-billing-subscription)

### Remove billing subscription

1. [Sign in to the Azure portal](https://portal.azure.com/) as organization owner and as Azure subscription co-administrator or greater.

    If you experience browser problems with Azure,
    make sure that you use a [supported browser](https://azure.microsoft.com/documentation/articles/azure-preview-portal-supported-browsers-devices/).

2. Go to **All services** > **Azure DevOps Services organizations**.

   ![Choose All services and Azure DevOps organizations](../accounts/_img/_shared/azure-portal-team-services-administration.png)

3. Select your organization and **Remove billing**.

   ![Remove billing from your organization](../accounts/_img/_shared/azure-portal-remove-billing.png)

### Purchase again using the new subscription

1. Make your purchases again in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab. During your first purchase, select the new Azure subscription to use for billing going forward.

>[!NOTE]
> You will only incur incremental charges if the quantities of Microsoft resources you select exceed what you've already paid for the current month. Purchases of non-Microsoft extensions will be treated as new purchases and billed immediately to your new Azure subscription.
If you wait until the 1st of next month to make your purchases again, your organization reverts to the Free Tier and users in excess of the free limits will appear as expired.

## Related articles

- [Azure DevOps users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser)
- [Microsoft-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines)
- [Self-hosted CI/CD](https://marketplace.visualstudio.com/items?itemName=ms.build-release-private-pipelines)
- [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web)
- [Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed)
- Any non-Microsoft services you're buying through the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops).
