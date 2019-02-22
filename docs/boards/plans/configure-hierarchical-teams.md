---
title: Set up or configure hierarchical teams
titleSuffix: Azure Boards
description: Configure teams to support portfolio backlogs to track progress across teams in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
ms.date: 11/19/2018
---

# Configure a hierarchy of teams

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

In [Portfolio management](portfolio-management.md) we showed how management teams and feature teams can use their backlogs to focus on the work that's most important to them. In this article, we show how to configure teams that best supports the different backlog views of management and feature teams. 

Specifically, we'll show you how to configure a team structure like the one shown in the image below.

![Each team has its own view of the work](_img/pm-team-structure.png) 

In this article you'll learn how to:  

::: moniker range=">= tfs-2017" 
>[!div class="checklist"]    
> * Set up a hierarchical set of teams and backlogs
> * Define a single sprint cadence for all teams 
> * Review which area paths are assigned to teams  
::: moniker-end 

::: moniker range=">= tfs-2013 <= tfs-2015" 
>[!div class="checklist"]    
> * Set up a hierarchical set of teams and backlogs
> * Define a single sprint cadence for all teams 
> * Review which area paths are assigned to teams  
::: moniker-end 

## Prerequisites 

- If you don't have a project yet, [create one](../../organizations/projects/create-project.md).  
- If you're not a project administrator, [get added as one](../../organizations/security/set-project-collection-level-permissions.md). Only members of the Project Administrators group or those who have been [granted explicit permissions to edit project information](../../organizations/security/set-project-collection-level-permissions.md) can add teams and configure the project.   


<a id="set_up"></a>
## Add teams 

The first step is to add a team for each feature team and management area. You can also rename teams that you've already added. When you finish, you'll have a set of teams similar to the ones shown.  

> [!div class="mx-imgBorder"]  
> ![Project settings, Teams](_img/config-teams/team-list.png)
 
::: moniker range=">= azure-devops-2019"

0. From the web portal, choose **Project settings** and open **Teams**. 

	> [!div class="mx-imgBorder"]
	> ![Open Code, new nav](../../organizations/settings/_img/add-team/open-project-settings-teams-new-nav.png) 

0. Choose **New team**. Give the team a name, and optionally a description. 

	> [!div class="mx-imgBorder"]
	> ![Create a sub-team with its own area path](../../organizations/settings/_img/add-team/create-new-team-new-nav.png)
	
	Repeat this step for all feature and management teams you want to create. 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

<a id="add-team-team-services" /> 

0. From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear settings icon to open the **Project settings** page for the project.  

	![Open project admin page](../../organizations/settings/_img/add-team/open-admin-context-tfs-2017.png) 

0. Choose **New team**. Give the team a name, and make sure to select **Create an area path with the name of the team**. If you do not select this option, you will have to set the default area path for the team once you create it. You can choose an existing area path or create a new one at that time. Team tools aren't available until the team's default area path is set. 

	![Create a sub-team with its own area path](../../organizations/settings/_img/add-team/create-team-dialog.png)

	Repeat this step for all feature and management teams you want to create. 

::: moniker-end  

::: moniker range="<= tfs-2015"
<a id="add-team-tfs-2015" />

1. From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear settings icon to open **Project Settings.**  

	<img src="../../_shared/_img/settings/open-admin-page-tfs2015.png" alt="Open project admin page" style="border: 2px solid #C3C3C3;" />

2. Create a new team. Give the team a name, and make sure to select **Create an area path with the name of the team**. 

	If you do not select this option, you will have to set the default area path for the team once you create it. You can choose an existing area path or create a new one at that time. Team tools aren't available until the team's default area path is set. 

	![Create a sub-team with its own area path](../../organizations/settings/_img/add-team/scale-agile-co.png)

	Repeat this step for all feature and management teams you want to create.  

::: moniker-end   

## Move area paths into a hierarchical structure

In this next step, you want to move the areas paths associated with feature teams from a flat structure to a hierarchical structure. 

::: moniker range=">= tfs-2017"
| Flat area structure | Hierarchical area structure |
|---------------------|-----------------------------|
|![Flat area paths](_img/config-teams/team-list-flat-structure.png) | ![Hierarchical area paths](_img/config-teams/team-list-hierarchy-structure.png) |

::: moniker-end  

::: moniker range=">= tfs-2013  <= tfs-2015"
| Flat area structure | Hierarchical area structure |
|---------------------|-----------------------------|
|![Flat area structure](_img/pm-flat-area-structure.png)| ![Hierarchical area structure](_img/pm-hierarchical-area-structure.png) |

