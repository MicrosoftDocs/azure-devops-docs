---
title: Buy and install paid extensions and assign to users
description: Find paid extensions in the Visual Studio Marketplace and learn how to buy, install, and assign them.
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 248a9282-487c-4ec9-b0d1-0eb1da981157
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 09/10/2018
monikerRange: '> tfs-2015'
---

# Quickstart: Buy and install paid extensions

In this quickstart, you learn how to do the following:

* Find extensions in the Visual Studio Marketplace
* Buy a paid extension for a specific number of users
* Assign the extension to users

## Prerequisites

The first time that you set up billing for your organization - whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you need the following:

1. [Azure DevOps Services project collection administrator or organization owner permissions](../organizations/accounts/faq-add-delete-users.md#find-owner)
2. [The **owner** or **contributor** role on your Azure subscription](../organizations/billing/add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your organization, you only need the owner or contributor role on your Azure subscription.


## Find and buy the extension

1.  Sign in to the [Visual Studio Marketplace > Azure DevOps Services](https://marketplace.visualstudio.com/azuredevops).
	
    ![Extensions Marketplace](../organizations/billing/_img/_shared/extensions-marketplace.png)

2.	Find and select the extension that you want to install.

3.	Choose **Buy**.
	
	> For extensions that you've already [paid for access](./faq-extensions.md#paid-access), expand **Buy**, and select **Install for paid users**.

	![Buy the extension](_img/get-vsts-extensions/test-manager-extension.png)

4.	Select an [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) that you'll use to pay for extension access.
	
	![Select an Azure subscription for billing](_img/get-vsts-extensions/select-azure-sub.png)

	Then select the number of users who will need paid access.

	![Select number of users who need paid extension access](_img/get-vsts-extensions/select-paid-users.png)

5.	Now that you've bought the extension, you need to assign the extension to users who need access.

	![Extension installed](_img/get-vsts-extensions/go-to-organization.png)

## Assign the extension to your users

After you install a paid extension, you need to assign it to your users so they can start using it.
To assign extensions, you need Azure DevOps Services [project collection administrator or organization owner permissions](./faq-extensions.md#find-owner).

::: moniker range=">= azure-devops-2019"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../_img/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users**.

   ![Users page](../_shared/_img/settings/open-organization-settings-users-vert.png)
   
4. Most extensions require that users have at least Basic access, not Stakeholder. Check your users' access levels here:

   ![Check that users have required access to extension assignment](_img/user-access-level.png)

	To find the access that your extension requires, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

5.	To assign the extension, right click or choose the ellipses (...) for the user you want to assign access to. Select **Manage extensions**.

    ![Manage extensions](_img/manage-extensions.png)

6. Assign the extension and **Save changes**.

    ![Assign extension](_img/assign-extension.png)

	You can assign the extension to specific users up to the number allowed for free extensions or the number that you purchased for paid extensions.

Tell your team about this extension, so they can start using its capabilities.

::: moniker-end

::: moniker range="<= tfs-2018"

1.	Sign in to your organization: ```https://dev.azure.com/{organization}```.

2.	Go to **Users**.

	<img alt="Go to Users" src="../_shared/_img/users-hub-updated-ui.png" style="border: 1px solid #CCCCCC" />

3.	Most extensions require that users have at least Basic access, not Stakeholder. Check your users' access levels here:

	<img alt="Check that users have required access" src="_img/assign-extensions/check-user-access.png" style="border: 1px solid #CCCCCC" />

	To find the access that your extension requires, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

4.	To assign the extension, right click or click the ellipses (...) for the user you want to assign access to.

	![Manage extensions](_img/assign-extensions/manage-extensions.png)

5.	Assign the extension and **Save changes**.

    ![Assign extensions](_img/assign-extensions/assign-extension.png)

	You can assign the extension to specific users up to the number allowed for free extensions or the number that you purchased for paid extensions.

Tell your team about this extension, so they can start using its capabilities.

::: moniker-end

## Related articles

- [Troubleshoot installing extensions](faq-extensions.md)
- [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md)
- [Add backup billing managers](../organizations/billing/add-backup-billing-managers.md)
- [Change the Azure subscription for billing](../organizations/billing/change-azure-subscription.md)
- [Azure DevOps billing FAQ](../organizations/billing/billing-faq.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
