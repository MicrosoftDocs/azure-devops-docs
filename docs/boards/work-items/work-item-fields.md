---
title: List work item fields and attributes in Azure Boards
titleSuffix: Azure Boards
description: Learn about work item fields, their attributes, and how to modify them in Azure Boards. 
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.topic: how-to
ms.date: 01/17/2023 
---


# Work item fields and attributes in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"
Work item fields are used to track information. Fields are defined for an organization and shared across all projects defined for that organization. You can use one of two tools to review the fields defined for the organization. These tools are available for both Inherited and Hosted XML process models. 

- [Process>Fields web page](#review-fields) 
- [Work Item Field Explorer](#wi-explorer)  
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
Work item fields are used to track information. Fields are defined for a collection and shared across all projects defined for that collection. You can use one of two tools to review the fields defined for the Collection. 

- [Process>Fields web page](#review-fields): Available for Inherited process model 
- [Work Item Field Explorer](#wi-explorer): Available for Inherited and On-premises XML process models.  
::: moniker-end


::: moniker range="< azure-devops-2019"
Work item fields are used to track information. Fields are defined for a collection and shared across all projects defined for that collection. To view all fields defined for a collection, you can use the [Work Item Field Explorer](#wi-explorer) tool, a plug-in to Visual Studio.   
::: moniker-end

For a description of each field defined with a system process, see [Work item field index](guidance/work-item-field.md).  

## Prerequisites 

- To view the fields defined for an organization or collection, you must be a member of the **Project Collection Valid Users** application group or have the **View instance-level information** permission set to **Allow** for the organization or collection.


<a id="list-fields"></a> 

### List or review fields  

To list or review fields, you can use one of the following tools, depending on the process model&mdash;Inheritance, Hosted XML, or On-premises XML&mdash;you use. For an index of fields defined within the default processes, see [Work item field index](guidance/work-item-field.md).  

| Tool | Inheritance | Hosted XML | On-premises XML |
| --- | --- | --- | --- |
| [Web portal: List inherited and custom-defined fields](#review-fields) | ✔️  | ✔️1 |     |
| [Work item field explorer](#wi-explorer) | ✔️  | ✔️  | ✔️  |
| [witadmin listfields command line tool](../../reference/witadmin/manage-work-item-fields.md) | ✔️  | ✔️  | ✔️  |
 
> [!NOTE]  
> 1. Only supported for default processes (Agile, CMMI, Scrum). 
 


## Field data types and names 

Each work item type specifies the fields defined for the work items that reference that type. Each field is associated with a number of attributes, many of which are set by the system and cannot be changed. 

Each field is defined by the following three attributes. 
- **Data type**: Specifies the type of data that can be entered into the field, such as Boolean, Double, Integer, HTML, and String. For descriptions of each data type, see [Query fields, operators, and macros](../queries/query-operators-variables.md#field-values). 
- **Friendly name**: Specifies the name assigned to the field and that you select for a **Field** in a query clause. This name may differ from the name displayed on the work item form. 
- **Reference name**: Specifies the name that you use when creating [WIQL query](../queries/wiql-syntax.md) or an [improvised work item template](../backlogs/work-item-template.md), using [REST API commands](/rest/api/azure/devops/wit/), or defining [XML work item type definitions](/previous-versions/azure/devops/reference/xml/field-definition-element-reference). Once defined, the reference name cannot be changed.  
 
For a description of each field attribute and how you can list them, see [Field attributes](#field-attributes) and [List field attributes](#list-attributes) later in this article. For an overview of WITs and work items, see [Track work with user stories, issues, bugs, features, and epics](about-work-items.md). 


### What is a field? How are field names used?  

Each [work item type](../backlogs/add-work-items.md) is associated with 31 system fields and several more type-specific fields. You use work items to plan and track your project.  

Each field supports tracking a piece of information about the work to perform. Values you assign to a field are stored in the work tracking data store which you can create queries to determine status and trends.    

For descriptions and usage of each field defined for the core system processes, [Agile, Basic, Scrum, and CMMI processes](guidance/choose-process.md), see [Work item field index](guidance/work-item-field.md).  

### Field names  

A work item field name uniquely identifies each work item field. Make sure your field names fall within these guidelines:  

- Field names must be unique within the account/project collection  
- Field names must be 128 or fewer Unicode characters  
- Field names can't contain any leading or trailing spaces, nor two or more consecutive spaces  
- Field names must contain at least one alphabetic character  
- Field names can't contain the following characters: ```.,;'`:~\/\*|?"&%$!+=()[]{}<>```.   

Because custom fields are defined for an organization or collection, you can't add a custom field to a process with the same field name that you add to another process.  

For more information, see [Naming restrictions and conventions](../../organizations/settings/naming-restrictions.md#work-items-work-item-types-and-customizations).


### System and predefined fields

All system defined fields have reference names that begin with *System*, for example, System.AreaPath, System.AssignedTo, and continue in that pattern.

Predefined fields defined by the default process begin with Microsoft.VSTS and then further differ based on their usage. Examples of predefined fields that are used in common, for scheduling purposes and integration with Office Project, for integration with Team Foundation Build, and integration with test case management (TCM) are as follows:

-   Microsoft.VSTS.Common.Priority  
-   Microsoft.VSTS.Scheduling.DueDate  
-   Microsoft.VSTS.Build.FoundIn   
-   Microsoft.VSTS.TCM.Steps  

For an overview of all system and predefined fields that are defined for the default processes/process templates, see [Work item field index](guidance/work-item-field.md). For more information about specifying field names, see [Naming restrictions](../../organizations/settings/naming-restrictions.md).

### Custom fields 

Because custom fields are defined for an organization or project collection, you can't add a custom field to a process with the same field name that you add to another process.  

When adding custom fields, note the following limits:  
*   A maximum of 64 fields can be defined for each WIT  
*   A maximum of 512 fields can be defined per process   

The field data type determines the kind and size of data that you can store in the field. A field can have only one type defined within a project collection. This restriction encourages organizations to use common fields across projects and work item types.

::: moniker range=">= azure-devops-2019"

When you add a custom field to an inherited process, Azure DevOps assigns a reference name prefixed with *Custom* and then the name of the field with spaces removed. For example, you add a field named *DevOps Triage*, the reference name is **Custom.DevOpsTriage**. No spaces are allowed within the reference name.  

::: moniker-end

## How can I determine the field data type? 

::: moniker range="azure-devops"

You can view the data type of fields defined for your organization by [opening the Process>Fields page](#review-fields).

> [!div class="mx-imgBorder"]  
> ![Screenshot of Organization Settings, Process, Fields page.](media/fields/list-fields.png)  

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

When your project collection uses the Inheritance process model to customize work tracking, you can view the data type of fields by [opening the Process>Fields page](../work-items/work-item-fields.md#review-fields). 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Collection Settings, Process, Fields page.](media/fields/list-fields.png)  

If the On-premises XML process model is used, you can look up the data type through the [Work item field index](guidance/work-item-field.md). Or, you can open the Work Item Field Explorer to review the fields defined and their attribute assignments, or use the **witadmin listfields** command to list the field attributes. For more information, see [Work Item Field Explorer](#wi-explorer) and [List field attributes](#list-attributes) later in this article.

::: moniker-end

::: moniker range="tfs-2018" 

You can look up the data type through the [Work item field index](guidance/work-item-field.md). Or, you can open the Work Item Field Explorer to review the fields defined and their attribute assignments, or use the **witadmin listfields** command to list the field attributes.  For more information, see [Work Item Field Explorer](#wi-explorer) and [List field attributes](#list-attributes) later in this article.

::: moniker-end

<a id="review-fields" />

::: moniker range=">= azure-devops-2019"

## Process>Fields web page 

To review the list of fields defined for an organization or collection, open **Organization settings>Process>Fields**.   

1. Choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Projects**. Then choose **Organization settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Choose Organization settings.](../../media/settings/open-admin-settings-vert.png)  

1. Then, choose **Process**. 
   
	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Choose Process.](/azure/devops/organizations/settings/work/media/process/open-process-page-s150.png) 

	> [!NOTE]  
	> If you don't see **Process**, then you're working from TFS-2018 or earlier version. The **Process** page isn't supported. You must use the features supported for the [On-premises XML process model](../../reference/customize-work.md).

1. Then, choose **Fields**. 

	Fields listed correspond to all fields defined for the organization or collection. This includes all custom fields and those defined for system processes. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Make a copy of a selected inherited process.](media/fields/list-fields.png) 

	> [!NOTE]  
	> If you don't see **Fields**, then your collection uses the On-premises XML process. The Fields page isn't supported for that process.  

	For descriptions and usage of each field, as well as the Reference name for each field, you can look it up from the [Work item field index](guidance/work-item-field.md). You can also get the Reference name of fields from the [Work Item Types Field - List REST API](/rest/api/azure/devops/wit/work-item-types-field/list).


::: moniker-end


<a id="wi-explorer" />

## Work Item Field Explorer 

You can look up the assignments of field attributes using the Work Item Field Explorer tool.  

![Screenshot of Work item field explorer.](media/fields/work-item-field-explorer.png)


To access the Work Item Field Explorer, you must install the Process Editor Tool. Based on the version of Visual Studio you have installed, get the Process Editor Tool from one of the following extensions. 

[!INCLUDE [temp](../../includes/process-editor-tool.md)]

 
<a id="field-attributes" />

## Field attributes

There are many non-changeable and hidden attributes for each work item field. The following table describes each attribute. Attributes have different names based on if you get them through the [**Fields - Get** **REST** API](/rest/api/azure/devops/wit/fields/get) or view through the [Work Item Field Explorer (**WIFE**) tool](#wi-explorer). 

Attributes assigned to a field depend on the platform and version you use. For example, some attributes aren't support with the Inheritance process. To look up the reference name for a field, see  [Work item field index](guidance/work-item-field.md).

:::row:::
   :::column span="1":::
   **Attribute**
   :::column-end:::
   :::column span="1":::
   **Attribute type**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   REST:  
   WIFE: **AllowedValues**  
   :::column-end:::
   :::column span="1":::
   collection
   :::column-end:::
   :::column span="3":::
   Gets the collection of valid values for a field that contains picklist values. You can change this by specifying a picklist or global list (on-premises).  
   Can change?=Yes 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **canSortBy**  
   WIFE: **CanSortBy**  
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether you can sort query results with this field.   
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **description**  
   WIFE: **HelpText**  
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Specifies a description for the field, which also defines the help text that appears when you hover over the field within the work item form.     
   Can change?=Yes 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:  
   WIFE: **ID**  
   :::column-end:::
   :::column span="1":::
   Integer
   :::column-end:::
   :::column span="3":::
   Specifies the internal ID of the field.  
   Can change?=No  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsCloneable**  
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether the value defined for the field is copied when a user chooses to copy a work item. For example, **Title**, **Tags**, and **Description** fields are copied, but the **ID** and **History** fields aren't copied.  
   Can change?=No  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:    
   WIFE: **IsComputed**  
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates if the value set by this field is computed by the system (True) or not (False). Examples of computed fields are ones that are set by the system, such as the **ID**, **Revised Date**, **Changed Date**, and **External Link Count**.  
   Can change?=No  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsCoreField**
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether this field is specified for all work item types.  
   Can change?=No  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsEditable**
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates if users can modify this field (True) or not (False). Examples of non-editable fields are ones that are set by the system, such as the **ID**, **Revision**, **Created By**, and **Changed By** fields  
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **isIdentity**  
   WIFE: **IsIdentity**
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether this field is an *Identity* field. Identity fields are string fields used to store user identities.   
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsIndexed<sup>1</sup>**
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether this field is indexed to support search.  
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsLongText**
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates that the field can contain more than 255 characters, such as fields assigned a data type of *PlainText*, *HTML*, or *History*.  
   Can change?=No 
   :::column-end:::
:::row-end::: 
:::row:::
   :::column span="1":::
   REST:  **isPicklist<sup>2</sup>**
   WIFE:   
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether the field is associated with a picklist. The value is set to *True* when a custom field is defined for Azure DevOps and Picklist (String) or Picklist (Integer) type is selected. The value is set to *False* for inherited fields that define picklists.    
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **isPicklistSuggested<sup>2</sup>**
   WIFE:   
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether the field allows users to enter their own values for a picklist. The value is set to *True* when a custom field is defined for Azure DevOps, Picklist (String), or Picklist (Integer) type is selected, and the checkbox for **Allow users to set their own values** is checked.  
   Can change?=Yes 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **isQueryable**  
   WIFE: **IsQueryable**  
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates if the field shows up within the set of fields you can add to filter a work item query (True), or not (False). Most fields are queryable.   
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsReportable <sup>3</sup>**  
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates if the reportable attribute is defined or set to anything other than **None**. This attribute can be changed for on-premises environments.  
   Can change?=Yes 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsUsedInGlobalWorkflow**  
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates if the field is defined within a [global workflow](/previous-versions/azure/devops/reference/xml/global-workflow-xml-element-reference).   
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **IsUserNameField**  
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates if the field is used to display an Identity field.   
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **name**  
   WIFE: **Name**  
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Friendly name assigned to the field. The friendly name can't be changed for Azure DevOps, but can be changed for on-premises using the **witadmin changefield** command.   
   Can change?=On-prem only
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **picklistId**  
   WIFE: **HelpText**  
   :::column-end:::
   :::column span="1":::
   GUID
   :::column-end:::
   :::column span="3":::
   If the field is a picklist, the identifier of the associated picklist, otherwise null. A unique GUID value is assigned when a custom field is defined for Azure DevOps and Picklist (String) or Picklist (Integer) type is selected.  
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **ProhibitedValues**  
   :::column-end:::
   :::column span="1":::
   collection
   :::column-end:::
   :::column span="3":::
   Gets the collection of prohibited values for a field that specifies such values. You can only define prohibited values for on-premises deployments.  
   Can change?=On-prem only
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **readOnly**  
   WIFE:   
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether the field is set to read only. For Azure DevOps Services, only custom fields can be changed to be read-only. System fields cannot be modified.  
   Can change?=Yes 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **referenceName**  
   WIFE: **ReferenceName**  
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Specifies the reference name of a field.  
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:    
   WIFE: **ReportingAttributes<sup>3</sup>**
   :::column-end:::
   :::column span="1":::
    
   :::column-end:::
   :::column span="3":::
   Specifies **Detail**, **Dimension**, or **Measure**, depending on whether and how you want the field to be included in reports. Data from fields that have a value other than **None** for this attribute are exported to the data warehouse and can be included in SQL reports.  
   Can change?=On-prem only 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **ReportingName<sup>3</sup>**
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Specifies the label for a field when data appears in SQL reports. If you don't specify a value, the field's friendly name is used.  
   Can change?=On-premises only
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **ReportingReferenceName<sup>3</sup>**
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Specifies a different reference name to a field that is used when data is exported to the relational data warehouse. If you don't specify a value, the fields reference name is used.   
   Can change?=On-premises only
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **supportedOperations**  
   WIFE:   
   :::column-end:::
   :::column span="1":::
   *set*
   :::column-end:::
   :::column span="3":::
   The set of query operators that are valid for use when referencing this field. For a quick reference of supported operations based on data type, see [Query quick reference, Operators, and macros supported for each data type](../queries/query-index-quick-ref.md#fields-operators-macros).  
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:    
   WIFE: **SupportsTextQuery**
   :::column-end:::
   :::column span="1":::
   boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether the field supports text queries such as **Contains Words**, **Does Not Contains Words**.   
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST:   
   WIFE: **SystemType**  
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Specifies the data type of the field, referencing the system name such as System.DateTime or System.String.  
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **type**  
   WIFE: **FieldType**  
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Specifies the data type of the field, such as *Boolean*, *DateTime*, *Integer*, *String*, and so on. For a complete list and descriptions, see [Query fields, operators, and macros](../queries/query-operators-variables.md).  
   Can change?=No 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **usage**  
   WIFE: **Usage**  
   :::column-end:::
   :::column span="1":::
   string
   :::column-end:::
   :::column span="3":::
   Specifies whether the field is intended for use with work items (*WorkItem*) or work item link (*WorkItemLink*) objects. The usage for most fields is WorkItem. For a complete list of usage values, see [Get Fields, FieldUsage](/rest/api/azure/devops/wit/fields/get#fieldusage).  
   Can change?=No 
   :::column-end:::
:::row-end:::

> [!NOTE]  
> 1. For on-premises deployments, you can enable indexing for a field to improve query response times when filtering on the field. For more information, see [Indexed fields](#index-fields) later in this article. 
> 2. The **isPicklist** and **isPicklistSuggested** attributes are only assigned to custom fields defined for an inherited process. The Inherited process model is supported for Azure DevOps Server 2019 and later versions. For more information, see [Inherited process model](../../organizations/settings/work/inheritance-process-model.md).
> 3. All reporting attributes are valid only for on-premises deployments whose projects have been configured to support SQL Server Reporting and SQL Server Analysis Services.   


<a id="reportable-attributes"> </a>

::: moniker range="< azure-devops-2022"

## Reportable attributes

All reporting attributes are valid only for on-premises deployments whose projects have been configured to support SQL Server Reporting and SQL Server Analysis Services. For more information, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).

For a description of each reportable attribute, see [Add or modify work item fields to support reporting]((/previous-versions/azure/devops/reference/xml/add-or-modify-work-item-fields-to-support-reporting). 

For a list of fields that have reportable attributes defined by default, see [Reportable fields reference](/previous-versions/azure/devops/reference/xml/reportable-fields-reference) .

::: moniker-end

<a id="index-fields" />

::: moniker range="< azure-devops-2022"

## Indexed fields

You can enable or disable indexing for a work item field by using the **witadmin indexfield** command. When you enable indexing for a field, you may increase the performance of finding work items whose queries specify that field. By default, the following fields are indexed: Assigned To, Created Date, Changed By, State, Reason, Area ID, Iteration ID, and Work Item Type. 

If you add a custom field that you use in many of your work item queries, you may want to enable indexing for that field. For more information, see [Manage work item fields (witadmin)](../../reference/witadmin/manage-work-item-fields.md).

::: moniker-end


<a id="list-attributes" />


## List field attributes 

::: moniker range="azure-devops"  

You can list the attributes assigned to a field by using the [**Fields - Get** REST API](/rest/api/azure/devops/wit/fields/get). Enter your organization name for *OrganizationName*.

> [!div class="tabbedCodeSnippets"]
> ```REST
> https://dev.azure.com/OrganizationName/_apis/wit/fields/FieldReferenceName
> ```

For example, here we list the attributes for the Iteration Path, specifying the reference name, `System.IterationPath`, for the fabrikam organization. 

```REST
https://dev.azure.com/fabrikam/_apis/wit/fields/System.IterationPath
```

**Returned data:**

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
> "name": "Iteration Path",
> "referenceName": "System.IterationPath",
> "description": "The iteration within which this bug will be fixed",
> "type": "treePath",
> "usage": "workItem",
> "readOnly": false,
> "canSortBy": true,
> "isQueryable": true,
> "supportedOperations": [
> {
> "referenceName": "SupportedOperations.Under",
> "name": "Under"
> },
> {
> "referenceName": "SupportedOperations.NotUnder",
> "name": "Not Under"
> },
> {
> "referenceName": "SupportedOperations.Equals",
> "name": "="
> },
> {
> "referenceName": "SupportedOperations.NotEquals",
> "name": "<>"
> },
> {
> "referenceName": "SupportedOperations.In",
> "name": "In"
> },
> {
> "name": "Not In"
> }
> ],
> "isIdentity": false,
> "isPicklist": false,
> "isPicklistSuggested": false,
> "url": "https://dev.azure.com/mseng/_apis/wit/fields/System.IterationPath"
> }
> ```

::: moniker-end

::: moniker range="< azure-devops"  

You can list the attributes assigned to a field by using the [**Fields - Get** REST API](/rest/api/azure/devops/wit/fields/get/?view=vsts-rest-tfs-4.1&preserve-view=true). Enter your organization name for *OrganizationName*. To get started using REST, see [Azure DevOps Services REST API Reference](/rest/api/azure/devops)

> [!div class="tabbedCodeSnippets"]
> ```REST
> https://{ServerName:Port}/tfs/{Collection}/_apis/wit/fields/FieldReferenceName?api-version={version}
> ```

For example, here we list the attributes for the Iteration Path, specifying the reference name, `System.IterationPath`, for the fabrikam server. 

```REST
https://fabrikam:8080/tfs/DefaultCollection/_apis/wit/fields/System.IterationPath?api-version=4.1
```

**Returned data:**

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
> "name": "Iteration Path",
> "referenceName": "System.IterationPath",
> "description": "The iteration within which this bug will be fixed",
> "type": "treePath",
> "usage": "workItem",
> "readOnly": false,
> "canSortBy": true,
> "isQueryable": true,
> "supportedOperations": [
> {
> "referenceName": "SupportedOperations.Under",
> "name": "Under"
> },
> {
> "referenceName": "SupportedOperations.NotUnder",
> "name": "Not Under"
> },
> {
> "referenceName": "SupportedOperations.Equals",
> "name": "="
> },
> {
> "referenceName": "SupportedOperations.NotEquals",
> "name": "<>"
> },
> {
> "referenceName": "SupportedOperations.In",
> "name": "In"
> },
> {
> "name": "Not In"
> }
> ],
> "isIdentity": false,
> "isPicklist": false,
> "isPicklistSuggested": false,
> "url": "https://fabrikam:8080/tfs/DefaultCollection/_apis/wit/fields/System.IterationPath?api-version=4.1"
> }
> ```

::: moniker-end

::: moniker range="< azure-devops"  

### List attributes using `witadmin` command-line tool

You can list select field attributes&mdash;such as the data type, reportable attributes, and indexing&mdash;using the [**witadmin listfields** command](../../reference/witadmin/manage-work-item-fields.md). 

For example, you can enter the following command to list the attributes defined for a specified field, such as Microsoft.VSTS.Common.Issue.  
  
> [!div class="tabbedCodeSnippets"]
> ```CMD
> witadmin listfields /collection:http://fabrikam:8080/tfs/DefaultCollection /n:Microsoft.VSTS.Common.Issue  
> ```  

Field and attribute information appears for the named field, as shown in this example.  

> [!div class="tabbedCodeSnippets"]
> ```CMD
> Field: Microsoft.VSTS.Common.Issue  
> Name: Issue  
> Type: String  
> Reportable As: dimension  
> Use: Adventure Works (Shared Steps), AW Future (Shared Steps), AW Current (Shared Steps)  
> Indexed: False  
> ```  

The **Use** parameter indicates the name of each project and the work item type where the field is used. 

::: moniker-end


::: moniker range="tfs-2018"  

## Project integration and project field mapping  

You can change how work tracking fields map to fields in Project, and you can change how specific fields are published. See [The Microsoft Project Field Mapping File](/previous-versions/azure/devops/reference/xml/customize-project-field-mapping-file). 

::: moniker-end  

## Add and modify fields   

::: moniker range="azure-devops"  

To add fields to a process, you add them to one or more work item types. For more information, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md). 

::: moniker-end  

::: moniker range=">= azure-devops-2019 < azure-devops"

You can add or modify the fields contained within a WIT or add a custom WIT. For more information, see:
- For project collections that use the Inheritance process model: [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md).  
- For project collections that use the On-premises XML process model: [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md). 

You can change the field name, the index, and the report attributes for any field except system fields by using the **witadmin** command-line tool. For more information, see [Manage work item fields-witadmin](../../reference/witadmin/manage-work-item-fields.md).  

::: moniker-end  

::: moniker range="< azure-devops-2019"  

To add fields to a project, you add them to one or more work item types. See [Add or modify a field to track work](../../reference/add-modify-field.md).  

You can change the field name, the index, and the report attributes for any field except system fields by using the **witadmin** command-line tool. For more information, see [Manage work item fields-witadmin](../../reference/witadmin/manage-work-item-fields.md).  

::: moniker-end  


## Related articles  

::: moniker range="azure-devops"  
- [Query quick reference](../queries/query-index-quick-ref.md)
- [Work item field index](guidance/work-item-field.md) 
- [Add and manage fields for an inherited process](../../organizations/settings/work/customize-process-field.md)
- [Metadata reference for Azure Boards Analytics](../../report/analytics/entity-reference-boards.md)
::: moniker-end  

::: moniker range=">= azure-devops-2019 < azure-devops"

- [Query quick reference](../queries/query-index-quick-ref.md)
- [Work item field index](guidance/work-item-field.md) 
- [Choose the process model for your project collection](../../reference/customize-work.md#choose-process-model)
- [Add or modify a field to track work](../../reference/add-modify-field.md)
- [Manage work item fields using witadmin](../../reference/witadmin/manage-work-item-fields.md)
- [Metadata reference for Azure Boards Analytics](../../report/analytics/entity-reference-boards.md)

::: moniker-end  

::: moniker range="tfs-2018"  

- [Query quick reference](../queries/query-index-quick-ref.md)
- [Work item field index](guidance/work-item-field.md) 
- [Add or modify a field to track work](../../reference/add-modify-field.md)
- [Manage work item fields-witadmin](../../reference/witadmin/manage-work-item-fields.md)

::: moniker-end  



