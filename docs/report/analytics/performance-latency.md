---
title: Performance and latency with the Analytics Service
titleSuffix: VSTS   
description: Understand how data is updated and time requirements associated with querying the Analytics Service 
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 
ms.reviewer: jozimm
ms.manager: douge
ms.author: kaelli
ms.date: 11/13/2017
---

# Performance and latency of the Analytics Service for VSTS

**VSTS**

When you use the Analytics Service for reporting, you’ll want to understand the performance and data latency issues associated with the service. To get started using the Analytics Service, see what is the [Analytics Service](./what-is-analytics.md).

[!INCLUDE [temp](../_shared/analytics-preview.md)]

## Installing Analytics for the first time
When you install the [Analytics Marketplace Extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics), you should expect the initial setup to take between 5 to 30 minutes. If after 24 hours you aren't able to access your data, contact [Microsoft Support](https://docs.microsoft.com/en-us/vsts/user-guide/provide-feedback?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json).

## Query Performance
Using the [recommended query patterns](../extend-analytics/odata-query-guidelines.md), the Analytics Service will respond to any [aggregation](../extend-analytics/aggregated-data-analytics.md) or [non-aggregated query](../extend-analytics/analytics-recipes.md) query within 3 to 5 seconds. The query response will be paged if it exceeds 10,000 results. 

Some of the entity sets available in Analytics are designed for aggregations.  The service will limit the results from these Entities to a single page for any non-aggregated query as outlined in the [recommended query patterns](../extend-analytics/odata-query-guidelines.md).

## Latency
When you use Analytics, you query a curated copy of the data stored in Visual Studio Team Services (VSTS). The data copy helps optimize read and aggregation performance, and greatly reduces the impact reporting scenarios have on VSTS.

Because the data is copied, the Analytics Service is **not a real-time time store**.  Copying the data introduces a 5 to 30 second delay before the data associated with any one change shows up in Analytics. 


