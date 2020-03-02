---
title: Virtual machine scale set agents
description: Use Azure virtual machine scale sets to create agents
ms.topic: reference
ms.assetid: ED6584CF-2178-4423-835F-78B872C82176
ms.manager: vijayma
ms.author: vijayma
author: vijayma
ms.date: 03/03/2020
monikerRange: azure-devops
---

# Azure virtual machine scale set agents

[!INCLUDE [include](../includes/version-team-services.md)]

>[!NOTE]
>This feature is currently in private preview. It will soon be available in public preview.

Azure virtual machine scale set agents are a form of self-hosted agents that can be auto-scaled to meet your demands. This elasticity reduces your need to run dedicated agents all the time. Unlike Microsoft-hosted agents, you have flexibility over the size and the image of machines on which agents run. 

If you like Microsoft-hosted agents but are limited by what they offer, you should consider Azure VM scale set agents. Here are some examples:

- You need more memory, more processor, more storage, or more IO than what we offer in native Microsoft-hosted agents.
- You need NCv2 VM with particular instruction sets for machine learning.
- You need to deploy to a private App Service. It's in a private VNET with no inbound connectivity.
- You need to open corporate firewall to specific IP addresses so that Microsoft-hosted agents can communicate with your servers.
- You need to restrict network connectivity of agent machines and allow them to reach only approved sites.
- You cannot get enough agents from Microsoft to meet your needs.
- You cannot partition and allocate Microsoft-hosted parallel jobs to individual projects or teams in your organization.
- You want to run several consecutive jobs on an agent to take advantage of incremental source and machine-level package caches.
- You want to run additional configuration or cache warmup before an agent begins accepting jobs.

If you like self-hosted agents but wish that you can simplify managing them, you should consider Azure VM scale set agents. Here are some examples:

- You do not want to run dedicated agents round the clock. You want to de-provision agent machines that are not being used to run jobs.
- You run untrusted code in your pipeline and hence want to re-image agent machines after each job.
- You want to simplify periodically updating the base image for your agents.

>[!NOTE]
>You cannot run Mac agents using VM scale sets. You can only run Windows or Linux agents this way.


## Create VM scale set agent pool

Use the [Azure portal](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/quick-create-portal), [Azure CLI](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/quick-create-cli), or [Azure Powershell](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/quick-create-powershell) to create a VM scale set in your Azure subscription. Here are the supported and unsupported settings when creating a scale set for the purpose of an Azure Pipelines agent pool.

- You must use **ScaleSet VMs** for the [orchestration mode](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/orchestration-modes) of the scale set. **Virtual machines** orchestration mode is not supported.
- Any **scaling** settings that you specify - initial instance count, scaling policy, minimum and maximum number of VMs, scale-in and scale-out thresholds, etc - will be overridden by Azure Pipelines. Azure Pipelines disables auto-scaling and takes over the addition and deletion of VMs based on pipeline jobs and settings that you specify on agent pool.

Navigate to your Azure DevOps project settings, and select **Agent pools** under **Pipelines** to create a new agent pool.

>[!NOTE]
>You cannot create a scale set pool in your organization settings. You must create it in your project settings.

Select **Azure virtual machine scale set** for the pool type. Select the Azure subscription and then the scale set that you created before. You can configure the following settings on this agent pool:

- **Maximum number of VMs in the scale set:** Azure Pipelines will automatically scale-up the number of agents, but will not exceed this limit.
- **Number of agents to keep on standby:** Azure Pipelines will automatically scale-down the number of agents, but will ensure that there are always this many agents available to run new jobs.

>[!NOTE]
>At present, you must specify at least one agent to be always present in the scale set. We are working on removing this limitation.
>At present, Azure Pipelines does not tear down virtual machines after every use. We are working on making this setting available.
>At present, Azure Pipelines cannot preserve a machine for debugging if you have a job that fails. We are working on making this setting available.

## Use VM scale set agent pool

Once created, a VM scale set agent pool is similar to any other agent pool. You can use it in classic build, release, or YAML pipelines. User permissions, pipeline permissions, approvals, and other checks work the same way as in any other agent pool. For more information, see [Agent pools](pools-queues.md).