---
title: Define the root process template tasks
titleSuffix: Azure DevOps & TFS
description: Add, remove, define, or change the sequence in which process template plug-in files are processed 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: ac935b0b-09b3-4aed-9f3a-08190feb92e2
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 09/08/2017
---

# Define the root tasks using the process template plug-in file File

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

<a name="top"></a> By customizing ProcessTemplate.xml, you can add, remove, or change the sequence in which process template plug-in files are processed. The ProcessTemplate.xml is the root file that defines the entire process template and all subordinate XML files. This file contains all of the task groups that must run to successfully create a project. Each task group references a subordinate XML file (often in a subfolder) where the specific tasks are defined. In general, you specify one task group for each plug-in.  
  
To learn more about the default process templates, see [Choose a process](../../boards/work-items/guidance/choose-process.md). To learn about process template plug-in files, see [Overview of process template files](overview-process-template-files.md)  

  
<a name="structure"></a> 
##Structure of the ProcessTemplate.xml file  
 In each ProcessTemplate.xml file, you define metadata and task groups. The metadata describes the template and specifies the plug-ins to be processed, as the following example shows  
  
> [!div class="tabbedCodeSnippets"]
```XML
<metadata>  
    <name>MSF for Agile Software Development 2013</name>  
    <description>This template is flexible and will work great for most teams using Agile planning methods, including those practicing Scrum.</description>  
    <plugins>  
      <plugin name="Microsoft.ProjectCreationWizard.Classification" wizardPage="false" />  
      <plugin name="Microsoft.ProjectCreationWizard.Reporting" wizardPage="false" />  
      <plugin name="Microsoft.ProjectCreationWizard.Portal" wizardPage="true" />  
. . .  
    </plugins>  
</metadata>  
```  
  
 The task groups specify the dependencies and tasks to be performed for each plug-in, as the following example shows:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<groups>  
    <group id="Classification" description="Structure definition for the project." completionMessage="Project Structure uploaded.">  
      <dependencies></dependencies>  
      <taskList filename="Classification\Classification.xml" />  
    </group>  
    <group id="Groups" description="Create groups and assign permissions." completionMessage="Groups created and permissions assigned.">  
      <dependencies>  
        <dependency groupId="Classification" />  
      </dependencies>  
      <taskList filename="Groups and Permissions\GroupsandPermissions.xml" />  
    </group>  
