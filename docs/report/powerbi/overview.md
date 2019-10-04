---
title: Learn about Power BI integration and supported connection methods
titleSuffix: Azure DevOps
description: Describes the different integration options you can use to connect to Power BI to access Analytics for Azure DevOps
ms.assetid: 8026A5ED-CD58-417A-913F-72A20272E7DC
ms.prod: devops
ms.technology: devops-analytics
ms.manager: jillfra
ms.author: stansw
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '>=azure-devops-2019'
ms.date: 10/04/2019
---

# About Power BI integration

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

With Azure DevOps, you can create [dashboards](../dashboards/dashboards.md) and [add widgets to them](../dashboards/add-widget-to-dashboard.md). Azure DevOps also provides several reports in the product itself. Both dashboards and in-line reports offer easy access to [Azure DevOps Analytics](what-is-analytics.md) to enable data-driven decisions. However, we acknowledge that customers often need more than what is provided in the product. 

With Power BI, you can pull data from [Azure DevOps Analytics](what-is-analytics.md), generate reports, and customize them to meet your needs. [Power BI](https://powerbi.microsoft.com) is a suite of business analytics tools. Use it to do ad hoc analysis, produce beautiful reports, and publish for enterprise consumption.

[!INCLUDE [temp](../_shared/analytics-preview.md)]


## Prerequisites

Before you get started using Power BI to work with Analytics, make sure you have completed the following steps:

::: moniker range="azure-devops"

1. Install the *Power BI Desktop* *October 2018 Update* or a newer version. You can download it from the official [Power BI Desktop download page](/power-bi/desktop-what-is-desktop).  
1. Configure the [permissions required to access Analytics](analytics-security.md).  
1. Review the [knowledge base of Power BI articles](/power-bi).  
1. If you are not familiar with Analytics, read "[What is Analytics](what-is-analytics.md)" before continuing.

::: moniker-end

::: moniker range="azure-devops-2019"


1. Install the *Power BI Desktop* *October 2018 Update* or a newer version. You can download it from the official [Power BI Desktop download page](/power-bi/desktop-what-is-desktop).  
1. [Enable or install the Analytics extension](../dashboards/analytics-extension.md).  
1. Configure the [permissions required to access Analytics](analytics-security.md).  
1. Review the [knowledge base of Power BI articles](/power-bi).  
1. If you are not familiar with Analytics, read "[What is Analytics](what-is-analytics.md)" before continuing.

::: moniker-end



## Supported data connection methods

You can pull data from Analytics into Power BI in one of three ways. It is important to understand each method, before choosing. 


<table width="90%">
<tbody valign="top">
    <tr>
        <td width="25%"><b>Connection Option</td>
        <td><b>Description</td>
        <td><b>Considerations</td>
    </tr>
    <tr>
        <td><a href="odataquery-connect.md">Connect using the OData queries</href></td>
        <td>Power BI can execute OData queries. OData queries are very powerful and can filter and aggregate data before returning it to Power BI.</td>
        <td><b>This is the recommended method</b>, except for simpler reports on Boards data. It requires you to write OData queries, which is similar to writing SQL queries. Fortunately, we provide several <a href="sample-odata-overview.md">sample reports</href></a> to help you get started.</td>
    </tr>
    <tr>
        <td><a href="data-connector-connect.md">Connect using the Azure DevOps Data Connector</href></td>
        <td>The Azure DevOps Data connector works with <a href="what-are-analytics-views.md">Analytics views</href></a>. To access <b>Analytics views</b>, you must enable the feature as described in <a href="/azure/devops/project/navigation/preview-features">Enable preview features</href></a></td>
        <td><b>This connector only works with Boards data (work items)</b> and does not support other data types, such as Pipelines. It provides a flat-list of work items, and does not support work item hierarchies. At this point, we have no plans to update the connector to support other types of data. We recommend using OData queries unless you have a simpler report on Boards data</td>
    </tr>
    <tr>
        <td><a href="access-analytics-power-bi.md">Connect using the Power BI's OData Feed connector</href></td>
        <td>Power BI provides an OData Feed connector that allows you to connect to and browse the Analytic's OData endpoint. This is the typical way Power BI interacts with OData feeds. You can browse and select the entities and use its Query Editor to filter the dataset.</td>
        <td><b>Only use this method if you have a small account.</b> This method does not support server-side query folding. All filters are applied client-side. This means all the data is pulled into Power BI before applying the filters. If you have a small account, this may work just fine for you. However, if you have a large account, then you will likely experience long refresh times and timeouts.</td>
    </tr>
</tbody>
</table>


## Sample Reports

### Sample reports using OData Queries

To get started using OData queries in Power BI reports, see [Overview of sample reports using OData queries](sample-odata-overview.md)

For specific examples, see one of the following articles: 

[!INCLUDE [temp](_shared/sample-fulllist.md)].

### Sample reports using Analytics View

- [Active bugs report](active-bugs-sample-report.md)  
- [Get a count of work items](data-connector-examples.md)  
- [Add a last refresh date](add-last-refresh-time.md)   
- [Filter on teams](create-team-filter.md)   
- [Calculate time-in-state for an existing Analytics view](create-timeinstate-report.md)   


## Related articles

- [Extend Analytics with OData](../extend-analytics/quick-ref.md)    
- [Dashboards, charts, reports & widgets](../dashboards/overview.md)  
- [Power BI Desktop](/power-bi/desktop-get-the-desktop) 
- [Power BI documentation](/power-bi)  
