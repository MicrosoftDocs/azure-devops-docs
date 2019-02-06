---
title: Synchronize Team Foundation Server with Project Server 
titleSuffix: TFS 
description: Enable the data to flow from work items in Team Foundation Server to tasks in Project Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 4ec7be08-78e4-40be-81ae-4d2d81c49cd0
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 05/18/2017 
ms.topic: overview
---


# Synchronize Team Foundation Server with Project Server

<b>TFS 2015 | TFS 2013</b>

> [!IMPORTANT]  
>TFS 2017 and later versions no longer support native integration with Office Project Server. If you upgrade to TFS 2017 or want to use a third party option, see [Synchronize TFS with Project Server](sync-ps-tfs.md).

By installing Team Foundation Server Extensions for Project Server, project managers can use Microsoft Project Server to access up-to-date project status and resource availability across agile and formal software teams who work in Team Foundation.  This integration enables data to flow from work items in Team Foundation Server (TFS) to tasks in enterprise project plans in Project Server. Project managers and software development teams can use the tools that they prefer, work at the level of precision that supports their needs, and share information transparently. After the two server products are configured, the synchronization engine maintains scheduling data and resource usage for the configured data in the mapped enterprise project plan and project.  
  
 To enable this flow of data, you must install Team Foundation Server Extensions for Project Server on the application-tier or web-tier servers that run Project Server that will participate in data synchronization. For more information, see [How to: Add Project Server to Team Foundation Server](https://msdn.microsoft.com/library/hh548139.aspx).  Project managers that use Project Professional must install Visual Studio 2013 or Team Explorer 2013 on their client computers.  
  
> [!NOTE]
>  You can download a virtual machine that demonstrates how to integrate TFS and Project Server 2010 to allow teams to share data between the two server products. This virtual machine includes enterprise project plans in Project Server that are mapped to projects in TFS, along with sample data to highlight key integration scenarios. The walkthrough documents illustrate four scenarios that simulate the interactions between the project manager, who is working in Project Server, and members of the software development team, who are working in TFS.  
>   
>  For more information, see the following page on the Microsoft website: [TFS 2010 and Microsoft Project Server 2010 Integration Hyper-V Virtual Machine](http://go.microsoft.com/fwlink/?LinkID=196413). Some details might differ between the procedures demonstrated in the video and those described here because this video was made for the previous release of Team Foundation Server.  
  
<a name="admintasks"></a> 

##  Administrator tasks  
  

### Review setup, configuration, and administration tasks 

As an administrator for the integration of TFS and Project Server, you must configure the integration of the two server products to support the flow of data from projects to enterprise project plans. For the initial configuration, you must install software, grant permissions, register instances of Project Web Access or Project Web App (PWA), and map components of Project Server to components of Team Foundation.

Review these topics: 
-   [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)
-   [Overview of integration features](overview-tfs-project-server-integration.md)
-   [Operational differences in managing projects using TFS and Project](operational-differences.md)
 
### Plan the integration of the two server products
To synchronize data between TFS and Project Server, you must install Team Foundation Server Extensions for Project Server. To understand how you will configure the integration of the two server products, you should understand how components in Project Server map to components in Team Foundation.

For details, see:
-  [System and setup requirements](system-and-setup-requirements.md)
-  [Map components](map-project-server-components.md).

### Upgrade an existing deployment
Refer to these topics for the recommended sequence and instructions for upgrading servers with a more recent version of the software.
- [Update an existing installation](update-version-compatibility-requirements.md)
- [Upgrade Microsoft Project Server 2010  to Microsoft Project Server 2013](upgrade-ps-2010-to-ps-2013.md).  

### Configure the integration 
To support a test or evaluation environment, see [Configuration quick reference](configuration-quick-reference.md) to install software, assign permissions, configure integration, and verify data synchronization. 

To support a production environment, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md) to collect the information that you require for configuration, permissions that you must grant, and configuration tasks that you must perform to support a customized integration of the two server products.
  
###  Grant permissions 
You must grant permissions to administrators, service accounts, and team members. See [Assign permissions](assign-permissions-support-tfs-project-server-integration.md)
 
###  Manage the integration of synchronized components

You can change how components are mapped or list the current mappings by using the `TfsAdmin` command-line tool. You can review the options and parameters that this tool provides and learn about the operations that specific options perform. See [Map integration components](map-integration-components.md)

### Understand the three types of synchronization
The synchronization engine performs three types of synchronization: publishing, status, and approval. This process captures and maintains task-related and resource-related data in both TFS and Project Server while respecting the ownership of data by the project manager in the project plan.

For more information, see [Synchronization process overview](synchronization-process-overview.md).  
  
<a name="pmtasks"></a>  
##  Project manager tasks  
  
### Choose how you want to manage projects
You can configure the integration to support the specific manner in which you want to manage projects. You can define high-level deliverables or both deliverables and tasks, you can just review progress that the development team reports, or you can combine these methods.

For details, see [Manage projects](manage-projects.md). 

### Understand the synchronization process and features
You can manage the project plans that map to projects and the tasks that are synchronized with work items in Team Foundation. See these topics: 
- [Synchronization process overview](synchronization-process-overview.md)
- [Overview of integration features](overview-tfs-project-server-integration.md)   

### Create resource assignments, and view resource utilization
When the development team breaks down requirements and tasks into child tasks, you can see how work and resources roll up through the project. You can use this information to view resource allocation and work estimates, perform resource leveling, and determine whether a resource is over-allocated within a project or across multiple projects.

See [Work with resource rollup](work-with-resource-rollup.md).  
  
<a name="devteam"></a>   
##  Development team tasks  
  
### Review deliverables, define tasks, and estimate work
For each deliverable that is submitted to Project Server, you define and estimate the tasks that are required to implement that deliverable. As you perform work, you update your task hours, which are automatically submitted to Project Server and the project manager for review.

For details, see [Top-down planning of business requirements](top-down-plan-mapped-team-project.md). 

### Review work breakdown, and update work
As a development lead, you can use the Work Breakdown query to review the work items that a project manager submits. As work progresses, team members update their task hours, which are automatically submitted to Project Server and the project manager for review. 

For details, see [Manage project details](manage-project-details.md).

### Define and submit user stories or requirements to Project Server
As a development lead, you provide visibility into the project schedule and resource utilization by setting the **Project Server Submit** field to **Yes** for those user stories or requirements on which your team is working. 

For details, see [Make Agile team progress visible](make-agile-team-progress-visible-to-the-pmo.md). 

### Find and address rejected work item submissions
When the project manager rejects an update to a work item, you must address the reason for the rejection and resubmit it to Project Server. Until you complete this task, the work item can no longer participate in data synchronization. For details, see [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md).  
  

## Related articles  
-  [Agile tools and work tracking](../../boards/get-started/what-is-azure-boards.md)    

<a name="demos"></a>  
###  Demonstration videos  
The following videos, which are available from the Microsoft website, illustrate the flexibility that you have to manage the product lifecycle after you integrate the two server products.  
  
-   [Application Lifecycle Management: Microsoft Project Server 2010 and TFS 2010, Better Together](http://go.microsoft.com/fwlink/?LinkId=222614)    
-   [Top-Down Planning of Business Requirements within an Enterprise Project using Team Foundation Server and Project Server](http://go.microsoft.com/fwlink/?LinkId=222610)   
-   [Managing Project Details in an Enterprise Project Plan Mapped to a Team Project in Team Foundation Server](http://go.microsoft.com/fwlink/?LinkId=222611)  
-   [Making Agile Team Progress Visible to the Project Management Office](http://go.microsoft.com/fwlink/?LinkId=222612)   
-   [Managing Field Mappings for Integration of Team Foundation Server and Project Server](http://go.microsoft.com/fwlink/?LinkId=222613)  
  