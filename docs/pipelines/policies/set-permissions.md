---
title: Pipelines user permissions
ms.custom: seodec18
description: Add users to Azure Pipelines
ms.assetid: DCEDB5E6-B6FB-4814-B3B9-F688094EA88B
ms.topic: conceptual
ms.date: 06/03/2021
monikerRange: '>= tfs-2015'
---

# Add users to Azure Pipelines

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2015**

Permissions for build and release pipelines are primarily set at the object-level for a specific build or release, or for select tasks, at the collection level.

You can manage security for different types of resources such as variable groups, secure files, and deployment groups by adding users or groups to that role. Project administrator can grant or restrict access to project resources. If you want to allow a team member to edit pipelines, you must be a project administrator in order to do so.

::: moniker range="> tfs-2018"

1. Navigate to your project's summary page: `https://dev.azure.com/{your-organization}/{your-project}`

1. Select the **Invite** button to add a user to your project, and then fill out the required fields. Select **Add** when you are done.

    :::image type="content" source="media/project-invite-button.png" alt-text="Invite button":::

    :::image type="content" source="media/project-invite-dialog-box.png" alt-text="Add users to your project":::

1. The new user must accept the invitation before they can start creating or modifying pipelines.

## Verify permissions for contributors

> [!NOTE]
> A security best practice is to only grant permissions to required users or groups. The **Contributors** group may be too broad in a given project.  

To verify the permissions for your project's contributors, make sure you are a member of the *Build Administrators group* or the *Project Administrators group*. See [Set permissions at the project- or collection-level](../../organizations/security/set-project-collection-level-permissions.md) for more details.

1. From within your project, select **Pipelines** > **Pipelines**. Select the **All** tab, and then select the more actions menu then **Manage security**.

    :::image type="content" source="media/security-menu-item.png" alt-text="Manage pipeline security":::

1. On the permissions dialog box, make sure the following **Contributors** permissions are set to Allow.

    :::image type="content" source="media/builds-permissions-dialog-box.png" alt-text="Set up the contributors permissions":::

::: moniker-end

::: moniker range="<= tfs-2018"

## Set permissions for build pipelines

1. From within your project, select **Build and Release**, and then select **Builds** to access your build pipelines.

    :::image type="content" source="media/build-release-tfs.png" alt-text="Access builds in TFS":::

1. Select **Security** to set the permissions for all build pipelines.

    :::image type="content" source="media/set-build-release-permissions/open-all-build-definitions-security.png" alt-text="Access all builds security permissions":::

   To set permissions for a specific build pipeline, select the context menu for that build and select **Security**.

    :::image type="content" source="media/set-build-release-permissions/set-build-permission-open-dialog.png" alt-text="Configure build permissions":::

1. Choose the group you want to set permissions for, and then change the permission setting to grant or restrict access. In the following example, we change the contributors permission to allow editing build definitions.

    :::image type="content" source="media/set-build-release-permissions/set-build-permission-dialog.png" alt-text="Contributors permissions - allow editing build definitions":::

1. Select **Save changes** when you are done.

## Set permissions for release pipelines

1. From within your project, select **Build and Release**, and then select **Releases** to access your release pipelines.

    :::image type="content" source="media/set-build-release-permissions/release-pipelines-tfs.png" alt-text="Access release pipelines TFS":::

1. Select the context menu for **All release definitions**, and then select **Security**.

    :::image type="content" source="media/set-build-release-permissions/all-releases-security.png" alt-text="All security releases":::

1. Choose the group you want to set permissions for, and then change the permission setting to grant or restrict access. In the following example, we change the contributors permission to prohibit the deletion of release definitions.

    :::image type="content" source="media/set-build-release-permissions/set-release-permission-dialog.png" alt-text="Configure permissions for release pipelines":::

1. Select **Save changes** when you are done.

<a id="deployment-group" />
<a id="variable-group" />
<a id="library" />

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

## Manage Library roles for variable groups, secure files, and deployment groups

Permissions for variable groups, secure files, and deployment groups are managed by roles. Setting up permissions is similar for all the three different types. **Variable groups** and **Secure files** permissions are configured from **Build and Release** > **Library** while **Deployment groups** permissions are set from **Build and Release** > **Deployment groups**.

