---
title: Set up or configure hierarchical teams in Azure Boards and Azure DevOps
titleSuffix: Azure Boards
description: Learn how to configure teams to support portfolio backlogs to track progress across teams in Azure Boards and  Azure DevOps.
ms.service: azure-devops-boards
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# Configure a hierarchy of teams

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In [Portfolio management](portfolio-management.md), we showed how management teams and feature teams can use their backlogs to focus on the work that's most important to them. In this article, we show how to configure teams that best support the different backlog views of management and feature teams. 

Specifically, we'll show you how to configure a team structure like the one shown in the image below.

![Each team has its own view of the work](media/pm-team-structure.png) 

In this article you'll learn how to:  

>[!div class="checklist"]    
> * Set up a hierarchical set of teams and backlogs
> * Define a single sprint cadence for all teams 
> * Review which area paths are assigned to teams  


## Prerequisites 

- If you don't have a project yet, [create one](../../organizations/projects/create-project.md).  
- To add teams, you must be a member of the **Project Administrator**s group. To get added to this group, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).     


<a id="set_up"></a>

## Add a team for each management area

The first step is to add a team for each feature team and management area. You can also rename teams that you've already added. When you finish, you'll have a set of teams similar to the ones shown.  

> [!div class="mx-imgBorder"]  
> ![Project settings, Teams](media/config-teams/team-list.png)

::: moniker range=">= azure-devops-2019"

1. From the web portal, choose **Project settings** and open **Teams**. 

  ![Open Project settings, and then Teams](../../organizations/settings/media/shared/open-project-settings-team-new-nav.png)

2. Choose **New team**. Give the team a name, and optionally a description. 

    > [!div class="mx-imgBorder"]
    > ![Create a sub-team with its own area path](../../organizations/settings/media/add-team/create-new-team-new-nav.png)

    Repeat this step for all feature and management teams you want to create. 

::: moniker-end

::: moniker range="tfs-2018"

<a id="add-team-team-services" /> 

1. From the web portal, choose the :::image type="icon" source="../../media/icons/gear_icon.png" border="false"::: gear settings icon to open the **Project settings** page for the project.  

    ![Open project admin page](../../organizations/settings/media/add-team/open-admin-context-tfs-2017.png) 

1. Choose **New team**. Give the team a name, and make sure to select **Create an area path with the name of the team**. If you don't select this option, you'll have to set the default area path for the team once you create it. You can choose an existing area path or create a new one at that time. Team tools aren't available until the team's default area path is set. 

    ![Create a sub-team with its own area path](../../organizations/settings/media/add-team/create-team-dialog.png)

    Repeat this step for all feature and management teams you want to create. 

::: moniker-end  


## Move area paths into a hierarchical structure

In this step, you want to move the areas paths associated with feature teams from a flat structure to a hierarchical structure. 

| Flat area structure | Hierarchical area structure |
|---------------------|-----------------------------|
|![Flat area paths](media/config-teams/team-list-flat-structure.png) | ![Hierarchical area paths](media/config-teams/team-list-hierarchy-structure.png) |


You do this by opening each area path associated with a feature team and changing its location to be under the management area path. 

::: moniker range=">= azure-devops-2019"

1. Choose (1) **Project Settings**, expand **Work** if needed, and choose (2) **Project configuration** and then (3) **Areas**.   

    > [!div class="mx-imgBorder"]  
    > ![Project Settings>Work>Project Configuration](../../organizations/settings/media/areas/open-project-work-areas-settings-vert.png)   

1. Next, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for one of the area paths associated with a feature team and select **Edit**. Then change the **Location** to move it under its corresponding management team area path.  

    For example, here we move the Customer Profile to under Account Management.

    > [!div class="mx-imgBorder"]
    > ![Edit area path dialog](media/config-teams/edit-area-path.png)

    Repeat this step for all feature team area paths. 

::: moniker-end


::: moniker range="tfs-2018"

1. From the web portal for the project, choose the :::image type="icon" source="../../media/icons/gear_icon.png" border="false"::: gear icon.   

    > [!div class="mx-imgBorder"]  
    > ![Open Admin context, project level](../../organizations/settings/media/areas/modify-areas-its-open-admin-context-ts.png)

    If you're currently working from a team context, then hover over the ![gear icon](../../media/icons/gear_icon.png) and choose **Project settings**.  

    > [!div class="mx-imgBorder"] 
    > ![Open Project Settings, horz nav](../../media/settings/open-project-settings-horz.png)

