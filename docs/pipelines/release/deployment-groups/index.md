---
title: Use deployment groups in a release pipeline
ms.custom: seodec18
description: Work with deployment Groups in Azure Pipelines
ms.assetid: 21416B0A-F60F-436F-AB46-D6C2A54D5707
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 06/15/2021
monikerRange: '>= tfs-2018'
---

# Provision deployment groups

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018**

A deployment group is a logical set of deployment target machines that have agents installed on each one. Deployment groups represent the physical environments; for example, "Dev", "Test", or "Production" environment. In effect, a deployment group is just another grouping of agents, much like an agent pool.

Deployment groups are only available with Classic release pipelines and are different from deployment jobs. A deployment job is a collection of deployment-related steps defined in a YAML file to accomplish a specific task. 

With deployment groups you can:

* Specify the security context and runtime targets for the agents. As you create a deployment group, you add users and give them appropriate permissions to administer, manage, view, and use the group.

* Let you view live logs for each server as a deployment takes place, and download logs for all servers to track your deployments down to individual machines.

* Enable you to use machine tags to limit deployment to specific sets of target servers.

## Create a deployment group

A deployment group is a set of virtual machines with deployment agents. Every VM of the deployment group interacts with Azure Pipelines to coordinate the deployment tasks. 

1. From with your project, select **Pipelines** > **Deployment groups**.

    :::image type="content" source="media/pipelines-deployment-groups.png" alt-text="Access deployment groups":::

1. Select **Add a deployment group**

    :::image type="content" source="media/add-deployment-groups.png" alt-text="Add new deployment groups":::
 
1. Enter a **Deployment group name** and then select **Create**. A registration script will be generated. Select the **Type of target to register** and then select **Copy script to the clipboard**.

    :::image type="content" source="media/generated-script.png" alt-text="Create a deployment group - generated script":::

1. Run the script from an elevated Powershell command prompt to register your target servers.

    :::image type="content" source="media/register-servers.png" alt-text="Register deployment groups servers":::

## Deploy agents to a deployment group

Every target machine in the deployment group requires an installed build and release agent. You can do this using the script in the
**Deployment Groups** tab of **Azure Pipelines**. You can choose the
type of agent to suit the target operating system and platform; such as Windows
and Linux.

If the target machines are Azure VMs, you can quickly and easily prepare them 
by installing the **Azure Pipelines Agent** Azure VM extension on each of the VMs,
or by using the **Azure Resource Group Deployment** task in your release pipeline
to create a deployment group dynamically.

You can force the agents on the target machines to be upgraded to the latest version
without needing to redeploy them by choosing the **Upgrade targets** command on the shortcut
menu for a deployment group.  

For more information, see [Provision agents for deployment groups](howto-provision-deployment-group-agents.md).
 
## Monitor releases for deployment groups

When release is executing, you see an entry in the live logs page
for each server in the deployment group. After a release has completed,
you can download the log files for every server to examine the deployments
and resolve issues. To navigate quickly to a release pipeline or a release,
use the links in the **Releases** tab.

## Share a deployment group

Each deployment group is a member of a **deployment pool**, and you can share
the deployment pool and groups across projects if:

* The user sharing the deployment pool has [User permission](../../agents/pools-queues.md#security) for the pool containing the group.
* The user sharing the deployment pool has permission to create a deployment group in the project where it is shared.
* The project does not already contain a deployment group that is a member of the same deployment pool.

The tags you assign to each machine in the pool are scoped at project level,
so you can specify a different tag for the same machine in each deployment group. 

### Add a deployment pool and group to another project 

To manage a deployment pool, or to add an existing deployment pool and the groups it contains to another project,
choose the **Manage** link in the **Agent Pool** section of the **Deployment Group** page.

:::image type="content" source="media/manage-deployment-group.png" alt-text="To edit an existing deployment group select Manage.":::

In the **Deployment Pools** page, select the projects for which you
want the deployment group to be available, then save the changes.


When you navigate to the **Deployment Groups** page in the target project(s), you
will see the deployment group you added and you can assign project-specific machine tags as required.

### Create a new deployment pool

Add a new deployment pool, share it amongst your projects, and then add deployment groups to it.
In the **Deployment Pools** page, choose **+ New**. In the **New deployment pool** panel,
enter a name for the pool and then select the projects for which you want it to be available.

When you navigate to the **Deployment Groups** page in the target project(s), you
will see the deployment group you added and you can assign project-specific machine tags as required.

### Automatically deploy to new targets in a deployment group

When new targets get added to a deployment group, you can configure the environment to automatically deploy the last successful release to the new targets. 

:::image type="content" source="../media/deployment-group-add-targets.png" alt-text="Add deployment group targets.":::

## Related topics

* [Run on machine group job](../../process/deployment-group-phases.md)
* [Deploy an agent on Windows](../../agents/v2-windows.md)
* [Deploy an agent on macOS](../../agents/v2-osx.md)
* [Deploy an agent on Linux](../../agents/v2-linux.md)

[!INCLUDE [rm-help-support-shared](../../includes/rm-help-support-shared.md)]

