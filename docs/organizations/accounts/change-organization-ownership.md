---
title: Change the owner of an organization
titleSuffix: Azure DevOps Services
ms.custom: linked-from-support
description: Learn how to assign a different user as the owner for your organization and which permissions are required.
ms.subservice: azure-devops-organizations
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 10/22/2024
monikerRange: 'azure-devops'
---

# Change the organization owner

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

As roles and responsibilities change, you can change the owner for your organization.

> [!NOTE]  
> When you change the organization owner, the old owner is not removed from the Project Collection Administrators group.

## Prerequisites

- **Permissions:** Be a member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.
- **New owner tasks:**
  - Sign in to your organization, create a profile, and agree to the Terms of Service.
  - Access the organization at least once after creating your initial profile.

> [!TIP]
> For organizations connected to Microsoft Entra ID, if your organization owner and all other Project Collection Administrators are no longer active, you can [transfer ownership to another user](resolve-orphaned-organization.md).

## Change organization owner

To change the organization owner, do the following steps:

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing Organization settings button emphasized.":::

3. Select **Overview** > **Change owner**.  

   :::image type="content" source="media/change-organization-ownership/change-organization-owner.png" alt-text="Screenshot showing Overview, and then Change owner buttons emphasized.":::

4. Select a user from the dropdown menu, or search for a user by entering the user's name, and then select **Change**.

   :::image type="content" source="media/change-organization-ownership/save-new-organization-owner.png" alt-text="Screenshot showing Change button emphasized.":::

Your organization has a new owner. The new owner has full administrative control over the organization, including the ability to manage users, projects, and settings. They can also configure security policies, access levels, and billing information. Ensure the new owner is aware of their responsibilities and has the necessary permissions to effectively manage the organization.

## Related articles

- [Resolve inactive organization owner](resolve-orphaned-organization.md)
- [Change organization location](change-organization-location.md)
- [Rename your organization](rename-organization.md)
- [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
