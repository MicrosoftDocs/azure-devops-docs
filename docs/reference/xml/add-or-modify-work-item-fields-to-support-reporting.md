---
title: Change reporting attributes 
titleSuffix: TFS
description: Customize which fields appear in the relational warehouse or cube to support reporting for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 8b963584-88fd-423a-8f88-61cadf9e1373
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: conceptual
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 02/10/2017
---


# Add or modify work item fields to support reporting

[!INCLUDE [temp](../../_shared/version-header-tfs-only.md)]

> [!IMPORTANT]  
>This topic applies to project customization for On-premises XML process models. For you to view reports, you must have configured your TFS and project to support reporting. See [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md). 
>
>For an overview of process models and customization options, see [Customize your work tracking experience](../customize-work.md). 


You use work item fields to track data for a work item type, to define the filter criteria for queries, and to use in reports. Any field, except system fields, that you want to appear in a report must be defined in the definition file for the types of work items that the field will track. System fields are automatically defined for every work item type. However, they must be included in the work item form to support data entry.  
  
 To support reporting, you can add fields or change the attributes of existing fields. When you add or modify fields, you should apply systematic naming conventions to make sure that data is logically grouped into folders in the SQL Server Analysis Services cube.  
  
  
 For a list of reportable fields defined in the default process templates, see [Reportable fields reference](reportable-fields-reference.md).  
 
<a name="best_practices"></a> 
 
###  Best practices  
 Before you add or modify a field, review the following best practices:  
  
