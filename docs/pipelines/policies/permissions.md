---
title: Manage security in Azure Pipelines
ms.topic: how-to
description: Manage security in Azure Pipelines.
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.author: chcomley
author: chcomley
ms.date: 11/12/2024
monikerRange: '<= azure-devops'
---

# Manage security in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines security controls access to pipelines and their resources through a hierarchy of security groups and users. This system governs resources like release pipelines, task groups, agent pools, and service connections, though external to pipelines. Upon creation, pipelines and resources inherit project-level permissions from predefined security groups and users, affecting all project pipelines. 

Administrators typically have unrestricted access, contributors oversee resources, and readers have view-only permissions, with user roles determining group assignments. For more information, see [About pipeline security roles](../../organizations/security/about-security-roles.md).

## Prerequisites

|Security area|Prerequisites |
|---------|---------|
|[Pipelines security](#set-pipeline-permissions-in-azure-pipelines)  | - To manage project collection groups, be a member of the **Project Collection Administrators** group.<br>- To manage project level users and groups, be a member of an administrator group or have *Administer build permissions*.        |
| [Agent pool security](#set-agent-pool-security-in-azure-pipelines) | - To manage agent pool security at the organization, collection, or project level, be a member of the **Project Collection Administrators** group or have the **Administrator** role for agent pools.<br>- To manage agent pool security at the object level, have the **Administrator** role for the agent pool.                |
|[Deployment group security](#set-deployment-group-security-in-azure-pipelines)    | - To manage project-level deployment group security, be a member of an administrator group or be assigned an administrator role.<br>- To manage security for individual deployment groups, have an administrator role.          |
|[Environment security](#set-security-for-environments-in-azure-pipelines)   | - To manage project-level environment security, be a member of an administrator group or assigned an administrator role.<br>- To manage object-level security for individual environments, have an administrator role.          |
|[Library security](#set-library-security-in-azure-pipelines)   | - To manage library security, be a member of an administrator group or assigned an administrator role.<br>- To manage security for individual library assets, e an administrator or have the appropriate role.        |
|[Release pipeline security](#set-release-pipeline-permissions-in-azure-pipelines)   | - To manage release pipeline security, be a member of an administrator group or have *Administer release permissions*.<br> - Have a release pipeline.        |
|[Service connection security](#set-service-connection-security-in-azure-pipelines)    | - To manage service connection security, be a member of the **Project Administrators** group or have an administrator role. - To manage security at the project level, be a member of the **Project Administrators** group or have the **Administrator** role for service connections.<br> - To manage security at the object level, have the **Administrator** role for the service connection.       |
|[Task group security](#set-task-group-permissions-in-azure-pipelines)    |  To manage task group security, be a member of an administrator group or have *Administer task group permissions*.<br>- Have a task group.        |

<a id="pipeline-permissions">  </a>

## Set pipeline permissions in Azure Pipelines

Pipeline security follows a hierarchical model of user and group permissions. Project-level permissions are inherited at the object level by all pipelines in the project. You can change inherited and default user and group permissions for all pipelines at the project- and object-levels. You can't change the permissions set by the system.

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

The following table shows default permissions for security groups:
[!INCLUDE [temp](../../organizations/security/includes/pipelines-build.md)]

For a description of pipeline permissions, see [Pipeline or Build permissions](../../organizations/security/permissions.md#pipeline-or-build-object-level).

### Set project-level pipeline permissions

::: moniker range="azure-devops-2022"

To manage project-level permissions for users and groups across all build pipelines in your project, do the following steps:

1. From your project, select **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines menu selection.":::
    
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**.

1. Select users or groups and set permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media/pipelines-project-level-security-dialog-2022.png" alt-text="Screenshot of project-level pipelines security dialog.":::

1. Repeat the previous step to change the permissions for more groups and users.
1. Close permissions dialog to save the changes. 

::: moniker-end

::: moniker range="azure-devops"

To manage project-level permissions for users and groups across all build pipelines in your project, do the following steps:

1. From your project, select **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines menu selection.":::
    
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**.

1. Select users or groups and set permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media/pipelines-project-level-security-dialog.png" alt-text="Screenshot of project-level pipelines security dialog.":::

1. Repeat the previous step to change the permissions for more groups and users.
1. Close permissions dialog to save the changes. 

::: moniker-end

::: moniker range=">= azure-devops-2022"

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog, do the following steps:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

To delete a user from the permissions list, do the following steps:  

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When you're done, close the dialog to save your changes.

::: moniker-end

::: moniker range="azure-devops-2020"

To manage project-level permissions for users and groups across all build pipelines in your project, do the following steps:

1. From your project, select **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines menu selections.":::
    
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**.
1. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 
1. Select a user or group and set the permissions.

    :::image type="content" source="media/pipelines-project-level-permissions-2020.png" alt-text="Screenshot showing project-level pipeline security dialog.":::

1. Repeat the previous step to change the permissions for more groups and users.
1. Select **Save changes** or you can select **Undo changes** to undo the changes.

1. To remove a user or group from the list, select the user or group and select **Remove**.
1. Select **Close**.

Your project-level pipelines permissions are set.

::: moniker-end

### Set object-level pipeline permissions

::: moniker range=">= azure-devops-2022"

By default, object-level permissions for individual pipelines are inherited from the project-level permissions. You can override the inherited project-level permissions. 

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission isn't inherited. If inheritance is enabled, you can change an explicitly set permission back to the inherited value.

To manage permissions for a pipeline, do the following steps:

1. From your project, select **Pipelines** .
   
   :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines menu selection.":::

2. Select a pipeline, then select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**. 
   
   :::image type="content" source="media/individual-pipeline-more-actions-menu.png" alt-text="Screenshot showing selected security option from a pipeline's more actions menu.":::

3. Select a user or group and set the permissions.
    
    :::image type="content" source="media/individual-pipeline-security-dialog.png" alt-text="Screenshot of object-level pipeline security dialog.":::

4. Repeat the previous step to change the permissions for more groups and users.
5. When you're finished, close the dialog to save your changes.

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog, do the following steps:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

Inherited users and groups can't be removed unless inheritance is disabled. To remove users or groups from a pipeline's permissions, do the following steps:

1. Select the user or group.
2. Select **Remove and clear explicit permissions**.
    
    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

3. When you're done, close the dialog to save your changes.

::: moniker-end 

::: moniker range="azure-devops-2020"

By default, object-level permissions for individual pipelines inherit the project-level permissions. You can override the inherited permissions. 

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission isn't inherited. If inheritance is enabled, you can change an explicitly set permission back to the inherited value.

To set permissions for an individual pipeline, do the following steps:

1. From your project, select **Pipelines** .
   
   :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines ordered menu selections.":::

2. Select a pipeline, then select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Manage security**. 
    
    :::image type="content" source="media/individual-pipeline-more-actions-menu.png" alt-text="Screenshot showing selected Manage security option from a pipeline's more actions menu.":::

3. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 
4. Select users and groups and set the permissions.
5. Select **Save changes** or **Undo changes*, if necessary.

    :::image type="content" source="media/individual-pipeline-permissions-dialog-2020.png" alt-text="Screenshot of pipeline security add user or group selection.":::

6. To remove a user or group, select the user or group and select **Remove**. You can't remove inherited users or groups unless inheritance is disabled.
7. Select **Close** when you're finished.

When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. Select **Clear explicit permissions** to reset all explicitly set permissions to their inherited settings. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

::: moniker-end 

<a id="deployment-group-permissions">  </a>

## Set deployment group security in Azure Pipelines
 
A deployment group is a pool of physical or virtual target machines that have agents installed. Deployment groups are only available with classic release pipelines. You can create deployment groups in the following circumstances:

- When dependent deployment groups are provisioned for projects from organization deployment pools 
- When a deployment group is created at the project level
- When a project shares a deployment group, dependent deployment groups are created in the recipient projects

Individual deployment groups inherit the security roles from the project-level assignments. You can override the project-level assignments for a user or group. To remove an inherited user or group, or lower the privilege level of an inherited role, you must [disable inheritance](../../organizations/security/about-permissions.md).

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

1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.
1. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

Do the following steps to add project users or groups that aren't listed in the security dialog:

1. Select **Add**.
2. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
3. Select the **Role**.
4. Select **Add** to save the changes.

### Set object-level deployment group security roles

Do the following steps to set security roles for an individual deployment group:

1. From your project, select **Deployment groups** under **Pipelines**.
2. Select a deployment group under **Groups**.
3. Select **Security**.
    
    :::image type="content" source="media/deployment-group-single-group-security-selection.png" alt-text="Screenshot of security selection for an individual deployment group.":::

4. Set roles for users and groups. To lower the privilege level of an inherited role, disable inheritance.
    
    :::image type="content" source="media/deployment-groups-single-group-security-dialog.png" alt-text="Screenshot of object-level deployment group security dialog.":::

5. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
6. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

Do the following steps to add project users or groups that aren't listed in the security dialog:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

<a id="environment-permissions">  </a>

## Set security for environments in Azure Pipelines

Environments bundle deployment targets for YAML pipelines but aren't compatible with classic pipelines. All environments inherit, security roles, assigned at the project level to default users and groups. You can customize these settings for individual environments, including removing inherited users or groups and adjusting privilege levels, by disabling inheritance. Additionally, you can manage pipeline access for each environment.

The following table shows security roles for environments:

> [!div class="mx-tdCol2BreakAll"]  
> | Role | Description |
> |------------------------------------|---------|
> | **Creator** | Can create environments in the project. It only applies to project-level security. Contributors are automatically assigned this role. |
> | **Reader** | Can view the environment. |
> | **User** | Can use the environment when creating or editing YAML pipelines. |
> | **Administrator** | Can administer permissions, create, manage, view and use environments. The creator of an environment is granted the administrator role for that environment.  Administrators can also open access to an environment for all pipelines in the project. |

The following table shows default user and group role assignments:

| Group | Role |
|-|-|
| [*project name*]\Contributors | Creator (project-level) Reader (object-level) |
| [*project name*]\Project Administrators | Creator |
| [*project name*]\Project Valid Users | Reader |

The individual who creates an environment is automatically given the **Administrator** role for that specific environment. This role assignment is permanent and can't be changed.

### Set project-level environment security roles

To set project-level security roles for all environments, do the following steps:

1. From your project, **Environments** under **Pipelines**. 
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/environments-project-security-selection.png" alt-text="Screenshot of security selection for all environments.":::

1. Set roles for user and groups to **Administrator**, **Creator**, **User**, or **Reader**.

   :::image type="content" source="media/environments-project-security-dialog.png" alt-text="Screenshot of project-level environments security dialog.":::

1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

### Set object-level environment security

By default, object-level security roles inherit from project-level settings. But, you can customize these settings for individual environments, including removing inherited users or groups and adjusting privilege levels, by disabling inheritance. Additionally, you can manage pipeline access for each environment.

#### Set object-level environment user and group security roles

To set user and group security roles for an environment, do the following steps:

1. From your project, select **Environments** under **Pipelines**. 
1. Select an environment.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/environments-single-environment-security-selection.png" alt-text="Screenshot of security selection for a single environment.":::

1. Set roles for user and groups to **Administrator**, **User**, or **Reader**.

   :::image type="content" source="media\environments-single-environment-user-permissions.png" alt-text="Screenshot of object-level security dialog for environments.":::

1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

Setting a role explicitly for a user or group disables their inheritance. To halt inheritance for everyone, deactivate the **Inheritance** option. Reactivating inheritance resets all users and groups to their original project-level role assignments.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.
2. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
3. Select the **Role**.
4. Select **Add** to save the changes.

#### Set pipeline access for an environment

Pipeline permissions can be set to **Open access** to allow access to all pipelines in a project or restricted access to specific pipelines. Only **Project administrators** can set pipeline permissions to **Open access**.

To set open access to all pipeline in a project, do the following steps:

1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Open access**.

    :::image type="content" source="media/environments-open-access-selection.png" alt-text="Screenshot of open access for pipelines in an environment.":::
1. Select **Open access** on the confirmation dialog.

To restrict access and manage pipeline access, do the following steps:

1. Select **Restrict access**.
1. Select **Add pipeline** :::image type="icon" source="../../media/icons/add-dark-icon.png" border="false"::: and select a pipeline from the dropdown menu.
1. To remove a pipeline, select the pipeline and select the **Revoke access** icon.

    :::image type="content" source="media/environments-revoke-pipeline-permission.png" alt-text="Screenshot of revoke pipeline option.":::

<a id="library-permissions">  </a>

## Set library security in Azure Pipelines

The library facilitates asset sharing, like variable groups and secure files, across build and release pipelines. It employs a unified security model, allowing role assignments for asset management, creation, and usage. These roles, once set at the library level, automatically apply to all contained assets but can be individually adjusted.

[!INCLUDE [temp](../../organizations/security/includes/library-roles.md)]

The following table shows default roles:

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

To manage access for all library assets, such as [variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md), do the following steps:

1. From your project, select **Pipelines** > **Library**.
   
   :::image type="content" source="media/pipeline-library-permissions.png" alt-text="Screenshot of the Library menu item.":::

2. Select **Security**.
   
   :::image type="content" source="media/pipelines-security-library.png" alt-text="Screenshot of the library Security button.":::

3. Select a user or group and change the role to **Reader**, **User**, **Creator**, or **Administrator**.
   
   :::image type="content" source="media/library-project-level-permissions-dialog.png" alt-text="Screenshot of the library security dialog.":::

4. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
5. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

::: moniker-end

### Set secure file security roles

Security roles for **Secure files** are inherited from the project-level library role assignments by default. You can override these assignments for an individual file. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

The creator of the secure file is automatically assigned the **Administrator** role for that file, which can't be changed.

To set permissions for a secure file, do the following steps:

1. From your project, select **Pipelines** > **Library**.
2. Select **Secure files**.
3. Select a file.
4. Select **Security**.
    :::image type="content" source="media/library-file-permissions-dialog.png" alt-text="Screenshot of secure file permission dialog.":::
5. Set the desired role for users and groups.
6. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
7. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

### Set variable group security roles

Security roles for variable groups are inherited from the project-level library role assignments by default. You can override these assignments for an individual variable group. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

The creator of the variable group is automatically assigned the **Administrator** role for that group, which can't be changed.

To set access for a variable group, do the following steps:

1. From your project, select **Pipelines** > **Library**.
2. Select a variable group.
3. Select **Security**.
    :::image type="content" source="media/library-variable-group-permissions.png" alt-text="Screenshot of variable group permission dialog.":::
4. Set the desired role for users and groups.
5. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
6. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

<a id="release-pipeline-permissions"> </a>

## Set release pipeline permissions in Azure Pipelines

Once you create a release pipeline, you can set project-level permissions for all release pipelines and object-level permissions for individual release pipelines and stages. You can also set permissions for release stages, which are a subset of permissions inherited from the object-level release pipeline permissions.

The following table shows the permission hierarchy for release pipelines:

- Project-level release pipelines permissions
- Object-level release pipeline permissions
- Object-level stage permissions

The following table shows default user and group roles:

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

To update permissions for all releases, do the following steps: 

1.From your project, select **Pipelines** > **Releases**.

2. Select the file view icon.

    :::image type="content" source="media/releases-select-file-view.png" alt-text="Screenshot showing selection of the all files view.":::

3. Select the **All pipelines** folder.

    :::image type="content" source="media/releases-select-all-pipelines.png" alt-text="Screenshot showing selection of all release pipelines folder.":::

4. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/releases-select-all-pipelines-security.png" alt-text="Screenshot of all release pipelines security dialog.":::

5. Select users and groups to and change their permissions.

    :::image type="content" source="media/releases-all-pipelines-permissions.png" alt-text="Screenshot of all release pipelines security add user or group selection.":::

6. When you're done, close the dialog to save your changes.

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog, do the following steps:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

To delete a user from the permissions list, do the following steps:  

1. From your project permissions page, select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When you're done, close the dialog to save your changes.

::: moniker-end

### Set object-level release pipeline permissions

By default, the object-level permissions for individual release pipelines are inherited from the project-level release pipeline permissions. You can override these inherited permissions for a specific release pipeline.

To override permissions for a release, do the following steps:

::: moniker range=">= azure-devops-2020"

1. From your project, select **Pipelines** > **Releases**.
1. Select the file view icon:::image type="icon" source="media/folder-icon.png":::.

1. Select the release pipeline you want to modify, and then select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.

    :::image type="content" source="media/releases-select-pipeline-security.png" alt-text="Screenshot of object-level release pipeline security dialog.":::

1. Select users or groups to set their permissions to **Allow**, **Deny** or **Not set**.

    :::image type="content" source="media/releases-individual-pipeline-permissions.png" alt-text="Screenshot of release pipeline security add user or group selection.":::

1. When you're finished, close the dialog to save your changes.

When you explicitly set an inherited user or group permission, inheritance is disabled for that specific permission. To restore inheritance, set the permission to **Not set**. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the permissions for all users and groups revert to their project-level settings.

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog, do the following steps:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

Users and groups can be removed from a release pipeline. Inherited users and groups can't be removed unless inheritance is disabled. To remove release pipeline permissions for users or groups, do the following steps:

1. Select the user or group.
2. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

3. When you're done, close the dialog to save your changes.

::: moniker-end

### Set release stage permissions

Stage permissions are a subset of permissions that are inherited from the object-level release pipeline permissions. 

To set permissions for a stage, do the following steps:

1. From your project, select **Pipelines** > **Releases**.
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

<a id="service-connection-permissions"> </a>

## Set service connection security in Azure Pipelines

Service connections are used to connect to external and remote services. You can set service connection security for:

::: moniker range=">= azure-devops-2020"

* Projects: Permissions are set at the object level.
* Pipelines: Permissions are set at the object level.
* Users and Groups: Security roles are set at the project and object levels.

The following table show service connection roles:

| Role | Purpose |
|------------------------------------|---------|
| **Reader** | Can view service connections. |
| **User** | Can use service connections in classic and YAML build and release pipelines. |
| **Creator** | Can create a service connection in the project. This role is a project-level role only.|
| **Administrator** | Can use the service connection and manage roles for other users and groups. |

The following table shows default security roles for service connections:

| Group | Role |
|-|-|
| [*project name*]\Endpoint Administrators | Administrator |
| [*project name*]\Endpoint Creators | Creator |

The user who creates the service connection is automatically assigned the Administrator role for that service connection. 

::: moniker-end

::: moniker range=">= azure-devops-2020"

For more information, see [Service connections](../library/service-endpoints.md).

### Set project-level service connection security roles

To manage security roles for all service connections, do the following steps:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
1. Select **Service connections** under **Pipelines**.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

    :::image type="content" source="media/service-connections-security-selection.png" alt-text="Screenshot of select service connection security option.":::

1. To change a role, select a user or group, and select a role from the dropdown menu.
    
    :::image type="content" source="media/service-connection-project-level-permissions-dialog.png" alt-text="Screenshot of project-level service connections security dialog.":::

1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

::: moniker-end

::: moniker range=">=azure-devops-2020"

### Set object-level service connection security

You can set security roles for users and groups, as well as pipeline and project access, to the service connection. Individual service connections inherit the project-level role assignments for users and groups by default.

To open the security dialog for an individual service connection, do the following steps:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
1. Select **Service connections** under **Pipelines**.
1. Select a service connection.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

### Set service connection security roles for users and groups

You can override the inherited roles for users and groups. Inheritance must be disabled to remove an inherited user or group or to lower the privilege level of an inherited role.

To manage security roles for an individual service connection, do the following steps:

1. In the **User permissions** section of the **Security** dialog, select **Project** to manage project-level users and groups, or **Organization** to manage organization- or collection-level users and groups.

   :::image type="content" source="media/individual-service-connection-permission-user-dialog.png" alt-text="Screenshot of user permissions dialog for individual service connections.":::

1. Select users and groups and change their roles. To lower the privilege level of an inherited role, inheritance must be disabled.
1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select **Save** to save your changes or **Undo** to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.
 
### Set service connection pipeline permissions

You can set the pipeline permissions to **Open access**, allowing all pipelines to use the service connection, or you can restrict access to specific pipelines.

When the pipeline permissions are set to **Open access**, you can limit access by selecting the **Restrict access** option.

   :::image type="content" source="media/service-connection-restrict-access.png" alt-text="Screenshot of restrict access option for an individual service connection.":::

To add pipelines to the restricted service connection, select **Add pipeline** :::image type="icon" source="../../media/icons/add-dark-icon.png" border="false"::: and select a pipeline from the dropdown menu.

To change a service connection from restricted to open access, select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and then **Open access**.

   :::image type="content" source="media/service-connection-open-access.png" alt-text="Screenshot of open access option for an individual service connection.":::

### Set service connection project permissions

You can share a service connection across multiple projects. Project permissions control which projects can use the service connection. By default, service connections aren't shared with any other projects.

* Only the organization-level administrators from user permissions can share the service connection with other projects.
* The user who's sharing the service connection with a project must have at least Create service connection permission in the target project.
* The user who shares the service connection with a project becomes the project-level Administrator for that service connection. The project-level inheritance is set to on in the target project.
* The service connection name is appended with the project name and it can be renamed in the target project scope.
* Organization-level administrator can unshare a service connection from any shared project.

Access is restricted to the current project by default. To grant access to other projects in the organization or collection, select **Add projects**.

   :::image type="content" source="media/service-connection-project-permissions.png" alt-text="Screenshot of project permissions selection for individual service connections.":::

::: moniker-end

If you're having trouble with permissions and service connections, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).

<a id="task-group-permissions"> </a>

## Set task group permissions in Azure Pipelines

The permissions for task groups follow a hierarchical model. By default, all task groups inherit the project-level permissions. Once a task group is created, you can modify the project-level permissions and the object-level permissions for individual task groups.

The following table show permissions for task groups:

| Permission | Description |
|------------|-------------|
| Administer task group permissions | Can add and remove users or groups to task group security. |
| Delete task group | Can delete a task group. |
| Edit task group | Can create, modify, or delete a task group. |

The following table shows default permissions for security groups:

[!INCLUDE [temp](../../organizations/security/includes/task-groups.md)]

The creator of a task group has all permissions to the task group.

> [!NOTE]
> Task groups aren't supported in YAML pipelines, but templates are. For more information, see [YAML schema reference](/azure/devops/pipelines/yaml-schema/steps-template).

### Set project-level task group permissions

::: moniker range="> azure-devops-2020"

To set permissions for project-level task groups, do the following steps:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of task group menu item.":::

2. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Screenshot of task groups security selection.":::

3. Select users and groups to set their permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media/task-groups-project-level-permissions.png" alt-text="Screenshot of task group security dialog.":::

4. When you're done, close the dialog to save your changes.

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog, do the following steps:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

To remove a user from the permissions list, do the following steps:  

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When you're done, close the dialog to save your changes.

::: moniker-end

::: moniker range="=azure-devops-2020"

To set permissions for project-level task groups, do the following steps:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of task group selection.":::

2. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Screenshot of task groups security selection.":::

3. To add users or groups that aren't listed in the permissions dialog, select **Add**, enter the user or group, and select **Save changes**. 

4. Select a user or group to set the permissions to **Allow**, **Deny** or **Not set**.

    :::image type="content" source="media/task-group-project-level-permissions-2019.png" alt-text="Screenshot of pipeline task groups security dialog.":::

5. Select **Save changes** or you can select **Undo changes** to undo the changes. You must save the changes to apply the permissions before selecting another user or group.
6. You can select more users and groups to change their permissions.
7. Select **Close** when you're finished.

::: moniker-end

### Set object-level task group permissions

::: moniker range=">=azure-devops-2022"

To set permissions for individual task groups, do the following steps:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of Task group selection.":::

2.  Select a task group. 

3. Select **More commands** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: and select **Security**. 

4. Select users and groups to set their permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media\task-group-individual-permission.png" alt-text="Screenshot of object-level task group security dialog.":::

5. When you're done, close the dialog to save your changes.

When a permission for an inherited user or group is explicitly set, inheritance is disabled for that specific permission. Change the permission to **Not set** to restore inheritance. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the settings for all permissions revert to the project level.

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog, do the following steps:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

Users and groups can be removed from the task group. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When you're done, close the dialog to save your changes.

::: moniker-end

::: moniker range="azure-devops-2020"

You can set the permissions to **Allow**, **Deny**, or to **Not set** if the permission isn't inherited. If inheritance is enabled, you can change an explicitly set permission back to the inherited value.

To set permissions for individual task groups, do the following steps:

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Screenshot of Task group selection.":::

2.  Select a task group. 

3. Select **More commands** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: and select **Security**. 

4. Select users and groups to set their permissions to **Allow**, **Deny**, or **Not set**.

    :::image type="content" source="media\task-group-individual-permission.png" alt-text="Screenshot of object-level task group security dialog.":::

5. When you're done, close the dialog to save your changes.

When a permission for an inherited user or group is explicitly set, inheritance is disabled for that specific permission. Change the permission to **Not set** to restore inheritance. To disable inheritance for all user and group permissions, turn off the **Inheritance** setting. Upon re-enabling inheritance, the settings for all permissions revert to the project level.

#### Add users or groups to the permissions dialog
 
To add users and groups that aren't listed in the permissions dialog, do the following steps:

1. Enter the user or group in the search bar, then select the user or group from the search result.
1. Set the permissions.
1. Close the dialog.

When you open the security dialog again, the user or group is listed. 

#### Remove users or groups from the permissions dialog

Users and groups can be removed from the task group. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select the user or group.
1. Select **Remove and clear explicit permissions**.

    :::image type="content" source="media\delete-user-in-security-dialog.png" alt-text="Screenshot of remove user or group selection.":::

1. When you're done, close the dialog to save your changes.

::: moniker-end

<a id="agent-pool-permissions">  </a>

## Set agent pool security in Azure Pipelines

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

Use predefined security roles to manage [security for agent pools](../agents/pools-queues.md#security).

The following table shows security roles for agent pools:

| Role | Purpose |
|------------------------------------|---------|
| Reader | Can view agent pools. |
| User | Can use agent pools in classic and YAML build and release pipelines. |
| Creator | Can create agent pools in the project. This role is a project-level role only.|
| Service Account | Can view agents, create sessions, and listen for jobs from the agent pool. This role is set at the organization/collection level only. |
| Administrator | Can manage and use agent pools and manage roles for other users and groups. |

The following table shows default project and object security roles for agent pools:

| Group | Role |
|-|-|
| [*project name*]\Project Administrators | Administrator |
| [*project name*]\Build Administrators | Administrator |
| [*project name*]\Project Valid Users | Reader |
| [*project name*]\Release Administrators | Administrator |
| The user who created the agent pool | Administrator |

::: moniker range="azure-devops"

### Add the principal as a user

Before you can add a principal, such as a service principal, in the **Security** settings of an agent pool, add it as a user in your organization.

1. Go to **Organization settings**.
2. Select **Users**. 
3. Add the service principal with at least Basic access.

### Set organization security for agent pools

You can manage collection-level users and groups for all agent pools in the organization or for individual project-scoped agent pools. The security roles for agent pools are **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the organization level.

#### Set organization security for all agent pools

By default, no users or groups have explicit roles for all pools at the organization level. You can add organization-level users and groups and manage security roles for all agent pools in the organization.

To manage security roles for all agent pools in the organization, do the following steps:

1. [Add the user or group as a user](#add-the-principal-as-a-user).
2. Go to **Organization settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
3. Select **Security**. 

   :::image type="content" source="media/agent-pools-organization-security-selection.png" alt-text="Screenshot of organization-level security selection for all agent pools.":::

4. To add users and groups:
    1. Select **Add**
    2. Enter a user or group and select it from the search results.
    1. Select a role and choose **Add**.
    1. Repeat the previous step to add more users and groups.
    1. Choose **Save** to save your changes.
    1. Verify that your new users are saved in the list. If they did not save, verify that the users are members of your organization with at least Basic access and try again.
    1. Choose **Close** to close the **User permissions** window.

1: To create a new pipeline, you need **Create build pipeline** permissions. To add permission, open the security settings for all pipelines and verify that **Create build pipeline** is set to **Allow** for your security group. 

5. To remove a user or group from the list, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 

6. To change a security role, select the user or group and select the role from the dropdown list.

7. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pool-organization-security-dialog.png" alt-text="Screenshot of organization-level security dialog for all agent pools.":::

8. Close the dialog.

#### Set organization security for individual agent pools

Individual agent pools inherit the organization-level security assignments. The **Default** and **Azure Pipelines** agent pools include the **Project Valid Users** group for each project in the organization.  

Agent pools created at the project-level are automatically assigned the **[\<project name\>]\Project Valid Users** group and the creator of the agent pool. The creator can't be deleted or modified. Any organization-level users and groups that are added from the project settings are listed here.  

You can add and remove organization-level users and groups and set security roles for an individual agent pool. The security roles at this level are **Reader**, **Service Account**, and **Administrator**.

To manage security roles for all agent pools in the collection, do the following steps:

1. Go to **Organization settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
2. Select an agent pool.
3. Select **Security**. 
4. To add users and groups:
    1. Select **Add**
    2. Enter a user or group and select it from the search results.
    3. Repeat the previous step to add more users and groups.
    4. Select a role and select **Add**.   
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of organization-level add user for an agent pool.":::
5. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
6. To change a security role, select the user or group and select the role from the dropdown list.
7. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.
    :::image type="content" source="media\agent-pools-organization-level-security-for-individual-pool.png" alt-text="Screenshot of organization-level security dialog for an individual agent pool.":::
8. Close the dialog.

::: moniker-end

::: moniker range="<azure-devops"

### Set collection security for agent pools

You can manage collection-level users and groups for all agent pools in the collection or at the object-level for project-scoped agent pools. The security roles for agent pools are, **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the collection level.

#### Set collection security for all agent pools

By default, no users or groups have explicit roles for all pools in the collection. You can add collection-level users and groups and manage security roles for all agent pools in the collection.

To manage security roles for all agent pools in the collection, do the following steps:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select **Security**. 

   :::image type="content" source="media/agent-pools-organization-security-selection.png" alt-text="Screenshot of collection-level security selection for all agent pools.":::

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**. 
    
    
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog for all agent pools.":::

1. To remove a user or group from the list, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inheritance must be turned off or the user or group must not be inherited from the project-level security settings.

1. To change a security role, select the user or group and select the role from the dropdown list.

2. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.
    
    :::image type="content" source="media/agent-pools-collection-level-security-dialog.png" alt-text="Screenshot of collection-level security dialog for all agent pools.":::

3. Close the dialog.

#### Set collection security for individual agent pools

Individual agent pools inherit the collection-level security assignments. The **Default** and **Azure Pipelines** agent pools include the **Project Valid Users** group for each project in the collection.  

Agent pools created at the project-level are automatically assigned the **[\<project name\>]\Project Valid Users** group and the creator of the agent pool. The creator can't be deleted or modified. Any collection-level users and groups that are added from the project settings are listed here.  

You can add and remove collection-level users and groups and set security roles for an individual agent pool. The security roles at this level are **Reader**, **Service Account**, and **Administrator**. To lower the privilege level of an inherited role, inheritance must be disabled.

To manage security roles for all agent pools in the collection, do the following steps:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
2. Select an agent pool.
3. Select **Security**. 
4. To add users and groups:
    1. Select **Add**
    2. Enter a user or group and select it from the search results.
    3. Repeat the previous step to add more users and groups.
    4. Select a role and select **Add**.
     
        
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of collection-level add user dialog.":::

5. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
6. To change a security role, select the user or group and select the role from the dropdown list.
7. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pools-organization-level-security-for-individual-pool.png" alt-text="Screenshot of collection-level security dialog for an individual agent pool.":::

8. Close the dialog.

::: moniker-end

### Set project-level agent pool security

To set project-level security roles for all agent pools, do the following steps:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**. 
1. Select **Security**. 

   :::image type="content" source="media/agent-pool-security.png" alt-text="Screenshot of security selection for all agent pools."::: 

1. Select a user or group and set the role to **Reader**, **User**, **Creator**, or **Administrator**.

    :::image type="content" source="media/agent-pool-project-level-permissions.png" alt-text="Screenshot of security dialog for all agent pools.":::

1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.

2. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog:

1. Select **Add**.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.
    
    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

### Set object-level agent pool security

You can override project-level user and group role assignments and set pipeline permissions for an individual agent pool. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

::: moniker range=">= azure-devops-2022"

To open the security dialog:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.

1. Select an agent pool.
1. Select **Security**.

#### Set pipeline permissions for an individual agent pool

To set pipeline permissions for an individual agent pool:

1. Select **Restrict permission**. This option is only available if the pool isn't restricted to specific pipelines.

   :::image type="content" source="media/agent-pool-restrict-permissions.png" alt-text="Screenshot of pipeline permissions dialog for an individual agent pool.":::

2. Select **Add pipeline** :::image type="icon" source="../../media/icons/add-dark-icon.png" border="false":::.

    :::image type="content" source="media/agent-pool-add-pipeline.png" alt-text="Screenshot of the button to add a pipeline.":::

3. Select the pipeline you want to add to the agent pool from the dropdown menu.

To open access to all pipelines, select  **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false":::, then select **Open access**.

   :::image type="content" source="media/agent-pool-open-access.png" alt-text="Screenshot of agent pool open access for all pipelines selection.":::

#### Set object-level agent pool user permissions

From the **User permissions** section of the security dialog:

1. Select a user or group and set the role to **Reader**, **User**, or **Administrator**.

   :::image type="content" source="media/agent-pool-individual-pool-user-permissions.png" alt-text="Screenshot of user permissions dialog for an individual agent pool.":::

1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
  
2. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.
 
When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.

1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

::: moniker-end

::: moniker range="=azure-devops-2020"

To set pipeline and user security roles and pipeline permissions for an individual agent pool, do the following steps. 

1. Go to your agent pool and select **Security**.

1. Use the **Grant access permissions to all pipelines** switch to enable or disable permissions to all pipelines in the project:

   :::image type="content" source="media/agent-pool-grant-permissions.png" alt-text="Screenshot of agent Grant access permissions to all pipelines switch.":::

To set object-level user and group roles for an agent pool:

1. From the **User permissions** section of the security dialog:

1. Select a user or group and set the role to **Reader**, **User**, or **Administrator**.

   :::image type="content" source="media/agent-pool-individual-pool-user-permissions.png" alt-text="Screenshot of object-level user permissions dialog for an agent pool.":::

1. To remove a user or group, select the user or group and select **Delete** :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
2. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog, do the following steps:

1. Select **Add**.
2. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
3. Select the **Role**.
4. Select **Add** to save the changes.

    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

::: moniker-end

## Related articles

- [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md)
- [Default permissions and access](../../organizations/security/permissions-access.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)
- [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)
- [Securing Azure Pipelines](../security/overview.md)
- [Azure DevOps CLI reference](/cli/azure/devops)
