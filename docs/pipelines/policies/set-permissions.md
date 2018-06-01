---
title: Set build and release permissions | VSTS or Team Foundation Server
titleSuffix: VSTS & TFS
description: Grant or restrict access to build-release, library, task group, and variable group functions in VSTS or Team Foundation Server
ms.assetid: DCEDB5E6-B6FB-4814-B3B9-F688094EA88B
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 02/12/18
monikerRange: '>= tfs-2013'
---


# Set build and release permissions

[!INCLUDE [version-vsts-tfs-all-versions](../../_shared/version-vsts-tfs-all-versions.md)]

Permissions for build and release functions are primarily set at the object-level for a specific build or release, or for select tasks, at the collection level. For a simplified view of permissions assigned to built-in groups, see [Permissions and access](../../security/permissions-access.md). 

In addition to permission assignments, you manage security for several resources&mdash;such as variable groups, secure files, and deployment groups&mdash;by adding users or groups to a role. You grant or restrict permissions by setting the [permission state to Allow or Deny](../../security/about-permissions.md), either for a security group or an individual user. For definitions of each build and release permission and role, see [Build and release permissions](permissions.md).  

## Set permissions for build definitions

1. To set the permissions for all build definitions, click the Security From the web portal **Build-Release** hub, **Builds** page

   ![Open the Security dialog for all build definitions](_img/set-build-release-permissions/open-all-build-definitions-security.png)

  To set the permissions for a specific build definition, open the context menu for the build and click Security.

   <img src="_img//set-build-release-permissions/set-build-permission-open-dialog.png" alt="Open the security dialog for a build definition" style="border: 1px solid #C3C3C3;" />

1. Choose the group you want to set permissions for, and then change the permission setting to Allow or Deny. 

   For example, here we change the permission for Edit build definition for the Contributors group to Allow. 

   <img src="_img/set-build-release-permissions/set-build-permission-dialog.png" alt="Security dialog for a build definition" style="border: 1px solid #C3C3C3;" />

1. Save your changes.

## Set permissions for release definitions

1. From the web portal **Build-Release** hub, **Releases** page, open the Security dialog for all release definitions.

   <img src="_img/set-build-release-permissions/set-release-permission-open-dialog.png" alt="Open the security dialog for a build definition" style="border: 1px solid #C3C3C3;" />

   If you want to manage the permissions for a specific release, then open the Security dialog for that release. 

1. Choose the group you want to set permissions for, and then change the permission setting to Allow or Deny. 

   For example, here we deny access to several permissions for the Contributors group. 

   <img src="_img/set-build-release-permissions/set-release-permission-dialog.png" alt="Security dialog for a release definition" style="border: 1px solid #C3C3C3;" />

1. Save your changes. 


<a id="deployment-group" />
<a id="variable-group" />
<a id="library" />

::: moniker range=">= tfs-2017"

## Manage Library roles for variable groups, secure files, and deployment groups

Permissions for [variable groups](../library/variable-groups.md), [secure files](../library/secure-files.md), and [deployment groups](/vsts/pipelines/release/deployment-groups) are managed by roles. For a description of the roles, see [About security roles](../../security/about-security-roles.md). 

> [!NOTE]
> **Feature availability**: These features are available on VSTS and TFS 2017 and later versions. 

You can set the security for all artifacts for a team project, as well as set the security for individual artifacts. The method is similar for all three artifact types. You set the security for variable groups and secure files from the **Build and Release** hub, **Library** page, and for deployment groups, from the **Deployment groups** page. 

For example, here we show how to set the security for variable groups.  

1. **Build-Release** hub, **Library** page, open the Security dialog for all variable groups.

   ![Open the Security dialog for all variable groups](_img/set-build-release-permissions/open-variable-group-all-security.png) 

   If you want to manage the permissions for a specific variable group, then open the Security dialog for that group. 

   ![Open the Security dialog for a specific variable group](_img/set-build-release-permissions/open-variable-group-specific-security.png) 

1. Add the user or group and choose the role you want them to have. 

   For example, here we deny access to several permissions for the Contributors group. 

   ![Add user to a Library role](_img/set-build-release-permissions/library-security-role-dialog-add-user.png) 

1. Click **Add**.  

::: moniker-end

<a id="task-group" />

::: moniker range=">= tfs-2017"

## Manage task group permissions

