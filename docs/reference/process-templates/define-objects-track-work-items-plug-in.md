---
title: Define work item types for a process template 
titleSuffix: Azure DevOps & TFS
description: Use the plug-in for tracking work items and defining a project's initial objects for tracking work for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 6d6103d6-2558-460c-b022-9eda2ffe4023
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 09/08/2017
---

# Define objects for tracking work items using the work Item tracking plug-in

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

By using the plug-in for tracking work items, you define a project's initial objects for tracking work. These objects include types of work items, work item queries, categories, link types, and instances of work items. After you create a project, you can modify these objects by using the **witadmin** command-line tool.  
  
 In the plug-in file, you specify one or more tasks and their dependencies. In general, you specify one task for each major upload activity, such as link types, work item types, queries, and categories.  
  
> [!IMPORTANT]
> You must specify the tasks to upload files and define queries in a specific sequence: link types first, then work item types, and then queries. Each definition file for these objects depends on the definitions that are specified in the tasks that precede them. In general, you should maintain the task sequence that is defined in the process template that you are customizing. For more information, see [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md).  
  
<a name="plugin"></a> 
##Plug-in name and location  

The names of the file, the folder, and the plug-in for the default process templates are as follows:  
    
**File name**: WorkItems.xml  
**Folder name**: WorkItem Tracking folder
**Plug-in name**: Microsoft.ProjectCreationWizard.WorkItemTracking
 
  
> [!NOTE]   
> You can change the name of the XML file and the folder name but not the name of the plug-in. The system doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy this kind of functionality, you must use your own distribution and installation program.  
  
 For specific information about each type of object that you can define, see one of the following topics:  
  
-   [Add type definitions for work items](add-wit-definitions-process-template.md)    
-   [Add link type definitions](add-link-type-definitions-to-a-process-template.md)    
-   [Add type definitions for work item categories](add-type-wit-category-definitions-process-template.md)    
-   [Add work item queries](add-work-item-queries-process-template.md)    
-   [Add work items](add-work-item-instance-process-template.md)  
  
<a name="syntax"></a> 
## Work item tracking plug-in syntax structure  
 The plug-in file for work item tracking must conform to the schema definition that is defined in the WorkItemMethodology.xsd file, and the plug-in must be specified in its own file.   
  
 The following syntax shows the high-level structure of the WorkItemTracking plug-in. Four tasks are specified, one each to upload the definitions for link types, types of work items, queries, and categories. If you were to add definitions work item instances, you would specify an additional task for each.  
  
 For a description of each element, see [Element reference](#elements) later in this topic.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8"?>  
<tasks>  
  <task id="LinkTypes" name="LinkType definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item link types created">  
    <taskXml>  
      <LINKTYPES>  
        <LINKTYPE />  
      . . .   
      </LINKTYPES>  
    </taskXml>  
  </task>  
  <task id="WITs" name="WorkItemType definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item types created">  
    <dependencies>  
      <dependency taskId="LinkTypes" />  
    </dependencies>  
    <taskXml>  
      <WORKITEMTYPES>  
        <WORKITEMTYPE />  
      . . .   
      </WORKITEMTYPES>  
    </taskXml>  
  </task>  
  <task id="Queries" name="Stored Query Definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item queries uploaded">  
    <dependencies>  
      <dependency taskId="WITs" />  
    </dependencies>  
    <taskXml>  
      <QUERIES>  
        <Permission />  
      . . .   
        <QueryFolder >  
          <Query />  
      . . .   
        </QueryFolder>  
      . . .   
      </QUERIES>  
    </taskXml>  
  </task>  
  <task id="Categories" name="Categories definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item type categories created">  
    <dependencies>  
      <dependency taskId="WITs" />  
    </dependencies>  
    <taskXml>  
      <CATEGORIES fileName="WorkItem Tracking\Categories.xml" />  
    </taskXml>  
  </task>  
</tasks>  
```  
  
##  <a name="elements"></a> Element reference  
 The following table describes the elements that you use to upload work item tracking objects. You specify these elements within a **taskXml** container element in the WorkItemTracking plug-in file. For information about the task, dependency, and taskXml elements, see [Define the tasks to process a plug-in](define-tasks-to-process-a-plug-in.md).  
  
|Element|Syntax|Description|  
|-------------|------------|-----------------|  
|**CATEGORIES**|`<CATEGORIES fileName="CategoriesFilePathName" />`|Optional child element of the **taskXml** element for the WorkItemTracking plug-in.<br /><br /> Specifies the path and name of the file that contains the category definitions to be uploaded when the WorkItemTracking plug-in task is processed.|  
|**FIELD**|`<FIELD refname="FieldReferenceName" value="Value" />`|Required child element of **WI**.<br /><br /> Defines a value for a field in the work item instance.|  
|**HYPERLINK**|`<HYPERLINK URL="URL" relativePath="false" />`|Optional child element of **WI**.<br /><br /> Defines a hyperlink for the work item instance.|  
|**LINKTYPE**|`<LINKTYPE fileName="LinkTypeFilePathName" />`|Required child element of **LINKTYPES**.<br /><br /> Specifies the path and name of a file that contains a link type definition to upload.|  
|**LINKTYPES**|`<LINKTYPES>      <LINKTYPE />  . . . </LINKTYPES>`|Optional child element of the **taskXml** element for the WorkItemTracking plug-in.<br /><br /> Contains a collection of **LINKTYPE** elements that each specify a definition file to upload.|  
|**Permission**|`<permission allow="ListOfPermissions" identity="GroupName" />`|Optional child element of **Query**.<br /><br /> Specifies the default permissions that are assigned to team queries. For more information, see [Assign permissions for work item queries](control-access-to-functional-areas.md#Queries).|  
|**Query**|`<Query name="QueryName" fileName="QueryFilePathName" />`|Required child element of **QUERIES**.<br /><br /> Specifies the name and the path of the .wiq file that defines a query to upload.|  
|**QueryFolder**|`<QueryFolder name=" FolderName ">`|Optional child element of **QUERIES**.<br /><br /> Specifies the name of a query folder.|  
|**QUERIES**|`<QUERIES>    . . .  </QUERIES>`|Optional child element of the **taskXml** element for the WorkItemTracking plug-in.<br /><br /> Specifies which query definition files to use to create default queries.|  
|**WI**|`<WI type="WorkItemType">    <FIELD> . . .</FIELD>    <HYPERLINK> . . .</HYPERLINK> </WI>`|Required child element of **WORKITEMS**.<br /><br /> Defines a type of work item to create and the values to assign to specific fields.|  
|**WORKITEMS**|`WORKITEMS>    <WI>       <FIELD> . . .</FIELD>       <HYPERLINK> . . .</HYPERLINK>    </WI> </WORKITEMS >`|Optional child element of the **taskXml** element for the WorkItemTracking plug-in.<br /><br /> Contains a collection of **WI** elements that each define a work item instance.|  
|**WORKITEMTYPE**|`<WORKITEMTYPE fileName="WITFilePathName" />`|Required child element of **WORKITEMTYPES**.<br /><br /> Specifies the path and name of the file that contains a type definition to upload.|  
|**WORKITEMTYPES**|`<WORKITEMTYPES>      <WORKITEMTYPE />  . . . </WORKITEMTYPES>`|Required child element of the WorkItemTracking plug-in.<br /><br /> Contains a collection of **WORKITEMTYPE** elements that each specify a definition file to upload.|  
  
## Related articles  
 [Customize a process](customize-process.md)   
 [Customize your work tracking experience](../customize-work.md)   
 [Overview of process template files](overview-process-template-files.md)