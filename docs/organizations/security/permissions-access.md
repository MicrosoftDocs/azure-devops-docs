---
title: Default permissions and access quick reference
titleSuffix: Azure DevOps 
description: At-a-glance view of permissions and access levels for common user tasks for Azure DevOps 
ms.prod: devops
ms.technology: devops-security
ms.assetid: B656A277-BA3D-472D-824D-CDD4E067053E
toc: show
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 01/07/2018
---

# Default permissions and access for Azure DevOps

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

To use  Azure DevOps features, users must be added to a security group with the appropriate permissions and granted access to the web portal. Limitations to select features are based on the *access level* and *security group* to which a user is assigned. The **Basic** access level supports full access to all Azure Boards features. **Stakeholder** access level provides partial support to select features, allowing users to view and modify work items, but not use all features. **Stakeholder** access is available to support free access to a limited set of features by an unlimited set of stakeholders. 

The most common built-in security groups&mdash;**Readers**, **Contributors**, and **Project Administrators**&mdash; and team administrator role grant permissions to specific features. 

In general, use the following guidance when assign users to an access level and security group: 
- Grant **Basic** access and add to the **Contributors** security group full-time workers who contribute to the code base or manage projects.
- Grant **Stakeholder** access and add to the **Contributors** security group managers or users who don't actively contribute to the code base but want to check project status and provide direction, feedback, feature ideas, and business alignment to a team. Also, 
- Grant **Stakeholder** access and add to the **Project Administrators** security group users tasked with managing project resources. If they also need to contribute to the code base, then you must assign them **Basic** or higher-level access.  
- Grant **Stakeholder** access and add to the **Project Collection Administrators** security group users tasked with managing organization or collection resources. If they also need to contribute to the code base, then you must assign them **Basic** or higher-level access.  

To learn more about administrative tasks see [About user, team, project, and organization-level settings](../settings/about-settings.md).  For a complete reference of all built-in groups and permissions, see [Permissions and groups](permissions.md). For information about access levels, see [About access levels](access-levels.md). 

In the tables provided in this article, a ![ ](/azure/devops/_img/icons/checkmark.png) checkmark indicates that the corresponding access level or security group has access to a feature by default. 


