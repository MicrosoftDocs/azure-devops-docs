---
ms.prod: devops
title: Agents, pools, and queues | VSTS or Team Foundation Server
ms.topic: conceptual
description: Learn about organizing agents into agent pools and queues for build and release management in VSTS and Team Foundation Server
ms.technology: devops-cicd
ms.assetid: BD5478A8-48CF-4859-A0CB-6E1948CE2C89
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 04/18/2018
monikerRange: '>= tfs-2015'
---


# Agent pools and queues

**VSTS | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/dd793166%28v=vs.120%29.aspx)**

Instead of managing each [agent](agents.md) individually, you organize agents into **agent pools**. An agent pool defines the sharing boundary for all agents in that pool. In TFS, pools are scoped across all of your Team Foundation Server (TFS); so you can share an agent pool across team project collections and team projects. In VSTS, agent pools are scoped to the VSTS account; so you can share an agent pool across team projects.

An **agent queue** provides access to an agent pool. When you create a build or release definition, you specify which queue it uses. Queues are scoped to your team project in TFS 2017 and newer and in VSTS, so you can only use them across build and release definitions within a team project.

To share an agent pool with multiple team projects, you create an agent queue pointing to that pool in each of those team projects. While multiple queues across team projects can use the same agent pool, multiple queues within a team project cannot use the same pool. Also, each queue can use only one agent pool.

::: moniker range=">= tfs-2017"

#### VSTS and TFS 2017 and newer

![TFS 2017 and newer build system architecture](_img/build-system-architecture.png)

::: moniker-end

::: moniker range="tfs-2015"

#### TFS 2015

In TFS 2015 agent queues are scoped to team project collections.

![TFS 2015 build system architecture](_img/build-system-architecture-tfs-2015.png)

You create and manage pools from the Agent pools tab.

[!INCLUDE [agent-pools](_shared/agent-pools-tab.md)]

You create and manage your queues from the Agent queues tab.

[!INCLUDE [agent-pools](_shared/agent-queues-tab.md)]

::: moniker-end

## Default agent pools

We provide the following agent pools by default:

* **Default** pool: Use it to register [self-hosted agents](agents.md) that you've set up.

::: moniker range="vsts"

