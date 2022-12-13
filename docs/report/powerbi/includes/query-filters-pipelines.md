---
ms.subservice: azure-devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 12/05/2022
---

## Query filters


To determine available query filters, query the metadata as described in [Construct OData queries for Analytics, URL components to query the metadata](../../analytics/analytics-query-parts.md#query-metadata). You can filter your queries using any of the `Property` under an `EntityType` or `NavigationPropertyBinding Path` values listed under an `EntitySet`. Each `EntitySet` corresponds to an `EntityType`. For example, the `EntitySet Name="PipelineRunActivityResults"` corresponds to the `EntityType Name="PipelineRunActivityResult"`.

To learn more about the data type of each value, review the metadata provided for the corresponding `EntityType`.  

