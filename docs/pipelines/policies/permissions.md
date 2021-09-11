---
title: Set pipeline permissions
ms.topic: conceptual
ms.custom: seodec18, contperf-fy21q3
description: Understand how permissions and roles are used to securely manage Azure Pipelines.
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.author: jukullam
author: juliakm
ms.date: 03/11/2021
monikerRange: '>= tfs-2015'
---

# Set different levels of pipeline permissions

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

[!INCLUDE [temp](../includes/concept-rename-note.md)]

Pipeline permissions are the permissions associated with pipelines in an Azure DevOps project. 
Permissions in Azure DevOps are hierarchical and can be set at the organization, server (for on-premises), project, and object levels. 

Object-level permissions are designed to be more granular than organization-level permissions. For example, a user could have access to your Azure repository thanks to their organization-level permissions. However, that same user could be prevented from running a pipeline manually because of that pipeline's permissions. 

You can increase the security of your pipeline by fine-tuning the object-level permissions associated with your pipeline. To learn more about best practices for pipeline security, see [Security Azure Pipelines](../security/overview.md). 

To learn more about how Azure DevOps permissions work overall, including how the permissions hierarchy, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

## Prerequisites
* To manage permissions for project-level groups, you'll need to be a **Project Administrator**. Learn more about  [project-level group permissions](../../organizations/security/permissions.md#project-level-groups). You'll need to be a member of the Project Administrators group to [add users to Azure Pipelines](set-permissions.md). 
* To manage permissions for collection groups, you'll need to be a **Project Collection Administrator**. [Learn more about collection-level group permissions](../../organizations/security/permissions.md#collection-level-groups). 

::: moniker range="azure-devops-2019"

## Default permissions assigned to built-in security groups

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


## Set pipeline permissions

You can update pipeline permissions with security groups or by adding individual users. To learn how to add a user to Azure Pipelines, see [Add users to Azure Pipelines](set-permissions.md).

When it comes to security, there are different best practices and levels of permissiveness. 

* In many cases, you probably also want to set **Delete build pipeline** to _Allow_. Otherwise these team members can't delete even their own build pipelines.

* Without **Delete builds** permission, users cannot delete even their own completed builds. However, keep in mind that they can automatically delete old unneeded builds using [retention policies](retention.md).

* We recommend that you do not grant these permissions directly to a person. A better practice is to add the person to the build administrator group or another group, and manage permissions on that group.




::: moniker range=">=azure-devops-2020"

### Update pipeline permissions at the project-level

To set the permissions at project level for all pipelines, choose **Manage security** from contextual menu for all pipelines.

1. In your project, go to **Pipelines** > **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation.png" alt-text="Select Pipelines from the menu.":::
    
1. Select **Manage security** from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false":::. 

    :::image type="content" source="media/manage-security-all-pipelines.png" alt-text="Manage security for all pipelines in a project. ":::

1. Modify the permissions associated with an [Azure DevOps group](../../organizations/security/permissions.md) (example: Build Administrators) or [individual user](set-permissions.md). 

1. Set permissions by selecting **Allow** or **Deny** for the permission for a security group or an individual user. 


### Update pipeline permissions for one pipeline

To set or override the permissions for a specific pipeline, choose **Security** from the context menu of the individual pipeline.

1. In your project, go to **Pipelines** > **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation.png" alt-text="Select Pipelines from the menu.":::

2. Open an individual pipeline. 

 
:::image type="content" source="media/manage-security.png" alt-text="Manage pipeline security":::

::: moniker-end 

::: moniker range="<=azure-devops-2020"
Build and YAML pipeline permissions follow a hierarchical model. Defaults for all the permissions can be set at the project level and can be overridden on an individual build pipeline.

To set the permissions at project level for all pipelines in a project, choose **Security** from the action bar on the main page of Builds hub.

To set or override the permissions for a specific pipeline, choose **Security** from the context menu of the pipeline.

The following permissions are defined for pipelines. All of these can be set at both the levels.

::: moniker-end

### Pipeline permissions reference
 
