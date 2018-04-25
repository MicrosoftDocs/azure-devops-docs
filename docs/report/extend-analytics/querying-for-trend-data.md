---
title: Query trend data
titleSuffix: VSTS 
description: How to query the Analytics service trend data and consume it in a client tool when working from Visual Studio Team Services   
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: FEF88D72-32D7-4DE8-B11E-BCB1A491C3FC
ms.manager: douge
ms.author: kaelli
ms.topic: tutorial
ms.date: 11/13/2017
---

# Query trend data

[!INCLUDE [temp](../../_shared/version-vsts-only.md)] 

Examining trends in data and making period-over-period comparisons are important aspects of reporting and data analysis. The Analytics service supports these capabilities.

Trend data is exposed in the WorkItemSnapshot and WorkItemBoardSnapshot entity sets. They are constructed such that every work item, from the day it was created until today, exists for each day. This means that for an account with only one work item that was created a year ago, there are 365 rows in this entity. For very large projects, these entities would be impractical to use with client tools.

What is the solution? Use the [Aggregation Extensions](aggregated-data-analytics.md). 

In this topic you'll learn: 

> [!div class="checklist"]     
> * How to construct a basic query for trend data       


[!INCLUDE [temp](../_shared/analytics-preview.md)]


Using the OData Aggregation Extensions, you can return aggregated data from VSTS that is conducive to reporting. For example you could show bug trend for the month of March. Bug trends are a common and critical part of managing any project so you can put this to good use immediately.


## Construct a basic query for trend data   
 
There are some basic requirements you need to effectively query the WorkItemSnapshot table:  
* The data needs to be filtered by date.
* The aggregation should group by, at the very least, date. If not, response will have warning.

With this in mind, the query to create a bug trend report looks like the following: 


> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItemSnapshot?
  $apply=
    filter(DateValue ge 2016-03-01Z and DateValue le 2016-03-31Z and WorkItemType eq 'Bug')/
    groupby((DateValue,State), aggregate($count as Count))
  &$orderby=DateValue
```

This returns a result similar to the following:


> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context": "https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItemSnapshot(DateValue,State,Count)",
  "value": [
    {
      "@odata.id": null,
      "State": "Active",
      "DateValue": "2016-03-01T00:00:00-08:00",
      "Count": 2666
    },
    {
      "@odata.id": null,
      "State": "Closed",
      "DateValue": "2016-03-01T00:00:00-08:00",
      "Count": 51408
    }
  ]
}
```

This query will produce at most ```31 * (number of bug states)```. The default bug has three states 
(Active, Resolved and Closed) which means at most this query will return 93 rows no matter 
how many thousands of records actually exist. This provides a much more compact form of returning data.

Let's look at a variation on this example. You want to see the bug trend for an iteration or a release which starts with one iteration and ends with another.  

To construct that query, do the following:  

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItemSnapshot?
  $apply=
    filter(WorkItemType eq 'Bug')/
    filter(Iteration/IterationName eq 'Sprint 99')/
    filter(DateValue ge Iteration/StartDate and (Iteration/EndDate eq null or DateValue le Iteration/EndDate))/
    groupby((DateValue, State), aggregate($count as Count))
  &$orderby=DateValue
```

This returns a result similar to the following:

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context": "https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItemSnapshot(DateValue,State,Count)",
  "value": [
    {
      "@odata.id": null,
      "State": "Active",
      "DateValue": "2016-04-04T00:00:00-07:00",
      "Count": 320
    },
    {
      "@odata.id": null,
      "State": "Closed",
      "DateValue": "2016-04-04T00:00:00-07:00",
      "Count": 38
    }
  ]
}
```

In this query, there are two key differences. We added a filter clause to filter the data to a specific iteration and the dates are now being compared to the iteration start and end dates versus a hard coded date.  
 
 [!Note]
 If aggregation is not used in your query on snapshot tables, you will see the warning "The specified query does not include a $select or $apply clause which is recommended for all queries." in the response. 

## Related articles
- [Construct aggregate data queries](aggregated-data-analytics.md) to count and analyse groups of related data.