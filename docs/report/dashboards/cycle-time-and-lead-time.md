---
title: Cycle time and lead time control charts
titleSuffix: Azure DevOps Services  
description: Configure and use the cycle time and lead time control charts/widgets to improve your team's ability to plan and improve processes  
ms.custom: dashboards
ms.prod: devops  
ms.technology: devops-analytics  
ms.assetid: C444622C-A2CA-4FCF-9E68-90D8D4896E6B  
ms.topic: tutorial
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019' 
ms.date: 08/30/2019
---


# Lead time and cycle time widgets

[!INCLUDE [temp](../_shared/version-azure-devops.md)]


Both lead time and cycle time widgets are extremely useful to teams as they indicate how long it takes for work to flow through their development pipeline. Lead time measures the total time elapsed from the creation of work items to their completion. Cycle time measures the time it takes for your team to complete work items once they begin actively working on them.  

The following diagram illustrates how lead time differs from cycle time. Lead time is calculated from work item creation to entering a completed state. Cycle time is calculated from first entering an In Progress state to entering a Completed state. 

![Conceptual image of how cycle time and lead time are measured](_img/cycle-lead-time-concept-intro.png) 

These measures help teams plan, spot variations in efficiency, and identify potential process issues. The lower the lead and cycle times, the faster the throughput your team has.
 
In this article you'll learn:

> [!div class="checklist"] 
> * How to install and configure the Lead Time and Cycle Time widgets (Analytics)  
> * How to interpret the scatter-plot control charts  
> * How moving average and standard deviation are calculated in the charts

To learn more, see [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md).

[!INCLUDE [temp](../_shared/analytics-widgets-prerequisites.md)]


::: moniker range=">= azure-devops-2019" 


## Add the widget to your dashboard   

::: moniker-end

::: moniker range="azure-devops"
1. (Optional) If you haven't yet configured your team's Kanban board, do that now. Define the [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md) that support your workflow processes.  
2. If you haven't yet [added the widget to your dashboard](../add-widget-to-dashboard.md), do that now.  


::: moniker-end

::: moniker range="azure-devops-2019"
1. If you haven't yet [enabled or installed Analytics](analytics-extension.md)], do that now. 
2. (Optional) If you haven't yet configured your team's Kanban board, do that now. Define the [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md) that support your workflow processes.  
3. If you haven't yet [added the widget to your dashboard](../add-widget-to-dashboard.md), do that now.  

::: moniker-end


<a id="configure-widget"></a>

## Configure the Cycle Time and Lead Time widgets    

The Configuration dialog for the Cycle Time and Lead Time widgets is the same. You configure these widgets for a team. To learn more about teams, see [Add teams](../../organizations/settings/add-teams.md).  

::: moniker range="azure-devops"

1. Choose the ![Actions icon](../../_img/icons/actions-icon.png) actions icon and choose **Configure** to open the configuration dialog. Modify the title, and then select the team, backlog level, swimlane, field criteria, and time period you want to monitor.  

	> [!div class="mx-imgBorder"]  
	> ![Configure dialog, Lead Time widget](_img/lead-cycle/cycle-lead-time-configure-dialog-s156.png)

	To select a **Swimlane**, you must select a **Backlog**. 

1. To further filter the work items used to calculate the lead or cycle time, specify the **Field Criteria**. For example, all the work items whose Release field is set to Milestone 1. 

	> [!div class="mx-imgBorder"]  
	> ![Configure dialog, Lead Time widget](_img/lead-cycle/field-criteria-release.png)

1. For a continuous flow, choose **Rolling period** and specify the number of days you want to view on the chart.  

	Or, for a fixed scope view, choose and specify the Start date. Choose this view if your team employs a Scrumban process or follows a standard sprint process. 

	The main difference between these two types of charts is that the fixed scope chart will provide information (in most cases) of scope change.    

