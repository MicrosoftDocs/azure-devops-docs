---
title: Add built-in charts to a team dashboard
titleSuffix: Azure DevOps
description: Learn how to add system-generated charts or query-based charts to a team dashboard.
ms.custom: dashboards, engagement-fy23
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/28/2024
---

# Add charts to a dashboard

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

::: moniker range=">= azure-devops-2020"
This article explains how to add query-based charts and in-context reports to a dashboard from their respective functional pages. For example, you can add the Team Velocity in-context Analytics report to a dashboard. After adding the report, you can modify the corresponding widget configuration parameters to suit your needs.
::: moniker-end

::: moniker range="< azure-devops-2020"
This article explains how to add charts to a dashboard from their respective functional pages. For example, you can add charts from the Builds, Releases, or Queries pages. After adding the charts, you can customize the widget configuration parameters to meet your specific needs.
::: moniker-end

## Prerequisites  

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Dashboard creation** |[Creator of the team dashboard](dashboards.md) to which you want to add a chart. |
|**Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | [Team administrator](../../organizations/settings/add-team-administrator.md), project administrator, or specific [dashboard permissions](./dashboard-permissions.md) granted to you. For more information about other prerequisites regarding service and feature enablement and general data tracking activities, see [Permissions and prerequisites to access Analytics](../analytics/analytics-permissions-prerequisites.md). |
|**Services**| **Azure Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.|

::: moniker-end

::: moniker range="< azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Dashboard creation** |[Creator of the team dashboard](dashboards.md) to which you want to add a chart. |
|**Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | [Team administrator](../../organizations/settings/add-team-administrator.md), project administrator, or specific [dashboard permissions](./dashboard-permissions.md) granted to you. For more information about other prerequisites regarding service and feature enablement and general data tracking activities, see [Permissions and prerequisites to access Analytics](../analytics/analytics-permissions-prerequisites.md). |
|**Services**| **Azure Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.|

::: moniker-end

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

There are many in-context reports that you can access from the web portal, but can't add to a dashboard. However, you might find a comparable widget listed in the [widget catalog](widget-catalog.md) that tracks the same or similar data. If you find a widget that works, add it to the dashboard: 

- [Add Markdown to a dashboard](add-markdown-to-dashboard.md)
- [Learn about team velocity](./team-velocity.md)
- [View and configure sprint burndown](configure-sprint-burndown.md). See [Sprint burndown widget](widget-catalog.md#sprint-burndown-widget)
- [Learn about cumulative flow](./cumulative-flow.md), see [CFD widget](widget-catalog.md)

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

> [!TIP]  
> You can also add this chart to a team dashboard from the [widget catalog](widget-catalog.md#release-definition-widget).  

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and go to your project.
2. Select **Pipelines** > **Releases** to add a release definition chart to a team dashboard.

   :::image type="content" source="media/add-charts/add-release-pipeline-to-dashboard-new-nav.png" alt-text="Screenshot of Add a Release pipeline chart to a dashboard.":::

3. Release pipeline charts show the success (green), in progress (blue), cancellation (red), or nondeployment (grey) to an environment for the current and last four releases:  

   :::image type="content" source="media/add-cd-release-definition-tile.png" alt-text="Screenshot of Release pipeline tile.":::

## Add a test quality trend chart   

You can add trends to the dashboard of the failures and duration of those [tests that were run as part of a build](../../pipelines/ecosystems/dotnet-core.md#run-your-tests).

> [!TIP]  
> You can also add a [test result trend chart widget](widget-catalog.md#test-results-widget) to a dashboard. 

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and go to your project.

2. Open a build summary for a build pipeline to which you added tests.

3. Open the **Tests** page.

4. Select the bar chart for either Test failures or Test duration.    

   :::image type="content" source="media/add-chart-test-quality.png" alt-text="Screenshot of Add a test plan chart to a dashboard.":::  

5. Open the :::image type="icon" source="media/icons/actions-icon.png" border="false"::: **Actions** menu, select **Add to dashboard**, select the **dashboard** to add the chart to from the dropdown menu, and then **OK**.

For more information, see [Review automated test results after a build](../../pipelines/test/review-continuous-test-results-after-build.md).  

## Add a markdown repository file to a dashboard  

To add a markdown file to a dashboard, you must complete the steps in [Add Markdown to a dashboard, Add the Markdown widget](add-markdown-to-dashboard.md#add-the-markdown-widget).
   
As you update the Markdown file, changes automatically appear on the dashboard upon refresh.

## Related articles

- [Learn how to use burndown charts](burndown-guidance.md)
- [Understand cumulative flow and lead/cycle time](cumulative-flow-cycle-lead-time-guidance.md)
- [Analyze your test results](../../pipelines/test/test-analytics.md)
