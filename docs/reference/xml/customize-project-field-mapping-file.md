---
title: Customize the Microsoft Project field mapping file
titleSuffix: TFS
description: Change how specific fields are published from Project to Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: b10f8b41-b790-4793-bfe7-a64f935b20fc
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 09/08/2017
---


# Customize the Microsoft Project field mapping file

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)] 

You can customize how work item fields that are defined in Team Foundation map to fields in Microsoft Project, and you can change how specific fields are published. Project includes predefined fields, such as Task Name, and custom fields. When you publish or refresh work item data in Project, the field map determines which fields in the work item database match the fields in Project.  
  
 For information on using Project and TFS to track work, see [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md).  
  
 To modify the field mappings for a project, you [export and then import the Microsoft Project Mapping File using the TFSFieldMapping command line tool](upload-or-download-the-microsoft-project-mapping-file.md).  
  
<a name="FieldMappings"></a> 
## Mapping element  
 To specify a mapping between a work item field and a project column, you use the `Mapping` element.  
  
 You use the following XML syntax to specify a mapping between a work item type field and an Project field. The `Mapping` element is then used to specify a field mapping.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<Mapping WorkItemTrackingFieldReferenceName=""   
         ProjectField=""  
         ProjectName=""  
         ProjectUnits=""  
         PublishOnly="">  
         IfSummaryRefreshOnly=""/>  
```  
  
### Attributes  
 The following table describes the attributes that can be used with the `Mapping` element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|WorkItemTrackingFieldReferenceName|Required. Specifies the reference name of a field in a work item type.|  
|ProjectField|Required. Specifies the name of a field in Project. Specify predefined field names by prefixing "pj" to the name, such as pjTaskName for the Task Name column. Specify custom fields as pjTaskText followed by a number, such as pjTaskText11.|  
|ProjectName|Optional. Specifies the name to appear as the column name in Project. If you do not specify this attribute, the field name of the work item type is used.|  
|ProjectUnits|Optional. Specifies the type of units to use when you map a field type to Project. You can specify the following values: `pjMinute`, `pjHour`, `pjDay`, `pjWeek`, and `pjMonthUnit`. **Note:**  You can specify ProjectUnits only for fields that specify time duration or other time units.|  
|PublishOnly|Optional. If set to `true`, indicates that the field is published to the work item database but is not refreshed. This value is typically used for calculated fields that should not be updated in Team Explorer. If set to `false`, indicates that the field is both published and refreshed. The default value is `false`.<br /><br /> In the default mapping file, the two fields whose **PublishOnly** attribute is set to `true` are the **Start Date** and **Finish Date**.|  
|IfSummaryRefreshOnly|Optional. If set to `true`, indicates that the field is never published to the work item database but is refreshed from the work item database when the following are also true:<br /><br /> -   The row for the field is a summary task in Project.<br />-   The summary task has the Publish and Refresh values set to `Yes`.<br />-   The summary task contains at least one child task that is bound to TFS.<br /><br /> Any updates or calculations that Project makes can overwrite the value that is refreshed from the work item database in the project plan. However, the modified value is never saved to the work item database. This attribute is typically used for summary fields that, if published to the work item database, lead to data inconsistencies.<br /><br /> If set to `false`, indicates that the field may be both published and refreshed. The default value when not specified is `false`. **Note:**  The value that is assigned to the `IfSummaryRefreshOnly` attribute supersedes the value that is assigned to `PublishOnly`. For more information, see [Fields that Affect Publishing and Refreshing](#PublishRefresh) later in this topic. <br /><br /> In the default mapping file, the **IfSummaryRefreshOnly** attribute is set to `true` for the **Original Estimate**, **Remaining Work**, and **Completed Work** fields.|  
  
 The following example shows how to map the work item type field that contains the title to the task name Project field:  
  

> [!div class="tabbedCodeSnippets"]
```XML
<Mapping WorkItemTrackingFieldReferenceName="System.Title"   
         ProjectField="pjTaskName"/>  
