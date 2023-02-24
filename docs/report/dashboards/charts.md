---
title: Status and trend work item, query-based charts
titleSuffix: Azure DevOps  
description: Learn how to add status, progress, and trend charts to dashboards from flat-based queries in Azure DevOps.
ms.custom: dashboards, contperf-fy20q4 
ms.subservice: azure-devops-analytics
ms.assetid: EFAD32DB-8B19-4ACC-8F72-87CC5A513798  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 02/14/2023
---

# Track progress with status and trend query-based charts 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can quickly view the status of work in progress by charting the results of a [flat-list query](../../boards/queries/using-queries.md). Different chart views such as pie, column, pivot, or trend are supported. Charts support viewing a count of work items or a sum of values for select numeric fields, such as Story Points, Effort, or Remaining Work. Group work by State, Assigned To, or other system defined or custom field.    

In this article you'll learn how to perform the following tasks:  

> [!div class="checklist"]    
> * Construct a flat-list query to support your chart
> * Create and share your query-based chart 
> * Create a status pie, column, bar, or pivot chart
> * Create a trend chart 
> * Add a chart to a dashboard 

> [!NOTE] 
> This article describes how to configure work tracking query charts. To add existing query charts to dashboards, see [Add charts to a dashboard](add-charts-to-dashboard.md). For information on configuring a **Chart for Work Items** widget, see [Configure a chart for work items widget](configure-chart-work-items-widget.md).
>   
>  For an overview of all work tracking charts and in-context reports, see [About dashboards, charts, reports, & widgets](overview.md).


::: moniker range=">= azure-devops-2019"

For example, the following image illustrates two different charts created from the same flat-list query. The pie chart groups the 19 bugs by state, and the bar chart groups the bugs by assignment and their current status.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Active bug charts added to dashboards.](media/overview/active-bug-charts-on-dashboards-2019.png)   

::: moniker-end

::: moniker range="tfs-2018"

For example, the following image illustrates four different charts created from the same flat-list query. The pie chart groups the 146 active bugs by priority, and the bar chart groups the bugs by team and their triage status. The last two chart show two different trend views of the active bugs over the last two weeks.  
  
![Screenshot of 4 charts for a flat-list query.](media/charts-active-bugs.png)

::: moniker-end

## Prerequisites

Prerequisites to meet include having **Basic** access or higher and to have created a flat-list query. Only flat-list queries support charts. 

If you want to add the chart to a dashboard, then you need to save the query under the **Shared Queries** folder, and create the dashboard where you want to add the chart. 

::: moniker range=">= azure-devops-2020"

- To create a query chart, you must have **Basic** access or higher. Users with **Stakeholder** access can't view or create charts from the **Queries** page, however, they can view charts added to a team dashboard. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). 
- To add a chart to a dashboard, you must save the query to a **Shared Queries** folder. To do that, you must be granted permissions to save queries under a folder. To get permissions granted, see [Set permissions on queries and query folders](../../boards/queries/set-query-permissions.md).
- To add a query chart to a team dashboard, you must be a member of the team or be a member of the **Project Administrators** security group.
- To add a query chart to a project dashboard, you must have created the dashboard or be granted permissions to edit the dashboard, or be a member of the **Project Administrators** security group.
- To view a query chart added to a dashboard, you must have **Read** permissions to the underlying query. If that permission has been denied, then the widget will display with a *Widget failed to load* message.
::: moniker-end

::: moniker range="azure-devops"
> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to query chart features just like users with **Basic** access. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

::: moniker-end

::: moniker range="< azure-devops-2020"

- To create a query chart, you must have **Basic** access or higher. Users with **Stakeholder** access can't view or create charts from the **Queries** page, however, they can view charts added to a team dashboard. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
- To add a chart to a dashboard, you must save the query to a **Shared Queries** folder. To do that, you must be granted permissions to save queries under a folder. To get permissions granted, see [Set permissions on queries and query folders](../../boards/queries/set-query-permissions.md).
- To add a query chart to a team dashboard, you must be a member of the team or be a member of the **Project Administrators** security group.
- To view a query chart added to a dashboard, you must have **Read** permissions to the underlying query. If that permission has been denied, then the widget will display with a *Widget failed to load* message.
::: moniker-end
 
