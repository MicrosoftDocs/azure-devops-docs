---
title: Change the VSTS organization owner 
description: Learn how to assign a different user as the owner for your VSTS organization and what permissions are required to make updates
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

# Change organization owner for VSTS

**VSTS**

When your team's roles and responsibilities change, change your VSTS organization owner to another user.

<a name="ChangeOwner"></a>

## Prerequisites

You must have VSTS [project collection administrator or organization owner permissions](faq-change-organization-ownership.md#find-owner-pca).
If no one has these permissions, contact
[VSTS Support](https://visualstudio.microsoft.com/team-services/support).

Make sure that the new owner:

* Has been added and invited to your VSTS organization (```https://{yourorganization}.visualstudio.com```).
* Has signed in to your VSTS organization, created a Visual Studio profile, and agreed to the Terms of Service.
* Has accessed the organization, following initial profile creation, at least once.

   ![Last sign in never](_img/change-organization-ownership/user-last-access.png)

## Change VSTS organization owner

[!INCLUDE [temp](../../work/_shared/new-agile-hubs-feature.md)]

# [New navigation](#tab/new-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).
2. Choose ![gear icon](../../_img/icons/gear-icon.png), the gear Admin settings icon.

   ![Choose the gear, Admin settings icon](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Choose Overview and you will see the organization owner listed beneath Organization information.

   ![Find organization owner](_img/change-organization-ownership/find-organization-owner.png)

4. Change the organization owner.

   ![Change organization owner](_img/change-organization-ownership/change-organization-owner.png)

5. Enter and then **Save** the new organization owner.

   ![Save new organization owner](_img/change-organization-ownership/save-new-organization-owner.png)  

# [Previous navigation](#tab/previous-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

   [Why am I asked to choose between my work or school account and my personal account?](faq-change-organization-ownership.md#ChooseOrgAcctMSAcct)

2. To find the current organization owner, go to your VSTS organization settings.

   ![Go to organization settings](../../_shared/_img/organization-settings-new-ui.png)

3. Under **Settings**, find the current owner.

   ![Find current owner](../../_shared/_img/organization-owner-new-ui.png)

4. Change the organization owner.

   ![Change current owner](_img/change-organization-ownership/vsocontrolpanelchangeowner.png)

5. Find and select the new owner.

   ![Find and select owner](_img/change-organization-ownership/vsofindneworganizationowner.png)

   [Can't find the person you want?](faq-change-organization-ownership.md#NoNewOwner)

6. Save your changes.

   ![Select new owner, save changes](_img/change-organization-ownership/vsosaveneworganizationowner.png)

   Your VSTS organization has a new owner!
