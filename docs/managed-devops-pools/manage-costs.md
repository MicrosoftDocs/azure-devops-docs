---
title: Manage cost and performance
description: Learn how to manage cost and performance for your Managed DevOps Pools.
ms.date: 08/22/2024
---

# Manage cost and performance

Managed DevOps Pools provides several different options for configuring the performance of your pool. This article describes options for matching your pool's performance to the demands of your workload, by increasing or reducing the performance and cost of your pools.

## Configure agent performance

When you configure your Managed DevOps Pool, you have different options for configuring the performance and cost of your pool. The following sections describe some choices you can make to configure the performance of your pool.

* [Disk types](#disk-types)
* [Choose the right agent size and type](#choose-the-right-agent-size-and-type)
* [Pool region co-location](#pool-region-co-location)
* [Pre-provisioning with standby agents](#pre-provisioning-with-standby-agents)

### Disk types

When you create your Managed DevOps Pool, you have an option to chose **Standard SSD** or **Premium SSD** instead of the default **Standard** OS disk type. OS disk type determines what kind of disk is used for your OS drive. Your agent working directory is by default in the temp drive or **D:\\**, so you may not benefit by an expensive OS disk type. Benchmark your workload's performance with different OS disk types, understand the costs involved and chose an OS disk type appropriately.

If your workload's throughput exceeds the level of the standard tier, you can potentially gain a performance improvement in your workload by upgrading to a more performant disk type. For more information on disk types and performance, see [Azure Managed disk types](/azure/virtual-machines/disks-types).

Instead of changing the OS disk type or going to a larger SKU for more disk space, consider [configuring a data disk](configure-storage.md) for your pool. You can configure a size and disk type that meets your workload requirements, and configure your pools to use this drive as the agent working directory, to provide greater storage while using the default OS disk type and a potentially less expensive VM size.

### Choose the right agent size and type

Agent size in Managed DevOps Pools specifies the [Azure virtual machine size](/azure/virtual-machines/sizes) to use for hosting your Managed DevOps Pools agents. You can change the [agent size](configure-pool-settings.md#agent-size) for your pool to provide more CPU cores, more memory and more disk space. Using a more powerful VM size will increase your Azure bill as well, so choose this option only if you determine that using a more powerful VM size will increase your workload performance.

#### VM CPU architecture

AMD powered VM sizes are often up to 40% less expensive than Intel powered VM sizes, with the same or better performance. Using AMD powered VM sizes provide an opportunity to reduce your Azure spend.

#### VM size

Make sure you are using the right Azure VM size. If you are currently using an eight core Azure VM size, make sure your workload is able to use all the 8 cores. You can run your workload on different VM sizes and see how performant your workload is. You can downgrade a VM size to reduce your COGS, while keeping your workload's performance about the same.

#### VM type

Different Azure VM series are designed for workloads with specific characteristics to perform better. Familiarize yourself with different Azure SKU series so you can pick a series that best suits your workload. Example: If your application doesn't use as much core as it does memory, you can pick a VM size from the [Memory optimized](/azure/virtual-machines/sizes-memory) family of sizes.

Review the different [Azure VM types](/azure/virtual-machines/sizes) to understand their benefits. For example, if your workload requires more cores and less memory, you can use [Compute optimized](/azure/virtual-machines/sizes-compute) size. If your workload requires more disk space but the same cores/memory, you can pick an Azure VM type that has a higher disk to compute ratio rather than going up a SKU size, or you could use an [attached data disk](configure-storage.md).

#### VM type generation

The latest generation of an Azure VM type might be more performant than the previous version. For example, D2dsV4 and D2dsV5 are priced the same and have the same specifications but it is likely that V5 is faster than the V4. 

### Pool region co-location

Try to colocate your pool's Azure region to the region where CI/CD workload's dependencies are present. This proximity reduces network latency and makes your workloads relatively more performant. You can find your [Azure DevOps organization's region](/azure/devops/organizations/accounts/change-organization-location) and locate your Managed DevOps Pool in the same region.

### Pre-provisioning with standby agents

By default, whenever you queue a pipeline, an agent is created from scratch. You can choose to enable standby agents, so that your pipelines don't spend time waiting. If you have turned on standby agents in manual mode, you can look at historical utilization of standby agents and decide if you want to reduce the number of standby agents. You can also decide to completely turn off pre-provisioning if your workflows aren't time critical and can wait 5-10 minutes for the agents to be created on demand.

One option to improve agent performance without using standby agents is to use stateful agents with a short grace period. When stateful agents with a grace period complete a job, they stay online for the duration specified by the grace period and wait for jobs. If your workload comes in bursts, you can configure a grace period that keeps agents online when jobs are steady, and starts them from scratch during slower periods.

For more information, see [Standby agents](configure-scaling.md#standby-agent-mode) and [Stateful pools](configure-scaling.md#stateful-pools).


