---
title: Buy and manage Cloud Service Provider customer VSTS subscriptions
description: Cloud Service Provider (CSP) partners can purchase and manage Visual Studio Team Services (VSTS) for their customers
ms.prod: devops
ms.technology: devops-billing
ms.assetid: a7d8ce85-c95f-495a-82f3-9237b49b29de
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 01/22/2018
monikerRange: 'vsts'
---
# Buy VSTS resources for your customers

**VSTS**

Partners in the CSP program can purchase [VSTS resources](https://www.visualstudio.com/team-services/pricing) for
their customers including VSTS users (who get Basic  features), Test Manager, Package Management, Private Pipelines, and
Hosted Pipelines.

## Prerequisites

If you are setting up billing for a customer who has already created a VSTS account using a Microsoft account identity
(i.e., not an identity in their Azure Active Directory), you will need the customer to take a few actions first:

1. Your customer must [change their VSTS account to be backed by their Azure Active Directory](../../accounts/access-with-azure-ad.md)
2. Your customer must [unlink the existing Azure subscription used for billing on their VSTS account](../change-azure-subscription.md), if they had set up billing previously.

Make sure that your identity has not been added into the customer's Azure Active Directory. If it has, you will need to have it removed before you can go through the purchasing steps for your customer.

## Purchasing steps

<iframe src="//channel9.msdn.com/Shows/Visual-Studio-for-CSP-Partners/CSP-How-to-buy-VSTS/player" width="600" height="315" allowFullScreen="true" frameBorder="0"></iframe>

1. Sign in to the [Partner Center](https://partnercenter.microsoft.com).
2. Choose the customer for whom you are purchasing.
3. Choose **Service Management**.
4. Choose **Visual Studio Marketplace**
5. Make sure that you're in the VSTS tab, and then search for and choose **VSTS Users**.
6. Choose the **Get** button, and move through the purchase process. Choose the VSTS account that needs more users and choose the Azure subscription to bill for the purchase.  Enter the number of users your customer needs.  Review the order and complete it.

You can purchase other items the same way by, for example, searching for **Test Manager**, **Package Management**, or **Hosted Pipelines** after choosing **Visual Studio
Marketplace**.
