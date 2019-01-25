---
title: Map a project plan that was previously bound to a project
titleSuffix: TFS 
description: Specify work items that you want to synchronize using Team Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: df29e319-c1f7-4c90-bc27-42975158a0a1
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Map a project plan that was previously bound to a project

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> You can map a project plan that you have been publishing to and refreshing from Visual Studio Team Foundation Server (TFS) to switch to synchronizing with TFS. You can then obtain the benefits of synchronization over those that the Team Foundation add-in to Microsoft Project Professional provides. Before you perform this mapping, you should review the differences in how you manage projects based on these two methods. For more information, see [Operational differences in managing projects using TFS and Project](operational-differences.md).  
  
 When you map a project plan that was previously bound to Team Foundation Server, you replace the tasks in your project plan with new tasks that the synchronization engine creates. The integration of Team Foundation Server and Microsoft Project Server does not support mapping the existing tasks in a project plan in Project Server to the work items to which they are bound in Team Foundation Server. Instead, you specify work items that you want to synchronize, and then the migration process automatically creates additional tasks that are based on those work items. You can then copy from the old tasks to the new tasks any information that Team Foundation Server does not store, and then delete the old tasks. The synchronization engine then maintains data between the new tasks and the work items from which they were created.  
  
 To perform the migration, you will use Excel, Project Professional, Project Web App or Project Web Access (PWA), and the `TfsAdmin` command-line tool.  
  
> [!IMPORTANT]
>  Before you can perform the procedures in this topic, you must first configure the integration of the two server products. For more information, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
>   
>  If you have customized the field-mapping file for Microsoft Project, you may need to customize the field mapping between Project Server and Team Foundation Server. To perform this configuration, you first register the instance of PWA, then you map the instance to a project collection, and then you upload field mappings. For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md).  
   
  
 **Required Permissions**  
  
 To perform these procedures, you must have the following permissions:  
  
-   To map a project plan to a project, you must have the **Administer Project Server integration** permission for a project collection, or you must belong to the **Team Foundation Administrators**  group. Also, the service account for Team Foundation Server must have administrative permissions to the instances of PWA that will participate in data synchronization.  
  
-   To publish and refresh work items in Excel and to set work items to be synchronized, you must be a member of the **Contributors** group for the project that is mapped in Team Foundation Server.  
  
-   To approve and publish updates, you must be a member of the **Project Manager** group on Project Server.  
  
 For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
##  <a name="capture_ids"></a> Record IDs of Work Items That You Want to Synchronize  
 You must record the IDs of all work items that you will want to synchronize after you map your project plan to the project. You will use these IDs to perform a later step in the process.  
  
#### To record the IDs of work items that you want to synchronize  
  
1.  Open the project plan that you plan to map.  
  
2.  On the **Team** ribbon, choose **Refresh**.  
  
3.  Choose **Publish** to make sure that the most recent data in the plan is published to Team Foundation.  
  
4.  In Project, make sure that the **Work Item ID** and **Publish and Refresh** columns appear.  
  
     By default, these columns appear in both the **Team Foundation Gantt** and **Team Foundation Task Sheet** views.  
  
5.  To capture the IDs of the work items, highlight the **Work Item ID** column, open the shortcut menu, and then choose **Copy**.  
  
6.  In a text editor such as Notepad, open the shortcut menu, and then choose **Paste**.  
  
7.  Delete the IDs of any work items that you do not want to synchronize with Team Foundation Server, and then create a comma-delimited list of the remaining IDs.  
  
8.  Save the list to a file, and record the types of work items that you want to map.  
  
##  <a name="save_publish"></a> Save and Publish the Project Plan to Project Server  
 You must perform this step only if you have been working with a local project plan. If you have already published the project plan to Project Server, you can skip this procedure.  
  
#### To save and publish your project plan to Project Server  
  
1.  Open your project plan in Project Professional.  
  
2.  Save the plan, publish it to Project Server, and then close the plan.  
  
##  <a name="map"></a> Map the Project Plan to the Team Project  
 You map your project plan to a project by using the **TfsAdmin ProjectServer** command-line tool.  
  
#### To map an enterprise project plan to a project  
  
1.  Open a Command Prompt window where either Visual Studio 2013 or Team Explorer 2013 is installed and enter:  
  
    ```  
    cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
    ```  
  
     On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.  
  
