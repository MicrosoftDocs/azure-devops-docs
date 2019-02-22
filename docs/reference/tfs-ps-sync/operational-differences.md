---
title: Operational differences in managing projects
titleSuffix: TFS 
description: Understand how using the Team Foundation plug-in to Project differs from Project Server-TFS integration  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 786a9a22-0e34-4a70-b589-ae2def789e06
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Operational differences in managing projects using TFS and Project

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> You can schedule projects by using the features that are available in Microsoft Project or Microsoft Project Professional, while maintaining the data and tracking work in Visual Studio Team Foundation Server (TFS). If you have Project Server deployed, you can best manage your enterprise project plans by installing Team Foundation Server Extensions for Project Server.  
  
 In this topic, you can learn about the benefits and operational differences of using the Team Foundation plug-in to Microsoft Project compared to integrating the two server products. For more information about Project Server, see [Project Server Documentation](/project/project-server-2013-and-2016).  

<a name="Integration"></a>
## Benefits of integrating TFS with Project Server  
 Integration between TFS and Project Server can become a considerable advantage for organizations that want to bridge the collaboration gap between their project management offices and their software development teams. By integrating the two server products, teams can work together more effectively in the following ways:  
  
-   Acquire up-to-date insight into portfolio execution, alignment with strategic objectives, and resource usage of software development projects by leveraging the quantitative data in different systems.  
  
-   Automate the sharing of project information across teams, and improve coordination between teams that use disparate methodologies, such as waterfall and agile, through common data and agreed-upon metrics.  
  
-   Enable development and project-management teams to collaborate and communicate project timelines and progress by using familiar tools such as Visual Studio, Microsoft Project, and SharePoint Products.  
  
 If Project Server is not deployed, you can use the Team Foundation plug-in to Microsoft Project to manage projects based on work items in Team Foundation. When you install Visual Studio or Team Explorer, the Team Foundation plug-in to Microsoft Project is installed. By using the plug-in, you can add and change TFS work item data. You can [plan projects, schedule tasks, assign resources, and track changes](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md). Different users can update work items from different project plans.  
  
 The following table compares the main tasks that you can perform by using the Team Foundation plug-in to Microsoft Project with those that require integration of the two server products. You can use the plug-in with all editions of Project 2007, Project 2010, and Project 2013. To integrate TFS and Project Server, you must install Project Professional 2007, Project Professional 2010, or Project Professional 2013.  
  
|Feature|Team Foundation plug-in to Microsoft Project|TFS and Project Server Integration|  
|-------------|--------------------------------------|----------------------------------------|  
|Directly connect to TFS, and change work items and their dependencies.|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")||  
|Initiate project planning, schedule work, and manage project calendars.|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|  
|Manage and synchronize dependency links.|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")||  
|View project status, schedule, and resource allocation.|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|  
|Work with subprojects, standard projects, and enterprise projects.|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|  
|Control the level of collaboration and synchronization.||![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|  
|View and leverage enterprise resource pools.||![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|  
|View resource allocation   across multiple enterprise project plans.||![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|  
|Leverage portfolio optimization, demand management, and reporting (features available only with Project Server)||![Advanced access](_img/aml_proj_greenfield_whitecheckmark.png "AML_Proj_GreenField_WhiteCheckmark")|  
  
##  <a name="OperationalDifferences"></a> 

Operational differences between using the Team Foundation plug-in to Project and integrating TFS with Project Server  
 The following table summarizes the operational differences between using Project to publish and refresh TFS work items and synchronizing data between TFS and Project Server.   
  
|Operational area|Team Foundation plug-in to Microsoft Project|TFS and Project Server Integration|  
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|  
|**Synchronization model**|Supports a synchronization process in which project managers can directly publish to or refresh from Team Foundation on demand.<br /><br /> -   Supports mapping a task field in Project to a field in Team Foundation.<br />-   Tasks are not bound to work items.<br />-   Project plans are bound to Team Foundation Server.|Supports a synchronization process in which project managers can control plan updates.<br /><br /> -   Publish from Project Server to Team Foundation, submit updates from Team Foundation to a status queue, and send updates to Team Foundation based on approvals or rejections made by project managers.<br />     This model is designed to support the project plan as the default master so that project managers have full control of what gets added to the project plan.<br />-   Supports mapping task and resource fields in Project to fields in Team Foundation.<br />-   After synchronization, each task in Project is bound to a work item in Team Foundation.<br />-   Project plans are mapped to projects until they are unmapped.|  
|**Publish and refresh process**|-   You manage which tasks you want to publish to or refresh from Team Foundation.<br />-   In Project, you set the **Publish and Refresh** value to **No**, **Refresh Only**, or **Yes**.<br />-   Different project plans and different tasks can synchronize to the same work item.<br />-   You can assign only one resource per task.<br />-   You can display Project fields in a work item form, and you can display Team Foundation fields in a project plan.<br />-   Updates are traced through the History field in each work item.|-   You manage which types of work items participate in data synchronization and which specific tasks or work items are synchronized.<br />-   In Project Professional, you set the **Publish to Team Project** value to **Yes** or **No**. In Team Foundation, you set the **Submit to Enterprise Project** to **Yes** or **No**.<br />-   Only one task in one project plan can synchronize to a work item.<br />-   You can assign only one resource to each task. However, the Resource field will show the rollup of resources that are assigned to child tasks.<br />-   You can display Project fields in a work item form, and you can display Team Foundation fields in a project plan.<br />-   Conflicts may require resolution. For more information, see [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md).<br />-   Provides robust traceability and history of each field and work item that was synchronized.|  
|**Rollup of work and resources**|-   In work items that contain child tasks, the values in the Remaining Work and Completed Work fields are calculated and rolled up automatically.<br />-   Hours are rolled up in Project but not in Team Foundation.<br />-   Resources are not rolled up.|-   In work items that contain child tasks and that are synchronized, the values in the Remaining Work and Completed Work fields are calculated and rolled up automatically.<br />-   Hours are rolled up in Project and Team Foundation mirror fields.<br />-   Resources and resource allocation are rolled up within Project Professional and Project Server.|  
|**Setup and configuration**|-   Requires Team Foundation Plug-in for Microsoft Project, which is installed with Visual Studio 2012.<br />-   Publish and refresh tasks based on a list of work items.<br />-   Publish and refresh all types of work items without any mapping or setup.<br />-   Control which fields get published and refreshed by customizing the mapping file for each collection.<br />-   Exert granular control over how fields are published and refreshed based on the assignment of the `PublishOnly` and `IfSummaryRefreshOnly` attributes.|-   Requires Team Foundation Server Extensions for Project Server, Project Server, and Project Professional with Team Foundation Plug-in. For more information, see [System and setup requirements](system-and-setup-requirements.md).<br />-   Configure the projects and types of work items that participate in synchronization.<br />-   Control which fields get published and refreshed by customizing the mappings for a project collection.<br />-   Exert granular control over how fields are published and updated based on the fields that are assigned to the **tfsToTarget** and **targetToTfs** elements.|  
  
##  <a name="Publishing"></a> Publishing from Project Professional versus Project  
 When you publish tasks from Project Professional, you open the **File** menu, and then you choose **Publish** to publish the project plan to Project Server. After Project Server is updated, the synchronization engine pulls data from Project Server and determines what data to update in Team Foundation based on the data that is configured for synchronization. Only those projects, work items, and fields that are configured for synchronization are updated.  
  
 When you publish tasks from Project, you choose **Publish** on the **Team** ribbon or the **Team** menu.  
  
## Related articles  
- [Synchronize TFS with Project Server](synchronize-tfs-project-server.md)
