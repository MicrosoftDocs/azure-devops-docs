---
title: Process template and plug-in files | Team Services & TFS
description: Describes each process template and plug-in file and what is supported when you create a team project via Visual Studio or the web portal  
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-wit 
ms.topic: reference
ms.assetid: 5a0b9512-d663-4a5e-99d5-f5454fb986f7
ms.manager: douge
ms.author: kaelli
ms.date: 04/13/2017
---


# Process template and plug-in files


[!INCLUDE [temp](../../_shared/dev15-version-header-process-template.md)]


You customize the initial configuration of team projects by customizing one or more process template files. You can customize several types of template files, which include the root XML file, plug-in files, and XML definition files. By customizing these files, you can define the initial configuration of all team projects that are created from the process template.  
  
For information about the default process templates, see [Choose a process](../../guidance/choose-process.md). To learn about customizing a process template, see [Customize a process template](customize-process.md).  
   

<a name="client-support"></a> 
## Client support for team project creation

When you choose to create a team project, the Project Creation Wizard (PCW) reads the root process template file and its specified plug-in files defined within the process or process template you select. These files define the tasks and the screens that appear when the PCW is run. (No screens appear when you create a team project from the web portal.)   

For example, if a process template includes the plug-in for Windows SharePoint Services, then a screen appears that requests information about the project portal. 

Depending on whether you work from the cloud or an on-premises server, you can create a team project from one of the following clients.

| Client | Team Services | On-premises TFS | 
|--------|---------------|-----------------| 
|Visual Studio| ![not supported](../../_img/icons/delete_icon.png) | ![supported](../../_img/icons/checkmark.png)|
|Team Explorer| ![not supported](../../_img/icons/delete_icon.png) | ![supported](../../_img/icons/checkmark.png) |
|Web portal | ![supported](../../_img/icons/checkmark.png)| ![supported](../../_img/icons/checkmark.png) |

(![supported](../../_img/icons/checkmark.png)- Supported; ![not supported](../../_img/icons/delete_icon.png) - Not supported)  

>[!NOTE]  
>For Team Services, even if you initiate creating a team project from Visual Studio or Team Explorer, you'll be taken to the web portal to complete the operation.  

When you create a team project from the web portal, there are several plug-ins that aren't supported. They are simply ignored by the PCW. For details, review [Plug-in file descriptions and PCW support](#PlugInFiles).   

  
<a name="Root"></a> 
##  The root process template file  
 You customize the root XML file, ProcessTemplate.xml, to define the sequence of plug-in files to be processed and the dependencies of each plug-in. The ProcessTemplate.xml file contains all task groups that must run to successfully create a team project. Each task group references a subordinate XML plug-in file (often in a subfolder) where the specific tasks are defined. For more information, see [Define the root tasks](define-root-tasks-process-template-plug-in.md).  
   
 
<a name="PlugInFiles"></a> 
## Plug-in files 

Each plug-in file configures a specific functional area by defining one or more tasks. Tasks specify to upload a file, set permissions for a group, or configure some other functional area.  

For example, the Work Item Tracking plug-in configures the work item types, queries, categories, and process configuration for a new team project. 

## Plug-in file descriptions and PCW support  

Each default process template includes the plug-in files described in the following table. The order in which the plug-ins are called is determined by the root process template file. Except for the Classification plug-in, plug-ins can also be deleted from the process template.  

All plug-ins are supported (![supported](../../_img/icons/checkmark.png)) when you create your team project from a supported client. However, when you create the team project from the cloud or the web portal for an on-premises TFS, several plug-ins are ignored or not supported (![not supported](../../_img/icons/delete_icon.png)) as indicated in the following table. 

<table>

<tr valign="bottom">
<th width="20%">Plug-in folder and file</th>
<th width="10%">Client</th>
<th width="10%">Web portal</th>
<th width="60%">Description</th>
</tr>

