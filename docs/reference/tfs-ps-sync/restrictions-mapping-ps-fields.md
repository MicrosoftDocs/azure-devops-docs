---
title: Restrictions on mapping Project Server fields 
titleSuffix: TFS
description: Add restriction on mapping Team Foundation Server & Project Server integration
ms.prod: devops
ms.technology: devops-agile
ms.assetid: f839c9c9-078b-4a96-93a3-132055edfb76
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013 <= tfs-2015'
ms.date: 01/12/2017
---


# Restrictions on mapping Project Server fields in TFS-Project Server integration

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> When you add fields to participate in data synchronization between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server, make sure that you do not map fields that are restricted. You map fields by customizing the field mappings for a project collection. You can map both built-in and custom fields in Project. You can map some of those fields only to the status queue and some fields only to TFS. In general, you should map resource-level information, pjResource\* fields, from Team Foundation Server to Project Server within the **tfsToTarget** element and only task-level information, pjTask\* fields, from Project Server to TFS within the **targetToTfs** element. For more information, see [Field mapping reference](field-mapping-xml-element-reference.md).  
  
 You must also match the data types of mapped fields, both built-in and custom, according to the criteria that this topic describes. For more information about built-in fields, see [Available fields reference](http://go.microsoft.com/fwlink/?LinkId=203358).  
  
   
##  <a name="renaming"></a> Restrictions on units of measurement and renaming  
 The following restrictions apply to the mapping of fields that participate in data synchronization:  
  
-   You cannot customize the units of mapped fields. For example, when you add the `pjResourceAssignmentUnits` to the field mappings, it is added using the unit of percentage, and you cannot change that measure.  
  
-   Although you can add the **Finish Date** (pjFinishDate) field to the mappings, any value that you set in Team Foundation is not sent to Project Server. This restriction is by design. The project manager must set the Finish Date in the enterprise project plan.  
  
-   If you rename the `ActiveTfsAssignment(TFS)` field in Project and try to publish your enterprise project plan, the **Validation Resolution** dialog box will appear. To resolve this condition, you must rename the field to its original name.  
  
##  <a name="taskname"></a> Task name and work item title field  
 Project **Name** (pjTaskName) is the only field that is mapped from Project Server to Team Foundation and the status queue. This field maps to the Title (System.Title) field in Team Foundation. No other fields can be mapped to both Team Foundation Server and the status queue. The two-way mapping allows changes in both the enterprise project plan and project to flow in both directions.  
  
 This mapping is represented in the following code of the field mappings:  
  
```xml
<field tfsName="System.Title" tfsMirrorName="Mirror.System.Title" displayTfsField="false" displayTfsMirror="false" onConflict="PSWin">  
&nbsp;&nbsp;&nbsp;<tfsToTarget>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<target provider="ProjectServerStatusQueue" name="pjTaskName" />  
&nbsp;&nbsp;&nbsp;</tfsToTarget>  
&nbsp;&nbsp;&nbsp;<targetToTfs>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<target provider="ProjectServerPublished" name="pjTaskName" />  
&nbsp;&nbsp;&nbsp;</targetToTfs>  
</field>  
```  
  
##  <a name="statusqueue"></a> Fields available for mapping to the status queue  
 You can map the following resource-related fields from Project Server to the Status queue. You can add these fields to the field mapping within the **tfsToTarget** element to send status updates to Project Server.  
  
|||||  
|-|-|-|-|  
|-   pjResourceActualFinish<br />-   pjResourceActualOvertimeWork<br />-   pjResourceActualStart<br />-   pjResourceActualWork|-   pjResourceAssignmentUnits<br />-   pjResourceConfirmed<br />-   pjResourceFinish<br />-   pjResourceOvertimeWork|-   pjResourcePercentWorkComplete<br />-   pjResourceRegularWork<br />-   pjResourceRemainingOvertimeWork<br />-   pjResourceRemainingWork|-   pjResourceStart<br />-   pjResourceUpdatesNeeded<br />-   pjResourceWork|  
  
 In the following example, the Project Server Resource Work field is mapped to the MSFT.MappedTopjResourceWork field in Team Foundation for the status queue target.  
  
```xml
<field tfsName="MSFT.MappedTopjResourceWork" tfsMirrorName="Mirror.MSFT.MappedTopjResourceWork" displayTfsField="true" displayTfsMirror="true">  
&nbsp;&nbsp;&nbsp;<tfsToTarget>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <target provider="ProjectServerStatusQueue" name="pjResourceWork" />  
&nbsp;&nbsp;&nbsp;</tfsToTarget>  
</field>  
  
```  
  
 You can also combine the mapping of a resource-specific field with a task-specific field to form a full mapping. In the following example, the pjTaskWork field is mapped within the **targetToTfs** element to provide a complete round-trip mapping.  
  
```xml
<field tfsName="MSFT.MappedTopjResourceWork" tfsMirrorName="Mirror.MSFT.MappedTopjResourceWork" displayTfsField="true" displayTfsMirror="true">  
&nbsp;&nbsp;&nbsp;<tfsToTarget>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <target provider="ProjectServerStatusQueue" name="pjResourceWork" />  
&nbsp;&nbsp;&nbsp;</tfsToTarget>  
&nbsp;&nbsp;&nbsp;<targetToTfs>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <target provider=" ProjectServerPublished" name="pjTaskWork"/>  
&nbsp;&nbsp;&nbsp;</targetToTfs>  
</field>  
  
```  
  
##  <a name="pstotf"></a> Fields available for mapping from Project Server to Team Foundation only  
 You can map the following task-specific fields from Project Server to Team Foundation Server. You can also combine the mapping of a task-specific field with a resource-specific field to form a full mapping.  
  
|||||  
|-|-|-|-|  
|-   pjTaskActualCost<br />-   pjTaskActualDuration<br />-   pjTaskActualFinish<br />-   pjTaskActualOvertimeCost<br />-   pjTaskActualOvertimeWork<br />-   pjTaskActualStart<br />-   pjTaskActualWork<br />-   pjTaskACWP<br />-   pjTaskBCWP<br />-   pjTaskBCWS<br />-   pjTaskBudgetCost<br />-   pjTaskBudgetWork<br />-   pjTaskCost<br />-   pjTaskCPI<br />-   pjTaskCreated<br />-   pjTaskCV<br />-   pjTaskCVPercent<br />-   pjTaskDeadline<br />-   pjTaskDuration<br />-   pjTaskDuration1|-   pjTaskDurationVariance<br />-   pjTaskEAC<br />-   pjTaskEarlyFinish<br />-   pjTaskEarlyStart<br />-   pjTaskExternalTask<br />-   pjTaskFinish<br />-   pjTaskFinishVariance<br />-   pjTaskFixedCost<br />-   pjTaskFreeSlack<br />-   pjTaskHyperlink<br />-   pjTaskHyperlinkAddress<br />-   pjTaskHyperlinkSubAddress<br />-   pjTaskIgnoreResourceCalendar<br />-   pjTaskLateFinish<br />-   pjTaskLateStart<br />-   pjTaskOverallocated<br />-   pjTaskOvertimeCost<br />-   pjTaskOvertimeWork<br />-   pjTaskPercentComplete<br />-   pjTaskPercentWorkComplete|-   pjTaskPhysicalPercentComplete<br />-   pjTaskPriority<br />-   pjTaskRecurring<br />-   pjTaskRegularWork<br />-   pjTaskRemainingCost<br />-   pjTaskRemainingOvertimeCost<br />-   pjTaskRemainingOvertimeWork<br />-   pjTaskRemainingWork<br />-   pjTaskSPI<br />-   pjTaskStart<br />-   pjTaskStartVariance<br />-   pjTaskSummary<br />-   pjTaskSV<br />-   pjTaskSVPercent<br />-   pjTaskTCPI<br />-   pjTaskTotalSlack<br />-   pjTaskVAC<br />-   pjTaskWork<br />-   pjTaskWorkVariance|-   pjTaskBaselineCost<br />-   pjTaskBaselineWork<br />-   pjTaskBaselineBudgetCost<br />-   pjTaskBaselineBudgetWork<br />-   pjTaskBaselineDuration<br />-   pjTaskBaselineStart<br />-   pjTaskBaselineFinish<br />-   pjTaskBaseline1Cost<br />-   pjTaskBaseline1Work<br />-   pjTaskBaseline1BudgetCost<br />-   pjTaskBaseline1BudgetWork<br />-   pjTaskBaseline1Duration<br />-   pjTaskBaseline1Start<br />-   pjTaskBaseline1Finish<br />     . . .<br />-   pjTaskBaseline10Cost<br />-   pjTaskBaseline10Work<br />-   pjTaskBaseline10BudgetCost<br />-   pjTaskBaseline10BudgetWork<br />-   pjTaskBaseline10Duration<br />-   pjTaskBaseline10Start<br />-   pjTaskBaseline10Finish|  
  
 In the following example, the Project Server Resource Work field is mapped to the MSFT.MappedTopjTaskBaseline1Start field in Team Foundation for the Team Foundation Server target.  
  
```xml
<field tfsName="MSFT.MappedTopjTaskBaseline1Start" tfsMirrorName="Mirror.MSFT.MappedTopjTaskBaseline1Start" displayTfsField="true" displayTfsMirror="true">  
&nbsp;&nbsp;&nbsp;<targetToTfs>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <target provider="ProjectServerPublished" name="pjTaskBaseline1Start" />  
&nbsp;&nbsp;&nbsp;</targetToTfs>  
</field>  
  
```  
  
##  <a name="restricted"></a> Fields restricted from mapping  
 The following Project Server fields are restricted from mapping. Do not add these fields to the field mapping between Team Foundation and Project Server.  
  
|||||  
|-|-|-|-|  
|-   pjResourceID<br />-   pjResourceNotes<br />-   pjTaskCalendar<br />-   pjTaskCalendarGUID<br />-   pjTaskCommitmentFinish<br />-   pjTaskCommitmentGuid<br />-   pjTaskCommitmentStart<br />-   pjTaskCommitmentType|-   pjTaskConfirmed<br />-   pjTaskConstraintDate<br />-   pjTaskConstraintType<br />-   pjTaskContact<br />-   pjTaskCritical<br />-   pjTaskDelay<br />-   pjTaskHyperlinkScreenTip<br />-   pjTaskID|-   pjTaskLevelCanSplit<br />-   pjTaskLevelDelay<br />-   pjTaskNotes<br />-   pjTaskParentTask<br />-   pjTaskPreleveledFinish<br />-   pjTaskPreleveledStart<br />-   pjTaskProject<br />-   pjTaskResume|-   pjTaskRollup<br />-   pjTaskStartSlack<br />-   pjTaskStop<br />-   pjTaskSubproject<br />-   pjTaskSubprojectReadOnly<br />-   pjTaskSuccessors<br />-   pjTaskUniqueID<br />-   pjTaskWBS|  
  
##  <a name="datatypes"></a> Data types and field mapping criteria  
 When you map a field from Team Foundation Server to Project Server, make sure that you match the data type of the Project Server field with that defined for the Team Foundation field according to the criteria that the following table outlines. In addition to the built-in fields that are listed earlier in this topic, you can create custom enterprise task-type fields and map them to support synchronization in either or both directions. For custom fields, make sure that you match the data types of fields as the third column of the table indicates. For more information, see [Creating Lookup Tables and Enterprise Custom Fields](http://go.microsoft.com/fwlink/?LinkId=209696).  
  
> [!NOTE]
>  The units for work and task duration are specified in hours. You cannot customize the units.  
  
|Team Foundation Server|Fields that are built in to Project Server|Custom enterprise fields in Project Server|  
|------------------------------------------------------------------|------------------------------------------------|------------------------------------------------|  
|DateTime|Date|Date|  
|Double|Work, Cost, Duration, Count, Percentage|Number, Cost, Duration|  
|Integer|Count, Percentage|Number|  
|String|Text|Text|  
|TreePath|Text|Text|  
  
## Related articles  
 [Field mapping reference](field-mapping-xml-element-reference.md)   
 [Customize the field mapping](customize-field-mapping-tfs-project-server.md)