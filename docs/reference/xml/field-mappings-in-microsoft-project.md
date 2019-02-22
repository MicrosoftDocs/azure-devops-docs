---
title: Microsoft Project field mappings
titleSuffix: TFS
description: Understand how data is mapped between Microsoft Project and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 0da29778-11c2-42e1-8876-e51abbc799f6
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '<= tfs-2018'
ms.date: 01/28/2019
---

# Field mappings in Microsoft Project

[!INCLUDE [temp](../../_shared/version-tfs-2018-earlier.md)]  

You can customize how data is mapped between Microsoft Project and Team Foundation Server (TFS) by modifying the Microsoft Project Field Mapping File. The mapping file associates the reference name of a work item tracking field  with a Project field. Before you change the Microsoft Project field mappings, you should review the information provided later in this topic to understand how TFS copies data from Project to the work item tracking database.  

[!INCLUDE [temp](_shared/project-integration-deprecated.md)]

> [!NOTE]  
>  The supported set of Project field names may be different for different versions of Project.  

<a name="CalculatedFields"></a>   
##  Calculated fields  
 Generally, you do not want to refresh calculated fields from the work item database. For example, start and finish dates are typically calculated based on task duration and dependencies. If a team member were to change the start date of a task in Team Explorer, the change could introduce errors in Office Project when the field is refreshed. 

Therefore you can configure calculated fields so that they are publish only, meaning that Project will publish changes for those fields to the work tracking data store, but not update them. For more information about how to configure fields as publish only, see [TFSFieldMapping](upload-or-download-the-microsoft-project-mapping-file.md).  
  
You can also prevent team members from changing calculated field values in Team Explorer by using the **READONLY** attribute in the work item form definition. For more information about the **READONLY** attribute, see [Apply a field rule](apply-rule-work-item-field.md).  
  
> [!NOTE]
>The  Agile and CMMI process templates already configure the start and finish dates as publish only mappings, and read-only in Team Explorer.  
  
<a name="MappingFieldTypes"></a> 
##  Mapping field types  
 When you publish tasks from Project to TFS, Team Foundation copies the data to the work item database. Also, when tasks are refreshed, the field data is copied from the work item database to your Project plan. For the field data to be copied correctly, the field types in TFS and Project must be compatible. The following table lists which Project field types are compatible with TFS field types:  
  
|**Work item field type**|**Project field type**|  
|----------------------------------|--------------------------------------|  
|DateTime|Datetime.|  
|Double|Work, units, percentages, fractions, and any field type with a range of &plusmn;5.0 × 10<sup>-324</sup> to &plusmn;1.7 × 10<sup>308</sup>.|  
|History|Not Supported.|  
|Html|Not Supported.|  
|Integer|Work, units, numbers, and any field type with a range of -2,147,483,648 to 2,147,483,647.|  
|PlainText|Not Supported.|  
|String|Text (maximum of 255 characters.)|  
|TreePath|Custom outline codes.|  
  

> [!IMPORTANT]  
> Project does not populate the Resource Names field list with names of team members. Therefore, you must manually add names to the list. When you assign a work item to a resource in Project, you should specify the resource by its display name from Active Directory or the Address Book. If you assign a work item to a resource by alias or other shortened form of the name, you introduce an inconsistency that can cause validation errors.
 
 For more information about work item field types, see [Add or modify work item fields](../add-modify-field.md). For more information about Project field types, see the help about the pjField constant in the [Project 2013 developer documentation](/office/client-developer/project/project-2013-developer-documentation).  
  
<a name="OfficeProjectFieldNames"></a> 
##  Project field names  
 In Project you can map any field name that starts with **pjtask** to a field in TFS. For example, you can map **pjTaskText10** to a TFS String field. These field names are used in the `ProjectField` attribute when you specify which TFS work item field maps to a Project field. For a complete list of the Project field names, see the help about the pjField constant in the Microsoft Office 2003 Software Development Kit.  
  
> [!NOTE]  
>  If you are using Project Server, there are additional fields that have "Enterprise" in the name, such as **pjTaskEnterpriseCost1**. TFS does not publish or refresh data to Project Server, unless you integrate it as described in [Synchronize TFS with Project Server](../tfs-ps-sync/synchronize-tfs-project-server.md). Therefore, these field names are not supported with the Team Foundation add-in to Project.  
  
## Related articles 
-  [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md)   
-  [TFSFieldMapping](upload-or-download-the-microsoft-project-mapping-file.md)   
-  [Add or change Project-to-TFS field mapping](add-or-change-how-project-fields-map-to-tfs-fields.md)