To learn more about dashboard permissions, see [Set dashboard permissions](dashboard-permissions.md). 
 
### Create a flat-list query  

When creating a query to support your chart, follow these guidelines. 

- Always select the **Flat list of work items** query type. Other query types aren't supported for charting. For more information, see [Define a query, Define a flat-list query](../../boards/queries/using-queries.md#flat-list). 
- Add those fields to either a query clause or the column options that you want to use within your chart. You can group charts by any field except date-time, free-form text, and tag fields. For example: 
	- To group by Status, include the **State** field 
	- To group by work assignments, include the **Assigned To** field
	- To group by sprints or iterations, include the **Iteration Path**    
	- To group by team, include the **Node Name** field that displays the leaf node of the Area Path 
	- To group by a custom field, include it.  
- To sum a numeric column, include the corresponding field in your query clause or column options. For more examples of charts created from numeric fields, see [Query by a numeric field](../../boards/queries/query-numeric.md). 
- If you plan to add your query to a dashboard, [save your query as a **Shared query**](../../boards/queries/organize-queries.md).

::: moniker range=">= azure-devops-2022"

-  You can't group charts by the following field data types:
	-  ID
	-  Date-time, such as Created Date, Changed Date 
	-  Plain text, such as Title 
	-  Rich-text, such as Description, Repro Steps 
	-  Tags (You can filter a query using tags, however you can't use tags to configure your chart).

> [!NOTE]   
> You can't group a query-based chart by tags, however, you can group a **Chart for Work Items** widget by tags that you add to a dashboard as described in [Configure a chart for work items widget](configure-chart-work-items-widget.md).  

::: moniker-end

::: moniker range="< azure-devops-2022"

-  You can't group charts by the following field data types:
	-  ID
	-  Date-time, such as Created Date, Changed Date 
	-  Plain text, such as Title 
	-  Rich-text, such as Description, Repro Steps 
	-  Tags (You can filter a query using tags, however you can't use tags to configure your chart).
::: moniker-end

#### Display of areas and iterations

When you select **Area Path** or **Iteration Path**, only the leaf node appears in the chart. The leaf node is the last node of the full path. For example, ```Phone``` is the leaf node of ```FabrikamFiber/Fabrikam Website/Phone```. If your query contains a mixed level of leaf nodes, your chart might not reflect expected results.  

Select the **Node Name** field, the area path leaf node, to see if that improves your results. 

Charts display in browsers that support Scalable Vector Graphics (SVG). Supported browsers include Microsoft Edge, Internet Explorer 9 and later versions, Chrome, Firefox and Safari on Mac. Charts aren't optimized for mobile or touch displays.  


::: moniker range=">= azure-devops-2020"
> [!NOTE]   
> Internet Explorer is no longer supported for Azure DevOps Services, nor for Azure DevOps Server 2020.1.   

::: moniker-end


#### Sort by Value or Label 

Most charts allow you to choose how you want to sort the data. You can sort by **Value** or **Label** and select **Ascending** or **Descending**. 

- **Value**: Sorts data by the numeric value 
- **Label**: Sorts by the label selected for grouping the data.

#### Limited display of series 

::: moniker range=">= azure-devops-2019" 
When a chart contains more than eight or 12 items within the data series, values in the 9 or 13-plus items are consolidated into a set labeled "other"? However, if you increase the chart size through the configurable widget on a dashboard you may increase the series limit.  

![Screenshot of Other category groups data beyond 12 set series.](media/charts/other-12-series.png)  

::: moniker-end 


::: moniker range="tfs-2018"

When a chart contains more than seven items within the data series, values in the eight-plus items are consolidated into a set labeled "other"?   

![Screenshot of Other category groups data beyond 7 set series.](media/tfs-vso-remaining-category-consolidation-chart.png)  

::: moniker-end 

## Chart availability

- Charts saved under **Shared Queries** are viewable by all team members, except members with **Stakeholder** access, and can be added to dashboards.   
- Charts that you create for queries under your **My Queries** folder are visible only to you.   
- You can copy and email the URL of any chart page to share it with a project member. 
- To create similar charts for tests, see [Track test status](../../test/track-test-status.md).

## Create a query-based chart  

1. From **Queries**, open the chart editor for a flat list query. You must belong to the Contributors group to create charts. 

   ::: moniker range=">= azure-devops-2019"  
   > [!div class="mx-imgBorder"]  
   > ![Screenshot of New chart button.](media/charts/new-chart-new-qe.png)   
   ::: moniker-end  

   ::: moniker range="tfs-2018"  
   :::image type="content" source="media/charts-new-chart.png" alt-text="Screenshot of Web portal, Queries page, Chart tab, New chart link.":::  
   ::: moniker-end  

	If you have **Stakeholder** access, the **Charts** and **New Chart** links won't appear. 

2. Select the chart type and field for grouping values. When you use pie, bar, and column charts, select a single field to view a count of work items.  
   ::: moniker range=">= azure-devops-2019"  
   > [!div class="mx-imgBorder"]  
   > ![Screenshot of pie chart configure dialog.](media/charts/config-pie-chart-priority-qe.png)  
   ::: moniker-end  

   ::: moniker range="tfs-2018"  
   :::image type="content" source="media/charts-pie-chart-active-bugs-by-priority.png" alt-text="Screenshot of web portal, Queries page, Chart tab, Configure Chart dialog, Configure a Pie chart.":::    
   ::: moniker-end  

   If you don't see the field you want in the **Group by** drop-down list, [add the field as a column to the query and save the query](../../boards/backlogs/set-column-options.md). Also, the **Aggregation** options depend on the fields used in the query or those selected from the **Column Options**.  

   If you receive an error message when you close the chart editor, you need to request [Basic access](../../organizations/security/change-access-levels.md).

3. To sort the results, select **Value** or **Label** as the sort option and then **Ascending** or **Descending**.  

   ::: moniker range=">= azure-devops-2019"  
   To change a color, select a color from the Series set of color pickers.   
   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Charts dialog, color series picker.](media/charts/color-series-picker.png)  
   ::: moniker-end  

   ::: moniker range="tfs-2018"  
   To change a color, select a color on the chart and pick a new color from the color picker.  
   ::: moniker-end  

Charts automatically update when you edit the query or refresh the query results.  

<a id="pie-chart" /> 

## Add a Pie chart

Use a pie chart to show group percentages with six or fewer categories. Good examples of pie charts are: 

- Active Bugs Status, group by State
- User Story Status, group by State 
- User Story Progress, group by Completed, In Progress, or Cut 

For example, the following query filters User Stories based on the State for Cut, In Progress, and Completed since the start of the year. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Query Editor, filter User Stories by State.](media/charts/pie-chart-query.png) 

