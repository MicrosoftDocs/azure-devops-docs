---
title: Power BI integration overview 
titleSuffix: VSTS 
description: Describes the different integration options you can use to connect to Power BI to access the Analytics Service for Visual Studio Team Services
ms.assetid: 8026A5ED-CD58-417A-913F-72A20272E7DC
ms.prod: devops
ms.technology: devops-analytics
ms.manager: douge
ms.author: stansw
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: 'vsts'
ms.date: 03/28/2018
---

# Power BI integration overview

**VSTS**

Our Power BI integration makes getting the data into Power BI easy, so you can focus on creating amazing Power BI reports!

VSTS supports three ways to pull data from VSTS into Power BI:

<table width="90%">
<tbody valign="top">
    <tr>
        <td width="25%"><b>Connection Option</td>
        <td><b>Description</td>
    </tr>
    <tr>
        <td><a href="data-connector-connect.md">Connect using the VSTS Data Connector</href></td>
        <td>The VSTS Data connector is the recommended way to connect Power BI to VSTS. The connector simplifies the VSTS data model into a single table and models historical data to simplify trend reporting.
        The VSTS Power BI Data connector works with <a href="../analytics/what-are-analytics-views.md">Analytics Views</href></a>. Last updated February 4th, 2018</td>
    </tr>
    <tr>
        <td><a href="access-analytics-power-bi.md">Connect to VSTS using the Power BI OData connector</href></td>
        <td>Using the Power BI OData connector is not recommended for anything other than analysis of current work items. The VSTS data model has relationships and advanced filters which are necessary for many scenarios and are not supported using the OData connector</td>
    </tr>
    <tr>
        <td><a href="data-connector-functions.md">Connect using VSTS functions</href></td>
        <td>Intended for advanced users who need a greater degree of control of what data is included in the model. Using the functions, you can specify OData queries as well as combine data from other sources, such as VSTS REST APIs. You can also support complex model structures not supported by the VSTS Data Connector. 
        Last updated February 4th, 2018</td>
    </tr>
</tbody>
</table>

## Prerequisites

Before you get started using Power BI with VSTS, make sure you have completed the following steps:

1. Install the *Power BI Desktop* *February 2018 Update* or a newer version. You can download it from the official [Power BI Desktop download page](https://powerbi.microsoft.com/desktop).

2. Install the [VSTS Analytics extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics).

3. Configure the [permissions required to access the Analytics service](../analytics/analytics-security.md).

4. Review the [knowledge base of Power BI articles](https://powerbi.microsoft.com/en-us/documentation/powerbi-landing-page/).

5. If you are not familiar with the VSTS Analytics Service, we recommend you read "[What is the Analytics Service](../analytics/what-is-analytics.md)" before continuing.

## Deprecated PowerBI.com Content Pack

In November, 2017 we deprecated the PowerBI.com Visual Studio Team Services (VSTS) Content Pack. We deprecated it due to the negative impact it has had on VSTS accounts, including throttling end users access. Support will continue for all existing PowerBI.com datasets based on the Content Pack; however, you won€™t be able to create any new datasets.

