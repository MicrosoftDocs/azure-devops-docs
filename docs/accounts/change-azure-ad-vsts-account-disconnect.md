---
title: Change Azure AD tenant -- disconnect from old directory
description: Change directory (tenant) in Azure Active Directory for VSTS -- disconnect from old directory
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 5c67a67a-bf93-4d8f-8610-832b28cf0107
ms.manager: douge
ms.author: chcomley
ms.date: 10/6/2017
ms.topic: get-started-article
---

#	Change Azure AD tenant -- disconnect from old directory

**VSTS**

##	Migrate your VSTS account between directories

###	Disconnect your VSTS account from the source directory

0.	Sign in to the [Azure classic portal](https://manage.windowsazure.com) 
with the Microsoft account that you're using for the migration.

0.	Select your VSTS account.

	![Select your VSTS account](_img/manage-work-access/azureselectconnectedvso.png)

0.	Configure your account.

	![Configure your account](_img/manage-work-access/azure-configure-disconnect.png)

0.	Disconnect your account from the source directory.

	![Disconnect account](_img/manage-work-access/azuredisconnectdirectory1.png)

	![Select None, no directory connection](_img/manage-work-access/azuredisconnectdirectory2.png)

	After you save your changes, your VSTS account is disconnected. 
	Now, only users with Microsoft accounts can sign in to your VSTS account. 
	This is why we previously set up your Microsoft account as a VSTS account user.

	![Your account is now disconnected](_img/manage-work-access/azuredisconnectdirectory3.png)

0.	Unlink your VSTS account from the source Azure subscription.

	![Select your VSTS account](_img/_shared/azure-unlink-subscription.png)

	Your VSTS account is removed from the Azure classic portal. 
	You can now link your account to another Azure subscription and directory.


> [!div class="nextstepaction"]
> [Change Azure AD tenant: connect target directory](change-azure-ad-vsts-account-connect.md)

