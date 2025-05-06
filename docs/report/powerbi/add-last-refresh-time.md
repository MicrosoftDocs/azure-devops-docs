---
title: Add last refresh date to a Power BI report 
titleSuffix: Azure DevOps
description: Learn how to add a field showing the last refresh date to an existing Power BI report based on Analytics.  
ms.subservice: azure-devops-analytics
ms.custom: engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: how-to
ai-usage: ai-assisted
monikerRange: "<=azure-devops"
ms.date: 05/06/2025
#customer intent: As a report creator who works in Power BI, I want to add last refresh information to my reports to let users know that the data is current.
---

# Show last refresh date to Power BI report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

When you add a last refresh date to a report, it helps users understand how current the data is. You can display the date and time of the last data update using a card in the report. Regularly refreshing the data models in Power BI ensures that all information remains up-to-date.

The steps to add a last refresh date vary based on the source of your Power BI report, whether it's an Analytics view, Power BI, or an OData query.

> [!NOTE]  
> Several Analytics entity types, such as `WorkItemRevision`, `WorkItem`, `WorkItemLink`, `TestRun`, and others, include the `AnalyticsUpdatedDate` property. This property indicates the most recent time that the individual entity references were updated.

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Add the last refresh date based on an Analytics view

To add a column with the last refresh date of the dataset, do the following steps:  

1. Open **Power BI Desktop** on your computer.
2. Select **File** from the top menu, then choose **Open**.
3. Go to the location where your *.pbix* file is stored, select the file, and select **Open**.  

   The *.pbix* file contains the data model and report layout associated with your view. Once loaded, you can begin making modifications, such as adding a last refresh date or customizing the report further. 
4. In the **Queries** section of the ribbon, select **Transform data** > **Transform data**.

   :::image type="content" source="media/edit-queries.png" alt-text="Screenshot of Power BI Desktop, Home tab, highlighted Transform Data button in Queries section." lightbox="media/edit-queries.png":::

5. Select **Advanced Editor**.  

   :::image type="content" source="media/advanced-editor.png" alt-text="Screenshot of highlighted Advanced Editor button." lightbox="media/advanced-editor.png":::

   If you didn't modify the query, review the following examples with specific table values matching your Analytics view.

   ### [Private view](#tab/private/)

   ```Query
   let
       Source = AzureDevOps.AnalyticsViews("{OrganizationName}", "{ProjectName}", []),
       #"Private Views_Folder" = Source{[Id="Private Views",Kind="Folder"]}[Data],
       #"{AnalyticsViewsID_Table}" = #"Private Views_Folder"{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data],
       #"Added Refresh Date" = Table.AddColumn(#"{AnalyticsViewsID_Table}", "Refresh Date", each DateTimeZone.FixedUtcNow(), type datetimezone)
   in
       #"Added Refresh Date"
   ```

   ### [Shared view](#tab/shared/)

   ```Query
   let
       Source = AzureDevOps.AnalyticsViews("{OrganizationName}", "{ProjectName}", []),
       #"{AnalyticsViewsID_Table}" = Source{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data]
   in
       #"{AnalyticsViewsID_Table}"
   ```

   ***

6. Modify the query according to the following syntax.  

   ### [Private view](#tab/private/)

   ```Query
   let
       Source = AzureDevOps.AnalyticsViews("{OrganizationName}", "{ProjectName}", []),
       #"Private Views_Folder" = Source{[Id="Private Views",Kind="Folder"]}[Data],
       #"{AnalyticsViewsID_Table}" = #"Private Views_Folder"{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data],
       #"Added Refresh Date" = Table.AddColumn(#"{AnalyticsViewsID_Table}", "Refresh Date", each DateTimeZone.FixedUtcNow(), type datetimezone)
   in
       #"Added Refresh Date"
   ```

   ### [Shared view](#tab/shared/)

   ```Query
   let
       Source = AzureDevOps.AnalyticsViews("{OrganizationName}", "{ProjectName}", []),
       #"{AnalyticsViewsID_Table}" = Source{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data],
       #"Added Refresh Date" = Table.AddColumn(#"{AnalyticsViewsID_Table}", "Refresh Date", each DateTimeZone.FixedUtcNow(), type datetimezone)
   in
       #"Added Refresh Date"
   ```

   ***

   > [!NOTE]  
   > These examples use UTC. You can adjust the query code based on your specific timezone as described in [DateTimeZone functions](/powerquery-m/datetimezone-functions).

