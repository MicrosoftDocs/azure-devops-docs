---
title: Buy and install paid extensions and assign to users in VSTS | VSTS 
description: Find paid extensions in the Visual Studio Marketplace and learn how to buy, install, and assign them.
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 248a9282-487c-4ec9-b0d1-0eb1da981157
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 03/24/2018
monikerRange: 'vsts'
---

# Buy and install paid extensions and assign to users in VSTS

This Quickstart covers the following steps of buying an extension in Visual Studio Team Services (VSTS):
* Finding extensions in the Visual Studio Marketplace
* Buying a paid extension for a specific number of users
* Assigning the extension to users in your team

## Prerequisites

The first time that you set up billing for your VSTS account--whether you do this via the Azure portal or as part of making a purchase in the Visual Studio Marketplace, you will need:

0. [VSTS project collection administrator or account owner permissions](../organizations/accounts/faq-add-delete-users.md#find-owner)
0. [The **owner** or **contributor** role on your Azure subscription](../organizations/billing/add-backup-billing-managers.md)

To make subsequent edits to paid quantities in your VSTS account, you only need the owner or contributor role on your Azure subscription.


## Find and buy the extension

0.  Sign in to the [Visual Studio Marketplace > VSTS](https://marketplace.visualstudio.com/vsts).
	
	<img alt="Visual Studio Marketplace" src="_img/get-vsts-extensions/marketplace.png" style="border: 1px solid #CCCCCC" />

0.	Find and select the extension that you want to install. 

0.	Click *Buy*.
	
	> For extensions that you've already [paid for access](./faq-extensions.md#paid-access), expand **Buy**, and select **Install for paid users**. 

	![Buy the extension](_img/get-vsts-extensions/test-manager-extension.png)

0.	Select an [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) that you'll use to pay for extension access.
	
	![Select an Azure subscription for billing](_img/get-vsts-extensions/select-azure-sub.png)

	Then select the number of users who will need paid access.

	![Select number of users who need paid extension access](_img/get-vsts-extensions/select-paid-users.png)

0.	Now that you've bought the extension, you need to assign the extension to users who need access.

	![Extension installed](_img/get-vsts-extensions/go-to-account.png)

## Assign the extension to your users

After you install a paid extension, you will need to assign it to your users so they can start using it. 
To assign extensions, you'll need VSTS [project collection administrator or account owner permissions](./faq-extensions.md#find-owner).

0.	Sign in to your VSTS account: ```https://{youraccount}.visualstudio.com```.

0.	Go to **Users**.

	<img alt="Go to Users" src="../_shared/_img/users-hub-updated-ui.png" style="border: 1px solid #CCCCCC" />

0.	Most extensions require that users have at least Basic access, not Stakeholder. Check your users' access levels here:

	<img alt="Check that users have required access" src="_img/assign-extensions/check-user-access.png" style="border: 1px solid #CCCCCC" />

	To find the access that your extension requires, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

0.	To assign the extension, right click or click the ellipses (...) for the user you want to assign access to:

	![Manage extensions](_img/assign-extensions/manage-extensions.png)

0.	Assign the extension:

    ![Assign extensions](_img/assign-extensions/assign-extension.png)

	You can assign the extension to specific users up to the number allowed for free extensions or the number that you purchased for paid extensions.

0.	Tell your team about this extension, so they can start using its capabilities.

## Related information

- [Troubleshoot installing extensions](faq-extensions.md)
- [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md)
- [Add backup billing managers](../organizations/billing/add-backup-billing-managers.md)
- [Change the Azure subscription for billing](../organizations/billing/change-azure-subscription.md)
- [VSTS billing FAQ](../organizations/billing/vsts-billing-faq.md)
- [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
- [VSTS billing support](https://visualstudio.microsoft.com/team-services/support/)
