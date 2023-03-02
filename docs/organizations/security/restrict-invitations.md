---
title: Restrict Team and Project Administrators from inviting new users
titleSuffix: Azure DevOps Services
description: Learn how to manage the policy that allows Team and Project Administrators to invite new users to Azure DevOps Services.
ms.assetid: 
ms.topic: how-to
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/02/2023
---

# Restrict new user invitations from Project and Team Administrators 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

By default, all administrators can invite new users to their Azure DevOps organization. Disabling this policy blocks Team and Project Administrators from inviting new users. Project Collection Administrators (PCAs) can add new users to the organization, regardless of the policy status. If a user is already a member of the organization, Project and Team Administrators can add that user to a project.

<!---

|  Role               |Policy **on** |Policy **off**  |
|----------------|---------|---------|
|Team Administrators|can add new users to their team, which adds these users to the organization, can add users who are already in the organization to their team | **cannot** add new users to their team, which adds these users to the organization, can add users who are already in the organization to their team        |
|Project Administrators| can add new users to their team, which adds these users to the organization, 
can add users who are already in the organization to their project   |  **cannot** add new users to their team, which adds these users to the organization
can add users who are already in the organization to their team       |
|Project Collection Administrators| can add new users to the organization    |  can add new users to the organization       |
-->

## Prerequisites

You must be a member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.

## Turn off policy

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
   
   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Under Security, select **Policies**, and then move the toggle to **off**.   

   :::image type="content" source="media/user-policy-invite-new-users.png" alt-text="Turn policy off to limit Team and Project administrators from inviting new users":::

Now, only Project Collection Administrators can invite new users to Azure DevOps.

> [!NOTE]
> Project and Team Administrators can directly add users to their projects through the permissions blade. However, if they attempt to add users through the **Add Users** button located in the **Organization settings** > **Users** section, it's not visible to them.
> Adding a user directly through **Project settings** > **Permissions** doesn't result in the user appearing automatically in the **Organization settings** > **Users** list. For the user to be reflected in the Users list, they must sign in to the system.

### Known limitation
Even with the policy turned off, Team and Project Administrators can re-invite users who were previously members of the organization. 

## Related articles
- [Default permissions and access](permissions-access.md) 
- [Permission lookup guide](permissions-lookup-guide.md) 
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
