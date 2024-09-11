---
title: About Analytics views 
titleSuffix: Azure DevOps
description: Learn how Analytics views work with Azure DevOps and Power BI integration. Analytics include both custom and default views.
ms.subservice: azure-devops-analytics
ms.custom: analytics-views, engagement-fy23 
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '>= azure-devops-2019'
ms.date: 09/10/2024
#customer intent: As a team member using Azure Boards, I want to understand how to visualize work items from Azure DevOps by using Power BI.
---

# About Analytics views

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

<!--- Supports https://go.microsoft.com/fwlink/?linkid=865481  --> 

An *Analytics view* provides a simplified way to specify the filter criteria for a Power BI report based on Analytics data. Analytics views support Azure Boards data. Each view corresponds to a flat-list of work items. Work item hierarchies aren't supported.

[!INCLUDE [analytics views warning](includes/analytics-views-warning.md)]

You can use a default Analytics view or [create a custom view](analytics-views-create.md). Create custom views in the web portal for Azure DevOps. After you define a view that supports the data of interest, you can then open the view using [Power BI Data Connector](data-connector-connect.md) to create a report. 

[!INCLUDE [prerequisites simple](../includes/analytics-prerequisites-simple.md)]

Users with Stakeholder access have no access to view or edit Analytics views.

[!INCLUDE [boards disabled note](../includes/boards-disabled.md)]

## Default Analytics views

Azure DevOps provides default Analytics views. The default views are immediately accessible from Power BI. The view you select determines the set of records, fields, and history to pull into Power BI.

The following screenshot shows the default views created for a project based on the Agile process. For more information, see [Manage Analytics views](analytics-views-manage.md).

:::image type="content" source="./media/default-views/default-views.png" alt-text="Screenshot shows the default Analytics views available in Azure Boards.":::

[!INCLUDE [labels for default analytics differences](../includes/analytics-image-differences.md)]

When you use the Power BI Data Connector, these same default views appear in the Navigator dialog. The view you select determines the set of records, fields, and history that is loaded into Power BI.

::: moniker range="azure-devops"

1. Select **Azure DevOps** as your data connector.

   :::image type="content" source="./media/get-data-connector.png" alt-text="Screenshot shows the Get Data dialog box where you can select Azure DevOps.":::

1. Enter your account information.

   :::image type="content" source="./media/enter-account.png" alt-text="Screenshot shows the Azure DevOps dialog box where you can enter your organization and project.":::

1. Select the data that you want to use.

   :::image type="content" source="./media/navigator-select-data.png" alt-text="Screenshot shows the Navigator dialog box where you can select the data to pull into Power BI Desktop.":::

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

1. Select **Azure DevOps Server** as your data connector.

   :::image type="content" source="./media/get-data-server-connector.png" alt-text="Screenshot shows the Get Data dialog box where you can select Azure DevOps Server.":::

1. Enter your server information.

   :::image type="content" source="./media/enter-server.png" alt-text="Screenshot shows the Azure DevOps Server dialog box where you can enter your URL and project.":::

1. Select the data that you want to use.

   :::image type="content" source="./media/navigator-select-data.png" alt-text="Screenshot shows the Navigator dialog box where you can select the data to pull into Power BI Desktop.":::

::: moniker-end

### Options for work item types and historical data

Default Analytics views work well for customers with small datasets. Each default Analytics view provides a combination of options for work item types and historical data. The following tables describe each set of options.

| Work item type option | Description |
|:------|:---------|
| Bugs | Load current or historical state of Bugs only |
| Requirement Backlog | Load current or historical state of Stories, Backlog Items, or Requirements |
| Tasks | Load current or historical state of Tasks |
| Work Items | Load current or historical state of all work items |

| Historical option | Description |
|:------|:---------|
| Today | Loads only the most recent revision for each work item |
| Last 30 days | Loads work item history for the last 30 days, on a daily interval |
| Last 26 weeks | Loads work item history for the last 26 weeks, on a weekly interval |
| All history by month | Loads all work item history, on a monthly interval |

### When a default view doesn't meet your needs

The default Analytics views return all the specified data in a project. They work well for customers with smaller datasets. For larger datasets, the amount of data generated by a default view might be too large for Power BI to load.

In these cases, you can [create a custom Analytics view](analytics-views-create.md) to fine-tune the records, fields, and history loaded into Power BI.  

## Custom Analytics views

If the default Analytics views don't meet your needs, you can create custom views to fine-tune the records, fields, and history returned to Power BI. With a custom view, you can  define the following options:

- Sharing options
- Work item filters
- Team and area path filters
- Backlog and work item type filters
- Field-specific filters
- Fields to display
- View history and trend options

For more information, see [Create an Analytics view](./analytics-views-create.md).

## Common reportable fields

Default views automatically include the most common fields for the included work item types used for reporting. All custom fields are included.

For example, the following fields are included when filtered for bugs and work items. You can look up the description of most of these fields from the [Entities and properties reference for Azure Boards](../analytics/entity-reference-boards.md) or [Work item field index](../../boards/work-items/guidance/work-item-field.md).  

- Area Path
- Assigned To
- Date
- Is Current
- Iteration Path
- State
- Title
- Work Item Id
- Work Item Type

Two fields that are reported on are only available from Analytics data: *Cycle Time Days* and *Lead Time Days*. For more information about how these days are calculated, see [Lead time versus cycle time](../dashboards/cumulative-flow-cycle-lead-time-guidance.md#lead-time-versus-cycle-time).

For more information on how the dataset is modeled when you use the Power BI Data Connector, see [Analytics views dataset design](data-connector-dataset.md).

<a id="q-a"> </a>

## Related content

> [!div class="nextstepaction"]
> [Create an Analytics view](analytics-views-create.md) 

These articles provide more information:

- [Manage Analytics views](analytics-views-manage.md)
- [Create a Power BI report with a default Analytics view](create-quick-report.md)
- [Connect to Analytics with Power BI Data Connector](data-connector-connect.md)
- [Expedite work using swimlanes](../../boards/boards/expedite-work.md)
- [Manage columns on your board](../../boards/boards/add-columns.md)
- [Query by assignment or workflow changes](../../boards/queries/query-by-workflow-changes.md)
