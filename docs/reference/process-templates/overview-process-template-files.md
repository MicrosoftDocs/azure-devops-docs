---
title: Process template and plug-in files 
titleSuffix: Azure DevOps & TFS
description: Describes each process template and plug-in file and what is supported when you create a project via Visual Studio or the web portal  
ms.prod: devops
ms.technology: devops-agile 
ms.assetid: 5a0b9512-d663-4a5e-99d5-f5454fb986f7
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 10/19/2017
---


# Process template and plug-in files

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You customize the initial configuration of projects by customizing one or more process template files. You can customize several types of template files, which include the root XML file, plug-in files, and XML definition files. By customizing these files, you can define the initial configuration of all projects that are created from the process template.  

For information about the default process templates, see [Choose a process](../../boards/work-items/guidance/choose-process.md). To learn about customizing a process template, see [Customize a process template](customize-process.md).  


<a name="client-support"></a> 
## Client support for project creation

Depending on whether you work from the Azure DevOps Services or TFS, you can create a project from the web portal or from Visual Studio/Team Explorer.

| Client | Azure DevOps Services | TFS 2018 and TFS 2017 |  TFS 2015 and earlier versions |  
|--------|---------------|-----------------|-----------------|  
|Web portal | ![supported](../../_img/icons/checkmark.png)| ![supported](../../_img/icons/checkmark.png) | ![not supported](../../_img/icons/delete_icon.png)  |
|Visual Studio/Team Explorer | ![not supported](../../_img/icons/delete_icon.png) | ![supported](../../_img/icons/checkmark.png) |![supported](../../_img/icons/checkmark.png)|  

(![supported](../../_img/icons/checkmark.png)- Supported; ![not supported](../../_img/icons/delete_icon.png) - Not supported)  

When you create a project from the web portal, the following plug-in files are ignored. 

- **Build**: Default security permissions are defined for build functions.
- **Lab Management**: Native build and release management tools replace the previous lab management tools. To learn more, see  [Use Build and Release instead of Lab Management for automated testing](../../test/lab-management/use-build-or-rm-instead-of-lab-management.md). 
- **Reports**: See [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md) to add SQL Reports after you create the project. 
- **Version Control**: Default security permissions and TFVC check-in policies are defined for git and TFVC functions.
- **Windows SharePoint Services**: TFS 2018 and later versions no longer support native integration with SharePoint products. See [About SharePoint integration](../../report/sharepoint-dashboards/about-sharepoint-integration.md) to learn about the options available to you. For TFS 2017 and earlier versions, you must use Visual Studio/Team Explorer to add SharePoint Integration. 
- **Custom plug-ins**: Not supported.

