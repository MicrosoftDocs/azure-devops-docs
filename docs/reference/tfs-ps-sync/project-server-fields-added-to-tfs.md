---
title: Project Server fields added to TFS 
titleSuffix: TFS
description: Add fields to a work item form through export, modify, and import of the XML definition file when using Team Foundation Server & Project Server integration 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 05912b54-10f4-4ba2-947d-0c856daafdf0
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---


# Project Server fields added to TFS to support data synchronization 
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> When you specify a type of work item to participate in data synchronization between Visual Studio Team Foundation Server and Microsoft Project Server, more than 25 fields are added to the work item type. Several of these fields are also added to the work item form and appear on the **Project Server** tab. You can use these fields to build reports or to specify queries that find work items. For more information, see [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md).  
  
 You typically add or remove fields from a work item form by exporting the definition file for the work item type, modifying the file, and then importing it for the project. However, for types of work items that participate in data synchronization, you add or remove fields from the **Project Server** tab by downloading the field mappings to a file, modifying it, and then uploading it to the project collection. For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md).  
  
> [!IMPORTANT]
>  Fields are mapped for a project collection. All fields that are mapped for one type of work item are the same for all other types of work items that participate in data synchronization. For more information, see [Specify work item types](specify-wits-to-synchronize.md).  
  
##  <a name="defaulttab"></a> Default Project Server Tab  
 When you associate an enterprise project with a project, the **Project Server** tab, similar to the one in the following illustration, is added to the work item form. The tab is added only to those types of work items that you specify to participate in data synchronization. Fields are added only if their `displayTfsField` or `displayTfsMirror` attribute in the field mapping file is set to `true`.  
  
 ![Project Server Tab default fields](_img/pstfs_projectservertab.png "PSTFS_ProjectServerTab")  
  
 You can add or remove fields by customizing the field mappings for the project collection. For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md) and [Field mapping reference](field-mapping-xml-element-reference.md).  
  
##  <a name="defaultfields"></a> Default Project Server Fields  
 The following table describes each field that is added to the work item types to support data synchronization. Most of these fields are read-only and are used exclusively by the synchronization engine to track submissions, updates, and re-submissions. Mirrored fields are added to the **Project Server** tab when an enterprise project is mapped to a project or a type of work item is mapped.  
  
