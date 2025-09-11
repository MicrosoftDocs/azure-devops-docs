---
title: Create and Manage Agent Pools
ms.topic: conceptual
ms.custom: devx-track-azurecli
description: Learn how to organize agents into pools for builds and releases in Azure Pipelines and Azure DevOps Server.
ms.assetid: BD5478A8-48CF-4859-A0CB-6E1948CE2C89
ms.date: 08/30/2024
monikerRange: '<= azure-devops'
---

# Create and manage agent pools

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="= azure-devops"

An agent pool is a collection of agents. Instead of managing each [agent](agents.md) individually, you organize agents into agent pools. When you configure an agent, it's registered with a single pool. When you create a pipeline, you specify the pool in which the pipeline runs. When you run the pipeline, it runs on an agent from that pool that meets the [demands](/azure/devops/pipelines/yaml-schema/pool-demands) of the pipeline.

Managed DevOps Pools agent pools are managed in the Azure portal. If you're using Managed DevOps Pools, see the [quickstart for creating a pool](../../managed-devops-pools/quickstart-azure-portal.md).

::: moniker-end

::: moniker range="= azure-devops"

In Azure Pipelines, pools are scoped to the entire organization, so you can share agent machines across projects.

::: moniker-end

::: moniker range="<azure-devops"

In Azure DevOps Server, agent pools are scoped to the entire server, so you can share agent machines across projects and collections.

::: moniker-end

::: moniker range="<=azure-devops"

Agent pool jobs run a job on a single agent. If you need to run a job on all agents, like a deployment group for classic release pipelines, see [Provision deployment groups](../release/deployment-groups/index.md).

::: moniker-end

::: moniker range="<=azure-devops"

If you're an organization administrator, you create and manage agent pools from the **Agent pools** tab in admin settings.

::: moniker-end

[!INCLUDE [agent-pools-tab](includes/agent-pools-tab.md)]

::: moniker range="<=azure-devops"

If you're a project team member, you create and manage agent pools from the **Agent pools** tab in project settings.

::: moniker-end

[!INCLUDE [agent-queues-tab](includes/agent-queues-tab.md)]

## Default agent pools

The following agent pools are provided by default:

* **Default pool**: Use it to register [self-hosted agents](agents.md) that you set up.

::: moniker range="azure-devops"

