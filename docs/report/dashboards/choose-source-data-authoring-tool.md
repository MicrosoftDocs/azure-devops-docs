---
title: Choose the source of data and authoring tool
titleSuffix: Azure DevOps Server
description: Guide to data sources and tools for creating and customizing reports, Azure DevOps Server & Team Foundation Server  
ms.custom: dashboards
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: cc71c69f-230b-47e6-b29b-398e3e280894
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
monikerRange: '<= azure-devops-2019'
ms.date: 04/05/2019
---

# Choose the source of data and authoring tool

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

When you create reports that show data from Azure DevOps Server, previously named Team Foundation Server (TFS), you specify one of three sources of data and use one of three authoring tools. The choice of data source and authoring tool are interrelated.

The simplest reports that you can generate are based on work item lists. You can create reports about work items by exporting a work item query to Office Excel. Work item lists are best suited to tables and charts that handle no more than several hundred work items.

You can create current status and historical trend data by using the Online analytic processing (OLAP) data cube (TFS\_Analysis), which is optimized for reporting. The OLAP data cube is best suited to reports that provide aggregated information, such as the number of work items that meet a set of criteria. If you want to create reports that show trends over time, such as burn-down or progress charts, you can most easily create them from the OLAP data cube.

You can use the relational warehouse database (TFS\_Warehouse) to create reports that provide line-item details. These include reports that contain titles of work items and more complex reports that do not include trends or historical data.

## Data sources and authoring tools

As the following table shows, your choice of data source depends not only on the kind of data that you want to show but also on the tool that you use to create reports. If you use Excel, you cannot use the warehouse database effectively. If you use Report Builder or Report Designer, you cannot use lists of work items.

|Authoring tool|Work item query results|OLAP data cube (TFS_Analysis)|Relational warehouse database (TFS_Warehouse)|
|---|---|---|---|
|Excel|Yes|Yes|No|
|Report Builder|No|Yes|Yes|
|Report Designer|No|Yes|Yes|

For more information about how you can create reports that access the three sources of data, see the related topics in the following table.

|Authoring tool|Source of data|Related topic|
|---|---|---|
|Excel|Work item query results|[Use the query editor to list and manage queries](../../boards/queries/using-queries.md)|
|Excel|OLAP data cube|[Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md)|
|Report Designer|OLAP data cube|[Create an aggregate report using Report Designer and the Analysis Services Cube](../sql-reports/create-aggregate-report-report-designer-analysis-services-cube.md) </li></ul>|
|Report Designer|Warehouse database|[Create a Detailed Report using Report Designer](../sql-reports/create-a-detailed-report-using-report-designer.md)|

## Creating reports that are based on the OLAP data cube

The analysis services database is a multidimensional database that aggregates the data from the warehouse database for more efficient analysis. This data source works especially well with Microsoft Excel.

The analysis services database organizes data in a cube structure. The cube contains measures that are aggregated against many dimensions. This structure provides aggregate values, such as the hours of work for a set of work items. The values are selected directly from the cube instead of calculated in the query.

> [!NOTE]
> Some measures, such as **Work Item.Work Item Count**, are not pre-aggregated. They are calculated when the query is performed.


You can easily build PivotTable and PivotChart reports in Excel by using the analysis services database. For more information, see [Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md).

For more information about this source of data, see [Perspectives and measure groups provided in the Analysis Services cube for Visual Studio](../sql-reports/perspective-measure-groups-cube.md).

## Creating reports based on warehouse data

The warehouse database is a relational database that organizes data in a set of related tables and provides views and table-valued functions for accessing that data. Data from the project collections is gathered and maintained in the warehouse database. If you are familiar with writing Transact-SQL queries, you can create reports by using the warehouse database.

> [!NOTE]   
> The warehouse database might contain detailed data that is not present in the analysis services database, depending on the work items that your project uses. For more information about how work item fields are mapped to the warehouse, see [Reportable fields reference for Visual Studio ALM](../../reference/xml/reportable-fields-reference.md).


For more information about the warehouse database, see [Table reference for the relational warehouse database](../sql-reports/table-reference-relational-warehouse-database.md).

## Related articles

- [Create Excel status and trend charts from a query](../excel/create-status-and-trend-excel-reports.md)
- [Dashboards and reports](overview.md)
- [Design Reporting Services Paginated Reports with Report Designer (SSRS)](https://msdn.microsoft.com/library/ms156280.aspx) 
- [Report Builder in SQL Server 2016](https://msdn.microsoft.com/library/dd220460.aspx)

