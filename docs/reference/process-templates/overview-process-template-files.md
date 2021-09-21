---
title: Process template and plug-in files 
titleSuffix: Azure DevOps & TFS
description: Describes each process template and plug-in file and what is supported when you create a project via Visual Studio or the web portal  
ms.technology: devops-agile 
ms.assetid: 5a0b9512-d663-4a5e-99d5-f5454fb986f7
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '< azure-devops' 
ms.date: 10/19/2017
---


# Process template and plug-in files

[!INCLUDE [temp](../../includes/customization-phase-0-and-1-plus-version-header.md)]

You customize the initial configuration of projects by customizing one or more process template files. You can customize several types of template files, which include the root XML file, plug-in files, and XML definition files. By customizing these files, you can define the initial configuration of all projects that are created from the process template.  

For information about the default process templates, see [Choose a process](../../boards/work-items/guidance/choose-process.md). To learn about customizing a process template, see [Customize a process template](customize-process.md).  


<a name="client-support"></a> 
## Client support for project creation

Depending on whether you work from the Azure DevOps Services or TFS, you can create a project from the web portal or from Visual Studio/Team Explorer.

| Client | Azure DevOps Services | TFS 2018 and TFS 2017 |  TFS 2015 and earlier versions |  
|--------|---------------|-----------------|-----------------|  
|Web portal | ✔️| ✔️ | ❌  |
|Visual Studio/Team Explorer | ❌ | ✔️ |✔️|  

(✔️- Supported; ❌ - Not supported)  

When you create a project from the web portal, the following plug-in files are ignored. 

- **Build**: Default security permissions are defined for build functions.
- **Lab Management**: Native build and release management tools replace the previous lab management tools. To learn more, see  [Use Build and Release instead of Lab Management for automated testing](/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management). 
- **Reports**: See [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md) to add SQL Reports after you create the project. 
- **Version Control**: Default security permissions and TFVC check-in policies are defined for git and TFVC functions.
- **Windows SharePoint Services**: TFS 2018 and later versions no longer support native integration with SharePoint products. See [About SharePoint integration](/previous-versions/azure/devops/report/sharepoint-dashboards/about-sharepoint-integration) to learn about the options available to you. For TFS 2017 and earlier versions, you must use Visual Studio/Team Explorer to add SharePoint Integration. 
- **Custom plug-ins**: Not supported.

