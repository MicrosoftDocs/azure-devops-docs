---
title: Use team delivery plans
titleSuffix: Azure Boards
description: Learn how to review and use delivery plans in Azure Boards to track and interact with multiple team deliverables, schedules, and dependencies.
ms.service: azure-devops-boards
ms.assetid: 3B41D55E-B7B1-41B1-B68F-7A83BA2890A5  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
ms.custom: cross-project  
ai-usage: ai-assisted
monikerRange: '>= azure-devops-2022'
ms.date: 10/23/2025
#customer intent: As a product and portfolio owner, I want to understand delivery plans so I can use them to interact with multiple deliverables and schedules and review them with my teams.
---

# Use team delivery plans in Azure Boards

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)] 

Delivery plans in Azure Boards let you visualize and review the work items that your teams plan to deliver. A delivery plan shows selected teams' scheduled work items by sprint or iteration path in a calendar view.

You can use Delivery Plans to review multiple backlogs and teams across your Azure DevOps organization. The delivery plan drives alignment with organizational goals while letting each team remain autonomous.

You can interact directly with delivery plans by changing the schedule, adding and editing work items, and customizing views.

Delivery Plans supports the following tasks:

- View up to 20 team backlogs, including backlogs and teams from different projects.
- Add custom portfolio backlogs and Epics.
- View work items spanning several iterations.
- Reset start and target dates using drag-and-drop.
- Add or edit backlog items directly from the plan.
- View rollup progress of Features and Epics.
- View dependencies between work items. For information on working with dependencies, see [Track dependencies in Delivery Plans](track-dependencies.md).
- Allow stakeholders to view plans.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Configuration** | An [existing delivery plan](add-edit-delivery-plan.md) that conforms to the following requirements:<br>- Plan views are limited to a maximum of 20 teams or backlogs. <br>- Work items belong to the team's [product backlog](../backlogs/create-your-backlog.md) or [portfolio backlog](../backlogs/define-features-epics.md). Only work item types selected for viewing on a team's backlog appear on the plan. Eliminate cross-team ownership of area paths to avoid undesirable edge cases.<br>- [Team product or portfolio backlog is enabled](../../organizations/settings/select-backlog-navigation-levels.md).<br> - [Sprints or iterations are selected for each team](../../organizations/settings/set-iteration-paths-sprints.md#select-team-sprints-and-set-the-default-iteration-path) defined in the plan.<br>- [Iteration paths](../sprints/assign-work-sprint.md) are assigned to each work item, and [start and end dates](../../organizations/settings/set-iteration-paths-sprints.md#add-iterations-and-set-iteration-dates) are defined for each iteration.<br>- For dependency icons and lines to show, [work items are linked](../backlogs/add-link.md) via the **Predecessor**, **Successor**, or other custom dependency link type. [Remote link types](../queries/link-type-reference.md#remote-work-link-type) aren't supported, and you can use custom link types only in on-premises environments. |
| **Access levels** | To view a delivery plan: Member of the **Project Collection Valid Users** group. Users granted **Stakeholder** access for a private project can view plans. Users granted **Stakeholder** access for a public project can add and view plans. |
| **Permissions** | To open or modify a work item, or add work items to a plan: **Edit work items in this node** permission set to **Allow** for the area paths assigned to the work item. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path). |

To create a delivery plan, see [Add or edit a delivery plan](add-edit-delivery-plan.md).

> [!NOTE]   
> Delivery Plans is now part of the Azure Boards core product and is supported in Azure DevOps Server 2022 and later versions. For Azure DevOps Server 2020 and earlier, the [Delivery Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans) extension is available in the Visual Studio Marketplace.
> 
> Any plan you created with the original Delivery Plans extension works with the Delivery Plans feature. You don't have to migrate any data or reconfigure plan settings. For more information, see [Add or edit a delivery plan](add-edit-delivery-plan.md).

## View a delivery plan

