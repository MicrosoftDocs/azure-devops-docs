---
title: Default permissions and access quick reference
titleSuffix: Azure DevOps 
description: At-a-glance view of permissions and access levels for common user tasks for Azure DevOps 
ms.technology: devops-security
ms.assetid: B656A277-BA3D-472D-824D-CDD4E067053E
toc: show
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 05/12/2021
---

# Default permissions and access for Azure DevOps

[!INCLUDE [version-all](../../includes/version-all.md)]

To use  Azure DevOps features, users must be added to a security group with the appropriate permissions and granted access to the web portal. Limitations to select features are based on the *access level* and *security group* to which a user is assigned. The **Basic** access level and higher supports full access to most Azure DevOps services, except for Azure Test Plans. **Stakeholder** access level provides partial support to Azure Boards and Azure Pipelines. **Stakeholder** access is available to support free access to a limited set of features by an unlimited set of stakeholders. 

The most common built-in security groups&mdash;**Readers**, **Contributors**, and **Project Administrators**&mdash; and team administrator role grant permissions to specific features. 

In general, use the following guidance when assigning users to an access level and security group: 
- Grant **Basic** access or higher and add to the **Contributors** security group full-time workers who contribute to the code base or manage projects.
- Grant **Stakeholder** access and add to the **Contributors** security group managers or users who don't actively contribute to the code base but want to check project status and provide direction, feedback, feature ideas, and business alignment to a team. 
- Grant **Stakeholder** access and add to the **Project Administrators** security group users tasked with managing project resources. If they also need to contribute to the code base, then you must assign them **Basic** or higher-level access.  
- Grant **Stakeholder** access and add to the **Project Collection Administrators** security group users tasked with managing organization or collection resources. If they also need to contribute to the code base, then you must assign them **Basic** or higher-level access.  

To learn more about administrative tasks see [About user, team, project, and organization-level settings](../settings/about-settings.md).  For a complete reference of all built-in groups and permissions, see [Permissions and groups](permissions.md). For information about access levels, see [About access levels](access-levels.md). 

In the tables provided in this article, a ✔️ indicates that the corresponding access level or security group has access to a feature by default. 


For a comparison chart of Stakeholder versus Basic access, see the [Feature matrix](https://azure.microsoft.com/services/devops/compare-features/). To assign or change an access level, see [Add users and assign licenses](../accounts/add-organization-users.md). If you need to [grant specific users select permissions](change-individual-permissions.md), you can do so.



[!INCLUDE [temp](includes/stakeholder-access.md)]


<a id="agile-tools-and-work-tracking" />

::: moniker range=">= azure-devops-2019"

## Azure Boards

You can plan and track work from the web portal **Boards** hub, and using Eclipse, Visual Studio, Excel, Project, and other clients. For an overview of work tracking features, see [About Agile tools](../../boards/get-started/what-is-azure-boards.md). To change permissions, see [Set permissions and access for work tracking](set-permissions-access-work-tracking.md).

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

Access to the following tasks are controlled by each user's access level or by permission assignments. Members of the Readers, Contributors, or Project Administrators group are assumed to have Basic access or greater.  

### General work item feature access

You can use work items to track anything you need to track. To learn more, see [Understand how work items are used to track issues, tasks, and epics](../../boards/work-items/about-work-items.md).   

[!INCLUDE [temp](includes/boards-work-items.md)]

### Boards feature access

You use [**Boards**](../../boards/boards/kanban-quickstart.md) to implement Kanban methods. Boards present work items as cards and support quick status updates through drag-and-drop.

[!INCLUDE [temp](includes/boards-boards.md)]

### Backlogs features access

[**Backlogs**](../../boards/backlogs/create-your-backlog.md) display work items as lists. A product backlog represents your project plan and a repository of all the information you need to track and share with your team. Portfolio backlogs allow you to group and organize your backlog into a hierarchy.  

[!INCLUDE [temp](includes/boards-backlogs.md)]


### Sprints feature access

You use sprint tools to implement Scrum methods. The [**Sprints**](../../boards/sprints/assign-work-sprint.md) set of tools provide filtered views of work items that a team has assigned to specific iteration paths or sprints. 

[!INCLUDE [temp](includes/boards-sprints.md)]

### Queries and semantic search 

[**Queries**](../../boards/queries/view-run-query.md) are filtered lists of work items based on criteria that you define by using a query editor. [Adhoc searches](../../boards/queries/search-box-queries.md) are powered by a semantic search engine.

[!INCLUDE [temp](includes/boards-queries.md)]


::: moniker range=">= tfs-2017"

### Delivery plans feature access

[Delivery plans](../../boards/plans/review-team-plans.md) display work items as cards against a calendar view. This format can be an effective communication tool with managers, partners, and stakeholders for a team.  

[!INCLUDE [temp](includes/boards-plans.md)]

::: moniker-end

### Additional permissions 

In addition to the permissions set at the [project level via the built-in groups](set-project-collection-level-permissions.md), you can set permissions for the following objects: [area and iteration paths](../../organizations/security/set-permissions-access-work-tracking.md) and individual [queries and query folders](../../boards/queries/set-query-permissions.md).  


<!---
::: moniker range=">= tfs-2013 <= tfs-2018"  
> [!NOTE]  
> There are no UI permissions associated with [managing tags](../../boards/queries/add-tags-to-work-items.md). Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).   
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

You can use [Git repositories](../../repos/git/index.yml) to host and collaborate on your source code. For an overview of code features and functions.

[!INCLUDE [temp](includes/code-git.md)]

::: moniker-end

::: moniker range=">= tfs-2015"

### TFVC

::: moniker-end

::: moniker range=">= tfs-2013"

