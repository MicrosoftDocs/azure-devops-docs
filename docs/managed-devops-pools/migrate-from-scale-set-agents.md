---
title: Compare Managed DevOps Pools with Azure Virtual Machine Scale Set agents
description: Learn about the differences between Managed DevOps Pools and Azure Virtual Machine Scale Set agents.
ms.date: 05/20/2025
ms.topic: overview
ms.custom: peer-review-program
#Customer intent: As a platform engineer, I want to understand the benefits of using Managed DevOps Pools over Azure Virtual Machine Scale Set agents.
---

# Compare Managed DevOps Pools with Azure Virtual Machine Scale Set agents

Managed DevOps Pools is a new service that is an evolution of Azure DevOps Virtual Machine Scale Set agent pools, simplifying custom pool creation even further by improving scalability and reliability of custom pools. Managed DevOps Pools is a fully managed service where the virtual machines that run the agents live in a Microsoft Azure subscription and not in your own Azure subscription, like when using Azure DevOps Virtual Machine Scale Set agent pools.

If you're considering using auto-scalable self-hosted agent pools, we recommend looking at Managed DevOps Pools.


## Feature comparison

The following table compares features of Managed DevOps Pools and scale set agents.

| Feature | Managed DevOps Pools | Azure virtual machine scale set agent pools |
|---------|----------------------|------------------|
| Pricing | Pricing is the same for Managed DevOps Pools and Scale set agents. You pay a fixed monthly cost for [Azure DevOps Services self-hosted parallel jobs](./pricing.md#azure-devops-services-parallel-job-pricing), combined with the cost of the [Azure services used by your pool](./pricing.md#azure-services-pricing). See [Managed DevOps Pools pricing](./pricing.md) for more information. | Same as Managed DevOps Pools pricing |
| Virtual machine hosting | Agents run on an Azure subscription owned and managed by Microsoft. For more information, see [Microsoft Managed DevOps Pools architecture overview](./architecture-overview.md) | Agents run on your Azure subscription |
| Standby agent schedule | Provides flexible scheduling options to configure the number of standby agents available at different times as well as an automatic standby agent option | Supports a single standby agent count setting (equivalent to Managed DevOps Pools [All Week Scheme](./configure-scaling.md#all-week-scheme)) |
| Scaling granularity | Scale out is done in increments of one | Scale out is done in increments of a percentage of the maximum pool size, potentially resulting in extra idle agents for which you are billed |
| Pool size | Support for thousands of agents | Support for hundreds of agents |
| Multiple images | Support for multiple images in your pool | Supports only a single image |
| Quota | Quota is dedicated to the Managed DevOps Pools resource and not shared with other services in your subscription | Uses Compute quota shared with other services in your subscription |
| Virtual network support | Support for running in a private network or joining your existing virtual network | Support for joining an existing virtual network or creating a new one |
| Image support | [Azure Pipelines images (same as Microsoft-hosted agent images for Windows and Linux)](./configure-images.md#azure-pipelines-images), [selected Azure Marketplace images, Azure compute gallery images](./configure-images.md) | [Azure Marketplace images and custom images](/azure/devops/pipelines/agents/scale-set-agents#create-the-scale-set) |
| VMSS extension scripts | Not supported, but you can configure your custom image with the required software | You can run a custom script on your agent before it starts running pipeline jobs |
| Azure Key Vault integration | Download Azure Key Vault certificates to your agent automatically | Key vault certificates can be preinstalled on your custom images, or downloaded using tasks or VMSS extension scripts |
| Multiple organizations | Support for using a pool in multiple Azure DevOps organizations, and optionally restrict the pool to certain projects | Supports a single Azure DevOps organization |
| Stateless agents | Supported | [Supported on Windows Server and selected Linux images](/azure/devops/pipelines/agents/scale-set-agents#you-check-the-option-to-automatically-tear-down-virtual-machines-after-every-use-for-the-agent-pool-but-you-see-that-the-vms-arent-re-imaging-as-they-should-and-just-pick-up-new-jobs-as-theyre-queued) |
| Stateful agents | Supported | Supported |
| Spot Virtual Machine support | On product roadmap | Not supported |
| Containers | Coming soon | Not supported |
| BCDR | On product roadmap: You will have the ability to configure backup pools for your primary pools to automatically send requests to the backup pools when your primary pool's health degrades | [Supports availability sets and zones](/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-faq#do-scale-sets-work-with-azure-availability-sets-) |

### Map scale set agent settings to Managed DevOps Pools

You can configure a Managed DevOps Pool with similar behavior as your Azure virtual machine scale set agent pool by mapping the scale set agent pool settings to their Managed DevOps Pools equivalent.

| Scale set agents setting | Managed DevOps Pools equivalent setting |
|------------------|----------------------|
| Automatically tear down virtual machines after every use | Choose [stateless pools](./configure-scaling.md#stateless-pools) for a fresh agent for every job (Automatically tear down virtual machines after every use), or [stateful pools](./configure-scaling.md#stateful-pools) for persistent agents |
| Save an unhealthy agent for investigation | Not available in Managed DevOps Pools |
| Maximum number of virtual machines in the scale set | [Maximum agents](./configure-pool-settings.md#maximum-agents) |
| Number of agents to keep on standby | Choose [All week scheme](./configure-scaling.md#all-week-scheme) for the same behavior as scale set agents, configure a [flexible schedule](./configure-scaling.md#manual), or choose [Automatic standby agent scheduling](./configure-scaling.md#automatic) |
| Delay in minutes before deleting excess idle agents | [Grace period for stateful pools](./configure-scaling.md#stateful-pools) |
| Configure VMs to run interactive tests | [Enable Interactive Mode](./configure-security.md#configure-interactive-mode) |

## See also

* [Managed DevOps Pools pricing](./pricing.md)
* [Manage cost and performance of Managed DevOps Pools](./manage-costs.md)
* [Azure Virtual Machine Scale Set agents](../pipelines/agents/scale-set-agents.md)
