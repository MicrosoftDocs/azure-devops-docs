---
title: Define the tasks to process a plug-in | Team Services & TFS
description: Use the tasks element and its child elements to define the artifacts to be uploaded or specific elements to be created for a plug-in - Team Foundation Server (TFS)
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit
ms.topic: reference
ms.assetid: af1b9f73-b930-49b6-b6f2-68d691b152aa
ms.manager: douge
ms.author: kaelli
ms.date: 02/24/2017
---

# Define the tasks to process a plug-in

[!INCLUDE [temp](../../_shared/dev15-version-header-process-template.md)]

<a name="top"></a> You use the **tasks** element and its child elements to define the artifacts to be uploaded or specific elements to be created for a plug-in. A task specifies work that must occur to configure something specific to the process in a new team project. A number of the tasks that you define upload the work item types, work item queries, documents, and reports for a team project. Other tasks that you can define configure other areas of Visual Studio Application Lifecycle Management, such as Team Foundation Build, Visual Studio Lab Management, Test Manager, and Team Foundation version control.    
  
##  <a name="syntax"></a> Tasks Syntax Structure  
 You can specify several tasks within a plug-in, and these tasks may have dependencies on one another. The tasks that you define for each plug-in must conform to the schema definition for **tasks**, defined in the Tasks.xsd file, and be specified in its own file using the **tasks** container element.  
  
 The following syntax shows the high-level structure of the **tasks** element and its child elements.  
  
```  
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
  
##  <a name="elements"></a> Tasks Element Reference  
 The following table describes each element that can define the tasks for a plug-in.  
  
|Element|Syntax|Description|  
|-------------|------------|-----------------|  
|**dependencies**|`<dependencies> <dependency>. . . </dependency> </dependencies>`|Optional child element of **task**.<br /><br /> Specifies other groups on which a group depends.|  
|**dependency**|`<dependency taskId="taskId" />`|Optional child element of **dependencies**.<br /><br /> Specifies the ID of another task on which this task depends. The other task must complete before this task can start.|  
|**ProcessTemplate**|`<ProcessTemplate Type="FileType" Filename="LocalPathAndFileName"     Description="FileDescription"     ServerPath="UploadLocation" />`<br /><br /> Where each attribute is defined as follows:<br /><br /> -                      **Type**: The type of file that is being uploaded. The following values are valid: `Default` and `Upgrade` for build template files and `Custom` for lab template files.<br /><br /> -                      **Filename**: The local directory path and name of the file to upload.<br /><br /> -                      **Description**: A short text string that describes the file to upload.<br /><br /> -                      **ServerPath**: The path of the server that is running Team Foundation Server where the file should be uploaded. The only valid upload location is `$/$$PROJECTNAME$$/BuildProcessTemplates`.|Optional child element of **taskXml** element for the Build and Lab plug-ins.<br /><br /> Specifies the name, location, and destination of a file to upload to support build processes for a team project.|  
|**task**|`<task id="task id" name="name of task"     plugin="Microsoft.ProjectCreationWizard.<PluginName>"     completionMessage="SuccessfulCompletionMessage"     completionDescription="InProcessMessage">     <dependencies>. . . </dependencies>     <taskXml>. . . </taskXml> </task>`|Required child element of **tasks**.<br /><br /> Specifies work that must occur to configure something specific to the process in a new team project.<br /><br /> - **id**: Specifies a name that identifies the task. If another task depends on this task, it references this ID. You must assign a unique value for the ID within the plug-in file.<br /><br /> - **name**: Describes what the task does.<br /><br /> - **plugin**: Identifies which plug-in must run this task.<br /><br /> -                      **completionMessage**: Specifies the message to display during team project creation to indicate that the task completed successfully. Maximum length is 256 characters.<br /><br /> -                      **completionDescription**: Specifies the message to display during team project creation to indicate that the task is being processed. Minimum length is 1 character.|  
|**tasks**|`<tasks>     <task>. . . </task> </tasks>`|Required child element of **taskXml**.<br /><br /> Contains a collection of **task** elements that each specify work that must occur to configure something specific to the process in a new team project.|  
|**taskXml**|`<taskXml> . . . </taskXml>`|Required root element for a plug-in file.<br /><br /> Describes the work that is required to complete this task. The XML inside this element block varies and is specific to each plug-in.<br /><br /> **Note:** The XML processor does not try to validate the content within the element.|  
  
##  <a name="index"></a> Index to taskXML Elements by Function  
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
 
  
##  <a name="example"></a> Example: Defining Types of Work Items  
 The following example shows a task that creates six types of work items by referencing the definition files for each type.  
  
```  
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
  
## Related notes  
 [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md)   
 [Overview of process template files](overview-process-template-files.md)