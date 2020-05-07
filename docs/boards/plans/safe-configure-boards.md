---
title: Configure Azure Boards to support SAFe®
titleSuffix: Azure Boards
description: Configure Azure Boards to support epics, release trains, and multiple backlogs to support SAFe® practices
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 05/01/2020
---


# Configure Azure Boards to support SAFe&reg;  

[!INCLUDE [temp](../includes/version-vsts-tfs-all-versions.md)]

Configuration of Azure Boards to support your SAFe programs and portfolios requires performing the following tasks: 

>[!div class="checklist"]      
> - Define your feature, program, and portfolio teams  
> - Configure your hierarchy of Area Paths to support your teams  
> - Define your Iteration Paths to support your release trains, Program Increments, sprints, and Innovation and Planning (IP) Iterations 
> - Configure each team's area paths, iteration paths, and team members 

You'll need to be a [member of the Project Administrators group](../../organizations/security/add-users-team-project.md) to make these configurations.    

Once you've performed these core configurations, you can then consider customizing your project to support specific business needs. This is addressed in [Customize Azure Boards to support SAFe&reg; ](safe-customize.md). 

## Team hierarchy 

::: moniker range=">= azure-devops-2019"

In this article, we'll go from having one project, named "Fabrikam" and one team, which shares the name of the project, to the following set of nine teams. 

> [!div class="mx-imgBorder"]  
> ![Teams, list](media/safe-configure/teams-list.png)

We'll then configure the area path to the following hierarchy and configuring each team's area path. This configuration supports each team's backlog view and rollup of views within the hierarchy.  

> [!div class="mx-imgBorder"]  
> ![Area path and team configuration](media/safe-configure/team-area-path-mapping.png)
> 
::: moniker-end

::: moniker range="<= tfs-2018" 


In this article, we'll go from having one project, named "Fabrikam" and one team, which shares the name of the project, to the following structure of three levels and nine teams. The area path hierarchy and configuring each team's area path supports each team's backlog view and rollup of views within the hierarchy.  

![Hierarchical areas support 3 levels of 9 teams](media/safe-config-teams.png) 

::: moniker-end


Each project has a default team. You can configure additional teams for program-level and feature team-level work. And, you can also redefine the default team as the portfolio team that manages epics.  

In this way, all teams can manage their own workload and priorities while clearly understanding how their work supports those epics managed in the portfolio team's backlog. At the same time, the portfolio team can monitor progress of its backlog on their own Kanban board, prioritize the items on their backlog, and view progress across release trains.

All this might sound complicated, but it actually takes very little configuration to set up the teams and get started.
In order to go from one project with one default team, area, and set of iterations, we'll first configure an area path structure to support the hierarchy of teams we want. Then we'll make sure that the iteration paths support the release structure we want and the program and feature teams to use. Finally, we'll create, configure, and populate the membership of teams.  

::: moniker range="azure-devops"

## Define your teams 

To start, we'll simply add each team, creating a default area path for each. Later in this article, we'll configure those area paths into the necessary hierarchy. This structure maps the following SAFe teams to Azure Boards teams:  
- Portfolio team -> default top-level team, the Fabrikam team (already defined) 
- Program teams -> secondary-level teams, Fiber Suite and Service Suite  
- Feature teams -> tertiary-level teams defined under Fiber Suite and Service Suite.  

You'll need to be a [project administrator](../../organizations/security/add-users-team-project.md) to perform these steps. If you need more-detailed guidance, see [Portfolio management](portfolio-management.md).  

Add each team, one by one

> [!NOTE]   
> The following procedure uses the **New Teams Page** user interface that is in preview. To enable this feature, see [Enable preview features](../../project/navigation/preview-features.md).

1. From the web portal, choose **Project settings** and open **Teams**. 

	> [!div class="mx-imgBorder"]
	> ![Open Project settings, and then Teams](media/safe-configure/open-project-settings-teams.png)

2. Choose **New team**. Give the team a name, and optionally a description. 

	Here we add the App team. Choose the team administrator and ensure the **Create an area path with the name of the team** checkbox is checked. Optionally add team members.  

	> [!div class="mx-imgBorder"]
	> ![Create a subteam with its own area path](media/safe-configure/add-team.png)

	Optional. If you have two or more Portfolio teams, create a team for each of them.   

::: moniker-end

