---
title: Manage the association of enterprise projects to projects
titleSuffix: TFS 
description: Understand how to map enterprise projects using Team Foundation Server & Project Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: b759773e-1c79-4e2e-abdf-522e1a34fdfb
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Manage the association of enterprise projects to projects

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> To support synchronization of data between an enterprise project plan and a project, you must map the plan to the project. You can map multiple plans to the same project. To map enterprise projects, you must have registered and mapped the instance of Project Web Access or Project Web App (PWA) that is associated with the enterprise project to a project collection.  
  
 **Requirements**  
  
 Before you can map an enterprise project plan to a project, you must have [configured the integration](configure-tfs-project-server-integration.md) of Visual Studio Team Foundation Server and Microsoft Project Server. After you have performed the initial configuration, you can map and unmap plans to projects as needed.  
  
 To perform these procedures, you must have the **Administer Project Server integration** permission for a project collection, or you must belong to the **Team Foundation Administrators**  group. Also, the service account for Visual Studio Team Foundation Server must have administrative permissions to the instances of PWA that will participate in data synchronization. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
##  <a name="GetRegisteredPWAs"></a> Retrieve the instances of PWA that are registered  
 By using the following command, you can list the instances of PWA that have been registered with an application-tier server and are available to be mapped to a project collection.  
  
#### To list registered instances of PWA  
  
1.  Open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
    ```  
    cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
    ```  
  
     On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles**.  
  
2.  Type the following command, and then choose the **ENTER** key.  
  
    ```  
    TfsAdmin ProjectServer /GetRegisteredPWA /tfs:tfsUrl  
    ```  
  
     Replace *tfsUrl* with the uniform resource locator (URL) of the application-tier server.  
  
     The following message appears:  
  
     **The following PWA instances are registered:** *pwaUrl*.  
  
 For more information, see [Register an instance of PWA](register-pwa.md).  
  
##  <a name="GetMappedPWAs"></a> Retrieve the project collections that are mapped to an instance of PWA  
 By using the following command, you can determine which collections are mapped to an instance of PWA and available to participate in data synchronization. You can associate an enterprise project plan only with a project that is hosted on a collection that has been mapped to the instance of PWA that supports your plan.  
  
#### To list the mapped collections  
  
1.  At a command prompt, type the following command, and then choose the **ENTER** key:  
  
    ```  
    TfsAdmin ProjectServer /GetMappedCollections /tfs:tfsUrl  
    ```  
  
     Replace *tfsUrl* with the URL of the application-tier server.  
  
     The following message appears:  
  
     **The following collections are mapped:** *tpcUrl* **to Project Web Access** *pwaUrl*.  
  
##  <a name="MapPlanToProject"></a> Associate an enterprise project plan with a project  
 You can map an enterprise project plan to a project that contains data that you want to synchronize. As the following illustration shows, you can associate multiple enterprise projects with the same project.  
  
 ![Associate enterprise projects with a project](_img/pstfs_associateeptotp.png "PSTFS_AssociateEPtoTP")  
  
#### To map an enterprise project plan to a project  
  
1.  At a command prompt, type the following command, and then choose the **ENTER** key  
  
    ```  
    TfsAdmin ProjectServer /MapPlanToTeamProject /collection:tpcUrl /enterpriseProject:EnterpriseProjectName /teamProject:TeamProjectName /workItemTypes:ListOfWorkItemTypes /nofixedwork /projectFieldForWorkItemType:ProjectFieldName  
    ```  
  
     Replace *tpcUrl* with the URL of the project collection, *EnterpriseProjectName* with the name of the enterprise project plan, and *TeamProjectName* with the name of the project. Replace *ListOfWorkItemTypes* with the names of the types of work items that you want to participate in data synchronization. Specify **/noFixedWork** if you want to prevent fixed-task-type assignments. You can also specify the **/projectFieldForWorkItemType** argument and the name of a field in Project to store the type of work item.  
  
     The following messages appear:  
  
     Mapping enterprise project *EnterpriseProjectName***to project***TeamProjectName*.  
  
     **You have successfully mapped enterprise project** *EnterpriseProjectName* **to project** *TeamProjectName*.  
  
2.  Repeat step 1 for each enterprise project plan that you want to associate with a project.  
  
##  <a name="UnmapPlanFromProject"></a> Remove the association between an enterprise project plan and a project  
 Before you can remove the association between an enterprise project plan and a project, you must first delete all tasks that are linked to work items in the mapped project.  
  
#### To unmap an enterprise project plan from a project  
  
1.  At a command prompt, type the following command, and then press ENTER.  
  
    ```  
    TfsAdmin ProjectServer /UnmapPlanFromTeamProject/collection:tpcUrl /enterpriseProject:EnterpriseProjectName /teamProject:TeamProjectName  
    ```  
  
     Replace *tpcUrl* with the URL of the project collection, *EnterpriseProjectName* with the name of the enterprise project plan, and *TeamProjectName* with the name of the project.  
  
     The following messages appear:  
  
     **Unmapping enterprise project** *EnterpriseProjectName* **from project** *TeamProjectName*.  
  
     **Enterprise project** *EnterpriseProjectName* **was successfully unmapped from project** *TeamProjectName*.  
  
##  <a name="ResourcePool"></a> Add TFS resources to the resource pool for Project Server  
 To assign users in Team Foundation as resources in Project, you must add them to the enterprise resource pool and to the resource pool for the enterprise project plan. To make this process easier, you can configure PWA to automatically synchronize the security groups with groups of the same name in Active Directory. Also, you can synchronize users and resources in Project Server with users in Active Directory across multiple domains and forests.  
  
#### For information about how to add users to the enterprise resource pool, see the following pages on the Microsoft website:  
  
-   [Add resources to the enterprise resource pool](http://go.microsoft.com/fwlink/?LinkId=203356)  
  
-   [Manage Enterprise Resource Pool synchronization with Active Directory in Project Server 2010](http://go.microsoft.com/fwlink/?LinkId=203359)  
  
 In addition, you must grant users in Team Foundation access to sign in to Project Server. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
## Related articles  
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)   
 [Manage mappings](manage-mappings-enterprise-project-team-project.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)