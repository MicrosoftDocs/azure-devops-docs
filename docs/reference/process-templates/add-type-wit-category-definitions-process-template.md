---
title: Add or modify work item categories 
titleSuffix: Azure DevOps & TFS
description: Add or modify categories to your process template for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 93f146df-8424-4183-89f7-298943eb8c0f
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 09/08/2017
---

# Add type definitions for work item categories to a process template

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can add categories to your process template. A category associates a group label with one or more work item types (WITs). Categories are useful when your projects contain similar WITs that are named differently. You specify the category definitions in one file, and then you specify that file to upload within the **taskxml** element of the WorkItemTracking plug-in.  
  
The default process templates define over ten categories that are used to support Agile tools, test case management, and other features. You can customize or create a category definition file. The category file is defined in the WorkItem Tracking folder. For more information, see [Use categories to group work item types](../xml/use-categories-to-group-work-item-types.md).  
  
After a project is created from the process template, you can [export and import categories](../witadmin/witadmin-import-export-categories.md) for a project collection by using the **witadmin** command-line tool.  
  

<a name="create"></a> 
##  Define categories  

The file that defines the categories must conform to the schema definition for categories, defined in the categories-01.xsd file, and must be specified in its own file in the **WITD** container element.  
  
The following example shows the syntax structure that defines a category that is named **Requirement Category** and that is associated with the **User Story** work item type.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<CATEGORIES>  
      <CATEGORY refname="Microsoft.RequirementCategory" name="Requirement Category">  
      <DEFAULTWORKITEMTYPE name="User Story" />  
      </CATEGORY>  
      . . .   
</CATEGORIES>  
```  
  
<a name="upload"></a> 
##  Specify a category definition file to upload  
 To upload a set of category definitions, you specify the **CATEGORIES** element within the **taskxml** element. The filename attribute is a relative path of the category definition file. For example, the following syntax specifies that the categories.xml file will be uploaded.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<CATEGORIES fileName="WorkItem Tracking\categories.xml" />  
```  
  
 The following example shows how to specify a task that uploads a categories file. Because each category specifies a default work item type, the task to upload the category definition file depends on the successful completion of the **WITs** task which uploads the type definitions for work items.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<task id="Categories" name="Categories definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item type categories created">  
      <dependencies>  
      <dependency taskId="WITs" />  
      </dependencies>  
      <taskXml>  
      <CATEGORIES fileName="WorkItem Tracking\Categories.xml" />  
      </taskXml>  
</task>  
```  
  
<a name="elements"></a> 
##  CATEGORIES element reference  
 The following table describes the **CATEGORIES** element that you use to upload the category definition file. You specify this element within a **taskXml** container element in the WorkItemTracking plug-in file.  
  
> [!NOTE]
>  You specify a definition file to upload using the **CATEGORIES** (WorkItemTracking) element. You specify the set of categories to define using the **CATEGORIES** (Definition) element.  
  
|Element|Description and syntax|  
|-------------|-----------------|  
|**CATEGORIES**|Optional child element of the WorkItemTracking plug-in. Specifies the path and name of the file that contains the category definitions to be uploaded when the WorkItemTracking plug-in task is processed. <br />`<CATEGORIES fileName="CategoriesFilePathName" />`|
  
## Related articles 
- [Use categories to group work item types](../xml/use-categories-to-group-work-item-types.md)
- [CATEGORIES XML reference](../xml/categories-xml-element-reference.md)
- [Import and export categories](../witadmin/witadmin-import-export-categories.md)   
- [Define objects for tracking work items](define-objects-track-work-items-plug-in.md)