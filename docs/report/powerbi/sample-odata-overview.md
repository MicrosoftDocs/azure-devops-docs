---
title: Use OData queries to generate Power BI reports  
titleSuffix: Azure DevOps
description: Learn how to use OData queries to create several sample Power BI reports.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample
ms.author: chcomley
author: chcomley
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 12/12/2022
---

# Overview of sample reports using OData queries

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

In this article, we provide samples for the most popular reports:

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
* **Create the report** - Steps to create a simple report from the data.

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## A Power BI query
    
Get started quickly with the following steps that embed the OData query in the Power BI query. The query can be pasted directly into Power BI's Advanced Query editor as follows:

1. Select **Get Data**, and then **Blank Query**.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI, Blank Query.](media/BlankQuery.png)

2. From the Power BI Query editor, select **Advanced Editor**.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI, Select Advanced Editor.](media/AdvancedEditor.png)

3. The Advanced Editor window opens.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI, Advanced Editor.](media/odatapowerbi-advancededitor.png)

4. Replace the contents with one of the sample queries provided in the linked articles listed earlier in this article.  

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI, Advanced Editor, Pasted Query.](media/odatapowerbi-advancededitor-pasted.png)

5. The sample queries have strings that must be substituted with your values, such as {organization} and {project}.

    * `{organization}` - Your organization name 
    * `{project}` - Your team project name. Or omit "/{project}" entirely, for a cross-project query.

    Depending on the sample query, there may be one or more other strings to replace, like:

    * `{areapath}` - Your Area path. Format: `Project\Level1\Level2`
    * `{iterationpath}` - Your Iteration path. Format: `Project\Level1\Level2`
    * `{startdate}` - The date to start your trend report on. Format: YYYY-MM-DDZ. Example: `2019-04-01Z` represents 2019-April-01. Don't enclose in quotes.

    > [!div class="mx-imgBorder"] 
    > ![Screenshot of Power BI, Advanced Editor, Replace strings in query.](media/odatapowerbi-advancededitor-replaced.png)

6. To execute the query, select **Done**. 

    If you've never connected to your account, Power BI may require you to authenticate. For details, see [Client authentication options](client-authentication-options.md).

## Raw OData query

Most sample reports provide an OData query in case you want to modify and test the OData query separately before using it in Power BI. This method provides more flexibility, but involves other steps before using the OData Query in Power BI as described in [Connect using Power BI and OData queries](odataquery-connect.md)

For more information on how to write OData queries against Analytics, see [OData Query Quick Reference](../extend-analytics/quick-ref.md) 

## Related articles

- [Data available from Analytics](data-available-in-analytics.md)
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [Analytics views dataset design](data-connector-dataset.md)
- [OData API versioning](../extend-analytics/odata-api-version.md)