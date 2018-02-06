---
title: Change the VSTS account owner 
description: How to change account owner in VSTS (Visual Studio Online, VSO, VSTS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.manager: douge
ms.author: chcomley
ms.date: 10/17/2017
---

#  Change account owner for VSTS

**VSTS**

When your team's roles and responsibilities change, 
you can change your VSTS account owner to another user. 

<a name="ChangeOwner"></a>
## Before you start

You must have at least Basic access, not Stakeholder, and VSTS 
[project collection administrator or account owner permissions](faq-change-account-ownership.md#find-owner-pca). 
If no one has these permissions, contact 
[VSTS Support](https://www.visualstudio.com/team-services/support).

Make sure that the new owner: 

*	Has been added and invited to your VSTS account 
(```https://{youraccount}.visualstudio.com```).  
*	Also has at least Basic access, not Stakeholder. 
Learn [how to manage users and access](add-account-users-assign-access-levels.md).  
*	Has signed in to your VSTS account, 
created a Visual Studio profile, 
and agreed to the Terms of Service. 

##	Change VSTS account owner

0.	Sign in to your VSTS account 
(```https://{youraccount}.visualstudio.com```). 

	[Why am I asked to choose between my work or school account and my personal account?](faq-change-account-ownership.md#ChooseOrgAcctMSAcct)

0.	To find the current account owner, 
go to your VSTS account settings

	![Go to account settings](../_shared/_img/account-settings-new-ui.png)

0.	Under **Settings**, find the current owner.

	![Find current owner](../_shared/_img/account-owner-new-ui.png)

0.	Change the account owner.

	![Change current owner](_img/change-account-ownership/vsocontrolpanelchangeowner.png)

0.	Find and select the new owner.

	![Find and select owner](_img/change-account-ownership/vsofindnewaccountowner.png)

	[Can't find the person you want?](faq-change-account-ownership.md#NoNewOwner) 

0.	Save your changes.

	![Select new owner, save changes](_img/change-account-ownership/vsosavenewaccountowner.png)

	Your VSTS account has a new owner! 

