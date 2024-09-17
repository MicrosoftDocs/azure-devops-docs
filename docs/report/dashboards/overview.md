---
title: Understand dashboards, charts, reports, and widgets
titleSuffix: Azure DevOps  
description: Learn about charts, widgets, dashboards, and reports available to monitor status and trends in Azure DevOps.
ms.custom: dashboards
ms.assetid: 7BAD53A1-080E-40E8-8866-24EC00395D39
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 09/17/2024
#customer intent:  As an administrator or team member, I want to understand how using a dashboard can provide visibility into projects for my team.
---

# About dashboards, charts, reports, and widgets

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Gain visibility into your team's progress by adding one or more widgets or charts to your dashboard. Customizable, highly configurable dashboards provide you and your teams with the flexibility to share information, monitor progress and trends, and improve your workflow processes. Each team can tailor their dashboards to share information and monitor their progress.

If you're just starting out, read [Add, rename, and delete dashboards](dashboards.md). Looking for instructions on a specific task, in-context chart, widget, or report? See [Dashboards, charts, and quick reference](quick-ref.md). For more information, see the [Reporting roadmap](../powerbi/reporting-roadmap.md).

[!INCLUDE [version selector](../../includes/version-selector.md)]

## Supported capabilities, permissions, and access

Access to Azure DevOps web portal features are managed through access levels assigned to users.

### Web portal data views and reports

The following features provide support for viewing Azure DevOps data through the web portal:

