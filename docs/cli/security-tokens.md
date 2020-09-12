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
monikerRange: '>= azure-devops-2020'
ms.date: 08/17/2020
---

# Security namespakecs and tokens for permissions management

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

Tokens are arbitrary strings representing resources in Azure DevOps. Token format differs per resource type, however hierarchy and separator characters are common between all tokens.

## Hierarchy

A security namespace can be either hierarchical or flat.
Tokens in a hierarchical namespace exist in a hierarchy with effective permissions inherited from parent tokens to child tokens.
Tokens in a flat namespace have no concept of a parent-child relationship between any two tokens.

## Separator character

Tokens in a hierarchical namespace either have a fixed length for each path part, or variable length.
If the tokens have variable-length path parts, then a separator character is used to distinguish where one path part ends and another begins.

Token examples for different namespaces are provided in the following sections.

## Namespace: Project

   **Namespace ID**: `52d39943-cb85-4d7f-8fa8-c6baac873819`

   Basically tokens in this namespace are of the following format.
   **Root token**: `$PROJECT`

   Token to secure permissions for each project in your organization
   `$PROJECT:vstfs:///Classification/TeamProject/PROJECT_ID`.

   Assume you have a project named `Test Project 1`.
   You can get the project ID for this project by using `project show` command. 

   `az devops project show --project "Test Project 1"`

   The command returns a project-id, for example, `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`.

   Therefore, the token to secure project-related permissions for `Test Project 1` is:  
   `'$PROJECT:vstfs:///Classification/TeamProject/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba'`

## Namespace: Tagging

   **Namespace ID**: `bb50f182-8e5e-40b8-bc21-e8752a1e7ae2`

   **Token format for project level permissions**: `/PROJECT_ID`

   **Example**: `/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`

## Namespace: AnalyticsViews

   **Namespace ID**: `d34d3680-dfe5-4cc6-a949-7d9c68f73cba`

   **Token format for project level permissions**: `$/Shared/PROJECT_ID`

   **Example**: `$/Shared/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`

### Namespace name: Analytics

   **Namespace ID**: `58450c49-b02d-465a-ab12-59ae512d6531`

   **Token format for project level permissions**: `$/PROJECT_ID`

   **Example**: `$/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`

## Namespace: Iteration

   **Namespace ID**: `bf7bfa03-b2b7-47db-8113-fa2e002cc5b1`

   **Token format**: `'vstfs:///Classification/Node/Iteration_Identifier/'`

   Suppose, you have the following iterations configured for your team.
   
   - ProjectIteration1
     TeamIteration1
        - TeamIteration1ChildIteration1
        - TeamIteration1ChildIteration2
        - TeamIteration1ChildIteration3
     TeamIteration2
        - TeamIteration2ChildIteration1
        - TeamIteration2ChildIteration2

   If you need to update permissions for `ProjectIteration1\TeamIteration1\TeamIteration1ChildIteration1`, the security token looks as follows:

   `vstfs:///Classification/Node/ProjectIteration1_Identifier:vstfs:///Classification/Node/TeamIteration1_Identifier:vstfs:///Classification/Node/TeamIteration1ChildIteration1_Identifier`

## Namespace: BuildAdministration

   **Namespace ID**: `302acaca-b667-436d-a946-87133492041c`

   **Token format**: `'BuildPrivileges'`

