---
title: Set Build Pipeline Permissions in Azure Pipelines 
ms.topic: how-to
description: Understand how to set project and object level permissions to securely manage build pipelines.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Configure pipeline permissions in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to secure your build pipelines by setting user and group permissions to control access to specific functions and tasks.

Pipeline security follows a hierarchical model of user and group permissions. Project-level permissions are inherited at the object level by all pipelines in the project. You can change inherited and default user and group permissions for all pipelines at the project- and object-levels. You can't change permissions set by the system.

The default security groups for pipelines are:

| Group | Description |
|-------|-------------|
| Build Administrators | Administer build permissions and manage pipelines and builds. |
| Contributors | Manage pipelines and builds, but not build queues. This group includes all team members.|
| **Project Administrators** | Administer build permissions and manage pipelines and builds. |
| Readers | View pipeline and builds. |
| Project Collection Administrators | Administer build permissions and manage pipelines and builds. |
| Project Collection Build Administrators | Administer build permissions and manage pipelines and builds. |
| Project Collection Build Service Accounts | Manage builds. |
| Project Collection Test Service Accounts | View pipelines and builds. |

The system automatically creates the *\<project name\> Build Service (collection name)* user, a member of the *Project Collection Build Service Accounts* group. This user executes build services within the project.

Depending on the resources you use in your pipelines, your pipeline could include other built-in users. For instance, if you're using a GitHub repository for your source code, a GitHub user is included.


The default permissions for security groups are:

[!INCLUDE [temp](../../organizations/security/includes/pipelines-build.md)]

For a description of pipeline permissions, see [Pipeline or Build permissions](../../organizations/security/permissions.md#pipeline-or-build-object-level).

## Prerequisites

- You must be a member of the Project Collection Administrators group to manage project collection groups.
- You must be a member of an administrator group or be allowed *Administer build permissions* to manage project level users and groups.

## Set project-level pipeline permissions

::: moniker range=">= azure-devops-2022"

Follow these steps to configure project-level permissions for users and groups across all build pipelines in your project:

1. From your project, select **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines menu selection.":::
    
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**. 

    :::image type="content" source="media/manage-security-all-pipelines.png" alt-text="Screenshot showing pipelines security selection. ":::

1. Select users or groups and set permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media/pipelines-project-level-security-dialog.png" alt-text="Screenshot of project-level pipelines security dialog.":::

1. Repeat the previous step to change the permissions for more groups and users.
1. Close permissions dialog to save the changes. 

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

::: moniker range="azure-devops-2020"

Follow these steps to configure project-level permissions for users and groups across all build pipelines in your project:

1. From your project, select **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines menu selections.":::
    
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**. 

    :::image type="content" source="media/manage-security.png" alt-text="Screenshot showing security selection for all pipelines in a project. ":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 
1. Select a user or group and set the permissions.

    :::image type="content" source="media/pipelines-project-level-permissions-2020.png" alt-text="Screenshot showing project-level pipeline security dialog.":::

1. Repeat the previous step to change the permissions for more groups and users.
1. Select **Save changes** or you can select **Undo changes** to undo the changes.

1. To remove a user or group from the list, select the user or group and select **Remove**.
1. Select **Close**.

Your project-level pipelines permissions are set.

::: moniker-end

::: moniker range="azure-devops-2019"

Follow these steps to configure project-level permissions for users and groups across all build pipelines in your project:

1. Go to your project, select the **Builds** from the menu.

1. Select the folders icon and select the **All build pipelines** folder.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.

    :::image type="content" source="media/all-pipelines-security-selection-2019.png" alt-text="Screenshot showing all pipelines security selections.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

    :::image type="content" source="media/pipeline-security-add-user-2019.png" alt-text="Screenshot of pipeline security add user or group selection":::

1. Select a user or group and set the permissions.

    :::image type="content" source="media/individual-pipeline-permissions-dialog-2019.png" alt-text="Screenshot of pipeline security dialog.":::

1. Select **Save changes** or you can select **Undo changes** to undo the changes.
1. Repeat the previous step to change the permissions for more groups and users.
1. To remove a user or group from the list, select the user or group and select **Remove**.
1. Select **Close**.

::: moniker-end

## Set object-level pipeline permissions

::: moniker range=">= azure-devops-2022"

By default, object-level permissions for individual pipelines inherit the project-level permissions. You can override the inherited project-level permissions. 

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission is not inherited. If inheritance is enabled you can change an explicitly set permission back to the inherited value.


Complete the following steps to configure permissions for a pipeline.

1. From within your project, select **Pipelines** .
    
   :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines menu selection.":::

1. Select a pipeline, then select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**. 

   :::image type="content" source="media/individual-pipeline-more-actions-menu.png" alt-text="Screenshot showing selected security option from a pipeline's more actions menu.":::

1. Select a user or group and set the permissions.

    :::image type="content" source="media/individual-pipeline-security-dialog.png" alt-text="Screenshot of object-level pipeline security dialog.":::

1. Repeat the previous step to change the permissions for more groups and users.
1. When you're finished, close the dialog to save your changes.

### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

### Remove users or groups from the permissions dialog

Users and groups can be removed from the pipeline's permissions. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When finished, close the dialog to save your changes.


::: moniker-end 

::: moniker range="azure-devops-2020"

By default, object-level permissions for individual pipelines inherit the project-level permissions. You can override the inherited permissions. 

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission is not inherited. If inheritance is enabled you can change an explicitly set permission back to the inherited value.

Follow these steps to set permissions for an individual pipeline:

1. From within your project, select **Pipelines** .
    
   :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines ordered menu selections.":::

1. Select a pipeline, then select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**. 

    :::image type="content" source="media/individual-pipeline-more-actions-menu.png" alt-text="Screenshot showing selected Manage security option from a pipeline's more actions menu.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

1. Select users and groups and set the permissions.
1. Select **Save changes** or you can select **Undo changes** to undo the changes.

    :::image type="content" source="media/individual-pipeline-permissions-dialog-2020.png" alt-text="Screenshot of pipeline security add user or group selection.":::

1. To remove a user or group, select the user or group and select **Remove**. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **Close** when you're finished.

When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. Select **Clear explicit permissions** to reset all explicitly set permissions to their inherited settings. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

::: moniker-end 

::: moniker range="< azure-devops-2020"

Object-level permissions for individual pipelines inherit the project-level permissions by default. You can override these inherited permissions for an individual pipeline.

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission is not inherited. If inheritance is enabled you can change an explicitly set permission back to the inherited value.

Follow these steps to set object-level permissions for a pipeline:

1. Go to your project, select the **Builds** from the menu.
1. Select the folders icon and select the **All build pipelines** folder.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.

    :::image type="content" source="media/individual-pipeline-security-navigation-2019.png" alt-text="Screenshot showing all pipelines security navigation selections.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

    :::image type="content" source="media/individual-pipeline-permissions-dialog-2020.png" alt-text="Screenshot of pipeline security add user or group selection.":::

1. Select a user or group and set the permissions.
1. You can select more users and groups to change their permissions.
1. Select **Save changes** or you can select **Undo changes** to undo the changes.
1. To remove a user or group, select the user or group and select **Remove**. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **Close** when you're finished.

When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. Select **Clear explicit permissions** to reset all explicitly set permissions to their inherited settings. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

::: moniker-end


## Related articles

- [Get started with permissions and access](../../organizations/security/about-permissions.md)
- [How to secure your YAML pipelines](../../pipelines/security/approach.md)