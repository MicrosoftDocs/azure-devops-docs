---
title: Use deployment groups in Classic release pipelines
description: Learn how to create and use deployment groups, which are logical groups of target machines for Classic release pipelines in Azure Pipelines.
ms.assetid: 21416B0A-F60F-436F-AB46-D6C2A54D5707
ms.topic: how-to
ms.author: ronai
author: RoopeshNair
ms.date: 08/27/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Use deployment groups in Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Similar to an [agent pool](../../agents/pools-queues.md), a deployment group is a logical set of target machines that each have a deployment agent installed. Deployment groups can represent environments such as "Development," "Test," or "Production." Every physical or virtual machine (VM) in the deployment group interacts with Azure Pipelines to coordinate the deployment tasks. Deployment groups are different from [deployment jobs](../../process/deployment-jobs.md), which are collections of task-related steps defined in YAML pipelines.

>[!NOTE]
>Deployment groups are available only for Classic release pipelines.

By using deployment groups, you can:

- Specify the security context and runtime targets for agents.
- Add users and give them appropriate permissions to administer, manage, view, and use the group.
- View live logs for each server while a deployment happens, and download logs to track deployments for individual servers.
- Use tags to limit deployments to specific sets of target servers.

## Prerequisites

- An Azure DevOps organization and project. To create an organization and project, see [Create a new organization](../../../organizations/accounts/create-organization.md) or [Create a project in Azure DevOps](../../../organizations/projects/create-project.md).
- Administrative access to at least one Windows or Linux physical or virtual machine to use as a deployment target.

## Create a deployment group

1. From your Azure DevOps project, select **Pipelines** > **Deployment groups**.

   :::image type="content" source="media/pipelines-deployment-groups.png" alt-text="A screenshot showing Deployment groups in the Pipelines menu.":::

1. On the **Deployment groups** screen, select **New**, or select **Add a deployment group** if this deployment group is the first one in the project.

   :::image type="content" source="media/add-deployment-groups.png" alt-text="A screenshot showing Add a deployment group.":::
 
1. Enter a **Deployment group name** and then select **Create**.

1. On the next screen, select **Windows** or **Linux** for the **Type of target to register**. A registration script is generated.

1. Select **Use a personal access token in the script for authentication**, and then select **Copy script to the clipboard**.

1. Save the copied script to run on all the target machines in your deployment group.

   :::image type="content" source="media/generated-script.png" alt-text="A screenshot showing the generated registration script and other settings.":::

## Register target servers

To register each target server in the deployment group:

1. Sign in to the machine with an administrative account and run the copied script. For Windows machines, use an elevated PowerShell command prompt.

   :::image type="content" source="media/register-servers.png" alt-text="A screenshot that shows registering deployment groups servers.":::

1. To assign tags that let you limit deployments to certain servers in a [deployment group job](../../process/deployment-group-phases.md), enter *Y* when prompted to enter tags, and then enter a tag or tags.

   Tags are limited to 256 characters each, are case insensitive, and there's no limit to the number of tags you can use.

After you set up a target server, the script should return the message `Service vstsagent.{organization-name}.{computer-name} started successfully`.

## Install and upgrade agents

Every target server in the deployment group requires a deployment agent. The generated registration script for target servers installs an agent. Alternatively, you can use the following methods to install agents:

- If the target servers are Azure VMs, you can easily set up your servers by [installing the Azure Pipelines agent extension](./howto-provision-deployment-group-agents.md#install-the-azure-pipelines-agent-azure-vm-extension) on each VM.

- You can use the [AzureResourceGroupDeploymentV2 task](./howto-provision-deployment-group-agents.md#use-the-azureresourcegroupdeploymentv2-task) in your release pipeline to create and register a deployment group dynamically.

For more information about these methods, see [Provision agents for deployment groups](howto-provision-deployment-group-agents.md).

To upgrade the agents on target servers to the latest version without having to redeploy them, select the **More actions** ellipsis next to the deployment group on the **Deployment groups** page and select **Update targets**. For more information, see [Azure Pipelines agents](../../agents/agents.md).

:::image type="content" source="media/update-targets-deployment-groups.png" alt-text="A screenshot showing how to update targets in deployment groups.":::

## Deployment pools

A deployment pool is a set of target servers that are available to the entire Azure DevOps organization. To create and update deployment pools, you need Project Collection Administrator permissions in the Azure DevOps organization.

When you create a new deployment pool for an organization, you can automatically provision corresponding deployment groups for selected projects or all projects in the organization. These deployment groups have the same target servers as the deployment pool.

You can manually trigger an agent version upgrade for all servers in the pool by selecting the **More actions** ellipsis next to the deployment pool in **Deployment pools** and selecting **Update targets**.

:::image type="content" source="media/update-targets-pools.png" alt-text="A screenshot showing how to update targets in deployment pools.":::

## Monitor release status

While a release pipeline is running, you can view the live logs for each target server in your deployment group. When the deployment finishes, you can download the log files for each server to examine the deployments and debug any issues.

:::image type="content" source="media/deployment-groups-release-summary.png" alt-text="A screenshot showing deployment groups release logs.":::

## Share a deployment group

You can share deployment groups with other projects in the organization. To provision your deployment group for other projects:

1. From your Azure DevOps project, select **Pipelines** > **Deployment groups**.

1. Select your deployment group and then select **Manage**.

   :::image type="content" source="media/manage-deployment-group.png" alt-text="A screenshot showing Manage in the deployment group.":::

1. Select projects from the list to share to, and then select **Save**.

   :::image type="content" source="media/deployment-group-share-with-project.png" alt-text="A screenshot showing sharing a deployment group with a project.":::

The included projects now have the shared deployment group listed in **Deployment groups**.

:::image type="content" source="media/shared-deployment-group.png" alt-text="A screenshot showing a shared new deployment group.":::

## Automatically deploy to new target servers

When new target servers are added to a deployment group, you can configure the environment to automatically deploy the last successful release to the new targets.

1. From your release pipeline definition, select the post deployment icon.
1. On the **Post-deployment conditions** screen, enable the **Auto redeploy trigger**.
1. Under **Select events**, select **New target with required tags becomes available**.
1. Under **Select action**, select **Redeploy the last successful deployment on this environment**.

   :::image type="content" source="../media/deployment-group-add-targets.png" alt-text="A screenshot showing the Auto redeploy trigger settings.":::

## Related articles

- [Deployment group jobs](../../process/deployment-group-phases.md)
- [Deploy to Azure VMs using deployment groups](./deploying-azure-vms-deployment-groups.md)
- [Provision agents for deployment groups](./howto-provision-deployment-group-agents.md)
