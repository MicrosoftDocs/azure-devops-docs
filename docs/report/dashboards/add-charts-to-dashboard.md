---
title: Add built-in charts to a team dashboard
titleSuffix: Azure DevOps
description: Learn how to add system-generated charts or query-based charts to a team dashboard in Azure DevOps.
ms.custom: dashboards, engagement-fy23
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/18/2023
---

# Add charts to a dashboard

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

::: moniker range=">= azure-devops-2020"
This article describes how to add query-based charts and in-context reports to a dashboard from their functional page. For example, you can add the Team Velocity in-context Analytics report to a dashboard. Once you've added the report, go ahead and modify the corresponding widget configuration parameters.
::: moniker-end

::: moniker range="< azure-devops-2020"
You can add the charts described in this article to a dashboard from their corresponding functional page, like: 
- Builds
- Releases
- Queries
::: moniker-end

## Prerequisites  

::: moniker range="azure-devops"
 
- You must have [created the team dashboard](dashboards.md) to which you want to add a chart.  
- Anyone with access to a project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view dashboards.
- To add, edit, or manage a team dashboard, you must have **Basic** access or greater and be a [team admin](../../organizations/settings/add-team-administrator.md), a project admin, or have [dashboard permissions](./dashboard-permissions.md).

::: moniker-end

::: moniker range="< azure-devops"

- You must have [created the team dashboard](dashboards.md) to which you want to add a chart.  
- To add, edit, or manage a team dashboard, you must have **Basic** access or greater and be a team admin, a project admin, or have [dashboard permissions](./dashboard-permissions.md). In general, you need to be a member of the team to edit a team dashboard.
 Request your current team or project admin to add you as a [team admin](../../organizations/settings/add-team-administrator.md).  
::: moniker-end

For more information, see [Default permissions and access for charts and dashboards](charts-dashboard-permissions-access.md).

<a id="work-item-query"></a>

## Add a work item query or chart  

You can add work item queries and charts to a dashboard from the Queries page. 

