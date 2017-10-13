---
title: Change Azure AD tenant -- connect your VSTS account to the target directory
description: Change Azure AD tenant -- connect your VSTS account to the target directory
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 6b345a81-2191-4dd0-aa1f-b296087cb825
ms.manager: douge
ms.author: billchi
ms.date: 10/6/2017
ms.topic: get-started-article
---

#	Change Azure AD tenant -- connect your VSTS account to the target directory

**VSTS**


0.	Link your VSTS account to the target Azure subscription.

	![Link VSTS account](_img/set-up-billing/azuredeveloperservicesstart.png)

	![Select your VSTS account and target Azure subscription](_img/change-azure-active-directory/select-account-subscription.png)

0.	Configure your account.

	![Configure your account](_img/manage-work-access/azure-configure-disconnect.png)

0.	Connect your account to the target directory. Save your changes when you're done.

	![Connect your VSTS account](_img/manage-work-access/azuredisconnectdirectory3.png)

	![Select target directory](_img/change-azure-active-directory/select-directory.png)

0.	To check that you finished this task successfully, invite a user from the target directory 
to your VSTS account. Confirm that they can sign in. Learn how to 
[add users and assign access](add-account-users-assign-access-levels.md).

0.	Add the remaining users from the target directory to your VSTS account.

0.	If you use tools that run outside a web browser, like the Git command line tool, 
then your alternate credentials for those tools won't work anymore. 
You must [set up your credentials](http://support.microsoft.com/kb/2991274/en-us)
again for the VSTS account that you connected.


> [!div class="nextstepaction"]
> [Change Azure AD tenant: reassign VSTS account ownership to a directory member](change-azure-ad-vsts-account-reassign-owner.md)

