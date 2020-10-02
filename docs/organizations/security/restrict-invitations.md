---
title: Restrict Team and Project administrators from inviting new users
titleSuffix: Azure DevOps Services
description: Learn how to manage the policy that allows Team and Project Administrators to invite new users to Azure DevOps Services.
ms.assetid: 
ms.topic: conceptual
ms.technology: devops-security
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/03/2020
---

# Restrict new user invitations from Project and Team Administrators 

[!INCLUDE [temp](../../includes/version-vsts-only.md)]

By default, all administrators can invite new users to Azure DevOps. Disabling this policy will block Team and Project Administrators from inviting new users. Project Collection Administrators (PCAs) can add new users to the organization, regardless of the policy status.

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

You must be a Project Collection Administrator to manage this policy.

## Turn policy off

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
   
   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Under Security, select **Policies**, and then move the toggle to **off**.   

   :::image type="content" source="media/user-policy-invite-new-users.png" alt-text="Turn policy off to limit Team and Project administrators from inviting new users":::

Now, only Project Collection Administrators can invite new users to Azure DevOps.

## Related articles
- [Default permissions and access](permissions-access.md) 
- [Permission lookup guide](permissions-lookup-guide.md) 
- [About permissions and groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
