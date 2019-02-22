---
title: Resolve validation errors
titleSuffix: Azure DevOps Services  
description: Fix errors reported upon importing a process to support customization of tracking work in Azure DevOps Services.  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 2407FB2B-FAE6-4BBB-99CB-B88904293A43  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 03/20/2018
---

# Resolve validation errors for process import

**Azure DevOps Services (Hosted XML)**

> [!IMPORTANT]  
> Import process supports the Hosted XML process model which allows you to manage customizations through updating the WIT definition of a process template. This feature is only available for organizations that have been migrated to Azure DevOps Services using the [TFS Data Import Service](https://aka.ms/TFSDataImport). [Contact us](mailto:vsocustpt@microsoft.com) if you have any questions about Azure DevOps Services process customization. 
>
> If you use the Inheritance process model, you can customize your work tracking through the user interface by [creating an inherited process](../manage-process.md). If you use the On-premises XML process model, you can customize a process template, see [Upload or download a process template](../../../../boards/work-items/guidance/manage-process-templates.md) and [Customize a process template](../../../../reference/process-templates/customize-process.md).
>
>To learn more about process models, see [Customize work tracking](../../../../reference/customize-work.md). 
 

During process import, the process is validated to ensure the system works as expected for the custom process. 
You'll receive a list of error messages if the process fails validation.  

![Process successfully imported](_img/ALM_IP_ValidationErrors_list_775.png)  

If you've received a validation error when you tried [import process](import-process.md), you'll need to resolve the error before retrying the import. 
Each error has a link to learn more about the specific validation failure and guidance on how to correct it.
Apply the resolution fix(es) provided for the message(s) that you received, zip up the updated files, and retry the import operation.  

If you're just starting your customization, [review the validation rules provided](customize-process.md).  
 

<a id="info-only"></a>
## Information messages - no action required

<a id="TF402555"></a>
### TF402555: Field *[refName]* is deleted.
The process that you're importing doesn't include the named field in the process being updated, therefore it is removed as part of the update operation.  

#### Scenario example

1. Add custom field to Bug.xml work item
```xml
  <FIELD name="Foo" refname="MyCompany.CustomFields.Foo" type="String" reportable="dimension" />
```
2. [Import process](import-process.md)
3. Remove field from Bug.xml
4. [Import updated process](import-process.md)

The system displays an information message about the field to be deleted.  
  ``` TF402555: Field MyCompany.CustomFields.Foo will be deleted ``` 

<a id="TF402591"></a>
### TF402591: Field  with reference name *[refName]* cannot be renamed to '*[name1]*' from '*[name2]*' in existing processes *[processName]*.
The process that you're importing contains a renamed field that uses the same ```refname``` in the current process(es).  

Field names cannot be renamed.

<a id="TF402598"></a>
### TF402598: Work item type *[refName]* is deleted.
The process that you're updating doesn't include the named WIT that exists in the current process. As part of updating the existing process, the system deletes the named WIT from the current process. 

#### Scenario example
1. [Create](../../../../reference/customize-wit-form.md) new work item type called "LSI"  
```xml
   <WORKITEMTYPE name="LSI" refname="My.LSI">  
```
2. [Import process](import-process.md)  
3. Remove the LSI work item type from the process  
4. [Import updated process](import-process.md)  

The system displays an information message about the deletion.   
  ``` TF402598: Work item type My.LSI will be deleted ``` 

<a id="TF402601"></a>
### TF402601: Work item type *[witName]* is renamed to *[name1]* from *[name2]*.
The process contains a renamed WIT. The WIT is renamed in the existing process.  
The process that you're updating contains a WIT that's been renamed from the name in the current process.  
As part of updating the existing process, the system renames the WIT in the current process. All work items in existing projects that reference the process are also renamed.

#### Scenario example
1. [Create](../../../../reference/customize-wit-form.md) new work item type called "LSI"  
```xml
  <WORKITEMTYPE name="LSI" refname="My.LSI">  
```
2. [Import process](import-process.md)  
3. Rename the LSI work item type to Live Site Incident  
```xml
  <WORKITEMTYPE name="Live Site Incident" refname="My.LSI">  
```
4. [Import updated process](import-process.md)  

The system displays an information message about the WIT to be renamed.  
  ``` TF402601: Work item type My.LSI  will be renamed to 'Live Site Incident' from 'LSI' ``` 


<a id="file-errors"></a>
## Miscellaneous file errors

<a id="TF402586"></a>
### TF402586: Error parsing file: *[Error message]*
Malformed XML syntax can cause parsing file errors. Missing closing tags, missing quotes, missing open or close brackets (< or >) can cause a parsing file error.  

From the error message, determine and correct the source of the malformed XML.

<a id="TF402594"></a>
### TF402594: File violates the schema with the following error: *[Error message]*
Each XML file in the process zip file must conform to the given schema. Schema violation errors are caused by custom XML tags or attributes within the XML file. Read the error message to determine the source of schema violation and fix accordingly.

The schema definition for work item tracking defines all child elements within the ```FORM``` element as camel case and all other elements as all capitalized. If you encounter errors when validating your type definition files, 
check the case structure of your elements. Also, the case structure of opening and closing tags must match according to the rules for XML syntax.  


#### Error examples
Custom XML tag:
```xml
  <WORKITEMTYPE name="Bug" refname="My.Bug">
    <FOO>Hello World</FOO>
    ...
```
Extra attribute added to XML element:
```xml
  <WORKITEMTYPE name="Bug" refname="My.Bug" foo="hello world">
```

<a id="VS412450"></a>
### VS412450: Xml schema validation error in  *[fileName]*. *[Error message]*
Correct the schema error in the named file. 

<a id="process-templates"></a>
## Process template plug-in errors
The ProcessTemplate.xml is the root file that defines the entire process and all XML definition files that 
will be imported to add or update a process. This file contains all of the plug-ins and task groups that are referenced 
when creating a project. Each task group references a subordinate XML file (often in a subfolder) where 
the specific tasks are defined. In general, you specify one task group for each plug-in.

The ProcessTemplate.xml definition file must conform to the syntax and rules described in [ProcessTemplate XML element reference](../../../../reference/process-templates/process-template-xml-elements-reference.md).   

<a id="VS412457"></a>
### VS412457: Specified file '*[fileName]*' could not be found in the process package.
Correct the process zip package to include the named file.  

<a id="VS402452"></a>
### VS402452: The process template did not specify a version, or specified an invalid version.
Edit the ProcessTemplate.xml file to specify a version. 

#### Error example
ProcessTemplate.xml file specifies the same ```version``` GUID as for the Agile process, which is a locked process.
```xml
<ProcessTemplate>
  <metadata>
    <name>Fabrikam Agile</name>
    <description>Use this template to support Fabrikam Agile planning methods.</description>
    <version type="ADCC42AB-9882-485E-A3ED-7678F01F66BC" major="7" minor="36" />
```
#### Resolution example
A different GUID is specified.
```xml
<ProcessTemplate>
  <metadata>
    <name>Fabrikam Agile</name>
    <description>Use this template to support Fabrikam Agile planning methods.</description>
    <version type="7710F7A4-1F19-4054-9FBC-D94A5935221E" major="7" minor="1" />
```



<a id="VS412453"></a>
### VS412453: Process template zip file doesn't contain required plugin *[pluginName]*.
All files listed within the ProcessTemplate.xml file and its supported plug-in files must be present within the process zip file. 

Use a search tool to find all instances of filename=value within the set of process files and folders. 
Then, either update the plug-in to remove the missing named file, or add the named file to the process folder where it belongs.

```xml
 <taskList filename="WorkItem Tracking\WorkItems.xml" />
```

#### Error example
The WorkItemTracking plug-in specifies ```fileName="WorkItem Tracking\TypeDefinitions\Epic.xml```, 
however it hasn't been added to the WorkItem Tracking\TypeDefinitions folder.

```xml
     <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Epic.xml" />
```
#### Resolution example
Add the Epic.xml file to the WorkItem Tracking\TypeDefinitions folder.

<a id="VS412454"></a>
### VS412454: Plug-in *[pluginName]* contains several ```taskList``` {1}, {2}. Only one ```taskList``` per plugin is allowed.
Correct the ProcessTemplate.xml file for the named plug-in to reduce the number of ```tasklist``` elements defined. 

#### Error example
The WorkItemTracking plug-in contains two ```tasklist``` statements.
 ```xml
    <group id="WorkItemTracking" description="Workitem definitions uploading." completionMessage="Work item tracking tasks completed.">
      <dependencies>
        <dependency groupId="Classification" />
        <dependency groupId="Groups" />
      </dependencies>
      <taskList filename="WorkItem Tracking\WorkItems.xml" />
      <taskList filename="WorkItem Tracking\FabrikamWorkItems.xml" />
    </group>
```
#### Resolution example
 ```xml
    <group id="WorkItemTracking" description="Workitem definitions uploading." completionMessage="Work item tracking tasks completed.">
      <dependencies>
        <dependency groupId="Classification" />
        <dependency groupId="Groups" />
      </dependencies>
      <taskList filename="WorkItem Tracking\FabrikamWorkItems.xml" />
    </group>
 ```

<a id="TF402575"></a>
### TF402575: You can only include one Category definition file in your process.

#### Error example
The WorkItems.xml file contains two ```CATEGORIES``` statements.
 ```xml
  <task id="Categories" name="Categories definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item type categories created">
    <dependencies>
      <dependency taskId="WITs" />
    </dependencies>
    <taskXml>
      <CATEGORIES fileName="WorkItem Tracking\Categories.xml" />
      <CATEGORIES fileName="WorkItem Tracking\Custom_Categories.xml" />
    </taskXml>
  </task>
```
#### Resolution example
The WorkItems.xml file has been updated to contain only one ```CATEGORIES``` statement.
 ```xml
  <task id="Categories" name="Categories definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item type categories created">
    <dependencies>
      <dependency taskId="WITs" />
    </dependencies>
    <taskXml>
      <CATEGORIES fileName="WorkItem Tracking\Custom_Categories.xml" />
    </taskXml>
  </task>
 ```

<a id="TF402576"></a>  
### TF402576: You can only include one ProcessConfiguration definition file in your process.

#### Error example
The WorkItems.xml file contains duplicate ```ProjectConfiguration``` statements.
  ```xml
    <taskXml>
      <PROCESSCONFIGURATION>
        <ProjectConfiguration fileName="WorkItem Tracking\Process\ProcessConfiguration.xml"/>
      </PROCESSCONFIGURATION>
    </taskXml>
    <taskXml>
      <PROCESSCONFIGURATION>
        <ProjectConfiguration fileName="WorkItem Tracking\Process\ProcessConfiguration.xml"/>
      </PROCESSCONFIGURATION>
    </taskXml>
 ```
#### Resolution example
The WorkItems.xml file has been updated to contain only one ```ProjectConfiguration``` statement.
 ```xml
    <taskXml>
      <PROCESSCONFIGURATION>
        <ProjectConfiguration fileName="WorkItem Tracking\Process\ProcessConfiguration.xml"/>
      </PROCESSCONFIGURATION>
    </taskXml>
 ```

<a id="TF402587"></a>
### TF402587: Required ProcessConfiguration file missing.
The WorkItems.xml file specifies the ProcessConfiguration file to upload. 
Either the file isn't specified, contains an out-of-date specification, the specified file is missing from the template, or the folder/file name isn't correct. 
 
#### Error example
The configuration specified is out-of-date and specifies two files that aren't contained in the Process folder. 
```xml
    <taskXml>
      <PROCESSCONFIGURATION>
        <CommonConfiguration fileName="WorkItem Tracking\Process\CommonConfiguration.xml"/> 
        <AgileConfiguration fileName="WorkItem Tracking\Process\AgileConfiguration.xml"/>
      </PROCESSCONFIGURATION>
    </taskXml>
```
#### Resolution example
The WorkItems.xml file has been updated to contain the correct configuration ```ProjectConfiguration``` statement.
 ```xml
    <taskXml>
      <PROCESSCONFIGURATION>
        <ProjectConfiguration fileName="WorkItem Tracking\Process\ProcessConfiguration.xml"/>
      </PROCESSCONFIGURATION>
    </taskXml>
 ```


<a id="TF402577"></a>  
### TF402577: Field *[refName]* specifies friendly name *[friendlyName]*  which is already in use by  fields *[refName]* in processes *[processNames]*.  
Friendly names must be unique across all field definitions for all WIT definitions specified for all processes imported to Azure DevOps Services.

The named processes contain WITs that define a field that uses the friendly name. 

Modify the WIT definition in your process zip file that contains *[refName]* and specify a different friendly name or make it match an existing field in use.  

#### Error example
The UserStory WIT definition contains ```FIELD``` element for Fabrikam.Product.Family with friendly name Product.
```xml
      <FIELD name="Product" refname="Fabrikam.Product.Family" type="String" reportable="dimension">
        <HELPTEXT>Enter the name of the product family for this story or feature.</HELPTEXT>
      </FIELD>
```

However, in an existing process, Fabrikam.Product.Versions uses the friendly name *Product*. 
```xml
      <FIELD name="Product" refname="Fabrikam.Product.Versions" type="String" reportable="dimension">
        <HELPTEXT>Enter the name of the product version for this story or feature.</HELPTEXT>
      </FIELD>
```
#### Resolution example
Update the UserStory WIT definition to match the existing field.
 ```xml
      <FIELD name="Product" refname="Fabrikam.Product.Versions" type="String" reportable="dimension">
        <HELPTEXT>Enter the name of the product version for this story or feature.</HELPTEXT>
      </FIELD>
```

<a id="TF402585"></a>
### TF402585: Required WorkItemTracking plug-in reference missing from the process template.
You must specify the ```Microsoft.ProjectCreationWizard.WorkItemTracking``` plug-in in the ```metadata``` section of the ProcessTemplate.xml file: 

#### Error example
The ```Microsoft.ProjectCreationWizard.WorkItemTracking``` plug-in is missing from the ```plugins``` section of the ProcessTemplate.xml file.
 ```xml
   <plugins>
      <plugin name="Microsoft.ProjectCreationWizard.Classification" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Reporting" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Portal" wizardPage="true" />
      <plugin name="Microsoft.ProjectCreationWizard.Groups" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.VersionControl" wizardPage="true" />
      <plugin name="Microsoft.ProjectCreationWizard.TestManagement" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Build" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Lab" wizardPage="false" />
    </plugins>
```
#### Resolution example
 ```xml
   <plugins>
      <plugin name="Microsoft.ProjectCreationWizard.Classification" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Reporting" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Portal" wizardPage="true" />
      <plugin name="Microsoft.ProjectCreationWizard.Groups" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.WorkItemTracking" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.VersionControl" wizardPage="true" />
      <plugin name="Microsoft.ProjectCreationWizard.TestManagement" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Build" wizardPage="false" />
      <plugin name="Microsoft.ProjectCreationWizard.Lab" wizardPage="false" />
    </plugins>
```

<a id="categories"></a>
## Categories
The Categories.xml definition file must conform to the syntax and rules described in [Categories XML element reference](../../../../reference/xml/categories-xml-element-reference.md).     

<a id="TF402546"></a>
### TF402546: Category *[categoryName]* is missing from the categories file.
All categories that are referenced in the ProcessConfiguration.xml file must be defined in the Categories.xml file. 
In addition, the system requires that the Categories.xml file contain definitions for the following categories:
*   Bug Category
*   Code Review Request Category
*   Code Review Response Category 
*   Feedback Request Category 
*   Feedback Response Category
*   Hidden Types Category
*   Requirement Category
*   Shared Step Category
*   Shared Parameter Category 
*   Task Category
*   Test Case Category
*   Test Plan Category 
*   Test Suite Category 

Update your Categories.xml file to define the missing *[name]* category. 

#### Error example
ProcessConfiguration references the Epic Category, however it is missing from the Categories.xml definition file.

#### Resolution example
Epic Category is added to the Categories file. 
```xml
  <CATEGORY name="Epic Category" refname="Microsoft.EpicCategory">
    <DEFAULTWORKITEMTYPE name="Epic" />
  </CATEGORY>
```

<a id="TF402553"></a>
### TF402553: Element *[name]* references category *[categoryName]* which isn't defined in the categories file.
Update your Categories.xml file to define the missing *[categoryName]* category. 

<a id="TF402560"></a>
### TF402560: You've defined *[n]* categories. Only *[nn]* are allowed.
Review your Categories.xml file for all ```CATEGORY``` element statements and determine which ones you can delete so as not exceed the allowed limit. 
Then, review your ProcessConfiguration.xml file to replace values that reference deleted categories.

<a id="TF402596"></a>
### TF402596: Category *[categoryName]* doesn't define work Item type *[witName]*.  
Categories must reference WITs that are defined in the /WorkItem Tracking/TypeDefinitions folder and listed as a task for upload in the WorkItems.xml plug-in file.  
Review your Categories.xml file for references to a WIT that isn't included in the /WorkItem Tracking/TypeDefinitions folder. 

#### Error example
The name of the WIT referenced for Microsoft.EpicCategory is misspelled.
```xml
  <CATEGORY name="Epic Category" refname="Microsoft.EpicCategory">
    <DEFAULTWORKITEMTYPE name="EpicABC" />
  </CATEGORY>
```
#### Resolution example
```xml
  <CATEGORY name="Epic Category" refname="Microsoft.EpicCategory">
    <DEFAULTWORKITEMTYPE name="Epic" />
  </CATEGORY>
```

<a id="TF402597"></a>
### TF402597: Custom category *[categoryName]* isn't supported because ProcessConfiguration doesn't reference it. 

You can only specify custom categories that you use to configure an Agile tool feature in the ProcessConfiguration.  
Review your ProcessConfiguration.xml file and determine if you've missed adding support for a category. Otherwise, remove *[categoryName]* from the Categories.xml file.
 
#### Error example
ProcessConfiguration doesn't reference Microsoft.EpicCategory, although it's defined in the Categories.xml definition file. 

#### Resolution example
Add ```PortfolioBacklog``` to ProcessConfiguration to reference Microsoft.EpicCategory.  
```xml
    <PortfolioBacklog category="Microsoft.EpicCategory" pluralName="Epics" singularName="Epic" workItemCountLimit="1000">
      <States>
        <State value="New" type="Proposed" />
        <State value="Active" type="InProgress" />
        <State value="Resolved" type="InProgress" />
        <State value="Closed" type="Complete" />
      </States>
      <Columns>
        <Column refname="System.WorkItemType" width="100" />
        <Column refname="System.Title" width="400" />
        <Column refname="System.State" width="100" />
        <Column refname="Microsoft.VSTS.Scheduling.Effort" width="50" />
        <Column refname="Microsoft.VSTS.Common.BusinessValue" width="50" />
        <Column refname="Microsoft.VSTS.CMMI.RequirementType" width="100" />
        <Column refname="System.Tags" width="200" />
      </Columns>
      <AddPanel>
        <Fields>
          <Field refname="System.Title" />
        </Fields>
      </AddPanel>
    </PortfolioBacklog>
```
Reference topics: 
*   [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md)
*   [Categories XML element reference](../../../../reference/xml/categories-xml-element-reference.md)


<a id="classification"></a>
## Classification plug-in errors
The Classification.xml definition file must conform to the syntax and rules described in [Classification plug-in](../../../../reference/process-templates/define-classification-plug-in.md).     

<a id="TF402511"></a>
### TF402511: The Classification plug-in contains duplicate property name: *[propertyName]*.

#### Error example
Classification.xml file contains a second ```property name="MSPROJ"``` statement under the ```properties``` container element.
```xml
      <properties>
        <property name="MSPROJ" value="Classification\FileMapping.xml" isFile="true" />
        <property name="MSPROJ" value="Classification\Fabrikam_FileMapping.xml" isFile="true" />
        <property name="Process Template" value="Fabrikam Agile"/>
      </properties>
```
#### Resolution example
Remove the duplicate statement.
```xml
      <properties>
        <property name="MSPROJ" value="Classification\Fabrikam_FileMapping.xml" isFile="true" />
        <property name="Process Template" value="Fabrikam Agile"/>
      </properties>
```

<a id="TF402512"></a>
### TF402512: File *[fileName]* does not exist.
The file specified in the Classification.xml file isn't present in the specified path or the path is misspelled.  

#### Error example
The Classification folder path is misspelled. 
```xml
       <properties>
        <property name="MSPROJ" value="Classification\Fabrikam_FileMapping.xml" isFile="true" />
        <property name="Process Template" value="Agile"/>
      </properties>
```
#### Resolution example
```xml
      <properties>
        <property name="MSPROJ" value="Classification\Fabrikam_FileMapping.xml" isFile="true" />
        <property name="Process Template" value="Fabrikam Agile"/>
      </properties>
```

<a id="TF402513"></a>
### TF402513: Name *[pathName]* in the Classification plug-in doesn't conform to TreePath naming restrictions.
Review the ```Node``` elements you've specified and change the names to conform to supporting naming conventions.
Reference: [Add and modify area and iteration paths](../../../settings/set-area-paths.md).

#### Error example
The Path names include the # character which is not allowed. 
```xml
        <Node StructureType="ProjectLifecycle" Name="Iteration" xmlns="">
          <Children>
            <Node StructureType="ProjectLifecycle" Name="Sprint #1" />
            <Node StructureType="ProjectLifecycle" Name="Sprint #2" />
            <Node StructureType="ProjectLifecycle" Name="Sprint #3" />
          </Children>
        </Node>
```
#### Resolution example
The Path names have been corrected. 
```xml
        <Node StructureType="ProjectLifecycle" Name="Iteration" xmlns="">
          <Children>
            <Node StructureType="ProjectLifecycle" Name="Sprint 1" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 2" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 3" />
          </Children>
        </Node>
```


<a id="TF402514"></a>
### TF402514: Node StructureType *[structureTypeName]* in the Classification plug-in is not supported.

The ```StructureType``` attribute only allows the following values: ```ProjectModelHierarchy``` and ```ProjectLifecycle```.  
Review the ```Node``` elements that you've specified and remove any unsupported attributes.

#### Error example
```ProjectLifecycle``` has been misspelled. 
```xml
        <Node StructureType="ProjectLifecylce" Name="Iteration" xmlns="">
          <Children>
            <Node StructureType="ProjectLifecycle" Name="Sprint 1" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 2" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 3" />
          </Children>
        </Node>
```
#### Resolution example
Misspelled name has been corrected. 
```xml
        <Node StructureType="ProjectLifecycle" Name="Iteration" xmlns="">
          <Children>
            <Node StructureType="ProjectLifecycle" Name="Sprint 1" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 2" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 3" />
          </Children>
        </Node>
```


<a id="TF402515"></a>
### TF402515: A property attribute in the Classification plug-in is either missing or not supported.

The ```property``` element only allows the following attributes: ```name``` , ```value``` , and ```isFile```.  
Review the ```property``` elements you've specified and remove any unsupported attributes.

#### Error example
The ```value``` attribute is misspelled. 
```xml
       <properties>
        <property name="MSPROJ" vaule="Classification\Fabrikam_FileMapping.xml" isFile="true" />
        <property name="Process Template" value="Agile" />
      </properties>
```
#### Resolution example
Misspelled attribute has been corrected. 
```xml
      <properties>
        <property name="MSPROJ" value="Classification\Fabrikam_FileMapping.xml" isFile="true" />
        <property name="Process Template" value="Fabrikam Agile"/>
      </properties>
```
<a id="TF402516"></a>
### TF402516: The Classification plug-in contains more than two root level Nodes, which is not supported.
Review the ```Node``` elements you've specified and remove extra root level nodes.

#### Error example
Classification.xml file contains a second ```Node StructureType="ProjectLifecycle" ``` statement under the ```Nodes``` container element.
```xml
      <Nodes>
        <Node StructureType="ProjectLifecycle" Name="Iteration" xmlns="">
          <Children>
            <Node StructureType="ProjectLifecycle" Name="Sprint 1" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 2" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 3" />
          </Children>
        </Node>
        <Node StructureType="ProjectLifecycle" Name="Iteration" xmlns="">
        <Node StructureType="ProjectModelHierarchy" Name="Area" xmlns="" />
      </Nodes>
```

#### Resolution example
Remove the second statement.
```xml
      <Nodes>
        <Node StructureType="ProjectLifecycle" Name="Iteration" xmlns="">
          <Children>
            <Node StructureType="ProjectLifecycle" Name="Sprint 1" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 2" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 3" />
          </Children>
        </Node>
        <Node StructureType="ProjectModelHierarchy" Name="Area" xmlns="" />
      </Nodes>
```

<a id="TF402523"></a>

### TF402523: Area or Iteration path '*[pathName]*' in the GroupsandPermissions plug-is missing from the Classification plug-in.  
Add the missing *[pathName]* to the Classification.xml file or remove it from the GroupsandPermissions.xml file.
#### Error example 
Classification.xml file specifies sprints, not iterations. 

**GroupsandPermissions.xml** ```teamSettings``` specifies Iterations. 
```xml
    <teamSettings areaPath="Area">
        <iterationPaths backlogPath="Iteration">
            <iterationPath path="Iteration 1" />
            <iterationPath path="Iteration 2" />
            <iterationPath path="Iteration 3" />
        </iterationPaths>
    </teamSettings>
```
However, the Classification.xml specifies sprints. 
```xml
        <Node StructureType="ProjectLifecycle" Name="Iteration" xmlns="">
          <Children>
            <Node StructureType="ProjectLifecycle" Name="Sprint 1" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 2" />
            <Node StructureType="ProjectLifecycle" Name="Sprint 3" />
          </Children>
        </Node>
```

#### Resolution example 
Update GroupsandPermissions.xml to use sprints.  
```xml
    <teamSettings areaPath="Area">
        <iterationPaths backlogPath="Iteration">
            <iterationPath path="Sprint 1" />
            <iterationPath path="Sprint 2" />
            <iterationPath path="Sprint 3" />
        </iterationPaths>
    </teamSettings>
```

<a id="link-types"></a>
## Link types
<span style="color:red; font-size:1.1em;">*Custom link types aren't supported in the current import process feature.*</span>
<a id="TF402561"></a>
### TF402561: You've defined *[n]* custom link types. Only *[nn]* are allowed.
Review your WorkItems.xml plug-in file for all ```LINKTYPE``` element statements. 
Remove statements associated with custom link types so as not exceed the allowed limit. 
And then, remove the corresponding  link type definition file from the LinkTypes folder.

Also, remove any references to the custom link types that you've added to a WIT definition within a ```LinksControlOptions``` section under the ```FORM``` section.


<a id="TF402583"></a>
### TF402583: Custom link type *[name]* is invalid because custom link types aren't supported.

Review your WorkItems.xml plug-in file for all ```LINKTYPE``` element statements. Remove any statements that specify a custom link type. 
And then, remove the corresponding  link type definition file from the LinkTypes folder.

The following ```LINKTYPE``` element statements within the WorkItems.xml plug-in file are valid: 
```xml
      <LINKTYPES>
        <LINKTYPE fileName="WorkItem Tracking\LinkTypes\Affects.xml" />
        <LINKTYPE fileName="WorkItem Tracking\LinkTypes\SharedStep.xml" />
        <LINKTYPE fileName="WorkItem Tracking\LinkTypes\TestedBy.xml" />
        <LINKTYPE fileName="WorkItem Tracking\LinkTypes\SharedParameterLink.xml" />
      </LINKTYPES>
```

<a id="global-lists"></a>
## Global lists

<span style="color:red; font-size:1.1em;">*Global lists aren't supported in the current import process feature.*</span>

<a id="TF402564"></a>
### TF402564: You've defined *[n]* global lists. Only *[nn]* are allowed.
One or more WITs defined in the custom process template contain a ```GLOBALLIST``` element. 
Search through your WIT definition files and replace any ```GLOBALLIST``` elements with ```ALLOWEDVALUES``` or ```SUGGESTEDVALUES``` elements. 
For reference syntax, see [Define pick lists](../../../../reference/xml/define-pick-lists.md).  

<a id="TF402565"></a>
### TF402565: You've defined *[n]* items in global list *[globalListName]*. A maximum of *[nn]* is allowed.
The named ```GLOBALLIST``` element contains more items than allowed. Either reduce the number of list items contained in the ```GLOBALLIST``` element, 
or segment the global list into two or more elements so that neither list exceeds the maximum number of allowed items. 

For reference syntax, see [Define pick lists](../../../../reference/xml/define-pick-lists.md).  

<a id="process-configuration"></a>
## Process configuration
The ProcessConfiguration.xml definition file must conform to the syntax and rules described in [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md).   

<a id="TF402543"></a>
### TF402543: Element *[elementName]* requires that you map exactly one workflow state to metastate *[metastateName]*.

Update the ```States``` section within the named element in the ProcessConfiguration.xml file to provide the missing metastate mapping or remove extra mappings.   
#### Error example
ProcessConfiguration.xml ```RequirementBacklog``` element is missing a metastate mapping for ```type="Proposed"```. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Backlog items" singularName="Backlog item">
   <States>
      <State value="Committed" type="InProgress" />
      <State value="Done" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```
#### Resolution example
Missing metastate mappings have been added. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Backlog items" singularName="Backlog item">
   <States>
      <State value="New" type="Proposed" />
      <State value="Committed" type="InProgress" />
      <State value="Done" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```


<a id="TF402547"></a>
### TF402547: Element *[elementName]* requires that for work item type *[witName]* you map at least one state to metastate *[metastateName]*.
Review the ```WORKFLOW``` states defined for the named WIT and then update the ```States``` section within the 
named element in the ProcessConfiguration.xml file to provide the missing metastate mapping for the named WIT. 

<a id="TF402548"></a>
### TF402548: Element *[elementName]* requires that you map at least one state to metastate *[metastateName]*.

Update the ```States``` section within the named element in the ProcessConfiguration.xml file to provide the missing metastate mapping. 
#### Error example
ProcessConfiguration.xml ```RequirementBacklog``` element is missing a metastate mapping for ```type="InProgress"```. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Backlog items" singularName="Backlog item">
   <States>
      <State value="New" type="Proposed" />
      <State value="Done" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```
#### Resolution example
Missing metastate mappings have been added. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Backlog items" singularName="Backlog item">
   <States>
      <State value="New" type="Proposed" />
      <State value="Committed" type="InProgress" />
      <State value="Done" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```

<a id="TF402550"></a>
### TF402550: Element *[elementName]* includes more than one metastate mapping for workflow state *[stateName]*.
Metastate value cannot be mapped to more than one workflow state.

#### Error example
ProcessConfiguration.xml ```RequirementBacklog``` element contains two metastate mappings for ```value="Active"```. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="Active" type="Proposed" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```
#### Resolution example
Metastate mappings have been corrected. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="New" type="Proposed" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```

<a id="TF402551"></a>
### TF402551: Work item type *[witName]* doesn't define workflow state *[stateName]*, which is required because ProcessConfiguration maps it to a metastate for element *[elementName]*.
Either correct the ProcessConfiguration.xml file or the ```WORKFLOW``` section of the named WIT to add the missing ```STATE``` and ```TRANSITION``` elements.


#### Error example 
ProcessConfiguration.xml ```RequirementBacklog``` element specifies ```value="Committed"```, however UserStory.xml doesn't define Committed as a State.    
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="New" type="Proposed" />
      <State value="Committed" type="InProgress" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```
#### Resolution example
Removed the ```State``` element for Committed. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="New" type="Proposed" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```

<a id="TF402552"></a>
### TF402552: Element *[elementName]* requires that for work item type *[witName]* you map exactly one state to metastate *[metastateName]* for the following states: *[stateNames]*.

Review the ```STATES``` section in the ProcessConfiguration.xml file for the named element and ensure that each sate listed in the error message is present and mapped to a metastate.  

#### Error example
ProcessConfiguration.xml ```RequirementBacklog``` element is missing the state ```New``` which exists on the ```User Story``` work item type.  It should be in the ```STATES``` list mapped to ```type=Proposed"```. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```
#### Resolution example
Metastate mapping has been corrected. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="New" type="Proposed" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```

<a id="TF402554"></a>
### TF402554: Element *[elementName]* specifies an unsupported metastate *[metastateName]*. 
Review the ```STATES``` section in the ProcessConfiguration.xml file for the named element and remove or correct the named metastate.  

#### Error example
ProcessConfiguration.xml ```RequirementBacklog``` element contains a misspelled metastate mapping for ```type=Proposed"```. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="New" type="Propsed" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```
#### Resolution example
Metastate mapping has been corrected. 
```xml
<RequirementBacklog category="Microsoft.RequirementCategory" pluralName="Stories" singularName="Story">
   <States>
      <State value="New" type="Proposed" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
   </States>
 . . .
</RequirementBacklog >
```
<a id="TF402571"></a>
### TF402571: Required element *[elementName]* is missing from Process Configuration.
Edit the ProcessConfiguration.xml file to add the missing named element. 

Review [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md) for required elements.

<a id="TF402572"></a>
### TF402572: Cannot find specified file in the process template package.
A file specified in a plug-in file for upload is missing from the zip file. Review all files specified for upload and make sure they are included in the process zip file.  

Review [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md) for required elements.

<a id="TF402574"></a>
### TF402574: ProcessConfiguration doesn't specify required ```TypeField``` *[typeField]*.
Edit the ProcessConfiguration.xml file to add the missing named ```TypeField``` element. 

Review [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md) for required ```TypeField``` elements. 
#### Example
The Scrum process specifies the following ```TypeField``` elements. If any of these are missing, you'll receive error TF402574.
```xml
<TypeFields>
    <TypeField refname="System.AreaPath" type="Team" />
    <TypeField refname="Microsoft.VSTS.Scheduling.RemainingWork" type="RemainingWork" format="format h" />
    <TypeField refname=" Microsoft.VSTS.Common.BacklogPriority" type="Order" />
    <TypeField refname="Microsoft.VSTS.Scheduling.Effort" type="Effort" />
    <TypeField refname="Microsoft.VSTS.Common.Activity" type="Activity" />
    <TypeField refname="Microsoft.VSTS.Feedback.ApplicationStartInformation" type="ApplicationStartInformation" />
    <TypeField refname="Microsoft.VSTS.Feedback.ApplicationLaunchInstructions" type="ApplicationLaunchInstructions" />
    <TypeField refname="Microsoft.VSTS.Feedback.ApplicationType" type="ApplicationType">
        <TypeFieldValues>
            <TypeFieldValue value="Web application" type="WebApp" />
            <TypeFieldValue value="Remote machine" type="RemoteMachine" />
            <TypeFieldValue value="Client application" type="ClientApp" />
        </TypeFieldValues>
    </TypeField>
</TypeFields>
```



<a id="TF402588"></a>
### TF402588: Several portfolio backlogs *[backlogNames]* have defined *[backlogName]* as their parent. A parent backlog may have only one child backlog.
Only one child portfolio backlog can map to a single parent backlog.  

Edit ProcessConfiguration to correct the parent-child backlog specifications.

#### Error example
```xml
  <PortfolioBacklog category="Microsoft.EpicCategory" parent="Microsoft.InitiativeCategory" pluralName="Epics" singularName="Epic">
    ...
  </PortfolioBacklog>

  <PortfolioBacklog category="Microsoft.FeatureCategory" parent="Microsoft.InitiativeCategory" pluralName="Features" singularName="Feature">
    ...
  </PortfolioBacklog>
```

#### Resolution example
Change the parent on the Feature backlog to point to the Epic backlog.
```xml
  <PortfolioBacklog category="Microsoft.EpicCategory" parent="Microsoft.InitiativeCategory" pluralName="Epics" singularName="Epic">
    ...
  </PortfolioBacklog>

  <PortfolioBacklog category="Microsoft.FeatureCategory" parent="Microsoft.EpicCategory" pluralName="Features" singularName="Feature">
    ...
  </PortfolioBacklog>
```

<a id="TF402589"></a>
### TF402589: Portfolio backlog *[backlogName]* references undefined parent portfolio backlog *[backlogName]*.
The ProcessConfiguration.xml definition contains a ```parent``` value that references an undefined portfolio backlog.

#### Error example
```xml
  <PortfolioBacklog category="Microsoft.FeatureCategory" parent="Microsoft.EpicCategory" pluralName="Features" singularName="Feature">
```

#### Resolution example
Add the Epic ```PortfolioBacklog``` to the ProcessConfiguration.xml file.
```xml
  <PortfolioBacklog category="Microsoft.EpicCategory" pluralName="Epics" singularName="Epic">
    <States>
      <State value="New" type="Proposed" />
      <State value="Active" type="InProgress" />
      <State value="Resolved" type="InProgress" />
      <State value="Closed" type="Complete" />
    </States>
    <Columns>
      <Column refname="System.WorkItemType" width="100" />
      <Column refname="System.Title" width="400" />
      <Column refname="System.State" width="100" />
      <Column refname="Microsoft.VSTS.Common.BusinessValue" width="50" />
      <Column refname="Microsoft.VSTS.CMMI.RequirementType" width="100" />
      <Column refname="System.Tags" width="200" />
    </Columns>
  </PortfolioBacklog>
```

<a id="TF402590"></a>
### TF402590: Several portfolio backlogs *[Backlog 1, Backlog 2]* don't define their parent.  
Only one portfolio backlog, the top backlog, may be unparented. All other backlogs must include a ``` parent="Microsoft.FooCategory" ``` attribute and value.

#### Resolution example
```xml
  <PortfolioBacklog category="Microsoft.FeatureCategory" parent="Microsoft.EpicCategory" pluralName="Features" singularName="Feature">
```

<a id="402595"></a>
### 402595: Too many portfolio backlogs are defined. A maximum of 5 are allowed.

Edit the ProcessConfiguration.xml file to remove the extra ```PortfolioBacklog``` elements from the ```PortfolioBacklogs``` section.   

Review [ProcessConfiguration XML element reference](../../../../reference/xml/process-configuration-xml-element.md) for more information.

<a id="TF400572"></a>
### TF400572: The Project Process Settings must be configured for this feature to be used.

This is caused by templates that are from TFS 2010 or earlier, before the Project Process Settings existed. Try running [Configure features after an upgrade](../../../../reference/configure-features-after-upgrade.md) to resolve. 

<a id="wit-definitions"></a>
## Work item types  

<a id="TF402570"></a>
### TF402570: You've defined *[n]* work item types. A maximum of *[witLimit]* is allowed.

You've defined more WITs that are allowed in the process. Review your WorkItems.xml file and reduce the number of ```WORKITEMTYPE``` statements it contains and remove the associated WIT definition files from the process.

<a id="TF402573"></a>
### TF402573: Work item type WIT doesn't specify required ```refname``` attribute.  

Work item types (Bug, User Story, Task, etc.) require the ```refname``` attribute. The refname value must be unique and cannot contain any reserved namespaces.
The namespaces-System.*XXX* and Microsoft.VSTS.*XXX*-are reserved by Azure DevOps. 

See [All WITD XML elements reference](../../../../reference/xml/all-witd-xml-elements-reference.md) for more information.

#### Error example
```xml
<WORKITEMTYPE name="Bug">
```
#### Resolution example
```xml
<WORKITEMTYPE name="Bug" refname="MyCompany.Bug">
```

<a id="TF402599"></a>
### TF402599: The work item type refname *[refName]* isn't valid as it uses a disallowed namespace [namespace].

Reference names of custom fields and WITs can't use reserved namespaces: System.*XXX* and Microsoft.VSTS.*XXX*.  

Edit the ```refname``` attribute of the named WIT. 

#### Error example
```xml
<FIELD name="Custom Field" refname="Microsoft.VSTS.CustomField" type="String" />
```
#### Resolution example
```xml
<FIELD name="Custom Field" refname="*CustomNamespace.CustomField*" type="String" />
```

<a id="TF402600"></a>
### TF402600: The work item type reference name *[refName]* isn't valid. Work item type reference names must contain only letters, no spaces, and at least one period (.)   
WIT reference names must adhere to established naming conventions: only letters, no spaces, and at least one period (.)

Edit the ```refname``` attribute of the named WIT to meet naming requirements.. 

#### Error example
```xml
<WORKITEMTYPE name="Bug" refname="MyCompanyBug32">
```
#### Resolution example
```xml
<WORKITEMTYPE name="Bug" refname="MyCompany.Bug">
```

<a id="wit-fields"></a>
## Work item fields  

<a id="TF402538"></a>
### TF402538: Field rule *[ruleName]* isn't supported.  

Edit your WIT definitions to remove the named rule. 
The following rules are **not** supported for import to Azure DevOps: 
```MATCH```, ```CANNOTLOSEVALUE```, ```PROHIBITED VALUES```, and ```NOTSAMEAS```.

<a id="TF402539"></a>
### TF402539: Field *[refName]* only allows the following rules: *[ruleNames]*.

Edit your WIT definitions for the named field and remove any non-allowed rule(s). Review both the ```FIELDS``` and ```WORKFLOW``` sections. 
Most system fields do not allow specifying rules. 

#### Valid rules to use with System fields 

| Name                 | Allowed rules                                                                                                                               |                                                                                                                
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| System.Title         | ```REQUIRED```, ```DEFAULT```                                                                                                             |
| System.Description   | ```REQUIRED```, ```DEFAULT```                                                                                                             |
| System.AssignedTo    | ```REQUIRED```, ```DEFAULT```, ```ALLOWEXISTINGVALUE```, ```VALIDUSER```                                                              |
| System.ChangedBy     | ```REQUIRED```, ```DEFAULT```, ```ALLOWEXISTINGVALUE```, ```VALIDUSER```                                                              | 

<a id="TF402540"></a>
### TF402540: Work item type *[witName]* isn't valid because it specifies global list *[GLOBALLIST]*. Global lists aren't supported.

Global lists are not supported in VSTS. 
Replace all instances of ```GLOBALLIST``` elements with 
```ALLOWEDVALUES``` and ```LISTITEM``` elements in all WIT definition files.
Reference:  [Define pick lists](../../../../reference/xml/define-pick-lists.md).

#### Error example
```xml
<FIELD name="CustomField" refname="MyCompany.CustomField" type="String">
  <ALLOWEDVALUES>
    <GLOBALLIST name="Disciplines" />
  </ALLOWEDVALUES>
</FIELD>
```
#### Resolution example
```xml
<FIELD name="CustomField" refname="MyCompany.CustomField" type="String">
  <ALLOWEDVALUES>
    <LISTITEM value="Architecture" />
    <LISTITEM value="Requirements" />
    <LISTITEM value="Development" />
    <LISTITEM value="Release Management" />
    <LISTITEM value="Project Management" />
    <LISTITEM value="Test" />
  </ALLOWEDVALUES>
</FIELD>
```

<a id="TF402541"></a>
### TF402541: Work item type *[witName]* isn't valid because it references global list *[globalListName]*. Global lists aren't supported.

Global lists are not supported in VSTS. Replace all instances of ```GLOBALLIST``` elements with 
```ALLOWEDVALUES``` and ```LISTITEM``` elements in all WIT definition files.
Reference: [Define pick lists](../../../../reference/xml/define-pick-lists.md).

#### Error example
```xml
<FIELD name="CustomField" refname="MyCompany.CustomField" type="String">
  <ALLOWEDVALUES>
    <GLOBALLIST name="Disciplines" />
  </ALLOWEDVALUES>
</FIELD>
```
#### Resolution example
```xml
<FIELD name="CustomField" refname="MyCompany.CustomField" type="String">
  <ALLOWEDVALUES>
    <LISTITEM value="Architecture" />
    <LISTITEM value="Requirements" />
    <LISTITEM value="Development" />
    <LISTITEM value="Release Management" />
    <LISTITEM value="Project Management" />
    <LISTITEM value="Test" />
  </ALLOWEDVALUES>
</FIELD>
```
<a id="TF402542"></a>
### TF402542: The custom field refname *[refName]* isn't valid as it uses disallowed namespace *[namespace]*.

The namespaces-System.*XXX* and Microsoft.VSTS.*XXX*-are reserved in VSTS. 
Reference names of custom fields and types can't use these namespaces.   

To fix this error, simply rename the ```refname``` attribute for the named field in the WIT definition files where it appears. 

#### Error example
```xml
<FIELD name="CustomField" refname="System.CustomField" type="String" />
  
  - OR - 
  
<FIELD name="CustomField" refname="Microsoft.VSTS.CustomField" type="String" />
  
```
#### Resolution example
```xml
<FIELD name="CustomField" refname="MyCompany.CustomField" type="String" />
```
<a id="TF402544"></a>
### TF402544: Field *[refName]*, defined in work item type *[witName]*, requires an ```ALLOWEDVALUES``` rule that contains values to support element *[elementName]* specified in ProcessConfiguration.

Edit the named field in the named WIT to provide the missing ```ALLOWEDVALUES``` rule, referencing the named element for more details.  

The ProcessConfiguration.xml file element,  ```TypeField refname="Microsoft.VSTS.Common.Activity" type="Activity"```, 
requires a pick list is defined for the Microsoft.VSTS.Common.Activity field in all WITs that belong to the Task Category. 

<TypeField refname="Microsoft.VSTS.Common.Activity" type="Activity" />
  
If you have added bugs to the Task Category, you must ensure that the Bug.xml file contains the 
named field and specifies the same pick list as is defined for it in the Task.xml file. 
 
#### Error example
Bug.xml has the field defined, but not the pick list.
```xml
      <FIELD name="Activity" refname="Microsoft.VSTS.Common.Activity" type="String" reportable="dimension">
        <HELPTEXT>Type of work involved</HELPTEXT>
      </FIELD> 
```

#### Resolution example
Corrected Bug.xml
```xml
      <FIELD name="Activity" refname="Microsoft.VSTS.Common.Activity" type="String" reportable="dimension">
        <HELPTEXT>Type of work involved</HELPTEXT>
        <SUGGESTEDVALUES>
          <LISTITEM value="Development"/>
          <LISTITEM value="Testing"/>
          <LISTITEM value="Requirements"/>
          <LISTITEM value="Design"/>
          <LISTITEM value="Deployment"/>
          <LISTITEM value="Documentation"/>
        </SUGGESTEDVALUES>
      </FIELD>
```

<a id="TF402545"></a>
### TF402545: Element *[elementName]* requires that you include field *[fieldName]* in the definition of work item type *[witName]*.
You should include a corresponding ```FIELD``` element in the named WIT definition for each ```field``` that you specify within the ```AddPanel``` section of the ProcessConfiguration.xml file. \
You should also include a ```Control``` element within the ```FORM``` section of the named WIT.   

#### Error example
ProcessConfiguration.xml specifies two custom fields. However, these fields aren't defined in the UserStory.xml file. 
```xml
<AddPanel>
   <Fields>
      <Field refname="System.Title" />
      <Field refname="Fabrikam.Product" />
      <Field refname="Fabrikam.Technology" />
   </Fields>
</AddPanel>
```
#### Resolution example
Missing ```FIELD``` elements added to the UserStory.xml file.
```xml
      <FIELD name="Product" refname="Fabrikam.Product" type="String" reportable="dimension">
     <FIELD name="Technology" refname="Fabrikam.Technology" type="String" reportable="dimension"> 
```

<a id="TF402549"></a>
### To support ProcessConfiguration element *[elementName]*, work item type *[witName]* must define TypeField *[typeField]* (field refname [refName]).

In the ProcessConfiguration you created a ```TypeField``` with ```TypeFieldValues```. In your work item type you have to reference that same ```TypeField```.


#### Error example
ProcessConfiguration.xml
```xml
  <TypeField refname="Custom.ApplicationType" type="ApplicationType">
    <TypeFieldValues>
      <TypeFieldValue value="Web application" type="WebApp" />
      <TypeFieldValue value="Remote machine" type="RemoteMachine" />
      <TypeFieldValue value="Client application" type="ClientApp" />
    </TypeFieldValues>
  </TypeField>  
```
FeedbackRequest.xml is using the Microsoft.VSTS.Feedback.ApplicationType field when it should be using the Custom.ApplicationType field.
```xml
  <FIELD name="Application Type" refname="Microsoft.VSTS.Feedback.ApplicationType" type="String">
    ...
  </FIELD>
```

#### Resolution example
FeedbackRequest.xml
```xml
  <FIELD name="Application Type" refname="Custom.ApplicationType" type="String">
    ...
  </FIELD>
```

<a id="TF402556"></a>
### TF402556: For field *[refName]* to be well defined, you must name it *[fieldName]* and set its type to *[fieldType]*. Provided *[refName]* is *[fieldName]* and type is *[fieldType]*.

If you are on TFS and running tfsMigrator, this error is usually generated when your process is out-of-date and a system field is not properly defined. In the majority of those cases you need to use the ```witadmin /changefield``` command to properly rename the field.

#### Examples of Reserved Fields
Reserved System.*XXX* and Microsoft.VSTS.*XXX* fields have required name and type values.

| Field                                                    | Name                        | Type                                                                                                          |                                                                                                                
|----------------------------------------------------------|-----------------------------|------------------|
| System.Id                                                | ID                          | Integer          |
| System.Title                                             | Title                       | String           |
| Microsoft.VSTS.Scheduling.StoryPoints                    | Story Points                | Double           |
| Microsoft.VSTS.Scheduling.RemainingWork                  | Remaining Work              | Double           |
| Microsoft.VSTS.Scheduling.OriginalEstimate               | Original Estimate           | Double           |
| Microsoft.VSTS.Scheduling.CompletedWork                  | Completed Work              | Double           |

#### Error example
TF402556: For field Microsoft.VSTS.TCM.ReproSteps to be well defined, you must name it Repro Steps and set its type to HTML. Provided Microsoft.VSTS.TCM.ReproSteps is My Repro Steps and type is HTML.

In Bug.xml, the friendly field name has been changed to "My Repro Steps".
```xml
  <FIELD name="My Repro Steps" refname="Microsoft.VSTS.TCM.ReproSteps" type="HTML">
    <HELPTEXT>How to see the bug. End by contrasting expected with actual behavior.</HELPTEXT>
  </FIELD> 
```
#### Resolution example
Bug.xml
```xml
  <FIELD name="Repro Steps" refname="Microsoft.VSTS.TCM.ReproSteps" type="HTML">
    <HELPTEXT>How to see the bug. End by contrasting expected with actual behavior.</HELPTEXT>
  </FIELD> 
```

<a id="TF402557"></a>
### TF402557: Inconsistent definitions exist for field *[refName]* in the following work item types: *[witName]*. Ensure that all references to a field have the same *RefName*, *Name*, and *Type*.
```FIELD``` element definitions for fields with the same friendly name must be consistent across WITs. 
Check to ensure that the ```refName```, ```name```, and ```type``` attributes are the same in each of your WIT definitions for the named field.

#### Error example
Bug.xml
```xml
  <FIELD name="Hair Color" refname="MyCompany.CustomFields.HairColor" type="String" reportable="dimension" />
```

UserStory.xml
```xml
  <FIELD name="Hair Color 2" refname="MyCompany.CustomFields.HairColor" type="Double" reportable="dimension" />
```
Notice that the ```name``` and ```type``` attributes differ from that in the Bug.xml work item type

#### Resolution example
Bug.xml
```xml
  <FIELD name="Hair Color" refname="MyCompany.CustomFields.HairColor" type="String" reportable="dimension" />
```
UserStory.xml
```xml
  <FIELD name="Hair Color" refname="MyCompany.CustomFields.HairColor" type="String" reportable="dimension" />
```

<a id="TF402558"></a>
### TF402558: The definition of field *[refName]* is inconsistent with the existing definition of the field in the following templates: *[templateNames]*.
Fields must be defined consistently across processes that have been or that you plan to import to Azure DevOps Services. 
The system doesn't allow you to import a process that contains a ```FIELD``` element which is defined 
one way in Process A and another way in Process B.  All ```FIELD``` element attributes must match.

#### Example
Process A, Bug.xml
```xml
  <FIELDS>  
    ...   
    <FIELD name="Foo" refname="MyCompany.CustomFields.Foo" type="String" reportable="dimension" />
    ...
  </FIELDS>
```

Process B, Bug.xml

```xml
  <FIELDS>  
    ...   
    <FIELD name="Bar" refname="MyCompany.CustomFields.Foo" type="Double" reportable="dimension" />
    ...
  </FIELDS>
```
Notice how different values are specified for ```name``` and ```type``` attributes. 

### Resolution
Ensure that fields of the same ```refname``` are defined the same across all processes that  
have been imported or that you plan to import to Azure DevOps Services.

<a id="TF402559"></a>
### TF402559: The definition for field *[refName]* is inconsistent with an existing field. The ```type``` is *[typeName]* but should be *[typeName]*.
Edit the WIT file(s) that contains the named field to ensure the specified ```type``` attribute value is consistent across all WITs.  

<a id="TF402562"></a>
### TF402562: You've defined *[n]* fields for work item type *[witName]*. Only *[fieldLimit]* are allowed.
You've defined *[n]* fields for work item type *[witName]*. Only *[fieldLimit]* are allowed. Within a single WIT, you can specify only the specified number of fields.  

Edit the named WIT and remove the extra custom fields to reduce the total number of fields to be within the allowed limit.

<a id="TF402563"></a>
### TF402563: You've defined a total of *[n]* fields for all work item types. Only *[fieldLimit]* are allowed.
You've defined *[n]* fields for all WITs defined in the process. Only *[fieldLimit]* are allowed. This includes System.*XXX* and Microsoft.VSTS.*XXX* namespace fields as well as custom fields.  

Review the ```FIELDS``` and ```WORKFLOW``` sections and determine which custom fields to remove.

<a id="TF402566"></a>
### TF402566: You've defined *[n]* field rules for work item type *[witName]*. A maximum of *[ruleLimit]*  is allowed.  
You've defined *[n]* field rules for the named WIT which exceeds the allowed number of field rules for any one WIT.  

Edit the named WIT and remove the extra field rules to reduce the total number of fields to be within the allowed limit.

<a id="TF402568"></a>
### TF402568: You've defined *[n]* fields with ```syncnamechanges="true"``` for work item type *[witName]*. A maximum of 64 is allowed.

The number of fields with  ```syncnamechanges="true"``` defined for the named WIT exceeds the allowed limit. This includes System.*XXX* and Microsoft.VSTS.*XXX* namespace fields as well as custom fields.  

Review the ```FIELDS``` section of the named WIT and determine which custom fields to remove or modify.

#### Example
```xml
  <FIELD name="Assigned To" refname="System.AssignedTo" type="String" reportable="dimension" syncnamechanges="true" >
    ...
  </FIELD>
```

<a id="TF402569"></a>
### TF402569: You've defined *[n]* values for field *[fieldName]* in work item type *[witName]*. A maximum of *[listLimit]* is allowed.

The number of ```LISTITEM``` elements defined for the named field in the named WIT exceeds the allowed limit.  

Edit the named WIT to reduce the number of```LISTITEM``` elements so as not to exceed the allowed maximum. 

#### Example
```xml
  <FIELD name="Favorite Color" refname="MyCompany.CustomFields.FavColor" type="String" reportable="dimension">
    <ALLOWEDVALUES>
      <LISTITEM value="Color1" />
      <LISTITEM value="Color2" />
      <LISTITEM value="Color3" />
      . . . 
    </ALLOWEDVALUES>
  </FIELD>
```

notice the bug and user story ```refname``` values are different

<a id="TF402584"></a>
### TF402584: Field rule attributes "for" or "not" aren't supported.
The ```"for"``` and ```"not"``` attributes are not supported at all for any field rule for import to Azure DevOps Services.  
Review the ```FIELDS``` and ```WORKFLOW``` sections for the presence of ```"for"``` and ```"not"``` attributes and remove them. 

#### Error example
```xml
<FIELD name="Title">
  <READONLY for="Dev Team" not="Test Team" />
</FIELD>
```

#### Resolution example
```xml
<FIELD name="Title">
  <READONLY />
</FIELD>
```

<a id="TF402593"></a>
### TF402593: Field rules aren't supported for field *[fieldName]*.

Most System and Microsoft.VSTS fields do not support rules. 
See [Customize a process](customize-process.md#required-fields) 
for complete list of supported field rules.

Edit the WIT definition files that contain the named field and remove the field rules specified for it. 

<a id="TF402602"></a>
### TF402602: The field *[refName]* must have exactly these values *[values]*.

All fields defined by VSTS in the reserved namespaces-System.*XXX* and Microsoft.VSTS.*XXX*-must not be altered.  If you wish to have a different list of values in these pick list fields, define your own custom field.

#### Error example
Bug.xml has the priority field defined, but has a different list of values than expected.
```xml
      <FIELD name="Priority" refname="Microsoft.VSTS.Common.Priority" type="Integer" reportable="dimension">
        <ALLOWEDVALUES expanditems="true">
          <LISTITEM value="0"/>
          <LISTITEM value="1"/>
          <LISTITEM value="2"/>
        </ALLOWEDVALUES>
		<DEFAULT from="value" value="2" />
      </FIELD>
```

#### Resolution example
Corrected Bug.xml including a new field
```xml
      <FIELD name="Priority" refname="Microsoft.VSTS.Common.Priority" type="Integer" reportable="dimension">
        <HELPTEXT>Business importance. 1=must fix; 4=unimportant.</HELPTEXT>
        <ALLOWEDVALUES expanditems="true">
          <LISTITEM value="1"/>
          <LISTITEM value="2"/>
          <LISTITEM value="3"/>
          <LISTITEM value="4"/>
        </ALLOWEDVALUES>
        <DEFAULT from="value" value="2" />
      </FIELD>

	  <FIELD name="Custom Priority" refname="Custom.Priority" type="Integer" reportable="dimension">
        <HELPTEXT>Business importance. 1=must fix; 4=unimportant.</HELPTEXT>
        <ALLOWEDVALUES expanditems="true">
          <LISTITEM value="0"/>
          <LISTITEM value="1"/>
          <LISTITEM value="2"/>
        </ALLOWEDVALUES>
        <DEFAULT from="value" value="2" />
      </FIELD>
```

<a id="VS402504"></a>
### VS402504: User or group cannot be found *[project]\Group Name*. Verify that the users and groups used in your work item type definition exist.

Custom project scoped groups are not supported. You can only reference account level scoped groups.

#### Error example
Bug.xml is referencing a project scoped group.
```
... "[project]\Organization Leaders"
```

#### Resolution example
Create a new account (collection) level group "Organization Leaders" and reference it accordingly in the XML.
```
... "[global]\Organization Leaders"
```

<a id="TF237094"></a>
### TF237094: Field name '[fieldName]' is used by the field '[refName]', so it cannot be used by the field '[refName]'.

Field name already exist with that same name on a different field. Change the name of the field.

#### Error example
```TF237094: Field name 'External ID' is used by the field 'Custom.ExistingField.ExternalID', so it cannot be used by the field 'Custom.NewField.ExternalID'.```

#### Resolution example
Change the field name of Custom.NewField.ExternalID
```xml
<FIELD name="External ID" refname="Custom.NewField.ExternalID" type="string" reportable="dimension" />
```

<a id="wit-work-item-layout"></a>
## Work item layout

<a id="VS403104"></a>
### VS403104: Work item type *[witName]* references the required field *[refName]* which is not included in all layouts.

This warning is generated if you have a required field in a work item type that is referenced in the ```<Layout>``` node but not the ```<WebLayout>```. The ```<WebLayout>``` is used to modify the layout of the new form. See [WebLayout xml reference](../../../../reference/xml/weblayout-xml-elements.md) for details.

<a id="VS403073"></a>
### VS403073: Group & ```<Group Name>```: violates the rule that a group can only contain a single HTML or WebPage control preceded by label controls..

In the new form layout, a group can only contain one HTMLFieldControl or WebPageControl. 

#### Error example
```xml
<Section>
	<Group Label="Description:">
		<Control Label="Reason For Request:" Type="HtmlFieldControl" FieldName="System.Description" />
        <Control Label="Business Case For Request:" Type="HtmlFieldControl" FieldName="MB.BusinessCase" />
	</Group>
</Section>

```

To resolve this, create two separate groups that contain one control each.

#### Resolution example
```xml
<Section>
	<Group Label="Reason for Request">
		<Control Label="Reason For Request:" Type="HtmlFieldControl" FieldName="System.Description" />       
	</Group>
	<Group Label="Business Case">
		<Control Label="Business Case For Request" Type="HtmlFieldControl" FieldName="Custom.BusinessCase" />       
	</Group>
</Section>
```

<a id="TF402594"></a>
### TF402594: File violates the schema with the following error: The element 'Control' cannot contain child element 'Link' because the parent element's content model is empty.

#### Error example
```xml
  <Control Type="FieldControl" FieldName="customfield.foo" Label="Foo" LabelPosition="Left">
    <Link UrlRoot="http://www.visualstudio.microsoft.com/team-services/" />
  </Control>
```

#### Resolution example
```xml
  <Control Type="FieldControl" FieldName="System.Title" LabelPosition="Left" Label="Title 1"  
    <LabelText>  
        <Text>  
          <Link UrlRoot="http://www.visualstudio.microsoft.com/team-services/" />  
              Title 2  
        </Text>  
    </LabelText>  
  </Control>  
```

<a id="wit-workflow-definitions"></a>
## Workflow definitions

<a id="TF402567"></a>
### TF402567: You've defined *[n]* workflow states for work item type *[witName]*. A maximum of *[stateLimit]*  is allowed.

You've defined *[n]* workflow states for the named WIT which exceeds the allowed number of workflow states for any one WIT.  

Edit the ```WORKFLOW``` section of the named WIT and remove the extra ```STATE``` elements to reduce the total number of states to be within the allowed limit. 

<a id="TF402578"></a>
### TF402578: Field *[refName]* specifies friendly name *[friendlyName]* which is already in use by field *[refName]*. Friendly names must be unique across all field definitions.
Field names must be unique within the work item type. 

#### Error example
```xml
  <FIELD name="Foo" refname="MyCompany.CustomFields.Foo" type="String" reportable="dimension" />
  <FIELD name="Foo" refname="MyCompany.CustomFields.Bar" type="String" reportable="dimension" />
```
Notice there are two fields with the name ``` <FIELD name="Foo" ```

#### Resolution example
```xml
  <FIELD name="Foo" refname="MyCompany.CustomFields.Foo" type="String" reportable="dimension" />
  <FIELD name="Bar" refname="MyCompany.CustomFields.Bar" type="String" reportable="dimension" />
```

<a id="TF402579"></a>
### TF402579: Name *[friendlyName]* is used multiple times on different fields across the following work item types: *[witNames]*. Name for fields must be unique across the project collection.

Fields referencing the same ```refname="MyCompany.FieldName"``` must have the same friendly name ```FIELD name="fieldname"``` value. 

#### Error example
Process A, Bug.xml
```xml
  <FIELD name="Foo" refname="MyCompany.CustomFields.Foo" type="String" reportable="dimension" />  
```

Process B, Bug.xml
```xml
  <FIELD name="Bar" refname="MyCompany.CustomFields.Foo" type="String" reportable="dimension" />  
```
Because both fields share the same reference name, ```refname="MyCompany.CustomFields.Foo" ```, 
they must also specify the same friendly name ``` <FIELD name="Foo"  ``` across all processes 
that have been imported or will be imported to Azure DevOps Services. 

<a id="TF402580"></a>
### TF402580: You can only use the name *[witName]* for a single work item type.
WIT friendly names ```WORKITEMTYPE name="Name" ``` must be unique within the process.

#### Error example
My Work Item A.xml
```xml
  <WORKITEMTYPE name="My Work Item" refname="My.MyWorkItemA">
```

My Work Item B.xml
```xml
  <WORKITEMTYPE name="My Work Item" refname="My.MyWorkItemB">
```
Notice how the ```WORKITEMTYPE name=``` is the same across both work item types. 

#### Resolution example
My Work Item A.xml
```xml
  <WORKITEMTYPE name="My Work Item A" refname="My.MyWorkItemA">
```

My Work Item B.xml
```xml
  <WORKITEMTYPE name="My Work Item B" refname="My.MyWorkItemB">
```

<a id="TF402581"></a>
### TF402581: You can only use the refname *[refName]* for a single work item type.
WIT reference names ```refname="value" ``` must be unique within the process.

#### Error example
Bug.xml
```xml
  <WORKITEMTYPE name="Bug" refname="MyCompany.Name">
```
UserStory.xml
```xml
  <WORKITEMTYPE name="User Story" refname="MyCompany.Name"> 
```
notice both ```refname``` values equal "MyCompany.Name"

#### Resolution example
Bug.xml
```xml
  <WORKITEMTYPE name="Bug" refname="MyCompany.Bug">
```
UserStory.xml
```xml
  <WORKITEMTYPE name="User Story" refname="MyCompany.UserStory"> 
```


<a id="TF402582"></a>
### TF402582: Work item type *[witName]* contains custom control *[controlName]* which is not supported.  
Custom controls are not supported in Azure DevOps Services. Review the ```FORM``` section for the named WIT and remove any custom controls that are defined. 

#### Error example 
```Type="OneViewMultiValueControl"``` specifies a custom control. This must be removed or replaced to a supported control.    
```xml
    <Group Label="Engineering Alignment">
        <Column PercentWidth="100">
            <Control FieldName="Fabrikam.Content.Product" Type="FieldControl" Label="Product" LabelPosition="Left" />
            <Control FieldName="Fabrikam.Content.Release" Type="FieldControl" Label="Milestone" LabelPosition="Left" />
            <Control FieldName="Fabrikam.Content.Technology" Type="FabrikamMultiValueControl" Label="Technology" LabelPosition="Left" />
        </Column>
    </Group>
``` 


<a id="test-management"></a>
## Test management plug-in errors
The TestManagement.xml file, located in the Test Management folder, 
must conform to the syntax and rules described in [Define the initial configuration of Test Manager](../../../../reference/process-templates/define-initial-configuration-test-manager.md). 


<a id="TF402533"></a>
### TF402533: Element '*[elementName]*' in TestManagement plug-in is missing the  ```'fileName'``` attribute.  
Add the missing attribute to the named element in the TestManagement.xml file. 

<a id="TF402534"></a>
### TF402534: TestManagement plug-in contains an unsupported task '*[taskName]*'  

Correct the named tasked in your TestManagement.xml file.

#### Error example 
The ```TestResolutionStates``` element has been misspelled.   
```xml
    <taskXml>
      <TestResolutionSattes fileName="Test Management\TestResolutionState.xml" />
    </taskXml>
```
#### Resolution example 
Corrected misspellings.  
```xml
    <taskXml>
      <TestResolutionStates fileName="Test Management\TestResolutionState.xml" />
    </taskXml>
```