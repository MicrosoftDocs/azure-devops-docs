---
title: Analytics query tools
titleSuffix: Azure DevOps  
description: Learn about the tools you can use to query the Analytics service.
ms.custom: "analytics" 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Analytics query tools in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
To help you get started, use the guidance provided in this article to determine which tool you should use to query the Analytics service. 


Which tool should I use? can I use? 
What do I want to query? Report on?


| Task | Tool    |               Notes       |  
|------|---------|---------------------------|   
| Query the metadata | [Any supported web browser](/azure/devops/server/compatibility#supported-browsers) | To get started, see [Query the Analytics service](analytics-query-parts.md). |
| Create a status or trend report for work tracking data | Analytics views<br/>Power BI | Use a default view or create a custom view to filter work tracking data. To learn more, see [Create a Power BI report with a default Analytics view](../powerbi/create-quick-report.md). | 
| Create a report from a work item query | [WIQL to OData extension](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata)<br/>Power BI  | Install the extension to get an OData query based on the fitered set of work items. Then use [Create a Power BI report with an OData Query](../powerbi/create-quick-report-odataq.md). |  
|Create reports or dashboards based on Analytics data | Power BI | [Power BI](https://powerbi.microsoft.com/) is a suite of business analytics tools you can use to perform impromptu analysis, produce reports, and publish reports for enterprise consumption. You can specify a Power BI query or OData query within Power BI to filter the data. To learn more, see [Overview of sample reports using OData queries](../powerbi/sample-odata-overview.md). |  
| Write and test OData  | [Visual Studio Code](https://code.visualstudio.com/download)<br/>[OData for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stansw.vscode-odata) | Visual Studio Code is a free code editor available on Windows, Mac, and Linux. The OData extension provides syntax highlighting and other functions that are useful for writing and testing queries. |  

 

## Related articles


- [What is the Analytics service?](../powerbi/what-is-analytics.md)
- [Query the Analytics service in Azure DevOps](analytics-query-parts.md)
- [Analytics OData metadata](../extend-analytics/analytics-metadata.md) 


### Related resources 

- [Ecosystem &middot; OData - the Best Way to REST](https://www.odata.org/ecosystem/)
- 


