---
title: Monitor progress and trends | Team Services & TFS
description: Get started guide to monitor progress and trends, create charts and share with team members on dashboards using Agile tools and work item tracking with Visual Studio Team Services (VSTS) or Team Foundation Server 
ms.technology: vs-devops-reporting
ms.prod: vs-devops-alm
ms.topic: get-started-article  
ms.assetid: 1308AF23-68C9-486D-9F9A-E0559F498F43  
ms.manager: douge
ms.author: kaelli
ms.date: 04/24/2017
---

# Get started with Agile tools to monitor progress and trends   

[!INCLUDE [temp](../work/_shared/dev15-version-header.md)] 

With Agile tools you gain access to a number of light-weight charts and tracking tools. You can add most charts to a team dashboard to get a unified picture of trends you want to monitor. These methods serve the needs of most teams to track their progress and provide status to their stakeholders.  

##Create light-weight charts  
To get started, you can open a shared query and create a chart based on your tracking interests. Chart types include status--pie, bar, column, stacked bar, and pivot--and trend -- stacked area, line, and area--charts.   

[![Edit query](_img/gs-chart-query.png)](../work/track/using-queries.md)[![Create chart](_img/gs-chart-create.png)](charts.md)[![Add chart to dashboard](_img/gs-chart-add-dashboard.png)](add-widget-to-dashboard.md#add-charts)  

The available queries differ based on the process--[Agile](../work/guidance/agile-process.md), [Scrum](../work/guidance/scrum-process.md), or [CMMI](../work/guidance/cmmi-process.md)--selected to create your team project.  

####Sample Agile tool light-weight charts   

![Active bugs](_img/gs-monitor-charts-active-bugs.png)   

##Add chart widgets to a dashboard   
Dashboards allow you to configure an array of charts that you want to monitor. From the dashboard you can add chart widgets and configure them. Charts that track work require you to first define the query.   

[![Add dashboard](_img/gs-add-dashboard.png)](dashboards.md)[![Add widget](_img/gs-add-widget.png)](widget-catalog.md) [![Add query-based widget](_img/gs-add-query-based-widget.png)](widget-catalog.md)


**Sample Agile tool chart widgets**  

![Cumulative flow diagram widget](_img/widget-cfd-chart.png) ![Chart work item query widget](_img/widget-chart-work-query.png)   


## Sprint charts     

Each sprint provides access to two charts. The first [tracks capacity](../work/scrum/define-sprints.md) for the team, team activities--such as Development, Test, Design--and individual team members. The second tracks the [sprint burndown](../work/scrum/sprint-burndown.md) in terms of remaining work. 

| Capacity bars | Burndown  |
|-------| ----- |
|![Capacity bars](../work/scrum/_img/ALM_DS_CapacityBars_S.png) | ![Burndown chart](../work/scrum/_img/ALM_DS_SprntBD_Chrt_S.png)  |


**Sprint chart widgets**  

 ![Sprint capacity widget](_img/widget-sprint-capacity.png)  ![Sprint burndown widget](_img/widget-sprint-burndown.png)   


## Test progress, results, and trends  

The steps to creating charts that track test progress and results are similar to those for tracking work. The starting point, however, begins with the test plan rather than a query. For example, you can find out how many test cases are ready to run, or how many tests are passing and failing in each test suite. 

[![Edit query](_img/gs-chart-test-type.png)](../test/manual-exploratory-testing/getting-started/track-test-status.md)[![Create chart](_img/gs-chart-create.png)](charts.md)[![Add chart to dashboard](_img/gs-chart-add-dashboard.png)](add-widget-to-dashboard.md#add-charts)


And, just like work item query-based charts, you can add these charts to a dashboard.  

####Sample light-weight test charts   

![Active bugs](_img/gs-monitor-test-charts.png)



## Monitor code activity, build progress and trends  

With the code tile widgets, you can monitor the activity occuring within a repo or branch folder. Build history displays a histogram of all builds run for a specific build definition. Bar color indicates: green-completed, red-failed, and yellow-completed without tests. 

**Code and build history chart widgets**  

![Code tile widget](_img/widget-code-tile.png)
![Build history widget](_img/widget-build-history-chart.png)  


##Try this next  

Take these tools for a test run by [creating an account on Team Services for free](../setup-admin/team-services/sign-up-for-visual-studio-team-services.md).  

##Related notes

Prior to monitoring progress and trends, you'll need to have [planned your project and made progress on work you're tracking](../work/agile-project-management.md). 

In addition to the lightweight charts, you also have access to these reports, subject to platform and resource requirements being met.   


<a id="shared-queries">  </a>
### Predefined shared queries   

| Area| Agile | Scrum | CMMI | 
|-------|-------| ----- | ---- |   
|Project | Product Backlog<br/>Product Planning | Product Backlog | Customer Requirements<br/>Open Requirements<br/>Product Requirements <br/> |  
|Sprint | Iteration Backlog<br/> | Sprint Backlog<br/>Unfinished Work<br/>Work in Progress | none defined <sup>1</sup> |  
|Bug | Active Bugs<br/>Bug Triage<br/>Resolved Bugs | none defined <sup>2</sup>| Active Bugs<br/>Resolved Bugs |  
|Test | Open Test Cases<br/>User Stories without Test Cases | Test Cases | Open Test Cases<br/>Test Tasks |  

1. Create sprint-specific queries by adding a filter clause ```Iteration Path=@CurrentIteration``` to an existing project status query.    
2. The Scrum process treats bugs the same as product backlog items, so no bug-specific queries are predefined. To monitor bugs, add a filter clause with ```Work Item Type=Bug```.   

### Extensibility  
In addition to the widgets described in the Widget catalog, you may also add widgets made available through the [Marketplace (Team Services only)](https://marketplace.visualstudio.com/#VSTS) or create your own widgets using the [Widget REST APIs](https://www.visualstudio.com/integrate/extensions/develop/add-dashboard-widget). 

Or, you can [add a custom field](../work/process/customize-process.md) to support additional tracking needs.   