## Namespace:  Build

   **Namespace ID**: `33344d9c-fc72-4d6f-aba5-fa317101a7e9`

   **Token format for project level build permissions**: `PROJECT_ID`

   If you need to update permissions for a particular build definition ID, for example, 12, security token for that build definition looks as follows:

   **Token format for project level build permissions**: `PROJECT_ID/12`

   **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`

## Namespace: Identity

   **Namespace ID**: `5a27515b-ccd7-42c9-84f1-54c998f03866`

   **Token format for project level permissions**: `PROJECT_ID`

   **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`

   To modify group level permissions for Group Origin ID [2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b]:

   **Token**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba\2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b`

## Namespace: ReleaseManagement

   **Namespace ID**: `c788c23e-1b46-4162-8f5e-d7585343b5de`

   **Token format for project level permissions**: `PROJECT_ID`

   **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`

   If you need to update permissions for a particular release definition ID, for example, 12, security token for that release definition looks as follows:

   **Token format for project level build permissions**: `PROJECT_ID/12`
   
   **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`
   
   If the release definition ID lives in a folder, then the security tokens looks as follows:
   
   **Token format**: `PROJECT_ID/{folderName}/12`
   
   For stages, tokens look like: `PROJECT_ID/{folderName}/{DefinitionId}/Environment/{EnvironmentId}`.

## Namespace name: Git Repositories

   **Namespace ID**: `2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87`

   **Token format for project level permissions**: `repoV2/PROJECT_ID`

   You need to append RepositoryID to update repo level permissions.

   **Token format for repository level permissions**: `repoV2/PROJECT_ID/REPO_ID`

For more information on the Git Repositories namespace and its tokens refer to this [blog](https://devblogs.microsoft.com/devops/git-repo-tokens-for-the-security-service/),

## Namespace: AuditLog
   
   **Namespace ID**: `a6cc6381-a1ca-4b36-b3c1-4e65211e82b6`
   
   **Token format**: `/AllPermissions`
 
## Namespace: UtilizationPermissions

The `UtilizationPermissions` namespace controls the ability to query usage summaries for users. 
   
   **Namespace ID**: `83abde3a-4593-424e-b45f-9898af99034d`
   
   **Token format**: `/`

   
## Namespace WorkItemTrackingProvision 

The `WorkItemTrackingProvisio`n namespace is an older security namespace that is mostly used for Azure DevOps Server and older Azure DevOps Services projects. It has been largely replaced by the "Process" namespace. 

   **Namespace ID**: `5a6cd233-6615-414d-9393-48dbb252bd23`
   
   **Root token format**: `/$`
   
  ** Token format for a specific project**: `$/PROJECT_ID`
   

   
### Namespace name: Workspaces 

The `Workspaces` security namespace is used only with Team Foundation Version Control (TFVC). The user ID in the token is the TeamFoundationID of the Workspace's owner/creator.
   
   **Namespace ID**: `93bafc04-9075-403a-9367-b7164eac6b5c`
   
   **Root token format**: `/`
   
   **Token format for a specific workspace**: `/{workspace_name};{owner_id}` 


## Valid namespaces

---
:::row:::
   :::column span="":::
      **Namespace**
   :::column-end:::
   :::column span="":::
      **ID**
   :::column-end:::
   :::column span="":::
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::
---
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
      CSS
   :::column-end:::
   :::column span="":::
      83e28ad4-2d72-4ceb-97b0-c7726d5502c3
   :::column-end:::
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      TBD
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
   :::column span="":::
      TBD
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      TeamLabSecurity
   :::column-end:::
   :::column span="":::
      9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1
   :::column-end:::
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      UtilizationPermissions
   :::column-end:::
   :::column span="":::
      83abde3a-4593-424e-b45f-9898af99034d
   :::column-end:::
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      VersionControlItems (TFVC)
   :::column-end:::
   :::column span="":::
      a39371cf-0841-4c16-bbd3-276e341bc052
   :::column-end:::
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Warehouse
   :::column-end:::
   :::column span="":::
      TBD
   :::column-end:::
   :::column span="":::
      TBD
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      WorkItemTracking
   :::column-end:::
   :::column span="":::
      73e71c45-d483-40d5-bdba-62fd076f7f87
   :::column-end:::
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      WorkItemTrackingAdministration
   :::column-end:::
   :::column span="":::
      445d2788-c5fb-4132-bbef-09c4045ad93f
   :::column-end:::
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
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
   :::column span="":::
      Notes
   :::column-end:::
:::row-end:::

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

