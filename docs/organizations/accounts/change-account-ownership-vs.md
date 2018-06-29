---
title: Change the VSTS account owner 
description: Learn how to assign a different user as the owner for your VSTS account and what permissions are required to make updates
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Change account owner for VSTS

**VSTS**

When your team's roles and responsibilities change, change your VSTS account owner to another user.

<a name="ChangeOwner"></a>

## Prerequisites

You must have VSTS [project collection administrator or account owner permissions](faq-change-account-ownership.md#find-owner-pca).
If no one has these permissions, contact
[VSTS Support](https://visualstudio.microsoft.com/team-services/support).

Make sure that the new owner:

* Has been added and invited to your VSTS account (```https://{youraccount}.visualstudio.com```).
* Has signed in to your VSTS account, created a Visual Studio profile, and agreed to the Terms of Service.
* Has accessed the account, following initial profile creation, at least once.

  >[!div class="mx-imgBorder"]
![Last sign in never](_img/change-account-ownership/user_last_access.png)

## Change VSTS account owner

1. Sign in to your VSTS account (```https://{youraccount}.visualstudio.com```).

   [Why am I asked to choose between my work or school account and my personal account?](faq-change-account-ownership.md#ChooseOrgAcctMSAcct)

2. To find the current account owner, go to your VSTS account settings.

   ![Go to account settings](../../_shared/_img/account-settings-new-ui.png)

3. Under **Settings**, find the current owner.

   ![Find current owner](../../_shared/_img/account-owner-new-ui.png)

4. Change the account owner.

   ![Change current owner](_img/change-account-ownership/vsocontrolpanelchangeowner.png)

5. Find and select the new owner.

   ![Find and select owner](_img/change-account-ownership/vsofindnewaccountowner.png)

   [Can't find the person you want?](faq-change-account-ownership.md#NoNewOwner)

6. Save your changes.

   ![Select new owner, save changes](_img/change-account-ownership/vsosavenewaccountowner.png)

   Your VSTS account has a new owner!
