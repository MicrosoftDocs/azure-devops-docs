---
title: Change Project-Level Permissions or Group Membership
titleSuffix: Azure DevOps
description: Learn how to change project-level permissions or group membership in Azure DevOps.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.update: 90-days
ms.date: 01/09/2026
--- 

# Change project-level permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Many permissions are managed at the project level. You can grant project-level capabilities by adding users or groups to the built-in **Project Administrators** group, or by assigning specific project permissions to a custom security group or an individual user.

Consider adding users to **Project Administrators** when they need to add or manage teams, area and iteration paths, repositories, service hooks, or service connections.

What you'll learn:
- How to add members to the Project Administrators group
- How to change project-level permissions for groups or users
- Key considerations for tagging permissions, Microsoft Entra groups, and Stakeholder access

## Project-level permissions

[!INCLUDE [project-level-permissions](./includes/project-level-permissions.md)]

> [!NOTE]
> The permission that allows adding or removing project-level security groups (and managing their membership) is granted to all members of the **Project Administrators** group. This capability is not exposed as a separate permission in the user interface.

### Tagging permission behavior (Create tag definition)

By default, the **Contributors** group is granted the **Create tag definition** permission. Although this permission appears at the project level in the UI, tagging is implemented as a collection-level capability. When you modify tagging permissions using command-line tools, provide the project GUID to scope the change to a single project; otherwise your change applies to the entire collection. For more information, see [Security groups, service accounts, and permissions — Work item tags](permissions.md#work-item-tags).

## Prerequisites

| Category | Requirements |
|----------|--------------|
| **Permissions** | Member of the [**Project Administrators**](look-up-project-administrators.md) group. If you created the organization or collection, you're automatically a member. |
| **Directory services** | If you plan to add directory groups, ensure Microsoft Entra ID groups are available and synced to Azure DevOps. For more information, see [Add built-in security groups](add-ad-aad-built-in-security-groups.md). |

> [!NOTE]
> Users with **Stakeholder** access have limited feature access even if specific permissions are granted. See [Stakeholder access quick reference](stakeholder-access.md).

<a id="add-user-group"></a>
## Add members to the Project Administrators group

You can add users or directory groups (for example, Microsoft Entra ID groups) to the built-in **Project Administrators** group. To add a custom security group to a project, first create the group as described in [Use security groups to manage users and groups](add-remove-manage-user-group-security-group.md).

Cloud (Azure DevOps Services)
::: moniker range="azure-devops"
> [!NOTE]
> To enable the **Project Permissions Settings** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

1. Sign in to your organization: `https://dev.azure.com/{yourorganization}`.  
2. Select **Project settings** > **Permissions**.  

    :::image type="content" source="media/permissions/open-project-settings-permissions-preview.png" alt-text="Permissions section in Project settings.":::

3. Choose the **Project Administrators** group > **Members** > **Add**.  

    :::image type="content" source="media/project-collection/project-admin-members-add.png" alt-text="Add member in Permissions.":::

4. Enter the user account or security group name in the **Add users and/or groups** box, select one or more matches, and then select **Save**.

    :::image type="content" source="media/project-collection/add-member-project-admin.png" alt-text="Add users and group dialog.":::
::: moniker-end

On-premises / older UI
::: moniker range="<azure-devops"
1. Sign in to your organization: `https://dev.azure.com/{yourorganization}`.  
2. Select **Project settings** > **Security**.

    :::image type="content" source="media/view-permissions/open-security-project-level-vert.png" alt-text="Project settings, Security.":::

3. Select **Project Administrators** > **Members** > **Add**.

    :::image type="content" source="media/project-level-permissions-add-member.png" alt-text="Project Settings, Security, Add member.":::

4. Enter one or more user or group names, choose matches, and select **Save changes**. Refresh the page to see updates.

    :::image type="content" source="media/project-level-permissions-add-a-user.png" alt-text="Add users dialog, on-premises.":::
::: moniker-end

## Change permissions for a group

You can modify project-level permissions for any project-associated group (except the built-in **Project Administrators** group). Each team added to a project is exposed as a project-level group and can be granted specific permissions.

Cloud (Azure DevOps Services)
::: moniker range="azure-devops"
> [!NOTE]
> To enable the **Project Permissions Settings** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

1. Open **Project settings** > **Permissions**.  
2. Choose the group (for example, **Contributors**).  
3. Toggle permission assignments (Allow / Deny / Inherit). Changes are saved automatically.

    :::image type="content" source="media/project-collection/delete-restore-work-items-permissions-s154.png" alt-text="Contributors group permissions.":::

> [!TIP]
> Adding a user to **Contributors** grants the ability to add and modify work items. To limit that capability by area, scope permissions at the Area Path level — see [Modify work items under an area or iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path).
::: moniker-end

On-premises / older UI
::: moniker range="< azure-devops"
1. Open **Project settings** > **Security**.  
2. Choose the group, update permission assignments, and select **Save changes**.

    :::image type="content" source="media/project-level-permissions-contributors-group.png" alt-text="Contributors group permissions, on-premises.":::
::: moniker-end

For a description of each permission, see [Permissions and groups reference — project-level permissions](permissions.md#project-level-permissions).

> [!NOTE]
> You cannot change the permission settings for the built-in **Project Administrators** group. This is by design.

## Change permissions for a user

You can change project-level permissions for an individual user. Permission inheritance still applies — check the user's group memberships when evaluating effective permissions.

Cloud (Azure DevOps Services)
::: moniker range="azure-devops"
1. Open **Project settings** > **Permissions**.  
2. Select **Users**, pick the user, and update permission assignments. Changes are saved automatically.

    :::image type="content" source="media/change-project-level/choose-users-select-user.png" alt-text="Users tab, select a user.":::

3. Make the required permission changes (for example, **Edit project-level information**), then close the dialog.

    :::image type="content" source="media/change-project-level/change-project-level-permission-for-user.png" alt-text="Change permission for selected user.":::
::: moniker-end

On-premises / older UI
::: moniker range="< azure-devops"
1. Open **Project settings** > **Security**.  
2. Use **Filter users and groups** to find a user, change permissions, and select **Save changes**.

    :::image type="content" source="media/change-project-level/change-project-level-permission-for-user-current-page.png" alt-text="Change permission for user, on-premises.":::
::: moniker-end

[!INCLUDE [enable-mcp-server](../../boards/includes/enable-mcp-server.md)]

## Next step

> [!div class="nextstepaction"]
> [Manage projects](../projects/about-projects.md)

## Related content

- [Set object-level permissions](set-object-level-permissions.md)
- [About permissions and security groups](about-permissions.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [Security groups, service accounts, and permissions reference](permissions.md)
- [Manage and configure team tools](../../organizations/settings/manage-teams.md)