7. Select **Done**.
8. Select **Close & Apply** to immediately refresh the dataset.

   :::image type="content" source="media/transform-data/powerbi-close-apply.png" alt-text="Screenshot of Power BI Desktop, Home, highlighted Close & Apply button.":::

## Add last refresh date based on a Power BI or OData query

To add the last refresh date based on a Power BI or OData query, do the following steps:

1. From Power BI, select **Get data** > **Blank Query**.

   :::image type="content" source="media/last-refresh/get-data-blank-query.png" alt-text="Screenshot of highlighted buttons, Get data, and Blank query.":::

1. Rename the query to *Last Refreshed Date*, and then enter the following formula into the function bar. 

   :::image type="content" source="media/last-refresh/last-refresh-date-query.png" alt-text="Screenshot of Power Query Editor, formula for DateTime.LocalNow for Last Refresh Date query. ":::

1. To convert the date data to a table format, choose **To Table** > **To Table**.

   :::image type="content" source="media/last-refresh/convert-data-to-table.png" alt-text="Screenshot of Power Query Editor, To Table option. ":::

   A single column appears with the date.

   :::image type="content" source="media/last-refresh/column-coverted-data.png" alt-text="Screenshot of converted date column. ":::

   > [!TIP]
   > If the **To Table** option isn't available, you can use the following alternative steps to add the last refresh date and time to your reports:
   > 1. Select the **Home** tab and select **Get Data**. Choose **Blank Query** from the options.
   > 2. In the Queries pane, right-select on the new query and select **Advanced Editor**. 
   > 3. To create a table with the current date and time, replace the existing code with the following code:
   > ```
   > let
   > Source = #table(
   >     {"Last Refresh Date"}, 
   >     {{DateTime.LocalNow()}}
   > )
   > in
   > Source
   >```

2. From the **Transform** menu, select the **Data Type** dropdown menu and select **Date/Time** option.

   :::image type="content" source="media/last-refresh/change-data-type-date-time.png" alt-text="Screenshot of Transform menu, Change Data Type option to Date/Time. ":::

3. Rename **Column1** to something more meaningful, such as *Last Refresh Date*.

4. From the Home menu, select **Close and Apply**.

   :::image type="content" source="media/transform-data/powerbi-close-apply.png" alt-text="Screenshot of Power BI Desktop, Home, Close & Apply.":::

## Add a card to a report with the Refresh Date

To add a card with the last refresh date to your reports, under **Visualizations**, select **Card**, and add **Refresh Date** or **Last Refresh Date** to **Fields**.

  :::image type="content" source="media/last-refresh/card-visualizations.png" alt-text="Screenshot of Power BI Desktop, Card, Refresh Date Applied.":::

## Refresh data

Choose **Refresh** to refresh report page data and the data model. After all queries are updated, the card refreshes with the latest date.

:::image type="content" source="media/last-refresh/refresh-data.png" alt-text="Screenshot of the Power BI Desktop refresh option.":::

## Related articles

- [Learn about Power BI integration](overview.md)
- [Create an Analytics view in Azure DevOps](analytics-views-create.md)
- [Create a Power BI report using a default Analytics view](create-quick-report.md)
- [Publish a Power BI Desktop file to Power BI](publish-power-bi-desktop-to-power-bi.md)
- [Get started with Power BI Desktop](/power-bi/fundamentals/desktop-getting-started)
