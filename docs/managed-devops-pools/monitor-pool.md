---
title: Monitor
description: Learn how to view the health of your Managed DevOps Pools.
ms.date: 10/18/2024
---

# Monitor Managed DevOps Pools

> [!IMPORTANT]
> Managed DevOps Pools is currently in PREVIEW.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.

Managed DevOps Pools provides several options for monitoring your pool instances. The **Overview** page provides predefined metrics charts, and you can configure custom charts on the **Metrics** page. Use these tools to monitor the health of your Managed DevOps Pools instances.

## Available metrics

Managed DevOps Pools provides the following metrics:

| Metric | Unit | [Aggregations](/azure/azure-monitor/essentials/metrics-aggregation-explained) | [Dimensions](/azure/azure-monitor/essentials/analyze-metrics#use-dimension-filters-and-splitting) |
|---|---|---|---|
| **AllocationDurationMS**<br>Average pool request duration | Milliseconds | Average | `Image`, `PoolId`, `ResourceRequestType`, `Type` |
| **Allocated**<br>Number of Azure DevOps Agents with jobs currently running | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **NotReady**<br>Number of Azure DevOps Agents that are not set up for testing | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **PendingReimage**<br>Number of Azure DevOps Agents in the process of being reimaged | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **PendingReturn**<br>Number of Azure DevOps Agents that are post-cleanup, waiting to be deleted (which occur in batches) | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **Provisioned**<br>Number of Azure DevOps Agents currently up | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **Ready**<br>Number of Azure DevOps Agents present that are prepared to accept a job | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **Starting**<br>Number of Azure DevOps Agents being prepared | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **Total**<br>Total number of Azure DevOps Agents | Count | Average, Min, Max | `Images`, `PoolId`, `ProviderName`, `SKU` |
| **Count**<br>Total number of agents provisioned, grouped by status | Count | Count | `ErrorCode`, `FailureStage`, `PoolId`, `RequestType`, `Status`, `Type` |

### Filtering and splitting

Azure Monitor supports filtering and splitting for metrics that have dimensions. Managed DevOps Pools provides the following dimensions. See the previous table to a list of which dimensions apply for a particular metric.

| Dimension | Description |
|-----------|-------------|
| `Image` | Image name |
| `Images` | List of images |
| `PoolId` | Name of Managed DevOps Pool |
| `ProviderName` | CI/CD provider (AzureProvider is currently the only provider) |
| `ResourceRequestType` |  |
| `SKU` | VM size |
| `Type` |  |
| `ErrorCode` | One of the error codes listed in [Error codes](#error-codes) |
| `FailureStage` |  |
| `RequestType` |  |
| `Status` | Agent status |


**Filtering** lets you choose which dimension values are included in the chart. You might want to show successful requests when you chart the **Total number of agents provisions Count** metric. You apply the filter on the **Status** dimension.

**Splitting** controls whether the chart displays separate lines for each value of a dimension or aggregates the values into a single line. Splitting allows you to visualize how different segments of the metric compare with each other. You can see one line for an average **AllocationDurationMS** across all pools, or you can see separate lines for each pool.

For more information, see [Analyze Metrics, Use dimension filters and splitting](/azure/azure-monitor/essentials/analyze-metrics#use-dimension-filters-and-splitting).

## View metrics on the Managed DevOps Pool Overview

The **Overview** page for your Managed DevOps Pool contains the following predefined metrics charts, which can be set to display metrics for the past hour, day, 7 days, or 30 days.

- [Pool Usage](#pool-usage-chart)
- [Pool Provisioning Health](#pool-provisioning-health-chart)
- [Request Durations](#request-durations-chart)
- [Failure Stages](#failure-stages-chart)
- [Error Codes](#error-codes-chart)

You can customize the charts or create your own. For more information, see [Analyze metrics, Create a metric chart](/azure/azure-monitor/essentials/analyze-metrics#create-a-metric-chart).

### Pool Usage chart

The **Pool Usage** chart displays the following metrics.

- Starting: Count of agents starting up and preparing to accept jobs.
- Ready: Count of agents only and ready to accept jobs.
- Allocated: Count of agents currently running jobs.
- NotReady: Count of stateful agents that have completed a job but are not yet ready to accept a new job.
- PendingReimage: Count of agents that have completed a job and are preparing to be reimaged. This status is typical if you have your pool configured for stateless agents with standby agent mode enabled.
- PendingReturn: Number of Azure DevOps Agents that are post-cleanup, waiting to be deleted (which occurs in batches)
- Provisioned: Count of online agents.
- Total: Total number of agents.

### Pool Provisioning Health chart

The **Pool Provisioning Health** chart displays the following metrics.

- Count - Total number of agents provisioned, grouped by status (Completed/Failed)

### Request Durations chart

The **Request Durations** chart displays the following metrics.

- AllocationDurationMS - Average pool request duration

### Failure Stages chart

The **Failure Stages** chart displays the following metrics.

- Count - Total number of agents that failed to provision, grouped by FailureStage

### Error Codes chart

The **Error Codes** chart displays the following metrics.

- Count - Total number of agents that failed to provision, grouped by ErrorCode

For a list of error codes, see the following [Error codes](#error-codes) section.

## Error codes

| Error code | Error message |
|---|---|
| `AzureInternalServerError` | The VM allocation failed due to an internal error. Retry later or try deploying to a different location. |
| `ClusterOutOfCapacity` | Allocation failed. Note that allocation for this subscription is constrained to a set of clusters, which may be out of capacity. To remove the cluster constraint, contact the subscription administrator or Microsoft Support. Read more about improving likelihood of allocation success at `https://aka.ms/allocation-guidance`. |
| `CustomScriptError` | VM reported a failure when processing extension 'customScript' (publisher 'Microsoft.Compute' and type 'CustomScriptExtension'). Error message: 'Finished executing command'. More information on troubleshooting is available at `https://aka.ms/VMExtensionCSEWindowsTroubleshoot`. |
| `DiskProcessingTimeout` | The processing of VM '...' is halted because of one or more disk processing errors encountered by VM '...' in the same Availability Set. Resolve the error with VM '...' before retrying the operation. For more information, refer to `https://aka.ms/activitylog`. |
| `EndpointNotFound` | 404 - There are no listeners connected for the endpoint. TrackingId:00000000-0000-0000-0000-0000000000, SystemTracker:tipresourceprovider.servicebus.windows.net:tipresourceproviderconnection/pools/es_tap_prime_cus_d4ds, Timestamp:2024-02-15T21:15:57 |
| `ExceedingQuota` | Quota exceeded. |
| `FailedToRetrieveUserPassword` | Failed to retrieve user password ... from Key Vault |
| `ForbiddenByFirewall` | Forbidden |
| `HTTPResponseBodyNotAvailable` | HTTP response body isn't available |
| `ImageNotFound` | The image could not be found. Check the image and the version exists |
| `ImageRemovedFromPool` | The given key  was not present in the dictionary |
| `ImageThrottling` | Too many simultaneous copy requests from a snapshot or image resource. Retry later. |
| `InstallationOfWindowsUndeployable` | OS provisioning for VM  failed. Error details: This installation of Windows is undeployable. Make sure the image is properly prepared (generalized). Instructions for Windows: `https://azure.microsoft.com/documentation/articles/virtual-machines-windows-upload-image/` |
| `InsufficientCapacity` | Allocation failed. We do not have sufficient capacity for the requested VM size in this region. Read more about improving likelihood of allocation success at `https://aka.ms/allocation-guidance` |
| `InvalidSubnetDelegation` | Subnet `/subscriptions/{subscriptionId}/resourceGroups/{rgName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}` referenced by `/subscriptions/{subscriptionId}/resourceGroups/{rgName}/providers/Microsoft.Compute/virtualMachineScaleSets/{}/updateGroups/version1/networkInterfaceConfigurations/nic/ipConfigurations/ipconfig` can't be used because it contains external resources. |
| `NetworkProfileProcessingTimeout` | An unexpected error occurred while processing the network profile of the VM. Retry later. |
| `ProvisioningTimeOut` | Resource `subscriptions/{subscriptionId}/resourceGroups/{rgName}/providers/Microsoft.Network/networkInterfaces/providers/Microsoft.Compute/virtualMachineScaleSets/{}/virtualMachines/networkInterfaces/nic` not found. OS Provisioning for VM  did not finish in the allotted time. The VM may still finish provisioning successfully. Check provisioning state later. Also, make sure the image has been properly prepared (generalized). Instructions for Windows: `https://azure.microsoft.com/documentation/articles/virtual-machines-windows-upload-image/` Instructions for Linux: `https://azure.microsoft.com/documentation/articles/virtual-machines-linux-capture-image/` If you are deploying more than 20 Virtual Machines concurrently, consider moving your custom image to shared image gallery. Refer to `https://aka.ms/movetosig` for the same. |
| `RemoteNameCantBeResolved` |  |
| `ResourceGroupBeingDeleted` | The resource group ... is in deprovisioning state and can't perform this operation. |
| `SecretDisabled` | Operation get isn't allowed on a disabled secret. Status: 403 (Forbidden) ErrorCode: Forbidden |
| `ServiceUnavailable` | The service is unavailable now. Retry the request later. |
| `SkuNotAvailable` | The requested VM size for resource 'Following SKUs failed for Capacity Restrictions:' is currently not available in location. Try another size or deploy to a different location or different zone. See `https://aka.ms/azureskunotavailable` for details. |
| `TaskCanceled` | The request was canceled due to the configured HttpClient.Timeout of 100 seconds elapsing. |
| VirtualNetworkIsNotFound | The Virtual Network might be deleted. |

## See also

- [Azure Monitor documentation](/azure/azure-monitor/)
- [Azure Monitor overview](/azure/azure-monitor/overview)
- [Analyze and visualize monitoring data](/azure/azure-monitor/best-practices-analysis)
