---
title: Configure library security in Azure Pipelines
ms.topic: how-to
description: Configure security for the library and library assets in Azure Pipelines.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Configure library security in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to manage security for the project library and its assets in Azure Pipelines. The library can be used to share assets among the build and release pipelines in a project. Assets in the library can include variable groups and secure files.

All assets defined in the library share a common security model. Security roles can be assigned to users and groups to control who can manage, create, and use assets. Security assignments set for the library are inherited by assets in the library. The inherited settings for individual assets can be overridden.

[!INCLUDE [temp](../../organizations/security/includes/library-roles.md)]

The default roles are:

| Group | Role |
|-|-|
| [*project name*]\Project Administrators | Administrator |
| [*project name*]\Build Administrators | Administrator |
| [*project name*]\Project Valid Users | Reader |
| [*project name*]\Contributors | Creator (project-level) Reader (object-level) |
| [*project name*]\Release Administrators | Administrator |
| *project name* Build Service (*collection or organization name*) | Reader |

For individual library assets, the creator is automatically assigned the *Administrator* role.

## Prerequisites

- You must be a member of an administrator group or be assigned an administrator role to manage Library security.
- You must be an administrator or have the appropriate role to manage permissions for individual library assets.

## Set project-level library security roles

::: moniker range=">= azure-devops-2020"

Here are the steps to manage access for all library assets, such as [variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md):

1. From your project, select **Pipelines** > **Library**.

   :::image type="content" source="media/pipeline-library-permissions.png" alt-text="Screenshot of the Library menu item.":::

1. Select **Security**.

   :::image type="content" source="media/pipelines-security-library.png" alt-text="Screenshot of the library Security button.":::

1. Select a user or group and change the role to **Reader**, **User**, **Creator**, or **Administrator**.

   :::image type="content" source="media/library-project-level-permissions-dialog.png" alt-text="Screenshot of the library security dialog.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

::: moniker-end

::: moniker range="< azure-devops-2020"

You can manage access for all library assets, such as [variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md), from the project-level library security settings.

::: moniker-end

## Set secure file security roles

Security roles for **Secure files** are inherited from the project-level library role assignments by default. You can override these assignments for an individual file. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

The creator of the secure file is automatically assigned the **Administrator** role for that file, which can't be changed.

To set permissions for a secure file, follow these steps:

1. From within your project, select **Pipelines** > **Library**.

1. Select **Secure files**.
1. Select a file.
1. Select **Security**.

    :::image type="content" source="media/library-file-permissions-dialog.png" alt-text="Screenshot of secure file permission dialog.":::

1. Set the desired role for users and groups.
1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

## Set variable group security roles

Security roles for variable groups are inherited from the project-level library role assignments by default. You can override these assignments for an individual variable group. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

The creator of the variable group is automatically assigned the **Administrator** role for that group, which can't be changed.

To set access for a variable group, follow these steps:

1. From within your project, select **Pipelines** > **Library**.
1. Select a variable group.
1. Select **Security**.

    :::image type="content" source="media/library-variable-group-permissions.png" alt-text="Screenshot of variable group permission dialog.":::

1. Set the desired role for users and groups.
1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

## Related articles

- [Library of assets](../../pipelines/library/index.md)
- [Pipeline security roles](../../organizations/security/about-security-roles.md)