---
title: Change the VSTS organization owner 
description: Learn how to assign a different user as the owner for your VSTS organization, and learn what permissions are required to make updates.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 07/31/2018
monikerRange: 'vsts'
---

# Change the organization owner for VSTS

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

When your team's roles and responsibilities change, change your Visual Studio Team Services (VSTS) organization owner to another user.

<a name="ChangeOwner"></a>

## Prerequisites

To change the organization owner, you must have VSTS [*project collection administrator* or *organization owner* permissions](faq-change-organization-ownership.md#find-owner-pca).
If no one in the organization has these permissions, contact
[VSTS Support](https://visualstudio.microsoft.com/team-services/support).

Make sure that the new owner:

* Has been added and invited to your VSTS organization (`https://<yourorganization>.visualstudio.com`).
* Has signed in to your VSTS organization, created a Visual Studio profile, and agreed to the Terms of Service.
* Has accessed the organization at least once after creating an initial profile.

   ![Last access date](_img/change-organization-ownership/user-last-access.png)

## Change VSTS organization owner

[!INCLUDE [temp](../../_shared/new-navigation.md)] 

# [New navigation](#tab/new-nav)

1. Sign in to your VSTS organization (`https://<yourorganization>.visualstudio.com`).

2. Select **Admin settings** (![gear icon](../../_img/icons/gear-icon.png)).

   ![Select "Admin settings"](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Overview**.  
    The organization owner is listed under **Organization information**.

   ![Overview pane displaying the organization owner](_img/change-organization-ownership/find-organization-owner.png)

4. To change the organization owner, select the **X**.

   ![Change organization owner](_img/change-organization-ownership/change-organization-owner.png)

5. Enter a new organization owner name, and then select **Save**.

   ![Enter and save a new organization owner](_img/change-organization-ownership/save-new-organization-owner.png)  

# [Previous navigation](#tab/previous-nav)

1. Sign in to your VSTS organization (`https://<yourorganization>.visualstudio.com`).

   [Why am I asked to choose between my work or school account and my personal account?](faq-change-organization-ownership.md)

2. To find the current organization owner, go to your VSTS organization settings pane.

   ![Organization settings pane](../../_shared/_img/organization-settings-new-ui.png)

3. Under **Settings**, find the current organization owner.

   ![Find the current organization owner](../../_shared/_img/organization-owner-new-ui.png)

4. Change the organization owner.

   ![Change current organization owner](_img/change-organization-ownership/vsocontrolpanelchangeowner.png)

5. Find and select the new organization owner.

   ![Find and select the organization owner](_img/change-organization-ownership/vsofindneworganizationowner.png)

   [Can't find the person you want?](faq-change-organization-ownership.md#NoNewOwner)

6. Save your changes.

   ![Select new organization owner, and save changes](_img/change-organization-ownership/vsosaveneworganizationowner.png)

---

   You have successfully changed your VSTS organization owner.
