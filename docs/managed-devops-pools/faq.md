---
title: Frequently asked questions
description: Learn the answers to frequently asked questions for Managed DevOps Pools.
ms.date: 10/03/2024
---

# Frequently asked questions

## How many agents can I create?

See [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas) for information about the default quota and how to increase the quota for your pool.

## What Azure VM SKU should I choose?

See [Manage cost and performance](./manage-costs.md) for information about choosing the right Azure VM size to meet your workflow needs as well as your budget.

## Can I remote access to my agents VMs?

You cannot remote access to the VMs that run the Managed DevOps Pools agents.

## What Azure regions support Managed DevOps Pools?

To see the Azure regions that support Managed DevOps Pools in your subscription, review the locations list for the **Microsoft.DevOpsInfrastructure** resource provider.


1. Sign in to the [Azure portal](https://portal.azure.com/).
1. On the Azure portal menu, search for **Subscriptions**. Select it from the available options.
1. Select the Azure subscription you plan to use for Managed DevOps Pools.
1. On the left menu, under **Settings**, select **Resource providers**.
1. Search for **Microsoft.DevOpsInfrastructure**.
1. Verify that the **Status** is **registered**. If it's not registered, select it, and choose **Register**. 

   :::image type="content" source="./media/prerequisites/register-resource-provider.png" alt-text="Screenshot of registering the Managed DevOps Pools Azure Resource provider.":::

1. Choose **Microsoft.DevOpsInfrastructure** from the list, and choose **Locations**.

   :::image type="content" source="media/prerequisites/view-provider-regions-small.png" lightbox="media/prerequisites/view-provider-regions.png" alt-text="Screenshot of Azure regions that support Managed DevOps Pools.":::

> [!IMPORTANT]
> If the **Microsoft.DevOpsInfrastructure** is not registered in your subscription, you won't see any locations. [Register the Managed DevOps Pools resource provider in your Azure Subscription](./prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription) before you check for supported regions. For more information about Azure resource providers, see [Azure resource providers and types](/azure/azure-resource-manager/management/).

## What if the Azure region containing my pool has an outage?

Disaster recovery (DR) is about recovering from high-impact events such as natural disasters that result in downtime and data loss. Regardless of the cause, the best remedy for a disaster is a well-defined and tested DR plan and an application design that actively supports DR. Before you begin to think about creating your disaster recovery plan, see [Recommendations for designing a disaster recovery strategy](/azure/well-architected/reliability/disaster-recovery). 

When it comes to DR, Microsoft uses the [shared responsibility model](/azure/reliability/business-continuity-management-program#shared-responsibility-model). In a shared responsibility model, Microsoft ensures that the baseline infrastructure and platform services are available. At the same time, many Azure services don't automatically replicate data or fall back from a failed region to cross-replicate to another enabled region. For those services, you are responsible for setting up a disaster recovery plan that works for your workload.

Managed DevOps Pools instances don't automatically replicate or switch from a failed region to another enabled region. In the event of a complete outage of the Azure region that hosts your Managed DevOps Pool, you would need to create a new Managed DevOps Pool in a different region, and manually update your pipelines to reference the new pool.

This includes the following resources that Managed DevOps Pools depends on:
- The resource group for the replacement pool
- The dev center and dev center project for the replacement pool
- The Azure Compute Gallery images (if your pool uses them)

You can save the configuration of your existing pool and create [ARM templates](./quickstart-arm-template.md) or Azure CLI scripts to recreate your pool using the same settings (except for name and location), and manually update your pipelines to use the new pool. When normal operations resume in the Azure region of your original pool, you can update your pipelines to use the original pool, and delete the new pool and associated resources.
