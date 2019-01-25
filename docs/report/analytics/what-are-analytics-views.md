---
title: What are Analytics views?
titleSuffix: Azure DevOps
description: Describes how Analytics views work with Azure DevOps and Power BI integration 
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= azdevserver-2019'
ms.date: 04/04/2018
---


# What are Analytics views?

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics Service data store. The Analytics Service provides the reporting platform for Azure DevOps.

Each view defines a dataset designed to support viewing, sharing, and publishing work tracking data for Azure DevOps through Power BI. You can use default Analytics views or create custom views and open the view using the [Power BI Data Connector](../powerbi/data-connector-connect.md). You create custom views in the web portal for Azure DevOps. 

You can use the [default Analytics views](analytics-default-views.md) we provide or [create your own custom views](analytics-views-create.md).

[!INCLUDE [temp](../_shared/boards-disabled.md)]

## Default Analytics views

As set of default Analytics views are provided. The default views and are immediately accessible from Power BI. The view you select determines the set of records, fields, and history that are pulled into Power BI.  

Here we show the default views created for a project based on the Agile process. 

> [!div class="mx-imgBorder"] 
> ![Default Analytics views](./_img/default-views/default-views.png)

[!INCLUDE [temp](../_shared/analytics-image-differences.md)] 

When using the Power BI Data Connector, these same default views appear in the Navigator dialog. The view you select determines the set of records, fields, and history which are loaded into Power BI.

::: moniker range="azdevops"

![Power BI Azure DevOps Connector (Beta)](../powerbi/_img/pbi-getstarted-123.png)

::: moniker-end

::: moniker range="azdevserver-2019"

![Power BI Azure DevOps Server Connector (Beta)](../powerbi/_img/pbi-getstarted-123-onprem.png)

::: moniker-end


Default Analytics views work well for customers with small datasets. To learn more, see [Default Analytics views](analytics-default-views.md).

If the default Analytics views do not meet your needs, you can [create custom views](analytics-views-create.md) to fine-tune the records, fields, and history returned to Power BI.


## Custom Analytics views

Customers that need to fine-tune the records, fields, and history of data they view in Power BI can create custom Analytics views. A custom view supports defining the following options:
- Sharing options
- Work item filters 
- Team and area path filters
- Backlog and work item type filters
- Field specific filters 
- Fields to display 
- View history and trend options 

To learn more, see [Create an Analytics view](./analytics-views-create.md).

## How the data is modeled in Power BI

The dataset built for Analytics views in Power BI is modeled to make it easy to get started with Power BI reports.

For more information on how the dataset is modeled when using the Power BI Data Connector, see [dataset design for the Power BI Data Connector](../powerbi/data-connector-dataset.md).

<a id="q-a">  </a>
## Try this next
> [!div class="nextstepaction"]
> [Data available from the Analytics Service](data-available-in-analytics.md)

 
