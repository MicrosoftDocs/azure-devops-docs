---
title: Set release pipeline permissions in Azure Pipelines
ms.topic: how-to
description: Learn how to set user and group permissions to securely manage release pipelines.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Configure release pipeline permissions in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to set user and group permissions to securely manage release pipelines in Azure Pipelines. Permissions control who can view, use, edit, and manage release pipelines and releases.

Once you create a release pipeline, you can set project-level permissions for all release pipelines and object-level permissions for individual release pipelines and stages. You can also set permissions for release stages, which are a subset of permissions inherited from the object-level release pipeline permissions.

The permission hierarchy for release pipelines is:

- project-level release pipelines permissions
- object-level release pipeline permissions
- object-level stage permissions

By default the following users and groups are assigned permissions:

| Group | Role |
|-|-|
| **Contributors** | All permissions except *Administer release permissions*. |
| **Project Administrators** | All permissions. |
| **Readers** | Can view pipelines and releases. |
| **Release Administrators** | All permissions.|
| **Project Collection Administrators** | All permissions.|
| **\<project name\> Build Service(\<organization/collection name\>)** | Can view pipelines and releases.|
| **Project Collection Build Server (\<organization/collection name\>)** | Can view pipelines and releases.|

For permission descriptions, see [Permissions and groups](../../organizations/security/permissions.md#release-object-level).



## Prerequisites

- You must be a member of an administrator group or be allowed *Administer release permissions* to manage permissions.
- A release pipeline must be created to set permissions.

## Set project-level release pipeline permissions

::: moniker range=">=azure-devops-2020"

Follow these steps to update permissions for all releases: 

1. Go to your project and select **Pipelines** > **Releases**.

1. Select the file view icon.

    :::image type="content" source="media/releases-select-file-view.png" alt-text="Screenshot showing selection of the all files view.":::

1. Select the **All pipelines** folder.

    :::image type="content" source="media/releases-select-all-pipelines.png" alt-text="Screenshot showing selection of all release pipelines folder.":::

1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/releases-select-all-pipelines-security.png" alt-text="Screenshot of all release pipelines security dialog.":::

1. Select users and groups to and change their permissions.

    :::image type="content" source="media/releases-all-pipelines-permissions.png" alt-text="Screenshot of all release pipelines security add user or group selection.":::

1. When you're finished, close the dialog to save your changes.

### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

### Remove users or groups from the permissions dialog

To delete a user from the permissions list:  

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When finished, close the dialog to save your changes.

::: moniker-end

::: moniker range="< azure-devops-2020"

Follow these steps to set permissions for all releases: 

1. Go to your project and select **Pipelines** > **Releases** from the menu.

1. Select the file view icon.

    :::image type="content" source="media/releases-select-file-view.png" alt-text="Screenshot showing selection of the all files view.":::

1. Select the **All pipelines** folder.

    :::image type="content" source="media/releases-select-all-pipelines.png" alt-text="Screenshot showing selection of all release pipelines folder.":::

1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/releases-select-all-pipelines-security.png" alt-text="Screenshot of all release pipelines security dialog.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

1. Select a user and group and set the permission to **Allow**, **Deny** or **Not set**, then select **Save changes** or **Undo changes**.

    :::image type="content" source="media/releases-all-pipelines-permissions-2019.png" alt-text="Screenshot of all release pipelines security add user or group selection.":::

1. Repeat the previous step for each user or group to modify their permissions.
1. When you're finished, close the dialog.

::: moniker-end

## Set object-level release pipeline permissions

By default, the object-level permissions for individual release pipelines are inherited from the project-level release pipeline permissions. You can override these inherited permissions for a specific release pipeline.

To override permissions for a release:

::: moniker range=">= azure-devops-2020"

1. Go to your project and select **Pipelines** > **Releases**.
1. Select the file view icon:::image type="icon" source="media/folder-icon.png":::.

1. Select the release pipeline you want to modify, and then select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.

    :::image type="content" source="media/releases-select-pipeline-security.png" alt-text="Screenshot of object-level release pipeline security dialog.":::

1. Select users or groups to set their permissions to **Allow**, **Deny** or **Not set**.

    :::image type="content" source="media/releases-individual-pipeline-permissions.png" alt-text="Screenshot of release pipeline security add user or group selection.":::

1. When you're finished, close the dialog to save your changes.

When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

### Remove users or groups from the permissions dialog

Users and groups can be removed from a release pipeline. Inherited users and groups can't be removed unless inheritance is disabled. 

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When finished, close the dialog to save your changes.

::: moniker-end

::: moniker range="< azure-devops-2020"

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission is not inherited. If inheritance is enabled you can change an explicitly set permission back to the inherited value.

1. Go to your project and select **Pipelines** > **Releases**.
1. Select the file view icon:::image type="icon" source="media/folder-icon.png":::.

1. Select the release pipeline you want to modify, select **More actions**:::image type="icon" source="../../media/icons/more-actions.png" border="false":::, and select **Security**.

    :::image type="content" source="media/releases-select-pipeline-security.png" alt-text="Screenshot of object-level release pipeline security dialog.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

1. Select a user and group and set the permission to **Allow**, **Deny**, or **Not set**, or the inherited value (for example, **Allow (inherited)**).

    :::image type="content" source="media/releases-individual-pipeline-permissions-2019.png" alt-text="Screenshot of release pipeline security add user or group selection.":::

1. Select **Save changes** or you can select **Undo changes** to undo the changes. You must save the changes to apply the permissions before selecting another user or group.

1. To remove a user or group, select the user or group and select **Remove**. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **OK** when you're finished.

When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. Select **Clear explicit permissions** to reset all explicitly set permissions to their inherited settings. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

::: moniker-end

## Set release stage permissions

Stage permissions are a subset of permissions that are inherited from the object-level release pipeline permissions. 

To set permissions for a stage:

1. Go to your project, select **Pipelines** > **Releases**.
1. Select the file view icon :::image type="icon" source="media/folder-icon.png"::: and select **All pipelines**.
1. Select the release pipeline you want to modify from **All pipelines** 

    :::image type="content" source="media\release-select-pipeline-for-stage-permissions.png" alt-text="Screenshot of the release pipeline stage security dialog.":::

1. Select the stage you want to modify.
1. Select the **More options icon** :::image type="icon" source="../../media/icons/actions-icon.png"::: and select **Security**.

    :::image type="content" source="media/releases-select-stage-security.png" alt-text="Screenshot showing release stage security navigation selections.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

1. Select users and groups to set their permissions to **Allow**, **Deny** or **Not set**.

    :::image type="content" source="media/releases-stage-permissions.png" alt-text="Screenshot of release pipeline stage security dialog.":::

1. Select **Save changes** or you can select **Undo changes** to undo the changes. You must save the changes to apply the permissions before selecting another user or group.
1. You can select more users and groups to change their permissions.
1. To remove a user or group, select the user or group and select **Remove**. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **OK** when you're finished.


When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. Select **Clear explicit permissions** to reset all explicitly set permissions to their inherited settings. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

## Related articles

- [Release permissions reference](../../organizations/security/permissions.md#release-object-level)
- [Download release permissions report](../../organizations/security/download-permissions-report-release.md)