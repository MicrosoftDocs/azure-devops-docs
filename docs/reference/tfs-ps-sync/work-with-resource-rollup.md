---
title: Work with resource rollup in enterprise projects mapped to projects
titleSuffix: TFS 
description: Work with resource rollup in enterprise projects when synchronizing data between Team Foundation Server & Project Server
ms.technology: devops-agile
ms.assetid: 72efdffb-ea99-4b89-b681-53bc1dcb2ac9
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Work with resource rollup in enterprise projects mapped to projects
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> As a project manager or resource manager, you can track work that is allocated to resources in either Microsoft Project Professional or Team Foundation. The synchronization engine for Visual Studio Team Foundation Server and Microsoft Project Server supports the flow of rollup calculations and resource data, referred to as resource rollup, between the two server products. You can view the assignment of work by resources in Project Professional or from Project Web Access or Project Web App (PWA). Regardless of the method that you use to manage your project plan, you can use resource rollup to view resource allocation and work estimates, perform resource leveling, and determine whether a resource is over-allocated within a single project or across multiple projects.  
  
> [!NOTE]
>  You can view resource rollup only for an enterprise project plan that is mapped to a project. For more information, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
 Because the two server products track work differently, you should become familiar with how data is stored and what happens when it is modified.  
 
  
##  <a name="Scenarios"></a> Supported and Unsupported Scenarios  
 By using resource rollup, project managers can perform the following operations:  
  
-   View resource allocation and work that development teams estimate.  
  
-   Perform resource leveling in Project, and create a schedule baseline.  
  
-   Determine whether a resource who is common to multiple projects in the portfolio is over-allocated.  
  
-   View progress as team members update work hours in Team Foundation.  
  
 Resource rollup does not support the following scenarios:  
  
-   Billing work based on the number of hours that a team member worked per day. Team Foundation reports the total number of hours worked per team member per task but not how many hours each team member worked per day. To provide accurate week-by-week reporting of hours worked, team members should track this by using the timesheets in Project Server.  
  
-   Tracking work per resource based on work items that are successively assigned to multiple team members.  When team members reassign a work item with actual work, Team Foundation credits the person to whom the item is assigned currently with all work that has been completed so far. To track accurately the work that each team member performed, you must create separate tasks for each team member.  
  