Delivery plans for your project appear on the **Boards** > **Delivery Plans** page, showing the title, description, and creator. To open an existing plan, select the plan from the list.

You can search for plans by keyword and sort by the **Name**, **Created By**, **Description**, **Last configured**, **Last accessed**, or **Favorites** columns.

:::image type="content" source="media/plans/open-plans.png" alt-text="Screenshot of the Delivery Plans area in Azure Boards.":::

## Use the plan

In a delivery plan, the plan title appears at the top of the page. To change the title or configure other plan settings, select **Settings** at upper right.

The **Favorite**, **Filter**, and **Fullscreen** icons appear next to the **Settings** button. Select the **Favorite** icon to favorite the delivery plan for quick access. Select the **Fullscreen** icon to display the delivery plan in fullscreen view.

Select the **Filter** icon to display the filter toolbar and filter the plan view. You can filter on any field included in the plan, or by keyword or text filter. For more information, see [Interactively filter your backlogs, boards, and plans](../backlogs/filter-backlogs-boards-plans.md).

:::image type="content" source="media/plans/settings.png" alt-text="Screenshot that shows the Settings button and Filter controls.":::

The buttons above the plan view:

- Show and hide dependencies between work items.
- Expand or collapse the work item cards.
- Zoom the plan view smaller or larger.

You can scroll the timeline left or right by holding down the corresponding arrows on the calendar bar or by dragging the page horizontally. The **today** marker always appears on the calendar bar, and you can add custom markers by selecting **Settings** > **Markers**.

:::image type="content" source="media/plans/overview.png" alt-text="Screenshot that shows the dependencies, expand/collapse, and zoom buttons, and the calendar bar with markers.":::

### Interact with work items

Each team backlog specified in the delivery plan appears as a row in the plan view, organized by assigned sprints or iterations. A collapsed row shows a summary of backlog items. An expanded row shows cards for each backlog item.

To expand or collapse all team backlog rows, select the arrow next to **Teams** on the top bar. To expand or collapse individual rows, select the arrow next to each team name.

