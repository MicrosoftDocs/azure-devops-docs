---
title: Catalog of Out Of Box widgets you can add to a dashboard
titleSuffix: Azure DevOps
description: Learn about the widgets that you might want to add to your dashboards when you work in Azure DevOps.
ms.custom: dashboards, engagement-fy23
ms.subservice: azure-devops-analytics
ms.assetid: C9FD12C0-033E-4A4D-AF63-6EF67E7B4828
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 09/12/2024
#customer intent: As an administrator or team member, I want to understand the widgets I can use on a team or project dashboard in Azure DevOps.
---

# Out Of Box widget catalog

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Widgets display information and charts on dashboards. Many widgets are configurable or are scoped to a team or to the logged in user account. Many display information available from one or more data stores or charts maintained within the system. You add a widget to a dashboard or copy a widget from one dashboard to another. For more information, see [Add a widget to a dashboard](add-widget-to-dashboard.md).

For example, you can add the **Build History** widget from the dashboard's **Add Widget** dialog.

:::image type="content" source="media/widget-build-history-chart.png" alt-text="Screenshot shows the Build History Widget which includes an icon and description.":::

This article provides a quick reference of all out of box (OOB) widgets that you can add to your dashboard. In addition to these widgets, you might find more widgets in the [Marketplace](#marketplace) or create your own.

## Supported OOB widgets

Widgets listed in the following table are provided out-of-box. They're organized under the service they support:

- **Analytics**: Widget derives data from [Analytics data](../powerbi/what-is-analytics.md)  
- **Build**: Widget derives data for a selected build pipeline  
- **Project**: Widget where you can select the project and team when configuring the widget
- **Release**: Widget derives data for a selected release pipeline  
- **Team**: Widget is scoped to a single team  
- **Teams**: Widget is scoped to one or more teams
- **User**: Widget is scoped to the logged in user account

---
:::row:::
   :::column span="1":::
      ::: moniker range=">= azure-devops-2020"
      **Boards**
      - [Assigned to Me](#assigned-to-me-widget) (User)
      - [Burndown](#burndown-analytics-widget) (Analytics, Project, Teams)
      - [Burnup](#burnup-analytics-widget) (Analytics, Project, Teams)
      - [Chart for Work Items](#chart-wit-widget)  
      - [Cumulative Flow Diagram](#cfd-widget) (Team)
      - [Cycle Time (Analytics)](#cycle-time-widget) (Analytics, Team)  
      - [Lead Time (Analytics)](#lead-time-widget) (Analytics, Team)
      - [New Work Item](#new-work-item-widget)  
      - [Query Results](#query-results-widget)  
      - [Query Tile](#query-tile-widget)  
      - [Sprint Burndown](#sprint-burndown-analytics-widget) (Analytics, Team)  
      - [Sprint Burndown (Legacy)](#sprint-burndown-widget) (Team)
      - [Sprint Capacity](#sprint-capacity-widget) (Team)
      - [Sprint Overview](#sprint-overview-widget) (Team)
      - [Velocity](#velocity-widget) (Analytics, Team)  
      - [Work Links](#work-links-widget)  
      ::: moniker-end
      ::: moniker range="azure-devops-2019"
      **Boards**
      - [Assigned to Me](#assigned-to-me-widget) (User)
      - [Burndown](#burndown-analytics-widget)  (Analytics, Teams)
      - [Burnup](#burnup-analytics-widget) (Analytics, Teams)
      - [Chart for Work Items](#chart-wit-widget)  
      - [Cumulative Flow Diagram](#cfd-widget) (Team)  
      - [Cycle Time (Analytics)](#cycle-time-widget)  (Analytics, Team)
      - [Lead Time (Analytics)](#lead-time-widget)  (Analytics, Team)
      - [New Work Item](#new-work-item-widget)  
      - [Query Results](#query-results-widget)  
      - [Query Tile](#query-tile-widget)  
      - [Sprint Burndown](#sprint-burndown-widget) (Team)
      - [Sprint Capacity](#sprint-capacity-widget) (Team)
      - [Sprint Overview](#sprint-overview-widget) (Team)
      - [Velocity](#velocity-widget) (Analytics) (Team)
      - [Work Links](#work-links-widget)  
      ::: moniker-end
      ---
      **Repos**
      - [Code Tile](#code-tile-widget) (Repository, Branch, Folder)
      - [Pull Request](#pull-request-widget) (Team)
   :::column-end:::
   :::column span="1":::
      **Pipelines**
      - [Build History](#build-history-widget) (Build)
      - [Deployment status](#deployment-status-widget) (Build)
      - [Release Pipeline Overview](#release-definition-widget) (Release)
      - [Requirements quality](#requirements-quality-widget) (Query, Build, Release)
      ---
      **Test Plans**
      - [Chart for Test Plans](#chart-test-plan-widget)
      - [Test Results Trend](#test-trend-results) (Build, Release)  
      - [Test Results Trend (Advanced)](#test-trend-results-advanced) (Analytics, Build, Release)
      ---
      **Information and links**
      - [Embedded Webpage](#embedded-webpage-widget)  
      - [Markdown](#markdown-widget)  
      - [Other Links](#other-links-widget)  (Team)  
      - [Team Members](#team-members-widget) (Team)
      - [Visual Studio Shortcuts](#visual-studio-widget)
      - [Welcome](#how-to-widget)
   :::column-end:::
:::row-end:::
---

## Prerequisites

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least **Basic** access. |
| **Permissions** |To add widgets from the marketplace: Member of the [**Project Collection Administrators** group](../../organizations/security/look-up-project-collection-administrators.md). |
 
::: moniker-end

::: moniker range="< azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least **Stakeholder** access. |
| **Permissions** |To add widgets from the marketplace: Member of the [**Project Collection Administrators** group](../../organizations/security/look-up-project-collection-administrators.md). |

::: moniker-end

> [!NOTE]
> Data displayed within a chart or widget is subject to permissions granted to the signed in user. For more information, see [Access and permissions](faqs.yml#access-and-permissions).

## Azure Boards widgets

Add work tracking widgets to your dashboards that show status, progress, or trends. You use work items to plan and track work. For more information, see [Add and update a work item](../../boards/backlogs/add-work-items.md).

In addition to the widgets listed here, you can add a work item query chart to your dashboard. For more information, see [Track progress with status and trend query-based charts](charts.md).

:::row:::
   :::column span="1":::
      ### Assigned to Me  
      :::image type="icon" source="media/widget-assigned-to-me.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="assigned-to-me-widget"></a>
      Displays the active work items assigned to the current user. The list ignores closed, removed, cut, or deleted work items and other work item types, which aren't aligned to any backlogs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Burndown  
      :::image type="icon" source="media/widget-burndown-chart.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="burndown-analytics-widget"></a>  
      Displays a burndown chart that you can configure to span one or more teams, work item types, and time period. With it, you can create a release burndown, sprint burndown, or any burndown that spans teams and sprints.
 
      For more information, see [Configure a burndown or burnup widget](configure-burndown-burnup-widgets.md).
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      ### Burnup  
      :::image type="icon" source="media/widget-burnup-chart.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="burnup-analytics-widget"></a>
      Displays a burnup chart that you can configure to span one or more teams, work item types, and time period. With it, you can create a release burnup, sprint burnup, or any burnup that spans teams and sprints.  

      For more information, see [Configure a burndown or burnup widget](configure-burndown-burnup-widgets.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Chart for Work Items  
      :::image type="icon" source="media/widget-chart-work-query.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="chart-wit-widget"></a>
      Displays a progress or trend chart that builds off a shared work item query.

      From the configuration dialog, select a shared query and [specify the chart type and values](charts.md).      
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Cumulative Flow Diagram
      :::image type="icon" source="media/widget-cfd-chart.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="cfd-widget"></a>
      Displays the cumulative flow of backlog items based on the time frame, team, backlog level, and swimlane that you select. To see the count of items for a particular board column, hover over each color in the chart.  

      From the configuration dialog, [specify the team, backlog level, and other parameters you want](cumulative-flow.md#configure-widget). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Cycle Time  
      :::image type="icon" source="media/widget-cycle-time.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="cycle-time-widget"></a>
      Displays the cycle time of work items closed in a specified timeframe for a single team and backlog level. The cycle time of a work item is defined as the time taken to close a work item after work on it begins. Each marker on the chart corresponds to one or more work items with a particular cycle time. The lower the cycle time, the faster work is progressing through your development pipeline.  

      For more information, see [Lead time and cycle time control charts](cycle-time-and-lead-time.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Lead Time
      :::image type="icon" source="media/widget-lead-time.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="lead-time-widget"></a>
      Displays the lead time of work items closed in a specified timeframe for a single team and backlog level. The lead time of a work item is defined as the time taken to close a work item after it was created.  
      Each marker on the chart corresponds to one or more work items with a particular lead time. The lower the lead time, the faster work is being delivered to the customer.

      For more information, see [Lead time and cycle time control charts](cycle-time-and-lead-time.md). 
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      ### New Work Item
      :::image type="icon" source="media/widget-new-work-items.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="new-work-item-widget"></a>

      Enables you to add work items from the dashboard. Work items that you add using this widget are automatically scoped to the team's default **Area Path**. The **Iteration Path** assigned matches the last **Iteration Path** assigned to a work item by the currently signed in user.  

      To change team defaults, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      ### Query Results
      :::image type="icon" source="media/widget-query-results.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="query-results-widget"></a> 
      A configurable tile that lists the results of a shared query.
      From the configuration dialog, select either a team favorite or shared query.  

      To create a shared query, see [Use the query editor to list and manage queries](../../boards/queries/using-queries.md).
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      ### Query Tile 
      :::image type="icon" source="media/widget-query-tile.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="query-tile-widget"></a> 
      A configurable tile to display the summary of shared query results.
      From the configuration dialog, select either a team favorite or shared query. You can optionally specify rules to change the query tile color based on the number of work items returned by the query.

      To create a shared query, see [Use the query editor to list and manage queries](../../boards/queries/using-queries.md). 
   :::column-end:::
:::row-end:::  
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      ### Sprint Burndown (Analytics)  
      :::image type="icon" source="media/widget-sprint-burndown-analytics.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="sprint-burndown-analytics-widget"></a>
      A team's burndown chart for a sprint to the dashboard. This widget is based on Analytics data. You have several configuration options for this widget, including selecting a team, iteration, and time period.

      Teams [use the burndown chart to mitigate risk and check for scope creep](configure-sprint-burndown.md) throughout the sprint cycle. 
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      ### Sprint Burndown (Legacy)
      :::image type="icon" source="media/widget-sprint-burndown-legacy.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="burndown-widget"></a>  
      The team's burndown chart for the current sprint to the dashboard. This chart always displays data for the current sprint.

      Teams [use the burndown chart to mitigate risk and check for scope creep](configure-sprint-burndown.md) throughout the sprint cycle. 
   :::column-end:::
:::row-end::: 
::: moniker-end
::: moniker range="< azure-devops-2020"
:::row:::
   :::column span="1":::
      ### Sprint Burndown
     :::image type="icon" source="media/widget-sprint-burndown.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="sprint-burndown-widget"></a>
      The team's burndown chart for the current sprint to the dashboard. This chart always displays data for the current sprint.

      Teams [use the burndown chart to mitigate risk and check for scope creep](configure-sprint-burndown.md) throughout the sprint cycle. 
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="1":::
      ### Sprint Capacity
      :::image type="icon" source="media/widget-sprint-capacity.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="sprint-capacity-widget"></a> 
      The team's capacity bar chart for the current sprint.
      To plan and monitor their sprint resources, team set capacity and update Remaining Work throughout the sprint.

      See [Set capacity](../../boards/sprints/set-capacity.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Sprint Overview
      :::image type="icon" source="media/widget-sprint-overview.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="sprint-overview-widget"></a>

      A configurable overview of sprint progress. You can choose between a count of story points or number of work items. Selecting the **Show non-working days** checkbox indicates to count all remaining days in the sprint, regardless of the days the team has selected as days off.  
      
      Teams [plan their sprints by defining sprints](../../organizations/settings/set-iteration-paths-sprints.md) and [assigning backlog items to an iteration](../../boards/sprints/assign-work-sprint.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Velocity
     :::image type="icon" source="media/widget-velocity.png":::  
   :::column-end:::
   :::column span="1":::
      <a id="velocity-widget"></a> 
      The Velocity widget tracks a team's capacity to deliver work sprint after sprint. You configure the widget by selecting a team, a work item type, an aggregation field, and the number of sprints. The widget takes advantage of Analytics data. You can track the velocity for a single team, not multiple teams.

      For additional guidance, see [Velocity](team-velocity.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Work Links
     :::image type="icon" source="media/widget-work-links.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="work-links-widget"></a> 
      Provides quick access to open these Agile tools and team resources:
      
      - [Backlog](../../boards/backlogs/create-your-backlog.md)   
      - [Board](../../boards/boards/kanban-overview.md)    
      - [Taskboard](../../boards/sprints/task-board.md)    
      - [Queries](../../boards/queries/using-queries.md)  
   :::column-end:::
:::row-end:::

## Azure Repos widgets

Add code tracking widgets to track changes made within a repository or get quick access to Git pull requests for your team.  

:::row:::
   :::column span="1":::
      ### Code Tile
     :::image type="icon" source="media/widget-code-tile.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="code-tile-widget"></a> 
      A configurable tile that displays the summary of a code folder or Git repository. To configure, select the added tile, select a repository, select a branch (Git only), and select a path. The code tile supports both Team Foundation Version Control (TFVC) and Git repositories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Pull Request
      :::image type="icon" source="media/widget-catalog-pull-request.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="pull-request-widget"></a> 
      A configurable widget that displays active PRs requested by the team, or assigned to or requested by the person logged in. Select the team and  Git repository for the pull requests of interest.

      For more information, see [Review code with pull requests](../../repos/git/pull-requests.md).
   :::column-end:::
:::row-end:::

::: moniker range="= azure-devops"
:::row:::
   :::column span="1":::
      ### Pull Request (multiple repos)
      :::image type="icon" source="media/widget-catalog-pull-request-multi.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="pull-request-widget-multi"></a>
      A configurable widget to that displays active PRs requested by the team, or assigned to or requested by the person logged in. Select the team and up to 10 repositories for the pull requests of interest.

      For more information, see [Review code with pull requests](../../repos/git/pull-requests.md).

      *This widget is currently in private preview*
   :::column-end:::
:::row-end:::
::: moniker-end

## Azure Pipelines widgets

Add build and release pipeline widgets to track the health of your builds and releases.  

:::row:::
   :::column span="1":::
      ### Build History  
      :::image type="icon" source="media/widget-build-history-chart.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="build-history-widget"></a> 
      Displays a histogram of all builds run for the configured build pipeline.
      From the configuration dialog, select the build you want to monitor.
      Hover over a bar to learn how long the build took to complete. Select the bar to open the summary for that specific build. Bar color indicates: green-completed, red-failed, and yellow-completed without tests.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Deployment status
      :::image type="icon" source="media/widget-deployment-status.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="deployment-status-widget"></a> 
      Configurable widget that shows a combined view of the deployment status and test pass rate across multiple environments for a recent set of builds. Configure the widget by specifying a build pipeline, branch, and linked release pipelines.  
      To view the test summary across multiple environments in a release, the widget provides a matrix view of each environment and corresponding test pass rate.

      You can choose any cell to see a more [detailed view](../../pipelines/test/review-continuous-test-results-after-build.md) for the selected environment.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Release Pipeline Overview
      :::image type="icon" source="media/widget-release-definitions.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="release-definition-widget"></a> 
      Configurable widget that you can use to view and track the status of a release pipeline. This widget shows the release as a series of environments, with the name of the release and the date or time it was started.

      The color of the heading and the icon in each environment indicate the current status of the release, which are the same as are used on the **Releases** page. Select a release pipeline in the left column to filter the list to just releases for that pipeline.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Requirements quality
      :::image type="icon" source="media/widget-requirements-quality.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="requirements-quality-widget"></a>  
      Configurable widget that you can use to track quality continuously from a build or release pipeline. The widget shows the mapping between a requirement and latest test results executed against that requirement. It provides insights into requirements traceability. For example, requirements not meeting the quality, requirements not tested, and so on.
      
      For more information, see [Requirements traceability](../../pipelines/test/requirements-traceability.md) 
   :::column-end:::
:::row-end:::

## Azure Test Plans widgets

Add test tracking widgets to your dashboards to show status, progress, or trends of your testing efforts. In addition to the widgets listed here, you can add test tracking charts to your dashboard. For more information, see [Track test status](../../test/track-test-status.md).

:::row:::
   :::column span="1":::
      ### Chart for Test Plans  
      :::image type="icon" source="media/widget-chart-test-plans.png":::
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="chart-test-plan-widget"></a> 
      A configurable widget that lets you track the progress of test case authoring or status of test execution for tests in a test plan. Get started by selecting a test plan and a test suite. Then select test case chart for test authoring progress or test results for test execution progress. Finally, select the chart type and the pivots.

      For more information, see [Track your test results](../../test/track-test-status.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Test Results Trend
      :::image type="icon" source="media/widget-test-results-trend.png":::
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="test-trend-results"></a> <a id="test-results-widget"></a>
      A configurable tile that displays the trend of test results for the selected build or release pipeline. The widget helps you visualize the test trends over a period of time. The widget surfaces patterns about test failures, test duration, and others.

      From the configuration dialog, select the build or release whose test results to monitor. There are multiple chart options to choose from, such as Line, Column, and Stacked Column, based on your preference. Optionally, map the trend of test duration on the existing chart by adding a secondary line chart.    
      
      To get deeper insights and higher configurability, see [Test Analytics](../../pipelines/test/test-analytics.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      <a id="test-results-trend-advanced"></a>
      ### Test Results Trend (Advanced)
   :::column span="1":::
      > [!div class="mx-imgBorder"]  
      > :::image type="icon" source="media/widget-test-results-trend-advanced.png"::: 
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="test-trend-results-advanced"></a>
      The Test Results Trend (Advanced) widget provides near real-time visibility into test data for multiple builds and releases. The widget shows a trend of your test results for selected pipelines. You can use it to track the daily count of test, pass rate, and test duration. Tracking test quality over time and improving test collateral is key to maintaining a healthy DevOps pipeline.  
      The widget supports tracking advanced metrics for one or more build pipelines or release pipelines. The widget also allows filtering of test results by outcome, stacking metrics, and more.

      For more information, see [Configure the Test Results Trend (Advanced) widget](./configure-test-results-trend.md).
   :::column-end:::
:::row-end:::

## Informational content and other links

To support adding, add one or more of the following widgets:

- Configurable content
- Links to features
- Functions your team accesses often

:::row:::
   :::column span="1":::
      ### Embedded Webpage
      :::image type="icon" source="media/embedded-web-page-widget.png"::: 
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="embedded-webpage-widget"></a> 
      A configurable tile to display the contents of a web page. The page displayed is interactive.

      The widget supports webpages that allow [iframe embedding](https://go.microsoft.com/fwlink/?LinkId=808035).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Markdown
      :::image type="icon" source="media/widget-markdown-tile.png":::
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="markdown-widget"></a>  <a id="markdown"></a>   

      A configurable tile to display any type of information, guidance, or links that you want. You can also configure the widget to point to a file stored in your repository. From the configuration dialog, add the information you want to share with your team.    
      
      For more information, see [Add Markdown to a dashboard](add-markdown-to-dashboard.md).  
   :::column-end:::
:::row-end::: 
:::row:::
   :::column span="1":::
      ### Other Links
      :::image type="icon" source="media/widget-other-links.png":::  
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="other-links-widget"></a>   
      Provides links to the following features:

      - [Opens a form to initiate a request to provide feedback](/previous-versions/azure/devops/project/feedback/get-feedback)   
      - [Opens the team's quick dialog to add or modify the active sprints or iteration paths for your team](../../boards/sprints/define-sprints.md)   
      - [Opens the team's quick dialog to modify your team's area path](../../organizations/settings/set-area-paths.md)
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      ### Team Members
      :::image type="icon" source="media/widget-team-members.png":::
   :::column-end:::
   :::column span="1":::
      <br/>
      <a name="team-members-widget"></a> 
      Shows team member profiles and, on-hover, their user alias.

      For team admins, supports access to the quick dialog to [add or remove team members](../../organizations/settings/add-teams.md).     
      
      > [!NOTE]  
      > This widget is a convenient way to add team members to specific teams within projects.  If you remove it, you can still add users to your team from the team administration page.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Visual Studio Shortcuts
      :::image type="icon" source="media/widget-visual-studio.png":::
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="visual-studio-widget"></a> 
      Provides links to open or download Visual Studio.

      The Visual Studio IDE client comes with the [Team Explorer plug-in](../../user-guide/work-team-explorer.md) which provides quick access to several features, some of which aren't available through the web portal.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      ### Welcome
      :::image type="icon" source="media/widget-how-to-links.png":::
   :::column-end:::
   :::column span="1":::
      <br/>
      <a id="how-to-widget"></a>    
      Provides links to the major Azure DevOps Services, including work tracking boards, code, and builds, and reference documentation on how to add charts.

      :::image type="content" source="media/catalog/welcome-tile.png" alt-text="Screenshot shows the Welcome widget tile.":::  
   :::column-end:::
:::row-end:::

<a id="marketplace"></a>

## Marketplace widgets

You might find more widgets of interest in the [Marketplace](https://marketplace.visualstudio.com/search?term=webpage%20widget&target=VSTS&sortBy=Relevance).  

If your organization owner or project collection administrator disables a marketplace widget, you see the following image:

:::image type="content" source="media/widget-catalog-disabled-widget.png" alt-text="Screenshot of Disabled widget extension notification.":::

To regain access to it, request your admin to reinstate or reinstall the widget.

## Extensibility

Using the REST API service, you can [create a dashboard widget](../../extend/develop/add-dashboard-widget.md). For more information about the REST APIs for dashboards and widgets, see [Dashboards (API)](/rest/api/azure/devops/dashboard/dashboards).

<a id="related-notes"></a>  

## Related articles

- [View FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Track progress with status and trend query-based charts](charts.md)
- [Add, rename, and delete dashboards](dashboards.md)  
- [Add widgets to a dashboard](add-widget-to-dashboard.md)  
- [Add Markdown to a dashboard](add-markdown-to-dashboard.md)
