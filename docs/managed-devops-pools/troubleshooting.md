---
title: Troubleshoot Managed DevOps Pools issues
description: Learn how to troubleshoot common issues with Managed DevOps Pools.
ms.topic: how-to
ms.date: 05/21/2025
---

# Troubleshoot Managed DevOps Pools issues

This article provides solutions to common Managed DevOps Pools issues.

## Pool creation errors

| Error code | Description |
|-------|------------------|
| `PoolProvisioningFailed` | [Pool creation failure due to Azure DevOps organization permissions](#pool-creation-failure-due-to-azure-devops-organization-permissions) |
| `UnauthorizedAccessToVirtualNetwork` | [Pool creation failure due to VNet permissions](#pool-creation-failure-due-to-vnet-permissions) |

### Pool creation failure due to Azure DevOps organization permissions

Pool creation fails with an error similar to one the following error messages.

#### The logged in user was not found in the Azure DevOps organization

* `Validation failure "PoolProvisioningFailed": "Failed to provision agent pool. Exception: The logged in user, <your user>, was not found in the Azure DevOps organization provided, <your Azure DevOps organization>."`

To resolve the issue:
* Your Azure DevOps organization must be connected to Microsoft Entra ID and your logged in Azure user must be a member (and not a guest) of this tenant. See [Managed DevOps Pools prerequisites - Connect your Azure DevOps organization to Microsoft Entra ID and verify membership](./prerequisites.md#connect-your-azure-devops-organization-to-microsoft-entra-id-and-verify-membership).

#### The logged in user does not have Manage permissions in the Azure DevOps organization

* `Validation failure "PoolProvisioningFailed": "Failed to provision agent pool. Exception: The logged in user, <your user>, does not have Manage permissions in the Azure DevOps organization provided, <your Azure DevOps organization>."`

To resolve the issue:
* Your logged in Azure user must have the proper Azure DevOps permissions to create a pool. See [Azure DevOps prerequisites - Verify Azure DevOps permissions](./prerequisites.md#verify-azure-devops-permissions).

### Pool creation failure due to VNet permissions

Pool creation fails with a `UnauthorizedAccessToVirtualNetwork` error similar to the following error: `Validation failure "UnauthorizedAccessToVirtualNetwork": "DevOpsInfrastructure service principal does not have Read access to virtual network <your VNet> in resource group <your resource group>. Give Reader and Network Contributor access to DevOpsInfrastructure service principal and try again.`.

To resolve this issue:
* Managed DevOps Pools requires access to your virtual network. See [Grant Reader and Network Contributor access to DevOpsInfrastructure service principal](./configure-networking.md#grant-reader-and-network-contributor-access-to-devopsinfrastructure-service-principal).
* The virtual network subnet needs to be delegated to `Microsoft.DevOpsInfrastructure/pools`. See [Delegate the subnet to Microsoft.DevOpsInfrastructure/pools](./configure-networking.md#delegate-the-subnet-to-microsoftdevopsinfrastructurepools).

## Delays in pipeline startup

When using Managed DevOps Pools, you might encounter situations where there is a long delay before a pipeline starts to run after it is triggered. This section of the troubleshooting guide describes common items that can impact the performance of your pools. For more information, see [Manage cost and performance](./manage-costs.md).

* [Check for insufficient parallel jobs](#check-for-insufficient-parallel-jobs)
* [Check Maximum agents configuration](#check-maximum-agents-configuration)
* [Consider pre-provisioning agents using a standby agent schedule](#consider-pre-provisioning-agents-using-a-standby-agent-schedule)
  * [Automatic standby mode for new pools](#automatic-standby-mode-for-new-pools)
  * [Check standby agent percentage if using standby agents with multiple images](#check-standby-agent-percentage-if-using-standby-agents-with-multiple-images)
* [Consider using Stateful pools with a grace period to keep agents online](#consider-using-stateful-pools-with-a-grace-period-to-keep-agents-online)
* [Check time-out error codes](#check-time-out-error-codes)

### Check for insufficient parallel jobs

Managed DevOps Pools agents are considered to be self-hosted agents by Azure DevOps, and require self-hosted parallel jobs to run. For example, if your organization's self-hosted parallel count is 10, your organization can run only 10 self-hosted pipeline jobs concurrently. If more than 10 pipelines are queued, only 10 at a time can run.

Check your self-hosted parallel jobs count to ensure that you have enough capacity to meet the concurrent pipeline needs of your workload. For more information, see [Configure and pay for parallel jobs](../pipelines/licensing/concurrent-jobs.md).

### Check Maximum agents configuration

The [Maximum agents](./configure-pool-settings.md#maximum-agents) setting configures the maximum count of running agents in your Managed DevOps Pool. If the **Maximum agents** setting is 5, Managed DevOps Pools can run a maximum of five concurrent pipelines. If more than five pipelines are queued, the additional pipelines won't start until one of the five available agents is available.

> [!NOTE]
> **Maximum agents** configures the maximum number of agents that can be provisioned at the same time, but your organization's self-hosted parallel jobs count specifies the number of jobs that can run concurrently. Ensure that you have enough self-hosted parallel jobs available in your organization to enable your agents to run jobs. For more information, see [Azure DevOps Services parallel job pricing](./pricing.md#azure-devops-services-parallel-job-pricing).

### Consider pre-provisioning agents using a standby agent schedule

If [Standby agent mode](./configure-scaling.md#standby-agent-mode) is disabled, Managed DevOps Pools agents are started on demand when a pipeline is queued, and while typically a fresh agent takes only a few moments to start, sometimes it can take up to 15 minutes.

When **Standby agent mode** is enabled, you can specify a schedule and a count of agents to keep ready to meet the demands of your workload.

For more information, see [Manage cost and performance - Pre-provisioning with standby agents](./manage-costs.md#pre-provisioning-with-standby-agents).

#### Automatic standby mode for new pools

Manage DevOps Pools uses historical pool usage data to help make its [automatic standby mode](./configure-scaling.md#automatic) scaling predictions. New pools don't have any historical data, so agents might be created on demand. To improve performance, you can switch to manual standby mode for the first month, and switch to automatic standby mode once Managed DevOps Pools has had time to observe your pool's usage.

#### Check standby agent percentage if using standby agents with multiple images

If you use standby agents with multiple images, check the history of usage per image and compare it with the [Standby agent percentage](./configure-scaling.md#manual) setting of your images to ensure your standby ratio matches your usage. For example, if you have one Windows image and one Ubuntu image, and your workload uses Windows 75% of the time, ensure your Windows image is configured with a standby agent percentage of 75.

### Consider using Stateful pools with a grace period to keep agents online

One option to improve agent performance without using standby agents is to use stateful agents with a short grace period. When a stateful agent with a grace period completes a job, it stays online for the duration specified by the grace period and waits for additional jobs. If your workload comes in bursts, you can configure a grace period that keeps agents online when jobs are steady, and starts them from scratch during slower periods.

For more information, see [Standby agents](configure-scaling.md#standby-agent-mode) and [Stateful pools](configure-scaling.md#stateful-pools).

### Check time-out error codes

If your agent assignment times out, you can check the error code on the [Error codes](./monitor-pool.md#error-codes-chart) section of the [Overview](./monitor-pool.md#view-metrics-on-the-managed-devops-pool-overview) page.

## Pipeline fails to successfully complete

### Check to see if there has been an image update

If your pipelines begin to fail after an image update, you can temporarily configure your pipelines to use the previous image version. You can configure your failing pipelines to use the previous image version on a per-pipeline basis, or you can configure the previous image version for all pipelines in your Managed DevOps Pool that use that image.

To see whether your pipelines are failing due to an image version change, compare the image version on a failed pipeline run with the image version from the last successful pipeline run.

1. [Go to your pipeline](../pipelines/create-first-pipeline.md#view-and-manage-your-pipelines) and review the [pipeline run history](../pipelines/create-first-pipeline.md#view-pipeline-details) for your pipeline.

   :::image type="content" source="./media/troubleshooting/view-pipeline-runs-compare-image-versions.png" alt-text="Screenshot of pipeline runs.":::

1. [View the run details](../pipelines/create-first-pipeline.md#view-pipeline-run-details) for the two pipeline runs you want to compare, and choose the pipeline job to view diagnostic information abut that job. If your pipeline has multiple jobs, choose the job that runs using your Managed DevOps Pool.

   :::image type="content" source="./media/troubleshooting/view-pipeline-run-job-details.png" alt-text="Screenshot of pipeline run details.":::

1. Choose **Initialize job**, and retrieve the image version from the **Current image version** section.

   :::image type="content" source="./media/troubleshooting/view-pipeline-run-image-version.png" alt-text="Screenshot of pipeline run image version.":::

If the image versions are different between the recent failed pipeline run and the previous successful run, the failure may be caused by an image update. You have two choices to temporarily revert to the previous image version while you troubleshoot the root cause.
* To run only the failing pipeline using the previous image version, add an `ImageVersionOverride` demand to your pipeline to specify the previous version. For more information, see [ImageVersionOverride](./demands.md#imageversionoverride).
* To update the pool settings so that all pipelines using the image run using the previous version, update your [Image settings](./configure-images.md) and specify the desired version.
   * If you're using [Azure Pipelines images](./configure-images.md#azure-pipelines-images), you must use [ARM templates](./configure-images.md?tabs=arm#azure-pipelines-images) or [Azure CLI](./configure-images.md?tabs=azure-cli#azure-pipelines-images) to specify the version, since Azure Pipelines images configured using the [Azure portal](./configure-images.md?tabs=azure-portal#azure-pipelines-images) always uses the latest version.
   * If you're using [Selected marketplace images](./configure-images.md#selected-marketplace-images) or [Azure Compute Gallery images](./configure-images.md#azure-compute-gallery-images), you can specify the version using the Azure portal as well as ARM templates and Azure CLI.

Managed DevOps Pools keeps the past 20 images available for Selected marketplace images and the past 10 images available for Azure Pipelines images. Past versions of Azure Compute Gallery images are maintained by the owners of those Azure Compute Galleries.

## See also

* [Managed DevOps Pools prerequisites](./prerequisites.md)
* [Configure Managed DevOps Pools networking](./configure-networking.md)
* [Manage cost and performance](./manage-costs.md)
