---
title: Specify the work item types to synchronize 
titleSuffix: TFS 
description: Specify the types of work items that you want to participate in synchronization between Team Foundation Server & Project Server 
ms.prod: devops
ms.technology: devops-agile 
ms.assetid: fc034114-fce1-48ca-a4e9-df41081a4bbb
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Specify the work item types to synchronize
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> To support synchronization of data between an enterprise project plan and a project, you must specify the types of work items that you want to participate in synchronization. You can define the types when you associate a project plan to a project, and you can add or remove types later.  
  
> [!NOTE]
>  All types of work items that are mapped for a project are available to participate in data synchronization with all enterprise project plans that you have currently mapped to that project or that you may map later.  
  
 Before you can manage the types of work items that participate in synchronization, you must have configured the integration of Visual Studio Team Foundation Server and Microsoft Project Server, and you must have mapped an enterprise project plan with the project. For more information, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
 **Requirements**  
  
 To perform these procedures, your **Administer Project Server integration** permission must be set to **Allow** for a project collection. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instances of PWA that will participate in data synchronization. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
##  <a name="GetList"></a> List the types of work items that are configured to participate in data synchronization  
 By using the following command, you can determine which types for a project are already mapped and available to use with an enterprise project plan.  
  
#### To list types of work items that are mapped for a project  
  
1.  To run the **TfsAdmin** command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
    ```  
    cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
    ```  
  
     On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.  
  
2.  Specify the following command, and then choose the **Enter** key.  
  
    ```  
    TfsAdmin ProjectServer /GetMappedWorkItemTypes /collection:tpcUrl /teamProject: TeamProjectName  
    ```  
  
     Replace *tpcUrl* with the URL of the project collection and *TeamProjectName* with the name of the project.  
  
     The following message appears:  
  
     **The following types of work items are configured for synchronization:**  
  
     *List of Work Item Types*  
  
##  <a name="MapTypes"></a> Specify the types of work items that can participate in data synchronization  
 You can configure one or more types of work items for a project to participate in data synchronization with tasks in project plans. The project plans may be currently mapped to the project, or you can configure them later to synchronize data with the project.  
  
#### To map types of work items for a project  
  
-   At the command prompt, type the following command, and then choose the **Enter** key.  
  
    ```  
    TfsAdmin ProjectServer /MapWorkItemTypes /collection:tpcUrl /teamProject:TeamProjectName /workItemTypes:ListOfWorkItemTypes  
    ```  
  
     Replace *tpcUrl* with the URL of the project collection and *TeamProjectName* with the name of the project. Replace *ListOfWorkItemTypes* with the names of the types of work items that you want to participate in data synchronization. For example, you can specify the following types of work items to support an agile process as "*User Story,Task*" or *"User Story",Task*. Do not include a space after the comma.  
  
     You can specify the optional `/skipUIChanges` flag to indicate that no modifications should be made to the **Project Server** tab for the work item forms of the types that you specify.  
  
    > [!IMPORTANT]
    >  You should include the `/skipUIChanges` flag only if a message indicates an error occurred when the system tried to add a **Project Server** tab. If this message appears, you will need to add the **Project Server** tab to the work item type definition manually. For more information, see [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md).  
  
     The following messages appear:  
  
     **Configuring synchronization for the following work item types for project** *TeamProjectName*: *List of Work Item Types*`.`  
  
     **You have successfully configured the following work item types for project** *TeamProjectName*: *List of Work Item Types*`.`  
  
 If you have added a type and did not specify the `/skipUIChanges` flag, you can verify that the type has been modified by refreshing the project in Team Explorer and then opening a work item of the type that you added. The **Project Server** tab should appear in the work item form.  
  
##  <a name="UnmapTypes"></a> Remove a work item type from participating in data synchronization  
 Before you can remove a type of work item from participating in data synchronization, you should remove the links that bind the work items of that type to tasks that are defined in an enterprise project plan. As an alternative, you can use the `/force` flag to force the removal of these links and then remove the type.  
  
#### To unmap a work item type from a project  
  
-   At the command prompt, type the following command, and then choose the **Enter** key.  
  
    ```  
    TfsAdmin ProjectServer /UnmapWorkItemTypes /collection:tpcUrl /teamProject:TeamProjectName /workItemTypes:ListOfWorkItemTypes  
    ```  
  
     Replace *tpcUrl* with the URL of the project collection, *TeamProjectName* with the name of the project, and *ListOfWorkItemTypes* with the name or names of the types of work items to unmap.  
  
     You can specify the optional `/force` flag to remove links that bind work items to Project tasks. By using this option, you can remove types of work item from participating in data synchronization, even if work items of that type are currently being synchronized.  
  
     The following messages appear:  
  
     **Removing the following work item types from participating in synchronization of data for project** *TeamProjectName* **:** *List of Work Item Types* **.**  
  
     **The following work item types have been successfully removed from participating in synchronization for project** *TeamProjectName* **:** *List of Work Item Types* **.**  
  
     You can verify whether the type has been removed by refreshing the project in Team Explorer and then opening a work item of the type that you removed. The **Project Server** tab should be removed from the work item form.  
  
## Related articles  
 [Define the work item types to synchronize](define-work-item-types-available-synchronization.md)   
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)   
 [Manage mappings](manage-mappings-enterprise-project-team-project.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)