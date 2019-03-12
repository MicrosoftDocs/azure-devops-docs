---
title: Review team delivery plans 
titleSuffix: Azure Boards
description: Add & use plans to review scheduled multi-team deliverables in Azure Boards, Azure DevOps, & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 3B41D55E-B7B1-41B1-B68F-7A83BA2890A5  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2017'
ms.date: 02/14/2019
---



# Review team Delivery Plans 

[!INCLUDE [temp](../_shared/version-vsts-tfs-2017-on.md)]

Use the visualization options provided by Delivery Plans to review the schedule of stories or features your teams plan to deliver. Delivery Plans show the scheduled work items by sprint (iteration path) of selected teams against a calendar view.

Delivery plans is also interactive. You can change the assigned sprint of a work item by dragging it to a new sprint as shown in the following image. 
 
> [!div class="mx-imgBorder"]  
> ![Moving a card to a different iteration](_img/plans_move1.png)

Use Delivery Plans to ensure your teams are aligned  with your organizational goals. You can view multiple backlogs and multiple teams across your whole account. You can interact with the plan with simple drag-and-drop operations to update or modify the schedule.  

In this article you'll learn:

>[!div class="checklist"]   
> - How to review a plan with your teams
> - How to add and edit a plan
> - How to add field criteria, customize cards, and add markers
> - How to open a plan from the list of defined plans 
> - How to work with the interactive elements of plans and change the plan view
> - What permissions are required to create and view plans  


## Prerequisites

::: moniker range="azure-devops"  

