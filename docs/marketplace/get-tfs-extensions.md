---
title: Install extensions for Visual Studio Team Foundation Server (TFS)
description: Find and install extensions for Team Foundation Server from the Visual Studio Marketplace
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 0ff7d264-68b7-4f4a-a666-b57175b5fdb8 
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 9/27/2017
monikerRange: '>= tfs-2015 < vsts'
---

 

# Install extensions for Team Foundation Server (TFS)

**TFS 2018 | TFS 2017 | TFS 2015.3**

To add new features and capabilities to your TFS, 
install extensions from the 
[Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). 

*	Working with TFS 2017? [Connect to TFS](#connected-tfs), 
so you can install [free, preview, and paid extensions](#difference).

*	Working with TFS 2015 Update 3, or disconnected from TFS 2017? 
[Download extensions, then upload them to TFS](#disconnected-tfs) to 
[install free and preview extensions](#difference). 

> [!TIP]
> To learn about building your own TFS extensions, 
> see [developing](http://aka.ms/vsoextensions) 
> and [publishing](http://aka.ms/vsmarketplace-publish) extensions.

<a name="connected-tfs"></a>

## Install extensions while connected to TFS

### What do I need to install extensions?

[Project collection administrators](../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) 
can install extensions. If you don't have permissions, you can [request extensions](#request) instead.

For paid extensions, you'll need an 
[Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) 
to bill your purchase. If you don't have an Azure subscription, 
you can create a new subscription when you make your first purchase. 

> [!NOTE]
> To use an existing Azure subscription for billing,
> you must have at least Co-administrator permissions for that subscription. 
> If you don't have permissions, have an Azure Account Administrator 
> or Service Administrator go to the Azure classic portal and 
> [add you as Co-administrator](/azure/billing-add-change-azure-subscription-administrator) 
> to the Azure subscription that you want to use for billing. 
> Co-administrator permissions are available only in the classic Azure portal.

Your project collection will reuse your Azure subscription 
for future Visual Studio Marketplace purchases. 
[Where can I find more info about Azure billing?](#billing)

0.  From your TFS home page (```https://{server}:8080/tfs/```), 
go to the project collection where you want to install the extension.

0.  From your project collection, 
go to the Visual Studio Marketplace.

	<img alt="Browse Marketplace in new navigation" src="_shared/_img/browse-marketplace2-new.png" style="border: 1px solid #CCCCCC" />

0.	Find and select the extension that you want to install.

   <img alt="Select a TFS extension" src="_img/get-tfs-extensions/connected/marketplace-select-extension.png" style="border: 1px solid #CCCCCC" />

   TFS is connected to the Marketplace, so the Marketplace automatically filters and shows on-premises extensions only.

0.	Based on the extension that you select, install or buy the extension.

	*	For free or preview extensions, click **Install**.
	*	For extensions that you haven't paid for access yet, click **Buy**.
	*	For extensions that you've already [paid for access](#paid-access), 
	expand **Buy**, and select **Install for paid users**.

   <img alt="Install or buy the extension" src="./_img/get-tfs-extensions/connected/buy-test-manager-extension.png" style="border: 1px solid #CCCCCC" />

0.	Confirm the project collection where you want to install this extension.

	<img alt="Select project collection" src="./_img/get-tfs-extensions/connected/select-team-project-collection.png" style="border: 1px solid #CCCCCC" />

0.	If you chose a paid extension, 
select the [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) 
that you'll use to pay for extension access.

	<img alt="For paid extensions, select an Azure subscription for billing" src="./_img/get-tfs-extensions/connected/select-azure-subscription.png" style="border: 1px solid #CCCCCC" />

	Then select the number of users who will need paid access to the extension.

	<img alt="Select number of users who need paid extension access" src="./_img/get-tfs-extensions/connected/select-extension-users.png" style="border: 1px solid #CCCCCC" />

0.	Finish installing your extension. 

0.	If you installed a paid extension, 
make sure to [assign the extension to users who need access](#assign-extension). 
Otherwise, you can go to your project collection to use your extension. 
Also, remember tell your team about this extension, 
so they can start using its capabilities too. 

	<img alt="Extension installed" src="./_img/get-tfs-extensions/connected/assign-extension-to-users.png" style="border: 1px solid #CCCCCC" />

   [Need help?](#get-support)

<a name="disconnected-tfs"></a>
## Install extensions for disconnected TFS

While you're disconnected from TFS, you can install free and preview extensions, 
but not paid extensions, by downloading them, uploading them to your TFS, 
and then installing them in a project collection.

### Who can upload extensions?

[Team Foundation administrators](/tfs/server/admin/add-administrator-tfs#server) 
with [**Edit instance-level information** permissions](../organizations/security/permissions.md#server) 
can upload extensions.

### Who can install extensions?

[Project collection administrators](../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) 
can install extensions. If you don't have permissions, you can [request extensions](#request) instead.

### Download from Visual Studio Marketplace

0.  Sign in to [Visual Studio Marketplace > Azure DevOps Services](https://marketplace.visualstudio.com/azuredevops).

0.	Find the extension that you want to install.

	<img alt="View" src="_img/get-tfs-extensions/standalone/marketplace-find-extension.png" style="border: 1px solid #CCCCCC" />	

	<img alt="View" src="_img/get-tfs-extensions/standalone/marketplace-find-extension2.png" style="border: 1px solid #CCCCCC" />	

0.	Download and save your extension.

	<img alt="Download and save your extension" src="./_img/get-tfs-extensions/standalone/download-extension.png" style="border: 1px solid #CCCCCC" />



### Upload to Team Foundation Server

0.	Go to your TFS home page (```https://{server}:8080/tfs/```). 

0.	Browse for your downloaded TFS extensions (```https://{server}:8080/tfs/_gallery```).

	::: moniker range="tfs-2015"

	**TFS 2015 Update 3**

	<img alt="Browse TFS extensions" src="./_img/get-tfs-extensions/standalone/browse-for-extensions.png" style="border: 1px solid #CCCCCC" />

	::: moniker-end

	::: moniker range="tfs-2017"

	<img alt="Browse TFS extensions" src="./_img/get-tfs-extensions/standalone/browse-tfs-extensions-new.png" style="border: 1px solid #CCCCCC" />

	::: moniker-end

0.	Manage your extensions.

	<img alt="Manage extensions" src="./_img/get-tfs-extensions/standalone/manage-extensions.png" style="border: 1px solid #CCCCCC" />

0. Upload the extension that you downloaded.

	<img alt="Find and upload your downloaded extension" src="./_img/get-tfs-extensions/standalone/upload-extension.png" style="border: 1px solid #CCCCCC" />

	[Why can't I upload extensions?](#no-upload)

### Install in your project collection

0. Select and install the extension that you just uploaded. 

	<img alt="Select extension, then click Install" src="./_img/get-tfs-extensions/standalone/install-extension.png" style="border: 1px solid #CCCCCC" />

0. Choose the project collection where you want to install the extension.

	<img alt="Select project collection, click Continue" src="./_img/get-tfs-extensions/standalone/choose-collection.png" style="border: 1px solid #CCCCCC" />

0. Review the permissions that the extension will get when it's installed. Finish installing your extension.

	<img alt="Review the permissions granted to this extension" src="./_img/get-tfs-extensions/standalone/confirm.png" style="border: 1px solid #CCCCCC" />

   You can now go to your project collection to use your extension. Also, remember to tell your team about this extension, so they can start using its capabilities too. 

## Pre-installed extensions (first-party) for disconnected TFS

>[!NOTE] 
> This section is only for adding pre-installed extensions (first-party), if you're installing extensions that
> aren't pre-installed with TFS, head to the [Disconnected TFS section](#install-extensions-for-disconnected-tfs).

With first-party extensions that come pre-installed with TFS, there is an alternate method of installation that prevents compatability issues.

In this case, you can manage extensions in disconnected TFS by following the steps below:
0. Hover over the shopping bag icon and select **Manage extensions**

	![Manage extensions](./_img/get-tfs-extensions/standalone/manage-extensions.png)
0. Once on the Extensions page, select **Browse local extensions**

	![Browse local extensions](./_img/get-tfs-extensions/standalone/browse-local-extensions.png)
0.	Scroll down until you see the Plan and track category which will include **Delivery Plans**. Select **Delivery Plans**

	![Delivery plans extension](./_img/get-tfs-extensions/standalone/delivery-plans.png)
0. This will redirect you to a local extension page for Delivery Plans where you will find the button to **Install**. This works when you are both online and offline

	![Delivery plans extension gallery](./_img/get-tfs-extensions/standalone/delivery-plans-gallery.png)