2. Choose Save when done. The following image shows an example Lead Time chart showing 60 days of data. 
   
	<img src="_img/cycle-lead-time-lt-sample-chart.png" alt="Example CFD chart, rolling 30 days" style="border: 2px solid #C3C3C3;" /> 

	For your lead/cycle time charts to provide useful data, your team must [Update the status](../../boards/boards/kanban-basics.md#track-work) in a timely manner those work items that the widgets track. 

::: moniker-end

::: moniker range="azure-devops-2019"

1. Choose the ![Actions icon](../../_img/icons/actions-icon.png) actions icon and choose **Configure** to open the configuration dialog. Modify the title, and then select the team, backlog level, swimlane, and time period you want to monitor.  

	![Configure dialog, Lead Time widget](_img/cycle-lead-time-configure-dialog.png)

	To select a **Swimlane**, you must select a **Backlog**. 

1. For a continuous flow, choose Rolling period and specify the number of days you want to view on the chart.  

	Or, for a fixed scope view, choose and specify the Start date. Choose this view if your team employs a Scrumban process or follows a standard sprint process. 

	The main difference between these two types of charts is that the fixed scope chart will provide information (in most cases) of scope change.    

2. Choose Save when done. The following image shows an example Lead Time chart showing 60 days of data. 
   
	<img src="_img/cycle-lead-time-lt-sample-chart.png" alt="Example CFD chart, rolling 30 days" style="border: 2px solid #C3C3C3;" /> 

	For your lead/cycle time charts to provide useful data, your team must [Update the status](../../boards/boards/kanban-basics.md#track-work) in a timely manner those work items that the widgets track. 

::: moniker-end
 


## Interpret the scatter-plot control charts 

Both Lead Time and Cycle Time widgets display as scatter-plot control charts. They display summary information as well as provide several interactive elements. 

**Example Lead Time widget**  

<img src="_img/lead-time-control-chart.png" alt="Cycle Time widget" style="border: 2px solid #C3C3C3;" />

The chart dots represent completed work items where their position on the horizontal axis represents the date they were completed. Their position on the vertical axis represents the calculated lead time or cycle time. 
- Larger dots represent multiple work items with the same lead/cycle time 
- Dot color corresponds to the work item type displayed in the legend
- Dark gray dots correspond to a mix of work item types.

#### Summary elements include: 

- Days on average (average lead time or cycle time) for the main work item types configured for the chart 
- The number of backlog work items used in the chart calculations; if there are more than three types of work items, you'll see a summary for Other  
- The black trend line indicates the moving average 
- The band around the trend line shows the standard deviation.

#### Interactive elements include:  

- Hover over any dot to see which work items contributed to the data point and the lead/cycle time for those items  
- Choose a dot to open the work item or query that lists the work items   
- To filter the chart, choose a work item type in the legend (![backlog item icon](../../_img/icons/user-story-icon.png),![bug item icon](../../_img/icons/bug-icon.png), or other icon)  to filter on that type; to return to the original chart, refresh the dashboard.  


## Moving average and standard deviation calculations 

The daily moving average value corresponds to the average of data points that fall within the moving average window. 
The time-based moving average window is calculated based on the current day and previous *N* days, where *N* corresponds to 20% of the number of days the chart displays, rounded down to the nearest odd number. 

For example, if the chart displays the last 30 days, then *N*=5 days (20% of 30 days=6 days, rounded down to 5). The moving average window for April 10th corresponds to the previous 5 days. Therefore, the April 10th moving average is the average of all data points that fall on April 5th through April 10th.  

If there are no data points that fall within the moving average window, the chart doesn't show a moving average line. This can happen if you are starting out and there aren't enough days to calculate a moving average. 

The standard deviation appears as a band that encompasses the moving average. Standard deviation is calculated based on all data points falling within the same moving average window. Like moving average, if no data points fall within the moving average window, the chart doesn't plot standard deviation.  


## Related articles

We recommend your team review the lead/cycle time charts before or during each retrospective. Use lead time to help estimate delivery times and track service level agreements (SLAs). Use cycle time to identify potential process issues, spot variations in trends, and help with planning.   

- [Cumulative flow, lead time, and cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md)  
- [Kanban basics](../../boards/boards/kanban-basics.md)  
- [Cumulative flow diagram](cumulative-flow.md)
- [Workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md)
- [Agile](../../boards/work-items/guidance/agile-process.md), [Scrum](../../boards/work-items/guidance/scrum-process.md), and [CMMI](../../boards/work-items/guidance/cmmi-process.md) processes

