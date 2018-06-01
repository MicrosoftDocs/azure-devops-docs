---
title: Aggregate work tracking data using the OData Analytics Service
titleSuffix: VSTS
description: How to guide to aggregate and filter data with the Analytics Service and the OData aggregation extension in Visual Studio Team Services
ms.prod: devops
ms.technology: devops-analytics
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: 'vsts'
ms.date: 3/16/2018
---

# Aggregate work tracking data using the Analytics service   

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

You can get a sum of your VSTS work tracking data in one of two ways using the Analytics service with Odata. The first method returns a simple count of work items based on your  OData query. The second method returns a JSON formatted result based on your OData query which exercises the OData Aggregation Extension.   

In this topic you'll learn: 

>[!div class="checklist"]
> * About the OData Aggregation Extension   
> * How to generate a simple count of work items         
> * How to use the Aggregation Extension for OData   
> * How to group and filter aggregated results 
> * How to aggregate data to generate a Cumulative Flow diagram  

[!INCLUDE [temp](../_shared/analytics-preview.md)]


## What is the Aggregation Extension for OData?

Analytics relies on OData to author queries over your VSTS data. Aggregations in OData are achieved using an extension that introduces the `$apply` keyword. We have some examples of how to use this keyword below. Learn more about the extension at [OData Extension for Data Aggregation](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html).

## Basic root URL
Use the following basic root URL as a prefix for all the examples provided in this topic. Replace `{aacount}` with your VSTS account. 

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0
``` 

Use the above URL as a prefix for all the examples.   


## Simple count aggregations

First, let's look at how to do counts without the aggregation extensions.

Basic counting is done by adding the `$count` query option to the end of the URL. For example, to find out how many work items defined in an account, you add the following to your query:

`/WorkItems/$count`

Where the full OData query is: 

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems/$count
``` 

For comparison, using the OData aggregation extension, you add the following to your query:

`/WorkItems?$apply=aggregate($count as Count)`

Where the full OData query is: 

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=aggregate($count as Count)
``` 

For simple counts, the non-aggregation approach has a simpler syntax.  

> [!NOTE]   
> Using `$count` returns a single number; using the OData aggregation extension returns a formatted JSON.  
  
You can also filter what you want to count. For example, if you want to know how many work items are in the "In Progress" state, specify the following in your query:

`/WorkItems/$count?$filter=State eq 'In Progress'`

Where the full OData query is: 

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems/$count?
  $filter=State eq 'In Progress'
```

For comparison, using data aggregations you add the following snippet to your query:

`/WorkItems?$apply=filter(State eq 'In Progress')/aggregate($count as Count)`

Where the full OData query is: 

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=
   filter(State eq 'In Progress')/
   aggregate($count as Count)
``` 

## Aggregate data using the OData aggregation extension

Now that you've seen how to do simple counts, let's review how to trigger aggregations using the `$apply` token where the basic format at the end of the URL is as follows:

`/{entitySetName}?$apply=aggregate({columnToAggregate} with {aggregationType} as {newColumnName})`

Where: 
- {entitySetName} is the entity that needs to be queried for
- {columnToAggregate} is the aggregation column
- {aggregationType} will specify the type of aggregation used
- {newColumnName} specifies the name of the column having values after aggregation.

## Aggregated data using the apply extension 

Using the `$apply` extension, you can obtain counts, sums, and additional information when you query your VSTS data. 

<!---  Commenting these examples out as they are currently not supported. 

**Return the count of work items:**

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=aggregate($count as Count)
```

**Return a count of area paths**

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/Areas?
  $apply=aggregate($count as Count)
```

 
--> 

**Return the sum of all remaining work**

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=aggregate(RemainingWork with sum as SumOfRemainingWork)
```

**Return the last work item identifier**

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=aggregate(WorkItemId with max as MaxWorkItemId)
```

## Group results using the groupby clause

The OData aggregation extension also supports a `groupby` clause which is identical to the SQL `GROUP BY` clause. You can use this clause to quickly break down numbers
in more detail.  

For example, the following clause will return a  count of work items:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=aggregate($count as Count)
```

Add the `groupby` clause to return a count of work items by type:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=groupby((WorkItemType), aggregate($count as Count))
```

This returns a result similar to the following:

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/_odata/v1.0/$metadata#WorkItems(WorkItemType,Count)","value":[
    {
      "@odata.id":null,"WorkItemType":"Bug","Count":3
    },
    {
      "@odata.id":null,"WorkItemType":"Product Backlog Item","Count":13
    }
  ]
}
```

