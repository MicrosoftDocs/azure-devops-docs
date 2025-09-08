---
title: Change Project-Level Permissions or Group Membership
titleSuffix: Azure DevOps
description: Learn how to change project-level permissions or group membership in Azure DevOps.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.update: 90-days
ms.date: 08/12/2025
--- 

# Change project-level permissions 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Many permissions get set at the project level. You can grant these permissions by adding a user or group to the **Project Administrators** group. Or, you can grant specific project-level permissions to a custom security group or to a user.

Consider adding users to the **Project Administrators** group when they're tasked with adding or managing teams, area and iteration paths, repositories, service hooks, and service end points.

## Project-level permissions 

[!INCLUDE [project-level-permissions](./includes/project-level-permissions.md)]

> [!NOTE]
> The permission to add or remove project-level security groups and to add and manage project-level group membership is assigned to all members of the **Project Administrators** group. It isn't controlled by a permission surfaced within the user interface. 

### Create tag definition permission

By default, members of the **Contributors** group are assigned the **Create tag definition** permission. Although the **Create tag definition** permission appears in the security settings at the project level, tagging permissions are actually collection-level permissions that are scoped at the project level when they appear in the user interface. To scope tagging permissions to a single project when using a command-line tool, you must provide the GUID for the project as part of the command syntax. Otherwise, your change applies to the entire collection. For more information, see [Security groups, service accounts, and permissions, Work item tags](permissions.md#work-item-tags). 

## Prerequisites

|Category  | Requirements |
|-------------|-------------|
| **Permissions** | Member of the [**Project Administrators**](look-up-project-administrators.md) security group. If you created the organization or collection, you're automatically a member of this group. |
| **Directory services** | [Security groups defined in Microsoft Entra ID or Active Directory](add-ad-aad-built-in-security-groups.md) before adding them to Azure DevOps. |

> [!NOTE]
> Users granted **Stakeholder** access can't access select features even if granted permissions to those features. For more information, see [Stakeholder access quick reference](stakeholder-access.md).
 
<a id="add-user-group"></a>

## Add members to the Project Administrators group 

You can add users who are associated with a project, organization, or collection to the **Project Administrators** group. This group has specific permissions at the organizations or collection level. To add a custom security group, first create the group as described in [Use security groups to manage users and groups](add-remove-manage-user-group-security-group.md).

The following steps show how to add a user to the built-in **Project Administrators** group. The method is similar to adding a Microsoft Entra ID or Active Directory group. 

::: moniker range="azure-devops"

> [!NOTE]
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

1. Select **Project settings** > **Permissions**.

    :::image type="content" source="media/permissions/open-project-settings-permissions-preview.png" alt-text="Screenshot showing the Permissions section in Project settings.":::

1. Select **Project Administrators** group > **Members** > **Add**.  

    :::image type="content" source="media/project-collection/project-admin-members-add.png" alt-text="Screenshot showing the button to add member in Permissions.":::

1. Enter the name of the user account or custom security group into the text box. You can enter several identities recognized by the system into the **Add users and/or groups** box. The system automatically searches for matches. Choose one or more matches. 

    :::image type="content" source="media/project-collection/add-member-project-admin.png" alt-text="Screenshot showing the Add users and group dialog box.":::

1. Select **Save**. 

::: moniker-end 

::: moniker range="<azure-devops"

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

1. Select **Project settings** > **Security**.

    :::image type="content" source="media/view-permissions/open-security-project-level-vert.png" alt-text="Screenshot showing selected Project settings and Security buttons." lightbox="media/view-permissions/open-security-project-level-vert-expanded.png":::

1. Select **Project Administrators** group > **Members** > **Add**.

    :::image type="content" source="media/project-level-permissions-add-member.png" alt-text="Screenshot showing Project Settings, Security, Add member selections.":::

1. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose one or more matches. 

    :::image type="content" source="media/project-level-permissions-add-a-user.png" alt-text="Screenshot showing Add users and group dialog, on-premises.":::

    > [!NOTE]
    > Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Default permissions quick reference](permissions-access.md).

1. Select **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon, and then view the additions.  

::: moniker-end 

## Change permissions for a group 

You can modify project-level permissions for any group associated with a project, except for the **Project Administrators** group. Also, each team that is added to a project is automatically included as a project-level group. To add security groups to a project, see [Use security groups to manage users and groups](add-remove-manage-user-group-security-group.md). To understand permission assignments and inheritance, see [About permissions, Permission states](about-permissions.md#permission-states).

::: moniker range="azure-devops"

> [!NOTE]
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

1. Open the **Permissions** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

   > [!NOTE]
   > You can't change the permission settings for the **Project Administrators** group. This is by design.  

1. From the **Permissions** page, choose the group whose permissions you want to change. 

    For example, choose the **Contributors** group and change their permissions for **Delete and restore work items** to **Allow**.

    :::image type="content" source="media/project-collection/delete-restore-work-items-permissions-s154.png" alt-text="Screenshot of Contributors group, permissions, preview page.":::

    Your changes are automatically saved. 

    > [!TIP]
    > If you add a user to the **Contributors** group, they can add and modify work items. You can restrict permissions of users or user groups to add and modify work items based on the **Area Path**. For more information, see [Modify work items under an area or iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path).
 
::: moniker-end

::: moniker range="< azure-devops"

1. From the **Security** page, choose the group whose permissions you want to change. 

    For example, you can grant permission to the **Contributors** group to delete and restore work items.

    :::image type="content" source="media/project-level-permissions-contributors-group.png" alt-text="Screenshot of Contributors group, permissions, on-premises versions.":::

    > [!TIP]
    > If you add a user to the Contributors group, they can add and modify work items. You can restrict permissions of users or user groups to add and modify work items based on the area path. For more information, see [Modify work items under an area or iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path).

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

    > [!NOTE]
    > You can't change the permission settings for the **Project Administrators** group. This is by design.  

1. Select **Save changes**.

::: moniker-end

## Change permissions for a user 

You can change the project-level permissions for a specific user. To understand permission assignments and inheritance, see [About permissions, Permission states](about-permissions.md#permission-states).

::: moniker range="azure-devops"

1. Open the **Permissions** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

1. From the **Permissions** page, select **Users**, and then choose the user whose permissions you want to change.

   :::image type="content" source="media/change-project-level/choose-users-select-user.png" alt-text="Screenshot of Users tab, choose a user.":::

1. From the **Permissions** page, change the assignment for one or more permissions. 

   For example, change the **Edit project-level information** for *Christie Church*. 

   :::image type="content" source="media/change-project-level/change-project-level-permission-for-user.png" alt-text="Screenshot of selected users, Permissions.":::

   Dismiss the dialog when you're done. Your changes are automatically saved. 

::: moniker-end

::: moniker range="< azure-devops"

1. Open the **Security** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

1. From the **Security** page, in the **Filter users and groups** text box, enter the name of the user whose permissions you want to change. 

1. Change the assignment for one or more permissions. 

   For example, we change the **Edit project-level information** for *Christie Church*. 

   :::image type="content" source="media/change-project-level/change-project-level-permission-for-user-current-page.png" alt-text="Screenshot of selected user, change Edit project-level information permission level.":::

1. Select **Save changes**.

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
