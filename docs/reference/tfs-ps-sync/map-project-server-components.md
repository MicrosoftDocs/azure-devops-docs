---
title: Map Project Server components to Team Foundation components
titleSuffix: TFS 
description: Define each point of integration by mapping server products, project plans, and projects to support Team Foundation Server-Project Server integration 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: e4ae6a70-0e75-4387-a466-a2b882d23ed2
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---


# Map Project Server components to Team Foundation components

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> Before you can synchronize data between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server, you must first configure several points of integration between the two server products. You define each point of integration by defining the association or mappings between server products, project plans, and projects. Each association that you define adds software logic and processes to support the data synchronization between the two servers.  
  
 You can register multiple instances of Project Web Access or Project Web App (PWA) to TFS, and you can map multiple project collections to an instance of PWA.  
  
 For an end-to-end overview of how to integrate these products, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
 In addition to the mappings that this topic describes, you can also define how fields and types of work items participate in data synchronization. You define how fields are mapped for a collection and which types of work items can be synchronized for a project. You map only fields in Team Foundation to fields in Project Server whose data you want to synchronize, and you map types of work items that you want to synchronize with tasks in a project plan. For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md) and [Specify work item types](specify-wits-to-synchronize.md).  
  
##  <a name="MapTFS"></a> Mapping Multiple Instances of PWA to Team Foundation Server  
 You can register multiple instances of PWA to a single deployment of Team Foundation Server. The most common configuration will be the mapping of a single PWA to a single deployment of Team Foundation Server. However, if your Project Server deployment consists of multiple instances of PWA that must connect to Team Foundation Server, you can register each instance, as the following illustration shows:  
  
 ![Register PWAs to Team Foundation Server](_img/pstfs_registerpwas.png "PSTFS_RegisterPWAs")  
  
 Before you register an instance, you must install the required software on each application-tier server that hosts Project Server and each application-tier server for Team Foundation that will participate in data synchronization. For more information, see [System and setup requirements](system-and-setup-requirements.md).  
  
 When you register an instance, Team Foundation Server is updated with the information about the instance. In addition, the instance is updated with the custom fields and lookup tables that integration requires.  
  
##  <a name="MapTPCs"></a> Mapping Multiple Team Project Collections to an Instance of PWA  
 For each instance of PWA that you have registered, you can map a project collection that is defined on the application-tier server with which it is registered. You can map multiple collections to a single instance of PWA as the following illustration shows. However, you cannot map a collection to more than one instance of PWA.  
  
 ![Map PWAs to Team Project Collection](_img/pstfs_mappwas.png "PSTFS_MapPWAs")  
  
 When you map a collection to an instance, information is added to Team Foundation Server about the instance, global fields, rules, and processes that are used by the synchronization engine for that collection.  
  
##  <a name="MapProjects"></a> Mapping Multiple Project Plans to Team Projects  
 After you have mapped the collection to an instance of PWA and added field mappings to the collection, you can map an enterprise project plan to a project. Before you can map a project plan, you must first publish the plan to Project Server. As the following illustration shows, you can map multiple enterprise projects to the same project.  
  
 ![Associate enterprise projects with a project](_img/pstfs_associateeptotp.png "PSTFS_AssociateEPtoTP")  
  
 The **Project Server** tab and fields are added to the work item form for those types of work items that you have specified to participate in synchronization. For more information, see [Project Server fields that support data synchronization](project-server-fields-added-to-tfs.md).  
  
## Related articles  
 [System and setup requirements](system-and-setup-requirements.md)   
 [Synchronization process overview](synchronization-process-overview.md)   
 [Remove a component](remove-component-from-synchronization.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)