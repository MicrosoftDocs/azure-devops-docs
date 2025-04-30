---
title: Compare Managed DevOps Pools with Azure Virtual Machine Scale Set agents
description: Learn about the differences between Managed DevOps Pools and Azure Virtual Machine Scale Set agents.
ms.date: 12/10/2024
ms.topic: overview
#Customer intent: As a platform engineer, I want to understand the benefits of using Managed DevOps Pools over Azure Virtual Machine Scale Set agents.
---

# Compare Managed DevOps Pools with Azure Virtual Machine Scale Set agents

[!INCLUDE [mdp-recommended](./includes/mdp-recommended.md)] 

## Feature comparison

The following table compares features of Managed DevOps Pools and scale set agents.

| Feature | Managed DevOps Pools | Azure virtual machine scale set agent pools |
|---------|----------------------|------------------|
| Pricing | Pricing is the same for Managed DevOps Pools and Scale set agents. See [Pricing](#pricing) for more information. | Same as Managed DevOps Pools pricing |
| Virtual machine hosting | [Agents run on a Microsoft Azure subscription](./architecture-overview.md) | Agents run on your Azure subscription |
| Standby agent schedule | Provides flexible scheduling options to configure the number of standby agents available at different times as well as an automatic standby agent option | Supports a single standby agent count setting (equivalent to Managed DevOps Pools [All Week Scheme](./configure-scaling.md#all-week-scheme)) |
| Scaling granularity | Scale out is done in increments of one | Scale out is done in increments of a percentage of the maximum pool size, potentially resulting in extra idle agents for which you are billed |
| Pool size | Support for thousands of agents | Support for hundreds of agents |
| Multiple images | Support for multiple images in your pool | Supports only a single image |
| Quota | Quota is dedicated to the Managed DevOps Pools resource and not shared with other services in your subscription | Uses Compute quota shared with other services in your subscription |
| Virtual network support | Support for running in a private network or joining your existing virtual network | Supported |
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

You can configure a Managed DevOps Pool with the same behavior as your Azure virtual machine scale set agent pool by mapping the scale set agent pool settings to their Managed DevOps Pools equivalent.
The following table lists scale set agent pool properties and the corresponding Managed DevOps Pools property that configures the equivalent behavior. 

| Scale set agents setting | Managed DevOps Pools setting |
|------------------|----------------------|
| Automatically tear down virtual machines after every use | Choose [stateless pools](./configure-scaling.md#stateless-pools) for a fresh agent for every job (Automatically tear down virtual machines after every use), or [stateful pools](./configure-scaling.md#stateful-pools) for persistent agents |
| Save an unhealthy agent for investigation | Not available in Managed DevOps Pools |
| Maximum number of virtual machines in the scale set | [Maximum agents](./configure-pool-settings.md#maximum-agents) |
| Number of agents to keep on standby | Choose [All week scheme](./configure-scaling.md#all-week-scheme) for the same behavior as scale set agents, configure a [flexible schedule](./configure-scaling.md#manual), or choose [Automatic standby agent scheduling](./configure-scaling.md#automatic) |
| Delay in minutes before deleting excess idle agents | [Grace period for stateful pools](./configure-scaling.md#stateful-pools) |
| Configure VMs to run interactive tests | [Enable Interactive Mode](./configure-security.md#configure-interactive-mode) |

## Pricing

Managed DevOps Pools and Azure virtual machine scale set agents pricing is calculated in the same way and has two components: 

1. **Azure DevOps self-hosted parallel job pricing** - Azure DevOps refers to the capability to run pipeline jobs concurrently as **parallel jobs**. Both Managed DevOps Pools and Azure virtual machine scale set agents use self-hosted parallel jobs. Each parallel job allows you to run a pipeline job. To run two pipeline jobs concurrently, you need two parallel jobs. For more information on parallel jobs, see [Managed DevOps Pools pricing - parallel job pricing](./pricing.md#azure-devops-services-parallel-job-pricing) and [Configure and pay for parallel jobs](../pipelines/licensing/concurrent-jobs.md?tabs=self-hosted).

2. **Azure services pricing** - Azure services pricing for Managed DevOps Pools and Azure virtual machine scale set agents is determined by the cost of the Azure services your pool uses, like compute, storage, and data egress.

Some Managed DevOps Pools features, like flexible standby agent scheduling, and more granular scaling, can reduce the number of idle agents waiting for jobs. Support for multiple images and SKUs lets you choose the right sized Azure resources to support your workload, instead of being limited to a single image or SKU.

## See also

* [Managed DevOps Pools pricing](./pricing.md)
* [Manage cost and performance of Managed DevOps Pools](./manage-costs.md)