<tbody valign="top">

 
<tr>
<td>Build<br/>
&nbsp;&nbsp;&nbsp;[Build.xml](define-initial-configuration-build.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>Defines the initial security permissions used by Team Foundation Build and  uploads build template files. (Need to check with NC about whether these files are of use with Team Services or latest non-XAML build defintions). </td>
</tr>


<tr>
<td>Classifications <br/>
&nbsp;&nbsp;&nbsp;[Classification.xml](define-classification-plug-in.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>Configures the initial area and iteration or sprint paths. Also uploads the [Microsoft Project Mapping (FileMapping.xml) file](../map-microsoft-project-fields-to-tf-fields.md) that defines how work tracking fields map to Office Project fields.</td>
</tr>

 
<tr>
<td>Groups and Permissions<br/>
&nbsp;&nbsp;&nbsp;[GroupsandPermissions.xml](define-groups-teams-permissions-plug-in.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>Defines the initial security groups, teams, team members, and their permissions.</td>
</tr>


<tr>
<td>Lab Management<br/>
&nbsp;&nbsp;&nbsp;[Lab.xml](define-initial-configuration-lab-management.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![not supported](../../_img/icons/delete_icon.png)</td>
<td>Defines the initial security permissions that are assigned to identities for Visual Studio Lab Management. <!---[Learn more about Lab Management](../test/lab-management/using-a-lab-environment-for-your-application-lifecycle.md).-->

<blockquote>
![](../../_img/icons/note-icon.png)<br/>
Going forward, native build and release management tools replace the previous lab management tools. To learn more, see [Use Build and Release Management instead of Lab Management for automated testing](/team-services/test/lab-management/use-build-or-rm-instead-of-lab-management).
</blockquote>

</td>
</tr>
 


<tr>
<td>Reports<br/>
&nbsp;&nbsp;&nbsp;[ReportsTasks.xml](add-reports-to-the-process-template.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![not supported](../../_img/icons/delete_icon.png)</td>
<td>Creates the Report Manager site for the team project and uploads the Reporting Services reports. Only supported for on-premises TFS.

<p>
To add reports after creating a team project, see [Add reports to a team project](../../../report/admin/add-reports-to-a-team-project.md).</p>
</td>
</tr>


<tr>
<td>
<a name="XMLFiles"></a> 
Test Management<br/>
&nbsp;&nbsp;&nbsp;[TestManagement.xml](define-initial-configuration-test-manager.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>Defines the initial test variables, configurations, settings, and resolution states of a team project. This plug-in also uploads the information contained in the following files: 
<ul>
<li>**localrun.testsettings**: Defines the default test settings for a local test run.</li>
<li>**testconfiguration**: Configures the default test configurations (hardware and software) that are defined for a team project. After the project is created, you can delete these configurations and create other configurations.</li>
<li>**testresolutionstate**: Defines the test resolution states that are used by Test Runner, Microsoft Test Manager, and the web portal Test hub. You can't change these states after the team project is created. To change the resolution states after you've created a team project for an on-premises TFS, see [Customize and manage the test experience](../witadmin/tcm-customize-manage-test-experience.md).</li>
<li>**testsettings**: Specifies the initial test settings files. Only one file is specified, localrun.testsettings.</li> 
<li>**testvariable**: Defines the initial test variables. After the project is created, you can modify these variables and create other variables.</li> 
</ul>


</td>
</tr>


<tr>
<td>Version Control<br/>
&nbsp;&nbsp;&nbsp;[VersionControl.xml](define-initial-configuration-version-control.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>Defines the initial security permissions for Git or Team Foundation version control (TFVC),l and for TFVC, tcheck-in notes and whether exclusive check-out is required.

</td>
</tr>


<tr>
<td><a name="ProcGuidance"></a>
Windows SharePoint Services<br/>
&nbsp;&nbsp;&nbsp;[WssTasks.xml](define-project-portal-plug-in.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![not supported](../../_img/icons/delete_icon.png)</td>
<td>Defines the project portal based on a template for a SharePoint site. Only supported for on-premises TFS. This plug-in also uploads the information contained in the following files and folders: 
<ul>
<li>**Process Guidance**: Uploads a set of .htm files which contain a URL that opens process guidance topics when a user clicks the ![Open process guidance for work item](_img/processguidance_wi_icon.png "ProcessGuidance_WI_Icon") help icon from the client version of a work item form. These files can be customized to point to other resources for process guidance. </li> 
<li>**Samples and Templates**: Uploads one or more Excel workbooks (.xslx files) to support bug triage and track issues. </li> 
<li>**Shared Documents**: Uploads one or more sample document and template files as a starting point for creating work products.</li>  
</ul>
<p>
To add a project portal site after creating a team project, see [Configure or add a project portal](../../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md).</p>

<blockquote>
![](../../_img/icons/note-icon.png)<br/>Process template files do not include dashboards or Microsoft Excel reports. These files are added to the team project, depending on selections that are made when a team project is created. If no SharePoint site is provisioned for the team project, no dashboards or Office Excel reports are available. For more information about these artifacts, see the following topics: [Project portal dashboards](../../../report/sharepoint-dashboards/project-portal-dashboards.md), [Excel reports (Agile)](../../../report/excel/excel-reports.md), and [Excel reports (CMMI)](../../../report/excel/excel-reports-cmmi.md).  
</blockquote>


</td>
</tr>


<tr>
<td><a name="WIT"></a> 
Work Item Tracking <br/>
&nbsp;&nbsp;&nbsp;[WorkItems.xml](define-objects-track-work-items-plug-in.md)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>![supported](../../_img/icons/checkmark.png)</td>
<td>Defines the initial work item types, queries, and work item instances of a team project. Team members use work items to track work. A *work item type* defines the fields, workflow, and form used to track work. To customize any of these objects after you create a team project, see [Customize your work tracking experience](../../customize/customize-work.md). 

<p>This plug-in also uploads the information contained in the following files and folders: </p> 
<ul>
<li>**[Categories.xml](add-type-wit-category-definitions-process-template.md)**: Defines the XML definition file for the categories used to group work item types.   </li>
<li>**[LinkTypes](add-link-type-definitions-to-a-process-template.md)**:
<ul>
<li>**SharedParameterLink.xml**: Defines the link type that supports linking shared parameters to test cases.</li> 
<li>**SharedSteps**: Defines the link type that supports linking shared steps to test cases.</li>
<li>**TestedBy**: Defines the link type that supports linking test cases to work items such as product backlog items, user stories, requirements, and bugs.</li>
</ul>
<p>Additional link types may be defined based on the process template. For a description of all link types, see [Link work items to support traceability and manage dependencies](../../track/link-work-items-support-traceability.md). </p>
</li> 

<li>**Process**: Defines the [ProcessConfiguration.xml file](../process-configuration-xml-element.md) that specifies the default configuration for the Agile tool backlogs and boards.  </li>
<li>**[Queries](add-work-item-queries-process-template.md)**: Defines several work item queries (defined as .wiq files) within the Queries folder. </li>
<li>**[TypeDefinitions](add-wit-definitions-process-template.md)**: Defines the 15 or more work item type XML definition files contained within the TypeDefinition folder. The definitions differ depending on the process template selected. </li>
<li>**[Work items](add-work-item-instance-process-template.md)**: Defines one or more work items. No definitions are defined within the default process templates. 
<blockquote>
![](../../_img/icons/note-icon.png)<br/>
Support for work item instances isn't supported for Hosted XML.</blockquote></li>
</ul> 

</td>
</tr>


</tbody>
</table>

 
 
  
## Related notes

The schema definition for process templates uses a mix of camel-case and all capitalized elements. If you encounter errors when validating your type definition files, check the case structure of your elements. Also, the case structure of opening and closing tags must match according to the rules for XML syntax. See [Process template plug-ins: Index to XML element definitions](process-template-plug-ins-xml-elements-index.md).  

-  [Choose a process or process template](../../guidance/choose-process.md)   
-  [Customize a process template](customize-process.md)  
-  [Customize your work tracking experience](../../customize/customize-work.md)
-  [Test apps early and often](/team-services/test/index)