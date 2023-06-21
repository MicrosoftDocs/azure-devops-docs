---
title: Power BI integration and supported connections methods
titleSuffix: Azure DevOps
description: Learn about the different integration options you can use to connect to Power BI to access Analytics for Azure DevOps.
ms.assetid: 8026A5ED-CD58-417A-913F-72A20272E7DC
ms.subservice: azure-devops-analytics
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '>=azure-devops-2019'
ms.date: 12/13/2022
---

# About Power BI integration

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]


With Power BI, a suite of business analytics tools, you can pull data from [Analytics](what-is-analytics.md), generate reports, and customize them to meet your needs. Use Power BI to do impromptu analysis, produce beautiful reports, and publish for enterprise consumption.

The integration of Power BI with Analytics enables you to go beyond the built-in Analytics reports and dashboard widgets to generate fully custom reports. 

## Data connection methods

You can pull data from Analytics into Power BI in one of the three ways described in the following table.

> [!NOTE]  
> OData (Open Data Protocol) is an ISO/IEC approved, OASIS standard that defines a set of best practices for building and consuming REST APIs. To learn more, see [OData documentation](/odata/).

:::row:::
   :::column span="1":::
   **Connection Option**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
   :::column span="2":::
   **Considerations**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   [Connect using the OData queries](odataquery-connect.md)
   :::column-end:::
   :::column span="1":::
   Power BI can execute OData queries. OData queries are powerful and can filter and aggregate data before returning it to Power BI.
   :::column-end:::
   :::column span="2":::
   **This is the recommended method**, except for simpler reports on Boards data. It requires you to write OData queries, which is similar to writing SQL queries. Fortunately, we provide several [sample reports](sample-odata-overview.md)</a> to help you get started.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Connect using the Azure DevOps Data Connector](data-connector-connect.md)
   :::column-end:::
   :::column span="1":::
   The Azure DevOps Data connector works with [Analytics views](what-are-analytics-views.md)</a>. To access **Analytics views**, you must enable the feature as described in [Enable preview features](../../project/navigation/preview-features.md)</a>
   :::column-end:::
   :::column span="2":::
   **This connector only works with Boards data (work items)** and doesn't support other data types, such as Pipelines. It provides a flat-list of work items, and doesn't support work item hierarchies. At this point, we have no plans to update the connector to support other types of data. We recommend using OData queries unless you have a simpler report on Boards data.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   [Connect using the Power BI's OData Feed connector](access-analytics-power-bi.md)
   :::column-end:::
   :::column span="1":::
   Power BI provides an OData Feed connector that allows you to connect to and browse the Analytic's OData endpoint. It's the typical way Power BI interacts with OData feeds. You can browse and select the entities and use its Query Editor to filter the dataset.
   :::column-end:::
   :::column span="2":::
   **Only use this method if you have a small account.** This method doesn't support server-side query folding. All filters are applied client-side. All the data is pulled into Power BI before applying the filters. If you have a small account, it may work fine for you. However, if you have a large account, then you'll likely experience long refresh times and timeouts.
   :::column-end:::
:::row-end:::


## Query Editor

Once you've connected data from Analytics in Power BI, you can always modify the underlying data using Power BI's **Power Query Editor** and **Advanced Editor**. Note the following operational constraints: 

- When you connect using OData queries or an OData feed, you can specify query filters, data to return, data to aggregate, and more. 
- When you connect using an Analytics view, you must edit the Analytics view to modify the query filter and fields that you want to have returned. 

For examples of reports, see [sample reports](#sample-reports) provided later in this article. 


## Transform data in Power BI

Once you've imported data into Power BI, you can use the Power Query Editor **Transform**, **Add Column**, and other menu options and tools to change the data as needed. Many of the [sample reports](#sample-reports) provided later in this article provide instructions on data transformations that you'll need to make. These instructions include some of the following operations: 

- Expand data columns  
- Pivot columns  
- Transform a column data type  
- Replace null values in column data 
- Create a custom field and a calculated column 

To get familiar with these operations, see [Transform Analytics data to generate Power BI reports](transform-analytics-data-report-generation.md).


## Data Analysis Expressions (DAX) 

Power BI supports creating new information from data already in your data model using DAX. DAX provides a collection of functions, operators, and constants that you can use in a formula to calculate and return one or more values. 

For an Analytics sample report that uses DAX, see [Calculate time-in-state for an existing Analytics view](create-timeinstate-report.md). 

To learn more about DAX, see [Learn DAX basics in Power BI Desktop](/power-bi/transform-model/desktop-quickstart-learn-dax-basics).


## Report visualizations, filters, sort operations 

After you've made any data transformations required for your particular report, you craft your report using the **Visualizations** pane, dragging column fields onto the **Visualizations** pane. You can then use the **Filters** pane to filter all or select data based on one or more fields. 
 
To quickly get familiar with these Power BI basic features, see the following Power BI articles: 
- [Visualization types in Power BI](/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a)
- [Visualizations in Power BI reports](/power-bi/visuals/power-bi-report-visualizations)
- [Take a tour of the report Filters pane](/power-bi/consumer/end-user-report-filter) 
 


## Sample reports

Several sample reports are provided to show how to generate reports from either an Analytics view or OData query. 

### Sample reports using Analytics view

- [Active bugs report](active-bugs-sample-report.md)  
- [Get a count of work items](data-connector-examples.md)  
- [Add a last refresh date](add-last-refresh-time.md)   
- [Filter on teams](create-team-filter.md)   
- [Calculate time-in-state for an existing Analytics view](create-timeinstate-report.md)   

### Sample reports using OData queries

To get started using OData queries in Power BI reports, see [Overview of sample reports using OData queries](sample-odata-overview.md). For specific examples, see one of the following articles: 
 

::: moniker range=">= azure-devops-2020"
---
:::row:::
   :::column span="1":::
      **Azure Boards**
   :::column-end:::
   :::column span="1":::
      **Azure Test Plans**  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [!INCLUDE [temp](includes/sample-fulllist.md)]
   :::column-end:::
   :::column span="1":::
      [!INCLUDE [temp](includes/sample-full-list-test-plans.md)]
   :::column-end:::
:::row-end:::
---

[!INCLUDE [temp](includes/sample-full-list-pipelines.md)]

--- 
::: moniker-end

::: moniker range="azure-devops-2019"

[!INCLUDE [temp](includes/sample-fulllist.md)] 

::: moniker-end

All sample report articles provide the following sections and information: 

* **Sample queries** - The Power BI Query and raw OData query used to pull data into Power BI along with other sample queries.
* **Transform data in Power BI** - Steps to transform the data into a reportable format
* **Create the report** - Steps to create a report from the data.

## Power BI extensions 

The following Marketplace extensions are available to support Power BI integration with Analytics.

- [WIQL to OData](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata) translates an Azure DevOps work item query into an OData query for use with Azure DevOps Analytics OData endpoints. This can be useful for beginners to initiate a simple OData query.
- [vscode-odata](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata) extension adds rich language support to Visual Studio Code for the OData query language. 
 


## Related articles

- [Dashboards](../dashboards/dashboards.md)
- [Extend Analytics with OData](../extend-analytics/quick-ref.md)    
- [Dashboards, charts, reports & widgets](../dashboards/overview.md)  
- [Power BI Desktop](/power-bi/fundamentals/desktop-get-the-desktop) 
- [Power BI documentation](/power-bi)
- [OData documentation](/odata/)
 