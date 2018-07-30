---
title: "Cloud Solution Providers: set up billing for your customers for VSTS and Visual Studio"
description: Cloud Solution Provider (CSP) partners can purchase and manage various VSTS, VS, HockeyApp, etc., subscriptions for their customers
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 7c2d014a-c6b4-40e7-9217-326b6d8cd74c
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Cloud Solution Providers: set up billing for your customers for VSTS and Visual Studio

**VSTS**

Partners in the [Cloud Solution Provider (CSP)](https://partner.microsoft.com/en-US/cloud-solution-provider) program
can purchase VSTS, Visual Studio cloud subscriptions, and Xamarin University for their customers
via the [Partner Center](https://partnercenter.microsoft.com).

Get started:

* Partners need to have the appropriate permissions role to purchase in the Partner Center. [Learn more](https://msdn.microsoft.com/partner-center/create-user-accounts-and-set-permissions) about roles in Partner Center.
* Set up a customer and CSP-based Azure subscription in the Partner Center by following these steps:

<iframe src="//channel9.msdn.com/Shows/Visual-Studio-for-CSP-Partners/CSP-Customer-Provisioning/player" width="600" height="315" allowFullScreen="true" frameBorder="0"></iframe>

## Customer set up steps from video

0. Sign in to your [Partner Center](https://partnercenter.microsoft.com) account. 
0. On the Dashboard, choose **Add new customer**, or add a new customer from the **Customers** page. Provide the customer's details and advance to the customer's subscriptions.
0. Add an Azure subscription, which the marketplace uses for billing. Customers can have as many Azure subscriptions as needed. Choose **Add subscription** and then **Microsoft Azure** to add more.
0. Review your order and **Submit**.

New subscriptions will initially have the subscription name "Microsoft Azure", so be sure to give subscriptions
appropriate nicknames. Simply choose the subscription name, enter a new subscription nickname, and submit.

Now you're ready to buy Visual Studio. To purchase Visual Studio for a customer, choose the appropriate customer and
then choose **service management**.  If you haven't added an Azure subscription for the customer, the **Visual Studio
Marketplace** and **Manage Visual Studio Subscriptions** links won't appear.

The Visual Studio Marketplace is where you go to purchase Visual Studio cloud subscriptions and VSTS resources for your
customers.  Choose **Manage Visual Studio Subscriptions** to assign subscriptions you've already purchased for your
customer's end user.  You can also delete existing assigned subscriptions or reassign them to a different user.

## Converting your customers from other Azure billing to CSP
If your customer has been buying VSTS, Visual Studio cloud subscriptions, or Xamarin University directly through Microsoft and wants to transition to paying through you as a CSP, here's what they'll need to do:
0. Reduce paid quantities to zero.
0. Inform you of the ongoing paid quantities of each service and product to start billing on the first day of the next calendar month. In the case of Visual Studio annual cloud subscriptions, the customer should 
provide you with the month (or months) to start purchases of these subscriptions so that they can continue coverage from the point it will expire from their existing annual cloud subscription purchases.

For VSTS, see additional details about [buying VSTS through CSP](buy-csp-vsts.md).

## Converting your customers from CSP billing

If your customer chooses to stop buying VSTS, Visual Studio cloud subscriptions, or Xamarin University through you as a CSP, you will need to reduce the paid quantities to zero 
so that there will be no renewal charges when these purchases expire. Most purchases--VSTS users, Test Manager, Package Management, Visual Studio monthly cloud subscriptions, and Xamarin University--are 
valid through the end of the calendar month. With Visual Studio annual cloud subscriptions, they are valid for a year from purchase. Make sure to keep the Azure subscription used for  
making the purchases active until all the purchases have expired. Canceling the Azure subscription earlier would interrupt the customer's use of the purchases.

## How to look up CSP pricing

To view VSTS, Visual Studio cloud subscription, and Xamarin University pricing for CSP partners, log into the 
[Partner Center](https://partnercenter.microsoft.com).  Choose **Pricing and offers** from the left nav.  Choose the current month pricing file under **usage-based services** in
the upper right. Once the Excel spreadsheet downloads, go to the **Azure Price List** sheet, and
filter the **Meter Category** column to **Visual Studio**.

> [!NOTE]
> Partners purchase VSTS, Visual Studio cloud subscriptions, and Xamarin University in the CSP program through the Partner Center. 
> At this time, there is no API for automation.

