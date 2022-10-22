---
title: Set personal or team favorites
titleSuffix: Azure DevOps
description: Quickly access views or artifacts by favoriting them in Azure DevOps
ms.custom: "navigation, cross-project, cross-service"
ms.subservice: azure-devops-projects
ms.assetid: 473E452D-59F7-4F6F-97C6-657ECD99ADCB
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 03/21/2019
---

# Tutorial: Set personal or team favorites    

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Favorite ![start icon](../../media/icons/icon-favorite-star.png) those views that you frequently access. You can favorite all sorts of Azure DevOps features and tools&mdash;such as a project, repository, build pipeline, dashboard, backlog, board, or query. You can set favorites for yourself or your team. 

As your code base, work tracking efforts, developer operations, and organization grows, you'll want to be able to quickly navigate to those view of interest to you and your team. Setting favorites allows you to do just that.  

Team favorites are a quick way for members of your team to quickly access shared resources of interest. You favorite an item for yourself by choosing the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon. The favorited item will then show up easily from one or more directory lists. You set favorites for a team through the context menu for the definition, view, or artifact. 

In this tutorial you'll learn how to view your personal favorites and to favorite or unfavorite the following views: 

::: moniker range=">= azure-devops-2019"

>[!div class="checklist"]  
> - Project or team
> - Dashboard
> - Team backlog, board, shared query, or other Azure Boards view
> - Repository
> - Build and release definition   
> - Test plans  

::: moniker-end

::: moniker range="tfs-2018"

>[!div class="checklist"]  
> - Project 
> - Shared query 
> - Repository
> - Build and release definition   
> - Test plans  

::: moniker-end

## Prerequisites

::: moniker range="azure-devops"

* You must connect to a project through the web portal. If you don't have a project yet, [create one](../../boards/get-started/sign-up-invite-teammates.md). To connect to the web portal, see [Connect to a project](../../organizations/projects/connect-to-projects.md).
* You must be a member of the **Contributors** or an administrators security group of the project. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To favorite projects, backlogs, boards, queries, dashboards, or pipeline views, you must have **Stakeholder** access or higher.
* To favorite repositories, or delivery plans, you must have **Basic** access or higher. 
* To favorite test plans, you must have **Basic + Test Plans** access level or equivalent.  

::: moniker-end

::: moniker range="<= azure-devops-2019"

* You must connect to a project through the web portal. If you don't have a project yet, [create one](../../organizations/projects/create-project.md). To connect to the web portal, see [Connect to a project](../../organizations/projects/connect-to-projects.md).
* You must be a member of the **Contributors** or an administrators security group of the project. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To favorite projects, backlogs, boards, queries, dashboards, or pipeline views, you must have **Stakeholder** access or higher.
* To favorite repositories, or delivery plans, you must have **Basic** access or higher. 
* To favorite test plans, you must have **Basic + Test Plans** access level or equivalent.   

::: moniker-end 

For details about the different access levels, see [About access levels](../../organizations/security/access-levels.md). 


<a id="view-favorites">  </a>

## View personal favorites   

::: moniker range=">= azure-devops-2019"

Access views that you have favorited by choosing the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choosing **Favorites**. 

> [!div class="mx-imgBorder"]  
> ![View your favorited items](media/favorites/open-favorites-page-vnav.png) 

> [!NOTE]  
> If a service is disabled, then you can't favorite an artifact or view of that service. For example, if **Boards** is disabled, then the favorite groups&mdash;Plans, Boards, Backlogs, Analytics views, Sprints, and Queries and all Analytics widgets&mdash;are disabled. To re-enable a service, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md).

::: moniker-end

::: moniker range="tfs-2018"

1. Access views that you have favorited by choosing the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Projects**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Projects page](../../media/settings/open-project-hub-horz.png)   

2. Choose **My Favorites** to quickly access any view or item that you've marked as a favorite. 

	> [!div class="mx-imgBorder"]  
	> ![Projects page, Favorites page](media/favorites/project-page-favorites-horz.png)   

::: moniker-end


::: moniker range=">= azure-devops-2019"

<a id="team-artifact" />

## Favorite a project or team  

1. To favorite a project, open the project **Summary** page and choose the ![favorites](../../media/icons/icon-favorite-star.png) star icon.

	> [!div class="mx-imgBorder"]  
	> ![web portal, Azure DevOps logo](media/favorites/favorite-project-vert.png)  

2. To favorite a team artifact, open <strong>Boards>Boards</strong> or <strong>Boards>Backlogs</strong>. Select the team you want to favorite from the team selector and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon.

	> [!div class="mx-imgBorder"]  
	> ![Work>Boards, set team favorite](media/favorites/set-team-favorite-vert.png)

