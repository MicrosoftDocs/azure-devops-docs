---
title: Install extensions for Visual Studio Team Services | Visual Studio Team Services (Visual Studio Online)
description: Find and install extensions for Team Services from the Visual Studio Marketplace
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vsts-sub-marketplace
ms.service: vsts-marketplace
ms.assetid: dd117c5c-111f-4361-91c6-ed37fb476c75 
ms.manager: douge
ms.author: elbatk
ms.date: 1/10/2017
---

# Install extensions for Visual Studio Team Services

**Team Services**

To add new features and capabilities to your Visual Studio Team Services account, 
install extensions from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vsts). 
You can install [free, preview, or paid](./faq-extensions.md#difference) extensions, 
and you can [start extension trials](https://www.visualstudio.com/docs/setup-admin/team-services/try-additional-features-vs), 
if they're offered. 

> [!TIP]
> To learn about building your own Team Services extensions, 
> see [developing](http://aka.ms/vsoextensions) and 
> [publishing](http://aka.ms/vsmarketplace-publish) extensions.

<a name="install-extension"></a>
## Install an extension for your Team Services account

### What do I need to install extensions?
Team Services [project collection administrators or account owners](faq-extensions.md#find-owner) can install extensions. If you don't have permissions, 
you can [request extensions](request-vsts-extension.md) instead. 

Private extensions must be shared with your Team Services account to be installed. Check out the
[publishing documentation](../extend/publish/overview.md#upload) for information on how to share private extensions.

For paid extensions, you'll need an [Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/) 
to bill your purchase. If you don't have an Azure subscription, you can create a new subscription when you make your first purchase. 

> [!NOTE]
> To use an existing Azure subscription for billing,
> you must have at least Co-administrator permissions for that subscription. 
> If you don't have permissions, have an Azure Account Administrator 
> or Service Administrator go to the Azure classic portal and 
> [add you as Co-administrator](https://docs.microsoft.com/en-us/azure/billing-add-change-azure-subscription-administrator) 
> to the Azure subscription that you want to use for billing. 
> Co-administrator permissions are available only in the classic Azure portal.

Your Team Services account will reuse your Azure subscription 
for future Visual Studio Marketplace purchases 
or for team services purchased through Azure, 
like Cloud-based Load Testing.
[Where can I find more info about Azure billing?](./faq-extensions.md#billing)

0.  Sign in to the [Visual Studio Marketplace > Visual Studio Team Services](https://marketplace.visualstudio.com/vsts).
	
	<img alt="Visual Studio Marketplace" src="_img/get-vsts-extensions/marketplace.png" style="border: 1px solid #CCCCCC" />

0.	Find and select the extension that you want to install.

0.	Based on the extension that you select, 
install or buy the extension.
	
	*	For free or preview extensions, click **Install**.
	*	For extensions that you haven't paid for access yet, click **Buy**.
	*	For extensions that you've already [paid for access](./faq-extensions.md#paid-access), 
	expand **Buy**, and select **Install for paid users**. 

	**Start Trial** appears only if the extension offers a trial. 
	Learn [how to try extensions](https://www.visualstudio.com/docs/setup-admin/team-services/try-additional-features-vs).

	<img alt="Install or buy the extension" src="_img/get-vsts-extensions/test-manager-extension.png" style="border: 1px solid #CCCCCC" />

0.  Select your Team Services account to install this extension. 

	<img alt="Select Team Services account for this extension" src="_img/get-vsts-extensions/account.png" style="border: 1px solid #CCCCCC" />

	*	[Why don't I see any Team Services accounts?](./faq-extensions.md#no-accounts) 

	*	[Why can't I install this extension?](./faq-extensions.md#no-permissions) 

0.	If you chose a paid extension, 
select an [Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/) 
that you'll use to pay for extension access.
	
	<img alt="For paid extensions, select an Azure subscription for billing" src="_img/get-vsts-extensions/select-azure-sub.png" style="border: 1px solid #CCCCCC" />

	Then select the number of users who will need paid access.

	<img alt="Select number of users who need paid extension access" src="_img/get-vsts-extensions/select-paid-users.png" style="border: 1px solid #CCCCCC" />

0.	Finish your installation. 

0.	If you installed a paid extension like Test Manager, 
make sure that you [assign the extension to users who need access](assign-paid-extensions.md).
Otherwise, you can now go to your Team Services account to use your extension. 
Also, tell your team about this extension, so they can start using its capabilities too.

	<img alt="Extension installed" src="_img/get-vsts-extensions/go-to-account.png" style="border: 1px solid #CCCCCC" />

[Troubleshooting](faq-extensions.md)