-   Determine whether you can use a field that is already defined in the project collection that contains your project. Use of an existing field supports cross-project reporting.    
-   Determine whether you can use a field that is already defined in another project collection in the deployment of Visual Studio Team Foundation Server. Use of an existing field supports cross-project reporting.    
-   You can have no more than 1,024 fields in each project collection and no more than 1,024 unique reportable fields in all project collections throughout a deployment of Team Foundation Server. Merged fields count as one reportable field.   
-   Institute a standard procedure and review process to add and modify fields in process templates, projects, or project collections.   
-   Use systematic naming conventions when you label fields for reporting. When you assign reference names in a systematic manner across all project collections in a deployment of Team Foundation Server, you guarantee a more consistent and usable warehouse and cube schema, and you avoid schema conflicts in the warehouse. For more information, see [Resolve data warehouse schema conflicts](../../report/admin/resolve-schema-conflicts.md).  
  
     You can assign up to four label attributes to a work item field:  
  
    > [!NOTE]  
    >  Fields that are defined in the process templates for Microsoft Solutions Framework are not assigned a reporting name or a reporting reference name. By default, the reference name and name attributes are used.  
  
    -   `name`. The friendly name of the field that appears in the drop-down menus of work item queries. The friendly name must be unique across all fields that are defined in a project. Also, the friendly name may be different from the displayed label that is assigned to the field on the work item form. For more information, see [Control](control-xml-element-reference.md).  
  
    -   `refname`. The unique label that is assigned to the field that distinguishes it from all other fields that are defined in the project collection. The value that is assigned to the `refname` cannot be changed.  
  
         For requirements of and restrictions on friendly names and reference names for fields, see [Naming conventions for work item tracking objects](../../organizations/settings/naming-restrictions.md#ProjectNames).  
  
    -   `reportingname`. Optional attribute. The name that is used to identify a field in reports. When not explicitly set, the value that is assigned to the `name` attribute is used.  
  
    -   `reportingrefname`. Optional attribute. The unique label that is assigned to a reportable field that distinguishes it from all other reportable fields that are defined in all project collections. When not explicitly set, the value that is assigned to the `refname` attribute is used. For recommended naming conventions, see [Best Practices when Assigning Reporting Reference Names](#bp_labels) later in this topic.  
  
        > [!NOTE]  
        >  The reporting reference names are visible only from a PivotTable report or the Analysis Services cube.  
  


<a name="use_field"></a> 
##  Use an existing field  
 You should use a field that is already defined if that field matches the information that you want to track and report on. To use an existing field, perform the following steps:  
  
-   Identify the field that you want to use. Use the **witadmin listfields** command to identify the fields and their attributes that are defined for all project collections. For more information, see [List fields that are defined for a project collection](#list_fields) later in this topic.  
  
-   Determine whether the field is reportable and whether the reportable attributes meet your reporting needs.  
  
-   If it is not reportable, use the **witadmin changefield** to change the reportable attribute for the project collections in which it is used. For more information, see [Change a reportable attribute for a field](#change_attribute) later in this topic.  
  
-   For the project collection where the field is not defined, add it to the XML definition files for the work item types that you want to use to track data. For more information, see [Add fields to support reporting](#add_a_field) later in this topic.  

<a name="list_fields"></a>   
##  List fields that are defined for a project collection  
 You can use the **witadmin listfields** command to list fields and their attributes. You can list a specified field or all fields that are defined in a project collection. The **witadmin listfields** command has the following syntax:  
  
```  
witadmin listfields /collection:CollectionURL /n:RefName  
```  
  
 For more information, see [Manage work item fields](../witadmin/manage-work-item-fields.md).  
  
<a name="reportable"></a> 
##  Reportable field attributes  
 Reportable fields have a `reportable` attribute value of `Detail`, `Dimension`, or `Measure`. The following attributes determine how work item fields are exported and processed to the data warehouse databases:  
  
-   `reportingtype`. To include a field in reports, you must assign one of the following values to the `reportable` attribute:  
  
    -   Assign `Detail` to export the field to the relational warehouse database but not to the cube. As the following example shows, use the `Detail` type only for Integer, Double, String, or DateTime fields:  
  
        ```xml
        <FIELD refname="MyCorp.Summary" name="Summary" type="String" reportable="detail">  
        ```  
  
    -   Assign `Dimension` to export the field to both the relational warehouse database and the cube. As the following example shows, use `Dimension` only for Integer, String, or DateTime fields. This value is useful to include fields that are used to filter reports (for example, fields that have lists of valid values).  
  
        ```xml
        <FIELD refname="MyCorp.Category" name="Category" type="String" reportable="dimension">  
        ```  
  
    -   Assign `Measure` to support the processing of precalculated values in the cube. Use the `Measure` type only for Integer and Double fields.  
  
         When you assign Measure as the `reportingtype`, you must assign `sum` as the `formula`, as the following example shows:  
  
        ```xml
        <FIELD refname="MyCorp.Cost" name="Cost" type="Integer" reportable="measure" formula="sum">  
        ```  
  
-   `reportingrefname`. You can assign a different reference name to a field that is marked as reportable. If no value is specified, the value that is assigned to the `refname` attribute is used.  
  
     You can use this attribute to either merge or diverge fields that are included in reports. To merge two fields that have distinct reference names and that are defined in different project collections, you assign the same `reportingrefname` to both. To diverge two fields that have the same reference name but that are defined in different project collections, you assign a different `reportingrefname` to each field.  
  
     You should merge fields whenever possible to minimize the number of fields in the warehouse and to keep under the maximum limit of 1024 reportable fields. You can generate cross-group reports with merged fields.  
  
-   `reportingname`. You can assign a different label to a field that is used to display data in reports. If no value is specified, the friendly name that is assigned for the `name` attribute is used. The value that is assigned to the `reportingname` appears in the cube. The value that is assigned to the `reportingrefname` does not appear.  
  
    > [!IMPORTANT]  
    >  You should use best practices to label reporting fields so that they are grouped together in the PivotTable reports. For more information, see [Best Practices when Assigning Reporting Reference Names](#bp_labels).  
  

<a name="change_attribute"></a> 
##  Change a reportable attribute for a work item field  

 You can make an existing field reportable by changing the attribute assignments of the field that are defined for a project collection. An existing field is defined in one or more work item type definitions. Also, you can change all attributes that determine how a field is processed in the data warehouses.  
  
 You can use the following sequence of steps to change the attribute assignment of a field:  
  
1.  You can use the **witadmin changefield** command to change an attribute assignment to a field. You exercise this command for a project collection. Use the following syntax:  
  
    ```  
    witadmin changefield /collection:CollectionURL /n:RefName [/name:NewName] [/syncnamechanges:true | false] [/reportingname:ReportingName] [/reportingrefname:ReportingRefName] [/reportingtype:Type] [/reportingformula:Formula] [/noprompt]  
    ```  
  
     To make an existing field reportable, change the reportingtype. For example, to make the AW.Common.TeamPriority field available for filtering of reports, assign the Dimension value to it:  
  
    ```  
    witadmin changefield /collection:http://AdventureWorksServer:8080/AWTeam/Collection1 /n:AW.Common.TeamPriority /reportingtype:dimension   
    ```  
  
     For more information, see [Manage work item fields](../witadmin/manage-work-item-fields.md).  
  
2.  (Optional) If you have more than one project collection, you may want to make similar changes to the work item field that is defined in that collection. To avoid schema conflicts when you export and process data to the data warehouse databases, you must assign the same values to these attributes across all collections:  
  
    -   Field type (the value for this field cannot be changed for an existing field).  
  
    -   Reporting type.  
  
    -   Reporting name.  
  
     For more information, see [Resolve data warehouse schema conflicts](../../report/admin/resolve-schema-conflicts.md).  
  
3.  After you have made all changes to the work item fields that you want to use for reporting, you must process the data warehouse databases. You can use the **ProcessWarehouse** and **ProcessAnalysis** Web services, which are available through the **WarehouseControlWebService**.  
  
     This step makes sure that people who use reports do not see an error when you change the field attributes.  
  
     For more information, see [Manage work item fields](../witadmin/manage-work-item-fields.md).  

<a name="add_a_field"></a>   
##  Add fields to support reporting  
 You can add fields to the definition of a work item type or types. When you add the field, you should add the same field element definition to all types of work items for which the field will support reporting. If you want the field to support cross-project reporting, the field should be added to all work item types in all projects that will be reported on.  
  
 For more information, see [About work item fields and attributes](../../boards/work-items/work-item-fields.md).  

<a name="verify"></a> 
##  Verify changes made to reportable field attributes  
 You can verify the changes that you made to reportable field attributes by processing the data warehouses on demand and then checking the reports to verify that they are updated. Or you can wait until the warehouse adapter jobs run. By default, the relational database is processed every few minutes. However, the cube is processed every two hours by default.  
  
> [!NOTE]  
>  For more information about the **WarehouseControlWebService**, see [Manually process the TFS data warehouse and analysis services cube](../../report/admin/manually-process-data-warehouse-and-cube.md).  
  
1.  Process the relational data warehouse on demand by using the **ProcessWarehouse WarehouseControlWebService**.  
  
2.  Process the cube on demand by using the **ProcessAnalysisDatabase WarehouseControlWebService**.  
  
3.  Verify that the reports are being updated. View a report through the dashboard or Report Manager.  

<a name="bp_labels"></a>   
##  Best practices when assigning reporting reference names  
 For reporting reference names, you want to assign labels so that you can easily find the fields in the PivotTable report and the cube. You can achieve this by applying systematic naming conventions so that fields are grouped in a logical sequence. In addition, if the fields are not grouped in a useful manner, you can change the reporting reference name of a field.  
  
 Applying a systematic naming convention becomes increasingly important because all reportable data from all projects that are defined in all project collections is written to a single relational data warehouse. Data from that warehouse is then processed and written to the cube. Because work item fields are managed distinctly for each project collection, different labels may be applied and may lead to a set of fields that is not well organized to support authoring reports.  
  
 Work item fields that have a reportable type of dimension correspond to dimension attributes in the cube. Dimension attributes are organized into folders that are based on the reporting reference name that is assigned in the process template or work item type definition. The following types of mapping occur:  
  
-   Fields that have the "System" prefix are intrinsic and listed directly under the Work Item dimension, with "Work Item" prepended.  
  
-   Other fields are put under folders whose names correspond to the prefixes in their reference names. For example, fields that have the "Microsoft.VSTS.Common" prefix are listed under the folder that is labeled "Microsoft VSTS Common."  
  
 As the following illustration shows, a folder is added for each prefix group of fields that share a common prefix:  
  
 ![Folder structure in OLAP data cube](_img/rpt_workitem_folders.png "RPT_WorkItem_Folders")  
  
 The following table lists the fields whose reference names begin with "System" and that are listed in the PivotTable report with the prefix of "Work Item." These fields are put directly under the Work Item dimension. All other fields are put under folders whose names correspond to the prefixes in their reference names.  
  
> [!NOTE]  
>  Deployments that do not use the Enterprise version of SQL Server Analysis Services do not have access to the translation features that are provided by that version. In these deployments, fields are identified by their full reference name in the cube, with "˜.' replaced by "˜_' (for example, "System_Id" and "System_Title").  
  
|Name in PivotTable report and cube|Reference name|Data type|  
|----------------------------------------|--------------------|---------------|  
|Work Item.Area Path|System.AreaPath|TreeType|  
|Work Item.Assigned To|System.AssignedTo|String|  
|Work Item.Changed By|System.ChangedBy|String|  
|Work Item.Changed Date|System.ChangedDate|DateTime|  
|Work Item.Created By|System.Created By|String|  
|Work Item.Created Date|System.CreatedDate|DateTime|  
|Work Item.ID|System.Id|Integer|  
|Work Item.Iteration Path|System.IterationPath|TreeType|  
|Work Item.Previous State|System.PreviousState|String|  
|Work Item.Reason|System.Reason|String|  
|Work Item.Rev|System.Rev|Integer|  
|Work Item.State|System.State|String|  
|Work Item.Title|System.Title|String|  
|Work Item.Work Item Type|System.WorkItemType|String|  
  
 The following table lists the fields that appear in the PivotTable report in the folder that is labeled "Microsoft.VSTS.Common" under the Work Item dimension. These fields have reference names that start with "Microsoft.VSTS.Common."  
  
|Name in PivotTable report and cube|Reference name|Data type|  
|----------------------------------------|--------------------|---------------|  
|Work Item.Activated By|Microsoft.VSTS.Common.ActivatedBy|String|  
|Work Item.Activated Date|Microsoft.VSTS.Common.ActivatedDate|DateTime|  
|Work Item.Closed By|Microsoft.VSTS.Common.ClosedBy|String|  
|Work Item.Closed Date|Microsoft.VSTS.Common.ClosedDate|DateTime|  
|Work Item.Created By|Microsoft.VSTS.Common.CreatedBy|String|  
|Work Item.Created Date|Microsoft.VSTS.Common.CreatedDate|DateTime|  
|Work Item.Resolved By|Microsoft.VSTS.Common.ResolvedBy|String|  
|Work Item.Resolved Date|Microsoft.VSTS.Common.ResolvedDate|DateTime|  
|Work Item.Resolved Reason|Microsoft.VSTS.Common.ResolvedReason|String|  
|Work Item.Priority|Microsoft.VSTS.Common.Priority|Integer|  
|Work Item.Severity|Microsoft.VSTS.Common.Severity|String|  
|Work Item.Stack Rank|Microsoft.VSTS.Common.StackRank|Double|  
  
## Related articles 
-  [Manage work item fields](../witadmin/manage-work-item-fields.md)   
-  [Resolve data warehouse schema conflicts](../../report/admin/resolve-schema-conflicts.md)   
-  [Modify a field or add a custom field](../add-modify-field.md)   
-  [Index of work item fields](../../boards/work-items/guidance/work-item-field.md) 
-  [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md)    
-  [Dashboards and reports](../../report/overview.md)