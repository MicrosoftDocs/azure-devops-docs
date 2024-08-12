---
title: Frequently asked questions
suffix: Managed DevOps Pools
description: Learn the answers to frequently asked questions for Managed DevOps Pools.
ms.subservice: azure-devops-managed-devops-pools
author: steved0x
ms.author: sdanie
ms.topic: conceptual
ms.date: 07/31/2024
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
1. Search for **Microsoft.DevOpsInfrastructure**, choose it from the list, and choose **Locations**.

  :::image type="content" source="media/prerequisites/view-provider-regions.png" alt-text="Screenshot of Azure regions that support Managed DevOps Pools.":::
