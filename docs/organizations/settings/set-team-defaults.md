---
title: Set team defaults 
titleSuffix: VSTS & TFS
description: Configure the default area and iteration paths or sprints for a team in Visual Studio Team Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 3CEBA118-34EB-4277-B810-418FEC56C860  
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 06/19/2018
---


# Set team defaults  

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]
 
Each team has access to a number of Agile tools as described in [About teams and Agile tools](about-teams-and-settings.md). Each tool references the team's default area path(s). Several tools reference the team's default and active iteration paths or sprints. Most teams choose one area path and several iteration paths to support their work tracking activities. However, to support other scenarios, it's possible for teams to choose several area paths to appear on their backlogs and boards. 

Prior to setting team defaults, [add the teams](../../work/scale/multiple-teams.md) you want and [schedule your shared sprint schedule](../../work/scrum/define-sprints.md). Optionally, [add area paths](set-area-paths.md) you want to use to group work items. 

<a id="default_path">  </a>
## Backlog iteration versus default iteration 

::: moniker range=">= tfs-2017"
Teams can set a default iteration different from the backlog iteration. The backlog iteration determines which items appear on the team's backlogs and boards. And, the default iteration determines what value is assigned to work items created from the team context. 

All work items that you create from your team context are automatically assigned both the team's default area path and default iteration path. 
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
For TFS 2015 and earlier versions, the default iteration is the same as the backlog iteration. The one value selected both filters items that appear on the team's backlogs and boards, and is assigned to work items created from the team context.  
::: moniker-end

You navigate to your team context from the top navigation bar.  

<img src="../../work/_shared/_img/switch-team-project-2.png" alt="Choose another team from the team project menu" style="border: 1px solid #C3C3C3;" />  


## Open the admin context for your team  

You set team defaults from the team admin context. If you're not a team administrator, [get added as one](../../work/scale/add-team-administrator.md). Only team or project administrators can change team settings. 

From a web browser, open the web portal administrative context for your team.  

<!---
# [New navigation](#tab/new-nav)

::: moniker range="vsts"  
You define both areas and iterations from the **Work>Team configuration** hub of the project **Settings** hub. 

0. To open **Settings**, choose the ![](../../_img/icons/settings-icon-vert.png) Settings icon (located toward the bottom of the left-pane).  

0. Under **Work**, choose **Team configuration**. 

	> [!div class="mx-imgBorder"]  
	> ![Settings hub, Open Work>Team Configuration](_img/team-defaults/open-work-team-configuration.png)   

0. If you need to switch the team context, use the team selector within the breadcrumbs.
   
	> [!div class="mx-imgBorder"]  
	> ![PLACEHOLDER---Settings hub, Open Work>Team Configuration, Team breadcrumb](_img/team-defaults/select-team-context.png) 


::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"  
Vertical navigation isn't a supported feature for TFS at this time. 
::: moniker-end

# [Previous navigation](#tab/previous-nav)

-->

::: moniker range=">= tfs-2013 <= tfs-2015" 
<img src="../../work/scale/_img/wit-templates-open-team-admin-context.png" alt="Open team admin context" style="border: 1px solid #C3C3C3;" />  
::: moniker-end



<a id="team-area-paths">  </a>
## Set team default area path(s) 

All work items assigned to the area paths selected for a team appear on the backlogs and boards for that team. 

- From VSTS, you can select one or more area paths and optionally include their sub-area paths.  
- From TFS, you can select a single area path, and optionally include their sub-area paths.  

The default area path determines the default area path assigned to work items that are created from the team context.  

Choose to include sub-area paths when you want to support rollup views of work performed across several teams or areas.  

> [!IMPORTANT]  
> Work items that appear on more then one team's Kanban board can yield query results that don't meet your expectations. Because each team can customize the Kanban board [columns](../../work/kanban/add-columns.md) and [swimlanes](../../work/kanban/expedite-work.md), the values assigned to work items which appear on different boards may not be the same. The primary work around for this issue is to maintain single ownership of work items by team area path.   

::: moniker range=">= tfs-2017"

1.	Open the Work, Areas admin page for the team context.  

	Here, we navigate to the Fabrikam Fiber Team, the default team for the team project.  

	<img src="../../work/scale/_img/stdefaults-open-team-work-area-page.png" alt="Work, Area page for team, VSTS platform" style="border: 1px solid #C3C3C3;" />  

<a id="default-iteration">  </a>
2. Choose the area path(s) to be active for each team. In general, feature teams set a single area path as their default.   

	<img src="../../work/scale/_img/stdefaults-add-area-paths.png" alt="Work, Iterations page for team, VSTS platform" style="border: 1px solid #C3C3C3;" />  

	In this instance, we choose to activate all three sub-area paths for the team project. This allows the management team to track progress across all three teams.  

	<img src="../../work/scale/_img/stdefaults-set-team-area-paths-management-team-team-services-list.png" alt="Multiple area paths assigned to team, VSTS platform" style="border: 1px solid #C3C3C3;" />  

3.	When you've finished, refresh the product backlog page for the team, and you'll see those work items assigned to the team. Add Area Path to the columns shown to see the assignments made to work items.  

	<img src="../../work/scale/_img/stdefaults-backlog-management-team-team-services-list.png" alt="Product backlog of team with multiple area paths assigned, VSTS platform" style="border: 1px solid #C3C3C3;" />  

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015" 

