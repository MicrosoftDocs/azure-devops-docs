---
title: Connect with data by using OData queries
titleSuffix: Azure DevOps
description: Learn how to write and test OData queries in Visual Studio Code for use in Power BI integration with Azure DevOps.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '>= azure-devops-2019'
ms.date: 09/19/2024
#customer intent: As a team member, I want to learn how to use OData queries to get data into Power BI in a way that does as much work as possible server-side.
---

# Connect with data by using Power BI and OData queries

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

To pull data into Power BI, we recommend that you use Open Data Protocol (OData) queries. OData is an ISO/IEC-approved OASIS standard that defines best practices for building and consuming REST APIs. For more information, see the [OData documentation](/odata/).

To get started quickly, see [Overview of sample reports that use OData queries](sample-odata-overview.md). For information about other approaches, see [About Power BI integration](overview.md).

Power BI can run OData queries, which can return a filtered or aggregated set of data to Power BI. OData queries have two advantages:

- All filtering is done server-side. Only the data you need is returned, which leads to shorter refresh times.
- You can preaggregate data server-side. An OData query can carry out aggregations such as work item rollup and build failure rates. The aggregations are accomplished server-side, and only the aggregate values are returned to Power BI. With preaggregation, you can carry out aggregations across large datasets, without needing to pull all the detail data into Power BI.

In this article, you learn how to:

> [!div class="checklist"]
> - Write and test OData queries.
> - Run an OData query from Power BI.

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Use Visual Studio Code to write and test OData queries

The easiest way to write and test OData is to use [Visual Studio Code](https://aka.ms/vscode) with the [OData extension](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata). Visual Studio Code is a free code editor available on Windows, Mac, and Linux. The OData extension provides syntax highlighting and other functions that are useful for writing and testing queries.

### Install Visual Studio Code and the OData extension

1. Install [Visual Studio Code](https://aka.ms/vscode).

1. Open Visual Studio Code, select **Extensions**, and then search for *odata*. In the results list, select **vscode-odata**, and then install it.

1. Create and save an OData file in Visual Studio Code, for example, *filename.odata*. Name it whatever you want, but it must have a *.odata* extension to enable the OData extension functionality.

### Write the OData query

1. Write the OData query. For example queries, see the [Overview of sample reports that use OData queries](sample-odata-overview.md).

   The following query returns the top 10 work items under a specific area path.

1. Replace `{organization}`, `{project}`, and `{area path}` with your values.

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

:::image type="content" source="media/odataquery-syntaxhighlighting.png" alt-text="Screenshot that shows the Visual Studio Code OData extension with syntax highlighting.":::

### Test the OData query

1. To test the OData query, place your cursor anywhere in the query text and select **View** > **Command Palette**.
1. In the search box, enter *odata* to bring up all the OData commands.

   :::image type="content" source="media/odataquery-commandpallette.png" alt-text="Screenshot that shows the command palette for the Visual Studio Code OData extension.":::

1. Select **OData: Open**. This action combines the multiline query into a one-line URL and opens it in your default browser.

   - The OData query result set is in JSON format. To view the results, install the JSON Formatter extension for your browser. Several options are available for both Chrome and Microsoft Edge.

     :::image type="content" source="media/odataquery-jsonoutput.png" alt-text="Screenshot that shows the JSON output for the Visual Studio Code OData extension.":::

   - If the query has an error, the Analytics service returns an error in JSON format. For example, this error states that the query selected a field that doesn't exist.

     :::image type="content" source="media/odataquery-jsonerror.png" alt-text="Screenshot that shows the JSON error for the Visual Studio Code OData extension.":::

After you verify that the query works correctly, you can run it from Power BI.

## Run the OData query from Power BI

To run the OData query from Power BI, follow the steps in the next section.

### Combine the multiline OData query into a single-line query

Before you use the query in Power BI, you must convert the multiline OData query into a single-line query. The simplest way to do so is to use [Visual Studio Code](https://aka.ms/vscode) with the [OData extension](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata) and use the **OData: Combine** command.

> [!NOTE]
> In your *filename.odata* file, you might want to first create a copy of the multiline query text and then run **OData: Combine** on the copy. Do this step first because there's no way to convert the single-line query back to a readable multiline query.

1. In Visual Studio Code, place your cursor anywhere in the query text, and then select **View** > **Command Palette**. In the search box, enter *odata*. Then in the results list, select **OData: Combine**.

   The multiline query gets converted into a single-line query.

   :::image type="content" source="media/odataquery-combineto1line.png" alt-text="Screenshot that shows the Visual Studio Code OData extension combined to a single-line query.":::

1. Copy the entire line for use in the next section.

### Run the query from Power BI

1. Select **Get Data** > **OData feed**. For more information, see [Create a Power BI report with an OData query](create-quick-report-odataq.md).

   :::image type="content" source="media/ODataQuery.png" alt-text="Screenshot that shows the Power BI OData feed command.":::

1. In the **OData feed** window, in the **URL** box, paste the OData query that you copied in the preceding section, and then select **OK**.

   :::image type="content" source="media/odataquery-powerbi-odatafeed.png" alt-text="Screenshot that shows the OData feed dialog where you paste the OData query.":::

   Power BI displays a preview page.

   :::image type="content" source="media/odataquery-powerbi-preview.png" alt-text="Screenshot that shows the preview page for the Power BI OData feed.":::

### Specify query options

1. Select **Edit** on the preview page to open Power Query Editor.

   :::image type="content" source="media/odataquery-powerbi-queryeditor.png" alt-text="Screenshot that shows Power Query Editor open for the Power BI OData feed." lightbox="media/odataquery-powerbi-queryeditor.png":::

1. Select **Advanced Editor** on the ribbon.

   :::image type="content" source="media/AdvancedEditor.png" alt-text="Screenshot that shows Advanced Editor selected for the Power BI OData feed.":::

1. Scroll horizontally to view the `[Implementation="2.0"]` parameter in the **Query** pane.

   :::image type="content" source="media/odataquery-powerbi-advancededitor1.png" alt-text="Screenshot that shows the Power BI OData feed with the Advanced Editor scrolled to the end.":::

1. Replace `[Implementation="2.0"]` with the following string:

   `[Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]`

   :::image type="content" source="media/odataquery-powerbi-advancededitor2.png" alt-text="Screenshot that shows the replacement string.":::

   This change helps prevent throttling errors. The new values do the following actions:

   - Instruct Power BI to reference OData v4.
   - Instruct the Analytics service to omit any values that are null, which improves query performance.

   Power Query attempts to resolve null values as errors by generating another query for every null value it encounters. This action can result in thousands of queries. These queries can quickly exceed your usage threshold, beyond which your user account gets throttled.

1. Select **Done** to close the Advanced Editor and return to Power BI Power Query Editor. You can use Power Query Editor to perform the following optional actions:

   - Rename the `Query1` query as something more specific.
   - Transform columns to a specific type. Power BI autodetects the type, but you might want to convert columns to a specific data type.
   - Add computed columns.
   - Remove columns.
   - Expand columns into specific fields.

### Create a report by using the data

Select **Close & Apply** to save your settings and pull the data into Power BI. After the data refreshes, you can create a report as you would normally in Power BI.

:::image type="content" source="media/transform-data/powerbi-close-apply.png" alt-text="Screenshot that shows the Power BI Close and Apply button.":::

## Related articles

- [Overview of sample reports using OData queries](sample-odata-overview.md)
- [Data available from Analytics](data-available-in-analytics.md)
- [Permissions to access Analytics and Analytics views](./analytics-security.md)
- [Power BI integration](overview.md)
