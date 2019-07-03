---
title: FAQs about getting extensions for Azure DevOps
description: Frequently asked questions about getting and paying for extensions for Azure DevOps
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: fecee97a-b715-4d8d-b500-7b3b559eacc7 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/02/2019
monikerRange: '>= tfs-2015'
ms.topic: conceptual
---

# FAQs about getting extensions for Azure DevOps

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

In this article, find frequently asked questions and answers about getting extensions for Azure DevOps. Included are FAQs about installing, requesting, assigning, and accessing extensions. You can also find [links to get support](#q-how-do-i-get-support-for-the-visual-studio-marketplace).

::: moniker range="azure-devops"

## General

<a name="difference"></a>

### Q: What's the difference between free, preview, and paid extensions? 

Extensions that are available during preview don't incur charges, aren't fully supported, and have no financially backed service level agreements. 

Paid extensions are supported and generally are charged per user per month.

[!INCLUDE [what-happened-preview-extensions](../_shared/qa-what-happened-preview-extensions.md)]

## Install, request, assign, and access extensions

### Q: Who can install extensions for Azure DevOps?

A: The organization owner and project collection administrator can install extensions. If you don't have permissions, but you're an organization member, 
you can request extensions instead. 

<a name="find-owner"></a>

[!INCLUDE [find-organization-owner](../_shared/qa-find-organization-owner.md)]

[!INCLUDE [find-project-collection-administrator](../_shared/qa-find-project-collection-administrator.md)]

<a name="no-organizations"></a>

[!INCLUDE [no-organizations](../organizations/billing/_shared/qa-no-organizations.md)]

### Q: Why can't I install extensions for Azure DevOps Services?

A:	You can't install extensions for one of the following reasons.

<a name="no-permissions"></a>
*	You must have Azure DevOps Services 
[project collection administrator or organization owner permissions](#find-owner). 
If you don't have permissions, but you're an organization member, 
you can request extensions instead.

<a name="no-assignment"></a>
*	If you get an "already installed or requested" error check with your project collection administrator 
or organization owner, and ask them to assign the extension to you.

<a name="paid-access"></a>

### Q: When do I choose Install for paid extensions? 

A: You can just choose **Install** when: 

*	You want to install a free or preview extension. 
*	You paid for access, uninstalled the extension, 
and want to reinstall the extension. 
*	You just need the extension for 
[Visual Studio subscribers](https://marketplace.visualstudio.com/subscriptions) 
who have access for that extension included with their subscriptions. 
These subscribers get specific extensions  
included with their subscriptions as benefits. They can use 
these extensions after they're installed without paid access 
and assignment. You only have to buy and assign extensions 
for users who need access.

<a name="cant-assign-extensions"></a>

### Q:	Why can't I assign extensions?

A: You can't assign extensions for one of the following reasons.

*	You don't have Azure DevOps Services 
[project collection administrator or organization owner permissions](#find-owner).

* Your users don't have the correct access levels. 
Most extensions require that users have Basic access, not Stakeholder, or Basic + Test Plans.

* You assigned all the paid extensions that you bought.

### Q: Why can't I buy extensions that aren't published by Microsoft?

A: You can't buy third-party extensions because of one of the following reasons:
* Restricted countries

  In some countries, you can't use specific Azure subscriptions to buy extensions from non-Microsoft publishers. You can use those same subscriptions to buy Microsoft extensions, however. See who's able to purchase applications and services.
  
  If your country is supported in the Azure Marketplace, but not for the extension that you want to purchase, contact the extension publisher.

* Credit card required

  Unless you have an Enterprise Agreement, you must have a credit card associated with your Azure subscription. For example, you can't use a Pay-As-You-Go subscription that's set up for invoice billing.
  If you can't use your subscription, try using creating another Pay-As-You-Go Azure subscription with a credit card.
  >[!NOTE]
  >If you get the following message: "This Azure subscription doesn't have a credit card on file. Please select another subscription", select another subscription, or click Create a new Azure subscription to continue.]

* Enterprise Agreement purchases

  To buy non-Microsoft extensions from the Visual Studio Marketplace, your Azure Enterprise Agreement administrator must enable Azure Marketplace purchases. Go to the Microsoft Azure Enterprise Portal (https://ea.azure.com) >Manage > Enrollment, and enable Azure Marketplace.

  > [!NOTE]
  > If you get the following message: "The ordering organization is not eligible to purchase from azure store using Enterprise Agreement.", have your Azure Enterprise Agreement administrator go to the Microsoft Azure Enterprise Portal (https://ea.azure.com) > Manage > Enrollment, and enable Azure Marketplace.

* Credit card problems
  Purchases from non-Microsoft publishers are charged immediately, not at the end of your billing cycle, like Microsoft resources. If your credit card is declined for any reason, your purchase isn't completed. If this happens, try your purchase again, or contact your credit card customer service.

  >[!NOTE] 
  >If you get this message: "The payment provider declined the transaction. Please check your credit card information", try your purchase again later, or contact your credit card customer service.]

<a name="extension-access"></a>

[!INCLUDE [no-access-extension-features](../_shared/qa-no-access-extension-features.md)]

::: moniker-end

::: moniker range="<= azure-devops-2019"

<!-- BEGINSECTION class="m-qanda" -->

<a name="difference"></a>

### Q: What's the difference between free, preview, and paid extensions? 

A: Extensions that are available during preview don't incur charges, 
aren't fully supported, and have no financially backed service level agreements. 

Paid extensions require that you buy and assign them to users 
who need access but don't have it already, for example, 
through subscription benefits. You'll use an 
[Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) 
to pay for an extension. If you don't have an Azure subscription, 
you can create a new subscription when you install your extension. 
If you have multiple subscriptions, you can select the Azure subscription that you want to use.

### Q: How do I get other help or support for Azure subscriptions and billing?

A: Check these [articles about Azure billing and subscriptions](https://azure.microsoft.com/documentation/articles/?tag=billing), 
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
who have access for that extension included with their subscriptions. These subscribers get specific extensions included with their subscriptions as benefits. They can use these extensions after they're installed without paid access and assignment. You only have to buy and assign extensions for users who need access.

<a name="no-install"></a>

### Q: Why can't I install extensions for TFS?

A: You can't install extensions for TFS for one of the following reasons: 

* You must be a member of the [Project Collection Administrators group](../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) in the project collection where you want to install extensions. If you don't have permissions, you can [request extensions](./how-to/request-tfs-extensions.md) instead.

* If you get an error that your extension is already installed or requested, check with your project collection administrator and ask them to assign the extension to you.

	<!-- image placeholder -->

<a name="no-team-project collection"></a>

### Q: Why don't I see the project collection I want?

A:	You must be a member of your project collection. 
Follow these steps to check your identity that you use 
to sign in to the Visual Studio Marketplace. 

1. On your TFS web portal home page (```https://{server}:8080/tfs/```), 
   go to the top right corner of the page, and click your user name to view your profile. 
2. On the left side of your profile, make sure that your email address and directory are correct.
3. Close all browser windows.
4. Open a private or incognito browsing session.
5. Sign in to your TFS home page (```https://{server}:8080/tfs/```) 
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

6. From your project collection, go to the Visual Studio Marketplace.

<a name="no-download"></a>

### Q: Why doesn't the extension that I want show a download button?

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

::: moniker-end

### Q: How do I get support for the Visual Studio Marketplace?

A: Depending on the support you need, choose from the following links:

* Billing questions - [Azure billing support](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)
* Visual Studio subscriptions - [subscriptions support](https://visualstudio.microsoft.com/subscriptions/support)
* Help with Azure DevOps - [Azure DevOps support](https://azure.microsoft.com/support/devops-visual-studio-team-services)
* Help with Team Foundation Server - [TFS support](https://visualstudio.microsoft.com/team-services/tfs_support)
* General marketplace help - [Contact the Visual Studio Marketplace team](mailto:vsmarketplace@microsoft.com)

## Related articles

- [Azure DevOps Services billing overview](../organizations/billing/overview.md)
- [Azure DevOps Services billing FAQ](../organizations/billing/billing-faq.md)
- [How to pay for TFS users](../organizations/billing/buy-access-tfs-test-hub.md)
- [How to buy Visual Studio cloud subscriptions](/visualstudio/subscriptions/vscloud-overview)
- [Visual Studio cloud subscription billing FAQ](/visualstudio/subscriptions/vscloud-billing-faq)
