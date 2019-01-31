---
title: Add a work item instance to a process template
titleSuffix: TFS
description: Define work items that act as reminders for each project manager to perform after a project is created in Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 7cc17cb2-d854-469b-b45f-060e94baca71
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
monikerRange: '>= tfs-2013 <= azure-devops-2019' 
ms.date: 04/13/2017
---


# Add a work item instance to a process template

[!INCLUDE [temp](../../_shared/version-tfs-2013-2017.md)]

::: moniker range=">= tfs-2018"
> [!NOTE]  
> This feature has been deprecated for TFS 2018 and later
>  versions. Defining work item instances is optional. The default process templates don't 
>  contain any work item instances. For TFS 2018 and later versions, any work item 
>  instances you define will be ignored. 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"

By adding work items to your process template, you define a set of tasks or other items that act as reminders for each project manager to perform after the project is created. For example, you can create one task each to assign permissions to team members, define product areas and milestones, set up build definitions, and determine the branch strategy for version control.  
  
<a name="defining"></a> 
##Define a work item instance   
To define a work item instance, you specify the work item type along with field values for those work items. You use the **WI** and **FIELD** elements that are contained within the **WORKITEMS** element. You specify the set of work item instances within a **taskXml** element in the WorkItemTracking plug-in file.  
  
The type attribute for the **WI** element specifies which work item type is being created, such as task, user story, or issue. You must assign values to each required field based on the type of work item.  
  
The following example specifies a work item task that reminds project administrators to assign team members to one or more security groups. Values are assigned to all required fields. Because work item instances depend on the type definitions for work items, you must specify the task for creating work item instances after the task for creating work item types.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<task id="WIT_Instances" name="Work Item tasks definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage="Work item instances created">   
   <dependencies>  
      <dependency taskId="WITs" />  
   </dependencies>  
   <taskXml>  
       <WORKITEMS>  
       <WI type="Task">  
          <FIELD refname="System.Title" value="Setup: Set Permissions" />  
          <FIELD refname="System.IterationPath" value="$$PROJECTNAME$$\Iteration 0" />  
          <FIELD refname="System.State" value="Active" />  
          <FIELD refname="System.Reason" value="New" />  
          <FIELD refname="System.Description" value="Using the admin UI in Visual Studio adds team members to one of the three groups: Project administrators, Contributors, or Readers." />  
         </WI>  
      </WORKITEMS>  
   </taskXml>  
</task>  
```  
  
  
<a name="elements"></a> 
###WORKITEMS elements
 The following syntax shows the structure of the **WORKITEMS** element and its child elements. You specify these elements within a **taskXml** element in the WorkItemTracking plug-in file.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<WORKITEMS>  
      <WI type="TypeA">  
      <FIELD refname="Field1" value="Value1" />  
      <FIELD refname="Field2" value="Value2" />  
      . . .  
      <FIELD refname="FieldN" value="ValueN" />  
      </WI>  
      . . .  
</WORKITEMS>  
```  
  
|Element| Description and syntax|  
|-------------|-----------------|  
|**FIELD**|Required child element of **WI**. Specifies the reference name of a field and the value to assign to that field.<br />`<FIELD refname="FieldReferenceName" value="Value" />`|  
|**HYPERLINK**|Optional child element of **WI**. Defines a hyperlink for the work item instance. You can specify **true** or **false** for the relative path.<br />`<HYPERLINK URL="URL" relativePath="false" />`|  
|**WI**|Required child element of **WORKITEMS**. Defines the type of work item to create and the values to assign to specific fields.<br/><code>&lt;WI type="WorkItemType"&gt; <br/>      &lt;FIELD /&gt;   . . . &lt;/FIELD&gt;<br/>      &lt;HYPERLINK /&gt;  . . . &lt;/HYPERLINK&gt;<br/>&lt;/WI&gt; </code> | 
|**WORKITEMS**|Optional child element of the **taskXml** element for the WorkItemTracking plug-in.Contains a collection of **WI** elements that each define a work item instance.<br/><code>&lt;WORKITEMS"&gt; <br/>      &lt;WI&gt;  . . . &lt;/WI&gt;<br/>&lt;/WORKITEMS&gt; </code> |
  

## Related articles 
-  [Customize a process](customize-process.md)   
-  [Define objects for tracking work items](define-objects-track-work-items-plug-in.md)


::: moniker-end