---
title: Configure team settings
titleSuffix: Azure DevOps Services & TFS
description: Manage team-specific tools such as sprint settings, backlogs, Kanban boards, and more as well as add team administrators 
ms.technology: devops-settings
ms.prod: devops
ms.topic: overview
ms.assetid: 6BF2B72D-9160-4140-B8DE-B2C7C42AC338  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 07/27/2018
---

# Configure team settings 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

<!--- Still needs work, versioning, and other team settings from the admin context, add something about something, team-specific widgets--> 

<a id="team-settings"></a>

Within a project, you [add teams](add-teams.md) to support the needs of several feature teams, or an enterprise organized to deliver different products. Each team is then able to configure the Agile tools the way that works for their team, supporting each team to collaborate most effectively in planning and managing their work.  

As a team administrator, you can configure, customize, and manage all team-related activities for your team. These include being able to add team members, add team admins, and configure Agile tools. Members of the Project Administrators group can manage all team-related activities for all teams. 

Team admin permissions are role-based, unlike permissions that are assigned to a security group or set individually for a user.  Also, because team administrators are members of the Contributor role they have permissions assigned to that role.  

You can configure most of your team settings from the common configuration dialog. 

::: moniker range="tfs-2015"  

> [!NOTE]
> **Feature availability:** The common configuration dialog is available for TFS 2015.1 and later versions.  

::: moniker-end 

[!INCLUDE [temp](../../_shared/new-navigation.md)]  


# [New navigation](#tab/new-nav)  

::: moniker range="vsts"  

1. Make sure that you select the team backlog or board that you want to configure using the team selector. To learn more, see [Use breadcrumbs and selectors to navigate and open artifacts](../../project/navigation/use-breadcrumbs-selectors.md). 

2. Choose the product or portfolio backlog from the board-selection menu. 
	> [!div class="mx-imgBorder"]
	> ![Choose board level, vert nav](_img/configure-team/choose-board-level-vert.png)

0. Choose the ![](../../_img/icons/blue-gear.png) gear icon to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](_img/configure-team/open-board-settings.png)  

0. Choose a tab under any of the sections&mdash;**Cards**,**Board**, **Charts**, and **General**&mdash;to configure the cards or boards, the cumulative flow chart, or other team settings.   

	> [!div class="mx-imgBorder"]
	> ![Common configuration dialog team settings](_img/configure-team/common-configuration-dialog.png)

::: moniker-end  

::: moniker range=">= tfs-2015  <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  

# [Previous navigation](#tab/previous-nav)  

0. Make sure that you select the team from the project/team selector. You can switch your team focus to one that you've recently viewed from the project/team selector. If you don't see the team or project you want, choose **Browse&hellip;** or choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to [access the **Projects** page](../../project/navigation/work-across-projects.md).  

	![Choose another team from the project menu](../../_shared/_img/work-web-portal-ts-switch-team-focus.png)

1. Open the board you want to configure and then choose the ![](../../_img/icons/team-settings-gear-icon.png) gear icon to configure the board and set general team settings.  

	For example, from the Kanban board ...  

	::: moniker range=">= tfs-2017"  
	> [!div class="mx-imgBorder"]
	> ![Kanban board, open common configuration settings](_img/configure-team/open-settings-vsts-horz.png)
	::: moniker-end  
	::: moniker range="tfs-2015"  
	![Kanban board, open common configuration settings](_img/configure-team/open-settings-tfs-2015-horz.png)
	::: moniker-end  
2. Choose a tab under **Cards** or **Board** to configure the cards and Kanban board columns and swimlanes.  

	::: moniker range=">= tfs-2017"  
	![Common configuration dialog team settings](_img/configure-team/board-settings-s138.png)
	::: moniker-end  
	::: moniker range="tfs-2015"  
	![Common configuration dialog team settings](_img/configure-team/common-configuration-dialog.png)
	::: moniker-end 

---

For details on each configuration option, see one of these topics:  

> [!div class="mx-tdBreakAll"]  
> |Cards  | Boards  | Charts & widgets |  General  | 
> |-------------|----------|---------|---------|   
> |- [Fields](../../boards/boards/customize-cards.md)<br/>- [Styles](../../boards/boards/customize-cards.md#style-rule)<br/>- [Tag colors](../../boards/boards/customize-cards.md#color-tags)<br/>- [Annotations](../../boards/boards/customize-cards.md#annotations)<br/>- [Tests](../../boards/boards/customize-cards.md#tests) |- [Columns](../../boards/boards/add-columns.md)<br/>- [Swimlanes](../../boards/boards/expedite-work.md)<br/>- [Card reordering](../../boards/boards/reorder-cards.md) |- [Cumulative flow chart & widget](../../report/dashboards/cumulative-flow.md#configure)<br/>- [Lead & Cycle time widgets](../../report/dashboards/cycle-time-and-lead-time.md)<br/> - [Team-scoped widgets](../../report/dashboards/widget-catalog.md) <br/> - [Velocity chart and widget](../../report/dashboards/velocity-chart-data-store.md) |- [Backlogs](select-backlog-navigation-levels.md)<br/>- [Working days](../../boards/boards/expedite-work.md)<br/>- [Working with bugs](show-bugs-on-backlog.md) |



## Team name, description, and picture

Team settings also include the team name, description, and team profile image.  

To add a team picture. Open the Team Profile and choose the picture icon. The maximum file size is 4 MB. 


## Related articles 

To create additional teams, see [Add teams](add-teams.md).  

If team members don't have access to all the features they want, check that they have [the permissions needed for those features](../security/set-permissions-access-work-tracking.md).  

To favorite team artifacts, see [Set personal or team favorites](../../project/navigation/set-favorites.md). 

To define work item templates for a team, see [Use templates to add and update work items](../../boards/backlogs/work-item-template.md).
