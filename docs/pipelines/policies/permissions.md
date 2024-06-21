---
title: Manage security in Azure Pipelines
ms.topic: tutorial
description: Manage security in Azure Pipelines.
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.author: v-catherbund
author: cebundy
ms.date: 06/21/2024
monikerRange: '<= azure-devops'
---

# Manage security Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines security helps you control access to your pipelines and pipeline resources. Access is managed through a hierarchical system of built-in and custom security groups and users.  

Pipeline resources are features and objects that are used in pipelines, but exist outside of the pipeline itself. For example, release pipelines, task groups, agent pools, and service connections are all pipeline resources. 

Upon the creation of a pipeline or resource, a set of built-in security groups and users are assigned access permissions or roles at the project level. These project-level security settings are then inherited at the object level for individual objects. For instance, when you create a pipeline, a default set of users and groups is assigned permissions at the project level. These security settings are then inherited at the object level for all pipelines within the project.

Commonly, administrator groups are given full access to all pipelines and resources. Contributors are often granted access to manage resources and pipelines, while readers are given view-only access. Users are assigned to security groups based on their role in the project and the permissions they need to perform their tasks.

You can add and delete users and groups and change their permissions and roles at both the project- and object-levels. Object-level inheritance can be enabled and disabled.  

You must be a member of the **Project Administrators** group to manage security settings at the project level and be a member of an administrator group or be assigned an *Administrator* security role to manage security for object-level pipelines and resources. 

### Permission and role settings

Pipelines, release pipelines, and task groups use task-based permissions. The permissions for users and groups can be set to:

| Permission | Description |
|------------|-------------|
| Allow | Grants permission for feature or task. |
| Deny | Denies permission for feature or task. |
| Not set | Implicitly denies permission, but allows permission to be inherited from the closest ancestor that has the permission explicitly set. |

For more information, see [About permissions and inheritance](../../organizations/security/about-permissions.md).

Libraries, agent pools, service connections, deployment groups, and environments use role-based access. The roles for users and groups are:
 
| Role | Purpose |
|-|-|
| Reader | Can view resource. |
| User | Can use resource. |
| Creator | Can create the resource. This role is a project-level role only.|
| Administrator | Can use and manage the resource and set its security. The creator of a resource is automatically assigned this role. |
| Service Account | Used for agent and deployment pools, can view agents, create sessions, listen for jobs. This role available at the collection- or organization-level only. |

For more information, see [About pipeline security roles](../../organizations/security/about-security-roles.md).

## Prerequisites

DEPLOYMENT GROUPS: ## Prerequisites

- You must be a member of an administrator group or be assigned an administrator role to manage project-level deployment group security.
- You must be assigned an administrator role to manage security for individual deployment groups.

ENVIRONMENTS
- You must be a member of an administrator group or be assigned an administrator role to manage project-level environment security.
- You must be assigned an administrator role to manage object-level security for individual environments.

LIBRARY
- You must be a member of an administrator group or be assigned an administrator role to manage Library security.
- You must be an administrator or have the appropriate role to manage permissions for individual library assets.

PIPELINE
- You must be a member of the Project Collection Administrators group to manage project collection groups.
- You must be a member of an administrator group or be allowed *Administer build permissions* to manage project level users and groups.

RELEASE PIPELINE
- You must be a member of an administrator group or be allowed *Administer release permissions* to manage permissions.
- A release pipeline must be created to set permissions.

SERVICE CONNECTION
To manage security, you must be a member of the **Project Administrators** group or have the **Administrator** role.

TASK GROUP
- You must be a member of an administrator group or be allowed *Administer task group permissions* to manage permissions.
- A task group must exist to set project- and object-level permissions.

AGENT POOLS
- To manage agent pool security at the organization or collection level, you must be a member of the **Project Collection Administrators** group or have the **Administrator** role for Agent pools.
- To manage agent pool security at the project level, you must be a member of the **Project Administrators** group or have the **Administrator** role for agent pools.
- To manage agent pool security at the object level, you must have the **Administrator** role for the agent pool.

<a id="deployment-group-permissions">  </a>

## Configure deployment group security in Azure Pipelines
 
A deployment group is a pool of physical or virtual target machines that have agents installed. Deployment groups are only available with classic release pipelines.