The pie chart configuration is as shown in the following image. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Configure chart dialog, Pie chart.](media/charts/pie-chart-configured.png)  

The combined query and chart configuration yield the following pie chart. 

![Screenshot of Charts, pie chart example.](media/charts/pie-chart-user-stories-progress.png)  

## Add a Stacked bar chart  

A stacked bar chart lets you track progress against two field values. Node Name will display the last leaf within an area path. Use this when you want to show data across teams, and each node corresponds to a team.  

::: moniker range=">= azure-devops-2019"  
> [!div class="mx-imgBorder"]  
> ![Screenshot of Configure chart dialog, Stacked bar chart.](media/charts/config-stacked-bar-chart-team-qe.png)   
::: moniker-end  

::: moniker range="tfs-2018"  
:::image type="content" source="media/charts-add-stacked-bar.png" alt-text="Screenshot of web portal, Queries page, Chart tab, Configure Chart dialog, Stacked bar chart.":::     
::: moniker-end   

## Add a Pivot table  

The Pivot table displays a table of configurable rows and columns, with columns showing a count of work items or sum of a numeric field. Choose a Pivot table when you want to compare across areas the work being performed. 

The following image shows an example of active bugs assigned to developers and their current state.  

> [!div class="mx-imgBorder"]  
> ![Screenshot of Configure Chart dialog, Pivot table.](../../boards/queries/media/numeric/config-pivot-items-developer.png) 

