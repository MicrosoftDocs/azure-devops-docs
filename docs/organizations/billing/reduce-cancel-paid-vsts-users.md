---
title: Change the number of paid users on your VSTS organization 
description: Change the number of paid VSTS users on your organization as your team grows or contracts (VSO, VSTS)
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 02cb8774-6d1d-4f15-8818-b56541033b1f
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 04/06/2018
monikerRange: 'vsts'
---
# Change the number of paid VSTS users on your organization

**VSTS**

As your team grows and contracts, you can increase or decrease the number of paid VSTS users in your organization.

>[!NOTE]
> To reduce or cancel users who have paid Basic access for the next month, you must make your changes before the last day of the month.
> Your charges won't change until the next month because paid users are monthly purchases.

If you don't have an Azure subscription, create a [free account](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) before you begin.

## Prerequisites

Whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

* [VSTS project collection administrator or organization owner permissions](vsts-billing-faq.md#find-owner)
* [The **owner** or **contributor** role on your Azure subscription](add-backup-billing-managers.md) - to make subsequent edits to paid quantities in your VSTS organization, you only need the owner or contributor role on your Azure subscription.

## Update the number of paid users on your organization

1. As VSTS project collection administrator or organization owner, sign in to [**Visual Studio Marketplace** > **Other** > **VSTS Users**](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser), and choose **Buy**.

   > [!div class="mx-imgBorder"]
![Go to Visual Studio Marketplace, Other, VSTS Users](_img/buy-more-basic-access/get-vsts-users-marketplace.png)

2. Select your VSTS organization, if you have multiple organizations.

   > [!div class="mx-imgBorder"]
![Select your VSTS organization](_img/buy-more-basic-access/marketplace-choose-buy.png)

3. Update the number of paid users and then choose **Continue**. To cancel all your paid users, reduce this number to zero (0).

    For example, we're going to increase our total paid users from 1 to 10:

   > [!div class="mx-imgBorder"]
![Change number of paid Basic users](_img/reduce-cancel-paid-vsts-users/change-quantity-of-users.png)
    > If you [pay for TFS client access licenses (CALs) through VSTS](buy-access-tfs-test-hub.md), make sure that you still have enough CALs for the users who need them.

4. Review your changes and then choose **Confirm**.

   > [!div class="mx-imgBorder"]
![Review your changes and confirm total paid users](_img/reduce-cancel-paid-vsts-users/review-and-confirm.png)

5. Go back to your VSTS organization to [reassign access levels for your users, if necessary](../accounts/add-organization-users-from-user-hub.md).

## Next steps

* [Add backup billing managers](add-backup-billing-managers.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)