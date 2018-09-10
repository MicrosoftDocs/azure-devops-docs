---
title: Install free extensions for Azure DevOps Services | Azure DevOps Services (Visual Studio Online)
description: Find and install free extensions for Azure DevOps Services from the Visual Studio Marketplace
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: dd117c5c-111f-4361-91c6-ed37fb476c75 
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 10/10/2017
monikerRange: 'vsts'
---



# Install free extensions for Azure DevOps Services

**Azure DevOps Services**

To add new features and capabilities to your Azure DevOps Services organization, install extensions from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vsts). You can install [free, preview, or paid](./faq-extensions.md#difference) extensions, this quickstart goes covers installing a free extension.

> [!TIP]
> To learn about building your own Azure DevOps Services extensions, see [developing](http://aka.ms/vsoextensions) and 
> [publishing](http://aka.ms/vsmarketplace-publish) extensions.

<a name="install-extension"></a>

## What do I need to install an extension?
* Only Azure DevOps Services [project collection administrators or organization owners](faq-extensions.md#find-owner) can install extensions. If you don't have permissions, you can [request extensions](request-vsts-extension.md) instead. 
* Private extensions must be shared with your Azure DevOps Services organization to be installed. Check out the
[publishing documentation](../extend/publish/overview.md#upload) for information on how to share private extensions.

## Install the extension

0.  Sign in to the [Visual Studio Marketplace > Azure DevOps Services](https://marketplace.visualstudio.com/vsts).
	
	<img alt="Visual Studio Marketplace" src="_img/get-vsts-extensions/marketplace-test.png" style="border: 1px solid #CCCCCC" />

0.	Find and select the extension that you want to install. For this Quickstart, you can choose [**Code Search**](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).

0.	Click *Get it free*.

	![Install free extension](_img/get-vsts-extensions/install-free-extension.png)


0.  Now you're on the acquisition page, select your Azure DevOps Services organization and click *Install* to install this extension. 

	![Select Azure DevOps Services organization for this extension](_img/get-vsts-extensions/organization.png)

	*	[Why don't I see any Azure DevOps Services organizations?](./faq-extensions.md#no-organizations) 

	*	[Why can't I install this extension?](./faq-extensions.md#no-permissions) 

0. Your extension is now installed! You can now go to your Azure DevOps Services organization to use your extension. Also, tell your team about this extension, so they can start using its capabilities too.

	![Extension installed](_img/get-vsts-extensions/go-to-organization.png)


## Next Steps

You can find answers to common problems on the [troubleshooting](faq-extensions.md) page.