##  <a name="ViewingAvailability"></a> Viewing Resource Availability  
 Because Team Foundation supports resource rollup, you can view the Assignment Work by Resource report as the following illustration shows. You can access this report from the instance of PWA. For more information, see the following page on the Microsoft website: [View resource workloads and availability](http://go.microsoft.com/fwlink/?LinkId=207284).  
  
 ![Assignment of work by resource in PWA](_img/ps-tfs_pwa_asswrkavailability.png "PS-TFS_PWA_AssWrkAvailability")  
  
 Before you view work estimates or resource availability, you should publish the enterprise project plan so that Project Server has the most recent updates. For resource rollup, a two-pass sequence is required to capture the allocation of work to resources in Project Server. The following sequence of actions must occur for resource rollup data to flow completely from Team Foundation to Project Server:  
  
1.  Team members submit a parent work item with one or more child tasks to the enterprise project plan.  
  
2.  For the first status update, the synchronization engine submits an update to Project Server with an initial rollup that allocates all work to the primary task owner.  
  
3.  The project manager accepts the status update.  
  
4.  The project manager publishes the project plan.  
  
5.  For subsequent status updates, the synchronization engine submits updates that contain the complete rollup of work that is allocated to each valid user. Also, the engine submits updates for any changes to work, to assignment fields, or to the tree hierarchy for work items.  
  
6.  The project manager accepts the status update.  
  
7.  The project manager publishes the project plan.  
  
 Project Server can store resource rollup information from Team Foundation only for valid resources. For a resource to be valid, the user name must be added to the enterprise resource pool and the project resource pool, and the required permissions to submit status updates in Project Server must have been granted to the user.  
  
 When a rollup task is submitted that contains a child task whose assigned user is an invalid resource, the work for the invalid resource is allocated to the primary owner or active resource for the summary task. Status errors about assignments for unmapped child work items are logged to the parent work item. To resolve these reallocations, you must find the tasks that contain a failed submit status and resolve the issue. For more information, see [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md).  
  
##  <a name="RollupCalculations"></a> Rollup Information from Team Foundation  
 Rollup is calculated for mapped work items that contain child tasks. Mapped work items have the **Submit to Project Server** field set to **Yes**. The **Remaining Work** and **Completed Work** fields of parent tasks contain the sum of the values of these work-item fields defined for their child tasks. In addition, the synchronization engine provides a rollup of all resources that are assigned to all child tasks and their related work. The engine also stores this information in the Project Server Assignment Data field.  
  
> [!NOTE]
>  You cannot disable resource rollup or rollup calculations.  
  
 Rollup calculations obey the following rules:  
  
-   Apply only to non-mapped work items that are child items whose parents are mapped and set to be published to an enterprise project plan.  
  
-   Ignore child items that are mapped to Project tasks to avoid double-counting of work in the enterprise project plan.  
  
-   Support hierarchies of tasks that contain multiple levels of nesting, that is, parents that contain child items that contain child items.  
  
 As rollup data in Team Foundation changes, the synchronization engine creates status updates to reflect the changes.  
  
### Rollup of Work Items from Team Foundation to Tasks in Project  
 The following workflow illustrates how work items in Team Foundation roll up into tasks in Project:  
  
1.  In Team Foundation, the team lead, Peter, breaks down a requirement named Shopping Cart into 10 tasks of five hours each. He assigns four tasks to Jean-Marie and six tasks to Sanjay. The requirement is assigned to Peter.  
  
2.  In Project, the project manager, Svetlana, sees that the Shopping Cart summary task contains the following assignments:  
  
    -   one assignment for Peter without any completed or remaining work 0  
  
    -   one assignment for Jean-Marie without any completed work and 20 hours of remaining work  
  
    -   one assignment for Sanjay without any completed work and 30 hours of remaining work  
  
3.  As team members complete work, they update their data in Team Foundation. After Jean-Marie has worked six hours on her tasks and Sanjay has worked 12 hours on his tasks, Svetlana sees the following updates to assignments in Project:  
  
    -   one assignment for Peter without any completed or remaining work  
  
    -   one assignment for Jean-Marie with six hours of completed work and 14 hours of remaining work  
  
    -   one assignment for Sanjay with 12 hours of completed work and 18 hours of work remaining  
  
4.  If additional tasks are added and assigned to a new team member, the rollup of work for that person is added to the assignments in Project for the summary task.  
  
5.  If the team lead moves a child task to another parent work item in Team Foundation, any work that was associated with that child task is deleted from the assignments in the summary task in Project.  
  
6.  If the team lead reassigns a child task to another team member, the assignments are adjusted to reflect the rollup of work. Any work that a team member already performed is allocated to the team member who is currently assigned to the work item.  
  
### Primary or Active Owner for a Task or Work Item  
 You can assign only one active user to a task that is published to Team Foundation Server. However, multiple resources appear in Project for summary tasks that contain the rollup of child work items.  
  
 When you assign a **Resource** in Project to a task that you will publish to a project, you must specify a primary or active owner of the task. This information corresponds to the user name in the Assigned To field in Team Foundation.  
  
### Assigning and Reassigning Resources to Work Items and Tasks  
 After a task is linked in Team Foundation, it owns rolled-up resource assignments, which are virtually read-only in Project. In Project, you can still reassign tasks that are not rolled up.  
  
 In Team Foundation, you can assign only one person to a work item. The **Assigned To** field can contain only one person name. In Project Professional, you can assign multiple resources to a task. However, tasks that you publish to Team Foundation Server can contain only one active assignment. When you publish your project plan, the client add-in for Team Foundation verifies that only one assignment per task is defined. If multiple resources are assigned to a task, a **Validation Resolution** dialog box appears, and you must specify one resource as the active assignment. For more information, see [Resolve validation errors](resolve-validation-errors.md).  
  
 Team Foundation uses work items to implement workflow. A single work item can be assigned successively to multiple team members, and each member performs some action and completes work. If you want to bill hours based on work that each resource completes, you should have team members update their timesheets in PWA.  
  
## Related articles  
 [Overview of integration features](overview-tfs-project-server-integration.md)   
 [Synchronization process overview](synchronization-process-overview.md)   
 [Manage projects](manage-projects.md)