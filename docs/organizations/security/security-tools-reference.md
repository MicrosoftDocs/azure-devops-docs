---
title: Security and permission management tools 
titleSuffix: Azure DevOps 
description: Learn about the available tools to manage security and permissions for Azure DevOps 
ms.technology: devops-security
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '<= azure-devops'
ms.date: 10/12/2020
---

# Security and permission management tools for Azure DevOps

[!INCLUDE [version-all](../../includes/version-all.md)]
 
While you set most permissions through the web portal, you can use other tools to manage security groups and permissions. For permissions that aren't available to manage through the web portal,you have the option to manage them using a command line tool. 

To learn more about permissions not available through a user interface, see the [Security namespace and permission reference, Internal namespaces and permissions](namespace-reference.md#internal).  


[!INCLUDE [version-selector-minimize](../../includes/version-selector-minimize.md)]

Additional options include the following tools: 

::: moniker range="azure-devops"

- Manage security groups using [az devops security CLI](add-manage-security-groups.md)  
- Manage permissions using [az devops permissions CLI](manage-tokens-namespaces.md)  
- [Tf Team Foundation Version Control (TFVC) permission command-line tool](../../repos/tfvc/permission-command.md)  
- [Tf git permission command-line tool](../../repos/tfvc/git-permission-command.md)  
- [Security REST API commands](/rest/api/azure/devops/security/)

::: moniker-end


::: moniker range="azure-devops-2020"

- Manage security groups using [az devops security CLI](add-manage-security-groups.md)  
- Manage permissions using [az devops permissions CLI](manage-tokens-namespaces.md) 
- [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd)  
- [Tf Team Foundation Version Control (TFVC) permission command-line tool](../../repos/tfvc/permission-command.md)  
- [Tf git permission command-line tool](../../repos/tfvc/git-permission-command.md)  
- [Security REST API commands](/rest/api/azure/devops/security/)

::: moniker-end


::: moniker range="< azure-devops-2020"

- [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd)  
- [Tf Team Foundation Version Control (TFVC) permission command-line tool](../../repos/tfvc/permission-command.md)  
- [Tf git permission command-line tool](../../repos/tfvc/git-permission-command.md)   
- [Security REST API commands](/rest/api/azure/devops/security/)

::: moniker-end

::: moniker range="< azure-devops"

You manage server-level permissions and security groups through the [Team Foundation Administration Console](/azure/devops/server/admin/add-administrator), as well as a few select collection-level permissions. 

::: moniker-end

You can use the tools listed in the following table to set permissions. Links in the table connect you to the article for setting permissions through the web portal.  

::: moniker range="= azure-devops"

| Permission level  | Web portal security pages  | az devops CLI  | Tf CLI | 
|------------------|:---------------------------:|:--------------:|:---------------------:|  
| [Add users to an organization](../accounts/add-organization-users.md)                |   ✔️  |   ✔️  |     |  
| [Organization-level, auditing, enterprise policies, process, workspaces](set-project-collection-level-permissions.md#collection-level)     |   ✔️  |   ✔️  |     |  
| [Project-level, test management, create tags](set-project-collection-level-permissions.md#project-level)  |   ✔️  |   ✔️  |     |  
| [Git repository](../../repos/git/set-git-repository-permissions.md)                             |   ✔️  |   ✔️  |  ✔️ |  
| [Team Foundation Version Control](../../repos/tfvc/set-tfvc-repository-permissions.md)            |   ✔️  |   ✔️  |  ✔️ |  
| [Builds, Task groups](../../pipelines/policies/permissions.md#set-pipeline-permissions)  |   ✔️  |   ✔️  |     |  
| [Build resources](set-project-collection-level-permissions.md#collection-level)      |   ✔️  |   ✔️  |     |  
| [Pipeline security roles](../../pipelines/policies/permissions.md)                   |   ✔️  |   ✔️  |     |  
| [Releases](../../pipelines/policies/permissions.md#set-release-permissions)              |   ✔️  |   ✔️  |     | 
| [Area path (CSS)](set-permissions-access-work-tracking.md#set-permissions-area-path) |   ✔️  |   ✔️  |     |  
| [Iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path)  |   ✔️  |   ✔️  |     |  
| [Delivery plans](set-permissions-access-work-tracking.md#plan-permissions)           |   ✔️  |   ✔️  |      | 
| [Work item query](set-permissions-access-work-tracking.md#work-item-queries)         |   ✔️  |   ✔️  |     |  
| [Work item tags](set-permissions-access-work-tracking.md#tags)                       |   ✔️  |   ✔️  |     |  
| [Analytics views](../../report/powerbi/analytics-security.md)                        |   ✔️  |   ✔️  |     |  
| [Dashboards](../../report/dashboards/dashboard-permissions.md)                      |   ✔️  |   ✔️  |     |  
| [Notifications or alerts](permissions.md#alerts)                                     |       |   ✔️   |    |   

::: moniker-end

::: moniker range="= azure-devops-2020"

| Permission level  | Web portal security pages   | az devops CLI   |  TFSSecurity CLI | Tf CLI |
|-------------------|:---------------------------:|:---------------:|:----------------:|:----------:| 
| [Add users to a server instance](../accounts/add-organization-users.md)              |   ✔️  |  ✔️  |   ✔️   |     | 
| [Collection-level, enterprise policies, process, workspaces](set-project-collection-level-permissions.md#collection-level)     |   ✔️  |  ✔️  |   ✔️   |     | 
| [Project-level, test management, create tags](set-project-collection-level-permissions.md#project-level)  |   ✔️  |  ✔️  |   ✔️   |     | 
| [Git repository](../../repos/git/set-git-repository-permissions.md)                            |   ✔️  |  ✔️  |   ✔️   |  ✔️ | 
| [Team Foundation Version Control](../../repos/tfvc/set-tfvc-repository-permissions.md)             |   ✔️  |  ✔️ |   ✔️   |  ✔️ | 
| [Builds](../../pipelines/policies/permissions.md#set-pipeline-permissions)               |   ✔️  |  ✔️  |   ✔️   |     | 
| [Build resources](set-project-collection-level-permissions.md#collection-level)      |   ✔️  |  ✔️  |   ✔️   |     | 
| [Pipeline security roles](../../pipelines/policies/permissions.md)                   |   ✔️  |   ✔️ |  ✔️   |     | 
| [Releases](../../pipelines/policies/permissions.md#set-release-permissions)              |   ✔️  |  ✔️ |   ✔️   |     | 
| [Area path (CSS)](set-permissions-access-work-tracking.md#set-permissions-area-path)       |   ✔️  |  ✔️ |   ✔️   |     | 
| [Iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path)  |   ✔️  |  ✔️ |   ✔️   |     | 
| [Delivery plans](set-permissions-access-work-tracking.md#plan-permissions)           |   ✔️  |  ✔️ |    ✔️  |     | 
| [Work item query](set-permissions-access-work-tracking.md#work-item-queries)         |   ✔️  |  ✔️ |   ✔️   |     | 
| [Work item tags](set-permissions-access-work-tracking.md#tags)                       |   ✔️  |  ✔️ |   ✔️   |     | 
| [Analytics views](../../report/powerbi/analytics-security.md)                        |   ✔️  |  ✔️ |   ✔️   |     | 
| [Dashboards](../../report/dashboards/dashboard-permissions.md)                      |   ✔️  |  ✔️ |   ✔️   |     | 
| [Notifications or alerts](permissions.md#alerts)                                     |       |  ✔️ |   ✔️   |     | 



::: moniker-end


::: moniker range="azure-devops-2019"

|  Permission level |  Web portal security pages |  TFSSecurity CLI | Tf CLI |   
|---------------------------|:-------------------:|:-----------:|:-------------------:|  
| [Add users to a server instance](../accounts/add-organization-users.md)             |   ✔️  |  ✔️ |     | 
| [Collection-level, process, workspaces](set-project-collection-level-permissions.md#collection-level)    |   ✔️  |  ✔️ |     | 
| [Project-level, test management, create tags](set-project-collection-level-permissions.md#project-level) |   ✔️  |  ✔️ |     | 
| [Git repository](../../repos/git/set-git-repository-permissions.md)                            |   ✔️  |  ✔️ |  ✔️   | 
| [Team Foundation Version Control](../../repos/tfvc/set-tfvc-repository-permissions.md)          |   ✔️  |  ✔️ |  ✔️   | 
| [Builds](../../pipelines/policies/permissions.md#set-pipeline-permissions)              |   ✔️  |  ✔️ |     | 
| [Build resources](set-project-collection-level-permissions.md#collection-level)     |   ✔️  |  ✔️ |     | 
| [Pipeline security roles](../../pipelines/policies/permissions.md)                  |   ✔️  |   ✔️ |    |   
| [Releases](../../pipelines/policies/permissions.md#set-release-permissions)             |   ✔️  |  ✔️ |     | 
| [Area path](set-permissions-access-work-tracking.md#set-permissions-area-path)      |   ✔️  |  ✔️ |     | 
| [Iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path) |   ✔️  |  ✔️ |     | 
| [Delivery plans](set-permissions-access-work-tracking.md#plan-permissions)          |   ✔️  |  ✔️ |     | 
| [Work item query](set-permissions-access-work-tracking.md#work-item-queries)        |   ✔️  |  ✔️ |     | 
| [Work item tags](set-permissions-access-work-tracking.md#tags)                      |   ✔️  |  ✔️ |     | 
| [Analytics views](../../report/powerbi/analytics-security.md)                       |   ✔️  |  ✔️ |     | 
| [Dashboards](../../report/dashboards/dashboard-permissions.md)                     |   ✔️  |  ✔️ |     | 
| [Notifications or alerts](permissions.md#alerts)                                    |   ✔️  |  ✔️ |     | 


::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

|  Permission level |  Web portal security pages |  TFSSecurity CLI | Tf CLI |   
|---------------------------|:-------------------:|:-----------:|:-------------------:|  
| [Add users to a server instance](../accounts/add-organization-users.md)             |   ✔️  |  ✔️ |     | 
| [Collection-level, workspaces](set-project-collection-level-permissions.md#collection-level)    |   ✔️  |  ✔️ |     | 
| [Project-level, test management, create tags](set-project-collection-level-permissions.md#project-level) |   ✔️  |  ✔️ |     | 
| [Git repository](../../repos/git/set-git-repository-permissions.md)                            |   ✔️  |  ✔️ |  ✔️   | 
| [Team Foundation Version Control](../../repos/tfvc/set-tfvc-repository-permissions.md)           |   ✔️  |  ✔️ |  ✔️   | 
| [Builds](../../pipelines/policies/permissions.md#set-pipeline-permissions)              |   ✔️  |  ✔️ |     | 
| [Build resources](set-project-collection-level-permissions.md#collection-level)     |   ✔️  |  ✔️ |     | 
| [Pipeline security roles](../../pipelines/policies/permissions.md)                  |   ✔️  |   ✔️ |    |   
| [Releases](../../pipelines/policies/permissions.md#set-release-permissions)             |   ✔️  |  ✔️ |     | 
| [Area path (CSS)](set-permissions-access-work-tracking.md#set-permissions-area-path)      |   ✔️  |  ✔️ |     | 
| [Iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path) |   ✔️  |  ✔️ |     | 
| [Delivery plans](set-permissions-access-work-tracking.md#plan-permissions)          |   ✔️  |  ✔️ |     | 
| [Work item query](set-permissions-access-work-tracking.md#work-item-queries)        |   ✔️  |  ✔️ |     | 
| [Work item tags](set-permissions-access-work-tracking.md#tags)                      |   ✔️  |  ✔️ |     | 
| [Dashboards](../../report/dashboards/dashboard-permissions.md)                     |   ✔️  |  ✔️ |    |    
| [Notifications or alerts](permissions.md#alerts)                                    |   ✔️  |  ✔️ |     | 



::: moniker-end

::: moniker range="<= tfs-2015"
 

| Permission level  |   Web portal security pages  |  TFSSecurity CLI | Tf CLI |   
|---------------------------|:-------------------:|:-----------:|:-------------------:|  
| [Add users to a server instance](../accounts/add-organization-users.md)             |   ✔️  |  ✔️ |     | 
| [Collection-level](set-project-collection-level-permissions.md#collection-level)    |   ✔️  |  ✔️ |     | 
| [Project-level, test management, create tags](set-project-collection-level-permissions.md#project-level) |   ✔️  |  ✔️ |     | 
| [Builds](../../pipelines/policies/permissions.md#set-pipeline-permissions)              |   ✔️  |  ✔️ |     | 
| [Build resources](set-project-collection-level-permissions.md#collection-level)     |   ✔️  |  ✔️ |     | 
| [Git repository](../../repos/git/set-git-repository-permissions.md)                                    |   ✔️  |  ✔️ |  ✔️ | 
| [Team Foundation Version Control](../../repos/tfvc/set-tfvc-repository-permissions.md)           |   ✔️  |  ✔️ |  ✔️ | 
| [Area path](set-permissions-access-work-tracking.md#set-permissions-area-path)      |   ✔️  |  ✔️ |     | 
| [Iteration path](set-permissions-access-work-tracking.md#set-permissions-area-path) |   ✔️  |  ✔️ |     | 
| [Work item query](set-permissions-access-work-tracking.md#work-item-queries)        |   ✔️  |  ✔️ |     | 
| [Work item tags](set-permissions-access-work-tracking.md#tags)                      |   ✔️  |  ✔️ |     | 
| [Notifications or alerts](permissions.md#alerts)                                    |       |  ✔️ |     | 
| [Releases](../../pipelines/policies/permissions.md#set-release-permissions)             |   ✔️  |  ✔️ |     | 

In addition, Lab Management permissions can be managed through the [TFSLabConfig command-line tool](/azure/devops/server/command-line/tfslabconfig-cmd).
   
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

## Related articles

::: moniker range="azure-devops" 

- [Set permissions at the project or collection level](set-project-collection-level-permissions.md)  
- [Add users to a project or team](add-users-team-project.md)  
- [Add and manage security groups CLI](add-manage-security-groups.md)        
- [Manage permissions CLI](manage-tokens-namespaces.md)              
- [Permissions and groups reference](permissions.md)  
- [Security namespace and permission reference](namespace-reference.md)
- [Troubleshoot permissions](troubleshoot-permissions.md)
::: moniker-end  

::: moniker range="azure-devops-2020" 

- [Set permissions at the project or collection level](set-project-collection-level-permissions.md)  
- [Team Foundation Administration Console](/azure/devops/server/admin/add-administrator)  
- [Add users to a project or team](add-users-team-project.md)  
- [Add and manage security groups CLI](add-manage-security-groups.md)        
- [Manage permissions CLI](manage-tokens-namespaces.md)              
- [Permissions and groups reference](permissions.md)  
- [Security namespace and permission reference](namespace-reference.md)
- [Troubleshoot permissions](troubleshoot-permissions.md)
::: moniker-end  

::: moniker range="< azure-devops-2020" 

- [Set permissions at the project or collection level](set-project-collection-level-permissions.md)  
- [Add users to a project or team](add-users-team-project.md)             
- [Team Foundation Administration Console](/azure/devops/server/admin/add-administrator)  
- [Permissions and groups reference](permissions.md)  
- [Security namespace and permission reference](namespace-reference.md)
- [Troubleshoot permissions](troubleshoot-permissions.md)
::: moniker-end  