---
title: Manage projects using TFS-Project Server integration
titleSuffix: TFS 
description: Understand how to manage projects when synchronizing data between Team Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: e5cf789c-2edb-4d84-aecd-f4d09fc854da
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Manage projects using TFS-Project Server integration

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> 
Project managers and software development teams can use the tools they prefer, work at the granularity that supports their needs, and share information transparently between Visual Studio Team Foundation Server and Microsoft Project Server. When the two server products are configured, the synchronization engine maintains scheduling data and resource usage for the configured data in the mapped enterprise project plan and the project.  
  
 The integration of the two server products provides flexibility in how projects are managed. As a project manager, you can manage your project by using one or a combination of the following three methods:  
  
-   **Define and track deliverables**. You define the requirements and features to be delivered, and the development team defines the implementation tasks. For more information, see [Top-down planning of business requirements](top-down-plan-mapped-team-project.md).  
  
-   **Define and track both deliverables and tasks**. You define the project details, and the development team reports status updates. For more information, see [Manage project details](manage-project-details.md).  
  
-   **Review progress of agile teams**. You review progress of work submitted to Project Server, and the development team manages both project deliverables and tasks. For more information, see [Make Agile team progress visible](make-agile-team-progress-visible-to-the-pmo.md).  
  
 For each of these methods, resource managers can accurately plan and manage resources, project managers can balance workload across resources for multiple software projects, and the program management office (PMO) can view up-to-date status and track the overall health of the software portfolio that is under development. In addition, business analysts have access to quality metrics over time.  
  
> [!IMPORTANT]
>  This topic applies to Microsoft Project Professional 2007, Project Professional 2010, or Project Professional 2013 from a client computer that has Visual Studio 2013 installed. Also, the integration of Visual Studio Team Foundation Server 2013 and Project Server [must be configured](system-and-setup-requirements.md).  
>   
>  You can manage work items in Team Foundation by using Microsoft Project or Project Professional if you use the Team Foundation plug-in as [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md) describes. The plug-in connects a project plan to a project but does not synchronize work items. This plug-in is disabled when an enterprise project plan is mapped to a project. For more information about how to manage work items by using Project, see [Operational differences in managing projects using TFS and Project](operational-differences.md).  
  
##  <a name="TasksToManage"></a> Tasks for project managers to manage projects and track progress  
  
|Task|Related topic|  
|----------|-------------------|  
|**Define deliverables**. You can define business requirements and specific deliverables, and you can leave the definition of specific tasks to the development team. You can view the rollup of resources and effort, and you can view the impact to the schedule as the development team defines, estimates, and updates its detailed tasks.|[Top-down planning of business requirements](top-down-plan-mapped-team-project.md)|  
|**Define both deliverables and tasks**. You can manage both business requirements and implementation tasks. You can manage your workflow independent of the development team while you stay informed as work progresses.|[Manage project details](manage-project-details.md)|  
|**Review progress of agile teams**. You can view work progress and resource usage as the agile development team manages the definition and schedule of user stories and tasks. You and the PMO can view schedules, progress on user stories, and rollup of resources.|[Make Agile team progress visible](make-agile-team-progress-visible-to-the-pmo.md)|  
|**Review how fields are updated**. If you suspect that the synchronization engine is not working as expected, you should verify how specific fields are updated. The data type of the affected field or fields, the `OnConflict` attribute for mapping fields, and the task hierarchy affect how the synchronization engine updates specific fields. Tasks will not update correctly if the project manager rejects one or more submission updates or if the project plan was not published.|[Understand how updates to specific fields are managed](understand-how-updates-to-specific-fields-managed.md)|  
|**Assign resources and view resource utilization**. When the development team breaks down requirements and tasks into child tasks, as a project manager, you can see the rollup of work and resources. You can use resource rollup to view resource allocation and work estimates, perform resource leveling, and determine whether a common resource to multiple projects is over-allocated.|[Work with resource rollup](work-with-resource-rollup.md)|  
|**Resolve errors when you publish tasks to Team Foundation Server**. You must resolve all data validation errors that may occur when you publish an enterprise project plan that is mapped to a project. A data validation error occurs if you define a value that violates a rule that is defined for the work item type that is associated with the task.|[Resolve validation errors](resolve-validation-errors.md)|  
  
##  <a name="TasksForDevTeams"></a> Tasks for development leads and teams  
  
