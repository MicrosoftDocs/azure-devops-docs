---
title: Change the owner of an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contperf-fy21q4
description: Learn how to assign a different user as the owner for your organization. Also learn what permissions are required to make updates.
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 05/03/2021
monikerRange: 'azure-devops'
---

# Change the organization owner

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

As roles and responsibilities change, you can change the owner for your organization. Learn how to update the organization owner in Azure DevOps.

> [!TIP]
> For organizations connected to Azure Active Directory (Azure AD),  if your organization Owner and any other Project Collection Administrators are no longer active, you can [transfer ownership to another user](resolve-orphaned-organization.md).  

> [!NOTE]  
> Changing the organization owner does not remove the old owner from the Project Collection Administrators group.

<a name="ChangeOwner"></a>

## Prerequisites

- You must be a [Project Collection Administrator or an organization Owner](../security/lookup-organization-owner-admin.md).  
  
  If no one in the organization has these permissions, contact
[Azure DevOps Support](https://developercommunity.visualstudio.com/spaces/21/index.html). Make sure the new owner has completed the following tasks:

  * Signed in to your organization, created a profile, and agreed to the Terms of Service.
  * Accessed the organization at least once after creating an initial profile.

   ![Last access date](media/change-organization-ownership/user-last-access.png)

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

- [Assign a new owner to your orphaned organization](resolve-orphaned-organization.md)
- [Change organization location](change-organization-location.md)
- [Connect your organization to Azure AD](connect-organization-to-azure-ad.md)

 
