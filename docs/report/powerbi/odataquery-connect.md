---
title: Connect with Data by Using OData Queries
titleSuffix: Azure DevOps
description: See how to use OData queries to integrate Azure DevOps Analytics data into Power BI. Find out how to write OData queries in Visual Studio Code for use in Power BI.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: "<=azure-devops"
ms.date: 04/25/2025
#customer intent: As a team member, I want to see how to use OData queries to get Azure DevOps Analytics data into Power BI so that I can minimize Power BI refresh times by taking advantage of server-side filtering and aggregation.
---

# Connect with data by using Power BI and OData queries

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

To pull data into Power BI, we recommend that you use Open Data Protocol (OData) queries. OData is a standard that's established by the Organization for the Advancement of Structured Information Standards (OASIS) and approved by the International Organization for Standardization and the International Electrotechnical Commission (ISO/IEC). OData defines best practices for building and consuming REST APIs. For more information, see the [OData documentation](/odata/).

To get started quickly, see [Overview of sample reports using OData queries](sample-odata-overview.md). For information about other approaches, see [About Power BI integration](overview.md).

Power BI can run OData queries, which can return a filtered or aggregated set of data to Power BI. OData queries have two advantages:

- All filtering is done server-side. Only the data you need is returned, which leads to shorter refresh times.
- You can preaggregate data server-side. An OData query can carry out aggregations such as work-item rollup and build-failure rates. The aggregations are accomplished server-side, and only the aggregate values are returned to Power BI. By using preaggregation, you can carry out aggregations across large datasets without needing to pull all the detailed data into Power BI.

In this tutorial, you:

> [!div class="checklist"]
> - Write and test OData queries.
> - Run an OData query from Power BI.

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Use Visual Studio Code to write and test OData queries

