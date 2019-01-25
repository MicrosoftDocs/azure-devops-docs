---
title: Define the tasks to process a plug-in
titleSuffix: Azure DevOps & TFS
description: Define the artifacts to be uploaded or created for a process template plug-in for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: af1b9f73-b930-49b6-b6f2-68d691b152aa
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 09/08/2017
---

# Define the tasks to process a plug-in

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

<a name="top"></a> 

You use the **tasks** element and its child elements to define the artifacts to be uploaded or specific elements to be created for a plug-in. A task specifies work that must occur to configure something specific to the process in a new project. A number of the tasks that you define upload the work item types, work item queries, documents, and reports for a project. Other tasks that you can define configure other areas of Visual Studio Application Lifecycle Management, such as Team Foundation Build, Visual Studio Lab Management, Test Manager, and Team Foundation version control.    
 
<a name="syntax"></a>  
##  Tasks Syntax Structure  
 You can specify several tasks within a plug-in, and these tasks may have dependencies on one another. The tasks that you define for each plug-in must conform to the schema definition for **tasks**, defined in the Tasks.xsd file, and be specified in its own file using the **tasks** container element.  
  
 The following syntax shows the high-level structure of the **tasks** element and its child elements.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<tasks>  
      <task>  
      <dependencies>  
         <dependency />  
        . . .          
      </dependencies />  
      <taskXml>  
        . . .          
      </taskXml>  
      <task/>  
</tasks>   
``` 

<a name="elements"></a> 
  
##  Tasks element reference  
 The following table describes each element that can define the tasks for a plug-in.  
  
  
<table>
<tr><th>Element</th><th>Description and syntax</th></tr>
<tbody valign="top">
<tr>
<td><strong>dependencies</strong></td>
<td>Optional child element of **task**. Specifies other groups on which a group depends.
<pre><code>&lt;dependencies&gt; 
  &lt;dependency&gt;. . . &lt;/dependency&gt;
&lt;/dependencies/&gt;
</code></pre>
</td>
</tr>
<tr><td><strong>dependency</strong></td>
<td>Optional child element of **dependencies**. Specifies the ID of another task on which this task depends. The other task must complete before this task can start.
<pre><code>&lt;dependency taskId="taskId" /&gt;
</code></pre>
</td>
</tr>

<tr><td><strong>ProcessTemplate</strong></td>
<td>Optional child element of **taskXml** element for the Build and Lab plug-ins. Specifies the name, location, and destination of a file to upload to support build processes for a project.
<pre><code>&lt;ProcessTemplate Type="FileType" Filename="LocalPathAndFileName" 
Description="FileDescription" ServerPath="UploadLocation" /&gt;
</code></pre>
<p>Where each attribute is defined as follows:</p>
<ul>
<li>**Type**: The type of file that is being uploaded. The following values are valid: `Default` and `Upgrade` for build template files and `Custom` for lab template files.</li>
<li>**Filename**: The local directory path and name of the file to upload.</li>
<li>**Description**: A short text string that describes the file to upload.</li>
<li>**ServerPath**: The path of the server that is running Team Foundation Server where the file should be uploaded. The only valid upload location is `$/$$PROJECTNAME$$/BuildProcessTemplates`.</li></ul>
</td>
</tr>

<tr><td><strong>task</strong></td>
<td>Required child element of **tasks**. Specifies work that must occur to configure something specific to the process in a new project.

<pre><code>&lt;task id="task id" name="name of task"     plugin="Microsoft.ProjectCreationWizard.PluginName" 
completionMessage="SuccessfulCompletionMessage"     
completionDescription="InProcessMessage"&gt;
   &lt;dependencies&gt; . . . &lt;/dependencies&gt;
   &lt;taskXml&gt; . . . &lt;/taskXml&gt;
&lt;/task/&gt;
</code></pre>
<p>Where each attribute is defined as follows:</p>
<ul>
<li>**Type**: **id**: Specifies a name that identifies the task. If another task depends on this task, it references this ID. You must assign a unique value for the ID within the plug-in file.</li>
<li>**name**: Describes what the task does.</li>
<li>**plugin**: Identifies which plug-in must run this task.</li>
<li>**completionMessage**: Specifies the message to display during project creation to indicate that the task completed successfully. Maximum length is 256 characters.</li>
<li>**completionDescription**: Specifies the message to display during project creation to indicate that the task is being processed. Minimum length is 1 character.</li>
</ul>

</td>
</tr>

<tr><td><strong>tasks</strong></td>
<td>Required child element of **taskXml**. Contains a collection of **task** elements that each specify work that must occur to configure something specific to the process in a new project.
<pre><code>&lt;tasks&gt;
     &lt;task/&gt;. . . &lt;/task&gt;
&lt;/tasks /&gt;
</code></pre>
</td>
</tr>

<tr><td><strong>taskXml</strong></td>
<td>Required root element for a plug-in file. Describes the work that is required to complete this task. The XML inside this element block varies and is specific to each plug-in.
<blockquote>**Note:** The XML processor does not try to validate the content within the element.
</blockquote>
<pre><code>&lt;taskXml&gt; . . . &lt;/taskXml&gt;
</code></pre>
</td>
</tr>
</tbody>
</table>
  

<a name="index"></a> 
##  Index to taskXML Elements by Function  
 For more information about the specifics of the XML markup elements that you can specify for each plug-in, see one of the following topics:  
  
-   Build: [Define the initial configuration of Team Foundation Build](define-initial-configuration-build.md)   
-   Classifications: [Define initial areas, iterations, and Project mapping file](define-classification-plug-in.md)   
-   Groups and Permissions: [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md)    
-   Lab: [Define the initial configuration of Lab Management](define-initial-configuration-lab-management.md)    
-   Portal: [Define the project portal](define-project-portal-plug-in.md)   
-   Reports: [Add reports](add-reports-to-the-process-template.md)    
-   Test Management: [Define the initial configuration of Test Manager](define-initial-configuration-test-manager.md)    
-   Version Control: [Define the initial configuration of Team Foundation version control](define-initial-configuration-version-control.md)    
-   Work Item Tracking: [Define objects for tracking work items](define-objects-track-work-items-plug-in.md)  
 
  
<a name="example"></a> 
##  Example: Define work item types  
 The following example shows a task that creates six types of work items by referencing the definition files for each type.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<task  
   id="WITs"  
   name="WorkItemType definitions"  
   plugin="Microsoft.ProjectCreationWizard.WorkItemTracking"  
   completionMessage="WorkItemTypes created"           
   completionDescription = "Processing work item types used by work item tracking">  
   <taskXml>  
   <WORKITEMTYPES>  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Bug.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\SharedStep.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Task.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\TestCase.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\UserStory.xml" />  
        <WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Issue.xml" />  
   </WORKITEMTYPES>  
   </taskXml>  
</task>  
``` 
  
## Related articles  
-  [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md)   
-  [Overview of process template files](overview-process-template-files.md)