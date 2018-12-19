---
title: Change the owner of an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to assign a different user as the owner for your organization, and what permissions are required to make updates
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 12/19/2018
monikerRange: 'vsts'
---

# Change the organization owner in Azure DevOps

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

When your team's roles and responsibilities change, you can assign a different user as the owner for your organization. In this article, we show you what permissions are required and the steps to make this update in Azure DevOps.

> [!NOTE]
> When you remove an owner, they are also removed from the project collection administrator group.

<a name="ChangeOwner"></a>

## Prerequisites

To change the organization owner, you must have [*project collection administrator* or *organization owner* permissions](faq-change-organization-ownership.md#find-owner-pca).
If no one in the organization has these permissions, contact
[Azure DevOps Support](https://azure.microsoft.com/support/devops).

Make sure the new owner has completed the following tasks:

* Signed in to your organization, created a profile, and agreed to the Terms of Service.
* Accessed the organization at least once after creating an initial profile.

   ![Last access date](_img/change-organization-ownership/user-last-access.png)

## Change organization owner

[!INCLUDE [temp](../../_shared/new-navigation-cloud.md)] 

# [New navigation](#tab/new-nav)

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings** .

   ![Select "Organization settings"](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Overview**. The organization owner is listed under *Organization information*.

   ![Overview pane displaying the organization owner](_img/change-organization-ownership/find-organization-owner.png)

4. To change the organization owner, select **X**.

   ![Change organization owner](_img/change-organization-ownership/change-organization-owner.png)

5. Enter a new organization owner name, and then select **Save**.

   ![Enter and save a new organization owner](_img/change-organization-ownership/save-new-organization-owner.png)  

# [Previous navigation](#tab/previous-nav)

1. Sign in to your organization (`https://<yourorganization>.visualstudio.com`).

   [Why am I asked to choose between my work or school account and my personal account?](faq-change-organization-ownership.md)

2. To find the current organization owner, go to **Organization settings**.

   ![Organization settings pane](../../_shared/_img/settings/open-account-settings.png)

3. Find the current organization owner.

   ![Find the current organization owner](_img/change-organization-ownership/find-organization-owner.png)

4. To change the organization owner, select **X**.

   ![Change current organization owner](_img/change-organization-ownership/change-organization-owner.png)

5. Find and select the new organization owner.

   ![Find and select the organization owner](_img/change-organization-ownership/vsofindneworganizationowner.png)

   [Can't find the person you want?](faq-change-organization-ownership.md#NoNewOwner)

6. **Save** your changes.

   ![Select new organization owner, and save changes](_img/change-organization-ownership/vsosaveneworganizationowner.png)

---

   Your organization has a new owner.
