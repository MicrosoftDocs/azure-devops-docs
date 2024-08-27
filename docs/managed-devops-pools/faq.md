---
title: Frequently asked questions
description: Learn the answers to frequently asked questions for Managed DevOps Pools.
ms.date: 08/22/2024
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