|Task|Related topic|  
|----------|-------------------|  
|**Review deliverables, define tasks, and estimate work**. For each deliverable that is submitted to Project Server, you define and estimate the tasks that are required to implement the deliverable. As work progresses, team members update their task hours, which are automatically submitted to Project Server and the project manager for review.|[Top-down planning of business requirements](top-down-plan-mapped-team-project.md)|  
|**Review work breakdown and update work**. As a development lead, you can use the backlog and board pages or the Work Breakdown query to review the work items that a project manager submits. As work progresses, team members update their task hours, which are automatically submitted to Project Server and the project manager for review.|[Manage project details](manage-project-details.md)|  
|**Define and submit user stories to Project Server**. As a development lead, you provide visibility into the project schedule and resource utilization if you set the **Project Server Submit** field to **Yes** for those user stories on which your team is working. You can set the value of this field quickly using the bulk edit feature of the TFS web portal or opening the Product Backlog query in Excel.|[Make Agile team progress visible](make-agile-team-progress-visible-to-the-pmo.md)|  
|**Find and address rejected work item submissions**. When the project manager rejects an update to a work item, you must address the reason for the rejection and resubmit it to Project Server. Until you resubmit the update, the work item can no longer participate in data synchronization.|[Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md)|  
|**Remove tasks and work items that no longer need to be tracked**. When you delete a task from your project plan that has been synchronized with a work item in Team Foundation, you remove the association between the task and the work item. This removal occurs after you publish the plan to Project Server and the synchronization process completes updating the published changes. However, you must use the **witadmin destroywi** command to permanently remove the work items from the project|[Remove items that aren't synchronizing](remove-items-not-synching.md)|  
  
##  <a name="TasksToConfigure"></a> Tasks to configure, map, and customize data synchronization  
  
|Task|Related topics|  
|----------|--------------------|  
|**Obtain permission to map your enterprise project plans to a project**. To map your project plans, you must have the **Administer Project Server integration** permission for a project collection that is assigned to you.|[Assign permissions](assign-permissions-support-tfs-project-server-integration.md)|  
|**Map an enterprise project plan to a project**. To support synchronization of data between an enterprise project plan and a project, you must map the plan to the project. You can map multiple plans to the same project, but you cannot map one plan to multiple projects.|[Associate enterprise projects and projects](manage-associations-enterprise-projects.md)|  
|**Add or remove a work item type from participating in data synchronization**. You can define the types of work items when you associate a project plan to a project, and you can later add or remove types. You can also list the types of work items that are mapped for a project.|[Specify work item types](specify-wits-to-synchronize.md)|  
|**Add fields to or remove fields from participating in data synchronization**. You can add fields and specify how they synchronize by customizing the field mapping file. For example, you can share data that does not relate to schedules (such as cost centers, team names, or health status) if you add the fields that store these types of data to the mapping file.<br /><br /> You can map fields that are associated with pick lists in Team Foundation. However, you must create lookup tables in Project Server to match the pick lists. You cannot automatically synchronize pick lists and lookup tables.|[Customize the field mapping](customize-field-mapping-tfs-project-server.md)|  
|**Change the configuration for synchronization**. You can remove components that you have configured to participate in data synchronization. However, you should always follow the recommended reconfiguration sequence when you remove such components.|[Remove a component](remove-component-from-synchronization.md)|  
|**Add project members to the enterprise resource pools**. To assign and manage Team Foundation users as resources in Project, you must add them to the enterprise resource pool. To make this process easier, you can configure Project Server to automatically synchronize the security groups with groups that have the same name in Active Directory. Also, you can synchronize users and resources in Project Server with the users in Active Directory across multiple domains and forests.|See the following pages on the Microsoft website:<br /><br /> -   [Add resources to the enterprise resource pool](http://go.microsoft.com/fwlink/?LinkId=203356) (Project Server 2010)<br />-   [Active Directory Resource Pool Synchronization (Project Server 2013)](http://msdn.microsoft.com/library/jj819320.aspx)<br />-   [Manage users, groups, and categories in Project Server 2013](http://msdn.microsoft.com/library/cc197571.aspx)|  
  
## Related articles  
 [Overview of integration features](overview-tfs-project-server-integration.md)   
 [Synchronization process overview](synchronization-process-overview.md)   
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)