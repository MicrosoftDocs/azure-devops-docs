---
title: Use deployment groups in Classic release pipelines
description: Learn how to create and use deployment groups in Classic release pipelines in Azure Pipelines.
ms.assetid: 21416B0A-F60F-436F-AB46-D6C2A54D5707
ms.topic: how-to
ms.author: ronai
author: RoopeshNair
ms.date: 05/22/2025
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Use deployment groups in Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Similar to an [agent pool](../../agents/pools-queues.md), a deployment group is a logical set of target machines, each have a deployment agent installed. Deployment groups typically represent environments such as *Development, *Test*, or *Production*. Each physical or virtual machine in the deployment group communicates with Azure Pipelines to coordinate deployment tasks. Deployment groups differ from [deployment jobs](../../process/deployment-jobs.md), which are collections of task-related steps defined in YAML pipelines.

Deployment groups give you a flexible way to manage and monitor your deployment targets. You can define the security context and runtime environment for agents, assign roles and permissions to team members, and get real-time visibility into deployments with live logs for each server. You can also use tags to target specific machines, making deployments more precise and efficient.

> [!NOTE]
> Deployment groups are only available in Classic release pipelines.

## Prerequisites

|     **Product**    |  **Requirements**  |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../../organizations/projects/create-project.md).<br> - Administrator permissions on a Windows or Linux machine to install and configure the deployment agent. |

## Create a deployment group

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. In your project, select **Pipelines**, then select **Deployment groups**.

1. On the **Deployment groups** page, select **New**. If this is your first deployment group, select **Add a deployment group**.
 
1. Enter a **Deployment group name** and then select **Create**.

1. On the next screen, select **Windows** or **Linux** for the **Type of target to register**. A registration script is generated.

1. Select **Use a personal access token in the script for authentication**, then select **Copy script to the clipboard**.

1. Save the copied script to run on all the target machines in your deployment group.

   :::image type="content" source="media/generated-script.png" alt-text="A screenshot displaying how to create a deployment group in Azure Pipelines.":::

## Register target servers

To register each target server in the deployment group:

1. Sign in to the machine using an account with administrator permissions, and run the copied script. For Windows machines, use an elevated PowerShell command prompt.

1. When prompted to add tags (can be used to target deployments to specific servers in a [deployment group job](../../process/deployment-group-phases.md)), enter Y, then provide one or more tags. Tags are case insensitive, limited to 256 characters each, and there's no limit to the number of tags you can use.

1. Once setup is complete, the script should return the following message:

    ```
    Service vstsagent.{organization-name}.{computer-name} started successfully.
    ```

## Install and upgrade agents

Every target server in the deployment group requires a deployment agent. The generated registration script for target servers installs an agent. Alternatively, you can install agents using one of the following methods:

- For Azure VMs, you can easily set up your servers by [installing the Azure Pipelines agent extension](./howto-provision-deployment-group-agents.md#install-the-azure-pipelines-agent-azure-vm-extension) on each VM.

- Use the [AzureResourceGroupDeploymentV2 task](./howto-provision-deployment-group-agents.md#use-the-azureresourcegroupdeploymentv2-task) in a release pipeline to dynamically create and register deployment group agents.

See [Provision agents for deployment groups](howto-provision-deployment-group-agents.md) for more details.

To upgrade deployment agents to the latest version without redeploying, go to the **Deployment groups** page, select the **More actions** ellipsis next to your deployment group, and choose **Update targets**. See [Agents](../../agents/agents.md) for more details.

:::image type="content" source="media/update-targets-deployment-groups.png" alt-text="A screenshot showing how to update targets in deployment groups.":::

## Deployment pools

A deployment pool is a collection of target servers available across your entire Azure DevOps organization. To create or manage deployment pools, you must have Project Collection Administrator permissions.

When you create a new deployment pool, you can automatically provision corresponding deployment groups in selected projects or across all projects in the organization. These deployment groups share the same target servers as the deployment pool.

To upgrade the agent version on all servers in a deployment pool, go to **Deployment pools**, select the **More actions** ellipsis next to the pool, and choose **Update targets**.

:::image type="content" source="media/update-targets-pools.png" alt-text="A screenshot displaying how to update targets in deployment pools.":::

## Share deployment groups

You can share deployment groups with other projects in your Azure DevOps organization. To make a deployment group available to other projects:

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Pipelines** > **Deployment groups**. Select your deployment group and then select **Manage**.

   :::image type="content" source="media/manage-deployment-group.png" alt-text="A screenshot displaying the details page of a deployment group.":::

1. In the list of projects, select the ones you want to share the deployment group with, and then select **Save**.
 
   :::image type="content" source="media/deployment-group-share-with-project.png" alt-text="A screenshot displaying how to share with other projects.":::

1. After saving,  the selected projects will see the shared deployment group listed under **Deployment groups**.

    :::image type="content" source="media/shared-deployment-group.png" alt-text="A screenshot showing a shared new deployment group.":::

## Automatically deploy to new target servers

You can configure your environment to automatically deploy the last successful release when new target servers are added to a deployment group:

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Pipelines** > **Releases**, then select your release pipeline.

1. Select the post deployment icon to open the **Post-deployment conditions** screen, and enable the **Auto redeploy trigger**.

1. Under **Select events**, select **New target with required tags becomes available**.

1. Under **Select action**, select **Redeploy the last successful deployment on this environment**.

   :::image type="content" source="../media/deployment-group-add-targets.png" alt-text="A screenshot displaying how to enable the Auto redeploy trigger.":::

## Related content

- [Release triggers](../triggers.md)

- [Manage permissions](../../policies/permissions.md)

- [Deploy to Azure VMs using deployment groups](deploying-azure-vms-deployment-groups.md)