::: moniker-end  

You do this by opening each area path associated with a feature team and changing its location to be under the management area path. 

::: moniker range=">= azure-devops-2019"

0. Choose (1) **Project Settings**, expand **Work** if needed, and choose (2) **Project configuration** and then (3) **Areas**.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Work>Project Configuration](../../organizations/settings/_img/areas/open-project-work-areas-settings-vert.png)   

0. Next, choose the ![ ](../../_img/icons/actions-icon.png) actions icon for one of the area paths associated with a feature team and select **Edit**. Then change the **Location** to move it under it's corresponding management team area path.  

	For example, here we move the Customer Profile to under Account Management.

	> [!div class="mx-imgBorder"]
	> ![Edit area path dialog](_img/config-teams/edit-area-path.png)

	Repeat this step for all feature team area paths. 
 
::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

0. From the web portal for the project, choose the ![ ](../../_img/icons/gear_icon.png) gear icon.   

	> [!div class="mx-imgBorder"]  
	> ![Open Admin context, project level](../../organizations/settings/_img/areas/modify-areas-its-open-admin-context-ts.png)

	If you're currently working from a team context, then hover over the ![gear icon](../../_img/icons/gear_icon.png) and choose **Project settings**.  

	> [!div class="mx-imgBorder"] 
	> ![Open Project Settings, horz nav](../../_shared/_img/settings/open-project-settings-horz.png)

0. Choose **Work**.  

0. Next, choose the ![ ](../../_img/icons/actions-icon.png) actions icon for one of the area paths associated with a feature team and select **Edit**. Then change the **Location** to move it under it's corresponding management team area path.  

	For example, here we move the Customer Profile to under Account Management.

	> [!div class="mx-imgBorder"]
	> ![Edit area path dialog](_img/config-teams/edit-area-path.png)

	Repeat this step for all feature team area paths. 

::: moniker-end   

::: moniker range="<= tfs-2015"  

0. From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear icon to open project administration pages. Then choose **Areas**. 

	![Open the project administration page](../../_shared/_img/settings/open-project-settings-tfs-2015.png)

0. Next, choose the ![ ](../_img/icons/context_menu.png) context icon for one of the area paths associated with a feature team and select **Edit**. Then change the Location to move it under it's corresponding management team area path.  

	For example, here we move the Customer Profile to under Account Management.

	<img src="_img/pm-open-and-edit-area-path.png" alt="Team admin context, Open and edit area paths for feature teams" style="border: 1px solid #C3C3C3;" />  

	Repeat this step for all feature team area paths. 

::: moniker-end

## Include sub-area paths for management teams

By including sub-area paths for the management teams, you automatically include the backlog items of their feature teams onto the management team's backlog. The default setting for all teams is to exclude sub-area paths. 

::: moniker range=">= azure-devops-2019"
You define both areas and iterations from **Project Settings>Boards>Team configuration**. You can quickly navigate to it from **Teams**. 

0.  From **Project Settings**, choose **Teams**, and then choose the team whose settings you want to modify. 

	Here we open the Account Management team. 

	> [!div class="mx-imgBorder"]  
	> ![Teams, choose a team](_img/config-teams/choose-management-team.png)   

0. Choose **Iterations and areas** and then **Areas**. 

	> [!div class="mx-imgBorder"]  
	> ![Team Profile, choose Iterations and area](_img/config-teams/open-iterations-areas.png)   

	If you need to switch the team context, use the team selector within the breadcrumbs.

0. Choose **Select area(s)**, and select the area path for **Account Management** and check the **Include sub areas** checkbox. 

	> [!div class="mx-imgBorder"]  
	> ![Select areas for Account Management team](_img/config-teams/include-sub-area-paths.png)   

	Verify that only this area path is selected for the team and is the default area path. Remove any other area paths that may have been previously selected.  

	> [!div class="mx-imgBorder"]  
	> ![Verify area paths for Account Management team](_img/config-teams/verify-area-path-assignments.png)   

	Repeat this step for all your management areas. Also, if you want to enable rollup across all feature teams and management areas to the top level area, repeat this step for the default team. In our example, that corresponds to Fabrikam Fiber.   

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"   

0.  You open team settings from the top navigation bar. Select the team you want and then choose the ![ ](../../_img/icons/gear_icon.png) gear icon. To learn more about switching your team focus, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md#switch-team-context)

	> [!div class="mx-imgBorder"]  
	> ![Open team settings](../../organizations/settings/_img/team-defaults/open-team-settings-horz.png) 

0. Choose **Work**, and then **Areas**. 