2.  Enter the following command, and then choose the ENTER key:  
  
    ```  
    TfsAdmin ProjectServer /MapPlanToTeamProject /collection:tpcUrl /enterpriseProject:EnterpriseProjectName /teamProject:TeamProjectName /workItemTypes:ListOfWorkItemTypes /nofixedwork /projectFieldForWorkItemType:ProjectFieldName  
    ```  
  
     Make the following replacements and specifications:  
  
    -   Replace *tpcUrl* with the URL of the project collection.  
  
    -   Replace *EnterpriseProjectName* with the name of the enterprise project plan.  
  
    -   Replace *TeamProjectName* with the name of the project.  
  
    -   Replace *ListOfWorkItemTypes* with the names of the types of work items that you want to participate in data synchronization. This list should correspond to the types of work items whose IDs you recorded in the first procedure in this topic, [Record the IDs of Work Items That You Want to Synchronize](#capture_ids).  
  
        > [!IMPORTANT]
        >  Map all work item types that you want to synchronize with the project.  
  
    -   (Optional) Specify the **/noFixedWork** argument if you want to prevent fixed-task-type assignments.  
  
    -   (Optional) Specify the **/projectFieldForWorkItemType** argument and the name of a field in Project to store the type of work item. If you do not specify this argument, the default value of pjTaskText30 is used.  
  
     The following messages appear:  
  
     **Mapping enterprise project** *EnterpriseProjectName* **to project** *TeamProjectName*  
  
     **You have successfully mapped enterprise project** *EnterpriseProjectName* **to project** *TeamProjectName*  
  
3.  If your project plan is open, close it, and then close Project Professional.  
  
##  <a name="set_synch"></a> Bulk Edit Work Items to Be Synchronized  
 In this procedure, you bulk edit the work items that correspond to the IDs that you recorded in the first procedure in this topic, [Record Work-Item IDs That You Want to Synchronize](#capture_ids). You can bulk edit work items mostly easily by using Microsoft Excel.  
  
#### To bulk edit the synchronization fields  
  
1.  Start Microsoft Excel, and then choose the **Team** tab.  
  
2.  In the **Work Items Group**, choose the **New List** button.  
  
3.  In the **Connect to Team Project** dialog box, choose the name of the server that contains the project that you have mapped to the project plan.  
  
4.  In the **Select a Team Foundation Server** list, choose the name of the server that contains the project to which your enterprise project plan is mapped.  
  
5.  Under **Team Project Collections**, choose the name of the project collection that hosts the project.  
  
6.  In the **Team Projects** list, choose the name of the project that contains the work items that you want, and then choose **OK**.  
  
7.  In the **New List** dialog box, choose the **Input List** option button, and then choose the **OK** button.  
  
     The worksheet data is refreshed and includes the name of the project and project collection.  
  
8.  Choose a cell within the table area, and then, on the **Team** ribbon, choose the **Get Work Items** button.  
  
9. In the **Get Work Items** dialog box, choose the **IDs** option button, paste the comma-delimited list that you created in [Record Work Item IDs That You Want to Synchronize](#capture_ids) earlier in this topic, and then choose the **Find** button.  
  
10. Choose the **Select All** button, and then choose the **OK** button.  
  
     The worksheet data is refreshed and shows the fields for each work item that you specified.  
  
11. Choose the **Choose Columns** button.  
  
     In the **Choose Columns** dialog box, under **Available Columns**, highlight the **Submit to Project Server** field, and then choose the **>** button.  
  
    > [!NOTE]
    >  The **Submit to Project Server** column will be available only if you have performed the [Map Project Plan to the Team Project](#map) procedure from earlier in this topic.  
  
12. Choose the **Project Server Enterprise Project** field, choose the **>** button, and then choose the **OK** button.  
  
     The **Submit to Project Server** and **Project Server Enterprise Project** columns are added to the worksheet.  
  
13. In the **Submit to Project Server** column, enter **Yes** in the row for the first work item. Copy and paste **Yes** into the rows for all remaining work items that you want to synchronize.  
  
14. In the **Project Server Enterprise Project** column, enter the name of your enterprise project plan in the row for the first work item. Copy and paste the plan name into the rows for all remaining work items.  
  
15. On the **Team** ribbon, choose **Publish**  to update Team Foundation Server.  
  
     After a few minutes, notification of tasks to approve will appear in the approval queue for the project manager who owns the project plan.  
  
##  <a name="approve_updates"></a> Approve Updates, and Publish the Project Plan  
 You must approve the updates that appear in your project queue before they will appear in your project plan. Also, when you migrate a nested tree of tasks, you must approve updates and then publish your project plan for each level of nesting. You must approve and publish the first level to Project Server before the next level can be submitted from Team Foundation Server to Project Server. For example, if your plan includes three levels of child items, you must publish the project plan four times for all work items to be synchronized with Project Server.  
  
 Perform the following two procedures as many times as necessary until all work items that you selected for synchronization appear in your project plan:  
  
-   Approve updates to the project plan  
  
-   Publish the plan and update Project Server  
  
###  <a name="approve_updates_a"></a> To approve updates to the project plan  
  
1.  Open the instance of PWA that supports the project plan, and then choose the **Approval Center** link.  
  
     A list of status updates that require your approval should appear, similar to the following illustration:  
  
     ![Approval Center with Status Update](_img/tfs-ps_pwa_approvalcenter.png "TFS-PS_PWA_ApprovalCenter")  
  
2.  For each work item that you want to accept into your plan, select the check box in the column next to the **Approval Type** column.  
  
     To select all work items, choose the header field next to the **Approval Type** column header, open the shortcut menu, and then choose **Select All**.  
  
###  <a name="publish_plan"></a> To publish the plan and update Project Server  
  
1.  Open your project plan, and review the tasks that have been added to it.  
  
    > [!NOTE]
    >  Make sure that you close the project plan and close Project Professional after the plan was mapped.  
  
     Duplicate tasks should be added to your project plan. You will remove the duplicate tasks in the final step of migration, as [Verify Migration, and Delete Non-Synchronized Tasks](#verify) describes later in this topic.  
  
2.  Save and publish your project plan to Project Server  
  
3.  If all work items that you want to have synchronized have been added, close your project plan, and skip to [Verify Migration and Delete Duplicate Tasks](#verify) later in this topic.  
  
     If some work items still must be synchronized, return to the first step in the first procedure,  "To approve updates to the project plan.  
  
     As you approve and publish the updates, the synchronization process locks the hierarchy of synchronized work items in Team Foundation.  
  
##  <a name="verify"></a> Verify Migration, and Delete Non-Synchronized Tasks  
 Open and review your project plan. If you have synchronized all tasks that you were previously publishing and refreshing, a duplicate set of tasks will appear with the replicated hierarchy. The set of synchronized tasks will appear after the set of non-synchronized tasks. You can add any information that the non-synchronized tasks contain to those tasks that are now synchronized before you delete the non-synchronized tasks from your project plan.  
  
 Perform the following procedures to complete the migration process. You add the previous Work Item ID column to make sure that you are deleting the non-synchronized tasks.  
  
#### Verify the Migration to a Mapped Project Plan  
  
1.  Verify that the **Team** ribbon no longer appears.  
  
2.  Verify that the default view is **Team Foundation Gantt (Project Server)**.  
  
     Change the view if **Team Foundation Gantt** continues to appear.  
  
3.  Choose the **Work Item ID** column heading, open the shortcut menu, choose **Field Settings**, and verify that **Work Item Id (TFS)** appears as the field name.  
  
4.  Verify that the task hierarchy and structure of the set of synchronized tasks matches the hierarchy of the set of non-synchronized tasks.  
  
5.  Make any adjustments that you want to the new task set, and copy any information that you want to maintain from the old set to the new set.  
  
     Because the new synchronized tasks have been created from information in Team Foundation Server, any information that the original task contained but that is not stored in Team Foundation must be copied over to the new tasks. For example, you must copy over the following types of information: calendar dates, predecessor-successor dependencies, lead and lag time, work item constraints, and text that is entered or fields that are defined in the **Task Information** dialog box. Before you delete the non-synchronized tasks, copy any information that they contain and that you want to maintain to the replicated synchronized task.  
  
#### Delete Non-Synchronized Tasks  
  
1.  In Project Professional, choose the **Work Item ID** column, open the shortcut menu, and then choose **Insert Column**.  
  
2.  In the list, choose **Text10 (Work Item ID**.  
  
3.  A second **Work Item ID** column appears, and a value appears in it for non-synchronized tasks.  
  
4.  (Optional) Copy any information that you have defined for a non-synchronized task to its equivalent synchronized task.  
  
5.  Highlight all non-synchronized tasks, and then choose **Cut** on the Task ribbon or choose **Delete Tasks** on the shortcut menu.  
  
     Verify that only synchronized tasks remain in the project plan.  
  
6.  Choose the **Work Item ID** column that you added in step 1, open the shortcut menu, and then choose **Hide Column**.  
  
7.  Save and publish your project plan to Project Server.  
  
## Related articles  
 [Operational differences in managing projects using TFS and Project](operational-differences.md)   
 [Synchronization process overview](synchronization-process-overview.md)