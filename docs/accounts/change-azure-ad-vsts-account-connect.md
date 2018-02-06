---
title: Change Azure AD tenant -- connect your VSTS account to the target directory
description: Change Azure AD tenant -- connect your VSTS account to the target directory
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 6b345a81-2191-4dd0-aa1f-b296087cb825
ms.manager: douge
ms.author: chcomley
ms.date: 02/01/2018
ms.topic: get-started-article
---

#	Change Azure AD tenant -- connect your VSTS account to the target directory

**VSTS**


0. Select **Link** to link your VSTS account to the target Azure subscription.

  ![Choose Link button over middle panel](_img/set-up-billing/ap-vso-selectlink2.png)

0. Select your Azure subscription. 

  ![Select an Azure subscription](_img/set-up-billing/ap_vso_selectsubscription.png)

0. Choose **Connect**.

  ![Configure your account](_img/manage-work-access/azureconfigurevso.png)

0. Choose **Yes** to confirm.

  ![Connect your account](_img/manage-work-access/azureconnectdirectory1.png)

0. Your account is now connected to your organization's directory.

  ![Account is now connected to your directory](_img/manage-work-access/azureconnectdirectory3.png)

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

