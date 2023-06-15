---
title: Configure burndown or burnup widget
titleSuffix: Azure DevOps   
description: Learn how to configure a burndown or burnup widget to create charts that you add to a dashboard to track progress across one or more teams in Azure DevOps.
ms.custom: dashboards
ms.subservice: azure-devops-analytics
ms.topic: tutorial
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'  
ms.date: 06/09/2023
---

# Configure a burndown or burnup widget 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The burndown and burnup widgets give you flexibility to create charts for any type of scope or number of teams within specified time periods. Burndown charts focus on remaining work, while burnup charts focus on completed work. Both chart types help your team determine whether you're on track to complete the set of work by the end date. For an overview of all burndown/burnup charts available to you, see [Burndown and burnup guidance](burndown-guidance.md).

**Burndown widget configured to display a release burndown**
:::image type="content" source="media/burndown-widget/burndownup-release-burndown.png" alt-text="Screenshot of release burndown widget.":::

## Prerequisites  

[!INCLUDE [temp](../includes/analytics-widgets-prerequisites.md)]

## Add the widget to your dashboard  
 
::: moniker range=">= azure-devops-2020"

1. Sign in to your organization (``https://dev.azure.com/{yourorganization}``).
2. Go to your project, and then select **Dashboards**, and then :::image type="icon" source="../../boards/backlogs/office/media/icons/edit.png" border="false"::: **Edit**.
   
   :::image type="content" source="media/burndown-widget/select-dashboards-edit.png" alt-text="Screenshot showing sequence of selection for Dashboards, Edit function.":::

3. Select a widget, and then **Add**.
   
   :::image type="content" source="media/burndown-widget/add-widget.png" alt-text="Screenshot showing widget selection pane and blue Add button.":::
::: moniker-end

::: moniker range="azure-devops-2019"

1. [Enable or install Analytics](analytics-extension.md).    
2. [Add the widget to your dashboard](./add-widget-to-dashboard.md).  
3. Select :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **More actions**  and **Configure**.   
::: moniker-end

## Configure burndown or burnup widget

Do the following steps to configure both widget types. The only difference between the burndown and burnup widgets is that the burnup widget plots *work completed* and the burndown widget plots *work remaining*. For more information, see how to [interpret a burndown or burnup chart](#interpret-a-burndown-or-burnup-chart), later in this article.

1. On the widget, select :::image type="icon" source="../../boards/media/icons/gear_icon.png" border="false"::: **Configure**.
2. Complete configuration information, described in the following table, and then select **Save**.

::: moniker range="= azure-devops"

|Configuration category |Guidance|
|-----------|-----------| 
|Teams | To track progress across teams, add more teams. You can select teams from other projects, but the lists of selectable backlogs, work item types, and fields are based on your current project. Tracking across multiple projects only works if the [process](../..//boards/work-items/guidance/choose-process.md) for those projects is the same, or at least similar.| 
| Work items| **Backlog** includes all the work item types configured for that backlog. If your project is customized using a [Hosted XML process](../../organizations/settings/work/hosted-xml-process-model.md) and has a customized bug work item category name, then the burndown/burnup widgets can't query for work items within that category. To query for bugs, the customized bug work item type must belong to the default **Bug category**, reference name `Microsoft.BugCategory`.|
|Field criteria| Select field criteria to limit the work items that appear in the chart. Filtering is based on values assigned to fields as defined for each work item on the date within the tracking period. For more information, see [Filters that apply to historical data](../powerbi/analytics-historical-filtering.md). </br>Analytics-based charts are built based on the `WorkItemsSnapshot` EntitySet. Snapshot entity types are modeled as daily snapshots. Data aggregates based on assignments made as of the date they're assigned. So, if you want to filter a burndown/burnup widget based on field or tag assignments, assign them prior to the period you want to monitor. Otherwise, the widget doesn't recognize them until the date on which they're applied. You can filter on a null value for the **Field criteria**, which is consistent with a query using the same field criteria. |
|Burndown on |Choose how you want to calculate burndown by **Count** of work items or by **Sum** based on a selected field. You can select from standard or custom fields of integer or decimal data type, such as **Story Points**, **Effort**, or  **Remaining Work**. Burndown works best when you aggregate size fields like Story Points. If you choose to burndown on fields that change during the sprint, like Remaining Work for Tasks, the calculation of "Items not Estimated" grows as items get closed.   |
|Time period |- **Start Date**: Determines the original scope baseline. The chart burns down from the original scope.<br/>- **% Complete** and **Total Scope Increase**: Calculated based on your original scope.<br/>- **End Date**: Specifies the target date of completion. Your goal is to burndown the original scope of work by the End Date.
|Plot interval   |Select the intervals to plot between the **Start Date** and **End Date**. Average burndown is based on the selected interval. After you select the Start Date, set Plot burndown by to Iteration. The Average Burndown assumes that every interval is the same length and that the interval between the Start Date and the first month is a full month, even if the length of time between Start Date and the first month's end date doesn't match your typical length of a month. For best results, enter a Start Date that is the same as the first month's start date, which is also true when plotting by weekly intervals.     |
|Advanced features |- **Show burndown**: Displays both the historical and projected future burndown.<br/>- **Show total scope**: Displays both the historical and projected scope increase.<br/>- **Show completed work**: It displays remaining work and completed work as stack bar.<br/>- **Plot remaining using work item type color**: Displays remaining work based on the work item type color, rather than the default blue color. If multiple work items are included, then it stacks colors by work item type.   |

::: moniker-end

::: moniker range="< azure-devops"


|Configuration category |Guidance|
|:----------------------|:-------| 
|Teams | You can select teams from other projects, but the lists of selectable backlogs, work item types, and fields are based on your current project. You can only track across multiple projects if the [process](../..//boards/work-items/guidance/choose-process.md) for those projects is the same.| 
|Work items | **Backlog** includes all the work item types configured for that backlog. If you select the **Stories** backlog, you have another option: **Include bugs on the Stories backlog**. Enter a checkmark in the box to include bugs along with user stories in your burndown. This option's available for the PBI Backlog for Scrum projects and the Requirements backlog for CMMI projects. If your project is customized using a [Hosted XML process](../../organizations/settings/work/hosted-xml-process-model.md) and has a customized bug work item category name, then the burndown/burnup widgets can't query for work items within that category. To query for bugs, the customized bug work item type must belong to the default **Bug category**, reference name `Microsoft.BugCategory`.|
|Field criteria| Select field criteria to limit the work items that appear in the chart. Filtering is based on values assigned to fields as defined for each work item on the date within the tracking period. For more information, see [Filters that apply to historical data](../powerbi/analytics-historical-filtering.md). </br>Analytics-based charts are built based on the `WorkItemsSnapshot` EntitySet. Snapshot entity types are modeled as daily snapshots. Data aggregates based on assignments made as of the date they're assigned. So, if you want to filter a burndown/burnup widget based on field or tag assignments, assign them prior to the period you want to monitor. Otherwise, the widget doesn't recognize them until the date on which they're applied. You can filter on a null value for the **Field criteria**, which is consistent with a query using the same field criteria. |
|Burndown on |Choose how you want to calculate burndown by **Count** of work items or by **Sum** based on a selected field. You can select from standard or custom fields of integer or decimal data type, such as **Story Points**, **Effort**, or  **Remaining Work**. Burndown works best when you aggregate size fields like Story Points. If you choose to burndown on fields that change during the sprint, like Remaining Work for Tasks, the calculation of "Items not Estimated" grows as items get closed.   |
|Time period |- **Start Date**: Determines the original scope baseline. The chart burns down from the original scope.<br/>- **% Complete** and **Total Scope Increase**: Calculated based on your original scope.<br/>- **End Date**: Specifies the target date of completion. Your goal is to burndown the original scope of work by the End Date. |
|Plot interval   |Average burndown gets based on the selected interval, which can be daily, weekly, monthly, or based on an iteration schedule. The Average Burndown assumes that every interval is the same length. For example, the interval between the Start Date and the first month is a full month, even if the length of time between Start Date and the first month's end date doesn't match your typical length of a month. For best results, enter a Start Date that is the same as the first month's start date, which is also true for weekly intervals.        |
|Advanced features |- **Show burndown**: Displays both the historical and projected future. burndown.<br/>- **Show total scope**: Displays both the historical and projected scope increase.<br/>- **Show completed work**: Displays remaining work and completed work as stack bar.<br/>- **Plot remaining using work item type color**: Displays remaining work based on the work item type color, rather than the default blue color. If multiple work items are included, then it stacks colors by work item type.   |

::: moniker-end

## Interpret a burndown or burnup chart

Your team can get immediate insight as to their progress and learn about their rhythm and behavior. Most burndown lines aren't straight lines. The team never moves at exactly one fixed velocity. Scope increases occur over time. For example, if your projected completion date moves, you may want to ask one of these questions: 
* *Are we adding too much scope?*
* *Is the average burn rate changing, and if so, why?*

Burndown charts also help teams understand risks to their release. If the projected end date exceeds the release target date, teams may need to reduce scope or lengthen the project. Burndown can also indicate that progress is greater than expected, providing the uncommon, but wonderful option of adding scope. 

As the following diagram shows, charts based on the burndown/burnup widgets provide many calculated elements. 

:::image type="content" source="media/burndown-widget/burndownup-release-burndown-with-markup.png" alt-text="Conceptual image showing burndown/burnup widget elements.":::

| Element | Description|  
|---------|------------| 
|**Date&nbsp;range**|The  start and end date of the burndown. When burndown gets plotted by iterations, the end date is the end of the last iteration. |
|**Main&nbsp;metric**|Current remaining work based on the selected burndown method.| 
|**%&nbsp;Completed**|The percentage of work completed based on original scope. Select **% Completed** to see the full list of completed work items.| 
|**Average&nbsp;burndown**|Average work completed per interval or iteration.| 
|**Items&nbsp;not&nbsp;estimated**|Shows only when burning down on the  Sum of a field. It represents the current number of items that don't have a value in the selected **Burndown&nbsp;on** field. Select the number to see a full list of work items without estimates.|
|**Total&nbsp;Scope&nbsp;Increase** |Shows how much work was added to the original scope since the burndown started.|
|**Projected&nbsp;completion** |Calculates the projected completion date based on the remaining work and historical burndown and scope increase rates. If the projected completion date is before the specified **End Date**, it draws a vertical line on the interval when the work should complete. If the projected completion date is after the specified **End Date**, it displays the number of other intervals/iterations needed to complete the work.|
|**Original&nbsp;Scope** |Original scope is all remaining work since the specified **Start Date**. The chart burns down from the original scope. **% Complete** and **Total Scope Increase** are calculated based on your original scope.|
|**Total&nbsp;Scope** |Represents to the total scope of the burndown. The plotted points include both completed and remaining work. The total scope line indicates the scope change of your project. For past data points, the plotted total scope represents actual total scope as of the end of each interval/iteration. For future data points, the plotted total scope represents a projected scope change, based on past scope changes.|
|**Burndown**|Represents the burndown. The burndown line tells you how fast you're burning down the work. For past data points, the plotted burndown represents actual burndown as of the end of each interval/iteration. For future data points, the plotted burndown represents a projected burndown, based on past burndown.

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

## Next steps

> [!div class="nextstepaction"]
> [Burndown and burnup guidance](burndown-guidance.md) 

## Related articles 

- [Configure and monitor sprint burndown](configure-sprint-burndown.md)
- [Define iteration paths or sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Add a custom field to a work item type](../../organizations/settings/work/customize-process-field.md)
- [Apply filters to historical data](../powerbi/analytics-historical-filtering.md)
