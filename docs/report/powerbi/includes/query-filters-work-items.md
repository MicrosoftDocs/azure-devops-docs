---
ms.subservice: azure-devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 12/05/2022
---

## Query filters

To determine available query filters or properties to return, query the metadata as described in [Construct OData queries for Analytics, URL components to query the metadata](../../analytics/analytics-query-parts.md#query-metadata). You can filter your queries or return properties using any of the `Property` values under an `EntityType` or `NavigationPropertyBinding Path` values listed under the `EntitySet` you specify for your query. Each `EntitySet` corresponds to an `EntityType`. For example, the `EntitySet Name="WorkItemSnapshot"` corresponds to the `EntityType Name="WorkItemSnapshot"`.

To learn more about the data type of each value, review the metadata provided for the corresponding `EntityType`.  


