---
title: Map integration components
titleSuffix: TFS 
description: Use TFSAdmin ProjectServer command-line tool to configure integration between Team Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: ddac3deb-bb59-4536-9d4a-ecd389ceb265
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---

# Map integration components

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

You can synchronize data between Visual Studio Team Foundation Server 2013 and Microsoft Project Server if you first configure several points of integration between them. To configure this integration, you use the **TFSAdmin ProjectServer** command-line tool. To access this tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%.**.  
  
> [!NOTE]
>  For an overview of this configuration, see [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md).  
  
## Global parameters  
 You can use the parameters in the following table to display information about **TfsAdmin ProjectServer**.  
  
|Parameter|Description|  
|---------------|-----------------|  
|**/help**<br /><br /> or<br /><br /> **/?**|Displays the syntax and parameters for the command-line tool.|  
|*Command* **/help**<br /><br /> or<br /><br /> *Command* **/?**|Displays the syntax and parameters for the **TfsAdmin ProjectServer** command that you specify.|  
  
## Commands that support TFS-Project Server integration  
  
|Tasks|Related content|  
|-----------|---------------------|  
|**Manage the registration of Project Server to Team Foundation Server**. To integrate Project Server and Team Foundation Server, you must first register an instance of Project Web Access or Project Web App (PWA) to Team Foundation Server. To manage this type of registration, you use the following command options:<br /><br /> -   **/RegisterPWA**: Registers an instance of Project Web Access to Team Foundation Server.<br />-   **/GetRegisteredPWA**: Returns the list of registered instances.<br />-   **/UnregisterPWA**: Removes the registration of an instance.|[Register an instance of PWA](register-pwa.md)|  
|**Manage the association of project collections to an instance of PWA**. You manage the association of project collections to an instance by using the following command options:<br /><br /> -   **/MapPWAToCollection**: Maps a project collection to an instance of Project Web Access. Before you can map a collection to an instance, you must register the instance.<br />-   **/GetMappedCollections**: Returns the list of mapped collections.<br />-   **/UnMapPWAFromCollection**: Removes the mapping between a collection and an instance.|[Map a project collection](map-team-project-collection-to-pwa.md)|  
|**Manage the association of enterprise project plans to projects**. To synchronize tasks in an enterprise project with work items in a project, you must map the project plan to the project. You can manage this type of mapping by using the following command options:<br /><br /> -   **/MapPlanToTeamProject**: Maps an enterprise project to a project. Before you create this type of mapping, you must map the instance of PWA instance that is associated with the enterprise project.<br />-   **/GetMappedProjects**: Returns the list of enterprise projects that are mapped to projects.<br />-   **/UnmapPlanFromTeamProject**: Removes a mapping between a project and an enterprise project.|[Manage mappings](manage-mappings-enterprise-project-team-project.md)|  
|**Manage which types of work items participate in data synchronization**. After you have made your initial configurations and mapping, you can change the types of work items that are mapped. You can manage the types of work items that participate in synchronization by using the following command options:<br /><br /> -   **/MapWorkItemTypes**: Defines the types of work items that can participate in synchronization for a project. Regardless of whether you map a given type of work item, work items of that type will not be synchronized unless a user submits them for publishing.<br />-   **/GetMappedWorkItemTypes**: Returns the list of work item types that are configured to participate in synchronization for a project.<br />-   **/UnmapWorkItemTypes**: Removes types of work items from participating in synchronization for a project.|[Define the work item types to synchronize](define-work-item-types-available-synchronization.md)|  
|**Customize how fields are mapped between Team Foundation Server and Project Server**. You must map fields between the two server products and define how the data is synchronized. You can either upload the default mappings or add mappings and customize how fields are synchronized. You maintain the field mappings by using the following command options:<br /><br /> -   **/DownloadFieldMappings**: Downloads the field mappings to a file.<br />-   **/UploadFieldMappings**: Uploads the field mappings that are defined in a file.|[Upload or download field mappings](manage-field-mappings.md)|  
|**Retrieve recent error messages that occurred when data was synchronized**. To support your troubleshooting efforts, you can retrieve information about the most recent errors that were logged for a project collection if you use the `/GetSyncMessages` command option.|[View error messages](view-synch-error-messages.md)|  
  
## Related articles  
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)   
 [Remove a component](remove-component-from-synchronization.md)   
 [Change your deployment configuration](change-deployment-configuration.md)   
 [Administer TFS-Project Server integration](administrate-integration-tfs-project-server.md)