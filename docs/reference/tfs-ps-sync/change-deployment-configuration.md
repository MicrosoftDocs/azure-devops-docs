---
title: Change your deployment configuration
titleSuffix: TFS 
description: Understand additional administrative tasks when you change your settings using Team Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile 
ms.assetid: 962eba84-0c28-4c94-8abc-3cdb9f1df53a
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: conceptual
ms.date: 01/12/2017
---

# Change your deployment configuration

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> After you have configured Visual Studio Team Foundation Server (TFS) and Microsoft Project Server to support data synchronization, you might need to perform additional administrative tasks when you change your deployment. For example, you might need to remove, re-register, or re-map a component before or after you move or delete a project, a project collection, or an application-tier server. Before you change your deployment or perform maintenance operations, you should consider the impact that these operations have on the synchronization process.  
  
 Review the following notes and resources before you change a deployment where you have integrated TFS and Project Server.  
  
 
  
##  <a name="deleting"></a> Delete components  
 Whenever you delete a mapped component, you should unmap it and review the following guidelines:  
  
-   **Delete an enterprise project plan or a project**. Before you delete a mapped project plan or a mapped project, you must first unmap all project plans that are mapped to the project. For more information, see [Associate enterprise projects and projects](manage-associations-enterprise-projects.md).  
  
-   **Delete an instance of Project Web Access or Project Web App (PWA)**. Before you delete an instance of PWA, you must first remove all associations of project collections that are mapped to the instance and then unregister it. For more information, see [Remove a component](remove-component-from-synchronization.md) and [Remove an Instance of PWA from participating in synchronization](remove-component-from-synchronization.md#removepwa).  
  
-   **Delete a project collection**. Before you delete a mapped collection, you should unmap it by following the procedure in [Remove a component](remove-component-from-synchronization.md).  
  
    > [!NOTE]
    >  If you delete not only a mapped project collection but also all instances of PWA that were mapped to it, you will remove all mappings of work items that have been synchronized. However, the instance of PWA that is registered to Team Foundation Server remains registered.  
  
##  <a name="tpc"></a> Move or split a project collection  
 To move a mapped collection to another instance of TFS and continue to synchronize data on the new application-tier server, you must perform several steps, based on the following choices:  
  
-   All collections move to a different instance of TFS but remain mapped to the same instance of PWA. A recommended practice is to move or split all collections that are mapped to the same instance of PWA at the same time.  
  
-   Some collections move to a different instance of TFS, but some collections remain with the same instance. In this case, you must unmap the collections that are split and remap them to the same or to a different instance of PWA that will then be registered with the second instance of TFS. An instance of PWA can be registered to only one instance of TFS.  
  
#### To move all mapped collections to a different instance of TFS  
  
1.  Move or split the collection.  

     For more information, see [Manage project collections](/azure/devops/server/admin/manage-team-project-collections).  
  
2.  Grant required permissions to the service account for the second instance of Team Foundation Server.  
  
     For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
3.  Add the **Administer Project Server integration** permission to those accounts that will run the `TfsAdmin ProjectServer` command-line tool for the second project collection.  
  
4.  Add the accounts of users who will configure and register instances of PWA to the **Team Foundation Administrators** group for the second project collection.  
  
5.  Register the instance of PWA with the second application-tier server by using the **/RegisterPWA** and `/force` command options.  
  
6.  Wait until the synchronization engine runs through one cycle of updates and updates the instance of PWA.  
  
7.  Unregister the instance of PWA from the first application-tier server by using the **/UnRegisterPWA** command option.  
  
#### To move some collections to a different instance of TFS and a different instance of PWA  
  
1.  Use the **/UnmapPwaFromCollection** command option with the **/force** switch to unmap each collection that you are moving.  
  
    > [!WARNING]
    >  By using the **/force** switch, you break all associations between enterprise project plans and projects that are defined for the collection.  
  
2.  Move or split the collection.  

     For more information, see [Manage project collections](/azure/devops/server/admin/manage-team-project-collections).  
  
3.  Assign all required permissions.  
  
     For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
4.  Use the **/RegisterPWA** command option to register the second instance of PWA with the second application-tier server.  
  
5.  Use the **/MapPwaToCollection** command option to map each collection that you moved to the second instance of PWA.  
  
6.  Use the **/MapPlanToTeamProject** command option to map each plan to the project that was moved to a different collection.  
  
 For more information, see the following topics:  

-   [Move or clone TFS](/azure/devops/server/admin/move-across-domains)  

-   [Move TFS to a new domain ( environment move)](/azure/devops/server/admin/move-across-domains)  
  
-   [Register an instance of PWA](register-pwa.md)  
  
-   [Map a project collection](map-team-project-collection-to-pwa.md)  
  
-   [Manage mappings](manage-mappings-enterprise-project-team-project.md)  
  
##  <a name="tfs"></a> Move a Team Foundation Server to a new machine or environment  
 You must re-register each instance of PWA that is registered with the current machine.  
  
#### To move an instance of Team Foundation Server to which an instance of PWA is mapped  
  
1.  Move the instance of Team Foundation Server.  
  /tfs/server
     For more information, see [Move or clone TFS](/azure/devops/server/admin/move-clone-hardware).  
  
2.  Assign all required permissions.  
  
     For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
3.  Use the **/RegisterPWA** command option to register the instance of PWA with the second application-tier server.  
  
4.  Wait until the synchronization engine runs through one cycle of updates and updates the instance of PWA.  
  
5.  Use the **/UnRegisterPWA** command option to unregister the instance of PWA from the first application-tier server.  
  
> [!NOTE]
>  You must specify the **/force** switch when you move the project collection to a different instance of Team Foundation Server. If the instance identifier has not changed, you do not have to specify the **/force** switch.  
  
##  <a name="upgrading"></a> Upgrade from Project Server 2007 to Project Server 2010  
 If you have an instance of Project Web Access that is registered to TFS and the synchronization process is running for a collection, you must perform the following procedures before you upgrade the instance from Project Server 2007 to Project Server 2010:  
  
1.  Perform the steps on the following page of the Microsoft website: [Database-attach full upgrade to Project Server 2010](http://go.microsoft.com/fwlink/?LinkId=211859)  
  
2.  To enable the synchronization after the upgrade, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
    ```  
    cd %programfiles(x86)%%\Microsoft Visual Studio 12.0\Common7\IDE  
    ```  
  
     On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles**.  
  
3.  Enter the following command:  
  
    ```  
    TfsAdmin ProjectServer /RegisterPwa /tfs:TfsURL /previousPWA:URLFor2007 /PWA:URLFor2010  
    ```  
  
     For more information, see [Register an instance of PWA](register-pwa.md).  
  
## Related articles  
 [Remove a component](remove-component-from-synchronization.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)