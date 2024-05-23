---
title: Set task group permissions in Azure Pipelines
ms.topic: how-to
description: Learn how to set user and group permissions to securely manage task groups.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Configure task group permissions in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides guidance on managing task group permissions in Azure Pipelines. The permissions for task groups follow a hierarchical model. By default, all task groups inherit the project-level permissions. Once a task group is created, you can modify the project-level permissions and the object-level permissions for individual task groups.

You can set the following permissions for task groups:

| Permission | Description |
|------------|-------------|
| Administer task group permissions | Can add and remove users or groups to task group security. |
| Delete task group | Can delete a task group. |
| Edit task group | Can create, modify, or delete a task group. |

The default permissions for security groups are:

[!INCLUDE [temp](../../organizations/security/includes/task-groups.md)]

The creator of a task group has all permissions to the task group.

> [!NOTE]
> Task groups aren't supported in YAML pipelines, but templates are. For more information, see [YAML schema reference](/azure/devops/pipelines/yaml-schema/steps-template).

## Prerequisites

- You must be a member of an administrator group or be allowed *Administer task group permissions* to manage permissions.
- A task group must exist to set project- and object-level permissions.

## Set project-level task group permissions

::: moniker range="> azure-devops-2020"

Follow these steps to set permissions for project-level task groups:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of task group menu item.":::

1. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Screenshot of task groups security selection.":::

1. Select users and groups to set their permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media/task-groups-project-level-permissions.png" alt-text="Screenshot of task group security dialog.":::

1. When finished, close the dialog to save your changes.

### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

### Remove users or groups from the permissions dialog

To remove a user from the permissions list:  

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When finished, close the dialog to save your changes.

::: moniker-end

::: moniker range="<= azure-devops-2020"

Follow these steps to set permissions for project-level task groups:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of Task group selection.":::

1. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Screenshot of task groups security selection.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

1. Select a user or group to set the permissions to **Allow**, **Deny** or **Not set**.

    :::image type="content" source="media/task-group-project-level-permissions-2019.png" alt-text="Screenshot of pipeline task groups security dialog.":::

1. Select **Save changes** or you can select **Undo changes** to undo the changes. You must save the changes to apply the permissions before selecting another user or group.
1. You can select more users and groups to change their permissions.
1. Select **Close** when you're finished.

::: moniker-end

## Set object-level task group permissions

::: moniker range=">=azure-devops-2022"

Follow these steps to set permissions for individual task groups:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of Task group selection.":::

1.  Select a task group. 

1. Select **More commands** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: and select **Security**. 

1. Select users and groups to set their permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media\task-group-individual-permission.png" alt-text="Screenshot of object-level task group security dialog.":::

1. When finished, close the dialog to save your changes.

When a permission for an inherited user or group is explicitly set, inheritance is disabled for that specific permission. Change the permission to **Not set** to restore inheritance. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the settings for all permissions revert to the project level.

### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

### Remove users or groups from the permissions dialog

Users and groups can be removed from the task group. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When finished, close the dialog to save your changes.

::: moniker-end

::: moniker range="azure-devops-2020"

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission is not inherited. If inheritance is enabled you can change an explicitly set permission back to the inherited value.

Follow these steps to set permissions for individual task groups:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of Task group selection.":::

1.  Select a task group. 

1. Select **More commands** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: and select **Security**. 

1. Select users and groups to set their permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media\task-group-individual-permission.png" alt-text="Screenshot of object-level task group security dialog.":::

1. When finished, close the dialog to save your changes.

When a permission for an inherited user or group is explicitly set, inheritance is disabled for that specific permission. Change the permission to **Not set** to restore inheritance. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the settings for all permissions revert to the project level.

### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

### Remove users or groups from the permissions dialog

Users and groups can be removed from the task group. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When finished, close the dialog to save your changes.

::: moniker-end

::: moniker range="< azure-devops-2020"

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission is not inherited. If inheritance is enabled you can change an explicitly set permission back to the inherited value.

Follow these steps to set permissions for a task group:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-menu-item-2019.png" alt-text="Screenshot of Task group selection.":::

1. Select a task group. 

1. Select **More commands** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: > **Security**. 
1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 
1. Select users and groups to set their permissions to **Allow**, **Deny** or **Not set**.

    :::image type="content" source="media/task-group-individual-permissions-2019.png" alt-text="Screenshot of object-level task group security dialog.":::

1. Select **Save changes** or you can select **Undo changes** to undo the changes. You must save the changes to apply the permissions before selecting another user or group.
1. You can select more users and groups to change their permissions.
1. To remove a user or group, select the user or group and select **Remove**. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **OK** when you're finished.

When a permission for an inherited user or group is explicitly set, inheritance is disabled for that specific permission. Change the permission to **Not set** to restore inheritance. Select **Clear explicit permissions** to reset all explicitly set permissions to their inherited settings. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the settings for all permissions revert to the project level.

::: moniker-end

## Related articles

- [Task groups for builds and releases](../../pipelines/library/task-groups.md)