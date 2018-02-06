---
title: Set up Cloud Solution Provider customer for billing in Partner Center
description: Cloud Service Provider (CSP) partners can purchase and manage various VSTS, VS, HockeyApp, etc., subscriptions for their customers
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 7c2d014a-c6b4-40e7-9217-326b6d8cd74c
ms.manager: douge
ms.author: chcomley
ms.date: 1/22/2018
---

# Set up Cloud Solution Provider customer and billing in Partner Center

**VSTS**

Partners in the [Cloud Solution Provider (CSP)](https://partner.microsoft.com/en-US/cloud-solution-provider) program 
can purchase Visual Studio cloud services for their customers 
via the [Partner Center](https://partnercenter.microsoft.com). 

To get started:

* Partners need to have the appropriate permissions role to purchase in the Partner 
Center.  [Learn more](https://msdn.microsoft.com/partner-center/create-user-accounts-and-set-permissions) about roles 
in Partner Center.
* Set up a customer tenant and CSP-based Azure subscription in Partner Center by following these steps:


<iframe src="//channel9.msdn.com/Shows/Visual-Studio-for-CSP-Partners/CSP-Customer-Provisioning/player" width="600" height="315" allowFullScreen="true" frameBorder="0"></iframe>

## Customer setup steps from video

0. First, sign in to your [Partner Center](https://partnercenter.microsoft.com) account.
). On the Dashboard, click **Add new customer**, or add a new customer from the **Customers** page.  Provide the customer's 
details and advance to the customer's subscriptions.
0. Add an Azure subscription, which the marketplace uses for billing.  Customers can have as many Azure subscriptions 
as needed. Choose **Add subscription** and then **Microsoft Azure** to add more.
0. Review your order and **submit**.

New subscriptions will initially have the subscription name "Microsoft Azure", so be sure to give subscriptions 
appropriate nicknames. Simply choose the subscription name, enter a new subscription nickname, and submit.

Now you're ready to buy Visual Studio. To purchase Visual Studio for a customer, choose the appropriate customer and 
then choose **service management**.  If you haven't added an Azure subscription for the customer, the **Visual Studio 
Marketplace** and **Manage Visual Studio Subscriptions** links won't appear.

The Visual Studio Marketplace is where you go to purchase Visual Studio cloud subscriptions and VSTS resources for your 
customers.  Choose **Manage Visual Studio Subscriptions** to assign subscriptions you've already purchased for your
customer's end user.  You can also delete existing assigned subscriptions or reassign them to a different user.


## View Visual Studio pricing for CSP partners

To view Visual Studio pricing for CSP partners, log into the [Partner Center](https://partnercenter.microsoft.com).  Choose 
**Pricing and offers** from the left nav.  Choose the current month pricing file under **usage-based services** in 
the upper right. Once the Excel spreadsheet downloads, go to the **Azure Price List** sheet, and 
filter the **Meter Category** column to **Visual Studio**.

> NOTE: 
> Partners purchase Visual Studio in the CSP program through the Partner Center. At this time, there is no API 
> for automation.

