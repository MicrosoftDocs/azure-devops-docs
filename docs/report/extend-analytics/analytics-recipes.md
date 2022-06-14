---
title: Analytics basic queries
titleSuffix: Azure DevOps  
description: Learn how to create queries of work item tracking from Analytics for Azure DevOps.
ms.technology: devops-analytics
ms.assetid: 1320852A-5C62-4954-9E9D-508D670777A4
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 09/30/2020
---

# Query work tracking data using Analytics  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

You can query your Azure DevOps work tracking data using the basic queries provided in this article. These queries address everyday needs while demonstrating various capabilities of 
Analytics. You can adapt most of these queries to meet your needs.

[!INCLUDE [temp](../includes/analytics-preview.md)]

For prerequisites and other information for getting started, see [Query your work tracking data using OData Analytics](wit-analytics.md). All examples are scoped to a project on Azure DevOps Services. For examples of organization-level scoping or Azure DevOps Server, see [Project and organization-scoped queries](account-scoped-queries.md). 

::: moniker range="azure-devops"
> [!TIP] 
> You can use the [WIQL to OData Azure DevOps Extension](https://marketplace.visualstudio.com/items?itemName=ms-eswm.wiql-to-odata) Marketplace extension to quickly generate an OData query based on a work item query from the **Queries** page. This extension supports conversion of **Flat list of work items** and **Work items and direct links**. Extensions are not supported features of Azure Boards and therefore not supported by the product team. For questions, suggestions, or issues you have when using these extensions, visit their corresponding extension page.

::: moniker-end


## Retrieve select work items changed within the last 180 days   

The following query returns Product Backlog Items, Bugs, and Features that have a **Changed Date** greater than December 12, 2021.

https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v1.0/WorkItems?
  $select=WorkItemId, WorkItemType, Title, State 
  &$expand=AssignedTo($select=UserEmail)
  &$filter=(Project/ProjectName eq 'Fabrikam Fiber'
    AND (WorkItemType eq 'Product Backlog Item' or WorkItemType eq 'Bug' or WorkItemType eq 'Feature')
    AND ChangedOn/Date ge 2021-12-16T23:44:15.619Z)
  &$orderby=WorkItemType desc 
```



<a id="history" />

## Retrieve work item history

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItemRevisions?
  $filter=WorkItemId eq {Id}
  &$select=WorkItemId, Title, State
```
[!INCLUDE [temp](../includes/api-versioning.md)]

<a id="iteration" />

## Retrieve all work items for a given Iteration Path.

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Iteration/IterationPath eq '{iteration path}'
  &$select=WorkItemId, Title, State
```

<a id="area" />

## Retrieve all work items under a given Area Path 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Area/AreaPath eq '{area path}'
  &$select=WorkItemId, Title, State
```

<a id="project-count" />

## Get the count of work items in each project 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $apply=groupby((Project/ProjectName), aggregate($count as Count))
```

This query will fail when the user doesn't have access to all the projects. Read more about [project and organization-scoped queries](account-scoped-queries.md).

## Retrieve all work items for a given iteration

You can retrieve all work items for a given iteration that fall between the first day of the iteration and the last day of the iteration. Here, your query is constrained by data contained within the work tracking data.

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Iteration/IterationPath eq '{iteration path}' 
    and ChangedDate ge Iteration/StartDate 
    and ChangedDate le Iteration/EndDate
  &$select=WorkItemId, Title, State
```

<a id="tag" />

## Retrieve all work items with a specific tag 

The **any** operator is used here because there are a collection of tags that can be associated with a work item.
From a usage perspective, the format is: **{Navigation Property}/any(d:d/{Field Name} {operator} {expression})**. Any item not surrounded by curly brackets ({}) is a literal. There are some variations. For example, you don't have to use "d" as used in the expression above.
Following this format keeps it simple.

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Tags/any(d:d/TagName eq '{tag name}')
  &$select=WorkItemId, Title, State
```

<a id="team" />

## Retrieve all work items for a specific team 

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=Teams/any(d:d/TeamName eq '{team name}')
  &$select=WorkItemId, Title, State
```

<a id="was-ever" />

## Retrieve all work items that at one time had a field set to a specific value

This query is similar to a Work Item query that uses the **Was Ever** operator.  

> [!div class="tabbedCodeSnippets"]
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?
  $filter=WorkItemType eq '{Type}'
     and Revisions/any(r:r/ResolvedBy/UserName eq '{User}')
```

## Related articles 

- [WIT analytics](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md)
