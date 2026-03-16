---
title: Restrict administrators from inviting new users
titleSuffix: Azure DevOps Services
description: Learn how to manage the policy that allows Team and Project Administrators to invite new users to Azure DevOps Services.
ai-usage: ai-assisted
ms.assetid: 
ms.topic: how-to
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/09/2026
---

# Restrict administrators from inviting new users

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

By default, all administrators can invite new users to their Azure DevOps organization. When you disable this policy, Team and Project Administrators can't invite new users or add Microsoft Entra groups. However, Project Collection Administrators (PCAs) can still add new users and Microsoft Entra groups to the organization regardless of the policy status. Additionally, if a user is already a member of the organization, Project and Team Administrators can add that user to specific projects.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| Permissions | Member of the [**Project Collection Administrators** group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group. |
| Microsoft Entra | Member in the destination Microsoft Entra ID. For more information, see [Convert a Microsoft Entra guest into a member](../accounts/faq-azure-access.yml). |

## Turn off policy

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

1. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)
   
3. Under Security, select **Policies**, and then move the toggle to **off**.   

   :::image type="content" source="media/user-policy-invite-new-users.png" alt-text="Screenshot showing the policy toggle to limit Team and Project Administrators from inviting new users.":::

Now, only Project Collection Administrators can invite new users to Azure DevOps.

> [!NOTE]
> Project and Team Administrators can add users directly to their projects through the permissions blade. However, if they attempt to add users through the **Add Users** button located in **Organization settings** > **Users**, they can't see it.
> Adding a user directly through **Project settings** > **Permissions** doesn't automatically add the user to the **Organization settings** > **Users** list. The user must sign in to the system for the user to appear in the Users list.

## Related content
- [Default permissions and access](permissions-access.md) 
- [Permission lookup guide](permissions-lookup-guide.md) 
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
