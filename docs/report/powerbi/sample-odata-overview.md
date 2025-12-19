---
title: Use OData Queries to Generate Power BI Reports  
titleSuffix: Azure DevOps
description: See where to find sample OData queries you can use to generate popular Power BI reports for Azure DevOps services. Find out how to get started with the queries.
ms.subservice: azure-devops-analytics
ms.custom: powerbisample
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: "<=azure-devops"
ms.date: 04/29/2025
# customer intent: As a team member, I want to become familiar with the sample queries that are available so that I can generate popular Power BI reports for services in Azure DevOps.
---

# Overview of sample reports using OData queries

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

You can use Open Data Protocol (OData) queries to generate Power BI reports. For various services in Azure DevOps, sample queries are available for generating numerous popular reports. This article provides an overview of the sample reports and shows you how to get started with them.

## Sample reports

The following articles provide queries and steps for generating the sample reports.

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
      [!INCLUDE [Azure Boards sample reports](includes/sample-fulllist.md)]
   :::column-end:::
   :::column span="1":::
      [!INCLUDE [Azure Test Plans sample reports](includes/sample-full-list-test-plans.md)]
   :::column-end:::
:::row-end:::
---

[!INCLUDE [Azure Pipelines sample reports](includes/sample-full-list-pipelines.md)]

All sample report articles provide the following sections and information: 

- **Sample queries** - The Power BI query and raw OData query used to pull data into Power BI along with other sample queries
- A section about transforming data in Power BI - Steps to transform the data into a reportable format by expanding columns or changing column data types
- **Create the report** - Steps to create a basic report from the data

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Run a Power BI query
    
To get started embedding an OData query in a Power BI query, take the following steps. You can paste queries directly into the Advanced Editor in Power BI.

1. In Power BI, select **Get data**, and then select **Blank query**.

   :::image type="content" source="media/blank-query.png" alt-text="Screenshot of a blank report in Power BI Desktop. On the ribbon, Get data is expanded. Get data and Blank query are highlighted.":::

1. In the Power BI Power Query Editor, select **Advanced Editor**.

   :::image type="content" source="media/advanced-editor.png" alt-text="Screenshot of the Power BI Power Query Editor. On the ribbon, in the Query group, Advanced Editor is highlighted.":::

   The Advanced Editor window opens.

   :::image type="content" source="media/odata-power-bi-advanced-editor.png" alt-text="Screenshot of the Advanced Editor window in Power BI. A sparsely populated field is available for editing a query.":::

1. Replace the contents with a sample query. For sample queries, see the linked articles listed earlier in this article.

   :::image type="content" source="media/odata-power-bi-advanced-editor-pasted.png" alt-text="Screenshot of the Advanced Editor window in Power BI. The query field contains a query for bugs. The query syntax includes placeholders." lightbox="media/odata-power-bi-advanced-editor-pasted.png":::

1. Replace any placeholder strings in the query with your values:

   - `{organization}` - Your organization name.
   - `{project}` - Your team project name. For a query that spans multiple projects, omit `/{project}` entirely.

   Some sample queries contain other placeholders that you also need to replace, such as the following strings:

   - `{areapath}` - Your area path, in the following format: `Project\Level1\Level2`.
   - `{iterationpath}` - Your iteration path, in the following format: `Project\Level1\Level2`.
   - `{startdate}` - The date to start your trend report on, in the following format: `YYYY-MM-DDZ`. For example, `2025-04-01Z` represents April 1, 2025. Don't enclose the date in quotation marks.

   :::image type="content" source="media/odata-power-bi-advanced-editor-replaced.png" alt-text="Screenshot of the Advanced Editor window. The organization, project, area path, and start date use actual values and are highlighted." lightbox="media/odata-power-bi-advanced-editor-replaced.png":::

1. To run the query, select **Done**. 

   When you connect to your account for the first time, Power BI requires you to authenticate. For detailed information, see [Enter client credentials in Power BI or Excel](client-authentication-options.md).

## Run a raw OData query

Besides a Power BI query, most sample reports also provide an OData query. You can modify and test the OData query separately before you use it in Power BI. This method provides more flexibility, but it involves extra steps. For more information, see [Connect with data by using Power BI and OData queries](odataquery-connect.md).

For more information on how to write OData queries against Analytics data, see [Sample reports and quick reference index](../extend-analytics/quick-ref.md).

## Related content

- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [Analytics views dataset design](data-connector-dataset.md)
- [OData API versioning](../extend-analytics/odata-api-version.md)
