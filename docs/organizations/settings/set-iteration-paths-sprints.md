---
title:  Define iteration paths and configure team iterations
titleSuffix: Azure Boards 
description: Learn how to define the iteration and sprint fields when you assign work items and configure dashboards in Azure DevOps.
ms.subservice: azure-devops-settings
ms.custom: teams, engagement-fy23, devx-track-azurecli
ms.assetid: 27631A15-9EB1-4E79-814E-8145BB7707C8
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 11/12/2024
---

# Define iteration paths (sprints) and configure team iterations 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Iteration Paths, also known as *sprints*, assign work items to specific time-box intervals. Define iteration paths at the project level and have each team select the paths they use. Iteration paths are shared among all selected teams. You can create a flat or hierarchical structure of iteration paths to support releases, subreleases, and sprints. If your team doesn't use sprints for planning and tracking work, retain the default team assignments and utilize product and portfolio backlogs and boards, though sprint planning tools won’t be applicable.

[!INCLUDE [temp](../../boards/includes/list-sprint-dependent-tools.md)] 

For information about naming restrictions and limits placed on addition of Iteration Paths, see [About areas and iterations, Naming restrictions](about-areas-iterations.md#naming-restrictions).

> [!TIP]
> To quickly update iteration dates, see [Change sprint dates](../../boards/sprints/define-sprints.md). However, if you need to define the iteration paths and tree structure, then follow the guidance provided in this article. 

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**|- To set team area or iteration paths: [Team administrator](add-team-administrator.md) or a member of the [Project Administrators](../security/change-project-level-permissions.md) group. By default, the user who created the project has these permissions.<br>- To add an area path under the root node or edit or delete any child node: Member of the [Project Administrators](../security/change-project-level-permissions.md) group.<br>- To add, edit, and manage area paths under a node: One or more of the following permissions set to **Allow**:<br>- **Create child nodes**<br>- **Delete this node**<br>- **Edit this node**<br>- **View permissions in this node**|

For more information about acquiring permissions, see [Change project-level permissions](../security/change-project-level-permissions.md) or [Set permissions and access for work tracking](../security/set-permissions-access-work-tracking.md#set-permissions-area-path).  

## Get started

New projects start with a single root area path matching the project name. Add other area paths under this root and use predefined iteration paths for tracking work by setting dates.

If you're new to managing projects and teams, follow these steps to configure your project and teams:

1. **Configure Azure Boards**: Review [Configure and customize Azure Boards](../../boards/configure-customize.md).
2. **Define area paths and teams**: Follow [Define area paths and assign to a team](set-area-paths.md#get-started), ensuring at least one area path per team.
3. **Set iteration length**: Decide on iteration lengths, preferably consistent across teams. See [About areas and iterations](about-areas-iterations.md).
4. **Choose sprint structure**: Choose between a flat or hierarchical sprint and release structure.
5. **Define iteration paths**.
6. **Create teams**: Create necessary teams based on step 2. See [Add a team, move from one default team to several teams](add-teams.md).
7. **Assign area paths to teams**: In team configuration, assign default and other area paths to each team. Follow [Set team default iteration paths](#select-team-sprints-and-set-the-default-iteration-path).
8. **Assign iteration paths to work items**: Use [bulk modify](../../boards/backlogs/bulk-modify-work-items.md) to assign work items to iteration paths for visibility on backlogs and boards. Also, see [Assign backlog items to a sprint](../../boards/sprints/assign-work-sprint.md).

As needed, you can do the following tasks at any time: 

- Add more child iteration nodes
- Rename an iteration path (except the root path)
- Move a child iteration path under another node 
- Delete a child iteration path 
- Change the default and selected iteration paths assigned to a team

### Team backlog iteration versus default iteration 

Each team has access to various Agile tools, as detailed in [About teams and Agile tools](about-teams-and-settings.md). These tools reference the team's default area paths and selected iteration paths or sprints. Typically, teams use one area path and multiple iteration paths for work tracking, but you can use multiple area paths on backlogs and boards to support different scenarios.

Teams can set a default iteration separate from the backlog iteration. The backlog iteration determines which items appear on the team's backlogs and boards, while the default iteration assigns values to newly created work items.

All work items created within the team context are automatically assigned the team's default area path and default iteration path.

## List project iterations

To list project iterations, do the following steps:

#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2020" 
1. Sign in to your project `https://dev.azure.com/{Your_Organization/Your_Project}`. 

1. Select (1) **Project settings** > (2) **Project configuration** > (3) **Iterations**.   

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Project Settings, Project Configuration.](media/iterations/open-work-project-config-iterations-preview.png)   

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your project `https://dev.azure.com/{Your_Organization/Your_Project}`. 

2. Select **Project settings**(1) > **Project configuration**(2) > **Iterations**(3).   

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Project Settings, Project Configuration for Azure DevOps Server 2019.](media/iterations/open-work-project-config-iterations-vert.png)   

::: moniker-end

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

[List project iteration paths](#list-project-iterations) | [Add a project iteration](#add-iterations-and-set-iteration-dates) | [List team iteration paths](#list-team-iterations) | [Set team iteration paths](#select-team-sprints-and-set-the-default-iteration-path) | [Delete or update a project iteration path](#rename-or-move-an-iteration)

List the iterations defined for a project using [az boards iteration project list](/cli/azure/boards/iteration/project#az-boards-iteration-project-list). To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration project list [--depth]
                                 [--path]
                                 [--project]
```

#### Parameters

- **depth**: Optional. Depth of child nodes to be listed. Example: --depth 3.
- **path**: Optional. Absolute path of an iteration. `\Iteration\` must follow after the `\ProjectName`, which distinguishes it from an area path. Example: --path \ProjectName\Iteration\IterationName. If spaces are used within a node, then enclose in double-quotes, for example,`--path "\Fabrikam Fiber\Iteration\Sprint 1"`. When not specified, lists iteration paths from the root level.  
- **project**: Optional. Name or ID of the project. Example: `--project "Fabrikam Fiber"`.  


#### Example

For example, the following command lists the area paths to a depth of 3 for the Fabrikam Fiber project. For more information on other output format options, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli)

> [!div class="tabbedCodeSnippets"]
```azurecli
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
55299  a0554e98-b1f1-4230-8500-733c739a0113  Release 2       \Fabrikam Fiber\Iteration\Release 2            False
55300  5c3a5d56-f860-4ebc-8838-7701256c88a4  Release 3       \Fabrikam Fiber\Iteration\Release 3            False
55301  ad722430-042b-4c45-87e5-8d67572d4fc1  Release 4       \Fabrikam Fiber\Iteration\Release 4            False
55364  8b738736-fef6-49f5-be2a-31c86add6589  Future          \Fabrikam Fiber\Iteration\Future               False
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

## Add iterations and set iteration dates

 Add iterations in the same way that you add areas. For more information about working within a sprint cadence, see [Scrum and sprint planning tools](../../boards/sprints/scrum-key-concepts.md).   

#### [Browser](#tab/browser/)

::: moniker range=">= azure-devops-2020" 

1. Add and modify iterations from **Project settings** > **Project configuration** > **Iterations**.   

   For Scrum-based projects, you see the following set of sprints. 

   :::image type="content" source="media/areas/modify-areas-its-iterations-preview.png" alt-text="Screenshot of Project Settings context, project configuration, Iterations page.":::

1. To schedule the start and end dates for each sprint that your teams use, highlight the sprint and choose **Set dates**. Or,  select **Actions** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: for the iteration path and choose **Edit**.  

   :::image type="content" source="media/iterations/set-dates-preview.png" alt-text="Screenshot of dialog to Set dates.":::

1. To select new dates, choose the calendar icon. 

   :::image type="content" source="media/iterations/schedule-sprints-calendar-preview.png" alt-text="Screenshot of Iterations page, and calendar icon for selecting new dates.":::	

1. When you finish, you have a set of sprints scheduled - similar to the following image: 

   :::image type="content" source="media/areas/modify-areas-its-iterations-preview.png" alt-text="Screenshot of Iterations page, scheduled set of sprints.":::

   Your next step is to [choose the sprints each team uses](#select-team-sprints-and-set-the-default-iteration-path). 

::: moniker-end

::: moniker range="azure-devops-2019"

From **Iterations**,  add iterations that teams can then select for their use.

1. Add and modify area paths from the **Work** > **Iterations** page from the project admin or settings context.   

   For Scrum-based projects, you see the following set of sprints. 

   :::image type="content" source="media/areas/modify-areas-its-iterations-ts.png" alt-text="Screenshot of Project Settings Context, Work, Iterations page.":::

1. To schedule the start and end dates for each sprint your teams use,  Highlight the sprint and choose **Set dates**. Or,  select **Actions** :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: context menu for the iteration path and choose **Edit**.
	
   To select new dates, choose the calendar icon. 

   :::image type="content" source="media/iterations/schedule-sprints-calendar.png" alt-text="Screenshot of Work, Iterations page, and calendar icon to choose for new dates for Azure DevOps Server 2019.":::

1. When you finish, you have a set of sprints scheduled - like this: 

   :::image type="content" source="media/areas/modify-areas-its-iterations-ts.png" alt-text="Screenshot of Work, Iterations page, scheduled set of sprints for Azure DevOps Server 2019.":::

   Your next step is to [choose the sprints each team uses](#select-team-sprints-and-set-the-default-iteration-path).

::: moniker-end

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

 Add iteration paths to a project using [az boards iteration project create](/cli/azure/boards/iteration/project#az-boards-iteration-project-create). To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration project create --name
                                   [--finish-date]
                                   [--path]
                                   [--project]
                                   [--start-date]
```

#### Parameters

- **name**: Required. Enter the name of the iteration path.
- **finish-date**: Optional. Finish date of the iteration. Example: "--finish-date 2019-06-21".
- **path**: Optional. Absolute path of an iteration. Example: \ProjectName\Iteration\IterationName. When not specified, adds an iteration at the root level.
- **project**: Optional. Name or ID of the project. Example:` --project "Fabrikam Fiber"`. 
- **start-date**: Optional. Enter the start date of the iteration path. Example: "2019-06-03". Must be earlier than the finish-date.

#### Example

For example, the following command adds Sprint 36, which starts on September 1, 2019 and ends September 30, 2019 as an iteration path to the default project at the root node.  

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration project create --name "Sprint 36" --start-date 2019-09-01 --finish-date 2019-09-30
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
  "url": "https://dev.azure.com/fabrikam/56af920d-393b-4236-9a07-24439ccaa85c/_apis/wit/classificationNodes/Iterations/Sprint%2036"
}
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

## List team iterations  

 Set team defaults from team settings. If you're not a team administrator, [get added as one](add-team-administrator.md). Only team or project administrators can change team settings. 

> [!NOTE]  
> Teams can be assigned a maximum of 300 **Iteration Paths**. For more information, see [Work tracking, process, and project limits](work/object-limits.md). 

#### [Browser](#tab/browser) 

Define both areas and iterations from **Project settings > Boards > Team configuration**. Quickly navigate to it from a team work tracking backlog, board, or dashboard. 

1.  Open a backlog or board for a team and choose :::image type="icon" source="../../media/icons/team.png" border="false"::: **Team profile** and then **Team Settings**. 

	Here we open the Board for the Web team and from there the team profile. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Work Backlog or Board, choose team profile icon.](media/team-defaults/open-team-profile-choose-team-settings.png)  

2. Choose **Iterations and areas**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Team Profile, choose Iterations and area.](media/team-defaults/team-profile-choose-iterations-areas.png)   

3. To switch the team context, use the team selector within the breadcrumbs.
   
	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Team Configuration, Team breadcrumb.](media/team-defaults/select-team-context.png)

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

 List the iteration paths defined for a team using [az boards area team list](/cli/azure/boards/area/team#az-boards-area-team-list). To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration team list --team
                              [--project]
                              [--timeframe]
```

#### Parameters

- **team**: Required. Name or ID of the team.
- **project**: Optional. Name or ID of the project.
- **timeframe**: Optional. A filter for which iterations are returned based on relative time. Only *Current* is supported. 

#### Example

For example, the following command lists the area paths for the Service Delivery team. For other output format options, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli)

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration team list  --team "Service Delivery"  --project "Fabrikam Fiber" --output table
ID                                    Name       Start Date                 Finish Date                Time Frame    Path
------------------------------------  ---------  -------------------------  -------------------------  ------------  ---------------------------------
c7063041-ff3a-4d7f-bb46-c433c7030d59  Sprint 1   2019-01-01T00:00:00+00:00  2019-01-18T00:00:00+00:00  past          Fabrikam Fiber\Release 1\Sprint 1
dd10f1bf-bedd-4c6f-926f-b2abea81bb50  Sprint 2   2019-01-21T00:00:00+00:00  2019-02-08T00:00:00+00:00  past          Fabrikam Fiber\Release 1\Sprint 2
862e961a-ac7a-4fcc-9ebc-8afd0c12fed5  Sprint 3   2019-03-11T00:00:00+00:00  2019-03-29T00:00:00+00:00  current       Fabrikam Fiber\Release 1\Sprint 3
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

## Select team sprints and set the default iteration path

You [define sprints for the project](../../boards/sprints/define-sprints.md) and then select them to be active for each team. You assign the default iteration to use when creating new work items. 

#### [Browser](#tab/browser/)

1. Open **Project settings > Boards > Team Configuration > Iterations** for a team.  

   Here, we navigate to the Fabrikam Fiber Team.  

   > [!div class="mx-imgBorder"]
   > ![Screenshot of Project settings, Team Configuration, Iterations page.](media/team-defaults/open-team-settings-iterations-vert.png)  

2. **Backlog iteration**. Only work items assigned to an iteration equal to or under this backlog iteration appear in the team's backlogs and boards. 

	![Screenshot of Iterations page for team, set team backlog iteration for backlogs and boards.](media/team-defaults/stdefaults-team-backlog-iteration.png)

	Also, all work items added through a team's backlog or board are assigned the backlog iteration. 

3. **Default iteration**. The default iteration defines the iteration to use when you create a work item from the team backlog or board. specify any iteration defined under the **Backlog iteration** path. To assign new work items to the current iteration, specify **@CurrentIteration**. The same macro used in [queries to list work items assigned to the currently active iteration assigned to the team](../../boards/queries/query-by-date-or-current-iteration.md#current-iteration) is used.  

	For example, you might want all new work items added to a future iteration path, which you use to triage and assign to specific sprints at periodic intervals.

	![Screenshot of Work, Iterations page for team, set team default for new work items.](media/team-defaults/stdefaults-team-default-iteration-vert.png)

	> [!NOTE]   
	> New work items added through the **Work Items** page or the **New Work Items** widget on a team dashboard don't reference the **Default Iteration Path** assigned to the team. Instead, new work items are assigned the last **Iteration Path** selected by the user. New work items added through a team's **Sprints** backlog or taskboard are always assigned the **Iteration Path** associated with the selected sprint. 

4. **Active sprints**. Add an iteration for each sprint backlog you want active for the team. Add each sprint, one by one, by selecting it from the menu.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot of Work, Iterations page for team, select sprints.](media/team-defaults/select-iterations.png)

	When you finish, you should see a list of sprints, similar to the following.  

	> [!div class="mx-imgBorder"]
	> ![Screenshot of Work, Iterations page for team, activates sprint list.](media/team-defaults/selected-iterations.png) 

	If you don't see the sprints or dates that you need, add or edit iterations for the project, provided you have the required permissions. For more information, see [Define iteration (sprint) paths](set-iteration-paths-sprints.md).   

5. To see the newly activated sprint backlogs, refresh your team's [product backlog page](../../boards/backlogs/create-your-backlog.md).  

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops" 

Add iteration paths, set the default iteration path, or set the backlog iteration path for a team using one of the following [az boards iteration team](/cli/azure/boards/iteration/team)[Azure DevOps CLI](../../cli/index.md) commands. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).   

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration team add --id --team
                             [--project]

az boards iteration team set-default-iteration --team
                                               [--default-iteration-macro]
                                               [--id]
                                               [--project]

az boards iteration team set-backlog-iteration --id --team
                                               [--project]
```

#### Parameters

- **team**: Required. Name or ID of the team.
- **default-iteration-macro**: Optional. Default iteration macro, the only valid entry is @CurrentIteration.  
- **id**: Optional. Enter the ID of an iteration path. To determine the ID, list the iteration paths using [az boards iteration project list](#list-project-iterations).  
- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".  

#### Example 

For example, the following command adds \Fabrikam Fiber\Iteration\Release 2 path to the Service Delivery team for the Fabrikam Fiber project. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration team add --id a0554e98-b1f1-4230-8500-733c739a0113 --team "Service Delivery" --project "Fabrikam Fiber"
{
  "attributes": {
    "finishDate": null,
    "startDate": null,
    "timeFrame": "future"
  },
  "id": "a0554e98-b1f1-4230-8500-733c739a0113",
  "name": "Release 2",
  "path": "Fabrikam Fiber\\Release 2",
  "url": "https://dev.azure.com/fabrikam/56af920d-393b-4236-9a07-24439ccaa85c/43e6bd2e-696f-492c-bbf7-9cde9cd420ea/_apis/work/teamsettings/iterations/a0554e98-b1f1-4230-8500-733c739a0113"
}
```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

## Rename or move an iteration 

When you rename an iteration, or move the node within the tree hierarchy, the system automatically updates the work items and queries that reference the existing paths. 

#### [Browser](#tab/browser/)

1. To rename an iteration path, choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: context menu for the node, and then select **Edit**.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Open Work, Project Configuration in browser.](media/iterations/edit-iteration-path.png)  

2. In the dialog that opens, enter the new name. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Open Work, Project Configuration dialog in browser.](media/iterations/edit-iteration-path-dialog.png)

3. To move the node within the hierarchy, change the Location field. 

4. To delete a node, choose the **Delete** option from the actions menu. 

	> [!NOTE]   
	> When you delete an iteration node, the system automatically updates the existing work items with the node that you enter at the deletion prompt. 

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

 Rename, move, or delete an iteration path for a project, using the following [az boards iteration project](/cli/azure/boards/iteration/project) commands. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

### Rename or move a project iteration path 

To rename or move a project iteration path, use the `az boards area project update` command.

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration project update --path
                                   [--child-id]
                                   [--finish-date]
                                   [--name]
                                   [--project]
                                   [--start-date]

```

#### Parameters
 
- **path**: Required. Absolute path of an iteration. Example: \ProjectName\Iteration\IterationName.  
- **child-id**: Optional. Moves an existing iteration path and adds it as a child node for the specified path name or path ID.  
- **name**: Optional. New name of the iteration path.  
- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".  
- **finish-date**: Optional. Finish date of the iteration. Example: "2019-06-21".
- **start-date**: Optional. Start date of the iteration path. Example: "2019-06-03". Must be earlier than the finish-date.
- **yes**: Optional. Don't prompt for confirmation.

#### Example 

For example, the following command updates the start and end dates of the Sprint 3 iteration path for the Fabrikam Fiber project. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration project update --path "\Fabrikam Fiber\Iteration\Release 1\Sprint 3" --finish-date 2019-08-31 --start-date 2019-08-01 --project "Fabrikam Fiber" --output table
ID     Identifier                            Name      Start Date            Finish Date           Path                                          Has Children
-----  ------------------------------------  --------  --------------------  --------------------  --------------------------------------------  --------------
55340  862e961a-ac7a-4fcc-9ebc-8afd0c12fed5  Sprint 3  2019-08-01T00:00:00Z  2019-08-31T00:00:00Z  \Fabrikam Fiber\Iteration\Release 1\Sprint 3  False

```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

## Delete an Iteration Path

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

#### [Browser](#tab/browser/)

When you delete an **Iteration Path**, you must provide an **Iteration Path** to use to update the work items assigned to the **Iteration Path** you want to delete. 

1. To delete an **Iteration Path**, open the web portal **Project settings>Project configuration>Iterations** page.

1. Choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: context menu for the node, and select **Delete** or **Remove**.  

1. In the dialog that opens, select the **Iteration Path** to reassign work items to, and then choose **Delete path**.

    :::image type="content" source="media/iterations/delete-iteration-path-dialog.png" alt-text="Screenshot of Delete iteration dialog.":::

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

To delete a project iteration path, use the [`az boards area project delete`](/cli/azure/boards/iteration/project) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az boards iteration project delete --path
                                   [--project]
                                   [--yes]
``` 

#### Parameters
 
- **path**: Required. Absolute path of an iteration. Example: \ProjectName\Iteration\IterationName.   
- **project**: Optional. Name or ID of the project. Example: --project "Fabrikam Fiber".   
- **yes**: Optional. Don't prompt for confirmation.

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]

---

### Export/import iteration paths  

You can't export or import the structure of tree paths for one project to use with another project.

::: moniker range="azure-devops"

Using the Azure CLI, you can use the `az boards iteration` command to list the iterations defined for one project and then add them to another project. Once you add the iterations to another project, you can then use the `az boards iteration team` command to add them to a team and set the default and backlog iteration path for the team. 

You can use the [Classification Nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes) and [Teams (REST API)](/rest/api/azure/devops/core/teams) to perform similar actions.

::: moniker-end

::: moniker range="< azure-devops"
 You can use the [Classification Nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes) to list the iterations defined in one project. Once you add the iterations to another project, use the [Teams (REST API)](/rest/api/azure/devops/core/teams) to add them to a team and set the default and backlog iteration path for the team. 
::: moniker-end


## Archive iteration paths 

After a while, you might want to archive iteration paths that were used for sprints that are a year or more out of date. You can do so by moving the iteration path under a node that you label "Archive". All work items are updated with the moved iteration path. Also, teams can de-select those sprints that have past. All data is maintained in the data store with the new iteration path assignments. 

<!--- Implications for reporting --> 
Before you archive the iterations, consider if you captured all the reports that you want. 

## Chart progress by iteration

You can quickly generate [queries](../../boards/queries/using-queries.md) to view the progress for those areas. For example, you can [visualize progress of work items that are assigned to sprints](../../report/dashboards/charts.md), as shown in the following stacked bar chart.  

![Stacked bar chart by area](media/areas/ALM_CW_StackedBarChart.png)

## Related articles 

* [About areas and iterations](about-areas-iterations.md)  
* [Add another team](../../organizations/settings/add-teams.md)  
* [Configure team settings and add team administrators](manage-teams.md) 
* [Assign backlog items to a sprint](../../boards/sprints/assign-work-sprint.md)
* [Agile tools that rely on areas or iterations](about-teams-and-settings.md)

### Programmatic resources

Area paths and iteration paths are also referred to as *Classification Nodes*. 

::: moniker range="azure-devops"

- [Use the az boards iteration (Azure DevOps CLI)](/cli/azure/boards/iteration)
- [Use the Teams (REST API)](/rest/api/azure/devops/core/teams)
- [Utilize the Classification Nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes)

::: moniker-end

::: moniker range="< azure-devops"

- [Use the Teams (REST API)](/rest/api/azure/devops/core/teams)
- [Utilize the Classification Nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes)
- [Define the classification plug-in (Process Template)](/previous-versions/azure/devops/reference/process-templates/define-classification-plug-in)

::: moniker-end
