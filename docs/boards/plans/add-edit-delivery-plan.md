---
title: Add or edit a Delivery Plan 
titleSuffix: Azure Boards
description: Learn how to add or edit a Delivery Plan 
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: 'azure-devops'
ms.date: 05/03/2021
---



# Add or edit a Delivery Plans 

[!INCLUDE [temp](../includes/version-all.md)] 


> [!div class="checklist"]   
> - Open a plan from the list of defined plans 
> - Add and edit a plan
> - Add field criteria, customize cards, and add markers

## Prerequisites

- To add or edit a Delivery Plan, you must be a member of the Contributors group for the project where you add the plan. 
- To add team backlogs to a plan, you must have view permissions to those projects. 
- To view a Delivery Plan, you must be a member of the Project Collection Valid Users group. Users granted **Stakeholder** access for a private project can view plans. Users granted **Stakeholder** access for a public project can add and view plans. 
- To manage permissions for a Delivery Plan or edit or delete a plan, you must be the creator of the plan, a member of the Project Administrators or Project Collection Administrators group, or granted explicit permission through the plan's Security dialog. For details, see [Edit or manage Delivery Plan permissions](edit-delivery-plan-permissions.md).  
 
## Before you define a plan

To add and configure a Delivery Plan, the following elements must be configured:
- [Teams and team backlogs](../../organizations/settings/add-teams.md)
- [Area paths and team area paths assignments](../../organizations/settings/set-area-paths.md)
- [Iteration (sprint) paths and team iterations](../../organizations/settings/set-iteration-paths-sprints.md). Iteration Paths must be assigned Start and End Dates or they won't appear on the plan. Also, Iteration Paths must be selected for the team whose backlogs you select, or work items associated with those Iteration Paths won't appear on the plan.   
- Teams have defined [product backlog items](../backlogs/create-your-backlog.md), or [portfolio backlogs](../backlogs/define-features-epics.md) and assigned those items to either a **Start Date** and **End Date** or an **Iteration Path**.   
- Team Backlog settings have enabled the backlogs to show in the delivery plans. To learn more, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).

 

## Add a plan  

1. Open **Boards>Delivery Plans**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot to Open Boards>Plans.](media/plans/open-plans.png) 

1. To add a plan, choose **New Plan**. 

	> [!div class="mx-imgBorder"]  
	> ![Choose New Plan button.](media/plans/add-plan-new-plan-button.png) 

	All users have permissions to create a plan and manage the plans they create.   
2. Fill in the form to name, describe, and specify the team backlogs that you want to appear within your plan. You can add up to 15 teams to a plan.   

	> [!div class="mx-imgBorder"]  
	> ![New delivery plan dialog.](media/plans/new-delivery-plan-dialog.png)  

When defining a plan, note the following:  
- Use the name and description field to clearly identify your plan within the project 
- You can choose one or more teams from any project defined in the organization or collection, up to a maximum of ten teams   
- You can choose one or more [active backlogs for a team](../../organizations/settings/select-backlog-navigation-levels.md) 
	> [!NOTE] 
	> If you aren't able to select a backlog level, check the Team Backlog settings to ensure the backlog level is enabled for the team. To learn more, see [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).
- You can reorder the team backlogs by dragging and dropping them into the sequence you want 
-  To filter for specific work items, specify the field criteria. For example, to exclude bugs from the view, add the following criteria: `Work Item Type <> Bug`. 

<a id="card-settings">  </a>

## Edit a plan 

Once you've defined a plan, you can further customize it. 

1. Choose the **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: to open **Plans settings** dialog. 

2. Then, choose the page you want to edit. You can customize the plan in the following ways: 
   - Edit the teams you've selected and their backlog level  
   - Set field criteria to further limit the work items that will appear on the plan 
   - Add markers to show important upcoming events on your timeline 
   - Customize the fields that display on the cards, similar to how you [customize them for your Kanban or taskboard](../../boards/boards/customize-cards.md).  
     > [!NOTE]  
     > You can't add rich-text (HTML) fields, such as the Description field, to a card even if it appears in the list. These field types represent to many challenges to format on a card.  
 
  Here, we add the **Tags** field criteria. Only work items that contain the *RC Review* tag will appear in the Delivery Plan. 

  :::image type="content" source="media/plans/plan-settings-field-criteria.png" border="true" alt-text="Plan settings dialog, Field criteria page":::   

3. To set a marker, open **Markers**, specify a date and specify a hexadecimal color, or simply choose the color palette icon to change to a new color selected by the system.  	

     :::image type="content" source="media/plans/plan-settings-markers.png" border="true" alt-text="Screenshot to Open the Markers page, specify a date and select a color.":::   

	Markers appear on the plan as shown: 

     :::image type="content" source="media/plans/markers.png" border="true" alt-text="Screenshot pf Plans, Markers appear on calendar.":::   


## Related articles  

- [Review team plans](review-team-plans.md)
- [Edit Delivery Plan permissions](edit-delivery-plan-permissions.md)
- [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)  
- [Add teams](../../organizations/settings/add-teams.md)  
- [Portfolio management](portfolio-management.md)  
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  
 