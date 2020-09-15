---
title: CLI security tokens for permissions management
titleSuffix: Azure DevOps 
description: Use Azure DevOps CLI to manage security tokens for permissions management
ms.topic: reference 
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 09/14/2020
---

# Security namespaces and tokens for permissions management

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

Each family of Azure DevOps resources (work items, Git repositories, an so on) is secured using a different namespace. Each security namespace contains zero or more Access control lists (ACLs). Each ACL contains a token, an inherit flag and a set of zero or more Access control entries (ACEs). Each ACE contains an identity descriptor, an allowed permissions bitmask and a denied permissions bitmask.

Tokens are arbitrary strings representing resources in Azure DevOps. Token format differs per resource type, however hierarchy and separator characters are common between all tokens.

> [!NOTE]   
> Namespaces and tokens are valid for all versions of Azure DevOps. Some namespaces have been deprecated as listed in [Deprecated and read-only namespaces](#deprecated-namespaces) section later in this article. 
>
> To list namespaces and manage permissions with command line tools: 
> - For Azure DevOps Server 2020 and Azure DevOps Services, you can use the `az devops security permission` commands. 
> - For on-premises Azure DevOps instances, you can use the [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd?view=azure-devops-2019) commands. 

## Hierarchy and tokens

A security namespace can be either hierarchical or flat. 
Tokens in a hierarchical namespace exist in a hierarchy with effective permissions inherited from parent tokens to child tokens.
Tokens in a flat namespace have no concept of a parent-child relationship between any two tokens.

Tokens in a hierarchical namespace either have a fixed length for each path part, or variable length.
If the tokens have variable-length path parts, then a separator character is used to distinguish where one path part ends and another begins.

Token examples for different namespaces are provided in the next section. 

## Security namespaces 

You can use the `az devops security permission namespace list` to list the namespaces defined for your organization or on-premises server.   

> [!NOTE]   
> Some namespaces listed are deprecated and should not be used. For a list of deprecated namespaces, see the [Deprecated and read-only namespaces](#deprecated-namespaces) section later in this article. 


> [!div class="tabbedCodeSnippets"]
```CLI
C: az devops security permission namespace list --org https://dev.azure.com/OrganizationName --output table
Command group 'devops security permission' is in preview. It may be changed/removed in a future release.
Id                                    Name
------------------------------------  ------------------------------
c788c23e-1b46-4162-8f5e-d7585343b5de  ReleaseManagement
58450c49-b02d-465a-ab12-59ae512d6531  Analytics
d34d3680-dfe5-4cc6-a949-7d9c68f73cba  AnalyticsViews
62a7ad6b-8b8d-426b-ba10-76a7090e94d5  PipelineCachePrivileges
7c7d32f7-0e86-4cd6-892e-b35dbba870bd  ReleaseManagement
a6cc6381-a1ca-4b36-b3c1-4e65211e82b6  AuditLog
5a27515b-ccd7-42c9-84f1-54c998f03866  Identity
445d2788-c5fb-4132-bbef-09c4045ad93f  WorkItemTrackingAdministration
101eae8c-1709-47f9-b228-0e476c35b3ba  DistributedTask
71356614-aad7-4757-8f2c-0fb3bff6f680  WorkItemQueryFolders
2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87  Git Repositories
3c15a8b7-af1a-45c2-aa97-2cb97078332e  VersionControlItems2
2bf24a2b-70ba-43d3-ad97-3d9e1f75622f  EventSubscriber
5a6cd233-6615-414d-9393-48dbb252bd23  WorkItemTrackingProvision
49b48001-ca20-4adc-8111-5b60c903a50c  ServiceEndpoints
cb594ebe-87dd-4fc9-ac2c-6a10a4c92046  ServiceHooks
bc295513-b1a2-4663-8d1a-7017fd760d18  Chat
3e65f728-f8bc-4ecd-8764-7e378b19bfa7  Collection
cb4d56d2-e84b-457e-8845-81320a133fbb  Proxy
bed337f8-e5f3-4fb9-80da-81e17d06e7a8  Plan
2dab47f9-bd70-49ed-9bd5-8eb051e59c02  Process
11238e09-49f2-40c7-94d0-8f0307204ce4  AccountAdminSecurity
b7e84409-6553-448a-bbb2-af228e07cbeb  Library
83d4c2e6-e57d-4d6e-892b-b87222b7ad20  Environment
52d39943-cb85-4d7f-8fa8-c6baac873819  Project
58b176e7-3411-457a-89d0-c6d0ccb3c52b  EventSubscription
83e28ad4-2d72-4ceb-97b0-c7726d5502c3  CSS
9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1  TeamLabSecurity
fc5b7b85-5d6b-41eb-8534-e128cb10eb67  ProjectAnalysisLanguageMetrics
bb50f182-8e5e-40b8-bc21-e8752a1e7ae2  Tagging
f6a4de49-dbe2-4704-86dc-f8ec1a294436  MetaTask
bf7bfa03-b2b7-47db-8113-fa2e002cc5b1  Iteration
fa557b48-b5bf-458a-bb2b-1b680426fe8b  Favorites
4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c  Registry
c2ee56c9-e8fa-4cdd-9d48-2c44f697a58e  Graph
dc02bf3d-cd48-46c3-8a41-345094ecc94b  ViewActivityPaneSecurity
2a887f97-db68-4b7c-9ae3-5cebd7add999  Job
73e71c45-d483-40d5-bdba-62fd076f7f87  WorkItemTracking
4a9e8381-289a-4dfd-8460-69028eaa93b3  StrongBox
1f4179b3-6bac-4d01-b421-71ea09171400  Server
e06e1c24-e93d-4e4a-908a-7d951187b483  TestManagement
6ec4592e-048c-434e-8e6c-8671753a8418  SettingEntries
302acaca-b667-436d-a946-87133492041c  BuildAdministration
2725d2bc-7520-4af4-b0e3-8d876494731f  Location
83abde3a-4593-424e-b45f-9898af99034d  UtilizationPermissions
c0e7a722-1cad-4ae6-b340-a8467501e7ce  WorkItemsHub
0582eb05-c896-449a-b933-aa3d99e121d6  WebPlatform
66312704-deb5-43f9-b51c-ab4ff5e351c3  VersionControlPrivileges
93bafc04-9075-403a-9367-b7164eac6b5c  Workspaces
093cbb02-722b-4ad6-9f88-bc452043fa63  CrossProjectWidgetView
35e35e8e-686d-4b01-aff6-c369d6e36ce0  WorkItemTrackingConfiguration
0d140cae-8ac1-4f48-b6d1-c93ce0301a12  Discussion Threads
5ab15bc8-4ea1-d0f3-8344-cab8fe976877  BoardsExternalIntegration
7ffa7cf4-317c-4fea-8f1d-cfda50cfa956  DataProvider
81c27cc8-7a9f-48ee-b63f-df1e1d0412dd  Social
9a82c708-bfbe-4f31-984c-e860c2196781  Security
a60e0d84-c2f8-48e4-9c0c-f32da48d5fd1  IdentityPicker
84cc1aa4-15bc-423d-90d9-f97c450fc729  ServicingOrchestration
33344d9c-fc72-4d6f-aba5-fa317101a7e9  Build
8adf73b7-389a-4276-b638-fe1653f7efc7  DashboardsPrivileges
a39371cf-0841-4c16-bbd3-276e341bc052  VersionControlItems
```


The following table lists valid namespaces and provides descriptions and links to more information.  

> [!NOTE]   
> Some permissions don't appear in any user interface. These permissions are assigned to security roles, or members of a security group, or internal service accounts. 


---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **ID**
   :::column-end:::
   :::column span="2":::
      **Notes**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      AccountAdminSecurity
   :::column-end:::
   :::column span="":::
      11238e09-49f2-40c7-94d0-8f0307204ce4
   :::column-end:::
   :::column span="2":::
      Sets permissions to read, create, and modify organization account. These permissions are assigned to the organization owner and members of the Project Collection Administrator group.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Analytics
   :::column-end:::
   :::column span="":::
      58450c49-b02d-465a-ab12-59ae512d6531
   :::column-end:::
   :::column span="2":::
      Manages permissions to read, administer permissions, and execute queries against the Analytics service.  
      **Token format for project-level permissions**: `$/PROJECT_ID`  
      **Example**: `$/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      AnalyticsViews
   :::column-end:::
   :::column span="":::
      d34d3680-dfe5-4cc6-a949-7d9c68f73cba
   :::column-end:::
   :::column span="2":::
      [Manages object-level Analytics views permissions](/azure/devops/organizations/security/permissions#analytics-views-permissions) to read, edit, delete, and generate reports. You can manage these permissions for each [Analytics view from the user interface](/azure/devops/report/powerbi/analytics-security).  
      **Token format for project level permissions**: `$/Shared/PROJECT_ID`  
      **Example**: `$/Shared/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      AuditLog
   :::column-end:::
   :::column span="":::
      a6cc6381-a1ca-4b36-b3c1-4e65211e82b6
   :::column-end:::
   :::column span="2":::
      [Manages auditing permissions](/azure/devops/organizations/security/permissions#audit-streams-permissions) to read or write to the audit log and manage or delete audit streams.  
      **Token format**: `/AllPermissions`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      BoardsExternalIntegration
   :::column-end:::
   :::column span="":::
      5ab15bc8-4ea1-d0f3-8344-cab8fe976877
   :::column-end:::
   :::column span="2":::
      Manages read/write permissions of external integrations with Azure Boards. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Build
   :::column-end:::
   :::column span="":::
      33344d9c-fc72-4d6f-aba5-fa317101a7e9
   :::column-end:::
   :::column span="2":::
      [Manages object-level build permissions](/azure/devops/organizations/security/permissions#build-object-level).  
      **Token format for project-level build permissions**: `PROJECT_ID`  
      If you need to update permissions for a particular build definition ID, for example, 12, security token for that build definition looks as follows:  
      **Token format for project level build permissions**: `PROJECT_ID/12`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      BuildAdministration
   :::column-end:::
   :::column span="":::
      302acaca-b667-436d-a946-87133492041c
   :::column-end:::
   :::column span="2":::
      [Manages organization or collection-level permissions for build resources](/azure/devops/organizations/security/permissions#collection-level) to view, manage, use, or administer permissions.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Chat
   :::column-end:::
   :::column span="":::
      bc295513-b1a2-4663-8d1a-7017fd760d18
   :::column-end:::
   :::column span="2":::
      Manages permissions for chat services integrated with Azure DevOps, such as Slack and Microsoft Teams. For more information, see [Azure Boards with Slack](/azure/devops/boards/integrations/boards-slack), [Azure Boards with Microsoft Teams](/azure/devops/boards/integrations/boards-teams), [Azure Pipelines with Slack](/azure/devops/pipelines/integrations/slack), [Azure Pipelines with Microsoft Teams](/azure/devops/pipelines/integrations/microsoft-teams), [Azure Repos with Slack](/azure/devops/repos/integrations/repos-slack), and [Azure Repos with Microsoft Teams](/azure/devops/repos/integrations/repos-teams). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Collection
   :::column-end:::
   :::column span="":::
      3e65f728-f8bc-4ecd-8764-7e378b19bfa7
   :::column-end:::
   :::column span="2":::
      [Manages organization or collection-level general and service account permissions](/azure/devops/organizations/security/permissions#collection-level). You can manage these permissions through the [Organization or Collection settings administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      CSS   
   :::column-end:::
   :::column span="":::
      83e28ad4-2d72-4ceb-97b0-c7726d5502c3
   :::column-end:::
   :::column span="2":::
      [Manages area path (object-level) permissions](/azure/devops/organizations/security/permissions#area-path-object-level) to create, edit, and delete child nodes and set permissions to view or edit work items in a node. You can manage these permissions through the [Project settings, Project configuration administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#create-child-nodes-modify-work-items-under-an-area-path).   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      DashboardsPrivileges
   :::column-end:::
   :::column span="":::
      8adf73b7-389a-4276-b638-fe1653f7efc7
   :::column-end:::
   :::column span="2":::
      [Manages dashboard (object-level) permissions](/azure/devops/organizations/security/permissions#dasboard-permissions) to edit and delete dashboards and manage permissions for a project dashboard. You can manage these permissions through the [Dashboards user interface](/azure/devops/report/dashboards/dashboard-permissions#set-permissions-for-a-project-dashboard).   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Discussion Threads
   :::column-end:::
   :::column span="":::
      0d140cae-8ac1-4f48-b6d1-c93ce0301a12
   :::column-end:::
   :::column span="2":::
      Manages permissions to view, manage, moderate, and contribute to [code review discussions setup for Azure Pipelines](/azure/devops/pipelines/process/environments-kubernetes#setup-review-app). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      DistributedTask
   :::column-end:::
   :::column span="":::
      101eae8c-1709-47f9-b228-0e476c35b3ba
   :::column-end:::
   :::column span="2":::
      Manages permissions to view, manage, listen, create, and use [distributed tasks in Azure Pipelines](/azure/devops/pipelines/tasks/deploy/app-center-distribute).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Environment
   :::column-end:::
   :::column span="":::
      83d4c2e6-e57d-4d6e-892b-b87222b7ad20
   :::column-end:::
   :::column span="2":::
      Manages read and write permissions to the Environment security namespace at the project collection host level to the Pipelines service principal. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      EventSubscriber
   :::column-end:::
   :::column span="":::
      2bf24a2b-70ba-43d3-ad97-3d9e1f75622f
   :::column-end:::
   :::column span="2":::
      Grant read and write permissions for notification handler. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      EventSubscription
   :::column-end:::
   :::column span="":::
      58b176e7-3411-457a-89d0-c6d0ccb3c52b
   :::column-end:::
   :::column span="2":::
      Manages member permissions to view, edit, and unsubscribe from notifications or create a SOAP subscription.   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Git Repositories
   :::column-end:::
   :::column span="":::
      2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87
   :::column-end:::
   :::column span="2":::
      [Manages Git repository (object-level) permissions](/azure/devops/organizations/security/permissions#git-repository-permissions-object-level). You can manage these permissions through the [Project settings, Repositories administrative interface](/azure/devops/organizations/security/set-git-tfvc-repository-permissions#set-git-repository-permissions).  
      **Token format for project-level permissions**: `repoV2/PROJECT_ID`  
      You need to append `RepositoryID` to update repository-level permissions.  
      **Token format for repository level permissions**: `repoV2/PROJECT_ID/REPO_ID`  
      For more information on the Git Repositories namespace and its tokens refer to this blog post, [Git repo tokens for the security service](https://devblogs.microsoft.com/devops/git-repo-tokens-for-the-security-service/).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Identity
   :::column-end:::
   :::column span="":::
      5a27515b-ccd7-42c9-84f1-54c998f03866
   :::column-end:::
   :::column span="2":::
      Manages permissions to read, write, delete user account identity information; manage group membership and create and restore identity scopes. The Manage group membership permissions is automatically granted to members of the Project Administrators and Project Collection Administrators group.   
      
      **Token format for project-level permissions**: `PROJECT_ID`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      To modify group level permissions for Group Origin ID [2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b]:  
      **Token**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba\2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Iteration
   :::column-end:::
   :::column span="":::
      bf7bfa03-b2b7-47db-8113-fa2e002cc5b1
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
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Library
   :::column-end:::
   :::column span="":::
      b7e84409-6553-448a-bbb2-af228e07cbeb
   :::column-end:::
   :::column span="2":::
      Manages library permissions to create, use, view, and administer library items. These permissions are assigned through [Library asset security roles](/azure/devops/organizations/security/about-security-roles#library-roles).   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      MetaTask
   :::column-end:::
   :::column span="":::
      f6a4de49-dbe2-4704-86dc-f8ec1a294436
   :::column-end:::
   :::column span="2":::
      [Manages task group permissions](/azure/devops/organizations/security/permissions#task-group) to edit and delete task groups, and administer task group permissions.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      PipelineCachePrivileges
   :::column-end:::
   :::column span="":::
      62a7ad6b-8b8d-426b-ba10-76a7090e94d5
   :::column-end:::
   :::column span="2":::
      Manages permissions to read and write [pipeline cache entries](/azure/devops/pipelines/release/caching).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Plan
   :::column-end:::
   :::column span="":::
      bed337f8-e5f3-4fb9-80da-81e17d06e7a8
   :::column-end:::
   :::column span="2":::
      [Manages permissions for Delivery Plans (object-level)](/azure/devops/organizations/security/permissions#plan-permissions") to view, edit, delete, and manage delivery plans. You can manage these permissions through the [user interface for each plan](/azure/devops/organizations/security/set-permissions-access-work-tracking#edit-or-manage-permissions-for-delivery-plans).      
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Process
   :::column-end:::
   :::column span="":::
      2dab47f9-bd70-49ed-9bd5-8eb051e59c02
   :::column-end:::
   :::column span="2":::
      [Manages organization or collection-level permissions for processes](/azure/devops/organizations/security/permissions#administer-process-permissions) to create, edit, delete, and view processes and manage process permissions. You can manage these permissions through the [Organization or Collection settings, Process administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#customize-an-inherited-process).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Project
   :::column-end:::
   :::column span="":::
      52d39943-cb85-4d7f-8fa8-c6baac873819
   :::column-end:::
   :::column span="2":::
      [Manages Project-level permissions](/azure/devops/organizations/security/permissions#project-level-permissions). You can manage these permissions through the [Project settings, Security or Permissions administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions#change-the-permission-level-for-a-project-level-group). <br/>  
      **Root token format**: `$PROJECT`  
      Token to secure permissions for each project in your organization.  
      `$PROJECT:vstfs:///Classification/TeamProject/PROJECT_ID`.  <br/>  
      Assume you have a project named `Test Project 1`.  
      You can get the project ID for this project by using `project show` command.  
      `az devops project show --project "Test Project 1"`  
      The command returns a project-id, for example, `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`.  
      Therefore, the token to secure project-related permissions for `Test Project 1` is:  
      `'$PROJECT:vstfs:///Classification/TeamProject/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba'`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Publisher (Publish extensions)
   :::column-end:::
   :::column span="":::
      TBD
   :::column-end:::
   :::column span="2":::
      [Manages permissions to create, delete, update, and publish extensions](azure/devops/extend/publish/overview). These permissions are granted when a user creates a publisher via the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      ReleaseManagement
   :::column-end:::
   :::column span="":::
      c788c23e-1b46-4162-8f5e-d7585343b5de
   :::column-end:::
   :::column span="2":::
      [Manages release (object-level-permissions](/azure/devops/organizations/security/permissions#release-management).  
      **Token format for project-level permissions**: `PROJECT_ID`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      If you need to update permissions for a particular release definition ID, for example, 12, security token for that release definition looks as follows:  
      **Token format for project-level release permissions**: `PROJECT_ID/12`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`  
      If the release definition ID lives in a folder, then the security tokens look as follows:  
      **Token format**: `PROJECT_ID/{folderName}/12`  
      For stages, tokens look like: `PROJECT_ID/{folderName}/{DefinitionId}/Environment/{EnvironmentId}`.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Server
   :::column-end:::
   :::column span="":::
      1f4179b3-6bac-4d01-b421-71ea09171400
   :::column-end:::
   :::column span="2":::
      [Manages permissions set at the server-level](/azure/devops/organizations/security/permissions#server-permissions). This includes permissions to create and delete project collections, edit instance-level information, make requests on behalf of others, and trigger events. You can manage these permissions, which are granted to members of the Team Foundation Administrators group, through the [Azure DevOps Server administration console](/azure/devops/server/admin/add-administrator). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      ServiceEndpoints
   :::column-end:::
   :::column span="":::
      49b48001-ca20-4adc-8111-5b60c903a50c
   :::column-end:::
   :::column span="2":::
      Manages permissions to create and use service connections or service endpoints. These permissions are assigned through [Service connection security roles](/azure/devops/organizations/security/about-security-roles#service-endpoint-roles).   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      ServiceHooks
   :::column-end:::
   :::column span="":::
      cb594ebe-87dd-4fc9-ac2c-6a10a4c92046
   :::column-end:::
   :::column span="2":::
      Manage permissions to view, edit, and delete service hook subscriptions and publish service hook events. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Tagging
   :::column-end:::
   :::column span="":::
      bb50f182-8e5e-40b8-bc21-e8752a1e7ae2
   :::column-end:::
   :::column span="2":::
      Manages permissions to create, delete, enumerate, and use work item tags. You can manage the **Create tag definition** permission through the [Project settings, Permissions administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions#change-the-permission-level-for-a-project-level-group). <br/> 
      **Token format for project-level permissions**: `/PROJECT_ID`  
      **Example**: `/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
   :::column-end:::
:::row-end:::
---
::: moniker range="<= tfs-2015"
:::row:::
   :::column span="":::
      TeamLabSecurity
   :::column-end:::
   :::column span="":::
      9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1
   :::column-end:::
   :::column span="2":::
      [Manages Lab Management permissions](/azure/devops/organizations/security/permissions#lab).
      > [!NOTE]  
      > Lab Management is deprecated for TFS 2017. We recommend that you [use Build and Release Management instead of Lab Management for automated testing](/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management).
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="":::
      UtilizationPermissions
   :::column-end:::
   :::column span="":::
      83abde3a-4593-424e-b45f-9898af99034d
   :::column-end:::
   :::column span="2":::
      Manages permissions to query usage.  
      **Token format**: `/`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      VersionControlItems 
   :::column-end:::
   :::column span="":::
      a39371cf-0841-4c16-bbd3-276e341bc052
   :::column-end:::
   :::column span="2":::
      Manages permissions to query usage.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      VersionControlItems2
   :::column-end:::
   :::column span="":::
      3c15a8b7-af1a-45c2-aa97-2cb97078332e
   :::column-end:::
   :::column span="2":::
      Manages permissions for a [Team Foundation Version Control (TFVC) repository](/azure/devops/organizations/security/permissions#tfvc). You can manage these permissions through the [Project settings, Repository administrative interface](/azure/devops/organizations/security/set-git-tfvc-repository-permissions#set-tfvc-repository-permissions). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      VersionControlPrivileges
   :::column-end:::
   :::column span="":::
      66312704-deb5-43f9-b51c-ab4ff5e351c3
   :::column-end:::
   :::column span="2":::
      Manages project-level permissions for [Team Foundation Version Control (TFVC) repository](/azure/devops/organizations/security/permissions#tfvc). You can manage these permissions through the [Project settings, Permissions administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions#change-the-permission-level-for-a-project-level-group).
   :::column-end:::
:::row-end:::
---
::: moniker range="< azure-devops"
:::row:::
   :::column span="":::
      Warehouse
   :::column-end:::
   :::column span="":::
          
   :::column-end:::
   :::column span="2":::
      Can process or change settings for the data warehouse or SQL Server Analysis cube by using the [Warehouse Control Web Service](/azure/devops/report/admin/manage-reports-data-warehouse-cube?view=azure-devops-2020&preserve-view=true). You can manage the Administer Warehouse permission through the [Azure DevOps Server administration console](/azure/devops/server/admin/add-administrator). 
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      WorkItemTrackingAdministration
   :::column-end:::
   :::column span="":::
      445d2788-c5fb-4132-bbef-09c4045ad93f
   :::column-end:::
   :::column span="2":::
      Manages permissions for administrating work tracking and destroying attachments. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      WorkItemTrackingProvision
   :::column-end:::
   :::column span="":::
      5a6cd233-6615-414d-9393-48dbb252bd23
   :::column-end:::
   :::column span="2":::
      Manages permissions for changing work tracking processes and managing link types. The`WorkItemTrackingProvision namespace is an older security namespace that is mostly used for TFS-2018 and earlier versions. The Process namespace replaces this namespace for managing processes in Azure DevOps Server 2019 and later versions. For token format, see [WorkItemTrackingProvision namespace](#work-item-tracking-provision-namespace).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Workspaces
   :::column-end:::
   :::column span="":::
      93bafc04-9075-403a-9367-b7164eac6b5c
   :::column-end:::
   :::column span="2":::
      Manages permissions for administering schleved changes, workspaces, and the ability to create a workspace at the organizaiton or collection level. The Workspaces namespace is only valid with the TFVC repository. You can manage these permissions through the [Organization or Collection settings administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions).   
      **Root token format**: `/`  
      **Token format for a specific workspace**: `/{workspace_name};{owner_id}`  
   :::column-end:::
:::row-end:::



<a id="deprecated-namespaces" /> 

## Deprecated and read-only namespaces

The following namespaces are either deprecated or read-only. You shouldn't use them. 

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


## Related articles

- [Manage tokens and namespaces](/azure/devops/organizations/security/manage-tokens-namespaces) 
- [Security Namespaces REST API](/rest/api/azure/devops/security/security%20namespaces)
- [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd?view=azure-devops-2019) 


<!---
:::row:::
   :::column span="":::
      CollectionManagement
   :::column-end:::
   :::column span="":::
      TBD
   :::column-end:::
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      ProjectServerAdministration
   :::column-end:::
   :::column span="":::
      TBD
   :::column-end:::
   :::column span="2":::
      TBD
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      ReleaseManagement
   :::column-end:::
   :::column span="":::
      7c7d32f7-0e86-4cd6-892e-b35dbba870bd
   :::column-end:::
   :::column span="2":::
      ViewTaskEditor                           View task editor          
      ViewCDWorkflowEditor                     View CD work flow editor  
      ExportReleaseDefinition                  Export release definition    
      ViewLegacyUI                             View legacy UI             
      DeploymentSummaryAcrossProjects          Deployment summary across projects   
      ViewExternalArtifactCommitsAndWorkItems  View external artifact commits and work items
   :::column-end:::
:::row-end:::
---
-->