The easiest way to write and test OData is to use [Visual Studio Code](https://aka.ms/vscode) with the [OData extension](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata). Visual Studio Code is a free code editor available on Windows, Mac, and Linux. The OData extension provides syntax highlighting and other functions that are useful for writing and testing queries.

### Install Visual Studio Code and the OData extension

1. Install [Visual Studio Code](https://aka.ms/vscode).

1. Open Visual Studio Code, select **Extensions**, and then search for **odata**. In the results list, select **vscode-odata**, and then install this extension.

1. In Visual Studio Code, create an OData file by creating an empty file that has the extension .odata. You can name it whatever you want, for example, filename.odata. But it must have an .odata extension to enable the OData extension functionality.

### Write the OData query

Write the OData query. For example queries, see [Overview of sample reports using OData queries](sample-odata-overview.md).

The following query returns the top 10 work items under a specific area path. To use this query, replace `{organization}`, `{project}`, and `{area path}` with your values.

```odata
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
      $select=WorkItemId,Title,WorkItemType,State,CreatedDate
      &$filter=startswith(Area/AreaPath,'{area path}')
      &$orderby=CreatedDate desc
      &$top=10
```

To query across projects, omit `/{project}` entirely.

For more information, see [Sample reports and quick reference index](../extend-analytics/quick-ref.md).

After you write the query in Visual Studio Code, you should see syntax highlighting.

:::image type="content" source="media/odataquery-syntaxhighlighting.png" alt-text="Screenshot that shows an OData file in Visual Studio Code. Each type of code element has its own color.":::

### Test the OData query

1. To test the OData query, place your cursor anywhere in the query text, and then select **View** > **Command Palette**.

1. In the search box, enter **odata** to bring up the OData commands.

   :::image type="content" source="media/odataquery-commandpallette.png" alt-text="Screenshot that shows the command palette for the Visual Studio Code OData extension.":::

1. Select **OData: Open**. This action combines the multiline query into a one-line URL, runs the query, and opens the results in your default browser.

   - The OData query result set is in JSON format. To view the results, install a JSON formatter extension for your browser. Several options are available for both Chrome and Microsoft Edge.

     :::image type="content" source="media/odataquery-jsonoutput.png" alt-text="Screenshot of a browser that shows the JSON output of the OData query displayed in a readable format.":::

   - If the query has an error, the Analytics service returns an error in JSON format. For example, the following error states that the query selects a field that doesn't exist.

     :::image type="content" source="media/odataquery-jsonerror.png" alt-text="Screenshot of a browser that shows JSON output in a readable format. A message in the output indicates an error in an OData query.":::

After you verify that the query works correctly, you can run it from Power BI.

## Run the OData query from Power BI

To run the OData query from Power BI, take the steps in the following sections.

### Combine the multiline OData query into a single-line query

Before you use the query in Power BI, you must convert the multiline OData query into a single-line query. To use the **OData: Combine** command for this purpose, take the following steps:

1. Make a copy of the OData file that contains your multiline query text. This step is recommended, because there's no way to convert the single-line query back to a readable multiline query.

1. In Visual Studio Code, open the copy of your OData file and place your cursor anywhere in the query text.

1. Select **View** > **Command Palette**. In the search box, enter **odata**. Then in the results list, select **OData: Combine**.

   The multiline query gets converted into a single-line query.

   :::image type="content" source="media/odataquery-combineto1line.png" alt-text="Screenshot of an OData file in Visual Studio Code. The file contains a multiline query followed by the single-line version of the query.":::

1. Copy the entire line for use in the next section.

### Run the query from Power BI

1. In Power BI, select **Get data** > **OData feed**. For more information, see [Create a Power BI report with an OData query](create-quick-report-odataq.md).

   :::image type="content" source="media/ODataQuery.png" alt-text="Screenshot of Power BI with Get data and OData feed highlighted.":::

1. In the **OData feed** window, in the **URL** box, paste the OData query that you copied in the preceding section, and then select **OK**.

   :::image type="content" source="media/odataquery-powerbi-odatafeed.png" alt-text="Screenshot of the OData feed dialog. The URL box contains the single-line OData query.":::

   Power BI displays a preview page.

   :::image type="content" source="media/odataquery-powerbi-preview.png" alt-text="Screenshot of a preview page in Power BI with buttons for loading and transforming data. A table lists information about several work items.":::

### Specify query options

1. On the preview page, select **Transform Data** to open Power Query Editor.

   :::image type="content" source="media/odataquery-powerbi-queryeditor.png" alt-text="Screenshot of Power Query Editor. A table lists OData feed data for several work items." lightbox="media/odataquery-powerbi-queryeditor.png":::

1. On the ribbon, select **Advanced Editor**.

   :::image type="content" source="media/AdvancedEditor.png" alt-text="Screenshot of the Power BI ribbon. Advanced Editor is highlighted.":::

1. In the Advanced Editor window, scroll horizontally to view the `[Implementation="2.0"]` parameter in the query.

   :::image type="content" source="media/odataquery-powerbi-advancededitor1.png" alt-text="Screenshot of the Advanced Editor window. The end of the query is visible, and the implementation parameter is highlighted.":::

1. Replace `[Implementation="2.0"]` with the following string:

   `[Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]`

   :::image type="content" source="media/odataquery-powerbi-advancededitor2.png" alt-text="Screenshot of the Advanced Editor window. The end of the query is visible. It contains the replacement string and is highlighted.":::

   This change helps prevent throttling errors. The new values have the following effect:

   - They instruct Power BI to reference OData v4.
   - They instruct the Analytics service to omit any values that are null, which improves query performance.

   Power Query attempts to resolve null values as errors by generating another query for every null value it encounters. This action can result in thousands of queries. These queries can quickly exceed your usage threshold, beyond which your user account gets throttled.

1. Select **Done** to close the Advanced Editor and return to Power BI Power Query Editor. You can use Power Query Editor to perform the following optional actions:

   - Rename the `Query1` query as something more specific.
   - Transform columns to a specific type. Power BI automatically detects the type, but you might want to convert columns to a specific data type.
   - Add computed columns.
   - Remove columns.
   - Expand columns into specific fields.

### Create a report by using the data

Select **Close & Apply** to save your settings and pull the data into Power BI. After the data refreshes, you can create a report like you normally do in Power BI.

:::image type="content" source="media/transform-data/powerbi-close-apply.png" alt-text="Screenshot of the Power BI ribbon. The Close & Apply button is highlighted.":::

## Related content

- [Data available from Analytics](data-available-in-analytics.md)
- [Set permissions to access Analytics and Analytics views](./analytics-security.md)
- [Power BI integration](overview.md)
