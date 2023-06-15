---
title: Set pipeline permissions
ms.topic: conceptual
ms.custom: seodec18, contperf-fy21q3
description: Understand how you can set permissions at varying levels to securely manage Azure Pipelines.
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.author: jukullam
author: juliakm
ms.date: 01/04/2023
monikerRange: '<= azure-devops'
---

# Set pipeline permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [temp](../includes/concept-rename-note.md)]

::: moniker range="azure-devops"
Pipeline permissions and roles help you securely manage your pipelines. You can set hierarchical permissions at the organization, project, and object levels for all pipelines in a project or for an individual pipeline. You can update pipeline permissions with security groups or by [adding individual users](set-permissions.md).
::: moniker-end

::: moniker range="< azure-devops"
Pipeline permissions and roles help you securely manage your pipelines. You can set hierarchical permissions at the organization, server, project, and object levels for all pipelines in a project or for an individual pipeline. You can update pipeline permissions with security groups or by [adding individual users](set-permissions.md).
::: moniker-end

Object-level permissions are more granular than organization-level permissions, so you can increase the security of your pipeline. For example, a user could have access to your Azure Repos repository thanks to their organization-level permissions. However, that same user could be prevented from running a pipeline manually because of that object/pipeline's permissions.

In this article, we break down the permissions to the following levels of permissions:
- [Project-level permissions](#set-project-level-pipeline-permissions)
- Object-level permissions:
  - [Release](#set-release-permissions)
  - [Task group](#set-task-group-permissions)
  - [Agent pool](#set-agent-pool-permissions)
  - [Library](#set-library-permissions)
  - [Service connection](#set-service-connection-permissions)
  - [Deployment pool](#set-deployment-pool-permissions)
  - [Environment](#set-environment-permissions)

For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md), [Securing Azure Pipelines](../security/overview.md), and [Verify permissions for contributors](set-permissions.md#verify-permissions-for-contributors). 

## Prerequisites

* To manage permissions and [add users to Azure Pipelines](set-permissions.md) for project-level groups, you must be a **Project Administrator**. For more information, see [Project-level group permissions](../../organizations/security/permissions.md#project-level-groups).
* To manage permissions for collection groups, you must be a **Project Collection Administrator**. For more information, see [collection-level group permissions](../../organizations/security/permissions.md#collection-level-groups).
* Keep the following information in mind when you're setting pipeline permissions. 
   * In many cases, you might want to set **Delete build pipeline** to _Allow_. Otherwise, these team members can't delete their own build pipelines.
   * Without the **Delete builds** permission, users can't delete their own completed builds. However, they can automatically delete old unneeded builds with [retention policies](retention.md).
   * We recommend that you don't grant permissions directly to a user. A better practice is to add the user to the build administrator group or another group, and manage permissions for that group.

For more information and best practices, see [Securing Azure Pipelines](../security/overview.md).

::: moniker range="azure-devops-2019"
## Default permissions assigned to built-in security groups
### Build  
[!INCLUDE [temp](../../organizations/security/includes/pipelines-build.md)]
### Release 
[!INCLUDE [temp](../../organizations/security/includes/pipelines-release.md)] 
### Task groups  
[!INCLUDE [temp](../../organizations/security/includes/task-groups.md)]
::: moniker-end 
::: moniker range="tfs-2018"
## Default permissions assigned to built-in security groups
### Build  
[!INCLUDE [temp](../../organizations/security/includes/build.md)]
### Release  
[!INCLUDE [temp](../../organizations/security/includes/release.md)]
::: moniker-end  

## Set project-level pipeline permissions

::: moniker range=">=azure-devops-2020"

Do the following steps to set project-level permissions for all pipelines.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. From within your project, select **Pipelines** > **Pipelines**.
    
    :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing ordered Pipelines menu selections.":::
    
3. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Manage security**. 

    :::image type="content" source="media/manage-security-all-pipelines.png" alt-text="Screenshot showing ordered selections to Manage security for all pipelines in a project. ":::

4. Modify the permissions associated with an [Azure DevOps group](../../organizations/security/permissions.md), for example, Build Administrators, or for an [individual user](set-permissions.md). 

5. Select **Allow** or **Deny** for the permission for a security group or an individual user, and then exit the screen. 

Your project-level pipelines permissions are set.

::: moniker-end

::: moniker range="< azure-devops-2020"
Build and YAML pipeline permissions follow a hierarchical model. You can set defaults for all permissions at the project-level and override permissions for an individual build pipeline.

To set the permissions at project-level for all pipelines in a project, choose **Security** from the action bar on the main page of **Builds** hub.

::: moniker-end
### Set individual pipeline permissions

::: moniker range=">=azure-devops-2020"

Do the following steps to set permissions for an individual pipeline.

1. From within your project, select **Pipelines** > **Pipelines**.
    
   :::image type="content" source="media/pipelines-navigation-from-project.png" alt-text="Screenshot showing Pipelines ordered menu selections.":::

2. Select an individual pipeline, and then select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Manage security**. 

   :::image type="content" source="media/individual-pipeline-more-actions-menu.png" alt-text="Screenshot showing selected Manage security option from an individual pipeline's more actions menu.":::
3. Set permissions, and then **Save** your changes.
::: moniker-end 

::: moniker range="< azure-devops-2020"

To set or override the permissions for an individual pipeline, choose **Security** from the context menu of the individual pipeline.

::: moniker-end

### Pipeline permissions reference
 
You can set the following permissions for all pipelines in a project or for an individual pipeline. 
Default values are set for project collections and project groups. For example, Project Collection Administrators, Project Administrators, and Build Administrators have all these permissions by default. 

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description |
> |------------|-------------|
> | **Administer build permissions** | Can change any of the other permissions listed here. |
> | **Delete build pipeline** | Can delete build pipeline(s). |
> | **Delete builds** | Can delete builds for a pipeline. Deleted builds are [retained](retention.md) in the **Deleted** tab for a period before they're destroyed. |
> | **Destroy builds** | Can delete builds from the **Deleted** tab. |
> | **Edit build pipeline** | Can create pipelines and save any changes to a build pipeline, including configuration variables, triggers, repositories, and retention policy. |
> | **Edit build quality** | Can add tags to a build. |
> | **Manage build qualities** | _Only applies to XAML builds_ |
> | **Manage build queue** | _Only applies to XAML builds_ |
> | **Override check-in validation by build** | Applies to [TFVC gated check-in builds](../repos/tfvc.md#gated). Doesn't apply to pull request builds. |
> | **Queue builds** | Can queue new builds. |
> | **Retain indefinitely** | Can toggle the retain indefinitely flag on a build. |
> | **Stop builds** | Can stop builds queued by other team members or by the system.  |
> | **Update build information** | It is recommended to leave this alone. It's intended to enable service accounts, not team members. |
> | **View build pipeline** | Can view build pipeline(s). |
> | **View builds** | Can view builds belonging to build pipeline(s). |

All team members are members of the **Contributors** group. This group permission allows you to define and manage builds and releases. The most common built-in groups include Readers, Contributors, and Project Administrators. 

For more information, see the following articles:
- [Default permissions and access quick reference](../../organizations/security/permissions-access.md)
- [About permissions and inheritance](../../organizations/security/about-permissions.md)
- [About security roles](../../organizations/security/about-security-roles.md).
## Set release permissions

Permissions for release pipelines follow a hierarchical model. You can set default permissions at the project-level, and you can override these permissions on an individual release pipeline.

::: moniker range=">=azure-devops-2020"

### Set all release permissions

Do the following steps to update permissions for all releases. 

1. Select the file view. 

    :::image type="content" source="media/releases-select-file-view.png" alt-text="Screenshot showing selection of the all files view.":::

2. Select the **All pipelines** folder.

    :::image type="content" source="media/releases-select-all-pipelines.png" alt-text="Screenshot showing selection of all pipelines folder.":::

3. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and select **Security**.
4. Set permissions, and then **Save** your changes.

### Set individual release permissions

Do the following steps to update permissions for an individual release.

1. Select the release you want to modify.

2. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.
3. Set permissions, and then **Save** your changes.

::: moniker-end 

::: moniker range="< azure-devops-2020"

To set permissions at project-level for all release definitions in a project, open the shortcut menu from the ![drop-down list](media/drop-down-list-icon.png)

To set or override the permissions for a specific release pipeline, open the shortcut menu from the ![drop-down list](media/drop-down-list-icon.png) icon next to that pipeline name. Then choose **Security** to open the **Permissions** dialog.

To specify security settings for individual stages in a release pipeline, open the **Permissions** dialog by choosing **Security** on the shortcut menu that opens from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: on a stage in the release pipeline editor.

::: moniker-end 

### Release permissions reference

The following table defines permissions for releases. The scope column explains whether the permission can be set at the project, release pipeline, or stage level.

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description   |
> |------------------------------------| -----------------------------------|
> | **Administer release permissions** | Can change any of the other permissions listed here. <br /> *Scopes*: Project, Release pipeline, Stage  |
> | **Create releases**                | Can create new releases. <br /> *Scopes*: Project, Release pipeline  |
> | **Delete release pipeline**        | Can delete release pipeline(s). <br /> *Scopes*: Project, Release pipeline |
> | **Delete release stage**           | Can delete stage(s) in release pipeline(s). <br /> *Scopes*: Project, Release pipeline, Stage |
> | **Delete releases**                | Can delete releases for a pipeline. <br /> *Scopes*: Project, Release pipeline |
> | **Edit release pipeline**          | Can save any changes to a release pipeline, including configuration variables, triggers, artifacts, and retention policy as well as configuration within a stage of the release pipeline. To update a specific stage in a release pipeline, the user also needs **Edit release stage** permission. <br /> *Scopes*: Project, Release pipeline |
> | **Edit release stage**             | Can edit stage(s) in release pipeline(s). To save the changes to the release pipeline, the user also needs **Edit release pipeline** permission. This permission also controls whether a user can edit the configuration inside the stage of a specific release instance. The user also needs **Manage releases** permission to save the modified release. <br /> *Scopes*:  Project, Release pipeline, Stage|
> | **Manage deployments**             | Can initiate a deployment of a release to a stage. This permission is only for deployments that are manually initiated by selecting the **Deploy** or **Redeploy** actions in a release. If the condition on a stage is set to any type of automatic deployment, the system automatically initiates deployment without checking the permission of the user that created the release. If the condition is set to start after some stage, manually initiated deployments do not wait for those stages to be successful. <br /> *Scopes*: Project, Release pipeline, Stage |
> | **Manage release approvers**       | Can add or edit approvers for stage(s) in release pipeline(s). This permission also controls whether a user can edit the approvers inside the stage of a specific release instance. <br /> *Scopes*: Project, Release pipeline, Stage |
> | **Manage releases**                | Can edit the configuration in releases. To edit the configuration of a specific stage in a release instance (including variables marked as `settable at release time`), the user also needs **Edit release stage** permission. <br /> *Scopes*: Project, Release pipeline |
> | **View release pipeline**          | Can view release pipeline(s). <br /> *Scopes*: Project, Release pipeline|
> | **View releases**                  | Can view releases belonging to release pipeline(s). <br /> *Scopes*: Project, Release pipeline | 

Default values for all permissions are set for team project collections and project groups. For example, Project Collection Administrators, Project Administrators, and Release Administrators are given all the previously listed permissions by default. Contributors are given all permissions except *Administer release permissions*. By default, Readers
are denied all permissions except *View release pipeline* and *View releases*.

## Set task group permissions

Use [task groups](../library/task-groups.md) to combine a sequence of tasks already defined in a pipeline into a single, reusable task.

Task group permissions follow a hierarchical model. You can set default permissions at the project-level, and you can override these permissions on an individual task group pipeline.

::: moniker range=">=azure-devops-2020"
### Set project-level task group permissions

Do the following steps to update permissions for project-level task groups.

> [!NOTE]
> Task groups aren't supported in YAML pipelines, but templates are. For more information, see [YAML schema reference](/azure/devops/pipelines/yaml-schema/steps-template).

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Find task group menu item.":::

1. Select **Security**.

    :::image type="content" source="media/task-group-security-project.png" alt-text="Select the Security option for a task group.":::

1. Select **Allow** or **Deny** for the permission for a security group or an individual user. 

### Set pipeline-level task group permissions

Do the following steps to update permissions for pipeline-level task groups.

1. From your project, select **Pipelines** > **Task groups**. 

    :::image type="content" source="media/task-group-permissions.png" alt-text="Find task group menu item.":::

2.  Select a task group. 

3. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**. 

4. Select **Allow** or **Deny** for the permission for a security group or an individual user. 
::: moniker-end
### Task group permissions reference

> [!div class="mx-tdCol2BreakAll"]
> | Permission | Description | 
> |------------|-------------| 
> | **Administer task group permissions** | Can add and remove users or groups to task group security. |
> | **Delete task group** | Can delete a task group. | 
> | **Edit task group** | Can create, modify, or delete a task group. | 

## Set agent pool permissions

You can use predefined roles to configure [security on agent pools](../agents/pools-queues.md#security) in a hierarchical manner for all pools, or for an individual pool. Do the following steps to set agent pool permissions for all pools.

::: moniker range=">=azure-devops-2020"
### Set all agent pool permissions

Do the following steps to update permissions for all agent pools.

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: > **Agent pools**. 
2. Select **Security**. 

   :::image type="content" source="media/agent-pool-security.png" alt-text="Configure agent pool security."::: 

3. Set permissions, and then **Save** your changes.

### Set individual agent pool permissions

Do the following steps to set permissions for an individual agent pool.

1. From the agent pool, select the agent.
2. Select **Security**.

   :::image type="content" source="media/single-agent-pool-security.png" alt-text="Set security for one agent pool.":::
3. Set permissions, and then **Save** your changes.
::: moniker-end

## Set library permissions

Use a variable group to store values that you want to make available across multiple build and release pipelines. Define roles to help you configure security on shared [library entities](../library/index.md). You can also configure the inheritance of roles.

::: moniker range=">=azure-devops-2020"

Do the following steps to manage permissions for library artifacts, such as [variable groups](../library/variable-groups.md) and [secure files](../library/secure-files.md).

1. From your project, select **Pipelines** > **Library**.

   :::image type="content" source="media/pipeline-library-permissions.png" alt-text="Open the Library menu option.":::

2. Select **Security**.

   :::image type="content" source="media/pipelines-security-library.png" alt-text="Security option in Library.":::

3. Set permissions for everything in your library or for an individual variable group or secure file, and then **Save** your changes.

::: moniker-end

### Library permissions reference

[!INCLUDE [temp](../../organizations/security/includes/library-roles.md)]

## Set service connection permissions

Configure permissions for all [service connections](../library/service-endpoints.md) or for an individual connection.

::: moniker range=">=azure-devops-2020"

### Set all service connection permissions

Do the following steps to configure permissions for all service connections.

1. From within your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
2. Select **Service connections** under Pipelines.
3. Set permissions, and then **Save** your changes.

### Set individual service connection permissions

Do the following steps to configure permissions for an individual service connection.

1. From within your project, open a service connection.
2. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.
3. Set permissions, and then **Save** your changes.

   :::image type="content" source="media/security-option-service-connection.png" alt-text="Select security service connection option.":::

::: moniker-end
::: moniker range="< azure-devops-2020"

[Add users to the following roles](set-permissions.md) from the project-level admin context, **Services** page. For more information about how to create and manage these resources, see [Service connections for build and release](../library/service-endpoints.md).   

::: moniker-end
If you're having trouble with permissions and service connections, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).
### Service connection permissions reference

[!INCLUDE [temp](../../organizations/security/includes/service-endpoint-roles.md)]

## Set deployment pool permissions

You can set default security roles for all [deployment groups](../release/deployment-groups/index.md) and manage security roles for an [individual deployment group](#set-individual-deployment-group-permissions).

::: moniker range=">=azure-devops-2020"

### Set all deployment pool permissions

1. From within your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
2. Select **Deployment groups** under Pipelines.
3. Set permissions, and then **Save** your changes.

   :::image type="content" source="media/deployment-groups-permissions.png" alt-text="Select Security to manage default deployment group permissions.":::

### Set individual deployment group permissions

1. From within your project, open a deployment pool.
2. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.
3. Set permissions, and then **Save** your changes.

::: moniker-end

### Deployment pool permissions reference

[!INCLUDE [temp](../../organizations/security/includes/deployment-pool-roles.md)]

::: moniker range=">=azure-devops-2020"

## Set environment permissions 

You can use roles and user permissions to control who [can create, view, and manage environments](../process/environments.md#security). Apply a hierarchy of roles to all environments or one environment. 

### Set all environment permissions

1. From within your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false":::. 
2. Select **Environments** under Pipelines.
3. Set permissions, and then **Save** your changes.

   :::image type="content" source="media/environments-permissions.png" alt-text="Select Environments.":::

### Set individual environment permissions

Select **Security** from **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: to change permissions for all environment.

1. From within your project, open an environment.
2. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security**.
3. Set permissions, and then **Save** your changes.

### Environment permissions reference

> [!IMPORTANT]
> When you create an environment in a YAML, contributors and project administrators have the administrator role. When you create an environment through the UI, only the creator has the administrator role. 

[!INCLUDE [temp](../../organizations/security/includes/environment-roles.md)]

::: moniker-end

## FAQs

See the following frequently asked questions (FAQs) about pipeline permissions.
### Q: Why can't I create a new pipeline?

A: You need **Edit build pipeline** permissions to create a new pipeline. To add permission, open the security settings for all pipelines and verify that **Edit build pipeline** is set to _Allow_ for your security group. 

If you still can't create a pipeline, check to see if your [access level](../../organizations/security/access-levels.md) is set to **Stakeholder**. If you have stakeholder access, change your access to **Basic**. 

::: moniker range=">=azure-devops-2020"
### Q: Why do I see the message that I need to authorize a resource before the run can continue? 

A: You need to authorize resources before you can use them. The exception to this rule is when you create a pipeline for the first time and all the resources referenced in the YAML file are automatically authorized. The resources are authorized for the pipeline as long as the user running the pipeline has access to the resource. 

To authorize **All pipelines** to access a resource like an agent pool, do the following steps.

1. From your project, select **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: > **Pipelines** > **Agent Pools**. 

2. Select **Security** for a specific agent pool, and then update permissions to grant access to all pipelines. 

   :::image type="content" source="media/agent-pool-grant-permissions.png" alt-text="Grant permissions to all pipelines.":::

   For more information, see [Resources in YAML](../process/resources.md).
::: moniker-end

## Related articles

- [Set build and release permissions](set-permissions.md)
- [Default permissions and access](../../organizations/security/permissions-access.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)
- [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md)
