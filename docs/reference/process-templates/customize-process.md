---
title: Customize a process template
titleSuffix: Azure DevOps & TFS
description: Define the objects and processes available to you when you create a project in Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 3122f0e7-2ad9-46a1-a65f-32af37c0f444
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
monikerRange: '>= tfs-2013' 
ms.date: 09/08/2017
---


# Customize a process template

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]
 
Process templates define the objects and processes available to you when you create a project. By customizing a process template, you customize one of more objects. Common types of customizations you can make include:  
  
- Add a new field to an existing work item type (WIT)  
- Modify the pick list of values for a field  
- Change the workflow&mdash;States, Reasons, Transitions, Actions&mdash;of an existing WIT  
- Edit the layout of a work item form  
- Add or remove a work item type  
- Change the process configuration or defaults associated with Agile tools   


> [!NOTE]    
>If you're looking for **project templates** for software development, see [Creating Visual Studio templates](https://msdn.microsoft.com/library/ms247121.aspx). This topic describes process templates used to create Projects defined on Azure DevOps Services and TFS.  
  
Default process templates define default configurations as well as the following artifacts that your team uses to plan and track work, collaborate, and share information.

For example, the Agile process template defines the set of artifacts shown in the following image.  
  
**Agile process template artifacts**  
  
![Agile process template artifacts](_img/alm_pg_agile_pt.png "ALM_PG_Agile_PT")  
  
Many of these artifacts depend on WITs which are used to track work. For example, data fields defined in the definition of WITs&mdash;such as, Feature, Bug, User Story, or Task&mdash;are also used to define work item queries and reports. In addition to these artifacts, you can also define the initial project areas and milestones, security configuration, and other default settings that support version control and test management.  
  
 After you create a project, you can change configurations and customize artifacts. However, by customizing the process template before you create your projects, all resulting projects that you create from it will match a standard set of team processes. The main reasons you might want to customize a process template include:  
  
-   You plan to create several projects and you want to minimize repetitive tasks that you'll have to implement later in each project that you create.  
  
-   You want to make sure all teams adhere to certain standards by providing the templates and structures within the toolset your software development teams will use.  
  
-   You need to update a custom process template to support using the Configure Features wizard after a TFS upgrade  
  
If you work with only a single project, then you might consider simply creating the project and customizing one or more objects later.  
  
## How are process templates used?  
The primary use of process templates is to create a project. For the Hosted XML process model, it is also used to update a project. A project provides the set of objects, artifacts, and configurations defined in the interdependent set of template files. You use your project to organize source code, track work and information, build software, and support test activities.  
  
 **Hosted XML process model**   
-   Create a project   
-   [Add or refresh a process](../../organizations/settings/work/import-process/import-process.md) (limited availability)  
  
**On-premises XML process model**    
-   Create a project   

  
## Where should I start?  
 Before you start customizing a process template, you'll want to become familiar with what you can configure and customize and then plan your changes accordingly.  
  
-   If you're new to process templates, first [review the three default process templates](../../boards/work-items/guidance/choose-process.md).  
  
-   If you want to become familiar with the file structure of a process template, [review a description for each file](overview-process-template-files.md) or [download a process template](../../boards/work-items/guidance/manage-process-templates.md).  
  
     You can modify the processes for your project after it is created. As you work with a project, the initial settings that the process template defined may no longer meet your needs.  
  
-   If you're most interested in customizing objects used to track work, which includes test plans, test suites, and test cases, review [Customize your work tracking experience](../customize-work.md).  The customizations you make by modifying an XML definition file for a project are the same types of customizations you make in a process template file.  
  
     If you want to [add or modify types of work items](../add-modify-wit.md), you can achieve this without changing the whole process template. You can make and test changes by using an existing project. For the On-premises XML process model, you can use the **witadmin exportwitd** and **importwitd** command-line tools to download and upload the XML definition files for work item types.  
  
-   If you need to update a custom process template to support using the Configure Features wizard after a TFS upgrade, see [Configure features after an upgrade](../configure-features-after-upgrade.md).  
  
     Upgrading TFS to a later version uploads the latest versions of the default TFS process templates. To use the available updated templates and to access customizations that you made previously, you may need to add customizations provided with the new templates.  
  
