---
title: TFS-Project Server synchronization process overview 
titleSuffix: TFS 
description: Understand how the synchronization engine manages the flow of data between Team Foundation Server & Project Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: a34c054a-1361-43ce-962e-bf29ce04ffb2
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 04/05/2017
ms.topic: overview
---

# Synchronization process overview for TFS-Project Server integration

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

You can manage the integration of Visual Studio Team Foundation Server 2013 and Microsoft Project Server more effectively if you understand how the synchronization engine manages the flow of data between the two server products. The synchronization engine supports the independent workflows of project managers who work in Project Professional and team leads and team members who work in Team Foundation. Deliverables and tasks can evolve independently in each area.  

 
##  <a name="Three-WaySync"></a> Three types of synchronization  
 The synchronization engine performs three types of synchronization. This process captures and updates task-related and resource-related data in both TFS and Project Server while respecting the ownership of data by the project manager in the project plan. Project managers make changes by using Microsoft Project Professional and approve updates through Project Web Access or Project Web App (PWA). Development team members submit updates to Project Server by using a client of Team Foundation.  
  
 As the following illustration shows, data synchronization consists of seven main steps.  
  
 ![PS&#45;TFS Synchronization process](_img/pstfs_syncprocess.png "PSTFS_SyncProcess")  
Synchronization Process for Team Foundation Server and Project Server Integration  
  
 The synchronization engine consists of a single job service that runs on a regular schedule and not when each work item is updated. The synchronization job performs the following three processes in the order indicated:  
  

<table>
<tbody valign="top">
<tr>
<td>**Publish synchronization**:</td>
<td>![Step 1](_img/procguid_1.png "ProcGuid_1") A project manager defines or updates tasks or deliverables and sets the **Publish to Team Project** value to **Yes** for each task that they want to synchronize.<br /><br /> ![Step 2](_img/procguid_2.png "ProcGuid_2") The project manager publishes the enterprise project plan by using Microsoft Project Professional. Changes are automatically saved to the database for Project Server.<br /><br /> ![Step 3](_img/procguid_3.png "ProcGuid_3") The synchronization engine pulls data from Project Server and determines what data to update based on the data that is configured for synchronization. Only those objects, tasks, and work items that are configured for synchronization are updated.<br /><br /> ![Step 4](_img/procguid_4.png "ProcGuid_4") The synchronization engine either creates or updates work items in Team Foundation and defines a link that binds the task in Project to the work item in Team Foundation.</td>
</tr>
<tr>
<td>**Status synchronization**::</td>
<td>![Step 5](_img/procguid_5.png "ProcGuid_5") A team lead or team member either modifies a work item in Team Foundation that is linked to a task in an enterprise project or creates a work item and sets the **Submit to Project Server** value to **Yes**. The synchronization engine queries the changes that are made for mapped projects and sends requests to the approval queue or queues in Project Web Access or Project Web App (PWA).</td>
</tr>
<tr>
<td>**Approval synchronization**:</td>
<td>![Step 6](_img/procguid_6.png "ProcGuid_6") Each project manager reviews their approval queue and either approves or rejects each status update request.<br /><br /> After updates are approved, the project manager must publish the project plan before the updates will appear in Project Server. **Important:**  When the synchronization engine submits multiple levels of work items to Project Server, the first level must be approved and published to Project Server before the next level can be submitted. For example, you can submit a batch of new work items that includes three levels of child items. In that case, the project manager must publish the project plan four times for all work items to be synchronized with Project Server. <br /><br /> ![Step 7](_img/procguid_7.png "ProcGuid_7") The event handler for approvals in Project Server transmits the approval decisions to the synchronization engine, which then updates the work items in Team Foundation Server based on the approval status.</td>
</tr>
</tbody>
</table>


  
   
### Managing approvals and rejections  
 All changes to work items that are linked to Project Server must be submitted for approval to the project manager of the enterprise project plan that is mapped to the project. You can set up automatic approval so that all updates from Team Foundation are automatically approved. For more information, see [Approve or reject task updates](http://go.microsoft.com/fwlink/?LinkId=203361).  
  
 Approved work items typically get rolled back into the enterprise project plan. Rejected work items require resolution and resubmission.  
  
 For rejected updates, a message appears in the History field for the work item. The message indicates the value that was rejected and who rejected it. For projects that map to project plans that are hosted on Project Server 2010, the message also contains any comments that the project manager provided about why the item was rejected. Team members must either reconcile the work item and resubmit it or remove it from being submitted to the enterprise project. Also, team members can create a work item query that finds all rejected items based on the **Project Server Last Submit Status**. For more information, see [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md).  
  
### Synchronization and retry intervals  
 Data synchronization occurs on a schedule and not when each work item is updated. The synchronization job service runs every 30 seconds. During that time, it queries for the relevant work items and fields that have been modified in Project Server or Team Foundation Server or that the project manager has approved.  
  
 Every hour, the synchronization engine resubmits work items that failed to update previously. For more information, see [Change the retry or resubmit interval](change-synchronization-retry-or-resubmit-interval.md).  
  
 
  
##  <a name="DataSynced"></a> Data that is subject to synchronization  
 Two levels of configuration determine which objects can participate in synchronization and what data becomes synchronized. Administrators for Team Foundation perform several levels of mapping to configure the objects that can participate in synchronization. At the second level, project managers and users of Team Foundation control which specific tasks and work items are synchronized.  
  
  
### Objects that are configured to participate in synchronization  
 The following configurations determine which objects participate in the synchronization process. Administrators for Team Foundation generally perform these configurations. However, project managers may also map their enterprise project plans to projects.  
  
-   **PWA Instance That Is Mapped to a Team Project Collection**: This mapping configures the project collection to support synchronization and determines which instances of PWA can synchronize with a collection.  
  
-   **Enterprise Project Plan That Is Mapped to a Team Project**: This mapping configures both the enterprise project plan and the project to participate in synchronization. This mapping also determines which enterprise projects can synchronize with a project.  
  
-   **Work Item Types That Are Mapped for Synchronization**: When you map an enterprise project plan to a project, you specify the types of work items that can be synchronized. This mapping adds the **Project Server** tab to the work item form and adds validation rules for each work item type to the enterprise project plan.  
  
-   **Work Item Fields That Are Mapped to Project Server Fields**: By default, the synchronization engine synchronizes the following fields in Team Foundation: Title, Assigned To, Completed Work, Remaining Work, Original Estimate, Start Date, and End Date. You can add fields and set parameters that determine how fields synchronize. For example, you can determine which fields appear on the work item form and whether to allow separate values for a specific field.  
  
 For more information, see [Map components](map-project-server-components.md) and [Specify work item types](specify-wits-to-synchronize.md).  
  
### Individual task and work items that are configured for synchronization  
 Project managers determine the tasks in an enterprise project plan that they want to publish to TFS. Team members determine the work items in a project that they want to submit to Project Server. Project managers can publish detailed breakdowns of deliverables and tasks to TFS or publish and manage only summary task elements. Some restrictions apply to the publishing of subordinate tasks or parent-child work items, as [Data Validation Performed During Updates and Upon Submission](#DataValidation) describes later in this topic.  
  
 For more information, see [Manage project details](manage-project-details.md) and [Top-down planning of business requirements](top-down-plan-mapped-team-project.md).  
  
> [!NOTE]
>  You can map multiple enterprise project plans to one project, but you can map or link only one task in a project plan to a work item in Team Foundation. Each task in an enterprise project plan is distinct in Project Server. Tasks that are submitted to Project Server update only one work item in Team Foundation. Also, work items that are created in Team Foundation and submitted to Project Server update only one enterprise project plan.  
  
<a name="DataValidation"></a> 

##  Data validation performed during updates and upon submission  
 The synchronization process validates tasks and work items that have been tagged for synchronization before they are published to Project Server. Data validation is enforced in both the enterprise project plan and the project.  
  
### When project managers publish an enterprise project plan  
 When a project manager who is working in Project Professional publishes an enterprise project plan that is mapped to a project, specific validation checks are performed. The Team Foundation add-in performs the following validation checks on those tasks that are set to publish to Team Foundation (that is, **Publish to Team Project=Yes**):  
  
-   The value that is set for the **Work Item Type** field must match a type of work item that has been configured to participate in synchronization for the target project.  
  
    > [!IMPORTANT]
    >  **Text30** is the default Project field that is associated with the **Work Item Type** column that is used in synchronizing tasks with work items. If you ever connect the project plan to Team Foundation Server by using the **Choose Team Project** option on the Team ribbon menu, an additional Project field, which is also labeled **Work Item Type**, becomes available. This field, with a default Project field of Text24, supports mapping of project plans that are bound to Team Foundation but does not support synchronizing plans. The Text24-based field contains the full list of work item types for the project. You can verify whether you have the correct field by pointing to it and verifying that **Text30** appears.  
  
-   All values for mapped Project fields must pass specific checks to make sure that their values do not violate a rule that was set for the target work item type. These rules are added to the enterprise project plan when it is mapped to a project.  
  
-   After a task is published, the values that are set for **Publish to Team Project** and **Work Item Type** cannot change. If you do not want to continue to synchronize a task, you must delete it.  
  
-   If a task and one of its subordinate tasks are both marked for synchronization, all tasks between them must also be marked for synchronization.  
  
-   The value of the **Resource Name** field for a task must match the name of a valid contributor for the target project.  
  
-   If multiple resources are assigned to the same task, only one resource assignment must be selected as active. For more information, see [Make Agile team progress visible](make-agile-team-progress-visible-to-the-pmo.md).  
  
-   All values must conform to the rules that Project Server applies to the specific field definition. For example, an error can occur if you assign a value to a mapped field that is associated with a look-up table but that is not in the look-up table.  
  
 The **Validation Resolution** dialog box appears whenever one or more rules are violated. Project managers must resolve each error before publishing the changes.  
  
### When developers submit new or updated work items from Team Foundation  
 When a developer who is working in Team Foundation creates or updates a work item and saves the changes, the following validation checks are performed on those work items that are set to publish to Project Server (that is, **Submit to Project Server=Yes**):  
  
-   The value of the **Assigned To** field must correspond to a team member who also has been added to the enterprise resource pool and the project resources in the project plan. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
-   If only one enterprise project plan is mapped to a project, its name automatically appears for the **Enterprise Project** field on the **Project Server** tab for newly created work items.  
  
-   If more than one enterprise project is mapped to the project, you must specify a value for the **Enterprise Project** field for new work items that are created and whose **Submit to Project Server** value is set to **Yes**.  
  
-   You cannot change the hierarchical structure of work items after they have been linked to Project tasks. For more information, see [Summary Tasks, Task Hierarchy, and Submissions of Work Items that Are Nested at Multiple Levels](understand-how-updates-to-specific-fields-managed.md#updates_nested_tasks).  
  
-   Rules that have been added to a mapped work item type can result in validation errors when you publish the project plan. For example, a conditional rule can restrict what values users can assign to a field. For more information, see [Apply a field rule](../../reference/xml/apply-rule-work-item-field.md).  
  
-   Basic rules, such as lookup tables, that correspond to definitions of fields in Project Server can cause errors during status synchronization. For example, an error will result if you use a lookup table to define valid values for a field in Project, map that field to a field in Team Foundation, and then set the field in Team Foundation to a value that is not in the lookup table.  
  
 After a work item is published to Project Server, the item is bound to a task in the target enterprise project plan. This binding is also referred to as a link. The links are locked during synchronization. To remove the link, you must delete the corresponding task in Project, or you must use the `/force` option when you remove the mapping of the project plan or work item type. For more information, see [Remove a component](remove-component-from-synchronization.md).  
  
  
<a name="ConflictResolution"></a> 

##  Mirror fields and "Two Sets of Books"    
 Because the synchronization engine performs three types of synchronization and communicates with two databases in a scheduled negotiation, no data merging occurs. Instead, data synchronization occurs in a two-step sequence, and the engine allows for divergence between the two products. For each synchronized field in Team Foundation, you define a mirror field that stores the value in Project Server for the corresponding mapped field. During regular synchronization operations, the values for the two fields will differ from the time when a value is updated in Team Foundation Server until the project manager approves the update and publishes the project plan.  
  
 For each field that you map, you specify one of the following choices for how you want the synchronization engine to update the reference field in Team Foundation:  
  
-   Always update the reference field in Team Foundation Server with the value from Project Server (`PSWins`).  
  
-   Allow the value for the reference field in Team Foundation Server to differ from the value assigned in Project Server. This strategy is referred to as "two sets of books".    
  
     When you maintain two sets of books, you can create a query to find those work items where the two values differ. For more information, see [Understand how updates to specific fields are managed](understand-how-updates-to-specific-fields-managed.md) and [Find Work Items Where the Work in Team Foundation Differs from that in Project Server](monitor-submissions-resolve-rejections.md#FindDiffWorkWIs).  
  
 For more information, see [Field mapping reference](field-mapping-xml-element-reference.md).  
  
<a name="PermissionsRequired"></a>
## Permissions that are required to support synchronization  
 For data to be synchronized between Team Foundation Server and Project Server, the following permissions must be granted:  
  
-   For Project Server 2010, you must grant Full Control permissions to the service account under which the TfsJobAgent runs so that the Project Server Service Application can be accessed. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
-   You must grant the service account under which the TfsJobAgent runs the permissions that are required to access each mapped instance of PWA.  
  
-   Users who are assigned to tasks in Project Professional or work items in Team Foundation must be recognized as Contributors in the project. Those users must also be recognized as resources of the enterprise project plan and granted permission to sign in to the instances of PWA that participate in the synchronization process.  
  
 For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
<a name="ErrorNotification"></a>   
##  Error notification, event logging, and traceability  
 The synchronization engine processes project updates that are published to Project Server, then status updates, and then approval updates. When you publish, you update Project Server, adding tasks and task details to the enterprise project plan. Publishing synchronization pulls the data from Project Server into Team Foundation Server. Status synchronization pulls data from Team Foundation to update the project manager's approval queue, and approval synchronization publishes updates on fields such as remaining work and completed work to Project Server, which initiates a new cycle of synchronization.  
  
 Each type of synchronization enables the display of relevant status and error messages to the project manager in either Project Professional or the instance of PWA. Also, status and error messages that are associated with the synchronization engine and its configuration can also be written to the appropriate administration interfaces for Team Foundation Server and Project Server.  
  
 Project managers, team members, and administrators can all view and diagnose synchronization-related messages as they occur. Messages are written to the following locations:  
  
-   In Project Professional, the status bar in the enterprise project plan shows publishing progress.  
  
-   In the instance of PWA, the Approval Center shows the queue of updated tasks.  
  
-   In the work item form for Team Foundation, the **Project Server** tab indicates the status and time when the work item was synchronized most recently.  
  
-   In the work item form for Team Foundation, the History field records synchronization status and error messages after each update of the work item. When you integrate with Project Server 2010, comments that project managers write when they approve or reject a status update are also recorded in the History field.  
  
-   The event log for the application-tier server that participates in the data synchronization maintains a record of all synchronization events and errors.  

 Administrators can retrieve the most recent event messages by using the `TfsAdmin ProjectServer /GetSyncMessages` command. For more information, see [View error messages](view-synch-error-messages.md). To gather even more detailed information, you can enable detailed tracing for the Team Foundation Background Job Agent that runs the services. For more information, see [Team Foundation Background Job Agent](/azure/devops/server/architecture/background-job-agent).  
  
  
## Related articles  
-  [Manage projects](manage-projects.md)   
-  [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)