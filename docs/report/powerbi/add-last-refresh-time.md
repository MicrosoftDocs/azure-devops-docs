---
title: Add last refresh date to a Power BI report 
titleSuffix: Azure DevOps
description: Learn how to add a field showing the last refresh date to an existing Power BI report based on Analytics.  
ms.subservice: azure-devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: how-to
monikerRange: '>= azure-devops-2019'
ms.date: 12/12/2022
---

# Create a column in Power BI for last refresh date

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

After you [create a report](create-quick-report.md) and [publish it to Power BI](publish-power-bi-desktop-to-power-bi.md), one of the most common requests is a way to determine the last time the data was refreshed.  

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Add the last refresh date column

To add a column with the last refresh date of the dataset, follow these steps.  

1. Load the Power BI pbix file associated with your view in Power BI Desktop.  

1. In the External Data section of the ribbon, choose **Edit Queries**.   

    > [!div class="mx-imgBorder"]  
    > ![Power BI Desktop, Home tab, Edit Queries](media/edit-queries.png) 

1. Open **Advanced Editor**.  

    > [!div class="mx-imgBorder"]  
    > ![Advanced Editor](media/AdvancedEditor.png) 

    If you haven't already modified the query, review the following examples with specific table values matching your Analytics view.

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

1. Modify the query according to the following syntax.  
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
> These examples use UTC. You can adjust the query code based on your specific timezone as described in [DateTimeZone functions](/powerquery-m/datetimezone-functions).

1. When finish, choose **Done**.

1. Choose **Close & Apply** to immediately refresh the dataset.   

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Power BI Desktop, Home, Close & Apply.](media/transform-data/powerbi-close-apply.png)   

1. To add a card with the last refresh date to your reports, under **Visualizations**, choose **Card**, and add **Refresh Date** to **Fields**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Power BI Desktop, Card, Refresh Date Applied.](media/last-refresh/card-visualizations.png)


## Related articles

- [Power BI integration overview](overview.md) 
- [Create Analytics views](analytics-views-create.md)
- [Create a Power BI report with a default Analytics view](create-quick-report.md)
- [Publish a Power BI Desktop file to Power BI](publish-power-bi-desktop-to-power-bi.md)
- [Get started with Power BI Desktop](/power-bi/fundamentals/desktop-getting-started)