You can create deployment groups in the following circumstances:

- When dependent deployment groups are provisioned for projects from organization deployment pools 
- When a deployment group is created at the project level
- When a project shares a deployment group, dependent deployment groups are created in the recipient projects

Individual deployment groups inherit the security roles from the project-level assignments. You can override the project-level assignments for a user or group. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

When a deployment group gets shared with another project, a separate deployment group, which inherits its security roles, is created in the other project. If sharing is disabled, the deployment group is removed from the other project.

The following table shows security roles for deployment groups:

| Role | Description |
|------|---------|
| **Reader** | Can only view deployment groups.   |
| **Creator** | Can create deployment groups. This role is a project-level role only.  |
| **User** | Can view and use deployment groups. |
| **Service Account** | Can view agents, create sessions, and listen for jobs. This role is a collection- or organization-level role only.  |
| **Administrator** | Can administer, manage, view, and use deployment groups.  |


The following table shows default user and group role assignments:

| Group | Role |
|-|-|
| [*project name*]\Contributors | Creator (project-level), Reader (object-level) |
| [*project name*]\Deployment Group Administrators | Administrator |
| [*project name*]\Project Administrators | Administrator |
| [*project name*]\Release Administrators | Administrator |

### Set project-level deployment group security roles

Do the following steps to set project-level security roles for all deployment groups:

1. From your project, select **Deployment groups** under **Pipelines**.
1. Select **Security**.

    :::image type="content" source="media/deployment-group-security-selection.png" alt-text="Screenshot of security selection for all deployment groups.":::

1. Set roles for users and groups.

    :::image type="content" source="media/deployment-group-project-level-security-dialog.png" alt-text="Screenshot of security dialog for all deployment groups.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.
1. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

Do the following steps to add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

### Set object-level deployment group security roles

Do the following steps to set security roles for an individual deployment group:

1. From your project, select **Deployment groups** under **Pipelines**.
1. Select a deployment group under **Groups**.
1. Select **Security**.

    :::image type="content" source="media/deployment-group-single-group-security-selection.png" alt-text="Screenshot of security selection for an individual deployment group.":::

1. Set roles for users and groups. To lower the privilege level of an inherited role, inheritance must be disabled.

    :::image type="content" source="media/deployment-groups-single-group-security-dialog.png" alt-text="Screenshot of object-level deployment group security dialog.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

Do the following steps to add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

<a id="environment-permissions">  </a>

## Configure security for environments in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-gt-eq-2020.md)]

This article provides guidance on managing security for environments in Azure Pipelines. Environments group together deployment targets for use with YAML pipelines. However, they aren't supported in classic pipelines. 

By default, all environments in a project inherit security roles that are assigned to a set of default users and groups at the project level. Security settings can be managed at both the project level and the object level for individual environments.

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

### Set project-level environment security roles

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

### Configure object-level environment security

Security roles at the object level are inherited from the project-level assignments by default. You can override inherited security settings and manage access to individual environments for users. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance for the environment. You can also set pipeline access for an environment.

#### Set object-level environment user and group security roles

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

#### Set pipeline access for an environment

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

<a id="library-permissions">  </a>

## Configure library security in Azure Pipelines

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

### Set project-level library security roles

::: moniker range=">= azure-devops-2020"

Do the following steps to manage access for all library assets, such as [variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md):

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

### Set secure file security roles

Security roles for **Secure files** are inherited from the project-level library role assignments by default. You can override these assignments for an individual file. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

The creator of the secure file is automatically assigned the **Administrator** role for that file, which can't be changed.

Do the following steps to set permissions for a secure file:

1. From within your project, select **Pipelines** > **Library**.

2. Select **Secure files**.
3. Select a file.
4. Select **Security**.

    :::image type="content" source="media/library-file-permissions-dialog.png" alt-text="Screenshot of secure file permission dialog.":::

5. Set the desired role for users and groups.
6. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
7. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

### Set variable group security roles

Security roles for variable groups are inherited from the project-level library role assignments by default. You can override these assignments for an individual variable group. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

The creator of the variable group is automatically assigned the **Administrator** role for that group, which can't be changed.

Do the following steps to set access for a variable group:

