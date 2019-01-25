---
title: Overview of TFS-Project Server integration features 
titleSuffix: TFS 
description: Understand how to customize data synchronization between Team Foundation Server & Project Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 4ee48675-b05f-49fc-847f-bfd47398c598
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 01/12/2017
ms.topic: overview
---

# Overview of TFS-Project Server integration features  

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> How is data synchronized between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server? What are the differences in how TFS integrates with Project Server 2010 and Project Server 2013? This topic addresses these questions.  
  
##  <a name="SyncSummary"></a> Synchronization feature summary  
 The following table describes the main features that support data synchronization between Team Foundation and Project Server.  
  
|Feature|Description|  
|-------------|-----------------|  
|Three types of synchronization|[Synchronization process overview](synchronization-process-overview.md)<br /><br /> The synchronization engine performs three types of synchronization. This process captures and maintains data that relates to tasks and resources in both Team Foundation and Project Server while respecting the ownership of data by the project manager in the project plan.|  
|*n*-to-1 mapping of components|[Map components](map-project-server-components.md)<br /><br /> You control what participates in synchronization by configuring and customizing the integration of the two server products. The data synchronization engine supports an *n*-to-1 mapping from Project Server to Team Foundation. You can register multiple instances of Project Web Access or Project Web App (PWA) to Team Foundation Server and you can map multiple project collections to an instance of PWA.|  
|Tasks and work items that are synchronized|[Specify work item types](specify-wits-to-synchronize.md)<br /><br /> You can manage which types of work items participate in data synchronization and which specific tasks or work items are synchronized. In Project Professional, you set the **Publish to Team Project** value to **Yes** or **No**. In Team Foundation, you set the **Submit to Enterprise Project** to **Yes** or **No**.|  
|Data fields that are synchronized|[Customize the field mapping](customize-field-mapping-tfs-project-server.md)<br /><br /> To synchronize data between an enterprise project plan and a project, you must associate the work-item fields in Team Foundation with the fields in Project Server. You can add fields and specify how they synchronize. For example, you can share data that does not relate to schedules (such as cost centers, team names, or health status) if you add the fields that store these types of data to the mapping file.<br /><br /> You can add fields or just use the default set of fields that are required to support synchronization.|  
|Traceability, update status, submissions, and rejections|[Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md)<br /><br /> As work items and tasks are created, updated, and synchronized, a record is written to the History field for work items in Team Foundation. In addition, you can find status information in the following fields on the **Project Server** tab for each work item: Last Submit Status, Last Submitted Date, Last Approval Status, Last Approval Date.|  
|Submissions, approvals, and automatic approvals|[Top-down planning of business requirements](top-down-plan-mapped-team-project.md)<br /><br /> Updates to work items are submitted to Project Server and remain in the status update queue until you approve or reject them. As a project manager, you can define a rule to automatically approve all updates that are submitted from Team Foundation Server to Project Server.|  
|Resource rollup|[Work with resource rollup](work-with-resource-rollup.md)<br /><br /> In Team Foundation, rollup values are automatically calculated for Completed Work and Remaining Work of parent work items that contain child items. In addition, resources that are assigned to individual tasks appear as resources for the rollup of the task in Project.|  
|Conflict resolution|[Field mapping reference](field-mapping-xml-element-reference.md)<br /><br /> A conflict can occur when team members change the value of a mapped field in both Team Foundation and Project Server at the same time. You can choose whether you want to always accept the value in Project Server or to maintain two distinct values, which is referred to as maintaining "two sets of books." If you choose the latter option, data synchronization is suspended for those fields until they are assigned the same values manually.|  
|Assigning resources|[Work with resource rollup](work-with-resource-rollup.md)<br /><br /> In Team Foundation, you can assign only one resource to a work item. You can assign multiple resources to a task in Project Professional and synchronize data for that task if you assign a primary owner or active resource to the task.<br /><br /> In addition, parent tasks that contain the rollup calculations of child tasks also contain the rollup of work that are assigned to the owners of each task. This rollup of owners appears as multiple resources in Project Professional for the summary task.|  
|Mirrored fields|[Field mapping reference](field-mapping-xml-element-reference.md)<br /><br /> [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md)<br /><br /> In Team Foundation, you can store the values of Project fields and display them on the work item form. You can also find work items that contain one or more fields whose values differ from the values in the project plan.|  
  
##  <a name="OpDiff"></a> Operational differences among Project Server editions  
 The following table indicates some of the operational differences to be aware of when you integrate TFS with the various editions of Project Server.  
  
|Operational area|Project Server 2010|Project Server 2013|  
|--------------|---------------------|-------------------------|  
|Setup|You must install the Team Foundation Server Extensions for Project Server on all Web Tiers and on all App Tiers in the server farm.<br /><br /> You must install the cumulative updates or modify the web.config file.|You must install the Team Foundation Server Extensions for Project Server on all Web Tiers and on all App Tiers in the server farm.|  
|Security|See [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).|See [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).|  
|Authentication|Instance of PWA must be set to **Classic Mode Authentication**.|Instance of PWA can be set to either **Classic Mode Authentication** or **Claims Based Authentication**.|  
|Security mode|You manage Project Server security through customizable security groups and other functionality that is distinct from SharePoint groups.|You can choose between SharePoint or Project Server Permission Modes to control user access to sites and projects. To learn more, see [Plan user access in Project Server 2013](http://go.microsoft.com/fwlink/?LinkId=262117).|  
|Approval comments|Approval comments that the project manager specifies in PWA are recorded in the History field for the work item.|Approval comments that the project manager specifies in PWA are recorded in the History field for the work item.|  
|Automatic approvals|You can automatically approve changes that occur when data is synchronized.|You can automatically approve changes that occur when data is synchronized.|  
|SharePoint tasks list|Not applicable.|Projects that synchronize with TFS must be configured as an Enterprise Project and not as a SharePoint tasks list.|  
  
## Related articles  
 [Synchronization process overview](synchronization-process-overview.md)   
 [Manage projects](manage-projects.md)