::: moniker range="azure-devops"
	> [!TIP]   
	> If you have a large number of teams, you may want to use the [Azure DevOps team create](../../organizations/settings/add-teams.md#add-team-cli) command line tool. Or, you can also use the [Teams (REST API)](/rest/api/azure/devops/core/teams). 
::: moniker-end
::: moniker range="azure-devops-2019"
	> [!TIP]   
	> If you have a large number of teams, you may want to use the [Teams (REST API)](/rest/api/azure/devops/core/teams). 
::: moniker-end

::: moniker range="<= tfs-2018"

### Create and configure each Program team

1. From the Overview page for the project, create a new team. Make sure that you clear the checkbox for Create an area path with the name of the team.  

	![Create team](media/safe-create-team.png)  

2. Choose the team from the list, go to the Areas page, and select the check box next to the area path that you previously created for that team.  

	![Areas page, Program team, set default areas](media/safe-map-team-to-area.png)  

3. Use the context menu to exclude sub-areas. By excluding sub-areas, the team's backlog only includes those items whose Area Path matches the team's default area path.

	![Areas page for Program team, Exclude sub-areas](media/safe-exclude-sub-areas-for-fabrikam-fiber-suite.png)  

4. Next, configure the iterations that will be active for the program team. In this example, we have configured three PIs, each with five two-week sprints. Four of the sprints are regular sprints and the last sprint is an Innovation and Planning (IP) sprint.  
	![Iterations page, Program team](media/safe-map-team-iterations.png)  
  
	Because the Fiber Suite program team is concerned with Release Trains, we choose PI 1, 2, and 3, but we don't choose the individual sprints.

6. Once you've selected which iterations are active for the team, add users to the new team. Ideally, you would add the scrum masters for each feature team, product owners, as well as the Release Train Engineers (RTEs) to the program teams, such as Fiber Suite.  

	![Add team members](media/safe-add-team-members.png)  

6. If you've more than one team at the program level, repeat steps 1 through 4 for each program team. 

### Create and configure each Feature team

Next, we'll create some feature teams to get work done at the third level of the team hierarchy. Each feature team will contribute sprint work that rolls up into the PI. The number of teams you create will depend on the size of your organization.

1. Create a new team from the administration page for the original team, and name the team. Just like before, make sure you clear the check box next to **Create an area path with the name of the team**.

	![Create another team](media/safe-create-another-team.png)  

2. Just as before, choose the team from the list, go to the Areas page, and select the check box next to the area path that you previously created for that team.  

	![Set default area path for Migrate feature team](media/safe-configure-migrate-team-area-path.png)  

3. Configure iterations for the team, using the PIs and sprints you created earlier. Unlike the program teams, this time select the individual sprints as the working iterations for the feature team.  

	![Migrate team iterations](media/safe-configure-migrate-team-iterations.png)  

4. Lastly, add the accounts for the developers, testers, and the scrum master for the team. Your Agile tools support assigning a scrum master to multiple teams. The scrum master can track work across multiple teams.  

	![Migrate team members](media/safe-add-migrate-team-members.png) 

5. Repeat steps 1 through 4 for each feature team in your organization. Make sure that the default area path you configure for the team is sub-area path under its corresponding program-level area path. This ensures rollup from feature teams to program teams.


::: moniker-end

## Configure Area Paths 

To support your team hierarchy, you'll now configure the area paths created in the first step of defining teams into a hierarchy. 

::: moniker range=">=azure-devops-2019"

1. From the **Project Settings** page, choose **Project configuration** and then **Areas**. You should see a flat list of Area Paths. 

	> [!div class="mx-imgBorder"]
	> ![Flat list of area paths](media/safe-configure/area-paths-flat-list.png)

2. You'll want to choose each feature team's Area Path under the top Area Path and move it under the Area Path hierarchy to which it belongs. 

	For example, highlight the *App* Area Path, open the ![ ](../../media/icons/actions-icon.png) context menu, and choose **Edit**.   

	> [!div class="mx-imgBorder"]
	> ![Flat list of area paths](media/safe-configure/choose-edit-area-path.png)

3. Change the **Location** to *Fiber Suite*, it's parent program area path. 

	> [!div class="mx-imgBorder"]
	> ![Flat list of area paths](media/safe-configure/edit-area-dialog.png)
	
	Choose **Save and close** when done. 

3. Repeat steps 2 and 3 for the remaining feature team area paths. 

	If you have defined two or more portfolio teams, you'll need to change the move each program team's area path under their corresponding portfolio team's area path. 

3. When finished, your area path structure should appear similar to that shown in the following image.  

	> [!div class="mx-imgBorder"]
	> ![Hierarchical area path](media/safe-configure/team-area-path-mapping.png)

::: moniker-end

::: moniker range="azure-devops"
	> [!TIP]   
	> If you have a large number of area paths to add, you may want to use the [Azure DevOps area project create](../../organizations/settings/set-area-paths.md#add-area) command line tool. Or, you can also use the [Classification nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes).  
::: moniker-end
::: moniker range="azure-devops-2019"
	> [!TIP]   
	> If you have a large number of iteration paths to add, you may want to use the [Classification nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes). 
::: moniker-end

::: moniker range="<= tfs-2018"

1.  Connect to the project you want to configure to support SAFe, and use the gear icon ![Settings icon](../media/icons/gear_icon.png) to open the administration page for the default team.  
2.  On the **Areas** page, create a child under the top-level area path and name it to correspond to one of the program teams you'll create.

	![Create child area](media/safe-add-area-path.png)  

3.  Next, create a second area at the same child level, and name it after the second program team.  

4.  Under each program area, create a child area for each feature team that will support their respective program team. You should end up with a 3-level area path hierarchy.

	![Areas page, 9 area paths defined](media/safe-team-area-paths-added.png)  
::: moniker-end


## Define Iteration Paths  

To track progress towards Releases, create your iteration path structure. Unlike area paths, multiple teams can share the same iteration path structure. Sharing the iteration structure lets multiple teams work in the same sprint cadence towards the same release trains.  

If you already have iterations for your default team, you can rename them. You'll want to create an iteration structure that supports your entire team structure, not just one team.  


::: moniker range=">=azure-devops-2019"

1. From the **Project Settings** page, choose **Project configuration** and then **Iterations**.  

1. Under the default iteration, which shares the same name as the project, create a child iteration that will represent your first program increment (PI). Optionally, add a start and end date for the PI, but keep in mind that the iteration will be broken down further into sprints.

	> [!div class="mx-imgBorder"]
	> ![Hierarchical area path](media/safe-configure/define-pi1-iteration.png) 

2. Next, create a child iteration for each Sprint within the PI. Set dates for these sprints to correspond your feature teams' cadences.  

	> [!div class="mx-imgBorder"]
	> ![Iterations page, create IP Sprint iteration](media/safe-configure/define-sprint1-iteration.png)

3. Continue to add as many iterations as needed to meet the timebox cadence structure for all your teams. 

	When finished, you should have a structure similar to the following image. 

	> [!div class="mx-imgBorder"]
	> ![Iterations page, list of iterations](media/safe-configure/list-iterations.png)

::: moniker-end

::: moniker range="azure-devops"
	> [!TIP]   
	> If you have a large number of iteration paths to add, you may want to use the [Azure DevOps iteration project create](../../organizations/settings/set-iteration-paths-sprints.md#add-project-iteration) command line tool. Or, you can also use the [Classification nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes).  
::: moniker-end
::: moniker range="azure-devops-2019"
	> [!TIP]   
	> If you have a large number of iteration paths to add, you may want to use the [Classification nodes (REST API)](/rest/api/azure/devops/wit/classification%20nodes). 
::: moniker-end

::: moniker range="<= tfs-2018"

1. Under the default iteration, which shares the same name as the project, create a child iteration that will represent your first program increment (PI). Optionally, add a start and end date for the PI, but keep in mind that the iteration will be broken down further into sprints.

	![Create iterations](media/safe-create-iterations.png)

2. Next, create a child iteration for each Sprint within the PI. Set dates for these sprints to correspond your feature teams' cadences.  

	![Iterations page, create IP Sprint iteration](media/safe-view-of-iterations.png)

::: moniker-end

::: moniker range=">= azure-devops-2019"  
"
## Configure your teams 

3. Select the team to configure it. To select the set of sprints and area paths the team plans to use, choose **Iterations and areas** See [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md) and [Define iteration paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). 

	> [!div class="mx-imgBorder"]
	> ![Team profile, choose Iterations and areas link](../../organizations/settings/media/add-team/team-profile-choose-iterations-and-areas.png)

	> [!IMPORTANT]  
	> Team tools aren't available until the team's default area path is set. If you haven't created one or more Area Paths for the team to use, then [do that now](../../organizations/settings/set-area-paths.md). Area Paths must be created for the project first, then assigned to the team. 

	From the team profile, you can do these additional tasks:  
   - [Add team administrators](../../organizations/settings/add-team-administrator.md)
   - [Navigate to team notifications](../../notifications/howto-manage-team-notifications.md)
   - [Navigate to and set default team dashboard permissions](../../report/dashboards/dashboard-permissions.md)

To configure other team features, see [Manage teams and configure team tools](../../organizations/settings/manage-teams.md).


### Track bugs as requirements or tasks? 

::: moniker-end

::: moniker range="<= tfs-2018"

## Configure your teams

In this section, we'll show how to configure a hierarchical team structure which maps to the hierarchical area paths we created previously.
This structure maps the following SAFe teams to your Agile tools' teams:  
- Portfolio team -> default top-level team, the Fabrikam team  
- Program teams -> secondary-level teams, Fiber Suite and Service Suite  
- Feature teams -> tertiary-level teams defined under Fiber Suite and Service Suite.  
- 
  If you need more-detailed guidance, see [Portfolio management](portfolio-management.md).  

You'll need to be a [project administrator](../../organizations/security/add-users-team-project.md) to perform these steps. 

### Track bugs as requirements or tasks? 



### Create and configure each Program team

1. From the Overview page for the project, create a new team. Make sure that you clear the checkbox for Create an area path with the name of the team.  

	![Create team](media/safe-create-team.png)  

2. Choose the team from the list, go to the Areas page, and select the check box next to the area path that you previously created for that team.  

	![Areas page, Program team, set default areas](media/safe-map-team-to-area.png)  

3. Use the context menu to exclude sub-areas. By excluding sub-areas, the team's backlog only includes those items whose Area Path matches the team's default area path.

	![Areas page for Program team, Exclude sub-areas](media/safe-exclude-sub-areas-for-fabrikam-fiber-suite.png)  

4. Next, configure the iterations that will be active for the program team. In this example, we have configured three PIs, each with five two-week sprints. Four of the sprints are regular sprints and the last sprint is an Innovation and Planning (IP) sprint.  
	![Iterations page, Program team](media/safe-map-team-iterations.png)  
  
	Because the Fiber Suite program team is concerned with Release Trains, we choose PI 1, 2, and 3, but we don't choose the individual sprints.

6. Once you've selected which iterations are active for the team, add users to the new team. Ideally, you would add the scrum masters for each feature team, product owners, as well as the Release Train Engineers (RTEs) to the program teams, such as Fiber Suite.  

	![Add team members](media/safe-add-team-members.png)  

6. If you've more than one team at the program level, repeat steps 1 through 4 for each program team. 



### Create and configure each Feature team

Next, we'll create some feature teams to get work done at the third level of the team hierarchy. Each feature team will contribute sprint work that rolls up into the PI. The number of teams you create will depend on the size of your organization.

1. Create a new team from the administration page for the original team, and name the team. Just like before, make sure you clear the check box next to **Create an area path with the name of the team**.

	![Create another team](media/safe-create-another-team.png)  

2. Just as before, choose the team from the list, go to the Areas page, and select the check box next to the area path that you previously created for that team.  

	![Set default area path for Migrate feature team](media/safe-configure-migrate-team-area-path.png)  

3. Configure iterations for the team, using the PIs and sprints you created earlier. Unlike the program teams, this time select the individual sprints as the working iterations for the feature team.  

	![Migrate team iterations](media/safe-configure-migrate-team-iterations.png)  

4. Lastly, add the accounts for the developers, testers, and the scrum master for the team. Your Agile tools support assigning a scrum master to multiple teams. The scrum master can track work across multiple teams.  

	![Migrate team members](media/safe-add-migrate-team-members.png) 

5. Repeat steps 1 through 4 for each feature team in your organization. Make sure that the default area path you configure for the team is sub-area path under its corresponding program-level area path. This ensures rollup from feature teams to program teams.


### Configure the Portfolio team

Now that your sub-team structure is configured, we reconfigure the default team to act as the Portfolio team. While this team will continue to have the name of the project, the changes you make to this top-level team will help ensure that it effectively tracks epics across PIs at the highest level.  

1. On the Areas page for the project, change the settings so that sub-areas are not included. Make sure you choose the project and not the default team, Fabrikam.  

	![Areas page for Portfolio team, Exclude sub areas](media/safe-exclude-sub-areas-for-portfolio-team.png)  

2. On the Iterations page, clear the check boxes next to all iterations except for the root level, which cannot be cleared. Because the Portfolio team is only concerned with epics that span PIs, it only uses the root iteration and not the PIs or sprints. Portfolio teams don't work in sprints.  

	![Iterations page, Portfolio team](media/safe-PMO_Iterations-cleared.png)  

3. Lastly, add and remove users from the Portfolio team appropriate to this level. From the Overview page, choose the default team.  

	![Overview tab, choose default team](media/safe-overview-teams.png)   

	If you're following SAFe, you'll probably want to add portfolio managers, enterprise-level architects, and Release Train Engineers (RTEs) at this level and remove everyone else.

	![Overview page, Portfolio team members](media/safe-overview-portfolio-team-members.png)

::: moniker-end

## Update the Area Path for existing work items

For any existing work items to show up on a team's backlog, you must update the Area path of each work item to the team's default area path. You can use the bulk edit feature from your web browser or you can use Excel.  

1. Create a query that contains the work items you want to edit, select the ones you want to edit, and then open the context menu from any one of the selected items.  

	![Query results context menu](media/safe-bulk-modify-area-paths.png)   

2. Select the area path that corresponds to the team's default area path.  

	![Edit work items](media/safe-bulk-modify-area-paths-edit-dialog.png)   

3.  Bulk save all work items that you modified.

	![Bulk save edited work items](media/safe-bulk-modify-area-paths-bulk-save.png)  

	For more info on bulk modifying work items, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md).

## Add epics and map epics to features

You add epics in the same way you add user stories and features. From the Portfolio team's backlog page for epics, add an epic backlog item.

![Epic backlog, add an epic using quick add panel](media/safe-add-epics.png)   

Add as many epics as you need. Drag them to reorder them and have them listed in their order of importance.

![Epic backlog, reorder items](media/safe-reorder-epics.png)   

The default Business Value for epics is Business, but you can change this to Architectural by opening the form.  

![Epic work item form](media/safe-epic-form.png)  

You can also add tags to your epics, to help you track the investment themes each epic supports.  

![Epic work item form, add tags](media/safe-add-tags-to-epic.png)

Now view your epics on the Kanban board. To get this view, you need to [customize the Kanban columns to rename and add intermediate workflow states](../boards/add-columns.md). For a description of these states&mdash;Funnel, Review, Analysis, Portfolio Backlog, and Implementing (not shown)&mdash;see [Business Epic Kanban Abstract](http://scaledagileframework.com/business-epic-kanban/).

![Epic kanban board with custom columns](media/safe-kanban-custom-columns.png)

However, this is not very interesting yet. Nothing is in progress, and you can't drill down to see which features support your epics. You'll want to map existing features to the epics you just created, and map user stories to those features, if they're not already mapped.  

## Map multiple items if you've an existing backlog 

Mapping work items is easy using the mapping pane. First, turn on the mapping pane from the features or stories backlog page. Here, we choose the Fiber Suite team and turn on both the mapping pane and the view to see the hierarchy of features mapped to epics.

![Map features to epics](media/safe-map-features-to-epics.png)

Note that if you've already changed the area path of all your features to the appropriate program-level team, the features list will be empty, because the Portfolio team does not own any features! In that case, switch to one of the program teams.  

Drag items from the backlog onto the item you want to associate as a parent. Keep in mind that you can only map features to epics. Similarly, you can only map the third level of backlog item (whether that is user story, backlog item, or requirement) to features. 

Repeat this process at each backlog level until you've created the hierarchy you want. 

![Epics-to-stories view](media/safe-portfolio-progress-view-epics-to-stories-any-team.png)  

What about features already in progress? They definitely won't appear on the Portfolio team's backlog. They are the responsibility of the program teams, so they appear on that team's backlog. (This is actually a function of the area path set for the work item; a work item will only appear on a team's backlog if you assign it to the area path you created for that team.) You can map them from there.  

You can also [bulk edit work items and manage their hierarchy in Microsoft Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).  

Since an important aspect of SAFe is to map work to business or architecture goals, you'll want to make sure to set the Value Area=Architectural for any feature mapped to an architecture epic. (Because the default choice is Business, you don't have to change the field for any item that supports a business epic.) You can also add tags to track the investment.  

The same principles apply to user stories in progress. You can map them to features, change the requirement type to Architecture for work that you do to support architectural epics, and add tags for tracking themes.  

![User Story work item form](media/safe-user-story-new-form.png)  



## Try this next

> [!div class="nextstepaction"]
> [Customize Azure Boards to support SAFe&reg; ](safe-customize.md)



## Related articles

- [Add teams](../../organizations/settings/add-teams.md)
- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)
- [Define iteration paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 
- [Azure DevOps CLI](/cli/azure/ext/azure-devops/)  
- [Teams (REST API)](/rest/api/azure/devops/core/teams)  
