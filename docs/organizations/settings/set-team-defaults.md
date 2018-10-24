---
title: Set team defaults 
titleSuffix: Azure DevOps & TFS
description: Configure the default area and iteration paths or sprints for a team in Azure DevOps Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 3CEBA118-34EB-4277-B810-418FEC56C860  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 07/27/2018
---


# Set team defaults  

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]
 
Each team has access to a number of Agile tools as described in [About teams and Agile tools](about-teams-and-settings.md). Each tool references the team's default area path(s). Several tools reference the team's default and active iteration paths or sprints. Most teams choose one area path and several iteration paths to support their work tracking activities. However, to support other scenarios, it's possible for teams to choose several area paths to appear on their backlogs and boards. 

Prior to setting team defaults, [add the teams](../../organizations/settings/add-teams.md) you want and [schedule your shared sprint schedule](../../boards/sprints/define-sprints.md). Optionally, [add area paths](set-area-paths.md) you want to use to group work items. 

<a id="default_path">  </a>
## Backlog iteration versus default iteration 

::: moniker range=">= tfs-2017"
Teams can set a default iteration different from the backlog iteration. The backlog iteration determines which items appear on the team's backlogs and boards. And, the default iteration determines what value is assigned to work items created from the team context. 

All work items that you create from your team context are automatically assigned both the team's default area path and default iteration path. 
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
For TFS 2015 and earlier versions, the default iteration is the same as the backlog iteration. The one value selected both filters items that appear on the team's backlogs and boards, and is assigned to work items created from the team context.  
::: moniker-end


## Open team settings  

You set team defaults from team settings. If you're not a team administrator, [get added as one](add-team-administrator.md). Only team or project administrators can change team settings. 

From a web browser, open the web portal administrative context for your team.  

[!INCLUDE [temp](../../_shared/new-navigation.md)]  


# [New navigation](#tab/new-nav)

::: moniker range="vsts"  
You define both areas and iterations from **Project Settings>Boards>Team configuration**. You can quickly navigate to it from a team work tracking backlog, board, or dashboard. 

0.  Open a backlog or board for a team and choose the ![ ](../../_img/icons/team.png) team profile icon. Then choose **Team Settings**. 

	Here we open the Board for the Web team and from there the team profile. 

	> [!div class="mx-imgBorder"]  
	> ![Work Backlog or Board, choose team profile icon](_img/team-defaults/open-team-profile-choose-team-settings.png)   

0. Choose **Iterations and areas**. 

	> [!div class="mx-imgBorder"]  
	> ![Team Profile, choose Iterations and area](_img/team-defaults/team-profile-choose-iterations-areas.png)   

0. If you need to switch the team context, use the team selector within the breadcrumbs.
   
	> [!div class="mx-imgBorder"]  
	> ![Team Configuration, Team breadcrumb](_img/team-defaults/select-team-context.png) 


::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]   
::: moniker-end

# [Previous navigation](#tab/previous-nav)

You open team settings from the top navigation bar. Select the team you want and then choose the ![ ](../../_img/icons/gear_icon.png) gear icon. To learn more about switching your team focus, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md#switch-team-context)

> [!div class="mx-imgBorder"]  
> ![Open team settings](_img/team-defaults/open-team-settings-horz.png) 


---
<a id="default-iteration">  </a>
<a id="team-area-paths">  </a>
## Set team default area path(s) 

::: moniker range=">= tfs-2017"  
All work items assigned to the area paths selected for a team appear on the backlogs and boards for that team. You can select one or more area paths and optionally include their sub-area paths.  Choose to include sub-area paths when you want to support rollup views of work performed across several teams or areas. 
::: moniker-end  
::: moniker range=">= tfs-2013 <= tfs-2015"  
All work items assigned to the area paths selected for a team appear on the backlogs and boards for that team. You can select a single area path, and optionally include their sub-area paths. Choose to include sub-area paths when you want to support rollup views of work performed across several teams or areas. 
::: moniker-end  

The default area path determines the default area path assigned to work items that are created from the team context.  

