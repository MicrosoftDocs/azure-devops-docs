---
title: Power BI integration overview | VSTS
description: Overview of the different integration options to connect to Power BI and VSTS.
ms.assetid: 8026A5ED-CD58-417A-913F-72A20272E7DC
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.manager: douge
ms.author: stansw
ms.topic: get-started-article
ms.date: 10/31/2017
---

# Power BI integration overview

**VSTS**

Our Power BI integration makes getting the data into Power BI easy, so you can focus on creating amazing Power BI reports!

Before you get started using Power BI with VSTS make sure you have completed the following steps:

1. Install the *Power BI Desktop* *January 2018 Update* or a newer version. You can download it from the official [Power BI Desktop download page](https://powerbi.microsoft.com/desktop).

2. Install the [VSTS Analytics extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics)

3. Configure the [permissions required to access the Analytics service](../analytics/analytics-security.md)

4. Review the [knowledge base of Power BI articles](https://powerbi.microsoft.com/en-us/documentation/powerbi-landing-page/)

5. If you are not familiar with the VSTS Analytics Service, we recommend you read "[What is the Analytics Service](../analytics/what-is-analytics.md)" before continuing

VSTS supports three ways to pull data from VSTS into Power BI:

<table width="90%">
<tbody valign="top">
    <tr>
        <td width="25%"><b>Connection Option</td>
        <td><b>Description</td>
    </tr>
    <tr>
        <td><a href="data-connector-connect.md">Connect using the VSTS Data Connector</href></td>
        <td>The VSTS Data Connector is the recommended way to connect Power BI to VSTS. The connector simplifies the VSTS data model into a single table and models historical data to simplify trend reporting. Last updated January 8th, 2018</td>
    </tr>
    <tr>
        <td><a href="access-analytics-power-bi.md">Connect to VSTS using the Power BI OData feed</href></td>
        <td>Using the default Power BI OData feed for VSTS is not recommended for anything other than analysis of current work items. The VSTS data model has relationships and advanced filters that are not possible using the default OData feed which are necessary for more complex scenarios</td>
    </tr>
    <tr>
        <td><a href="data-connector-functions.md">Connect using VSTS functions</href></td>
        <td>Intended for advanced users who need a greater degree of control of what data is included in the model.  Using the functions, you can specify OData queries as well as combine data from other sources, such as VSTS REST APIs. You can also support complex model structures not supported by the VSTS Data Connector. Last updated January 8th, 2018</td>
    </tr>
</tbody>
</table>


## Deprecated PowerBI.com Content Pack
In November, 2017 we deprecated the PowerBI.com Visual Studio Team Services (VSTS) Content Pack. We deprecated it due to the negative impact it has had on VSTS accounts, including throttling end users access. Support will continue for all existing PowerBI.com data sets based on the Content Pack. However, you won’t be able to create any new data sets. 