- In order to add and configure a Delivery Plan, you must have the following in place:  
	- [Installed the Delivery Plans extension](#install-plans).  
	- Be a member of a project and granted [Basic access or greater access level](../../organizations/security/access-levels.md).  Users granted **Stakeholder** access for private projects cannot add nor view plans. Users granted **Stakeholder** access for a public project can add and view plans.
	- [Configured teams](../../organizations/settings/add-teams.md)
	- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)
	- [Define iteration paths (aka sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 
	- Teams have defined [user stories](../backlogs/create-your-backlog.md), features, or other product or portfolio backlogs and assigned those items to iterations.  
- To view a Delivery Plan, you must be a member of the Project Collection Valid Users group. Members of the project's Readers group are valid users. Users with Stakeholder access for a private project can't view or add plans.  
- To manage permissions for a Delivery Plan or edit or delete a plan, you must be the creator of the plan, a member of the Project Administrators or Project Collection Administrators group, or granted explicit permission through the plan's Security dialog. For details, see [Edit or manage Delivery Plan permissions](edit-delivery-plan-permissions.md).  

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"  

- In order to add and configure a Delivery Plan, you must have the following in place:  
	- [Installed the Delivery Plans extension](#install-plans).  
	- Be a member of a project and granted [Basic access or greater access level](../../organizations/security/access-levels.md). Users granted **Stakeholder** access cannot add nor view plans.
	- [Configured teams](../../organizations/settings/add-teams.md)
	- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)
	- [Define iteration paths (aka sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 
	- Teams have defined [user stories](../backlogs/create-your-backlog.md), features, or other product or portfolio backlogs and assigned those items to iterations.  
- To view a Delivery Plan, you must be a member of the Project Collection Valid Users group. Members of the project's Readers group are valid users. Users with Stakeholder access for a private project can't view or add plans.  
- To manage permissions for a Delivery Plan or edit or delete a plan, you must be the creator of the plan, a member of the Project Administrators or Project Collection Administrators group, or granted explicit permission through the plan's Security dialog. For details, see [Edit or manage Delivery Plan permissions](edit-delivery-plan-permissions.md).  

::: moniker-end



<a id="install-plans">  </a>
### Install the Delivery Plans extension 

The Delivery Plans extension is free to install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans), Azure DevOps tab. 

::: moniker range="tfs-2017" 
Installation of Delivery Plans requires TFS 2017.2 or later version.
::: moniker-end

## Review a plan with your teams

It takes several teams to develop large software projects. Very large projects require multiple autonomous teams (review [Agile culture](agile-culture.md) for a discussion of autonomous teams and organizational alignment). Autonomous teams manage their own backlog and priority which contributes to a unified direction for that project.

Regular reviews of the project schedule with these teams help ensure that the teams are working toward common goals. Delivery Plans provide the needed multi-team view of your project schedule. 

Some questions you might address during the review: 
- *How confident are the teams in meeting the deliverables scheduled for each sprint?* 
- *Are dependencies across teams adequately addressed via the planned deliverables?* 
- *Are there gaps in the schedule, where no deliverables are scheduled? What's the cause? Can this be mitigated?*  

For example, we use Delivery Plans internally to share the schedule of Features. By seeing the work many teams have planned for the next 3 sprints, we can easily discuss whether these are the right priorities and if dependencies exist. 

In this way, a Delivery Plan is a driver of alignment while allowing each team to retain a strong sense of autonomy. Individual teams can work to different sprint cadences, if needed, and manage different work item types&mdash;stories, features, or epics. Their work is all visible with the same plan view. Teams can even be part of different projects if they use different processes. You can also customize the card fields so that you only see the data fields of interest and applicable per work item type.  

    
## Add a plan  

Once you have [installed Delivery Plans](#install-plans), the **Plans** appears under **Work**.

::: moniker range=">= azure-devops-2019"  

0. Open **Boards>Plans**. 

	> [!div class="mx-imgBorder"]  
	> ![Open work>Plans, new nav](_img/plans/open-plans-vert.png) 

0. To add a plan, choose **New Plan** . 

	> [!div class="mx-imgBorder"]  
	> ![Add a plan](_img/plans/add-plan.png) 

	All users, except users [assigned Stakeholder access](../../organizations/security/change-access-levels.md), have permissions to create a plan and manage the plans they create. To manage permissions for a plan, see [Set permissions and access for work tracking, Manage or edit Delivery Plans](../../organizations/security/set-permissions-access-work-tracking.md#plan-permissions).  

0. Fill in the form to name, describe, and specify the team backlogs that you want to appear within your plan.    

	> [!div class="mx-imgBorder"]  
	> ![Add a plan](_img/plans/new-delivery-plan-dialog.png)  
::: moniker-end  


::: moniker range=">= tfs-2017 <= tfs-2018"  

0. Open **Boards>Plans**. 

	> [!div class="mx-imgBorder"]  
	> ![Open work>Plans, previous nav](_img/plans/open-plans-horz.png) 

0. To add a plan, choose **New Plan** . 

	![Add a plan](_img/review-team-plans-no-plans-defined.png)  

	All users, except users [assigned Stakeholder access](../../organizations/security/change-access-levels.md), have permissions to create a plan and manage the plans they create. To manage permissions for a plan, see [Set permissions and access for work tracking, Manage or edit Delivery Plans](../../organizations/security/set-permissions-access-work-tracking.md#plan-permissions).  

0. Fill in the form to name, describe, and specify the team backlogs that you want to appear within your plan.    
	> [!div class="mx-imgBorder"]  
	> ![Add a plan](_img/plans/new-delivery-plan-dialog.png) 

::: moniker-end

When defining a plan, note the following:  
- Use the name and description field to clearly identify your plan within the project 
- You can choose one or more teams from any project defined in the organization or collection  
- You can choose one or more [active backlogs for a team](../../organizations/settings/select-backlog-navigation-levels.md)
- The order in which you enter the teams and team backlogs defines the order in which they'll appear in the plan 
-  To limit the number or types of work items, specify the field criteria.

<a id="card-settings">  </a>
## Edit a plan, add field criteria, customize cards, and add markers 

Once you've defined a plan, you can further customize it. 

1. Choose the ![ ](_img/plans/gear-icon.png) gear icon to open the Settings dialog. 

2. Then, choose the page you want to edit. You can customize the plan in the following ways: 
	- Edit the teams you've selected and their backlog level  
	- Set field criteria to further limit the work items that will appear on the plan 
	- Add markers to show important upcoming events on your timeline 
	- Customize the fields that display on the cards, similar to how you [customize them for your Kanban or taskboard](../../boards/boards/customize-cards.md).  

	Here, we add the Tags field criteria. Only work items that contain the *RC Review* tag will appear in the Delivery Plan. 

	<img src="_img/review-team-plans-set-field-criteria.png" alt="Settings dialog, Fields page" style="border: 2px solid #C3C3C3;" />

3. To set a marker, open the Markers page, specify a date and select a color. 	

	<img src="_img/review-team-plans-set-markers.png" alt="Settings dialog, Fields page" style="border: 2px solid #C3C3C3;" />

	Markers appear on the plan as shown: 

	<img src="_img/review-team-plans-show-markers.png" alt="Plans, Markers appear on calendar slide" style="border: 2px solid #C3C3C3;" />

## View the list of plans, open a plan  

Once you've defined a few plans, you'll see them listed from the Plans page under All, or the ones you've clicked a Favorite star under Favorites. You can see their title, description and their most recent creator/editor. 

Use the favorite's star to favorite a plan so that you can quickly return to that plan. You can also search for other plans in the project.

To open a plan, simply choose the plan name.  

## Interactive elements of plans, change the plan view  
 
Each team's backlog specified in a Delivery Plan appears as a row within the plan view. When collapsed, a roll-up of the backlog items shows. When expanded, a card for each backlog item appears, organized by their assigned iteration. 

<img src="_img/plans_view2.png" alt="Interactive plan elements" style="border: 2px solid #C3C3C3;" />

You can interact with the plan in the following ways: 
- Scale the size of the cards (enter **+** or **-** to also scale) 
- Scroll the view horizontally via the calendar to view previous months or future months (Enter **Shift-left** or **Shift-right** to scroll) 
- You can also scroll the plan via click and dragging your mouse.
- Scroll the view vertically to view teams that appear lower within the plan view   
- Click a card to view the details of a backlog item  
- Expand or collapse a single team row to view details for that team by clicking the team name or team sprint 
- Expand and collapse all team rows (Enter **u** to collapse, **o** to expand all rows) 
- Enter **t** to quickly toggle fields shown on cards to just the Title or all other card field settings 
- Click the ![Settings gear icon](../_img/icons/team-settings-gear-icon.png) settings gear to edit the plan and [change the fields displayed on the cards](#card-settings).   

For a list of all keyboard shortcuts, see [Keyboard shortcuts to interact with delivery plans](delivery-plan-keyboard-shortcuts.md).  

<!--- QUESTION: What determines the order of team rows? --> 

In the following example, Team 1 features expanded, two items are scheduled for delivery in Sprint 50. 

<img src="_img/review-tp-show-team-1.png" alt="Team rows in plans" style="border: 2px solid #C3C3C3;" />

You can also quickly see that:  
* Team 1 is currently working on Sprint 50 deliverables
* Sprint 50 began on December 14th and is scheduled to end December 25th. 
* The team expects to deliver the two features shown by the cards.


A benefit of Delivery Plans is to view multiple teams across your projects that you care about. Two main ways to view more teams within the plan view is to collapse all teams to focus on summary data and to minimize the number of fields displayed on cards. 

### Collapse teams for summary information

To gain a summary view of work that is schedule, collapse all teams. You can then more easily look for gaps in the forward forecast.

For example, here you can see the count of Features for Team 1 for the next 3 sprints. You can collapse/expand team rows by clicking the team name or the sprint name.

> [!div class="mx-imgBorder"]  
> ![Collapse click targets](_img/plans_view4.png)  

### Minimize the fields displayed on cards  

To quickly change the cards to only show their Title, enter the keyboard shortcut 't'. This will hide all other fields, as shown in the following image, the Assigned to field no longer appears. To persist this view, edit the [plan's settings for card fields](#card-settings).

> [!div class="mx-imgBorder"]  
> ![Cards showing the Title only](_img/plans_view5.png)   

### Update the iteration for a backlog item 

As changes occur to the schedule, you can update the iteration for a backlog item by moving a card to a different iteration. This will help to drive alignment across your organization.

> [!div class="mx-imgBorder"]  
> ![Move a card to a different iteration](_img/plans_move1.png)


## Related articles  

For additional resources for working with multiple teams, see these additional topics: 

- [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)  
- [Add teams](../../organizations/settings/add-teams.md)  
- [Portfolio management](portfolio-management.md)  
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  
- [Delivery plan keyboard shortcuts](delivery-plan-keyboard-shortcuts.md)  


<a id="plans-rest-api">  </a>
### Programmatically manage Delivery Plans  
You can manage plans using the [REST API, Plans](/rest/api/azure/devops/work/plans).


 