[Team Foundation Version Control (TFVC)](../../repos/tfvc/index.yml) provides a centralized version control system to manage your source control. 

[!INCLUDE [temp](includes/code-tfvc.md)]

::: moniker-end

<a id="pipelines" />

::: moniker range=">= azure-devops-2019"

## Azure Pipelines

You can define and manage your builds and releases from the web portal **Pipelines** hub. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/get-started/what-is-azure-pipelines.md).

::: moniker-end

::: moniker range="azure-devops"

[!INCLUDE [temp](includes/pipelines-cloud.md)]

::: moniker-end  
  
::: moniker range="azure-devops-2019 || azure-devops-2020"

### Build  

[!INCLUDE [temp](includes/pipelines-build.md)]

### Release 

[!INCLUDE [temp](includes/pipelines-release.md)]

### Task groups  

You use task groups to encapsulate a sequence of tasks already defined in a build or a release pipeline into a single reusable task. Task group permissions follow a hierarchical model. You can set defaults for all  permissions at the project-level and over-write on an individual task group pipeline. You [define and manage task groups](../../pipelines/library/task-groups.md) in the **Task groups** tab in **Azure Pipelines**.

[!INCLUDE [temp](includes/task-groups.md)]

::: moniker-end   

::: moniker range=">= tfs-2015 <= tfs-2018"

## Build and Release

You can define and manage your builds and releases from the web portal, **Build and Release**. For an overview of pipelines features and functions, see [Continuous integration on any platform](../../pipelines/get-started/what-is-azure-pipelines.md). From the web portal, you can set permissions for all or individual builds and releases. See [Set build and release permissions](../../pipelines/policies/set-permissions.md). 


### Build  

[!INCLUDE [temp](includes/build.md)]

### Release  

[!INCLUDE [temp](includes/release.md)]

::: moniker-end    


::: moniker range=">= azure-devops-2019"

## Azure Test Plans

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018" 

## Test

::: moniker-end

::: moniker range=">= tfs-2015"

You can define and manage manual tests from the web portal, **Test Plans** or **Test**. For an overview of manual test features and functions, see [Testing overview](../../test/index.yml). You set [test permissions at the project level](set-project-collection-level-permissions.md) from **Project Settings > Permissions**. 

[!INCLUDE [temp](includes/test.md)]

::: moniker-end


::: moniker range=">= azure-devops-2019" 

## Azure Artifacts
::: moniker-end

::: moniker range="azure-devops" 

You can manage feeds from the web portal, **Artifacts**. Users granted Stakeholder or Basic access, or higher can access Azure Artifacts features. To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md).

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020" 

You can manage feeds from the web portal, **Artifacts**. Users granted Basic access or higher can access Azure Artifacts features. Users granted Stakeholder access have no access to Azure Artifacts.  To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md). 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"  

## Package management

You can manage feeds from the web portal, **Build and release > Packages**. Users granted Basic access or higher can access Package management features. Users granted Stakeholder access have no access. To set permissions, see [Secure feeds using permissions](../../artifacts/feeds/feed-permissions.md).

::: moniker-end

[!INCLUDE [temp](includes/package-feeds.md)]


## Notifications, alerts, and team collaboration tools 

To manage notifications, see [Manage personal notifications](../../notifications/manage-your-personal-notifications.md) and [Manage team notifications](../../notifications/manage-team-group-global-organization-notifications.md).

> [!NOTE]  
> There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).

[!INCLUDE [temp](includes/collaborate.md)]


::: moniker range=">= tfs-2015"

## Dashboards, charts, reports, and widgets

::: moniker-end

::: moniker range="azure-devops"

You can define and manage team and project dashboards from the web portal, **Dashboards**. For an overview of dashboard and chart features, see [Dashboards](../../report/dashboards/overview.md). You can set [individual dashboard permissions](../../report/dashboards/dashboard-permissions.md) to grant or restrict the ability to edit or delete dashboards. 

Users granted Stakeholder access to private projects can't view or create query charts. Stakeholder access to public projects can view and create query charts.

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"

You can define and manage team dashboards from the web portal, **Dashboards**. For an overview of dashboard and chart features, see [Dashboards](../../report/dashboards/overview.md). You set [dashboard permissions at the team level](../../report/dashboards/dashboard-permissions.md) from the team dashboard page. 

::: moniker-end

::: moniker range=">= tfs-2015"
[!INCLUDE [temp](includes/report.md)]

::: moniker-end

::: moniker range="tfs-2013" 

## Dashboards and charts

You can pin charts to a team dashboard **Home** page. 

[!INCLUDE [temp](includes/report.md)]

::: moniker-end

::: moniker range=">= azure-devops-2019" 

## Power BI Integration and Analytics views

From the web portal **Analytics views**, you can create and manage Analytics views. An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics Service data store. The Analytics Service is the reporting platform for Azure DevOps. To learn more, see [What is the Analytics Service?](../../report/powerbi/what-is-analytics.md). 

You set [permissions](../../report/powerbi/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level. Users with **Stakeholder** access have no access to view or edit Analytics views.

[!INCLUDE [temp](includes/analytics.md)]

::: moniker-end

<!---

::: moniker range=">= tfs-2017"

## Role-based defaults

[!INCLUDE [temp](includes/default-role-assignments.md)]

::: moniker-end

-->


## Related articles

- [Add users to a project or team](../../organizations/security/add-users-team-project.md)  
- [Security and permission management tools](security-tools-reference.md)  
- [Permissions and groups reference](permissions.md)  
- [About access levels](access-levels.md)
- [Web portal navigation](../../project/navigation/index.md) 
- [Troubleshoot permissions](troubleshoot-permissions.md)