For a comparison chart of Stakeholder versus Basic access, see the [Feature matrix](https://azure.microsoft.com/services/devops/compare-features/). To assign or change an access level, see [Add users and assign licenses](../accounts/add-organization-users.md). If you need to [grant specific users select permissions](change-individual-permissions.md), you can do so.



::: moniker range=">= tfs-2015" 
## Dashboards, charts, reports, and widgets

You can define and manage dashboards from the web portal, **Dashboard**. For an overview of dashboard and chart features, see [Dashboards](../../report/dashboards/overview.md). You set [dashboard permissions at the team level](../../report/dashboards/dashboard-permissions.md) from the team dashboard page. 
::: moniker-end  

::: moniker range="azure-devops"
Users granted Stakeholder access to private projects can't view or create query charts. Stakeholder access to public projects can view and create query charts.
::: moniker-end    

::: moniker range=">= tfs-2015"
[!INCLUDE [temp](_shared/report.md)]

::: moniker-end  

::: moniker range="tfs-2013" 
## Dashboards and charts

You can pin charts to a team dashboard **Home** page. 

[!INCLUDE [temp](_shared/report.md)]

::: moniker-end  

::: moniker range=">= azure-devops-2019" 

## Power BI Integration and Analytics views

From the web portal **Analytics views**, you can create and manage Analytics views. An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics Service data store. The Analytics Service is the reporting platform for Azure DevOps. To learn more, see [What is the Analytics Service?](../../report/powerbi/what-is-analytics.md). 

You set [permissions](../../report/powerbi/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level. Users with **Stakeholder** access have no access to view or edit Analytics views.

[!INCLUDE [temp](_shared/analytics.md)]

::: moniker-end


<a id="agile-tools-and-work-tracking" />

::: moniker range=">= azure-devops-2019"
## Azure Boards
You can plan and track work from the web portal **Boards** hub, and using Eclipse, Visual Studio, Excel, Project, and other clients. For an overview of work tracking features, see [About Agile tools](../../boards/get-started/what-is-azure-boards.md). 
::: moniker-end

::: moniker range="azure-devops"
Users granted Stakeholder access are granted different access to features depending on whether it is a private or a public project. For private projects, Stakeholders have limited access to select work tracking functions, whereas for public projects, Stakeholders enjoy full access to work tracking features. To learn more, see [About access levels, Stakeholder access](access-levels.md#stakeholder-access).
::: moniker-end    

::: moniker range="<= tfs-2018"
## Work tracking

You can plan and track work from the web portal **Work** hub, and using Eclipse, Visual Studio, Excel, Project, and other clients. For an overview of work tracking features, see [About Agile tools](../../boards/get-started/what-is-azure-boards.md). 

::: moniker-end

> [!NOTE]   
> Team administrators can configure settings for their team's tools. Organization owners and members of the Project Administrators group can configure settings for all teams. To be added as an administrator, see [Add team administrators](../settings/add-team-administrator.md) or [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md). 



### General work item feature access

You can use work items to track anything you need to track. To learn more, see [Understand how work items are used to track issues, tasks, and epics](../../boards/work-items/about-work-items.md).

[!INCLUDE [temp](_shared/boards-work-items.md)]

### Boards feature access

You use [**Boards**](../../boards/boards/kanban-quickstart.md) to implement Kanban methods. Boards present work items as cards and support quick status updates through drag-and-drop. 

[!INCLUDE [temp](_shared/boards-boards.md)]

### Backlogs features access

[**Backlogs**](../../boards/backlogs/create-your-backlog.md) display work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy.  

[!INCLUDE [temp](_shared/boards-backlogs.md)]


### Sprints feature access

You use sprint tools to implement Scrum methods. The [**Sprints**](../../boards/sprints/assign-work-sprint.md) set of tools provide filtered views of work items that a team has assigned to specific iteration paths or sprints. 

[!INCLUDE [temp](_shared/boards-sprints.md)]

### Queries and semantic search 

[**Queries**](../../boards/queries/view-run-query.md) are filtered lists of work items based on criteria that you define by using a query editor. [Adhoc searches](../../boards/queries/search-box-queries.md) are powered by a semantic search engine.

[!INCLUDE [temp](_shared/boards-queries.md)]


::: moniker range=">= tfs-2017"
### Delivery plans feature access

[Delivery plans](../../boards/plans/review-team-plans.md) display work items as cards against a calendar view. This format can be an effective communication tool with managers, partners, and stakeholders for a team. Users granted **Stakeholder** access for  private projects have no access to delivery plans, while users granted **Stakeholder** access for public projects has the same access as regular Contributors granted **Basic** access. 

[!INCLUDE [temp](_shared/boards-plans.md)]

::: moniker-end

### Additional permissions 

In addition to the permissions set at the [project level via the built-in groups](set-project-collection-level-permissions.md), you can set permissions for the following objects: [area and iteration paths](../../organizations/security/set-permissions-access-work-tracking.md) and individual [queries and query folders](../../boards/queries/set-query-permissions.md).  


<!---
::: moniker range=">= tfs-2013 <= tfs-2018"  
> [!NOTE]  
> There are no UI permissions associated with [managing tags](../../boards/queries/add-tags-to-work-items.md). Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions).   
::: moniker-end  
-->


::: moniker range=">= azure-devops-2019"
## Azure Repos
You can manage your source code from the web portal **Repos** hub, or using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, or Visual Studio Code. 
::: moniker-end

::: moniker range="azure-devops"
Stakeholders for private projects have no access to **Repos**. Stakeholders for public projects have the same access to **Repos** as **Contributors**.  
::: moniker-end

::: moniker range="<= tfs-2018"
## Code: Source control

You can connect to your code from the web portal **Code** hub, or using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, or Visual Studio Code. Stakeholders for private projects have no access to **Code**. 
::: moniker-end

::: moniker range=">= tfs-2015"
### Git
You can use [Git repositories](../../repos/git/overview.md) to host and collaborate on your source code. For an overview of code features and functions.

[!INCLUDE [temp](_shared/code-git.md)]

::: moniker-end

::: moniker range=">= tfs-2015"
### TFVC 
::: moniker-end

::: moniker range=">= tfs-2013"
[Team Foundation Version Control (TFVC)](../../repos/tfvc/overview.md) provides a centralized version control system to manage your source control. 

[!INCLUDE [temp](_shared/code-tfvc.md)]

::: moniker-end

<!---
From **Project Settings**, you can [set permissions on a repository](set-git-tfvc-repository-permissions.md). From the **Code>Branches** page, you can [set permissions for a specific branch and set branch policies](../../repos/git/branch-permissions.md). 

-->


<a id="pipelines" />

::: moniker range=">= azure-devops-2019"

## Azure Pipelines

You can define and manage your builds and releases from the web portal **Pipelines** hub. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/overview.md).
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"  
## Build and Release

You can define and manage your builds and releases from the web portal, **Build and Release**. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/overview.md).
::: moniker-end

