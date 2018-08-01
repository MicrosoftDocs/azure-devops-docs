---
title: Default permissions and access quick reference
titleSuffix: VSTS & TFS 
description: At-a-glance view of permissions and access levels for common user tasks for Visual Studio Team Services and Team Foundation Server 
ms.prod: devops
ms.technology: devops-security
ms.assetid: B656A277-BA3D-472D-824D-CDD4E067053E
toc: show
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 02/12/2018
monikerRange: '>= tfs-2013'
---

# Default permissions and access for VSTS and TFS 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

To connect and use the functions and features that VSTS and TFS provides, users must be added to a group with the appropriate permissions. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions as listed below. 

In addition to permissions, access to select features are controlled by the access level assigned to a user. Contributors and administrators should be added to Basic (paid) access. Stakeholder access is available to support free access to a limited set of features by an unlimited set of stakeholders. 

For a complete reference of all built-in groups and permissions, see [Permissions and groups](permissions.md). For information about assigning access levels and supporting stakeholder access, see [Manage users and access](../accounts/add-organization-users-from-user-hub.md) for VSTS, and [Change access levels](change-access-levels.md) for TFS. 


## Code: Git and TFVC  

You can connect to your code from the Code hub or the web portal, and using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, Visual Studio Code. For an overview of code features and functions, see [Git](../../repos/git/overview.md) and [Use Team Foundation Version Control (TFVC)](../../repos/tfvc/overview.md). Stakeholders have no access to the Code hub or its features.

From the team project admin content for Version Control, you can [set permissions on a repository](set-git-tfvc-repository-permissions.md). From the **Code>Branches** page, you can [set permissions for a specific branch and set branch policies](../../repos/git/branch-permissions.md). 

### Git
[!INCLUDE [temp](_shared/code-git.md)]

### TFVC 
[!INCLUDE [temp](_shared/code-tfvc.md)]



## Build and release

You can define and manage your builds and releases from the web portal, **Build and Release** hub. For an overview of build and release management features and functions, see [Continuous integration on any platform](../../pipelines/overview.md).

From the **Build and Release** hub, you can set permissions for all or individual build pipelines, release pipelines, task groups, or variable groups. See [Set build and release permissions](../../pipelines/policies/set-permissions.md). 

[!INCLUDE [temp](_shared/build-release.md)]

## Package Management feeds

Feeds have three levels of access: Owners, Contributors, and Readers. Owners can add any type of identity&mdash;individuals, teams, and groups&mdash;to any access level. To set permissions, see [Secure feeds using permissions](../../package/feeds/feed-permissions.md).

[!INCLUDE [temp](_shared/package-feeds.md)]

## Test

You can define and manage manual tests from the web portal, **Test** hub. For an overview of manual test features and functions, see [Testing overview](../../test/index.md).  

You set [test permissions at the team project level](set-project-collection-level-permissions.md) from the admin context Security page.  

[!INCLUDE [temp](_shared/test.md)]

## Agile tools and work tracking

You can connect to work items from the **Work** hub of the web portal and using Eclipse, Visual Studio, Excel, Project, and other clients. For an overview of work tracking features and functions, see [About Agile tools](../../work/backlogs/overview.md). Stakeholders have limited access to select work tracking functions as described in [Work as a stakeholder](../../organizations/security/get-started-stakeholder.md).  

In addition to the permissions set at the [project level via the built-in groups](set-project-collection-level-permissions.md), you can set permissions for the following objects: [area and iteration paths](../../organizations/security/set-permissions-access-work-tracking.md), [queries and query folders](../../work/track/set-query-permissions.md), and [delivery plans](set-permissions-access-work-tracking.md#plan-permissions).  

The team administrator role supports configuration of team settings. To be added as a team administrator, see [Configure team settings and add team administrators](../../work/scale/add-team-administrator.md). 

>[!NOTE]  
>There are no UI permissions associated with [managing tags](../../work/track/add-tags-to-work-items.md). Instead, you can manage them using the [TFSSecurity command line tool](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions).   


[!INCLUDE [temp](_shared/work.md)]



## Charts, dashboards, and other web portal features 

You can define and manage dashboards from the web portal, **Dashboard** hub. For an overview of dashboard and chart features, see [Dashboards](../../report/dashboards/overview.md). 

You set [dashboard permissions at the team level](../../report/dashboards/dashboard-permissions.md) from the team dashboard page. 


[!INCLUDE [temp](_shared/report.md)]



::: moniker range="vsts"

## Analytics

From the **Analytics** hub, you can create and manage Analytics views. An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics Service data store. The Analytics Service is the reporting platform for VSTS. To learn more, see [What is the Analytics Service?](../../report/analytics/what-is-analytics.md). 

You set [permissions](../../report/analytics/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level. 

[!INCLUDE [temp](_shared/analytics.md)]


::: moniker-end

## Notifications, alerts, and team collaboration tools 

To manage notifications, see [Manage personal notifications](../../notifications/manage-personal-notifications.md) and [Manage team notifications](../../notifications/manage-team-notifications.md).

>[!NOTE]  
>There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/tfs/server/ref/command-line/tfssecurity-cmd#collection-level-permissions).

[!INCLUDE [temp](_shared/collaborate.md)]

 




## Related notes

- [Add users to a project or team](../../organizations/security/add-users-team-project.md)  
- [Permissions and groups reference](permissions.md)  
- [About access levels](access-levels.md)
- [Navigation basics](../../project/navigation/index.md) 

 
