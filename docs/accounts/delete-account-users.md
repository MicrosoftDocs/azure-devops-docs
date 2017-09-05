---
title: Delete users from your Visual Studio Team Services account
description: Delete users from your Visual Studio Team Services account
ms.prod: vs-devops-alm
ms.technology: vsts-sub-accounts
ms.service: vsts-admin
ms.assetid: 6be2e639-2d40-4406-8f34-2a08018b4383
ms.manager: douge
ms.author: estfan
ms.date: 1/13/2017
---

#	Delete users from your account in Visual Studio Team Services

**VSTS**

Before you start, you'll need 
[VSTS project collection administrator or account owner permissions](faq-add-delete-users.md#find-owner).

0.  Sign in to your Visual Studio Team Services account 
(```https://{youraccount}.visualstudio.com```).

	[Why am I asked to choose between my "work or school account" and my "personal account"?](#ChooseOrgAcctMSAcct)

0.  Go to **Users**. 
Select the user, 
then choose **Delete**.

    ![Go to Users hub](_img/_shared/users-hub-updated.png)

    ![Delete users from the Users hub](_img/assign-licenses/vso-usershub-deleteuser.png)

0.	To make sure that you've removed the user completely, 
check your [security groups and permissions](add-users.md). 

	[Why don't users appear or disappear promptly in VSTS after I add or delete them in the Users hub?](#users-delay)

0.  If you deleted paid users who had Basic features, 
and you don't want to pay for these users, you must also 
[reduce these users in the Visual Studio Marketplace](../billing/buy-basic-access-add-users.md), 
so you're not charged in your next Azure billing cycle.

	> To reduce or cancel these users for the next month, 
	> you must make updates before the last day of the current month. 
	> Your bill won't show these change until the next 
	> month because paid users are monthly purchases. 


[Troubleshooting](faq-add-delete-users.md)
