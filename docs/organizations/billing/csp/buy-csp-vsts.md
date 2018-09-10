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
ms.date: 09/10/2018
monikerRange: 'vsts'
---
# Buy Azure DevOps resources for your customers

[!INCLUDE [version-vsts-only](../../../_shared/version-vsts-only.md)]

Partners in the cloud service provider (CSP) program can purchase [Azure DevOps resources](https://visualstudio.microsoft.com/team-services/pricing) for
their customers, including users (who get Basic features), Test Manager, Package Management, Private Pipelines, and
Hosted Pipelines.

## Prerequisites

To set up billing for a customer who's already created an organization by using a Microsoft account identity
(in other words, not an identity in their Azure Active Directory), the customer needs to do the following steps first:

1. Your customer must [change their organization to be backed by their Azure Active Directory](../../accounts/access-with-azure-ad.md).
2. Your customer must [remove the link to the existing Azure subscription that's used for billing on their organization](../change-azure-subscription.md#remove-billing-subscription-and-purchase-again), if they had previously set up billing.

Make sure your identity hasn't been added into the customer's Azure Active Directory. If it has, you need to have the identity removed before you can go through the purchasing steps for your customer.

## Buy resources for customers

<iframe src="//channel9.msdn.com/Shows/Visual-Studio-for-CSP-Partners/CSP-How-to-buy-Azure DevOps Services/player" width="600" height="315" allowFullScreen="true" frameBorder="0"></iframe>

>[!Note]
>[Azure DevOps Services was previously called Visual Studio Team Services or VSTS](../../../user-guide/what-happened-vsts.md).

1. Sign in to the [Partner Center](https://partnercenter.microsoft.com).
1. Choose the customer for whom you're purchasing.
1. Choose **Service Management**.
1. Choose **Visual Studio Marketplace**
1. Make sure you're in the **Azure DevOps** tab, and then search for and choose **Azure DevOps Users**.
2. Select **Get** and move through the purchase process. Choose the organization that needs more users. Choose the Azure subscription to bill for the purchase. Enter the number of users that your customer needs. Review the order and complete it.

You can buy other items the same way. After choosing **Visual Studio Marketplace**, search for **Test Manager**, **Package Management**, **Hosted Pipelines**, and so on.