For details, review [Plug-in file descriptions and PCW support](#PlugInFiles).


<a name="Root"></a> 

##  The root process template file  

 You customize the root XML file, ProcessTemplate.xml, to define the sequence of plug-in files to be processed and the dependencies of each plug-in. The ProcessTemplate.xml file contains all task groups that must run to successfully create a project. Each task group references a subordinate XML plug-in file (often in a subfolder) where the specific tasks are defined. For more information, see [Define the root tasks](define-root-tasks-process-template-plug-in.md).  


<a name="PlugInFiles"></a> 

## Plug-in file descriptions and PCW support   

Each plug-in file configures a specific functional area by defining one or more tasks. Tasks specify to upload a file, set permissions for a group, or configure some other functional area. For example, the Work Item Tracking plug-in configures the work item types, queries, categories, and process configuration for a project. 

The following table describes each plug-in file and whether or not it is supported when creating a project from Visual Studio/Team Explorer or the web portal.The order in which the plug-ins are called is determined by the root process template file. Except for the Classification plug-in, plug-ins can also be deleted from the process template.  

(✔️- Supported; ❌ - Not supported)

<!---
> [!IMPORTANT]  
> Starting with TFS 2018 and later versions, you will only be able to create a project creation from the web portal. No custom plug-ins are supported.  
--> 

:::row:::
   :::column span="1":::
   **Plug-in folder and file**
   :::column-end:::
   :::column span="1":::
   **Client**
   :::column-end:::
   :::column span="1":::
   **Web portal**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Build  
   [Build.xml](define-initial-configuration-build.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ❌
   :::column-end:::
   :::column span="1":::
   Defines the initial security permissions used by Team Foundation Build and uploads build template files.  
   <blockquote>
   For Azure DevOps Services and TFS 2017.3 and later versions, this plug-in is ignored and only default permissions are defined. 
   </blockquote>
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Classifications   
   [Classification.xml](define-classification-plug-in.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   Configures the initial area and iteration or sprint paths. Also uploads the [Microsoft Project Mapping (FileMapping.xml) file](/previous-versions/azure/devops/reference/xml/map-microsoft-project-fields-to-tf-fields) that defines how work tracking fields map to Office Project fields.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Groups and Permissions   
   [GroupsandPermissions.xml](define-groups-teams-permissions-plug-in.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   Defines the initial security groups, teams, team members, and their permissions.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Lab Management  
   [Lab.xml](define-initial-configuration-lab-management.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ❌
   :::column-end:::
   :::column span="1":::
   Defines the initial security permissions that are assigned to identities for Visual Studio Lab Management.   
   <blockquote>
   For Azure DevOps Services and TFS 2017.3 and later versions, this plug-in is ignored and only default permissions are defined. Going forward, native build and release management tools replace the previous lab management tools. To learn more, see [Use Build and Release Management instead of Lab Management for automated testing](/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management).
   </blockquote>
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Reports  
   [ReportsTasks.xml](add-reports-to-the-process-template.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ❌
   :::column-end:::
   :::column span="1":::
   Creates the Report Manager site for the project and uploads the Reporting Services reports. Only supported for on-premises TFS.   
   <blockquote>
   For TFS 2017.3 and later versions, you can only create projects through the web portal which ignores this plug-in. To add reports after creating a project, see [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md).
   </blockquote>
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::   
   Test Management  
   [TestManagement.xml](define-initial-configuration-test-manager.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   Defines the initial test variables, configurations, settings, and resolution states of a project. This plug-in also uploads the information contained in the following files:  
   
   - **localrun.testsettings**: Defines the default test settings for a local test run.
   - **testconfiguration**: Configures the default test configurations (hardware and software) that are defined for a project. After the project is created, you can delete these configurations and create other configurations.
   - **testresolutionstate**: Defines the test resolution states that are used by Test Runner, Microsoft Test Manager, and the web portal **Test** pages. You can't change these states after the project is created. To change the resolution states after you've created a project for an on-premises TFS, see [Customize and manage the test experience](../witadmin/tcm-customize-manage-test-experience.md).
   - **testsettings**: Specifies the initial test settings files. Only one file is specified, localrun.testsettings. 
   - **testvariable**: Defines the initial test variables. After the project is created, you can modify these variables and create other variables.
   
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Version Control  
  [VersionControl.xml](define-initial-configuration-version-control.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ❌
   :::column-end:::
   :::column span="1":::
   Defines the initial security permissions for Git and Team Foundation version control (TFVC), and for TFVC, check-in notes and whether exclusive check-out is required.  
   <blockquote>
   For Azure DevOps Services and TFS 2017.3 and later versions, this plug-in is ignored and only the default settings and permissions are defined. After you create a project, you can manage [TFVC check-in policies](../../repos/tfvc/add-check-policies.md) or [permissions](../../repos/tfvc/set-tfvc-repository-permissions.md) from the web portal.
   </blockquote>
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Windows SharePoint Services  
  [WssTasks.xml](define-project-portal-plug-in.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ❌
   :::column-end:::
   :::column span="1":::
   
   Defines the project portal based on a template for a SharePoint site. Only supported for on-premises TFS.  
   <blockquote>
   TFS 2018 and later versions no longer support native integration with SharePoint products. If you're planning to upgrade to TFS 2018, read [About SharePoint integration](/azure/devops/report/sharepoint-dashboards/about-sharepoint-integration) to learn about the options available to you. For TFS 2017 and earlier versions, you must use Visual Studio/Team Explorer to add SharePoint Integration. Or, to add a project portal site after creating a project, see [Configure or add a project portal](../../project/configure-or-add-a-project-portal.md). Creating a project from the web portal will ignore the WssTasks.xml plug-in. 
   </blockquote>  
   This plug-in also uploads the information contained in the following files and folders:
 
   
   - **Process Guidance**: Uploads a set of .htm files which contain a URL that opens process guidance topics when a user clicks the ![ProcessGuidance_WI_Icon](media/processguidance_wi_icon.png) help icon from the client version of a work item form. These files can be customized to point to other resources for process guidance.  
   - **Samples and Templates**: Uploads one or more Excel workbooks (.xlsx files) to support bug triage and track issues.  
   - **Shared Documents**: Uploads one or more sample document and template files as a starting point for creating work products.  
   <blockquote>
   Process template files do not include dashboards or Microsoft Excel reports. These files are added to the project, depending on selections that are made when a project is created. If no SharePoint site is provisioned for the project, no dashboards or Office Excel reports are available. For more information about these artifacts, see the following topics: [Project portal dashboards](/previous-versions/azure/devops/report/sharepoint-dashboards/project-portal-dashboards), [Excel reports (Agile)](/previous-versions/azure/devops/report/excel/excel-reports), and [Excel reports (CMMI)](/previous-versions/azure/devops/report/excel/excel-reports-cmmi).  
   </blockquote>
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   Work Item Tracking  
  [WorkItems.xml](define-objects-track-work-items-plug-in.md)
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   ✔️
   :::column-end:::
   :::column span="1":::
   Defines the initial work item types, queries, and work item instances of a project. Team members use work items to track work. A *work item type* defines the fields, workflow, and form used to track work. To customize any of these objects after you create a project, see [Customize your work tracking experience](../customize-work.md).  
   
   This plug-in also uploads the information contained in the following files and folders: 
 
   
   - **[Categories.xml](add-type-wit-category-definitions-process-template.md)**: Defines the XML definition file for the categories used to group work item types.   
   - **[LinkTypes](add-link-type-definitions-to-a-process-template.md)**:     
     - **SharedParameterLink.xml**: Defines the link type that supports linking shared parameters to test cases. 
     - **SharedSteps**: Defines the link type that supports linking shared steps to test cases.
      **TestedBy**: Defines the link type that supports linking test cases to work items such as product backlog items, user stories, requirements, and bugs.
   
   Additional link types may be defined based on the process template. For a description of all link types, see [Link work items to support traceability and manage dependencies](../../boards/queries/link-work-items-support-traceability.md). 
    
   - **Process**: Defines the [ProcessConfiguration.xml file](../xml/process-configuration-xml-element.md) that specifies the default configuration for the Agile tool backlogs and boards.  
   - **[Queries](add-work-item-queries-process-template.md)**: Defines several work item queries (defined as .wiq files) within the Queries folder. 
   - **[TypeDefinitions](add-wit-definitions-process-template.md)**: Defines the 15 or more work item type XML definition files contained within the TypeDefinition folder. The definitions differ depending on the process template selected. 
   - **[Work items](add-work-item-instance-process-template.md)**: Defines one or more work items. No definitions are defined within the default process templates.  
   <blockquote>
   For Azure DevOps Services and TFS 2017.3 and later versions, definitions for work item instances will be ignored when creating projects.  
   </blockquote>
    
   :::column-end:::
:::row-end:::



## Related articles

The schema definition for process templates uses a mix of camel-case and all capitalized elements. If you encounter errors when validating your type definition files, check the case structure of your elements. Also, the case structure of opening and closing tags must match according to the rules for XML syntax. See [Process template plug-ins: Index to XML element definitions](process-template-plug-ins-xml-elements-index.md).  

-  [Choose a process or process template](../../boards/work-items/guidance/choose-process.md)   
-  [Customize a process template](customize-process.md)  
-  [Customize your work tracking experience](../customize-work.md)