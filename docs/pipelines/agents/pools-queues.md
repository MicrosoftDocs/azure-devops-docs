---
ms.prod: devops
title: Agents pools
ms.topic: conceptual
ms.custom: seodec18
description: Learn about organizing agents into pools for builds and releases in Azure Pipelines and Team Foundation Server
ms.technology: devops-cicd
ms.assetid: BD5478A8-48CF-4859-A0CB-6E1948CE2C89
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 09/20/2019
monikerRange: '>= tfs-2015'
---

# Agent pools

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

::: moniker-end

::: moniker range="<= tfs-2018"

Instead of managing each [agent](agents.md) individually, you organize agents into **agent pools**. In TFS, pools are scoped to the entire server; so you can share an agent pool across project collections and projects.

An **agent queue** provides access to an **agent pool** within a project. When you create a build or release pipeline, you specify which queue it uses. Queues are scoped to your project in TFS 2017 and newer, so you can only use them across build and release pipelines within a project.

To share an agent pool with multiple projects, in each of those projects, you create an agent queue pointing to the same agent pool. While multiple queues across projects can use the same agent pool, multiple queues within a project cannot use the agent pool. Also, each agent queue can use only one agent pool.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

![TFS 2017 and TFS 2018 build system architecture](_img/build-system-architecture.png)

::: moniker-end

::: moniker range="tfs-2015"

Agent pools are scoped to project collections.

![TFS 2015 build system architecture](_img/build-system-architecture-tfs-2015.png)

::: moniker-end

::: moniker range=">= azure-devops-2019"

Instead of managing each [agent](agents.md) individually, you organize agents into **agent pools**. In Azure Pipelines, pools are scoped to the entire organization; so you can share the agent machines across projects. In Azure DevOps Server, agent pools are scoped to the entire server; so you can share the agent machines across projects and collections.

When you create a pipeline, you specify which pool it uses.

::: moniker-end

::: moniker range="<= tfs-2018"
You create and manage agent pools from the agent pools tab in admin settings.
::: moniker-end

::: moniker range=">= azure-devops-2019"
If you are an organization administrator, you create and manage agent pools from the agent pools tab in admin settings.
::: moniker-end

[!INCLUDE [agent-pools-tab](_shared/agent-pools-tab.md)]

::: moniker range="<= tfs-2018"
You create and manage agent queues from the agent queues tab in project settings.
::: moniker-end

::: moniker range=">= azure-devops-2019"
If you are a project team member, you create and manage agent queues from the agent pools tab in project settings.
::: moniker-end

[!INCLUDE [agent-queues-tab](_shared/agent-queues-tab.md)]

## Default agent pools

The following agent pools are provided by default:

* **Default** pool: Use it to register [self-hosted agents](agents.md) that you've set up.

::: moniker range="azure-devops"

