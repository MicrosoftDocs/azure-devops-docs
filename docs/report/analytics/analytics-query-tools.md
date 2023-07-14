---
title: Analytics query tools
titleSuffix: Azure DevOps  
description: Learn about the tools you can use to query the Analytics service.
ms.custom: "analytics" 
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Analytics query tools in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
You can query Analytics from a web browser or other supported tools. To create reports, we recommend you use [Power BI](https://powerbi.microsoft.com/). Power BI is free and provides a suite of business analytics tools that you can use to perform impromptu analysis, produce reports, and publish reports for enterprise consumption.

To help you get started, use the guidance provided in the following table to determine which tool you should use based on the task you want to accomplish. 

| Task | Tool    |               Notes       |  
|------|---------|---------------------------|   
| Query the metadata | [Any supported web browser](/azure/devops/server/compatibility#supported-browsers) | Review the Analytics data model consisting of EntityTypes, properties, enumerated member names, supported functions, and more. To get started, see [Query the Analytics service](analytics-query-parts.md). |
| Create a status or trend report for work tracking data | [Analytics views](../powerbi/what-are-analytics-views.md)<br/>Power BI | Use a default view or create a custom view to filter work tracking data. To learn more, see [Create a Power BI report with a default Analytics view](../powerbi/create-quick-report.md). | 
| Create a report from a work item query | [WIQL to OData extension](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata)<br/>Power BI  | Install the extension to get an OData query based on the filtered set of work items. Then use [Create a Power BI report with an OData Query](../powerbi/create-quick-report-odataq.md). |  
|Create reports or dashboards based on Analytics data | Power BI | You can specify a Power BI query or OData query within Power BI to filter the data. To learn more, see [Overview of sample reports using OData queries](../powerbi/sample-odata-overview.md). |  
| Write and test OData  | [Visual Studio Code](https://code.visualstudio.com/download)<br/>[OData for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata) | Visual Studio Code is a free code editor available on Windows, Mac, and Linux. The OData extension provides syntax highlighting and other functions that are useful for writing and testing queries. |  

## Related articles


- [What is the Analytics service?](../powerbi/what-is-analytics.md)
- [Construct OData queries for Analytics](analytics-query-parts.md)
- [Analytics OData metadata](../extend-analytics/analytics-metadata.md) 


### Related resources 

- [Ecosystem &middot; OData - the Best Way to REST](https://www.odata.org/ecosystem/)



