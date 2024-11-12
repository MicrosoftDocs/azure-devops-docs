---
title: Diagnostic logs
description: Learn how to troubleshoot using diagnostic logs.
ms.date: 10/18/2024
---

# Diagnostics logs

> [!IMPORTANT]
> Managed DevOps Pools is currently in PREVIEW.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.

Diagnostic settings in Azure are used to collect resource logs. An Azure resource emits resource logs and provides rich, frequent data about the operation of that resource. These logs are captured per request and are also referred to as "data plane logs". See [Diagnostic settings in Azure Monitor](/azure/azure-monitor/essentials/diagnostic-settings) for a recommended overview of the functionality in Azure. The content of these logs varies by resource type. In Managed DevOps Pools, two options are available to log:

- **Managed DevOps Pools Metrics** (**AllMetrics**) used to [log metrics from Azure Monitor](/azure/azure-monitor/essentials/diagnostic-settings)
  - Choose from the [same metrics](./monitor-pool.md#available-metrics) you use in the **Monitoring** > **Metrics** tab.
- **Resource Provisioning Logs** logs provisioning events for the agents in your pool. 
  - These are the same events you can view in the [Agents](./view-agents.md) view. 

## Create diagnostic setting

1. To create a new diagnostic setting, choose **Monitoring** > **Diagnostic settings**, and choose **+Add diagnostic setting**.

   :::image type="content" source="./media/diagnostics/add-diagnostic-setting.png" alt-text="Screenshot of add diagnostic setting menu.":::

2. Choose the type of log to capture, and one or more options from **Destination details**, and choose **Save**.

   :::image type="content" source="./media/diagnostics/diagnostics.png" alt-text="Screenshot of diagnostics settings.":::

3. Run jobs in your pool, and then review the collected data. For information on analyzing diagnostic log data, see [Analyze and visualize monitoring data](/azure/azure-monitor/best-practices-analysis). The diagnostic data contains log entries similar to the following example.

   ```json
    {
        "time": "2024-07-15T17:23:42.0302794Z",
        "resourceId": "/SUBSCRIPTIONS/SUBSCRIPTION_ID_PLACEHOLDER/RESOURCEGROUPS/FABRIKAM-POOLS/PROVIDERS/MICROSOFT.DEVOPSINFRASTRUCTURE/POOLS/FABRIKAM_POOL",
        "location": "eastus",
        "category": "ProvisioningLogs",
        "operationName": "Provision",
        "properties": {
            "RequestId": "RequestId_Placeholder",
            "AgentName": "7ec0d355c",
            "Image": "/canonical/0001-com-ubuntu-server-focal/20_04-lts-gen2/20.04.202407040",
            "Sku": "Standard_D2ads_v5",
            "Status": "Completed"
        }
    }
   ```
## See also

* [Analyze and visualize monitoring data](/azure/azure-monitor/best-practices-analysis)
* For more information about diagnostic settings and the different destinations for logs, see [Diagnostic settings in Azure Monitor](/azure/azure-monitor/essentials/diagnostic-settings).

