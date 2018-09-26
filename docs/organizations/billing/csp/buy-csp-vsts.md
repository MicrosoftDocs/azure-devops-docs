---
title: Buy and manage cloud service provider customer Azure DevOps subscriptions
description: Cloud service provider (CSP) partners can purchase and manage Azure DevOps for their customers
ms.prod: devops
ms.technology: devops-billing
ms.assetid: a7d8ce85-c95f-495a-82f3-9237b49b29de
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 09/12/2018
monikerRange: 'vsts'
---
# Buy Azure DevOps resources for your customers

[!INCLUDE [version-vsts-only](../../../_shared/version-vsts-only.md)]

Partners in the cloud service provider (CSP) program can purchase [Azure DevOps resources](https://visualstudio.microsoft.com/team-services/pricing) for
your customers, including users (who get Basic features), Test Manager, Azure Artifacts, Private Pipelines, and
Hosted Pipelines.

>[!Note]
>[Azure DevOps Services was previously called Visual Studio Team Services or VSTS](../../../user-guide/what-happened-vsts.md).

## Prerequisites

To set up billing for a customer who's already created an organization by using a Microsoft account identity
(in other words, not an identity in their Azure Active Directory), your customer must do the following:

1. [Change their organization to be backed by their Azure Active Directory](../../accounts/access-with-azure-ad.md).
2. [Remove the link to the existing Azure subscription that's used for billing on their organization](../change-azure-subscription.md#remove-billing-subscription-and-purchase-again), if they had previously set up billing.

Make sure your identity hasn't been added into the customer's Azure Active Directory. If it has, you need to have the identity removed before you can go through the purchasing steps for your customer.

## Buy resources for customers

<iframe src="//channel9.msdn.com/Shows/Visual-Studio-for-CSP-Partners/CSP-How-to-buy-VSTS/player" width="600" height="315" allowFullScreen="true" frameBorder="0"></iframe>

>[!Note]
>Azure DevOps Services was previously called Visual Studio Team Services (VSTS).

1. Sign in to the [Partner Center](https://partnercenter.microsoft.com).
2. Choose the customer for whom you're purchasing.
3. Choose **Service Management**.
4. Choose **Visual Studio Marketplace**.
5. Make sure you're in the **Azure DevOps** tab

   ![Visual Studio Marketplace, Azure DevOps](../_img/_shared/extensions-marketplace.png)

6. Search for and choose **Azure DevOps Services Users**.

   ![Marketplace, Azure DevOps Services Users](../_img/buy-more-basic-access/marketplace-choose-get.png)

7. Select **Get** and move through the purchase process. 
    
    a. Choose the organization that needs more users.

    b. Choose the Azure subscription to bill for the purchase.
    
    c. Enter the number of users that your customer needs. 
    
    d. Review the order and complete it.

You can buy other items the same way. After choosing **Visual Studio Marketplace**, search for **Test Manager**, **Azure Artifacts**, **Hosted Pipelines**, and so on.
