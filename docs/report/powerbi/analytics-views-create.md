---
title: Create Analytics Views for Power BI in Azure DevOps
titleSuffix: Azure DevOps
description: Discover how to build and manage Analytics views in Azure DevOps for efficient Power BI reporting and enhanced data insights.
ms.subservice: azure-devops-analytics
ms.custom: analytics-views, engagement-fy23, copilot-scenario-highlight, awp-ai 
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 03/18/2026
ai-usage: ai-assisted
#customer intent: As a team member, I want to use Power BI to generate reports from Analytics views in Azure DevOps.
---

# Create an Analytics view in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can create a custom Analytics view to define the filtered set of data and other criteria to support your Power BI reporting needs. A custom view gives you greater flexibility over filter criteria and the fields that load into a Power BI report.

[!INCLUDE [analytics views warning](includes/analytics-views-warning.md)]

Create custom views in the web portal for Azure DevOps. Then load the view by using the [Power BI Data Connector](data-connector-connect.md). Like work item queries, you can create views only for your use or share them with others on your team.

[!INCLUDE [disabled board note](../includes/boards-disabled.md)]

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

[!INCLUDE [open analytics to access views](../includes/analytics-open.md)]

## Browse your views

From the **All** page shown in the following image, you can access all Analytics views defined for the project. **My Views** are views that only you can use or edit. **Shared Views** are views that you share across the project. Anyone on your team can connect to and use shared views in Power BI.

:::image type="content" source="media/editable-views/directory-actions.png" alt-text="Screenshot shows the Analytics views page where you can see shared view." lightbox="media/editable-views/directory-actions.png":::

[!INCLUDE [differences per process](../includes/analytics-image-differences.md)]

To make a view a favorite, hover over the view and choose the star icon: :::image type="icon" source="../../media/icons/icon-favorite-star.png":::. Your favorite views appear on the **Favorites** page.

## Create a custom view

To open a dialog to create a custom view, select :::image type="icon" source="../media/icons/blue-plus.png"::: **New view**. Complete the forms provided in each tab to fully define the filter criteria for shaping the data you want to view in Power BI.

