---
title: Customize a process that imports by using Hosted XML
titleSuffix: Azure DevOps Services
description: Customize a Hosted XML process to support custom fields, work item types, global lists, and process configuration.
ms.service: azure-devops-boards
ms.custom: engagement-fy23
ms.assetid: AA5B592D-8F76-4974-9918-B8B523A6F23F
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 04/29/2025
---

# Customize a Hosted XML process

[!INCLUDE [version-eq-azure-devops](../../../../includes/version-eq-azure-devops.md)]

Azure DevOps supports adding and updating processes through an administrative experience that is a web-based [import process](import-process.md). After you add a process, you can create one or more projects from it. You can update the process at any time by importing it again. The changes made to the process template are then applied to all projects that use the process.

> [!IMPORTANT]
> With the Hosted XML process model, you customize work tracking by updating select XML definition files of a process template. This feature is available only when data gets migrated to Azure DevOps Services by use of [Azure DevOps Data Migration Tool](../../../../migrate/migration-overview.md). 
> If you use the Inheritance process model, you can customize your work tracking through the user interface by [creating an Inheritance process](../manage-process.md). If you use the on-premises XML process model, you can customize a process template, see [Upload or download a process template](../../../../boards/work-items/guidance/manage-process-templates.md) and [Customize a process template](../../../../reference/process-templates/customize-process.md)
>
>For more information about customization and process models, see [Customize work tracking](../../../../reference/customize-work.md).

A process is a zip file that contains a set of interdependent files. These files define the building blocks of the work-item tracking system and other subsystems in Azure DevOps. Some building blocks update existing projects, while others apply only to new projects. See the following table for the full list of building blocks:

| **Used when importing/updating a process** | **Used when creating a new project** | **Replaced by system defaults** | **Ignored** |
|------------|------------------------|-------------------------|-------------|
| Work Item Tracking  | Areas and Iterations    | Build      | Microsoft Project Mappings |
| Work item types (WITs)       | Test Management   | Lab Management  | Reports      |
| Categories        | Work Items     | Version Control       | Portal (SharePoint Products) |
| Process Configuration        | Work Item Queries   |         |             |

## Prerequisites

[!INCLUDE [process-prerequisites](../../includes/process-prerequisites.md)]

## Customize a process

Customizing a process is more efficient when you start with a well-defined process rather than building one from scratch. 

If you're updating an existing process previously used with Azure DevOps Server, ensure it adheres to the [constraints required for template import](#rule-summary) to avoid validation errors during the import process.

<a id="open-process-wit"></a>

### Export and import a process

Do the following steps to import or export a process:

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
2. Select :::image type="icon" source="../../../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   > [!div class="mx-imgBorder"] 
   > ![Screenshot shows highlighted Organization settings button.](../../../../media/settings/open-admin-settings-vert.png)  

3. Select **Process**. 
   
   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows Organization settings, Process page.](/azure/devops/organizations/settings/work/media/process/open-process-page-s150.png) 

   > [!IMPORTANT]  
   > If you don't see **Process**, then you're working from an earlier version where the **Process** page isn't supported. Use the features supported for the [On-premises XML process model](../../../../reference/customize-work.md).

4. Select the ellipsis (...) to open the shortcut menu for the Hosted XML process that you want to export. You can export only Hosted XML processes.

    > [!div class="mx-imgBorder"]
    > ![Process page > Export Hosted XML process menu option ](media/export-process.png)

   Save the zip file and extract all files from it.

5. Rename the process within the ProcessTemplate.xml file located in the root directory.

   Name the process to distinguish it from existing ones.

   ```<name>MyCompany Agile Process  </name>```

   Change the version type, and change the major and minor numbers. Provide a distinct GUID for the type as in this example:

   ```<version type="F50EFC58-C2FC-4C66-9814-E395D90778A3" major="1" minor="1"/>```

