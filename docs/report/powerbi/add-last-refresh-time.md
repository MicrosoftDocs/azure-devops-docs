---
title: Add last refresh date to a Power BI report 
titleSuffix: Azure DevOps
description: Learn how to add a field showing the last refresh date to an existing Power BI report based on Analytics.  
ms.subservice: azure-devops-analytics
ms.custom: engagement-fy23
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '>= azure-devops-2019'
ms.date: 03/11/2024
---

# Show last refresh date to Power BI report

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Adding a last refresh date to a report informs users about the recency of the data presented. You can include a card in the report that displays the date and time when the data was last updated. Additionally, refreshing the data models from Power BI ensures that all data models are up-to-date with the latest information.

The process for incorporating a last refresh date varies depending on the source of your Power BI report, whether it's an Analytics view, Power BI, or an OData query.
 
> [!NOTE]   
> Several Analytics entity types, such as `WorkItemRevision`, `WorkItem`, `WorkItemLink`, `TestRun`, and others, include the `AnalyticsUpdatedDate` property. This property indicates the most recent time that the individual entity references were updated.

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Add the last refresh date based on an Analytics view 

To add a column with the last refresh date of the dataset, do the following steps.  

1. Load the Power BI pbix file associated with your view in Power BI Desktop.  

1. In the Queries section of the ribbon, select **Transform data** > **Transform data**.   

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Power BI Desktop, Home tab, highlighted Transform Data button in Queries section.](media/edit-queries.png) 

2. Select **Advanced Editor**.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of highlighted Advanced Editor button.](media/advanced-editor.png) 

    If you didn't modify the query, review the following examples with specific table values matching your Analytics view.

	#### [Private view](#tab/private/)
	```Query 
	let
	    Source = VSTS.AnalyticsViews("{OrganizationName}", "ProjectName}", []),
	    #"Private Views_Folder" = Source{[Id="Private Views",Kind="Folder"]}[Data],
	    #"{AnalyticsViewsID_Table}" = #"Private Views_Folder"{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data]
	in
	    #"{AnalyticsViewsID_Table}"
	```
	
	#### [Shared view](#tab/shared/)
	```Query 
	let
	    Source = VSTS.AnalyticsViews("{OrganizationName}", "{ProjectName}", []),
	    #"{AnalyticsViewsID_Table}" = Source{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data]
	in
	    #"{AnalyticsViewsID_Table}"
	```
	
	***

3. Modify the query according to the following syntax.  
	
	#### [Private view](#tab/private/)
	```Query 
	let
	   Source = VSTS.AnalyticsViews("{OrganizationName}", "{ProjectName}", []),
		#"Private Views_Folder" = Source{[Id="Private Views",Kind="Folder"]}[Data],
		#"{AnalyticsViewsID_Table}" = #"Private Views_Folder"{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data]
	    #"Added Refresh Date" = Table.AddColumn(#"{tableid}_Table", "Refresh Date", 
	        each DateTimeZone.FixedUtcNow(), type datetimezone)
	in
	    #"Added Refresh Date"
	```
	
	#### [Shared view](#tab/shared/)
	```Query 
	let
	   Source = VSTS.AnalyticsViews("{OrganizationName}", "{ProjectName}", []),
	   #"{AnalyticsViewsID_Table}" = Source{[Id="{AnalyticsViewsID}",Kind="Table"]}[Data]
	   #"Added Refresh Date" = Table.AddColumn(#"{tableid}_Table", "Refresh Date", 
	       each DateTimeZone.FixedUtcNow(), type datetimezone)
	in
	   #"Added Refresh Date"
	```
	 
	***

   > [!IMPORTANT]  
   > These examples use UTC. You can adjust the query code based on your specific timezone as    described in [DateTimeZone functions](/powerquery-m/datetimezone-functions).

5. Select **Done**.

6. Select **Close & Apply** to immediately refresh the dataset.   

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Power BI Desktop, Home, highlighted Close & Apply button.](media/transform-data/powerbi-close-apply.png)   

## Add last refresh date based on a Power BI or OData query 

1. From Power BI, select **Get data** > **Blank Query**.

   :::image type="content" source="media/last-refresh/get-data-blank-query.png" alt-text="Screenshot of highlighted buttons, Get data, and Blank query.":::

2. Rename the query to *Last Refreshed Date*, and then enter the following formula into the function bar. 

	:::image type="content" source="media/last-refresh/last-refresh-date-query.png" alt-text="Screenshot of Power Query Editor, formula for DateTime.LocalNow for Last Refresh Date query. ":::

3. To convert the date data to a table format, choose **To Table** > **To Table**. Depending on the version you're using, you might need to **Invoke** parameters first. 

	:::image type="content" source="media/last-refresh/convert-data-to-table.png" alt-text="Screenshot of Power Query Editor, To Table option. ":::

	A single column appears with the date.

	:::image type="content" source="media/last-refresh/column-coverted-data.png" alt-text="Screenshot of converted date column. ":::

4. From the **Transform** menu, select the **Data Type** dropdown menu and select **Date/Time** option. 

	:::image type="content" source="media/last-refresh/change-data-type-date-time.png" alt-text="Screenshot of Transform menu, Change Data Type option to Date/Time. ":::

5. Rename **Column1** to something more meaningful, such as *Last Refresh Date*. 

6. From the Home menu, choose **Close and Apply**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Power BI Desktop, Home, Close & Apply.](media/transform-data/powerbi-close-apply.png)   

## Add a card to a report with the Refresh Date 

1. To add a card with the last refresh date to your reports, under **Visualizations**, choose **Card**, and add **Refresh Date** or **Last Refresh Date** to **Fields**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Power BI Desktop, Card, Refresh Date Applied.](media/last-refresh/card-visualizations.png)

## Refresh data

Choose **Refresh** to refresh report page data and the data model. After all queries are updated, the card refreshes with the latest date. 

:::image type="content" source="media/last-refresh/refresh-data.png" alt-text="Screenshot of Power BI, refresh option.":::

## Related articles

- [Power BI integration overview](overview.md) 
- [Create Analytics views](analytics-views-create.md)
- [Create a Power BI report with a default Analytics view](create-quick-report.md)
- [Publish a Power BI Desktop file to Power BI](publish-power-bi-desktop-to-power-bi.md)
- [Get started with Power BI Desktop](/power-bi/fundamentals/desktop-getting-started)
