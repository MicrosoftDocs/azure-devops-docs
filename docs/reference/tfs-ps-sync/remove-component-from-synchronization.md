---
title: Remove a component from participating in data synchronization
titleSuffix: TFS 
description: Remove components configured to participate in data synchronization between Visual Studio Team Foundation Server and Project Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 6e0dbfd4-e830-4b5a-a42f-536e744665fa
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---
# Remove a component from participating in data synchronization
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> You can remove components that you have configured to participate in data synchronization between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server. To permanently shut down synchronization, you must unmap each project collection that is mapped and unregister each instance of Project Web Access or Project Web App (PWA) that is registered to TFS.  
  
 **Components you can remove from participating in synchronization:**  

-   [All components](#removeintegration)  
-   [An enterprise project plan](#removeplan)  
-   [Project collection](#remove_tpc)  
-   [An instance of PWA](#removepwa)  
-   [A work item type](#removewit)  
-   [A work item field](#removefield)  
  
When you move servers or collections, you do not need to shut down synchronization, but you must perform some additional administrative tasks. For more information, see [Change your deployment configuration](change-deployment-configuration.md).  
  
When you delete a task from Project Server that has been synchronized with a work item in Team Foundation, you remove the association between the task and the work item. Work items remain in the database for Team Foundation. If you want to delete these work items, you must use the **witadmin destroywi** command. For more information, see [Remove items that aren't synchronizing](remove-items-not-synching.md).  
  
 **Requirements**  
  
 To use these commands, your **Administer Project Server integration** permission must be set to **Allow**. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instance of PWA that will participate in data synchronization. To register or unregister an instance of PWA, you must also belong to the Administrators group for the instance. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
> [!NOTE]
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to run the `TfsAdmin` command-line tool on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the shortcut menu for **Command Prompt**, and then choose **Run as Administrator**. For more information, see the following page on the Microsoft website: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
##  <a name="removeintegration"></a> Remove integration and shut down synchronization  
 The following illustration shows the systematic sequence of steps that you take to shut down the synchronization engine and remove the integration of Team Foundation Server and Project Server. You can perform the sequence of steps as shown, or you can use the **/force** switch when you perform step 3 using the `TfsAdmin ProjectServer /UnMapPWAFromCollection` command option.  
  
 ![Workflow for removing mapping between PS and TFS](_img/pstfs_unmap_workflow.png "PSTFS_UnMap_Workflow")  
  
> [!NOTE]
>  If you delete not only a mapped project collection but also all instances of PWA that were mapped to it, you will remove all mappings of work items that have been synchronized. However, the instance of PWA to Team Foundation Server will still be registered.  
  
 The **/force** switch automatically removes mapped or linked components. If you use this switch, you must run only one command for each collection and instance of PWA that you want to remove from participating in synchronization. To shut down the synchronization engine by using the **/force** switch, perform the following actions in the indicated sequence:  
  
1.  Remove mapping for each collection as [Removing a Team Project Collection from Participating in Synchronization](#remove_tpc) describes later in this topic.  
  
2.  Unregister each instance of PWA as [Removing an Instance of PWA from Participating in Synchronization](#removepwa) describes later in this topic.  
  
 The synchronization engine runs under a job service that the Team Foundation Background Job Agent manages. A synchronization engine is registered for each collection that is mapped to an instance of PWA. When you remove the integration of Project Server and Team Foundation Server, you shut down synchronization and cause the following actions to occur:  
  
-   Remove the association between tasks in Project and work items in the project.  
  
-   Remove the association between enterprise project plans and projects. This change includes the removal of the **Project Server** tab from the forms for all types of work items in the project that are no longer mapped, if no other plan is mapped to the project.  
  
-   Remove the association between collections and an instance of PWA.  
  
-   Remove the association between the instance of PWA and Team Foundation Server.  
  
##  <a name="removeplan"></a> Remove an enterprise project plan from participating in synchronization  
 You remove a plan from participating in synchronization by unmapping it from the project. Before you can unmap the plan, you must first delete all tasks that are linked to work items in the mapped project. As an alternative, you can use the `/force` flag to remove these links.  
  
#### To unmap an enterprise project plan from a project  
  
1.  Open a Command Prompt window where either Visual Studio 2013 or Team Explorer 2013 is installed and enter:  
  
    ```  
    cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
    ```  
  
     On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.  
  
2.  Type the following command, and then choose the **ENTER** key.  
  
    ```  
    TfsAdmin ProjectServer /UnmapPlanFromTeamProject /collection:tpcUrl /enterpriseProject:EnterpriseProjectName /teamProject:TeamProjectName /force  
    ```  
  
     Replace *tpcUrl* with the URL of the project collection, *EnterpriseProjectName* with the name of the enterprise project plan, and *TeamProjectName* with the name of the project.  
  
3.  Wait until you see the following messages:  
  
     **Unmapping enterprise project** *EnterpriseProjectName* **from project** *TeamProjectName*.  
  
     **Enterprise project** *EnterpriseProjectName* **was successfully unmapped from project** *TeamProjectName*.  
  
##  <a name="remove_tpc"></a> Remove a project collection from participating in synchronization  
 You remove a collection from participating in synchronization by unmapping it from the instance of PWA. Before you can unmap the collection, you must first unmap all project plans that are mapped to projects in the collection. As an alternative, you can use the `/force` flag to unmap all projects.  
  
#### To unmap a collection and all projects from an instance of PWA  
  
1.  Open a Command Prompt window, type the following command, and then choose the **ENTER** key.  
  
    ```  
    TfsAdmin ProjectServer /UnMapPWAFromCollection /pwa:pwaUrl /collection:tpcUrl /force  
    ```  
  
     Replace *pwaUrl* with the URL of the instance of PWA and *tpcUrl* with the URL of the collection.  
  
2.  Wait until you see the following messages:  
  
     **Unmapping project collection** *tpcUrl* **from PWA** *pwaUrl*.  
  
     **You have successfully unmapped project collection** *tpcUrl* **from PWA** *pwaUrl*.  
  
##  <a name="removepwa"></a> Remove an Instance of PWA from participating in synchronization  
 As the final step in removing the integration, you must unregister each instance of PWA that was registered with Team Foundation Server. You should unregister all instances of PWA that no longer contain any enterprise projects that must synchronize their data with Team Foundation.  
  
#### To unregister an instance of PWA  
  
1.  Open a Command Prompt window, enter the following command, and then choose the **ENTER** key:  
  
    ```  
    TfsAdmin ProjectServer /UnregisterPWA /pwa:pwaUrl /tfs:tfsUrl  
    ```  
  
     Replace *pwaUrl* with the URL of the instance of PWA and *tfsUrl* with the URL of the application-tier server.  
  
     Wait until the following messages appear:  
  
     **Unregistering PWA** *pwaUrl*.  
  
     **You have successfully unregistered PWA** *pwaUrl*.  
  
2.  Repeat step 2 for each instance of PWA that supports enterprise project plans that you want to remove from participating in synchronization with Team Foundation.  
  
##  <a name="removewit"></a> Remove a type of work item from participating in synchronization  
 You can remove one or more types of work items from participating in data synchronization for a project by using the **TfsAdmin ProjectServer /UnmapWorkItemTypes** command. If any work items of the type that you want to remove are being synchronized, you can specify the **/force** switch to remove the links that bind them to their corresponding tasks in Project.  
  
 For more information, see [Specify work item types](specify-wits-to-synchronize.md).  
  
##  <a name="removefield"></a> Remove a field from participating in synchronization  
 You can remove one or more fields from participating in data synchronization for a project collection. You remove a field from synchronization by removing its mappings. You must not remove fields that are required for synchronization. For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md) and [Upload or download field mappings](manage-field-mappings.md).  
  
## Related articles  
 [Map integration components](map-integration-components.md)   
 [Configure and manage TFS resources](../../organizations/accounts/organization-management.md)   
 [Remove items that aren't synchronizing](remove-items-not-synching.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)