> [!IMPORTANT]  
> Work items that appear on more then one team's Kanban board can yield query results that don't meet your expectations. Because each team can customize the Kanban board [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md), the values assigned to work items which appear on different boards may not be the same. The primary work around for this issue is to maintain single ownership of work items by team area path.   

::: moniker range=">= tfs-2017"  

0.	Open the **Work>Areas** admin page for the team context.  

	Here, we navigate to the Web team.  

	> [!div class="mx-imgBorder"]
	> ![Work, Area page for team](_img/team-defaults/open-areas-web-team.png)

2. Choose the area path(s) to be active for each team.  

	> [!div class="mx-imgBorder"]
	> ![Work, Iterations page for team](_img/team-defaults/stdefaults-add-area-paths.png)  

	In this instance, we choose to activate all three sub-area paths for the project. This allows the management team to track progress across all three teams.  

	![Multiple area paths assigned to team](_img/team-defaults/stdefaults-set-team-area-paths-management-team-team-services-list.png)  

0.	When you've finished, refresh the product backlog page for the team, and you'll see those work items assigned to the team. Add Area Path to the columns shown to see the assignments made to work items.  

	> [!div class="mx-imgBorder"]  
	> ![Backlog view of default team](_img/add-team/product-backlog-default-team-horz.png)  

::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015"  
0. Open the Areas admin page for the team context.  

	Here, we navigate to the Web team. The checked box indicates the area paths selected for the team. To exclude sub-areas, select the option from the area path context menu.  

	![Work, Area page forWeb  team](_img/team-defaults/stdefaults-open-team-area-page-tfs.png)  

0.	Refresh the product backlog page for the team, and you'll see only those work items assigned to the Fabrikam Fiber\Web area path.   

	![Backlog for Web  team](_img/team-defaults/stdefaults-backlog-web-team-list.png)  

::: moniker-end  

<a id="activate">  </a>
## Select team sprints and default iteration path  

You [define sprints for the project](../../boards/sprints/define-sprints.md) and then select them to be active for each team. You assign the default iteration to use when creating new work items. 

<a id="activate-team-services">  </a>

# [New navigation](#tab/new-nav)

::: moniker range="vsts"  

0.	Open **Project settings>Work>Team Configuration>Iterations** for a team.  

	Here, we navigate to the Fabrikam Fiber Team.  

	> [!div class="mx-imgBorder"]
	> ![Project settings>Work>Team Configuration>Iterations page](_img/team-defaults/open-team-settings-iterations-vert.png)  

0. **Backlog iteration**. Only work items assigned to an iteration equal to or under this backlog iteration appear in the team's backlogs and boards. 

	![Work, Iterations page for team, set team backlog iteration for backlogs and boards](_img/team-defaults/stdefaults-team-backlog-iteration.png)

	Also, all work items added through a team's backlog or board are assigned the backlog iteration. 

0. **Default iteration**. The default iteration defines the iteration used when a work item is created from the team dashboard (new work item widget) and queries page. You can use an explicit value or use **@CurrentIteration** to assign new work items to the team's current iteration. This is the same macro used in [queries to list work items assigned to the currently active iteration assigned to the team](../../boards/queries/query-by-date-or-current-iteration.md#current-iteration).  

	For example, you might want all new work items to be added to a future iteration path which you use to triage and assign to specific sprints at periodic intervals.  

	![Work, Iterations page for team, set team default for new work items](_img/team-defaults/stdefaults-team-default-iteration-vert.png)

0. **Active sprints**. Add an iteration for each sprint backlog you want active for the team. Add each sprint, one by one, by selecting it from the menu.  

	> [!div class="mx-imgBorder"]
	> ![Work, Iterations page for team, select sprints](_img/team-defaults/select-iterations.png)

	When you're done, you should see a list of sprints, similar to the following.  

	> [!div class="mx-imgBorder"]
	> ![Work, Iterations page for team, activates sprint list](_img/team-defaults/selected-iterations.png) 

	If you don't see the sprints you need, or the dates aren't set, you can add or edit iterations for the project, provided you have the required permissions. To learn more, see [Define iteration paths (aka sprints)](set-iteration-paths-sprints.md).   

