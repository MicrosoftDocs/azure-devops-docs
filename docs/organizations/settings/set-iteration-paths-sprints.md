---
title: Define iteration paths or sprints for a project or team 
titleSuffix: Azure Boards 
description: Define the iterations or sprints to use when assigning work items in Azure DevOps
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 27631A15-9EB1-4E79-814E-8145BB7707C8
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 04/15/2019
---

# Define Iteration Paths (aka sprints) and configure team iterations 

[!INCLUDE [temp](../../boards/_shared/version-vsts-tfs-all-versions.md)]


You add Iteration Paths to support teams who implement Scrum or use sprint planning to group work items based on a time-box interval or sprint. You define Iteration Paths at the project level and then each team selects the ones they want to be active for them under the team configuration. You can create a flat iteration path structure or a hierarchy of paths to support releases, sub-releases, and sprints. 

Each team has access to a number of Agile tools as described in [About teams and Agile tools](about-teams-and-settings.md). Each tool references the team's default area path(s). Several tools reference the team's default and selected Iteration Paths or sprints. Most teams choose one Area Path and several Iteration Paths to support their work tracking activities. However, to support other scenarios, it's possible for teams to choose several Area Paths to appear on their backlogs and boards. 

Newly created projects contain a single, root Area Path that corresponds to the project name. You add Area Paths under this root. Also, each project typically specifies a predefined set of Iteration Paths to help you get started tracking your work. All you need to do is specify the dates. 

[!INCLUDE [temp](../../_shared/version-selector.md)]


## Prerequisites

<a name="permissions"></a>