For details, review [Plug-in file descriptions and PCW support](#PlugInFiles).


<a name="Root"></a> 
##  The root process template file  
 You customize the root XML file, ProcessTemplate.xml, to define the sequence of plug-in files to be processed and the dependencies of each plug-in. The ProcessTemplate.xml file contains all task groups that must run to successfully create a project. Each task group references a subordinate XML plug-in file (often in a subfolder) where the specific tasks are defined. For more information, see [Define the root tasks](define-root-tasks-process-template-plug-in.md).  


<a name="PlugInFiles"></a> 
## Plug-in file descriptions and PCW support   

Each plug-in file configures a specific functional area by defining one or more tasks. Tasks specify to upload a file, set permissions for a group, or configure some other functional area. For example, the Work Item Tracking plug-in configures the work item types, queries, categories, and process configuration for a project. 

The following table describes each plug-in file and whether or not it is supported when creating a project from Visual Studio/Team Explorer or the web portal.The order in which the plug-ins are called is determined by the root process template file. Except for the Classification plug-in, plug-ins can also be deleted from the process template.  

(![supported](../../_img/icons/checkmark.png)- Supported; ![not supported](../../_img/icons/delete_icon.png) - Not supported)

<!---
> [!IMPORTANT]  
> Starting with TFS 2018 and later versions, you will only be able to create a project creation from the web portal. No custom plug-ins are supported.  
--> 

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
      <a href="define-initial-configuration-build.md" data-raw-source="[Build.xml](define-initial-configuration-build.md)">Build.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/delete_icon.png" alt="not supported"/></td>
<td>Defines the initial security permissions used by Team Foundation Build and uploads build template files.
<blockquote>
For Azure DevOps Services and TFS 2017.3 and later versions, this plug-in is ignored and only default permissions are defined. 
</blockquote></td>
</tr>


<tr>
<td>Classifications <br/>
      <a href="define-classification-plug-in.md" data-raw-source="[Classification.xml](define-classification-plug-in.md)">Classification.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td>Configures the initial area and iteration or sprint paths. Also uploads the <a href="../xml/map-microsoft-project-fields-to-tf-fields.md" data-raw-source="[Microsoft Project Mapping (FileMapping.xml) file](../xml/map-microsoft-project-fields-to-tf-fields.md)">Microsoft Project Mapping (FileMapping.xml) file</a> that defines how work tracking fields map to Office Project fields.</td>
</tr>


<tr>
<td>Groups and Permissions<br/>
      <a href="define-groups-teams-permissions-plug-in.md" data-raw-source="[GroupsandPermissions.xml](define-groups-teams-permissions-plug-in.md)">GroupsandPermissions.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td>Defines the initial security groups, teams, team members, and their permissions.</td>
</tr>


<tr>
<td>Lab Management<br/>
      <a href="define-initial-configuration-lab-management.md" data-raw-source="[Lab.xml](define-initial-configuration-lab-management.md)">Lab.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/delete_icon.png" alt="not supported"/></td>
<td>Defines the initial security permissions that are assigned to identities for Visual Studio Lab Management. 

<blockquote>
 For Azure DevOps Services and TFS 2017.3 and later versions, this plug-in is ignored and only default permissions are defined. Going forward, native build and release management tools replace the previous lab management tools. To learn more, see <a href="/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management" data-raw-source="[Use Build and Release Management instead of Lab Management for automated testing](/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management)">Use Build and Release Management instead of Lab Management for automated testing</a>.
</blockquote>

</td>
</tr>



<tr>
<td>Reports<br/>
      <a href="add-reports-to-the-process-template.md" data-raw-source="[ReportsTasks.xml](add-reports-to-the-process-template.md)">ReportsTasks.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/delete_icon.png" alt="not supported"/></td>
<td>Creates the Report Manager site for the project and uploads the Reporting Services reports. Only supported for on-premises TFS. 
<blockquote>
 For TFS 2017.3 and later versions, you can only create projects through the web portal which ignores this plug-in. To add reports after creating a project, see <a href="../../report/admin/add-reports-to-a-team-project.md" data-raw-source="[Add reports to a project](../../report/admin/add-reports-to-a-team-project.md)">Add reports to a project</a>.
</blockquote>
</td>
</tr>


<tr>
<td>
<a name="XMLFiles"></a> 
Test Management<br/>
      <a href="define-initial-configuration-test-manager.md" data-raw-source="[TestManagement.xml](define-initial-configuration-test-manager.md)">TestManagement.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td>Defines the initial test variables, configurations, settings, and resolution states of a project. This plug-in also uploads the information contained in the following files: 
<ul>
<li><strong>localrun.testsettings</strong>: Defines the default test settings for a local test run.</li>
<li><strong>testconfiguration</strong>: Configures the default test configurations (hardware and software) that are defined for a project. After the project is created, you can delete these configurations and create other configurations.</li>
<li><strong>testresolutionstate</strong>: Defines the test resolution states that are used by Test Runner, Microsoft Test Manager, and the web portal <strong>Test</strong> pages. You can&#39;t change these states after the project is created. To change the resolution states after you&#39;ve created a project for an on-premises TFS, see <a href="../witadmin/tcm-customize-manage-test-experience.md" data-raw-source="[Customize and manage the test experience](../witadmin/tcm-customize-manage-test-experience.md)">Customize and manage the test experience</a>.</li>
<li><strong>testsettings</strong>: Specifies the initial test settings files. Only one file is specified, localrun.testsettings.</li> 
<li><strong>testvariable</strong>: Defines the initial test variables. After the project is created, you can modify these variables and create other variables.</li> 
</ul>


</td>
</tr>


<tr>
<td>Version Control<br/>
      <a href="define-initial-configuration-version-control.md" data-raw-source="[VersionControl.xml](define-initial-configuration-version-control.md)">VersionControl.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/delete_icon.png" alt="not supported"/></td>
<td>Defines the initial security permissions for Git and Team Foundation version control (TFVC), and for TFVC, check-in notes and whether exclusive check-out is required. 
<blockquote>
For Azure DevOps Services and TFS 2017.3 and later versions, this plug-in is ignored and only the default settings and permissions are defined. After you create a project, you can manage <a href="../../repos/tfvc/add-check-policies.md" data-raw-source="[TFVC check-in policies](../../repos/tfvc/add-check-policies.md)">TFVC check-in policies</a> or <a href="../../organizations/security/set-git-tfvc-repository-permissions.md" data-raw-source="[permissions](../../organizations/security/set-git-tfvc-repository-permissions.md)">permissions</a> from the web portal.
</blockquote>
</td>
</tr>


<tr>
<td><a name="ProcGuidance"></a>
Windows SharePoint Services<br/>
      <a href="define-project-portal-plug-in.md" data-raw-source="[WssTasks.xml](define-project-portal-plug-in.md)">WssTasks.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/delete_icon.png" alt="not supported"/></td>
<td>

<p>Defines the project portal based on a template for a SharePoint site. Only supported for on-premises TFS. 

<blockquote>
TFS 2018 and later versions no longer support native integration with SharePoint products. If you&#39;re planning to upgrade to TFS 2018, read <a href="/azure/devops/report/sharepoint-dashboards/about-sharepoint-integration" data-raw-source="[About SharePoint integration](/azure/devops/report/sharepoint-dashboards/about-sharepoint-integration)">About SharePoint integration</a> to learn about the options available to you. For TFS 2017 and earlier versions, you must use Visual Studio/Team Explorer to add SharePoint Integration. Or, to add a project portal site after creating a project, see <a href="../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md" data-raw-source="[Configure or add a project portal](../../report/sharepoint-dashboards/configure-or-add-a-project-portal.md)">Configure or add a project portal</a>. Creating a project from the web portal will ignore the WssTasks.xml plug-in. 
</blockquote>

<p>This plug-in also uploads the information contained in the following files and folders:</p> 
<ul>
<li><strong>Process Guidance</strong>: Uploads a set of .htm files which contain a URL that opens process guidance topics when a user clicks the <img src="_img/processguidance_wi_icon.png" alt="Open process guidance for work item" title="ProcessGuidance_WI_Icon"/> help icon from the client version of a work item form. These files can be customized to point to other resources for process guidance. </li> 
<li><strong>Samples and Templates</strong>: Uploads one or more Excel workbooks (.xlsx files) to support bug triage and track issues. </li> 
<li><strong>Shared Documents</strong>: Uploads one or more sample document and template files as a starting point for creating work products.</li><br/></ul>

<blockquote>
Process template files do not include dashboards or Microsoft Excel reports. These files are added to the project, depending on selections that are made when a project is created. If no SharePoint site is provisioned for the project, no dashboards or Office Excel reports are available. For more information about these artifacts, see the following topics: <a href="../../report/sharepoint-dashboards/project-portal-dashboards.md" data-raw-source="[Project portal dashboards](../../report/sharepoint-dashboards/project-portal-dashboards.md)">Project portal dashboards</a>, <a href="../../report/excel/excel-reports.md" data-raw-source="[Excel reports (Agile)](../../report/excel/excel-reports.md)">Excel reports (Agile)</a>, and <a href="../../report/excel/excel-reports-cmmi.md" data-raw-source="[Excel reports (CMMI)](../../report/excel/excel-reports-cmmi.md)">Excel reports (CMMI)</a>.<br/></blockquote>
</td>
</tr>


<tr>
<td><a name="WIT"></a> 
Work Item Tracking <br/>
      <a href="define-objects-track-work-items-plug-in.md" data-raw-source="[WorkItems.xml](define-objects-track-work-items-plug-in.md)">WorkItems.xml</a></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td><img src="../../_img/icons/checkmark.png" alt="supported"/></td>
<td>Defines the initial work item types, queries, and work item instances of a project. Team members use work items to track work. A <em>work item type</em> defines the fields, workflow, and form used to track work. To customize any of these objects after you create a project, see <a href="../customize-work.md" data-raw-source="[Customize your work tracking experience](../customize-work.md)">Customize your work tracking experience</a>. 

<p>This plug-in also uploads the information contained in the following files and folders: </p> 
<ul>
<li><strong><a href="add-type-wit-category-definitions-process-template.md" data-raw-source="[Categories.xml](add-type-wit-category-definitions-process-template.md)">Categories.xml</a></strong>: Defines the XML definition file for the categories used to group work item types.   </li>
<li><strong><a href="add-link-type-definitions-to-a-process-template.md" data-raw-source="[LinkTypes](add-link-type-definitions-to-a-process-template.md)">LinkTypes</a></strong>:
<ul>
<li><strong>SharedParameterLink.xml</strong>: Defines the link type that supports linking shared parameters to test cases.</li> 
<li><strong>SharedSteps</strong>: Defines the link type that supports linking shared steps to test cases.</li>
<li><strong>TestedBy</strong>: Defines the link type that supports linking test cases to work items such as product backlog items, user stories, requirements, and bugs.</li>
</ul>
<p>Additional link types may be defined based on the process template. For a description of all link types, see <a href="../../boards/queries/link-work-items-support-traceability.md" data-raw-source="[Link work items to support traceability and manage dependencies](../../boards/queries/link-work-items-support-traceability.md)">Link work items to support traceability and manage dependencies</a>. </p>
</li> 

<li><strong>Process</strong>: Defines the <a href="../xml/process-configuration-xml-element.md" data-raw-source="[ProcessConfiguration.xml file](../xml/process-configuration-xml-element.md)">ProcessConfiguration.xml file</a> that specifies the default configuration for the Agile tool backlogs and boards.  </li>
<li><strong><a href="add-work-item-queries-process-template.md" data-raw-source="[Queries](add-work-item-queries-process-template.md)">Queries</a></strong>: Defines several work item queries (defined as .wiq files) within the Queries folder. </li>
<li><strong><a href="add-wit-definitions-process-template.md" data-raw-source="[TypeDefinitions](add-wit-definitions-process-template.md)">TypeDefinitions</a></strong>: Defines the 15 or more work item type XML definition files contained within the TypeDefinition folder. The definitions differ depending on the process template selected. </li>
<li><strong><a href="add-work-item-instance-process-template.md" data-raw-source="[Work items](add-work-item-instance-process-template.md)">Work items</a></strong>: Defines one or more work items. No definitions are defined within the default process templates. 
<blockquote>
For Azure DevOps Services and TFS 2017.3 and later versions, definitions for work item instances will be ignored when creating projects.  </blockquote></li>
</ul> 

</td>
</tr>


</tbody>
</table>


## Related articles

The schema definition for process templates uses a mix of camel-case and all capitalized elements. If you encounter errors when validating your type definition files, check the case structure of your elements. Also, the case structure of opening and closing tags must match according to the rules for XML syntax. See [Process template plug-ins: Index to XML element definitions](process-template-plug-ins-xml-elements-index.md).  

-  [Choose a process or process template](../../boards/work-items/guidance/choose-process.md)   
-  [Customize a process template](customize-process.md)  
-  [Customize your work tracking experience](../customize-work.md)