```  
  
 The following XML syntax shows a more complex example of how to map the work item type field that has the start date to the start date Project field. Because the field is calculated, it is specified to publish and not refresh in order to prevent errors from being introduced by Team Explorer updates.  
  

> [!div class="tabbedCodeSnippets"]
```XML
<Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.StartDate" ProjectField="pjTaskStart" PublishOnly="true"/>  
```  
  
> [!NOTE]  
>  As a best practice, you should map calculated fields in Project to read-only fields in Team Foundation. This helps avoid confusion so that team members do not try to change calculated fields.   
  
<a name="Reserved"></a> 
##ReservedField element  
 The `ReservedField` element works to support hierarchical links defined between tasks and is an optional element.  
  
 If this element is not specified in the mapping, then Project uses the default `pjNumber20` field.  

<a name="Synchronization"></a>   
##  SyncField element  
 The synchronization field enables you to control the publish and refresh behavior of each task. The field displays as a column with the title **Publish and Refresh** when you use the **Team System Task Sheet** view.  
  
 You must specify a synchronization field in the Microsoft Project field mapping file. Use the following XML syntax to specify which field is the synchronization field. To specify a synchronization field, use the `SyncField` element. The `ProjectField` attribute must be set to a valid Project field.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<SyncField ProjectField="" />  
```  
  
 The following example shows how to specify **pjTaskText25** as the synchronization field:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<SyncField ProjectField="pjTaskText25" />  
```  
  
For more information about how to use the synchronization field in Project, see [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md).  
  
##  <a name="ResourceNameSeparator"></a> ResourceNameSeparator Element  
 You can use the `ResourceNameSeparator` to define the character that will distinguish resource names that are in a string. Team Foundation users and resources are synchronized with the users of the Active Directory directory service. The names for users and resources may include a delimiter, such as a comma, to separate the last name, first name, and middle initial of a resource.  
  
 This is an optional element. If this element is not specified in the mapping, then Project separates resource names by using the default mappings that are defined in the following table:  
  
|If Active Directory and the project list separator is|Then in Project replace with|  
|----------------------------------------------------------------|-----------------------------------------|  
|,|;|  
|;|:|  
|.|:|  
  
 If you want to specify a different character than those listed in the above table, then you can define the `ResourceNameSeparator` by using the following syntax:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<ResourceNameSeparator WorkItemTrackingCharacter="" ProjectCharacter=""/>  
```  
  
 The following example shows how to specify the character "**\***" as the separator to use in Project when the Team Foundation character is "**-**":  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<ResourceNameSeparator WorkItemTrackingCharacter="-" ProjectCharacter="*"/>  
```  
<a name="Hierarchy"></a>   
##  Hierarchy link type  
 When you create summary tasks in  Project, a tree link is created between the summary task, the parent, and the subordinate or child tasks. Project uses the default System.LinkTypes.Hierarchy to create these links.  
  
<a name="Dependency"></a> 
##  Dependency link type  
 When you create links between tasks in Project, you create a dependent link between the tasks. The predecessor task is assigned a Predecessor link and the successor task is assigned a Successor link. These are the default designations that are defined for the System.LinkTypes.Dependency link type.  
  
<a name="PublishRefresh"></a> 
##Mapping attributes that affect publishing and refreshing  
 The following mapping fields and Project field values determine whether a value for a work item is published or refreshed:  
  
-   The value of the **Publish and Refresh** value for each work item.    
-   The value of the **PublishOnly** attribute for a specific mapping field.    
-   The value of the **IfSummaryRefreshOnly** for a specific mapping field.    
-   The classification of the task as a summary or parent task.  
  
     A parent task is a task that has at least one child task that is published to Team Foundation Server.  
  
**For work items that are not summary tasks**  
  
The following table indicates whether a work item that is not a summary or parent task is published or refreshed based on the mapping field attributes and the assignment that is made to the **Publish and Refresh** value of the item.  
  
|Publish and Refresh<br />(task level)|PublishOnly attribute|Field is Published?|Field is Refreshed?|  
|--------------------------------------------|---------------------------|-------------------------|-------------------------|  
|No|True or False|No|No|  
|Refresh Only|True or False|No|Yes|  
|Yes|True|Yes|No|  
|Yes|False|Yes|Yes|  
  
 **For work items that are summary tasks**  
  
 If the summary task criteria are met and **IfSummaryRefreshOnly** is `true`, its value supersedes the **PublishOnly** value. The following table indicates whether a summary or parent task is published or refreshed based on the assignment that is made to its **Publish and Refresh** value and the mapping field attributes.  
  
|Publish and Refresh<br />(task level)|PublishOnly Attribute|IfSummaryRefreshOnly<br />Attribute|Field is Published?|Field is Refreshed?|  
|--------------------------------------------|---------------------------|----------------------------------------|-------------------------|-------------------------|  
|No|True or False|True or False|No|No|  
|Refresh Only|True|True|No|Yes|  
|Refresh Only|True|False|No|Yes|  
|Refresh Only|False|True or False|No|Yes|  
|Yes|True or False|True|No|Yes|  
|Yes|True|False|Yes|No|  
|Yes|False|False|Yes|Yes|  
  
## Related articles
-  [LinkTypes](link-type-element-reference.md)   
-  [Add or change Project-to-TFS field mapping](add-or-change-how-project-fields-map-to-tfs-fields.md)