These permissions are defined for pipelines. All of these permissions can be set for both all pipelines in a project or for an individual pipeline.

To learn more about how permissions are set, including inheritance, see [About permissions and inheritance](../../organizations/security/about-permissions.md). To learn how inheritance is supported for role-based membership, see [About security roles](../../organizations/security/about-security-roles.md)


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

Default values for these permissions are set for team project collections and project groups. For example, <strong>Project Collection Administrators</strong>, <strong>Project Administrators</strong>, and <strong>Build Administrators</strong> are given all of the above permissions by default.

Once you've been added as a team member, you're a member of the Contributors group. This group permission allows you to define and manage builds and releases. The most common built-in groups include Readers, Contributors, and Project Administrators. 

For more information on default permissions, see [Default permissions and access quick reference](../../organizations/security/permissions-access.md). 


## Set release permissions


Permissions for release pipelines follow a hierarchical model. Defaults for all the permissions can be set at the project level and can be overridden on an individual release pipeline.

::: moniker range=">=azure-devops-2020"

### Update pipeline permissions for all releases

To update permissions for all releases, open **Releases** in the **Pipelines** tab. 

1. Select the file view. 

    :::image type="content" source="media/releases-select-file-view.png" alt-text="Select the all files view.":::

1. Select the **All pipelines** folder.

    :::image type="content" source="media/releases-select-all-pipelines.png" alt-text="Select all pipelines folder.":::

1. Open **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.


### Update pipeline permissions for one release

To update permissions for one release, first open **Releases** in the **Pipelines** tab.

1. Select the release you want to modify.

1. Open **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.

::: moniker-end 

::: moniker range="<=azure-devops-2020"

To set permissions at project level for all release definitions in a project, open the shortcut menu from the ![drop-down list](media/drop-down-list-icon.png)

To set or override the permissions for a specific release pipeline, open the shortcut menu from the ![drop-down list](media/drop-down-list-icon.png) icon next to that pipeline name. Then choose **Security** to open the **Permissions** dialog.

To specify security settings for individual stages in a release pipeline, open the **Permissions** dialog by choosing **Security** on the shortcut menu that opens from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: on a stage in the release pipeline editor.

::: moniker-end 


### Release permissions reference

The following permissions are defined for releases. The scope column explains whether the permission can be set at the project, release pipeline, or stage level.

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description   |
> |------------------------------------| -----------------------------------|
> | **Administer release permissions** | Can change any of the other permissions listed here. <br /> *Scopes*: Project, Release pipeline, Stage  |
> | **Create releases**                | Can create new releases. <br /> *Scopes*: Project, Release pipeline  |
> | **Delete release pipeline**        | Can delete release pipeline(s). <br /> *Scopes*: Project, Release pipeline |
> | **Delete release stage**           | Can delete stage(s) in release pipeline(s). <br /> *Scopes*: Project, Release pipeline, Stage |
> | **Delete releases**                | Can delete releases for a pipeline. <br /> *Scopes*: Project, Release pipeline |
> | **Edit release pipeline**          | Can save any changes to a release pipeline, including configuration variables, triggers, artifacts, and retention policy as well as configuration within a stage of the release pipeline. To make changes to a specific stage in a release pipeline, the user also needs **Edit release stage** permission. <br /> *Scopes*: Project, Release pipeline |
> | **Edit release stage**             | Can edit stage(s) in release pipeline(s). To save the changes to the release pipeline, the user also needs **Edit release pipeline** permission. This permission also controls whether a user can edit the configuration inside the stage of a specific release instance. The user also needs **Manage releases** permission to save the modified release. <br /> *Scopes*:  Project, Release pipeline, Stage|
> | **Manage deployments**             | Can initiate a deployment of a release to a stage. This permission is only for deployments that are manually initiated by selecting the **Deploy** or **Redeploy** actions in a release. If the condition on a stage is set to any type of automatic deployment, the system automatically initiates deployment without checking the permission of the user that created the release. If the condition is set to start after some stage, manually initiated deployments do not wait for those stages to be successful. <br /> *Scopes*: Project, Release pipeline, Stage |
> | **Manage release approvers**       | Can add or edit approvers for stage(s) in release pipeline(s). This permissions also controls whether a user can edit the approvers inside the stage of a specific release instance. <br /> *Scopes*: Project, Release pipeline, Stage |
> | **Manage releases**                | Can edit the configuration in releases. To edit the configuration of a specific stage in a release instance (including variables marked as `settable at release time`), the user also needs **Edit release stage** permission. <br /> *Scopes*: Project, Release pipeline |
> | **View release pipeline**          | Can view release pipeline(s). <br /> *Scopes*: Project, Release pipeline|
> | **View releases**                  | Can view releases belonging to release pipeline(s). <br /> *Scopes*: Project, Release pipeline | 

