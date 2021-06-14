---
title: Connect using Power Query & Azure DevOps functions
titleSuffix: Azure DevOps 
description: Describes the available functions that the Power BI Data Connector and Analytics support for Azure DevOps 
ms.assetid: EC735BA2-24C9-4BA3-B35E-2CE9D2F1D7F1
ms.technology: devops-analytics
ms.topic: conceptual
ms.reviewer: stansw
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 06/11/2021
---

# Connect using Power Query and Azure DevOps functions 

[!INCLUDE [temp](../includes/version-azure-devops.md)]

The Data Connector for Azure DevOps includes Power Query M functions which query authors can use. These functions can handle Azure DevOps specific requirements, such as authentication for you. This article describes the arguments for the functions and how to use them to connect to Analytics. 

The VSTS.AccountContents function is a replacement for Power Query M function [Web.Contents](/powerquery-m/web-contents). Intended for more advanced scenarios, VSTS.AccountContents returns the contents downloaded from the URL for Analytics as a binary value. You can use it to call [AzureDevOps REST APIs](/rest/api/azure/devops).

> [!IMPORTANT]  
> - Use VSTS.AccountContents only to access data that isn't [available in Analytics](data-available-in-analytics.md). It pulls data directly from Azure DevOps and, to protect other Azure DevOps users, it's susceptible to throttling. See the [Supported Subdomains for VSTS.AccountContents section](#) later in this article. For information about other approaches, see the [Power BI integration overview](overview.md). 
> - VSTS.AccountContents supports only Azure Boards data (work items). The data connector doesn't support other data types, such as pipelines. Currently, we have no plans to update the connector to support other data types.


## VSTS.AccountContents

Advanced function which returns the contents downloaded from the URL for Analytics as a binary value.

The `VSTS.AccountContents` function has the same arguments, options and return value format as `Web.Contents`. For more information, see [Power Query (M) Formula Reference - Web.Contents](/powerquery-m/web-contents).

If you are already using `Web.Contents` to access work tracking data from Analytics (REST API or OData), you can replace it with `VSTS.AccountContents` to leverage Data Connector authentication.
This informs Power BI that these requests are referencing the same data source and you'll be able to combine the data without violating the single data source constraints in Power BI Service. However, `VSTS.AccountContent` only supports data from Azure Boards and can't be used to support queries for Pipelines or other services.  

'VSTS.AccountContents' provides a subset of the arguments and options available through 'OData.Contents'. The specific limitations are outlined in the table below:

### Arguments for VSTS.Contents

> [!div class="mx-tdCol2BreakAll"]  
> | Argument|Description|
> |--------|-----------|
> |`url`  |URL to one of the Azure Devops service endpoints. | 
> |`options` |An options record to control the behavior of this function.| 

### Options fields for VSTS.Contents

> [!div class="mx-tdCol2BreakAll"]  
> | Field |Description|
> |--------|-----------|
> |`IsRetry`|Specify this logical value as true will ignore any existing response in the cache when fetching data.|
> |`ManualStatusHandling`|Specify this value as a list will prevent any builtin handling for HTTP requests whose response has one of these status codes.|
> |`MaxSize`|Controls the max size of the table the client is interested in. If request exceeds this limit then server can fail the request immediately. Default value is zero, which tells the servers server to use its default value.|
> |`Query`|Programmatically add query parameters to the URL.|
> |`RelativePath`|Specify this value as text appends it to the base URL before making the request.|
> |`Timeout`|Specify this value as a duration will change the timeout for an HTTP request. The default value is 600 seconds.|
> |`Version`|Version of the data model. This option is primary for diagnostics.|

<a id="supported-subdomains" /> 

## Supported Subdomains for VSTS.AccountContents 

Currently, the `VSTS.AccountContents()` method only works for the subdomains listed below. Other services, such as the Release service, are not yet supported: 

- `http://dev.azure.com/`
- `http://analytics.dev.azure.com/`


## Related articles

* [Power Query M language specification](/powerquery-m/power-query-m-language-specification)
* [Power Query M formula language - Accessing data functions](/powerquery-m/accessing-data-functions)