In the following example, we will configure permissions for variable groups. 

1. From within your project, select **Build and Release**, and then select **Library** then **Variable groups**.

    :::image type="content" source="media/set-build-release-permissions/open-variable-group-all-security.png" alt-text="Library - variable groups":::

   If you want to manage the permissions for a specific variable group, select the ellipsis for that variable group and then select **Security**.

    :::image type="content" source="media/set-build-release-permissions/open-variable-group-specific-security.png" alt-text="Configure permission for one variable group":::

1. Add the user or group and choose the role you want them to have.

    :::image type="content" source="media/set-build-release-permissions/library-security-role-dialog-add-user.png" alt-text="add user or group and set roles":::

1. Select **Add** when you are done.  

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

<a id="task-group" />

## Manage task group permissions

Permissions for task groups are subject to a hierarchical model. You use task groups to encapsulate a sequence of tasks already defined in a build or a release pipeline into a single reusable task.

1. From within your project, select **Build and Release**, and then select **Task groups**.

    :::image type="content" source="media/set-build-release-permissions/open-task-group-all-security.png" alt-text="access task groups permissions":::

   If you want to manage the permissions for a specific task group, select the ellipsis for that task group and then select **Security**.

1. Add the user or group and then set the permissions you want them to have.

    :::image type="content" source="media/set-build-release-permissions/task-group-security-dialog.png" alt-text="Set up task groups permissions":::

1. Select **Save changes** when you are done.

::: moniker-end

::: moniker range="<= tfs-2018"

<a id="collection-level" /> 

## Manage permissions for build administrators group
 
1. From within your project, select the gear icon button ![gear icon](../../media/icons/gear_icon.png), and then select **Collection settings**.

1. Select **Security**, and then select **Project Collection Build Administrators**. In this example, we want to allow the usage of build resources. 

    :::image type="content" source="media/set-build-release-permissions/set-build-collection-level-permission-dialog.png" alt-text="Configure the build administrators group permissions":::

1. Select **Save changes** when you are done.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

## Manage permissions for service connections

You can set up permissions for service connections or agent pools by adding users or groups to a specific role. You will need to be a member of the Project Administrator group to manage the permissions for these resources. 

In the following example, we will add an Administrator to a service connection.

1. From within your project, select the gear icon button ![gear icon](../../media/icons/gear_icon.png), and then select **Project settings**.

1. Select **Services**, and then select the service connection that you want to manage. Select **Roles** to add a new role.   

    :::image type="content" source="media/manage-roles/open-services-roles.png" alt-text="Select service roles":::

1. Add the user or group and choose the role you want them to have. 

    :::image type="content" source="media/manage-roles/add-user-role-endpoint-service.png" alt-text="Add a new role"::: 

1. Select **Add** when you are done.  

::: moniker-end

::: moniker range=">= tfs-2018 <= tfs-2018"

## Manage permissions for deployment pools  

You can set up permissions for deployment pools by adding users or groups to a specific role. You will need to be a member of the Project Collection Administrator group to manage the pool's permissions.

In the following example, we will add an Administrator role to all deployment pools.

1. From within your project, select the gear icon button ![gear icon](../../media/icons/gear_icon.png), and then select **Project settings**.

1. Select **Deployment Pools**, and then select **Security** to manage permissions for all deployment pools.    

    :::image type="content" source="media/manage-roles/open-security-deployment-pools.png" alt-text="Manage permissions for all deployment pools":::

1. Add the user or group and choose the role you want them to have.

:::image type="content" source="media/manage-roles/add-user-role-deployment-pool.png" alt-text="Add an administrator to all deployment pools":::

1. Select **Add** when you are done.  

::: moniker-end

## Related articles 

- [Grant version control permissions to the build service](../scripts/git-commands.md)
- [Set pipelines permissions](../policies/permissions.md)
- [Set retention policies for builds, releases, and tests](./retention.md)
- [Default permissions and access](../../organizations/security/permissions-access.md) 
- [Permissions and groups reference](../../organizations/security/permissions.md) 
