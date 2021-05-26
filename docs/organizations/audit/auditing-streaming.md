---
title: Create audit streaming for Azure DevOps
titleSuffix: Azure DevOps 
description: Get started sending your audit data to other locations for further processing for Azure DevOps, by creating and enabling a stream.  
ms.technology: devops-audit
ms.assetid: 
ms.author: chcomley
author: roferg
ms.topic: quickstart
monikerRange: 'azure-devops'
ms.date: 11/03/2020
---

# Create audit streaming

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

> [!Note]
> Audit streaming is currently in a Public Preview.

Learn how to create an [audit](azure-devops-auditing.md) stream, which sends data to other locations for further processing. Sending auditing data to other Security Incident and Event Management (SIEM) tools opens possibilities, such as alerting on specific auditing events, creating views on auditing data, and performing anomaly detection. It also allows you to store more than the 90-days worth of auditing data, which Azure DevOps keeps.

Audit streams represent a pipeline that flows audit events from your Azure DevOps organization to a stream target. Every half hour or less, new audit events are bundled and streamed to your targets. Currently, the following stream targets are available for configuration:

- [Splunk](#set-up-a-splunk-stream) – Connect to on-premises or cloud-based Splunk.
- [Azure Monitor Log](#set-up-an-azure-monitor-log-stream) - Send auditing logs to [Azure Monitor Logs](/azure/azure-monitor/platform/data-platform-logs). Logs stored in Azure Monitor Logs can be queried and have alerts configured. Look for the table named AzureDevOpsAuditing. You can also connect [Azure Sentinel](https://aka.ms/adostreamingazuresentinel) to your workspace. 
- [Azure Event Grid](#set-up-an-event-grid-stream) – For scenarios where you want your auditing logs to be sent somewhere else, whether inside or outside of Azure, you can set up an [Azure Event Grid]() connection. 

## Prerequisites

By default, Project Collection Administrators (PCAs) are the only group that have access to the auditing feature. 

You must have the following permissions:

- Manage audit streams
- View audit log
  
  :::image type="content" source="media/auditing-streaming/auditing-permissions.png" alt-text="Set audit permissions to Allow":::

These permissions can be given to any other users or groups you wish to have manage your organization's streams. There's also a *Delete audit streams* permission.

## Create a stream

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
 
   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Auditing**.

   ![Select Auditing in Organization settings](media/auditing-streaming/select-auditing-organization-settings.png)

   If you don't see *Auditing* in Organization settings, then you don't have access to view audit events. Outside of the Project Collection Administrators group, you can give permissions to other users and groups, so they can view auditing.

4. Go to the **Streams** tab, and then select **New stream**. 

   :::image type="content" source="media/auditing-streaming/create-new-auditing-stream.png" alt-text="Select New stream to create your new auditing stream":::

5. Select the stream target that you want to configure, and then select from the following instructions to set up your stream target type.

   - [Splunk](#set-up-a-splunk-stream)
   - [Event Grid](#set-up-an-event-grid-stream)
   - [Azure Monitor Log](#set-up-an-azure-monitor-log-stream)

> [!NOTE]
> At this time, you can only have 2 streams for each target type.

   :::image type="content" source="media/auditing-streaming/create-stream-dialog.png" alt-text="Create your stream dialog pop out":::

### Set up a Splunk stream

Streams send data to Splunk via the HTTP Event Collector endpoint. 

1. Enable this feature in Splunk. For more information, see this [Splunk documentation](https://aka.ms/adostreamingsplunkdocumentation). 
   
   Once it's enabled, you should have an HTTP Event Collector token and the URL to your Splunk instance. You need both the token and URL to create a Splunk stream.

   > [!NOTE]
   > When you're creating a new Event Collector token in Splunk, don't check “Enable indexer acknowledgement”. If it's checked, then no events flow into Splunk. You can edit the token in Splunk to remove that setting. 

2. Enter your Splunk URL, which is the pointer to your Splunk instance. Ensure that you include “input-” at the start of your Splunk URL. So, if your Splunk URL was `https://prd-p-2k3mp2xhznbs.cloud.splunk.come:8088`, enter `https://input-prd-p-2v3mp2xhznbs.cloud.splunk.com:8088`.  
3. Enter the event collector token you created into the token field. The token is stored securely within Azure DevOps and never displayed again in the UI. We recommend rotating the token regularly, which you can do by getting a new token from Splunk and editing the stream.

   :::image type="content" source="media/auditing-streaming/create-stream-splunk.png" alt-text="Enter topic endpoint and access key that you noted earlier":::

4. Select **Set up** and your stream's configured. 
   
Events begin to arrive on Splunk within half an hour or less. 

### Set up an Event Grid stream

1. Create an Event Grid Topic on Azure. 
2. Make note of the “Topic Endpoint” and one of the two “Access Keys”. Use this information to create the Event Grid connection.

   :::image type="content" source="media/auditing-streaming/azure-event-grid.png" alt-text="Azure Event Grid information":::

3. Enter the topic endpoint and one of the access keys. The access key is stored securely within Azure DevOps and never displayed again in the UI. Rotate the access key regularly, which you can do by getting a new key from Azure Event Grid and editing the stream

   :::image type="content" source="media/auditing-streaming/create-stream-azure-event-grid.png" alt-text="Enter workspace ID and primary key to create":::

Once you have your Event Grid stream configured, you can set up subscriptions on the Event Grid to send the data almost anywhere in Azure. 

### Set up an Azure Monitor Log stream

1. Create a [Log Analytics workspace](/azure/azure-monitor/learn/quick-create-workspace).
2. Open the workspace and select **Agents management**.
3. Make note of the workspace ID and primary key.

   :::image type="content" source="media/auditing-streaming/azure-monitor-log-keys.png" alt-text="Make note of workspace ID and primary key":::

5. Set up your Azure Monitor log stream by proceeding through the same initial steps to create a stream.
6. For target options, select **Azure Monitor Logs**. 

7. Enter the workspace ID and primary key, and then select **Set up**. The primary key is stored securely within Azure DevOps and never displayed again in the UI. Rotate the key regularly, which you can do by getting a new key from Azure Monitor Log and editing the stream.

   :::image type="content" source="media/auditing-streaming/create-stream-azure-monitor-logs.png" alt-text="Enter workspace ID and primary key and then select Set up.":::

The stream is enabled and new events begin to flow within half an hour or less. You can reference the AzureDevOpsAuditing table.

> [!NOTE]
> The default retention time for Azure Monitor Logs is 30 days only. You can configure and chose longer retention by selecting **Data Retention** under **Usage and estimated costs** in your workspace settings. This incurs additional charges. Check the [documentation](/azure/azure-monitor/platform/manage-cost-storage#change-the-data-retention-period) to manage usage and costs with Azure Monitor Logs for more details.

## Edit a stream

Details about your stream target can change over time. To reflect these changes in your streams, you can edit them. To edit a stream, make sure you have the “Manage audit streams” permission.

1. Next to the stream that you want to edit, select the vertical three dots on the far right, and then select **Edit stream**. 

   :::image type="content" source="media/auditing-streaming/edit-audit-stream.png" alt-text="Select Edit stream":::

2. Select **Save**.  

Parameters available for editing differ per stream type. 

## Disable a stream
 
1. Next to the stream that you want to disable, move the **Enabled** toggle from *On* to *Off*.  
   When streams encounter a failure, they may become disabled. You can get details on the failure from the status shown next to the stream, or by selecting **Edit stream**. You can also disable a stream manually, and then re-enable it later. 

   :::image type="content" source="media/auditing-streaming/disable-stream-move-toggle-off.png" alt-text="Move toggle to Off to disable stream":::

2. Select **Save**.

You can re-enable a disabled stream. It catches up on any audit events that were missed for up to the previous seven days. That way you don’t miss any events from the duration that the stream was disabled. 

> [!NOTE]
> If a stream is disabled for more than 7 days, events older than 7 days aren't included in the catch up. 

## Delete a stream

To delete a stream, make sure you have the Delete Audit Streams permission. 

> [!IMPORTANT]
> Once you delete a stream you can’t get it back.

1. Hover over the stream you want to delete and select the vertical three dots on the far right. 
2. Select **Delete stream**.

   :::image type="content" source="media/auditing-streaming/delete-audit-stream.png" alt-text="Select Delete stream and it's removed":::  

3. Select **Confirm**.

Your stream gets removed. Any events that haven’t been sent before the deletion aren't sent.

## Related articles

- [Azure DevOps Auditing](azure-devops-auditing.md)
