---
title: Configure Burndown & Burnup widgets
titleSuffix: Azure DevOps   
description: Learn how to configure a Burndown or Burnup widget to create charts that you add to a dashboard to track progress across one or more teams in Azure DevOps.
ms.custom: dashboards
ms.subservice: azure-devops-analytics
ms.topic: tutorial
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'  
ms.date: 07/26/2022
---

# Configure a Burndown or Burnup widget 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The Burndown and Burnup widgets provide the flexibility to create charts for:
- Any type of scope
- Any number of teams
- Within specified time periods.

Burndown charts focus on remaining work within a specific time period, while burnup charts focus on completed work. 

Both chart types help answer the question: *Are we on track to complete this set of work by the end date?*

Use this article to learn how to:

> [!div class="checklist"]
> * Interpret a Burndown or Burnup widget  
> * Configure the Burndown or Burnup widgets  
> * Use burndown metrics  
> * Work with a burndown chart    
> * Configure a sprint burndown     

For an overview of all burndown/burnup charts available to you, see [Burndown and burnup guidance](burndown-guidance.md).

Use the burndown chart to track completion of a predefined scope of work over a predefined period of time. For example, a sprint burndown tracks the sprint backlog completion by end of the sprint. A release burndown tracks the release backlog completion by the end of the release. You can define a bug burndown chart to track completion of a set of bugs by a certain date. 

**Burndown widget configured to display a Release Burndown**
![Screenshot of Burndown Widget, Release Burndown Example.](./media/burndown-widget/burndownup-release-burndown.png)

**Burndown widget configured to display a Bug Burndown**
![Screenshot of Burndown Widget,Bug Burndown Example](./media/burndown-widget/burndownup-bug-burndown.png)

 
## Metrics 

Burndown and burnup charts provide an easy way to monitor progress across teams and sprints by showing work remaining over time. Work remaining is the vertical axis and time is the horizontal axis. Remaining work is calculated as a sum of a particular field like Story Points, or count of a type of work item like User Stories. Also, each chart calculates and displays the average burndown or burnup rate and added scope over the course of the project. 

Based on historical burndown and scope increase, the Burndown chart shows a projected work completion date. Using burndown, teams can stay on top of their progress and see the immediate effect of their work on their delivery date. 

These charts provide the following useful metrics:  

* Percentage work complete
* Average burndown rate
* Total scope increase
* Number of work items not estimated with Story Points, or whichever field you're burning down on 
* Projected burndown, based on historical burndown rate
* Projected scope increase, based on historical scope increase rate
* Projected completion date, based on historical burndown and scope increase rates.


## Interpret a Burndown or Burnup chart

Looking at the burndown chart, a team can not only get immediate insight as to their progress, but also learn about their rhythm and behavior. Most burndown lines aren't straight lines. The team never moves at exactly one fixed velocity. Scope increases occur over time. For example, if your projected completion date moves, you may want to ask one of these questions: 
* *Are we adding too much scope?*
* *Is the average burn rate changing, and if so, why?*

Burndown charts also help teams understand risks to their release. If the projected end date exceeds the release target date, teams may need to reduce scope or lengthen the project. Burndown can also indicate that progress is greater than expected, providing the uncommon, but wonderful option of adding scope. 

As the following diagram shows, charts based on the Burndown and Burnup widgets provide many calculated elements. 

![Conceptual image with callouts of Burndown/Burnup Widget elements.](./media/burndown-widget/burndownup-release-burndown-with-markup.png)


| Element | Description|  
|---------|------------| 
|**Date&nbsp;range**|The  start and end date of the burndown. When burndown is plotted by iterations, the end date is the end of the last iteration. |
|**Main&nbsp;metric**|Current remaining work based on the selected burndown method.| 
|**%&nbsp;Completed**|The percentage of work completed based on original scope. Select **% Completed** to see the full list of completed work items.| 
|**Average&nbsp;burndown**|Average work completed per interval or iteration.| 
|**Items&nbsp;not&nbsp;estimated**|Shows only when burning down on the  Sum of a field. It represents the current number of items that don't have a value in the selected **Burndown&nbsp;on** field. Select the number to see a full list of work items without estimates.|
|**Total&nbsp;Scope&nbsp;Increase** |show how much work was added to the original scope since the burndown started.|
|**Projected&nbsp;completion** |Calculates the projected completion date based on the remaining work and historical burndown and scope increase rates. If the projected completion date is before the specified **End Date**, it draws a vertical line on the interval when the work should complete. If the projected completion date is after the specified **End Date**, it displays the number of other intervals/iterations needed to complete the work.|
|**Original&nbsp;Scope** |Original scope is all remaining work since the specified **Start Date**. The chart burns down from the original scope. **% Complete** and **Total Scope Increase** are calculated based on your original scope.|
|**Total&nbsp;Scope** |Represents to the total scope of the burndown. The plotted points include both completed and remaining work. The total scope line indicates the scope change of your project. For past data points, the plotted total scope represents actual total scope as of the end of each interval/iteration. For future data points, the plotted total scope represents a projected scope change, based on past scope changes.|
|**Burndown**|Represents the burndown. The burndown line tells you how fast you're burning down the work. For past data points, the plotted burndown represents actual burndown as of the end of each interval/iteration. For future data points, the plotted burndown represents a projected burndown, based on past burndown.

