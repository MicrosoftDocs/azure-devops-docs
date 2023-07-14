---
title: Default permissions quick reference
titleSuffix: Azure DevOps 
description: Default permissions and access to common user tasks for Azure DevOps
ms.custom: "permissions, engagement-fy23" 
ms.subservice: azure-devops-security
ms.assetid: B656A277-BA3D-472D-824D-CDD4E067053E
toc: show
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 02/02/2023
---

# Default permissions quick reference for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To use Azure DevOps features, users must be added to a security group with the appropriate permissions and granted access to the web portal. Limitations to select features are based on the *access level* and *security group* to which a user is assigned. The **Basic** access level and higher supports full access to most Azure DevOps Services, except for Azure Test Plans. **Stakeholder** access level provides partial support to Azure Boards and Azure Pipelines. To learn more about access levels, see [About access levels](access-levels.md) and [Stakeholder access quick reference](stakeholder-access.md). 


## Assign users to a security group 

The most common built-in security groups&mdash;**Readers**, **Contributors**, and **Project Administrators**&mdash; and team administrator role grant permissions to specific features. 

In general, use the following guidance when assigning users to a security group: 
- Add to the **Contributors** security group full-time workers who contribute to the code base or manage projects.
- Add to the **Project Administrators** security group users tasked with managing project resources. I 
- Add to the **Project Collection Administrators** security group users tasked with managing organization or collection resources.  

To learn more about administrative tasks see [About user, team, project, and organization-level settings](../settings/about-settings.md).  For a complete reference of all built-in groups and permissions, see [Permissions and groups](permissions.md). For information about access levels, see [About access levels](access-levels.md). 

In the tables provided in this article, a ✔️ (checkmark) indicates that the corresponding access level or security group has access to a feature by default. 
 
To assign or change an access level, see [Add users and assign licenses](../accounts/add-organization-users.md). If you need to [grant specific users select permissions](request-changes-permissions.md), you can do so.
 
<a id="agile-tools-and-work-tracking" />

::: moniker range=">= azure-devops-2019"

## Azure Boards

You can plan and track work from the web portal **Boards** hub, and using Visual Studio, Excel, and other clients. For an overview of work tracking features, see [About Agile tools](../../boards/get-started/what-is-azure-boards.md). To change permissions, see [Set permissions and access for work tracking](set-permissions-access-work-tracking.md). In addition to the permissions set at the [project level via the built-in groups](change-project-level-permissions.md), you can set permissions for the following objects: [area and iteration paths](set-permissions-access-work-tracking.md) and individual [queries and query folders](../../boards/queries/set-query-permissions.md).  

::: moniker-end
 
::: moniker range="tfs-2018"

## Work tracking

You can plan and track work from the web portal **Work** hub, and using Eclipse, Visual Studio, Excel, Project, and other clients. 

::: moniker-end

> [!NOTE]   
> Team administrators can configure settings for their team's tools. Organization owners and members of the **Project Administrators** group can configure settings for all teams. To be added as an administrator, see [Add team administrators](../settings/add-team-administrator.md) or [Change project-level permissions](change-project-level-permissions.md). 

Access to the following tasks is controlled by each user's access level or by permission assignments. Members of the Readers, Contributors, or Project Administrators group are assumed to have Basic access or greater.  

### General work item permissions

You can use work items to track anything you need to track. To learn more, see [Understand how work items are used to track issues, tasks, and epics](../../boards/work-items/about-work-items.md). 

::: moniker range="tfs-2018"  
> [!NOTE]  
> There are no UI permissions associated with [managing tags](../../boards/queries/add-tags-to-work-items.md). Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).   
::: moniker-end  


[!INCLUDE [temp](includes/boards-work-items.md)]

### Boards  

You use [**Boards**](../../boards/boards/kanban-quickstart.md) to implement Kanban methods. Boards present work items as cards and support quick status updates through drag-and-drop.

[!INCLUDE [temp](includes/boards-boards.md)]

### Backlogs features access

[**Backlogs**](../../boards/backlogs/create-your-backlog.md) display work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy.  

[!INCLUDE [temp](includes/boards-backlogs.md)]


### Sprints  

You use sprint tools to implement Scrum methods. The [**Sprints**](../../boards/sprints/assign-work-sprint.md) set of tools provide filtered views of work items that a team has assigned to specific iteration paths or sprints. 

[!INCLUDE [temp](includes/boards-sprints.md)]

### Queries 

[**Queries**](../../boards/queries/view-run-query.md) are filtered lists of work items based on criteria that you define by using a query editor. [Adhoc searches](../../boards/queries/search-box-queries.md) are powered by a semantic search engine.

[!INCLUDE [temp](includes/boards-queries.md)]


### Delivery plans  

[Delivery plans](../../boards/plans/review-team-plans.md) display work items as cards against a calendar view. This format can be an effective communication tool with managers, partners, and stakeholders for a team.  

[!INCLUDE [temp](includes/boards-plans.md)]



::: moniker range=">= azure-devops-2019"

## Azure Repos

You can manage your source code from the web portal **Repos** hub, or using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, or Visual Studio Code.

::: moniker-end

::: moniker range="azure-devops"

Stakeholders for private projects have no access to **Repos**. Stakeholders for public projects have the same access to **Repos** as **Contributors**.  

::: moniker-end

::: moniker range="azure-devops" 

### Advanced Security 

You can use [Advanced Security](../../repos/security/configure-github-advanced-security-features.md) to identify security vulnerabilities in your repository.

::: moniker-end

::: moniker range="azure-devops"

[!INCLUDE [temp](includes/advanced-security.md)]


## Code: Source control