* **Azure Pipelines** hosted pool with the following images:

    * **Ubuntu 1604**: Enables you to build and release on Ubuntu 1604 machines without having to configure a self-hosted Linux agent. Agents in this pool do not run in a container, but the Docker tools are available for you to use if you want to run [container jobs](../process/container-phases.md).

    * **macOS**: Enables you to build and release on Mojave macOS without having to configure a self-hosted macOS agent. This option affects where your data is stored. [Learn more](https://www.microsoft.com/trustcenter/privacy/vsts-location)

    * **macOS High Sierra**: Enables you to build and release on High Sierra macOS without having to configure a self-hosted macOS agent. This option affects where your data is stored. [Learn more](https://www.microsoft.com/trustcenter/privacy/vsts-location)

    * **Windows 2019 with VS2019**: These machines have Visual Studio 2019 installed on Windows Server 2019 operating system. For a complete list of software installed on these machines, see [Microsoft-hosted agents](hosted.md#use-a-microsoft-hosted-agent).

    * **VS2017**: These machines have Visual Studio 2017 installed on Windows Server 2016 operating system. For a complete list of software installed on these machines, see [Microsoft-hosted agents](hosted.md#use-a-microsoft-hosted-agent).

    * **Hosted**: These machines have older versions of Visual Studio installed on Windows Server 2012 R2 operating system. For a complete list of software installed on Microsoft-hosted agents, see [Microsoft-hosted agents](hosted.md#use-a-microsoft-hosted-agent).

    * **Windows Container**: Enables you to run jobs inside [Windows containers](/virtualization/windowscontainers/about/). Unless you're building using containers, Windows builds should run using the **Hosted Windows 2019**, **Hosted VS2017** or **Hosted** images.

For more information about the Azure Pipelines hosted images and their installed software, see [Microsoft-hosted agents](hosted.md#use-a-microsoft-hosted-agent).

By default, all contributors in a project are members of the **User** role on hosted pools. This allows every contributor in a project to author and run pipelines using Microsoft-hosted agents.

> [!NOTE]
> The Azure Pipelines hosted pool replaces the previous hosted pools that had names that mapped to the corresponding images. Any jobs you had in the previous hosted pools are automatically redirected to the correct image in the new Azure Pipelines hosted pool. In some circumstances, you may still see the old pool names, but behind the scenes the hosted jobs are run using the Azure Pipelines pool. For more information, see the [Single hosted pool](/azure/devops/release-notes/2019/sprint-154-update#single-hosted-pool) release notes from the [July 1 2019 - Sprint 154 release notes](/azure/devops/release-notes/2019/sprint-154-update).

### Choosing a pool and agent in your pipeline

# [YAML](#tab/yaml)

To choose a Microsoft-hosted agent from the Azure Pipelines pool in your YAML pipeline, specify the name of the image, using the **YAML VM Image Label** from [this](hosted.md#use-a-microsoft-hosted-agent) table.

```yaml
pool:
  vmImage: ubuntu-16.04
```

To use a private pool with no demands:

```yaml
pool: MyPool
```

For more information, see the [YAML schema](../yaml-schema.md) for [pools](../yaml-schema.md#pool).

# [Classic](#tab/classic)

To choose a pool and agent in the classic editor, navigate to the pipeline settings, select the desired **Agent pool**, and then the desired image from the **Agent Specification** drop-down, using the **Classic Editor Pool** from [this](hosted.md#use-a-microsoft-hosted-agent) table.

![Select Agent pool and choose the desired agent](_img/agent-pool-classic.png)

* * *


::: moniker-end

Pools are used to run jobs. Learn about [specifying pools for jobs](../process/phases.md).

If you've got a lot of self-hosted agents intended for different teams or purposes, you might want to create additional pools as explained below.

## Creating agent pools

Here are some typical situations when you might want to create self-hosted agent pools:

::: moniker range="azure-devops"
* You're a member of a project and you want to use a set of machines owned by your team for running build and deployment jobs. First, make sure you've the permissions to create pools in your project by selecting **Security** on the agent pools page in your project settings. You must have **Administrator** role to be able to create new pools. Next, select **Add pool** and select the option to create a **new** pool at the organization level. Finally [install](agents.md#install) and configure agents to be part of that agent pool.

* You're a member of the infrastructure team and would like to set up a pool of agents for use in all projects. First make sure you're a member of a group in **All agent pools** with the **Administrator** role by navigating to agent pools page in your organization settings. Next create a **New agent pool** and select the option to **Auto-provision corresponding agent pools in all projects** while creating the pool. This setting ensures all projects have access to this agent pool. Finally [install](agents.md#install) and configure agents to be part of that agent pool.

* You want to share a set of agent machines with multiple projects, but not all of them. First, navigate to the settings for one of the projects, add an agent pool, and select the option to create a **new** pool at the organization level. Next, go to each of the other projects, and create a pool in each of them while selecting the option to **Use an existing agent pool from the organization**. Finally, [install](agents.md#install) and configure agents to be part of the shared agent pool.
::: moniker-end

::: moniker range="<= azure-devops-2019"
* You're a member of a project and you want to use a set of machines owned by your team for running build and deployment jobs. First, make sure you're a member of a group in **All Pools** with the **Administrator** role. Next create a **New project agent pool** in your project settings and select the option to **Create a new organization agent pool**. As a result, both an organization and project-level agent pool will be created. Finally [install](agents.md#install) and configure agents to be part of that agent pool.

* You're a member of the infrastructure team and would like to set up a pool of agents for use in all projects. First make sure you're a member of a group in **All Pools** with the **Administrator** role. Next create a **New organization agent pool** in your admin settings and select the option to **Auto-provision corresponding project agent pools in all projects** while creating the pool. This setting ensures all projects have a pool pointing to the organization agent pool. The system creates a pool for existing projects, and in the future it will do so whenever a new project is created. Finally [install](agents.md#install) and configure agents to be part of that agent pool.

* You want to share a set of agent machines with multiple projects, but not all of them. First create a project agent pool in one of the projects and select the option to **Create a new organization agent pool** while creating that pool. Next, go to each of the other projects, and create a pool in each of them while selecting the option to **Use an existing organization agent pool**. Finally, [install](agents.md#install) and configure agents to be part of the shared agent pool.
::: moniker-end

<h2 id="security">Security of agent pools</h2>

Understanding how security works for agent pools helps you control sharing and use of agents.

::: moniker range=">= tfs-2017"

**Roles** are defined on each agent pool, and **membership** in these roles governs what operations you can perform on an agent pool.

| Role on an agent pool in organization settings | Purpose |
|------|---------|
| Reader | Members of this role can view the agent pool as well as agents. You typically use this to add operators that are responsible for monitoring the agents and their health.  |
| Service Account | Members of this role can use the organization agent pool to create a project agent pool in a project. If you follow the guidelines above for creating new project agent pools, you typically do not have to add any members here. |
| Administrator | In addition to all the above permissions, members of this role can register or unregister agents from the organization agent pool. They can also refer to the organization agent pool when creating a project agent pool in a project. Finally, they can also manage membership for all roles of the organization agent pool. The user that created the organization agent pool is automatically added to the Administrator role for that pool. |

The **All agent pools** node in the Agent Pools tab is used to control the security of _all_ organization agent pools. Role memberships for individual organization agent pools are automatically inherited from those of the 'All agent pools' node. By default, TFS administrators are also administrators of the 'All agent pools' node.

Roles are also defined on each project agent pool, and memberships in these roles govern what operations you can perform on an agent pool at the project level.

| Role on a agent pool in project settings | Purpose |
|------|---------|
| Reader | Members of this role can view the project agent pool. You typically use this to add operators that are responsible for monitoring the build and deployment jobs in that project agent pool.  |
| User | Members of this role can use the project agent pool when authoring pipelines. |
| Administrator | In addition to all the above operations, members of this role can manage membership for all roles of the project agent pool. The user that created the pool is automatically added to the Administrator role for that pool.

::: moniker-end

::: moniker range="<= azure-devops-2019"

The **All agent pools** node in the Agent pools tab is used to control the security of _all_ project agent pools in a project. Role memberships for individual project agent pools are automatically inherited from those of the 'All agent pools' node. By default, the following groups are added to the Administrator role of 'All agent pools': Build Administrators, Release Administrators, Project Administrators.

::: moniker-end

::: moniker range="azure-devops"

The **Security** action in the Agent pools tab is used to control the security of _all_ project agent pools in a project. Role memberships for individual project agent pools are automatically inherited from what you define here. By default, the following groups are added to the Administrator role of 'All agent pools': Build Administrators, Release Administrators, Project Administrators.

::: moniker-end

::: moniker range="tfs-2015"

<h3 id="security-tfs2015">TFS 2015</h3>

In TFS 2015, special **groups** are defined on agent pools, and membership in these groups governs what operations you can perform.

Members of **Agent Pool Administrators** can register new agents in the pool and add additional users as administrators or service accounts.

Add people to the Agent Pool Administrators group to grant them permission manage all the agent pools. This enables people to create new pools and modify all existing pools. Members of Team Foundation Administrators group can also perform all these operations.

Users in the **Agent Pool Service Accounts** group have permission to listen to the message queue for the specific pool to receive work.  In most cases you should not have to manage members of this group. The agent registration process takes care of it for you. The service account you specify for the agent (commonly Network Service) is automatically added when you register the agent.

::: moniker-end

## Q & A

### If I don't schedule a maintenance window, when will the agents run maintenance?

If no window is scheduled, then the agents in that pool will not run the maintenance job.

### I'm trying to create a project agent pool that uses an existing organization agent pool, but the controls are grayed out. Why?

On the 'Create a project agent pool' dialog box, you can't use an existing organization agent pool if it is already referenced by another project agent pool. Each organization agent pool can be referenced by only one project agent pool within a given project collection.

::: moniker range="azure-devops"

### I can't select a Microsoft-hosted pool and I can't queue my build. How do I fix this?

Ask the owner of your Azure DevOps organization to grant you permission to use the pool. See [Security of agent pools](#security).

::: moniker-end

::: moniker range="azure-devops"

### I need more hosted build resources. What can I do?

A: The Azure Pipelines pool provides all Azure DevOps organizations with cloud-hosted build agents and free build minutes each month. If you need more Microsoft-hosted build resources, or need to run more jobs in parallel, then you can either:

* [Host your own agents on infrastructure that you manage](agents.md).
* [Buy additional parallel jobs](../../organizations/billing/buy-more-build-vs.md#buy-build-release).

::: moniker-end
