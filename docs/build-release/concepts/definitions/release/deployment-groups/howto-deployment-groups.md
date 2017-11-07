---
title: How to use deployment groups in Release Management
description: Using deployment groups with Release Management on Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: 6A1A1429-47B7-4039-AAB6-1F325ADD4696
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 09/26/2017
---

# How to: Use deployment groups

**VSTS | TFS 2018**

## View and manage deployment groups

You can view and manage groups on the **Deployment Groups** tab of the **Build &amp; Release** hub.

![Overview of all deployment groups](_img/howto-deployment-groups/depgroups-ui-01.png)


## Create a deployment group

When you create a new deployment group, you specify the name and description.
The **Details** page generates a script that you must execute on each of your target servers
to install and prepare the agent.

![Creating a deployment group](_img/howto-deployment-groups/depgroup-create.png)

## Manage machines in a deployment group

After you prepare your target servers, select and open the deployment group.
The servers appear in the **Summary** tab, along with a list of tags and the agent version installed.
The **Deployments** and **Capabilities** tabs provide more information about individual servers in the list. 

![Overview of a deployment group](_img/howto-deployment-groups/depgroups-ui-02.png)


Manage the security for a deployment group by assigning security roles.
 
![Security for a deployment group](_img/howto-deployment-groups/depgroup-04.png)

## Related topics

* [Run on machine group phase](../../../process/phases.md#deployment-group-phase)
* [View and manage releases](../../../../actions/view-manage-releases.md)
* [Monitor releases and debug deployment issues](../../../../actions/debug-deployment-issues.md)

[!INCLUDE [rm-help-support-shared](../../../../_shared/rm-help-support-shared.md)]

