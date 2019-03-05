---
title: Update an existing installation and version compatibility requirements
titleSuffix: TFS 
description: Update an existing installation and version compatibility requirements when using Team Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: aa45b668-d753-4837-a5cc-ffdc82f08c1c
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Update an existing installation and version compatibility requirements
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> You should follow the guidelines in this topic when you update an existing deployment to Visual Studio Team Foundation Server 2013 (TFS). Updating a deployment requires upgrading the instances of TFS, Microsoft Project Server, and Visual Studio clients.  
  
 For administration purposes, you should upgrade the Visual Studio clients that you use for administration to the same software version as that running Team Foundation Server and Project Server. While clients running Visual Studio 2008 or Visual Studio 2010 are compatible with the updated deployment for the purposes of data synchronization, clients that will run the `TFSAdmin ProjectServer` commands must be at the same version level.  
  
 To locate the most recent version of the software for integrating Team Foundation Server and Project Server, see [System and setup requirements](system-and-setup-requirements.md).  
  
 
 **Requirements**  
  
 To perform the procedures in this topic, your **Administer Project Server integration** permission for the project collection must be set to **Allow**. Also, the service account for TFS must be granted the necessary permissions to interact with the instance of Project Web Access or Project Web App (PWA) that will participate in data synchronization. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
##  <a name="options"></a> Recommended update sequence  
 To update an existing deployment to the latest version of Visual Studio Team Foundation Server, perform the following actions.  
  
> [!NOTE]
>  You do not need to unmap or unregister any mapped or registered components prior to upgrading the software.  

-   Upgrade TFS according to the instructions provided in the Installation Guide: [Upgrade Team Foundation Server](/azure/devops/server/upgrade/get-started).  
  
    > [!IMPORTANT]
    >  Upgrading to Visual Studio Team Foundation Server 2013 requires 64-bit machines. Also, to install Team Foundation Server Extensions for Project Server requires that Project Server is installed on 64-bit machines.  
  
-   Uninstall the Team Foundation Server and Project Server Integration Feature Pack from Project Server.  
  
-   Install the Team Foundation Server Extensions for Project Server according to the instructions provided in the Installation Guide: [Install Team Foundation Server Extensions for Project Server](https://msdn.microsoft.com/library/hh549244.aspx).  
  
     Install the extensions on each machine that will participate in data synchronization according to the following versions:  
  
    -   Each web-tier and application-tier server that hosts Project Server 2010.  
  
-   Upgrade any clients that you will use to run `TfsAdmin ProjectServer` commands to Visual Studio 2013.  
  
##  <a name="changes"></a> Changes introduced in the latest version of Visual Studio and TFS Extensions for Project Server  
 Visual Studio Team Foundation Server 2013 and Team Foundation Server Extensions for Project Server introduce the following changes:  
  
-   As part of upgrading an instance of TFS or deploying a new installation based on Visual Studio Team Foundation Server 2013, a new transform is introduced in the mapping of fields between TFS and Project Server. The new transform is applied to the **Remaining Work** and **Completed Work** fields. When the synchronization engine detects a hierarchy under a work item that is synchronized with Project Server, it performs a roll-up for the work and assignments to send to Project Server. However, with the `transformType` set to `ClearValueIfParent`, the synchronization engine clears the work fields on the parent work item to avoid incorrect data in reports. For more information, see [Field Mapping XML Element Reference](field-mapping-xml-element-reference.md).  
  
## Related articles  
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)   
 [Synchronize TFS with Project Server](synchronize-tfs-project-server.md)