3. To favorite other team artifacts, choose the :::image type="icon" source="../../media/icons/team.png" border="false"::: team icon, and then choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to one of the listed artifacts. 

	> [!div class="mx-imgBorder"]  
	> ![Phone team work artifacts](media/favorites/view-team-artifacts-vert.png) 

::: moniker-end

::: moniker range="tfs-2018"

## Favorite a project

To favorite a project, open the project **Summary** page and choose the ![favorites](../../media/icons/icon-favorite-star.png) star icon.

> [!div class="mx-imgBorder"]  
> ![web portal, Azure DevOps logo](media/favorites/favorite-project-horz-brn.png)

Or, you can favorite a project from the **Projects** page by choosing the ![favorites](../../media/icons/icon-favorite-star.png) star icon next to the project. 

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Favorite a dashboard 

1. From **Overview>Dashboards**, open the selector and choose the **Browse all dashboards** option. 
 
	> [!div class="mx-imgBorder"]  
	> ![Dashboards, Browse all dashboards option](../../report/dashboards/media/dashboards/browse-all-dashboards.png)  

2. The **Mine** page shows your favorited dashboards, and all dashboards of teams that you belong to. The **All** page (shown below) lists all dashboards defined for the project in alphabetical order. You can filter the list by team or by keyword.   
 
	> [!div class="mx-imgBorder"]  
	> ![The All page lists all dashboards.](../../report/dashboards/media/dashboards/all-dashboards-list.png)  

	> [!TIP]
	> You can change the sort order of the list by choosing the column label.  

3. To favorite a dashboard, hover over the dashboard and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon.  

	> [!div class="mx-imgBorder"]  
	> ![Favorite a dashboard.](../../report/dashboards/media/dashboards/favorite-dashboard.png)  

	Favoriting a dashboard will cause it to appear on your **Favorites** page and towards the top in the **Dashboards** selection menu.
   
::: moniker-end  


::: moniker range=">= azure-devops-2019"

## Favorite a team's backlog, Kanban board, or other view

You can favorite several Agile tools for a team from a **Boards** page. 
1. Choose **Boards**, and then choose the page of interest, such as **Boards**, **Backlogs**, or **Sprints**.  

	For example, here we choose (1) **Work** and then (2) **Backlogs**.

	> [!div class="mx-imgBorder"]  
	> ![Open Work, Backlogs](media/favorites/open-work-backlogs-vert.png)  

	To choose a specific team backlog, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team backlogs** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](../../boards/sprints/media/assign-items-sprint/team-selector-backlogs-agile.png) 

2.  Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team backlog. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear on your **Favorites** page and towards the top of the team backlog selector menu.

::: moniker-end


## Favorite a shared query 

::: moniker range=">= azure-devops-2019"

Open **Boards>Queries** and choose the **All** page. Expand a folder as needed. Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to the query you want to favorite. 

Or, open the context menu of the query, and then select **Add to Team Favorites**, and then select from the list of teams. 

> [!NOTE]  
> You must be a member of at least one team for the **Add to Team Favorites** option to be visible.  If not visible, ask your project administrator or team administrator to add you to a team.

> [!div class="mx-imgBorder"]  
> ![Work>Queries, Add to favorites](media/favorites/favorite-query.png)

You can also set a query as a personal favorite by opening the query and choosing the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon.

> [!div class="mx-imgBorder"]  
> ![Work>Queries, set shared query as a personal favorite](media/favorites/set-query-favorite-personal.png) 

::: moniker-end

::: moniker range="tfs-2018"

Open **Work>Queries**. Next, open the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon menu of the shared query you want to favorite, and then select **Add to my favorites** or **Add to team favorites**.  

![Web portal, Work, Queries, Add to my favorites](media/set-favorites-shared-query.png)

::: moniker-end


## Favorite a delivery plan 

To learn more about delivery plans, see [Review team Delivery Plans](../../boards/plans/review-team-plans.md).

::: moniker range=">= azure-devops-2019"  

To mark a delivery plan as a favorite, open the **Boards>Plans** page and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to the Delivery Plan. 
::: moniker-end  

::: moniker range="tfs-2018"  

To mark a delivery plan as a favorite, open the **Work>Plans** page and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to the Delivery Plan.

::: moniker-end


## Favorite a repository

::: moniker range=">= azure-devops-2019"

From any **Repos** page, open the repository selector and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon for the repository you want to favorite.

> [!div class="mx-imgBorder"]  
> ![Code page, Repository selector, choose favorites icon](media/favorites/favorite-repo-vert.png)  

::: moniker-end

::: moniker range="tfs-2018"

