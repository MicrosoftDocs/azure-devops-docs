---
title: Change the owner of an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to assign a different user as the owner for your organization, and what permissions are required to make updates
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 
monikerRange: 'azure-devops'
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

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings** .

   ![Select "Organization settings"](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Overview**, and then **Change owner**.  

   ![Select Overview, and the Change owner](_img/change-organization-ownership/select-overview-change-owner.png)

4. Select a user from the dropdown menu, or search for a user by entering the user's name, and then select **Change**.

   ![Enter and save a new organization owner](_img/change-organization-ownership/save-new-organization-owner.png)

   Your organization has a new owner.
