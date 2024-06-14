---
title: Configure security for environments in Azure Pipelines
ms.topic: how-to
description: Configure security for the environments in Azure Pipelines.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '>= azure-devops-2020'
---

# Configure security for environments in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-gt-eq-2020.md)]

This article provides guidance on managing security for environments in Azure Pipelines. Environments group together deployment targets for use with YAML pipelines. However, they aren't supported in classic pipelines. 

By default, all environments in a project inherit security roles that are assigned to a set of default users and groups at the project level. Security settings can be managed both at the project level and at the object level for individual environments.

Security roles for environments are:

> [!div class="mx-tdCol2BreakAll"]  
> | Role | Description |
> |------------------------------------|---------|
> | **Creator** | Can create environments in the project. It only applies to project-level security. Contributors are automatically assigned this role. |
> | **Reader** | Can view the environment. |
> | **User** | Can use the environment when creating or editing YAML pipelines. |
> | **Administrator** | Can administer permissions, create, manage, view and use environments. The creator of an environment is granted the administrator role for that environment.  Administrators can also open access to an environment for all pipelines in the project. |

The default user and group role assignments are:

| Group | Role |
|-|-|
| [*project name*]\Contributors | Creator (project-level) Reader (object-level) |
| [*project name*]\Project Administrators | Creator |
| [*project name*]\Project Valid Users | Reader |

The creator of an environment is automatically assigned the **Administrator** role for that environment, and this assignment can't be changed.

>[!NOTE]
> The Project Administrators group doesn't have the **Administrator** role for environments by default. To ensure that project administrators have the necessary permissions to manage environments in your project, you can change the Project Administrators group role to **Administrator** at the project level..

## Prerequisites

- You must be a member of an administrator group or be assigned an administrator role to manage project-level environment security.
- You must be assigned an administrator role to manage object-level security for individual environments.

## Set project-level environment security roles

To set project-level security roles for all environments:

1. From your project, **Environments** under **Pipelines**. 
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/environments-project-security-selection.png" alt-text="Screenshot of security selection for all environments.":::

1. Set roles for user and groups to **Administrator**, **Creator**, **User**, or **Reader**.

   :::image type="content" source="media/environments-project-security-dialog.png" alt-text="Screenshot of project-level environments security dialog.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

## Configure object-level environment security

Security roles at the object level are inherited from the project-level assignments by default. You can override inherited security settings and manage access to individual environments for users. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance for the environment. You can also set pipeline access for an environment.

### Set object-level environment user and group security roles

To set user and group security roles for an environment:

1. From your project, select **Environments** under **Pipelines**. 
1. Select an environment.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/environments-single-environment-security-selection.png" alt-text="Screenshot of security selection for a single environment.":::

1. Set roles for user and groups to **Administrator**, **User**, or **Reader**.

   :::image type="content" source="media\environments-single-environment-user-permissions.png" alt-text="Screenshot of object-level security dialog for environments.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

### Set pipeline access for an environment

Pipeline permissions can be set to **Open access** to allow access to all pipelines in a project or restricted access to specific pipelines. Only **Project administrators** can set pipeline permissions to **Open access**.

To set open access to all pipeline in a project:

1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Open access**.

    :::image type="content" source="media/environments-open-access-selection.png" alt-text="Screenshot of open access for pipelines in an environment.":::
1. Select **Open access** on the confirmation dialog.

To restrict access and manage pipeline access:

1. Select **Restrict access**.
1. Select **Add pipeline** :::image type="icon" source="../../media/icons/add-dark-icon.png" border="false"::: and select a pipeline from the dropdown menu.
1. To remove a pipeline, select the pipeline and select the **Revoke access** icon.

    :::image type="content" source="media/environments-revoke-pipeline-permission.png" alt-text="Screenshot of revoke pipeline option.":::

## Related articles

- [Create and target an environment](../../pipelines/process/environments.md)
- [Pipeline security roles](../../organizations/security/about-security-roles.md)