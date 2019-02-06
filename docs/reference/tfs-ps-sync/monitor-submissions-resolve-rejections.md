---
title: Monitor work item submissions and resolve rejections
titleSuffix: TFS
description: Monitor the status of work items submitted to Project Server for participation in data synchronization with Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 13d38542-a0e8-411b-80ac-e8bb2b5c5f61
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Monitor work item submissions and resolve rejections

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> As a team lead, you may want to create several work item queries to monitor the status of work items that were submitted to Microsoft Project Server for participation in data synchronization. You can use the queries that are described in this topic to list blocked or rejected work items and then perform the corrective actions to resolve the blocks and rejections.  
  
 In addition to the work item fields that appear on the **Project Server** tab for a work item, you can use several more to find work items.    
  
 **Required Permissions**  
  
 To perform these procedures, you must be a member of the **Readers** group or your **View work items in this node** permission must be set to **Allow**. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path).  
  
##  <a name="FindBlockedWIs"></a> Find and Resolve Work Items That Are Blocked from Being Submitted to Project Server  
 To find work items that were previously submitted to Project Server but are now blocked, you can create the following query. This query finds all work items for which the **Project Server Last Submit Status** field is set to **Failure**. You can filter the list by **Area** or **Iteration**.  
  
|And/Or|Field|Operator|Value|  
|-------------|-----------|--------------|-----------|  
||**Team Project**|**=**|**@Project**|  
|**And**|**Project Server Last Submit Status**|**=**|**Failure**|  
  
 To resolve the failure condition, review the history of the failed work items to determine the specific error that is keeping them from being submitted. Correct the error, and save the work item. During the next synchronization interval, the corrected work items should be submitted. You can verify that they have been submitted by waiting a few moments and running the query again.  

##  <a name="FindRejectedWIs"></a> Find Submitted Work Items That the Project Manager Rejected  
 To find work items that the project manager rejected, you can create the following query. This query finds all work items for which the **Project Server Last Review Status** field is set to **Rejected**. You can filter the list by **Area** or **Iteration**.  
  
|And/Or|Field|Operator|Value|  
|-------------|-----------|--------------|-----------|  
||**Team Project**|**=**|**@Project**|  
|**And**|**Project Server Last Review Status**|**=**|**Rejected**|  
  
 To resolve the rejected status, review the history of the rejected work items to see the comments that the project manager used to outline the reason for rejection. To resubmit the work item with changes, perform the following sequence of steps:  
  
1.  Update the work item to address the project manager's comments.  
  
2.  On the **Project Server** tab, change **Submit to Project Server** to **Yes** for the appropriate enterprise project plan.  
  
3.  If the project is mapped to more than one project plan, in **Enterprise Project**, click the plan that corresponds to the project manager's comments.  
  
4.  Save the work item.  
  
 You can verify that an individual work item was successfully submitted by viewing its **History** or by verifying that the **Project Server Last Submitted Date** field has been updated or is more recent than the **Last Approval Date** since a previous rejection.    
  
##  <a name="FindDiffWorkWIs"></a> Find Work Items Where the Work in Team Foundation Differs from that in Project Server  
 To find work items that contain work values that differ from those in Project Server, you can create the following query. This query finds all work items whose **Completed Work** does not equal **Project Completed Work** or whose **Remaining Work** does not equal **Project Remaining Work**. You must group each **And** clause with the **Or** clause that follows it. The last two clauses filter the work items that contain empty or zero values for work.  
  
> [!TIP]
>  To find work items that contain a null or empty string, leave the **Value** field empty.  
  
|And/Or|Field|Operator|Value|  
|-------------|-----------|--------------|-----------|  
||**Team Project**|**=**|**@Project**|  
|**And**<br /><br /> **Or**|**Completed Work**<br /><br /> **Remaining Work**|**\< > [Field]**<br /><br /> **\< > [Field]**|**Project Completed Work**<br /><br /> **Project Remaining Work**|  
|**And**<br /><br /> **Or**|**Completed Work**<br /><br /> **Project Completed Work**|**\< >**<br /><br /> **\< >**|**0**|  
|**And**<br /><br /> **Or**|**Remaining Work**<br /><br /> **Project Remaining Work**|**\< >**<br /><br /> **\< >**|**0**|  
  
 To compare work values, click **Column Options**, and add **Completed Work**, **Project Completed Work**, **Remaining Work**, and **Project Remaining Work** to the list of columns that appear in the results.  
  
 You can verify whether an individual work item was successfully submitted by viewing its **History** or by checking that the **Project Server Last Submit Status** field is set to **Success**.  
  
##  <a name="FindSynchedWIs"></a> Find Work Items That Are Being Synchronized With Project Server  
 To find work items that are being synchronized to a specific enterprise project plan, you can create the following query. This query finds all non-closed tasks for a specific plan. You can filter the list by **Area** or **Iteration**.  
  
|And/Or|Field|Operator|Value|  
|-------------|-----------|--------------|-----------|  
||**Team Project**|**=**|**@Project**|  
|**And**|**Work Item Type**|**=**|**Task**|  
|**And**|**State**|**<>**|**Closed**|  
|**And**|**Project Server Enterprise Project**|**=**|*PlanName*|  
  
 To view which work items have and have not been submitted, click **Column Options**, and add **Project Server Submit** to the list of columns that appear in the results. You can filter the query to find only those tasks that have not been submitted by adding a clause with **Project Server Submit <> Yes**.  
  
> [!NOTE]
>  By default, **Project Server Submit** is set to **No** for each work item that you create. However, any work items that you created before the project plan was mapped to the project may contain an empty value for the **Project Server Submit** field.    
  
##  <a name="FieldsAvailable"></a> Fields That Support Queries That Relate to Data Synchronization  
 When you specify a type of work item to participate in data synchronization, more than 25 fields are added to the work item type and are available to support queries. All fields start with "Project Server. Most fields are read-only. The following table indicates the label of the field on the **Project Server** tab and the friendly name of the field, which you use to specify it in the Query Editor. For information about more fields that you can use to support queries, see [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md).  
  
|Label on Project Server tab|Name in Query Editor|  
|---------------------------------|--------------------------|  
|**Enterprise Project**|**Project Server Enterprise Project**|  
|**Last Approval Date**|**Project Server Last Reviewed Date**|  
|**Last Approval Status**|**Project Server Last Review Status**|  
|**Last Submit Status**|**Project Server Last Submit Status**|  
|**Last Submitted Date**|**Project Server Last Submitted Date**|  
|**Linked to Project Server**|**Project Server Is Linked**|  
|**Completed Work**|**Project Server Completed Work**|  
|**Remaining Work**|**Project Server Remaining Work**|  
   
## Related articles  
 [Synchronization process overview](synchronization-process-overview.md)   
 [Top-down planning of business requirements](top-down-plan-mapped-team-project.md)   
 [Manage project details](manage-project-details.md)   
 [Manage projects](manage-projects.md)
