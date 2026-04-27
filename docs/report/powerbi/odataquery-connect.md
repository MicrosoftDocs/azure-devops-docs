---
title: Connect with Data by Using OData Queries
titleSuffix: Azure DevOps
description: Learn how to use OData queries to integrate Azure DevOps Analytics data into Power BI. Write, test, and optimize queries in Visual Studio Code for faster insights.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 03/18/2026
ms.custom: sfi-image-nochange, copilot-scenario-highlight
ai-usage: ai-assisted
#customer intent: As a team member, I want to see how to use OData queries to get Azure DevOps Analytics data into Power BI so that I can minimize Power BI refresh times by taking advantage of server-side filtering and aggregation.
---

# Connect with data by using Power BI and OData queries

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows how to write an OData query against Azure DevOps Analytics, test it in Visual Studio Code, and run it from Power BI. OData queries give you two advantages over other connection methods:

- **Server-side filtering** — Only the data you need is returned, which leads to shorter refresh times.
- **Server-side aggregation** — Rollups, failure rates, and other calculations run on the server, so only aggregate values travel to Power BI. This approach lets you summarize large datasets without pulling all detail rows.

OData (Open Data Protocol) is an ISO/IEC-approved REST API standard maintained by OASIS. For more information, see the [OData documentation](/odata/).

To get started quickly with ready-made queries, see [Overview of sample reports using OData queries](sample-odata-overview.md). For information about other connection approaches, see [About Power BI integration](overview.md).

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Use Visual Studio Code to write and test OData queries

Use [Visual Studio Code](https://aka.ms/vscode) with the [OData extension](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata) to write, syntax-check, and run OData queries before you bring them into Power BI.

### Install Visual Studio Code and the OData extension

1. Install [Visual Studio Code](https://aka.ms/vscode).

1. In Visual Studio Code, select **Extensions** (Ctrl+Shift+X), search for **odata**, and install the **vscode-odata** extension.

1. Create a file with the **.odata** extension (for example, *queries.odata*). The extension activates syntax highlighting and OData commands only for files with this extension.

### Write the OData query

The following query returns the top 10 work items under a specific area path. Replace `{organization}`, `{project}`, and `{area path}` with your values.

```odata
https://analytics.dev.azure.com/{organization}/{project}/_odata/v3.0-preview/WorkItems?
      $select=WorkItemId,Title,WorkItemType,State,CreatedDate
      &$filter=startswith(Area/AreaPath,'{area path}')
      &$orderby=CreatedDate desc
      &$top=10
```

To query across projects, omit `/{project}` entirely. For more example queries, see [Overview of sample reports using OData queries](sample-odata-overview.md) and [Sample reports and quick reference index](../extend-analytics/quick-ref.md).

After you enter the query, syntax highlighting confirms that the OData extension is active.

:::image type="content" source="media/odataquery-syntaxhighlighting.png" alt-text="Screenshot that shows an OData file in Visual Studio Code. Each type of code element has its own color.":::

### Test the OData query

1. Place your cursor anywhere in the query text, and then select **View** > **Command Palette** (Ctrl+Shift+P).

1. Type **odata** and select **OData: Open**. The extension combines the multiline query into a single URL and opens the results in your default browser.

   :::image type="content" source="media/odataquery-commandpallette.png" alt-text="Screenshot that shows the command palette for the Visual Studio Code OData extension.":::

1. Review the results.

   - **Success** — The results appear as JSON. Install a JSON formatter extension for Chrome or Microsoft Edge to make the output readable.

     :::image type="content" source="media/odataquery-jsonoutput.png" alt-text="Screenshot of a browser that shows the JSON output of the OData query displayed in a readable format." lightbox="media/odataquery-jsonoutput.png":::

   - **Error** — Analytics returns an error message in JSON. For example, the following error indicates that the query references a field that doesn't exist.

     :::image type="content" source="media/odataquery-jsonerror.png" alt-text="Screenshot of a browser that shows JSON output in a readable format. A message in the output indicates an error in an OData query." lightbox="media/odataquery-jsonerror.png":::

After the query returns the expected results, you're ready to run it from Power BI.

## Run the OData query from Power BI

### Combine the multiline query into a single line

Power BI requires a single-line URL. Use the OData extension to convert your multiline query.

1. Make a copy of your **.odata** file first — the combine operation is irreversible.

1. Open the copy in Visual Studio Code, place your cursor in the query text, and select **View** > **Command Palette** > **OData: Combine**.

   :::image type="content" source="media/odataquery-combineto1line.png" alt-text="Screenshot of an OData file in Visual Studio Code. The file contains a multiline query followed by the single-line version of the query.":::

1. Copy the single-line query for the next step.

### Connect to the OData feed

1. In Power BI Desktop, select **Get data** > **OData feed**.

   :::image type="content" source="media/ODataQuery.png" alt-text="Screenshot of Power BI with Get data and OData feed highlighted.":::

1. Paste the single-line query into the **URL** box and select **OK**.

   :::image type="content" source="media/odataquery-powerbi-odatafeed.png" alt-text="Screenshot of the OData feed dialog. The URL box contains the single-line OData query.":::

   Power BI displays a data preview.

   :::image type="content" source="media/odataquery-powerbi-preview.png" alt-text="Screenshot of a preview page in Power BI with buttons for loading and transforming data. A table lists information about several work items.":::

### Configure query options to prevent throttling

By default, Power Query generates a separate request for every null value it encounters. This behavior can produce thousands of requests and cause throttling on your account. The following steps add parameters that eliminate this behavior.

1. On the preview page, select **Transform Data** to open Power Query Editor.

   :::image type="content" source="media/odataquery-powerbi-queryeditor.png" alt-text="Screenshot of Power Query Editor. A table lists OData feed data for several work items." lightbox="media/odataquery-powerbi-queryeditor.png":::

1. Select **Advanced Editor** on the ribbon.

   :::image type="content" source="media/AdvancedEditor.png" alt-text="Screenshot of the Power BI ribbon. Advanced Editor is highlighted.":::

1. Scroll to the end of the query and find `[Implementation="2.0"]`.

   :::image type="content" source="media/odataquery-powerbi-advancededitor1.png" alt-text="Screenshot of the Advanced Editor window. The end of the query is visible, and the implementation parameter is highlighted.":::

1. Replace it with:

   `[Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]`

   :::image type="content" source="media/odataquery-powerbi-advancededitor2.png" alt-text="Screenshot of the Advanced Editor window. The end of the query is visible. It contains the replacement string and is highlighted.":::

   These parameters do two things:
   - **ODataVersion = 4** — Tells Power BI to use OData v4.
   - **OmitValues = ODataOmitValues.Nulls** — Tells Analytics to skip null values, which prevents Power Query from generating extra requests that lead to throttling.

1. Select **Done**. Before you close Power Query Editor, you can optionally:
   - Rename `Query1` to something descriptive.
   - Change column data types.
   - Add computed columns or remove unneeded columns.
   - Expand nested columns into individual fields.

### Create the report

Select **Close & Apply** to load the data into Power BI. You can now build visuals, add filters, and design your report.

:::image type="content" source="media/transform-data/powerbi-close-apply.png" alt-text="Screenshot of the Power BI ribbon. The Close & Apply button is highlighted.":::

For a step-by-step example, see [Create a Power BI report with an OData query](create-quick-report-odataq.md).

[!INCLUDE [odata-ai-assistance](includes/odata-ai-assistance.md)]

## Related content

- [Data available from Analytics](data-available-in-analytics.md)
- [Set permissions to access Analytics and Analytics views](./analytics-security.md)
- [About Power BI integration](overview.md)