> [!TIP]
> Work item cards appear in [priority order](../backlogs/create-your-backlog.md#reorder-your-backlog), inheriting the priority from the sprint backlog listing.

- To see and edit the team backlog, select the backlog link under the team name, such as **Epics** or **Stories**.
- To see and edit individual work items, select the title in the work item card. To change the fields displayed on cards, select **Settings** > **Fields**.
- To add a work item, select the **+** icon on the sprint and team card you want to add the item to.

:::image type="content" source="media/plans/overview-with-callouts.png" border="false" alt-text="Screenshot of callouts of delivery plans and collapsed teams.":::

> [!TIP]
> If your changes don't appear immediately when you edit a plan, refresh your browser. A browser refresh is sometimes needed to trigger updates.

### Specify iterations or target dates

Plan views display the months corresponding to the iteration paths for the team backlogs in the plan. Use a consistent sprint schedule across your project teams and organization if possible. A delivery plan can accommodate various sprint schedules, but they add visual clutter.

Use the same sprints for Stories, Features, and Epics. Avoid creating specific sprints for Epics or other portfolio backlogs.

Work items can use **Start Date** and **Iteration** or **Start Date** and **Target Date** to specify time frame. Don't use both **Iteration** and **Target Date**. **Target Date** always overrides the **Iteration** end date on the plan.

For work items that span more than one iteration, the plan displays cards that start and end according to the **Start Date** and **Target Date**. You can also adjust the start or target date by dragging the left or right border of a work item. The following screenshot shows a work item that spans two iterations.

:::image type="content" source="media/plans/features-span-iterations-preview.png" alt-text="Screenshot that shows features that span iterations.":::

If **Start Date** or **Target Date** are missing from the work item form, you can add them to the custom process defined for the project. For more information, see [Add and manage fields (inheritance process)](../../organizations/settings/work/customize-process-field.md#add-an-existing-field-to-another-wit).

Keep your work items up to date. If the schedule changes, update the target dates or iteration paths. You can also change the iteration for a backlog item by dragging the card to a different iteration. These adjustments help maintain alignment across your organization.

### See multiple teams and iterations

One benefit of Delivery Plans is the ability to view multiple teams and iterations across projects. There are several ways to maximize the teams, work items, and iterations shown in the plan view.

- Collapse all teams or certain teams.
- Collapse work item cards to view only titles, or reduce the number of fields displayed on cards.
- Zoom out to view more iterations or to show work that spans more than one iteration.

#### Collapse teams for summary information

To focus on a summary view of scheduled work, collapse all teams by selecting the expand/collapse icon next to **Teams** on the top bar. This view makes it easier to identify gaps in the forecast. You can also expand or collapse each team row by selecting the expand/collapse icon next to the team name.

#### Collapse cards to view titles only

Use the **Expand or collapse cards** icon to toggle between showing only titles in cards or displaying all the fields configured for the plan.

:::image type="content" source="media/plans/collapse-card-fields.png" alt-text="Screenshot that shows the location of feature icons for collapsing and expanding card fields.":::

#### Zoom out to show more iterations or teams

Using the **Zoom out** button lets you see more iterations and teams in the view. However, the farther you zoom out, the fewer items can fit on a card. Zooming out can cause fields and tags to disappear from cards, depending on the zoom level.

### View rollups of features and epics

A rollup provides a comprehensive view of child work item progress on a parent card in your delivery plan. Rollup views are available for Feature, Epic, or portfolio backlogs you add to your project.

To display rollups, select **Settings** > **Fields**, and then select **Show child rollup data**. Rollups aren't supported for child work items that belong to different projects than the originating parent work item.

The following example shows a progress rollup of child Features, Stories, and Bugs for a team.

:::image type="content" source="media/plans/rollup-view.png" alt-text="Screenshot that shows a rollup view of four scenarios."::: 

You can also view rollups from the backlog view. For more information, see [Display rollup progress or totals](../backlogs/display-rollup.md).

## Review the plan with your teams

 
During large software development projects, multiple autonomous teams manage their own backlog and priorities to contribute to a unified direction for the project. For a discussion of autonomous teams and organizational alignment, see [Agile culture](agile-culture.md). 

Delivery plans provide a necessary multiple-team view of your project. Seeing the planned work for many teams over the next few sprints helps you identify dependencies and verify appropriate priorities. You can customize card fields for each work item type to see only the ones that interest you.

The delivery plan drives alignment while letting each team remain autonomous. Individual teams can work to different sprint cadences if necessary, and can manage different work item types like Stories, Features, or Epics. All work is visible in the same plan view. Teams can even be part of different projects if they use different processes.

You can review delivery plans internally to share the schedule and deliverables. Regular reviews of the project scope and schedule help ensure that teams are working toward common goals.

Determine how you want to use the delivery plan review, such as:

- Developing quarterly plans for features to deliver.
- Reviewing cross-project deliverables and identifying dependencies.
- Syncing monthly with several teams that have dependencies.

The review can address issues like:

- Teams' confidence about meeting scheduled sprint deliverables.
- How well the planning of deliverables addresses dependencies across teams.
- Whether the schedule has gaps with no deliverables, and how to mitigate that.

## Print or share a delivery plan 

You can print all or part of your delivery plan. Depending on the view you want to capture and share, you can take a screenshot or use your browser's **Print** feature to print one page at a time.

To print a portion of a plan, select the **Fullscreen** icon on the delivery plan's top bar, and then expand or collapse teams and zoom in or out to get the desired view. Take a screenshot of the view or use your browser's **Print** function.

To share a delivery plan with team members, copy the URL and send the copied URL to your team members.

## Related content  
 
- [Add or edit a delivery plan](add-edit-delivery-plan.md)
- [Track dependencies using Delivery Plans](track-dependencies.md)
- [Filter backlogs, boards, and plans interactively](../backlogs/filter-backlogs-boards-plans.md)
- [Understand backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)
