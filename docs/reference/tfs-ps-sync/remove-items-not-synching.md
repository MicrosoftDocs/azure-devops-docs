---
title: Delete tasks and remove work items not synchronizing
titleSuffix: TFS
description: Remove work items that aren't synchronizing between Team Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile 
ms.assetid: 18f3e8d1-12ae-4cc6-a95b-357450a9ba81
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013 <= tfs-2015'
ms.date: 01/12/2017
---

# Delete tasks and remove work items that are no longer participating in synchronization

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

When you delete a task from Microsoft Project Professional that has been synchronized with a work item in Team Foundation, you remove the association between the task and the work item. This removal occurs after you publish the plan to Microsoft Project Server and the synchronization process completes to update the changes. However, the synchronization process does not delete the corresponding work item from the project. Work items remain stored in the database for Team Foundation. Team members can set the state of the work item to Closed.  
  
 If you want to completely remove from Team Foundation work items whose tasks have been deleted from Project, you can use the **witadmin destroywi** command. For more information, see [Remove work items permanently](../../boards/backlogs/remove-delete-work-items.md).  
  
 To permanently remove work items, you must first determine the work item IDs that are assigned to each item. You can create a query that finds these items. To find items that are no longer synchronized with Project Server, you can create the query in the following table. This query finds all work items for which the **Linked to Project Server** field is set to **No** but that used to be set to **Yes**. The query does not find items that have not changed in the last 60 days.  
  
|And/Or|Field|Operator|Value|  
|-------------|-----------|--------------|-----------|  
||**Team Project**|**=**|**@Project**|  
|**And**|**Project Server Is Linked**|**=**|**No**|  
|**And**|**Project Server Is Linked**|**Was Ever**|**Yes**|  
|**And**|**Changed Date**|**>=**|**@Today - 60**|  
  
## Related articles  
 [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md)   
 [Manage projects](manage-projects.md)