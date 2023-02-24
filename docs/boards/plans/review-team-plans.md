---
title: Review team delivery plans in Azure Boards
titleSuffix: Azure Boards
description: Learn how to add, edit, and use delivery plans in Azure Boards to review multiple-team deliverables, rollups, and dependencies  
ms.service: azure-devops-boards
ms.assetid: 3B41D55E-B7B1-41B1-B68F-7A83BA2890A5  
ms.author: chcomley
author: KathrynEE
ms.topic: tutorial
ms.custom: cross-project  
monikerRange: '>= azure-devops-2022'
ms.date: 08/09/2022
---


# Review team delivery plans in Azure Boards

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)] 

Use the visualization options provided by the Delivery Plans feature of Azure Boards to review the schedule of stories or features that your teams plan to deliver. A delivery plan shows the scheduled work items by sprint (iteration path) of selected teams against a calendar view.

> [!NOTE]   
> This article describes using Delivery Plans 2.0, which is available for Azure DevOps Services and Azure DevOps Server 2022. For information on the Delivery Plans Marketplace extension that supports Azure DevOps Server 2020 and earlier versions, see [Delivery Plans 1.0](../extensions/delivery-plans.md). 

Use the Delivery Plans feature to ensure that your teams are aligned with your organizational goals. You can view multiple backlogs and multiple teams across your whole account. Interact with the plan by using simple drag-and-drop operations to update or modify the schedule, open cards, expand and collapse teams, and more. 

Delivery Plans supports these tasks: 

- View up to 20 team backlogs, including a mix of backlogs and teams from different projects.
- Add custom portfolio backlogs and epics. 
- View work items that span several iterations.
- Reset start date and target date through drag-and-drop borders. 
- Add backlog items to a team from a plan.   
- View rollup progress of features, epics, and other portfolio items.
- View dependencies that exist between work items. 
- Enable stakeholders to view plans.
 
Any plan that you created with the original Delivery Plans extension works with the Delivery Plans feature. You don't have to migrate any data or reconfigure plan settings. To learn how to add or edit a plan, see [Add or edit a delivery plan](add-edit-delivery-plan.md). 

> [!div class="mx-imgBorder"]  
> ![Screenshot of a feature roadmap in Delivery Plans.](media/plans/intro-image.png)

In this article, you'll learn how to:

> [!div class="checklist"]   
> - Open a plan from the list of defined plans. 
> - Review a plan with your teams.
> - Use the interactive elements of plans and change a plan view.
> - View rollups.  

For information on working with dependencies, see [Track dependencies](track-dependencies.md). 


## Prerequisites

- To view a delivery plan, you must be a member of the Project Collection Valid Users group. Users granted **Stakeholder** access for a private project can view plans. Users granted **Stakeholder** access for a public project can add and view plans.  
- To open or modify a work item or add work items to a plan, you must have **Edit work items in this node** set to **Allow** for the area paths assigned to the work item. For details, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path).


For work items and dependency lines to appear on the plan:

- Work items must belong to a team's [product backlog](../backlogs/create-your-backlog.md) or [portfolio backlog](../backlogs/define-features-epics.md). Only work items that belong to a category selected for viewing on a team's backlog appear on the plan. 
- [Team product or portfolio backlog must be enabled](../../organizations/settings/select-backlog-navigation-levels.md). 
- [Sprints must be selected for each team](../../organizations/settings/set-iteration-paths-sprints.md#select-team-sprints-and-set-the-default-iteration-path) defined in the plan.
- [Start and end dates](../../organizations/settings/set-iteration-paths-sprints.md#add-iterations-and-set-iteration-dates) must be defined for each iteration.
- [Iteration paths](../sprints/assign-work-sprint.md) must be assigned to each work item.  
- For dependency icons and lines to show, [work items must be linked](../backlogs/add-link.md) via the **Predecessor-Successor** link type or other custom dependency link type. (Remote link types are not supported.) You can add custom link types only for on-premises environments.

> [!TIP]  
> If you edit a plan and the changes that you make don't seem to appear in the plan, refresh your browser. A browser refresh is sometimes needed to trigger the updates.  


## Review a plan with your teams

It takes multiple autonomous teams to develop large software projects. Autonomous teams manage their own backlog and priority, which contributes to a unified direction for that project. Review [Agile culture](agile-culture.md) for a discussion of autonomous teams and organizational alignment. 

Regular reviews of the project schedule with these teams help ensure that the teams are working toward common goals. Delivery plans provide the needed multiple-team view of your project schedule. 

Questions that you might address during the review include: 

- *How confident are the teams in meeting the deliverables scheduled for each sprint?* 
- *Are dependencies across teams adequately addressed via the planned deliverables?* 
- *Are there gaps in the schedule, where no deliverables are scheduled? What's the cause? Can the issue be mitigated?*  

For example, you might use delivery plans internally to share the schedule of features. By seeing the work that many teams have planned for the next three sprints, you can easily see if a plan has the right priorities and spot dependencies. 

In this way, a delivery plan is a driver of alignment while letting each team remain autonomous. Individual teams can work to different sprint cadences, if needed, and manage different work item types (stories, features, or epics). Their work is all visible with the same plan view. Teams can even be part of different projects if they use different processes. Customize the card fields so that you see only the data fields that interest you and that apply for each work item type.  

## Best practices for using a delivery plan

- Determine how you want to use the delivery plan. Some ideas are: 
	- Review quarterly plans for features to be delivered.
	- Sync up monthly with several teams that have dependencies. 
	- Review cross-project deliverables and identify dependencies. 
- Use a consistent sprint schedule across your project teams and organization when possible. Although the plan can accommodate a variety of sprint schedules, it adds to visual clutter. Use the same sprints for backlogs, features, and epics. Don't create specific sprints for epics or other portfolio backlogs. 
- Use **Start Date** and **Iteration** to specify the time frame for a work item. Or, use **Start Date** and **Target Date**. However, don't specify both **Iteration** and **Target Date** for a work item. **Target Date** will always override the **Iteration** end date on the plan.
- Minimize the number of fields that you choose to display on your cards.  
- Eliminate cross-team ownership of area paths. Cross-team ownership of area paths can lead to undesirable edge cases.  
- Keep your work items up to date. When changes occur, update the target dates or iteration paths. 

Note the following items: 

- Plan views display the set of months that correspond to the iteration paths selected by the teams whose backlogs appear in the plan. 
- Plan views are limited to a maximum of 15 teams or backlogs.
- Zooming out can cause fields and tags to disappear from the cards. The farther you zoom out, the harder it is to fit items on a card. Certain items might be hidden, depending on the zoom level.  
-  Rollup isn't supported for child work items that belong to a different project than that of the originating parent work item.  
- If **Start Date** or **Target Date** is missing from a work item, you can add it to the custom process defined for the project, as discussed in [Add and manage fields (inheritance process)](../../organizations/settings/work/customize-process-field.md#add-an-existing-field-to-another-wit).

## Open a plan  

After you've defined a few plans, you'll see them listed on the **Plans** page under **All**. Or you'll see the ones you've favorited under **Favorites**. You can see their title, description, and most recent creator/editor. 

Use **Add to favorites** :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: to favorite a plan so that you can quickly return to that plan. You can also search for other plans in the project. 

To open a plan, open **Boards** > **Delivery Plans** and choose the plan name. You can sort by any of the columns: **Name**, **Created By**, **Description**, **Last configured**, or **Favorites**.   

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the Delivery Plans area in Azure Boards.](media/plans/open-plans.png) 

## Interact with a plan
 
Each team's backlog specified in a delivery plan appears as a row within the plan view. When a row is collapsed, a rollup of the backlog items appears. When a row is expanded, a card for each backlog item appears, organized by its assigned iteration. 

:::image type="content" source="media/plans/overview-with-callouts.png " border="false" alt-text="Screenshot with callouts of delivery plans and collapsed teams.":::   

> [!TIP]    
> Work items appear in the [prioritized order](../backlogs/create-your-backlog.md#reorder-your-backlog) listed for the sprint backlog, which inherits the priority from the product backlog. 

You can interact with the plan in the following ways:  

- Filter the plan by selecting **Filter** :::image type="icon" source="../../media/icons/filter-icon.png" border="false":::. You can filter on any field that you include in the plan. Settings are based on the keyword or text filter. For more information, see [Interactively filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md).
- Scale the size of the cards and calendar by selecting **Zoom out** :::image type="icon" source="media/plans/collapse-calendar-icon.png" border="false"::: or **Zoom in** :::image type="icon" source="media/plans/expand-calendar-icon.png" border="false":::.
- To view previous or future months, select **Scroll calendar left** :::image type="icon" source="media/plans/scroll-calendar-left-icon.png" border="false"::: or **Scroll calendar right** :::image type="icon" source="media/plans/scroll-calendar-right-icon.png" border="false":::. You can also scroll through the plan by selecting the plan and dragging your mouse horizontally.
- To view details for a team, expand the team row by selecting **Expand team row** or by clicking once on a sprint within a team row.  
- To expand and collapse all team rows, select **Expand all team rows** or **Collapse all team rows** next to **Teams**.  
- Scroll the view vertically to view teams that appear lower within the plan view. 
- To view titles only, select **Collapsed card fields** :::image type="icon" source="media/plans/collapsed-card-fields-icon.png" border="false":::. To view all fields, select **Expand card fields** :::image type="icon" source="media/plans/expand-card-fields-icon.png" border="false":::.  
- Select a card title to open the backlog item and view details. Close the work item to return to the plan.   
- To add a work item to a sprint, select **Add item** :::image type="icon" source="media/plans/add-item-icon.png" border="false":::  within the sprint and team that you want to add it to. 
- To [change the fields displayed on the cards](add-edit-delivery-plan.md#fields), select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false":::. 


## Collapse teams for summary information

A benefit of Delivery Plans is the ability to view multiple teams across the projects that you care about. There are two main ways to view more teams within the plan view:

* Collapse all teams to focus on summary data. 
* Minimize the number of fields displayed on cards.

To gain a summary view of work that's scheduled, collapse all teams. You can then more easily look for gaps in the forecast.

Expand or collapse each team row by selecting **Expand team row** or **Collapse team row** next to the team name.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the collapsing of click targets.](media/plans/overview.png)  

## Show work that spans one or more iterations

For work items that span one or more iterations, define **Start Date** and **Target Date**. The plan displays cards that start and end according to the dates that you set, as shown in the following image. You can also grab the left or right border of a work item and drag it to a new start date or target date. 

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows features that span iterations.](media/plans/features-span-iterations-preview.png)  

## View titles only in the collapsed card view 

The collapsed card view allows you to quickly switch back and forth between cards that show titles only and cards that show all fields configured for the plan. To view titles only, select **Collapsed card fields** :::image type="icon" source="media/plans/collapsed-card-fields-icon.png" border="false":::. To view all fields, select **Expand card fields** :::image type="icon" source="media/plans/expand-card-fields-icon.png" border="false":::.  

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the location of feature icons for collapsing and expanding card fields.](media/plans/collapse-card-fields.png)  

## View the rollup of features and epics 

A rollup displays a fuller picture of the underlying work directly on the cards in your delivery plan. Rollup views are available for features, epics, or any portfolio backlog you've added to your project. To enable rollups, open your plan settings, select **Fields**, and then select **Show child rollup data**.

For example, here's a plan view of four scenarios with a rollup of the child features, user stories, and bugs for a single team.   

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows a rollup view of four scenarios.](media/plans/rollup-view.png)  

You can also view rollups from a backlog view, as described in [Display rollup progress or totals](../backlogs/display-rollup.md).

## Update the iteration for a backlog item 

As changes occur to the schedule, you can update the iteration for a backlog item. Move a card to a different iteration. This change helps drive alignment across your organization.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows moving a card to a different iteration.](media/plans/move-card-iteration.png)

## Print a delivery plan 

You can print all or a portion of your delivery plan, depending on the view that you want to capture and share. You can print only one page at a time by using your browser's **Print** feature. 

Here are some tips for printing portions of a plan: 

- Select **Full screen mode** :::image type="icon" source="../../media/icons/full-screen-mode.png" border="false":::. 
- Expand or collapse one or more teams and zoom in or out to get the view that you want. 
- Take a screenshot of the plan view, or select the **Print** function of your browser. 

## Related articles  
 
- [Add or edit a delivery plan](add-edit-delivery-plan.md)
- [Track dependencies by using Delivery Plans](track-dependencies.md)
- [Interactively filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md)
- [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)  
- [Add teams](../../organizations/settings/add-teams.md)  
- [Portfolio management](portfolio-management.md)  
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  
 
