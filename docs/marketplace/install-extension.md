---
title: Install free extensions
description: Find and install free extensions for Azure DevOps
ms.topic: quickstart
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: dd117c5c-111f-4361-91c6-ed37fb476c75 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/11/2019
monikerRange: '>= tfs-2015'
---

# Quickstart: Install free extensions

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

Add new features and capabilities to your organization by installing extensions. You can install [free, preview, or paid](./faq-extensions.md#difference) extensions. In this quickstart, learn how to install a free extension.

To learn about building your own Azure DevOps extensions, see [developing](https://aka.ms/vsoextensions) and [publishing](https://aka.ms/vsmarketplace-publish) extensions.

<a name="install-extension"></a>

## Prerequisites

* Only [Project Collection Administrators or organization Owners](faq-extensions.md#find-owner) can install extensions. If you don't have permissions, you can [request extensions](request-vsts-extension.md) instead.

* Private extensions must be shared with your organization to be installed. Check out the [publishing documentation](../extend/publish/overview.md#upload) for information on how to share private extensions.

## Install the extension

1.  Sign in to the [Visual Studio Marketplace > Azure DevOps](https://marketplace.visualstudio.com/azuredevops).
   
    ![Extensions marketplace](../organizations/billing/_img/_shared/extensions-marketplace.png)

2.	Find and select the extension that you want to install. For this example, we select [**Code Search**](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).

3.	Choose **Get it free**.

	![Install free extension](_img/get-vsts-extensions/install-free-extension.png)

4.  Select your organization and select **Install** to install the extension.

	![Select organization for this extension](_img/get-vsts-extensions/organization.png)

	*	[Why don't I see any organizations?](./faq-extensions.md#no-organizations) 

	*	[Why can't I install this extension?](./faq-extensions.md#no-permissions) 

Your extension is now installed! You can now go to your organization to use your extension. Also, tell your team about this extension, so they can start using its capabilities too.

![Extension installed](_img/get-vsts-extensions/go-to-organization.png)

## Next steps

> [!div class="nextstepaction"]
> [Install paid extension](install-paid-extension.md)

## Related articles

- [FAQs](faq-extensions.md)
- [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
- [Assign access levels and extensions by group membership](../organizations/accounts/assign-access-levels-and-extensions-by-group-membership.md)