From any **Code** page, open the repository selector and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to the repository you want to favorite. 

> [!div class="mx-imgBorder"]  
> ![Web portal, Code, Favorite a repo](media/set-favorites-repository.png) 

::: moniker-end


## Favorite a build pipeline  

::: moniker range=">= azure-devops-2019"

Open **Pipelines>Builds** and choose either **Mine** or **Definitions** page. Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to the build definition you want to favorite. Or, open the context menu of the build definition, and then select **Add to my favorites** or **Add to team favorites**.  

> [!div class="mx-imgBorder"]  
> ![Pipelines, Builds, Add to my favorites or team favorites](media/favorites/set-build-favorites-vert.png)

::: moniker-end


::: moniker range="tfs-2018"

Open **Build and Release>Builds** and choose either **Mine** or **Definitions** page. Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to the build definition you want to favorite. Or, open the context menu of the build definition, and then select **Add to my favorites** or **Add to team favorites**.  

> [!div class="mx-imgBorder"]  
> ![Build & Release, Builds, Add to my favorites or team favorites, previous navigation](media/favorites/set-favorites-build-definitions.png)

::: moniker-end

## Favorite a test plan 

To learn more about test plans, see [Create a test plan and test suite](../../test/create-a-test-plan.md).

::: moniker range=">= azure-devops-2019"  

To mark a test plan as a favorite, open **Test Plans>Test Plans** and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to a test plan from the menu that shows All test plans. 

::: moniker-end  

::: moniker range="tfs-2018"

To mark a test plan as a favorite, open the **Test>Test Plans** page and choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon next to a test plan from the menu that shows All test plans. 

::: moniker-end


<a id="unfavorite"> </a>
## Unfavorite a view you've favorited

::: moniker range=">= azure-devops-2019"

You can unfavorite an artifact from your **Favorites** page. Choose the :::image type="icon" source="../../media/icons/inbox.png" border="false"::: inbox icon, and then choose **Favorites**. Choose the :::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon of a currently favorited artifact. 

> [!div class="mx-imgBorder"]  
> ![View your favorited items](media/favorites/open-favorites-page-vnav.png) 

Similarly, you can unfavorite an artifact from the same page where you favorited it. 

::: moniker-end

::: moniker range="tfs-2018"

You can unfavorite an artifact from the **Projects>Favorites** page and choose the :::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon of a currently favorited artifact. 

Similarly, you can unfavorite an artifact from the same page where you favorited it. 

::: moniker-end



## Try this next
> [!div class="nextstepaction"]
> [Follow a user story, bug, issue, or other work item or pull request](../../boards/work-items/follow-work-items.md)

## Related articles

- [Manage personal notifications](../../notifications/manage-your-personal-notifications.md) 
- [Set your preferences](../../organizations/settings/set-your-preferences.md) 





<!---

## What views can I favorite?

You can set favorites for the following artifacts from the indicated page. 

::: moniker range=">= azure-devops-2019"

> [!div class="mx-tdCol2BreakAll"]        
> |Service/area |     Artifacts        | Page |
> |---------------|---------|---------| 
> | Organization & projects | Projects | **Projects**  (personal favorites only)  |  
> | Dashboard | Team dashboards  | **Overview>Dashboards**  | 
> | Code | Repositories | **Repos>Branches**  (personal favorites only) | 
> | Work, Agile tools for a team | Backlogs, boards, sprint backlogs, sprint taskboards | **Boards>Boards** or **Backlogs**, or **Sprints** | 
> | Work  | Queries | **Boards>Queries** |
> | Work | Delivery plans |  **Boards>Plans** (personal favorites only, requires installation of the [Delivery Plans extension](../../boards/plans/review-team-plans.md)) | 
> | Build and Release | Pipeline definitions | **Pipelines>Builds** or **Releases**  | 
> | Test | Test plans | **Test Plans>Test Plans** (personal favorites only) |

::: moniker-end  

::: moniker range="tfs-2018"


> [!div class="mx-tdCol2BreakAll"]  
> > |Service/area |  Artifacts  | Page |
> |---------------|---------|---------| 
> | Organization & projects | Projects and teams | **Projects**  (personal favorites only)  |  
> | Code | Repositories | **Code>Branches**  (personal favorites only) | 
> | Work  | Queries | **Work>Queries** |
> | Work | Delivery plans |  **Work>Plans** (personal favorites only, requires installation of the [Delivery Plans extension](../../boards/plans/review-team-plans.md)) | 
> | Build and Release | Pipeline definitions | **Build & Release>Build** or **Release**  | 
> | Test | Test plans | **Test>Test Plans** (personal favorites only) |

::: moniker-end


-->
