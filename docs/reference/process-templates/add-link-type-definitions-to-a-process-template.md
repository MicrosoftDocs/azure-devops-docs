---
title: Add link type definitions to a process template 
titleSuffix: TFS
description: Define additional types of links that team members can create between work items for a project for Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 803dbff8-fa50-4288-9bfb-dc807f4522bf
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 09/08/2017
---


# Add link type definitions to a process template

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can define additional link types that team members can create between work items for a project. A link type defines the labels and rules that govern the relationships or links between work items of that type. The link types that you specify supplement the default types for hierarchical, dependent, and related links. 

You specify the definition file for each link type in a separate file, or you can specify them all in one file. You then add entries to the **taskxml** element of the WorkItemTracking plug-in for each definition file to upload.  
  
 The [default process templates](../../boards/work-items/guidance/choose-process.md) defines several link types that the work item type (WIT) definitions reference. These are in addition to the system-defined link types. For more information, see [LinkTypes](../xml/link-type-element-reference.md).  
  
 The type definitions for links must be uploaded before the type definitions for work items. For more information, see [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md).  
  
 After a project is created, you can add, remove, rename, and change the types of links for a project collection by using the **witadmin** command-line tool. For more information, see [Manage link types](../witadmin/manage-link-types.md).  
  
<a name="create"></a> 
##  Define link types  
 You specify a link type using the **LinkType** element.   
  
The following example shows the syntax structure that defines the **TestedBy** link type.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<?xml version="1.0" encoding="utf-8"?>  
<LinkTypes>  
  <LinkType ReferenceName="Microsoft.VSTS.Common.TestedBy" ForwardName="Tested By" ReverseName="Tests" Topology="Dependency" />  
</LinkTypes>  
```  
  
You can customize or add a link type definition in the LinkTypes folder. For more information about how to define a type of link, see [Define a custom link type](../xml/define-custom-link-type.md).  
  

<a name="upload"></a>   
##  Specify link type definitions to upload  
 To upload a link type definition in the process template, you specify the **LINKTYPE** element within the **taskxml** element. The filename attribute is a relative path of the definition file for the link type. For example, the following syntax specifies that the TestedBy.xml file will be uploaded.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<LINKTYPE fileName="WorkItem Tracking\LinkTypes\TestedBy.xml" />  
```  
  
The following example shows how to specify a task that creates the two types of links that are defined in the Agile process template. These types correspond to the **SharedStep** and **TestedBy** link types.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<task id="LinkTypes" name="LinkType definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item link types created">  
      <taskXml>  
      <LINKTYPES>  
         <LINKTYPE fileName="WorkItem Tracking\LinkTypes\SharedStep.xml" />  
         <LINKTYPE fileName="WorkItem Tracking\LinkTypes\TestedBy.xml" />  
      </LINKTYPES>  
      </taskXml>  
</task>  
```  
  
<a name="elements"></a> 
  
##  LINKTYPES element reference  
 The following table describes the elements that you use to upload link type definitions. You specify these elements within a **taskXml** container element in the WorkItemTracking plug-in file.  
  
> [!NOTE]
> You specify the file that defines link types to upload by using the **LINKTYPE** (WorkItemTracking) element. You specify the name of a link type to define by using the **LinkType** (Definition) element.  
  
|Element|Description and syntax|  
|-------------|------------|
|**LINKTYPE**|Required child element of **LINKTYPES**.Specifies the path and name of a file that contains a link type definition to upload.<br />`<LINKTYPE fileName="LinkTypeFilePathName" />`<br /> |  
|**LINKTYPES**|Optional child element of the WorkItemTracking plug-in. Contains a collection of **LINKTYPE** elements that each specify a definition file to upload.<br/><code>&lt;LINKTYPES&gt; <br/>      &lt;LINKTYPE /&gt;   . . . <br/>&lt;/LINKTYPES&gt; </code> |  
  


## Related articles
-  [Manage link types](../witadmin/manage-link-types.md)   
-  [Define a custom link type](../xml/define-custom-link-type.md)   
-  [Define objects for tracking work items](define-objects-track-work-items-plug-in.md)