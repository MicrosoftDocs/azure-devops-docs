---
title: Build and release permissions and security roles
ms.topic: conceptual
ms.custom: seodec18
description: Understand how permissions and roles are used to securely manage build and release operations in Azure Pipelines and Team Foundation Server (TFS).
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 02/12/18
monikerRange: '>= tfs-2015'
---

# Build and release permissions and security roles

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

To support security of your build and release operations, you can add users to a built-in security group, set individual permissions for a user or group, or add users to pre-defined roles. You manage security for the following objects from **Azure Pipelines** in the web portal, either from the user or admin context.

This topic provides a description of the permissions and roles used to secure operations. To learn how to set permissions or add a user or group to a role, see [Set build and release permissions](set-permissions.md).

For permissions, you grant or restrict permissions by setting the permission state to Allow or Deny, either for a security group or an individual user. For a role, you add a user or group to the role. To learn more about how permissions are set, including inheritance, see [About permissions and groups](../../organizations/security/about-permissions.md). To learn how inheritance is supported for role-based membership, see [About security roles](../../organizations/security/about-security-roles.md).

## Default permissions assigned to built-in security groups

Once you have been added as a team member, you are a member of the Contributors group. This allows you to define and manage builds and releases.  The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions as listed below.

[!INCLUDE [temp](../../organizations/security/_shared/build-release.md)]

## Security of agents and library entities

