---
title: Use team delivery plans
titleSuffix: Azure Boards
description: Learn how to plan, review, and use delivery plans in Azure Boards to track multiple team deliverables, rollups, and dependencies.
ms.service: azure-devops-boards
ms.assetid: 3B41D55E-B7B1-41B1-B68F-7A83BA2890A5  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
ms.custom: cross-project  
ai-usage: ai-assisted
monikerRange: '>= azure-devops-2022'
ms.date: 10/21/2025
---

# Use team delivery plans in Azure Boards

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)] 

Delivery Plans in Azure Boards let you visualize and review the Stories or Features that your teams plan to deliver. A delivery plan shows selected teams' scheduled work items by sprint or iteration path in a calendar view.

You can review multiple backlogs and teams across your Azure DevOps organization to ensure alignment with organizational goals. You can interact with the plan by updating or modifying the schedule using drag-and-drop, expanding or collapsing cards and teams, adding and editing work items, and changing views.

Delivery Plans supports the following tasks:

- View up to 20 team backlogs, including a mix of backlogs and teams from different projects.
- Add custom portfolio backlogs and Epics.
- View work items spanning several iterations.
- Reset start and target dates using drag-and-drop.
- Add or edit backlog items directly from the plan.
- View rollup progress of Features and Epics.
- View dependencies between work items. For information on working with dependencies, see [Track dependencies in Delivery Plans](track-dependencies.md).
- Allow stakeholders to view plans.
 
Any plan that you created with the original Delivery Plans extension works with the Delivery Plans feature. You don't have to migrate any data or reconfigure plan settings. For more information, see [Add or edit a delivery plan](add-edit-delivery-plan.md). 

