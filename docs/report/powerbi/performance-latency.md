---
title: Performance and latency with the Analytics Service
titleSuffix: Azure DevOps   
description: Understand how data is updated and time requirements associated with querying the Analytics Service 
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: angurusw
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 11/13/2017
---


# Performance and latency of the Analytics Service

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

 When you use the Analytics Service for reporting, you should understand data latency and query performance. To get started using the Analytics Service, see what is the [Analytics Service](./what-is-analytics.md).

[!INCLUDE [temp](../_shared/analytics-preview.md)]

::: moniker range="azure-devops-2019"
## Install the Analytics Service 
When you install the [Analytics Marketplace Extension](../dashboards/analytics-extension.md), you should expect the initial setup to take between 5 to 30 minutes. If after 24 hours you aren't able to access your data, contact [Microsoft Support](/azure/devops/user-guide/provide-feedback?toc=/azure/devops/user-guide/toc.json&bc=/azure/devops/user-guide/breadcrumb/toc.json).

::: moniker-end

## Data latency
When you use Analytics, you query a curated copy of the data stored in Azure DevOps. The data copy helps optimize read and aggregation performance, and greatly reduces the impact reporting scenarios have on Azure DevOps.

Because the data is copied, the Analytics Service is **not a real-time time store**.  Copying the data introduces a 5 to 30 second delay before the data associated with any one change shows up in Analytics. 

## Query performance
Using the [recommended query patterns](../extend-analytics/odata-query-guidelines.md), the Analytics Service will respond to any [aggregation](../extend-analytics/aggregated-data-analytics.md) or [non-aggregated query](../extend-analytics/analytics-recipes.md) query within 3 to 5 seconds. The query response will be paged if it exceeds 10,000 results. 

Some of the entity sets available in Analytics are designed for aggregations.  The service will limit the results from these Entities to a single page for any non-aggregated query as outlined in the [recommended query patterns](../extend-analytics/odata-query-guidelines.md).