- **Dashboards**: Customizable interactive signboards that provide real-time information. Dashboards are associated with a team or a project and display configurable charts and widgets.
- **Charts**: Query-based status or trend charts derived from a work item query or test results.
- **Widgets**: Items that display configurable information and charts on dashboards. The widget catalog provides brief descriptions of those widgets available to you. Also, you can add widgets provided through [Azure DevOps Marketplace](https://marketplace.visualstudio.com/azuredevops).
- **In-context reports**: System-generated charts that support specific services. Examples are team velocity, sprint burndown, the Cumulative Flow Diagram (CFD), and the **Test failures** report. These reports are displayed on the **Analytics** tab for a specific service and derive data from Analytics.

::: moniker range=">= azure-devops-2019"

### Power BI reports

The following features provide support for viewing Azure DevOps data by using Power BI:

- **Analytics views**: Provide a simplified way to specify the filter criteria for a Power BI report based on Analytics data for Azure Boards data. For more information, see [About Analytics views](../powerbi/what-are-analytics-views.md).
- **Power BI reports**: Allow users to create rich, customized Power BI reports or other reports using OData queries of Analytics data and the returned JSON data. For on-premises Azure DevOps environments, project collections must be configured to support the Inherited process.

> [!NOTE]
> Open Data Protocol (OData) is an ISO/IEC approved, OASIS standard that defines a set of best practices for building and consuming REST APIs. For more information, see [OData documentation](/odata/).
::: moniker-end  

::: moniker range="< azure-devops-2022"

### SQL Server reports

SQL Server Reporting Services is the legacy reporting solution available with Azure DevOps Server 2020 and earlier versions. The following features provide support for viewing Azure DevOps data by using SQL Server Reports Services and SQL Server Analysis Services.

::: moniker-end  

::: moniker range=">= azure-devops-2019 < azure-devops-2022"

- **Excel status and trend reports**: Support generating custom work tracking reports by using Excel starting with a flat-list query. For more information, see [Create status and trend reports from a work item query](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports).
- **SQL Server reports**: For project collections that support the On-premises XML process model, allow users access to out-of-the-box SQL Server reports and support to create customized SQL reports or Excel reports. Doing so requires that the project is [configured to support SQL Server reporting](/previous-versions/azure/devops/report/admin/add-a-report-server).

::: moniker-end  

### Supported features for access levels

Users with **Stakeholder** access get restricted privileges, granting them access to only those features outlined in the following table. For more information, see [About access levels](../../organizations/security/access-levels.md). In addition to access levels, certain features require permissions to execute.

> [!NOTE]
> Data displayed within a chart or widget is subject to permissions granted to the signed-in user. For more information, see [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml).

:::row:::
   :::column span="3":::
      **Supported features and tasks**
   :::column-end:::
   :::column span="1":::
      **Stakeholder**
   :::column-end:::
   :::column span="1":::
      **Basic**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Dashboards (View)
   :::column-end:::
   :::column span="1":::
       ✔️  
   :::column-end:::
   :::column span="1":::
       ✔️  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      Dashboards (Create and edit)
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
   :::column span="1":::
       ✔️  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      Charts, Widgets (View)
   :::column-end:::
   :::column span="1":::
       ✔️  
   :::column-end:::
   :::column span="1":::
       ✔️  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      Charts, Widgets (Add and configure)
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
   :::column span="1":::
       ✔️  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      In-context reports
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="3":::
      Analytics views
   :::column-end:::
   :::column span="1":::
        
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="3":::
      Power BI reports
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="< azure-devops"
:::row:::
   :::column span="3":::
      SQL Server reports
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
   :::column span="1":::
       ✔️
   :::column-end:::
:::row-end:::
::: moniker-end

### Default permissions

::: moniker range="azure-devops"
For Dashboards, set [individual dashboard permissions](dashboard-permissions.md) to grant or restrict the ability to edit or delete dashboards.
::: moniker-end

::: moniker range="< azure-devops"
For Dashboards, set [dashboard permissions](dashboard-permissions.md) at the team level for team dashboards.
::: moniker-end

[!INCLUDE [report dashboard permissions](../../organizations/security/includes/report.md)]

::: moniker range=">= azure-devops-2019" 

For Power BI Integration and Analytics views, you set [permissions](../powerbi/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level.

[!INCLUDE [analytics dashboard permissions](../../organizations/security/includes/analytics.md)]

::: moniker-end

## Configurable dashboards

With dashboards, you can configure an array of charts and widgets.

Each team can [add and configure multiple dashboards](dashboards.md) to:

- Share information.
- View status, progress, and trends.
- Access quick links and other functions.

Easily add and rearrange widgets on the dashboard to show recent changes made to view build status, bug trends, and more.

:::image type="content" source="media/dashboard-view-with-widgets.png" alt-text="Screenshot that shows an example dashboard.":::

#### Sequence for adding and customizing a dashboard

Select one of the following boxes to open the corresponding article.

[:::image type="content" source="media/gs-add-dashboard.png" alt-text="Diagram is a link to Add dashboard article.":::](dashboards.md) [:::image type="content" source="media/gs-add-widget.png" alt-text="Diagram is a link to Add widget article.":::](add-widget-to-dashboard.md)

<a id="monitor-progress">  </a>

## Charts: Work tracking status and trends

With flat-list queries, you can create various charts to monitor status, progress, and trends. Before you monitor work progress and trends, [plan your project and make progress on work you're tracking](../../boards/backlogs/create-your-backlog.md).

You can open a shared query, create a chart, and add it to the dashboard. After the chart is added to the dashboard, you can change the **Chart for work items** widget configuration to resize or change the chart parameters. Or, from the dashboard, you can add a **Chart for work items** widget and choose a shared query and set the chart parameters. You have multiple chart types from which to choose. Status charts include pie, bar, column, stacked bar, and pivot. Trend charts include stacked area, line, and area.

For more information, see [Define a query](../../boards/queries/using-queries.md) and [Track progress with status and trend query-based charts](charts.md).

#### Sample Agile tool lightweight charts

::: moniker range=">= azure-devops-2019"

:::image type="content" source="media/overview/active-bug-charts-on-dashboards-2019.png" alt-text="Screenshot that shows Active bug charts added to dashboards.":::

::: moniker-end

#### Sequence for adding query-based charts to a dashboard

Select one of the following boxes to open the corresponding article.

[:::image type="content" source="media/gs-chart-query.png" alt-text="Diagram that is a link to Edit query article.":::](../../boards/queries/using-queries.md) [:::image type="content" source="media/gs-chart-create.png" alt-text="Diagram is a link to create a chart article.":::](add-charts-to-dashboard.md) [:::image type="content" source="media/gs-chart-add-dashboard.png" alt-text="Diagram is a link to Add chart to dashboard article.":::](add-charts-to-dashboard.md)

## Charts: Manual testing progress, results, and trends

The steps to creating charts that track manual testing progress and results are similar to the ones for tracking work. The starting point is the test plan rather than a query. For example, you can find out how many test cases are ready to run, or how many tests are passing and failing in each test suite. And, just like work item query-based charts, you can add these charts to a dashboard.

For more information, see:

- [Create test plans and test suites](../../test/create-a-test-plan.md)
- [Create manual test cases](../../test/create-test-cases.md)
- [Track testing progress](../../test/track-test-status.md#charts)

#### Sample lightweight test charts
  
:::image type="content" source="media/gs-monitor-test-charts.png" alt-text="Screenshot that shows the Web Team test plan is a chart showing counts of tests in various stages, with tests broken down by suite.":::

## Widgets

You add widgets to a dashboard to display a chart, information, or set of links. Most widgets are configurable. For a description of each supported widget for your platform and version, see the [Widget catalog](widget-catalog.md). Here are the widgets that support the indicated service.

[!INCLUDE [widget catalog links](../includes/widgets-oob.md)]

### Sprint chart widgets

[:::image type="icon" source="media/widget-sprint-capacity.png":::](widget-catalog.md#sprint-capacity-widget) [:::image type="icon" source="media/widget-sprint-burndown.png":::](widget-catalog.md#sprint-burndown-analytics-widget)

::: moniker range=">= azure-devops-2019"

### Sprint scope change

There's no chart or widget that tracks changes to sprint scope. However, you can determine work items added to a sprint or moved out of a sprint by using the Query Editor. For more information, see [Query sprint scope changes](../../boards/sprints/scrum-overview.md#sprint-scope-change).

::: moniker-end

::: moniker range=">= azure-devops-2019"

### Sample Cumulative Flow Diagram widget

:::image type="content" source="media/cfd-exampe-rolling-30-days.png" alt-text="Screenshot that shows a Cumulative Flow Diagram widget.":::

::: moniker-end

### Monitor code activity, build progress, and deployment status

With the code tile widgets, you can monitor the activity occurring within a repository or branch folder. Build history displays a histogram of all builds run for a specific build pipeline. Bar colors use green for completed, red for failed, and yellow for completed without tests.

#### Code, build, and release chart widgets

:::image type="content" source="media/widget-code-tile.png" alt-text="Screenshot that shows a Code tile widget.":::

:::image type="content" source="media/widget-catalog-pull-request.png" alt-text="Screenshot that shows a Pull request widget.":::

:::image type="content" source="media/widget-deployment-status.png" alt-text="Screenshot that shows a Build history widget.":::

:::image type="content" source="media/widget-build-history-chart.png" alt-text="Screenshot that shows a Deployment status widget.":::

::: moniker range=">= azure-devops-2019"

### Analytics widgets and reports

::: moniker-end

::: moniker range=">= azure-devops-2020"

The Analytics service is the reporting platform for Azure DevOps. As described in [What is Analytics?](../powerbi/what-is-analytics.md), it replaces the previous platform based on SQL Server Reporting Services. The Analytics service supports Analytics widgets, [in-context Analytics reports](#work-tracking-analytics), and Analytics views for Power BI reporting. For more information, see [About Analytics views](../powerbi/what-are-analytics-views.md).

::: moniker-end

::: moniker range="azure-devops-2019"

The Analytics service is the reporting platform for Azure DevOps. As described in [What is the Analytics service?](../powerbi/what-is-analytics.md), it replaces the previous platform based on SQL Server Reporting Services. The Analytics service supports Analytics widgets and [Analytics views for Power BI reporting](../powerbi/what-are-analytics-views.md).

> [!NOTE]
> Analytics is in preview for Azure DevOps Server 2019 and generally available for Azure DevOps Server 2020 and later versions.

::: moniker-end

::: moniker range=">= azure-devops-2019"

#### Sample Lead time widget

:::image type="content" source="media/lead-time-control-chart.png" alt-text="Screenshot that shows a Lead time widget.":::

For more information, see [Widgets based on Analytics data](../dashboards/analytics-widgets.md) and [Add an Analytics widget to a dashboard](../dashboards/add-widget-to-dashboard.md#add-analytics-widget).

::: moniker-end

<a id="work-tracking-analytics"></a>

## In-context reports: Work tracking

::: moniker range=">= azure-devops-2020"

Azure Boards provides several in-context reports that derive from Analytics data. From your backlog or board, you can view the Cumulative Flow Diagram and team Velocity reports by selecting the **Analytics** tab. Each report provides interactive controls to provide each user the view of interest to them. From a Sprint backlog, you can view the Sprint Burndown Trend.

### Cumulative Flow Diagram

Use the interactive controls to choose the time frame, swimlanes, and workflow states or board columns.

:::image type="content" source="media/cfd/analytics-cfd-azure-devops.png" alt-text="Screenshot that shows open CFD analytics." lightbox="media/cfd/analytics-cfd-azure-devops.png":::

### Velocity

Use the interactive controls to choose the count or sum field and number of iterations.

:::image type="content" source="media/velocity/analytics-velocity-azure-devops.png" alt-text="Screenshot that shows open Velocity analytics.":::

### Sprint Burndown Trend

Use the interactive controls to choose the start and end of the sprint and count or sum field to use in the burndown. If you don't track Remaining Work in tasks, you can view burndown based on a count of work items or tasks.

:::image type="content" source="../../boards/sprints/media/burndown/analytics-burndown-remaining-work.png" alt-text="Screenshot that shows Burndown Trend based on Remaining Work." lightbox="../../boards/sprints/media/burndown/analytics-burndown-remaining-work.png":::

::: moniker-end

::: moniker range="=azure-devops-2019"

Azure Boards provides several in-context reports that derive from the work-tracking data store. From your backlog or board, you can view the Cumulative Flow Diagram and team Velocity reports by choosing the miniature charts that appear on each page. From a Sprint backlog, you can view the sprint burndown.

### Cumulative Flow Diagram

The CFD report shows the count of work items in the backlog based on their state over time.

:::image type="content" source="media/cfd/data-store-cumulative-flow-opened.png" alt-text="Screenshot that shows an opened CFD chart.":::

### Velocity

Velocity is based on the values entered for **Effort**, **Story Points**, or **Size** fields for work items that belong to the **Requirement** category.

:::image type="content" source="media/team-velocity-chart-web-7-iterations.png" alt-text="Screenshot that shows a web portal Velocity chart showing seven sprints of in-progress and completed work.":::

### Sprint burndown

Each sprint provides access to two charts. The first [tracks capacity](../../boards/sprints/define-sprints.md) for the team, team activities, such as Development, Test, or Design, and individual team members. The second tracks the [sprint burndown](configure-sprint-burndown.md) for remaining work.

| Capacity bars | Burndown  |
|-------| ----- |
|:::image type="content" source="../../boards/sprints/media/ALM_DS_CapacityBars_S.png" alt-text="Screenshot that shows Capacity bars."::: | :::image type="content" source="../../boards/sprints/media/ALM_DS_SprntBD_Chrt_S.png" alt-text="Screenshot that shows a Burndown chart."::: |

::: moniker-end

::: moniker range=">= azure-devops-2020"

You can add the in-context reports to a dashboard by using the copy to dashboard option from the report's context menu.

:::image type="content" source="media/add-charts/add-analytics-chart-abbreviated.png" alt-text="Screenshot that shows an Analytics in-context report with the Copy to dashboard action.":::

::: moniker-end

::: moniker range="=azure-devops-2019"

> [!NOTE]
> You can't add the in-context reports to a dashboard. However, you might find a comparable widget listed in the [widget catalog](widget-catalog.md) that tracks the same or similar data, which you can add to the dashboard.
::: moniker-end

For more information about these reports, see:

- [Cumulative flow](cumulative-flow.md)
- [Team velocity](team-velocity.md)
- [Sprint burndown](configure-sprint-burndown.md)

<a id="incontext-reports"></a>  

::: moniker range=">= azure-devops-2020"

## In-context reports: Pipelines and Test

Several in-context reports are provided for Azure Pipelines. These reports derive from Analytics data. Open a pipeline or release summary for **Test failures** to view the reports and select the **Analytics** tab. Select **View full report** on a summary card for a detailed report.

:::image type="content" source="../../pipelines/reports/media/pipelines-reports/analyticstab.png" alt-text="Screenshot that shows the Analytics tab.":::

For more information on each in-context Analytics report for pipeline runs, see:
::: moniker-end

::: moniker range="azure-devops"

- [Historical graph for agent pools (preview)](../../pipelines/agents/pool-consumption-report.md)
- [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-pass-rate-report)
- [Test pass rate report](../../pipelines/reports/pipelinereport.md#test-failures-report)
- [Pipeline duration report](../../pipelines/reports/pipelinereport.md#pipeline-duration-report)
- [Test analytics for builds](../../pipelines/test/test-analytics.md)
- [Test analytics for releases](../../pipelines/test/test-analytics.md)

::: moniker-end

::: moniker range="azure-devops-2020"
- [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-pass-rate-report)
- [Test pass rate report](../../pipelines/reports/pipelinereport.md#test-failures-report)
- [Pipeline duration report](../../pipelines/reports/pipelinereport.md#pipeline-duration-report)
- [Test analytics for builds](../../pipelines/test/test-analytics.md)
- [Test analytics for releases](../../pipelines/test/test-analytics.md)
::: moniker-end

::: moniker range=">= azure-devops-2020"
You can also use Power BI and OData to create reports based on pipeline and test data. For more information, see the [Overview of sample reports using OData queries](../powerbi/sample-odata-overview.md).
::: moniker-end

::: moniker range=">= azure-devops-2020"

### Pipeline pass rate report

The **Pipeline pass rate** report provides a trend of pipeline failure and task failure of the pipeline. You can view the pass rate of the pipeline over a configurable period of time, for example, 7, 14, or 30 days. Find more details in **Task failure details**, which not only highlights the trend but also lists the top failing tasks.

:::image type="content" source="../../pipelines/reports/media/pipelines-reports/top-failing.png" alt-text="Screenshot that shows a summary of the pipeline pass rate report.":::

For more information, see [Pipeline pass rate report](../../pipelines/reports/pipelinereport.md#pipeline-pass-rate-report).

### Test failures report

The **Test failures** report provides a granular view of the top failing tests in the pipeline, along with the failure details. Summary charts are also provided for builds that indicate code coverage and test failures or success.

:::image type="content" source="../../pipelines/test/media/test-analytics/test-failures.png" alt-text="Screenshot that shows a Test analytics detail view." lightbox="../../pipelines/test/media/test-analytics/test-failures.png":::

For more information, see [Test failures report](../../pipelines/test/test-analytics.md#test-failures).

### Pipeline duration report

The **Pipeline duration** report provides the duration trend of a pipeline. It also highlights the average run time of the total successful runs over a period of time, for example, for 7, 14, or 30 days. The report also provides insights on the tasks that affected the duration of the pipeline.

:::image type="content" source="../../pipelines/reports/media/pipelines-reports/duration-summary.png" alt-text="Screenshot that shows pipeline duration summary.":::

:::image type="content" source="../../pipelines/reports/media/pipelines-reports/duration-trend.png" alt-text="Screenshot that shows a pipeline duration trend.":::

For more information, see [Pipeline duration report](../../pipelines/reports/pipelinereport.md#pipeline-duration-report).

::: moniker-end

::: moniker range="azure-devops-2019"

## In-context reports: Pipeline test failures

Azure Pipelines provides an in-context **Test failures** report, derived from Analytics data. Open a release summary to view the report and select the **Analytics** tab. Select the summarized card for a detailed report. For more information, see [Test failures report](../../pipelines/reports/pipelinereport.md#test-failures-report).

:::image type="content" source="../../pipelines/reports/media/pipelines-reports/analyticstab-server-2019.png" alt-text="Screenshot that shows the Analytics tab in Azure DevOps Server 2019.":::

::: moniker-end

## Add custom work tracking fields

::: moniker range="azure-devops"

[Add a custom field](../../organizations/settings/work/customize-process-field.md) to add data to support reporting requirements.
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

Add data to support reporting requirements by adding a custom field: [Inheritance process](../../organizations/settings/work/customize-process-field.md) or [On-premises XML process](../../reference/add-modify-field.md).
::: moniker-end

## Marketplace widgets and extensibility

In addition to the widgets available in the widget catalog, you might find interesting widgets in the [Marketplace](https://marketplace.visualstudio.com/search?term=webpage%20widget&target=VSTS&sortBy=Relevance).

Or, you can create your own widget by using the REST API. For more information, see [Add a dashboard widget](../../extend/develop/add-dashboard-widget.md).

## Related articles

> [!div class="nextstepaction"]
> [Add a widget to a dashboard](add-widget-to-dashboard.md)

- [FAQs on Azure DevOps dashboards, charts, and reports](faqs.yml)
- [Widget catalog](widget-catalog.md)
- [Best practices for Agile project management](../../boards/best-practices-agile-project-management.md)
- [Cross-service overview](../../cross-service/cross-service-overview.md)
