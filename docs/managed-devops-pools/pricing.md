---
title: Managed DevOps Pools pricing
description: Learn how pricing is calculated for your Managed DevOps Pools.
ms.date: 04/28/2025
ms.topic: concept-article
ms.custom: peer-review-program
#Customer intent: As a platform engineer, I want to understand how Managed DevOps Pools pricing is determined so that I can estimate my projected cost.
---

# Managed DevOps Pools pricing

Managed DevOps Pools pricing is a combination of the cost of the Azure services your pool uses, like compute, storage, and data egress, and the standard Azure DevOps Services parallel jobs pricing for self-hosted agents. This article describes how to estimate and project the costs for your Managed DevOps Pools.

## Azure services pricing

The primary cost for Managed DevOps Pools is the cost of the Azure services that your pool uses, like compute, storage, and data egress, which are billed at the standard Azure pricing rates. For more details, see:

* [Azure pricing calculator](https://azure.microsoft.com/pricing/calculator/)
* [View and download your Azure usage and charges](/azure/cost-management-billing/understand/download-azure-daily-usage)

For additional details about the Azure Services used by Managed DevOps Pools and strategies for reducing cost, see [Manage cost and performance](./manage-costs.md).

## Azure DevOps Services parallel job pricing

The secondary cost for Managed DevOps Pools is the Azure DevOps parallel jobs cost. In Azure DevOps, a parallel job refers to the compute capacity to run a [pipeline job](../pipelines/process/phases.md). Managed DevOps Pools agents are considered to be self-hosted agents, and run using self-hosted parallel jobs. Azure DevOps Services provides organizations one free self-hosted parallel job with unlimited minutes. If you want the capacity to run five concurrent pipeline jobs on Managed DevOps Pools agents, you must pay for four additional self-hosted parallel jobs.

For more information, see [Azure DevOps pricing page](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) for **Self-hosted** agents, and [Configure and pay for parallel jobs](../pipelines/licensing/concurrent-jobs.md?tabs=self-hosted).

 The Azure DevOps parallel jobs portion of the Managed DevOps Pools cost is a fixed monthly cost based on the number of purchased self-hosted parallel jobs, and does not increase or decrease based on the time your agents are provisioned or the duration of your pipeline jobs.

> [!NOTE]
> The Azure DevOps self-hosted parallel jobs count for your organization determines how many self-hosted agents can run jobs concurrently in your Azure DevOps organization, including your pipelines running on Managed DevOps Pools agents. The parallel jobs count is different than the Managed DevOps Pools [Maximum agents](./configure-pool-settings.md#maximum-agents) setting, which configures the maximum number of agents that your pool makes available to run pipelines. If you set **Maximum agents** to **5**, ensure that you have at least five self-hosted parallel jobs available in your organization. Parallel jobs are paid and configured at the Azure DevOps organization level and are shared with all pipelines running in any project in the organization. If you set **Maximum agents** to **5** but only have the default free self-hosted parallel job, you can only run a single pipeline at a time.

## Estimating cost

A basic formula for estimating monthly Managed DevOps Pools cost is to combine fixed costs like [Azure DevOps Services parallel job pricing](#azure-devops-services-parallel-job-pricing), non-hourly Azure services costs like [Azure Storage pricing](https://azure.microsoft.com/pricing/details/storage/blobs/), [Managed Disks pricing](https://azure.microsoft.com/pricing/details/managed-disks/), and [standard data egress charges](https://azure.microsoft.com/pricing/details/bandwidth/), and hourly Azure services cost, primarily [Virtual Machines pricing](https://azure.microsoft.com/pricing/details/virtual-machines/linux/), which is typically the largest portion of your monthly Managed DevOps Pools cost.

To estimate the number of hours used when projecting the hourly Azure services cost, multiply the number of projected jobs by the projected run time of the jobs. For example, if your typical job takes two hours to run, runs 100 times per day, five days per week, your estimated hours would be 1000 hours per week, or approximately 4000 hours per month.

If you are using [standby agents](./configure-scaling.md#standby-agent-mode), factor in the hours that the agents are online for standby but not actively running jobs and add that to the estimated hours. To use standby agents, you configure a provisioning schedule to keep agents online to reduce the startup time to run jobs. If you provisioned five agents to be on standby during a 40 hour work week, you would be paying for 200 hours of machine time per week, even during times when no jobs were running.

To find the Virtual machine cost per hour, [review the pricing](https://azure.microsoft.com/pricing/details/virtual-machines/linux/) for the [Azure VM size you're using](/azure/virtual-machines/sizes) for your pool.

If your selected Azure VM size is 12 cents an hour, and you are projected to run 4000 hours of jobs, your projected monthly cost for hourly services would be $480.

To view your previous Azure resource usage, see [View and download your Azure usage and charges](/azure/cost-management-billing/understand/download-azure-daily-usage).

## See also

* [Manage cost and performance for Managed DevOps Pools](./manage-costs.md)
* [Azure bandwidth pricing](https://azure.microsoft.com/pricing/details/bandwidth/)
* [Azure pricing calculator](https://azure.microsoft.com/pricing/calculator/)
* [View and download your Azure usage and charges](/azure/cost-management-billing/understand/download-azure-daily-usage)

