---
title: Team Foundation Server (TFS) extension FAQs
description: Find answers to common questions regarding extensions in Team Foundation Server (TFS)
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: b30a4604-d34d-43d4-9de9-02f1fea108ea
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 03/24/2018
monikerRange: '>= tfs-2013 < azure-devops'
---

# Team Foundation Server extension FAQs

## General

<!-- BEGINSECTION class="m-qanda" -->

<a name="difference"></a>

#### Q: What's the difference between free, preview, and paid extensions? 

Extensions that are available during preview don't incur charges, 
aren't fully supported, and have no financially-backed service level agreements. 

Paid extensions require that you buy and assign them to users 
who need access but don't have it already, for example, 
through subscription benefits. You'll use an 
[Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) 
to pay for an extension. If you don't have an Azure subscription, 
you can create a new subscription when you install your extension. 
If you have multiple subscriptions, you can select the Azure subscription that you want to use.

#### Q: How do I get other help or support for Azure subscriptions and billing?

A: Check these [topics about Azure billing and subscriptions](https://azure.microsoft.com/documentation/articles/?tag=billing), 
the [Azure Billing and Subscription FAQ](https://azure.microsoft.com/documentation/articles/billing-subscription-faq/), 
or try [Azure Support](https://azure.microsoft.com/support/options/).

[!INCLUDE [what-happened-preview-extensions](../_shared/qa-what-happened-preview-extensions.md)]

<!-- ENDSECTION --> 

## Install, request, assign, and access extensions

<!-- BEGINSECTION class="m-qanda" -->

<a name="paid-access"></a>

### Q: When do I choose Install for paid extensions? 

A: You can just choose **Install** when: 

*	You want to install a free or preview extension. 
*	You paid for access, uninstalled the extension, and want to reinstall the extension. 
*	You just need the extension for [Visual Studio subscribers](https://marketplace.visualstudio.com/subscriptions) 
who have access for that extension included with their subscriptions. These subscribers get specific extensions, like Test Manager, 
included with their subscriptions as benefits. They can use these extensions after they're installed without paid access and assignment. You only have to buy and assign extensions for users who need access.

<a name="no-install"></a>

### Q: Why can't I install extensions for TFS?

A: This might happen for these reasons: 

* You must be a member of the [Project Collection Administrators group](../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) in the project collection where you want to install extensions. If you don't have permissions, you can [request extensions](./how-to/request-tfs-extensions.md) instead.

* If you get an error that your extension is already installed or requested, check with your project collection administrator and ask them to assign the extension to you.

	<!-- image placeholder -->

<a name="no-team-project collection"></a>

### Q: Why don't I see the project collection I want?

A:	You must be a member of your project collection. 
Follow these steps to check your identity that you use 
to sign in to the Visual Studio Marketplace. 

0.	On your TFS web portal home page (```https://{server}:8080/tfs/```), 
go to the top right corner of the page, and click your user name to view your profile. 
0.	On the left side of your profile, make sure that your email address and directory are correct.
0.	Close all browser windows.
0.	Open a private or incognito browsing session.
0.	Sign in to your TFS home page (```https://{server}:8080/tfs/```) 
with the identity that's a user in the project collection 
where you want to install the extension.

	> If you're asked to choose "work or school organization" or 
	> "personal account", this means you used an email address 
	> that's the same for a Microsoft account and a "work or school account" 
	> that's managed by your organization in Azure Active Directory. 
	> Although these identities have the same email address, 
	> they're still separate identities with different profiles, 
	> security settings, and permissions.
	> 
	> Choose the identity that's the user in your project collection. 

0.	From your project collection, go to the Visual Studio Marketplace.

<a name="no-download"></a>

### Q: Why doesn't the extension I want show a download button?

A: Some extensions work only with Azure DevOps Services, not TFS, for one of these reasons:

- The extension uses Azure DevOps Services features that aren't released yet for TFS.
- The [extension manifest](../extend/develop/manifest.md) indicates that the extension 
is available only for Azure DevOps Services (targets = Microsoft.Visualstudio.Services.Cloud).
- The extension manifest indicates that the extension is an integration (targets = Microsoft.Visualstudio.Services.Integration).

<a name="no-upload"></a>

### Q: Why can't I upload extensions to TFS?

A: You must be a member of the 
[Team Foundation Administrators group](/azure/devops/server/admin/add-administrator-tfs#server) 
with [**Edit instance-level information** permissions](../organizations/security/permissions.md#server) 
for the Team Foundation Server where you want to upload extensions.

<a name="extension-access"></a>

[!INCLUDE [no-access-extension-features](../_shared/qa-no-access-extension-features.md)]

<!-- ENDSECTION --> 

<a name="get-support"></a>

[!INCLUDE [marketplace-support](_shared/qa-marketplace-support.md)]

<a name="billing"></a>

## Purchases & billing

- [Azure DevOps Services billing overview](../organizations/billing/overview.md)
- [Azure DevOps Services billing FAQ](../organizations/billing/billing-faq.md)
- [How to pay for TFS users](../organizations/billing/buy-access-tfs-test-hub.md)
