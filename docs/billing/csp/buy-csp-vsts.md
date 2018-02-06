---
title: Buy and manage Cloud Service Provider customer VSTS subscriptions
description: Cloud Service Provider (CSP) partners can purchase and manage Visual Studio Team Services (VSTS) for their customers
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: a7d8ce85-c95f-495a-82f3-9237b49b29de
ms.manager: douge
ms.author: chcomley
ms.date: 1/22/2018
---

**VSTS**

# Buy VSTS resources for your customers

Partners in the CSP program can purchase [VSTS resources](https://www.visualstudio.com/team-services/pricing) for 
their customers including VSTS users (who get Basic  features), Test Manager, Package Management, Private Pipelines, and 
Hosted Pipelines.

# Before you begin
If you are setting up billing for a customer who has already created a VSTS account using a Microsoft account identity 
(i.e., not an identity in their Azure Active Directory), you will need the customer to take a few actions first:
0. Your customer must [change their VSTS account to be backed by their Azure Active Directory](../../accounts/access-with-azure-ad.md)
0. Your customer must [unlink the existing Azure subscription used for billing on their VSTS account](../change-azure-subscription.md), if they had set up billing previously. 

Make sure that your identity has not been added into the customer's Azure Active Directory. If it has, you will need to have it removed before you can go through the purchasing steps for your customer.

# Purchasing steps
<iframe src="//channel9.msdn.com/Shows/Visual-Studio-for-CSP-Partners/CSP-How-to-buy-VSTS/player" width="600" height="315" allowFullScreen="true" frameBorder="0"></iframe>

0. Log into the [Partner Center](https://partnercenter.microsoft.com).
0. Choose the customer for whom you are purchasing.
0. Choose **Service Management**.
0. Choose **Visual Studio Marketplace**
0. Make sure that you're in the VSTS tab, and then search for and choose **VSTS Users**.
0. Choose the **Get** button, and move through the purchase process. Choose the VSTS account that needs more users and 
choose the Azure subscription to bill for the purchase.  Enter the number of users your customer needs.  Review the 
order and complete it.

You can purchase other items the same way by, for example, searching for **Test Manager**, **Package Management**, or **Hosted Pipelines** after choosing **Visual Studio 
Marketplace**.