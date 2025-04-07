---
title: Managed DevOps Pools pricing
description: Learn how pricing is calculated for your Managed DevOps Pools.
ms.custom: peer-review
ms.date: 11/13/2024
ms.topic: concept-article
#Customer intent: As a platform engineer, I want to understand how Managed DevOps Pools pricing is determined so that I can estimate my projected cost.
---

# Pricing

Managed DevOps Pools pricing is determined by the cost of the Azure services your pool uses, like compute, storage, and data egress, combined with the standard Azure DevOps Services pricing for self-hosted agents. This article describes how to estimate and project the costs for your Managed DevOps Pools.

## Azure DevOps Services parallel job pricing

Azure DevOps refers to the capability to run pipeline jobs concurrently as **parallel jobs**. If you have five parallel jobs, you can run five pipelines at the same time. If more than five pipelines are queued, the first five start, and the remaining pipelines remain in the queue until one of the previous pipelines completes.

Managed DevOps Pools agents are considered to be self-hosted agents by Azure DevOps Services. Azure DevOps Services provides self-hosted agents one free parallel job, and charges $15.00 per month for each additional parallel job. If you want the capacity to run five jobs in parallel, you must pay for four additional parallel jobs at $15.00 each, for an additional $60.00 per month.

Managed DevOps Pools uses the [Maximum agents](./configure-pool-settings.md#maximum-agents) to configure the maximum number of agents that it makes available to run pipelines. If you set **Maximum agents** to **5**, ensure that you have five parallel jobs available in your organization for best performance. Parallel jobs are paid and configured at the Azure DevOps organization level and are shared with all pipelines running in any project in the organization. If you set **Maximum agents** to **5** but only have the default free parallel job, you can only run a single pipeline at a time.

For more information, see [Configure and pay for parallel jobs](../pipelines/licensing/concurrent-jobs.md?tabs=self-hosted).

## Azure services pricing

The Azure services your pool uses, like compute, storage, and data egress, are billed at the standard Azure pricing rates. For more details, see:

* [Azure pricing calculator](https://azure.microsoft.com/pricing/calculator/)
* [View and download your Azure usage and charges](/azure/cost-management-billing/understand/download-azure-daily-usage).

For additional details about the Azure Services used by Managed DevOps Pools and strategies for reducing cost, see [Manage cost and performance](./manage-costs.md).

## Estimating cost

A basic formula for estimating the cost for Managed DevOps Pools is to determine how many hours of jobs are run per month multiplied by the cost per hour.

To estimate the number of hours, multiply the number of projected jobs by the projected run time of the jobs. For example, if your typical job takes two hours to run, runs 100 times per day, five days per week, your estimated hours would be 1000 hours per week, or approximately 4000 hours per month. If your jobs transfer data that is subject to [standard data egress charges](https://azure.microsoft.com/pricing/details/bandwidth/), factor this pricing into your estimates.

If you are using [standby agents](./configure-scaling.md#standby-agent-mode), factor in the hours that the agents are online for standby but not actively running jobs and add that to the estimated hours. To use standby agents, you configure a provisioning schedule to keep agents online to reduce the startup time to run jobs. If you provisioned five agents to be on standby during a 40 hour work week, you would be paying for 200 hours of machine time per week, even during times when no jobs were running.

To find the cost per hour, [review the pricing](https://azure.microsoft.com/pricing/details/virtual-machines/linux/) for the [Azure VM size you're using](/azure/virtual-machines/sizes) for your pool. If you're using a data disk, see [Managed Disks pricing](https://azure.microsoft.com/pricing/details/managed-disks/).

If your selected Azure VM size is 12 cents an hour, and you are projected to run 4000 hours of jobs, your projected monthly cost would be $480.

To view your previous Azure resource usage, see [View and download your Azure usage and charges](/azure/cost-management-billing/understand/download-azure-daily-usage).

## See also

* [Manage cost and performance for Managed DevOps Pools](./manage-costs.md)
* [Azure bandwidth pricing](https://azure.microsoft.com/pricing/details/bandwidth/)
* [Azure pricing calculator](https://azure.microsoft.com/pricing/calculator/)
* [View and download your Azure usage and charges](/azure/cost-management-billing/understand/download-azure-daily-usage)