## Add a Trend chart  

Trend charts let you view progress over time. You can select a rolling period ranging from the last week to the last year.  

::: moniker range=">= azure-devops-2019"  
> [!div class="mx-imgBorder"]  
> ![Screenshot of Configure chart dialog, two week trend chart.](media/charts/config-2-week-trend-chart-bugs.png)   
::: moniker-end  

::: moniker range="tfs-2018"  
:::image type="content" source="media/charts-active-bugs-area-trend-2-weeks.png" alt-text="Screenshot of Web portal, Queries page, Chart tab, Configure Chart dialog, two week trend chart.":::  
::: moniker-end  

Trend data is extracted from the work tracking data store. Like most data stores, the schema of the relational database is designed and optimized for the online transactional processing of data. As the tool or plug-in performs an activity, it writes the latest information to the operational store. Therefore, data in the operational store is constantly changing and being updated, and all data is current.


## Add a Burndown chart  

Burndown charts are useful for determining how quickly work is progressing based on a numeric field value, such as Story Points, Effort, or Remaining Work, or on a count of work items. 

To create a burndown chart, make sure to add the numeric field you want to your query. To view a burndown chart of tasks, select the **Sum** operator for **Remaining Work**.  

::: moniker range=">= azure-devops-2019"  
> [!div class="mx-imgBorder"]  
> ![Screenshot of Configure chart dialog, Remaining work for past four weeks.](media/charts/config-remaining-work-trend-chart.png)   

In addition to query-based burndown charts, you can [Configure a Burndown or Burnup widget](configure-burndown-burnup-widgets.md). 

::: moniker-end  

::: moniker range="tfs-2018"   
:::image type="content" source="media/create-burndown-trend-sum-chart.png" alt-text="Screenshot of Web portal, Queries page, Chart tab, Configure Chart dialog, Trend chart for the past four weeks.":::  
::: moniker-end  


## Add chart to a dashboard 

A chart added to a dashboard is added through the addition of a **Chart for Work Items** widget. You can add the chart to a dashboard as shown in the following procedure, or by adding the **Chart for Work Items** widget directly. To learn more, see [Configure a chart for work items widget](configure-chart-work-items-widget.md). 

> [!TIP]    
> All query charts are limited in size. However, charts added to a dashboard can be re-sized and re-configured by opening the **Chart for Work Items** widget used to display them.  

- Select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the chart you want to add, and select **Add to dashboard**.  

::: moniker range=">= azure-devops-2019"  
> [!div class="mx-imgBorder"]  
> ![Chart context menu, Add to dashboard option](media/charts/add-chart-to-dashboard-qe.png)   

The **Add to dashboard** menu option is only available for queries that have been saved to a **Shared Queries** folder. 

In the dialog that opens, select the dashboard to add the chart to. 

> [!div class="mx-imgBorder"]  
> ![Select a dashboard dialog](media/charts/select-dashboard-dialog.png)  
::: moniker-end  

::: moniker range="tfs-2018"  
![Chart context menu, add to a team dashboard](media/pin-chart-to-a-dashboard.png)
::: moniker-end  

To add other types of charts, such as test results and build summary charts, see [Add widgets and chart to a dashboard](add-widget-to-dashboard.md). 

::: moniker range="< azure-devops-2022"

## Query-based charts versus Excel-generated PivotCharts  

Query-based charts generate data from the work item tracking data store and therefore display the most recent data. [Excel PivotCharts](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports) access data published to the Analysis Services cube, which is refreshed every two hours by default. Excel charts require your project's project collection is configured with SQL Server Reporting Services and Analysis Services. 

::: moniker-end

## Related articles

- [Example query charts](../../boards/queries/example-query-charts.md)
- [Configure a chart for work items widget](configure-chart-work-items-widget.md)
- [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Cumulative flow diagram](cumulative-flow.md)  
- [Team velocity](team-velocity.md)  
- [View/configure sprint burndown](configure-sprint-burndown.md)  
- [Track test status](../../test/track-test-status.md)  
- [Add widgets and chart to a dashboard](add-widget-to-dashboard.md)
- [Widget catalog](widget-catalog.md)
