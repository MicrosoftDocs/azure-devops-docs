---
title: What are Analytics views?
titleSuffix: Azure DevOps
description: Describes how Analytics views work with Azure DevOps and Power BI integration 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= azure-devops-2019'
ms.date: 09/08/2021
---


# What are Analytics views?

[!INCLUDE [temp](../includes/version-azure-devops.md)]

<!--- Supports https://go.microsoft.com/fwlink/?linkid=865481  --> 

An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on Analytics data. **Analytics views** only support Azure Boards data (work items). Analytics views don't support other data types, such as pipelines and tests.  Each view corresponds to a flat-list of work items. Work item hierarchies aren't supported. 

You can use a [default Analytics view](analytics-default-views.md) or [create a custom view](analytics-views-create.md). You create custom views in the web portal for Azure DevOps. Once you've defined a view that supports the data of interest, you can then open the view using [Power BI Data Connector](data-connector-connect.md) to create a report. 

[!INCLUDE [temp](../includes/boards-disabled.md)]

## Default Analytics views

As set of default Analytics views are provided. The default views and are immediately accessible from Power BI. The view you select determines the set of records, fields, and history that are pulled into Power BI.  

::: moniker range="azure-devops"

> [!NOTE]  
> To access **Analytics views**, you must enable the feature as described in [Manage or enable features](../../project/navigation/preview-features.md).  

::: moniker-end

Here we show the default views created for a project based on the Agile process. To learn how to open this view in your web portal, see [Manage Analytics views](analytics-views-manage.md).

> [!div class="mx-imgBorder"] 
> ![Default Analytics views](./media/default-views/default-views.png)

[!INCLUDE [temp](../includes/analytics-image-differences.md)] 

When you use the Power BI Data Connector, these same default views appear in the Navigator dialog. The view you select determines the set of records, fields, and history that are loaded into Power BI.

::: moniker range="azure-devops"

![Power BI Azure DevOps Connector (Beta)](media/pbi-getstarted-123.png)

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

![Power BI Azure DevOps Server Connector (Beta)](media/pbi-getstarted-123-onprem.png)

::: moniker-end


Default Analytics views work well for customers with small datasets. To learn more, see [Default Analytics views](analytics-default-views.md).


## Custom Analytics views

If the default Analytics views do not meet your needs, you can create custom views to fine-tune the records, fields, and history returned to Power BI.

A custom view supports defining the following options:
- Sharing options
- Work item filters 
- Team and area path filters
- Backlog and work item type filters
- Field specific filters 
- Fields to display 
- View history and trend options 

To learn more, see [Create an Analytics view](./analytics-views-create.md).

## How the data is modeled in Power BI

For more information on how the dataset is modeled when using the Power BI Data Connector, see [dataset design for the Power BI Data Connector](data-connector-dataset.md).

<a id="q-a"> </a>

## Try this next

> [!div class="nextstepaction"]
> [Data available from Analytics](data-available-in-analytics.md)

