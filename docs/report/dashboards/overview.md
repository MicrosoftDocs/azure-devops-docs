---
title: Dashboards, charts, & widgets
titleSuffix: VSTS & TFS  
description: Review of the OOB charts, widgets, dashboards, & reports available to monitor status and trends in VSTS & Team Foundation Server (TFS)  
ms.assetid: 7BAD53A1-080E-40E8-8866-24EC00395D39
ms.prod: devops
ms.technology: devops-analytics
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: overview
monikerRange: 'vsts || >= tfs-2013'
ms.date: 03/23/2018
---

# Dashboards, charts, & widgets    

[!INCLUDE [temp](../_shared/vsts-tfs-header-17-15.md)] 

Customizable, highly-configurable dashboards provide you and your teams with the flexibility to share information, monitor progress and trends, and improve your workflow processes. 

::: moniker range="vsts || >= tfs-2015"

## Add widgets to your dashboard   

With dashboards, you can configure an array of charts and widgets. 

Each team can [add and configure multiple dashboards](dashboards.md) to share information, view status, progress, and trends, and access quick links and other functions. Easily add and rearrange widgets on the dashboard to show recent changes made to view build status, bug trends, and more. 

![Example dashboard](_img/dashboard-view-with-widgets.png)


**Sample chart widgets**  

![Lead time widget](_img/lead-time-control-chart.png) ![Cumulative flow diagram widget](_img/cfd-exampe-rolling-30-days.png)   

**Sequence for adding and customizing a dashboard**

[![Add dashboard](_img/gs-add-dashboard.png)](dashboards.md)[![Add widget](_img/gs-add-widget.png)](add-widget-to-dashboard.md) 



### Monitor code activity, build progress and deployment status

With the code tile widgets, you can monitor the activity occuring within a repo or branch folder. Build history displays a histogram of all builds run for a specific build definition. Bar color indicates: green-completed, red-failed, and yellow-completed without tests. 

**Code, build, and release chart widgets**  

![Code tile widget](_img/widget-code-tile.png)&nbsp;&nbsp;&nbsp;![Pull request widget](_img/widget-catalog-pull-request.png)  
![Build history widget](_img/widget-build-history-chart.png)&nbsp;&nbsp;&nbsp;![Deployment status widget](_img/widget-deployment-status.png)    

::: moniker-end

::: moniker range="vsts || >= tfs-2015"

### Marketplace widgets