:::image type="content" source="media/plans/intro-image.png" alt-text="Screenshot of a feature roadmap in Delivery Plans.":::

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Access levels** | To view a delivery plan: Member of the **Project Collection Valid Users** group. Users granted **Stakeholder** access for a private project can view plans. Users granted **Stakeholder** access for a public project can add and view plans. |
| **Permissions** | To open or modify a work item or add work items to a plan: **Edit work items in this node** permission set to **Allow** for the area paths assigned to the work item. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path). |
| **Configuration** | An existing delivery plan that meets the following requirements:<br>- Work items belonging to the team's [product backlog](../backlogs/create-your-backlog.md) or [portfolio backlog](../backlogs/define-features-epics.md). Only work item types selected for viewing on a team's backlog appear on the plan.<br>- [Team product or portfolio backlog enabled](../../organizations/settings/select-backlog-navigation-levels.md).<br> - [Sprints selected for each team](../../organizations/settings/set-iteration-paths-sprints.md#select-team-sprints-and-set-the-default-iteration-path) defined in the plan.<br>- [Iteration paths](../sprints/assign-work-sprint.md) assigned to each work item, and [start and end dates](../../organizations/settings/set-iteration-paths-sprints.md#add-iterations-and-set-iteration-dates) defined for each iteration.<br>- For dependency icons and lines to show: [work items linked](../backlogs/add-link.md) via the **Predecessor**, **Successor**, or other custom dependency link type. Remote link types aren't supported. You can add custom link types only for on-premises environments. |

> [!TIP]
> If you edit a plan and your changes don't appear in the plan, refresh your browser. A browser refresh is sometimes needed to trigger the updates.

## Design and create a delivery plan

Determine how you want to use the delivery plan, such as:

- Developing quarterly plans for features to deliver.
- Reviewing cross-project deliverables and identifying dependencies.
- Syncing monthly with several teams that have dependencies.

Use a consistent sprint schedule across your project teams and organization when possible. A delivery plan can accommodate various sprint schedules, but they add to visual clutter. Use the same sprints for backlogs, Features, and Epics. Avoid creating specific sprints for Epics or other portfolio backlogs.

Plan views are limited to a maximum of 20 teams or backlogs. Eliminate cross-team ownership of area paths to avoid undesirable edge cases.

To create a delivery plan, see [Add or edit a delivery plan](add-edit-delivery-plan.md).

## View a plan

Delivery plans for your project appear on the **Boards** > **Delivery Plans** page, showing the title, description, and creator. To open an existing plan, select the plan from the list.

You can search for plans by keyword and sort by the **Name**, **Created By**, **Description**, **Last configured**, **Last accessed**, or **Favorites** columns. Use the **Favorite** icon to favorite a plan for quick access.

:::image type="content" source="media/plans/open-plans.png" alt-text="Screenshot of the Delivery Plans area in Azure Boards.":::

## Review the plan with your teams

During large software development projects, multiple autonomous teams manage their own backlog and priorities to contribute to a unified direction for the project. For a discussion of autonomous teams and organizational alignment, see [Agile culture](agile-culture.md). 

Delivery plans provide a necessary multiple-team view of your project. By seeing the work that many teams plan for the next few sprints, you can identify dependencies and verify appropriate priorities.

You can use delivery plans internally to share the schedule of features. Regular reviews of the project scope and schedule help ensure that teams are working toward common goals.

During the reviews, you might address the following questions:

- *How confident are the teams about meeting the deliverables scheduled for each sprint?* 
- *Are dependencies across teams adequately addressed via the planned deliverables?* 
- *Are there gaps in the schedule with no deliverables scheduled? Why? Can this issue be mitigated?*

The delivery plan drives alignment while letting each team remain autonomous. Individual teams can work to different sprint cadences if necessary, and can manage different work item types like stories, features, or epics. All work is visible in the same plan view.

Teams can even be part of different projects if they use different processes. You can customize card fields to see only the data fields that interest you and that apply to each work item type.

## Interact with the delivery plan

In a delivery plan, the plan title appears at the top of the page. To change the title or configure other plan settings, select **Settings** at upper right.

The **Favorite**, **Fullscreen**, and **Filter** icons appear next to the **Settings** button. Select the **Favorite** icon to favorite the delivery plan for quick access. Select the **Fullscreen** icon to display the delivery plan in fullscreen view.

Select the **Filter** icon to display the filter toolbar and filter the plan view. You can filter on any field included in the plan, or by keyword or text filter. For more information, see [Interactively filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md).

:::image type="content" source="media/plans/settings.png" border="false" alt-text="Screenshot that shows the Settings button and Filter controls.":::

The buttons at upper right in the plan view:

- Show and hide dependencies between work items.
- Expand or collapse the work item cards.
- Zoom the plan view smaller or larger.

You can scroll the timeline left or right by holding down the corresponding arrows on the calendar bar. You can also scroll through the plan by dragging it horizontally or vertically.

The **today** marker always appears on the calendar bar, and you can add custom markers by selecting **Settings** > **Markers**.

:::image type="content" source="media/plans/overview.png" border="false" alt-text="Screenshot that shows the dependencies, expand/collapse, and zoom buttons, and the calendar bar with markers.":::

Each team's backlog specified in the delivery plan appears as a row in the plan view, organized by assigned sprints or iterations. A collapsed row displays a rollup of the backlog items. An expanded row shows cards for each backlog item.

> [!TIP]
> Work items appear in [priority order](../backlogs/create-your-backlog.md#reorder-your-backlog), inheriting the priority from the sprint backlog listing.

- To expand or collapse all teams, select the arrow next to **Teams** on the top bar. To expand or collapse individual teams, select the arrow next to each team name.
- To see and edit the backlog for each team, select the link under the team name, such as **Epics** or **Stories**.
- To see and edit individual work items, select the title in the work item card. To change the fields displayed on the cards, select **Settings** > **Fields**.
- To add a work item, select the **+** icon in the sprint and team card you want to add the item to.

:::image type="content" source="media/plans/overview-with-callouts.png" border="false" alt-text="Screenshot of callouts of delivery plans and collapsed teams.":::

## See multiple teams and iterations

One benefit of Delivery Plans is the ability to view multiple teams and iterations across projects. There are several ways to include more teams, work items, and iterations within the plan view.

- Collapse all teams or certain teams.
- Collapse work item cards to view only titles, or reduce the number of fields displayed on cards.
- Zoom out to view more iterations or show work that spans more than one iteration.

### Collapse teams for summary information

To focus on a summary view of scheduled work, collapse all teams by selecting the arrow next to **Teams** on the top bar. This view makes it easier to identify gaps in the forecast. You can also expand or collapse each team row by selecting the expand or collapse icon next to the team name.

### Collapse cards to view titles only

Use the **Expand or collapse cards** icon to toggle between showing only titles in cards or displaying all fields configured for the plan.

:::image type="content" source="media/plans/collapse-card-fields.png" alt-text="Screenshot that shows the location of feature icons for collapsing and expanding card fields.":::

### Zoom out to show more iterations or teams

Using the **Zoom out** button lets you see more iterations and teams in the view. However, the farther you zoom out, the fewer items can fit on a card. Zooming out can cause fields and tags to disappear from cards, depending on the zoom level.

## Specify iterations or target dates

Plan views display the months corresponding to the iteration paths for the team backlogs in the plan.

Work items can use **Start Date** and **Iteration** or **Start Date** and **Target Date** to specify time frame. Don't use both **Iteration** and **Target Date**. **Target Date** always overrides the **Iteration** end date on the plan.

For work items that span more than one iteration, the plan displays cards that start and end according to the **Start Date** and **Target Date**. You can also adjust the start or target date by dragging the left or right border of a work item. The following screenshot shows a work item that spans two iterations.

:::image type="content" source="media/plans/features-span-iterations-preview.png" alt-text="Screenshot that shows features that span iterations.":::

If **Start Date** or **Target Date** are missing from the work item form, you can add them to the custom process defined for the project. For more information, see [Add and manage fields (inheritance process)](../../organizations/settings/work/customize-process-field.md#add-an-existing-field-to-another-wit).

Keep your work items up to date. If the schedule changes, update the target dates or iteration paths. If necessary, you can change the iteration for a backlog item by dragging the card to a different iteration. These adjustments helps maintain alignment across your organization.

## View rollups of features and epics

A rollup provides a comprehensive view of child work item progress on a parent card in your delivery plan. Rollup views are available for Feature, Epic, or portfolio backlogs you add to your project.

To enable rollups, select **Settings** > **Fields**, and then select **Show child rollup data**. Rollups aren't supported for child work items that belong to a different project than the originating parent work item.

The following example shows a current rollup of child Features, Stories, and Bugs for a team.

:::image type="content" source="media/plans/rollup-view.png" alt-text="Screenshot that shows a rollup view of four scenarios."::: 

You can also view rollups from a backlog view. For more information, see [Display rollup progress or totals](../backlogs/display-rollup.md).

## Print a delivery plan 

You can print all or part of your delivery plan. Depending on the view you want to capture and share, you can take a screenshot or use your browser's **Print** feature to print one page at a time.

To print a portion of a plan, select the **Fullscreen** icon on the delivery plan's top bar, and then expand or collapse teams and zoom in or out to get the desired view. Take a screenshot of the view or use your browser's **Print** function.

> [!TIP]
> To share a delivery plan with a team member, copy the URL and send the copied URL to your team member.

## Related content  
 
- [Add or edit a delivery plan](add-edit-delivery-plan.md)
- [Track dependencies using Delivery Plans](track-dependencies.md)
- [Filter backlogs, boards, and plans interactively](../backlogs/filter-backlogs-boards-plans.md)
- [Understand backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)
