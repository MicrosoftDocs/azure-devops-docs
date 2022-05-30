---
title: Power BI integration and supported connections methods
titleSuffix: Azure DevOps
description: Learn about the different integration options you can use to connect to Power BI to access Analytics for Azure DevOps.
ms.assetid: 8026A5ED-CD58-417A-913F-72A20272E7DC
ms.technology: devops-analytics
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '>=azure-devops-2019'
ms.date: 10/05/2021
---

# About Power BI integration

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

With Azure DevOps, you can create [dashboards](../dashboards/dashboards.md) and [add widgets to them](../dashboards/add-widget-to-dashboard.md). Azure DevOps also provides several reports in the product itself. Both dashboards and in-line reports offer easy access to Azure DevOps Analytics to enable data-driven decisions. However, we concede that customers often need more than what is provided in the product. 

With Power BI, you can pull data from [Analytics](what-is-analytics.md), generate reports, and customize them to meet your needs. [Power BI](https://powerbi.microsoft.com) is a suite of business analytics tools. Use it to do impromptu analysis, produce beautiful reports, and publish for enterprise consumption.

[!INCLUDE [temp](../includes/analytics-preview.md)]


## Prerequisites

Before you get started using Power BI to work with Analytics, make sure you've completed the following steps:

::: moniker range="azure-devops"

1. Install the *Power BI Desktop* *October 2018 Update* or a newer version. You can download it from the official [Power BI Desktop download page](/power-bi/desktop-what-is-desktop).  
1. Configure the [permissions required to access Analytics](analytics-security.md).  
1. Review the [knowledge base of Power BI articles](/power-bi).  
1. If you aren't familiar with Analytics, read "[What is Analytics](what-is-analytics.md)" before continuing.

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"


1. Install the *Power BI Desktop* *October 2018 Update* or a newer version. You can download it from the official [Power BI Desktop download page](/power-bi/desktop-what-is-desktop).  
1. [Verify that Analytics](../dashboards/analytics-extension.md) is installed, and if not, then enable it. You must be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to add extensions or enable the service.   
1. Configure the [permissions required to access Analytics](analytics-security.md).  
1. Review the [knowledge base of Power BI articles](/power-bi).  
1. If you aren't familiar with Analytics, read "[What is Analytics](what-is-analytics.md)" before continuing.

::: moniker-end



## Supported data connection methods

You can pull data from Analytics into Power BI in one of three ways. It's important to understand each method, before choosing. 

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



## Sample Reports

### Sample reports using Analytics View

- [Active bugs report](active-bugs-sample-report.md)  
- [Get a count of work items](data-connector-examples.md)  
- [Add a last refresh date](add-last-refresh-time.md)   
- [Filter on teams](create-team-filter.md)   
- [Calculate time-in-state for an existing Analytics view](create-timeinstate-report.md)   

### Sample reports using OData Queries

To get started using OData queries in Power BI reports, see [Overview of sample reports using OData queries](sample-odata-overview.md)

For specific examples, see one of the following articles: 

| Azure Boards reports | Azure Test Plans reports |
|----------------------|--------------------------| 
| [!INCLUDE [temp](includes/sample-fulllist.md)] | [!INCLUDE [temp](includes/sample-full-list-test-plans.md)] | 



## Related articles

- [Extend Analytics with OData](../extend-analytics/quick-ref.md)    
- [Dashboards, charts, reports & widgets](../dashboards/overview.md)  
- [Power BI Desktop](/power-bi/fundamentals/desktop-get-the-desktop) 
- [Power BI documentation](/power-bi)
- [OData documentation](/odata/)