6. Apply [supported customizations](#supported-customizations).

7. Create a zip file of all files and folders in the root directory.

8. [Import the zip file of your custom process](import-process.md).

<a id="supported-customizations"></a>

## Supported customizations

You can apply the following customizations to your process: 

* [Add, remove, or modify a WIT](../../../../reference/add-modify-wit.md)
* [Add or modify a field](../../../../reference/add-modify-wit.md)
* [Add up to five portfolio backlogs](../../../../reference/add-portfolio-backlogs.md)
* [Add categories](/previous-versions/azure/devops/reference/xml/use-categories-to-group-work-item-types) that you use in your process configuration
* [Modify process configuration](../../../../reference/xml/process-configuration-xml-element.md)

## Differences

Azure DevOps Services and Azure DevOps Server use different models for relating projects and processes:  
- In Azure DevOps Server, process templates serve as starting points for projects, and customization is scoped to individual projects.  
- In Azure DevOps Services, processes are shared across multiple projects and serve as the scope for customization.  

The structure and syntax for defining process templates are mostly consistent, with only minor differences between templates designed for Azure DevOps Services and Azure DevOps Server.

> [!NOTE]  
> Migration from Hosted XML to the inherited model is supported only in Azure DevOps Services, not in Azure DevOps Server.

<a id="restrictions"></a>
<a id="rule-summary"></a>

## Restrictions

You can import up to 32 processes into Azure DevOps Services. Your custom processes must conform to all of the following summarized rules. Otherwise, validation error messages might appear upon import.

## Unsupported customizations and unreferenced plug-in files

Any reference to the following objects in any of the XML definition files result in a validation error upon import:
*   Custom controls on work item forms  
*   Custom link types  
*   Global workflow 
*   Team field support
*   *For* and *Not* rules
*   Match rule support

The following plug-ins and their associated files aren't used in defining a process, nor used to update existing projects:
However, they're used to create objects or artifacts when you create a new project.  
*   Classification      
*   Work item queries, defined using the Work Item Query Language (WIQL) syntax  
*   Test Management
*   Work items

> [!NOTE]    
> The WIQL length must not exceed 32-K characters. The system doesn't allow you to create or run queries that exceed that length.

The following plug-ins and their associated files get replaced by system defaults:  
*   Build    
*   Groups and Permissions
*   Lab  
*   Version Control   

The following plug-ins and their associated files are ignored:  
*   Microsoft Project Mappings
*   Reports  
*   Windows SharePoint Services  

Custom plug-ins aren't supported.

### Object limits 
When customizing a process template for import, limit the number of the objects you define as specified in [Work tracking object limits](../object-limits.md).  

<a id="process"></a>

### Process template

Your ProcessTemplate.xml file must conform to the syntax and rules described in [ProcessTemplate XML element reference](/previous-versions/azure/devops/reference/process-templates/process-template-xml-elements-reference). Also, it must meet the following conditions:

* Limits the number of defined WITs to 64
* Contains only one Categories.xml definition file
* Contains only one ProcessConfiguration.xml definition file
* Uses unique friendly names across all fields and WIT definitions

Also, your process must pass the following validation checks:

* Process names are unique and contain at most 155 Unicode characters.
  * A template with the same name and version GUID as an existing process overwrites that process.
  * A template with the same name but a different version GUID generates an error.
  * Process names can't contain the following special characters:
     ```. , ; ' ` : / \ * | ? " & % $ ! + = ( ) [ ] { } < >```.\
    See [Naming restrictions](../../naming-restrictions.md) for more constraints.
* Process folders contain no .exe files. Even if you can import a process that contains an .exe file, project creation fails.
* The process's total size is at most 2 GB. Otherwise, project creation fails.

<a id="process-configuration"></a>

### Process configuration

The ProcessConfiguration.xml definition file must conform to the syntax and rules described in [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md). Also, it must meet the following conditions:

* Specifies all `TypeFields` elements
* Is limited to five portfolio backlogs
* Contains only one unparented portfolio backlog
* Specifies only one parent portfolio backlog for each subordinate portfolio backlog
* Contains required workflow state-to-metastate mappings and doesn't reference unsupported metastates

<a id="categories"></a>

### Categories

The Categories.xml definition file must conform to the syntax and rules described in [Categories XML element reference](/previous-versions/azure/devops/reference/xml/categories-xml-element-reference). Also, it must meet the following conditions:

* Is limited to 32 categories
* Defines all categories referenced in the ProcessConfiguration.xml definition file

<a id="work-item-types"></a>

### Work item types

A `WITD` element and its child elements must conform to the syntax and rules described in [WITD XML element reference](/previous-versions/azure/devops/reference/xml/all-witd-xml-elements-reference). Also, it must meet the following conditions:

* There are at most 1,024 fields within a single WIT and 1,024 fields across all WITs.
* The friendly name and required `refname` attribute assigned to a WIT are unique within the set of WIT definition files.
* The required `refname` attribute value doesn't contain disallowed characters or use the disallowed namespaces `System.Name` and `Microsoft.Name`.
* Reference names contain at least one period (.), and all other characters are letters with no spaces.
* The `WITD` element contains a `FORM` element that defines a `WebLayout` element conforming to the syntax specified in [WebLayout and Control elements](/previous-versions/azure/devops/reference/xml/weblayout-xml-elements).

<a id="work-item-fields"></a>

### Work item fields

A `FIELDS` element and its child elements must conform to the syntax and rules described in [FIELD XML element reference](/previous-versions/azure/devops/reference/xml/field-definition-element-reference). Also, it must meet the following conditions:

* The friendly name and required `refname` attribute assigned to a WIT are unique within the set of WIT definition files.
* The required `refname` attribute value doesn't contain disallowed characters or use the disallowed namespaces `System.Name` and `Microsoft.Name`.
* Reference names contain at least one period (.), and all other characters are letters with no spaces.

A `FIELD` element and its child elements can contain a `GLOBALLIST` element.

<a id="limits"></a>

#### Limit restrictions

* A `FIELDS` element is limited to 1,024 fields.
* A work item type is limited to 64 person-name fields. A person-name field is one with the attribute and value `syncnamechanges=true`.
* An `ALLOWEDVALUES` or `SUGGESTEDVALUES` element is limited to 512 `LISTITEM` elements.
* A field is limited to 1,024 rules.

<a id="required-fields"></a>

#### Required fields

| Category  | Fields to specify         |
|-----------|---------------------------|
| Process-configuration backlog | Fields used for the attributes and values `type=Team` and `type=Order`  |
| Regular backlog or portfolio backlog  | Field used for `type=Effort`     |
| TaskBacklog    | - Field used for `type=RemainingWork`</br>- Field used for `type=Activity`</br>- `ALLOWEDVALUES` rule for the field used for `type=Activity`        |

<a id="rule-restrictions"></a>

#### Rule restrictions

| Restriction       | Details                   |
|-------------------|---------------------------|
| Field-rule elements can't specify the *for* and *not* attributes. | These attributes aren't allowed in field-rule elements.|
| `FIELD` elements can't contain the child-rule elements `CANNOTLOSEVALUE`, `NOTSAMEAS`, `MATCH`, and `PROHIBITEDVALUES`. | These child-rule elements aren't supported within `FIELD` elements. |
| `FIELD` definitions for `System.Name` fields can't contain field rules, except for specific fields. | Only certain fields can contain specific rules, as outlined in this article. |
| `System.Title`   | Can contain the rules `REQUIRED` and `DEFAULT`.       |
| `System.Description`  | Can contain the rules `REQUIRED` and `DEFAULT`.  |
| `System.AssignedTo`   | Can contain the rules `REQUIRED`, `DEFAULT`, `ALLOWEXISTINGVALUE`, and `VALIDUSER`. |
| `System.ChangedBy`    | Can contain the rules `REQUIRED`, `DEFAULT`, `ALLOWEXISTINGVALUE`, and `VALIDUSER`. |

<a id="consistent-names-attributes"></a>

#### Consistent names and attributes

Within a process or a project collection, `name`, `type`, and other attributes that a `FIELD` element defines must be the same across all WIT definitions.

<a id="identity-fields"></a>

#### Identity fields 

Identity fields correspond to fields used to contain account, user, or group names. The following core system fields are hard-coded as identity fields:

| Field Name      | Reference Name                              |
|------------------|---------------------------------------------|
| Assigned To      | `System.AssignedTo`                        |
| Authorized As    | `System.AuthorizedAs`                      |
| Changed By       | `System.ChangedBy`                         |
| Created By       | `System.CreatedBy`                         |
| Activated By     | `Microsoft.AzureDevOps.Common.ActivatedBy` |
| Closed By        | `Microsoft.AzureDevOps.Common.ClosedBy`    |
| Resolved By      | `Microsoft.AzureDevOps.Common.ResolvedBy`  |

##### Add a custom identity field

A string field is recognized as an identity field when you specify the attribute `syncnamechanges` as True.   

##### Rule restrictions on identity fields

For the current release of process import, don't specify any of the following rules within a `FIELD` definition.

* `SUGGESTEDVALUES`
* Rules that contain nonidentity values.

##### Correct example

To limit the account names that are valid within an identity field, specify the ```VALIDUSER``` element with a group name attribute.

```xml
    <FIELD name="Project Manager" refname="Fabrikam.ProgramManager" type="String" reportable="dimension" syncnamechanges="true">
        <ALLOWEXISTINGVALUE />
        <VALIDUSER group="[PROJECT]\Program Manager Group" />
        <HELPTEXT>The program manager responsible for signing off on the user story.</HELPTEXT>
    </FIELD>
```

Before you import the process, make sure you created the group in the projects that the process updates.

##### Incorrect example

The following example isn't valid because it specifies:

* An ```ALLOWEDVALUES``` element.
* A ```DEFAULT``` element that specifies the nonidentity string ```value="Not Assigned"```.

```xml
    <FIELD name="Project Manager" refname="Fabrikam.ProgramManager" type="String" reportable="dimension" syncnamechanges="true">
        <ALLOWEXISTINGVALUE />
        <ALLOWEDVALUES>
          <LISTITEM value="[PROJECT]\Program Manager Group" />
          <LISTITEM value="Not Assigned" />
        </ALLOWEDVALUES>
        <DEFAULT from="value" value="Not Assigned" />
        <VALIDUSER />
        <HELPTEXT>The program manager responsible for signing off on the user story.</HELPTEXT>
    </FIELD>
```
<a id="work-item-workflow"></a>

### Workflow

A `WORKFLOW` element and its child elements must conform to the syntax and rules described in [WORKFLOW XML element reference](/previous-versions/azure/devops/reference/xml/all-workflow-xml-elements-reference). Also, it must meet the following conditions:

* Limits each WIT to 16 workflow states
* Defines all workflow states that are mapped to metastates in the ProcessConfiguration.xml definition file
* Defines a transition between all workflow states mapped to the "Proposed" state category and workflow states mapped to the "InProgress" state category
* Defines a transition between all workflow states mapped to the "InProgress" state category and workflow states mapped to the "Complete" state category

For a description of state category and mappings, see [Workflow states and state categories](../../../../boards/work-items/workflow-and-state-categories.md).

<a id="wit-global-list-definitions"></a>

### Global lists

For the Hosted XML process model, the following limits are placed on global-list import:

* There are at most 64 global lists
* There are at most 1,024 items per list
* Approximately 10,000 items can be defined in total among all global lists that are specified across all WITs

<a id="work-item-form-layout"></a>

### Form layout 

A `FORM` element and its child elements must conform to the syntax and rules described in [FORM XML element reference](/previous-versions/azure/devops/reference/xml/all-form-xml-elements-reference).

A `Control` element can't specify a custom control. Custom controls aren't supported.

## Related articles

- [Import and export Hosted XML processes](import-process.md)  
- [Evaluate rules and rule behavior](../rule-reference.md)  
- [Change projects from Hosted XML to inherited processes](../change-process-from-hosted-to-inherited.md)  
- [Clone Hosted XML processes to inherited processes](../upgrade-hosted-to-inherited.md)  
