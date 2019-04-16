---
title: Add or modify work item types 
titleSuffix: Azure DevOps & TFS
description: Specify  type definitions for a process template within the WorkItemTracking plug-in 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: c0cec71f-89ad-43f5-960e-6008e3f9d975
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 02/24/2017
---


# Add type definitions for work items to a process template

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

Work item types (WITs) provide the foundation for all tracking, monitoring, and reporting on the development of a product and its features. A WIT defines the data fields, the workflow, and the work item form for an item of work that you will track. Types of work items include bugs, user stories, and tasks. 

When you customize a process template, you can make the following WIT customizations:
- Add fields
- Customize the workflow
- Modify the work item form
- Add or remove WITs  
  
You specify the type definitions for a process template for several work items as a task within the WorkItemTracking plug-in. This task is required because work item types support tracking and reporting work. You specify each type definition file to upload within the **taskXml** element. The plug-ins for test management, reports, and the portal depend on the successful upload of the definitions for WITs.  
  
The [default process templates](../../boards/work-items/guidance/choose-process.md) define several WITs. The types and the fields that are defined within them are referenced in the definitions of categories, work item queries, and reports. Therefore, the task to upload the WIT definitions must successfully complete before the tasks to upload categories, work item queries, and reports.  
  
Also, the task to upload the definition files for link types must precede the task to upload the type definitions for WITs. For more information, see [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md).  
  
After a project is created using the process template, you can add, remove, rename, and change the definitions of WITs by using the **witadmin** command-line tool. For more information, see [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).  
  
<a name="create"></a> 
##  Define a WIT   
Each WIT definition must be specified in its own file in the **WITD** container element. Each definition must also conform to the schema definition for work item types. 

The following example shows the high-level syntax structure that defines a work item type.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<WITD application="work item type editor" version="1.0">  
    <WORKITEMTYPE name="Bug">  
        <DESCRIPTION>Bug work items are used to track defects in the code.</DESCRIPTION>  
        <GLOBALLISTS> . . . </GLOBALLISTS>  
        <FIELDS> . . . </FIELDS>  
        <WORKFLOW> . . . </WORKFLOW>  
        <FORM> . . . </FORM>  
    </WORKITEMTYPE>  
</WITD>  
```  
  
 You can customize or create type definition files in the TypeDefinitions folder. For more information about how to define a type of work item, see [All WITD elements](../xml/all-witd-xml-elements-reference.md).  
  
<a name="upload"></a> 
##  Specify WIT definition files to upload  
 To upload a WIT definition, you specify the **WORKITEMTYPE** element. The filename attribute is a relative path of the type definition file. For example, the following syntax specifies that the Bug.xml file will be uploaded.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\filename.xml"/>  
```  
  
The following example shows how to specify a task that creates the following WITS: bug, issue, shared steps, task, test case, and user story. Because the definitions for several WITs contain filters for the **TestedBy** link type, the **LinkTypes** task must be completed before the **WITs** task can be completed.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<task id="WITs" name="WorkItemType definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item types created">  
      <dependencies>  
      <dependency taskId="LinkTypes" />  
      </dependencies>  
      <taskXml>  
      <WORKITEMTYPES>  
       <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Bug.xml" />  
       <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Issue.xml" />  
       <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\CodeReviewRequest.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\CodeReviewResponse.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Feature.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\FeedbackRequest.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\FeedbackResponse.xml" />   
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\SharedStep.xml" />  
       <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Task.xml" />  
       <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\TestCase.xml" />  
       <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\UserStory.xml" />  
      </WORKITEMTYPES>  
      </taskXml>  
</task>  
```  
  
<a name="elements"></a> 
##  WORKITEMTYPES element reference  
 The following table describes the elements that you use to upload the type definitions for work items. You specify these elements within a **taskXml** container element in the WorkItemTracking plug-in file.  
  
> [!NOTE]
>  By using the **WORKITEMTYPE** (WorkItemTracking) element, you specify a type definition file to upload. By using the **WORKITEMTYPE** (WITD) element, you specify the name of a type to define. For more information, see [All WITD elements](../xml/all-witd-xml-elements-reference.md).  
  
|Element| Description and syntax|  
|-------------|------------|
|**WORKITEMTYPE**|Required child element of **WORKITEMTYPES**. Specifies the path and name of the file that contains a type definition to upload.<br /> `<WORKITEMTYPE fileName="WITFilePathName" />`|  
|**WORKITEMTYPES**|Required child element of the WorkItemTracking plug-in. Contains a collection of **WORKITEMTYPE** elements that each specify a definition file to upload. <br/><code>&lt;WORKITEMTYPES&gt; <br/>      &lt;WORKITEMTYPE /&gt;   . . . <br/>&lt;/WORKITEMTYPES&gt; </code>  |  
  
## Related articles
-  [All WITD elements](../xml/all-witd-xml-elements-reference.md)   
-  [Modify a field or add a custom field](../add-modify-field.md)   
-  [Add or modify a work item type](../add-modify-wit.md)   
-  [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md)   
-  [Define objects for tracking work items](define-objects-track-work-items-plug-in.md)


