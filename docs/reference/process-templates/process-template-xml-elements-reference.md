---
title: Process template XML elements reference
titleSuffix: Azure DevOps & TFS
description: Processes the template for adding or removing plug-in files.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 68ae0569-a8b6-48c8-ba91-0c18372a2c64
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 02/24/2017
---

# Process template XML elements reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can customize the root file for a process template to add or remove plug-in files. The root file defines all the plug-ins and tasks used to create a project in Azure DevOps Services or an on-premises Team Foundation Server (TFS). The root file, named ProcessTemplate, is located in the container folder for the process template files. For more information, see [Overview of process template files](overview-process-template-files.md).  
  
 The parent element of the root plug-in file is the **ProcessTemplate** element, which must have only one **metadata** and one **groups** element defined. You must assign a unique name to each process template within a project collection, and the name cannot be longer than 124 Unicode characters.  
  
> [!NOTE]  
>  For Hosted XML process model: If you import a process template with the same name and GUID as an existing process, the existing process is updated along with all projects that reference that process.   
>   
>  For On-premises XML process model: If you upload a process template with the same name as an existing template, the existing template will be overwritten.    
  
<a name="template"></a>   
##  ProcessTemplate syntax structure  
 The root plug-in for process templates must be specified in its own file in the **ProcessTemplate** container element and conform to the schema for process templates.  
  
 The following example shows the structure of the root **ProcessTemplate** element. For a more extensive example, see [Define the root tasks](define-root-tasks-process-template-plug-in.md).  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<?xml version="1.0" encoding="utf-8"?>  
<ProcessTemplate>  
      <metadata> . . . </metadata>  
      <groups> . . .</groups>  
</ProcessTemplate>  
```  
  
##  <a name="metadata"></a> Metadata element reference  
 The following syntax shows the structure of the **metadata** element and its child elements.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<metadata>  
    <name>ProcessTemplateName</name>  
    <description>ProcessTemplateDescription </description>  
    <version type="ID" major="Number1" minor="Number2" />  
    <plugins>  
      <plugin name="Microsoft.ProjectCreationWizard.pluginID" wizardPage="true | false" />  
. . .  
    </plugins>  
</metadata>  
```  
  
|Element|Description and syntax|  
|-------------|------------|
|**description**|Required child element of **metadata**. Defines the text of the description that appears in the New Team Project Wizard for the process template. <br />`<description>ProcessTemplateDescription</description>`|  
|**metadata**|Required child element of **ProcessTemplate**. Container element for specifying required information for the plug-in to be processed by the New Team Project Wizard.<br />`<metadata>`<br />      `<name> . . . </name>`<br />      `<description> . . . </description>`<br />      `<version type="ID" major="Number1" minor="Number2/>`<br />      `<plugins> . . . </plugins>`<br />`</metadata>`|  
|**name**|Required child element of **metadata**. Defines the name of the process template, which must be unique across the project collection. The maximum length of the name is 124 characters.<br />`<name>ProcessTemplateName</name>`|  
|**plugin**|Required child element of **plugins**. Specifies the name of a plug-in file to include in the process template creation and specifies whether the plug-in should have a visible page in the New Team Project Wizard.<br />`<plugin name="Microsoft.ProjectCreationWizard.PluginName  wizardPage="true &#124; false" />`|  
|**plugins**|Required child element of **metadata**. Container element that defines the plug-ins for the process template.<br />`<plugins>`<br />      `<plugin> . . . </plugin>`<br />`</plugins>`| 
|**version**|Required child element of **metadata**.<  Specifies a unique ID and major and minor revision numbers to identify the version of the process template.<br />`<version type="ID" major="Number1" minor="Number2 " />`|
  
##  <a name="groups"></a> Groups element reference  
 The following syntax shows the structure of the **groups** element and its child elements.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<groups>  
      <group id="groupId" description="GroupDescription" completionMessage="SuccessMessage">  
      <dependencies>   
         <dependency groupId="dependentGroupId" />  
. . .  
      </dependencies>  
      <taskList filename="RelativePathAndFileName" />  
      </group>  
. . .  
</groups>  
```  
  
|Element|Description and syntax|  
|-------------|------------|  
|**dependencies**|Required child element of **group**. Specifies dependencies that the group has on other groups.<br />`<dependencies>`<br />      `<dependency>. . . </dependency>`<br />`</dependencies>`|  
|**dependency**|Optional child element of **dependencies**. Specifies the ID of another task group on which this group depends. The other group must complete its tasks before this task group can start.<br />`<dependency groupId="groupId" />`|
|**group**|Required child element of **groups**. Identifies a set of tasks for a plug-in to run during project creation. The following values are valid for each attribute:<br />- **id**: Specifies a name that identifies the task group. If another task group depends on this group, it references this ID. You must assign a unique value for the ID within the plug-in file.<br /> - **description**: Specifies the message to indicate, during project creation, that the task group is being processed.<br />- **completionMessage**: Specifies the message to indicate, during project creation, that the task group completed successfully. Maximum length is 256 characters.<br />- **failureMessage**: Specifies the message to indicate, during project creation, that the task group failed to complete successfully.<br /><br />`<group id="TaskGroupId"     description="TaskGroupDescription"     completionMessage="SuccessMessage"     failureMessage="FailureMessage">`<br />      `<dependencies> . . . <dependencies>`<br />      `<taskList> . . . </taskList>`<br />`</group>`|  
|**groups**|Required child element of **ProcessTemplate**. Container element that defines the set of task groups that will run during project creation.<br />`<groups>`<br />      `<group> . . . </group>`<br />`</groups>`|  
|**tasklist**|Specifies an XML file that contains the list of tasks to run. The list of tasks for a group must always be in a separate XML file. For more information about how to specify these files, see [Define the tasks to process a plug-in](define-tasks-to-process-a-plug-in.md).<br />`<taskList filename="filePath" />`| 
  
## Related articles
-  [Overview of process template files](overview-process-template-files.md)   
-  [Define the tasks to process a plug-in](define-tasks-to-process-a-plug-in.md)   
-  [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md)   
-  [Customize a process](customize-process.md)   
-  [Define the root tasks](define-root-tasks-process-template-plug-in.md)