You can connect to your code from the web portal **Code** hub, or using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, or Visual Studio Code. Stakeholders for private projects have no access to **Code**. 

::: moniker-end

### Git

You can use [Git repositories](../../repos/git/index.yml) to host and collaborate on your source code. For an overview of code features and functions.

[!INCLUDE [temp](includes/code-git.md)]



### TFVC



[Team Foundation Version Control (TFVC)](../../repos/tfvc/index.yml) provides a centralized version control system to manage your source control. 

[!INCLUDE [temp](includes/code-tfvc.md)]


<a id="pipelines" />

::: moniker range=">= azure-devops-2019"

## Azure Pipelines

You can define and manage your builds and releases from the web portal **Pipelines** hub. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/get-started/what-is-azure-pipelines.md).

::: moniker-end

::: moniker range="azure-devops"

[!INCLUDE [temp](includes/pipelines-cloud.md)]

::: moniker-end  
  
::: moniker range=">= azure-devops-2019 < azure-devops"

### Build  

[!INCLUDE [temp](includes/pipelines-build.md)]

### Release 

[!INCLUDE [temp](includes/pipelines-release.md)]

### Task groups  

You use task groups to encapsulate a sequence of tasks already defined in a build or a release pipeline into a single reusable task. Task group permissions follow a hierarchical model. You can set defaults for all  permissions at the project-level and over-write on an individual task group pipeline. You [define and manage task groups](../../pipelines/library/task-groups.md) in the **Task groups** tab in **Azure Pipelines**.

[!INCLUDE [temp](includes/task-groups.md)]

::: moniker-end   

::: moniker range="tfs-2018"

## Build and Release

You can define and manage your builds and releases from the web portal, **Build and Release**. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/get-started/what-is-azure-pipelines.md). From the web portal, you can set permissions for all or individual builds and releases. See [Set build and release permissions](../../pipelines/policies/set-permissions.md). 


### Build  

[!INCLUDE [temp](includes/build.md)]

### Release  

[!INCLUDE [temp](includes/release.md)]

::: moniker-end    


::: moniker range=">= azure-devops-2019"

## Azure Test Plans

Users granted **Basic + Test Plans** or **Visual Studio Enterprise** access level can define and manage manual tests from the web portal. For an overview of manual test features and functions, see [Testing overview](../../test/index.yml). You set several [test permissions at the project level](change-project-level-permissions.md) from **Project Settings>Permissions**. 

::: moniker-end

::: moniker range="tfs-2018" 

## Test

Users granted **Visual Studio Enterprise** or **Advanced** access level can define and manage manual tests from the web portal. For an overview of manual test features and functions, see [Testing overview](../../test/index.yml). You set  several [test permissions at the project level](change-project-level-permissions.md)  from **Project Settings>Permissions**. 

::: moniker-end

[!INCLUDE [temp](includes/test.md)]

::: moniker range=">= azure-devops-2019" 

## Azure Artifacts
::: moniker-end

::: moniker range="azure-devops" 

You can manage feeds from the web portal, **Artifacts**. Users granted Stakeholder or Basic access, or higher can access Azure Artifacts features. To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md).

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops" 

You can manage feeds from the web portal, **Artifacts**. Users granted Basic access or higher can access Azure Artifacts features. Users granted Stakeholder access have no access to Azure Artifacts.  To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md). 

::: moniker-end

::: moniker range="tfs-2018"  

## Package management

You can manage feeds from the web portal, **Build and release > Packages**. Users granted Basic access or higher can access Package management features. Users granted Stakeholder access have no access. To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md).

::: moniker-end

[!INCLUDE [temp](includes/package-feeds.md)]


## Notifications, alerts, and team collaboration tools 

To manage notifications, see [Manage personal notifications](../../organizations/notifications/manage-your-personal-notifications.md) and [Manage team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md).

> [!NOTE]  
> There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).

[!INCLUDE [temp](includes/collaborate.md)]


## Dashboards, charts, reports, and widgets

::: moniker range="azure-devops"

You can define and manage team and project dashboards from the web portal, **Dashboards**. For an overview of dashboard and chart features, see [Dashboards](../../report/dashboards/overview.md). You can set [individual dashboard permissions](../../report/dashboards/dashboard-permissions.md) to grant or restrict the ability to edit or delete dashboards. 

Users granted Stakeholder access to private projects can't view or create query charts. Stakeholder access to public projects can view and create query charts.

::: moniker-end

::: moniker range="< azure-devops"

You can define and manage team dashboards from the web portal, **Dashboards**. For an overview of dashboard and chart features, see [Dashboards](../../report/dashboards/overview.md). You set [dashboard permissions at the team level](../../report/dashboards/dashboard-permissions.md) from the team dashboard page. 

::: moniker-end

[!INCLUDE [temp](includes/report.md)]

::: moniker range=">= azure-devops-2019" 

## Power BI Integration and Analytics views

From the web portal **Analytics views**, you can create and manage Analytics views. An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics Service data store. The Analytics Service is the reporting platform for Azure DevOps. To learn more, see [What is the Analytics Service?](../../report/powerbi/what-is-analytics.md). 

You set [permissions](../../report/powerbi/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level. Users with **Stakeholder** access have no access to view or edit Analytics views.

[!INCLUDE [temp](includes/analytics.md)]

::: moniker-end


## Related articles

- [Add users to a project or team](../../organizations/security/add-users-team-project.md)  
- [Security and permission management tools](security-tools-reference.md)  
- [Permissions and groups reference](permissions.md)  
- [About access levels](access-levels.md)
- [Web portal navigation](../../project/navigation/index.md) 
- [Troubleshoot permissions](troubleshoot-permissions.md)

