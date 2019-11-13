---
title: Use OData queries to generate Power BI reports  
titleSuffix: Azure DevOps
description: How-to guide to use OData queries to create several sample  Power BI reports
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe
ms.manager: mijacobs
ms.author: kaelli
ms.custom: powerbisample
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 08/07/2019
---

# Overview of sample reports using OData queries

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

In this section, we provide samples for the most popular reports:

[!INCLUDE [temp](_shared/sample-fulllist.md)]

All sample report articles provide the following sections and information: 

* **Sample queries** - The Power BI Query and raw OData query used to pull data into Power BI
* **Power BI transforms** - Steps to transform the data into a reportable format
* **Create the report** - Steps to create a simple report from the data
* **Additional queries** - Additional sample queries for similar, but different reports.

## A Power BI query
    
Get started quickly with the following steps which embed the OData query in the Power BI query. The query can be pasted directly into Power BI's Advanced Query editor as follows:

1. Select **Get Data**, and then **Blank Query**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI - Blank Query](_img/BlankQuery.png)

2. From the Power BI Query editor, select **Advanced Editor**.

    > [!div class="mx-imgBorder"] 
    > ![Power BI - Select Advanced Editor](_img/AdvancedEditor.png)

3. The Advanced Editor window opens.

    > [!div class="mx-imgBorder"] 
    > ![Power BI - Advanced Editor](_img/odatapowerbi-advancededitor.png)

4. Replace the contents with one of the sample queries provided in the linked articles listed at the top of this article.  

    > [!div class="mx-imgBorder"] 
    > ![Power BI - Advanced Editor - Pasted Query](_img/odatapowerbi-advancededitor-pasted.png)

5. The sample queries have strings that must be substituted with your values, such as {organization} and {project}.

    * {organization} - Your organization name 
    * {project} - Your team project name. Or omit "/{project}" entirely, for a cross-project query.

    Depending on the sample query, there may be one or more additional strings to substitute, such as:

    * {areapath} - Your Area Path. Format: Project\Level1\Level2
    * {iterationpath} - Your Iteration path. Format: Project\Level1\Level2
    * {startdate} - The date to start your trend report on. Format: YYYY-MM-DDZ. Example: 2019-04-01Z represents 2019-April-01. Do not enclose in quotes.

    > [!div class="mx-imgBorder"] 
    > ![Power BI - Advanced Editor - Replace strings in query](_img/odatapowerbi-advancededitor-replaced.png)

6. To execute the query, select **Done**. 

    If you have never connected to your account, Power BI may require you to authenticate. For details, see [Client authentication options](client-authentication-options.md).


## Raw OData query

The OData Query is provided in case you want to modify and test the OData query separately, before using it in Power BI. This method provides more flexibility, but involves additional steps before using the OData Query in Power BI as described in [Connect using Power BI and OData queries](odataquery-connect.md)

For more information on how to write OData queries against Analytics, check out the [OData Query Quick Reference](../extend-analytics/quick-ref.md) 

## Full list of sample reports

[!INCLUDE [temp](_shared/sample-fulllist.md)]