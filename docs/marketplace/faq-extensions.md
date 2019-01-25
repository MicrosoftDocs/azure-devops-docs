---
title: Troubleshooting getting extensions for Azure DevOps Services
description: Troubleshooting getting and paying for extensions for Azure DevOps Services
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: fecee97a-b715-4d8d-b500-7b3b559eacc7 
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 04/04/2018
monikerRange: '>= tfs-2017'
ms.topic: conceptual
---

# Troubleshooting extensions for Azure DevOps Services

**Azure DevOps Services** | **TFS 2017**


## General

<a name="difference"></a>

#### Q: What's the difference between free, preview, and paid extensions? 

Extensions that are available during preview don't incur charges, aren't fully supported, and have no financially-backed service level agreements. 

Paid extensions are supported and generally are charged per user per month.

[!INCLUDE [what-happened-preview-extensions](../_shared/qa-what-happened-preview-extensions.md)]


## Install, request, assign, and access extensions

#### Q: Who can install extensions for Azure DevOps Services?

A: The organization owner and project collection administrator can install extensions. If you don't have permissions, but you're an organization member, 
you can request extensions instead. 

<a name="find-owner"></a>

[!INCLUDE [find-organization-owner](../_shared/qa-find-organization-owner.md)]

[!INCLUDE [find-project-collection-administrator](../_shared/qa-find-project-collection-administrator.md)]

<a name="no-organizations"></a>

[!INCLUDE [no-organizations](../organizations/billing/_shared/qa-no-organizations.md)]

#### Q: Why can't I install extensions for Azure DevOps Services?

A:	This might happen for these reasons:

<a name="no-permissions"></a>
*	You must have Azure DevOps Services 
[project collection administrator or organization owner permissions](#find-owner). 
If you don't have permissions, but you're an organization member, 
you can request extensions instead.

<a name="no-assignment"></a>
*	If you get an error that your extension is already installed or 
requested, check with your project collection administrator 
or organization owner, and ask them to assign the extension to you.


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

*	You don't have Azure DevOps Services 
[project collection administrator or organization owner permissions](#find-owner).

*	Your users don't have the correct access levels. 
Most extensions require that users have Basic access, not Stakeholder.
For example, the Test Manager extension for Azure Test Plans requires at least Basic access.

*	You assigned all the paid extensions that you bought.

#### Q: Why can't I buy extensions not published by Microsoft?

A: This might happen for these reasons:
* Restricted countries

  In some countries, you can't use specific Azure subscriptions to buy extensions from non-Microsoft publishers, although you can use those same subscriptions to buy Microsoft extensions. See Who can purchase applications and services sold/provisioned through the Azure Marketplace?
  
  If your country is supported in the Azure Marketplace, but not for the extension that you want to purchase, please contact the extension publisher.

* Credit card required

  Unless you have an Enterprise Agreement, you must have a credit card associated with your Azure subscription. For example, you can't use a Pay-As-You-Go subscription that's set up for invoice billing.
  If you can't use your subscription, try using creating another Pay-As-You-Go Azure subscription with a credit card.
  >[!NOTE]
  >If you get this message: "This Azure subscription doesn't have a credit card on file. Please select another subscription", select another subscription, or click Create a new Azure subscription to continue.]

* Enterprise Agreement purchases

  To buy non-Microsoft extensions from the Visual Studio Marketplace, your Azure Enterprise Agreement administrator must enable Azure Marketplace purchases. Go to the Microsoft Azure Enterprise Portal (https://ea.azure.com) >Manage > Enrollment, and enable Azure Marketplace.

  >[!NOTE]
  If you get this message: "The ordering organization is not eligible to purchase from azure store using Enterprise Agreement.", have your Azure Enterprise Agreement administrator go to the Microsoft Azure Enterprise Portal (https://ea.azure.com) > Manage > Enrollment, and enable Azure Marketplace.

* Credit card problems
  Purchases from non-Microsoft publishers are charged immediately, not at the end of your billing cycle, like Microsoft resources. This means that if your credit card is declined for any reason, your purchase won't be completed. If this happens, try your purchase again, or contact your credit card customer service.

  >[!NOTE] 
  >If you get this message: "The payment provider declined the transaction. Please check your credit card information", try your purchase again later, or contact your credit card customer service.]

<a name="extension-access"></a>

[!INCLUDE [no-access-extension-features](../_shared/qa-no-access-extension-features.md)]

## Troubleshooting purchases & billing

- [Azure DevOps Services billing overview](../organizations/billing/overview.md)
- [Azure DevOps Services billing FAQ](../organizations/billing/billing-faq.md)
- [How to pay for TFS users](../organizations/billing/buy-access-tfs-test-hub.md)
- [How to buy Visual Studio cloud subscriptions](/visualstudio/subscriptions/vscloud-overview)
- [Visual Studio cloud subscription billing FAQ](/visualstudio/subscriptions/vscloud-billing-faq)
- [How to buy Xamarin University](../organizations/billing/xamarin-univ.md)
