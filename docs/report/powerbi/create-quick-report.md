---
title: Create a Power BI Report from an Analytics View
titleSuffix: Azure DevOps
description: Learn how to create Power BI reports from Analytics views in Azure DevOps. Build trend charts and current count reports to track work item progress effectively.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.topic: quickstart
ms.date: 03/24/2026
ai-usage: ai-assisted
ms.custom: copilot-scenario-highlight, doc-kit-assisted, awp-ai
# customer intent: As a team member, I want to see how to use an Analytics view in Power BI so that I can create trend and current count reports about work items in my project.
---

# Create a Power BI report from a default Analytics view

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this quickstart, you use a default Analytics view to create two Power BI reports for your Azure DevOps project - a daily trend chart of backlog items by state, and a card that shows the current count of active user stories. By using Analytics views, you can define filter criteria for work-tracking data without writing OData queries.

You can use one of the built-in default views, or [create a custom Analytics view](analytics-views-create.md) for more control over filters and fields.

[!INCLUDE [Warning about Analytics views only supporting Azure Boards data](includes/analytics-views-warning.md)]
 
[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites  

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | The **View Analytics** permission set to **Allow**. For more information, see [Set permissions to access Analytics and Analytics views](analytics-security.md). |
|**Tools** | - [Azure Boards turned on](../../organizations/settings/set-services.md).<br>- [Power BI Desktop](https://www.microsoft.com/power-platform/products/power-bi/desktop). |
|**Tasks**| Monitor work items over a specified period to generate a trend report. |

::: moniker-end

::: moniker range=" < azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | The **View Analytics** permission set to **Allow**. For more information, see [Set permissions to access Analytics and Analytics views](analytics-security.md). |
|**Tools** | - The [Analytics extension](../dashboards/analytics-extension.md). Members of the [Project Collection Administrators](../../organizations/security/change-organization-collection-level-permissions.md) group can add and enable the service.<br>- [Azure Boards turned on](../../organizations/settings/set-services.md).<br>- [Power BI Desktop](https://www.microsoft.com/power-platform/products/power-bi/desktop).  |
|**Tasks**| Monitor work items over a specified period to generate a trend report. |

::: moniker-end

[!INCLUDE [Open Analytics to access views](../includes/analytics-open.md)]

## Verify the default Analytics view

Before connecting to Power BI, verify that the default view loads correctly. Verification catches problems such as too-large datasets or invalid field references before they cause Power BI refresh failures.

1. On the **Analytics views** page, select the **All** tab.

1. Select the :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More Actions** icon on the default view, and then select **Edit**. For Agile projects, use the **Stories - Last 30 days** view.

   :::image type="content" source="media/create-report/edit-default-view-last-30-days.png" alt-text="Screenshot of the Analytics views page. In the shortcut menu for the Stories - Last 30 days view, Edit is highlighted." lightbox="media/create-report/edit-default-view-last-30-days.png":::

1. Select the **Verification** tab, and then select **Verify view**.

   :::image type="content" source="media/create-report/verify-view.png" alt-text="Screenshot of the dialog for editing the Stories - Last 30 days view. In the Verification tab, Verify view is highlighted.":::

   Verification time depends on the scope of your view. A view scoped to stories with a 30-day rolling period verifies faster than a view that includes all work item types and all history.

   :::image type="content" source="media/create-report/verified-view.png" alt-text="Screenshot of the dialog for editing the Stories - Last 30 days view. In the Verification tab, a message indicates the view is verified.":::

1. If verification succeeds, continue to the next step. If it fails, go to the **Work Items** tab and reduce the scope - for example, select fewer teams or narrow the work item types. For more information, see [Create an Analytics view](analytics-views-create.md).

[!INCLUDE [Connect to an Analytics view](../includes/connect-analytics-view.md)]

## Create a daily trend report 

1. In the **Visualizations** pane, select the **Line chart** visual. In the **Data** pane, search for **Work Item Id** and select the checkbox to add it as the chart's Y-axis value.

   :::image type="content" source="media/create-report/select-line-chart-work-id.png" alt-text="Screenshot of a blank report in Power BI Desktop. The Line chart icon, the search field, and Work Item ID are highlighted." lightbox="media/create-report/select-line-chart-work-id.png":::

   The chart displays a single dot because you didn't define a date axis yet.

   > [!TIP]
   > To resize the chart, go to **View** > **Page view** > **Actual size**, and then drag the chart handles.
   > 
   > :::image type="content" source="media/active-bugs-report/adjust-view-size.png" alt-text="Screenshot of a Power BI Desktop report with a line chart. The View menu, Page view, and Actual size on the Page view menu are highlighted." lightbox="media/active-bugs-report/adjust-view-size.png":::

1. In the **Data** pane, select **Date** to add it as the X-axis. Power BI defaults to a date hierarchy (year > quarter > month > day), which groups all dates that share the same day number. To see an actual daily trend, go to the **Visualizations** pane, expand the **Date** dropdown under **X-axis**, and select **Date** instead of **Date Hierarchy**.

   :::image type="content" source="media/create-report/select-date.png" alt-text="Screenshot of a line chart. The Date data and field are highlighted. In the Date field shortcut menu, Date is selected and highlighted." lightbox="media/create-report/select-date.png":::

   > [!NOTE]
   > Always use the **Date** format for trend reports — not **Date Hierarchy**. The hierarchy's day level assigns every date to a number between 1 and 31, so April 3 and May 3 both map to day 3 and their counts are combined.

## Group and filter the trend by state

1. In the **Data** pane, drag the **State** field into the **Legend** area of the **Visualizations** pane. The chart now displays a separate line for each state.

1. To limit which states appear, expand the **State** field in the **Filters** pane and select only the values you want - for example, **Active**, **Closed**, and **Committed**.

The following chart shows a daily distinct count of user stories for each selected state.

:::image type="content" source="media/create-report/apply-state-filter.png" alt-text="Screenshot of a chart with lines for active, closed, and committed counts. The State filter and the Visualizations legend are highlighted." lightbox="media/create-report/apply-state-filter.png":::

> [!TIP]
> If you modify your Analytics view after connecting, return to Power BI and select **Refresh** on the **Home** tab to pull in the updated data.
> 
> :::image type="content" source="media/active-bugs-report/refresh-report-updated-view.png" alt-text="Screenshot of the Home tab of the Power BI Desktop ribbon. In the Queries group, Refresh is highlighted." lightbox="media/active-bugs-report/refresh-report-updated-view.png":::

## Create a card to show the latest active stories count

1. Add a new page by selecting the plus sign (**+**) at the bottom of the page.

1. In the **Visualizations** pane, select the **Card** visual. In the **Data** pane, select the **Work Item Id** field to add it to the card.

1. In the **Filters** pane, drag **State** into the **Filters on this page** area and select only **Active**.

   The card displays 111 in this example. That number is inflated because it counts every daily snapshot of each active user story over the 30-day window, not just the latest day.

   :::image type="content" source="media/create-report/card-active-user-stories.png" alt-text="Screenshot of a card visual that displays a count of 111. The card icon and the Active filter are highlighted." lightbox="media/create-report/card-active-user-stories.png":::

1. To show only the current count, add the **Is Current** filter:
   1. Drag **Is Current** into the **Filters on this page** area.
   1. Select **True** so that the card counts only the latest revision of each user story.

   Analytics views automatically include the **Is Current** field to flag the most recent snapshot. When you apply this filter, the count drops to 16 – the actual number of active user stories today.

   :::image type="content" source="media/create-report/is-current.png" alt-text="Screenshot of a card visual that displays a count of 16. In the Filters pane, the Is Current filter is highlighted, and True is selected." lightbox="media/create-report/is-current.png":::

   This value should match the count on the last day of the trend chart you created in the previous section.

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to create Power BI reports from Analytics views

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can use AI assistants to help create and refine Power BI reports.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Bug trend by date range | `Write an OData trend query that shows the daily bug count by state over the last 30 days in <ProjectName>.` |
| Sprint snapshot | `Create an OData query against WorkItemSnapshot that shows work item counts grouped by date for the current sprint in <ProjectName>.` |
| Filter by iteration | `Generate an OData trend query that uses the iteration start and end dates from <IterationName> to show story point burndown in <ProjectName>.` |
| Board column trend | `Write an OData query against WorkItemBoardSnapshot to track work items by board column over the past two weeks in <ProjectName> in the <OrganizationName> organization.` |
| Optimize performance | `My WorkItemSnapshot trend query for <ProjectName> is timing out. Suggest specific date filters and aggregation to reduce the row count without losing the key metrics.` |
| Compare sprints | `Create an OData trend query that compares bug counts between <SprintName> and the previous sprint in <ProjectName> in the <OrganizationName> organization.` |
| Remaining work trend | `Write an OData trend query that shows the daily sum of remaining work grouped by Area Path for the current iteration in <ProjectName>.` |
| Detect state changes | `Create an OData snapshot query that tracks how many work items moved from Active to Resolved each day over the past <NumberOfDays> days in <ProjectName>.` |
| Scope change analysis | `Generate an OData trend query that shows the daily count of user stories added or removed from <SprintName> by comparing WorkItemSnapshot data in <ProjectName>.` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for creating and refining Power BI reports from Analytics views.

::: moniker-end

## Related content 

- [Create an active bugs report in Power BI based on a custom Analytics view](active-bugs-sample-report.md)
- [Get started with Power BI Desktop](/power-bi/fundamentals/desktop-getting-started)
- [Connect Analytics with Power BI Data Connector](data-connector-connect.md)
