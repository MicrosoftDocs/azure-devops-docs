---
title: Configure service connections security in Azure Pipelines
ms.topic: how-to
description: Configure security for service connection in Azure Pipelines.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Configure service connection security in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to manage security for service connections in Azure Pipelines. Service connections are used to connect to external and remote services.  

You can set service connection security for:

::: moniker range=">= azure-devops-2020"

* Projects: Permissions are set at the object level.
* Pipelines: Permissions are set at the object level.
* Users and Groups: Security roles are set at the project and object levels.

Service connection roles are:

| Role | Purpose |
|------------------------------------|---------|
| **Reader** | Can view service connections. |
| **User** | Can use service connections in classic and YAML build and release pipelines. |
| **Creator** | Can create a service connection in the project. This role is a project-level role only.|
| **Administrator** | Can use the service connection and manage roles for other users and groups. |

The default security roles for service connections are:

| Group | Role |
|-|-|
| [*project name*]\Endpoint Administrators | Administrator |
| [*project name*]\Endpoint Creators | Creator |

The user who creates the service connection is automatically assigned the Administrator role for that service connection. 

::: moniker-end

::: moniker range="azure-devops-2019"

* Pipelines: Permissions are set at the object level.
* Users and Groups: Security roles are set at the project and object levels.

Service connection roles are:

| Role | Purpose |
|------------------------------------|---------|
| **User** | Can use service connections in classic and YAML build and release pipelines. |
| **Administrator** | Can use the service connection and manage roles for other users and groups. |

By default, the [*project*]/\Endpoint Administrators group is assigned the Administrator role for all service connections in the project. The user who creates the service connection is automatically assigned the Administrator role for that service connection.

To learn more about service connections, see [Service connections](../library/service-endpoints.md).

## Prerequisites

To manage security, you must be a member of the **Project Administrators** group or have the **Administrator** role.

::: moniker-end

::: moniker range=">= azure-devops-2020"

To learn more about service connections, see [Service connections](../library/service-endpoints.md).

## Prerequisites

- To manage security at the project level, you must be a member of the **Project Administrators** group or have the **Administrator** role for service connections.
- To manage security at the object level, you must have the **Administrator** role for the service connection.


### Set project-level service connection security roles

Follow these steps to configure security roles for all service connections:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
1. Select **Service connections** under **Pipelines**.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/service-connections-security-selection.png" alt-text="Screenshot of select service connection security option.":::

1. To change a role, select a user or group, and select a role from the dropdown menu.
    
    :::image type="content" source="media/service-connection-project-level-permissions-dialog.png" alt-text="Screenshot of project-level service connections security dialog.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

::: moniker-end

::: moniker range=">=azure-devops-2020"

### Configure object-level service connection security

You can set security roles for users and groups, as well as pipeline and project access, to the service connection. Individual service connections inherit the project-level role assignments for users and groups by default.

To open the security dialog for an individual service connection:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
1. Select **Service connections** under **Pipelines**.
1. Select a service connection.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

#### Set service connection security roles for users and groups

You can override the inherited roles for users and groups. Inheritance must be disabled to remove an inherited user or group or to lower the privilege level of an inherited role.

Follow these steps to configure security roles for an individual service connection:

1. In the **User permissions** section of the **Security** dialog, select **Project** to manage project-level users and groups, or **Organization** to manage organization- or collection-level users and groups.

   :::image type="content" source="media/individual-service-connection-permission-user-dialog.png" alt-text="Screenshot of user permissions dialog for individual service connections.":::

1. Select users and groups and change their roles. To lower the privilege level of an inherited role, inheritance must be disabled.
1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.
 
#### Set service connection pipeline permissions

You can set the pipeline permissions to **Open access**, allowing all pipelines to use the service connection, or you can restrict access to specific pipelines.

When the pipeline permissions are set to **Open access**, you can limit access by selecting the **Restrict access** option.

   :::image type="content" source="media/service-connection-restrict-access.png" alt-text="Screenshot of restrict access option for an individual service connection.":::

To add pipelines to the restricted service connection, select **Add pipeline** :::image type="icon" source="../../media/icons/add-dark-icon.png" border="false"::: and select a pipeline from the dropdown menu.

To change a service connection from restricted to open access, select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and then **Open access**.

   :::image type="content" source="media/service-connection-open-access.png" alt-text="Screenshot of open access option for an individual service connection.":::

#### Set service connection project permissions

Access is restricted to the current project by default. To grant access to other projects in the organization or collection, select **Add projects**.

   :::image type="content" source="media/service-connection-project-permissions.png" alt-text="Screenshot of project permissions selection for individual service connections.":::

::: moniker-end

::: moniker range="azure-devops-2019"

## Configure security roles for individual service connections

To set the security role for users and groups for individual connections, follow these steps:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
1. Select **Service connections** under Pipelines.
1. Select a service connection.

    :::image type="content" source="media/service-connection-roles-dialog-2019.png" alt-text="Screenshot of individual service connection security selection.":::

1. Select a user or group and change the role to **User** or **Administrator**. To lower the privilege level of an inherited role, inheritance must be disabled for the service connection.

1. Select the **Save changes** button :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.

::: moniker-end

If you're having trouble with permissions and service connections, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).


## Related articles

- [Pipeline security roles](../../organizations/security/about-security-roles.md)
- [Manage service connections](../../pipelines/library/service-endpoints.md)