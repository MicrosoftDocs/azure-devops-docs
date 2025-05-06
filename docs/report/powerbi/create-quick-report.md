---
title: Create a Power BI Report from an Analytics View
titleSuffix: Azure DevOps
description: See how to use an Analytics view to create Power BI reports for your Azure DevOps project. Find out how to create trend and current count reports.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.topic: quickstart
ms.date: 05/06/2025
# customer intent: As a team member, I want to see how to use an Analytics view in Power BI so that I can create trend and current count reports about work items in my project.
---

# Quickstart: Create a Power BI report from a default Analytics view

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

In this quickstart, you connect to an Analytics view to create Power BI reports for your Azure DevOps project. An Analytics view provides a basic way to specify the filter criteria for a Power BI report that's based on Analytics data. 

You can create status and trend reports of your work-tracking data by using one of the default Analytics views available to you. As needed, you can also [create a custom Analytics view](analytics-views-create.md). 
 
This quickstart shows you how to create two reports in Power BI Desktop that are based on a default Analytics view:

- A daily trend chart for backlog items
- A card that displays the count of active user stories

[!INCLUDE [Warning about Analytics views only supporting Azure Boards data](includes/analytics-views-warning.md)]
 
## Prerequisites  

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | The **View Analytics** permission set to **Allow**. For more information, see [Grant permissions for Analytics access](analytics-security.md). |
|**Tools** | - [Azure Boards turned on](../../organizations/settings/set-services.md).<br>- [Power BI Desktop](https://www.microsoft.com/power-platform/products/power-bi/desktop). |
|**Tasks**| Monitor work items over a specified period to generate a trend report. |

::: moniker-end

::: moniker range=" < azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | The **View Analytics** permission set to **Allow**. For more information, see [Grant permissions for Analytics access](analytics-security.md). |
|**Tools** | - The [Analytics extension](../dashboards/analytics-extension.md). Members of the [Project Collection Administrators](../../organizations/security/change-organization-collection-level-permissions.md) group can add and enable the service.<br>- [Azure Boards turned on](../../organizations/settings/set-services.md).<br>- [Power BI Desktop](https://www.microsoft.com/power-platform/products/power-bi/desktop).  |
|**Tasks**| Monitor work items over a specified period to generate a trend report. |

::: moniker-end

[!INCLUDE [Open Analytics to access views](../includes/analytics-open.md)]

## Verify the default Analytics view for your data 

If you verify the view you want to use in Power BI, your view is more likely to load correctly in Power BI.

To verify your view, take the following steps. If verification takes too long, you can quickly adjust the view. For instance, you can add filters or narrow your history and then verify your view again.

1. On the **Analytics views** page, go to the **All** tab.

1. On the default view, select the :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **More Actions** icon, and then select **Edit**. For a project that uses the Agile process, use the **Stories - Last 30 days** view.  

   :::image type="content" source="media/create-report/edit-default-view-last-30-days.png" alt-text="Screenshot of the Analytics views page. In the shortcut menu for the Stories - Last 30 days view, Edit is highlighted." lightbox="media/create-report/edit-default-view-last-30-days.png":::

1. Go to the **Verification** tab, and then select **Verify view**. 

   :::image type="content" source="media/create-report/verify-view.png" alt-text="Screenshot of the dialog for editing the Stories - Last 30 days view. In the Verification tab, Verify view is highlighted.":::

   Wait until the verification process finishes. The verification time depends on the amount of data that you define in your view. For example, one view might include all work item types and all history. It would take more time to verify than a view that includes only stories and specifies a rolling period of 30 days.

   :::image type="content" source="media/create-report/verified-view.png" alt-text="Screenshot of the dialog for editing the Stories - Last 30 days view. In the Verification tab, a message indicates the view is verified.":::

1. If your view is successfully verified, go to the next step. If it's unsuccessful, go to the **Work Items** tab and adjust the settings by selecting fewer teams or specifying fewer work items in the dataset.  

   For more information about defining views, see [Create an Analytics view](analytics-views-create.md).  

[!INCLUDE [Connect to an Analytics view](../includes/connect-analytics-view.md)]

## Create a daily trend report 

1. In your report, go to the **Visualizations** pane, and then select the Line chart visual. In the **Data** pane, enter **work item id** in the search field, and then select **Work Item Id**.

   :::image type="content" source="media/create-report/select-line-chart-work-id.png" alt-text="Screenshot of a blank report in Power BI Desktop. The Line chart icon, the search field, and Work Item ID are highlighted." lightbox="media/create-report/select-line-chart-work-id.png":::

   Your data appears in the line chart as a single dot.  

   > [!TIP]    
   > To change the chart size, go to the **View** tab, select **Page view**, and then select **Actual size**. You can then resize the chart to your desired dimensions.  
   > 
   > :::image type="content" source="media/active-bugs-report/adjust-view-size.png" alt-text="Screenshot of a Power BI Desktop report with a line chart. The View menu, Page view, and Actual size on the Page view menu are highlighted." lightbox="media/active-bugs-report/adjust-view-size.png":::
	
1. In the **Data** pane, select the **Date** field as your axis. By default, Power BI creates a date hierarchy from any date field. To see a daily trend, go to the **Visualizations** pane. Under **X-axis**, expand the shortcut menu of the **Date** field, and then select **Date**.

   :::image type="content" source="media/create-report/select-date.png" alt-text="Screenshot of a line chart. The Date data and field are highlighted. In the Date field shortcut menu, Date is selected and highlighted." lightbox="media/create-report/select-date.png":::

   > [!NOTE]
   > To view trends over time, use the **Date** format, not **Date Hierarchy**. In Power BI, the **Date Hierarchy** field organizes dates by level, such as year, quarter, month, or day. For instance, the hierarchy day level categorizes data from all days into numbers between 1 and 31. As a result, counts from April 3 and May 3 are both assigned to number 3. The result isn't the same as counting the items on each date.

## Group and filter the trend by state

To group your user stories by state, drag the **State** field into the **Legend** area. Optionally, filter the set of states to show in the chart. 

The following chart uses a filter that allows work items in the Active, Closed, and Committed states. Each line shows a daily distinct count of user stories in one of those states.

:::image type="content" source="media/create-report/apply-state-filter.png" alt-text="Screenshot of a chart with lines for active, closed, and committed counts. The State filter and the Visualizations legend are highlighted." lightbox="media/create-report/apply-state-filter.png":::

> [!TIP]    
> If you need to modify your Analytics view, you can do so and then return to your Power BI report. To refresh the data, select **Refresh**.  
> 
> :::image type="content" source="media/active-bugs-report/refresh-report-updated-view.png" alt-text="Screenshot of the Home tab of the Power BI Desktop ribbon. In the Queries group, Refresh is highlighted." lightbox="media/active-bugs-report/refresh-report-updated-view.png":::

## Create a card to show the latest active stories count

1. Add a new page by selecting the plus sign (+) at the bottom of the page. 

1. Select the card visual, and then add the **Work Item Id** field.

1. Drag the **State** field into the **Filters on this page** area of the **Filters** pane. Set a filter on the **State** field to show only Active items.

   The card shows the number of active user stories multiplied by the number of days each one was defined during the past 30 days. For this example, that number is 111.

   :::image type="content" source="media/create-report/card-active-user-stories.png" alt-text="Screenshot of a card visual that displays a count of 111. The card icon and the Active filter are highlighted." lightbox="media/create-report/card-active-user-stories.png":::

1. To get the latest count of active user stories, filter the card to count only the latest revision of the user stories:
   1. Drag the **Is Current** field into the **Filters on this page** area of the **Filters** pane.
   1. On the **Is Current** filter, select **True** to allow only the data for the latest day.

   The **Is Current** field is automatically added to the view to mark the rows that contain the latest revision of each user story. Applying this filter brings the Active user story count to 16. 

   :::image type="content" source="media/create-report/is-current.png" alt-text="Screenshot of a card visual that displays a count of 16. In the Filters pane, the Is Current filter is highlighted, and True is selected." lightbox="media/create-report/is-current.png":::

   The value should match the count on the last day of the trend chart that you created in the previous section.

## Continue to explore your data

The reports shown in this quickstart illustrate how Analytics views make it easy to generate reports of your work-tracking data.

## Related content 

- [Create an active bugs report in Power BI based on a custom Analytics view](active-bugs-sample-report.md)
- [Get started with Power BI Desktop](/power-bi/fundamentals/desktop-getting-started)
- [Connect Analytics with Power BI Data Connector](data-connector-connect.md)