You can also group by multiple properties as in the following:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=groupby((WorkItemType, State), aggregate($count as Count))
```

This returns a result similar to the following:

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context": "https://{account}.analytics.visualstudio.com/_odata/v1.0/$metadata#WorkItems(WorkItemType,State,Count)",
  "value": [
    {
      "@odata.id": null,
      "State": "Active",
      "WorkItemType": "Bug",
      "Count": 2
    },
	{
      "@odata.id": null,
      "State": "Committed",
      "WorkItemType": "Bug",
      "Count": 1
    },
    {
      "@odata.id": null,
      "State": "Active",
      "WorkItemType": "Product Backlog Item",
      "Count": 5
    },
	{
      "@odata.id": null,
      "State": "Committed",
      "WorkItemType": "Product Backlog Item",
      "Count": 8
    }
  ]
}
```

You can also group across entities, however OData grouping differs from how you might normally think about it. 

<!---
For example, suppose you wanted to know how many areas are in each project. In OData, "count all areas and group them by project" is equivalent to "give me all projects and a count of areas for each project". This results in a query similar to:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/Areas?
  $apply=groupby((Project/ProjectName), aggregate($count as Count))
```

--> 

## Filter aggregated results

You can also filter aggregated results, however they are applied slightly differently than when you are not using aggregation. The analytics service evaluates filters along a pipe so it's always best to do the most discrete filtering first. 

Filters look like the following:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $apply=
    filter(Iteration/IterationName eq 'Sprint 89')/
    filter(WorkItemType eq 'User Story')/
    groupby((State), aggregate($count as Count))
```

> [!NOTE]    
> You don't have to provide the `groupby` clause. You can simply use the `aggregate` clause to return a single value.  


## Generate multiple aggregations within a single call

When you want to provide multiple pieces of information, such as the sum of completed work and separately the sum of remaining work, you can accomplish this with separate calls or with a single call as follows:  

`/WorkItems?$apply=aggregate(CompletedWork with sum as SumOfCompletedWork, RemainingWork with sum as SumOfRemainingWork)`

This will return a result that looks like the following:

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/_odata/v1.0/$metadata#WorkItems(SumOfCompletedWork,SumOfRemainingWork)","value":[
    {
      "@odata.id":null,"SumOfCompletedWork":1525841.2900000005,"SumOfRemainingWork":73842.39
    }
  ]
}
```

## Generate calculated properties for use within a single call

When you need to use a mathematical expression to calculate properties for use in a result set, such as the sum of completed work which is divided by the sum of completed work plus the sum of remaining work to calculate the percentage of work completed, you can accomplish this as follows:

`/WorkItems?$apply=aggregate(CompletedWork with sum as SumOfCompletedWork, RemainingWork with sum as SumOfRemainingWork)/compute(SumOfCompletedWork div (SumOfCompletedWork add SumOfRemainingWork) as DonePercentage)`

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context":"https://{account}.analytics.visualstudio.com/_odata/v1.0/$metadata#WorkItems(SumOfCompletedWork,SumOfRemainingWork)","value":[
    {
      "@odata.id":null,"DonePercentage":0.96760221857946638,"SumOfRemainingWork":50715.95,"SumOfCompletedWork":1514698.3400000033
    }
  ]
}
```

## Generate a Cumulative Flow Diagram from aggregate data

Let's say you want to create a [cumulative flow diagram](../guidance/cumulative-flow-cycle-lead-time-guidance.md) in Power BI. You can use a query similar to the one below:

> [!div class="tabbedCodeSnippets"]
```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/WorkItemBoardSnapshot?$apply=filter(DateValue gt 2015-07-16Z and DateValue le 2015-08-16Z)/filter(BoardLocation/BoardName eq 'Stories' and BoardLocation/Team/TeamName eq '{teamName}')/groupby((DateValue, BoardLocation/ColumnName), aggregate(Count with sum as Count))&$orderby=DateValue
```

This returns a result similar to the following, which you can then use directly within your data visualization of choice.

> [!div class="tabbedCodeSnippets"]
```JSON
{
  "@odata.context": "https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0/$metadata#WorkItemBoardSnapshot(DateValue,BoardLocation(ColumnName),Count)",
  "value": [
    {
      "@odata.id": null,
      "DateValue": "2015-07-16T00:00:00-07:00",
      "Count": 324,
      "BoardLocation": {
        "@odata.id": null,
        "ColumnName": "Completed"
      }
    },
    {
      "@odata.id": null,
      "DateValue": "2015-07-16T00:00:00-07:00",
      "Count": 5,
      "BoardLocation": {
        "@odata.id": null,
        "ColumnName": "In Progress"
      }
    }
  ]
}
```

Let's take a look at what this query actually does:

* Filters the data to a specific team
* Filters the data to a specific backlog
* Groups the result by Date (in the related Date entity) 
* Groups the result by the ColumnName (in the related BoardLocation entity) 
* Groups the result by the ColumnOrder (in the related BoardLocation entity) 
* Returns a count of work items.

When refreshing Power BI or Excel, the fewer rows required, the faster the refresh occurs.

## Try this next
> [!div class="nextstepaction"]
> [Query trend data](querying-for-trend-data.md)


## Related articles 

- [Query your work tracking data using the OData Analytics service](wit-analytics.md)  
- [OData Extension for Data Aggregation Version 4.0](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)