> [!TIP]  
> You can also add a [work item query chart widget](widget-catalog.md#build-history-widget) to a team dashboard.  

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and go to your project.
2. Select **Boards** > **Queries** > **Charts**. Queries and charts must be associated with queries under the `Shared queries` folder.  

   :::image type="content" source="media/add-charts/boards-queries-charts-sequence.png" alt-text="Screenshot showing sequence, Boards, Queries, and Charts.":::

3. From the charts :::image type="icon" source="media/icons/actions-icon.png" border="false"::: Actions menu, select **Add to dashboard**.  

   :::image type="content" source="media/add-charts/pin-chart-to-a-dashboard.png" alt-text="Screenshot of Query Chart context menu, add to a dashboard."::: 

4. Select a **dashboard** from the dropdown menu, and then select **OK**.
   
   :::image type="content" source="media/add-charts/select-dashboard.png" alt-text="Screenshot of pin to dashboard sequence, select dashboard, and then OK.":::
   
   You can only add charts associated with shared queries. Charts associated with queries under My Queries folder don't display the **Add to dashboard** option.  

## Add an in-context work tracking report  

::: moniker range=">= azure-devops-2020"
You can add each of the in-context **Analytics** reports to a dashboard. 

1. Open the report, select the :::image type="icon" source="media/icons/actions-icon.png" border="false"::: actions icon, and select **Copy to Dashboard**.

   :::image type="content" source="media/add-charts/add-analytics-chart.png" alt-text="Screenshot of Analytics in-context report, Copy to dashboard.":::

2. Select a **dashboard** from the dropdown menu, and then select **OK**. 

   :::image type="content" source="media/add-charts/select-in-context-work-tracking-dashboard.png" alt-text="Screenshot of select the dashboard dialog."::: 

3. (Optional) Open the dashboard and select :::image type="icon" source="media/icons/actions-icon.png" border="false"::: **More actions** for the widget to configure the size or change other chart properties. 

::: moniker-end

::: moniker range="< azure-devops-2020"

There are many in-context reports that you can access from the web portal, but can't add to a dashboard. However, you may find a comparable widget listed in the [widget catalog](widget-catalog.md) that tracks the same or similar data. If you find a widget that works, add it to the dashboard: 

- [Add Markdown to a dashboard](add-markdown-to-dashboard.md)
- [Team velocity](./team-velocity.md)
- [View/configure sprint burndown](configure-sprint-burndown.md), see [Sprint burndown widget](widget-catalog.md#sprint-burndown-widget)
- [Cumulative flow](./cumulative-flow.md), see [CFD widget](widget-catalog.md)

::: moniker-end

## Add a build history chart

Each time you run a build, it logs information about the build, including:
- Run time
- Errors and warnings
- Status: Completed or Failed  

> [!TIP]  
> You can also add this chart to a team dashboard from the [widget catalog](widget-catalog.md#build-history-widget).  

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and go to your project.
2. Select **Pipelines** > **Pipelines** to add a build history chart to a team dashboard. The **Add to dashboard** menu selection is disabled when you don't have permissions to add it to the dashboards of the selected team context. 

   The Build summary charts look similar to the following image.  

   :::image type="content" source="media/add-a-dashboard-build-summary.png" alt-text="Screenshot of Build summary chart.":::

3. Hover over a bar to view build information and run time and select a bar to go to the build summary page.
 
## Add a release summary chart  

Each time a release gets deployed, it logs information about the release to each of its environments. You can add a release tile to your team dashboard to monitor release progress and gain quick access to each release. 

::: moniker range=">= azure-devops-2019"
> [!TIP]  
> You can also add this chart to a team dashboard from the [widget catalog](widget-catalog.md#release-definition-widget).  

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and go to your project.
2. Select **Pipelines** > **Releases** to add a release definition chart to a team dashboard.

   :::image type="content" source="media/add-charts/add-release-pipeline-to-dashboard-new-nav.png" alt-text="Screenshot of Add a Release pipeline chart to a dashboard.":::

3. Release pipeline charts show the success (green), in progress (blue), cancellation (red), or nondeployment (grey) to an environment for the current and last four releases:  

   :::image type="content" source="media/add-cd-release-definition-tile.png" alt-text="Screenshot of Release pipeline tile.":::

::: moniker-end

::: moniker range="tfs-2018"  
> [!TIP]  
> You can also add this chart to a team dashboard from the [widget catalog](widget-catalog.md).    

1. Open **Pipelines** > **Releases** to add a release definition chart to a team dashboard.   

    ![Screenshot of Add a Release pipeline chart to a dashboard, TFS 2018.](media/add-cd-release-definition.png)  

2. Release pipeline charts show the success (green), in progress (blue), cancellation (red), or nondeployment (grey) to an environment for the current and last four releases:  

	![Screenshot of Release pipeline tile, TFS 2018.](media/add-cd-release-definition-tile.png)  

::: moniker-end

::: moniker range="tfs-2018"

## Add a manual test status or result chart  

As you create and run tests, you can track your status by defining [lightweight charts of test plans and test results](../../test/track-test-status.md).  

> [!TIP]  
> You can also add a [chart for test plans widget](widget-catalog.md) to a dashboard. 

1. Select your [team context](../../project/navigation/go-to-project-repo.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json).  

2. Open **Test** > **Test Plans** > **Charts**, and select the dashboard to add the test chart to.  

   :::image type="content" source="media/add-a-chart-test-plan.png" alt-text="Screenshot of Select the dashboard to add the test chart to.":::

::: moniker-end

## Add a test quality trend chart   

You can add trends to the dashboard of the failures and duration of those [tests that were run as part of a build](../../pipelines/ecosystems/dotnet-core.md#run-your-tests).

> [!TIP]  
> You can also add a [test result trend chart widget](widget-catalog.md#test-results-widget) to a dashboard. 

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and go to your project.

2. Open a build summary for a build pipeline to which you've added tests.

3. Open the **Tests** page.

4. Select the bar chart for either Test failures or Test duration.    

   :::image type="content" source="media/add-chart-test-quality.png" alt-text="Screenshot of Add a test plan chart to a dashboard.":::  

5. Open the :::image type="icon" source="media/icons/actions-icon.png" border="false"::: **Actions** menu, select **Add to dashboard**, select the **dashboard** to add the chart to from the dropdown menu, and then **OK**.

For more information, see [Review automated test results after a build](../../pipelines/test/review-continuous-test-results-after-build.md).  

## Add a markdown repository file to a dashboard  

To add a markdown file to a dashboard, you must complete the steps in [Add Markdown to a dashboard, Add the Markdown widget](add-markdown-to-dashboard.md#add-the-markdown-widget).
   
As you update the Markdown file, changes automatically appear on the dashboard upon refresh.

## Related articles

::: moniker range=">= azure-devops-2019"

- [Burndown guidance](burndown-guidance.md)
- [Cumulative flow & lead/cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md)
- [Analyze test results](../../pipelines/test/test-analytics.md)
::: moniker-end

::: moniker range="tfs-2018"
- [Burndown guidance](burndown-guidance.md)
- [Cumulative flow & lead/cycle time guidance](cumulative-flow-cycle-lead-time-guidance.md)
::: moniker-end
