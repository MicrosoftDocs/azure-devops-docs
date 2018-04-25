---
title: Deployment groups in Release Management
description: Deployment Groups for Microsoft Release Management on Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: 21416B0A-F60F-436F-AB46-D6C2A54D5707
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2018'
---

# Deployment groups

**VSTS | TFS 2018**

A deployment group is a logical set of deployment target machines 
that have agents installed on each one. Deployment groups represent the physical environments;
for example, "Dev", "Test", "UAT", and "Production". In effect, a
deployment group is just another grouping of agents, much like an
[agent pool](../../../agents/pools-queues.md).

When authoring a VSTS or TFS Release definition, you
can specify the deployment targets for a [phase](../../../process/phases.md)
using a deployment group. This makes it easy to define
[parallel execution](../../../process/phases.md#parallelexec)
of deployment tasks.

Deployment groups:

* Specify the security context and runtime
  targets for the agents. As you create a deployment group, you
  add users and give them appropriate permissions to administer,
  manage, view, and use the group.

* Let you view live logs for each server as a
  deployment takes place, and download logs for all servers to
  track your deployments down to individual machines.

* Enable you to use machine tags to limit deployment to specific
  sets of target servers.

## Create a deployment group

You define groups on the **Deployment Groups** tab of the **Build &amp; Release**
hub, and install the agent on each server in the group. After you prepare your
target servers, they appear in the **Deployment Groups** tab. The list indicates if a
server is available, the tags you assigned to each server, and the latest
deployment to each server.

The tags you assign allow you to limit deployment to specific servers when 
the deployment group is used in a [Deployment group phase](../../../process/phases.md#deployment-group-phase).
You manage the security for a deployment group by
[assigning security roles](../../../agents/pools-queues.md#security).

## Deploy agents to a deployment group

Every target machine in the deployment group requires the build and release agent
to be installed. You can do this using the script that is generated in the
**Deployment Groups** tab of the **Build &amp; Release** hub. You can choose the
type of agent to suit the target operating system and platform; such as Windows
and Linux.

If the target machines are Azure VMs, you can quickly and easily prepare them by
by installing the **VSTS Agent** Azure VM extension on each of the VMs,
or by using the **Azure Resource Group Deployment** task in your release definition
to create a deployment group dynamically. 

For more information, see [Provision agents for deployment groups](howto-provision-deployment-group-agents.md).
 
## Monitor releases for deployment groups

When release is executing, you see an entry in the live logs page
for each server in the deployment group. After a release has completed,
you can download the log files for every server to examine the deployments
and resolve issues. To navigate quickly to a release definition or a release,
use the links in the **Releases** tab. 

## Share a deployment group

Each deployment group is a member of a **deployment pool**, and you can share
the deployment pool and groups across projects provided that:

* The user sharing the deployment pool has [User permission](../../../agents/pools-queues.md#security) for the pool containing the group.
* The user sharing the deployment pool has permission to create a deployment group in the project where it is being shared.
* The project does not already contain a deployment group that is a member of the same deployment pool.

The tags you assign to each machine in the pool are scoped at project level,
so you can specify a different tag for the same machine in each deployment group.

### Add a deployment pool and group to another project 

To manage a deployment pool, or to add an existing deployment pool and the groups it contains to another project,
choose the **Manage** link in the **Agent Pool** section of the **Deployment Group** page.
In the **Deployment Pools** page, select the projects for which you
want the deployment group to be available, then save the changes.

When you navigate to the **Deployment Groups** page in the target project(s), you
will see the deployment group you added and you can assign project-specific machine tags as required.

### Create a new deployment pool

You can add a new deployment pool to an account, share it amongst your projects, and then add deployment groups to it.
In the **Deployment Pools** page, choose **+ New**. In the **New deployment pool** panel,
enter a name for the pool and then select the projects for which you want it to be available.

When you navigate to the **Deployment Groups** page in the target project(s), you
will see the deployment group you added and you can assign project-specific machine tags as required.

## Related topics

* [Run on machine group phase](../../../process/phases.md#deployment-group-phase)
* [Deploy an agent on Windows](../../../../actions/agents/v2-windows.md)
* [Deploy an agent on macOS](../../../../actions/agents/v2-osx.md)
* [Deploy an agent on Linux](../../../../actions/agents/v2-linux.md)

[!INCLUDE [rm-help-support-shared](../../../../_shared/rm-help-support-shared.md)]