1. Choose **Work**.  

2. Next, choose the  :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for one of the area paths associated with a feature team and select **Edit**. Then change the **Location** to move it under its corresponding management team area path.  

    For example, here we move the Customer Profile to under Account Management.

    > [!div class="mx-imgBorder"]
    > ![Edit area path dialog](media/config-teams/edit-area-path.png)

    Repeat this step for all feature team area paths. 

::: moniker-end   


## Include subarea paths for management teams

By including subarea paths for the management teams, you automatically include the backlog items of their feature teams onto the management team's backlog. The default setting for all teams is to exclude subarea paths. 

> [!NOTE]   
> Sub-area paths may break a team's ability to reorder or reparent items on the backlog. Also, it can introduce uncertainties with regards to assignments made to the Kanban Board Column, Done, and Lane fields. To learn more, see [Exercising select features with shared area paths](#op-issues) later in this article. 

::: moniker range=">= azure-devops-2019"
You define both areas and iterations from **Project Settings>Boards>Team configuration**. You can quickly navigate to it from **Teams**. 

1. From **Project Settings**, choose **Teams**, and then choose the team whose settings you want to modify. 

   Here we open the Account Management team. 

   > [!div class="mx-imgBorder"]  
   > ![Teams, choose a team](media/config-teams/choose-management-team.png)   

1. Choose **Iterations and areas** and then **Areas**. 

    > [!div class="mx-imgBorder"]  
    > ![Team Profile, choose Iterations and area](media/config-teams/open-iterations-areas.png)   

    If you need to switch the team context, use the team selector within the breadcrumbs.

2. Choose **Select area(s)**, and select the area path for **Account Management** and check the **Include sub areas** checkbox. 

    > [!div class="mx-imgBorder"]  
    > ![Select areas for Account Management team](media/config-teams/include-sub-area-paths.png)   

    Verify that only this area path is selected for the team and is the default area path. Remove any other area paths that may have been previously selected.  

    > [!div class="mx-imgBorder"]  
    > ![Verify area paths for Account Management team](media/config-teams/verify-area-path-assignments.png)   

    Repeat this step for all your management areas. If you want to enable rollup across all feature teams and management areas to the top-level area, repeat this step for the default team. In our example, that corresponds to Fabrikam Fiber.   

::: moniker-end


::: moniker range="tfs-2018"   

1. You open team settings from the top navigation bar. Select the team you want and then choose the :::image type="icon" source="../../media/icons/gear_icon.png" border="false"::: gear icon. To learn more about switching your team focus, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md#switch-team-context)

   > [!div class="mx-imgBorder"]  
   > ![Open team settings](../../organizations/settings/media/team-defaults/open-team-settings-horz.png) 

1. Choose **Work**, and then **Areas**. 

2. Choose **Select area(s)**, and select the area path for **Account Management** and check the **Include sub areas** checkbox. 

    > [!div class="mx-imgBorder"]  
    > ![Select areas for Account Management team](media/config-teams/include-sub-area-paths.png)   

    Verify that only this area path is selected for the team and is the default area path. Remove any other area paths that may have been previously selected.  

    > [!div class="mx-imgBorder"]  
    > ![Verify area paths for Account Management team](media/config-teams/verify-area-path-assignments.png)   

    Repeat this step for all your management areas. If you want to enable rollup across all feature teams and management areas to the top-level area, repeat this step for the default team. In our example, that corresponds to Fabrikam Fiber.   

::: moniker-end


## Define a single sprint cadence for all teams 

If your feature teams use Scrum or use sprints to assign their work, you'll want to set up a series of sprints that all teams can use. By default, you'll see a set of predefined sprints. Add more sprints and set their sprint dates from **Project Settings** as described in [Add iterations and set iteration dates](../../organizations/settings/set-iteration-paths-sprints.md). You can rename and edit the default sprints as needed.

> [!NOTE]
> While maintaining a single sprint cadence simplifies project administration, you can create different cadences as needed. For example, some teams may follow a monthly cadence while others follow a 3-week cadence. Simply define a node under the top project node for each cadence, and then define the sprints under those nodes. For example: 
> - Fabrikam Fiber/CY2019
> - Fabrikam Fiber/3Week Sprints
> 
> Here we define the start and end dates of the first 6 sprints corresponding to a 3-week cadence. 

