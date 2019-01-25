---
title: Administrate the integration of TFS and Project Server
titleSuffix: TFS 
description: Manage the configuration of Team Foundation Server & Project Server to support data synchronization 
ms.prod: devops
ms.technology: devops-agile 
ms.assetid: 529c5a49-31d7-4080-b3b5-1bcc95c8a102
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 01/12/2017
---

# Administrate the integration of TFS and Project Server

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> 
As an administrator for the integration of Visual Studio Team Foundation Server (TFS) and Microsoft Project Server, you must configure the integration of the two server products. When you configure this integration, you define what components participate in data synchronization and what data flows from projects to enterprise project plans. The initial configuration requires that you install software, grant permissions, register instances of Project Web Access or Project Web App (PWA), and map Project Server components to Team Foundation components. You might also need to customize the types of work items and how fields are mapped to participate in data synchronization. After you configure the integration, you might need to monitor and troubleshoot it.  
  
> [!NOTE]
>  You can download a virtual machine that demonstrates how you can integrate TFS and Project Server 2010 so that teams can share data between the two server products. This virtual machine includes enterprise project plans in Project Server that are mapped to projects in Team Foundation Server, along with sample data to highlight key integration scenarios. The walkthrough documents illustrate four scenarios that simulate the interactions between the project manager, who is working in Project Server, and members of the software development team, who are working in TFS. For more information, see the following page on the Microsoft website: [TFS 2010 and Microsoft Project Server 2010 Integration Hyper-V Virtual Machine](http://go.microsoft.com/fwlink/?LinkID=196413).  
  
##  <a name="Setup"></a> Setup and configuration  
  
|Task|Related topics|  
|----------|--------------------|  
|**Plan the integration of the two server products**. To synchronize data between TFS and Project Server, you must install Team Foundation Server Extensions for Project Server on those machines that will participate in managing projects by using Project Professional. To understand how you will configure the integration of the two server products, you should understand how Project Server components map to TFS components.|[System and setup requirements](system-and-setup-requirements.md)<br /><br /> [Map components](map-project-server-components.md)|  
|**Configure the integration to support a test or evaluation environment**. You can use this topic as a quick reference to install software, assign permissions, configure integration, and verify data synchronization.|[Configuration quick reference](configuration-quick-reference.md)|  
|**Configure the integration to support a production environment**. You can use this topic to collect the information that is required for configuration, permissions that you must grant, and configuration tasks that you must perform to support a customized integration of the two server products.|[Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)|  
|**Grant permissions to support configuration and data synchronization**. You must grant permissions to administrators, service accounts, and team members.|[Assign permissions](assign-permissions-support-tfs-project-server-integration.md)|  
|**Map and unmap enterprise project plans to projects**. You define which project plans synchronize data with Team Foundation by defining the association or mappings between project plans and projects. You can map multiple plans to a project, but you can map each plan to only one project.|[Associate enterprise projects and projects](manage-associations-enterprise-projects.md)|  
|**Manage which work item types participate in data synchronization**. To support synchronization of data between an enterprise project plan and a project, you must specify the types of work items that you want to participate in synchronization. You can define the types when you associate a project plan to a project, and then you can add or remove types later.|[Specify work item types](specify-wits-to-synchronize.md)|  
|**Manage which fields participate in data synchronization**. To synchronize data between an enterprise project plan and a project, you must associate the TFS work-item fields with Project Server fields. You can add fields and specify how they synchronize by customizing the field mapping file.<br /><br /> You can map fields that are associated with pick lists in Team Foundation. However, you must create lookup tables in Project Server to match the pick lists. You cannot automatically synchronize pick lists and lookup tables.|[Customize the field mapping](customize-field-mapping-tfs-project-server.md)|  
  
##  <a name="Admin"></a> Administer and troubleshoot  
  
|Task|Related topics|  
|----------|--------------------|  
|**Manage and modify the integration of synchronized components**. You can change how components are mapped or list the current mappings by using the `TfsAdmin ProjectServer` command-line tool.  You can review the options and parameters that are provided with this tool and learn about the operations that specific options perform.|[Map integration components](map-integration-components.md)|  
|**Understand how synchronization occurs**. The synchronization engine captures and maintains task-related and resource-related data in both TFS and Project Server while respecting the ownership of data by the project manager in the project plan.|[Understand how updates to specific fields are managed](understand-how-updates-to-specific-fields-managed.md)<br /><br /> [Synchronization process overview](synchronization-process-overview.md)|  
|**Change the configuration or shut down synchronization**. You can remove components that you have configured to participate in data synchronization, or you can permanently shut down synchronization. You should always follow the recommended reconfiguration sequence when you remove components from participating in synchronization.|[Remove a component](remove-component-from-synchronization.md)|  
|**Re-map or re-configure the integration**. After you have configured the two server products to support data synchronization, you might need to reconfigure a component before or after you move or delete a project, project collection, or an application-tier server.|[Change your deployment configuration](change-deployment-configuration.md)|  
|**Retrieve the latest synchronization error messages**.  To help troubleshoot the integration of the two server products, you can display a list of recent synchronization errors. You can display the most recent errors that were logged for a project collection if you use the `/GetSyncMessages` option of the `TfsAdmin ProjectServer` command-line tool.|[View error messages](view-synch-error-messages.md)|  
|**Troubleshoot synchronization and configuration issues**. You can use these topics to resolve problems that can occur during configuration of the two server products or during the synchronization process.|[Verify synchronization](verify-synch-process.md)<br /><br /> [Known issues and workarounds](known-issues-and-workarounds.md)|  
  
## Related articles  
 [Manage projects](manage-projects.md)