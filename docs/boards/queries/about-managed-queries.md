---
title: Use managed queries to list work items
titleSuffix: Azure Boards
description: Learn how to track work by creating queries to list work items in Azure Boards and Azure DevOps.
ms.custom: boards-queries, cross-project, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: 285a014e-89bf-4e5f-bebf-11094e93d796
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/27/2025
ai-usage: ai-assisted
---


# Track your work by using managed queries in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use queries to list bugs, user stories, or other work items based on the field criteria you specify. Teams run these lists to triage work, bulk-update items, or review hierarchies. Semantic search offers overlapping and complementary capabilities worth exploring.

Use managed queries to:
- Bulk update work items using the web portal
- Triage and update work items
- Review a hierarchy of work items
- Share a list of work items with a teammate

You can create queries and query folders from the web portal or Visual Studio Team Explorer. Changes you make in one client appear in the others because all changes store in the work tracking data store.

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Get started using queries

If you're getting started, read [View, run, or email a work item query](view-run-query.md). For a quick reference to query editor tasks and sample queries, see [Query quick reference](query-index-quick-ref.md).

- To find work items assigned to you, use the **@Me** macro as the value for the **Assigned To** field in a clause.
- All valid users with standard access can create queries and folders under **My Queries**. To create queries or folders under **Shared Queries**, you must have the Contribute permission. See [Set permissions on queries](../queries/set-query-permissions.md).
- Modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, [open the query editor](using-queries.md).
- Open any query in [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) to update fields and publish changes to the database.
- Visualize status or progress by creating a pie, column, or trend chart for flat-list queries. For details, see [Charts](../../report/dashboards/charts.md).

## Query capabilities

The following sections summarize functions you use to define and manage work item queries.

- Define query filters with the Query Editor.
- Use query macros in clauses to target fields dynamically.
- Manage query results and folders from the Query Results page.

[!INCLUDE [temp](../includes/feature-matrix-filter-queries.md)]

### Supported macros

[!INCLUDE [temp](../includes/feature-matrix-query-macros.md)]

[!INCLUDE [temp](../includes/feature-matrix-manage-queries.md)]

### Unsupported features

Queries only support work items and work items linked to other work items. Managed queries don't support:

- Hierarchical views of Test Plans, Test Suites, and Test Cases (these items don't use parent-child links). Instead, view the hierarchy through the Test > Test Plans page.
- Views that show linked objects such as builds, releases, code, or other non-work-item objects.
- Listing work items linked from one project to another.
- Exporting a cross-project query to Excel (direct links queries export as a flat list).

## Query types (flat, direct links, tree)

Azure Boards supports three query types; the icon next to a query indicates its type. Choose the type based on the results you need.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows query type icons.](../backlogs/office/media/excel/query-types.png)

---
:::row:::
   :::column span="1":::
      **Query type**
   :::column-end:::
   :::column span="3":::
      **Usage guidance**
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **Flat list of work items**
   :::column-end:::
   :::column span="3":::
      - List items to perform bulk updates
      - Triage a list of work items
      - Create a query chart and add it to a dashboard
      - Create a chart to count items or sum a numeric field
      - Export a list to Excel to update fields
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **Work items and direct links**
   :::column-end:::
   :::column span="3":::
      - List items that depend on other work items
      - Find related or dependent items
      - List linked work items to do bulk updates
      - Triage linked work items, including test-related links
      - Find orphaned backlog items (items with no parent)
        > [!NOTE]
        > **Work items and direct links** queries export to Excel as a flat list. Excel imports them as a flat list because Excel doesn't support modifying multiple link types.
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      **Tree of work items**
   :::column-end:::
   :::column span="3":::
      - List a tree of Parent-Child related work items or other tree-topology link types
      - Triage hierarchical lists of work items
      - Export a hierarchical list to Excel to update fields or modify hierarchy
   :::column-end:::
:::row-end:::
---


To learn more about link types, see [Link type reference](link-type-reference.md).

## My Queries, Shared Queries, and Favorites

Only you can view and run queries saved under **My Queries**. Favorite a query to have it appear in your query selector.

Queries saved under **Shared Queries** are visible to everyone with project access. Organize shared queries in folders and favorite them for quick access. You can set permissions on folders and queries to prevent others from moving or editing them.

