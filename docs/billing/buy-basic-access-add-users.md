---
title: How to pay for VSTS users (Basic) | VSTS
description: Pay for VSTS users when you need more than the free amount (Visual Studio Online, VSO, VSTS)
ms.topic: conceptual
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.manager: douge
ms.author: chcomley
ms.date: 3/28/2018
---
[//]: # (monikerRange: 'vsts')

# Pay for VSTS users (Basic)

**VSTS**

You only need to pay for users in your VSTS account when your team size exceeds the free limits. It's free to add users who have a [Visual Studio subscription](https://www.visualstudio.com/team-services/pricing/), plus you get 5 additional users free in your VSTS account.

[Pay for additional VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser) in whatever quantity you need. When you pay for VSTS users, this increases the total number of users you can add as members in your account, adding to the free limits mentioned above.

For a list of features included, see our
[feature comparison](https://www.visualstudio.com/team-services/compare-features/).

## Prerequisites

The first time that you set up billing for your VSTS account--whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

* [VSTS project collection administrator or account owner permissions](../accounts/faq-add-delete-users.md#find-owner)
* [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS account, you only need the owner or contributor role on your Azure subscription.

<a name="buy-access-vs-marketplace"></a>

## Increase the number of paid VSTS users on your account

1. Sign in to [**Visual Studio Marketplace** > **Other** > **VSTS Users**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), and choose **Get**.

   > [!div class="mx-imgBorder"]
![Go to Visual Studio Marketplace, Other, VSTS Users](_img/buy-more-basic-access/get-vsts-users-marketplace.PNG)

2. Select your VSTS account, if you have multiple accounts, and then choose **Buy**.

   > [!div class="mx-imgBorder"]
![Select your account](_img/buy-more-basic-access/select-team-services-account.PNG)

3. Confirm the Azure subscription, where your VSTS charges will be billed.

   If you have multiple Azure subscriptions, select the Azure subscription that you want to use. Or if you don't have an Azure subscription, you can create a new one.

   > [!div class="mx-imgBorder"]
![Confirm or select your azure subscription](_img/buy-more-basic-access/confirm-azure-subscription-vs-marketplace.PNG)

4. Enter the number of paid VSTS users and then choose **Confirm**. You will also see the number of free users included, which is separate.

   ![Enter the number of paid VSTS users](_img/buy-more-basic-access/select-number-users-vs-marketplace.png)

5. Go to your VSTS account and [add new users](../accounts/add-account-users-assign-access-levels.md).

   The number of users to whom you can assign Basic appears here.

   ![Number of users to whom you can assign Basic](_img/buy-more-basic-access/paid-basic-access-for-team-services-users.png)

## Next steps

* [Reduce or cancel paid VSTS users](reduce-cancel-paid-vsts-users.md)
* [Add more team members to your VSTS account](../accounts/add-account-users-from-user-hub.md)
* [Add backup billing managers](add-backup-billing-managers.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)