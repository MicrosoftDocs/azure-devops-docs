---
title: Use breadcrumbs and selectors 
titleSuffix: Azure DevOps Services & TFS
description: Navigate to pages and artifacts using breadcrumbs or selectors in the web portal for Azure DevOps Services and Team Foundation Server
ms.custom: Navigation
ms.technology: devops-collab
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 11/19/2018
---

# Use breadcrumbs and selectors to navigate and open artifacts 

[!INCLUDE [temp](../../_shared/version-tfs-2017-through-vsts.md)] 

To quickly navigate to a feature or artifact&mdash;such as a dashboard, repository, product backlog, Kanban board, build pipeline&mdash;you can use breadcrumbs or selectors. 

[!INCLUDE [temp](_shared/new-navigation-wp.md)] 

## Organization and project breadcrumbs 


# [New navigation](#tab/new-nav)

::: moniker range=">= azdevserver-2019"

To navigate to the project summary page, choose the project link within the breadcrumbs. To navigate to the organization page with all projects defined for the organization, choose the organization link. 

![Top level breadcrumbs](_img/breadcrumbs/top-level-breadcrumbs.png)

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017 <= tfs-2018 || vsts"

Horizontal navigation doesn't provide a breadcrumb structure for the organization and project levels. Instead, you can select a recent team or project from the project/team selector. 

 ![Choose a different team or project from the project/team selector](../../_shared/_img/work-web-portal-ts-switch-team-focus.png)

Choosing **Browse all** [opens the **projects** page](work-across-projects.md). 

::: moniker-end

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

---


## Selectors 

::: moniker range=">= azdevserver-2019"
Selectors are used to select an artifact within the current page. Most Agile tools are defined for a team and therefore require selection of the team artifact or tool.  
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
Selectors are used to select an artifact within the current page. Most Agile tools are defined for a team and therefore require selection of the team as well as the specific page.  
::: moniker-end

> [!NOTE]  
> When you navigate to a specific page or artifact, the system remembers your selection. You use selectors to choose a different artifact within the current page. 

### Example: Dashboard selector 

# [New navigation](#tab/new-nav)

::: moniker range=">= azdevserver-2019"

Within **Dashboards**, you open a specific dashboard from the selector. 

> [!div class="mx-imgBorder"]  
> ![Dashboards, dashboard selector](_img/breadcrumbs/dashboard-selector.png) 

This particular selector features these navigational elements: 

- Search box for filtering dashboards based on a team name or keyword 
- Two pages you can choose from:
	- **Mine** (dashboards you created) which are organized by team
	- **All** (dashboards created by everyone) which are listed alphabetically
- Dashboards you've favorited will appear at the top of the selector 
- **Add new dashboard** feature
- **Browse all dashboards** - opens **Dashboards>All** 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017 <= tfs-2018 || vsts"

Within **Dashboards**, you select the team whose dashboards you want to view. 

![Choose a different team or project from the project/team selector](../../_shared/_img/work-web-portal-ts-switch-team-focus.png)

Then, choose the name of the dashboard to view it. 

For example, here we open the *Work in Progress* dashboard. 

> [!div class="mx-imgBorder"]  
> ![Dashboards, Choose a team dashboard](../../report/dashboards/_img/dashboards/choose-dashboard.png)  

::: moniker-end

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

---

### Example: Backlogs 

# [New navigation](#tab/new-nav)

::: moniker range=">= azdevserver-2019"

From the **Boards>Backlogs** page, you use the selector to switch to another team's backlog. Again, favorited backlogs appear towards the top of the menu. You can also filter the list based on a team name or keyword.  

> [!div class="mx-imgBorder"]  
> ![Work>Backlogs, backlogs selector](_img/breadcrumbs/backlog-selector.png) 

Or, choose **Browse all team backlogs** to open the **Backlogs>All** page.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 

::: moniker-end


# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017 <= tfs-2018 || vsts"

(1) Select the team from the project/team selector, choose (2) **Work**, (3) **Backlogs**, and then (4) the product backlog, which is **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI). 

> [!div class="mx-imgBorder"]
> ![Open the Work>Backlogs page, standard pages](../../boards/sprints/_img/assign-items-sprint/open-work-backlogs-standard.png) 

To choose another team, open the project/team selector and select a different team or choose the **Browse** option. 

> [!div class="mx-imgBorder"]  
> ![Choose another team](../../boards/sprints/_img/assign-items-sprint/team-selector-backlogs-standard.png) 

::: moniker-end

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

---


## Artifact breadcrumbs and selectors  

Within select pages, breadcrumbs are provided to support navigating within the page or opening an artifact.  

::: moniker range=">= azdevserver-2019"

### Example: Queries folders and breadcrumbs
For example, when working in the **Queries** pages, you can navigate to a subfolder, folder, or page.

![Queries breadcrumbs](_img/breadcrumbs/queries-breadcrumbs.png)

Also, you can choose a query that you've favorited from the selector menu, Or, you can choose to browse all queries which returns you to the **All Queries** page. 
  
> [!div class="mx-imgBorder"]  
> ![Queries, Query selector](_img/breadcrumbs/query-bd-and-selector.png) 

::: moniker-end

### Example: Pipeline folders and breadcrumbs
Breadcrumb-and-selector navigation elements are used within most services that support defining and organizing artifacts within folders. This includes **Pipelines** or **Build and Release** applications pages. 

# [New navigation](#tab/new-nav)
::: moniker range=">= azdevserver-2019"

> [!div class="mx-imgBorder"]  
> ![Queries, Query selector](_img/breadcrumbs/build-bc-selector.png) 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017 <= tfs-2018 || vsts"

Choose the **Deployment** breadcrumb link to return to the *Deployment* folder. 

> [!div class="mx-imgBorder"]  
> ![Build and Release, Build definition](_img/breadcrumbs/build-bc-folder.png)
>  
::: moniker-end

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

---

## Related articles

- [Add an artifact or team](add-artifact-team.md) 
- [Set favorites](set-favorites.md) 
- [Open a service or page](go-to-service-page.md) 
- [Filter basics](filter-basics.md) 
