---
title: Change the owner of an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contperf-fy21q4, linked-from-support
description: Learn how to assign a different user as the owner for your organization, as well as what permissions are required.
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 07/20/2021
monikerRange: 'azure-devops'
---

# Change the organization owner

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

As roles and responsibilities change, you can change the owner for your Azure DevOps organization.

> [!NOTE]  
> Changing the organization owner doesn't remove the old owner from the Project Collection Administrators group.

## Prerequisites

You must be a [**Project Collection Administrator** or an **organization Owner**](../security/lookup-organization-owner-admin.md). If no one in the organization has these permissions, contact [Azure DevOps Support](https://developercommunity.visualstudio.com/spaces/21/index.html). Make sure the owner has completed the following tasks:

- Sign in to your organization, create a profile, and agree to the Terms of Service.
- Access the organization at least once after creating an initial profile.

   ![Last access date](media/change-organization-ownership/user-last-access.png)

> [!TIP]
> For organizations connected to Azure Active Directory (Azure AD),  if your organization Owner and any other Project Collection Administrators are no longer active, you can [transfer ownership to another user](resolve-orphaned-organization.md).  

## Change organization Owner

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Select "Organization settings"](../../media/settings/open-admin-settings-vert.png)

3. Select **Overview**, and then **Change owner**.  

   :::image type="content" source="media/change-organization-ownership/change-organization-owner.png" alt-text="Instructions to select Overview, and then Change owner.":::

4. Select a user from the dropdown menu, or search for a user by entering the user's name, and then select **Change**.

   ![Enter and save a new organization Owner](media/change-organization-ownership/save-new-organization-owner.png)

Your organization has a new owner.

## Related articles

- [Resolve inactive organization owner](resolve-orphaned-organization.md)
- [Change organization location](change-organization-location.md)
- Rename your organization
- [Connect your organization to Azure AD](connect-organization-to-azure-ad.md)