> [!div class="mx-imgBorder"]  
> ![Iteration path](../../organizations/settings/media/areas/modify-areas-its-iterations-scheduled-ts.png)   



## Configure other team settings 

For teams to be well defined, you'll want to add team administrator(s) and have them verify or configure other team settings. To learn more, see [Manage and configure team tools](../../organizations/settings/manage-teams.md). 

## Review area paths assigned to teams 

::: moniker range=">= azure-devops-2019"  

From **Project Settings>Project configuration>Areas**, you can review which **Area Paths** have been assigned to which teams. To modify the assignments, choose the team and change the team's area path assignments. 

> [!div class="mx-imgBorder"]  
> ![Area Paths and Teams](media/config-teams/review-area-paths-teams.png)   
::: moniker-end

::: moniker range="tfs-2018"  
From **Project Settings>Work>Areas**, you can review which **Area Paths** have been assigned to which teams. To modify the assignments, choose the team and change the team's area path assignments. 

> [!div class="mx-imgBorder"]  
> ![Area Paths and Teams](media/config-teams/review-area-paths-teams.png)   
::: moniker-end

<a id="op-issues" />

## Exercising select features with shared area paths 

When you share area paths across two or more teams, you'll want to understand how Azure Boards manages conflicts that can arise when exercising these features: 
- Reordering or reparenting work items on a backlog or board
- Updates made to  Kanban **Board Column**, **Board Column Done**, and **Board Lane** fields when dragging items to a different column 

### Reordering and reparenting work items 

All backlogs and boards support drag-and-drop to reorder and reparent work items. Updates made to one team backlogs and boards are reflected in other team backlogs and boards that share the same area path. You may need to refresh the page to view the changes. 

You can only use drag-and-drop to reorder or reparent work items assigned to area paths selected for your team. When the **Parents** view option is enabled, work items may appear on your backlog that your team doesn't own. Anything that appears with the :::image type="icon" source="../../media/icons/info.png" border="false"::: information icon can't be reordered nor reparented as it's owned by another team.  
 
:::image type="content" source="media/config-teams/information-message-owned-by-other-team.png" alt-text="Screenshot of information message on team ownership.":::


### Kanban board column updates  

Because each team can customize the Kanban board columns and swimlanes, the values assigned to Kanban board fields may differ from what you expect when another team updates the work item from a different board. Even if the management team and the feature teams configure their Feature [Kanban board columns](../boards/add-columns.md) with identical workflow mapping, updating work items on one team's Kanban board won't be reflected on another team's Kanban board. Only when the work item moves to a column that maps to a workflow state does the card column reflect the same on all boards.

By design, the team with the longest area path wins the conflict and determines the values for the Kanban **Board Column**, **Board Column Done**, and **Board Lane** fields. If the shared area paths are of equal depth, the results are non-deterministic.  
 
::: moniker range=">= azure-devops-2019"
 The primary work-around for this issue is to maintain single ownership of work items by [Defining area paths and assign to a team](../../organizations/settings/set-area-paths.md). Another option is to add custom workflow states that all teams can use. For details, see [Customize the workflow (Inheritance process)](../../organizations/settings/work/customize-process-workflow.md). 

::: moniker-end

::: moniker range="tfs-2018"
 The primary work-around for this issue is to maintain single ownership of work items by [Defining area paths and assign to a team](../../organizations/settings/set-area-paths.md). Another option is to add custom workflow states that all teams can use. For details, see [Change the workflow for a work item type](../../reference/xml/change-workflow-wit.md).
::: moniker-end


## Next steps
> [!div class="nextstepaction"]
> [Review team Delivery Plans](review-team-plans.md)

## Related articles

- [Create your backlog](../backlogs/create-your-backlog.md)  
- [Kanban quickstart](../boards/kanban-quickstart.md)
- [Organize your backlog](../backlogs/organize-backlog.md)  
- [Work with multi-team ownership of backlog items](../backlogs/backlogs-overview.md#multi-team)
- [Fix display, reordering, and nesting issues](../backlogs/resolve-backlog-reorder-issues.md)
 
