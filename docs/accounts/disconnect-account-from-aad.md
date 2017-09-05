---
title: VSTS - Access with Azure AD | Visual Studio Team Services
description: Azure Active Directory (Azure AD) - Control access to Visual Studio Team Services (VSTS, Visual Studio Online, VSO)
ms.prod: vs-devops-alm
ms.technology: vsts-sub-accounts
ms.service: vsts-admin
ms.assetid: 3eb744cf-854d-4cbd-b725-c2e070bd922b
ms.manager: douge
ms.author: estfan
ms.date: 1/19/2017
---

#  Disconnect your VSTS account from your directory

**VSTS**

<a name="DisconnectDirectory"></a>

To stop using your organization's directory and return to signing in with Microsoft accounts, 
you can disconnect your VSTS account from your directory. 

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.


You'll need:

*	[Microsoft accounts](https://signup.live.com/) 
for all users in your VSTS account, 
including yourself as VSTS account owner

*	[VSTS account ownership](faq-change-app-access.md#find-owner) for your Microsoft account 

*	Global administrator permissions in your Azure AD 
for your Microsoft account as the VSTS account owner. You'll need both 
because Azure AD users can't disconnect VSTS accounts from directories. 
You can add Microsoft accounts to a directory as external users. 
Learn about [managing Azure administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/).

**What happens to current users?**  Users will continue working seamlessly if they have Microsoft accounts 
that share the same sign-in addresses that they use now.
Otherwise, they won't have access until you add them to 
VSTS as new users. They can migrate everything except work history, 
relink Visual Studio subscriptions, and have their access levels reassigned to their new identities.

0.	[Sign in to the Azure classic portal](https://manage.windowsazure.com/) 
with your Microsoft account as the VSTS account owner.

	> [!NOTE]
	> You can disconnect your VSTS account 
	> from your directory only through the Azure classic portal.

	[Why am I asked to choose between a work or school account and a personal account?](#ChooseOrgAcctMSAcct)

0.  Go to **Visual Studio Team Services**. 
Select your VSTS account.

	![Select your account](_img/manage-work-access/azureselectconnectedvso.png)

0.	Chooose **Configure** > **Disconnect**.

	![Configure account](_img/manage-work-access/azure-configure-disconnect.png)

	![Disconnect account from directory](_img/manage-work-access/azuredisconnectdirectory1.png)

0.	Select **None (no directory connection)**.

	![Select no directory connection](_img/manage-work-access/azuredisconnectdirectory2.png)

	![Account is now disconnected from your directory](_img/manage-work-access/azuredisconnectdirectory3.png)

	Your VSTS account is disconnected from your organization's directory. 
	Only users with Microsoft accounts can sign in.
	**Before you disconnect your VSTS account from your directory**, 
	make sure to **change the VSTS account owner to a Microsoft account**, 
	and not to a school or work account. If you don't do this, 
	you can't sign in to your VSTS account unless your work or school 
	account has the same email address as your Microsoft account.

	[More questions about disconnecting?](#faq-disconnect)


[Troubleshooting Q&A](faq-azure-access.md)

