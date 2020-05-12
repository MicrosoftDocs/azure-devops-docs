---
title: Create audit stream for Azure DevOps
titleSuffix: Azure DevOps 
description: Get started sending your audit data to other locations for further processing for Azure DevOps, by creating and enabling a stream.  
ms.technology: devops-audit
ms.topic: conceptual
ms.assetid: 
ms.author: chcomley
author: roferg
ms.topic: quickstart
monikerRange: 'azure-devops'
ms.date: 05/12/2020
---

# Create auditing streaming

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

> [!Note]
> Auditing streaming is currently in a Public Preview.

In this article, learn how to create an [auditing](azure-devops-auditing.md) stream, which sends data to other locations for further processing. Sending auditing data to other Security Incident and Event Management (SIEM) tools opens possibilities, such as alerting on specific audit events, creating views on audit data, and performing anomaly detection. It also allows you to store more than the 90-days worth of auditing data, which Azure DevOps keeps. <!--- keeps it for how long? -->

Auditing streams represent a pipeline that flows audit events from your Azure DevOps organization to a stream target. Every 5 minutes, new audit events are bundled and streamed to your targets. Currently, the following stream targets are available for configuration:
- [Splunk](#set-up-a-splunk-stream) – Connect to on-premises or cloud-based Splunk.
- [Azure Monitor Log](#set-up-an-azure-monitor-log-stream) - Send auditing logs to [Azure Monitor Logs](https://aka.ms/adostreammonitorlog). Logs stored in Azure Monitor Logs can be queried and have alerts configured. You can also connect [Azure Sentinel](https://aka.ms/adostreamingazuresentinel) to your workspace. 
- [Azure Event Grid](#set-up-an-event-grid-stream) – For scenarios where you want your auditing logs to be sent locations streaming doesn’t support natively in Azure or outside of it, you can setup an [Azure Event Grid](https://aka.ms/adostreamingeventgrid) connection. 

## Prerequisites

By default, Project Collection Administrators (PCAs) are the only group that have access to the auditing feature. 

You must be a PCA, which has the following permissions, by default, or you must have *View audit log* permission.

- Manage audit streams
- View audit log
  
  :::image type="content" source="media/auditing-streaming/auditing-permissions.png" alt-text="Set auditing permissions to Allow":::

These permissions can be given to any other users or groups you wish to have manage your organization's streams. There's also a *Delete audit streams* permission.
Once the proper entities have access to manage streams, you can do so by selecting the **Streams** tab on the auditing page. 

   :::image type="content" source="media/auditing-streaming/auditing-streams-access.png" alt-text="Select the Streams tab for auditing streams":::

You see current auditing streams, Where you can create or disable a stream. You can also get insights into the status of your stream(s). 

   :::image type="content" source="media/auditing-streaming/stream-view.png" alt-text="See current auditing streams":::

## Create a stream

1. Go to the **Streams** tab on the Azure DevOps Auditing page.
2. Select **New stream**.

   :::image type="content" source="media/auditing-streaming/create-new-auditing-stream.png" alt-text="Select New stream to create your new auditing stream":::

3. Select the stream target that you want to configure, and then select from the following instructions to set up your stream target type.

   - [Splunk](#set-up-a-splunk-stream)
   - [Event Grid](#set-up-an-event-grid-stream)
   - [Azure Monitor Log](#set-up-an-azure-monitor-log-stream)

> [!NOTE]
> At this time, you can only have 2 streams for each target type.

   :::image type="content" source="media/auditing-streaming/create-stream-dialog.png" alt-text="Create your stream dialog pop out":::

### Set up a Splunk stream

Streams send data to Splunk via the HTTP Event Collector endpoint. 

1. Enable this feature in Splunk. For more information, see this [Splunk documentation](https://aka.ms/adostreamingsplunkdocumentation). 
   Once it's enabled, you should have an HTTP Event Collector token and the URL to your Splunk instance. You need both of these pieces of information to create a Splunk stream.

   :::image type="content" source="media/auditing-streaming/create-stream-splunk.png" alt-text="Enter topic endpoint and access key that you noted earlier":::

> [!NOTE]
> When you're creating a new Event Collector token in Splunk, don't check “Enable indexer acknowledgement”. If it's checked, then no events flow into Splunk. You can edit the token in Splunk to remove that setting. 
   After selecting Splunk as your target, you see the following options.

   

2. Your Splunk URL is the pointer to your Splunk instance. Ensure that you include “input-” at the start of your Splunk URL. So, if your Splunk URL was “https://prd-p-2k3mp2xhznbs.cloud.splunk.com:8088" then enter https://input-prd-p-2v3mp2xhznbs.cloud.splunk.com:8088. 
3. Place the event collector token you created in the token field. 
4. Select **Set up** and your stream's configured. 
   
Events begin to arrive on Splunk within 5 minutes. 

### Set up an Event Grid stream

1. Create an Event Grid Topic on Azure. 
2. Make note of the “Topic Endpoint” and one of the two “Access Keys”. Use this information to create the Event Grid connection.

   :::image type="content" source="media/auditing-streaming/azure-event-grid.png" alt-text="Azure Event Grid information":::

3. Enter the topic endpoint and one of the access keys.  

  

Once you have your Event Grid stream configured you can set up subscriptions on the Event Grid to send the data almost anywhere in Azure. 

### Set up an Azure Monitor Log stream

1. Create a [Log Analytics workspace](https://aka.ms/adostreamingcreateloganalytics).
2. Open the workspace and select **Advanced settings**.
3. Select **Connected Sources** > **Windows Server**. 
4. Take note of the workspace ID and primary key.

   :::image type="content" source="media/auditing-streaming/azure-monitor-log-keys.png" alt-text="Make note of workspace ID and primary key":::

5. Set up your Azure Monitor log stream by proceeding through the same initial steps to [create a stream](#create-a-stream).
6. For target options, select **Azure Monitor Logs**. 

7. Enter the workspace ID and primary key, and then select **Set up**. 

   :::image type="content" source="media/auditing-streaming/create-stream-azure-monitor-logs.png" alt-text="Enter workspace ID and primary key to create":::

The stream is enabled and new events begin to flow within minutes. 

## Disable a stream
 
1. Next to the stream that you want to disable, move the **Enabled** toggle from *On* to *Off*.  
   You can get details on the failure from the status and by selecting **Edit stream**.

   :::image type="content" source="media/auditing-streaming/edit-audit-stream.png" alt-text="Select Edit stream":::

2. Select **Save**.

You can re-enable a stream in which the stream gets caught up on any audit events that have been missed - for up to the last seven days. That way you don’t miss out on any events from the duration that the stream was disabled. 

> [!NOTE]
> If a stream is off for more than 7 days, events older than 7 days aren't included in the catch up. 

Parameters available for editing differ per stream type. 

## Delete a stream

To delete a stream, make sure you have the Delete Audit Streams permission. 

1. Hover over the stream you want to delete and select the vertical three dots on the far right. 
2. Select **Delete stream**.

   :::image type="content" source="media/auditing-streaming/delete-audit-stream.png" alt-text="Select Delete stream and it's removed":::  

   > [!IMPORTANT]
   > Once you delete a stream you can’t get it back.

3. Select **Confirm**.

Your stream gets removed. Any events that haven’t been sent before the deletion aren't sent.

## Related articles

- [Azure DevOps Auditing](azure-devops-auditing.md)

