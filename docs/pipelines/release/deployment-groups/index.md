---
title: Use deployment groups in a release pipeline
ms.custom: seodec18, contperf-fy21q4
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

1. From within your project, select **Pipelines** > **Deployment groups**.

    :::image type="content" source="media/pipelines-deployment-groups.png" alt-text="Access deployment groups":::

1. Select **Add a deployment group**.

    :::image type="content" source="media/add-deployment-groups.png" alt-text="Add new deployment groups":::
 
1. Enter a **Deployment group name** and then select **Create**. A registration script will be generated. Select the **Type of target to register** and then select **Use a personal access token in the script for authentication**. Finally, select **Copy script to the clipboard**.

    :::image type="content" source="media/generated-script.png" alt-text="Create a deployment group - generated script":::

1. Log onto each of your target machines and run the script from an elevated PowerShell command prompt to register it as a target server. When prompted to enter tags for your agent, press *Y* and enter the tag(s) you will use to filter subsets of the servers.
 
    :::image type="content" source="media/register-servers.png" alt-text="Register deployment groups servers":::

After setting up your target servers, the script should return the following message: `Service vstsagent.{organization-name}.{computer-name} started successfully`.

The tags you assign to your target servers allow you to limit deployment to specific servers in a [Deployment group job](../../process/deployment-group-phases.md).
A tag is limited to 256 characters, but there is no limit to the number of tags you can use.

## Set up agents on deployment groups

Every target server in the deployment group requires a deployment agent. You can install an agent on your target servers in three different ways:

- By running the [generated script](#create-a-deployment-group) from the **Deployment Groups** tab.

- If the target servers are Azure VMs, you can easily set up your servers by [installing the Azure Pipelines Agent](./howto-provision-deployment-group-agents.md#install-the-azure-pipelines-agent-azure-vm-extension) extension on each of the VMs. 

- By using the [ARM template deployment task](./howto-provision-deployment-group-agents.md#use-the-arm-template-deployment-task) in your release pipeline to create a deployment group dynamically.

You can force the agents on the target servers to be upgraded to the latest version without needing to redeploy them by choosing the **Upgrade targets** command on the shortcut menu for a deployment group.  
 
## Monitor release status for deployment groups

When a release pipeline is executing, you can view the live logs for each target server in your deployment group. When the deployment is completed, you can download the log files for every server to examine the deployments and debug any issues.

:::image type="content" source="media/deployment-groups-release-summary.png" alt-text="Deployment groups release logs":::

## Share a deployment group with other projects

Deployment groups can be shared with other projects in the same organization. Follow the steps below to provision your deployment group for other projects: 

1. From within your project, select **Pipelines** > **Deployment groups**.

1. Select your deployment group and then select **Manage**.

    :::image type="content" source="media/manage-deployment-group.png" alt-text="Manage deployment groups":::

1. Select a project from the list and then select **Save**.

    :::image type="content" source="media/deployment-group-share-with-project.png" alt-text="Share a deployment group with a project":::

1. You will now notice that there is a new Deployment Group in the project you just included.

    :::image type="content" source="media/shared-deployment-group.png" alt-text="Shared new deployment group":::

## Automatically deploy to new target servers

When new target servers get added to a deployment group, you can configure the environment to automatically deploy the last successful release to the new targets. 

From your release pipeline definition, select the post deployment icon, and then enable the **Auto redeploy trigger**. Select the events and action as shown below.

:::image type="content" source="../media/deployment-group-add-targets.png" alt-text="Automatically deploy to new target servers":::

## Related articles

- [Deployment group jobs](../../process/deployment-group-phases.md)
- [Deploy to Azure VMs using deployment groups](./deploying-azure-vms-deployment-groups.md)
- [Provision agents for deployment groups](./howto-provision-deployment-group-agents.md)
- [Self-hosted Windows agents](../../agents/v2-windows.md)
- [Self-hosted macOS agents](../../agents/v2-osx.md)
- [Self-hosted Linux agents](../../agents/v2-linux.md)

