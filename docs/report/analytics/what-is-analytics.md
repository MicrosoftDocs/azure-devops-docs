---
title: What is the Analytics Service
titleSuffix: VSTS
description: Understand how you can use the Analytics Service to answer quantitative questions about your projects in Visual Studio Team Services
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: greggboe
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: 'vsts'
ms.date: 04/04/2018
---

# What is the Analytics Service?

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

The Analytics Service provides the reporting platform for Visual Studio Team Services (VSTS). Use it to answer quantitative questions about the past or present state of your projects. This service provides a concise data model over the VSTS suite. Built for reporting, the Analytics Service is optimized for fast read-access and server-based aggregations.

To gain access to the Analytics Service for your VSTS account, install the [VSTS Analytics extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). Once installed, the Analytics Service populates itself with all available VSTS data. Once populated, it updates itself as data changes occur. For more information, read [Data available in Analytics Service](./data-available-in-analytics.md) and [Performance and latency](performance-latency.md).

> [!NOTE]
> **The Analytics Service is in public preview**. While in preview, it is available to everyone free of charge. Analytics is also available in all regions. We encourage you to use it and provide us feedback. As we add features, we will post them on the [Microsoft DevOps Blog](https://blogs.msdn.microsoft.com/devops/tag/reporting/).

You can access the Analytics Service through dashboard widgets, OData, and Power BI.

## Dashboard widgets

In VSTS, you can create [dashboards](../dashboards/dashboards.md) and [add widgets to them](../dashboards/add-widget-to-dashboard.md). We provide several [widgets based on the Analytics Service](analytics-widgets-vsts.md). These widgets take advantage of the power of the Analytics Service. 

For example, the Velocity widget shown in the following dashboard image provides insights into a team's historical performance over six iterations. 

![Analytics Service - Velocity Widget](_img/what-is-analytics/dashboard-showing-velocity.png)

Here, the Velocity widget shows that this team has a history of closing stories late. It also shows a discrepancy between planned and completed work across all the sprints displayed. The team can drill into the data to determine the root causes. After implementing new practices, the team can use the Velocity widget to track their effectiveness.

Widgets provide the easiest way to get insights from your data. Check out [Enable and use the Analytics Services](enable-analytics-velocity.md) for a step-by-step guide to get started with the Velocity Widget.

If you want to develop your own widget based on the Analytics Service, see [Create an Analytics widget for VSTS](../extend-analytics/example-analytics-widget.md).

## OData
The Analytics Service is fully accessible via OData. If you would like to prepare custom queries and tooling with our OData API, see [Extend on Analytics](../extend-analytics/index.md).

## Power BI
[Power BI](https://powerbi.microsoft.com) is a suite of business analytics tools. Use it to do ad-hoc analysis, produce beautiful reports, and publish for enterprise consumption.

The easiest way to pull VSTS data into Power BI is to use the [Power BI Data Connector](../powerbi/data-connector-connect.md). The VSTS Power BI Data connector works with Analytics views. For more information, read [What are Analytics views](./what-are-analytics-views.md).
 
![Power BI VSTS Connector (Beta)](../powerbi/_img/data-connector-get-data.png)

Also, you'll find additional ways to pull VSTS data into Power BI as described in [Power BI integration overview](../powerbi/overview.md).


## Data available in the Analytics Service

**The Analytics Service is in public preview.** At this point, not all data is available via the Analytics Service.

For more information read [Data available in Analytics](./data-available-in-analytics.md).

## Availability for Team Foundation Server (TFS)

**The Analytics Service is not yet available for our on-premises product, Team Foundation Server (TFS).** 

We are working on a plan to bring Analytics to the next major release of TFS (after TFS 2018).

When we have information on when it will be available, we will update this page. Look for announcements on the [Microsoft DevOps Blog](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics).

For TFS reporting, you may use [Dashboards](../dashboards/dashboards.md) with a [variety of widgets](../dashboards/widget-catalog.md) that don't require the Analytics Service. You may also use [SQL Server Reporting](../sql-reports/index.md). 

The future of reporting for both VSTS and TFS, however, is the Analytics Service. 

## Try this next
> [!div class="nextstepaction"]
> [Analytics widgets](analytics-widgets-vsts.md) or [What are Analytics views?](what-are-analytics-views.md) 
