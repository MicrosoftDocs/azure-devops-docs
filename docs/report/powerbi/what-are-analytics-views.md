---
title: What are Analytics views?
titleSuffix: Azure DevOps
description: Learn how Analytics views work with Azure DevOps and Power BI integration. 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= azure-devops-2019'
ms.date: 06/28/2022
---


# What are Analytics views?

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

<!--- Supports https://go.microsoft.com/fwlink/?linkid=865481  --> 

An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on Analytics data. **Analytics views** only support Azure Boards data (work items). Analytics views don't support other data types, such as pipelines and tests.  Each view corresponds to a flat-list of work items. Work item hierarchies aren't supported. 

You can use a [default Analytics view](analytics-default-views.md) or [create a custom view](analytics-views-create.md). You create custom views in the web portal for Azure DevOps. Once you've defined a view that supports the data of interest, you can then open the view using [Power BI Data Connector](data-connector-connect.md) to create a report. 

[!INCLUDE [temp](../includes/boards-disabled.md)]

## Default Analytics views

A set of default Analytics views are provided. The default views and are immediately accessible from Power BI. The view you select determines the set of records, fields, and history that is pulled into Power BI.  

::: moniker range="azure-devops"

> [!NOTE]  
> To access **Analytics views**, you must enable the feature as described in [Manage or enable features](../../project/navigation/preview-features.md).  

::: moniker-end

Here we show the default views created for a project based on the Agile process. To learn how to open this view in your web portal, see [Manage Analytics views](analytics-views-manage.md).

> [!div class="mx-imgBorder"] 
> ![Screenshot of default Analytics views](./media/default-views/default-views.png)

[!INCLUDE [temp](../includes/analytics-image-differences.md)] 

When you use the Power BI Data Connector, these same default views appear in the Navigator dialog. The view you select determines the set of records, fields, and history that is loaded into Power BI.

::: moniker range="azure-devops"

![Screenshot of Power BI Azure DevOps Connector.](media/pbi-getstarted-123.png)

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

![Screenshot of Power BI Azure DevOps Server Connector.](media/pbi-getstarted-123-onprem.png)

::: moniker-end


Default Analytics views work well for customers with small datasets. To learn more, see [Default Analytics views](analytics-default-views.md).


## Custom Analytics views

If the default Analytics views don't meet your needs, you can create custom views to fine-tune the records, fields, and history returned to Power BI. With a custom view, you can  define the following options:
- Sharing options
- Work item filters 
- Team and area path filters
- Backlog and work item type filters 
- Field-specific filters 
- Fields to display 
- View history and trend options 

To learn more, see [Create an Analytics view](./analytics-views-create.md).

## How the data is modeled in Power BI

For more information on how the dataset is modeled when using the Power BI Data Connector, see [Analytics views dataset design](data-connector-dataset.md).

<a id="q-a"> </a>

## Next steps

> [!div class="nextstepaction"]
> [Create a Power BI report with a default Analytics view](create-quick-report.md) 


## Related articles 

- [Create a Power BI report with a default Analytics view](create-quick-report.md) 
- [Connect to Analytics with Power BI Data Connector](data-connector-connect.md)
- [What is Power BI Desktop?](/power-bi/fundamentals/desktop-what-is-desktop) 
- [Data available from Analytics](data-available-in-analytics.md)
- [Query work tracking data using Analytics](../extend-analytics/analytics-recipes.md)
- [Work item properties reference](analytics-fields-reference.md) 


## Related resources 

- [Wiql to OData Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata)
