---
title: Analytics basic queries
titleSuffix: Azure DevOps Services  
description: Examples of how to create queries of work item tracking from the Analytics service for Azure DevOps
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: 1320852A-5C62-4954-9E9D-508D670777A4
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: sample
monikerRange: '>= azdevserver-2019'
ms.date: 11/1/2018
---

# Query work tracking data using Analytics  

[!INCLUDE [temp](../../_shared/version-azure-devops.md)] 

You can query your Azure DevOps work tracking data using the basic queries provided in this topic. These queries address everyday needs while demonstrating various capabilities of the
Analytics service. You can adapt most of these queries to meet your needs.

For prerequisites and other information for getting started, see [Query your work tracking data using the OData Analytics service](wit-analytics.md). All examples are scoped to a project on Azure DevOps Services. For examples of organization-level scoping or Azure DevOps Server, see [Project and organization-scoped queries](account-scoped-queries.md).

[!INCLUDE [temp](../_shared/analytics-preview.md)]

**Retrieve the history of a work item**

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItemRevisions?
  $filter=WorkItemId eq {Id}
  &$select=WorkItemId, Title, State
```

**Retrieve all work items in a given iteration**

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
  $filter=Iteration/IterationPath eq '{iteration path}'
  &$select=WorkItemId, Title, State
```

**Retrieve all work items in a given area**

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
  $filter=Area/AreaPath eq '{area path}'
  &$select=WorkItemId, Title, State
```

**Get the count of work items in each project**
```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
  $apply=groupby((Project/ProjectName), aggregate($count as Count))
```

This query will fail when the user does not have access to all the projects. Read more about [project and organization-scoped queries](account-scoped-queries.md).

**Retrieve all work items for a given iteration which fall between the first day of the iteration and the last day of the iteration**

Here your query is constrained by data contained within the work tracking data. 

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
  $filter=Iteration/IterationPath eq '{iteration path}' 
    and ChangedDate ge Iteration/StartDate 
    and ChangedDate le Iteration/EndDate
  &$select=WorkItemId, Title, State
```

**Retrieve all work items with a specific tag**

Note that the **any** operator is used here because there are a collection of tags that can be associated with a work item.
From a usage perspective, the format is: **{Navigation Property}/any(d:d/{Field Name} {operator} {expression})**. Any item not surrounded by curly brackets ({}) is a literal. There are some variations on this (for example, you don't have to use "d" as used in the expression above)
but following this format keeps it simple.

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
  $filter=Tags/any(d:d/TagName eq '{tag name}')
  &$select=WorkItemId, Title, State
```

**Retrieve all work items for a specific team**

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
  $filter=Teams/any(d:d/TeamName eq '{team name}')
  &$select=WorkItemId, Title, State
```

**Retrieve all work items that at one time had a field set to a specific value (Similar to Work Item query "was ever")**

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
  $filter=WorkItemType eq '{Type}'
     and Revisions/any(r:r/ResolvedBy/UserName eq '{User}')
```

##Related articles 

- [WIT analytics](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md)
