---
title: List work item fields and attributes in Azure Boards
titleSuffix: Azure Boards
description: Learn about work item fields, their attributes, and how to modify them in Azure Boards. 
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.topic: how-to
ms.date: 11/21/2024
---


# List work item fields and attributes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"
Work item fields are used to track information within Azure DevOps. These fields are defined at the organization level and are shared across all projects in the organization. To review the fields defined for your organization, you can use one of the following two tools, available for both Inherited and Hosted XML process models:

- [Process > Fields web page](#review-fields)
- [Work Item Field Explorer](#wi-explorer)
::: moniker-end

::: moniker range=" < azure-devops"
Work item fields are used to track information within Azure DevOps. These fields are defined at the collection level and shared across all projects within that collection. To review the fields defined for your collection, use one of the following tools:

- [Process > Fields web page](#review-fields): Available for the **Inherited** process model.
- [Work Item Field Explorer](#wi-explorer): Available for both **Inherited** and **On-premises XML** process models. 
::: moniker-end

For a description of each field defined with a system process, see [Work item field index](guidance/work-item-field.md).  

## Prerequisites 

**Permissions**: To view the fields defined for an organization or collection, be a member of the **Project Collection Valid Users** application group or have the **View instance-level information** permission set to **Allow** for the organization or collection.

<a id="list-fields"></a> 

### List or review fields  

To list or review fields, use one of the following tools based on your process model—**Inherited**, **Hosted XML**, or **On-premises XML**. For an index of fields defined within the default processes, see [Work item field index](guidance/work-item-field.md). 

| Tool | Inheritance | Hosted XML | On-premises XML |
| --- | --- | --- | --- |
| [Web portal: List inherited and custom-defined fields](#review-fields) | ✔️  | ✔️1 |     |
| [Work item field explorer](#wi-explorer) | ✔️  | ✔️  | ✔️  |
| [witadmin listfields command line tool](../../reference/witadmin/manage-work-item-fields.md) | ✔️  | ✔️  | ✔️  |
 
> [!NOTE]  
> 1. Only supported for default processes (Agile, CMMI, Scrum). 

## Field data types and names 

Each work item type specifies the fields included in work items of that type. Each field has multiple attributes, many of which are system-defined and immutable.

Fields get defined by the following three attributes:

- **Data type**: Indicates the kind of data that can be entered into the field, such as Boolean, Double, Integer, HTML, or String. For detailed descriptions of each data type, see [Query fields, operators, and macros](../queries/query-operators-variables.md#field-values).
- **Friendly name**: The user-friendly name assigned to the field, used when selecting a **Field** in a query clause. This name might differ from the name displayed on the work item form.
- **Reference name**: The identifier used when creating [WIQL queries](../queries/wiql-syntax.md), [improvised work item templates](../backlogs/work-item-template.md), executing [REST API commands](/rest/api/azure/devops/wit/), or defining [XML work item type definitions](/previous-versions/azure/devops/reference/xml/field-definition-element-reference). The reference name is permanent and can't be changed once set.

For a detailed description of each field attribute and instructions on how to list them, see [Field attributes](#field-attributes) and [List field attributes](#list-attributes) later in this article. For an overview of work item types (WITs) and work items, refer to [Track work with user stories, issues, bugs, features, and epics](about-work-items.md).

### What is a field? How are field names used?  

Each [work item type](../backlogs/add-work-items.md) includes 31 system fields and several type-specific fields. Work items are used to plan and track your project.

Each field captures specific information about the work to be performed. The values you assign to these fields are stored in the work tracking data store, enabling you to create queries that determine status and trends.

For descriptions and usage of each field defined for the core system processes—[Agile, Basic, Scrum, and CMMI](guidance/choose-process.md)—refer to the [Work item field index](guidance/work-item-field.md).

### Field names  

A work item field name uniquely identifies each work item field. Ensure your field names adhere to the following guidelines:

- **Uniqueness**: Field names must be unique within the account or project collection.
- **Length**: Field names must contain 128 Unicode characters or fewer.
- **Spacing**: Field names can't have leading or trailing spaces or contain two or more consecutive spaces.
- **Composition**: Field names must include at least one alphabetic character.
- **Prohibited Characters**: Field names can't include the following characters: `.,;'`:~/*|?"&%$!+=()[]{}<>`.

Since custom fields are defined at the organization or collection level, you can't add a custom field with the same name to multiple processes.

For more information, see [Naming restrictions and conventions](../../organizations/settings/naming-restrictions.md#work-items-work-item-types-and-customizations).

### System and predefined fields

A work item field name uniquely identifies each field within Azure DevOps. Ensure your field names comply with the following guidelines:

- **Uniqueness**: Field names must be unique within an account or project collection.
- **Length**: Field names must be 128 Unicode characters or fewer.
- **Spacing**: Field names can't have leading or trailing spaces or contain multiple consecutive spaces.
- **Composition**: Field names must include at least one alphabetic character.
- **Prohibited Characters**: Field names can't include the following characters: `.,;'`:~/*|?"&%$!+=()[]{}<>`.

Since custom fields are defined at the organization or collection level, you can't add a custom field with the same name to multiple processes.

For more information, see [Naming restrictions and conventions](../../organizations/settings/naming-restrictions.md#work-items-work-item-types-and-customizations).

### Custom fields 

Because custom fields are defined at the organization or project collection level, you can't add a custom field with the same name to multiple processes.

When adding custom fields, note the following limits:
- **Maximum fields per work item type (WIT):** 64
- **Maximum fields per process:** 512

The field data type determines the kind and size of data that can be stored in the field. Each field can have only one type defined within a project collection, encouraging the use of common fields across different projects and work item types.

When you add a custom field to an inherited process, Azure DevOps assigns a reference name prefixed with *Custom* followed by the field name without spaces. For example, adding a field named *DevOps Triage* results in the reference name **Custom.DevOpsTriage**. Spaces aren't allowed in reference names.

For more information, see [Naming restrictions and conventions](../../organizations/settings/naming-restrictions.md#work-items-work-item-types-and-customizations).

## How can I determine the field data type? 

::: moniker range="azure-devops"

You can view the data type of fields defined for your organization by [opening the Process>Fields page](#review-fields).

> [!div class="mx-imgBorder"]  
> ![Screenshot of Organization Settings, Process, Fields page.](media/fields/list-fields.png)  

::: moniker-end

::: moniker range=" < azure-devops"

When your project collection uses the **Inheritance** process model to customize work tracking, you can view the data type of fields by [opening the Process > Fields page](../work-items/work-item-fields.md#review-fields).

> [!div class="mx-imgBorder"]
> ![Screenshot of Collection Settings, Process, Fields page.](media/fields/list-fields.png)

If your project collection uses the **On-premises XML** process model, you can determine the data type through the [Work item field index](guidance/work-item-field.md). Alternatively, you can:

- Open the **Work Item Field Explorer** to review defined fields and their attributes.
- Use the **witadmin listfields** command to list field attributes.

For more information, see [Work Item Field Explorer](#wi-explorer) and [List field attributes](#list-attributes) later in this article.

::: moniker-end

<a id="review-fields"></a>

## Review fields list 

To review the list of fields defined for an organization or collection, do the following steps: 

1. Select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Projects**. Then choose **Organization settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Choose Organization settings.](../../media/settings/open-admin-settings-vert.png)  

2. Select **Process**. 
   
	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Choose Process.](/azure/devops/organizations/settings/work/media/process/open-process-page-s150.png)

3. Select **Fields**. 

	Fields listed correspond to all fields defined for the organization or collection, which includes all custom fields and the fields defined for system processes. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Make a copy of a selected inherited process.](media/fields/list-fields.png) 

	> [!NOTE]  
	> If you don't see **Fields**, then your collection uses the On-premises XML process. The Fields page isn't supported for that process.  

	For descriptions, usage, and reference names of each field, refer to the [Work item field index](guidance/work-item-field.md). Additionally, you can retrieve field reference names using the [Work Item Types Field - List REST API](/rest/api/azure/devops/wit/work-item-types-field/list).

::: moniker-end

<a id="wi-explorer"></a>

## Work Item Field Explorer 

You can look up the assignments of field attributes using the Work Item Field Explorer tool.  

![Screenshot of Work item field explorer.](media/fields/work-item-field-explorer.png)

To access the Work Item Field Explorer, install the Process Editor Tool. Based on your installed version of Visual Studio, get the Process Editor Tool from one of the following extensions. 

[!INCLUDE [temp](../../includes/process-editor-tool.md)]

<a id="field-attributes"></a>

## Field attributes

There are many nonchangeable and hidden attributes for each work item field. The following table describes each attribute. Attributes have different names depending on whether you retrieve them through the [**Fields - Get REST API**](/rest/api/azure/devops/wit/fields/get) or view them through the [Work Item Field Explorer (**WIFE**) tool](#wi-explorer).

Attributes assigned to a field depend on the platform and version you're using. For example, some attributes aren't supported with the Inheritance process. To look up the reference name for a field, see the [Work item field index](guidance/work-item-field.md).

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
   Indicates if users can modify this field (True) or not (False). Examples of noneditable fields are ones that are set by the system, such as the **ID**, **Revision**, **Created By**, and **Changed By** fields  
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
   Boolean
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
   Boolean
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
   Can change?=On-premises only
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
   Can change?=On-premises only
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   REST: **readOnly**  
   WIFE:   
   :::column-end:::
   :::column span="1":::
   Boolean
   :::column-end:::
   :::column span="3":::
   Indicates whether the field is set to read only. For Azure DevOps Services, only custom fields can be changed to be read-only. System fields can't be modified.  
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
   Can change?=On-premises only 
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

All reporting attributes are valid only for on-premises deployments where projects are configured to support SQL Server Reporting and SQL Server Analysis Services. For more information, see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).

For descriptions of each reportable attribute, refer to [Add or modify work item fields to support reporting](/previous-versions/azure/devops/reference/xml/add-or-modify-work-item-fields-to-support-reporting).

To see a list of fields with reportable attributes defined by default, see [Reportable fields reference](/previous-versions/azure/devops/reference/xml/reportable-fields-reference).

::: moniker-end

<a id="index-fields"></a>

::: moniker range="< azure-devops-2022"

## Indexed fields

Use the **witadmin indexfield** command to enable or disable indexing for a work item field. Enabling indexing for a field can improve the performance of queries that specify that field. By default, the following fields are indexed:

- Assigned To
- Created Date
- Changed By
- State
- Reason
- Area ID
- Iteration ID
- Work Item Type

If you add a custom field used frequently in your work item queries, consider enabling indexing for that field. For more information, see [Manage work item fields (witadmin)](../../reference/witadmin/manage-work-item-fields.md).

::: moniker-end

<a id="list-attributes"></a>


## List field attributes 

::: moniker range="azure-devops"  

You can list the attributes assigned to a field by using the [**Fields - Get REST API**](/rest/api/azure/devops/wit/fields/get). Replace *OrganizationName* with your actual organization name.

> [!div class="tabbedCodeSnippets"]
> ```REST
> https://dev.azure.com/OrganizationName/_apis/wit/fields/FieldReferenceName
> ```

For example, to list the attributes for the Iteration Path, use the reference name `System.IterationPath` for the `fabrikam` organization:

```REST
https://dev.azure.com/fabrikam/_apis/wit/fields/System.IterationPath

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

::: moniker range=" < azure-devops"

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

## Add and modify fields   

::: moniker range="azure-devops"  

To add fields to a process, you add them to one or more work item types. For more information, see [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md). 

::: moniker-end  

::: moniker range=" < azure-devops"

You can add or modify the fields contained within a WIT or add a custom WIT. For more information, see:
- For project collections that use the Inheritance process model: [Customize an inheritance process](../../organizations/settings/work/inheritance-process-model.md).  
- For project collections that use the On-premises XML process model: [Customize the On-premises XML process model](../../reference/on-premises-xml-process-model.md). 

You can change the field name, the index, and the report attributes for any field except system fields by using the **witadmin** command-line tool. For more information, see [Manage work item fields-witadmin](../../reference/witadmin/manage-work-item-fields.md).  

::: moniker-end  

## Related articles  

::: moniker range="azure-devops"  
- [Refer to the Query quick reference](../queries/query-index-quick-ref.md) to quickly understand query syntax and usage.
- [Explore the Work item field index](guidance/work-item-field.md) to view all available work item fields.
- [Add and manage fields for an inherited process](../../organizations/settings/work/customize-process-field.md) to customize fields according to your inherited process requirements.
- [Access the metadata reference for Azure Boards Analytics](../../report/analytics/entity-reference-boards.md) to understand analytics metadata and reporting capabilities.
::: moniker-end  

::: moniker range=" < azure-devops"

- [Refer to the Query quick reference](../queries/query-index-quick-ref.md) to quickly understand query syntax and usage.
- [Explore the Work item field index](guidance/work-item-field.md) to view all available work item fields.
- [Choose the process model for your project collection](../../reference/customize-work.md#choose-process-model) to select the appropriate process model for your needs.
- [Modify a work item field](../../reference/add-modify-field.md) according to your project's requirements.
- [Manage work item fields using witadmin](../../reference/witadmin/manage-work-item-fields.md) to perform advanced field management tasks.
- [Access the metadata reference for Azure Boards Analytics](../../report/analytics/entity-reference-boards.md) to understand analytics metadata and reporting capabilities.

::: moniker-end