* **Azure Pipelines**: This hosted pool comes with various Windows, Linux, and macOS images. For a complete list of the available images and their installed software, see [Microsoft-hosted agents](hosted.md#use-a-microsoft-hosted-agent).

By default, all contributors in a project are members of the **User** role on hosted pools. This designation allows every contributor in a project to author and run pipelines with Microsoft-hosted agents.

::: moniker-end

## Designate a pool in your pipeline

# [YAML](#tab/yaml)

:::moniker range="<=azure-devops"

To choose a Microsoft-hosted agent from the Azure Pipelines pool in your Azure DevOps Services YAML pipeline, specify the name of the image by using the **YAML VM Image Label** from [this table](hosted.md#use-a-microsoft-hosted-agent).

```yaml
pool:
  vmImage: ubuntu-latest # This is the default if you don't specify a pool or vmImage.
```

To use a private pool with no demands:

```yaml
pool: MyPool
```

For more information, see the [YAML schema](/azure/devops/pipelines/yaml-schema) for [pools](/azure/devops/pipelines/yaml-schema/pool).

:::moniker-end

# [Classic](#tab/classic)

To choose a pool and agent in the classic editor, go to the pipeline settings. Select the desired **Agent pool** value and the desired image from the **Agent Specification** dropdown menu. The default **Agent Specification** selection is **windows-2019**. For more information about the software installed on Microsoft-hosted images, see the corresponding entry in the **Classic Editor Pool** column from [this table](hosted.md#use-a-microsoft-hosted-agent).

:::image type="content" source="media/agent-pool-classic.png" alt-text="Screenshot that shows how to select an agent pool and the desired agent.":::

* * *

### Manage pools and queues

#### [Azure Pipelines UI](#tab/browser)

::: moniker range="<=azure-devops"
Organization administrators create and manage agent pools from the **Agent pools** tab in admin settings.
::: moniker-end

[!INCLUDE [agent-pools-tab](includes/agent-pools-tab.md)]

::: moniker range="<=azure-devops"
Project team members create and manage agent pools from the **Agent pools** tab in project settings.
::: moniker-end

[!INCLUDE [agent-queues-tab](includes/agent-queues-tab.md)]

To delete a pool, go to the **Agent pools** list, and then select **More options** > **Delete**.

:::image type="content" source="media/agent-pool-delete.png" alt-text="Screenshot that shows how to delete an agent pool.":::

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="azure-devops"

[List agent pools](#list-agent-pools) | [Show agent pool details](#show-agent-pool-details) | [List agent queues](#list-agent-queues) | [Show agent queue details](#show-agent-queue-details)

> [!NOTE]
> Users can view information about agent pools and queues, but not edit them, by using the Azure CLI.
>
> If this is your first time using `az devops pipelines` commands, see [Get started with the Azure DevOps CLI](../../cli/index.md).

### List agent pools

```azurecli
az pipelines pool list [--action {manage, none, use}]
                       [--detect {false, true}]
                       [--org]
                       [--pool-name]
                       [--pool-type {automation, deployment}]
```

#### Parameters

* `action`: Filter the list with user action permitted. Accepted values are `manage`, `none`, and `use`.
* `detect`: Automatically detect the organization. Accepted values are `false` and `true`.
* `org` or `organization`: Azure DevOps organization URL. You can configure the default organization by using `az devops configure -d organization=ORG_URL`. This process is required if it's not configured as default or picked up via git config. For example: `https://dev.azure.com/MyOrganizationName/`.
* `pool-name`: Filter the list with a matching pool name.
* `pool-type`: Filter the list with the type of pool. Accepted values are `automation` and `deployment`.

#### Example

The following example lists all the pools in table format. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`.

```azurecli
az pipelines pool list --output table

ID    Name                             Is hosted    Pool type
----  -------------------------------  -----------  -----------
1     Default                          False        automation
2     Hosted                           True         automation
3     Hosted VS2017                    True         automation
4     Hosted Windows 2019 with VS2019  True         automation
5     Hosted Windows Container         True         automation
6     Hosted macOS                     True         automation
7     Hosted macOS High Sierra         True         automation
8     Hosted Ubuntu 1604               True         automation
9     Azure Pipelines                  True         automation
10    MyAgentPool                      False        automation
```

### Show agent pool details

```azurecli
az pipelines pool show --id
                       [--action {manage, none, use}]
                       [--detect {false, true}]
                       [--org]
```

#### Parameters

* `id` or `pool-id`: (Required) ID of the pool to list the details.
* `action`: Filter the list with user action permitted. Accepted values are `manage`, `none`, and `use`.
* `detect`: Automatically detect the organization. Accepted values are `false` and `true`.
* `org` or `organization`: Azure DevOps organization URL. You can configure the default organization by using `az devops configure -d organization=ORG_URL`. This process is required if it's not configured as default or picked up via git config. For example: `https://dev.azure.com/MyOrganizationName/`.

#### Example

The following example displays pool details for the *Hosted Windows 2019 with VS2019* pool. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`.

```azurecli
az pipelines pool show --id 4

{
  "agentCloudId": 1,
  "autoProvision": true,
  "autoSize": null,

  <Some properties omitted for space>

  "poolType": "automation",
  "properties": null,
  "scope": "941fcaeb-be37-4309-b7b0-5cf156e1236e",
  "size": 1,
  "targetSize": 1
}
```

You can also use `--output table`, which returns the same information as the `list` command.

```azurecli
az pipelines pool show --id 4 --output table

ID    Name                             Is Hosted    Pool Type
----  -------------------------------  -----------  -----------
4     Hosted Windows 2019 with VS2019  True         automation
```

### List agent queues

```azurecli
az pipelines queue list [--action {manage, none, use}]
                        [--detect {false, true}]
                        [--org]
                        [--project]
                        [--queue-name]
```

#### Parameters

* `action`: Filter the list with user action permitted. Accepted values are `manage`, `none`, and `use`.
* `detect`: Automatically detect the organization. Accepted values are `false` and `true`.
* `org` or `organization`: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. This process is required if it's not configured as default or picked up via git config. For example: `https://dev.azure.com/MyOrganizationName/`.
* `project` or `p`: The name or ID of the project. You can configure the default project by using `az devops configure -d project=NAME_OR_ID`. This process is required if it's not configured as default or picked up via git config.
* `queue-name`: Filter the list with a matching queue name regex (for example, *ubuntu* for a queue named *Hosted Ubuntu 1604*).

#### Example

The following example lists all queues in table format. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`.

```azurecli
az pipelines queue list --output table
This command group is in preview. It might be changed/removed in a future release.
ID    Name                             Pool IsHosted    Pool Type
----  -------------------------------  ---------------  -----------
11    Default                          False            automation
12    Hosted                           True             automation
13    Hosted VS2017                    True             automation
14    Hosted Windows 2019 with VS2019  True             automation
15    Hosted Windows Container         True             automation
16    Hosted macOS                     True             automation
17    Hosted macOS High Sierra         True             automation
18    Hosted Ubuntu 1604               True             automation
19    Azure Pipelines                  True             automation
```

### Show agent queue details

```azurecli
az pipelines queue show --id
                        [--action {manage, none, use}]
                        [--detect {false, true}]
                        [--org]
                        [--project]
```

#### Parameters

* `id` or `queue-id`: ID of the agent queue to get information about.
* `action`: Filter the list with user action permitted. Accepted values are `manage`, `none`, and `use`.
* `detect`: Automatically detect the organization. Accepted values are `false` and `true`.
* `org` or `organization`: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. This process is required if it's not configured as default or picked up via git config. For example: `https://dev.azure.com/MyOrganizationName/`.
* `project` or `p`: Name or ID of the project. You can configure the default project by using `az devops configure -d project=NAME_OR_ID`. This process is required if it's not configured as default or picked up via git config.

#### Example

The following example displays queue details for the *Hosted Windows 2019 with VS2019* queue. It uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`.

```azurecli
az pipelines queue show --id 14

{
  "id": 14,
  "name": "Hosted Windows 2019 with VS2019",
  "pool": {
    "id": 4,
    "isHosted": true,
    "isLegacy": true,
    "name": "Hosted Windows 2019 with VS2019",
    "poolType": "automation",
    "scope": "941fcaeb-be37-4309-b7b0-5cf156e1236e",
    "size": 1
  },
  "projectId": "16836457-4ce1-4e77-b97a-e7e0c6508e84"
}
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * *

Pools are used to run jobs. Learn about [specifying pools for jobs](../process/phases.md).

If you have many self-hosted agents that are intended for different teams or purposes, you might want to create more pools. Use the following instructions.

## Create agent pools

Here are some typical situations when you might want to create self-hosted agent pools.

::: moniker range="azure-devops"

You're a member of a project and want to use a set of machines that your team owns to run build and deployment jobs:

1. Make sure that you have permissions to create pools in your project. In **Project settings**, go to the **Agent pools** pane and select **Security**. To create new pools, you must have the **Administrator** role.
1. Select **Add pool**, and then select the option to create a new pool.
1. [Install](agents.md#install) and configure agents to be part of the new agent pool.

You're a member of the infrastructure team and want to set up a pool of agents to use in all projects:

1. Make sure that you have permissions to create pools in your project. In **Organization settings**, go to the **Agent pools** pane and select **Security**.
1. Create a **New agent pool** and select the option **Auto-provision this agent pool in all projects** when you create the pool. This setting ensures that all projects have access to this agent pool.  
1. [Install](agents.md#install) and configure agents to be part of the new agent pool.

You want to share a set of agent machines with some, but not all, of your projects:

1. Go to **Settings** for one of the projects. Add an agent pool, and select the option to create a new pool at the organization level.
1. Go to the other projects and create a pool in each of them. Select **Use an existing agent pool from the organization**.
1. [Install](agents.md#install) and configure agents to be part of the shared agent pool.
::: moniker-end

::: moniker range="<azure-devops"

You're a member of a project and want to use a set of machines that your team owns to run build and deployment jobs:

1. Make sure you have permissions to create pools in your project. In **Project settings**, go to the **Agent pools** pane and select **Security**. To create new pools, you must have the **Administrator** role.
1. Select **Add pool**, and then select the option to create a new pool.
1. [Install](agents.md#install) and configure agents to be part of the new agent pool.

You're a member of the infrastructure team and want to set up a pool of agents to use in all projects:

1. Make sure you have the permissions to create pools in your project. In **Organization settings**, go to the **Agent pools** pane and select **Security**.
1. Create a **New agent pool** and select the option **Auto-provision this agent pool in all projects** when you create the pool. This setting ensures that all projects have access to this agent pool.
1. [Install](agents.md#install) and configure agents to be part of the new agent pool.

You want to share a set of agent machines with some, but not all, of your projects:

1. Go to **Settings** for one of the projects. Add an agent pool, and select the option to create a new pool at the organization level.
1. Go to the other projects and create a pool in each of them. Select **Use an existing agent pool from the organization**.
1. [Install](agents.md#install) and configure agents to be part of the shared agent pool.
::: moniker-end

<h2 id="security">Security of agent pools</h2>

When you understand how security works for agent pools, you can better control the sharing and use of agents.

*Roles* are defined on each agent pool. *Membership* in these roles governs what operations you can perform on an agent pool.

### Organization-level security settings

| Role on an agent pool in Organization Settings | Purpose |
|------|---------|
| **Reader** | Members of this role can view the agent pool and agents. You typically use this role to add operators that are responsible for monitoring the agents and their health.  |
| **Service Account** | Members of this role can use the organization agent pool to create a project agent pool in a project. If you follow the previous guidelines to create new project agent pools, you typically don't have to add any members here. |
| **Administrator** | In addition to all the above permissions, members of this role can register or unregister agents from the organization agent pool. They can also refer to the organization agent pool when they create a project agent pool in a project. They can also manage membership for all roles of the organization agent pool. A user who creates an organization agent pool is automatically assigned the **Administrator** role for that pool. |

The **All agent pools** node on the **Agent Pools** tab controls the security of *all* organization agent pools. Role memberships for individual organization agent pools are automatically inherited from the **All agent pools** node. By default, Azure DevOps Server administrators are also administrators of the **All agent pools** node when using Azure DevOps Server.

### Project-level security settings

Roles are also defined on each project agent pool. Membership in these roles govern what operations you can perform on an agent pool at the project level.

| Role on an agent pool in Project Settings | Purpose |
|------|---------|
| **Reader** | Members of this role can view the project agent pool. You typically use this role to add operators that monitor the build and deployment jobs in that project agent pool.  |
| **User** | Members of this role can use the project agent pool when they author pipelines. |
| **Administrator** | In addition to all the above operations, members of this role can manage membership for all roles of the project agent pool. A user who creates an organization agent pool is automatically assigned the **Administrator** role for that pool. |

::: moniker range="azure-devops"

#### Pipeline permissions

Pipeline permissions control which YAML pipelines are authorized to use an agent pool. Pipeline permissions don't restrict access from classic pipelines.

Choose from one of the following processes:

* Open access for all pipelines to use the agent pool from the more options at the upper-right corner of the **Pipeline permissions** section on the security tab of an agent pool.
* Lock down the agent pool and allow only selected YAML pipelines to use it. If any other YAML pipeline refers to the agent pool, an authorization request is raised, which an agent pool **Administrator** must approve. This process doesn't limit access from classic pipelines.

:::image type="content" source="media/agent-pools-pipeline-permissions.png" alt-text="Screenshot that shows the pipeline permissions user experience for an agent pool.":::

Pipeline permissions for the *Azure Pipelines* agent pool can't be configured, because the pool is accessible to all pipelines by default.

::: moniker-end

::: moniker range="azure-devops"

The **Security** action on the **Agent pools** tab controls the security of *all* project agent pools in a project. Role memberships for individual project agent pools are automatically inherited from what you define here. By default, the following groups are added to the **Administrator** role of **All agent pools**: **Build Administrators**, **Release Administrators**, and **Project Administrators**.

::: moniker-end

## FAQ

### If I don't schedule a maintenance window, when do the agents run maintenance?

If you don't schedule a window, the agents in that pool don't run the maintenance job.

### What is a maintenance job?

You can configure agent pools to periodically clean stale working directories and repositories. This process reduces the potential for agents to run out of disk space. Maintenance jobs are configured at the organization level in **Agent pool** settings.

Configure maintenance job settings:

[!INCLUDE [agent-pools-tab](includes/agent-pools-tab.md)]

Select the desired pool, and then select **Settings** to configure maintenance job settings for that agent pool.

> [!IMPORTANT]
> You must have the [Manage build queues](../../organizations/security/permissions-access.md) permission to configure maintenance job settings. If you don't see the **Settings** or **Maintenance History** tabs, you don't have that permission, which the **Administrator** role has by default. For more information, see [Security of agent pools](#security).

:::moniker range="<=azure-devops"

:::image type="content" source="media/maintenance-job-settings.png" alt-text="Screenshot that shows maintenance job settings.":::

:::moniker-end

Configure your desired settings, and then select **Save**.

Select **Maintenance History** to see the maintenance job history for the current agent pool. You can download and review logs to see the cleaning steps and actions taken.

:::moniker range="<=azure-devops"

:::image type="content" source="media/maintenance-job-history.png" alt-text="Screenshot that shows maintenance job history.":::

:::moniker-end

The maintenance is done per agent pool, not per machine. If you have multiple agent pools on a single machine, you might still run into disk space issues.

### The maintenance job of my self-hosted agent pool looks stuck. Why?

Typically, a maintenance job gets stuck when it's waiting to run on an agent that's no longer in the agent pool. For example, an agent was purposefully taken offline, or there are issues communicating with it.

Maintenance jobs that are queued to run wait seven days to run. If they aren't run during that time, they automatically are in a failed state. You can't change this time limit.

The seven-day limit is different from the *maintenance job timeout* setting. The latter controls the maximum number of minutes an agent can spend doing maintenance. The timer starts when the job starts, not when the job is queued on an agent.

### I'm trying to create a project agent pool that uses an existing organization agent pool, but the controls aren't available. Why?

In the **Create a project agent pool** dialog, you can't use an existing organization agent pool if another project agent pool already references it. Each organization agent pool can be referenced by only one project agent pool within a project collection.

::: moniker range="azure-devops"

### I can't select a Microsoft-hosted pool and I can't queue my build. How do I fix this problem?

Ask the owner of your Azure DevOps organization to grant you permission to use the pool. See [Security of agent pools](#security).

::: moniker-end

::: moniker range="azure-devops"

### I need more hosted build resources. What can I do?

The Azure Pipelines pool provides all Azure DevOps organizations with cloud-hosted build agents and free build minutes each month. If you need more Microsoft-hosted build resources, or you need to run more jobs in parallel, then you can either:

* [Host your own agents on infrastructure that you manage](agents.md)
* [Buy more parallel jobs](../../pipelines/licensing/concurrent-jobs.md#how-much-do-parallel-jobs-cost)

::: moniker-end
