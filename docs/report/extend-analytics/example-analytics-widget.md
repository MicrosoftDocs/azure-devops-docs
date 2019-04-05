---
title: Example of an Analytics Widget
titleSuffix: Azure DevOps 
description: Describes the data entities and relationships provided by the Analytics service for Azure DevOps   
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: 37253E50-28D5-4AA9-B0E1-9D09D951739F
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: sample
monikerRange: '>= azure-devops-2019'
ms.date: 04/05/2019
---

# Create an Analytics widget for Azure DevOps

[!INCLUDE [temp](../_shared/version-azure-devops.md)] 


You can build your own Analytics widget to display in a [Dashboard](../dashboards/index.md) in Azure DevOps. The [example widget on github](https://github.com/Microsoft/vsts-extension-samples/tree/master/analytics-example-widget) demonstrates the following: 

> [!div class="checklist"]
> * How to render trend lines associated with work item states
> * How to query a dataset, whe a user will configure through the widget configuration view
> * How to build and publish the widget to the Azure DevOps marketplace
With this information, you'll be able to create your own Analytics widget.

![View of Configuration with Preview of Widget](./_img/extend-analytics-widget.png)  

[!INCLUDE [temp](../_shared/analytics-preview.md)]

## Prerequisites

This example provides a ready-made widget, covering basics from topics in Dashboards, Charting and Analytics. The following documents provide more grounding on details demonstrated in this example:
0. Create an Azure DevOps Widget Extension, reference the [Widget extensions sample](../../extend/develop/add-dashboard-widget.md)
0. Render an Azure DevOps Chart Control, reference [Add a Chart](../../extend/develop/add-chart.md)
0. Query OData from [Analytics](./index.md)



## Provide a configuration view

0. [Run simple analytics queries](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/data/CommonQueries.ts) required by UI controls used for configuring a view.
0. [Manage state of configuration UI](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/config/AnalyticsConfigActionCreator.ts), with updates based on user actions, and with new data from Analytics queries.
0. [Render configuration UI](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/config/AnalyticsConfigComponent.tsx) using Typescript and React.

## Render data within a Widget

0. Run a user configured query as a [POST Request](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/data/ViewQueries.ts)
0. Interpret data from analytics to [render a chart](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/widget/ChartOptionFactory.ts)

## Next steps

To avoid excess complexity in the sample, we omitted certain technologies and practices, which a production widget should certainly include. The [ui-fabric-react](https://github.com/Microsoft/vsts-extension-samples/tree/master/ui-fabric-react) sample on github highlights a build process which exercises these details.
0. [Javascript bundling and content minification](/aspnet/mvc/overview/performance/bundling-and-minification) - The set of small, loose script files in the sample can load much more quickly when consolidate into a single file, and minified.
0. [Fabric UI Controls](https://developer.microsoft.com/fabric) - Fabric UI controls provide a rich set of configuration UI components for React.


## Related articles

- [What is the Analytics service?](../powerbi/what-is-analytics.md?toc=/azure/devops/report/extend-analytics/toc.json&bc=/azure/devops/report/extend-analytics/breadcrumb/toc.json)
- [Widgets based on the Analytics Service](../dashboards/analytics-widgets.md)
