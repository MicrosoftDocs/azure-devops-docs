---
title: Disconnect your VSTS account from your Azure AD
description: Learn how to stop using your organization's directory and sign in with a Microsoft account by disconnecting your VSTS account from your directory
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 3eb744cf-854d-4cbd-b725-c2e070bd922b
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 12/11/2017
monikerRange: 'vsts'
---
# Disconnect your VSTS account from your directory

**VSTS**

<a name="DisconnectDirectory"></a>

To stop using your organization's directory and return to signing in with Microsoft accounts, 
you can disconnect your VSTS account from your directory. 

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.

You'll need:

*	[Microsoft accounts](https://signup.live.com/) 
for all users in your VSTS account, 
including yourself as VSTS account owner.

*	[VSTS account ownership](faq-change-app-access.md#find-owner) for your Microsoft account. 

*	Global administrator permissions in your Azure AD 
for your Microsoft account as the VSTS account owner. You'll need both 
because Azure AD users can't disconnect VSTS accounts from directories. 
You can add Microsoft accounts to a directory as external users. 
Learn about [managing Azure administrators](https://azure.microsoft.com/en-us/documentation/articles/active-directory-assign-admin-roles/).

**What happens to current users?**  Users continue working seamlessly if they have Microsoft accounts 
that share the same sign-in addresses that they use now.
Otherwise, they won't have access until you add them to 
VSTS as new users. They can migrate everything except work history, 
can relink Visual Studio subscriptions, and have their access levels reassigned to their new identities.

0.	[Sign in to the Azure portal](https://portal.azure.com/) 
with your Microsoft account as the VSTS account owner.

	[Why am I asked to choose between a work or school account and a personal account?](faq-azure-access.md#ChooseOrgAcctMSAcct)

0.	Browse to your VSTS account by selecting **All services**, typing **Team Services** into the **Filter** box, and choosing **Team Services accounts**. If you have recently browsed to **Team Services accounts** you can select it from the recently accessed services on the left.

    ![Azure Portal, Team Services accounts](_img/manage-work-access/browse-to-team-services.png)

0. Select your account.

    ![Azure portal, VSTS, select your account](_img/manage-work-access/select-team-services-account.png)

0.	Chooose **Disconnect**.

	![Configure account](_img/manage-work-access/azure-configure-disconnect.png)

0. Choose **Yes** to confirm.

	![Disconnect account from directory](_img/manage-work-access/azuredisconnectdirectory1.png)

0.	Your VSTS account is disconnected from your organization's directory.

	![Account is now disconnected from your directory](_img/manage-work-access/azuredisconnectdirectory3.png)

	Only users with Microsoft accounts can sign in.
	**Before you disconnect your VSTS account from your directory**, 
	make sure to **change the VSTS account owner to a Microsoft account**, 
	and not to a school or work account. If you don't do this, 
	you can't sign in to your VSTS account unless your work or school 
	account has the same email address as your Microsoft account.

	[More questions about disconnecting?](faq-azure-access.md#faq-disconnect)





