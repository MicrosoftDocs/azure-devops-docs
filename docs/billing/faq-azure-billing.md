---
title: Troubleshooting Azure billing for VSTS and Visual Studio Subscriptions 
description: Troubleshooting Azure billing for VSTS and Visual Studio Subscriptions 
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 62d94b8a-256a-4347-905a-3393f5d8a13f
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

#Troubleshooting Azure billing

**VSTS**

<a name="billing"></a>
When you buy from the Visual Studio Marketplace, 
you select an Azure subscription to use for billing. 
If you don't have an Azure subscription, 
you can [sign up](https://portal.azure.com) 
either before or during your first purchase. 
You can set up payment with a credit card 
or by invoice in some cases. Charges for your 
purchases will show up on your monthly Azure bill.

>[!NOTE]  
>You must keep your Azure subscription in good 
standing to use your Visual Studio Marketplace purchases. 


If your Azure subscription is canceled or becomes disabled, 
for example, because the credit card used for payment expires, 
then any purchases with this Azure subscription are 
deactivated on the 1st day of next month. 
To continue using your Visual Studio Marketplace purchases, 
please keep your Azure subscription active and updated.

For example, if you bought a Visual Studio Professional subscription, 
and you used an Azure subscription that became disabled, 
your Visual Studio Professional IDE stops working on 
the 1st of the following month. This also applies to annual 
Visual Studio subscriptions that are paid in full for the year. 

## Enterprise Agreement (EA) customers

###Q:	Can I use an Enterprise Agreement to buy from the Visual Studio Marketplace?

A:	Yes, please buy directly from the Visual Studio Marketplace 
where you can bill purchases to the Azure subscription that was created 
under your [Enterprise Agreement (EA)](https://azure.microsoft.com/en-us/pricing/enterprise-agreement/). 
Don't order Visual Studio Marketplace services through your reseller.

###Q: How can I tell whether I have the necessary privileges to buy services in the Visual Studio Marketplace through my organization's Enterprise Agreement?

A: The easiest approach to determine if you have the right privileges is to click the **Buy** button for a service offered in the Visual Studio Marketplace. You need to select an Azure subscription (which is a billing account) from a presented list of Azure subscriptions that are currently linked to your login. Because the name of the Azure subscription defaults to the type of billing account ("Pay-As-You-Go", "Enterprise Agreement", etc.), it is often clear if the Azure subscription is part of your Enterprise Agreement.

Another approach is to attempt to visit the [Azure Enterprise Portal](http://ea.azure.com).  If you can reach it successfully, then you already have either the Enterprise Admin or the Account Owner role. Only Account Owners can set up new Azure billing accounts in an Enterprise Agreement. If you cannot access the Azure Enterprise Portal, then please inquire within your organization to find out who your Enterprise Admin is, and ask that person to add you as an Account Owner within the Azure Enterprise Portal.  If you are unable to find this person, you can [submit a support ticket](http://aka.ms/AzureEntSupport) and request the contact information.  You need your organization's name and your Enterprise Agreement enrollment number for the support ticket.


###Q:	Can I use the Azure Monetary Commitment funds from my Enterprise Agreement to buy from the Visual Studio Marketplace?

A:	You can use these prepaid funds to pay for: 

*	[VSTS users](https://marketplace.visualstudio.com/items?itemName=ms.vss-vstsuser) 
*	[Microsoft-published extensions for VSTS and Team Foundation Server](https://marketplace.visualstudio.com/vsts)
*	[Virtual user minutes for Cloud-based Load Testing](/vsts/billing/buy-more-build-vs)
*	[HockeyApp plans](https://marketplace.visualstudio.com/subscriptions)

You can't use these funds to pay for Visual Studio cloud 
subscriptions and non-Microsoft extensions for VSTS and Team Foundation Server.

## Free Trial customers and customers using their monthly Azure credits

###Q:	Can I use the Azure Free Trial to buy from the Visual Studio Marketplace?

A:	No, you can't use the 
[Azure Free Trial](https://azure.microsoft.com/en-us/pricing/free-trial/) 
to pay for Visual Studio Marketplace purchases, 
which applies to VSTS, HockeyApp user plans, and so on. 
Instead, set up a separate Pay-As-You-Go Azure subscription,
which you can do before or during your purchase.  

###Q:	Can I use the monthly Azure credits from Visual Studio subscriptions or Visual Studio Dev Essentials to buy from the Visual Studio Marketplace?

A:	No, you can't use the monthly Azure credits from 
[Visual Studio subscriptions](https://www.visualstudio.com/products/subscriber-benefits-vs) 
and [Visual Studio Dev Essentials](https://www.visualstudio.com/products/visual-studio-dev-essentials-vs.aspx) 
to pay for Visual Studio Marketplace purchases. 
However, you can use the included Azure subscriptions to bill your purchases. 
Before you make purchases though, you must 
[remove your spending limit](https://azure.microsoft.com/pricing/spending-limits/) 
from these subscriptions.

<img alt="Spending limit" src="_shared/_img/spending-limit.png" style="border: 1px solid #CCCCCC" />

<a name="spending-limit"></a>

>[!IMPORTANT]  
>Remove your spending limit indefinitely.
This prevents disabling your Azure subscription 
when your monthly charges are billed the next month.
Otherwise, all resources billed to this subscription will be suspended,
including virtual machines and all other workloads. 

<img alt="Remove spending limit indefinitely" src="_shared/_img/remove-spending-limit.png" style="border: 1px solid #CCCCCC" />

## Other

###Q:	How often am I billed for Visual Studio subscriptions?

A: Your billing frequency depends on the subscriptions that you purchased:

*	Monthly subscriptions are prorated during the 1st month. 
After that, they're billed on the 1st day of the calendar month. 

    Increases for monthly subscriptions are prorated, 
    while updated charges for decreases take effect on the 1st of next month.

*	Annual subscriptions are always purchased in whole 
increments and are never prorated. Charges for subsequent 
years will be billed on the 1st day of the calendar month 
after the anniversary date of your subscription purchase.

[!INCLUDE [azure-bill-larger](../_shared/qa-azure-bill-larger.md)]

[!INCLUDE [azure-billing-support](_shared/qa-azure-billing-support.md)]




<a name="EligibleAzureSubscriptions"></a>

[!INCLUDE [azure-subscriptions-for-billing](../_shared/qa-azure-subscriptions-for-billing.md)]

