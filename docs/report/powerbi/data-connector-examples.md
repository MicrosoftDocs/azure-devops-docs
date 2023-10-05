---
title: Example reports based on Analytics views and Power BI data connector
titleSuffix: Azure DevOps   
description: Learn how to develop reports based on Analytics views data when using the Power BI Data Connector.
ms.assetid: 3356B3EF-E9AB-4B42-8738-E58AA34A4B4F
ms.custom: analytics-views, engagement-fy23 
ms.subservice: azure-devops-analytics
ms.topic: sample
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms date: 12/13/2022
---

# Example reports based on Analytics views

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Learn how to generate the following example reports in Power BI based on an Analytics view.  

- [Count of Work Items](#number-of-work-items)  
- [Matrix report of work items by Area Path and State](#number-of-work-items-by-area-path-and-state)  

Before generating these reports, you must first [connect to Analytics using the Power BI data connector](data-connector-connect.md). 

> [!TIP]  
> Use the search box if you are working with tables that contain many columns.

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

<a id="number-of-work-items" />

## Show card with total count of work items

1. Load the `Work Items - Today` Analytics view into Power BI.  

2. From the **Visualizations** pane, choose **Card**, and drag the `Work Item ID` to **Fields**.    

	:::image type="content" source="media/analytics-views/work-item-count-card.png" alt-text="Screenshot of Power BI Visualizations, choose Card and add Work Item ID to Fields. ":::

## Number of work items by area path and state

1. Load `Work Items - Today` Analytics view into Power BI. The data table should include the following columns: `Area Path`, `Assigned To`, `Iteration Path`, `State`, `Title`, `Work Item ID`, and `Work Item Type`.  

2. From the **Visualizations** pane, choose **Matrix**, and add `Area Path`, `State`, and `Work Item ID` to **Rows**, **Columns**, and **Values**, respectively. 

	:::image type="content" source="media/analytics-views/matrix-work-items-area-state.png" alt-text="Screenshot of Power BI Visualizations, choose Matrix and add Area Path, State, and Work Item ID fields to Rows, Columns, and Values. "::: 

1. (Optional) Expand the **Filters** pane and choose one or more fields to filter the report. For example, the example report shown in the previous image only shows select `Area Paths`. 

	:::image type="content" source="media/analytics-views/matrix-work-items-filters.png" alt-text="Screenshot of Power BI Filters, select Area Paths. "::: 

	> [!NOTE]   
	> To simplify the report, select `Area Paths` were renamed to shorten their labels. To learn how to replace values in a column, see [Transform Analytics data to generate Power BI reports, Replace values](transform-analytics-data-report-generation.md#replace-null-values). 

1. To filter on other fields, such as `Iteration Path` or `Work Item Type`, drag the field to **Columns** in the **Visualizations** pane, and then filter the data from the **Filters** pane.

 
## Related articles 

- [Power BI integration overview](overview.md) 
- [Connect with Power BI Data Connector](./data-connector-connect.md)
- [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md).   
- [Dataset design for the Power BI Data Connector](data-connector-dataset.md) 
- [Functions available in Power BI Data Connector](data-connector-functions.md) 
