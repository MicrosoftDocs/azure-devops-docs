---
title: Set pipeline object-level permissions
ms.topic: conceptual
ms.custom: seodec18
description: Understand how permissions and roles are used to securely manage build and release operations in Azure Pipelines and Team Foundation Server (TFS).
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.author: jukullam
author: juliakm
ms.date: 03/03/2021
monikerRange: '>= tfs-2015'
---

# Pipeline permissions and security roles

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

[!INCLUDE [temp](../includes/concept-rename-note.md)]

Permissions in Azure DevOps are hierarchical and can be set at the organization, server (for on-premises), project, and object levels. Pipeline permissions are the object-level permissions associated with a set of pipelines or one pipeline in an Azure DevOps project. 

This article also includes an overview of all of the object-level permissions that you can find in the **Pipelines** menu:

    - pipeline permissions
    - release permissions
    - task group permissions
    - library permissions
    - service connection permissions
    - deployment pool permissions
    - environment permissions

Object-level permissions are designed to be more granular than organization-level permissions. For example, a user could have access to your Azure repository thanks to their organization-level permissions. However, that same user could be prevented from running a pipeline manually because of that pipeline's permissions. 

You can increase the security of your pipeline by fine-tuning the object-level permissions associated with your pipeline. To learn more about best practices for pipeline security, see [Security Azure Pipelines](../security/overview.md). 

To learn more about how Azure DevOps permissions work overall, including how the permissions hierarchy, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).



## Update pipeline permissions

You can update pipeline permissions with security groups or by adding individual users. To learn how to add a user to Azure Pipelines, see [Add users to Azure Pipelines](set-permissions.md).

When it comes to security, there are different best practices and levels of permissiveness. 

* In many cases you probably also want to set **Delete build pipeline** to _Allow_. Otherwise these team members can't delete even their own build pipelines.

* Without **Delete builds** permission, users cannot delete even their own completed builds. However, keep in mind that they can automatically delete old unneeded builds using [retention policies](retention.md).

* We recommend that you do not grant these permissions directly to a person. A better practice is to add the person to the build administrator group or another group, and manage permissions on that group.


### Set pipeline permissions at the project-level

To set the permissions at project level for all pipelines, choose **Manage security** from contextual menu for all pipelines.

1. In your project, go to **Pipelines** > **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation.png" alt-text="Select Pipelines from the menu.":::
    
1. Select **Manage security** from the contextual menu. 

    :::image type="content" source="media/manage-security-all-pipelines.png" alt-text="Manage security for all pipelines in a project. ":::

1. Modify the permissions associated with a [Azure DevOps group](../../organizations/security/permissions.md) (example: Build Administrators) or [individual user](set-permissions.md). 



### Set pipeline permissions for one pipeline

To set or override the permissions for a specific pipeline, choose **Security** from the context menu of the individual pipeline.

1. In your project, go to **Pipelines** > **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation.png" alt-text="Select Pipelines from the menu.":::

2. Open an individual pipeline. 


 
:::image type="content" source="media/manage-security.png" alt-text="Manage pipeline security":::




### Pipeline permissions descriptions
 
