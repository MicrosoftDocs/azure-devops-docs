---
title: Namespace reference  
titleSuffix: Azure DevOps
description: Understand the set of namespaces used to manage security  
ms.technology: devops-security
ms.assetid: 
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 10/01/2020
---

# Security namespace and permission reference for Azure DevOps 

[!INCLUDE [version-all](../../includes/version-all.md)]


<!--- QUESTIONS   

Note access level restrictions. 
Note non UI permissions

--> 
 

Security namespaces are used to store access control lists (ACLs) on tokens. Data stored in security namespaces determines the level of access the following entities have to perform a specific action on a specific resource.
- Organization owner  
- Member of an Azure DevOps instance  
- Azure DevOps service account  
- Azure DevOps service principal  
 
Each family of resources, such as work items or Git repositories, is secured through a unique namespace. Each security namespace contains zero or more ACLs. Each ACL contains a token, an inherit flag, and a set of zero or more access control entries (ACEs). Each ACE contains an identity descriptor, an allowed permissions bitmask, and a denied permissions bitmask. Tokens are arbitrary strings representing resources in Azure DevOps.

> [!NOTE]   
> Namespaces and tokens are valid for all versions of Azure DevOps. Some namespaces have been deprecated as listed in the [Deprecated and read-only namespaces](#deprecated-namespaces) section later in this article. 
You manage most permissions through the web portal. For those that aren't surfaced through the web portal, you can manage them using command line tools or REST API:
> - For Azure DevOps Server 2020 and Azure DevOps Services, you can use the `az devops security permission` commands. 
> - For on-premises Azure DevOps instances, you can use the [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd) commands. 
> For all Azure DevOps instances, you can use the [Security REST API](/rest/api/azure/devops/security). 

## Security namespaces and their IDs

The following sections lists valid namespaces and provides descriptions and links to more information. Many security namespaces correspond to permissions you set through a Security or Permissions user interface. Some namespaces govern access assigned to to members of default security groups or Azure DevOps service principals. Information is grouped as follows: 
- Object-level 
- Project-level
- Organization or collection-level 
- Server-level
- Role-based 
- Internal only 

## Hierarchy and tokens

A security namespace can be either hierarchical or flat. 
Tokens in a hierarchical namespace exist in a hierarchy with effective permissions inherited from parent tokens to child tokens.
Tokens in a flat namespace have no concept of a parent-child relationship between any two tokens.

Tokens in a hierarchical namespace either have a fixed length for each path part, or variable length.
If the tokens have variable-length path parts, then a separator character is used to distinguish where one path part ends and another begins.

Token examples for different namespaces are provided in the next section. 

## Object-level namespaces and permissions


The following table describes the namespaces that manage object-level permissions. Most of the listed permissions are managed through the web portal user interface for each object.  

---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **Permissions**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      AnalyticsViews
   :::column-end:::
   :::column span="1":::
      `Read`                
      `Edit`                
      `Delete`              
      `Execute`             
      `ManagePermissions`   
   :::column-end:::
   :::column span="2":::
      [Manages object-level Analytics views permissions](/azure/devops/organizations/security/permissions#analytics-views-permissions) to read, edit, delete, and generate reports. You can manage these permissions for each [Analytics view from the user interface](/azure/devops/report/powerbi/analytics-security).  
      **Token format for project level permissions**: `$/Shared/PROJECT_ID`  
      **Example**: `$/Shared/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`   
      <br/>
      ID: `d34d3680-dfe5-4cc6-a949-7d9c68f73cba`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="1":::
      Build  
   :::column-end:::
   :::column span="1":::
      `ViewBuilds`                       
      `EditBuildQuality`                 
      `RetainIndefinitely`               
      `DeleteBuilds`                     
      `ManageBuildQualities`             
      `DestroyBuilds`                    
      `UpdateBuildInformation`           
      `QueueBuilds`                      
      `ManageBuildQueue`                 
      `StopBuilds`                       
      `ViewBuildDefinition`              
      `EditBuildDefinition`              
      `DeleteBuildDefinition`            
      `OverrideBuildCheckInValidation`   
      `AdministerBuildPermissions`       
   :::column-end:::
   :::column span="2":::
      [Manages object-level build permissions](/azure/devops/organizations/security/permissions#build-object-level).  
      **Token format for project-level build permissions**: `PROJECT_ID`  
      If you need to update permissions for a particular build definition ID, for example, 12, security token for that build definition looks as follows:  
      **Token format for project level build permissions**: `PROJECT_ID/12`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`  
      <br/>
      ID: `33344d9c-fc72-4d6f-aba5-fa317101a7e9`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      CSS  
   :::column-end:::
   :::column span="1":::
      `GENERIC_READ`         
      `GENERIC_WRITE`        
      `CREATE_CHILDREN`      
      `DELETE`               
      `WORK_ITEM_READ`       
      `WORK_ITEM_WRITE`      
      `MANAGE_TEST_PLANS`    
      `MANAGE_TEST_SUITES`   
   :::column-end:::
   :::column span="2":::
      [Manages area path (object-level) permissions](/azure/devops/organizations/security/permissions#area-path-object-level) to create, edit, and delete child nodes and set permissions to view or edit work items in a node. You can manage these permissions through the [Project settings, Project configuration administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#create-child-nodes-modify-work-items-under-an-area-path).  
      <br/>
      ID: `83e28ad4-2d72-4ceb-97b0-c7726d5502c3`
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2015"
:::row:::
   :::column span="1":::
      DashboardsPrivileges  
   :::column-end:::
   :::column span="1":::
      `Read`              
      `Create`                  
      `Edit`                    
      `Delete`                  
      `ManagePermissions`       
      `MaterializeDashboards`   
   :::column-end:::
   :::column span="2":::
      [Manages dashboard (object-level) permissions](/azure/devops/organizations/security/permissions#dasboard-permissions) to edit and delete dashboards and manage permissions for a project dashboard. You can manage these permissions through the [Dashboards user interface](/azure/devops/report/dashboards/dashboard-permissions#set-permissions-for-a-project-dashboard).   
      <br/>
      ID: `8adf73b7-389a-4276-b638-fe1653f7efc7`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="1":::
      Git Repositories    
   :::column-end:::
   :::column span="1":::
      `Administer`                
      `GenericRead`               
      `GenericContribute`         
      `ForcePush`                 
      `CreateBranch`              
      `CreateTag`                 
      `ManageNote`                
      `PolicyExempt`             
      `CreateRepository`          
      `DeleteRepository`          
      `RenameRepository`          
      `EditPolicies`              
      `RemoveOthersLocks`         
      `ManagePermissions`         
      `PullRequestContribute`    
      `PullRequestBypassPolicy`  
   :::column-end:::
   :::column span="2":::
      [Manages Git repository (object-level) permissions](/azure/devops/organizations/security/permissions#git-repository-permissions-object-level). You can manage these permissions through the [Project settings, Repositories administrative interface](/azure/devops/organizations/security/set-git-tfvc-repository-permissions#set-git-repository-permissions).  
      **Token format for project-level permissions**: `repoV2/PROJECT_ID`  
      You need to append `RepositoryID` to update repository-level permissions.  
      **Token format for repository level permissions**: `repoV2/PROJECT_ID/REPO_ID`  
      For more information on the Git Repositories namespace and its tokens refer to this blog post, [Git repo tokens for the security service](https://devblogs.microsoft.com/devops/git-repo-tokens-for-the-security-service/).  
      <br/>
      ID: `2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Iteration 
   :::column-end:::
   :::column span="1":::
      `GENERIC_READ`      
      `GENERIC_WRITE`     
      `CREATE_CHILDREN`   
      `DELETE`          
   :::column-end:::
   :::column span="2":::
      [Manages iteration path (object-level) permissions](/azure/devops/organizations/security/permissions#iteration-path-permissions) to create, edit, and delete child nodes and view child node permissions. You can manage these permissions through the [Project settings, Project configuration administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#create-child-nodes-modify-work-items-under-an-area-path). <br/>
      **Token format**: `'vstfs:///Classification/Node/Iteration_Identifier/'`  
      Suppose, you have the following iterations configured for your team.  
      &ndash; ProjectIteration1  
      &nbsp;&nbsp;TeamIteration1  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration1ChildIteration1  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration1ChildIteration2  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration1ChildIteration3  
      &nbsp;&nbsp;TeamIteration2  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration2ChildIteration1  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration2ChildIteration2  
      <br/>
      To update permissions for `ProjectIteration1\TeamIteration1\TeamIteration1ChildIteration1`, the security token looks as follows:  
      `vstfs:///Classification/Node/ProjectIteration1_Identifier:vstfs:///Classification/Node/TeamIteration1_Identifier:vstfs:///Classification/Node/TeamIteration1ChildIteration1_Identifier`  
      <br/>
      ID: `bf7bfa03-b2b7-47db-8113-fa2e002cc5b1`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      MetaTask  
   :::column-end:::
   :::column span="1":::
      `Administer`  
      `Edit`         
      `Delete`      
   :::column-end:::
   :::column span="2":::
      [Manages task group permissions](/azure/devops/organizations/security/permissions#task-group) to edit and delete task groups, and administer task group permissions.  
      <br/>
      ID: `f6a4de49-dbe2-4704-86dc-f8ec1a294436`
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="1":::
      Plan  
   :::column-end:::
   :::column span="1":::
      `View`     
      `Edit`   
      `Delete`   
      `Manage`   
   :::column-end:::
   :::column span="2":::
      [Manages permissions for Delivery Plans](/azure/devops/organizations/security/permissions#plan-permissions") to view, edit, delete, and manage delivery plans. You can manage these permissions through the [user interface for each plan](/azure/devops/organizations/security/set-permissions-access-work-tracking#edit-or-manage-permissions-for-delivery-plans).      
      <br/>
      ID: `bed337f8-e5f3-4fb9-80da-81e17d06e7a8`
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2015"
:::row:::
   :::column span="1":::
      ReleaseManagement 
   :::column-end:::
   :::column span="1":::
      `ViewReleaseDefinition`        
      `EditReleaseDefinition`        
      `DeleteReleaseDefinition`       
      `ManageReleaseApprovers`        
      `ManageReleases`  
      `ViewReleases`                   
      `CreateReleases`               
      `EditReleaseEnvironment`         
      `DeleteReleaseEnvironment`      
      `AdministerReleasePermissions`   
      `DeleteReleases`                 
      `ManageDeployments`             
      `ManageReleaseSettings`         
      `ManageTaskHubExtension`         
   :::column-end:::
   :::column span="2":::
      [Manages release object-level-permissions](/azure/devops/organizations/security/permissions#release-management).  
      **Token format for project-level permissions**: `PROJECT_ID`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      If you need to update permissions for a particular release definition ID, for example, 12, security token for that release definition looks as follows:  
      **Token format for project-level release permissions**: `PROJECT_ID/12`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`  
      If the release definition ID lives in a folder, then the security tokens look as follows:  
      **Token format**: `PROJECT_ID/{folderName}/12`  
      For stages, tokens look like: `PROJECT_ID/{folderName}/{DefinitionId}/Environment/{EnvironmentId}`.  
      <br/>
      ID: `c788c23e-1b46-4162-8f5e-d7585343b5de`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="1":::
      WorkItemQueryFolders 
   :::column-end:::
   :::column span="1":::
      `Read`    
      `Contribute`   
      `Delete`                    
      `ManagePermissions`          
      `FullControl`                
      `RecordQueryExecutionInfo`   
   :::column-end:::
   :::column span="2":::
      [Manages permissions for work item query folders](set-permissions-access-work-tracking.md#work-item-queries).  
      <br/>
      ID: `71356614-aad7-4757-8f2c-0fb3bff6f680`
   :::column-end:::
:::row-end:::
---


## Project-level namespaces and permissions

The following table describes the namespaces that manage project-level permissions. Most of the listed permissions are managed through the [web portal admin context](set-project-collection-level-permissions.md#project-level). Project Administrators are granted all project-level permissions. Other project-level groups have select permission assignments.

---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **Permissions**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Project
   :::column-end:::
   :::column span="1":::
      `GENERIC_READ`                   
      `GENERIC_WRITE`                  
      `DELETE`                         
      `PUBLISH_TEST_RESULTS`          
      `ADMINISTER_BUILD`               
      `START_BUILD`                    
      `EDIT_BUILD_STATUS`              
      `UPDATE_BUILD`                   
      `DELETE_TEST_RESULTS`            
      `VIEW_TEST_RESULTS`              
      `MANAGE_TEST_ENVIRONMENTS`       
      `MANAGE_TEST_CONFIGURATIONS`     
      `WORK_ITEM_DELETE`               
      `WORK_ITEM_MOVE`                 
      `WORK_ITEM_PERMANENTLY_DELETE`   
      `RENAME`                         
      `MANAGE_PROPERTIES`             
      `MANAGE_SYSTEM_PROPERTIES`       
      `BYPASS_PROPERTY_CACHE`         
      `BYPASS_RULES`                   
      `SUPPRESS_NOTIFICATIONS`         
      `UPDATE_VISIBILITY`              
      `CHANGE_PROCESS`                 
      `AGILETOOLS_BACKLOG`             
      `AGILETOOLS_PLANS` <!--- TBD, this doesn't get listed --> 
   :::column-end:::
   :::column span="2":::
      [Manages Project-level permissions](permissions.md#project-level-permissions).   
      > The `AGILETOOLS_BACKLOG` and `AGILETOOLS_PLANS` permissions manage access to Azure Boards backlogs and Delivery Plans. These permissions replace checks for Stakeholder licensing.    
      **Root token format**: `$PROJECT`  
      Token to secure permissions for each project in your organization.  
      `$PROJECT:vstfs:///Classification/TeamProject/PROJECT_ID`.  
      Assume you have a project named `Test Project 1`.  
      You can get the project ID for this project by using `project show` command.  
      `az devops project show --project "Test Project 1"`  
      The command returns a project-id, for example, `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`.  
      Therefore, the token to secure project-related permissions for `Test Project 1` is:  
      `'$PROJECT:vstfs:///Classification/TeamProject/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba'`  
      <br/>
      ID: `52d39943-cb85-4d7f-8fa8-c6baac873819`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Tagging
   :::column-end:::
   :::column span="1":::
      `Enumerate`   
      `Create`      
      `Update`      
      `Delete`      
   :::column-end:::
   :::column span="2":::
      Manages permissions to create, delete, enumerate, and use work item tags. You can manage the **Create tag definition** permission through the [Project settings, Permissions administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions#change-the-permission-level-for-a-project-level-group). <br/> 
      **Token format for project-level permissions**: `/PROJECT_ID`  
      **Example**: `/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      <br/>
      ID: `bb50f182-8e5e-40b8-bc21-e8752a1e7ae2`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      VersionControlItems
   :::column-end:::
   :::column span="1":::
      `Read`                 
      `PendChange`           
      `Checkin`            
      `Label`                
      `Lock`                 
      `ReviseOther`         
      `UnlockOther`          
      `UndoOther`           
      `LabelOther`           
      `AdminProjectRights`   
      `CheckinOther`         
      `Merge`                
      `ManageBranch`         
   :::column-end:::
   :::column span="2":::
      Manages permissions for a [Team Foundation Version Control (TFVC) repository](/azure/devops/organizations/security/permissions#tfvc). You can manage these permissions through the [Project settings, Repository administrative interface](set-git-tfvc-repository-permissions.md#set-tfvc-repository-permissions).  
      <br/>
      ID: `a39371cf-0841-4c16-bbd3-276e341bc052`
   :::column-end:::
:::row-end:::
---


::: moniker range="azure-devops"
## Organization-level namespaces and permissions 


The following table describes the namespaces that manage organization-level permissions. Most of the listed permissions are managed through the [web portal admin context](set-project-collection-level-permissions.md#collection-level). The organization owner and members of the Project Collection Administrators group are granted most of these permissions.  
::: moniker-end

::: moniker range="< azure-devops"
## Collection-level namespaces and permissions 


The following table describes the namespaces that manage organization-level permissions. Most of the listed permissions are managed through the [web portal admin context](set-project-collection-level-permissions.md#collection-level). Members of the Project Collection Administrators group are granted most of these permissions.  

::: moniker-end

---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **Permissions**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      AuditLog  
   :::column-end:::
   :::column span="1":::
      `Read`             
      `Write`            
      `Manage_Streams`   
      `Delete_Streams`   
   :::column-end:::
   :::column span="2":::
      [Manages auditing permissions](/azure/devops/organizations/security/permissions#audit-streams-permissions) to read or write to the audit log and manage or delete audit streams.  
      **Token format**: `/AllPermissions`
      <br/>
      ID: `a6cc6381-a1ca-4b36-b3c1-4e65211e82b6`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="1":::
      BuildAdministration  
   :::column-end:::
   :::column span="1":::
      `ViewBuildResources`                   
      `ManageBuildResources`                 
      `UseBuildResources`                    
      `AdministerBuildResourcePermissions`   
   :::column-end:::
   :::column span="2":::
      [Manages access to to view, manage, use, or administer permissions for build resources](/azure/devops/organizations/security/permissions#collection-level).  
      <br/>
      ID: `302acaca-b667-436d-a946-87133492041c`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Collection  
   :::column-end:::
   :::column span="1":::
      `GENERIC_READ`                 
      `GENERIC_WRITE`                
      `CREATE_PROJECTS`              
      `TRIGGER_EVENT`                
      `MANAGE_TEMPLATE`              
      `DIAGNOSTIC_TRACE`             
      `SYNCHRONIZE_READ`             
      `MANAGE_TEST_CONTROLLERS`      
      `DELETE_FIELD`                 
      `MANAGE_ENTERPRISE_POLICIES`   
   :::column-end:::
   :::column span="2":::
      [Manages general and service account permissions](/azure/devops/organizations/security/permissions#collection-level). You can manage these permissions through the [Organization or Collection settings administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions).  
      <br/>
      ID: `3e65f728-f8bc-4ecd-8764-7e378b19bfa7`
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      Process <a id="process" />
   :::column-end:::
   :::column span="1":::
      `Edit`                           
      `Delete`                         
      `Create`                         
      `AdministerProcessPermissions`   
      `ReadProcessPermissions`         
   :::column-end:::
   :::column span="2":::
      [Manages organization or collection-level permissions for processes](/azure/devops/organizations/security/permissions#administer-process-permissions) to create, edit, delete, and view processes and manage process permissions. You can manage these permissions through the [Organization or Collection settings, Process administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#customize-an-inherited-process).   
      <br/>
      ID: `2dab47f9-bd70-49ed-9bd5-8eb051e59c02`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="1":::
      Workspaces 
   :::column-end:::
   :::column span="1":::
      `Read`         
      `Use`         
      `Checkin`      
      `Administer`   
   :::column-end:::
   :::column span="2":::
      Manages permissions for administering schleved changes, workspaces, and the ability to create a workspace at the organizaiton or collection level. The Workspaces namespace is only valid with the TFVC repository. You can manage these permissions through the [Organization or Collection settings administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions).   
      **Root token format**: `/`  
      **Token format for a specific workspace**: `/{workspace_name};{owner_id}`  
      <br/>
      ID: `93bafc04-9075-403a-9367-b7164eac6b5c`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      VersionControlPrivileges
   :::column-end:::
   :::column span="1":::
      `CreateWorkspace`      
      `AdminWorkspaces`      
      `AdminShelvesets`      
      `AdminConnections`     
      `AdminConfiguration`   
   :::column-end:::
   :::column span="2":::
      Manages collection-level permissions for [Team Foundation Version Control (TFVC) repository](permissions.md#tfvc). You can manage these permissions through the [Organization settings, Permissions administrative interface](set-project-collection-level-permissions.md).
      ::: moniker range="< azure-devops"
      > The `AdminConfiguration` permission grants users the ability to edit server-level permissions for users and groups. 
      > The `AdminConnections` permission grants users the ability to read the contents of a file or folder of an on-premises, server-level repository.
      ::: moniker-end
      <br/>
      ID: `66312704-deb5-43f9-b51c-ab4ff5e351c3`
   :::column-end:::
:::row-end:::
---

## Server-level namespaces and permissions  

The following table describes those security namespaces and permissions defined for on-premises instances of Azure DevOps Server. You can manage these permissions, which are granted to members of the Team Foundation Administrators group, through the [Azure DevOps Server administration console](/azure/devops/server/admin/add-administrator). 
 

---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **Permissions**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      CollectionManagement 
   :::column-end:::
   :::column span="1":::
      `CreateCollection`        
      `DeleteCollection`           
   :::column-end:::
   :::column span="2":::
      Manages permissions set at the server-level to create and delete project collections. 
      <br/>
      ID: `52d39943-cb85-4d7f-8fa8-c6baac873819`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Server
   :::column-end:::
   :::column span="1":::
      `GenericRead`    
      `GenericWrite`  
      `Impersonate`    
      `TriggerEvent`   
   :::column-end:::
   :::column span="2":::
      Manages permissions set at the server-level. This includes permissions to edit instance-level information, make requests on behalf of others, and trigger events.
      <br/>
      ID: `1f4179b3-6bac-4d01-b421-71ea09171400`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Warehouse
   :::column-end:::
   :::column span="1":::
      `Administer`                  
   :::column-end:::
   :::column span="2":::
      Grants permission to process or change settings for the data warehouse or SQL Server Analysis cube by using the [Warehouse Control Web Service](/azure/devops/report/admin/manage-reports-data-warehouse-cube?view=azure-devops-2020&preserve-view=true). 
      <br/>
      ID: `b8fbab8b-69c8-4cd9-98b5-873656788efb`
   :::column-end:::
:::row-end:::
---
 

## Role-based namespaces and permissions


The following table describes the security namespaces and permissions used to manage role-based security. 
 
---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **Permissions**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      DistributedTask 
   :::column-end:::
   :::column span="1":::
      `View`                    
      `Manage`                  
      `Listen`                  
      `AdministerPermissions`   
      `Use`                     
      `Create`                  
   :::column-end:::
   :::column span="2":::
      Manages permissions to access agent pool resources. By default, the following roles and permissions are assigned at the project level and inherited for each agent pool that is created: 
      - **Reader** role (`View` permissions only) to all members of the Project Valid Users group 
      - **Administrator** role (all permissions) to members of the Build Administrators, Project Administrators, and Release Administrators groups. 
      - **User** role (`View`, `Use`, and `Create` permissions) to all members of the Contributor group 
      - **Creator** role (`View`, `Use`, and `Create` permissions) to all members of the Contributor group   
      <br/>
      ID: `101eae8c-1709-47f9-b228-0e476c35b3ba`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Environment
   :::column-end:::
   :::column span="1":::
     ` View`                    
      `Manage`                  
      `ManageHistory`   
      `Administer`     
      `Use`                     
      `Create`                  
   :::column-end:::
   :::column span="2":::
      Manages permissions to create and manage Environments. By default, the following permissions are assigned: 
      - **Reader** role (`View` permissions only) to all members of the Project Valid Users group 
      - **Creator** role (`View`, `Use`, and `Create` permissions) to all members of the Contributor group 
      - **Creator** role (`View`, `Use`, and `Create` permissions) to all members of the Project Administrators group 
      - **Administrator** role (all permissions) to the user who created a specific Environment.    
      <br/>
      ID: `83d4c2e6-e57d-4d6e-892b-b87222b7ad20`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      ExtensionManagement
   :::column-end:::
   :::column span="1":::
      `ViewExtensions`     
      `ManageExtensions`   
      `ManageSecurity`    
   :::column-end:::
   :::column span="2":::
      The **Manager** role is the only role used to manage the security of Marketplace extensions. Members of the Manager role can install extensions and respond to requests for extensions to be installed. The other permissions are assigned automatically to members of default security groups and service principals. To add users to the Manager role, see [Manage extension permissions](../../marketplace/how-to/grant-permissions.md).    
      <br/>
      ID: `5d6d7b80-3c63-4ab0-b699-b6a5910f8029`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Library
   :::column-end:::
   :::column span="1":::
      `View`          
      `Administer`    
      `Create`       
      `ViewSecrets`   
      `Use`           
      `Owner`         
   :::column-end:::
   :::column span="2":::
      Manages permissions to create and manage library items, which include secure files and variable groups. Role memberships for individual items are automatically inherited from those of the Library node.  By default, the following permissions are assigned: 
      - **Reader** role (`View` permissions only) to all members of the Project Valid Users group and the Project Collection Build Service account
      - **Creator** role (`View`, `Use`, and `Create` permissions) to all members of the Contributors group 
      - **Creator** role (`View`, `Use`, `Create`, and `Owner` permissions) to the member who created the library item
      - **Administrator** role (all permissions) to members of the Build Administrators, Project Administrators, and Release Administrators groups.  
      To learn more, see [Library asset security roles](../../pipelines/library/index.md).    
      <br/>
      ID: `b7e84409-6553-448a-bbb2-af228e07cbeb`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      ServiceEndpoints
   :::column-end:::
   :::column span="1":::
      `Use`                 
      `Administer`          
      `Create`              
      `ViewAuthorization`   
      `ViewEndpoint`        
   :::column-end:::
   :::column span="2":::
      Manages permissions to create and manage service connections. Role memberships for individual items are automatically inherited from those defined at the project-level.  By default, the following roles are assigned: 
      - **Reader** role (`View` permissions only) to all members of the Project Valid Users group and the Project Collection Build Service account
      - **Creator** role (`View`, `Use`, and `Create` permissions) to to members of the Endpoint Creators service security group.  
      - **Administrator** role (all permissions) to members of the Endpoint Administrators service security group.  
      Roles are assigned through [Service connection security roles](about-security-roles.md#service-endpoint-roles).   
      <br/>
      ID: `49b48001-ca20-4adc-8111-5b60c903a50c`
   :::column-end:::
:::row-end:::
---


## Internal namespaces and permissions

The following table describes the security namespaces and permissions that aren't surfaced through the user interface. They are primarily used to grant access to members of default security groups or to internal resources and shouldn't be altered in any way.  
 
---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **Permissions**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      AccountAdminSecurity
   :::column-end:::
   :::column span="1":::
      `Read`       
      `Create`    
      `Modify`     
   :::column-end:::
   :::column span="2":::
      Manages permissions to read or modify the organization account owner. These permissions are assigned to the organization owner and members of the Project Collection Administrator group.  
      <br/>
      ID: `11238e09-49f2-40c7-94d0-8f0307204ce4`
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      Analytics
   :::column-end:::
   :::column span="1":::
      `Read`                       
      `Administer`                 
      `Stage`                      
      `ExecuteUnrestrictedQuery`   
      `ReadEuii`                   
   :::column-end:::
   :::column span="2":::
      Manages permissions to read, administer permissions, and execute queries against the Analytics service.  
      **Token format for project-level permissions**: `$/PROJECT_ID`  
      **Example**: `$/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      <br/>
      ID: `58450c49-b02d-465a-ab12-59ae512d6531`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      BlobStoreBlobPrivileges
   :::column-end:::
   :::column span="":::
      `Read`   
      `Delete`   
      `Create`   
      `SecurityAdmin`   
   :::column-end:::
   :::column span="2":::
      Sets permissions to read, create, and manage the security of the data store. These permissions are assigned to several AzureDevOps service principals.  
      <br/>
      ID: `11238e09-49f2-40c7-94d0-8f0307204ce4`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Boards
   :::column-end:::
   :::column span="":::
      `View`             
      `Create`          
      `ChangeMetadata`   
      `MoveCard`         
      `Delete`           
      `Manage`          
   :::column-end:::
   :::column span="2":::
      Manages permissions and access to Kanban boards.  
      <br/>
      ID: `251e12d9-bea3-43a8-bfdb-901b98c0125e`
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="":::
      BoardsExternalIntegration
   :::column-end:::
   :::column span="":::
      `Read`    
      `Write`    
   :::column-end:::
   :::column span="2":::
      Manages read/write permissions of external integrations with Azure Boards. 
      <br/>
      ID: `5ab15bc8-4ea1-d0f3-8344-cab8fe976877`
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="":::
      Chat
   :::column-end:::
   :::column span="":::
      `ReadChatRoomMetadata`      
      `UpdateChatRoomMetadata`    
      `CreateChatRoom`           
      `CloseChatRoom`            
      `DeleteChatRoom`            
      `AddRemoveChatRoomMember`   
      `ReadChatRoomMessage`      
      `WriteChatRoomMessage`    
      `UpdateChatRoomMessage`     
      `DeleteChatRoomMessage`    
      `ReadChatRoomTranscript`    
      `ManageChatPermissions`     
   :::column-end:::
   :::column span="2":::
      Manages permissions for chat services integrated with Azure DevOps, such as Slack and Microsoft Teams. For more information, see [Azure Boards with Slack](/azure/devops/boards/integrations/boards-slack), [Azure Boards with Microsoft Teams](/azure/devops/boards/integrations/boards-teams), [Azure Pipelines with Slack](/azure/devops/pipelines/integrations/slack), [Azure Pipelines with Microsoft Teams](/azure/devops/pipelines/integrations/microsoft-teams), [Azure Repos with Slack](/azure/devops/repos/integrations/repos-slack), and [Azure Repos with Microsoft Teams](/azure/devops/repos/integrations/repos-teams). 
      <br/>
      ID: `bc295513-b1a2-4663-8d1a-7017fd760d18`
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="":::
      Discussion Threads
   :::column-end:::
   :::column span="":::
      `Administer`          
      `GenericRead`         
      `GenericContribute`   
      `Moderate`            
   :::column-end:::
   :::column span="2":::
      Manages permissions to view, manage, moderate, and contribute to [code review discussions setup for Azure Pipelines](/azure/devops/pipelines/process/environments-kubernetes#setup-review-app). 
      <br/>
      ID: `0d140cae-8ac1-4f48-b6d1-c93ce0301a128`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      EventSubscriber
   :::column-end:::
   :::column span="":::
      `GENERIC_READ`
      `GENERIC_WRITE`
   :::column-end:::
   :::column span="2":::
      Grant read and write access for notification handler. 
      <br/>
      ID: `2bf24a2b-70ba-43d3-ad97-3d9e1f75622f`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      EventSubscription
   :::column-end:::
   :::column span="":::
      `GENERIC_READ`
      `GENERIC_WRITE`
      `UNSUBSCRIBE`
      `CREATE_SOAP_SUBSCRIPTION`  
   :::column-end:::
   :::column span="2":::
      Manages member permissions to view, edit, and unsubscribe from notifications or create a SOAP subscription.  
      <br/>
      ID: `58b176e7-3411-457a-89d0-c6d0ccb3c52b` 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Identity
   :::column-end:::
   :::column span="":::
      `Read`     
      `Write`  
      `Delete`  
      `ManageMembership`  
      `CreateScope`  
      `RestoreScope`  
   :::column-end:::
   :::column span="2":::
      Manages permissions to read, write, delete user account identity information; manage group membership and create and restore identity scopes. The Manage group membership permissions is automatically granted to members of the Project Administrators and Project Collection Administrators group.   
      
      **Token format for project-level permissions**: `PROJECT_ID`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      To modify group level permissions for Group Origin ID [2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b]:  
      **Token**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba\2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b`  
      <br/>
      ID: `5a27515b-ccd7-42c9-84f1-54c998f03866` 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Identity2
   :::column-end:::
   :::column span="":::
      `Read`     
      `Write`  
      `Delete`  
      `Impersonate`  
   :::column-end:::
   :::column span="2":::
      TBD 
      <br/>
      ID: `bf7bfa03-b2b7-47db-8113-fa2e002cc5b1` 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Licensing
   :::column-end:::
   :::column span="":::
      `Read`     
      `Create`  
      `Modify`  
      `Delete`  
      `Assign`     
      `Revoke`  
   :::column-end:::
   :::column span="2":::
      TBD 
      <br/>
      ID: `453e2db3-2e81-474f-874d-3bf51027f2ee` 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      PermissionLevel
   :::column-end:::
   :::column span="":::
      `Read`     
      `Create`  
      `Update`  
      `Delete`  
   :::column-end:::
   :::column span="2":::
      TBD 
      <br/>
      ID: `25fb0ed7-eb8f-42b8-9a5e-836a25f67e37` 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      PipelineCachePrivileges
   :::column-end:::
   :::column span="":::
      `Read`
      `Write`  
   :::column-end:::
   :::column span="2":::
      Manages permissions to read and write [pipeline cache entries](/azure/devops/pipelines/release/caching). These permissions are only assigned to internal Azure DevOps service principles. 
      <br/>
      ID: `62a7ad6b-8b8d-426b-ba10-76a7090e94d5` 
   :::column-end:::
:::row-end:::
---
<!---
:::row:::
   :::column span="":::
      Proxy
   :::column-end:::
   :::column span="":::
      `Read`
      `Manage`  
   :::column-end:::
   :::column span="2":::
      Grants read permissions to members of the Project Valid Users group and manage permissions to members of the Project Administrators group.  
      <br/>
      ID: `cb4d56d2-e84b-457e-8845-81320a133fbb` 
   :::column-end:::
:::row-end:::
---
-->
:::row:::
   :::column span="":::
      ReleaseManagement
   :::column-end:::
   :::column span="":::
      `ViewTaskEditor`                         
      `ViewCDWorkflowEditor`                   
      `ExportReleaseDefinition`                    
      `ViewLegacyUI`                              
      `DeploymentSummaryAcrossProjects`             
      `ViewExternalArtifactCommitsAndWorkItems`     
   :::column-end:::
   :::column span="2":::
      TBD 
      <br/>
      ID: `7c7d32f7-0e86-4cd6-892e-b35dbba870bd ` 
   :::column-end:::
:::row-end:::
---
::: moniker range="azure-devops"
:::row:::
   :::column span="":::
      SearchSecurity
   :::column-end:::
   :::column span="":::
      `ReadMembers`
      `ReadAnonymous`  
   :::column-end:::
   :::column span="2":::
      This security namespace is used to know if a user is valid or anonymous/public.  
      <br/>
      ID: `ca535e7e-67ce-457f-93fe-6e53aa4e4160` 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="":::
      ServiceHooks
   :::column-end:::
   :::column span="":::
      `ViewSubscriptions`  
      `EditSubscriptions`    
      `DeleteSubscriptions`  
      `PublishEvents`  
   :::column-end:::
   :::column span="2":::
      Manage permissions to view, edit, and delete service hook subscriptions and publish service hook events. These permissions are automatically assigned to members of the Project Collection Administrators group. `DeleteSubscriptions` is no longer used; `EditSubscriptions` can delete service hooks. 
      <br/>
      ID: `cb594ebe-87dd-4fc9-ac2c-6a10a4c92046` 
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      TeamLabSecurity
   :::column-end:::
   :::column span="":::
      `Read`  
      `Create `  
      `Write`  
      `Edit`  
      `Delete`  
      `Start`  
      `Stop`  
      `Pause`  
      `ManageSnapshots`  
      `ManageLocation`  
      `DeleteLocation`  
      `ManagePermissions`  
      `ManageChildPermissions`  
      `ManageTestMachines`  
   :::column-end:::
   :::column span="2":::
      ::: moniker range="<= tfs-2015"
      [Manages Lab Management permissions](/azure/devops/organizations/security/permissions#lab).
      > [!NOTE]  
      > Lab Management is deprecated for TFS 2017. We recommend that you [use Build and Release Management instead of Lab Management for automated testing](/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management).
      ::: moniker-end
      <br/>
      ID: `9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1` 
   :::column-end:::
:::row-end:::
---
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      UtilizationPermissions
   :::column-end:::
   :::column span="1":::
      `QueryUsageSummary`
   :::column-end:::
   :::column span="2":::
      Manages permissions to query usage. By default, all members of the Project Collection Administrators groups and users granted Stakeholder access are granted permission to query usage summary for everyone. To learn more, see [Rate limits](../../integrate/concepts/rate-limits.md).
      <!--- Update link when new article on Utilization is published. --> 
      **Token format**: `/`
      <br/>
      ID: `83abde3a-4593-424e-b45f-9898af99034d`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      WorkItemTrackingAdministration
   :::column-end:::
   :::column span="":::
      `ManagePermissions`  
      `DestroyAttachments`  
   :::column-end:::
   :::column span="2":::
      Manages permissions for administrating work tracking and destroying attachments.
      <br/>
      ID: `445d2788-c5fb-4132-bbef-09c4045ad93f`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      WorkItemTrackingProvision
   :::column-end:::
   :::column span="":::
      `Administer`  
      `ManageLinkTypes`  
   :::column-end:::
   :::column span="2":::
      Manages permissions for changing work tracking processes and managing link types. The WorkItemTrackingProvision namespace is an older security namespace that is mostly used for TFS-2018 and earlier versions. The [Process](#process) namespace replaces this namespace for managing processes in Azure DevOps Server 2019 and later versions.  
      **Root token format**: `/$`   
      **Token format for a specific project**: `$/PROJECT_ID`  
      <br/>
      ID: `5a6cd233-6615-414d-9393-48dbb252bd23`
   :::column-end:::
:::row-end:::
---


<a id="deprecated-namespaces" /> 

## Deprecated and read-only namespaces

The following namespaces are either deprecated or read-only. You shouldn't use them. 

:::row:::
   :::column span="2":::
      - `CrossProjectWidgetView`
      - `DataProvider`
      - `Favorites`
      - `Graph`
      - `IdentityPicker`
      - `Job`
      - `Location`
      - `ProjectAnalysisLanguageMetrics`
      - `Proxy`
      - `Registry`
      - `Security`
   :::column-end:::
   :::column span="2":::
      - `ServicingOrchestration`
      - `SettingEntries`
      - `Social`
      - `StrongBox`
      - `TestManagement`
      - `ViewActivityPaneSecurity`
      - `WebPlatform`
      - `WorkItemsHub`
      - `WorkItemTracking`
      - `WorkItemTrackingConfiguration`
   :::column-end:::
:::row-end:::
---

<!--- 
- `CrossProjectWidgetView`
- `DataProvider`
- `Favorites`
- `Graph`
- `IdentityPicker`
- `Job`
- `Location`
- `ProjectAnalysisLanguageMetrics`
- `Proxy`
- `Registry`
- `Security`
- `ServicingOrchestration`
- `SettingEntries`
- `Social`
- `StrongBox`
- `TestManagement`
- `ViewActivityPaneSecurity`
- `WebPlatform`
- `WorkItemsHub`
- `WorkItemTracking`
- `WorkItemTrackingConfiguration`

--> 

## Related articles

- [About security, permissions, and membership](about-security-identity.md)
- [Security Namespaces REST API](/rest/api/azure/devops/security/)
- [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd) 
- [Security glossary](security-glossary.md)
