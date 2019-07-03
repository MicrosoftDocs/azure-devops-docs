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
ms.date: 04/05/2019
---

# About Power BI integration

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

[Power BI](https://powerbi.microsoft.com) is a suite of business analytics tools. Use it to do ad hoc analysis, produce beautiful reports, and publish for enterprise consumption.

[!INCLUDE [temp](../_shared/powerbi-preview.md)]

The easiest way to pull Azure DevOps data into Power BI is to use the [Power BI Data Connector](data-connector-connect.md). The Azure DevOps Power BI Data connector works with Analytics views. For more information, read [What are Analytics views](what-are-analytics-views.md).
 
::: moniker range="azure-devops"

![Power BI Azure DevOps Connector (Beta)](_img/pbi-getstarted-123.png)

::: moniker-end

::: moniker range="azure-devops-2019"

![Power BI Azure DevOps Server Connector (Beta)](_img/pbi-getstarted-123-onprem.png)

::: moniker-end

## Support data connection methods
You can pull data from Analyticss into Power BI in one of three ways. 

<table width="90%">
<tbody valign="top">
    <tr>
        <td width="25%"><b>Connection Option</td>
        <td><b>Description</td>
    </tr>
    <tr>
        <td><a href="data-connector-connect.md">Connect using the Azure DevOps Data Connector</href></td>
        <td>The Azure DevOps Data connector is the recommended way to connect Power BI to Analytics. The connector simplifies the data model into a single table and models historical data to simplify trend reporting.
        The Azure DevOps Power BI Data connector works with <a href="what-are-analytics-views.md">Analytics views</href></a>. Last updated February 4th, 2018</td>
    </tr>
    <tr>
        <td><a href="access-analytics-power-bi.md">Connect using the Power BI OData connector</href></td>
        <td>Using the Power BI OData connector is not recommended for anything other than analysis of current work items. Analytics data model has relationships and advanced filters which are necessary for many scenarios and are not supported using the OData connector</td>
    </tr>
    <tr>
        <td><a href="data-connector-functions.md">Connect using Azure DevOps functions</href></td>
        <td>This option is intended for advanced users who need a greater degree of control of what data is included in the model. Using the functions, you can specify OData queries as well as combine data from other sources, such as Azure DevOps REST APIs. You can also support complex model structures not supported by the Azure DevOps Data Connector. 
        Last updated February 4th, 2018</td>
    </tr>
</tbody>
</table>

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