> [!NOTE]
>  The fields listed in the following table are imported to a project collection from a global workflow definition file when the collection is mapped to an instance of PWA. For more information about global workflow, see [Customize global workflow](https://msdn.microsoft.com/library/gg534720.aspx).  
  
|Field|Reference name and data type|Description|  
|-----------|----------------------------------|-----------------|  
|Project Server Assigned To|Mirror.System.AssignedTo (String)|Read-only. Stores the value of the resource that is assigned to the work item in the project plan.|  
|Project Server Completed Work|Mirror.Microsoft.VSTS.Scheduling.CompletedWork (Double)|Read-only. Stores the value of the Task Actual Work field that is assigned to the corresponding task in the project plan.|  
|Project Server Enterprise Project|Microsoft.Sync.ProjSrv.ProjectName (String)|Read-write or Read-only. Specifies the name of the enterprise project plan whose task will synchronize with the work item.<br /><br /> When you submit a new work item from a project that is mapped to multiple project plans, you must specify the plan with which you want the work item to synchronize. If the project is mapped to only one project plan, this field is read-only and contains the name of the mapped project plan. **Note:**  If you are logged on as a member of the service account group, the field always appears as read-write because the synchronization engine requires special access to this field.|  
|Project Server Finish Date|Mirror.Microsoft.VSTS.Scheduling.FinishDate (DateTime)|Read-only. Stores the value of the Finish Date field that is assigned to the corresponding task in the project plan. **Note:**  You can add the **Finish Date** (pjFinishDate) field to the mappings, but any value that you set in Team Foundation is not sent to Project Server. This restriction is by design. The Finish Date is always defined by the value in the enterprise project plan.|  
|Project Server Is Linked (**Linked to Project Server**)|Microsoft.Sync.ProjSrv.IsLinkedToProjSrv (String)|Read-only. Specifies whether the work item is currently linked to a task in Project Server. Work items become linked after the task is published to Project Server. Valid values are Yes and No.|  
|Project Server Last Review Status (**Last Approval Status**)|Microsoft.Sync.ProjSrv.LastReviewStatus (String)|Read-only. Specifies the state of the most recent approval made by the project manager as **Approved** or **Rejected**.|  
|Project Server Last Reviewed Date (**Last Approval Date**)|Microsoft.Sync.ProjSrv.LastReviewedDate (DateTime)|Specifies the date and time when the project manager most recently approved status updates for the work item.|  
|Project Server **Last Submit Status**|Microsoft.Sync.ProjSrv.LastSubmitStatus (String)|Read-only. Stores the result of the most recent submission to Project Server as **Success** or **Failure**.|  
|Project Server **Last Submitted Date**|Microsoft.Sync.ProjSrv.LastSubmittedDate (DateTime)|Read-only. Stores the date and time when the work item was most recently saved and that corresponds to the version that was most recently submitted to Project Server.|  
|Project Server Original Estimate|Mirror.Microsoft.VSTS.Scheduling.OriginalEstimate (Double)|Read-only. Stores the value of the Baseline Work field that is assigned to the corresponding task in the project plan.|  
|Project Server Remaining Work|Mirror.Microsoft.VSTS.Scheduling.RemainingWork (Double)|Read-only. Stores the value of the Task Remaining Work field that is assigned to the corresponding task in the project plan.|  
|Project Server Start Date|Mirror.Microsoft.VSTS.Scheduling.StartDate (DateTime)|Read-only. Stores the start date that is defined for the corresponding task in the project plan. **Note:**  You can add the **Start Date** (pjStartDate) field to the mappings, any value that you set in Team Foundation is sent only the first time that you submit the work item to Project Server. This restriction is by design. The synchronization engine never sends updates on date-related fields to Project Server. Dates are defined by the values in the enterprise project plan.|  
|Project Server Submit (Required)|Microsoft.Sync.ProjSrv.Submit (String)|Specifies whether the work item participates in data synchronization.|  
|Project Server Title|Mirror.System.Title (String)|Read-only. Stores the title that is assigned to the corresponding task in the project plan.|  
  
###  <a name="synconly"></a> Fields Used Exclusively to Support the Synchronization Process  
 The following table lists read-only fields that are used to support the synchronization process.  
  
> [!NOTE]
>  The following information is provided for reference purposes only.  
  
|Field|Reference name and data type|  
|-----------|----------------------------------|  
|Project Server Sync Approval Watermark|Microsoft.Sync.ProjSrv.ApprovalWatermark (String)|  
|Project Server Sync Assignment Data|Microsoft.Sync.ProjSrv.AssignmentData (PlainText)|  
|Project Server Sync Is Summary in Project Server|Microsoft.Sync.ProjSrv.IsSummaryInProjSvr (Integer)|  
|Project Server Sync Last Submitted Revision|Microsoft.Sync.ProjSrv.LastSubmittedRevision (Integer)|  
|Project Server Sync Last Sync Revision|Microsoft.Sync.ProjSrv.LastSyncRevision (Integer)|  
|Project Server Sync Last Sync Type|Microsoft.Sync.ProjSrv.LastSyncType (Integer)|  
|Project Server Sync Project GUID|Microsoft.Sync.ProjSrv.ProjGuid (GUID)|  
|Project Server Sync Queue Flags|Microsoft.Sync.ProjSrv.QueueFlags (Integer)|  
|Project Server Sync Requested Assignment GUID|Microsoft.Sync.ProjSrv.RequestedAssnGuid (GUID)|  
|Project Server Sync Requested Project GUID|Microsoft.Sync.ProjSrv.RequestedProjGuid (GUID)|  
|Project Server Sync Submit Tag|Microsoft.Sync.ProjSrv.SubmitTag (String)|  
|Project Server Sync Task GUID|Microsoft.Sync.ProjSrv.TaskGuid (GUID)|  
|Project Server Sync Task Modified Revision Counter|Microsoft.Sync.ProjSrv.TaskModifiedRevCounter (Integer)|  
  
###  <a name="psassigndata"></a> Project Server Assignment Data  
 The following code sample illustrates the markup language that is used to store the rollup of work for summary tasks in the **Project Server Sync Assignment Data** field. The `IsPrimary` attribute can be true for only one `Assignment`, the primary or active owner for the summary work item.  
  
> [!NOTE]
>  The following information is provided for reference purposes only.  
  
```xml
<Assignments>  
&nbsp;&nbsp;&nbsp;<Assignment IsPrimary="true" Succeeded="true">  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field RefName="System.AssignedTo">Eduard Dell</Field>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field RefName="Microsoft.VSTS.Scheduling.CompletedWork">0.000000</Field>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field RefName="Microsoft.VSTS.Scheduling.RemainingWork">32.000000</Field>  
&nbsp;&nbsp;&nbsp;</Assignment>  
&nbsp;&nbsp;&nbsp;<Assignment IsPrimary="false" Succeeded="true">  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field RefName="System.AssignedTo">Sanjay Patel</Field>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field RefName="Microsoft.VSTS.Scheduling.CompletedWork">8.000000</Field>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Field RefName="Microsoft.VSTS.Scheduling.RemainingWork">16.000000</Field>  
&nbsp;&nbsp;&nbsp;</Assignment>  
</Assignments>  
```  
  
## Related articles  
 [Synchronization process overview](synchronization-process-overview.md)   
 [Specify work item types](specify-wits-to-synchronize.md)   
 [Field mapping reference](field-mapping-xml-element-reference.md)   
 [Customize the field mapping](customize-field-mapping-tfs-project-server.md)