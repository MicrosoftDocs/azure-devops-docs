---
title: What is the Analytics Service
titleSuffix: VSTS
description: Understand the Analytics Service reporting solution for Visual Studio Team Services (VSTS) 
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 
ms.reviewer: greggboe
ms.manager: douge
ms.author: kaelli
ms.date: 11/13/2017
---

# What is the Analytics Service?

**VSTS**  

You can use the Analytics Service, the reporting platform for Visual Studio Team Services (VSTS), to answer quantitative questions about the past or present state of your projects. This service provides a concise data model over the VSTS suite. Built for reporting, the Analytics Service is optimized for fast read-access and server-based aggregations.

To gain access to the Analytics Service for your VSTS account, you install the [VSTS Analytics extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). Once installed, the Analytics Service populates itself with all available VSTS data. Once populated, it updates itself as data changes occur. For more information, read read [Performance and latency](performance-latency.md)

> [!NOTE]
> **The Analytics Service is in public preview**. While in preview, it is available to everyone free of charge. We encourage you to use it and provide us feedback. As we add features, we will post them on the [Microsoft DevOps Blog](https://blogs.msdn.microsoft.com/devops/?s=VSTS+Analytics+Extension).

You can access the Analytics Service through dashboard widgets, OData, and Power BI.

## Dashboard widgets

In VSTS, you can create [dashboards](../dashboards/dashboards.md) and [add widgets to them](../dashboards/add-widget-to-dashboard.md). We provide several [widgets based on the Analytics Service](analytics-widgets-vsts.md). These widgets take advantage of the power of the Analytics Service. 

For example, the Velocity widget shown in the following dashboard image provides insights into a team's historical performance over six iterations. 

![Analytics Service - Velocity Widget](_img/what-is-analytics/dashboard-showing-velocity.png)

Here, the Velocity widget shows this team has a history of closing stories late. It  also shows a discrepancy between planned and completed work over all past sprints. The team can drill into the data to determine the root causes. After implementing new practices, the team can use the Velocity widget to track their effectiveness.

Widgets provide the easiest way to get insights from your data. Check out [Enable and use the Analytics Services](enable-analytics-velocity.md) for a step-by-step guide to get started with the Velocity Widget.

If you want to develop your own widget based on the Analytics Service, see [Create an Analytics widget for VSTS](../extend-analytics/example-analytics-widget.md).

## OData
The Analytics Service is fully accessible via OData. If you would like to prepare custom queries and tooling with our OData API, see [Extend on Analytics](../extend-analytics/index.md)

## Power BI
[Power BI](https://powerbi.microsoft.com) is a suite of business analytics tools. Use it to do ad-hoc analysis, produce beautiful reports, and publish for enterprise consumption. We have created a Power BI Desktop connector which simplifies pulling data from the Analytics Service.

From Power BI Desktop, select the connector "Visual Studio Team Services (Beta)". 

![Power BI VSTS Connector (Beta)](../powerbi/_img/data-connector-get-data.png)

**The VSTS connector is in beta.**

For more information on the version of the connector, check out [Connect to VSTS with Power BI Data Connector](../powerbi/data-connector-connect.md)

## Data available in the Analytics Service

**The Analytics Service is in public preview.** At this point, only Work Item Tracking data is modeled in the Analytics Service.

We are working hard to add more types of data, including:
* Code (Pull Requests, Commits, etc...)
* Automated Test Results
* Manual Test Results (Test Manager)
* Build
* Release
* Packaging

As more data types come online, we will update this page. Look for annoucements on the [Microsoft DevOps Blog](https://blogs.msdn.microsoft.com/devops).

## Availability for Team Foundation Server (TFS)
**The Analytics Service is not yet available for our on-premises product, Team Foundation Server (TFS).** When we have information on when it will be available, we will update this page. Look for announcements on the [Microsoft DevOps Blog](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics).

For TFS reporting, you may use [Dashboards](../dashboards/dashboards.md) with a [variety of widgets](../dashboards/widget-catalog.md) that don't require the Analytics Service. You may also use [SQL Server Reporting](../sql-reports/index.md). 

The future of reporting for both VSTS and TFS, however, is the Analytics Service. 

## Try this next
> [!div class="nextstepaction"]
> [Analytics widgets](analytics-widgets-vsts.md) 