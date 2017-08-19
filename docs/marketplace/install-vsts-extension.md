---
title: Get extensions for Visual Studio Team Services | Visual Studio Team Services (Visual Studio Online)
description: Find and install extensions for Team Services from the Visual Studio Marketplace
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.assetid: dd117c5c-111f-4361-91c6-ed37fb476c75 
ms.manager: douge
ms.author: elbatk
ms.date: 1/10/2017
---

# Get extensions for Visual Studio Team Services

**Team Services**

PLACEHOLDER TOPIC



To add new features and capabilities to your Visual Studio Team Services account, 
install extensions from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vsts). 
You can install [free, preview, or paid](#difference) extensions, 
and you can [start extension trials](https://www.visualstudio.com/docs/setup-admin/team-services/try-additional-features-vs), 
if they're offered. 

> [!TIP]
> To learn about building your own Team Services extensions, 
> see [developing](http://aka.ms/vsoextensions) and 
> [publishing](http://aka.ms/vsmarketplace-publish) extensions.

<a name="install-extension"></a>
## Install an extension for your Team Services account

### What do I need to install extensions?
Team Services [project collection administrators or account owners](#find-owner) can install extensions. If you don't have permissions, 
you can [request extensions](#request) instead. 

Private extensions must be shared with your Team Services account to be installed. Check out the
[publishing documentation](../integrate/extensions/publish/overview.md#upload) for information on how to share private extensions.

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
[Where can I find more info about Azure billing?](#billing)

0.  Sign in to the [Visual Studio Marketplace > Visual Studio Team Services](https://marketplace.visualstudio.com/vsts).
	
	<img alt="Visual Studio Marketplace" src="_img/get-vsts-extensions/marketplace.png" style="border: 1px solid #CCCCCC" />

0.	Find and select the extension that you want to install.

0.	Based on the extension that you select, 
install or buy the extension.
	
	*	For free or preview extensions, click **Install**.
	*	For extensions that you haven't paid for access yet, click **Buy**.
	*	For extensions that you've already [paid for access](#paid-access), 
	expand **Buy**, and select **Install for paid users**. 

	**Start Trial** appears only if the extension offers a trial. 
	Learn [how to try extensions](https://www.visualstudio.com/docs/setup-admin/team-services/try-additional-features-vs).

	<img alt="Install or buy the extension" src="./_img/get-vsts-extensions/test-manager-extension.png" style="border: 1px solid #CCCCCC" />

0.  Select your Team Services account to install this extension. 

	<img alt="Select Team Services account for this extension" src="./_img/get-vsts-extensions/account.png" style="border: 1px solid #CCCCCC" />

	*	[Why don't I see any Team Services accounts?](#no-accounts) 

	*	[Why can't I install this extension?](#no-permissions) 

0.	If you chose a paid extension, 
select an [Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/) 
that you'll use to pay for extension access.
	
	<img alt="For paid extensions, select an Azure subscription for billing" src="./_img/get-vsts-extensions/select-azure-sub.png" style="border: 1px solid #CCCCCC" />

	Then select the number of users who will need paid access.

	<img alt="Select number of users who need paid extension access" src="./_img/get-vsts-extensions/select-paid-users.png" style="border: 1px solid #CCCCCC" />

0.	Finish your installation. 

0.	If you installed a paid extension like Test Manager, 
make sure that you [assign the extension to users who need access](#assign-extension).
Otherwise, you can now go to your Team Services account to use your extension. 
Also, tell your team about this extension, so they can start using its capabilities too.

	<img alt="Extension installed" src="./_img/get-vsts-extensions/go-to-account.png" style="border: 1px solid #CCCCCC" />

## Q&A

### General

<!-- BEGINSECTION class="m-qanda" -->

<a name="difference"></a>

[!INCLUDE [extensions-difference](_shared/qa-extensions-difference.md)]

[!INCLUDE [what-happened-preview-extensions](../_shared/qa-what-happened-preview-extensions.md)]

<!-- ENDSECTION --> 

### Install, request, assign, and access extensions

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Who can install extensions for Visual Studio Team Services?

A: The Team Services account owner and 
project collection administrator can install extensions. 
If you don't have permissions, but you're an account member, 
you can [request extensions](#request) instead. 

<a name="find-owner"></a>

[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]

[!INCLUDE [find-project-collection-administrator](../_shared/qa-find-project-collection-administrator.md)]

<a name="no-accounts"></a>

[!INCLUDE [no-accounts](_shared/qa-no-accounts.md)]

####Q:		Why can't I install extensions for Team Services?

A:	This might happen for these reasons:

<a name="no-permissions"></a>
*	You must have Team Services 
[project collection administrator or account owner permissions](#find-owner). 
If you don't have permissions, but you're an account member, 
you can [request extensions](#request) instead.

<a name="no-assignment"></a>
*	If you get an error that your extension is already installed or 
requested, check with your project collection administrator 
or account owner, and ask them to assign the extension to you.

	<!-- image placeholder -->

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

*	You don't have at Team Services 
[project collection administrator or account owner permissions](#find-owner).

*	Your users don't have the correct access levels. 
Most extensions require that users have Basic access, not Stakeholder.
For example, the Test Manager extension requires at least Basic access.

*	You assigned all the paid extensions that you bought.

<a name="extension-access"></a>

[!INCLUDE [no-access-extension-features](../_shared/qa-no-access-extension-features.md)]

<!-- ENDSECTION --> 

<a name="billing"></a>

### Purchases & billing

<!-- BEGINSECTION class="m-qanda" -->

[!INCLUDE [azure-billing](_shared/qa-azure-billing.md)]

<a name="bill-period"></a>

[!INCLUDE [extension-billing-frequency](_shared/qa-extension-billing-frequency.md)]

<!-- ENDSECTION --> 

### Troubleshooting purchases & billing

<a name="third-party-purchase-problems"></a>

[!INCLUDE [troubleshooting-purchases-shared-ts-tfs](_shared/qa-troubleshooting-purchases-shared-ts-tfs.md)]

<a name="cant-use-linked-azure-subscription"></a>
#### Q:	What if I already set up billing with a subscription that I can't use?

A:	If your Team Services account is linked to an Azure subscription 
that wasn't created from an Enterprise Agreement or with a credit card on file, 
you'll get this message: "Your account is linked to an Azure subscription 
that doesn't have a credit card on file. Learn how to change your subscription."

Follow these steps to create a new Azure subscription with a credit card, 
then change the Azure subscription that's linked to your Team Services account.

**Set up billing with a new Azure subscription**
0.	Use a credit card to create a new [Pay-As-You-Go Azure subscription](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/).
0.	Follow these steps to [change your Azure subscription](https://www.visualstudio.com/docs/setup-admin/team-services/set-up-billing-for-your-account-vs#change-azure-subscription) 
for your Team Services account.

<!-- temp commenting while reworking this section
<a name="no-azure-subscription-in-list"></a>
#### Q:	Why doesn't my Azure subscription appear in the list?

A:	This can happen for these reasons:

<a name="no-coadmin-permissions"></a>
*	You don't have at least Co-administrator permissions for the 
Azure subscription that you want to use, 
or you don't have access to your linked Azure subscription.

	> [!NOTE]
	> If you get this message: *"This account is already 
	> linked to an Azure subscription which you can't access"*, 
	> make sure that you have at least Co-administrator permissions 
	> for the Azure subscription that you want to use.

	To check or change your Azure subscription permissions, 
	you must visit the [Azure classic portal](https://manage.windowsazure.com). 
	Learn [how to add Co-administrators to Azure subscriptions](https://www.visualstudio.com/docs/setup-admin/team-services/set-up-billing-for-your-account-vs#AddAzureAdmin) 
	so they can manage billing for your Team Services account.

<a name="mismatch-identity"></a>
*	Your identity for your Azure subscription and Team Services account don't match.

	*	*Symptom*: You have a "personal" Microsoft account 
	and a "work or school account" that share the same email address. 
	Although both identities have the same email address, 
	they're still separate identities with different profiles, 
	security settings, and permissions.

		Follow these steps to sign in with the identity 
		that's associated with your Azure subscription 
		and Team Services account.

		0.	Close all browser windows.
		0.	Open a private or incognito browsing session.
		0.	Sign in to the Visual Studio Marketplace with 
		the identity that's associated with your Azure subscription 
		and Team Services account.

			> [!TIP]
			> If you're asked to choose "work or school account" or 
			> "personal account", this means you have the same email address 
			> for your Microsoft account and your "work or school account", 
			> which is managed in Azure Active Directory.
			> 
			> Choose the identity that's associated with your Azure subscription 
			> and your Team Services account.
	
	*	*Symptom*: Your Team Services account isn't connected to the 
	directory (tenant) in Azure Active Directory 
	that's associated with the Azure subscription that you want to use.
	
		Check whether your Team Services account is connected to a directory.

		0.	Go to your Team Services account settings.

			<img alt="Click Team Services account gear button, go to Settings" src="../_shared/_img/account-settings-new-ui.png" style="border: 1px solid #CCCCCC" />

		0.	Under **Settings**, go to **Azure Active Directory**.

			<img alt="Under Azure Active Directory, check for a directory connected to Team Services account" src="./_img/get-vsts-extensions/team-services-account-no-directory.png" style="border: 1px solid #CCCCCC" />

		Find the directory that's associated with your Azure subscription in 
		the Azure classic portal (```https://manage.windowsazure.com```).

		0.	Sign in to the [Azure classic portal](https://manage.windowsazure.com) 
		with the identity that's associated with your Azure subscription.
		0.	Go to **Settings**.
		0.	Find your Azure subscription and the associated directory.
 
			<img alt="Subscription directory" src="./_img/get-vsts-extensions/subscription-directory.png" style="border: 1px solid #CCCCCC" />

		To resolve this problem, follow these steps:

		0.	[Create a new Microsoft account](https://signup.live.com/).
		0.	[Add this Micrososft account as a Co-administrator to your Azure subscription](https://www.visualstudio.com/docs/setup-admin/team-services/set-up-billing-for-your-account-vs#AddAzureAdmin).
		0.	[Add this Microsoft account to your Team Services account](https://www.visualstudio.com/docs/setup-admin/team-services/add-account-users-assign-access-levels-team-services), 
		and assign them Stakeholder access (free and unlimited).
		0.	Add this Microsoft account to the 
		[Project Collection Administrators group](https://www.visualstudio.com/docs/setup-admin/add-administrator-tfs#project-collection).
		0. Sign in with this Microsoft account to the Visual Studio Marketplace, 
		and use this Microsoft account to purchase for your Team Services account.

<a name="mismatch-directory"></a>
*	Your Azure subscription is associated with a directory (tenant) in Azure Active Directory 
that's different than the directory that's connected to your Team Services account. 
You must identify these directories, then if you have permissions, 
change the directory for your Azure subscription to match the directory that's connected to your Team Services account.

	Find the directory that's connected to your Team Services account.

	0.	Sign in to your Team Services account (```https://{youraccount}.visualstudio.com```).
	0.	Go to your account settings.

		<img alt="Click Team Services account gear button" src="../_shared/_img/account-settings-new-ui.png" style="border: 1px solid #CCCCCC" />

	0.	Under **Settings**, go to ** Azure Active Directory** 
	to find the connected directory.

		<img alt="Under Azure Active Directory, find directory connected to Team Services account" src="./_img/get-vsts-extensions/team-services-account-directory.png" style="border: 1px solid #CCCCCC" />

	Find the directory that's associated with your Azure subscription 
	in the Azure classic portal (```https://manage.windowsazure.com```).

	0.	Sign in to the [Azure classic portal](https://manage.windowsazure.com) 
	with the identity that's associated with your Azure subscription.
	0.	Go to **Settings**.
	0.	Find your Azure subscription and the associated directory.

		<img alt="Subscription directory" src="./_img/get-vsts-extensions/subscription-directory.png" style="border: 1px solid #CCCCCC" />

	Change the directory that's associated with your Azure subscription 
	to match the directory that's connected to your Team Services account.

	0.	In the [Azure classic portal](https://manage.windowsazure.com), 
	under **Settings**, select the Azure subscription that you previously found.
	0.	Choose **Edit directory**.

		<img alt="Change directory" src="../billing/_img/manage-work-access/azuresubscriptioneditdirectory.png" style="border: 1px solid #CCCCCC" />

	0.	Change the subscription's current directory to the 
	directory that's connected to your Team Services account.

-->

[!INCLUDE [azure-bill-larger](../_shared/qa-azure-bill-larger.md)]

[!INCLUDE [azure-subscription-disabled-team-services](../_shared/qa-azure-subscription-disabled-team-services.md)]

[!INCLUDE [azure-billing-support](_shared/qa-azure-billing-support.md)]

<a name="get-support"></a>

[!INCLUDE [marketplace-support](_shared/qa-marketplace-support.md)]

