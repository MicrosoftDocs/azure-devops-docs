---
title: Understand how updates to specific fields are managed 
titleSuffix: TFS 
description: Understand how updates to specific fields are managed betweenTeam Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 67f9887f-f023-4e3e-8873-fb3f1854438f
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Understand how updates to specific fields are managed
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> You should review this topic if one or more fields are not synchronizing as you expect between Visual Studio Team Foundation Server and Microsoft Project Server. The data type of the affected field or fields, the `OnConflict` field mapping attribute, and task hierarchy affect how the synchronization engine updates specific fields. Tasks will not update correctly if the project manager rejects one or more submission updates or if the project plan was not published. If the plan was not published, nested child work items cannot flow into the approval queue.  
  
 
  
##  <a name="overview"></a> Overview of the Update Field Process  
 As the following illustration shows, data moves from Project Server, to Team Foundation Server, to the status queue in an instance of PWA, to the enterprise project plan, and finally back to Project Server. The following table provides additional notes about the synchronization process and how fields are updated during each step of the process.  
  
> [!IMPORTANT]
>  When a work item or task has been scheduled to participate in synchronization, you cannot remove it from synchronization except by deleting the task from the project plan. You cannot modify the **Publish to Team Project** value that is assigned to a task, and you cannot change the **Submit to Project Server** field in Team Foundation. Also, you cannot change a task to a different type of work item after it has been published to or submitted from Team Foundation Server.  
  
 ![Updates to Mapped and Mirror Fields](_img/tfs-ps_fieldupdates.png "TFS-PS_FieldUpdates")  
  
