---
title: Troubleshooting access with Azure Active Directory (Azure AD)
description: Troubleshooting access with Azure Active Directory (Azure AD)
ms.prod: vs-devops-alm
ms.technology: vsts-sub-accounts
ms.service: vsts-admin
ms.assetid: d51de748-c53e-4468-ad9b-275d6bf1a4dd
ms.manager: douge
ms.author: estfan
ms.date: 1/19/2017
---

#	Troubleshooting access with Azure Active Directory (Azure AD)

**VSTS**

## General

<a name="o365aad"></a>
#### Q: Can I use Office 365 Azure AD with VSTS?

A: To connect your VSTS account to an Office 365 Azure AD, 
you can't use the [free subscription](https://technet.microsoft.com/library/dn832618.aspx) 
that you can activate for your Office 365 Azure AD.
	
You must [sign up for a new Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/) 
or use an existing Azure subscription 
that's **not** from one of these offers: 

* An [Azure Free Trial](https://azure.microsoft.com/en-us/offers/ms-azr-0044p/)

* A [free Azure AD subscription](https://technet.microsoft.com/library/dn832618.aspx)

* From the [Cloud Solution Provider program](https://partner.microsoft.com/en-US/Solutions/cloud-reseller-overview)

You must then associate that subscription with your Office 365 Azure AD. You'll also need additional subscription 
administrator permissions beyond Co-administrator permissions.

Learn how to [associate your Azure subscription to your Office 365 Azure AD](https://docs.microsoft.com/en-us/azure/billing-add-office-365-tenant-to-azure-subscription).


<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../_shared/qa-choose-msa-azuread-account2.md)]


[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]

[!INCLUDE [why-no-owned-accounts](../_shared/qa-why-no-owned-accounts.md)]


[!INCLUDE [why-cant-sign-in-msa-azuread-account](../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]


<a name="faq-users"></a>
## Add users to directory


####Q:  Can I switch current users from Microsoft accounts to work accounts in VSTS?

A:  No, although you can add new work accounts to your VSTS account, 
they're treated as new users. If you want to access all your work, 
including its history, you must use the same sign-in addresses that 
you used before your VSTS account was connected to your Azure AD.
You can do this by adding your Microsoft account as a member to your Azure AD.

####Q:  Why can't I add users from other directories to my Azure AD?

A:	You must be a member or have read access in those directories. 
Otherwise, you can add them 
[using B2B collaboration through your Azure AD administrator](https://azure.microsoft.com/en-us/documentation/articles/active-directory-b2b-collaboration-overview/), 
using their Microsoft accounts, 
or create new work accounts for them in your directory.

####Q:  How do I use my work or school account with my Visual Studio with MSDN subscription?

A:  If you used a Microsoft account to activate a 
[Visual Studio with MSDN subscription](https://www.visualstudio.com/vs/pricing/) 
that includes VSTS as a benefit, 
you can add a work or school account that's 
managed by Azure Active Directory to your subscription. 
Learn [how to link work or school accounts to Visual Studio with MSDN subscriptions](../billing/link-msdn-subscription-to-organizational-account-vs.md).

<a name="guest-access"></a>
####Q:  Can I control access to my VSTS account for external users in the connected directory?

A:	Yes, but only for external users who are 
[added as guests through Office 365](https://support.office.com/en-us/article/Share-sites-or-documents-with-people-outside-your-organization-80E49744-E30F-44DB-8D51-16661B1D4232) 
or [added using B2B collaboration by your Azure AD administrator](https://azure.microsoft.com/en-us/documentation/articles/active-directory-b2b-collaboration-overview/). 
These external users are managed outside the connected directory. 
To learn more, contact your Azure AD administrator. The setting below doesn't affect 
[users who are added directly to your organization's directory](https://azure.microsoft.com/en-us/documentation/articles/active-directory-create-users/). 

> Before you start, make sure you have at least Basic access, not Stakeholder.

**To control account access for external users added through Office 365 or Azure AD B2B collaboration**

0.	Go to your VSTS account's control panel.

	![Go to account control panel](_img/_shared/accountsettings.png)

0.	Go to your account settings. 
Allow or deny account access for external users added as guests. 

	![Change external guest access](_img/manage-work-access/guest-access.png)

<a name="faq-connect"></a>
## Connect to directory

<a name="connect-o365-azure-ad"></a>
####Q:	Can I connect my VSTS account to an Azure AD created from Office 365?

A:	Yes, but if you can't find your Office 365 Azure AD 
when connecting your account in the Azure portal, 
learn what you're missing in this FAQ: 
[Why don't I see the directory that I want to connect?](#why-not-my-directory)

<a name="no-directory-subscription"></a>
####Q:	Why don't I see a directory associated with my Azure subscription?

A:	You need an active and valid 
["full" Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/), 
such as a ["Pay-As-You-Go" subscription](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/), 
associated with your organization's Azure AD and at 
least Co-administrator permissions for your subscription.
You need both to make your directory appear in the Azure portal, 
so that you can link your subscription 
and connect your Azure AD to your VSTS account. Learn 
[how to manage Azure subscription administrators](../billing/add-backup-billing-managers.md).

<a name="why-not-my-directory"></a>
####Q:  Why don't I see the directory that I want to connect? What should I do?

A:	This might happen because: 

*	You don't have 
[VSTS account owner permissions](faq-change-app-access.md#find-owner) to manage directory connections.

*	You don't have an active and valid 
["full" Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/), 
such as a ["Pay-As-You-Go" subscription](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/), 
associated with your organization's Azure AD and at 
least Co-administrator permissions for your subscription. 
You need both to make your directory appear in the Azure portal, 
so that you can link your subscription 
and connect your Azure AD to your VSTS account. Learn 
[how to manage Azure subscription administrators](../billing/add-backup-billing-managers.md).

	For example, if you want to use an Office 365 Azure AD, 
	you can't use the [free subscription](https://technet.microsoft.com/library/dn832618.aspx) 
	that you can get for Office 365 Azure AD. 
	You must [sign up for a new Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/) 
	or use an existing Azure subscription 
	that's **not** from one of these offers: 

	*	An [Azure Free Trial](https://azure.microsoft.com/en-us/offers/ms-azr-0044p/)
	*	A [free Azure AD subscription](https://technet.microsoft.com/library/dn832618.aspx)
	*	From the [Cloud Solution Provider program](https://partner.microsoft.com/en-US/Solutions/cloud-reseller-overview)

	You must then associate that subscription with your Office 365 Azure AD. 
	To do this for your Office 365 Azure AD, 
	you'll also need addtional subscription administrator permissions 
	beyond Co-administrator permissions. Learn how to 
	[associate your Azure subscription to your Office 365 Azure AD](https://docs.microsoft.com/en-us/azure/billing-add-office-365-tenant-to-azure-subscription), 
	or learn more about the 
	[relationship between your Azure subscription and your Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-how-subscriptions-associated-directory#how-an-azure-subscription-is-related-to-azure-ad).

<a name="remove-spending-limit"></a>

*	Your VSTS account isn't linked to the Azure 
subscription that's associated with your directory. Learn 
[how to link your VSTS account to an Azure subscription](../billing/set-up-billing-for-your-account-vs.md).
	
	**Important** This link also sets up account billing, 
	so you can bill VSTS purchases to your Azure subscription. 
	Some Azure subscriptions have a 
	[spending limit](https://azure.microsoft.com/en-us/pricing/spending-limits/).
	If your Azure subscription has a spending limit, 
	and you want to bill purchases to this subscription, 
	you must remove this limit **indefinitely**. 
	This prevents disabling your Azure subscription the 
	next month when your monthly charges are billed. 
	Otherwise, all resources billed to this subscription will be suspended, 
	including all VSTS purchases, 
	Visual Studio Marketplace purchases, 
	and Azure resources. Learn more about 
	[how to manage your subscription's spending limit](https://msdn.microsoft.com/library/azure/dn465781.aspx).

	If you're the subscription [Account Administrator](https://azure.microsoft.com/en-us/documentation/articles/billing-add-change-azure-subscription-administrator), 
	visit the Azure Account Center to remove the spending limit:

	0.	Sign in to [Azure Account Center (**Account** > **subscriptions**)](https://account.windowsazure.com/subscriptions). 
	0.	Select your Azure subscription. 
	0.	Remove your spending limit **indefinitely**.

<a name="subscription-linked-already"></a>
####Q:  What if my VSTS account is already linked to an Azure subscription?

A:  You can [change the Azure subscription](../billing/change-azure-subscription.md) 
that's linked to your VSTS account. 
However, unlinking will cause your account 
to go back to the 
[free account limits](../billing/faq-billing-setup.md#unlinking), 
and some users might lose access until you relink. 

####Q:  What happens if I unlink my Azure subscription while my VSTS account is connected to a directory?

A:  This doesn't affect your account's connection to the directory, 
but unlinking will cause your account to go back to the 
[free account limits](../billing/faq-billing-setup.md#unlinking), 
and some users might lose access until you relink.

<a name="AlreadyConnected"></a>
####Q:  Why is my VSTS account already connected to a directory? Can I change that directory?

A:	Your VSTS account was connected to a directory when the 
account owner created the account or sometime after that. 
When you create a VSTS account with a work or school account, 
your VSTS account is automatically connected to the directory 
that manages that work or school account. 
You can [disconnect your VSTS account](#DisconnectDirectory) from this directory 
and reconnect to another directory, but you might have to migrate some users.

<a name="AlternateCredentials"></a>
####Q:  My alternate credentials don't work anymore. What do I do?

A:  This happens after you connect your VSTS 
account to a directory. You must 
[set up your credentials](http://support.microsoft.com/kb/2991274) 
again for the account that you connected.

<a name="CantSignIn"></a>
####Q:  Why can't users sign in after my VSTS account is connected to a directory?

A:  Make sure their sign-in addresses are in the 
connected directory and in your VSTS account. 
If they're not directory members, and you have at least 
[user administrator permissions](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/), 
you can [add them to the directory](https://azure.microsoft.com/en-us/documentation/articles/active-directory-create-users/). 

Some users have sign-in addresses that are shared by their 
Microsoft account and their work or school account. 
These are treated as separate identities with different profiles, 
security settings, and permissions. When they're asked to choose 
which account they want to use when they sign in, they should 
choose the identity that's a member in your directory because 
only directory members can get access to your account.

If you have a Visual Studio with MSDN subscription that 
[includes VSTS](https://www.visualstudio.com/vs/pricing/) as a benefit, 
and you activated that subscription with a Microsoft account, 
you can add a work or school account that's managed by Azure Active Directory to your subscription. 
Learn [how to link work or school accounts to Visual Studio with MSDN subscriptions](../billing/link-msdn-subscription-to-organizational-account-vs.md).

<a name="faq-disconnect"></a>
## Disconnect from directory

####Q:    Why can't users sign in after my VSTS account is disconnected?

A:  They must now use Microsoft accounts to sign in. 
They can continue working seamlessly if they have Microsoft 
accounts with the same sign-in addresses that they use now. 

If they must create Microsoft accounts with different sign-in addresses, 
you must add those sign-in-addresses to your VSTS account,
and reassign access to them. They can migrate work that they want to keep, 
except work history. They might also have to relink their MSDN 
subscriptions. They can use any email address to create a Microsoft account.

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../_shared/qa-get-vsts-support.md)]