1. From within your project, select **Pipelines** > **Library**.
2. Select a variable group.
3. Select **Security**.

    :::image type="content" source="media/library-variable-group-permissions.png" alt-text="Screenshot of variable group permission dialog.":::

4. Set the desired role for users and groups.
5. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.

6. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

Do the following steps to add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

<a id="pipeline-permissions">  </a>

## Configure pipeline permissions in Azure Pipelines

Pipeline security follows a hierarchical model of user and group permissions. Project-level permissions are inherited at the object level by all pipelines in the project. You can change inherited and default user and group permissions for all pipelines at the project- and object-levels. You can't change permissions set by the system.

The following table shows the default security groups for pipelines:

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
?????????????????????????????????????????????????????????????????????????????????????????????
[!INCLUDE [temp](../../organizations/security/includes/pipelines-build.md)]

For a description of pipeline permissions, see [Pipeline or Build permissions](../../organizations/security/permissions.md#pipeline-or-build-object-level).



### Set project-level pipeline permissions

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

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

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

    :::image type="content" source="media/pipeline-security-add-user-2019.png" alt-text="Screenshot of pipeline security add user or group selection.":::

1. Select a user or group and set the permissions.

    :::image type="content" source="media/individual-pipeline-permissions-dialog-2019.png" alt-text="Screenshot of pipeline security dialog.":::

1. Select **Save changes** or you can select **Undo changes** to undo the changes.
1. Repeat the previous step to change the permissions for more groups and users.
1. To remove a user or group from the list, select the user or group and select **Remove**.
1. Select **Close**.

::: moniker-end

### Set object-level pipeline permissions

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

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

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

    :::image type="content" source="media/individual-pipeline-permissions-dialog-2020.png" alt-text="Screenshot of pipeline security add user or group.":::

1. Select a user or group and set the permissions.
1. You can select more users and groups to change their permissions.
1. Select **Save changes** or you can select **Undo changes** to undo the changes.
1. To remove a user or group, select the user or group and select **Remove**. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **Close** when you're finished.

When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. Select **Clear explicit permissions** to reset all explicitly set permissions to their inherited settings. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

::: moniker-end

<a id="release-pipeline-permissions>

## Configure release pipeline permissions in Azure Pipelines

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

### Set project-level release pipeline permissions

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

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

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

### Set object-level release pipeline permissions

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

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

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

### Set release stage permissions

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

<a id="service-connection-permissions> />

## Configure service connection security in Azure Pipelines

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

::: moniker-end

::: moniker range=">= azure-devops-2020"

To learn more about service connections, see [Service connections](../library/service-endpoints.md).

## Prerequisites

- To manage security at the project level, you must be a member of the **Project Administrators** group or have the **Administrator** role for service connections.
- To manage security at the object level, you must have the **Administrator** role for the service connection.

#### Set project-level service connection security roles

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

#### Configure object-level service connection security

You can set security roles for users and groups, as well as pipeline and project access, to the service connection. Individual service connections inherit the project-level role assignments for users and groups by default.

To open the security dialog for an individual service connection:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
1. Select **Service connections** under **Pipelines**.
1. Select a service connection.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

##### Set service connection security roles for users and groups

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
 
##### Set service connection pipeline permissions

You can set the pipeline permissions to **Open access**, allowing all pipelines to use the service connection, or you can restrict access to specific pipelines.

When the pipeline permissions are set to **Open access**, you can limit access by selecting the **Restrict access** option.

   :::image type="content" source="media/service-connection-restrict-access.png" alt-text="Screenshot of restrict access option for an individual service connection.":::

To add pipelines to the restricted service connection, select **Add pipeline** :::image type="icon" source="../../media/icons/add-dark-icon.png" border="false"::: and select a pipeline from the dropdown menu.

To change a service connection from restricted to open access, select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and then **Open access**.

   :::image type="content" source="media/service-connection-open-access.png" alt-text="Screenshot of open access option for an individual service connection.":::

##### Set service connection project permissions

Access is restricted to the current project by default. To grant access to other projects in the organization or collection, select **Add projects**.

   :::image type="content" source="media/service-connection-project-permissions.png" alt-text="Screenshot of project permissions selection for individual service connections.":::

::: moniker-end

::: moniker range="azure-devops-2019"

### Configure security roles for individual service connections

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

<a id="task-group-permissions> </a>

## Configure task group permissions in Azure Pipelines

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

### Set project-level task group permissions

::: moniker range="> azure-devops-2020"

Follow these steps to set permissions for project-level task groups:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of task group menu item.":::

1. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Screenshot of task groups security selection.":::

1. Select users and groups to set their permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media/task-groups-project-level-permissions.png" alt-text="Screenshot of task group security dialog.":::

1. When finished, close the dialog to save your changes.

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

To remove a user from the permissions list:  

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When finished, close the dialog to save your changes.

::: moniker-end

::: moniker range="<= azure-devops-2020"

Follow these steps to set permissions for project-level task groups:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of task group selection.":::

1. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Screenshot of task groups security selection.":::

1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

1. Select a user or group to set the permissions to **Allow**, **Deny** or **Not set**.

    :::image type="content" source="media/task-group-project-level-permissions-2019.png" alt-text="Screenshot of pipeline task groups security dialog.":::

1. Select **Save changes** or you can select **Undo changes** to undo the changes. You must save the changes to apply the permissions before selecting another user or group.
1. You can select more users and groups to change their permissions.
1. Select **Close** when you're finished.

::: moniker-end

### Set object-level task group permissions

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

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

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

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

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

    :::image type="content" source="media/task-group-menu-item-2019.png" alt-text="Screenshot of task group menu item.":::

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

<a id="agent-pool-permissions">  </a>

## Configure agent pool security in Azure Pipelines

Agent pools are a collection of agents that you use to run build and release jobs. 

::: moniker range="azure-devops"

You can create agent pools with either organization scope or project scope. Organization-scoped agent pools are accessible to all existing or new projects in the organization, and by default, each organization has two agent pools: **Azure Pipelines** and **Default**. These default pools are accessible by all projects in the organization.

Project-scoped agent pools are created at the project level and are accessible only to that project.

From the organization settings, you can manage the organization-level security settings for all agent pools in the organization, and for individual agent pools. Both organization- and project-level security roles can be managed from the project settings.

::: moniker-end

::: moniker range="<= azure-devops-2022"

You can create agent pools with either collection scope or project scope. Collection scoped agent pools are accessible to all existing or new projects in the collection, and by default, each collection has two agent pools: **Azure Pipelines** and **Default**. These default pools are accessible by all projects in the collection.

Project-scoped agent pools are created at the project level and are accessible only to that project.

From the collection settings, you can manage the collection-level security settings for all agent pools in the collection, and for individual agent pools. Both collection- and project-level security roles can be managed at the object level from the project settings.

::: moniker-end

Use predefined security roles to configure [security for agent pools](../agents/pools-queues.md#security).

The security roles for agent pools are:

| Role | Purpose |
|------------------------------------|---------|
| Reader | Can view agent pools. |
| User | Can use agent pools in classic and YAML build and release pipelines. |
| Creator | Can create agent pools in the project. This role is a project-level role only.|
| Service Account | Can view agents, create sessions, and listen for jobs from the agent pool. This role is set at the organization/collection level only. |
| Administrator | Can manage and use agent pools and manage roles for other users and groups. |

The default project and object security roles for agent pools are:

| Group | Role |
|-|-|
| [*project name*]\Project Administrators | Administrator |
| [*project name*]\Build Administrators | Administrator |
| [*project name*]\Project Valid Users | Reader |
| [*project name*]\Release Administrators | Administrator |
| The user who created the agent pool | Administrator |

::: moniker range="azure-devops"

### Configure organization security for agent pools

You can manage collection-level users and groups for all agent pools in the organization or for individual project-scoped agent pools. The security roles for agent pools are **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the organization level.

#### Set organization security for all agent pools

By default, no users or groups have explicit roles for all pools at the organization level. You can add organization-level users and groups and configure security roles for all agent pools in the organization.

To configure security roles for all agent pools in the organization:

1. Go to **Organization settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select **Security**. 

   :::image type="content" source="media\agent-pools-organization-security-selection.png" alt-text="Screenshot of organization-level security selection for all agent pools.":::

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add** 

        :::image type="content" source="media\agent-pool-add-user.png" alt-text="Screenshot of organization-level add user for all agent pools.":::

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 

1. To change a security role, select the user or group and select the role from the dropdown list.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pool-organization-security-dialog.png" alt-text="Screenshot of organization-level security dialog for all agent pools.":::

1. Close the dialog.

#### Set organization security for individual agent pools

Individual agent pools inherit the organization-level security assignments. The **Default** and **Azure Pipelines** agent pools include the **Project Valid Users** group for each project in the organization.  

Agent pools that are created at the project-level are automatically assigned the **[\<project name\>]\Project Valid Users** group and the creator of the agent pool. The creator can't be deleted or modified. Any organization-level users and groups that are added from the project settings are listed here.  

You can add and remove organization-level users and groups and set security roles for an individual agent pool. The security roles at this level are **Reader**, **Service Account**, and **Administrator**.

To configure security roles for all agent pools in the collection:

1. Go to **Organization settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select an agent pool.

1. Select **Security**. 

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
    
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of organization-level add user for an agent pool.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. To change a security role, select the user or group and select the role from the dropdown list.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pools-organization-level-security-for-individual-pool.png" alt-text="Screenshot of organization-level security dialog for an individual agent pool.":::

1. Close the dialog.

::: moniker-end

::: moniker range="> azure-devops-2019 < azure-devops"

### Configure collection security for agent pools

You can manage collection-level users and groups for all agent pools in the collection or at the object-level for project-scoped agent pools. The security roles for agent pools are, **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the collection level.

#### Set collection security for all agent pools

By default, no users or groups have explicit roles for all pools in the collection. You can add collection-level users and groups and configure security roles for all agent pools in the collection.

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select **Security**. 

   :::image type="content" source="media/agent-pools-organization-security-selection.png" alt-text="Screenshot of collection-level security selection for all agent pools.":::

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**. 
    
    
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog for all agent pools.":::

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inheritance must be turned off or the user or group must not be inherited from the project-level security settings.

1. To change a security role, select the user or group and select the role from the dropdown list.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.
    
    :::image type="content" source="media/agent-pools-collection-level-security-dialog.png" alt-text="Screenshot of collection-level security dialog for all agent pools.":::

1. Close the dialog.

#### Set collection security for individual agent pools

Individual agent pools inherit the collection-level security assignments. The **Default** and **Azure Pipelines** agent pools include the **Project Valid Users** group for each project in the collection.  

Agent pools that are created at the project-level are automatically assigned the **[\<project name\>]\Project Valid Users** group and the creator of the agent pool. The creator can't be deleted or modified. Any collection-level users and groups that are added from the project settings are listed here.  

You can add and remove collection-level users and groups and set security roles for an individual agent pool. The security roles at this level are **Reader**, **Service Account**, and **Administrator**. To lower the privilege level of an inherited role, inheritance must be disabled.

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select an agent pool.
1. Select **Security**. 
1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
     
        
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of collection-level add user dialog.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. To change a security role, select the user or group and select the role from the dropdown list.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pools-organization-level-security-for-individual-pool.png" alt-text="Screenshot of collection-level security dialog for an individual agent pool.":::

1. Close the dialog.

::: moniker-end

::: moniker range="azure-devops-2019"

### Configure collection security for agent pools

You can manage collection-level users and groups for all agent pools in the collection or at the object level, specifically for project-scoped agent pools. The security roles for agent pools are **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the collection level.

#### Set collection security for all agent pools

By default, no users or groups have explicit roles for all pools in the collection. You can add collection-level users and groups and configure security roles for all agent pools in the collection.

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select **All agent pools**. 

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
        
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of collection-level add user dialog.":::

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 

1. To change a security role, select the user or group and select the role from the dropdown list.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

#### Set collection security for individual agent pools

Individual agent pools inherit their user and group roles from the collection-level assignments by default.

You can add and remove users and groups and set security roles for an individual agent pool. To remove an inherited user or group, or to lower the privilege level of an inherited role, you must disable inheritance.

The security roles at this level are **Reader**, **Service Account**, and **Administrator**.  

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.

1. Select an agent pool.

1. Select the **Roles** tab. 
1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
    
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of collection-level add user dialog."::: 

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. To change a security role, select the user or group and select the role from the dropdown list.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

::: moniker-end

### Set project-level agent pool security

Follow these steps to set project-level security roles for all agent pools:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**. 
1. Select **Security**. 

   :::image type="content" source="media/agent-pool-security.png" alt-text="Screenshot of security selection for all agent pools."::: 

1. Select a user or group and set the role to **Reader**, **User**, **Creator**, or **Administrator**.

    :::image type="content" source="media/agent-pool-project-level-permissions.png" alt-text="Screenshot of security dialog for all agent pools.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.
    
    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

### Set object-level agent pool security

You can override project-level user and group role assignments, and set pipeline permissions for an individual agent pool. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

::: moniker range=">= azure-devops-2022"

To open the security dialog:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.

1. Select an agent pool.
1. Select **Security**.

#### Set pipeline permissions for an individual agent pool

To set pipeline permissions for an individual agent pool:

1. Select **Restrict permission**. This option is only available if the pool isn't restricted to specific pipelines.

   :::image type="content" source="media/agent-pool-restrict-permissions.png" alt-text="Screenshot of pipeline permissions dialog for an individual agent pool.":::

1. Select the **Add pipeline** button:::image type="icon" source="../../media/icons/add-dark-icon.png" border="false":::.

    :::image type="content" source="media/agent-pool-add-pipeline.png" alt-text="Screenshot of the button to add a pipeline.":::

1. Select the pipeline you want to add to the agent pool from the dropdown menu.

To open access to all pipelines, select  **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false":::, then select **Open access**.

   :::image type="content" source="media/agent-pool-open-access.png" alt-text="Screenshot of agent pool open access for all pipelines selection.":::

#### Set object-level agent pool user permissions

From the **User permissions** section of the security dialog:

1. Select a user or group and set the role to **Reader**, **User**, or **Administrator**.

   :::image type="content" source="media/agent-pool-individual-pool-user-permissions.png" alt-text="Screenshot of user permissions dialog for an individual agent pool.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
  
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.
 
When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.

1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

::: moniker-end

::: moniker range="<= azure-devops-2020"

You can set pipeline and user security roles and pipeline permissions for an individual agent pool. 

1. Go to your agent pool and select **Security**.

1. Use the **Grant access permissions to all pipelines** switch to enable or disable permissions to all pipelines in the project:

   :::image type="content" source="media/agent-pool-grant-permissions.png" alt-text="Screenshot of agent Grant access permissions to all pipelines switch.":::

To set object-level user and group roles for an agent pool:

1. From the **User permissions** section of the security dialog:

1. Select a user or group and set the role to **Reader**, **User**, or **Administrator**.

   :::image type="content" source="media/agent-pool-individual-pool-user-permissions.png" alt-text="Screenshot of object-level user permissions dialog for an agent pool.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.

1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

::: moniker-end

## FAQs

See the following frequently asked questions (FAQs) about pipeline permissions.

### Q: Why can't I create a new pipeline?

A: You need **Edit build pipeline** permissions to create a new pipeline. To add permission, open the security settings for all pipelines and verify that **Edit build pipeline** is set to **Allow** for your security group. 

If you still can't create a pipeline, check to see if your [access level](../../organizations/security/access-levels.md) is set to **Stakeholder**. If you have stakeholder access, change your access to **Basic**. 

::: moniker range=">=azure-devops-2020"
### Q: Why do I see the message that I need to authorize a resource before the run can continue? 

A: You need to authorize resources before you can use them. The exception to this rule is when you create a pipeline for the first time and all the resources referenced in the YAML file are automatically authorized. The resources are authorized for the pipeline as long as the user running the pipeline has access to the resource. 

To authorize **All pipelines** to access a resource like an agent pool, follow these steps:

1. From your project, select **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: > **Pipelines** > **Agent Pools**. 

1. Select **Security** for a specific agent pool, and then update permissions to grant access to all pipelines. 

   :::image type="content" source="media/agent-pool-grant-permissions.png" alt-text="Grant permissions to all pipelines.":::

   For more information, see [Resources in YAML](../process/resources.md).
::: moniker-end

## Related articles

- [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md)
- [Default permissions and access](../../organizations/security/permissions-access.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)
- [Securing Azure Pipelines](../security/overview.md)
- [Azure DevOps CLI reference](/cli/azure/devops)