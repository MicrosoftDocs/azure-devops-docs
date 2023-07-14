---
title: Example of an Analytics Widget
titleSuffix: Azure DevOps 
description: Learn how to build your own Analytics widget to display in a dashboard in Azure DevOps.
ms.subservice: azure-devops-analytics
ms.assetid: 37253E50-28D5-4AA9-B0E1-9D09D951739F
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '>= azure-devops-2019'
ms.date: 09/30/2020
---

# Create an Analytics widget for Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 


You can build your own Analytics widget to display in a [dashboard](../dashboards/overview.md) in Azure DevOps. The [example widget on github](https://github.com/Microsoft/vsts-extension-samples/tree/master/analytics-example-widget) demonstrates: 

> [!div class="checklist"]
> * How to render trend lines associated with work item states
> * How to query a dataset, whe a user will configure through the widget configuration view
> * How to build and publish the widget to the Azure DevOps marketplace

With this information, you'll be able to create your own Analytics widget.

![View of Configuration with Preview of Widget](./media/extend-analytics-widget.png)  

[!INCLUDE [temp](../includes/analytics-preview.md)]

## Prerequisites

This example provides a ready-made widget, covering basics from topics in Dashboards, Charting, and Analytics. The following documents provide more grounding on details demonstrated in this example:
1. Create an Azure DevOps Widget Extension, reference the [Widget extensions sample](../../extend/develop/add-dashboard-widget.md)
1. Render an Azure DevOps Chart Control, reference [Add a Chart](../../extend/develop/add-chart.md)
1. Query OData from [Analytics](quick-ref.md)


## Provide a configuration view

1. [Run simple analytics queries](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/data/CommonQueries.ts) required by UI controls used for configuring a view.
1. [Manage state of configuration UI](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/config/AnalyticsConfigActionCreator.ts), with updates based on user actions, and with new data from Analytics queries.
2. [Render configuration UI](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/config/AnalyticsConfigComponent.tsx) using Typescript and React.

## Render data within a Widget

1. Run a user configured query as a [POST Request](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/data/ViewQueries.ts)
1. Interpret data from analytics to [render a chart](https://github.com/Microsoft/vsts-extension-samples/blob/master/analytics-example-widget/scripts/widget/ChartOptionFactory.ts)

## Next steps

To avoid excess complexity in the sample, we omitted certain technologies and practices, which a production widget should certainly include. The [ui-fabric-react](https://github.com/Microsoft/vsts-extension-samples/tree/master/ui-fabric-react) sample on github highlights a build process that exercises these details.
1. [JavaScript bundling and content minification](/aspnet/mvc/overview/performance/bundling-and-minification) - The set of small, loose script files in the sample can load much more quickly when combined into a single file, and minified.
1. [Fabric UI Controls](https://developer.microsoft.com/fabric) - Fabric UI controls provide a rich set of configuration UI components for React.


## Related articles

- [What is Analytics?](../powerbi/what-is-analytics.md?toc=/azure/devops/report/toc.json&bc=/azure/devops/report/breadcrumb/toc.json)
- [Widgets based on Analytics](../dashboards/analytics-widgets.md)