You use pre-defined roles and manage membership in those roles to
configure [security on agent pools](../agents/pools-queues.md#security).
You can configure this in a hierarchical manner either for all
pools, or for an individual pool.  

Roles are also defined to help you configure security on shared
[library entities](../library/index.md) such as [variable groups](../library/index.md#security)
and [service connection](../library/service-endpoints.md#security).
Membership of these roles can be configured hierarchically, as well
as at either project level or individual entity level.

## Build permissions

Permissions in Build follow a hierarchical model. Defaults for all the permissions can be set at the project level and can be overridden on an individual build pipeline.

To set the permissions at project level for all build pipelines in a project, choose **Security** from the action bar on the main page of Builds hub.

To set or override the permissions for a specific build pipeline, choose **Security** from the context menu of the build pipeline.

The following permissions are defined in Build. All of these can be set at both the levels.


> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description |
> |------------|-------------|
> | **Administer build permissions** | Can change any of the other permissions listed here. |
> | **Queue builds** | Can queue new builds. |
> | **Delete build pipeline** | Can delete build pipeline(s). |
> | **Delete builds** | Can delete builds for a pipeline. Builds that are deleted are [retained](retention.md) in the **Deleted** tab for a period of time before they are destroyed. |
> | **Destroy builds** | Can delete builds from the **Deleted** tab. |
> | **Edit build pipeline** | Can save any changes to a build pipeline, including configuration variables, triggers, repositories, and retention policy. |
> | **Edit build quality** | Can add tags to a build. |
> | **Override check-in validation by build** | Applies to [TFVC gated check-in builds](../build/triggers.md#gated). This does not apply to PR builds. |
> | **Retain indefinitely** | Can toggle the retain indefinitely flag on a build. |
> | **Stop builds** | Can stop builds queued by other team members or by the system.  |
> | **View build pipeline** | Can view build pipeline(s). |
> | **View builds** | Can view builds belonging to build pipeline(s). |
> | **Update build information** | It is recommended to leave this alone. It's intended to enable service accounts, not team members. |
> | **Manage build qualities** | _Only applies to XAML builds_ |
> | **Manage build queue** | _Only applies to XAML builds_ |

<p />
Default values for all of these permissions are set for team
project collections and project groups. For example,
**Project Collection Administrators**, **Project Administrators**, and
**Build Administrators** are given all of the above permissions by
default.

When it comes to security, there are different best practices and levels of permissiveness. While there's no one right way to handle permissions, we hope these examples help you empower your team to work securely with builds.

* By default, contributors in a project cannot create or edit build pipelines. To grant permissions to work on build pipelines, select _Contributors_ and set the **Edit build pipeline** permission to _Allow_.

* In many cases you probably also want to set **Delete build pipeline** to _Allow_. Otherwise these team members can't delete even their own build pipelines.

* Without **Delete builds** permission, users cannot delete even their own completed builds. However, keep in mind that they can automatically delete old unneeded builds using [retention policies](retention.md).

* We recommend that you do not grant these permissions directly to a person. A better practice is to add the person to the build administrator group or another group, and manage permissions on that group.

## Release permissions

Permissions for releases follow a hierarchical model.
Defaults for all the permissions can be set at the project
level and can be overridden on an individual release pipeline.
Some of the permissions can also be overridden on a specific
stage within a pipeline. The hierarchical model helps
you define default permissions for all definitions at one extreme,
and to lock down the production stage for an application at
the other extreme.

To set permissions at project level for all release
definitions in a project, open the shortcut menu from the ![drop-down list](_img/drop-down-list-icon.png)
icon next to **All release pipelines** and choose **Security**.

To set or override the permissions for a specific release
pipeline, open the shortcut menu from the ![drop-down list](_img/drop-down-list-icon.png)
icon next to that pipeline name. Then choose **Security** to open the
**Permissions** dialog.

To specify security settings for individual stages in a release pipeline, open
the **Permissions** dialog by choosing **Security** on the shortcut menu that opens
from the ellipses (**...**) on a stage in the release pipeline editor.

The following permissions are defined for releases. The scope column explains whether the permission can be set at the project, release pipeline, or stage level.

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description | Scopes |
> |------------|-------------|--------|
> | **Administer release permissions** | Can change any of the other permissions listed here. | Project, Release pipeline, Stage |
> | **Create releases** | Can create new releases. | Project, Release pipeline |
> | **Delete release pipeline** | Can delete release pipeline(s). | Project, Release pipeline |
> | **Delete release stage** | Can delete stage(s) in release pipeline(s). | Project, Release pipeline, Stage |
> | **Delete releases** | Can delete releases for a pipeline. | Project, Release pipeline |
> | **Edit release pipeline** | Can save any changes to a release pipeline, including configuration variables, triggers, artifacts, and retention policy as well as configuration within a stage of the release pipeline. To make changes to a specific stage in a release pipeline, the user also needs **Edit release stage** permission. | Project, Release pipeline |
> | **Edit release stage** | Can edit stage(s) in release pipeline(s). To save the changes to the release pipeline, the user also needs **Edit release pipeline** permission. This permission also controls whether a user can edit the configuration inside the stage of a specific release instance. The user also needs **Manage releases** permission to save the modified release. | Project, Release pipeline, Stage |
> | **Manage deployments** | Can initiate a direct deployment of a release to a stage. This permission is only for direct deployments that are manually initiated by selecting the **Deploy** or **Redeploy** actions in a release. If the condition on a stage is set to any type of automatic deployment, the system automatically initiates deployment without checking the permission of the user that created the release. | Project, Release pipeline, Stage |
> | **Manage release approvers** | Can add or edit approvers for stage(s) in release pipeline(s). This permissions also controls whether a user can edit the approvers inside the stage of a specific release instance. | Project, Release pipeline, Stage |
> | **Manage releases** | Can edit the configuration in releases. To edit the configuration of a specific stage in a release instance, the user also needs **Edit release stage** permission. | Project, Release pipeline |
> | **View release pipeline** | Can view release pipeline(s). | Project, Release pipeline |
> | **View releases** | Can view releases belonging to release pipeline(s). | Project, Release pipeline |

<p />
Default values for all of these permissions are set for team
project collections and project groups. For example,
**Project Collection Administrators**, **Project Administrators**, and
**Release Administrators** are given all of the above permissions by
default. **Contributors** are given all permissions except
**Administer release permissions**. **Readers**, by default,
are denied all permissions except **View release pipeline** and
**View releases**.

## Task group permissions
Task group permissions follow a hierarchical model.
Defaults for all the permissions can be set at the project
level and can be overridden on an individual task group pipeline.

You use task groups to encapsulate a sequence of tasks already defined in a build or a release pipeline into a single reusable task. You [define and manage task groups](../library/task-groups.md) in the **Task groups** tab in **Azure Pipelines**.

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description | 
> |------------|-------------| 
> | **Administer task group permissions** | Can add and remove users or groups to task group security. |
> | **Delete task group** | Can delete a task group. | 
> | **Edit task group** | Can create, modify, or delete a task group. | 


## Library roles and permissions

Permissions for library artifacts, such as variable groups and secure files, are managed by roles. You use a variable group to store values that you want to make available across multiple build and release pipelines. You [define and manage variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md) in the **Library** tab in **Azure Pipelines**.

[!INCLUDE [temp](../../organizations/security/_shared/library-roles.md)]

## Service connection security roles

You [add users to the following roles](set-permissions.md) from the project-level admin context, **Services** page. To create and manage these resources, see [Service connections for build and release](../library/service-endpoints.md).   

[!INCLUDE [temp](../../organizations/security/_shared/service-endpoint-roles.md)]

## Deployment pool security roles

You [add users to the following roles](set-permissions.md) from the collection-level admin context, **Deployment Pools** page. To create and manage deployment pools, see [Deployment groups](../release/deployment-groups/index.md).   

[!INCLUDE [temp](../../organizations/security/_shared/deployment-pool-roles.md)]


## Related notes 

- [Set build and release permissions](set-permissions.md)
- [Default permissions and access](../../organizations/security/permissions-access.md) 
- [Permissions and groups reference](../../organizations/security/permissions.md) 