* **Hosted** pool (VSTS only): Contains at least one free Microsoft-hosted agent, and also any [Microsoft-hosted agents you've purchased](../licensing/concurrent-pipelines-tfs.md). The **Hosted** pool is the built-in pool that is a collection of Microsoft-hosted agents. Machines in this pool have Visual Studio 2010, Visual Studio 2012, Visual Studio 2013, and Visual Studio 2015 installed on Windows Server 2012 R2 operating system. For a complete list of software installed on Microsoft-hosted agents, see [Microsoft-hosted agents](hosted.md).

* **Hosted VS2017** pool (VSTS only): The **Hosted VS2017** pool is another built-in pool in VSTS. Machines in this pool have Visual Studio 2017 installed on Windows Server 2016 operating system. For a complete list of software installed on these machines, see [Microsoft-hosted agents](hosted.md).

* **Hosted Linux** pool (VSTS only): Enables you to build and release on
  Linux machines without having to configure a self-hosted agent. The agents
  in this pool run on an Ubuntu Linux host inside the
  [**vsts-agent-docker** container](https://github.com/Microsoft/vsts-agent-docker).

* **Hosted macOS** pool (VSTS only): Enables you to build and release on
  Mac machines without having to configure a self-hosted agent. This option affects where your data is stored. [Learn more](https://www.microsoft.com/en-us/trustcenter/privacy/vsts-location)

Each of these hosted pools is exposed to each team project through a corresponding hosted queue. By default, all contributors in a team project are members of the **User** role on each hosted queue. This allows every contributor in a team project to author and run build and release definitions using hosted queues.

::: moniker-end

If you've got a lot of agents intended for different teams or purposes, you might want to create additional pools as explained below.

## Creating agent pools and queues

Here are some typical situations when you might want to create agent pools and queues:

* You're a member of a team project and you want to use a set of machines owned by your team for running build and deployment jobs. First make sure you're a member of a group in **All Queues** with the **Administrator** role. Next create a **New queue** in your team project and select the option to **Create a new pool**. As a result, both a queue and a pool will be created. Finally [install](agents.md#install) and configure agents to be part of that agent pool.

* You're  a member of the infrastructure team and would like to set up a pool of agents for use in all team projects. First make sure you're a member of a group in **All Pools** with the **Administrator** role. Next create a **New pool** and select the option to **Auto-provision queues in all projects** while creating the pool. This setting ensures all team projects have a queue to access the pool. The system creates a queue for existing projects, and in the future it will do so whenever a new project is created. Finally [install](agents.md#install) and configure agents to be part of that agent pool.

* You want to share a set of agent machines with multiple team projects, but not all of them. First create an agent queue in one of the projects and select the option to **Create a new pool** while creating that queue. Next, go to each of the other team projects, and create a queue in each of them while selecting the option to **Use an existing pool**. Finally, [install](agents.md#install) and configure agents to be part of the shared agent pool.

<h2 id="security">Security of agent pools and queues</h2>

Understanding how security works for agent pools and queues helps you control sharing and use of agents.

::: moniker range=">= tfs-2017"

### VSTS and TFS 2017 and newer

In VSTS and TFS 2017 and newer, **roles** are defined on each agent pool, and **membership** in these roles governs what operations you can perform on an agent pool.

| Role on an agent pool | Purpose |
|------|---------|
| Reader | Members of this role can view the pool as well as agents. You typically use this to add operators that are responsible for monitoring the agents and their health.  |
| Service Account | Members of this role can use the pool to create an agent queue in a team project. If you follow the guidelines above for creating new pools and queues, you typically do not have to add any members here. |
| Administrator | In addition to all the above permissions, members of this role can register or unregister agents from the pool. They can also use the agent pool when creating an agent queue in a team project. Finally, they can also manage membership for all roles of the pool. The user that created the pool is automatically added to the Administrator role for that pool. |

The **All Pools** node in the Agent Pools tab is used to control the security of _all_ agent pools. Role memberships for individual agent pools are automatically inherited from those of the 'All Pools' node. By default, TFS administrators are also administrators of the 'All Pools' node.

Roles are also defined on each agent queue, and memberships in these roles govern what operations you can perform on an agent queue.

| Role on an agent queue | Purpose |
|------|---------|
| Reader | Members of this role can view the queue. You typically use this to add operators that are responsible for monitoring the build and deployment jobs in that queue.  |
| User | Members of this role can use the queue when authoring build or release definitions. |
| Administrator | In addition to all the above operations, members of this role can manage membership for all roles of the queue. User that created the queue is automatically added to the Administrator role for that queue.

The **All Queues** node in the Agent Queues tab is used to control the security of _all_ agent queues in a team project. Role memberships for individual agent queues are automatically inherited from those of the 'All Queues' node. By default, the following groups are added to the Administrator role of 'All Queues': Build Administrators, Release Administrators, Project Administrators.

::: moniker-end

::: moniker range="tfs-2015"

<h3 id="security-tfs2015">TFS 2015</h3>

In TFS 2015, special **groups** are defined on agent pools, and membership in these groups governs what operations you can perform.

Members of **Agent Pool Administrators** can register new agents in the pool and add additional users as administrators or service accounts.

Add people to the account-level Agent Pool Administrators group to grant them permission manage all the agent pools. This enables people to create new pools and modify all existing pools. Members of Team Foundation Administrators group can also perform all these operations.

Users in the **Agent Pool Service Accounts** group have permission to listen to the message queue for the specific pool to receive work.  In most cases you should not have to manage members of this group. The agent registration process takes care of it for you. The service account you specify for the agent (commonly Network Service) is automatically added when you register the agent.

::: moniker-end

## Q&A

### I'm trying to create a queue that uses an existing pool, but the controls are grayed out. Why?

On the Create Queue dialog box, you can't use an existing pool if it is already referenced by another queue. Each pool can be referenced by only one queue within a given team project collection.

::: moniker range="vsts"

### I can't select the Hosted queue and I can't queue my build. How do I fix this?

Ask the owner of your VSTS account to grant you permission to use the queue. See [Security of agent pools and queues](#security).

::: moniker-end

::: moniker range="vsts"

### I need more hosted build resources. What can I do?

A: The hosted pool provides all VSTS accounts with a single hosted build agent and a limited number of free build minutes each month. If you need more hosted build resources, or need to run more than one build concurrently, then you can either:

* [Deploy your own on-premises build agents](agents.md).
* [Buy additional hosted pipelines](../../billing/buy-more-build-vs.md#buy-build-release).

::: moniker-end
