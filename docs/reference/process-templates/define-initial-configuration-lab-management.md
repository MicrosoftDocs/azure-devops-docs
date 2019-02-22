---
title: Define the initial configuration of Lab Management 
titleSuffix: TFS
description: Customize the project's initial security configuration for Lab Management and Team Foundation Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: cd34554f-1ab8-450d-b997-942e7a2352cf
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 09/08/2017
---


# Define the initial configuration of Lab Management

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can customize a project's initial security configuration for activities that are performed by using Visual Studio Lab Management. The lab.xml plug-in file specifies the security permissions for lab management activities of all projects that are created with the same process template. It also specifies the task to upload the default template file for Lab Management, which is named LabDefaultTemplate.xaml. This file is uploaded to the database for the project.  
  
The names of the file, the folder, and the plug-in for the default process templates are as follows:  
    
**File name**: Lab.xml  
**Folder name**: Lab  
**Plug-in name**: Microsoft.ProjectCreationWizard.Lab  
  
> [!NOTE]  
>  You can change the name of the XML file and the folder name but not the name of the plug-in. The system doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy this kind of functionality, you must use your own distribution and installation program.  
  
 In the Lab.xml file, you specify one or more tasks and their dependencies. The plug-in file specifies one task, which uploads the lab management file, and the permissions that are assigned to specific default groups for Team Foundation. To customize the initial security configuration for Lab Management, see [Control access to functional areas](control-access-to-functional-areas.md). For more information about the **task**, **taskXml**, and **dependency** elements, see [Define the tasks to process a plug-in](define-tasks-to-process-a-plug-in.md) and [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md).  
  
 The following code represents the default lab.xml file that is defined for the default process templates:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<?xml version="1.0" encoding="utf-8"?>  
<tasks>  
  <task id="LabTask" name="Create Lab area" plugin="Microsoft.ProjectCreationWizard.Lab" completionMessage="Lab Task completed.">  
    <dependencies />  
    <taskXml>  
      <ProcessTemplate Type="Custom" Filename="Lab\Templates\LabDefaultTemplate.xaml" Description="This is the default Lab process template for this Team Project." ServerPath="$/$$PROJECTNAME$$/BuildProcessTemplates" />  
      <permission allow="Read, Create, Write, Edit, Delete, ManagePermissions, ManageChildPermissions, Start, Stop, ManageSnapshots, Pause, ManageLocation, DeleteLocation" identity="$$PROJECTCOLLECTIONADMINGROUP$$" />  
      <permission allow="Read, Create, Write, Edit, Delete, ManageChildPermissions, Start, Stop, ManageSnapshots, Pause, ManageLocation, DeleteLocation" identity="[$$PROJECTNAME$$]\$$PROJECTADMINGROUP$$" />  
      <permission allow="Read, Create, Write, Edit, Start, Stop, ManageSnapshots, Pause" identity="[$$PROJECTNAME$$]\@@Contributors@@" />  
      <permission allow="Read" identity="[$$PROJECTNAME$$]\@@Readers@@" />  
      <permission allow="Read, Write, Edit, Start, Stop, ManageSnapshots, Pause" identity="$$BUILDSERVICEGROUP$$" />  
    </taskXml>  
  </task>  
</tasks>  
```  
  
## Related articles  
-  [Configure and administer Lab Management](https://msdn.microsoft.com/library/dd936084.aspx)   
-  [Control access to functional areas](control-access-to-functional-areas.md)