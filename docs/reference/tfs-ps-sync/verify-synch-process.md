---
title: Verify the synchronization process for TFS-Project Server integration
titleSuffix: TFS 
description: Verify the synchronization process for the integration of Team Foundation Server & Project Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 767af0db-6c5d-4c1e-b2a3-8b4ffbd8ff6d
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
ms.date: 01/12/2017
---


# Verify the synchronization process for TFS-Project Server integration
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="top"></a> If you suspect that the data in Visual Studio Team Foundation Server and Microsoft Project Server is not synchronizing as you expect, you can review the following checklist to verify or troubleshoot operations.  
  
-   **Resolve post-installation and configuration issues**. If you configure the two server products but synchronization does not start as you expect, you can review the following configuration elements:  
  
    -   Verify that all prerequisite software and cumulative updates have been installed. For more information, see [Prerequisite software](system-and-setup-requirements.md#prereq).  
  
    -   (Project Server 2010 only) Verify that the SharePoint Configuration Wizard has been run after any cumulative updates have been installed. For more information, see [Upgrade Microsoft Project Server 2010  to Microsoft Project Server 2013](upgrade-ps-2010-to-ps-2013.md).  
  
    -   Verify that all required permissions have been assigned. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
-   **Verify the health of the synchronization engine**: If synchronization had been performing as you expect before a problem occurred, you can perform the following procedures:  
  
    -   **Check synchronization messages**. By using the `/GetSyncMessages` option of the `TFSAdmin ProjectServer` command-line tool, you can display the errors that were logged most recently for a project collection. For more information, see [View error messages](view-synch-error-messages.md).  
  
    -   **Review how fields get updated**. If you find that one or more fields are not being updated as you expect, review the information in [Understand how updates to specific fields are managed](understand-how-updates-to-specific-fields-managed.md). In particular, you might discover why a field is not being updated even though no synchronization messages are being logged. The data type of the field, the `OnConflict` attribute for mapping fields, and the task hierarchy affect how the synchronization engine updates specific fields.  
  
    -   **Review the synchronization process**. You can manage the integration of the two server products more effectively if you understand how the synchronization engine manages the flow of data between them. The engine synchronizes data in three ways. It captures and updates task-related and resource-related data in both server products while respecting the ownership of data by the project manager in the project plan. For more information, see [Synchronization process overview](synchronization-process-overview.md).  
  
    -   **Check known issues and workarounds**. If an error appears, you can  determine whether you have encountered a known issue and whether a workaround has been identified. For more information, see [Known issues and workarounds](known-issues-and-workarounds.md).  
    -   Verify that the Team Foundation Background Job Agent is running. For more information, see [Stop and start services, application pools, and websites](/azure/devops/server/admin/stop-start-stuff).  
  
 If you have reviewed these suggestions and you still suspect a problem, visit the following forum on the Microsoft website: [Team Foundation Server and Project Server Integration](http://go.microsoft.com/fwlink/?LinkId=207282).  
  
## Related articles  
 [Known issues and workarounds](known-issues-and-workarounds.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)