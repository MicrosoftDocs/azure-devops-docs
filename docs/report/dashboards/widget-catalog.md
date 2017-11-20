---
title: Catalog of widgets supported for team dashboards in VSTS or TFS 
description: Determine which widgets you want to add to your dashboards when working in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) 
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: C9FD12C0-033E-4A4D-AF63-6EF67E7B4828
ms.manager: douge
ms.author: kaelli
ms.date: 09/13/2017
---

# Widget catalog 

**VSTS | TFS 2018 | TFS 2017 | TFS 2015.1-2015.3**  

Widgets display information and charts on dashboards. Many of them are configurable and display information available from one or more data stores or charts maintained within the system. 

To add a widget to a dashboard or copy a widget from one dashboard to another, see [Add a widget to a dashboard](add-widget-to-dashboard.md).    


> [!NOTE]  
> **Feature availability**: You can access the widget catalog from VSTS or the web portal for TFS 2015.1 or later version. All widgets listed below are available from the web portal for VSTS. Some widgets listed below are only available when you connect to TFS 2015 Update 2 or later version.  
>
> With TFS 2015, you have access to a [single team dashboard](team-dashboard.md) with which you can pin items but can't add widgets to the dashboard. Install [TFS 2015 Update 1](https://www.visualstudio.com/news/tfs2015-update1-vs.aspx) or later version to get access to the widget catalog and [multiple team dashboards](dashboards.md). 
To determine the platform and version you're on, see [Provide product and content feedback, Platforms and version support](../../user-guide/provide-feedback.md#platform-version). 

## User-focused and team-scoped widgets 

User-focused widgets display information based on the logged-in user. 

Team-scoped widgets display data based on the selected team context.  
 

## Code

<a id="code-tile-widget"></a> 
### Code tile	

![Code tile widget](_img/widget-code-tile.png)

Adds a configurable tile to display the summary of a code folder or Git repository. To configure, simply click the added tile, select a repository, select a branch (Git only) and select a path. The code tile supports both TFVC and Git repositories. 

----

<a id="pull-request-widget"></a> 
### Pull request (user-focused or team-scoped)  

![Pull request widget](_img/widget-catalog-pull-request.png)

> [!NOTE]  
> **<b>Feature availability:** Available from VSTS or TFS 2015.2 or later version.   



Adds a configurable tile to display active pull requests requested by the team, or assigned to or requested by the person logged in. Select the Git repository for the pull requests of interest. 

You need to add a widget for each Git repository of interest.
To learn more about pull requests, see [Review code with pull requests](../../git/pull-requests.md).





## Plan and track work  

<a id="assigned-to-me-widget"></a>
### Assigned to me (user-focused)  
 
![Assigned to me widget](_img/widget-assigned-to-me.png)  

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS and TFS 2017.   



Displays the list of work items currently assigned to the currently logged in user. The list ignores closed or deleted work items.
 


 

----
### Burndown chart  
<a id="chart-wit-widget"></a> 
	

![Burndown chart widget](_img/widget-burndown-chart.png)  


> [!NOTE]  
> **Feature availability:** This widget is available for VSTS.  To add it to your dashboard, you first need to install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget(s) to your dashboard](add-widget-to-dashboard.md). You must be an account owner or a member of the [Project Collection Administrator group](../../tfs-server/add-administrator-tfs.md) to add extensions.    

Adds a tile that displays a burndown chart which you can configure to span one or more teams, work item types, and time period. With it, you can create a release burndown, sprint burndown, or any burndown that spans teams and sprints. To learn more, see [Configure a Burndown or Burnup widget](configure-burndown-burnup-widgets.md).  



----
### Burnup chart  
<a id="chart-wit-widget"></a> 
	

![Burnup chart widget](_img/widget-burnup-chart.png)  


> [!NOTE]  
> **Feature availability:** This widget is available for VSTS.  To add it to your dashboard, you first need to install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget(s) to your dashboard](add-widget-to-dashboard.md). You must be an account owner or a member of the [Project Collection Administrator group](../../tfs-server/add-administrator-tfs.md) to add extensions.    

Adds a tile that displays a burnup chart which you can configure to span one or more teams, work item types, and time period. With it, you can create a release burnup, sprint burnup, or any burnup that spans teams and sprints. To learn more, see [Configure a Burndown or Burnup widget](configure-burndown-burnup-widgets.md).  

 
----
### Chart for work items  
<a id="chart-wit-widget"></a> 
	

