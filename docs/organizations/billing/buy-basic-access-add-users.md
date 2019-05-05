---
title: Buy Basic access for users in Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Increase the number of users when you need more than the free amount, or decrease the number of users
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.topic: quickstart
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 04/17/2019
monikerRange: '>= tfs-2013'
---

# Buy Basic access for users

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

In this quickstart, you'll learn how to pay for more users in your organization. You only need to pay for users when your team size exceeds the free limits. It's free to add users who have a [Visual Studio subscription](https://visualstudio.microsoft.com/subscriptions/). You also get five free additional users in your organization.

[Pay for additional users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser) in whatever quantity you need. When you pay for users, the total number of users that you can add as members in your organization increases. This amount is added to the free limits previously mentioned.

For a list of included features, see the [feature comparison](https://visualstudio.microsoft.com/team-services/compare-features/).

If you don't have an Azure subscription, [create a subscription](https://azure.microsoft.com/pricing/purchase-options/) before you begin.

## Prerequisites

Ensure the following is true for the user who's making a change:

* User has [project collection administrator or organization owner permissions](../accounts/faq-add-delete-users.md#find-owner)


<a name="buy-access-vs-marketplace"></a>

## Increase amount of paid users

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.
  
   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Billing**.

   ![Select Billing tab in Organization settings](_img/_shared/select-billing-organization-settings.png)

4. Enter the number of **paid users**, and then choose **Save**. You also see the number of free users that are included, which is separate.

   > [!div class="mx-imgBorder"]
![Increase the number of Basic users](_img/buy-more-basic-access/increase-number-basic-users.png)

5. Select **Confirm purchase**.

   ![Select Confirm purchase to add more Basic users](_img/buy-more-basic-access/select-confirm-purchase.png)

6. In **Organization settings**, select **Users**.

The number of users to whom you can assign Basic appears on the right side of your screen.


::: moniker range="= azure-devops"

   ![Number of users to whom you can assign Basic](_img/buy-more-basic-access/users-summary.png)

::: moniker-end

::: moniker range="<= tfs-2018"

   > [!div class="mx-imgBorder"]
![Number of users to whom you can assign Basic](_img/buy-more-basic-access/vsts-manage-users.png)

::: moniker-end

## Decrease amount of paid users

As your team contracts, you can decrease the number of paid users in your organization.

> [!NOTE]
> To reduce or cancel users who have paid Basic access for the next month, you must make your changes before the last day of the month.
> Your charges won't change until the next month because paid users are monthly purchases.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.
  
   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Billing**.

   ![Select Billing tab in Organization settings](_img/_shared/select-billing-organization-settings.png)

4. Enter a lesser quantity of **paid users**, and then choose **Save**.

   ![Decrease number of paid users](_img/buy-more-basic-access/decrease-number-basic-users.png)

## Next steps

> [!div class="nextstepaction"]
> [Buy CI/CD](buy-more-build-vs.md#prerequisites)

## Related articles

* [Add backup billing managers](add-backup-billing-managers.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)
* [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
* [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