These permissions are defined for pipelines. All of these can be set for both all pipelines in a project or for an individual pipeline.

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description |
> |------------|-------------|
> | **Administer build permissions** | Can change any of the other permissions listed here. |
> | **Queue builds** | Can queue new builds. |
> | **Delete build pipeline** | Can delete build pipeline(s). |
> | **Delete builds** | Can delete builds for a pipeline. Builds that are deleted are [retained](retention.md) in the **Deleted** tab for a period of time before they are destroyed. |
> | **Destroy builds** | Can delete builds from the **Deleted** tab. |
> | **Edit build pipeline** | Can create pipelines and save any changes to a build pipeline, including configuration variables, triggers, repositories, and retention policy. |
> | **Edit build quality** | Can add tags to a build. |
> | **Override check-in validation by build** | Applies to [TFVC gated check-in builds](../repos/tfvc.md#gated). This does not apply to PR builds. |
> | **Retain indefinitely** | Can toggle the retain indefinitely flag on a build. |
> | **Stop builds** | Can stop builds queued by other team members or by the system.  |
> | **View build pipeline** | Can view build pipeline(s). |
> | **View builds** | Can view builds belonging to build pipeline(s). |
> | **Update build information** | It is recommended to leave this alone. It's intended to enable service accounts, not team members. |
> | **Manage build qualities** | _Only applies to XAML builds_ |
> | **Manage build queue** | _Only applies to XAML builds_ |

Default values for these permissions are set for team
project collections and project groups. For example,
<strong>Project Collection Administrators</strong>, <strong>Project Administrators</strong>, and
<strong>Build Administrators</strong> are given all of the above permissions by
default.







## Set permissions at the organization level
## Set permissions at the project level 
## Set permissions at the object-level 

 


## Best practices




### MOVE ME

For permissions, you grant or restrict permissions by setting the permission state to Allow or Deny, either for a security group or an individual user. For a role, you add a user or group to the role. To learn more about how permissions are set, including inheritance, see [About permissions and inheritance](../../organizations/security/about-permissions.md). To learn how inheritance is supported for role-based membership, see [About security roles](../../organizations/security/about-security-roles.md).

## Default permissions assigned to built-in security groups

Once you have been added as a team member, you are a member of the Contributors group. This allows you to define and manage builds and releases. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions as listed below.

::: moniker range=">=azure-devops-2020"

[!INCLUDE [temp](../../organizations/security/includes/pipelines-cloud.md)]

::: moniker-end 

::: moniker range="azure-devops-2019"

### Build  

[!INCLUDE [temp](../../organizations/security/includes/pipelines-build.md)]

### Release 

[!INCLUDE [temp](../../organizations/security/includes/pipelines-release.md)] 

### Task groups  

[!INCLUDE [temp](../../organizations/security/includes/task-groups.md)]

::: moniker-end 

::: moniker range=">= tfs-2015 <= tfs-2018"

### Build  

[!INCLUDE [temp](../../organizations/security/includes/build.md)]

### Release  

[!INCLUDE [temp](../../organizations/security/includes/release.md)]

::: moniker-end    

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

## Pipeline permissions

Build and YAML pipeline permissions follow a hierarchical model. Defaults for all the permissions can be set at the project level and can be overridden on an individual build pipeline.



STOPPED



## Release permissions

Permissions for release pipelines follow a hierarchical model.
Defaults for all the permissions can be set at the project
level and can be overridden on an individual release pipeline.
Some of the permissions can also be overridden on a specific
stage within a pipeline. The hierarchical model helps
you define default permissions for all definitions at one extreme,
and to lock down the production stage for an application at
the other extreme.

To set permissions at project level for all release
definitions in a project, open the shortcut menu from the ![drop-down list](media/drop-down-list-icon.png)
icon next to **All release pipelines** and choose **Security**.

To set or override the permissions for a specific release
pipeline, open the shortcut menu from the ![drop-down list](media/drop-down-list-icon.png)
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
> | **Manage deployments** | Can initiate a deployment of a release to a stage. This permission is only for deployments that are manually initiated by selecting the **Deploy** or **Redeploy** actions in a release. If the condition on a stage is set to any type of automatic deployment, the system automatically initiates deployment without checking the permission of the user that created the release. If the condition is set to start after some stage, manually initiated deployments do not wait for those stages to be successful.  | Project, Release pipeline, Stage |
> | **Manage release approvers** | Can add or edit approvers for stage(s) in release pipeline(s). This permissions also controls whether a user can edit the approvers inside the stage of a specific release instance. | Project, Release pipeline, Stage |
> | **Manage releases** | Can edit the configuration in releases. To edit the configuration of a specific stage in a release instance (including variables marked as `settable at release time`), the user also needs **Edit release stage** permission. | Project, Release pipeline |
> | **View release pipeline** | Can view release pipeline(s). | Project, Release pipeline |
> | **View releases** | Can view releases belonging to release pipeline(s). | Project, Release pipeline |

<p />
Default values for all of these permissions are set for team
project collections and project groups. For example,
<strong>Project Collection Administrators</strong>, <strong>Project Administrators</strong>, and
<strong>Release Administrators</strong> are given all of the above permissions by
default. <strong>Contributors</strong> are given all permissions except
<strong>Administer release permissions</strong>. <strong>Readers</strong>, by default,
are denied all permissions except <strong>View release pipeline</strong> and
<strong>View releases</strong>.

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

[!INCLUDE [temp](../../organizations/security/includes/library-roles.md)]

## Service connection security roles

You [add users to the following roles](set-permissions.md) from the project-level admin context, **Services** page. To create and manage these resources, see [Service connections for build and release](../library/service-endpoints.md).   

[!INCLUDE [temp](../../organizations/security/includes/service-endpoint-roles.md)]

## Deployment pool security roles

You [add users to the following roles](set-permissions.md) from the collection-level admin context, **Deployment Pools** page. To create and manage deployment pools, see [Deployment groups](../release/deployment-groups/index.md).   

[!INCLUDE [temp](../../organizations/security/includes/deployment-pool-roles.md)]


## Environment permissions 

You can use roles to control who [can create, view, and manage environments](../process/environments.md#security). When you create an environment in a YAML, contributors and project administrators will be granted the administrator role. When you create an environment through the UI, only the creator will have the administrator role. 

## Related notes 

- [Set build and release permissions](set-permissions.md)
- [Default permissions and access](../../organizations/security/permissions-access.md) 
- [Permissions and groups reference](../../organizations/security/permissions.md) 