![Chart work item query widget](_img/widget-chart-work-query.png)  

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS or TFS 2015.2 or later version. For TFS 2015.1 and earlier versions, see [Add charts to a dashboard](add-charts-to-dashboard.md#add-charts) to add shared query charts to a dashboard.    

Adds a tile to display a progress or trend chart that builds off a shared work item query.  
From the configuration dialog, select a shared query and [specify the chart type and values](charts.md#add-chart-widget).   

----

<a id="cfd-widget"></a> 
### Cumulative flow diagram (team-scoped)  

![Cumulative flow diagram widget](_img/widget-cfd-chart.png)  

> [!NOTE]  
> **Feature availability:** This widget is available for VSTS.  To add it to your dashboard, you first need to install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget(s) to your dashboard](add-widget-to-dashboard.md). You must be an account owner or a member of the [Project Collection Administrator group](../../tfs-server/add-administrator-tfs.md) to add extensions. 
 

Displays the cumulative flow of backlog items based on the time frame, team, backlog level and swimlane you select. 

From the configuration dialog, [specify the team, backlog level, and other parameters you want](cumulative-flow.md#configure-widget).

Hover over each color within the chart to see the count of items for a particular Kanban column.  


----
<a id="cycle-time-widget"></a> 
### Cycle time (team-scoped)  

![Cumulative flow diagram widget](_img/widget-cycle-time.png)  

> [!NOTE]  
> **Feature availability:** This widget is available for VSTS.  To add it to your dashboard, you first need to install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget(s) to your dashboard](add-widget-to-dashboard.md). You must be an account owner or a member of the [Project Collection Administrator group](../../tfs-server/add-administrator-tfs.md) to add extensions. 
 

Displays the cycle time of work items closed in a specified timeframe for a single team and backlog level. The cycle time of a work item is defined as the time taken to close a work item after work on it has started. 

Each marker on the chart corresponds to one or more work items with a particular cycle time. The lower the cycle time, the faster work is progressing through your development pipeline.


----
<a id="lead-time-widget"></a> 
### Lead time (team-scoped)  

![Lead time widget](_img/widget-lead-time.png)  

> [!NOTE]  
> **Feature availability:** This widget is available for VSTS. To add it to your dashboard, you first need to install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget(s) to your dashboard](add-widget-to-dashboard.md). You must be an account owner or a member of the [Project Collection Administrator group](../../tfs-server/add-administrator-tfs.md) to add extensions. 
 

Displays the lead time of work items closed in a specified timeframe for a single team and backlog level. The lead time of a work item is defined as the time taken to close a work item after it was created. 

Each marker on the chart corresponds to one or more work items with a particular lead time. The lower the lead time, the faster work is being delivered to the customer.
  
----

<a id="new-work-item-widget"></a>
### New Work item (team-scoped) 
	
![New work item widget](_img/widget-new-work-items.png)

Enables you to add work items from the dashboard. You [use work items to plan and track work](../../work/backlogs/add-work-items.md).  <br/><br/>

Work items that you add using this widget are automatically scoped to the team's default area path and the team's current sprint (TFS) or the default iteration (VSTS). To change team defaults, see [Set team defaults](../../work/scale/set-team-defaults.md).


----

<a id="other-links-widget"></a> 
### Other links (team-scoped) 

![Other links widget](_img/widget-other-links.png)  

Provides links to the following features: 
- Opens a form to initiate a [request to provide feedback](/vsts/feedback/get-feedback?toc=/vsts/feedback/toc.json).
- Opens the team's quick dialog to add or modify the active sprints or iteration paths for your team. To learn more see [Define sprints](../../work/scrum/define-sprints.md).
- Opens the team's quick dialog to modify your [team's area path](../../work/scale/set-team-defaults.md).

For on-premises TFS, additional links are displayed when the corresponding resource is configured for the team project: 

**On-premises TFS with configured resources**

![Other links widget](_img/widget-other-links-tfs.png)  

