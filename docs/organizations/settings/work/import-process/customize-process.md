---
title: Customize a process to import using Hosted XML
titleSuffix: Azure DevOps Services
description: Customize a Hosted XML process to support custom fields, work item types, global lists, and process configuration  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: AA5B592D-8F76-4974-9918-B8B523A6F23F
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 03/20/2018
---

# Customize a process when using Hosted XML

**Azure DevOps Services (Hosted XML)**
 
> [!IMPORTANT]  
> With the Hosted XML process model, you customize work tracking by updating select XML definition files of a process template. This feature is only available for organizations that have been migrated to Azure DevOps Services using the [TFS Database Import Service](https://aka.ms/TFSDataImport).  
> 
>To learn more about customization and process models, see [Customize work tracking](../../../../reference/customize-work.md). 

Azure DevOps Services supports adding and updating processes through a web based [import process](import-process.md) administrative experience. 
Once you add a process, you can create one or more projects from it. 
You can update the process at any time by importing the process again. 
The changes made to the process template are then applied to all projects using that process.  

A process is a zip file containing a set of interdependent files used to define the building blocks of the work item tracking system as well as other sub-systems in Azure DevOps Services. Some building blocks update existing projects, while others only apply to new projects. See the table below for the full list.

<table>
<tbody>
<tr>
<th>Used when importing/updating a process </th>
<th>Used when creating a new project</th> 
<th>Replaced by system defaults</th> 
<th>Ignored </th>   
</tr>
<tr valign="top">
<td>
<p>Work Item Tracking</p>
<p>WITs</p>
<p>Categories</p>
<p>Process Configuration</p>
</td>
<td>
<p>Areas and Iterations</p>
<p>Test Management</p>
<p>Work items</p>
<p>Work item queries</p> 
</td>
<td>
<p>Build</p>
<p>Lab Management</p> 
<p>Version Control</p> 
</td>
<td>
<p>Microsoft Project mappings</p> 
<p>Reports</p> 
<p>Portal (SharePoint Products) </p> 
</td>    
</tr>
</tbody>
</table>


![Supported process plug-ins and objects for process import](_img/ALM_IP_SupportedPlugins.png)

For a summary of differences between what's supported in Azure DevOps Services versus an on-premises TFS, see [Process template customizations differences](differences.md).  
 
## How to customize a process
It's easiest to customize a process by starting with a well-defined process rather than building one from scratch.   
While you can update an existing process you've used with an on-premises TFS, you'll need 
to make sure it conforms to the [constraints placed on templates for import](#rule-summary).

<a id="open-process-wit">  </a>
### Open Process in the admin context

[!INCLUDE [temp](../../_shared/open-process-admin-context-ts-only.md)]


### Export and import a process  

1.  From the Process tab, click the  open the &hellip; context menu for the process that you want to export.      
    
	<img src="_img/customize-process-export-template.png" alt="Account settings admin context, Export a process" style="border: 2px solid #C3C3C3;" /> 
  
    Save the zip file and extract all files.

2.	Rename the process in the ProcessTemplate.xml file located in the root folder.

    Name the process to distinguish it from existing ones.
    
    ```<name>MyCompany Agile Process  </name>```

    Change the version type, and major and minor numbers. Provide a distinct GUID for the type. For example: 

   ```<version type="F50EFC58-C2FC-4C66-9814-E395D90778A3" major="1" minor="1"/>```

3.	Apply [supported customizations](#supported-customizations).  
         
4.  Create a zip file of all files and folders in the root directory.

5.  [Import the zip file of your custom process](import-process.md).
 
<a id="supported-customizations"></a>

## Supported customizations
You can apply the following customizations to your process 
 
*   [Add, remove, or modify a WIT](../../../../reference/add-modify-wit.md)    
*   [Add or modify a field](../../../../reference/add-modify-wit.md)    
*   [Add up to five portfolio backlogs](../../../../reference/add-portfolio-backlogs.md)
*   [Add categories](../../../../reference/xml/use-categories-to-group-work-item-types.md) that you'll use in your process configuration
*   [Modify process configuration](../../../../reference/xml/process-configuration-xml-element.md)
*   [Add global lists](../../../../reference/xml/define-global-lists.md)

Refer to the [restrictions](#restrictions) below for a list of limitations imposed by the system. 

<a id="restrictions"></a>
<a id="rule-summary"></a>

## Restrictions
You can import up to 32 processes to Azure DevOps Services. Your custom process must conform to all rules summarized below, otherwise a validation error message may occur upon import.
* [Process](#process)
  * [Process configuration](#process-configuration)
  * [Categories](#categories) 
  * [Work item types](#work-item-types)
    * [Fields](#work-item-fields)
      * [Limits](#limits)
      * [Required fields](#required-fields) 
      * [Rule restrictions](#rule-restrictions)
      * [Consistent names and attributes](#consistent-names-attributes) 
      * [Identity fields](#identity-fields)
      * [Workflow](resolve-errors.md#wit-workflow-definitions) 
      * [Global lists](#wit-global-list-definitions) 
    * [Workflow](#work-item-workflow) 
    * [Form layout](#work-item-form-layout)
 
<a id="process"></a>
### Process template
Your ProcessTemplate.xml file must conform to the syntax and rules described in [ProcessTemplate XML element reference](../../../../reference/process-templates/process-template-xml-elements-reference.md). In addition, it must meet the following conditions:  
* Limit the number of WITs defined to 64
* Contain only one Categories.xml definition file  
* Contain only one ProcessConfiguration.xml definition file  
* Friendly names must be unique across all fields and WIT definitions
 
In addition, your process must pass the following validation checks:  
* Process names must be unique and 155 Unicode characters or less.
  * Templates with the same name and version GUID overwrite existing processes.
  * Templates with the same name but a different version GUID generate an error.  
  * Process names cannot contain the following special characters:  
     ```. , ; ' ` : / \ * | ? " & % $ ! + = ( ) [ ] { } < >  ```  
    See [Naming restrictions](../../naming-restrictions.md) for additional constraints.
* Process folders can't contain any .exe files. While you may be able to import the process that contains a .exe file, project creation fails.
* Process total size should be 2 GB or less, or project creation fails.
 
<a id="process-configuration"></a>
### Process configuration
The ProcessConfiguration.xml definition file must conform to the syntax and rules described in [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md). In addition, it must meet the following conditions:  
*   Specify all ```TypeFields```
*   Limit definition to five portfolio backlogs  
*   Contain only one unparented portfolio backlog   
*   Specify only one parent portfolio backlog for each subordinate portfolio backlog.
*   Contain required workflow state-to-metastate mappings, and not reference unsupported metastates    

<a id="categories"></a>
### Categories
The Categories.xml definition file must conform to the syntax and rules described in [Categories XML element reference](../../../../reference/xml/categories-xml-element-reference.md). In addition it must meet the following conditions:    
*   Limit definition to 32 categories  
*   Define all categories referenced in the ProcessConfiguration.xml file         

<a id="work-item-types"></a>
### Work item types
The  ```WITD``` element and its child elements must conform to the syntax and rules described in [WITD XML element reference](../../../../reference/xml/all-witd-xml-elements-reference.md). In addition, it must meet the following conditions:       
*   Limit definition of 512 fields within a single WIT, and 512 fields across all WITs 
*   The friendly name and required refname assigned to a WIT must be unique within the set of WIT definition files 
*   The required refname attribute value can't contain disallowed characters nor use a disallowed namespace: System.*Name* and Microsoft.*Name*    
    Reference names must contain only letters, no spaces, and at least one period (.). 
*   Contain a `WebLayout` section within the `FORM` section that conforms to the syntax specified in [WebLayout and Control elements](../../../../reference/xml/weblayout-xml-elements.md).



<a id="work-item-fields"></a>
### Work item fields
The ```FIELDS``` section and its child elements must conform to the syntax and rules described in [FIELD XML element reference](../../../../reference/xml/field-definition-element-reference.md). In addition, it must meet the following conditions:      
*   ```FIELD``` element and child elements can contain a ```GLOBALLIST``` element  
*   The friendly name and required refname assigned to a WIT must be unique within the set of WIT definition files  
*   The required refname attribute value can't contain disallowed characters nor use a disallowed namespace: System.*Name* and Microsoft.*Name*    
    Reference names must contain only letters, no spaces, and at least one period (.). 

<a id="limits"></a>
#### Limit restrictions  
*   Limit definition to 512 fields 
*   Limit definition of person-name fields, ones with an attribute of ```syncnamechanges=true```, to 64 per work item type
*   Limit definition of ```LISTITEM```elements within an ```ALLOWEDVALUES``` or ```SUGGESTEDVALUES``` element for a field to 512 
*   Limit definition of allowed rules to 1024 for a field. 

<a id="required-fields"></a>
#### Required fields
*   For all WITs that belong to a category used to define a process configuration backlog, specify the field used for ```type=Team``` in the ProcessConfiguration.xml file 
*   For all WITs that belong to a category used to define a process configuration backlog, specify the field used for ```type=Order``` in the ProcessConfiguration.xml file    
*   For all WITs that belong to a category used to define a regular backlog or portfolio backlog, specify the field used for ```type=Effort``` in the ProcessConfiguration.xml file 
*   For all WITs that belong to the category used to define the ```TaskBacklog```, specify the field used for ```type=RemainingWork``` in the ProcessConfiguration.xml file 
*   For all WITs that belong to the category used to define the ```TaskBacklog```, specify the field used for ```type=Activity``` in the ProcessConfiguration.xml file 
*   For all WITs that belong to the category used to define the ```TaskBacklog```, specify the ```ALLOWEDVALUES``` rule for the field used for ```type=Activity``` in the ProcessConfiguration.xml file 

<a id="rule-restrictions"></a>


#### Rule restrictions
In addition to the standard [field rule restrictions](../../../../reference/xml/apply-rule-work-item-field.md), the following restrictions are enforced:
*   Field rule elements can't specify the *for* and *not* attributes   
*   ```FIELD``` elements can't contain the following child rule elements: ```CANNOTLOSEVALUE```,  ```NOTSAMEAS```, ```MATCH```, ```PROHIBITEDVALUES``` 
*   ```FIELD``` definitions for System.*Name* fields can't contain field rules, except for the following fields:  
    *   System.Title can contain the rules: ```REQUIRED``` and ```DEFAULT```    
    *   System.Description can contain the rules: ```REQUIRED``` and ```DEFAULT```    
    *   System.AssignedTo can contain the rules: ```REQUIRED```, ```DEFAULT```, ```ALLOWEXISTINGVALUE``` and ```VALIDUSER```      
    *   System.ChangedBy can contain the rules: ```REQUIRED```, ```DEFAULT```, ```ALLOWEXISTINGVALUE``` and ```VALIDUSER```.    

<a id="consistent-names-attributes"></a>
#### Consistent names and attributes   
*   Within the process: ```name```, ```type```, and other attributes defined within a ```FIELD``` element must be the same across all WIT definitions
*   Within a project collection: ```name```, ```type```, and other attributes defined within a ```FIELD``` element must be the same across all WIT definitions      

<a id="identity-fields"></a>
#### Identity fields 
Identity fields correspond to fields used to contain account, user, or group names. 
The following core system fields are hard-coded as identity fields:    
*   Assigned To (System.AssignedTo)  
*   Authorized As (System.AuthorizedAs)
*   Changed By (System.ChangedBy)   
*   Created By (System.CreatedBy)  
 
The following fields are only considered identity fields if an identity rule is applied to their ```FIELD``` definition. 
*   Activated By (Microsoft.VSTS.Common.ActivatedBy)  
*   Closed By (Microsoft.VSTS.Common.ClosedBy)  
*   Resolved By (Microsoft.VSTS.Common.ResolvedBy)  

**Rules that cause a string field to be considered an identity field**  
A string field is recognized as an identity field when you specify one of the following rule elements within its ```FIELD``` definition:
*   ```ALLOWEDVALUES```  
*   ```PROHIBITEDVALUES```
*   ```VALIDUSER```   

**Rule restrictions on identity fields**  
For the current release of import process, the following restrictions are in effect: 
1.  Don't specify any of the following rules within the ```FIELD``` definition of an identity field: 
    *   ```ALLOWEDVALUES```  
    *   ```PROHIBITEDVALUES```
    *   ```SUGGESTEDVALUES```   
2.  Don't specify any rules that contain non-identity values within the ```FIELD``` definition of an identity field.  

**Correct example**   
To limit the account names that are valid within an identity field, specify the  ```VALIDUSER```  with a group name attribute.   
```xml
    <FIELD name="Project Manager" refname="Fabrikam.ProgramManager" type="String" reportable="dimension" syncnamechanges="true">
        <ALLOWEXISTINGVALUE />
        <VALIDUSER group="[PROJECT]\Program Manager Group" />
        <HELPTEXT>The program manager responsible for signing off on the user story.</HELPTEXT>
    </FIELD>
```
Prior to importing the process, make sure that you've created the group in the project(s) that the process updates. 


**Incorrect example**  
The following example isn't valid as it specifies the ```ALLOWEDVALUES``` element and the ```DEFAULT``` element which specifies ```value="Not Assigned"```, a non-identity string.    
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
The  ```WORKFLOW``` element and its child elements must conform to the syntax and rules described in [WORKFLOW XML element reference](../../../../reference/xml/all-workflow-xml-elements-reference.md). In addition, it must meet the following conditions:   
*   Limit definition of workflow states to 16 for each WIT 
*   Must define all workflow states that are mapped to a metastate in the ProcessConfiguration definition file        
*   Must define a transition between all workflow states that are mapped to the ```Proposed``` state category and workflow states mapped to the ```InProgress``` state category    
*   Must define a transition between all workflow states that are mapped to the ```InProgress``` state category  and workflow states mapped to the ```Complete``` state category.   

For a description of state category and mappings, see [Workflow states and state categories](../../../../boards/work-items/workflow-and-state-categories.md).


<a id="wit-global-list-definitions"></a>
### Global lists

For the Hosted XML process model, the following limits are placed on global list import: 
- Total of 64 global lists
- Total of 512 items per list
- Approximately 10K items can be defined total within all global lists specified across all WITs. 


<a id="work-item-form-layout"></a>
### Form layout 
The ```FORM``` element and its child elements must conform to the syntax and rules described in [FORM XML element reference](../../../../reference/xml/all-form-xml-elements-reference.md).   
The ```Control``` element can't specify a custom control. Custom controls aren't supported.  

