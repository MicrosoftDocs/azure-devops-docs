---
title: Managed DevOps Pools FAQ
description: Get answers to frequently asked questions about Managed DevOps Pools, including quotas, VM SKUs, regions, and pricing.
ms.date: 08/24/2026
ms.topic: faq
---

# Managed DevOps Pools frequently asked questions

## Where is Managed DevOps Pools available?

Managed DevOps Pools is supported with Azure DevOps Services and Azure public cloud, and isn't supported on any other [national cloud offerings](/entra/identity-platform/authentication-national-cloud).

For a list of Azure regions that support Managed DevOps Pools, see [Register the Managed DevOps Pools resource provider in your Azure Subscription](./prerequisites.md#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription).

## What permissions do I need in Azure and Azure DevOps to create Managed DevOps Pools?

The **DevOps Infrastructure Contributor** role is the least privileged Azure role that you can use to create and manage Managed DevOps Pools. For more information, see [Verify Azure permissions](./prerequisites.md#verify-azure-permissions).  

Your account must also have the required permissions in your Azure DevOps organization. For details, see [Verify Azure DevOps permissions](./prerequisites.md#verify-azure-devops-permissions).

## How many agents can I create?

For information about the default quota and how to increase the quota for your pool, see [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas).

## What Azure VM SKU should I choose?

For information about choosing the right Azure VM size to meet your workflow needs as well as your budget, see [Manage cost and performance](./manage-costs.md).

## Can I remotely access my agent VMs?

You can't remotely access the VMs that run the Managed DevOps Pools agents.

## How do I get the required quotas for Managed DevOps Pools?

Managed DevOps Pools use a separate Azure resource provider and quota model. To request the required quota for Managed DevOps Pools, in the Azure portal, navigate to **Quotas**, select the **Managed DevOps Pools** resource provider, choose the required VM family, and then submit a quota increase request. For more information, see [Review Managed DevOps Pools quotas](./prerequisites.md#review-managed-devops-pools-quotas).

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

## Pipeline run is canceled during execution with an error similar to:

\#\#[error]Remote machine provider issue: Agent failed with exception:

The machine/process running request xxxx\-xxxx\-xxxx\-xxxx restarted.

Agents can't recover from restarts.

\#\#[warning]Remote machine provider issue:

Received request to deprovision: The request was cancelled by the remote provider.

This issue can occur when the agent VM becomes unavailable during pipeline execution because of resource exhaustion, an operating system restart, network interruptions, or high workload pressure on the agent.

Review the following recommendations:

1. Use an appropriately sized VM SKU for your workload, especially if your pipeline runs resource\-intensive scripts, builds, or tests.
2. Consider splitting large pipelines into multiple smaller pipelines or reducing the number of concurrently running jobs when possible.
3. Move large inline scripts to script files stored in source control to improve maintainability and troubleshooting.
4. Review network capacity and stability, particularly when using a custom virtual network. If multiple pipelines run simultaneously, consider increasing available network resources and engage your networking team if necessary.

If the pipeline runs automated tests, review test parallelization settings. Running tests in parallel on smaller agent VMs can lead to increased CPU, memory, and network consumption. Consider temporarily disabling test parallelization to determine whether it contributes to the issue. For example, MSTest provides options to explicitly enable or disable test parallelization. For more information, see [MSTEST0001: Explicitly enable or disable test parallelization](https://learn.microsoft.com/dotnet/core/testing/mstest-analyzers/mstest0001).

If your pipeline uses the **Download Pipeline Artifact** task, consider reducing the download parallelism. By default, the task can use a high level of parallelism. You can reduce this by setting the AZURE\_PIPELINES\_DEDUP\_PARALLELISM variable in your pipeline:

variables:

  AZURE\_PIPELINES\_DEDUP\_PARALLELISM: 2

Reducing parallelism can help lower CPU, memory, disk, and network utilization on the agent VM during artifact downloads.

## Related content

- [Managed DevOps Pools overview](overview.md)
- [Troubleshoot Managed DevOps Pools issues](troubleshooting.md)
- [All troubleshooting guides & FAQs](../troubleshoot/index.yml)
