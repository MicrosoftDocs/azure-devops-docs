---
title: Troubleshooting getting extensions for VSTS
description: Troubleshooting getting and paying for extensions for VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.assetid: fecee97a-b715-4d8d-b500-7b3b559eacc7 
ms.manager: douge
ms.author: elbatk
ms.date: 08/01/2017
---

# Troubleshooting getting and paying for extensions for VSTS

**VSTS** | **TFS 2017**


## General

<a name="difference"></a>

[!INCLUDE [extensions-difference](_shared/qa-extensions-difference.md)]

[!INCLUDE [what-happened-preview-extensions](../_shared/qa-what-happened-preview-extensions.md)]


## Install, request, assign, and access extensions

#### Q: Who can install extensions for VSTS?

A: The VSTS account owner and 
project collection administrator can install extensions. 
If you don't have permissions, but you're an account member, 
you can request extensions instead. 

<a name="find-owner"></a>

[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]

[!INCLUDE [find-project-collection-administrator](../_shared/qa-find-project-collection-administrator.md)]

<a name="no-accounts"></a>

[!INCLUDE [no-accounts](../billing/_shared/qa-no-accounts.md)]

#### Q: Why can't I install extensions for VSTS?

A:	This might happen for these reasons:

<a name="no-permissions"></a>
*	You must have VSTS 
[project collection administrator or account owner permissions](#find-owner). 
If you don't have permissions, but you're an account member, 
you can request extensions instead.

<a name="no-assignment"></a>
*	If you get an error that your extension is already installed or 
requested, check with your project collection administrator 
or account owner, and ask them to assign the extension to you.


<a name="paid-access"></a>
#### Q: When do I choose Install for paid extensions? 

A: You can just choose **Install** when: 

*	You want to install a free or preview extension. 
*	You paid for access, uninstalled the extension, 
and want to reinstall the extension. 
*	You just need the extension for 
[Visual Studio subscribers](https://marketplace.visualstudio.com/subscriptions) 
who have access for that extension included with their subscriptions. 
These subscribers get specific extensions, like Test Manager, 
included with their subscriptions as benefits. They can use 
these extensions after they're installed without paid access 
and assignment. You only have to buy and assign extensions 
for users who need access.

<a name="cant-assign-extensions"></a>
#### Q:	Why can't I assign extensions?

A:	This might happen for several reasons.

*	You don't have at VSTS 
[project collection administrator or account owner permissions](#find-owner).

*	Your users don't have the correct access levels. 
Most extensions require that users have Basic access, not Stakeholder.
For example, the Test Manager extension requires at least Basic access.

*	You assigned all the paid extensions that you bought.

<a name="extension-access"></a>

[!INCLUDE [no-access-extension-features](../_shared/qa-no-access-extension-features.md)]


<a name="billing"></a>

## Purchases & billing


[!INCLUDE [azure-billing](../billing/_shared/qa-azure-billing.md)]

<a name="bill-period"></a>

[!INCLUDE [extension-billing-frequency](_shared/qa-extension-billing-frequency.md)]


## Troubleshooting purchases & billing

<a name="third-party-purchase-problems"></a>

[!INCLUDE [troubleshooting-purchases-shared-ts-tfs](_shared/qa-troubleshooting-purchases-shared-ts-tfs.md)]

<a name="cant-use-linked-azure-subscription"></a>
#### Q:	What if I already set up billing with a subscription that I can't use?

A:	If your VSTS account is linked to an Azure subscription 
that wasn't created from an Enterprise Agreement or with a credit card on file, 
you'll get this message: "Your account is linked to an Azure subscription 
that doesn't have a credit card on file. Learn how to change your subscription."

Follow these steps to create a new Azure subscription with a credit card, 
then change the Azure subscription that's linked to your VSTS account.

**Set up billing with a new Azure subscription**
0.	Use a credit card to create a new [Pay-As-You-Go Azure subscription](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/).
0.	Follow these steps to [change your Azure subscription](/vsts/billing/set-up-billing-for-your-account-vs#change-azure-subscription) 
for your VSTS account.

[!INCLUDE [azure-bill-larger](../_shared/qa-azure-bill-larger.md)]

[!INCLUDE [azure-subscription-disabled-team-services](../_shared/qa-azure-subscription-disabled.md)]

[!INCLUDE [azure-billing-support](_shared/qa-azure-billing-support.md)]

<a name="get-support"></a>

[!INCLUDE [marketplace-support](_shared/qa-marketplace-support.md)]