1. Open the Areas admin page for the team context.  

	Here, we navigate to the Web team. The checked box indicates the area paths selected for the team. To exclude sub-areas, select the option from the area path context menu.  

	<img src="../../work/scale/_img/stdefaults-open-team-area-page-tfs.png" alt="Work, Area page forWeb  team, VSTS platform" style="border: 1px solid #C3C3C3;" />  

2.	Refresh the product backlog page for the team, and you'll see only those work items assigned to the Fabrikam Fiber\Web area path.   

	<img src="../../work/scale/_img/stdefaults-backlog-web-team-list.png" alt="Backlog for Web  team" style="border: 1px solid #C3C3C3;" />  

::: moniker-end

<a id="activate">  </a>
## Select team sprints and default iteration path  

You [define sprints for the team project](../../work/scrum/define-sprints.md) and then activate them for each team. You assign the default iteration to use when creating new work items. 

You activate sprints for each team from the admin pages for each team context. The steps differ slightly depending on your platform.

<a id="activate-team-services">  </a>
::: moniker range=">= tfs-2017"

1.	Open the Work, Iterations page for the team context.  

	Here, we navigate to the Fabrikam Fiber Team.  

	<img src="../../work/scrum/_img/dsprints-team-work-iterations-page.png" alt="Work, Iterations page for team, VSTS platform" style="border: 1px solid #C3C3C3;" />  
<a id="set-backlog-iteration">  </a>
2. **Backlog iteration**. Only work items assigned to an iteration equal to or under this backlog iteration appear in the team's backlogs and boards. 

	<img src="../../work/scale/_img/stdefaults-team-backlog-iteration.png" alt="Work, Iterations page for team, set team backlog iteration for backlogs and boards" style="border: 1px solid #C3C3C3;" />  

	Also, all work items added through a team's backlog or board are assigned the backlog iteration. 

3. **Default iteration**. The default iteration defines the iteration used when a work item is created from the team dashboard (new work item widget) and queries page. You can use an explicit value or use @CurrentIteration to assign new work items to the team's current iteration. This is the same macro used in [queries to list work items assigned to the currently active iteration assigned to the team](../../work/track/query-by-date-or-current-iteration.md#current-iteration).  

	For example, you might want all new work items to be added to a future iteration path which you use to triage and assign to specific sprints at periodic intervals.  

	<img src="../../work/scale/_img/stdefaults-team-default-iteration.png" alt="Work, Iterations page for team, set team default for new work items" style="border: 1px solid #C3C3C3;" />  

4. **Active sprints**. Add an iteration for each sprint backlog you want active for the team. Add each sprint, one by one, by selecting it from the menu.  

 	<img src="../../work/scrum/_img/dsprints-add-sprints-to-team-iterations-page.png" alt="Work, Iterations page for team, select sprint to activate, VSTS platform" style="border: 1px solid #C3C3C3;" /> 

	When you're done, you should see a list of sprints, similar to the following.  

	<img src="../../work/scrum/_img/dsprints-selected-active-sprints.png" alt="Work, Iterations page for team, activates sprint list, VSTS platform" style="border: 1px solid #C3C3C3;" />  

	If you don't see the sprints you need, or the dates aren't set, then [return to the team project admin context and define them there](set-iteration-paths-sprints.md#define-sprints-team-services).  

3.	To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../work/backlogs/create-your-backlog.md).  

::: moniker-end

<a id="activate-sprints-tfs">  </a>


::: moniker range=">= tfs-2013 <= tfs-2015" 

1.	Open the Iterations page for the team context.  

	Here we open the Iterations page for the Web team.  

	<img src="../../work/scale/_img/stdefaults-open-team-admin-iteration-tfs.png" alt="Open team admin iterations page" style="border: 1px solid #C3C3C3;" />  

	If your team isn't listed in the navigation row, open the Overview tab, select your team, and then return to the Iterations tab.  

2.	**Default iteration**. Only work items assigned to an iteration equal to or under the default iteration appear in the team's backlogs and boards. Also, the default iteration defines the iteration used when a work item is created from the team dashboard (new work item widget) and queries page. 
	
	Open the context menu for the iteration path you want.

	Here we set the P1 1 path.  Only child iterations of the backlog iteration can be active for a team. 

	<img src="../../work/scale/_img/stdefaults-set-default-iteration-tfs.png" alt="Set team default iteration path" style="border: 1px solid #C3C3C3;" />  

	This path determines which work items appear in your team backlogs and boards, and [the default assigned to](#default_path) work items created from any area under your team's context.  

3.	**Active sprints**. Check each box under the default iteration that you want active for the team.  

	Here, the Fabrikam Fiber Web team activates Sprints 1 through 7. 

	<img src="../../work/scale/_img/stdefaults-team-active-sprints-tfs.png" alt="Select team active sprints" style="border: 1px solid #C3C3C3;" />  

	Check boxes only appear for sprints defined under the default iteration path.  

4.	To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../work/backlogs/create-your-backlog.md).  

::: moniker-end

## Related articles  

- [Schedule sprints](../../work/scrum/define-sprints.md)  
- [Customize area and iteration paths](../../organizations/settings/set-area-paths.md)  
- [Query by date or current iteration](../../work/track/query-by-date-or-current-iteration.md)
- [Multiple teams](../../work/scale/multiple-teams.md)  
- [Configure team settings](../../work/scale/manage-team-assets.md)  
- [Portfolio management](../../work/scale/portfolio-management.md)  


