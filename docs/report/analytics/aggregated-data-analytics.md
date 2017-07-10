---
title: Aggregate data | Team Services  
description: How to aggregate data with the Analytics Service
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 8D81FEFD-F432-4E10-A415-9167B5FE9A57 
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2016
---

#Aggregate data   

**Team Services**  

[!INCLUDE [temp](../_shared/analytics-preview.md)]

Using the OData analytics service, you can aggregate data. 

There are two ways to aggregate data. The simple approach, which doesn't use aggregation extensions, only provides access to counts of data. The more advanced approach performs aggregations available via the aggregation extensions. 

In this topic, the basic root URL is constructed as:

```https://[collection name].analytics.visualstudio.com/DefaultCollection/_odata``` 


All additional URL parts are specified as an additional part of the query string as shown in the examples below.   


##Simple count aggregations

First, let's look at how to do counts without the aggregation extensions.

Basic counting is done by adding the ```$count``` query option to the end of the URL. For example, to find out how many work items are in the system you can
issue the following query:

    /WorkItems/$count

For comparison, using data aggregations you enter this query:

    /WorkItems?$apply=aggregate(Count with sum as Count)

For simple counts, the non-aggregation approach has a simpler syntax.  
 

<blockquote style="font-size: 13px">**Note:  **There is one other difference in these approaches: using ```$count``` returns a scalar value, that is a single number. Using aggregation extensions returns a formatted JSON result.  
</blockquote>   

You can also filter what you want to count. For example, if you want to know how many work items are in the "In Progress" state, specify this query:

    /WorkItems/$count?$filter=State eq 'In Progress'

##Aggregate data using aggregation extensions

Now that you've seen how to do basic aggregations with ```count```, let's look at more complex examples that help solve real-world problems.  

<blockquote style="font-size: 13px">**Note:  **At this time, aggregation extensions are not supported by any of our client tools although they are being looked at. We've come up with a simple workaround which is explained in the Power BI client documentation.  
</blockquote>   

First, using OData, you trigger aggregations using the ```$apply``` token at the end of the URL. The basic format is:

    /[entity name]?$apply=aggregate([column to aggregate] with [aggregation type] as [new column name])

###Additional examples 

The following are some concrete examples of this functionality:

**Return the count of work items:**

    /WorkItems?$apply=aggregate(Count with sum as CountOfWorkItems)

Work items can also be counted by using the following:

    /WorkItems?$apply=aggregate(WorkItemId with countdistinct as CountOfWorkItems)


<blockquote style="font-size: 13px">**Note:  **The column "Count" is provided by the model to make it easier to do counts and work with client tools because the underlying OData implementation does not currently support the ```$count``` virtual property within the aggregation extensions. Once we implement this functionality, we'll update this document.  
</blockquote>   


**Return the count of areas**

    /Areas?$apply=aggregate(AreaId with countdistinct as CountOfAreas)

**Return the sum of all remaining work**

    /WorkItems?$apply=aggregate(RemainingWork with sum as SumOfRemainingWork)

**Return the last work item ID**

    /WorkItems?$apply=aggregate(WorkItemId with max as MaxWorkItemId)

###Group results

Aggregation extensions also support a ```groupby``` clause which is identical to the SQL group by clause. You can use this clause to quickly break down numbers
in more detail.  

For example, the following gives you the count of work items:

    /WorkItems?$apply=aggregate(Count with sum as Count)

Add the ```groupby``` clause to return a count of work items by type:

    /WorkItems?$apply=groupby((WorkItemType), aggregate(Count with sum as Count))

This returns a result similar to the following:

    {
      "@odata.context":"https://[collection].analytics.visualstudio.com/DefaultCollection/_odata/$metadata#WorkItems(WorkItemType,Count)","value":[
        {
          "@odata.id":null,"WorkItemType":"Issue","Count":220
        },{
          "@odata.id":null,"WorkItemType":"Test Plan","Count":469
        },{
          "@odata.id":null,"WorkItemType":"Product Backlog Item","Count":915
        },{
          "@odata.id":null,"WorkItemType":"Scenario","Count":1382
        },{
          "@odata.id":null,"WorkItemType":"Test Suite","Count":6328
        },{
          "@odata.id":null,"WorkItemType":"Feature","Count":9829
        },{
          "@odata.id":null,"WorkItemType":"Test Case","Count":29516
        },{
          "@odata.id":null,"WorkItemType":"User Story","Count":47714
        },{
          "@odata.id":null,"WorkItemType":"Bug","Count":63621
        },{
          "@odata.id":null,"WorkItemType":"Task","Count":106469
        }
      ]
    }

