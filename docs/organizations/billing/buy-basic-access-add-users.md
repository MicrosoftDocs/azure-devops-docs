---
title: Buy Basic access for users in the Visual Studio Marketplace
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Increase number of users when you need more than the free amount via the Visual Studio Marketplace
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.topic: quickstart
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 04/10/2019
monikerRange: '>= tfs-2013'
---

# Pay for more Basic users

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

In this quickstart, you'll learn how to pay for more users in your organization. You only need to pay for users when your team size exceeds the free limits. It's free to add users who have a [Visual Studio subscription](https://visualstudio.microsoft.com/subscriptions/). You also get five free additional users in your organization.

[Pay for additional users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser) in whatever quantity you need. When you pay for users, the total number of users that you can add as members in your organization increases. This amount is added to the free limits previously mentioned.

For a list of included features, see the [feature comparison](https://visualstudio.microsoft.com/team-services/compare-features/).

If you don't have an Azure subscription, [create a subscription](https://azure.microsoft.com/pricing/purchase-options/) before you begin.

## Prerequisites

Ensure the following is true for the user who's making a change:

* User has [project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)
* User has [an Azure subscription that you can use to purchase](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your organization, you need only the owner or contributor role on your Azure subscription.

<a name="buy-access-vs-marketplace"></a>

## Increase number of paid users

1. Sign in to [**Visual Studio Marketplace**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), go to the **Azure DevOps** tab, and then find and choose **Azure DevOps Services Users**. Select **Get**.

   ![Go to Visual Studio Marketplace, Azure DevOps tab, Other, Azure DevOps Users](_img/buy-more-basic-access/marketplace-choose-get.png)

2. Select your organization, and then choose **Buy**.

   > [!div class="mx-imgBorder"]
![Select your organization](_img/buy-more-basic-access/marketplace-choose-buy.png)

3. Confirm the Azure subscription where your Azure DevOps charges are billed, and then choose **Continue**.

   If you have multiple Azure subscriptions, select the Azure subscription that you want to use. If you don't have an Azure subscription, you can create a new one.

   > [!div class="mx-imgBorder"]
![Confirm or select your Azure subscription](_img/buy-more-basic-access/marketplace-confirm-subscription.png)

4. Enter the number of paid users, and then choose **Continue**. You also see the number of free users that are included, which is separate.

   > [!div class="mx-imgBorder"]
![Enter the number of paid users](_img/buy-more-basic-access/marketplace-select-number-of-users.png)

5. Review your order, and then choose **Confirm**.

   > [!div class="mx-imgBorder"]
![Visual Studio Marketplace review and confirm order](_img/buy-more-basic-access/marketplace-choose-confirm.png)

6. Choose **Manage users** to go to your organization and [add new users](../accounts/add-organization-users.md).

The number of users to whom you can assign Basic appears on the right side of your screen.

::: moniker range=">= azure-devops-2019"

   ![Number of users to whom you can assign Basic](_img/buy-more-basic-access/users-summary.png)

::: moniker-end

::: moniker range="<= tfs-2018"

   > [!div class="mx-imgBorder"]
![Number of users to whom you can assign Basic](_img/buy-more-basic-access/vsts-manage-users.png)

::: moniker-end

## Clean up resources

To remove users or make an adjustment, sign in to Azure DevOps. Choose **Manage users**, and then choose **Change quantity**.

## Next steps

> [!div class="nextstepaction"]
> [Buy CI/CD](buy-more-build-vs.md#prerequisites)

## Related articles

* [Reduce or cancel paid users](reduce-cancel-paid-users.md)
