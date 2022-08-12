---
title: Analytics best practices
titleSuffix: Azure DevOps  
description: Learn about the best practices to use when querying the Analytics service.
ms.custom: "analytics" 
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: overview
monikerRange: '>= azure-devops-2019'
ms.date: 08/12/2022
---

# Best practices to use when querying the Analytics service  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 



## Get familiar with the Analytics metadata 

Query the Analytics metadata to gain familiarity with the entity types, entity sets, properties, and enumerated lists. To learn how, see [Query the Analytics service](analytics-query-parts.md). 

In addition, you can review select information from these resources: 
- [Analytics OData metadata](../extend-analytics/analytics-metadata.md)
- [Analytics work item fields reference](../powerbi/analytics-fields-reference.md)


## Choose the EntityType that supports the report your want to create

While there are several EntityTypes supported in the Analytics data model, only a few are used to generate reports. Here is a quick reference for the EntityTypes to specify to support status or trend reports. 

<!--- Distinguish current, snapshot, and revision entity types --> 


|Azure DevOps data | Status reports | Trend reports | History
|------------------|----------------|---------------------------|----------------|   
|Azure Boards | `WorkItems`  | `WorkItemSnapshot`, `WorkItemBoardSnapshot` | 
|Azure Pipelines |    | `PipelineRuns`, `PipelineRunActivityResults` |
|Azure Pipelines and Tests | `TestResultsDaily` |          | 
|Azure Test Plans | `TestPoints` | `TestPointHistorySnapshot`      | 

## Return just the data you need, Create preview queries

Structure your queries to return just the information you need 
 
 limit the set of properties in your queries to what you really care about in your reporting scenario. 
Create preview queries to gain an understanding of how much data will be returned 
Start with a minimal query and then build from there
Identify the number of records you're requesting

## Limit queries to projects you have access to 


## Specify query parts in the order they're executed 

The recommended order for the various query parts is to specify them in the follow order, which is the order in which they are evaluated. 
 
1. `$apply`
1. `$filter`
1. `$orderby`
1. `$expand`
1. `$select`
1. `$skip`
1. `$top`


## Limit the columns you request in your query 

Specify columns in the $select clause. The recommended number of columns to

VS403509: The specified query exceeds the recommended size of {0} columns.  
We restrict queries that result in more than 800 columns. If you aren't selective enough in which columns your query returns you may receive the following error message.

VS403670: The specified query returns 'N' columns which is higher than the allowed limit of 800 columns. Please, use explicit $select (including within the $expand) options to limit number of columns.

Add a $select clause to your query, and to $expand operations in your query, to avoid exceeding this limit.

<!--- General info 

Analytics is built on top of a Columnstore Index technology. That means that data is both storage and query processing is column-based. So, the more properties that a query references, the more expensive it's to process. 

-->

## Review warning and error messages  

Analytics reviews each query it receives for violations to its rules. It returns warning messages when it detects a violation. Review these messages to correct or improve the query structure. 

 

If you don't include a `$select` or `$apply` clause, you may receive a warning, such as `"VS403507: The specified query does not include a $select or $apply clause which is recommended for all queries. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."` It's equivalent to performing a select statement on the entity set and returning everything, all columns and all rows. If you have a large number of records, it may take several seconds. If you've more than 10000 work items, [server-side paging is enforced](#server-force-paging).  
> To avoid running into usage limits, always include a `$select` or `$apply` clause.

VS403504: Could not find OData version in the request URL.

VS403505: The specified query is commonly throttling users access and will no longer be supported by Analytics in an upcoming update.  

VS403507: The specified query does not include a $select or $apply clause which is recommended for all queries. 

VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended.  



VS403510: The Snapshot tables in Analytics are intended to be used only in an aggregation.  The result for this query has been reduced to preview of a single result page. 

VS403511: The specified query is not supported by Analytics. 

VS403512: Queries which apply a count distinct with an aggregation are not supported by Analytics. 

VS403513: The request includes a $expand for Parent, Children or Descendants which is too deep. The maximum depth allowed is 1.

VS403514: The Analytics feature is not enabled. Details on enabling this feature are available here: https://go.microsoft.com/fwlink/?linkid=2093060.

VS403515: The Analytics feature is currently paused. Details on enabling this feature are available here: https://go.microsoft.com/fwlink/?linkid=2093060.

VS403525: You are not a member of the specified organization or are not authenticated. Personally identifiable information is only shown to authenticated organization members.

VS403527: Access to data from the Analytics OData endpoint is not available for all users. Either you have not been authenticated, or you do not have a paid license or subscription for this account.

VS403669: The $expand on Descendants is {0} columns which is higher than the allowed limit of {1} columns. Please, use nested $select within the $expand to limit number of columns.


"VS403507: The specified query does not include a $select or $apply clause which is recommended for all queries. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."
"VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."

"VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."
"VS403509: The specified query exceeds the recommended size of 10 columns. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060."
## Filter using surrogate key properties 

"VS403508: Using the Parent, Children, Descendants or Revision properties in a filter or expand is not recommended. Details on recommended query patterns are available here: https://go.microsoft.com/fwlink/?linkid=861060." 

## Understand how to formulate date queries

While there are several ways to define a date filter, the preferred method for best performance is to use a surrogate key representation. For example, the following query returns all the work items created since the beginning of 2022 regardless of the organization's settings.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=CreatedDateSK ge 20220101
>   &$select=WorkItemId, Title, State
> ```

## Related articles

- [What is the Analytics service?](../powerbi/what-is-analytics.md)
- [Query the Analytics service in Azure DevOps](analytics-query-parts.md)
- [Analytics OData metadata](../extend-analytics/analytics-metadata.md) 
- [Query guidelines for Analytics with OData](../extend-analytics/odata-query-guidelines.md)