You can also group by multiple properties as in the following:

    /WorkItems?$apply=groupby((WorkItemType, State), aggregate(Count with sum as Count))

You can also group across entities, however OData grouping differs from how you might normally think about it. 

For example, suppose you wanted to know how many areas are in each project. In OData, "count all areas and group them by project" is equivalent to "give me all projects and a count of areas for each project". This results in a query similar to:

    /Areas?$apply=groupby((Project/ProjectName), aggregate(AreaId with countdistinct as CountOfAreas))

###Filter aggregated results

You can also filter aggregated results, however they are applied slightly differently than when you are not using aggregation. The analytics service evaluates filters along a pipe so it's always best to do the most discrete filtering first. 

Filters look like the following:

    /WorkItems?$apply=filter(Iteration/IterationName eq 'Sprint 89')/filter(WorkItemType eq 'User Story')/groupby((State), aggregate(Count with sum as Count))


<blockquote style="font-size: 13px">**Note:  **You don't have to provide the ```groupby``` clause. You can simply use the ```aggregate``` clause to return a single value.  
</blockquote>   

###Multiple aggregations in a single call

When you want to provide multiple pieces of information, such as the sum of completed work and separately the sum of remaining work., you can accomplish this with separate calls or with a single call as follows:  

```/WorkItems?$apply=aggregate(CompletedWork with sum as SumOfCompletedWork, RemainingWork with sum as SumOfRemainingWork)```

This will return a result that looks like the following:

```
{
  "@odata.context":"https://[account].analytics.visualstudio.com/DefaultCollection/_odata/$metadata#WorkItems(SumOfCompletedWork,SumOfRemainingWork)","value":[
    {
      "@odata.id":null,"SumOfCompletedWork":1525841.2900000005,"SumOfRemainingWork":73842.39
    }
  ]
}

```

##The benefits of aggregation, a real world example

Let's say you want to create a cumulative flow diagram in Power BI. To start off with you need to retrieve
the data. In a normal circumstance you would use a query like the following (this query is explained in the
WIT Analytics topic):

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItemBoardSnapshot?$filter=BoardLocation/Team/TeamName eq '[team name]'
and BoardLocation/BoardName eq 'Microsoft.RequirementCategory'&$expand=Date,BoardLocation
```

This query returns every work item for every day for a given team with no aggregations. In a single test on a small project (just 10 days worth of data)
it returned 471 rows. The CFD can be created with this data.

This is what an aggregation query looks like for the exact same data:

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project]/_odata/WorkItemBoardSnapshot?$apply=filter(BoardLocation/Team/TeamName eq '[team name]')/filter(BoardLocation/BoardName eq 'Microsoft.RequirementCategory')/groupby((Date/Date,BoardLocation/ColumnName,BoardLocation/ColumnOrder), aggregate(Count with sum as Count))
```

This query returns 41 rows. That's better than a 10x reduction in data. Let's take a look at what this query actually does.

* Filter the data down to the team we want the data for
* Filter the data to the specific backlog (the default boards are "Microsoft.ScenarioCategory, Microsoft.FeatureCategory and Microsoft.RequirementCategory")
* Group by the Date (in the related Date entity)
* Group by the ColumnName (in the related BoardLocation entity)
* Group by the ColumnId (in the related BoardLocation entity) - note that this is used for ordering the column name correctly and it needs to be returned in the query results
* Get a count of work items

When refreshing a Power BI workbook and/or PowerBI.com or Excel, the fewer rows required, the faster the refresh occurs.


##Related notes 

- [WIT analytics](wit-analytics.md)  
- [OData Extension for Data Aggregation Version 4.0](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)
