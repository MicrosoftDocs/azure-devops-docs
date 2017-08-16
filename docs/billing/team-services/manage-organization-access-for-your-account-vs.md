---
title: Team Services - Access with Azure AD | Visual Studio Team Services
description: Azure Active Directory (Azure AD) - Control access to Visual Studio Team Services (VSTS, Visual Studio Online, VSO)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: cdd9bea5-4ee4-479e-bc77-fa13a36a37a9
ms.manager: douge
ms.author: estfan
ms.date: 1/19/2017
---

#	Team Services: Access with Azure Active Directory (Azure AD)

**Team Services**

Want to authenticate users and control access to 
your Team Services account the same way that you 
can with Microsoft services like Office 365 and Azure? 
If your Team Services account was created with a Microsoft account, 
you can connect your Team Services account to your 
organization's directory (tenant) in 
[Azure Active Directory (Azure AD)](https://azure.microsoft.com/en-us/documentation/articles/active-directory-whatis/). 
You can then sign in to Team Services with the same username 
and password that you use with these Microsoft services. 
You can also enforce policies for accessing 
your team's critical resources and key assets.

> To use existing on-premises identities with Team Services, 
> you can integrate on-premises directories with Azure AD by using 
> [Azure AD Connect](https://azure.microsoft.com/en-us/documentation/articles/active-directory-aadconnect/). 
> To switch your Team Services account to another directory, 
> learn [how to change your directory in Azure AD](change-azure-active-directory-team-services-account.md).

##  How does Azure AD control access to Team Services?

Your Team Services account authenticates users 
through your organization's directory so that 
only users who are members in that directory can 
get access to your Team Services account. 
When users are removed from your directory, 
for example, because they've moved elsewhere, 
they can't access your account anymore. 
Only specific [Azure AD administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/) 
can manage users in your directory, 
so they control who can get access to your Team Services account. 

Without Azure AD, you're solely responsible for 
controlling Team Services account access. 
And all users must sign in with Microsoft accounts.

<a name="permissions"></a>
## What do I need to set up an existing Team Services with Azure AD?

You'll need:

*	[Ownership of the Team Services account](#find-owner) that you want to connect to Azure AD. 

*	A ["full" Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/), 
such as a ["Pay-As-You-Go" subscription](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/), 
associated with your organization's Azure AD and at 
least Co-administrator permissions for your subscription. 
You'll need both to make your directory appear in the Azure portal, 
so that you can link your subscription and connect your 
Azure AD to your Team Services account. Learn about 
[Azure subscription Co-administrator permissions](set-up-billing-for-your-account-vs.md#AddAzureAdmin).

  [Want to use Office 365 Azure AD with Team Services?](#o365aad)

*	(Only needed if you need to add users to Azure AD) Global administrator permissions for your directory so 
you can add current Team Services users to that directory. 
Otherwise, work with your directory's global administrator to add users. 
Learn more about [Azure AD administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/).

  To check your permissions, [Sign in to the Azure classic portal](https://manage.windowsazure.com/) with your 
  work or school account. Go to your target directory.

  ![Check that you're a global administrator](_img/manage-work-access/azureadadmin.png)

*	You must add your Microsoft account to your Azure AD. Although directory membership isn't required to 
connect your Team Services account to Azure AD, this will make sure that you can sign in and 
access your Team Services account after connecting to Azure AD. Otherwise, your Microsoft account will not have access to 
your Team Services account.

## What happens to current users?

Your work in Team Services is associated with your sign-in address. 
After your Team Services account is connected to your directory, 
users will continue working seamlessly if their 
sign-in addresses appear in the connected directory. 
If they don't, you'll have to [add those users to your directory](#SetUpCurrentUsers). 
Your organization might have policies about adding users to the directory, 
so find out more first. 

What if we can't use the same sign-in addresses?  You'll have to add these users to the directory with new work or school accounts, 
or if they have existing work or school accounts, they can use those instead. Their work in Team Services 
won't be lost and will stay with their current Team Services sign-in addresses.  You'll have to add them as new 
users to Team Services, reassign access levels, and readd them to any team projects. They can migrate work that they want to keep, 
except for their work history. Learn [how to manage Team Services account users](add-account-users-assign-access-levels-team-services.md).

What happens to tools that use my credentials, like alternate credentials?  Alternate credentials won't work anymore for 
tools that run outside a web browser, like the Git command line tool.  You'll have 
to [set up your credentials](http://support.microsoft.com/kb/2991274/en-us) again for the Team Services account that you connected.

<a name="SetUpCurrentUsers"></a>
##  Add Team Services account users to your directory

If your users do not already exist in Azure AD:

0.  Sign in to the [Azure classic portal](https://manage.windowsazure.com/) 
or the [Azure portal](https://portal.azure.com) 
as global administrator for your organization's directory. 
See these topics for how to:

	*	[Add users in the Azure classic portal](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-create-users).
	*	[Add users in the Azure portal](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-users-create-azure-portal).

	[Why am I asked to choose between a "work or school account" and a "personal account"?](#ChooseOrgAcctMSAcct)

0.	Add the sign-in addresses for all your Team Services account users to your directory, 
including yourself as the Team Services account owner, if not in the directory already. 

  What does an example directory look like?
  
  Suppose Jamal is an Azure AD global administrator at Fabrikam and is in the Fabrikam directory with his 
  work account (jamalhartnett@fabrikam.com). He's also the Team Services account owner and a user with his Microsoft 
  account (jamalhartnett@live.com). He wants to keep his work history, so he adds his Microsoft account to the 
  Fabrikam directory.  If Jamal doesn't need his work history, he can use his work account with Team Services. But 
  free up the access used by his Microsoft account, he must change the Team Services account owner to his work account. 

  Nicole, another user, has a work account (nicolezamora@fabrikam.com) that shares the same sign-in address with her 
  Microsoft account, so she will continue to work seamlessly with the same sign-in address.

  Here's what the Fabrikam directory might look like in the Azure classic portal after Jamal adds users from his 
  Team Services account.
    
  ![Directory after adding users](_img/manage-work-access/azureaddmembers3.png)

  [More questions about setting up users?](#faq-users)

0.  After adding your account users to your directory, 
connect your Team Services account to your directory. 

<a name="ConnectDirectory"></a>
##  Connect your Team Services account to your directory

0.  [Sign in to the Azure classic portal](https://manage.windowsazure.com/) 
with your personal Microsoft account as the Team Services account owner.

	> [!NOTE]
	> You can connect your Team Services account 
	> and your directory only through the Azure classic portal.

	[Why am I asked to choose between a "work or school account" and a "personal account"?](#ChooseOrgAcctMSAcct)

0.  If you haven't already, 
[link your Team Services account](set-up-billing-for-your-account-vs.md) 
to the Azure subscription associated with your directory.

  Why don't I see a directory when I link my account?  **Directory** shows a directory only when the selected 
  Team Services account is already connected to that directory.  You'll actually connect your account to a directory 
  elsewhere and later in Azure.

  ![No connected directory](_img/_shared/no-directory.png)

  [What if my account is already linked to an Azure subscription?](#subscription-linked-already)

  **Important** Want to use your Azure subscription to bill Team Services purchases?  You can use your linked Azure 
  subscription to bill purchases for your Team Services account, but if your subscription has a 
	[spending limit](https://azure.microsoft.com/en-us/pricing/spending-limits/), you must first remove this 
	spending limit **indefinitely**. Learn [how and why you must remove this spending limit](#remove-spending-limit).

0.	Go to **Visual Studio Team Services**. 
Select your Team Services account.

    ![Azure portal, Team Services, select your account](_img/manage-work-access/azurevso_unconnected.png)

0.	Choose **Configure** > **Connect**.

    ![Configure your account](_img/manage-work-access/azureconfigurevso.png)

    ![Connect your account](_img/manage-work-access/azureconnectdirectory1.png)

0.	From the list of directories associated with the Azure subscription 
that's linked to your Team Services account, 
select the directory that you want to connect. 
Save your changes when you're done.

	![Select your directory](_img/manage-work-access/azureconnectdirectory2.png)

	*	[Why don't I see the directory that I want?](#why-not-my-directory)
	*	[My account's already connected to a directory. What do I do?](#AlreadyConnected)

	![Account is now connected to your directory](_img/manage-work-access/azureconnectdirectory3.png)

	Your account is now connected to your organization's directory.

0.	To check that users can access your Team Services account, 
invite a user from your directory to your Team Services account 
and confirm that they can sign in.

0.  If you use alternate credentials with tools that run outside a web browser, 
like the Git command line tool, those tools won't work anymore. 
You must [set up your credentials](http://support.microsoft.com/kb/2991274/en-us) 
again for the Team Services account that you connected.

0.	If you used a Microsoft account to sign up for a 
[Visual Studio with MSDN subscription](https://www.visualstudio.com/vs/pricing/) 
that includes Team Services as a benefit, 
you can add a work or school account that's 
managed by Azure Active Directory to your subscription. 
Learn [how to link work or school accounts to Visual Studio with MSDN subscriptions](link-msdn-subscription-to-organizational-account-vs.md).

	[More questions about connecting?](#faq-connect)

#####  Next

*   [Manage users and access](add-account-users-assign-access-levels-team-services.md)
*   [Manage access with Azure AD groups](manage-azure-active-directory-groups-visual-studio-team-services.md)

<a name="DisconnectDirectory"></a>
##  Disconnect your Team Services account from your directory

To stop using your organization's directory and return to signing in with Microsoft accounts, 
you can disconnect your Team Services account from your directory. 

You'll need:

*	[Microsoft accounts](https://signup.live.com/) 
for all users in your Team Services account, 
including yourself as Team Services account owner

*	[Team Services account ownership](#find-owner) for your Microsoft account 

*	Global administrator permissions in your Azure AD 
for your Microsoft account as the Team Services account owner. You'll need both 
because Azure AD users can't disconnect Team Services accounts from directories. 
You can add Microsoft accounts to a directory as external users. 
Learn about [managing Azure administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/).

###	What happens to current users?

Users will continue working seamlessly if they have Microsoft accounts 
that share the same sign-in addresses that they use now.
Otherwise, they won't have access until you add them to 
Team Services as new users. They can migrate everything except work history, 
relink Visual Studio subscriptions, and have their access levels reassigned to their new identities.

0.	[Sign in to the Azure classic portal](https://manage.windowsazure.com/) 
with your Microsoft account as the Team Services account owner.

	> [!NOTE]
	> You can disconnect your Team Services account 
	> from your directory only through the Azure classic portal.

	[Why am I asked to choose between a work or school account and a personal account?](#ChooseOrgAcctMSAcct)

0.  Go to **Visual Studio Team Services**. 
Select your Team Services account.

	![Select your account](_img/manage-work-access/azureselectconnectedvso.png)

0.	Chooose **Configure** > **Disconnect**.

	![Configure account](_img/manage-work-access/azure-configure-disconnect.png)

	![Disconnect account from directory](_img/manage-work-access/azuredisconnectdirectory1.png)

0.	Select **None (no directory connection)**.

	![Select no directory connection](_img/manage-work-access/azuredisconnectdirectory2.png)

	![Account is now disconnected from your directory](_img/manage-work-access/azuredisconnectdirectory3.png)

	Your Team Services account is disconnected from your organization's directory. 
	Only users with Microsoft accounts can sign in.
	**Before you disconnect your Team Services account from your directory**, 
	make sure to **change the Team Services account owner to a Microsoft account**, 
	and not to a school or work account. If you don't do this, 
	you can't sign in to your Team Services account unless your work or school 
	account has the same email address as your Microsoft account.

	[More questions about disconnecting?](#faq-disconnect)

<a id="delete-directory-members"></a>
##  Delete users from Team Services connected to Azure AD

You can just [delete the user from each Team Services account](add-account-users-assign-access-levels-team-services.md#delete-user) 
where you need to remove them. If you delete the user only from Azure AD, they may still show up in Team Services, but 
they won't be able to sign in.

0.  [Sign in to the Azure classic portal](https://manage.windowsazure.com/) 
as the directory administrator in Azure.

	> [!NOTE]
	> You can find the connected Azure AD 
	> only through the Azure classic portal.

0.  Go to **Visual Studio Team Services**. 
Find the Azure AD that's connected to your 
Team Services account.

    ![Find the directory connected to your account](_img/manage-work-access/azurefindconnecteddirectory.png)

###	Delete users from Azure AD

0.	Follow [these steps](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-users-delete-user-azure-portal) on the azure portal.

0.  [Remove the user](add-account-users-assign-access-levels-team-services.md#delete-user) 
from your Team Services account and reassign their access levels, if necessary.

## Q&A

### General

<a name="o365aad"></a>
#### Q: Can I use Office 365 Azure AD with Team Services?

A: To connect your Team Services account to an Office 365 Azure AD, 
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

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

<a name="find-owner"></a>

[!INCLUDE [find-account-owner](../../_shared/qa-find-account-owner.md)]


<a name="faq-users"></a>
### Add users to directory


####Q:  Can I switch current users from Microsoft accounts to work accounts in Team Services?

A:  No, although you can add new work accounts to your Team Services account, 
they're treated as new users. If you want to access all your work, 
including its history, you must use the same sign-in addresses that 
you used before your Team Services account was connected to your Azure AD.
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
that includes Team Services as a benefit, 
you can add a work or school account that's 
managed by Azure Active Directory to your subscription. 
Learn [how to link work or school accounts to Visual Studio with MSDN subscriptions](link-msdn-subscription-to-organizational-account-vs.md).

<a name="guest-access"></a>
####Q:  Can I control access to my Team Services account for external users in the connected directory?

A:	Yes, but only for external users who are 
[added as guests through Office 365](https://support.office.com/en-us/article/Share-sites-or-documents-with-people-outside-your-organization-80E49744-E30F-44DB-8D51-16661B1D4232) 
or [added using B2B collaboration by your Azure AD administrator](https://azure.microsoft.com/en-us/documentation/articles/active-directory-b2b-collaboration-overview/). 
These external users are managed outside the connected directory. 
To learn more, contact your Azure AD administrator. The setting below doesn't affect 
[users who are added directly to your organization's directory](https://azure.microsoft.com/en-us/documentation/articles/active-directory-create-users/). 

> Before you start, make sure you have at least Basic access, not Stakeholder.

**To control account access for external users added through Office 365 or Azure AD B2B collaboration**

0.	Go to your Team Services account's control panel.

	![Go to account control panel](_img/_shared/accountsettings.png)

0.	Go to your account settings. 
Allow or deny account access for external users added as guests. 

	![Change external guest access](_img/manage-work-access/guest-access.png)

<a name="faq-connect"></a>
### Connect to directory

<a name="connect-o365-azure-ad"></a>
####Q:	Can I connect my Team Services account to an Azure AD created from Office 365?

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
and connect your Azure AD to your Team Services account. Learn 
[how to manage Azure subscription administrators](set-up-billing-for-your-account-vs.md#AddAzureAdmin).

<a name="why-not-my-directory"></a>
####Q:  Why don't I see the directory that I want to connect? What should I do?

A:	This might happen because: 

*	You don't have 
[Team Services account owner permissions](#find-owner) to manage directory connections.

*	You don't have an active and valid 
["full" Azure subscription](https://azure.microsoft.com/en-us/pricing/purchase-options/), 
such as a ["Pay-As-You-Go" subscription](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/), 
associated with your organization's Azure AD and at 
least Co-administrator permissions for your subscription. 
You need both to make your directory appear in the Azure portal, 
so that you can link your subscription 
and connect your Azure AD to your Team Services account. Learn 
[how to manage Azure subscription administrators](set-up-billing-for-your-account-vs.md#AddAzureAdmin).

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

*	Your Team Services account isn't linked to the Azure 
subscription that's associated with your directory. Learn 
[how to link your Team Services account to an Azure subscription](set-up-billing-for-your-account-vs.md).
	
	**Important** This link also sets up account billing, 
	so you can bill Team Services purchases to your Azure subscription. 
	Some Azure subscriptions have a 
	[spending limit](https://azure.microsoft.com/en-us/pricing/spending-limits/).
	If your Azure subscription has a spending limit, 
	and you want to bill purchases to this subscription, 
	you must remove this limit **indefinitely**. 
	This prevents disabling your Azure subscription the 
	next month when your monthly charges are billed. 
	Otherwise, all resources billed to this subscription will be suspended, 
	including all Team Services purchases, 
	Visual Studio Marketplace purchases, 
	and Azure resources. Learn more about 
	[how to manage your subscription's spending limit](https://msdn.microsoft.com/library/azure/dn465781.aspx).

	If you're the subscription [Account Administrator](https://azure.microsoft.com/en-us/documentation/articles/billing-add-change-azure-subscription-administrator), 
	visit the Azure Account Center to remove the spending limit:

	0.	Sign in to [Azure Account Center (**Account** > **subscriptions**)](https://account.windowsazure.com/subscriptions). 
	0.	Select your Azure subscription. 
	0.	Remove your spending limit **indefinitely**.

<a name="subscription-linked-already"></a>
####Q:  What if my Team Services account is already linked to an Azure subscription?

A:  You can [change the Azure subscription](set-up-billing-for-your-account-vs.md#change-azure-subscription) 
that's linked to your Team Services account. 
However, unlinking will cause your account 
to go back to the 
[free account limits](set-up-billing-for-your-account-vs.md#unlinking), 
and some users might lose access until you relink. 

####Q:  What happens if I unlink my Azure subscription while my Team Services account is connected to a directory?

A:  This doesn't affect your account's connection to the directory, 
but unlinking will cause your account to go back to the 
[free account limits](set-up-billing-for-your-account-vs.md#unlinking), 
and some users might lose access until you relink.

<a name="AlreadyConnected"></a>
####Q:  Why is my Team Services account already connected to a directory? Can I change that directory?

A:	Your Team Services account was connected to a directory when the 
account owner created the account or sometime after that. 
When you create a Team Services account with a work or school account, 
your Team Services account is automatically connected to the directory 
that manages that work or school account. 
You can [disconnect your Team Services account](#DisconnectDirectory) from this directory 
and reconnect to another directory, but you might have to migrate some users.

<a name="AlternateCredentials"></a>
####Q:  My alternate credentials don't work anymore. What do I do?

A:  This happens after you connect your Team Services 
account to a directory. You must 
[set up your credentials](http://support.microsoft.com/kb/2991274) 
again for the account that you connected.

<a name="CantSignIn"></a>
####Q:  Why can't users sign in after my Team Services account is connected to a directory?

A:  Make sure their sign-in addresses are in the 
connected directory and in your Team Services account. 
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
[includes Team Services](https://www.visualstudio.com/vs/pricing/) as a benefit, 
and you activated that subscription with a Microsoft account, 
you can add a work or school account that's managed by Azure Active Directory to your subscription. 
Learn [how to link work or school accounts to Visual Studio with MSDN subscriptions](link-msdn-subscription-to-organizational-account-vs.md).

<a name="faq-disconnect"></a>
### Disconnect from directory

####Q:    Why can't users sign in after my Team Services account is disconnected?

A:  They must now use Microsoft accounts to sign in. 
They can continue working seamlessly if they have Microsoft 
accounts with the same sign-in addresses that they use now. 

If they must create Microsoft accounts with different sign-in addresses, 
you must add those sign-in-addresses to your Team Services account,
and reassign access to them. They can migrate work that they want to keep, 
except work history. They might also have to relink their MSDN 
subscriptions. They can use any email address to create a Microsoft account.

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../../_shared/qa-get-team-services-support.md)]