Permissions for task groups are subject to a hierarchical model. You use task groups to encapsulate a sequence of tasks already defined in a build or a release definition into a single reusable task. You [define and manage task groups](../library/task-groups.md) in the **Task groups** tab of the **Build and Release** hub.

> [!NOTE]
> **Feature availability**: These features are available on VSTS and TFS 2017 and later versions. 

1. From the web portal **Build-Release** hub, **Task groups** page, open the Security dialog for all task groups.

   ![Open the Security dialog for all task groups](_img/set-build-release-permissions/open-task-group-all-security.png) 

   If you want to manage the permissions for a specific task group, then open the Security dialog for that group. 

1. Add the user or group and then set the permissions you want them to have. 

   For example, here we add Raisa and set her permissions to Administer all task groups. 

   ![Set task group permissions](_img/set-build-release-permissions/task-group-security-dialog.png) 

1. Click **Add**. 

::: moniker-end

<a id="collection-level" /> 

## Set collection-level permissions to administer build resources
 
1. From the web portal user context, open the admin context by clicking the ![gear icon](../../_img/icons/gear_icon.png) gear Settings icon and choosing **Account settings** or **Collection settings**.

1. Click **Security**, and then choose the group whose permissions you want to modify. 

   Here we choose the Build Administrators group and change the **Use build resources** permission. For a description of each permissions, see [Permissions and groups reference, Collection-level permissionss](../../security/permissions.md#collection-level).

   <img src="_img/set-build-release-permissions/set-build-collection-level-permission-dialog.png" alt="Security dialog for Project Collection Build Administrators group" style="border: 1px solid #C3C3C3;" />

1. Save your changes. 

::: moniker range=">= tfs-2015"

## Manage permissions for agent queues and service endpoints 

You manage the security for [agent pools](../agents/pools-queues.md) and [service endpoints](../library/service-endpoints.md) by adding users or groups to a role. The method is similar for both agent queues and service endpoints. You will need to be a member of the Project  Administrator group to manage the security for these resources. 
 
> [!NOTE]
> **Feature availability**: These features are available on VSTS and TFS 2015 and later versions. 

For example, here we show how to add a user to the Administrator role for a service endpoint.  

1. From the web portal, click the ![gear settings icon](../../_img/icons/gear_icon.png) gear Settings icon to open the project settings admin context. 

1. Click **Services**, click the service endpoint that you want to manage, and then click **Roles**.   

   ![Open the Roles tab for a service endpoint](_img/manage-roles/open-services-roles.png) 

1. Add the user or group and choose the role you want them to have. For a description of each role, see [About security roles](../../security/about-security-roles.md). 

   For example, here we add Raisa to the Administrator role. 

   ![Add a user to the Adminstrator role](_img/manage-roles/add-user-role-endpoint-service.png)  

1. Click **Add**.  

::: moniker-end

::: moniker range=">= tfs-2018"

## Manage permissions for agent pools and deployment pools  

You manage the security for [agent pools](../agents/pools-queues.md) and [deployment pools](../release/deployment-groups/index.md) by adding users or groups to a role. The method is similar for both types of pools. 
 
> [!NOTE]
> **Feature availability**: These features are available on VSTS and TFS 2018 and later versions. 

You will need to be a member of the Project Collection Administrator group to manage the security for a pool. Once you've been added to the Administrator role, you can then manage the pool. For a description of each role, see [About security roles](../../security/about-security-roles.md). 

1. From the web portal, click the ![gear settings icon](../../_img/icons/gear_icon.png) gear Settings icon and choose Account settings or Collection settings to open the collection-level settings admin context. 

1. Click **Deployment Pools**, and then open the **Security** dialog for all deployment pools.    

   ![Open the Roles tab for a service endpoint](_img/manage-roles/open-security-deployment-pools.png) 

   If you want to manage the permissions for a specific deployment group, then open the Security dialog for that group. 

1. Add the user or group and choose the role you want them to have. 

   For example, here we add Raisa to the Administrator role. 

   ![Add a user to the Adminstrator role](_img/manage-roles/add-user-role-deployment-pool.png)  

1. Click **Add**.  

::: moniker-end

## Related notes 

[Default build and release permissions](../policies/permissions.md)
- [Default permissions and access](../../security/permissions-access.md) 
- [Permissions and groups reference](../../security/permissions.md) 
