---
title: Deployment groups in Release Management
description: Deployment Groups for Microsoft Release Management on Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: 21416B0A-F60F-436F-AB46-D6C2A54D5707
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 09/26/2017
---

# Deployment groups

>**TFS:** At present, deployment groups are not available in Team Foundation Server.

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
to be installed. You an do this using the script that is generated in the
**Deployment Groups** tab of the **Build &amp; Release** hub. You can choose the
type of agent to suit the target operating system and platform; such as Windows
and Linux.

If the target machines are Azure VMs, you can quickly and easily prepare them by
by installing the **VSTS Agent** Azure VM extension on each of the VMs,
or by using the **Azure Resource Group Deployment** task in your release definition
to create a deployment group dynamically. 

For more information, see [Provision agents for deployment groups](howto-provision-deployment-group-agents.md).
 
## Monitor releases for deployment groups

When release is executing, you see an entry in the
[live logs page](../../../../actions/debug-deployment-issues.md)
for each server in the deployment group. After a release has completed,
you can download the log files for every server to examine the deployments
and resolve issues. To navigate quickly to a release definition or a release,
use the links in the **Releases** tab. 

## Related topics

* [Run on machine group phase](../../../process/phases.md#deployment-group-phase)
* [Deploy an agent on Windows](../../../../actions/agents/v2-windows.md)
* [Deploy an agent on OSX](../../../../actions/agents/v2-osx.md)
* [Deploy an agent on Linux](../../../../actions/agents/v2-linux.md)

[!INCLUDE [rm-help-support-shared](../../../../_shared/rm-help-support-shared.md)]

