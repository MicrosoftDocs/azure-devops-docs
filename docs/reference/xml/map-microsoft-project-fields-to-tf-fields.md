---
title: Map Microsoft Project fields to TFS fields
titleSuffix: TFS
description: Customize how work item fields map to Project fields for Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 8c6550d9-9239-4dac-832b-5634924ec77b
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '<= tfs-2018'
ms.date: 01/28/2019
---

# Map Microsoft Project fields to TFS fields

[!INCLUDE [temp](../../_shared/version-tfs-2018-earlier.md)]  

You can customize the way in which work item fields that are stored in Team Foundation are mapped to fields that are defined for Microsoft Project. You can change the way specific fields are published and designate the default link type to use when you create hierarchical or tree links and dependency links.  
  

[!INCLUDE [temp](_shared/project-integration-deprecated.md)]

Unlike Microsoft Excel, Project uses a limited set of columns, which include predefined columns, such as Task Name, and custom fields. When a user publishes or refreshes work item data in a Project file, the field map determines which fields in the work item database match the columns in Project.  

You can customize the mappings, for example, to support a field that you created or to map fields to predefined columns instead of to custom columns. For complete documentation on the field mapping file for Project, see [Add or change Project-to-TFS field mapping](add-or-change-how-project-fields-map-to-tfs-fields.md).  
  
You customize the mapping by modifying the FileMapping.xml file. The following table summarizes the names of the file, the folder, and the plug-in for the default process templates. The plug-in contains the definition of the task that uploads the file to the projection collection.  
- File name: FileMapping.xml    
- Folder name: Classification  
- Plug-in name: Microsoft.ProjectCreationWizard.Classification

For more information, see [Define initial areas, iterations, and Project mapping file](../process-templates/define-classification-plug-in.md).  

<a name="MappingE"></a> 
##  Specify how fields are mapped  
 You specify mapped fields by using the **Mapping** element and the following syntax structure:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<Mappings>  
   <Mapping WorkItemTrackingFieldReferenceName="System.Id"   
            ProjectField=""  
            ProjectName=""  
         ProjectUnits=""  
         PublishOnly=""  
         IfSummaryRefreshOnly=""/>  
</Mappings>  
```  
  
 The following table describes the attributes of the **Mapping** element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|**WorkItemTrackingFieldReferenceName**|Required. Specifies the reference name of a field in a type of work item.|  
|**ProjectField**|Required. Specifies the name of a column in Project. Specify predefined column names by prefixing "pj" to the name, such as pjTaskName for the Task Name column. Specify custom fields as pjTaskText followed by a number, such as pjTaskText11.|  
|**ProjectName**|Optional. Specifies the name to display as the column name to the user. If this attribute is not specified, the name of the field in the type of work item is used.|  
|**ProjectUnits**|Optional. Specifies the type of units to use when you map a type of field to Project. Valid values are `pjMinute`, `pjHour`, `pjDay`, `pjWeek`, and `pjMonthUnit`.|  
|**PublishOnly**|Optional. If set to `true`, indicates that the field is published to the work item database but not refreshed. This value is typically used for calculated fields that should not be updated in Team Explorer. If set to `false`, indicates that the field is both published and refreshed. By default, this attribute is set to `false`.<br /><br /> By default, only **Start Date** and **Finish Date** have this attribute set to **true**.|  
|**IfSummaryRefreshOnly**|Optional. If set to `true`, indicates that the field is never published to the work item database but is refreshed from the work item database when the following conditions are also true:<br /><br /> -   The row for the field is a summary task in Project.<br />-   The summary task has the values of Publish and Refresh set to `Yes`.<br />-   The summary task contains at least one child task that is bound to TFS.<br /><br /> Any updates or calculations that Project makes can overwrite the value that is refreshed from the work item database in the project plan. However, the modified value is never saved to the work item database. This attribute is typically used for summary fields that, if published to the work item database, lead to data inconsistencies.<br /><br /> If set to `false`, indicates that the field may be both published and refreshed. By default, this attribute is set to `false`. **Note:**  The `IfSummaryRefreshOnly` attribute supersedes the `PublishOnly` attribute. For more information, see [Customize the Microsoft Project field mapping file](customize-project-field-mapping-file.md). <br /><br /> By default, the **IfSummaryRefreshOnly** attribute is set to `true` for the **Original Estimate**, **Remaining Work**, and **Completed Work** fields.|  
  
<a name="OtherE"></a> 
## Specify the fields for synchronization, links, and attachments  
 In addition to the **Mapping** element, two other elements determine how fields will synchronize and which field will support links and attachments.  
  
 The **SyncField** element specifies which column serves as the synchronization field. The synchronization field is titled "Publish and Refresh" and allows the user to indicate whether a task row is published or refreshed only.  
  
 You use the following XML syntax to specify which column maps to the synchronization field. You set the ProjectField attribute to a valid column in Project.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<SyncField ProjectField="" />  
```  
  
 The **LinksField** element specifies the links and attachments column. By using the links and attachments column, users can indicate whether a particular task row has links or attachments.  
  
 You use the following XML syntax to specify which column maps to the links and attachments field. You set the ProjectField attribute to a valid column in Project.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<LinksField ProjectField="" />  
```  
  
<a name="DefaultFM"></a> 
##Default field mappings  
 The following example shows how the MSF for Agile Software Development process template maps fields in work items to columns in Project.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8"?>  
<MSProject>  
  <Mappings>  
    <Mapping WorkItemTrackingFieldReferenceName="System.AreaPath" ProjectField="pjTaskOutlineCode9" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.AssignedTo" ProjectField="pjTaskResourceNames" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.Id" ProjectField="pjTaskText10" ProjectName="Work Item ID" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.IterationPath" ProjectField="pjTaskOutlineCode10" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.Reason" ProjectField="pjTaskText14" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.Rev" ProjectField="pjTaskText23" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.State" ProjectField="pjTaskText13" ProjectName="State" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.Title" ProjectField="pjTaskName" />  
    <Mapping WorkItemTrackingFieldReferenceName="System.WorkItemType" ProjectField="pjTaskText24" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Common.Priority" ProjectField="pjTaskText19" ProjectName="Work Item Priority" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Common.StackRank" ProjectField="pjTaskNumber1" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.CompletedWork" ProjectField="pjTaskActualWork" ProjectUnits="pjHour" IfSummaryRefreshOnly="true" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.FinishDate" ProjectField="pjTaskFinish" PublishOnly="true" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.OriginalEstimate" ProjectField="pjTaskBaselineWork" ProjectUnits="pjHour" IfSummaryRefreshOnly="true" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.RemainingWork" ProjectField="pjTaskRemainingWork" ProjectUnits="pjHour" IfSummaryRefreshOnly="true" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.StartDate" ProjectField="pjTaskStart" PublishOnly="true" />  
    <LinksField ProjectField="pjTaskText26" />  
    <SyncField ProjectField="pjTaskText25" />  
  </Mappings>  
</MSProject>  
```  
  
## Related articles   

- [Customize the Microsoft Project field mapping file](customize-project-field-mapping-file.md)
- [Add or change Project-to-TFS field mapping](add-or-change-how-project-fields-map-to-tfs-fields.md)   