|Step|Synchronization   process|Field updates|  
|----------|-------------------------------|-------------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|**Team Foundation synchronization**: The synchronization engine automatically detects additions and changes that were published to Project Server and pulls those updates into Team Foundation Server.|Only fields that are mapped from Project Server to Team Foundation Server (`targetToTfs` mapping) are updated in this step. The synchronization engine always updates the mirror field but updates the reference field only when the `OnConflict` attribute is set to `PSWin`. However, when a task is published to Project Server for the first time, both the reference field and the mirror field are set, regardless of the value to which the `OnConflict` attribute was assigned. Mirror fields are read-only.<br /><br /> By default, the `OnConflict` attribute is unspecified for the Remaining Work and Completed Work fields, which allows the mapped fields to differ between Team Foundation Server and Project Server. For more information, see [Updates to Fields that Contain Hours](#updates_hours) later in this topic.|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|**Status synchronization**: As team members add or modify work items that are set to Submit to Project Server, the synchronization engine automatically submits updates to the status queue.|Only fields that are mapped for submission to the status queue (`tfsToTarget` mapping) are submitted.<br /><br /> Changes to start and end dates are submitted only when the work item is submitted for the first time. Because fields in Team Foundation map to resource fields in Project, updates are made to resource fields such as Resource Remaining Work and Resource Completed Work.|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|**Approval synchronization**: When an update is approved, it appears within the enterprise project plan. Notification of approval or rejection is written to the work item history in Team Foundation.|The Team Foundation Add-in for Project Professional ensures correct synchronization of the values for the pjTask* fields and pjResource\* fields. Therefore, you must use Project Professional from a client computer on which Visual Studio 2013 or Team Explorer 2013 has been installed to edit your enterprise project plans that are mapped to a project.|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|**Publish synchronization**: When the project manager publishes the project plan, the updates are written to Project Server.|Changes to all tasks in the project plan are updated in Project Server.|  
  
 For more information, see the following topics:  
  
-   [Synchronization process overview](synchronization-process-overview.md)  
  
-   [Customize the field mapping](customize-field-mapping-tfs-project-server.md)  
  
-   [Field mapping reference](field-mapping-xml-element-reference.md)  
  
-   [Restrictions on mapping fields](restrictions-mapping-ps-fields.md)  
  
##  <a name="rejections"></a> Rejected Submission Updates  
 When a project manager rejects a status update to either a requirement or a task, the corresponding work item is no longer synchronized until the rejection is resolved. The reason for the rejection appears in the **History** field, and the **Last Approval Status** field on the **Project Server** tab indicates **Rejected**. A team member must address the rejection status to resume synchronization of the work item.  
  
 You can create a team query to find work items whose update status was rejected. For more information, see [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md).  
  
##  <a name="updates_title"></a> Updates to Title or Task Names  
 The Title field in Team Foundation Server and the task Name in Project Server participate in a two-way synchronization process. In other words, a change in one server is always updated in the other server. However, you can change this behavior if you change the mapping for the Title (System.Title) field.  
  
##  <a name="updates_dates"></a> Updates to Start and Finish Dates  
 Scheduling fields participate in a one-way synchronization process. In other words, Start Date and Finish Date fields in Team Foundation Server always reflect the values that were assigned in Project Server, and changes that are made to these fields in Team Foundation Server are never submitted to Project Server. This rule is enforced because Project uses a scheduling engine to determine the start and finish dates of tasks.  
  
 By default, Start Date and Finish Date fields are mapped with `OnConflict="PSWin"`, which cause the date fields in Team Foundation to always reflect the values that are assigned in Project Server. Even if you change the mapping attribute to allow for two sets of books, changes to the date fields in Team Foundation are not submitted to Project Server, except when the work item is submitted for the first time. After the first synchronization event, these fields reflect updates that were made to the project plan.  
  
##  <a name="updates_hours"></a> Updates to Fields that Contain Hours  
 By default, the Completed Hours and Remaining Hours fields participate in a synchronization process that maintains two sets of books. Changes to hours can occur in either the project plan or Team Foundation. However, changes do not necessarily overwrite information in either location. An undefined `OnConflict` attribute for mapping fields enforces this feature.  
  
 As indicated in the following scenarios below, the fields are updated based on who is making the updates and whether the updates are accepted into the project plan.  
  
-   When a team member updates hours and the project manager approves the submissions and publishes the plan, both reference and mirror fields will match with the next synchronization of Team Foundation Server.  
  
-   When a team member updates hours and the project manager rejects the submissions, the updates are not accepted into the project plan. The values for the reference field and mirror field will differ.  
  
-   When a project manager changes the hours in the project plan, only the mirror field is updated with the next synchronization of Team Foundation Server.  
  
 When task hours vary between the two server products, the team lead and project manager are expected to reconcile the differences. In this manner, each person can update their work independently while staying aware of changes that the other made. For information about how to find fields whose values do not match their mirror fields, see [Find Work Items Where the Work in Team Foundation Differs from that in Project Server](monitor-submissions-resolve-rejections.md#FindDiffWorkWIs).  
  
 Whenever a project manager sets a baseline, the value of the **Original Estimate** field in Team Foundation is set or updated, as the following illustration shows. By default, this field is mapped to the `OnConflict="PSWin"` attribute.  
  
 ![Work estimates](_img/tfs-ps_te_detailedplan_originalestimate.png "TFS-PS_TE_DetailedPlan_OriginalEstimate")  
  
> [!NOTE]
>  Because the Visual Studio Scrum process template does not use the Completed Work and Original Estimate fields, you must add these fields to the types of work items that you want to participate in data synchronization. Also, you must modify the task type definition to remove the `<EMPTY />` workflow statements.  For more information, see [Required Changes to Make When Mapping to a Team Project That Was Created From the Scrum Process Template](customize-field-mapping-tfs-project-server.md#scrummodifications).  
  
##  <a name="updates_names"></a> Updates to the Assignment or Resource Name Fields  
 The Assigned To field in Team Foundation maps to the Resource Name field in Project Server. By default, this field is mapped to the `OnConflict="PSWin"` attribute. When you assign resources to tasks in the enterprise project plan, consider the following rules:  
  
-   The synchronization engine does not synchronize resource information between both server products. By default, Team Foundation Server synchronizes its resources from Active Directory, but Project Server does not. You can add resources manually in Project Server or, as a best practice, synchronize resources with Active Directory. To assign a resource to a task in an enterprise project plan that participates in synchronization with Team Foundation Server, you must add the resource to Project Server. You add a resource by adding it to the Team Members group in the instance of PWA, or you grant the resource the Open Project and View Project Site permissions in Project. You must also add the resource to the resource list for the enterprise project plan and then publish the project plan for the synchronization engine to have access to the updated resource list. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
-   If you are managing project details, assign only one resource to each task. If the task requires multiple resources, divide it into subtasks, and assign one resource to each subtask.  
  
     If you are managing the business requirements only through top-down planning, assign each user story or requirement to the development lead.  
  
     When you publish your project plan, the client add-in for Team Foundation verifies that only one resource has been assigned to each task. If multiple resources have been assigned to a task, a **Validation Resolution** dialog box appears, and you must specify only one resource as the active assignment. For more information, see [Resolve validation errors](resolve-validation-errors.md).  
  
-   After a task is linked or mapped to a work item, you can assign or reassign resources only to tasks that are not rolled up. A rolled-up task is associated with a work item that contains child work items that are not linked. Usually, rolled-up tasks contain multiple names in the Resource Name field. The synchronization engine transmits the rollup of resources and the number of hours that each resource worked. For more information, see [Work with resource rollup](work-with-resource-rollup.md).  
  
##  <a name="updates_nested_tasks"></a> Summary Tasks, Task Hierarchy, and Submissions of Work Items that Are Nested at Multiple Levels  
 By design, the synchronization engine does not update Project fields for linked tasks that have subtasks in the enterprise project plan. The synchronization process skips updates of these tasks because the project plan calculates the work for them. Changes to the title and other non-work fields are also not updated for these tasks. This behavior is a known limitation of the integration of the two server products.  
  
 When a project manager publishes a detailed set of tasks that include requirements and linked tasks to Team Foundation Server, the synchronization engine locks the task hierarchy. Team members cannot modify the task hierarchy in Team Foundation, but they can reassign tasks to team members in the project. As the following illustration shows, tasks are listed under their requirements, and the hierarchical links between parent and children tasks are locked (![Locked link icon](_img/icon_lockedlink.png "Icon_lockedLink")). The locked links indicate that the requirements and child tasks have been added to a project from Project Server. Only the project manager from the project plan can modify the task hierarchy.  
  
 ![Work breakdown schedule in Team Explorer](_img/tfs-ps_te_detailedplan_workbreakdown.png "TFS-PS_TE_DetailedPlan_WorkBreakdown")  
  
 When a team submits multiple levels of work items from Team Foundation to Project Server, the first level must be approved and published to Project Server before the next level can be submitted. If a team submits a batch of new work items that includes three levels of child items, for example, the project manager must publish the project plan four times for all work items to be synchronized with Project Server. As the project manager approves each level of work items and publishes them to Project Server, the hierarchical link relationships are locked in Team Foundation until the entire link hierarchy is locked. Team members cannot modify the hierarchy for these mapped work items.  
  
##  <a name="updates_fields_tables"></a> Updates to Fields that Are Associated with Pick Lists or Lookup Tables  
 When you map Team Foundation Server fields that are associated with a pick list or Project Server fields that are associated with a lookup table, you must consider additional steps to ensure a good user experience. The synchronization engine does not automatically create the counterpart associated lists or synchronize their allowed values in the other server. As a best practice, you should create lookup tables in Project Server to match the pick lists that are defined in Team Foundation and create pick lists in Team Foundation to match lookup tables that are defined in Project Server. If a pick list or lookup table changes, you must always manually update the corresponding list in the other server product.  
  
## Related articles  
 [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md)   
 [Manage projects](manage-projects.md)   
 [Customize the field mapping](customize-field-mapping-tfs-project-server.md)