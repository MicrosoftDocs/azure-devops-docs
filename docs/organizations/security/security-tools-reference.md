---
title: Security and permission management tools 
titleSuffix: Azure DevOps 
description: Learn about the available tools to manage security and permissions for Azure DevOps 
ms.technology: devops-security
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '<= azure-devops'
ms.date: 10/06/2020
---

# Security and permission management tools for Azure DevOps

[!INCLUDE [version-all](../../includes/version-all.md)]
 
You set most permissions through the web portal. You can use the tools listed in the following table to set permissions.
Different tools are used depending on whether you are setting permissions at a server, collection, or project level.
You use the [web portal administration context](../../organizations/security/add-users-team-project.md) to set most permissions.

::: moniker range="= azure-devops"

| Permission level  | Web portal security pages  | az devops CLI  | [Tf permission command-line tool](../../repos/tfvc/permission-command.md) |  
|------------------|:---------------------------:|:--------------:|:---------------------:|  
| [Add users to an organization](../accounts/add-organization-users.md)       |   ✔️  |   ✔️  |   |
| [Add and manage security groups](add-manage-security-groups.md)             |   ✔️  |   ✔️  |   |
| [Manage permissions](manage-tokens-namespaces.md)               |    ✔️    |   ✔️  |        |
| [Organization-level](permissions.md#collection)                                     |   ✔️  |                                      |                                                                           |
| [Project and test level](permissions.md#project_test)                               |   ✔️  |                                      |                                                                           |
| [Build pipelines](permissions.md#build)     |   ✔️  |            |                     |
| [Git repository](permissions.md#git-repo)                                           |   ✔️  |                                      |   ✔️                                       |
| [Team Foundation Version Control](permissions.md#tfvc)                              |   ✔️  |                                      |   ✔️                                       |
| [Area level for work item tracking](permissions.md#area-permissions)                |   ✔️  |                                      |                                                                           |
| [Iteration level for work item tracking](permissions.md#iteration-path-permissions) |   ✔️  |                                      |                                                                           |
| [Work item query](permissions.md#query)                                             |   ✔️  |                                      |                                                                           |
| [Work item tags](permissions.md#tags)                                               |   ✔️  |   |                                                                           |
| [Release pipelines](permissions.md#release_management)                              |   ✔️  |                                      |                                                                           |
                                                                  |  |

::: moniker-end

::: moniker range="= azure-devops-2020"

| Permission level   | Web portal security pages   | az devops CLI   | [Team Foundation Administration Console](/azure/devops/server/admin/add-administrator) | [TFSSecurity CLI](/azure/devops/server/command-line/tfssecurity-cmd) | [Tf command-line tool](../../repos/tfvc/permission-command.md) |
|-------------------|:-------------------------:|:------------------:|:------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|-------------------------------------------------|
| [Add users to a server instance](../accounts/add-organization-users.md)       |     |   ✔️  |   |  ✔️ |  | 
| [Add and manage security groups](add-manage-security-groups.md)             |   ✔️  |   ✔️  |   |  ✔️ |  | 
| [Manage permissions](manage-tokens-namespaces.md)       |   ✔️  |   ✔️  |   |  ✔️ |  | 
| [Server-level](permissions.md#server)         |                   |     |   ✔️           | ✔️ |                         |
| [Collection-level](permissions.md#collection) |  ✔️  |           |     |   ✔️   |     |
| [Project and test level](permissions.md#project_test)                               |   ✔️  |              |   | ✔️   |       |
| [Build level](permissions.md#build)    |   ✔️  |              |   | ✔️   |       |
| [Git repository](permissions.md#git-repo)                                           |   ✔️  |                                      |                                                                                        |   ✔️                                  |       ✔️ |
| [Team Foundation Version Control](permissions.md#tfvc)                              |   ✔️  |                                      |                                                                                        |   ✔️                                  |    ✔️ |
| [Area level for work item tracking](permissions.md#area-permissions)  |   ✔️  |              |   | ✔️   |       |
| [Iteration level for work item tracking](permissions.md#iteration-path-permissions)  |   ✔️  |              |   | ✔️   |       |
| [Work item query](permissions.md#query)          |  ✔️  |                     |  | ✔️          |            |
| [Work item tags](permissions.md#tags)          |              |                     |  | ✔️          |            |
| [Alerts](permissions.md#alerts)          |              |                     |  | ✔️          |            |
| [Releases](permissions.md#release_management)     |   ✔️  |               |                       |         |    |


::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2020"

|  Permission level |  Web portal security pages | [Team Foundation Administration Console](/azure/devops/server/admin/add-administrator) |    [TFSSecurity CLI](/azure/devops/server/command-line/tfssecurity-cmd) |  [Tf command-line tool](../../repos/tfvc/permission-command.md)  |   
|-------------------------------------------------------------------------------------|:-----------------------------------:|:--------------------------------------:|:-----------------------------------:|:-----------------------------------:|  
|                        [Server-level](permissions.md#server)                        |                                     |    ✔️    |   ✔️  |                                     |  
|                    [Collection-level](permissions.md#collection)                    |   ✔️  |    ✔️    |   ✔️  |                                     |  
|                [Project and test level](permissions.md#project_test)                |   ✔️  |                                        |   ✔️  |                                     |  
|                         [Build level](permissions.md#build)                         |   ✔️  |                                        |   ✔️  |                                     |  
|                      [Git repository](permissions.md#git-repo)                      |   ✔️  |                                        |                                     |   ✔️  |  
|               [Team Foundation Version Control](permissions.md#tfvc)                |   ✔️  |                                        |                                     |   ✔️  |  
|        [Area level for work item tracking](permissions.md#area-permissions)         |   ✔️  |                                        |   ✔️  |                                     |  
| [Iteration level for work item tracking](permissions.md#iteration-path-permissions) |   ✔️  |                                        |   ✔️  |                                     |  
|                       [Work item query](permissions.md#query)                       |   ✔️  |                                        |   ✔️  |                                     |  
|                        [Work item tags](permissions.md#tags)                        |                                     |                                        |   ✔️  |                                     |  
|                           [Alerts](permissions.md#alerts)                           |                                     |                                        |   ✔️  |                                     |  
|                    [Releases](permissions.md#release_management)                    |   ✔️  |                                        |                                     |                                     |  


::: moniker-end

::: moniker range="<= tfs-2015"

|   Permission level  |   Web portal security pages  | [Team Foundation Administration Console](/azure/devops/server/admin/add-administrator) |    [TFSSecurity CLI](/azure/devops/server/command-line/tfssecurity-cmd) |  [Tf command-line tool](../../repos/tfvc/permission-command.md) |   [TFSLabConfig command-line tool](/azure/devops/server/command-line/tfslabconfig-cmd)    |
|-------------------------------------------------------------------------------------|:-----------------------------------:|:--------------------------------------:|:-----------------------------------:|:-----------------------------------:|:-----------------------------------:|
|                        [Server-level](permissions.md#server)                        |                                     |    ✔️    |   ✔️  |                                     |                                     |
|                    [Collection-level](permissions.md#collection)                    |   ✔️  |    ✔️    |   ✔️  |                                     |                                     |
|                [Project and test level](permissions.md#project_test)                |   ✔️  |                                        |   ✔️  |                                     |                                     |
|                         [Build level](permissions.md#build)                         |   ✔️  |                                        |   ✔️  |                                     |                                     |
|                      [Git repository](permissions.md#git-repo)                      |   ✔️  |                                        |                                     |   ✔️  |                                     |
|               [Team Foundation Version Control](permissions.md#tfvc)                |   ✔️  |                                        |                                     |   ✔️  |                                     |
|        [Area level for work item tracking](permissions.md#area-permissions)         |   ✔️  |                                        |   ✔️  |                                     |                                     |
| [Iteration level for work item tracking](permissions.md#iteration-path-permissions) |   ✔️  |                                        |   ✔️  |                                     |                                     |
|                       [Work item query](permissions.md#query)                       |   ✔️  |                                        |   ✔️  |                                     |                                     |
|                        [Work item tags](permissions.md#tags)                        |                                     |                                        |   ✔️  |                                     |                                     |
|                           [Alerts](permissions.md#alerts)                           |                                     |                                        |   ✔️  |                                     |                                     |
|                    [Releases](permissions.md#release_management)                    |   ✔️  |                                        |                                     |                                     |                                     |
|                        [Lab Management](permissions.md)                         |                                     |                                        |                                     |                                     |   ✔️  |

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"  

## Setting permissions for SQL Server reports 

For information about how to set permissions in Reporting Services,
see [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md).
::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2017"  

## Setting permissions for SharePoint integration     

For information about how to set permissions for SharePoint Products integrated with TFS,
see [Set SharePoint site permissions](../../organizations/security/set-sharepoint-permissions.md).

For more information, see [Determine permission levels and groups in SharePoint 2013](/SharePoint/sites/determine-permission-levels-and-groups-in-sharepoint-server).

::: moniker-end  

## Related notes

- [Add users to a project or team](../../organizations/security/add-users-team-project.md)  
- [Permissions and groups reference](permissions.md)  