- You add Iteration Paths to a project. If you don't have a project yet, [create one now](../projects/create-project.md).
- To add an Iteration Path under the root node or edit or delete any child node, you must be a member of the **Project Administrators** group. To acquire these permissions, see [Set permissions at the project- or collection-level](../security/set-project-collection-level-permissions.md).  
- Or, to add, edit, and manage Iteration Paths under a node, you must have one or more of the following permissions set to **Allow** for the node you want to manage: **Create child nodes**, **Delete this node**, and **Edit this node**, and **View permissions for this node**.  By default, the user who created the project has these permissions set. To learn more, see [Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md#set-permissions-area-path).  
- To set team Iteration Paths, you must be [added as the team administrator](add-team-administrator.md) or be a member of the **Project Administrators** group.  


For naming restrictions on Iteration Paths, see [About areas and iterations, Naming restrictions](about-areas-iterations.md#name-restrictions).

## Get started sequence

If you are new to managing projects and teams, the most straight forward sequence for configuring iterations for your project and teams is as follows:  

1. First, define the Area Paths and teams following the guidance provided in [Define area paths and assign to a team](set-area-paths.md#guidance).  
2. Determine the length of the iteration you want to support. Recommended practice is to have all teams use the same sprint cadence. For guidance, review [About areas and iterations](about-areas-iterations.md).
3. Determine if you want a flat structure or hierarchy of sprints and releases.
4. Open **Project settings>Project configuration** and define the Iteration Paths to support steps 2 and 3 at the project level. Follow the steps provided later in this article: [Open Project Settings, Project configuration](#open-project-settings) and [Add iterations and set iteration dates](#iterations). 
5. Open the team configuration and assign the default and additional Area Path(s) to each team. Follow the steps provided later in this article: [Open team settings](#open-team-settings) and [Set team default iteration path(s)](#activate).
6. Each team should assign the default Iteration Path they selected to their work items. This is needed in order for those work items to show up on their product backlogs and boards. Use [bulk modify](../../boards/backlogs/bulk-modify-work-items.md) to modify several work items at once. See also [Assign backlog items to a sprint](../../boards/sprints/assign-work-sprint.md). 
As needed, you can perform the following actions at any time: 

- Add additional child iteration nodes
- Rename an Iteration Path (except the root path)
- Move a child Iteration Path under another node 
- Delete a child Iteration Path 
- Change the default and selected Iteration Paths assigned to a team

<a id="default_path">  </a>

## Backlog iteration versus default iteration 

::: moniker range=">= tfs-2017"
Teams can set a default iteration different from the backlog iteration. The backlog iteration determines which items appear on the team's backlogs and boards. And, the default iteration determines what value is assigned to work items created from the team context. 

All work items that you create from your team context are automatically assigned both the team's default area path and default iteration path. 
::: moniker-end

::: moniker range="<= tfs-2015"
For TFS 2015 and earlier versions, the default iteration is the same as the backlog iteration. The one value selected both filters items that appear on the team's backlogs and boards, and is assigned to work items created from the team context.  
::: moniker-end


<a id="open-project-settings" />
<a id="open-admin-context" />  

## Open Project Settings, list project iterations    


#### [Browser](#tab/browser)

From the web portal, open **Project Settings**.

::: moniker range=">= azure-devops-2019"

You define both areas and iterations for a project from the **Project Settings>Work>Project configuration**. 

1. Choose (1) **Project Settings**, expand **Boards** if needed, and choose (2) **Project configuration** and then (3) **Iterations**.   

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Work>Project Configuration](_img/iterations/open-work-project-config-iterations-vert.png)   

::: moniker-end


::: moniker range="<= tfs-2018"

You define both areas and iterations from the **Work** pages of the project admin context. From the user context, you open the admin context by choosing the ![ ](../../_img/icons/gear-icon.png) gear icon. 
::: moniker-end

<a id="admin-intro-team-services" /> 

::: moniker range=">= tfs-2017 <= tfs-2018"

1. From the web portal, open **Project settings**. 

1. From the web portal for the project context, choose the ![ ](../../_img/icons/gear-icon.png) gear icon..  

	> [!div class="mx-imgBorder"]  
	> ![Open Admin context, project level](_img/areas/modify-areas-its-open-admin-context-ts.png)  
	
	If you're currently working from a team context, then hover over the ![gear icon](../../_img/icons/gear_icon.png) and choose **Project settings**.  

	> [!div class="mx-imgBorder"]
	> ![Open Project Settings, horz nav](../../_shared/_img/settings/open-project-settings-horz.png)  

2. Choose **Work**.   

::: moniker-end 


#### [Azure DevOps CLI](#tab/azure-devops-cli/)

<a id="iteration-project-list" />

::: moniker range="azure-devops"  

You can list the iterations defined for a project using [az boards iteration project list](/cli/azure/ext/azure-devops/boards/iteration/project#ext-azure-devops-az-boards-iteration-project-list). To get started, see [Get started with Azure DevOps CLI](../../cli/get-started.md).  

```
az boards iteration project list [--depth]
                                 [--path]
                                 [--project]
```

- **depth**: Depth of child nodes to be listed. Example: --depth 3.
- **path**: Absolute path of an iteration. Example: \ProjectName\Iteration\IterationName. When not specified, lists iteration paths from the root level. 
- **project**: Name or ID of the project. Example: --project "Fabrikam Fiber".  

For example, the following command lists the area paths to a depth of 3 for the Fabrikam Fiber project. For other output format options, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli)

```
az boards iteration project list --depth 3 --project "Fabrikam Fiber" --output table
ID     Identifier                            Name            Path                                           Has Children    Start Date            Finish Date
-----  ------------------------------------  --------------  ---------------------------------------------  --------------  --------------------  --------------------
55290  d77820e9-6bda-4deb-8052-cc519bc12ecc  Fabrikam Fiber  \Fabrikam Fiber\Iteration                      True
55292  5938b25d-7235-499e-815f-4fc19d95d24c  Release 1       \Fabrikam Fiber\Iteration\Release 1            True
55297  c7063041-ff3a-4d7f-bb46-c433c7030d59  Sprint 1        \Fabrikam Fiber\Iteration\Release 1\Sprint 1   False           2019-01-01T00:00:00Z  2019-01-18T00:00:00Z
55298  dd10f1bf-bedd-4c6f-926f-b2abea81bb50  Sprint 2        \Fabrikam Fiber\Iteration\Release 1\Sprint 2   False           2019-01-21T00:00:00Z  2019-02-08T00:00:00Z
55340  862e961a-ac7a-4fcc-9ebc-8afd0c12fed5  Sprint 3        \Fabrikam Fiber\Iteration\Release 1\Sprint 3   False           2019-03-11T00:00:00Z  2019-03-29T00:00:00Z
55341  8548898e-4dfd-4515-9d6e-d476d90033a3  Sprint 4        \Fabrikam Fiber\Iteration\Release 1\Sprint 4   False
55342  d130534c-05dc-434b-a7f3-85689d11c36f  Sprint 5        \Fabrikam Fiber\Iteration\Release 1\Sprint 5   False
55343  738f5c0b-c62b-4ba5-96ab-026e606b0cef  Sprint 6        \Fabrikam Fiber\Iteration\Release 1\Sprint 6   False           2018-07-16T00:00:00Z  2018-08-03T00:00:00Z
55352  62ec9886-f537-4eaf-b3b9-2e785239174b  Sprint 7        \Fabrikam Fiber\Iteration\Release 1\Sprint 7   False
55353  607b3754-699a-4eca-ab61-40b8ad72d243  Sprint 8        \Fabrikam Fiber\Iteration\Release 1\Sprint 8   False
55354  c383d1d3-be7f-49f1-95aa-850e49916a58  Sprint 9        \Fabrikam Fiber\Iteration\Release 1\Sprint 9   False           2018-09-17T00:00:00Z  2018-10-05T00:00:00Z
55355  f01f2536-7931-498d-b7f9-8a02c3815653  Sprint 10       \Fabrikam Fiber\Iteration\Release 1\Sprint 10  False
55356  234d1760-7455-41cc-ba7c-0f10e1939c9c  Sprint 11       \Fabrikam Fiber\Iteration\Release 1\Sprint 11  False           2018-10-29T00:00:00Z  2018-11-16T00:00:00Z
55299  a0554e98-b1f1-4230-8500-733c739a0113  Release 2       \Fabrikam Fiber\Iteration\Release 2            False
55300  5c3a5d56-f860-4ebc-8838-7701256c88a4  Release 3       \Fabrikam Fiber\Iteration\Release 3            False
55301  ad722430-042b-4c45-87e5-8d67572d4fc1  Release 4       \Fabrikam Fiber\Iteration\Release 4            False
55364  8b738736-fef6-49f5-be2a-31c86add6589  Future          \Fabrikam Fiber\Iteration\Future               False
55410  1ae491d7-c16e-42f6-a2a8-71eeedbad37e  Sprint 35       \Fabrikam Fiber\Iteration\Sprint 35            False           2019-08-01T00:00:00Z  2019-08-31T00:00:00Z
55411  af3ef6a7-6551-451b-8f9f-63af7a60fc55  Sprint 36       \Fabrikam Fiber\Iteration\Sprint 36            False           2019-09-01T00:00:00Z  2019-09-30T00:00:00Z
```

::: moniker-end

[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *


<a id="admin-intro-tfs-2015" />

::: moniker range="<= tfs-2015" 

From the web portal, choose the ![ ](../../_img/icons/gear_icon.png) gear icon to open project administration pages. Then, choose **Iterations**.  

![Open the project administration page](../../_shared/_img/settings/open-project-settings-tfs-2015.png)

::: moniker-end


<a id="iterations"></a>  

## Add iterations and set iteration dates

You add iterations in the same way you add areas. For more information about working within a sprint cadence, see [Scrum and sprint planning tools](../../boards/sprints/scrum-sprint-planning-tools.md).  

#### [Browser](#tab/browser) 

From **Iterations**, you can add iterations that teams can then select for their use. 

::: moniker range=">= tfs-2017"

<a id="define-sprints-team-services" />

You add and modify area paths from the **Work, Iterations** page from the project admin or settings context.   

For Scrum-based projects, you'll see the following set of sprints. 

> [!div class="mx-imgBorder"]  
> ![Project Settings Context, Work, Iterations page](_img/areas/modify-areas-its-iterations-ts.png) 

1. To schedule the start and end dates for each sprint your teams use,  Highlight the sprint and choose **Set dates**. Or, you can open the ![ ](../../_img/icons/actions-icon.png) context menu for the iteration path and choose **Edit**.  

	Choose the calendar icon to choose new dates. 

	> [!div class="mx-imgBorder"]  
	> ![Work, Iterations page, scheduled set of sprints](_img/iterations/schedule-sprints-calendar.png) 	

1. When you're finished, you'll have a set of sprints scheduled - like this: 

	> [!div class="mx-imgBorder"]  
	> ![Work, Iterations page, scheduled set of sprints](_img/areas/modify-areas-its-iterations-scheduled-ts.png)

	Your next step is to [choose the sprints each team uses](#activate-team-services). 

::: moniker-end


::: moniker range="<= tfs-2015"

<a id="tfs-2015-iteration-paths" />

1. Open the **Iterations** tab for the project context. 

	For Scrum-based projects, you'll see these set of sprints. 

	<img src="../../boards/sprints/_img/activate-team-sprints.png" alt="Example Iterations for a Team" style="border: 1px solid #C3C3C3;" />  

	You can change the name, location within the tree hierarchy, or set dates for any sprint. Simply open it (double-click or press Enter key) and specify the info you want.

2. Schedule the start and end dates for those sprints you plan to use. 

	<img src="../../boards/sprints/_img/set-sprint-start-end-dates.png" alt="Define start and end dates for a sprint" style="border: 1px solid #C3C3C3;" />  

	After you set the start and end dates for one iteration, the calendar tool automatically attempts to set the next set of dates, based on the same iteration length you specified for the first. For example, if you set a three week sprint for Sprint 1, then when you select the start date for Sprint 2, the calendar tool automatically determines the start and end dates based on the next three weeks. You can accept or change these dates.  

3. To add another sprint, select **New child** and name it what you want. Here, we call it Sprint 7.  

	![Iterations, defaults defined for Agile](../../boards/sprints/_img/create-new-child-under-sprint.png)  

	Your next step is to [select the sprints each team uses](#activate-sprints-tfs).
 
::: moniker-end



#### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

You can add iteration paths to a project using [az boards iteration project create](/cli/azure/ext/azure-devops/boards/iteration/project#ext-azure-devops-az-boards-iteration-project-create). To get started, see [Get started with Azure DevOps CLI](../../cli/get-started.md).  

```
az boards iteration project create --name
                                   [--finish-date]
                                   [--path]
                                   [--project]
                                   [--start-date]
```

- **name**: Enter the name of the iteration path.
- **finish-date**: Finish date of the iteration. Example: "2019-06-21".
- **path**: Absolute path of an iteration. Example: \ProjectName\Iteration\IterationName. When not specified, adds an iteration at the root level.
- **project**: Name or ID of the project. Example: --project "Fabrikam Fiber". 
- **start-date**: Enter the start date of the iteration path. Example: "2019-06-03". Must be earlier than the finish-date.

For example, the following command adds Sprint 36 which starts on September 1, 2019 and ends September 30, 2019 as an iteration path to the default project at the root node.  

```
C:\WINDOWS\system32>az boards iteration project create --name "Sprint 36" --start-date 2019-09-01 --finish-date 2019-09-30
{
  "attributes": {
    "finishDate": "2019-09-30T00:00:00Z",
    "startDate": "2019-09-01T00:00:00Z"
  },
  "children": null,
  "hasChildren": false,
  "id": 55411,
  "identifier": "af3ef6a7-6551-451b-8f9f-63af7a60fc55",
  "name": "Sprint 36",
  "path": "\\Fabrikam Fiber\\Iteration\\Sprint 36",
  "structureType": "iteration",
  "url": "https://dev.azure.com/kelliott/56af920d-393b-4236-9a07-24439ccaa85c/_apis/wit/classificationNodes/Iterations/Sprint%2036"
}
```

::: moniker-end

[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *



<a id="open-team-settings" />

## Open team settings, list team iterations  

You set team defaults from team settings. If you're not a team administrator, [get added as one](add-team-administrator.md). Only team or project administrators can change team settings. 

#### [Browser](#tab/browser)

From a web browser, open the web portal administrative context for your team.  

::: moniker range=">= azure-devops-2019"  
You define both areas and iterations from **Project Settings>Boards>Team configuration**. You can quickly navigate to it from a team work tracking backlog, board, or dashboard. 

1.  Open a backlog or board for a team and choose the ![ ](../../_img/icons/team.png) team profile icon. Then choose **Team Settings**. 

	Here we open the Board for the Web team and from there the team profile. 

	> [!div class="mx-imgBorder"]  
	> ![Work Backlog or Board, choose team profile icon](_img/team-defaults/open-team-profile-choose-team-settings.png)  

1. Choose **Iterations and areas**. 

	> [!div class="mx-imgBorder"]  
	> ![Team Profile, choose Iterations and area](_img/team-defaults/team-profile-choose-iterations-areas.png)   

1. If you need to switch the team context, use the team selector within the breadcrumbs.
   
	> [!div class="mx-imgBorder"]  
	> ![Team Configuration, Team breadcrumb](_img/team-defaults/select-team-context.png) 


::: moniker-end

::: moniker range="<= tfs-2018"  

You open team settings from the top navigation bar. Select the team you want and then choose the ![ ](../../_img/icons/gear_icon.png) gear icon. To learn more about switching your team focus, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md#switch-team-context)

> [!div class="mx-imgBorder"]  
> ![Open team settings](_img/team-defaults/open-team-settings-horz.png) 

::: moniker-end


#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="azure-devops"

You can list the iteration paths defined for a team using [az boards area team list](/cli/azure/ext/azure-devops/boards/area/team#ext-azure-devops-az-boards-area-team-list). To get started, see [Get started with Azure DevOps CLI](../../cli/get-started.md).  

```
az boards iteration team list --team
                              [--project]
                              [--timeframe]
```

- **team**: Name or ID of the project.
- **project**: Name or ID of the project.
- **timeframe**: A filter for which iterations are returned based on relative time. Only Current is supported. 

For example, the following command lists the area paths for the Service Delivery team. For other output format options, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli)

```
C:\WINDOWS\system32>az boards iteration team list  --team "Service Delivery"  --project "Fabrikam Fiber" --output table
ID                                    Name       Start Date                 Finish Date                Time Frame    Path
------------------------------------  ---------  -------------------------  -------------------------  ------------  ---------------------------------
c7063041-ff3a-4d7f-bb46-c433c7030d59  Sprint 1   2019-01-01T00:00:00+00:00  2019-01-18T00:00:00+00:00  past          Fabrikam Fiber\Release 1\Sprint 1
dd10f1bf-bedd-4c6f-926f-b2abea81bb50  Sprint 2   2019-01-21T00:00:00+00:00  2019-02-08T00:00:00+00:00  past          Fabrikam Fiber\Release 1\Sprint 2
862e961a-ac7a-4fcc-9ebc-8afd0c12fed5  Sprint 3   2019-03-11T00:00:00+00:00  2019-03-29T00:00:00+00:00  current       Fabrikam Fiber\Release 1\Sprint 3
```

::: moniker-end


[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *
* 

<a id="activate">  </a>

## Select team sprints and set the default iteration path  

You [define sprints for the project](../../boards/sprints/define-sprints.md) and then select them to be active for each team. You assign the default iteration to use when creating new work items. 

<a id="activate-team-services">  </a>

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"  

1. Open **Project settings>Boards>Team Configuration>Iterations** for a team.  

   Here, we navigate to the Fabrikam Fiber Team.  

   > [!div class="mx-imgBorder"]
   > ![Project settings>Work>Team Configuration>Iterations page](_img/team-defaults/open-team-settings-iterations-vert.png)  

1. **Backlog iteration**. Only work items assigned to an iteration equal to or under this backlog iteration appear in the team's backlogs and boards. 

	![Work, Iterations page for team, set team backlog iteration for backlogs and boards](_img/team-defaults/stdefaults-team-backlog-iteration.png)

	Also, all work items added through a team's backlog or board are assigned the backlog iteration. 

2. **Default iteration**. The default iteration defines the iteration used when a work item is created from the team dashboard (new work item widget) and queries page. You can use an explicit value or use <strong>@CurrentIteration</strong> to assign new work items to the team's current iteration. This is the same macro used in [queries to list work items assigned to the currently active iteration assigned to the team](../../boards/queries/query-by-date-or-current-iteration.md#current-iteration).  

	For example, you might want all new work items to be added to a future iteration path which you use to triage and assign to specific sprints at periodic intervals.  

	![Work, Iterations page for team, set team default for new work items](_img/team-defaults/stdefaults-team-default-iteration-vert.png)

3. **Active sprints**. Add an iteration for each sprint backlog you want active for the team. Add each sprint, one by one, by selecting it from the menu.  

	> [!div class="mx-imgBorder"]
	> ![Work, Iterations page for team, select sprints](_img/team-defaults/select-iterations.png)

	When you're done, you should see a list of sprints, similar to the following.  

	> [!div class="mx-imgBorder"]
	> ![Work, Iterations page for team, activates sprint list](_img/team-defaults/selected-iterations.png) 

	If you don't see the sprints you need, or the dates aren't set, you can add or edit iterations for the project, provided you have the required permissions. To learn more, see [Define iteration paths (aka sprints)](set-iteration-paths-sprints.md).   

4. To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../boards/backlogs/create-your-backlog.md).  

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"  

1.	Open **Work>Iterations** for a team.  

	Here, we navigate to the Fabrikam Fiber Team.  

	![Work, Iterations page for team](../../boards/sprints/_img/dsprints-team-work-iterations-page.png)  

<a id="set-backlog-iteration">  </a>
2. **Backlog iteration**. Only work items assigned to an iteration equal to or under this backlog iteration appear in the team's backlogs and boards. 

	![Work, Iterations page for team, set team backlog iteration for backlogs and boards](_img/team-defaults/stdefaults-team-backlog-iteration.png)

	Also, all work items added through a team's backlog or board are assigned the backlog iteration. 

3. **Default iteration**. The default iteration defines the iteration used when a work item is created from the team dashboard (new work item widget) and queries page. You can use an explicit value or use <strong>@CurrentIteration</strong> to assign new work items to the team's current iteration. This is the same macro used in [queries to list work items assigned to the currently active iteration assigned to the team](../../boards/queries/query-by-date-or-current-iteration.md#current-iteration).  

	For example, you might want all new work items to be added to a future iteration path which you use to triage and assign to specific sprints at periodic intervals.  

	![Work, Iterations page for team, set team default for new work items](_img/team-defaults/stdefaults-team-default-iteration.png)

4. **Active sprints**. Add an iteration for each sprint backlog you want active for the team. Add each sprint, one by one, by selecting it from the menu.  

 	![Work, Iterations page for team, select sprint to activate](../../boards/sprints/_img/dsprints-add-sprints-to-team-iterations-page.png)

	When you're done, you should see a list of sprints, similar to the following.  

	![Work, Iterations page for team, activates sprint list](../../boards/sprints/_img/dsprints-selected-active-sprints.png) 

	If you don't see the sprints you need, or the dates aren't set, then [return to the project admin context and define them there](set-iteration-paths-sprints.md#define-sprints-team-services).  

5. To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../boards/backlogs/create-your-backlog.md).  

::: moniker-end

<a id="activate-sprints-tfs">  </a>

::: moniker range="<= tfs-2015" 

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


#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="azure-devops"

You can add iteration paths, set the default iteration path, or set the backlog iteration path for a team using one of the following [az boards iteration team](/cli/azure/ext/azure-devops/boards/iteration/team)[Azure DevOps CLI](../../cli/get-started.md) commands. To get started, see [Get started with Azure DevOps CLI](../../cli/get-started.md).   

```
az boards iteration team add --id --team
                             [--project]

az boards iteration team set-default-iteration --team
                                               [--default-iteration-macro]
                                               [--id]
                                               [--project]

az boards iteration team set-backlog-iteration --id --team
                                               [--project]
```


- **default-iteration-macro**: Default iteration macro, the only valid entry is @CurrentIteration.  
- **id**: Enter the ID of an iteration path. To determine the ID, list the iteration paths using [az boards iteration project list](#iteration-project-list).  
- **team**: Name or ID of the team.
- **project**: Name or ID of the project. Example: --project "Fabrikam Fiber".  

For example, the following command adds \Fabrikam Fiber\Iteration\Release 2 path to the Service Delivery team for the Fabrikam Fiber project. 

```
C:\WINDOWS\system32>az boards iteration team add --id a0554e98-b1f1-4230-8500-733c739a0113 --team "Service Delivery" --project "Fabrikam Fiber"
{
  "attributes": {
    "finishDate": null,
    "startDate": null,
    "timeFrame": "future"
  },
  "id": "a0554e98-b1f1-4230-8500-733c739a0113",
  "name": "Release 2",
  "path": "Fabrikam Fiber\\Release 2",
  "url": "https://dev.azure.com/kelliott/56af920d-393b-4236-9a07-24439ccaa85c/43e6bd2e-696f-492c-bbf7-9cde9cd420ea/_apis/work/teamsettings/iterations/a0554e98-b1f1-4230-8500-733c739a0113"
}
```

::: moniker-end

[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *




::: moniker range=">= tfs-2017"

<a name="rename-delete"></a>

## Rename, move, or delete an iteration 

When you rename an iteration, or move the node within the tree hierarchy, the system automatically updates the work items and queries that reference the existing path or paths. 

#### [Browser](#tab/browser)

1. To rename an iteration path, choose the ![ ](../../_img/icons/actions-icon.png) actions icon for the node, and select **Edit**.  

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Project Configuration](_img/iterations/edit-iteration-path.png)  

1. In the dialog that opens, enter the new name. 

	> [!div class="mx-imgBorder"]  
	> ![Open Work>Project Configuration](_img/iterations/edit-iteration-path-dialog.png)

1. To move the node within the hierarchy, change the Location field. 

1. To delete a node, choose the **Delete** option from the actions menu. 

	> [!NOTE]   
	> When you delete an iteration node, the system automatically updates the existing work items with the node that you enter at the deletion prompt. 

::: moniker-end


#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="azure-devops"

You can rename, move, or delete an iteration path for a project, using the following [az boards iteration project](/cli/azure/ext/azure-devops/boards/iteration/project) commands. To get started, see [Get started with Azure DevOps CLI](../../cli/get-started.md).  

To rename or move an area path, use the `az boards area project update` command.

```
az boards iteration project delete --path
                                   [--project]
                                   [--yes]

az boards iteration project update --path
                                   [--child-id]
                                   [--finish-date]
                                   [--name]
                                   [--project]
                                   [--start-date]

```

- **path**: Absolute path of an iteration. Example: \ProjectName\Iteration\IterationName.  
- **child-id**: Moves an existing iteration path and adds it as a child node for the specified path name or path ID.  
- **name**: New name of the iteration path.  
- **project**: Name or ID of the project. Example: --project "Fabrikam Fiber".  
- **finish-date**: Finish date of the iteration. Example : "2019-06-21".
- **start-date**: Start date of the iteration path. Example: "2019-06-03". Must be earlier than the finish-date.
- **yes**: Do not prompt for confirmation.
 

For example, the following command updates the start and end dates of the Sprint 3 iteration path for the Fabrikam Fiber project. 

```
C:\WINDOWS\system32>az boards iteration project update --path "\Fabrikam Fiber\Iteration\Release 1\Sprint 3" --finish-date 2019-08-31 --start-date 2019-08-01 --project "Fabrikam Fiber" --output table
ID     Identifier                            Name      Start Date            Finish Date           Path                                          Has Children
-----  ------------------------------------  --------  --------------------  --------------------  --------------------------------------------  --------------
55340  862e961a-ac7a-4fcc-9ebc-8afd0c12fed5  Sprint 3  2019-08-01T00:00:00Z  2019-08-31T00:00:00Z  \Fabrikam Fiber\Iteration\Release 1\Sprint 3  False

C:\WINDOWS\system32>
```

::: moniker-end

[!INCLUDE [temp](../../_shared/note-cli-not-supported.md)]

* * *


::: moniker range=">= tfs-2017"

## Archive iteration paths 

After a while, you may want to archive iteration paths that were used for sprints that are a year or more out of date. You can do that by moving the iteration path under a node that you label "Archive". All work items are updated with the moved iteration path. Also, teams can de-select those sprints that have past. All data is maintained in the data store with the new iteration path assignments. 

<!--- Implications for reporting --> 
Prior to archiving the iterations, consider if you have captured all the reports that you may want. 

::: moniker-end

## Chart progress by iteration

You can quickly generate [queries](../../boards/queries/using-queries.md) to view the progress for those areas. As an example, you can [visualize progress of work items assigned to sprints](../../report/dashboards/charts.md) as shown in the following stacked bar chart.  

![Stacked bar chart by area](_img/areas/ALM_CW_StackedBarChart.png) 

## Q & A 

### Q: Do I have to assign iteration paths to a team?  

**A:** If your team doesn't use sprints to plan and track work, then no. You can leave the defaults assigned to the team as they are. You can then use the product and portfolio backlogs and boards, however you won't be able to gain much use of sprint planning tools. 

## Related articles 

As you can see, iterations play a major role in supporting Agile tools and managing work items. You can learn more about working with these fields from these articles: 

*	[About areas and iterations](about-areas-iterations.md)  
*	[Add another team](../../organizations/settings/add-teams.md)  
*	[Configure team settings and add team administrators](manage-teams.md) 
*	[Assign backlog items to a sprint](../../boards/sprints/assign-work-sprint.md)
*	[Agile tools that rely on areas or iterations](about-teams-and-settings.md)
*	[Query by date or current iteration](../../boards/queries/query-by-date-or-current-iteration.md)  
*	[Query by area or iteration path](../../boards/queries/query-by-area-iteration-path.md)  
*	[Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md)