---
title: Default permissions and access quick reference
titleSuffix: Azure DevOps & TFS 
description: At-a-glance view of permissions and access levels for common user tasks for Azure DevOps Services and Team Foundation Server 
ms.prod: devops
ms.technology: devops-security
ms.assetid: B656A277-BA3D-472D-824D-CDD4E067053E
toc: show
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.topic: reference
ms.date: 02/12/2018
monikerRange: '>= tfs-2013'
---

# Default permissions and access 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

To connect and use the functions and features that Azure DevOps Services and Team Foundation Server (TFS) provide, users must be added to a group with the appropriate permissions. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions as listed below. 

In addition to permissions, access to specific features are controlled by the access level assigned to a user. Contributors and administrators should be added to Basic (paid) access. Stakeholder access is available to support free access to a limited set of features by an unlimited set of stakeholders. 

For a complete reference of all built-in groups and permissions, see [Permissions and groups](permissions.md). For information about access levels and supporting stakeholder access, see [About access levels](access-levels.md). 

<a id="agile-tools-and-work-tracking" />
## Boards/Work 

You can connect to work items from the web portal, **Boards** or **Work**, and using Eclipse, Visual Studio, Excel, Project, and other clients. For an overview of work tracking features and functions, see [About Agile tools](../../boards/get-started/what-is-azure-boards.md). 


::: moniker range=">= tfs-2013  <= tfs-2018"  
Stakeholders have limited access to select work tracking functions as described in [Work as a stakeholder](../../organizations/security/get-started-stakeholder.md).  
::: moniker-end  

In addition to the permissions set at the [project level via the built-in groups](set-project-collection-level-permissions.md), you can set permissions for the following objects: [area and iteration paths](../../organizations/security/set-permissions-access-work-tracking.md), [queries and query folders](../../boards/queries/set-query-permissions.md), and [delivery plans](set-permissions-access-work-tracking.md#plan-permissions).  

The team administrator role supports configuration of team settings. To be added as a team administrator, see [Add a team administrators](../settings/add-team-administrator.md). 

::: moniker range=">= tfs-2013  <= tfs-2018"  
> [!NOTE]  
> There are no UI permissions associated with [managing tags](../../boards/queries/add-tags-to-work-items.md). Instead, you can manage them using the [TFSSecurity command line tool](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions).   
::: moniker-end  


::: moniker range="vsts"  
Users granted Stakeholder access are granted different access to features depending on whether it is a private or a public project. For private projects, Stakeholders have limited access to select work tracking functions, whereas for public projects, Stakeholders enjoy full access to work tracking features. To learn more, see [About access levels, Stakeholder access](access-levels.md#stakeholder-access).
::: moniker-end  


[!INCLUDE [temp](_shared/work.md)]


## Repos/Code  

You can connect to your code from the web portal, **Repos** or **Code**, or using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, or Visual Studio Code. For an overview of code features and functions, see [Git](../../repos/git/overview.md) and [Use Team Foundation Version Control (TFVC)](../../repos/tfvc/overview.md). Stakeholders for private projects have no access to **Repos** or **Code** features.

From **Project Settings**, you can [set permissions on a repository](set-git-tfvc-repository-permissions.md). From the **Code>Branches** page, you can [set permissions for a specific branch and set branch policies](../../repos/git/branch-permissions.md). 

### Git
[!INCLUDE [temp](_shared/code-git.md)]

### TFVC 
[!INCLUDE [temp](_shared/code-tfvc.md)]


::: moniker range=">= tfs-2015" 
<a id="pipelines" />
## Pipelines/Build and Release

You can define and manage your builds and releases from the web portal, **Pipelines** or **Build and Release**. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/overview.md).

From the web portal, you can set permissions for all or individual build pipelines, release pipelines, task groups, or variable groups. See [Set build and release permissions](../../pipelines/policies/set-permissions.md). 

::: moniker-end  

::: moniker range="vsts"
> [!NOTE]   
>  When the **Free access to Pipelines for Stakeholders** preview feature is enabled for the organization, Stakeholders get access to all **Build and Release** features. This is indicated by the ![ ](/azure/devops/_img/icons/preview.png) preview icon shown in the following table. Without this feature enabled, stakeholders can only view and approve releases. To learn more, see [Provide Stakeholders access to edit build and release pipelines](provide-stakeholder-pipeline-access.md).

[!INCLUDE [temp](_shared/pipelines.md)]

::: moniker-end  

::: moniker range=">= tfs-2015  <= tfs-2018" 
[!INCLUDE [temp](_shared/build-release.md)]
::: moniker-end

## Test Plans/Test

You can define and manage manual tests from the web portal, **Test Plans** or **Test**. For an overview of manual test features and functions, see [Testing overview](../../test/index.md).  

You set [test permissions at the project level](set-project-collection-level-permissions.md) from **Project Settings>Security**.  

[!INCLUDE [temp](_shared/test.md)]


## Azure Artifacts

You can manage feeds from the web portal, **Artifacts** or **Build and release > Packages** Feeds have three levels of access: Owners, Contributors, and Readers. Owners can add any type of identity&mdash;individuals, teams, and groups&mdash;to any access level. 

To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md).

[!INCLUDE [temp](_shared/package-feeds.md)]

::: moniker range=">= tfs-2015"  
## Charts, dashboards, and other web portal features 

You can define and manage dashboards from the web portal, **Dashboard**. For an overview of dashboard and chart features, see [Dashboards](../../report/dashboards/overview.md). 

You set [dashboard permissions at the team level](../../report/dashboards/dashboard-permissions.md) from the team dashboard page. 
::: moniker-end 

::: moniker range="vsts"  
Users granted Stakeholder access are granted different access to features depending on whether it is a private or a public project. For private projects, Stakeholders have limited access to select work tracking functions, whereas for public projects, Stakeholders enjoy full access to work tracking features. To learn more, see [About access levels, Stakeholder access](access-levels.md#stakeholder-access).
::: moniker-end  


[!INCLUDE [temp](_shared/report.md)]


::: moniker range="vsts"

## Analytics

From the web portal **Analytics views**, you can create and manage Analytics views. An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics Service data store. The Analytics Service is the reporting platform for Azure DevOps. To learn more, see [What is the Analytics Service?](../../report/analytics/what-is-analytics.md). 

You set [permissions](../../report/analytics/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level. 

[!INCLUDE [temp](_shared/analytics.md)]

::: moniker-end

## Notifications, alerts, and team collaboration tools 

To manage notifications, see [Manage personal notifications](../../notifications/howto-manage-personal-notifications.md) and [Manage team notifications](../../notifications/howto-manage-team-notifications.md).

>[!NOTE]  
>There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions).

[!INCLUDE [temp](_shared/collaborate.md)]


## Related notes

- [Add users to a project or team](../../organizations/security/add-users-team-project.md)  
- [Permissions and groups reference](permissions.md)  
- [About access levels](access-levels.md)
- [Web portal navigation](../../project/navigation/index.md) 

 