In addition to the widgets available to your from the widget catalog, you may find additional widgets of interest from the [Marketplace](https://marketplace.visualstudio.com/search?term=webpage%20widget&target=VSTS&sortBy=Relevance).  

::: moniker-end

::: moniker range="vsts || >= tfs-2013"

<a id="monitor-progress">  </a>
## Generate status and trend charts from queries  

With flat-list queries, you can create various charts to monitor status, progress, and trends. To get started, you can open a shared query and create a chart based on your tracking interests. Chart types include status&mdash;pie, bar, column, stacked bar, and pivot&mdash;and trend&mdash;stacked area, line, and area&mdash;charts.   


#### Sample Agile tool light-weight charts   

![Active bugs](_img/gs-monitor-charts-active-bugs.png)   

**Sequence for adding query-based charts to a dashboard**   

[![Edit query](_img/gs-chart-query.png)](../../work/track/using-queries.md)[![Create chart](_img/gs-chart-create.png)](charts.md)[![Add chart to dashboard](_img/gs-chart-add-dashboard.png)](add-charts-to-dashboard.md#add-charts)   


Prior to monitoring work progress and trends, you'll need to have [planned your project and made progress on work you're tracking](../../work/backlogs/create-your-backlog.md). 


## Test progress, results, and trends  

The steps to creating charts that track test progress and results are similar to those for tracking work. The starting point, however, begins with the test plan rather than a query. For example, you can find out how many test cases are ready to run, or how many tests are passing and failing in each test suite. 

#### Sample light-weight test charts   

![Active bugs](_img/gs-monitor-test-charts.png)

And, just like work item query-based charts, you can add these charts to a dashboard.  

**Sequence for adding test progress and result charts to a dashboard**  

[![Edit query](_img/gs-chart-test-type.png)](../../manual-test/getting-started/track-test-status.md)[![Create chart](_img/gs-chart-create.png)](charts.md)[![Add chart to dashboard](_img/gs-chart-add-dashboard.png)](add-charts-to-dashboard.md#add-charts)



## System-generated work tracking charts 

There are a number of system-generated charts that you can access from the web portal, but can't add to a dashboard. However, you may find a comparable widget listed in the [widget catalog](widget-catalog.md) that tracks the same or similar data which you can add to the dashboard. These include: 


- [Cumulative flow](cumulative-flow.md)
- [Team velocity](team-velocity.md)
- [Sprint burndown chart](../../work/scrum/sprint-burndown.md)  


## Sprint charts     

Each sprint provides access to two charts. The first [tracks capacity](../../work/scrum/define-sprints.md) for the team, team activities&mdash;such as Development, Test, Design&mdash;and individual team members. The second tracks the [sprint burndown](../../work/scrum/sprint-burndown.md) in terms of remaining work. 

| Capacity bars | Burndown  |
|-------| ----- |
|![Capacity bars](../../work/scrum/_img/ALM_DS_CapacityBars_S.png) | ![Burndown chart](../../work/scrum/_img/ALM_DS_SprntBD_Chrt_S.png)  |


**Sprint chart widgets**  

 ![Sprint capacity widget](_img/widget-sprint-capacity.png)  ![Sprint burndown widget](_img/widget-sprint-burndown.png)   


::: moniker-end

::: moniker range="vsts"
 
## The Analytics Service and Analytics widgets
The Analytics Service is in preview and available to all VSTS accounts. To learn more, see these topics: 
- [Widgets based on the Analytics Service](../analytics/analytics-widgets-vsts.md)
- [Add an Analytics widget to a dashboard](../analytics/enable-analytics-velocity.md)
- [What is the Analytics Service?](../analytics/what-is-analytics.md)

::: moniker-end


::: moniker range="vsts || >= tfs-2015 <= tfs-2018"

## Try this next

> [!div class="nextstepaction"]
> [Add a widget to a dashboard](widget-catalog.md) 
> or
> [Review available widgets](widget-catalog.md) 

::: moniker-end

::: moniker range="vsts"
### Add custom fields
  
You can add data to support reporting requirements by [adding a custom field](../../work/customize/process/customize-process-field.md).   

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

### Add custom fields
  
You can add data to support reporting requirements by [adding a custom field](../../work/customize/add-modify-field.md).  

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
### Extensibility 

Using the REST API service, you can [create a custom widget](../../extend/develop/add-dashboard-widget.md). 
 
::: moniker-end


<!---
*   Incorporate data from other resources to an Excel report using PowerPivot.
    PowerPivot for Excel 2010 is a data analysis add-in for Microsoft Excel 2010. By using this add-in, you can generate reports that combine data from other data stores or databases with data from Team Foundation Server. For more information, see [Microsoft PowerPivot](https://msdn.microsoft.com/library/gg399131.aspx). 

*   Create an adapter to add new data types to the data warehouse (TFS).
    An adapter is a managed assembly that implements [IWarehouseAdapter](http://msdn.microsoft.com/library/microsoft.teamfoundation.adapter.iwarehouseadapter.aspx). An adapter uses the warehouse object model to interact with the TFS data warehouse. When an adapter adds data fields to the warehouse, it programmatically extends the schema that defines data that is moved to the warehouse. For more information, see [Data Warehouse Extensibility](http://msdn.microsoft.com/library/bb130342.aspx) and [How to: Create an Adapter](http://msdn.microsoft.com/library/bb286956.aspx). 

--> 

<!---
<a id="shared-queries">  </a>
#### Predefined shared queries   

| Area| Agile | Scrum | CMMI | 
|-------|-------| ----- | ---- |   
|Project | Product Backlog<br/>Product Planning | Product Backlog | Customer Requirements<br/>Open Requirements<br/>Product Requirements <br/> |  
|Sprint | Iteration Backlog<br/> | Sprint Backlog<br/>Unfinished Work<br/>Work in Progress | none defined <sup>1</sup> |  
|Bug | Active Bugs<br/>Bug Triage<br/>Resolved Bugs | none defined <sup>2</sup>| Active Bugs<br/>Resolved Bugs |  
|Test | Open Test Cases<br/>User Stories without Test Cases | Test Cases | Open Test Cases<br/>Test Tasks |  

1. Create sprint-specific queries by adding a filter clause ```Iteration Path=@CurrentIteration``` to an existing project status query.    
2. The Scrum process treats bugs the same as product backlog items, so no bug-specific queries are predefined. To monitor bugs, add a filter clause with ```Work Item Type=Bug```.   



-->

[excel-adhoc-query-report]: ../excel/create-status-and-trend-excel-reports.md
[add-a-team]: ../../work/scale/multiple-teams.md
[team-assets]: ../../work/scale/manage-team-assets.md
[add-team-members]: ../../work/scale/multiple-teams.md#add-team-members
[add-team-admin]: ../../work/scale/add-team-administrator.md
   

