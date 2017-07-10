---
title: Analytics recipes | Team Services  
description: Provides general queries for use with the Analytics service for Visual Studio Team Services 
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 1320852A-5C62-4954-9E9D-508D670777A4
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2016
---

#Analytics service recipes  

**Team Services**  

[!INCLUDE [temp](../_shared/analytics-preview.md)]

This topic provides a set of general queries that demonstrate various querying capabilities of the
analytics service and which also provides common queries which solve everyday needs. Most of these can be 
adapted for different needs. 

**Retrieve the history of a work item**

```
https://[account].analytics.visualstudio.com/DefaultCollection/_odata/WorkItemRevisions?$filter=WorkItemId eq [Id]
```

**Retrieve all work items in a given iteration**

```
https://[account].analytics.visualstudio.com/DefaultCollection/_odata/WorkItems?$filter=Iteration/IterationPath eq '[iteration path]'
```

**Retrieve all work items in a given area**

```
https://[account].analytics.visualstudio.com/DefaultCollection/_odata/WorkItems?$filter=Area/AreaPath eq '[area path]'
```

**Get the count of work items in each project**

```
https://[account].analytics.visualstudio.com/DefaultCollection/_odata/WorkItems?$apply=groupby((Project/ProjectName), aggregate(Count with sum as Count))
```

**Retrieve all work items for a given iteration which fall between the first day of the iteration and the last day of the iteration**

This type of query is a little different in that you are constraining your query by data 
contained with the data. 

```
https://[account].analytics.visualstudio.com/DefaultCollection/_odata/WorkItems?$filter=Iteration/IterationPath eq '[iteration path]' and Date/Date ge Iteration/StartDate and Date/Date le Iteration/EndDate
```

**Retrieve the data for a cumulative flow diagram**

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItemBoardSnapshot?$filter=BoardLocation/Team/TeamName eq '[team name]'
and BoardLocation/BoardName eq '[board reference name]'&$expand=Date,BoardLocation
```

**Retrieve all work items with a specific tag**

Note that the **any** operator is used here because there are a collection of tags that can be associated with a work item.
From a usage perspective, the format is: **[Navigation Property]/any(d:d/[Field Name] [operator] [expression])**. Any item not surrounded by
brackets ([]) is a literal. There are some variations on this (for example, you don't have to use "d" as used in the expression above)
but following this format keeps it simple.

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$filter=Tags/any(d:d/TagName eq '[tag name]')
```

**Retrieve all work items for a specific team**

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItems?$filter=Teams/any(d:d/TeamName eq '[team name]')&$select=WorkItemId,Title,State
```
##Related notes 

- [WIT analytics](wit-analytics.md)  
- [Aggregate data](aggregated-data-analytics.md)
- [Overview of the analytics service](overview-analytics-service.md)