. . .  
</groups>  
``` 

<a name="defining"></a> 
## Define the plug-ins and task groups  
 You customize the ProcessTemplate.xml file by using the **ProcessTemplate** element and its child elements. For more information about the syntax of each element, see [Process template XML elements reference](process-template-xml-elements-reference.md).  
  
 You define the plug-ins and root tasks to be processed by specifying the following information in the indicated sequence:  
  
1.  **name**. You use this element to assign a label to the process template. In the New Team Project Wizard, you specify the process template based on its name, as the following example shows:  
  
    > [!div class="tabbedCodeSnippets"]
	```XML 
    <name>Simplified Process</name>  
    ```  
  
     This element is required. The name appears not only in the process template list in the New Team Project Wizard but also in the Process Template Manager dialog box. The name of each process template must be unique within a project collection, and each template name must contain no more than 254 Unicode characters. If you upload a template that is the same name as an existing template, the existing template will be overwritten.  
  
2.  **description**. You use this element to define the text that describes the process template in the New Team Project Wizard, as the following example shows:  
  
    > [!div class="tabbedCodeSnippets"]
	```XML  
    <description>Choose the simple process for projects that require little or no overhead and have very low cost.</description>  
    ```  
  
     This text appears on the **Select a Process Template** screen in the New Team Project Wizard when a project lead or administrator is deciding which process template to use. In general, try to describe what kinds of projects for which the process template is useful in terms of team size, length, cost, and other factors.  
  
3.  **Plug-ins**. You use the **plugins** and **plugin** elements to define the set of plug-ins that the process template uses. You must make sure that if any subordinate XML file references a plug-in, that plug-in appears in this list. You must also specify the wizardPage attribute (a true or false value) to indicate whether the plug-in requires a page on the New Team Project Wizard. You must specify the set of a plug-ins that will be processed when you create a project and whether the plug-in should have a visible page in the New Team Project Wizard. 
 
	> [!IMPORTANT]  
	> When you create a project from the web portal, several process template files are ignored. Specifically, the files that would create a Report Manager site and a SharePoint project portal aren't supported. 
	>
	>If you want these features to be available on your on-premises TFS, then create your project from Visual Studio or Team Explorer. For details, see [Process template and plug-in files, Client support for project creation](overview-process-template-files.md#client-support).   
  
     The following XML shows the correct values to use for each of the nine plug-ins that Visual Studio Application Lifecycle Management (ALM) includes.  
  
    > [!div class="tabbedCodeSnippets"]
	```XML
    <plugins>
	   <plugin name="Microsoft.ProjectCreationWizard.Classification"   wizardPage="false"/>
	   <plugin name="Microsoft.ProjectCreationWizard.Reporting"   wizardPage="false"/>
	   <plugin name="Microsoft.ProjectCreationWizard.Portal"   wizardPage="true"/>
	   <plugin name="Microsoft.ProjectCreationWizard.Groups"   wizardPage="false"/>
	   <plugin name="Microsoft.ProjectCreationWizard.WorkItemTracking" wizardPage="false"/>
	   <plugin name="Microsoft.ProjectCreationWizard.VersionControl" wizardPage="true"/>
	   <plugin name="Microsoft.ProjectCreationWizard.TestManagement" wizardPage="false" />
	   <plugin name="Microsoft.ProjectCreationWizard.Build" wizardPage="false" />
	   <plugin name="Microsoft.ProjectCreationWizard.Lab" wizardPage="false" />
	</plugins>  
    ```  
  
4.  **Task Groups**. You use the **groups** and **group** elements to define task groups. Each task group defines information that is necessary to process each plug-in. Each task group specifies the file that contains the set of tasks to process and optional dependencies that the group has on other task groups. The most common and easiest strategy is to create one **taskList** element per group per plug-in.  
  
     The following example shows how a task group creates the default groups and permissions. The specific tasks are defined in the referenced file (GroupsandPermissions.xml). This task group has a dependency that the tasks in the Classification group successfully complete.  
  
    > [!div class="tabbedCodeSnippets"]
	```XML 
    <group id="Groups" description="Create groups and assign permissions." completionMessage="Groups created and permissions assigned.">
	      <dependencies>
	      <dependency groupId="Classification" />
	      </dependencies>
	      <taskList filename="Groups and Permissions\GroupsandPermissions.xml" />
	</group>  
    ```  

     For each task group, you define the following information:  
  
    1.  **ID**. A unique identification that is assigned to the plug-in.  
  
    2.  **Description**. The text that describes the plug-in tasks in the New Team Project Wizard.  
  
    3.  **Completion message**. The message to appear in the New Team Project Wizard when all tasks for the plug-in successfully complete.  
  
    4.  (Optional) **Failure message**. The message to appear in the New Team Project Wizard when one or more tasks for the plug-in fails to complete.  
  
    5.  (Optional) **Plug-in dependencies**. You use the **dependencies** and **dependency** elements to define the set of dependencies for a plug-in to be processed. A dependency corresponds to a plug-in that must successfully complete before the current plug-in tasks can be processed.  
  
    6.  **Task file**. You use the **tasklist** element to specify the file that contains the set of tasks to process the plug-in.   
  
<a name="example"></a> 
## Example ProcessTemplate file  
 The following syntax lists the contents of the Scrum ProcessTemplate.xml file.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8"?>  
<ProcessTemplate>  
  <metadata>  
    <name>Microsoft Visual Studio Scrum 2013</name>  
    <description>This template is for teams who follow the Scrum methodology and use Scrum terminology.</description>  
<version type="6B724908-EF14-45CF-84F8-768B5384DA45" major="3" minor="6" />  
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
  </metadata>  
  <groups>  
    <group id="Classification" description="Structure definition for the project." completionMessage="Project structure uploaded.">  
      <dependencies>  
</dependencies>  
      <taskList filename="Classification\Classification.xml" />  
    </group>  
    <group id="Groups" description="Create groups and assign permissions." completionMessage="Groups created and permissions assigned.">  
      <dependencies>  
        <dependency groupId="Classification" />  
      </dependencies>  
      <taskList filename="Groups and Permissions\GroupsAndPermissions.xml" />  
    </group>  
    <group id="WorkItemTracking" description="Work item definitions uploading." completionMessage="Work item tracking tasks completed.">  
      <dependencies>  
        <dependency groupId="Classification" />  
        <dependency groupId="Groups" />  
      </dependencies>  
      <taskList filename="WorkItem Tracking\WorkItems.xml" />  
    </group>  
    <group id="VersionControl" description="Creating version control." completionMessage="Version control task completed.">  
      <dependencies>  
        <dependency groupId="Classification" />  
        <dependency groupId="Groups" />  
        <dependency groupId="WorkItemTracking" />  
      </dependencies>  
      <taskList filename="Version Control\VersionControl.xml" />  
    </group>  
    <group id="Build" description="Build default processes uploading." completionMessage="Build default processes uploaded.">  
      <dependencies>  
        <dependency groupId="VersionControl" />  
        <dependency groupId="Groups" />  
      </dependencies>  
      <taskList filename="Build\Build.xml" />  
    </group>  
    <group id="Lab" description="Creating Lab." completionMessage="Lab task completed.">  
      <dependencies>  
        <dependency groupId="Classification" />  
        <dependency groupId="Groups" />  
        <dependency groupId="WorkItemTracking" />  
        <dependency groupId="Build" />  
      </dependencies>  
      <taskList filename="Lab\Lab.xml" />  
    </group>  
    <group id="TestManagement" description="Test Management default configurations uploading." completionMessage="Test Management default configurations uploaded.">  
      <dependencies>  
        <dependency groupId="Classification" />  
        <dependency groupId="Groups" />  
        <dependency groupId="WorkItemTracking" />  
      </dependencies>  
      <taskList filename="Test Management\TestManagement.xml" />  
    </group>  
    <group id="Reporting" description="Project reports uploading." completionMessage="Project reporting tasks completed.">  
      <dependencies>  
        <dependency groupId="Classification" />  
        <dependency groupId="WorkItemTracking" />  
        <dependency groupId="VersionControl" />  
      </dependencies>  
      <taskList filename="Reports\ReportsTasks.xml" />  
    </group>  
    <group id="Portal" description="Creating project portal site" completionMessage="Project portal tasks completed.">  
      <dependencies>  
        <dependency groupId="Classification" />  
        <dependency groupId="Reporting" />  
      </dependencies>  
      <taskList filename="Windows SharePoint Services\WssTasks.xml" />  
    </group>  
  </groups>  
</ProcessTemplate>    
```  
  
## Related articles  
 [Process template XML elements reference](process-template-xml-elements-reference.md)   
 [Overview of process template files](overview-process-template-files.md)   
 [Customize a process](customize-process.md)