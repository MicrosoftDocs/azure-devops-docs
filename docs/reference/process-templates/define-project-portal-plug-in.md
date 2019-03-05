---
title: Define the project portal plug-in for a process template 
titleSuffix: TFS
description: Define the initial document libraries, library structure, and documents of a project's SharePoint portal for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 3351a292-1ce5-4573-ac88-b86ad7482ac0
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013 <= azure-devops-2019' 
ms.date: 10/11/2017
---


# Define the project portal plug-in for a process template

<b>TFS 2017 | TFS 2015 | TFS 2013</b> 

::: moniker range=">= tfs-2018"
> [!IMPORTANT]   
> TFS 2018 and later versions no longer support native integration with SharePoint products. If you're planning to upgrade to TFS 2018, read [About SharePoint integration](../../report/sharepoint-dashboards/about-sharepoint-integration.md) to learn about the options available to you.
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"

When you create a project from Visual Studio Team Explorer, the project portal plug-in creates a SharePoint site and uploads several files contained within the process template. These files will appear under the specifies the folder structure and set of reports that will appear under the **Documents** node in Team Explorer. 

By using the portal plug-in, you can define the initial document libraries, library structure, and documents of a [project's portal](../../report/sharepoint-dashboards/share-information-using-the-project-portal.md). You can also include the tasks that create dashboards and Excel reports that are designed to work with the default [process templates](../../boards/work-items/guidance/choose-process.md).  

The tasks that you specify in the plug-in for SharePoint Products are run only when you create a SharePoint site when you [create a project](../../organizations/projects/create-project.md). For more information about site requirements and administration, see [SharePoint Products requirements for Team Foundation Server](/azure/devops/server/requirements#sharepoint). 


> [!IMPORTANT]  
> When you create a project from the web portal, the WssTasks.xml 
> plug-in file is ignored. To add SharePoint integration after you create your project, 
> see [Configure or add a project portal](../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md).  
> Clients that support project creation vary depending on the TFS version. 
> For details, see [Process template and plug-in files, Client support for project creation](overview-process-template-files.md#client-support).    


  
<a name="name"></a> 
## Portal plug-in name and location  

The names of the file, the folder, and the plug-in for the default process templates are as follows:  
    
**File name**: WssTasks.xml   
**Folder name**: Windows SharePoint Services  
**Plug-in name**: Microsoft.ProjectCreationWizard.Portal  

  
> [!NOTE]  
> You can change the names of the XML file and the folder but not the plug-in. The system doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy this kind of functionality, you must use your own distribution and installation program.  
  
<a name="Tasks"></a> 
## Portal creation tasks and dependencies  
 In the portal plug-in file, specify one or more tasks and their dependencies. You specify the following key tasks:  
  
-   Create the site by using a specified site template   
-   Create document libraries    
-   Create folders, and upload files to the document libraries    
-   Activate dashboard features  
  
For an example of a task that specifies a simple project portal, see the WssTasks.xml file in one of the default process templates. You can [download the latest process templates](../../boards/work-items/guidance/manage-process-templates.md).  
  
<a name="SiteTemplate"></a> 
##  Create the site and specify the site template  
 You must specify a site template on which the project portal is based. The site template also must be available on the Team Foundation Server SharePoint portal. Site templates are not included in the process template.  
  
 Specify the site template using the site element.  
  
```xml
<site template="" language=""/>  
```  
  
 The following table describes the attributes for the **site** element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|template|Specifies which template to use. You must specify a template that is defined on the server that hosts SharePoint Products for the projects that will be created.<br />To use the features that are available with the current version of the process templates, specify the following string: `Team Foundation Server Project Portal`.<br />|  
|language|Specifies a locale ID to indicate which language version of the site template to use. The English version is 1033.|  
  
The following example shows how to reference the English version of the Agile process template, which supports dashboards.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<tasks>  
  <task id="SharePointPortal" name="Create Sharepoint Portal" plugin="Microsoft.ProjectCreationWizard.Portal" completionMessage="Project portal site created.">  
    <dependencies />  
    <taskXml>  
        <Portal>  
           <site template="Team Foundation Server Project Portal" language="1033" />    
       . . .   
        </Portal>  
```  
  
> [!NOTE]   
>  All other tasks defined within the portal plug-in depend on the site creation task because the project portal must be created before you can create additional document libraries or copy files.  
  
### Process template performance  
 The files that you specify in WssTasks.xml are included as part of the process template when it is uploaded. The size of the process template affects how long it takes to create a new project. Larger process templates take longer to create new projects. Therefore you should consider alternate strategies to provide files when process template performance degrades.  
  
### Use the site template  
 You can include files as part of the SharePoint site template. This moves files out of the process template and into the site template and improves performance when creating new projects.  
  
 However, there is a benefit to listing files in WssTasks.xml. You can bind Microsoft Project and Microsoft Excel files to a query using the queryId attribute described previously. This assists team members when they open the files because they will already be connected to the correct Team Foundation Server and query.  
  
### Use an alternate website  
 If you have a large collection of files that are shared amongst multiple projects, you can use an alternate Web site to host the files and link to the files from the project portal or Web pages. This strategy also increases performance when creating projects since the files do not need to be copied to the project portal. For more information, see [Configure or add a project portal](../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md).  
  
<a name="DocLibraries"></a> 
##  Create document libraries  
 After the project portal is created, you can specify that additional document libraries be created. Use the **documentLibrary** element to specify a document library.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<documentLibraries>  
   <documentLibrary name="" description="" isProcessGuidance="true | false" />  
</documentLibraries>    
```  
  
> [!NOTE]  
>  Versioning for a document library cannot be enabled or disabled in the process template. You can enable or disable versioning via the Windows SharePoint Services site template, or after project creation.  
  
 The following table describes the attributes for the documentLibrary element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|name|Specifies the name of the document library that appears on the project portal.|  
|description|Provides a description of the document library that appears on the project portal.|  
|isProcessGuidance|Specifies whether the document library is used to support process guidance content.|  
  
 The following example shows how to create a document library named Development that the development team can use to store documents.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<documentLibraries>  
. . .  
   <documentLibrary name="Process Guidance" description="How to make best use of the Team Foundation Server tools and process" isProcessGuidance="true" />  
. . .  
</documentLibraries>  
```  
  
<a name="Folders"></a> 
##  Create the folder structure of a document library  
 After the project portal is created, you can specify additional folders to create. You can also specify files to copy such as template files.  
  
 Use the **folder** element to create a new folder.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<folders>  
   <folder documentLibrary="" name=""/>  
</folders>  
```  
  
 The following table describes the attributes for the folder element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|documentLibrary|Identifies which document library to create the folder in.|  
|name|Specifies the name of the folder.|  
  
 The following example shows how to create a folder named Trip Reports in the Development document library where developers can store trip reports from conferences or customer visits.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<folders>  
   <folder documentLibrary="Development"  
           name="Trip Reports"/>  
</folders>  
```  
  
<a name="Files"></a> 
##  Specify files to upload to document libraries  
 You must also copy files into document libraries and folders. The source files are located under the Windows SharePoint Services folder. You must specify a target on the project portal.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<files>  
   <file source="" documentLibrary="" target="" queryId="" />   
</files>  
```  
  
 The following table describes the attributes for the file element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|source|A relative path to the local copy of the file. Generally, the source path name always begins with Windows SharePoint Services, which is the name of the folder where the portal plug-in is defined.|  
|documentLibrary|The name of the document library into which the file will be copied.|  
|target|A relative path to the target on the project portal where the file is copied.|  
|queryId|Specifies the name of a work item query that is bound to the file. When the file is opened for the first time, it is populated with the results of running the query. This attribute is optional, and the specified query must exist in the workitems.xml file. **Note:**  queryId only applies to .xls files.|  
  
 The following example shows how to copy a template file named Project Checklist into the Project Management folder. This example also specifies that when the file is first open, it should be populated with the results of the Project Checklist work item query.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<files>  
   <file source="Windows SharePoint Services\Templates\Project Checklist.xls"   
      documentLibrary="Project Management"   
      target="Project Checklist.xls"   
      queryId="Project Checklist" />  
</files>  
```  
  
> [!NOTE]
>  You could include folders and files as part of the site template, and you would not have to list them in the XML.  If you specify .exe files and the SharePoint site does not support .exe files, you will not be able to create a project successfully by using the process template.  
  

  
### Process guidance content and support files  
Process guidance is content that documents the processes to be followed by team members who work on a software project. Work items, reports, and queries can all change during the lifecycle of a project, and they can be different between projects. Process guidance content provides details about a project, such as information about how to complete work item fields, examples of healthy and unhealthy reports, and descriptions of the queries. Process guidance also provides details about the process to follow on a project, such as roles to assume and activities to complete.  
  
To support access to process guidance from the work item forms in Team Explorer, a set of .htm files are uploaded to the Process Guidance folder within the Documents SharePoint library. These files specify URLs to the visualstudio.com content that is opened when a team member chooses the process guidance ![Open process guidance for work item](_img/processguidance_wi_icon.png "ProcessGuidance_WI_Icon") icon within a work item form. These files are uploaded based on the `file` tasks defined within the portal plug-in. For example, the Agile process template defines the following `file` tasks:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<!-- Process Guidance -->  
          <file source="Windows SharePoint Services\Process Guidance\ProcessGuidance.html" documentLibrary="Process Guidance" target="ProcessGuidance.html" />  
          <file source="Windows SharePoint Services\Process Guidance\ProcessGuidance.html" documentLibrary="Process Guidance" target="ProcessGuidance.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\AboutWorkItems.htm" documentLibrary="Process Guidance" target="Supporting Files/AboutWorkItems.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\AboutWorkItems.htm" documentLibrary="Process Guidance" target="Supporting Files/AboutWorkItems.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\Bug.htm" documentLibrary="Process Guidance" target="Supporting Files/Bug.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\Bug.htm" documentLibrary="Process Guidance" target="Supporting Files/Bug.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\Issue.htm" documentLibrary="Process Guidance" target="Supporting Files/Issue.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\Issue.htm" documentLibrary="Process Guidance" target="Supporting Files/Issue.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\ProcessGuidance.html" documentLibrary="Process Guidance" target="Supporting Files/ProcessGuidance.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\ProcessGuidance.html" documentLibrary="Process Guidance" target="Supporting Files/ProcessGuidance.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\SharedSteps.htm" documentLibrary="Process Guidance" target="Supporting Files/Shared Steps.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\SharedSteps.htm" documentLibrary="Process Guidance" target="Supporting Files/Shared Steps.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\Task.htm" documentLibrary="Process Guidance" target="Supporting Files/Task.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\Task.htm" documentLibrary="Process Guidance" target="Supporting Files/Task.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\TestCase.htm" documentLibrary="Process Guidance" target="Supporting Files/Test Case.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\TestCase.htm" documentLibrary="Process Guidance" target="Supporting Files/Test Case.aspx" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\UserStory.htm" documentLibrary="Process Guidance" target="Supporting Files/User Story.htm" />  
          <file source="Windows SharePoint Services\Process Guidance\Supporting Files\UserStory.htm" documentLibrary="Process Guidance" target="Supporting Files/User Story.aspx" />  
```  
  
You can customize these files to point to other resources for process guidance. You can also add files to support access to other process guidance that you have created for your team. For more information, see [Configure or add a project portal](../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md).  
  
<a name="Activate"></a> 
##  Activating dashboard features  
Dashboards show project data, support investigation, and help teams quickly perform common tasks. Dashboards display several Excel reports and Team Web Access Web parts.  
  
You use the **activateFeatures** element to cause the creation of the dashboards and Excel reports. You must include the following code in the portal plug-in file, within the **Portal** element, to activate the creation of the dashboards and Excel reports for a project.  
  
**To activate dashboard features that are designed for use with the process template for Scrum**:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Portal>  
    . . .   
<activateFeatures>  
         <!-- TfsDashboardScrumWss -->  
          <feature featureId="71EC0D67-21AB-4560-A825-9D976DA09D04" />  
          <!-- TfsDashboardAgileQuickLaunch -->  
          <feature featureId="1D363A6D-D9BA-4498-AD1A-9874ACA5F827" />  
        </activateFeatures>  
    . . .   
</Portal>  
```  
  
**To activate dashboard features that are designed for use with the process template for Agile**:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<Portal>  
. . .   
    <activateFeatures>  
      <!-- TfsDashboardAgileMoss -->  
      <feature featureId="0D953EE4-B77D-485b-A43C-F5FBB9367207" />  
      <!-- TfsDashboardAgileQuickLaunch -->  
      <feature featureId="1D363A6D-D9BA-4498-AD1A-9874ACA5F827" />  
    </activateFeatures>  
. . .   
</Portal>  
```  
  
**To activate dashboard features that are designed for use with the process template for CMMI**:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Portal>  
    . . .   
<activateFeatures>  
          <!-- TfsDashboardCmmiMoss -->  
          <feature featureId="3D0BA288-BF8E-47F0-9680-7556EDEF6318" />  
          <!-- TfsDashboardCmmiProcessDocLibraries -->  
          <feature featureId="8610B95B-063F-4FB5-837C-BCF2FE9423C6" />  
        </activateFeatures>  
    . . .   
</Portal>  
```  
  
## Related articles  
- [Customize a process](customize-process.md)   
- [Process template and plug-in files](overview-process-template-files.md)
- [Scrum](../../boards/work-items/guidance/scrum-process.md)
- [Agile](../../boards/work-items/guidance/agile-process.md)
- [CMMI](../../boards/work-items/guidance/cmmi-process.md) 
- [Configure or add a project portal](../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md) 

::: moniker-end  