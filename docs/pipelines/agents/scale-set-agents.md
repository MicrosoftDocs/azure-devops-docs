---
title: Azure virtual machine scale set agents
description: Use Azure virtual machine scale sets to create agents
ms.topic: reference
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 04/03/2020
monikerRange: azure-devops
---

# Azure virtual machine scale set agents

[!INCLUDE [include](../includes/version-team-services.md)]

>[!NOTE]
>This feature is currently in private preview. It will soon be available in public preview.

Azure virtual machine scale set agents, hereafter referred to as scale set agents, are a form of self-hosted agents that can be auto-scaled to meet your demands. This elasticity reduces your need to run dedicated agents all the time. Unlike Microsoft-hosted agents, you have flexibility over the size and the image of machines on which agents run. 

If you like Microsoft-hosted agents but are limited by what they offer, you should consider scale set agents. Here are some examples:

- You need more memory, more processor, more storage, or more IO than what we offer in native Microsoft-hosted agents.
- You need NCv2 VM with particular instruction sets for machine learning.
- You need to deploy to a private Azure App Service in a private VNET with no inbound connectivity.
- You need to open corporate firewall to specific IP addresses so that Microsoft-hosted agents can communicate with your servers.
- You need to restrict network connectivity of agent machines and allow them to reach only approved sites.
- You can't get enough agents from Microsoft to meet your needs.
- Your jobs exceed the Microsoft-hosted agent timeout.
- You can't partition Microsoft-hosted parallel jobs to individual projects or teams in your organization.
- You want to run several consecutive jobs on an agent to take advantage of incremental source and machine-level package caches.
- You want to run additional configuration or cache warmup before an agent begins accepting jobs.

If you like self-hosted agents but wish that you could simplify managing them, you should consider scale set agents. Here are some examples:

- You don't want to run dedicated agents around the clock. You want to de-provision agent machines that are not being used to run jobs.
- You run untrusted code in your pipeline and want to re-image agent machines after each job.
- You want to simplify periodically updating the base image for your agents.

> [!NOTE]
> You cannot run Mac agents using scale sets. You can only run Windows or Linux agents this way.


## Create a virtual machine scale set agent pool

Use [Azure portal](/azure/virtual-machine-scale-sets/quick-create-portal), [Azure CLI](https://docs.microsoft.com/azure/virtual-machine-scale-sets/quick-create-cli), or [Azure PowerShell](/azure/virtual-machine-scale-sets/quick-create-powershell) to create a scale set in your Azure subscription.

- Select any Linux or Windows image - either from Azure marketplace or your own custom image - to create the scale set. Do not pre-install Azure Pipelines agent in the image. Azure Pipelines will automatically install the agent as it provisions new virtual machines.
- Use **ScaleSet VMs** (this is the default) for the [orchestration mode](/azure/virtual-machine-scale-sets/orchestration-modes) of the scale set. **Virtual machines** orchestration mode is not supported.
- Azure Pipelines disables autoscaling and takes over the addition and deletion of VMs based on pipeline jobs and settings that you specify on agent pool. Any **scaling** settings that you specify in the Azure portal - e.g., initial instance count, scaling policy, minimum and maximum number of VMs, or scaling thresholds - won't be used. 


### Create a virtual machine scale set

In the following example, a new resource group and virtual machine scale set are created with Azure Cloud Shell using the UbuntuLTS VM image.

1. Browse to [Azure Cloud Shell](https://shell.azure.com/) at `https://shell.azure.com/`.

2. Run the following command to verify your default Azure subscription.

    ```azurecli
    az account list -o table
    ```

    If your desired subscription isn't listed at the default, select your desired subscription. 

    ```azurecli
    az account set -s af56db7f-5953-4018-8ca8-e20dbfa0d7c2
    ```

3. Create a resource group for your virtual machine scale set.

    ```azurecli
    az group create \
    --location westus \
    --name vmssagents
    ```

4. Create a virtual machine scale set in your resource group. In this example the UbuntuLTS VM image is specified. 

    ```azurecli
    az vmss create \
    --resource-group vmssagents \
    --name vmssagentsVM \
    --image UbuntuLTS \
    --upgrade-policy-mode automatic \
    --orchestration-mode ScaleSetVM
    --admin-username azureuser \
    --generate-ssh-keys
    ```

### Create the agent pool

1. Navigate to your Azure DevOps **Project settings**, select **Agent pools** under **Pipelines**, and select **Add pool** to create a new agent pool.

    :::image type="content" source="media/scale-set-agents/create-agent-pool.png" alt-text="Create agent pool." :::

    > [!IMPORTANT]
    > You must create your scale set pool in **Project settings** and not **Organization settings**. Conversely, when you want to delete a scale set pool, you must delete it from **Organization settings**, and not **Project settings**.

2. Select **Azure virtual machine scale set** for the pool type. Select the **Azure subscription** that contains the scale set, choose **Authorize**, and choose the desired virtual machine scale set from that subscription. If you have an existing [service connection](../library/service-endpoints.md) you can choose that from the list instead of the subscription.

3. Choose the desired virtual machine scale set from that subscription.

4. Specify a name for your agent pool.

5. Configure the following options:

    - **Maximum number of virtual machines in the scale set** - Azure Pipelines will automatically scale-up the number of agents, but won't exceed this limit.
    - **Number of agents to keep on standby** - Azure Pipelines will automatically scale-down the number of agents, but will ensure that there are always this many agents available to run new jobs.

    :::image type="content" source="media/scale-set-agents/agent-pool-settings.png" alt-text="Create agent pool." :::

    > [!IMPORTANT]
    > During the preview, scale set agents have the following limitations:
    > - Selecting **Automatically tear down virtual machines after every use** has no effect. Azure Pipelines cannot automatically tear down virtual machines after every use. If your job runs on a VM that has previously run jobs, pipeline run artifacts and source may be present, unless you specify clean options in your job.
    > - You may not select **Preserve machines with failed runs for diagnostics**.
    > - You must not specify **0** for **Number of agents to keep on standby**. You must have at least one, or else your jobs may not run if there is no current running agent.

6. When your settings are configured, choose **Create** to create the agent pool.

## Use scale set agent pool

Once the scale set agent pool is created, Azure Pipelines automatically scales the agent machines. Using a scale set agent pool is similar to any other agent pool. You can use it in classic build, release, or YAML pipelines. User permissions, pipeline permissions, approvals, and other checks work the same way as in any other agent pool. For more information, see [Agent pools](pools-queues.md).


> [!IMPORTANT]
> Caution must be exercised when making changes directly to the scale set in the Azure portal.
> - You may not change many of the the scale set configuration settings in the Azure portal. Azure Pipelines updates the configuration of the scale set. Any manual changes you make to the scale set may interfere with the operation of Azure Pipelines. 
> - You may not rename or delete a scale set without first deleting the scale set pool in Azure Pipelines.

### Limitations during the preview

During the private preview, scale set agent pools have some limitations that you need to be aware of. We are actively working on removing these limitations.

- You must specify at least one agent to be always present in the scale set. 
- Azure Pipelines cannot automatically tear down virtual machines after every use.
- Azure Pipelines cannot preserve a machine for debugging if you have a job that fails.
- You should not enable or disable agents in the scale set agent pool using Azure Pipelines project settings. This can lead to unexpected behavior.

