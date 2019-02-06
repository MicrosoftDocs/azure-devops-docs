---
title: Define the work item types available for synchronization
titleSuffix: TFS 
description: Configure the two server products before you synchronize data between Team Foundation Server & Project Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: dd8f80c2-3faa-45a2-9941-1382a8b5c910
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---

# Define the work item types available for synchronization

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> Before you can synchronize data between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server, you must configure the integration of the two server products. As part of the configuration tasks, you must associate an enterprise project plan with a project, and you must specify the types of work items that will participate in synchronization. After you make your initial configurations and mapping, you can change the types of work items that are mapped.  
  
 You can manage the types of work items that participate in synchronization by using the following options of the **TfsAdmin ProjectServer** command-line tool:  
  
-   **/MapWorkItemTypes**: Defines the types of work items that can participate in synchronization for a project. Although you can map several types, only those work items that are submitted for publishing are synchronized.  
  
-   **/GetMappedWorkItemTypes**: Returns the list of work item types that are configured to participate in synchronization for a project.  
  
-   **/UnmapWorkItemTypes**: Removes work item types from participating in synchronization for a project.  
  
 For an overview of how to integrate the two server products, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md). For an overview of how to associate an enterprise project with a project, see [Associate enterprise projects and projects](manage-associations-enterprise-projects.md).  
  
 To use the **TfsAdmin ProjectServer** command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%.**.  
  
 **Requirements**  
  
 To use these commands, your **Administer Project Server integration** permission must be set to **Allow**. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instance of PWA that will participate in data synchronization.  For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
   
  
## Syntax  
  
```  
TfsAdmin ProjectServer /GetMappedWorkItemTypes /collection:tpcUrl teamProject:TeamProjectName  
```  
  
```  
TfsAdmin ProjectServer /MapWorkItemTypes /collection:tcpUrl /teamProject:TeamProjectName /workItemTypes:ListOfWorkItemTypes [/skipUIChanges]  
```  
  
```  
TfsAdmin ProjectServer /UnmapWorkItemTypes /collection:tpcUrl /teamProject:TeamProjectName /workItemTypes:ListOfWorkItemTypes [/force]  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`tpcUrl`|Specifies the uniform resource locator (URL) of a project collection. You specify the URL in the following format:<br /><br /> **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If you do not specify a virtual directory, you specify the URL in the following format:<br /><br /> **http**://*ServerName:Port/CollectionName*|  
|**/teamProject:** *TeamProjectName*|Specifies the name of a project that is defined in the project collection.|  
|**/workItemTypes**:`ListOfWorkItemTypes`|Specifies, in a comma-delimited list, the reference names of one or more types of work items. You should specify only those types of work items whose data you want to track in Project Professional. For example, you can specify the following types of work items to support an Agile process as *"User Story,Task?* or *"User Story,Task*. Do not include a space after the comma.|  
|**/skipUIChanges**|Specifies that the **Project Server** tab in the work item form should not be changed for the types that you specify. You should include this flag if you have customized the **Project Server** tab for the affected types or the `MapWorkItemTypes` command cannot complete. You can manually update a type definition. For more information, see [Added elements to WIT definitions](xml-elements-added-to-wit-definition.md).|  
|**/force**|Removes all links that bind work items of the types that you specify to tasks in Project. If you use this option, you can remove types of work items from participating in data synchronization, even if one or more work items of that type that are currently being synchronized.|  
|**/?** or **help**|Displays information about the command.|  
  
## Remarks  
 When you run a command, a message appears that indicates what action is being performed on what object. For example, the following message states that user stories and tasks are being configured to participate in data synchronization.  
  
```  
Configuring synchronization for the following work item types for project ProjA: User Story, Task. . .   
```  
  
 Another message appears after the command finishes. For example, the following message indicates that user stories and tasks have successfully been configured.  
  
```  
You have successfully configured the following work item types for project ProjA: User Story, Task.  
```  
  
 In addition to configuring the types of work items that can participate in synchronization, the **/MapWorkItemTypes** command performs the following operations:  
  
-   Adds the types of work items that you specify to the set of types that participate in data synchronization. That is, the command does not unmap any existing mapped types.  
  
-   Adds the **Project Server** tab to the forms for the types of work items that you specify.  
  
     If a **Project Server** tab is already defined for a type of work item that you specify, that type is ignored, and no changes are made to the forms for work items of that type.  
  
 If you try to map work item types for a project that is not associated with an enterprise project plan, an error appears. You can map work item types only for projects that are configured to participate in synchronization. For more information, see [Associate enterprise projects and projects](manage-associations-enterprise-projects.md).  
  
 If you remove the mapping for a work item type, the **Project Server** tab is removed from the form for that type for the project that you unmapped.  
  
 Before you unmap a work item type for a project, you should delete the tasks from the enterprise project plan to remove all associations between them and work items in Team Foundation. After you delete the tasks from the enterprise project plan, you must publish it and wait for synchronization to complete. As an alternative, you can specify the `/force` flag to remove all links that bind work items to tasks for the project. Only those work items that are of the types that you specify are removed from participating in synchronization.  
  
> [!TIP]
>  If you delete the tasks, you may want to first copy them to another plan to maintain a record of them.  
  
## Examples  
  
### List work item types that are mapped  
 The following example retrieves the types of work items that are configured to participate in synchronization for the Contoso project in DefaultCollection on AdventureWorksServer.  
  
```  
TfsAdmin ProjectServer /GetMappedWorkItemTypes /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /teamproject:Contoso  
```  
  
### Map a work item type for a project  
 The following example configures user stories and tasks to participate in data synchronization for the Contoso project.  
  
```  
TfsAdmin ProjectServer /MapWorkItemTypes /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection/ /teamProject:Contoso /workitemtypes:User Story, Task 
```  
  
### Remove mapping of a work item type for a project  
 The following example removes tasks from participating in data synchronization for the Contoso project.  
  
```  
TfsAdmin ProjectServer /UnmapWorkItemTypes /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection/ /teamProject:Contoso /workitemtypes:Task  
```  
  
## Related articles  
 [Customize the field mapping](customize-field-mapping-tfs-project-server.md)   
 [Specify work item types](specify-wits-to-synchronize.md)   
 [Map integration components](map-integration-components.md)