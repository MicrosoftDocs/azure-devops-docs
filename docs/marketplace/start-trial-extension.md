---
title: Start free trial paid extension in Azure DevOps
description: Find paid extensions in the Marketplace and learn how to install them and start your free trial period. 
ms.topic: quickstart
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 4f017896-ab5e-4448-ade0-16d4155dd56d 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/11/2019
monikerRange: 'azure-devops'
---

# Quickstart: Start free trial for a paid extension 

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

To add new features and capabilities to your organization in Azure DevOps, install extensions from the [Visual Studio Marketplace > Azure DevOps](https://marketplace.visualstudio.com/azuredevops). You can install [free, preview, or paid](./faq-extensions.md#difference) extensions. In this quickstart, learn how to start a free trial for a preview extension.

To learn about building your own Azure DevOps extensions, see [developing](https://aka.ms/vsoextensions) and [publishing](https://aka.ms/vsmarketplace-publish) extensions.

<a name="install-extension"></a>

## Prerequisites

* Only Azure DevOps [Project Collection Administrators or organization Owners](faq-extensions.md#find-owner) can install extensions. If you don't have permissions, you can [request extensions](request-vsts-extension.md) instead.

* Private extensions must be shared with your organization to be installed. Check out the [publishing documentation](../extend/publish/overview.md#upload) for information on how to share private extensions.

## Start trial

1. Sign in to the [Marketplace > Azure DevOps](https://marketplace.visualstudio.com/azuredevops).

    ![Marketplace > Azure DevOps](../organizations/billing/_img/_shared/extensions-marketplace.png)

2.	Find and select the extension that you want to install. For this article, we choose [**Timetracker**](https://marketplace.visualstudio.com/items?itemName=Berichthaus.TfsTimetracker).

3.	Choose **Get**.

	![Get preview extension](_img/get-vsts-extensions/get-preview-extension.png)

4.  Select your organization, and then **Start 30 day free trial**.

    > You can check the Permissions this extension requires and read the Terms of Services from this page.

	![Select your organization for this extension](_img/get-vsts-extensions/click-start-trial.png)

	*	[Why don't I see any organizations?](./faq-extensions.md#no-organizations) 

	*	[Why can't I install this extension?](./faq-extensions.md#no-permissions) 

5. Your trial is now started and you can go to your organization to use your extension. Also, tell your team about this extension, so they can start using its capabilities too.

### Remaining trial period

You can check how many days are remaining in the trial period by revisiting the extension, selecting **Get**, and then choosing your organization.

![Check trial period](_img/get-vsts-extensions/check-trial-period.png)

Once the trial is done, you get an email that notifies you of the end of the trial period. The Marketplace acquisition page also shows the trial is expired. To continue to use the extension, you can choose to **Buy** the extension:

![Extension trial period ended](_img/get-vsts-extensions/trial-expired.png)

### Purchase the extension
You can buy the extension during the trial period, or you can buy it after the trial period is ended. For more information, see [Install paid Azure DevOps extension](./install-paid-extension.md).

## Next steps

> [!div class="nextstepaction"]
   > [Install paid extension](install-paid-extension.md)

## Related articles

- [FAQs](faq-extensions.md)
- [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
- [Assign access levels and extensions by group membership](../organizations/accounts/assign-access-levels-and-extensions-by-group-membership.md)