0. Choose **Select area(s)**, and select the area path for **Account Management** and check the **Include sub areas** checkbox. 

	> [!div class="mx-imgBorder"]  
	> ![Select areas for Account Management team](_img/config-teams/include-sub-area-paths.png)   

	Verify that only this area path is selected for the team and is the default area path. Remove any other area paths that may have been previously selected.  

	> [!div class="mx-imgBorder"]  
	> ![Verify area paths for Account Management team](_img/config-teams/verify-area-path-assignments.png)   

	Repeat this step for all your management areas. Also, if you want to enable rollup across all feature teams and management areas to the top level area, repeat this step for the default team. In our example, that corresponds to Fabrikam Fiber.   
 
::: moniker-end

::: moniker range="<= tfs-2015"  

From **Areas**, open the ![ ](../_img/icons/context_menu.png) context menu and select **Include sub-areas**.  

Here we choose to include sub-area paths for the Account Management area.  

<img src="_img/pm-include-sub-area-paths.png" alt="Team admin context, Open and edit area paths for feature teams" style="border: 1px solid #C3C3C3;" /> 

Repeat this step for all your management areas. Also, if you want to enable rollup across all feature teams and management areas to the top level area, repeat this step for the default team. In our example, that corresponds to Fabrikam.   

::: moniker-end


## Define a single sprint cadence for all teams 

If your feature teams use Scrum or use sprints to assign their work, you'll want to set up a series of sprints that all teams can use. By default, you'll see a set of predefined sprints. Add more sprints and set their sprint dates from **Project Settings** as described in [Add iterations and set iteration dates](../../organizations/settings/set-iteration-paths-sprints.md). You can rename and edit the default sprints as needed.

> [!NOTE]  
> While maintaining a single sprint cadence simplifies project administration, you can create different cadences as needed. For example, some teams may follow a monthly cadence while others follow a 3-week cadence. Simply define a node under the top project node for each cadence, and then define the sprints under those nodes. For example: 
> - Fabrikam Fiber/CY2019
> - Fabrikam Fiber/3Week Sprints
> 
Here we define the start and end dates of the first 6 sprints corresponding to a 3-week cadence. 

::: moniker range=">= tfs-2017"  
> [!div class="mx-imgBorder"]  
> ![Iteration path](../../organizations/settings/_img/areas/modify-areas-its-iterations-scheduled-ts.png)   
::: moniker-end

::: moniker range="<= tfs-2015"  

<img src="_img/pm-6-3-week-sprints.png" alt="Sprint schedule selected sprints" style="border: 2px solid #C3C3C3;" />
::: moniker-end


## Configure additional team settings 

For all teams to be well defined, you'll want to add team administrator(s) and have them verify or configure additional team settings. These include: 

- [Add team members](../../organizations/settings/add-teams.md#add-team-members)
- [Define iteration paths (aka sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Select backlog levels](../../organizations/settings/select-backlog-navigation-levels.md) 
- [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md) 
- [Configure Kanban boards](../../organizations/settings/manage-teams.md#configure-kanban-boards)  

For additional details, see [Manage and configure team tools](../../organizations/settings/manage-teams.md) 


## Review area paths assigned to teams 

::: moniker range=">= azure-devops-2019"  

From **Project Settings>Project configuration>Areas**, you can review which **Area Paths** have been assigned to which teams. To modify the assignments, choose the team and change the team's area path assignments. 

> [!div class="mx-imgBorder"]  
> ![Area Paths and Teams](_img/config-teams/review-area-paths-teams.png)   
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"  
From **Project Settings>Work>Areas**, you can review which **Area Paths** have been assigned to which teams. To modify the assignments, choose the team and change the team's area path assignments. 
 
> [!div class="mx-imgBorder"]  
> ![Area Paths and Teams](_img/config-teams/review-area-paths-teams.png)   
::: moniker-end

::: moniker range="<= tfs-2015" 
This feature isn't supported for TFS 2015 and earlier versions.
::: moniker-end 

## Related articles

With the hierarchical set of teams in place, you're well positioned to start planning and using the Agile tools available. To take the next steps in planning your portfolio of projects, see these articles: 

- [Create your backlog](../backlogs/create-your-backlog.md)  
- [Kanban quickstart](../boards/kanban-quickstart.md)
- [Organize your backlog](../backlogs/organize-backlog.md)
- [Work with multi-team ownership of backlog items](../backlogs/backlogs-overview.md#multi-team)
- [Limitations of multi-team Kanban board views](../boards/kanban-overview.md#limits-multi-team)