::: moniker range=">= tfs-2015"  
From the web portal, you can set permissions for all or individual build pipelines, release pipelines, task groups, or variable groups. See [Set build and release permissions](../../pipelines/policies/set-permissions.md). 

::: moniker-end    

::: moniker range="azure-devops"
> [!NOTE]   
>  When the **Free access to Pipelines for Stakeholders** preview feature is enabled for the organization, Stakeholders get access to all **Build and Release** features. This is indicated by the ![ ](/azure/devops/_img/icons/preview.png) preview icon shown in the following table. Without this feature enabled, stakeholders can only view and approve releases. To learn more, see [Provide Stakeholders access to edit build and release pipelines](provide-stakeholder-pipeline-access.md).

::: moniker-end  
  
::: moniker range="azure-devops"
[!INCLUDE [temp](_shared/pipelines.md)]
::: moniker-end    

::: moniker range=">= tfs-2015 <= azure-devops-2019"  
[!INCLUDE [temp](_shared/build-release.md)]
::: moniker-end

::: moniker range=">= azure-devops-2019"
## Test Plans
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"  
## Test
::: moniker-end

::: moniker range=">= tfs-2015"  
You can define and manage manual tests from the web portal, **Test Plans** or **Test**. For an overview of manual test features and functions, see [Testing overview](../../test/index.md). You set [test permissions at the project level](set-project-collection-level-permissions.md) from **Project Settings>Security**. 

[!INCLUDE [temp](_shared/test.md)]

::: moniker-end


::: moniker range=">= azure-devops-2019"  
## Azure Artifacts

You can manage feeds from the web portal, **Artifacts** or **Build and release > Packages** Feeds have three levels of access: Owners, Contributors, and Readers. Owners can add any type of identity&mdash;individuals, teams, and groups&mdash;to any access level. To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md).

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"  
## Package management

You can manage feeds from the web portal, **Build and release > Packages**.  Feeds have three levels of access: Owners, Contributors, and Readers. Owners can add any type of identity&mdash;individuals, teams, and groups&mdash;to any access level. To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md).

::: moniker-end

::: moniker range=">= tfs-2017"
[!INCLUDE [temp](_shared/package-feeds.md)]
::: moniker-end


## Notifications, alerts, and team collaboration tools 

To manage notifications, see [Manage personal notifications](../../notifications/howto-manage-personal-notifications.md) and [Manage team notifications](../../notifications/howto-manage-team-notifications.md).

> [!NOTE]  
> There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions).

[!INCLUDE [temp](_shared/collaborate.md)]


## Related notes

- [Add users to a project or team](../../organizations/security/add-users-team-project.md)  
- [Permissions and groups reference](permissions.md)  
- [About access levels](access-levels.md)
- [Web portal navigation](../../project/navigation/index.md) 

 