<p />
Default values for all of these permissions are set for team
project collections and project groups. For example,
<strong>Project Collection Administrators</strong>, <strong>Project Administrators</strong>, and
<strong>Release Administrators</strong> are given all of the above permissions by
default. <strong>Contributors</strong> are given all permissions except
<strong>Administer release permissions</strong>. <strong>Readers</strong>, by default,
are denied all permissions except <strong>View release pipeline</strong> and
<strong>View releases</strong>.


## Set task group permissions

You can use task groups to combine a sequence of tasks already defined in a pipeline into a single, reusable task. [Task groups](../library/task-groups.md) are defined in the **Task groups** tab for **Azure Pipelines**.

Task group permissions follow a hierarchical model. Defaults for all the permissions can be set at the project level and can be overridden on an individual task group pipeline.

::: moniker range=">=azure-devops-2020"

### Set task group permissions at the project-level

> [!NOTE]
> Task groups are not supported in YAML pipelines. Instead, in that case you can use templates. See [YAML schema reference](../yaml-schema.md#step-templates).


1. Open **Pipelines** > **Task groups** in your project. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Find task group menu item.":::

1. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Select the Security option for a task group.":::


1. Set permissions by selecting **Allow** or **Deny** for the permission for a security group or an individual user. 


### Set task group permissions at the pipeline-level

1. Open **Pipelines** > **Task groups** in your project. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Find task group menu item.":::

1.  Select a task group. 

1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: to open the **Security** menu. 

1. Set permissions by selecting **Allow** or **Deny** for the permission for a security group or an individual user. 

::: moniker-end

### Task group permissions reference

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description | 
> |------------|-------------| 
> | **Administer task group permissions** | Can add and remove users or groups to task group security. |
> | **Delete task group** | Can delete a task group. | 
> | **Edit task group** | Can create, modify, or delete a task group. | 


## Set agent pool permissions

You can use pre-defined roles to configure [security on agent pools](../agents/pools-queues.md#security).
You can configure this in a hierarchical manner either for all pools, or for an individual pool.  

::: moniker range=">=azure-devops-2020"

To configure agent pool permissions, open **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
Select **Security** to configure security settings for all agent pools. 

:::image type="content" source="media/agent-pool-security.png" alt-text="Configure agent pool security."::: 

 To configure permissions for one agent pool, select the agent. Then, select the **Security** tab.

:::image type="content" source="media/single-agent-pool-security.png" alt-text="Set security for one agent pool.":::

::: moniker-end

## Set library permissions

Permissions for library artifacts, such as variable groups and secure files, are managed by roles. You can use a variable group to store values that you want to make available across multiple build and release pipelines. Roles are also defined to help you configure security on shared [library entities](../library/index.md) such as [variable groups](../library/index.md#library-security). You can configure these roles hierarchically.

::: moniker range=">=azure-devops-2020"

To [define and manage variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md), open the **Library** tab in **Azure Pipelines**.

:::image type="content" source="media/pipeline-library-permissions.png" alt-text="Open the Library menu option.":::

You can configure Library object permissions for everything in your library or for an individual variable group or secure file. Select the **Security** option in the navigation for all of your variable groups and secure files or for one instance. 

:::image type="content" source="media/pipelines-security-library.png" alt-text="Security option in Library.":::

::: moniker-end

### Library permissions reference

[!INCLUDE [temp](../../organizations/security/includes/library-roles.md)]


## Set service connection permissions

::: moniker range="<=azure-devops-2020"

You [add users to the following roles](set-permissions.md) from the project-level admin context, **Services** page. To create and manage these resources, see [Service connections for build and release](../library/service-endpoints.md).   

::: moniker-end

::: moniker range=">=azure-devops-2020"

To configure [service connection](../library/service-endpoints.md) permissions, open **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. Select **Service connections** in **Pipelines** to configure service connections. 

You can configure permissions in a hierarchical manner either for all service connections, or for an individual connection.  

To configure permissions for all service connections, select **Security** from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false":::.

:::image type="content" source="media/security-option-service-connection.png" alt-text="Select security service connection option.":::

To configure permissions for one service connection, open the service connection and select **Security** from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: within an individual service connection.

::: moniker-end

If you're having trouble with permissions and service connections, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).


### Service connection permissions reference

[!INCLUDE [temp](../../organizations/security/includes/service-endpoint-roles.md)]

## Set deployment pool permissions

You can set default security roles for all [deployment groups](../release/deployment-groups/index.md) and manage security roles for an individual deployment group.

::: moniker range=">=azure-devops-2020"

To set default deployment group permissions, open **Deployment groups** in the **Pipelines** tab. Then, select **Security**.

:::image type="content" source="media/deployment-groups-permissions.png" alt-text="Select Security to manage default deployment group permissions.":::

To set permissions for a specific deployment group, select the deployment group. On the deployment group page, select **Security**.

::: moniker-end

### Deployment pool permissions reference

[!INCLUDE [temp](../../organizations/security/includes/deployment-pool-roles.md)]


::: moniker range=">=azure-devops-2020"

## Set environment permissions 

You can use roles and user permissions to control who [can create, view, and manage environments](../process/environments.md#security). Environment roles are hierarchical and can be applied to all environments or one environment. 

To change environment permissions, open **Environments** in the **Pipelines** tab. 

:::image type="content" source="media/environments-permissions.png" alt-text="Select Environments.":::

Select **Security** from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: to change permissions for all environment.

To change the permission for one environment, select the environment. Then, select **Security** from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false":::.  
 

### Environment permissions reference

> [!NOTE]
> When you create an environment in a YAML, contributors and project administrators will be granted the administrator role. When you create an environment through the UI, only the creator will have the administrator role. 

[!INCLUDE [temp](../../organizations/security/includes/environment-roles.md)]

::: moniker-end

## Related notes 

- [Set build and release permissions](set-permissions.md)
- [Default permissions and access](../../organizations/security/permissions-access.md) 
- [Permissions and groups reference](../../organizations/security/permissions.md) 
- [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)

## FAQ

### Why can't I create a new pipeline?

You need edit build pipeline permissions to create a new pipeline. To add the permission, open the security settings for all pipelines and verify that  **Edit build pipeline** is set to *Allow* for your security group. 

If you're still unable to create a pipeline after updating this permission, check to see if your [access level](../../organizations/security/access-levels.md) is set to **Stakeholder**. If you have stakeholder access, change your access to **Basic**. 

::: moniker range=">=azure-devops-2020"

### Why do I see the message that I need to authorize a resource before the run can continue? 

You'll need to authorize resources before you can use them. The exception to this is that when you create a pipeline for the first time, all the resources that are referenced in the YAML file are automatically authorized. The resource are authorized for the pipeline as long as the user running the pipeline has access to the resource. 

If you want to authorize **all pipelines** to access a resource like an agent pool, go to the permissions setting for that resource. 

For example, if you want all pipelines to be able to use an agent pool, go to **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent Pools** in **Pipelines**. 

Next, select the **Security** tab for a specific agent pool and update permissions to grant access to all pipelines. 

:::image type="content" source="media/agent-pool-grant-permissions.png" alt-text="Grant permissions to all pipelines.":::

To learn more about resources, see [Resources in YAML](../process/resources.md).

::: moniker-end
