---
title: Troubleshoot adding and deleting account users in the VSTS user hub
description: Permissions required to manage users and user access, find project collection administrator or account owner, manage Visual Studio subscriptions
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 7107fb6c-c132-45c2-a0d1-d44e9270e907
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/6/2017
monikerRange: 'vsts'
---


# Troubleshoot adding and deleting account users in the VSTS user hub

**VSTS**

## Permissions 

#### Q: Why can't I manage users?

A:  To access the Users hub and manage users, you must have 
[VSTS project collection administrator or account owner permissions](#find-owner).


<a name="find-owner"></a>

[!INCLUDE [find-project-collection-administrator](../../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-account-owner](../../_shared/qa-find-account-owner.md)]


<a name="users-delay"></a>

[!INCLUDE [user-delay](../../_shared/qa-user-delay.md)]


## Visual Studio subscriptions

<a name="MSDNSubscriber"></a>

#### Q: When do I select "Visual Studio/MSDN Subscriber"?

A: Assign this access level to users who have active and valid 
[Visual Studio subscriptions](#EligibleMSDNSubscriptions). 
You'll need the email address that's associated with this subscription.
VSTS automatically recognizes and validates Visual Studio 
subscribers who have VSTS as a benefit.

For example, if you select "Visual Studio/MSDN Subscriber", 
but you don't have a valid and active Visual Studio subscription, you can only 
[work as a stakeholder](../../organizations/security/get-started-stakeholder.md).

<a name="EligibleMSDNSubscriptions"></a>

#### Q: Which Visual Studio subscriptions can I use with VSTS?

A:  See [VSTS benefits for Visual Studio subscribers](https://docs.microsoft.com/en-us/visualstudio/subscriptions/vs-vsts).

<a name="enterprise-professional"></a>

<a name="ValidateMSDNSubscription"></a>

#### Q: Why won't my Visual Studio subscription validate?

A: See [Why won't VSTS recognize my Visual Studio subscription?](https://docs.microsoft.com/en-us/visualstudio/subscriptions/vs-alternate-identity#faq)

<a name="why-access-changed"></a>
#### Q: Why do Visual Studio subscribers' access levels change after they sign in?

A: VSTS recognizes Visual Studio subscribers 
and will automatically assign them access based on their subscription, 
no matter the current access level that's assigned to them.

<a name="subscription-expired"></a>

#### Q: What happens if a user's subscription expires?

A: If no other access levels are available, they'll 
[work as stakeholders](../../organizations/security/get-started-stakeholder.md). 
To restore access, they must renew their subscription.

<a name="extension-transition"></a>

#### Q: What happened to Visual Studio Online Professional?

A: On December 1, 2015, we replaced Visual Studio Online Professional with the 
[Visual Studio Professional monthly subscription](https://marketplace.visualstudio.com/items/ms.vs-professional-monthly) 
and will transition users automatically. While Visual Studio Online Professional 
purchases now appear as Visual Studio Professional monthly subscriptions on your monthly invoice, 
we haven't determined when users will be transitioned systematically. 
This transition provides an upgrade by offering access to unlimited 
VSTS accounts, not just one account, like Visual Studio Online Professional. 
The rest stays the same - monthly access to the Visual Studio Professional IDE, 
and pricing remains at $45 per user, per month.
Learn more about [Visual Studio subscriptions](https://visualstudio.microsoft.com/products/how-to-buy-vs).

If you're buying Professional users for a specific VSTS account,
which is possible only if you bought before November 2015,
and want to upgrade, do this:
	
0. Before the last day of the calendar month, 
sign in to the [Azure portal](https://portal.azure.com), 
and reduce the number of paid Visual Studio Online Professional 
users to 0. 

	This change will take effect on the 1st day of next month. 
	This means that in the next calendar month, 
	you won't be billed for Visual Studio Online Professional users at all.

0. On the 1st day of the next calendar month, 
[go to the Marketplace](https://marketplace.visualstudio.com/items/ms.vs-professional-monthly) 
and buy Visual Studio Professional monthly subscriptions for the same users. 
Learn [how to buy Visual Studio subscriptions](https://docs.microsoft.com/visualstudio/subscriptions/vscloud-overview).

	**Note** If you want to use your monthly Azure credits as a Visual Studio subscriber to pay for users, 
	make sure to remove your subscription's default spending limit indefinitely. 
	[Learn more](../../billing/vsts-billing-faq.md).


## User access

#### Q: What does *Last Access* mean in the All Users view?

Last Access is the last date a user accessed any VSTS resources or services. Accessing VSTS includes using 
*accountname*.visualstudio.com directly as well as using resources or services indirectly, such as using the Package Management 
service from a build definition or pushing code to VSTS from a git command line or from an IDE.

<a name="paid-basic-access-join-other-accounts"></a>

[!INCLUDE [can-paid-Basic-users-join-other-accounts](../../_shared/qa-can-paid-basic-users-join-other-accounts.md)]

<a name="feature-access"></a>

[!INCLUDE [no-access-existing-features](../../_shared/qa-no-access-existing-features.md)]

<a name="stopped-features"></a>

#### Q: Why did I or my team member lose access to certain features?

A: This might happen for different reasons, 
but meanwhile, you or your team member can continue 
[working as a stakeholder](../../organizations/security/get-started-stakeholder.md):

*	Your or your team member's Visual Studio subscription has expired. 
Meanwhile, they'll [work as stakeholders](../../organizations/security/get-started-stakeholder.md), 
or you can give them Basic access until they renew their subscriptions.
After they sign in, VSTS restores their access automatically.

*	The Azure subscription used for billing is no longer active. 
This affects all purchases made with this subscription, 
including Visual Studio subscriptions. 
To fix this problem, visit the [Azure account portal](https://portal.azure.com).

*	The Azure subscription used for billing was 
unlinked from your VSTS account. 
Learn more about [linking your account](../../billing/set-up-billing-for-your-organization-vs.md).

*	Your VSTS account has more users with Basic access 
than the number of users that you're paying for in Azure. 
Your account includes 5 free users with Basic access, 
but if you need to add more users with Basic access, 
you can [pay for these users](../../billing/buy-basic-access-add-users.md). 
Otherwise, on the 1st day of the calendar month, users who haven't 
signed into your account the longest will lose access first. 
If your account has users who don't need access anymore, 
[remove them from your account](delete-account-users.md).

*	You no longer have access to 
[features that are available only as extensions](https://visualstudio.microsoft.com/team-services/compare-features/). 
This might happen for different reasons.

	*	Your access level no longer meets your extension's requirements. 
	Most extensions require at least Basic access, not Stakeholder. 
	For more details, see the extension's description 
	in the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

	*	The extension was uninstalled. You can reinstall the extension by 
	visiting the extension page in the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

	*	If you're using a paid extension, 
	the Azure subscription used for billing might 
	be unlinked from your VSTS account 
	or might no longer be active. Learn more about 
	[linking your VSTS account](../../billing/set-up-billing-for-your-organization-vs.md), 
	or visit the [Azure account portal](https://account.windowsazure.com/subscriptions) 
	to check your payment details.


###	Azure Active Directory (Azure AD) and your account

<a name="AddUserDirectory"></a>

#### Q: Why do I have to add users to a directory?

A: Your VSTS account authenticates users and controls access 
through Azure Active Directory (Azure AD). All users must be directory members to get access.

If you're a directory administrator, you can 
[add users to the directory](https://msdn.microsoft.com/library/azure/hh967632.aspx). 
If you're not an administrator, work with your directory administrator to add users. 
Learn more about [controlling access with a directory](access-with-azure-ad.md).

<a name="ConnectedDirectory"></a>

[!INCLUDE [does-account-use-azuread](../../_shared/qa-does-account-use-azuread.md)]

<a name="DeleteFromDirectory"></a>

#### Q: My account controls access with Azure Active Directory (Azure AD). Can I just delete users from the directory?

A: Yes, but this removes their access to all VSTS accounts and other 
assets associated with that directory.  You must have Azure AD global administrator permissions to  
[delete a user from your Azure AD](delete-users-from-services-aad.md).

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]


###	More support

[!INCLUDE [get-team-services-support](../../_shared/qa-get-vsts-support.md)]

