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
monikerRange: '>= azure-devops-2019'
ms.date: 09/12/2024
#customer intent: As a report creator who works in Power BI, I want to add last refresh information to my reports to let users know that the data is current.
---

# Show last refresh date to Power BI report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Adding a last refresh date to a report helps users understand how current the data is. You can display the date and time of the last data update using a card in the report. Regularly refreshing the data models in Power BI ensures that all information is up-to-date.

The steps to add a last refresh date vary based on the source of your Power BI report, whether it's an Analytics view, Power BI, or an OData query.

> [!NOTE]  
> Several Analytics entity types, such as `WorkItemRevision`, `WorkItem`, `WorkItemLink`, `TestRun`, and others, include the `AnalyticsUpdatedDate` property. This property indicates the most recent time that the individual entity references were updated.

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Add the last refresh date based on an Analytics view

To add a column with the last refresh date of the dataset, do the following steps.  

1. Load the Power BI *.pbix* file associated with your view in Power BI Desktop.  
2. In the **Queries** section of the ribbon, select **Transform data** > **Transform data**.

   :::image type="content" source="media/edit-queries.png" alt-text="Screenshot of Power BI Desktop, Home tab, highlighted Transform Data button in Queries section." lightbox="media/edit-queries.png":::

3. Select **Advanced Editor**.  

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

   ---

4. Modify the query according to the following syntax.  

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
 
   ---

   > [!NOTE]  
   > These examples use UTC. You can adjust the query code based on your specific timezone as described in [DateTimeZone functions](/powerquery-m/datetimezone-functions).

5. Select **Done**.
6. Select **Close & Apply** to immediately refresh the dataset.

   :::image type="content" source="media/transform-data/powerbi-close-apply.png" alt-text="Screenshot of Power BI Desktop, Home, highlighted Close & Apply button.":::

## Add last refresh date based on a Power BI or OData query

1. From Power BI, select **Get data** > **Blank Query**.

   :::image type="content" source="media/last-refresh/get-data-blank-query.png" alt-text="Screenshot of highlighted buttons, Get data, and Blank query.":::

1. Rename the query to *Last Refreshed Date*, and then enter the following formula into the function bar. 

   :::image type="content" source="media/last-refresh/last-refresh-date-query.png" alt-text="Screenshot of Power Query Editor, formula for DateTime.LocalNow for Last Refresh Date query. ":::

1. To convert the date data to a table format, choose **To Table** > **To Table**. Depending on the version you're using, you might need to **Invoke** parameters first.

   :::image type="content" source="media/last-refresh/convert-data-to-table.png" alt-text="Screenshot of Power Query Editor, To Table option. ":::

   A single column appears with the date.

   :::image type="content" source="media/last-refresh/column-coverted-data.png" alt-text="Screenshot of converted date column. ":::

1. From the **Transform** menu, select the **Data Type** dropdown menu and select **Date/Time** option.

   :::image type="content" source="media/last-refresh/change-data-type-date-time.png" alt-text="Screenshot of Transform menu, Change Data Type option to Date/Time. ":::

1. Rename **Column1** to something more meaningful, such as *Last Refresh Date*.

1. From the Home menu, choose **Close and Apply**.

   :::image type="content" source="media/transform-data/powerbi-close-apply.png" alt-text="Screenshot of Power BI Desktop, Home, Close & Apply.":::

## Add a card to a report with the Refresh Date

- To add a card with the last refresh date to your reports, under **Visualizations**, choose **Card**, and add **Refresh Date** or **Last Refresh Date** to **Fields**.

  :::image type="content" source="media/last-refresh/card-visualizations.png" alt-text="Screenshot of Power BI Desktop, Card, Refresh Date Applied.":::

## Refresh data

Choose **Refresh** to refresh report page data and the data model. After all queries are updated, the card refreshes with the latest date.

:::image type="content" source="media/last-refresh/refresh-data.png" alt-text="Screenshot of the Power BI Desktop refresh option.":::

## Related content

- [About Power BI integration](overview.md)
- [Create an Analytics view in Azure DevOps](analytics-views-create.md)
- [Create a Power BI report using a default Analytics view](create-quick-report.md)
- [Publish a Power BI Desktop file to Power BI](publish-power-bi-desktop-to-power-bi.md)
- [Get started with Power BI Desktop](/power-bi/fundamentals/desktop-getting-started)