- [View project portal](../sharepoint-dashboards/share-information-using-the-project-portal.md) (opens either a SharePoint site or URL that's been configured as the team project's portal.  
- [View process guidance](../sharepoint-dashboards/configure-or-redirect-process-guidance.md) (opens either a SharePoint site or URL that's been configured as the team project's process guidance.  
- [View reports](../sql-reports/reporting-services-reports.md) (opens SQL Server Reporting Services). To add or update reports for a team project, see [Add reports to a team project](../admin/add-reports-to-a-team-project.md). 
 

----

<a id="query-results-widget"></a> 
### Query results 
	

![Query results widget](_img/widget-query-results.png)

Adds a configurable tile that lists the results of a shared query. 
From the configuration dialog, select either a team favorite or shared query.  
To create a shared query, see [Use the query editor to list and manage queries](../../work/track/using-queries.md). 


----
<a id="query-tile-widget"></a> 
### Query tile 

![Query tile widget](_img/widget-query-tile.png)

Adds a configurable tile to display the summary of a shared query results.
From the configuration dialog, select either a team favorite or shared query. You can optionally specify rules to change the query tile color based on the number of work items returned by the query. 
To create a shared query, see [Use the query editor to list and manage queries](../../Work/track/using-queries.md). 
  

---- 

<a id="sprint-burndown-widget"></a>
<a id="burndown-widget"></a> 
### Sprint burndown (team-scoped) 

![Sprint burndown widget](_img/widget-sprint-burndown.png)

Adds the team's burndown chart for the current sprint to the dashboard. This chart always displays data for the current sprint.
Teams [use the burndown chart to mitigate risk and check for scope creep](../../work/scrum/sprint-burndown.md) throughout the sprint cycle. 


---- 

<a id="sprint-capacity-widget"></a> 
### Sprint capacity (team-scoped) 

![Sprint capacity widget](_img/widget-sprint-capacity.png)


Inserts the team's capacity bar chart for the current sprint.
Teams [specify their capacity to plan and monitor their sprint resources](../../work/scale/capacity-planning.md).  

---- 
<a id="sprint-overview-widget"></a> 
### Sprint overview (team-scoped) 

![Sprint overview widget](_img/widget-sprint-overview.png)


For VSTS, inserts a configurable overview of sprint progress. You can choose between a count of story points or number of work items.  
For on-premises TFS, inserts a visual overview of sprint progress indicating the number of backlog items in progress, completed, or not started.

Teams [plan their sprints by defining sprints](../../work/scale/set-team-defaults.md) and [assigning backlog items to an iteration](../../work/scrum/sprint-planning.md). 

---- 
<a id="velocity-widget"></a> 
### Velocity (team-scoped) 

![Sprint velocity widget](_img/widget-velocity.png)

> [!NOTE]  
> **Feature availability:** This widget is available for VSTS. To add it to your dashboard, you first need to install the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You can then [add the widget to your dashboard](add-widget-to-dashboard.md). You must be an account owner or a member of the [Project Collection Administrator group](../../tfs-server/add-administrator-tfs.md) to add extensions.


The velocity widget tracks a team's capacity to deliver work sprint after sprint. You configure the widget by selecting a team, a work item type, an aggregation field, and the number of sprints. The widget takes advantage of the Analytics service. You can track the velocity for a single team, not multiple teams.    
For additional guidance, see [Velocity](team-velocity.md). 


---- 
<a id="work-links-widget"></a> 
### Work links (team-scoped) 

![Work links widget](_img/widget-work-links.png)
Provides quick access to open the following Agile tools and team resources:

- [Backlog](../../Work/backlogs/create-your-backlog.md)  
- [Kanban Board](../../Work/kanban/kanban-basics.md)  
- [Task board](../../Work/scrum/task-board.md)  
- [Queries](../../Work/track/using-queries.md)  


## Build, test, release   

<a id="build-history-widget"></a> 
### Chart for build history  

![Build history widget](_img/widget-build-history-chart.png)   

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS or TFS 2015.2 or later version. For TFS 2015.1 and earlier versions, see [Add charts to a dashboard](add-charts-to-dashboard.md#add-charts) to add a build summary chart to a dashboard.  

Adds a tile to display a histogram of all builds run for the configured build definition.
From the configuration dialog, select the build you want to monitor. 
Hover over a bar to learn how long the build took to complete. Click the bar to open the summary for that specific build. Bar color indicates: green-completed, red-failed, and yellow-completed without tests. 



----
<a id="chart-test-plan-widget"></a> 
### Chart for test plans  
	
![Chart work item query widget](_img/widget-chart-test-plans.png)  

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS and TFS 2017.2 and later versions. For TFS 2015.1 and earlier versions, see [Add charts to a dashboard](add-charts-to-dashboard.md#add-charts) to add other supported chart types to a dashboard.    

Adds a configurable widget that lets you track the progress of test case authoring or status of test execution for tests in a test plan. Get started by selecting a test plan and a test suite. Then select test case chart for test authoring progress or test results for test execution progress. Finally, select the chart type and the pivots. 

To learn more, see [Track your test results](../../manual-test/getting-started/track-test-status.md).

---- 

<a id="deployment-status-widget"></a> 
### Deployment status 

![Deployment status widget](_img/widget-deployment-status.png)  

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS or TFS 2017.1 or later versions.  

Configurable widget that shows a consolidated view of the deployment status and test pass rate across multiple environments for a recent set of builds. You configure the widget by specifying a build definition, branch, and linked release definitions. 

To learn more, see [View and manage releases](../../build-release/actions/view-manage-releases.md#release-overview).


---- 
<a id="release-definition-widget"></a> 
### Release definition overview 

![Release definition overview widget](_img/widget-release-definitions.png)  

> [!NOTE]  
> **Feature availability:**  You can access this widget from VSTS.   

Configurable widget that you can use to view and track the status of a release definition. The widget shows the release as a series of environments, with the name of the release and the date or time it was started. The color of the heading and the icon in each environment indicate the current status of the release, which are the same as are used on the **Releases** page. Select a release definition in the left column to filter the list to just releases for that definition.
To learn more, see [Add release information to the dashboard](../../build-release/actions/view-manage-releases.md#add-widget). 

---- 
<a id="requirements-quality-widget"></a> 
### Requirements quality 
<a id="requirements-quality-widget"></a>  

![Requirements quality widget](_img/widget-requirements-quality.png)  

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS or TFS 2017.   

Configurable widget that you can use to track quality continuously from a build or release definition. 
To learn more, see [Associate automated test results with requirements](../../build-release/test/associate-automated-results-with-requirements.md). 

---- 
<a id="test-results-widget"></a>
### Test results trend 

![Test results trend widget](_img/widget-test-results-trend.png)

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS or TFS 2017.   

Adds a configurable tile that displays the trend of test results, such as passed or failed tests, for the selected build definition. 

From the configuration dialog, select the build whose test results you'd like to monitor. Then, choose the type of chart you want displayed. You can track the trend of test duration by adding an optional line chart. 

To learn more about creating charts for tracking test results, see [Review continuous test results after a build](../../build-release/test/review-continuous-test-results-after-build.md). 

## Informational content and other links 

<a id="embedded-webpage-widget"></a> 
### Embedded web page 

![Embedded web page widget](_img/embedded-web-page-widget.png)

> [!NOTE]  
> **Feature availability:** You can access this widget from VSTS or TFS 2017 or later version.  

Adds a configurable tile to display the contents of a web page. Only webpages that allow [iframe embedding](http://go.microsoft.com/fwlink/?LinkId=808035) are supported.

---- 
<a id="markdown-widget"></a> 
<a id="markdown"></a>
### Markdown 


![Markdown widget](_img/widget-markdown-tile.png)

> [!NOTE]  
> **Feature availability:** For VSTS and TFS 2015.2 or later versions, you can configure the widget to point to a file stored in your repository.  
 
Adds a configurable tile to display any type of information, guidance, or links that you want.
From the configuration dialog, add the information you want to share with your team. 

To learn more, see [ Add Markdown to a dashboard](add-markdown-to-dashboard.md). 


---- 
<a name="team-members-widget"></a> 
### Team members (team-scoped) 

![Team members widget](_img/widget-team-members.png)

Sows team member profiles and, on-hover, their user account alias.
For team admins, supports access to the quick dialog to [add or remove team members](../../work/scale/multiple-teams.md).  


> [!NOTE]  
> This widget is a convenient way to add team members to specific teams within projects.  If you remove it, you can still [add members to your team from the team administration page](../../work/scale/multiple-teams.md#add-team-members). 

---- 
<a id="team-room-widget"></a> 
### Team room (team-scoped) 

![Team room widget](_img/widget-team-room.png)

Provides status and access to [team rooms](../../collaborate/collaborate-in-a-team-room.md).
Team rooms support increased team productivity by providing a space to discuss work in progress, ask questions, share status, and clarify issues that arise. Team administrators can create additional team rooms.  

---- 
<a id="visual-studio-widget"></a> 
### Visual Studio Shortcuts 

![Visual Studio widget](_img/widget-visual-studio.png)

Provides links to open or download Visual Studio. The Visual Studio IDE client comes with the [Team Explorer plug-in](../../user-guide/work-team-explorer.md) which provides quick access to several features (some of which aren't available through the web portal).

---- 
<a id="how-to-widget"></a>
### Welcome 

![How to links widget](_img/widget-how-to-links.png)

Provides links to the Work, Code, and Build hubs and reference documentation on how to add charts.

<a id="related-notes"></a>  
## Related notes

These represent the basic widgets. Look forward to more widgets becoming available in the coming months. 

### Marketplace widgets

You may find additional widgets of interest from the [Marketplace](https://marketplace.visualstudio.com/search?term=webpage%20widget&target=VSTS&sortBy=Relevance).  

If your account or project collection administrator disables a marketplace widget, you'll see the following image: 

<img src="_img/widget-catalog-disabled-widget.png" alt="Disabled widget extension notification" style="border: 2px solid #C3C3C3;" />   

To regain access to it, request your admin to reinstate or reinstall the widget. 

### Extensibility 

Using the REST API service, you can [create a dashboard widget](../../extend/develop/add-dashboard-widget.md). To learn more about the REST APIs for dashboards and widgets, see [Dashboards](https://www.visualstudio.com/en-us/docs/integrate/api/dashboard/dashboards).