For more information, see:
- [Manage queries & query folders](organize-queries.md)
- [Set query permissions](set-query-permissions.md)
- [Favorite a query](view-run-query.md) and [Set personal or team favorites](../../project/navigation/set-favorites.md#favorite-a-shared-query)

## Query directory, query folders, and breadcrumbs

The **Queries** page provides Favorites and All tabs. Each tab shows a directory view you can filter to find specific queries.

When you navigate the **Queries** pages, you can open a folder, a subfolder, or a query page.

::: moniker range="azure-devops"

:::image type="content" source="media/view-run-queries/query-navigation-new-boards-hubs.png" alt-text="Screenshot that shows the queries page navigation." :::

::: moniker-end

::: moniker range="< azure-devops"

As you make selections, breadcrumbs appear at the top of the page. Use them to navigate to a folder, subfolder, or query page.

:::image type="content" source="../../project/navigation/media/breadcrumbs/queries-breadcrumbs.png" alt-text="Screenshot that shows breadcrumbs on the query page." :::

::: moniker-end

You can also select a favorite query or return to the **All** queries page from the drop-down menu of an open query.

::: moniker range="< azure-devops"

:::image type="content" source="../../project/navigation/media/breadcrumbs/query-bd-and-selector.png" alt-text="Screenshot that shows the query dropdown." :::

::: moniker-end

::: moniker range="azure-devops"

:::image type="content" source="../../project/navigation/media/breadcrumbs/query-dropdown-new-boards-hubs.png" alt-text="Screenshot that shows the query navigation dropdown." :::

::: moniker-end

For more information, see [Query FAQs, Navigate, and Folders](query-faqs.yml).

## Query charts and widgets

Create pie, bar, pivot, and trend charts from a flat-list query (queries must return 1000 or fewer work items). Add query charts to dashboards, retitle them, and reconfigure them as needed.

> ![Screenshot that shows an example pie chart.](media/about-queries/example-pie-chart.png)  ![Screenshot that shows an example pivot chart.](media/about-queries/example-pivot-chart.png)  
> ![Screenshot that shows an example bar chart.](media/about-queries/example-bar-chart.png)  ![Screenshot that shows an example trend chart.](media/about-queries/example-trend-chart.png)

Query-based widgets display query information on a dashboard (for example, number of active bugs or an interactive list of work items). To learn more, see:

- [Chart a flat-list query](../../report/dashboards/charts.md)
- [Chart for work items widget](../../report/dashboards/widget-catalog.md#chart-wit-widget)
- [Query results widget](../../report/dashboards/widget-catalog.md#query-results-widget)
- [Query tile widget](../../report/dashboards/widget-catalog.md#query-tile-widget)

## Add a custom field to support queries

To add a custom field for queries, see [Customize your work tracking experience](../../reference/customize-work.md).

## Taskboard versus query list items

If taskboard contents differ from a created query's results, see [Taskboard items versus query list items](../backlogs/backlogs-boards-plans.md#task-board-items) for details.

::: moniker range="< azure-devops"

## Full-text search queries and collation settings

If you use full-text search queries with the **Contains** or **Contains Words** operators, ensure that SQL Server collation corresponds to a language with a registered word breaker. Unsupported languages can yield unexpected results.

For more information, see:
- [sys.fulltext\_languages (Transact-SQL)](/sql/relational-databases/system-catalog-views/sys-fulltext-languages-transact-sql)
- [ALTER FULLTEXT INDEX (Transact-SQL)](/sql/t-sql/statements/alter-fulltext-index-transact-sql)
- [SQL Server 2008 Full-Text Search: Internals and Enhancements](/sql/relational-databases/search/improve-the-performance-of-full-text-queries)
- [Query Fields, Operators, Values, and Variables](/sql/t-sql/language-elements/language-elements-transact-sql)

::: moniker-end

[!INCLUDE [temp](../includes/rest-apis-queries.md)]

## Related content

- [Query FAQs](query-faqs.yml)
- [Query quick reference](query-index-quick-ref.md)
- [Work item field index](../work-items/guidance/work-item-field.md)
- [Set query permissions](set-query-permissions.md)
- [Query fields, operators, and macros](query-operators-variables.md)
- [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)