3.	To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../boards/backlogs/create-your-backlog.md).  

::: moniker-end  

::: moniker range=">= tfs-2015  <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  


# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017"

1.	Open **Work>Iterations** for a team.  

	Here, we navigate to the Fabrikam Fiber Team.  

	![Work, Iterations page for team](../../boards/sprints/_img/dsprints-team-work-iterations-page.png)  

<a id="set-backlog-iteration">  </a>
2. **Backlog iteration**. Only work items assigned to an iteration equal to or under this backlog iteration appear in the team's backlogs and boards. 

	![Work, Iterations page for team, set team backlog iteration for backlogs and boards](_img/team-defaults/stdefaults-team-backlog-iteration.png)

	Also, all work items added through a team's backlog or board are assigned the backlog iteration. 

3. **Default iteration**. The default iteration defines the iteration used when a work item is created from the team dashboard (new work item widget) and queries page. You can use an explicit value or use **@CurrentIteration** to assign new work items to the team's current iteration. This is the same macro used in [queries to list work items assigned to the currently active iteration assigned to the team](../../boards/queries/query-by-date-or-current-iteration.md#current-iteration).  

	For example, you might want all new work items to be added to a future iteration path which you use to triage and assign to specific sprints at periodic intervals.  

	![Work, Iterations page for team, set team default for new work items](_img/team-defaults/stdefaults-team-default-iteration.png)

4. **Active sprints**. Add an iteration for each sprint backlog you want active for the team. Add each sprint, one by one, by selecting it from the menu.  

 	![Work, Iterations page for team, select sprint to activate](../../boards/sprints/_img/dsprints-add-sprints-to-team-iterations-page.png)

	When you're done, you should see a list of sprints, similar to the following.  

	![Work, Iterations page for team, activates sprint list](../../boards/sprints/_img/dsprints-selected-active-sprints.png) 

	If you don't see the sprints you need, or the dates aren't set, then [return to the project admin context and define them there](set-iteration-paths-sprints.md#define-sprints-team-services).  

3.	To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../boards/backlogs/create-your-backlog.md).  

::: moniker-end

<a id="activate-sprints-tfs">  </a>

::: moniker range=">= tfs-2013 <= tfs-2015" 

1.	Open the Iterations page for the team context.  

	Here we open the Iterations page for the Web team.  

	![Open team admin iterations page](_img/team-defaults/stdefaults-open-team-admin-iteration-tfs.png)  

	If your team isn't listed in the navigation row, open the Overview tab, select your team, and then return to the Iterations tab.  

2.	**Default iteration**. Only work items assigned to an iteration equal to or under the default iteration appear in the team's backlogs and boards. Also, the default iteration defines the iteration used when a work item is created from the team dashboard (new work item widget) and queries page. 
	
	Open the context menu for the iteration path you want.

	Here we set the P1 1 path.  Only child iterations of the backlog iteration can be active for a team. 

	![Set team default iteration path](_img/team-defaults/stdefaults-set-default-iteration-tfs.png)  

	This path determines which work items appear in your team backlogs and boards, and [the default assigned to](#default_path) work items created from any area under your team's context.  

3.	**Active sprints**. Check each box under the default iteration that you want active for the team.  

	Here, the Fabrikam Fiber Web team activates Sprints 1 through 7. 

	![Select team active sprints](_img/team-defaults/stdefaults-team-active-sprints-tfs.png)   

	Check boxes only appear for sprints defined under the default iteration path.  

4.	To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../boards/backlogs/create-your-backlog.md).  

::: moniker-end

---

## Related articles  

- [Schedule sprints](../../boards/sprints/define-sprints.md)  
- [Set area paths](set-area-paths.md)  
- [Query by date or current iteration](../../boards/queries/query-by-date-or-current-iteration.md)
- [Add teams](add-teams.md)  
- [Manage teams and configure team tools](manage-teams.md)  
- [Portfolio management](../../boards/plans/portfolio-management.md)  


