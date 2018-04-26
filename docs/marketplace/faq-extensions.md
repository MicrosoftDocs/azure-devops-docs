---
title: Troubleshooting getting extensions for VSTS
description: Troubleshooting getting and paying for extensions for VSTS
ms.prod: devops
ms.technology: vs-devops-marketplace
ms.assetid: fecee97a-b715-4d8d-b500-7b3b559eacc7 
ms.manager: douge
ms.author: elbatk
ms.date: 04/04/2018
monikerRange: '>= tfs-2017'
---

 # Troubleshooting extensions for VSTS

**VSTS** | **TFS 2017**


## General

<a name="difference"></a>

#### Q: What's the difference between free, preview, and paid extensions? 

Extensions that are available during preview don't incur charges, aren't fully supported, and have no financially-backed service level agreements. 

Paid extensions are supported and generally are charged per user per month.

[!INCLUDE [what-happened-preview-extensions](../_shared/qa-what-happened-preview-extensions.md)]


## Install, request, assign, and access extensions

#### Q: Who can install extensions for VSTS?

A: The VSTS account owner and project collection administrator can install extensions. If you don't have permissions, but you're an account member, 
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

## Troubleshooting purchases & billing

- [VSTS billing overview](../billing/overview.md)
- [VSTS billing FAQ](../billing/vsts-billing-faq.md)
- [How to pay for TFS users](../billing/buy-access-tfs-test-hub.md)
- [How to buy Visual Studio cloud subscriptions](https://docs.microsoft.com/visualstudio/subscriptions/vscloud-overview)
- [Visual Studio cloud subscription billing FAQ](https://docs.microsoft.com/visualstudio/subscriptions/vscloud-billing-faq)
- [How to buy Xamarin University](../billing/xamarin-univ.md)
