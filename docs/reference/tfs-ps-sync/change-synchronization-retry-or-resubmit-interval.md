---
title: Change the synchronization retry or resubmit interval
titleSuffix: TFS 
description: Understand how a conflict or failed synchronization occurs when using Team Foundation Server & Project Server integration
ms.prod: devops
ms.technology: devops-agile 
ms.assetid: ce1d4951-e460-43d3-8852-a0f170012142
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---

# Change the synchronization retry or resubmit interval

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

When a conflict or failed submission occurs during the synchronization process, the most recent submit status for a work item is set to **Failed**. The synchronization engine automatically tries to resubmit the work item in case the issue has been resolved. By default, the retry or resubmit interval is one hour, and you can set it in the Team Foundation Server registry.  
  
 You can change the resubmit interval for a project collection by modifying the value in the collection hive using Powershell. You use the following path to specify the configuration setting:  
  
```powershell
$collectionHive.SetValue("/Configuration/ProjectServer/StatusingResubmitInterval", "IntervalValue")  
```  
  
 You replace *IntervalValue* with the resubmit interval expressed in seconds. For example, you specify 600 to define a resubmit interval of 10 minutes.  
  
> [!NOTE]
>  If you specify a resubmit interval value of 0, you disable resubmissions.  
  
## Related articles  
 [Synchronization process overview](synchronization-process-overview.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)