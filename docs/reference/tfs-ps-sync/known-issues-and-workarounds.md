---
title: Known issues and workarounds to support TFS-Project Server integration
titleSuffix: TFS 
description: Workaround known issues with the integration of Team Foundation Server & Project Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 45423e0a-63f7-4fc4-8319-9344a43abed3
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: troubleshooting
ms.date: 01/12/2017
---

# Known issues and workarounds to support TFS-Project Server integration

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> This topic describes known issues with the integration between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server. To support this integration, you must have installed Team Foundation Server Extensions for Project Server on the App Tiers for Project Server. For more information, see [System and setup requirements](system-and-setup-requirements.md).  
  
 You can resolve most issues by performing the recommended actions.  
  
> [!NOTE]
>  For more information, see the following forum post on the Microsoft website: [Team Foundation Server and Project Server Integration](http://go.microsoft.com/fwlink/?LinkId=207282).  
  
##  <a name="summary"></a> Summary tasks with mapped child tasks are not updated in the project plan  
 By design, Team Foundation Server (TFS) does not update the Project fields for summary tasks, that is, tasks that have subtasks that are mapped to work items in TFS. The synchronization process skips updates of summary tasks because the project plan calculates the work on summary tasks. Changes to non-work fields, such as Title, are also not updated for summary tasks. This behavior is a known limitation of the integration of the two server products.  
  
##  <a name="empty"></a> Remaining Work Field Must Be Empty  
 When you update a task in Project whose state has been set to Done or Removed in TFS, you might receive the following validation error message:  
  
 **The value for field 'Remaining Work' must be empty.**  
  
 This message indicates that the `<EMPTY />` workflow statements have not been removed from the task type definition for the project. Project sets the field to 0, while TFS expects the field to contain a null value. To resolve this issue, see [Required Changes to Make When Mapping to a Team Project That Was Created From the Scrum Process Template](customize-field-mapping-tfs-project-server.md#scrummodifications).  
  
##  <a name="resolveerrors"></a> Resolving Specific Error Conditions  
 The following table provides corrective actions to specific errors that can occur when you integrate the two server products:  
  
|Error Condition|Resolution|  
|---------------------|----------------|  
|TF80070: Team Foundation encountered an error while performing the operation. It is recommended that you save your work and restart the application.|This error might appear if you specify numbers that are larger than what Project Server allows. You cannot specify a date that is later than 12/31/2049 or a number that is larger than 100,000,000,000,000 (10 to the 14th power). Project Server imposes these restrictions on DateTime and Integer fields.<br /><br /> To resolve this error condition, modify the field that exceeds the specified limits.|  
|TF244069: An error occurred while checking the provisioning status of the reporting database scheme for a PWA instance.Project Server returned the following error: "TF289004: An error occurred while communicating with Project Server. Contact your Project Server administrator."|You must set the permissions for the account that is used by the application pool for the web application that hosts Project Server. Set this account as db_owner for the reporting database for Project Server. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).<br /><br /> In addition, for Project Server 2010, the instance of PWA must be set to **Classic Mode Authentication**, not **Claims Based Authentication**. You will not be able to register the instance of PWA if it is set to **Claims Based Authentication**.|  
|TF244069: An error occurred while checking the provisioning status of the reporting database schema for a PWA instance.Project Server returned the following error: "Server was unable to process request. -INVALID USE OF SYMBOLS The request failed with HTTP status 502: Proxy Error (No data record is available.)."|You will need to change the setting of the **autoDetect** attribute for the default proxy in the web.config file for the instance of Project Web Access or Project Web App (PWA) for which the error appeared. You can find the web.config file in *Drive*:\inetpub\wwwroot\wss\VirtualDirectories\80\web.config. Add the following element tags to the \<system.net> section:<br /><br /> `<defaultProxy>    <proxy autoDetect="false" /> </defaultProxy>`|  
|TF244069: An error occurred while checking the provisioning status of the reporting database scheme for a PWA instance.Project Server returned the following error: "TF289004: An error occurred while communicating with Project Server. Contact your Project Server administrator."|Verify that you have permissions correctly set. You must set the permissions for the account that is used by the application pool for the web application that hosts the reporting database for Project Server. Grant the account db_owner permission for the reporting database. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).|  
|TF244079: An error occurred while retrieving the URL for shared services.|You must install the two updates that are required to support Project Server 2010.After you install the updates, you must run the SharePoint Configuration Wizard. For more information, see [System and setup requirements](system-and-setup-requirements.md).|  
|TF244087: The TFS Extensions for Project Server must be installed on those machines that host Project Server. See [How to: Add Project Server to Team Foundation Server](https://msdn.microsoft.com/library/hh548139.aspx).|You must install Team Foundation Server Extensions for  Project Server on the following machines:<br /><br /> - For Project Server 2010: Each web-tier and application-tier server that will participate in synchronizing data with Team Foundation Server.<br /><br /> For more information, see [System and setup requirements](system-and-setup-requirements.md).|  
|TF208104: You have modified one or more hierarchical link relationships that may have been locked by other processes, such as Project Server.<br /><br /> Changes that you made to individual work items were published. Changes that you made to locked links were auto-corrected.|This error can occur when you make a change in Excel to the hierarchical link relationships of work items that are synchronized and also whose task hierarchy is locked (![Locked link icon](_img/icon_lockedlink.png "Icon_lockedLink")). This message indicates that the changes that you made to the fields are published, but all changes that you made to the link hierarchy, whether the links are locked or not locked, are not published. The tree hierarchy automatically reverts to its original structure. For more information, see [Addressing Error TF208104: Hierarchical Link Relationship Is Locked](https://msdn.microsoft.com/library/dd293544.aspx).|  
|TF285019: Could not submit request for user '{0}'. Contact your Project Server administrator to verify that Project Server permissions have been granted to the service account used by the synchronization engine.|After a work item has been created or updated, this error will appear in its History field when the synchronization engine attempts to submit it to Project Server. To resolve this error, you must provide additional permissions to the service account under which the synchronization engine runs. For Project Server 2010, you must provide Full Control permissions to invoke the Project Server Service Application for the SharePoint web application. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).|  
|TF287030: An error was returned while trying to synchronize a task with ID: *TaskID*. Error = "TF287035: Cannot find the following work item types for project 'Project': . The work item types may have been deleted or renamed. The administrator for Team Foundation Server should restore the named work item type for the mapped project, or the project manager should update the project plan with the name of the new work item type.". Contact your administrator for Team Foundation Server to verify that the required permissions to perform this operation are assigned, and that the work item type and project exist.|Verify that all project managers have installed Visual Studio 2013.<br /><br /> If Project Server is set up to require Secure Sockets Layer (SSL) certification, you should make sure that you have correctly configured SSL for the SharePoint web Applications that support the instances of PWA that participate in data synchronization.|  
|TF291011: An unsupported field type '{0}' is assigned to Project Server field: '{1}'.|When you map a field in Team Foundation to a field in Project Server, the data types of those fields must conform to the field mapping criteria. For more information, see [Data Types and Field Mapping Criteria](restrictions-mapping-ps-fields.md#datatypes).|  
|TF294003: Cannot access the following PWA instance: *pwaUrl*. Project Server returned this error: "The request failed with HTTP status 401: Unauthorized." Verify that the PWA instance exists, and that the necessary permissions have been granted to the service account for the project collection to access the PWA.|You must grant the service account for Team Foundation Server permissions to access the instance of PWA. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).|  
|TF294026: The following work item field does not exist: Microsoft.VSTS.Scheduling.CompletedWork. Contact your administrator for Team Foundation Server to add this work item field.|This error might appear under the following conditions:<br /><br /> - You try to upload the default field mappings to a project collection that only contains projects that were created from the Visual Studio Scrum process template. This template does not contain the **Completed Work** or **Original Estimate** fields in Team Foundation fields. You must map these fields.<br /><br /> - You can resolve this error by downloading the contents of the default field mappings, deleting the unsupported mappings, and then uploading the modified field mappings. For more information, see [Required Changes to Make When Mapping to a Team Project That Was Created From the Scrum Process Template](customize-field-mapping-tfs-project-server.md#scrummodifications).|  
|TF400651: Team Foundation Server cannot be integrated with the following project because it is a SharePoint Tasks List Project: {0}. Convert the project to an Enterprise Project or select a different project.|This message appears when the project plan has been configured as a SharePoint Tasks Lists Project. To resolve this issue, see [Change a SharePoint task list into an enterprise project](http://officepreview.microsoft.com/project-server-help/change-a-sharepoint-task-list-into-an-enterprise-project-HA102848144.aspx?CTT=5&origin=HA102848179).|  
  
##  <a name="resourcenames"></a> Resource names cannot contain special characters  
 Several characters, such as square brackets or corner brackets, can cause problems when you synchronize user names between Active Directory and Project Server. For more information, see [Active Directory Resource Pool Synchronization (Project Server 2013)](http://technet.microsoft.com/library/jj819320.aspx).  
  
##  <a name="witall"></a> Work item type field lists all work item types  
 Text30 is the default Project field that is associated with the **Work Item Type** column that is used in synchronizing tasks with work items. If you ever connect the project plan to Team Foundation Server by using the **Choose Team Project** option on the Team ribbon menu, an additional Project field, which is labeled **Work Item Type**, becomes available. This field, with a default Project field of Text24, supports mapping of project plans that are bound to Team Foundation but does not support synchronizing plans. The Text24-based field contains the full list of work item types for the project. You can verify that you have the correct field by pointing to it and verifying that **Text30** appears.  
  
##  <a name="errormessages"></a> Error messages for administration commands do not identify the missing permission  
 When you run the `TfsAdmin` command-line tool, the following error message might appear:  
  
 **The request failed with HTTP status 401: Unauthorized.**  
  
 The message does not indicate which permission is required on which server. You must review the required permissions for the specific command that you tried to run. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
##  <a name="definingqueries"></a> Defining queries that specify null or empty field values  
 You can find undefined work item fields in Team Foundation by creating a work item query where the **Value** is left undefined. Corresponding Project Server fields that are mapped may contain a value of 0. For example, you can specifying the following clauses in a query to exclude work items that contain undefined or zero work:  
  
-   And Completed Work <> (leave Value undefined)  
  
-   Or Project Server Completed Work <> 0  
  
-   And Remaining Work \< > (leave Value undefined)  
  
-   Or Project Server Remaining Work <> 0  
  
 For more information, see [Monitor submissions and resolve rejections](monitor-submissions-resolve-rejections.md).  
  
##  <a name="changingname"></a> Changing the Name of a Mapped Enterprise Project Plan Requires You to Refresh the Mapped Team Project  
 If you save a mapped enterprise project under a different name and then publish the project to Project Server, you must refresh the mapped project. Otherwise, the new name will not appear in the **Enterprise Project** field on the **Project Server** tab. For more information, see [Refresh your Team Foundation client](../../project/navigation/index.md?toc=/azure/devops/user-guide/toc.json&bc=/azure/devops/user-guide/breadcrumb/toc.json#refresh-the-web-portal).  
  
##  <a name="StressError"></a> Multiple errors and deadlock conditions may be reported under stress conditions  
 Under certain load conditions, multiple errors and deadlock conditions may be reported in the Windows event log and in the synchronization messages. For example, these messages might appear if multiple project collections are mapped to a single instance of PWA. No user action is required.  
  
 The following types of errors may appear:  
  
 **Error_GeneralServerErrorSql&#124;Transaction (Process ID 156) was deadlocked on lock resources with another process and has been chosen as the deadlock victim. Rerun the transaction.**  
  
 **Error_GeneralServerErrorSql&#124;Timeout expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.**  
  
##  <a name="accessdenied"></a> Access Denied issues occur with a network load balancing configuration  
 If you have administrative permissions on Project Server, a 401 Access denied message might appear after you configure the integration of the two server products. This message can appear when the deployment of Project Server contains the following components:  
  
-   Two or more web front ends.  
  
-   Windows Network Load Balancing (NLB) to balance them.  
  
-   A single static IP as the NLB front end with a name that is registered with the Domain Name Service (DNS).  
  
 To work around this problem, you must set one of two registry keys. For more information, see the following page on the Microsoft website: [You receive error 401.1 when you browse a Web site that uses Integrated Authentication and is hosted on IIS 5.1 or a later version](http://go.microsoft.com/fwlink/?LinkId=207283).  
  
##  <a name="unsupportedconfig"></a> Multiple errors might occur when updating subprojects with the master project open  
 You can synchronize data between a project and an enterprise project plan that is a subproject. You cannot manage or update any data from a master project that contains mapped subprojects. You can have a master plan that includes subprojects that are mapped to Team Foundation Server, but the Team Foundation client add-in for Project Professional blocks editing of mapped subprojects from a master plan. Specifically, the add-in prevents you from modifying or deleting a task that is scheduled to synchronize with Team Foundation from the master plan  
  
 Several errors can appear if you open a subproject and its master project at the same time. For example, one or more of the following error messages may appear:  
  
-   The view Team Foundation Gantt (Project Server) does not exist in this version of Project. Please choose a different view.  
  
-   The following field that you selected for tracking the Work Item Type is already in use by the project: pjTaskText30. If you continue, the existing data would be overwritten.  
  
     Choose 'Cancel' to prevent data from being overwritten or deleted, and then copy the data in pjTaskText30 to unused fields in the project, or contact the Administrator to change the local field.  
  
     Do you want to proceed?  
  
-   TF82041: Team Foundation does not support editing tasks in a subproject from within the master project. Open the subproject to edit, publish, or refresh tasks.  
  
-   TF80069: Team Foundation encountered an error while updating data in the application.  
  
 To resolve these errors, close the master project whenever you are modifying a mapped subproject.  
  
## Related articles  
 [Synchronization process overview](synchronization-process-overview.md)   
 [Remove a component](remove-component-from-synchronization.md)   
 [Change your deployment configuration](change-deployment-configuration.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)