## Prerequisites  

[!INCLUDE [temp](../includes/analytics-widgets-prerequisites.md)]

## Add the widget to your dashboard  
 
The Configuration dialog for the Burndown and Burnup widgets is the same. You configure these widgets for one or more teams. To learn more about teams, see [Add teams](../../organizations/settings/add-teams.md).

::: moniker range=">= azure-devops-2020"
1. If you haven't yet [added the Burndown widget to your dashboard](./add-widget-to-dashboard.md), do that now.  
1. To open the configuration dialog, select :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **More actions** and select the **Configure** option.  
::: moniker-end

::: moniker range="azure-devops-2019"
1. If you haven't yet [enabled or installed Analytics](analytics-extension.md)], do that now.    
1. If you haven't yet [added the Burndown widget to your dashboard](./add-widget-to-dashboard.md), do that now.  
1. To open the configuration dialog, select :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **More actions**  and select the **Configure** option.   
::: moniker-end


## Choose the teams and work items to chart  

1. Modify the **Title** of the widget and select your preferred **Size**. The Burndown widget can scale up to 10x10.    
1. Select the **Teams** you want to track. Select at least one **Project** and one **Team**.   

	If you want to track progress across teams, add more teams using the team selector. You may also select teams from other projects.  
	![Screenshot of Configuration dialog, Burndown/Burnup Widget, Select multiple teams section.](media/burndown-widget/burndownup-config-select-multiple-teams.png)  
	The Burndown chart will display the burndown of remaining work for all selected teams.   

   > [!NOTE]   
   > While you can select teams from other projects, all of the available configuration options&mdash;**Work items**, **Field criteria**, and **Burndown on** will show selections from your **current project**.   
   > The list of selectable backlogs, work item types, and fields are based on your current project. 
   > 
   > For example, if you select a work item type that doesn't exist in another project, the burndown will not include work items from that project. If you select a field that doesn't exist in another project, that field will be considered blank for the burndown. 
   > Therefore, a burndown created across multiple projects will only work if the [Process](../..//boards/work-items/guidance/choose-process.md) for those projects are the same, or at least very similar.

1. Choose a backlog or the work item type that you want to monitor. The burndown can include work based on items in your **Backlog** or by **Work item type**.   

	::: moniker range="azure-devops"
	Choosing a **Backlog** includes all the work item types configured for that backlog.    
	:::image type="content" source="media/burndown-widget/burndownup-config-select-backlog-cloud-version.png" alt-text="Screenshot of Configuration dialog, Work items selection section.":::
	::: moniker-end

	::: moniker range="< azure-devops"
	Choosing a **Backlog** includes all the work item types configured for that backlog.    
	If you select the **Stories** backlog, you have another option: **Include bugs on the Stories backlog**. Place a checkmark in the box to include bugs along with user stories in your burndown.

	This option is available for the PBI Backlog for Scrum projects and the Requirements backlog for CMMI projects.   
	![Screenshot of Configuration dialog, Work items selection, Azure DevOps Server 2019 and 2020 versions.](media/burndown-widget/burndownup-config-select-backlog.png)  
	::: moniker-end
	::: moniker range="azure-devops"
   > [!NOTE]   
   > If your project has been customized using a [Hosted XML process](../../organizations/settings/work/hosted-xml-process-model.md) and has created a customized bug work item category name, then the Burndown and Burnup widgets won't be able to query for work items within that category. To query for bugs, the customized bug work item type must belong to the default **Bug Category**, reference name `Microsoft.BugCategory`.  
	::: moniker-end
	Choose **Work item type** to monitor burndown or burnup on a specific work item type. In the list, you'll find all the project's work item types including [custom work item types](../../organizations/settings/work/customize-process-work-item-type.md).   
	![Screenshot of Configuration, Select work item types section, Bug work item type selected.](./media/burndown-widget/burndownup-config-select-work-item-type.png)  

1. (Optional) Select field criteria to limit the work items that appear in the chart. Filtering is based on values assigned to fields as defined for each work item on the date within the tracking period.  
   > [!NOTE]   
   > When setting filters in this step or the following step, it is important to understand how filters are applied to historical data. Read [Filters applied to historical data](../powerbi/analytics-historical-filtering.md) for more information.   
	- You can filter by any field available in your project, even a specific tag.  
	- Boolean fields aren't available for selection. 
	- No Date, HTML fields are available for filtering
	- All field criteria are AND-ed together. That is, work items must match all the field criteria to be included in the burndown or burnup chart.   
	For example, here we filter on top priority items by adding a filter **Priority >=2**.  
	:::image type="content" source="media/burndown-widget/burndownup-config-select-field-criteria.png" alt-text="Screenshot of Configuration dialog, Field criteria selection.":::


	You may add multiple field criteria, by selecting **Add criteria**. For example, you can also select a custom field such as Release, to create a burndown chart of only those items assigned to a specific release.    
	![Screenshot of Configuration dialog, Select multiple field criteria.](media/burndown-widget/burndownup-config-select-multiple-field-criteria.png)  
   
	> [!NOTE]  
	>   Analytics-based charts are built based on the `WorkItemsSnapshot` EntityType. Snapshot entity types are modeled as daily snapshots. Data is aggregated based on assignments made as of the date they are assigned. What this means is that if you want to filter a Burndown/Burnup widget based on field or tag assignments, you must assign those prior to the period you want to monitor. Otherwise, they aren't registered by the widget until the date on which they are applied.  
 
	::: moniker range=">= azure-devops-2022"
	You can even filter on a null value for the **Field Criteria**. This behavior is consistent with a query using the same field criteria. Here we select to filter on work items whose **Activity** value isn't defined. 

	:::image type="content" source="media/burndown/field-criteria-null-value.png" alt-text="Screenshot of Configuration dialog, Field Criteria section where only fields with a null value for Activity is set.":::
	::: moniker-end

## Choose your burndown/burnup metric to track 

- Select how you want to calculate burndown or burnup: by **Count** of work items or by **Sum** based on a selected field.  
	Here, we choose to base the burndown on a count of work items.   
	![Screenshot of Configuration dialog, Select burndown on count section.](media/burndown-widget/burndownup-config-select-burndown-on-count.png)  
	And, here we select a sum based on **Story Points**.   
	![Screenshot of Configuration dialog, Select burndown on Sum section.](media/burndown-widget/burndownup-config-select-burndown-on-field.png)  

	You can select from standard or custom fields of integer or decimal data type, such as **Story Points**, **Effort**, or  **Remaining Work**.  

	> [!NOTE]  
	> Burndown works best when aggregating size fields like Story PPoints. If you choose to Burndown on fields that change during the sprint, like Remaining Work for Tasks, the calculation of "Items not Estimated" will grow as items are closed. 
 

## Choose the time period and plotting interval  

- Select the time period. You can select from one of the following options to define your time period:

   | Option | Purpose for burndown | 
   | --- | --- | 
   | **Start Date** | Determines the original scope baseline. The chart burns down from the original scope. **% Complete** and **Total Scope Increase** are calculated based on your original scope. 
   | **End Date** | Specifies the target date of completion. Your goal is to burndown the original scope of work by the **End Date**.
   | **Plotting Interval** | Here you select the intervals to plot between the **Start Date** and **End Date**. Average Burndown is based on the selected interval. You can plot burndown based on daily/weekly/monthly intervals or based on an iteration schedule. 

	### Plot based on an iteration schedule
   
	After selecting the **Start Date**, set **Plot burndown by** to **Iteration**. You can select iterations from your current project.  
	![Screenshot of Configuration dialog, Select Iterations section with multiple iterations selected.](media/burndown-widget/burndownup-config-select-iterations.png)
   
	Add multiple iterations by selecting **Add iterations**.
   
	> [!TIP]   
	> The iteration selection box supports search. Type a partial name of an iteration and the closest match appears.  

	Iterations you can select are based on the **current project**, even if you selected teams from other projects. The burndown chart plots remaining work based on the end date of the iteration. It calculates remaining work across all teams and projects, based on that iteration end date. For example, if an iteration ends on 07/31/2022, the burndown chart calculates remaining work as of 07/30/2022, counting or summing all work items for every team or project. So, a cross-project burndown works when plotting by iterations, as long as all the teams have selected the same iteration schedule.

	The burndown chart uses the end date of each iteration to plot the remaining work for that iteration.

	If you select to plot based on an iteration schedule, you can't select **End Date**. The burndown assumes the **End Date** is the last iteration's end date.

	### Plot based on a daily, weekly, or monthly interval
	After selecting the **Start Date**, set **Plot burndown by** to **Date**. Specify the **End Date** for your burndown. 
	You can set **Plot interval** to Days, Weeks, or Months.  

	:::image type="content" source="media/burndown-widget/burndownup-config-select-time-period-daily.png" alt-text="Screenshot of Configuration dialog, select time period section with Plot interval set to Days.":::

	If you select **Weeks**, then you can select the **Last day of week**. The remaining work for each interval will be calculated based on that day.  

	:::image type="content" source="media/burndown-widget/burndownup-config-select-time-period-weekly.png" alt-text="Screenshot of Configuration dialog, select time period section with Plot interval set to Weeks.":::

	If you select **Months**, then burndown/burnup is calculated based on the last day of each month.  

	> [!NOTE]    
	> The **Average Burndown** assumes that every interval is the same length. It does not consider months that are different lengths. Additionally, it assumes that the interval between the **Start Date** and the first month is a full month, even if the length of time between **Start Date** and the first month's end date does not match your typical length of a month. For example, a **Start Date** of 11/15/2021, would plot the first month as 10/31/2021, but would be counted as a full month for your **Average Burndown**. For best results, enter a **Start Date** that is the same as the first month's start date. **This is also true when plotting by weekly intervals.**

## Other options 
Check the boxes of the following options that you want to add to your chart.    
* **Show burndown**: Displays both the historical and projected future burndown
* **Show total scope**: Displays both the historical and projected scope increase
* **Show completed work**: It displays remaining work and completed work as stack bar
* **Plot remaining using work item type color**: Displays remaining work based on the work item type color, rather than the default blue color. If multiple work items are included, then it stacks colors by work item type.

## Configure a Sprint Burndown widget

One of the most common burndowns is the sprint burndown. A Sprint burndown is useful to determine if your team is on track to complete their sprint plan. You can use the following example on how to configure your Burndown widget to represent a sprint burndown. For this example, we show burndown for the Fabrikam Fiber - Website team for sprint **08_2022**. The sprint starts on 08/01/2022 and ends on 08/31/2022.


1. Select a single team to monitor their sprint burndown.  

	![Screenshot of Configuration dialog for sprint burndown example, Select Teams section. ](./media/burndown-widget/sprint-burndownup-config-select-team.png)    

2. Choose your work items. For this example, select the **Stories** backlog.

	![Screenshot of Configuration dialog for sprint burndown example, Select work item types as Stories.](media/burndown-widget/burndownup-config-select-backlog.png) 

3. Select the iteration path you want to create the sprint burndown for. Add a field criteria on **Iteration Path** to match your sprint.  

	:::image type="content" source="media/burndown-widget/sprint-burndownup-config-filters.png" alt-text="Screenshot of Configuration dialog for sprint burndown example, set Field criteria to a select iteration.":::

4. Select how you want to calculate burndown. You can use **Count** of work items, or **Sum** of any field.

	![Screenshot of Configuration dialog for sprint burndown example, Select Burndown by Count of work items.](./media/burndown-widget/sprint-burndownup-config-wit-default.png) 

4. Set the start date to be the first day of your sprint. For example, 08/01/2022.

6. Set **Plot burndown by** to **Date**. Set the end date to be the last day of your sprint. For example, 08/31/2022.

	:::image type="content" source="media/burndown-widget/sprint-burndownup-config-dates.png" alt-text="Screenshot of Configuration dialog for sprint burndown example, set Time period section and plot by date.":::

8. Save your configuration. This widget now shows a daily burndown of the Fabrikam Fiber - Website team for sprint **08_2022**. The burndown shows a count of work items completed per day as well as remaining stories and bugs. As the team added 28 items after the sprint began, that number is reflected in the **Total Scope Increase**.

	:::image type="content" source="media/burndown-widget/sprint-burndown.png" alt-text="Screenshot of sprint burndown example chart.":::

	To change the sprint this widget is monitoring, for example to sprint **09_2022**, you need to manually change the widget configuration field criteria and dates.

## Configure a Sprint Burnup widget

Configuring the Burnup widget is exactly like configuring the Burndown widget, except that it plots work completed, rather than work remaining.

**Burnup Widget displaying a Stories Burnup**

![Screenshot of Burnup Widget example displaying team sprint Stories Burnup.](./media/burndown-widget/burndownup-stories-burnup.png)

## Next steps

> [!div class="nextstepaction"]
> [Burndown and burnup guidance](burndown-guidance.md) 

## Related articles 

- [Configure and monitor sprint burndown](configure-sprint-burndown.md)
- [Define iteration paths or sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Add a custom field to a work item type](../../organizations/settings/work/customize-process-field.md)
- [Applying filters to historical data](../powerbi/analytics-historical-filtering.md)