-   If you're considering making extensive customizations, [review how the changes you make will impact maintenance and upgrade of your projects](../on-premises-xml-process-model.md#before-you-customize).  
  
<a name="plan"></a> 
##  Process template files and functional areas you can customize  
Process templates consist of nine plug-ins. Each plug-in defines a set of tasks that will be run and the screens that appear when you launch the New Team Project wizard. Tasks set permissions, create folders, upload files, activate sites, or set other configurable variables. Plug-ins also specify the dependencies that a task has on the successful completion of other tasks.  
  
![Process Template Plugins](_img/tfs_pt_plugins.png "TFS_PT_Plugins")  
  
> [!IMPORTANT]  
>When you create a project from the web portal, several process template files are ignored. Specifically, the files that would create a Report Manager site and a SharePoint project portal aren't supported. 
>
>If you want these features to be created for a project on your on-premises TFS, then create your project from Visual Studio or Team Explorer. For details, see [Process template and plug-in files, Client support for project creation](overview-process-template-files.md#client-support).  

The Build, Portal, and Reporting plug-ins require the following resources have been installed and configured.  
  
|Plug-in|Team Foundation Build|SharePoint Products|SQL Server Analysis Services|SQL Server Reporting Services|  
|--------------|---------------------------------------------------------------|-------------------------------------------------------------|----------------------------------|-----------------------------------|  
|Build|![Required](_img/aml_proj_bluefield_whitecheckmark.png "AML_Proj_BlueField_WhiteCheckmark")||||  
|Portal||![Required](_img/aml_proj_bluefield_whitecheckmark.png "AML_Proj_BlueField_WhiteCheckmark")|![Required](_img/aml_proj_bluefield_whitecheckmark.png "AML_Proj_BlueField_WhiteCheckmark") Recommended|Only required to support basic dashboards|  
|Reporting|||![Required](_img/aml_proj_bluefield_whitecheckmark.png "AML_Proj_BlueField_WhiteCheckmark")|![Required](_img/aml_proj_bluefield_whitecheckmark.png "AML_Proj_BlueField_WhiteCheckmark")|  


To customize a process template, you customize one or more files associated with a functional area. While customizing any one object is fairly simple, you'll want to make sure that you don't break any interdependencies when you customize.  The [ProcessTemplate.xml plug-in file](define-root-tasks-process-template-plug-in.md) defines which plug-ins to include in the template. This file contains all the task groups that you want to run to create a project. Each task group references a subordinate XML plug-in file where the specific tasks for that plug-in are defined.     
  

#### Teams, groups, permissions, & area and iteration paths 
<ul style="padding-left:20px;font-size:90%">
 <li style="margin-bottom:2px">[Area and iteration paths](define-classification-plug-in.md)</li>
 <li style="margin-bottom:2px">[Groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md)</li>
 <li style="margin-bottom:2px">[Microsoft Project mapping file](../xml/map-microsoft-project-fields-to-tf-fields.md)</li>
</ul>

#### Work item tracking  
 <li style="margin-bottom:2px">[WIT definitions](add-wit-definitions-process-template.md)</li>
 <li style="margin-bottom:2px">[Categories](add-type-wit-category-definitions-process-template.md)</li>
 <li style="margin-bottom:2px">[Process configuration](../xml/process-configuration-xml-element.md)</li>
 <li style="margin-bottom:2px">[Link types](add-link-type-definitions-to-a-process-template.md)</li>
 <li style="margin-bottom:2px">[Work items](add-work-item-instance-process-template.md) or [work item queries](add-work-item-queries-process-template.md)</li> 
</ul>


#### Version control, build, lab and test management 
<ul style="padding-left:20px;font-size:90%">
<li style="margin-bottom:2px">[Group permissions](control-access-to-functional-areas.md)</li>
<li style="margin-bottom:2px">[Check-in policies](define-initial-configuration-version-control.md)</li>
<li style="margin-bottom:2px">[Test environments, configurations, resolution states, and settings](define-initial-configuration-test-manager.md)</li>
</ul>

#### Reports and project portal 
<ul style="padding-left:20px;font-size:90%">
<li style="margin-bottom:2px">[Upload reports](add-reports-to-the-process-template.md)</li>
<li style="margin-bottom:2px">[Upload documents to the project portal](define-project-portal-plug-in.md)</li> 
</ul>


Because the process template touches on many components of a team's process, you may want to plan, coordinate, and track the changes that you will make. In particular, you may want to check with project leads, test leads, development leads, and release managers before you change the default configuration of any one area.  
  
    
### Plug-in dependencies  
Many objects rely on the definition of other objects within a process template.  
  
 For example, work item queries defined for the Agile process template use the iteration nodes that are defined in the Classification.xml file. If you change the iteration node definitions, you must modify the work item queries on which they rely. You can find these queries by searching for the following macros in the .wiq files:  
  
-   Iteration 1 = @@Iteration%201@@    
-   Iteration 2 = @@Iteration%202@@    
-   Iteration 3 = @@Iteration%203@@  
  
For an overview of required plug-ins and plug-in dependencies, see [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md).  
  
### Plug-in and naming restrictions 
When you add objects to a process template, you will want to make sure that you label them correctly so that you avoid XML validation errors.  
 
-   Restrictions are put on the names or labels of most Team Foundation objects. For an overview of naming restrictions that apply to process templates, security groups, area and iteration nodes, work item types, and work item fields, see [Naming restrictions](../../organizations/settings/naming-restrictions.md).  
  
-   Most process template components that you customize will affect only the project that you create by using the process template. The exceptions to this rule are global lists, link types, and work item fields. These objects are defined for a project collection.  
  
-   Each work item field has an associated field reference name that uniquely identifies each field. The reference name cannot be changed after it is assigned.  
  
     In addition, a work item field can have a reporting name that is assigned to it. The reporting name must match across all work item types that are defined for a project collection. If they do not, validation errors might occur when you upload the process template, or conflicts might occur in the data warehouse databases.  
  
     Work item field names, link type names, and global lists are scoped to a project collection. If you customize any of these objects, the change will be reflected in all projects that are defined in the collection and in the work item types that contain that work item field.  

-   The maximum size of a process template is two gigabytes. When you customize a process template, make sure that your changes do not increase its size beyond that value.  


<a name="pt_workflow"></a> 
##  Steps to customize a process template  
 Customizing a process template is an iterative process. You will need a project collection that is defined on a server that is running Team Foundation Server where you can test your process template to make sure that it was customized correctly.  
  
 To customize a process template, you first download an existing process template, modify or add files, upload the process template files, and then verify your changes.  
  
 ![Process Template Customization Workflow](_img/tfs_pt_customflow.png "TFS_PT_CustomFlow")  
  
|Step|Task|  
|----------|----------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|[Download a process template](../../boards/work-items/guidance/manage-process-templates.md). Before you can customize a process template, you must download it to your local computer.<br /><br /> To minimize the modifications that you must make, [select a template](../../boards/work-items/guidance/choose-process.md) that most closely matches your team processes. In general, you choose a process template based on types of work items and workflow.|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|**Modify or add files**. You customize a process template by modifying, deleting, or adding files that are defined for a process template. You customize a plug-in or definition file by modifying its XML content. Each plug-in file and type definition file must conform to its XML schema definition.<br /><br /> The first time that you customize a process template, make a small change. If you make many changes without a good understanding of how the changes may affect your template, you risk encountering multiple mistakes that will be difficult to debug.<br /><br /> Make sure that the name of your process template is unique. If you download a process template, make changes, and upload it, you must change its name or it will over-write the existing process template from the project collection.|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|[Upload a process template](../../boards/work-items/guidance/manage-process-templates.md). After you have customized your template, upload it to the project collection where you will create the project.<br /><br /> Ideally, you should use a project collection that is not used by other projects. By working in a test-bed project collection, you avoid introducing a change that might collide with existing team processes that are still under development. Also, you will want the project collection to support the same resources that you want to access, such as a project portal and a reporting site.<br /><br /> Make sure that the name of your process template is unique. If you downloaded a process template from a project collection, made a change, and are now uploading the template, you must change its name or delete the existing process template from the project collection.<br /><br /> The upload process performs a verification check to make sure that the XML is valid. If you receive any errors when you try to upload the process template, the changes that you made will have caused the error. Review your changes, and correct any XML syntax errors that you find.|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|[Create a project](../../organizations/projects/create-project.md). To test new process templates, you must create a project. You create a project by accessing the New Team Project Wizard from Team Explorer.<br /><br /> If any errors occur, view the log for project creation. It contains a list of the tasks that it tried to run and shows which tasks failed. You can map failed tasks back to the XML to determine the cause of the errors.<br /><br /> You can clean up unnecessary projects by using the [TFSDeleteProject command-line tool](../../organizations/projects/delete-project.md).|  
|![Step 5](_img/procguid_6.png "ProcGuid_6")|**Verify changes to process templates**. Before you put your process template in production mode and use it as the basis for several projects, you should verify that it is well-defined. You perform this task by systematically verifying that each object and artifact works as expected.<br /><br /> If you added a report, make sure that it appears in Team Explorer. If you added a field, make sure that you didn't introduce any schema conflicts.|  
  
<a name="add_resources"></a> 
## Related articles 

- [Process template and plug-in files](overview-process-template-files.md)
- [Configure features after an upgrade](../configure-features-after-upgrade.md)  
- [Process template plug-ins: Index to XML elements](process-template-plug-ins-xml-elements-index.md)
- [XML element reference](../xml/xml-element-reference.md)  
- [Forum: Team Foundation Server &mdash;Process Templates](http://go.microsoft.com/fwlink/?LinkId=216461)    
  
Sometimes third parties make available process templates that they've created. You may need to do extra work after a TFS upgrade when using a process template provided by a third-party as described [Customize your work tracking experience, Maintenance and upgrade implications (TFS)](../on-premises-xml-process-model.md#before-you-customize).

 
### Required permissions 
To download or upload process templates, you must either be a member of the **Project Collection Administrators** group, or your **Manage process template** permission must be set to **Allow**. See [Add accounts to administer project collections](../../organizations/security/set-project-collection-level-permissions.md).  
  
### Tools that support customizing a process template 
You can use any text editor or XML editor to modify XML files. Or, you can use the Process Editor which requires that you have installed a version of Visual Studio):
- For TFS 2017 and later versions, [install the TFS Process Template editor from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarthikBalasubramanianMSFT.TFSProcessTemplateEditor). You can use this version of the Process Editor to modify the old-style work item forms. You can't use it to edit forms associated with the [new web forms](../process/new-work-item-experience.md). 
- For TFS 2015 and earlier versions, install [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). 

Or, you can use the [TFS Team Project Manager](https://github.com/jelledruyts/TfsTeamProjectManager), an open-source client available from github.      

The Process Editor provides a user interface that you can use to customize the following areas:  
  
-   **Work item tracking**:    
    -   Create and edit WIT definitions, including adding fields, changing workflows, and modifying work item forms    
    -   Add or edit categories for grouping work item types   
    -   Edit the process configuration for Agile planning tools    
    -   Create and edit work item queries, and organize queries into query folders   
    -   Create and edit link types  
  
-   **Project classifications and hierarchies**:    
    -   Create and edit product area paths    
    -   Create and edit milestone releases or iteration paths    
    -   Modify the mapping file for Microsoft Project  
  
-   **Security groups**: Create and edit TFS groups and their permissions  
  
-   **Version control**:  
  
    -   Edit check-out settings    
    -   Create and edit check-in notes    
    -   Create and edit TFS groups and their permissions  
  
-   **Portal and reports**:    
    -   Review files to be uploaded and their folder structure    
    -   Add files to be uploaded.  

You can't customize Office Excel reports and dashboards through the process template files. These artifacts are created for a project depending on the selections that you make in the New Team Project wizard. For more information, see [Customizing TFS Project Portals](http://msdn.microsoft.com/80a9c78f-f495-4f54-99a1-b5e907afa319).  
 

 