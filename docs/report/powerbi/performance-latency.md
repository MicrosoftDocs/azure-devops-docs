---
title: Performance and latency with Analytics
titleSuffix: Azure DevOps   
description: Learn about how data is updated and time requirements associated with querying Analytics. 
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 10/05/2021
---


# Performance and latency of Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

 When you use Analytics for reporting, you should understand data latency and query performance. To get started using Analytics, see what is the [Analytics](./what-is-analytics.md).

[!INCLUDE [temp](../includes/analytics-preview.md)]

::: moniker range="azure-devops-2019"

## Install or enable Analytics 

When you [enable or install Analytics](../dashboards/analytics-extension.md) for a project collection, expect the initial setup to take between 5 and 30 minutes. After 24 hours, if you aren't able to access your data, contact [Microsoft Support](../../user-guide/provide-feedback.md?bc=%252fazure%252fdevops%252fuser-guide%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fuser-guide%252ftoc.json).

::: moniker-end

## Data latency

When you use Analytics, you query a curated copy of the data stored in Azure DevOps. The data copy helps optimize read and aggregation performance, and greatly reduces the effect reporting scenarios have on Azure DevOps.

Because the data is copied, Analytics is **not a real-time time store**.  Copying the data introduces up to a 30-second delay before the data associated with any one change shows up in Analytics. 

## Query performance

Using the [recommended query patterns](../extend-analytics/odata-query-guidelines.md), Analytics will respond to any [aggregation](../extend-analytics/aggregated-data-analytics.md) or [non-aggregated query](../extend-analytics/analytics-recipes.md) query within 3 to 5 seconds. The query response will be paged if it exceeds 10,000 results. 

Some of the entity sets available in Analytics are designed for aggregations.  The service will limit the results from these Entities to a single page for any non-aggregated query as outlined in the [recommended query patterns](../extend-analytics/odata-query-guidelines.md).