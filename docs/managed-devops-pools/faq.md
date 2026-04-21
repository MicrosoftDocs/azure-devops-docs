---
title: Managed DevOps Pools FAQ
description: Get answers to frequently asked questions about Managed DevOps Pools, including quotas, VM SKUs, regions, and pricing.
ms.date: 04/20/2026
ms.topic: faq
ms.subservice: azure-pipelines
---

# Managed DevOps Pools frequently asked questions

## How many agents can I create?

For information about the default quota and how to increase the quota for your pool, see [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas).

## What Azure VM SKU should I choose?

For information about choosing the right Azure VM size to meet your workflow needs as well as your budget, see [Manage cost and performance](./manage-costs.md).

## Can I remotely access my agent VMs?

You can't remotely access the VMs that run the Managed DevOps Pools agents.

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
> If the **Microsoft.DevOpsInfrastructure** resource provider isn't registered in your subscription, you won't see any locations. [Register the Managed DevOps Pools resource provider in your Azure Subscription](./prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription) before you check for supported regions. For more information about Azure resource providers, see [Azure resource providers and types](/azure/azure-resource-manager/management/).

## Can I use VM Reservations to save on costs for the Managed DevOps Pools agents?

No, VM Reservations don't apply to Managed DevOps Pools instances.

## Can I use Azure Hybrid Benefit with Managed DevOps Pools?

No, you can't use [Azure Hybrid Benefit](/azure/virtual-machines/windows/hybrid-use-benefit-licensing) with Managed DevOps Pools.

Azure Hybrid Benefit works with your subscription, and Managed DevOps Pools uses a *hosted on behalf of* architecture. This architecture means that the virtual machines that host your Managed DevOps Pools agents exist in a subscription owned by Microsoft. Since these virtual machines aren't part of your subscription, they're not eligible for Azure Hybrid Benefit.

## Does Managed DevOps Pools have an Azure Verified Module?

Yes, the Azure Verified Module for Managed DevOps Pools is available [here on GitHub](https://github.com/Azure/bicep-registry-modules/tree/main/avm/res/dev-ops-infrastructure/pool).

## Related content

- [Managed DevOps Pools overview](overview.md)
- [Troubleshoot Managed DevOps Pools issues](troubleshooting.md)
- [All troubleshooting guides & FAQs](../troubleshoot/index.yml)
