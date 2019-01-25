---
title: Manage mappings between an enterprise project and a  project
titleSuffix: TFS 
description: Manage mappings between an enterprise project and a project to support Team Foundation Server & Project Server integration
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 05c10281-e873-43ea-80a3-23050438c379
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---

# Manage mappings between an enterprise project and a  project

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> Before you can synchronize data between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server, you must perform several tasks that include associating an enterprise project plan with a project. For an overview of how to integrate these two products, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
 You can manage the association of enterprise project plans with projects in TFS by using the following commands in the **TfsAdmin ProjectServer** command-line tool:  
  
-   **/MapPlanToTeamProject**: Maps an enterprise project plan to a project. You can map multiple plans to the same project, but you can map each plan to only one project.  
  
-   **/GetMappedProjects**: Returns the list of enterprise project plans that are mapped to any project in the project collection that you specify.  
  
-   **/UnmapPlanFromTeamProject**: Removes the mapping between an enterprise project plan and a project.  
  
> [!NOTE]
>  After you map an enterprise project plan to a project, you can change the types of work items that will be synchronized. For more information, see [Define the work item types to synchronize](define-work-item-types-available-synchronization.md).  
  
 To use the **TFSAdmin**  command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%.**.  
  
 **Requirements**  
  
 To use these commands, your **Administer Project Server integration** permission must be set to **Allow** for the project collection. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instance of PWA that will participate in data synchronization.  For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
 
  
## Syntax  
  
```  
TfsAdmin ProjectServer /GetMappedProjects /collection:tpcUrl  
```  
  
```  
TfsAdmin ProjectServer /MapPlanToTeamProject /collection:tpcUrl /enterpriseProject:EnterpriseProjectName /teamProject:TeamProjectName [/workItemTypes:ListOfWorkItemTypes] [/noFixedWork] [/projectFieldForWorkItemType:ProjectFieldName] [/skipUIChanges]  
```  
  
```  
TfsAdmin ProjectServer /UnmapPlanFromTeamProject /collection:tpcUrl /enterpriseProject:EnterpriseProjectName /teamProject:TeamProjectName [/force]  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`tpcUrl`|Specifies the uniform resource locator (URL) of a project collection. You specify the URL in the following format: **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If you do not specify a virtual directory is used, you specify the URL in the following format:<br /><br /> **http**://*ServerName:Port/CollectionName*|  
|**/enterpriseProject**:`EnterpriseProjectName`|Specifies the name of an enterprise project plan. The plan must be stored and published on Project Server, and the instance of PWA must be registered with the deployment of Team Foundation Server where the project collection is stored.|  
|**/teamProject:** *TeamProjectName*|Specifies the name of a project that is defined in the project collection.|  
|**/workItemTypes**:`ListOfWorkItemTypes`|Specifies, in a comma-delimited list, the reference names of one or more types of work items. You should specify only those types of work items whose data you want to track in Project Professional. For example, you can specify the following types of work item to support an Agile process as *"User Story,Task"* or *"User Story",Task* Do not include a space after the comma.|  
|**/noFixedWork**|Specifies that the task type in Project Professional should not be automatically set to Fixed Work for tasks that are mapped to work items in Team Foundation. By default, as part of the integration between the two server products, tasks in the enterprise project plan that are mapped to work items in Team Foundation have their task type set to **Fixed Work**. You can override this behavior by using this switch. Fixed work is one of three types of tasks that you can use in Project. For more information, see [Change the task type Project uses to calculate task duration](http://go.microsoft.com/fwlink/?LinkId=203354).|  
|**/projectFieldForWorkItemType**: `ProjectFieldName`|Specifies the name of the Microsoft Project field in which to display the value for the work item type that is defined in Team Foundation. You should specify a value between pjTaskText1 and pjTaskText30. By default, the value is pjTaskText30.|  
|**/force**|Removes all mappings for all work items that are defined in the project and currently linked to a project plan. An unmapped project cannot contain any linked work items. You should specify this option only if you are sure that you no longer want any work items in the project to continue to participate in data synchronization.|  
|**/skipUIChanges**|Specifies that the **Project Server** tab in the work item form should not be changed for the types that you specify. You should include this flag if you have customized the **Project Server** tab for the affected types.|  
|**/?** or **help**|Displays information about the command.|  
  
## Remarks  
 When you run a command, a message appears and indicates the action that is being performed and the object that is being acted upon. For example, the following message states that the enterprise project plan is being mapped:  
  
```  
Mapping enterprise project EntProjA . . . Done.  
```  
  
 Another message appears after the command finishes. For example, the following message indicates that the enterprise project plan has been mapped to the project:  
  
```  
Mapping enterprise project EntProjA to project MyTeamProj . . . Done.  
```  
  
 In addition to associating the enterprise project plan with the project, the **/MapPlanToTeamProject** option adds the **Project Server** tab to the work item forms for the types of work items that you specify.  
  
 If you try to map an enterprise project to a project for which no fields have been mapped, a message indicates that a mapping is required, and no more operations are performed. For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md).  
  
 If you remove the mapping between an enterprise project and a project to which no other enterprise projects are mapped, the **Project Server** tab is removed from the forms for all work item types in the project that you unmapped.  
  
 Before you unmap a project, you must remove the association between tasks in the enterprise project plan and work items in Team Foundation. You can remove this association by deleting the tasks from the enterprise project plan, publishing the plan, and waiting for synchronization to complete. As an alternative, you can use the `/force` flag to remove the association between project tasks and work items.  
  
> [!TIP]
>  Before you delete the tasks, you might want to copy them to another plan to record the tasks that you are deleting.  
  
## Examples  
 Unless otherwise specified, the following values apply in each example:  
  
-   URL for the instance of PWA: http://MyPWAServer/MyPWAInstance/  
  
-   URL for Team Foundation Server: http://AdventureWorksServer:8080/tfs/  
  
-   URL for the project collection: http://AdventureWorksServer:8080/tfs/DefaultCollection  
  
### List enterprise projects that are mapped  
 The following example lists the enterprise projects that are mapped to a project in Collection0 on AdventureWorksServer.  
  
```  
TfsAdmin ProjectServer /GetMappedProjects /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
  
```  
  
### Map an enterprise project to a project  
 The following example maps MyEnterpriseProjA to MyTeamProjB in DefaultCollection on AdventureWorksServer and specifies that user stories and tasks will participate in synchronization.  
  
```  
TfsAdmin ProjectServer /MapPlanToTeamProject /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection/ enterpriseProject:MyEnterpriseProjA /teamProject:MyTeamProjB /workItemTypes:"User Story, Task"  
```  
  
### Remove mapping of an enterprise project to a project  
 The following example removes the association of MyEnterpriseProjA to MyTeamProjB in DefaultCollection on AdventureWorksServer.  
  
```  
TfsAdmin ProjectServer /UnmapPlanFromTeamProject /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection/ enterpriseProject:MyEnterpriseProjA /teamProject:MyTeamProjB  
```  
  
## Related articles  
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)   
 [Map integration components](map-integration-components.md)