To create a custom view, complete the following steps:
1. [Name the view and choose a sharing option](#name-the-view-and-choose-a-sharing-option)
2. [Specify work item filters](#specify-wi-filters)
3. [Select the view's fields](#select-fields)
4. [Choose the amount of historical data contained within the view](#select-trend-data)
5. [Verify and save the view](#verify-and-save)

> [!NOTE]
> The board fields **Board Column**, **Board Column Done**, and **Board Lane** aren't available as filters or field selections in Analytics views. As a workaround, you can access board column data through OData queries by using the `WorkItemBoardSnapshot` entity set. For more information, see [Generate a Cumulative Flow Diagram (CFD) using sample OData queries](sample-boards-cfd.md). To vote for this feature, see [Analytics view - Add Board Column to list of available Fields in Views](https://developercommunity.visualstudio.com/idea/467446/analytics-view-add-board-column-to-list-of-availab-1.html).

<a id="name-the-view-and-choose-a-sharing-option"></a>

### 1. Name the view and choose a sharing option

Enter a name for the view and provide a description. To allow others to view and use the Analytics view, choose the **Shared** option. For shared views, you can set permissions as to who can view, edit, and delete the view as described in [Manage Analytics views](analytics-views-manage.md).

:::image type="content" source="media/editable-views/general.png" alt-text="Screenshot shows the New View General tab where you can specify the Shared View option." lightbox="media/editable-views/general.png":::

<a id="specify-wi-filters"></a>

### 2. Specify work item filters

Specify filters to reduce the number of results your view returns. In the work items section, add different filters on work item fields to scope your data. For a description of each available field, see [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md).

:::image type="content" source="media/editable-views/work-items-default.png" alt-text="Screenshot shows the New View Work items tab where you can specify Work items filters." lightbox="media/editable-views/work-items-default.png":::

> [!TIP]
> Scope your data to generate reports that quickly refresh. For large datasets, refreshing nonfiltered views can fail. To narrow your results, add the right set of filters. The more filters you add, the faster the view loads and refreshes in Power BI.

- **Add Teams or Area Path filters**

  By default, a view includes all the teams defined in the current project. You can specifically select teams in the current project or add other projects defined in the organization to the filter.

  > [!IMPORTANT]
  > Limit your selection to 500 projects per Analytics view. If you need more than 500 projects, create more Analytics views and distribute the projects between the views.

  Change the selected teams for the current project or add other projects to the filter. You can also change from filtering on teams to area paths. Here's a view filtered by two Fabrikam area paths.

  :::image type="content" source="media/editable-views/area-path.png" alt-text="Screenshot shows the Teams or area paths dialog.":::

- **Add filters for backlogs and work items types**

  Scope the data to specific Work item types in your project. Specify a backlog to filter by work item types associated with a specific backlog level or add individual specific work item types. The view includes work items of the selected types.

  :::image type="content" source="media/editable-views/wi-type-picker.png" alt-text="Screenshot shows the backlogs and work items dropdown menu.":::

- **Add filters by field criteria**

  In addition to all previous filter criteria, add filters based on different work item fields. Specify these fields in the same way you do for fields you add to a work item query. As shown in the following example, you can filter to show only high Priority bugs with the specific "Hotfix" tag.

  :::image type="content" source="media/editable-views/field-criteria.png" alt-text="Screenshot shows the Backlogs and work items dialog where you can filter by Bugs, Priority, and Tags.":::

  For details about working with tags, see [Add work item tags to categorize and filter lists and boards](../../boards/queries/add-tags-to-work-items.md).

  > [!NOTE]
  > It's important to understand how filters apply to historical data. For more information, see [Historical data representation in Analytics](analytics-historical-filtering.md).

<a id="select-fields"></a>

### 3. Select the fields that appear in the report

In the next tab, **Fields**, add and remove fields that you use in your report. Choose :::image type="icon" source="../media/icons/blue-plus.png"::: **Add** to add a field. To start with a fresh list, choose **Remove All**.

:::image type="content" source="media/analytics-views/fields-customize-no-common.png" alt-text="Screenshot shows the New View Fields tab where you can choose fields." lightbox="media/analytics-views/fields-customize-no-common.png":::

You can add any custom fields through an inherited process.

> [!NOTE]
> You can't add fields with a data type of Plain Text (long text) or HTML (rich-text). Analytics doesn't offer these fields for reporting.

<a id="select-trend-data"></a>

### 4. Select trend data options

In the next tab, **History**, choose the options that determine how much history data is available from the view.

In this example, if you have 10 work items and choose a rolling period of 14 days with a weekly granularity, your view contains 30 rows. If you refresh on Saturday, you have a row on the last two Saturdays for each work item and a row for the most recent data on Saturday.

:::image type="content" source="media/editable-views/history-example.png" alt-text="Screenshot shows the History tab, where you can select history and granularity options." lightbox="media/editable-views/history-example.png":::

#### History

For a snapshot of the current status, choose **Current only**. For trend charts, choose one of the other options as indicated.

|  Option  | Description |
|------|---------|
| **Current only** | Choose this option when you want a snapshot of work item status. Generates a single row per work item matching the work item's latest values in the Analytics data store. |
| **Rolling period** | Choose this option and enter the number of days previous to the current day to include in the dataset. The sliding window changes each time you refresh your report. |
| **Date range** | Choose this option and select a specific start and end date to include in the dataset, or select  **to present** to specify a rolling window with no fixed end date. When you select **to present**, the end date corresponds to the day the report is refreshed. If you clear it, the end date is always the date selected on the end date field. |
| **All history** | Choose this option to include the complete history for all work items you selected in your filter criteria. If you have a significant history, specify a **Weekly** or **Monthly** granularity.|

**Exclude work items that you completed before the start date** - Analytics stores all work item history, including any revisions for a closed work item. As a result, in an Analytics view, if you select a rolling period of 14 days, your view includes the current revision for all work items that you closed before this period.

To exclude work items that you completed before a specific date, select the corresponding checkbox under any of the history options. This setting greatly reduces the amount of data loaded into Power BI and helps with advanced calculations, like [time in state](create-timeinstate-report.md). For **Rolling period** and **Date range**, the exclusion date is set by the start of the period. For **Current only** and **All history**, you need to provide that date. For example, the following image excludes all work items that you completed before August 24, 2024.

:::image type="content" source="media/editable-views/history-exclude.png" alt-text="Screenshot shows the History tab where you can exclude work items for a rolling period of 14 days." lightbox="media/editable-views/history-exclude.png":::

#### Granularity

You can choose to get a snapshot of every work item for each day, week, or month. Each row represents the item based on the most recent revision for the defined interval.

|  Option  | Description |
|------|---------|
| **Daily** | Generates a row per work item showing the latest data for each day. |
| **Weekly** | Generates a row per work item showing the data per week taken on the day that represents the week. The value defaults to Saturday. |
| **Monthly** | Generates a row per work item showing the data for the last day of each month. |

> [!NOTE]
>
> - Preview rows are a calculated value based on history and granularity and might not match with Power BI.
> - It's important to understand how filters are applied to historical data. For more information, see [Historical data representation in Analytics](analytics-historical-filtering.md).

<a id="verify-and-save"></a>

### 5. Verify and save the view

The last step verifies your view by running a test query against the view and validating the filter criteria. Verification time can vary according to the amount of data defined in your view. For example, a view that includes all work item types and specifies **All history** takes more time to verify than a view that includes only bugs and specifies a rolling period of 30 days.

> [!TIP]  
> Verifying your view is an important step. When verification ends successfully, your view is more likely to load correctly in Power BI. If verification takes too long, you can adjust the view. Add filters or narrow your history and verify your view again.

After your view verifies successfully, save it. You can then start using it in Power BI.

If a view fails to verify, you get an error explaining the issue and pointing to a possible fix. Try changing the definitions and verify the view again. When the view verifies successfully, you get an estimate of the row count included in your view.

:::image type="content" source="media/editable-views/verify-success.png" alt-text="Screenshot shows the successful verification message, which includes an estimate of your row count." lightbox="media/editable-views/verify-success.png":::

For example, if you try to filter by a field that's no longer defined for the project, you get an error. You can remove that field from the filters in the [Work Items filters](#specify-wi-filters) tab and verify again.

For more information about resolving errors, see [Resolve errors associated with an Analytics view](troubleshooting-views.md).

## Review a view's filter criteria

In **Analytics views**, choose any view from the **Favorites** or **All** page to see a summary of the view's definitions and filters. Choose **Edit** to edit a view.

:::image type="content" source="media/editable-views/summary-panel.png" alt-text="Screenshot shows the summary panel of the view's definitions and filters.":::

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to create an Analytics view for Power BI reporting

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help you define the right filters, select fields, choose history options, and troubleshoot view verification so you can connect the view to Power BI faster.

### Example prompts

| Task | Example prompt |
|------|----------------|
| List existing views | `List the Analytics views in <ProjectName> in the <OrganizationName> organization, and tell me which ones are shared.` |
| Find who can edit a shared view | `For the Analytics view <ViewName> in <ProjectName>, who can edit or delete it, and where do I change those permissions?` |
| Plan a view for active bugs | `What filters and fields should I include in an Analytics view to track active bugs by priority in <ProjectName>?` |
| Scope by team or Area Path | `I need a Power BI report for <TeamName>. How should I scope an Analytics view using team or Area Path filters in <ProjectName>?` |
| Choose fields for reporting | `Recommend a minimal set of fields for a Power BI report that shows bug aging and owner for <ProjectName>, and tell me where to add them in the Analytics view UI.` |
| Choose history + granularity | `I want trend charts for the last <NumberOfDays> days. Which History and Granularity options should I select in an Analytics view for <ProjectName>?` |
| Optimize verification time | `My Analytics view takes too long to verify in <ProjectName>. Suggest specific filters to reduce row count without losing the key metrics for my report.` |
| Troubleshoot verification errors | `My Analytics view in <ProjectName> failed verification with an error about a missing field. Help me identify which filter or field is invalid and how to fix it.` |
| Decide between view vs OData | `I need board column data for a report in <ProjectName>. Should I use an Analytics view or OData (WorkItemBoardSnapshot), and what are the tradeoffs?` |

> [!TIP]
> If you’re using Visual Studio Code, agent mode is especially helpful for iterating on your report requirements—ask the agent to propose view filters and fields, then refine them after you validate row counts and verification results.

::: moniker-end

<a id="q-a">  </a>

## Next steps

> [!div class="nextstepaction"]
> [Create an active bugs Power BI report with a custom Analytics view](active-bugs-sample-report.md)

## Related articles

- [Manage Analytics views](analytics-views-manage.md) 
- [Learn about data available from Analytics](data-available-in-analytics.md)
- [Set permissions to access Analytics](analytics-security.md)
- [Learn about Power BI integration](overview.md)
