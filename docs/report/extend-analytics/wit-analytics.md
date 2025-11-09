---
title: Sample OData queries 
titleSuffix: Azure DevOps
description: Learn how to construct basic queries for Azure DevOps using OData Analytics.
ms.subservice: azure-devops-analytics
ms.custom: engagement-fy23
ms.assetid: 0ABC2F7B-AFA5-465F-8DFE-4779D90452CD  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: "<=azure-devops"
ms.date: 11/07/2025
---

# Define basic queries using OData Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can use Analytics for Azure DevOps to construct basic and filtered OData queries to return data you're interested in. You can run these queries in your browser or in Power BI.

This article focuses on queries for retrieving work tracking entity sets, but the principles apply to querying other entity sets. For more information, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md) and [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md).

This article shows you how to:

> [!div class="checklist"]  
> - Define a query that returns the count of items, with or without their data.
> - Find properties and return data for **Identity**, **Area Path**, and **Iteration Path** fields.
> - Query date ranges.
> - Filter data, and filter by a navigation property.
> - Use and nest `expand` statements.
> - Use the `orderby` option to sort results.
 

[!INCLUDE [temp](../includes/analytics-preview.md)]

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

> [!NOTE] 
> Cross-project queries fail when the user running the query doesn't have access to all projects. For more information about requirements, see [Project and organization-scoped queries](account-scoped-queries.md).

> [!NOTE]  
> The OData queries in this article use the query URL defined for Azure DevOps Services, `https://analytics.dev.azure.com/`. Substitute your own organization and project names in the provided queries to get familiar with querying OData.
> 
> For an on-premises server, you can construct similar queries with a URL based on your server name, `https://<servername/`, project collection, and projects. For more information, see [Construct OData queries for Analytics](../analytics/analytics-query-parts.md). 

<a id="return-count-items"></a>
## Return a count of items

To return only a count of items or entities defined in an organization or project without including other information, specify the `$apply=aggregate($count as Count)` query option. For example, the following queries return the number of projects, work items, area paths, and users in an organization. 

```OData
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Projects?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/WorkItems?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Areas?$apply=aggregate($count as Count)
https://analytics.dev.azure.com/<OrganizationName>/_odata/v4.0-preview/Users?$apply=aggregate($count as Count)
```
 
The preceding queries return results like the following example for projects in the `fabrikam` organization:

```odata
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Projects(Count)",
  "value": [
    {
      "@odata.id": null,
      "Count": 16
    }
  ]
}
```

<a id="return-count-items-with-data"></a>
## Return a count of items and data 

To return a count of items along with `select` data for the items, specify the `$count=true` query option. For example, the following queries return a count of work items, area paths, and users defined for a project along with specified properties. For valid properties, see [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md) and [Calendar date, Project, and User metadata reference for Azure DevOps Analytics](../analytics/entity-reference-general.md).

To return all properties defined for a specified entity type, don't specify `select` properties to return.

> [!div class="tabbedCodeSnippets"]
> ```OData 
> https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/WorkItems?$count=true&$select=WorkItemId,Title,WorkItemType 
> https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/Areas?$count=true&$select=AreaName,AreaPath 
> https://analytics.dev.azure.com/<OrganizationName>/<ProjectName>/_odata/v4.0-preview/Users?$count=true&$select=UserName,UserEmail
> ```

## Return Area Path or Iteration Path properties

To look up the `AreaSK`, `IterationSK`, or other properties for specific area paths or iteration paths, use the following queries.

<a id="areask"></a>
### Return the AreaSK for a specific area path 

The following query returns the `AreaSK` property defined for the `Fabrikam Fiber\Production Planning\Web` area path. To see other defined properties for the **Areas** entity set, see [Metadata reference for Azure Boards Analytics, Areas](../analytics/entity-reference-boards.md#areas).

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Areas?$filter=AreaPath eq 'Fabrikam Fiber\Production Planning\Web' &$select=AreaSK
```

The query returns the following data.  

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#Areas(AreaSK)",
  "value": [
    {
      "AreaSK": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb"
    }
  ]
}
```

<a id="iterationsk"></a>
### Return the IterationSK for a specific iteration path 

The following query returns the `IterationSK` property defined for the `Fabrikam Fiber\3Week Sprints\Sprint 3` area path. To see other defined properties for the **Areas** entity set, see [Metadata reference for Azure Boards Analytics, Iterations](../analytics/entity-reference-boards.md#iterations).

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Iterations?$filter=IterationPath eq 'Fabrikam Fiber\Release 1\Sprint 3' &$select=IterationSK
```


<a id="select-columns"></a>
## Select specific properties or fields 

To return specific properties or work item fields, add a `$select` clause that specifies the property names. For example, to return the **Work Item ID**, **Work Item Type**, **Title**, and **State** of work items, add the `$select=WorkItemId,WorkItemType,Title,State` clause to your query.

This clause specifies the property names that correspond to the named fields. OData queries require attention to both spacing and casing. Although property display names like **Work Item ID** can contain spaces, formal property names don't contain spaces. For more information about property names and labels, see [Metadata reference for Azure Boards](../analytics/entity-reference-boards.md#custom-properties). To understand how custom field properties are labeled, see [Custom properties](../analytics/entity-reference-boards.md#custom-properties).

The following example query specifies to return the work item IDs, titles, and states for the top three work items in the Fabrikam Fiber project.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$top=3
```

Analytics returns the following data. 

```OData
{
  "@odata.context": "https://analytics.dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State)",
  "value": [
    {
      "WorkItemId": 31,
      "Title": "About screen",
      "WorkItemType": "Task",
      "State": "New"
    },
    {
      "WorkItemId": 30,
      "Title": "Change background color",
      "WorkItemType": "Task",
      "State": "Active"
    },
    {
      "WorkItemId": 32,
      "Title": "Standardize on form factors",
      "WorkItemType": "Task",
      "State": "Active"
    }
  ]
}
```

<a id="filter-data"></a>
## Filter data 

To filter an entity set to return selected items, add a `$filter` clause that specifies the criteria the items must meet. The following filter clause returns only **Feature** work item types that are in the **In Progress** state.

`/WorkItems?$filter=WorkItemType eq 'Feature' and State eq 'In Progress'`

The following example query specifies to return **Work Item ID**, **Work Item Type**, **Title**, and **State** only of **Feature** work items that are in the  **In Progress** state.

```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,Title,AssignedTo,State&$filter=WorkItemType eq 'Feature' and State eq 'In Progress'
```

### Specify several filter clauses

You can use `AND` and `OR` to specify several filter clauses. For example, you can specify to return work items of types **User Story**, **Bug**, or custom type **Backlog Work** that are in the **New**, **Committed**, or **Active** states. Use parenthesis to group filter clauses as needed.

You can also apply various functions such as `contains`, `startswith`, and `endswith`. See the [Supported functions](odata-supported-features.md#supported-functions). 

<a id="filter-navigation-field"></a>
## Return data for Identity, Area Path, and Iteration Path fields
 
Certain properties associated with navigational properties aren't directly accessible by using `$select` statements. You must use an `$expand` statement to return the data you want. These properties are often associated with their own properties. For example, you can specify to return the user name or user email for **Identity** fields. 

The following table provides examples of how to expand several of these properties. 

| Type field | Referenced property | Example clauses |
|-------------|-------------------|-------------------|
| DateTime  | `DateSK`      | `$expand=CreatedDate($select=Date)` or<br/>`$expand=CreatedDate($select=WeekStartingDate)`  | 
| Identity  | `UserSK`      | `$expand=AssignedTo($select=UserName)` or<br/>`$expand=AssignedTo($select=UserEmail)` | 
| Area      | `AreaSK`      | `$expand=Area($select=AreaName)` or<br/>`$expand=Area($select=AreaPath)` | 
| Iteration | `IterationSK` | `$expand=Iteration($select=IterationName)` or<br/>`$expand=Iteration($select=IterationPath)` or<br/>`$expand=Iteration($select=StartDate)`| 
| Project| `ProjectSK`   | `$expand=Project($select=ProjectName)` | 
| Team     | `TeamSK`      | `$expand=Teams($select=TeamName)` | 

To specify several properties that need to be expanded, you specify them in a single expand clause within a comma-delimited list. 

`$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)`

<a id="filter-navigation"></a>

## Filter by a navigation property

When you specify a navigation property as part of your filter criteria, you must specify it in the required format.  

For example, the following clause specifies to filter work items based on *Iteration 1* defined for the project. 

`/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'`

In this example, `Iteration` is the navigation property name and `IterationPath` corresponds to the full path for the iteration. To use another entity as a filter, put the navigation property followed by a slash followed by the name of the field to filter on.  

And, here's the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'
> ```

Here's another example that requests the top five work items under the *Fabrikam Fiber\Service Delivery\Voice* Area Path are returned. 

> [!div class="tabbedCodeSnippets"]
> ``` OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$top=5&$filter=Area/AreaPath eq 'Fabrikam Fiber\Service Delivery\Voice'&$select=WorkItemId, WorkItemType, Title, State&$orderby=WorkItemId asc
> 
> @odata.context	"https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State)"
> value	
>   0	
>      WorkItemId	361
>      Title        "Hello World Web Site"
>      WorkItemType	"Product Backlog Item"
>      State        "Removed"
>   1	
>      WorkItemId	362
>      Title        "Resume"
>      WorkItemType	"Product Backlog Item"
>      State        "New"
>   2	
>      WorkItemId	363
>      Title        "Welcome back page"
>      WorkItemType	"Product Backlog Item"
>      State        "Done"
>   3	
>      WorkItemId	365
>      Title        "Pause"
>      WorkItemType	"Feature"
>      State        "New"
>   4	
>      WorkItemId	374
>      Title        "Fix performance issues"
>      WorkItemType	"Task"
>      State        "To Do"
>```

<a id="return-related"></a>

> [!TIP]  
> You can't use the navigation property directly in a `$select` statement. Instead, you need to use `$expand`.  

The previous filtering example for the Iteration Path doesn't return the iteration path because it's contained in a related entity. To return data in a related entity, add an `$expand` statement:

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration`

And here's an example that returns information assigned to work item ID *480*. 

> [!div class="tabbedCodeSnippets"]
> ``` OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemId eq 480&$select=WorkItemId,WorkItemType,Title,State&&$expand=Iteration
>	
> @odata.context	"https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration)"
> value	
>   0	
>       WorkItemId           480
>       Title                "Customer Phone - Phase 1"
>       WorkItemType	       "Feature"
>       State	               "In Progress"
>       Iteration	
>           ProjectSK	       "56af920d-393b-4236-9a07-24439ccaa85c"
>           IterationSK	       "c7063041-ff3a-4d7f-bb46-c433c7030d59"
>           IterationId	       "c7063041-ff3a-4d7f-bb46-c433c7030d59"
>           IterationName	   "Sprint 1"
>           Number	            55297
>           IterationPath	    "Fabrikam Fiber\\Release 1\\Sprint 1"
>           StartDate	        "2022-01-17T00:00:00-08:00"
>           EndDate	            "2022-02-04T23:59:59.999-08:00"
>           IterationLevel1	    "Fabrikam Fiber"
>           IterationLevel2	    "Release 1"
>           IterationLevel3	    "Sprint 1"
>           IterationLevel4	    null
>           IterationLevel5	    null
>           IterationLevel6	    null
>           IterationLevel7	    null
>           IterationLevel8	    null
>           IterationLevel9	    null
>           IterationLevel10	null
>           IterationLevel11	null
>           IterationLevel12	null
>           IterationLevel13	null
>           IterationLevel14	null
>           Depth	            2
>           IsEnded	        	true
>       AnalyticsUpdatedDate	"2022-01-18T22:18:58.17Z"
> ```

As you can see, the Iteration Path is expanded in the result and all of the iteration data is returned. It's probably more data than you want.  

To return less data, add a `$select` statement against the iteration as well:

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration($select=Name,IterationPath)`

It then returns the following data.

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "@odata.context":"https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration,Iteration(Name,IterationPath))",
>   "value":[
>     {
>       "WorkItemId":10000,
>       "WorkItemType":"Task",
>       "Title":"Some title",
>       "State":"Completed",
>       "Iteration":{
>         "Name":"Sprint 55",
>         "IterationPath":"Fabrikam\\Sprints\\Sprint 55"
>       }
>     }
>   ]
> }
> ```

<a id="date-range-queries"></a> 

## Query a date range

The following example returns work items whose **Changed Date** is greater than equal to January 1, 2021. 

> [!div class="tabbedCodeSnippets"]
> ```JSON
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=ChangedDate ge 2021-01-01Z
> ```

The following example returns work items whose **Changed Date** occurs during the week of April 26 through April 30, 2021.  

> [!div class="tabbedCodeSnippets"]
> ```JSON
> https://analytics.dev.azure.com{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=ChangedDate ge 2021-04-26Z&ChangedDate le 2021-04-30Z
> ```
 

## Nest expand statements

In OData, you can nest `$expand` statements. For example, you can write the previous query statement to display the project the iteration is part of:

`/WorkItems?$filter=WorkItemId eq 10000&$expand=Iteration($expand=Project)`

It returns the following JSON:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "@odata.context":"https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata#WorkItems",
>   "value":[
>     {
>       "WorkItemId":10000,
>       "Revision":3,
>       "Watermark":283397,
>       "Title":"Production deployment and testing for Entitlement API v2 and Subscriber database",
>       "WorkItemType":"Task",
>       "ChangedDate":"2014-07-10T19:29:58.41Z",
>       "CreatedDate":"2014-04-19T22:44:58.31Z",
>       "State":"Completed",
>       "Reason":"Completed",
>       "Priority":2,
>       "CompletedWork":10.0,
>       "OriginalEstimate":20.0,
>       "Count":1,
>       "Iteration":{
>         "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46",
>         "Name":"Sprint 55",
>         "Number":13021,
>         "IterationPath":"Fabrikam\\Sprints\\Sprint 55",
>         "StartDate":"2013-09-23T00:00:00Z",
>         "EndDate":"2013-10-11T00:00:00Z",
>         "IterationLevel1":"Fabrikam",
>         "IterationLevel2":" Sprints",
>         "IterationLevel3":"Sprint 55",
>         "Level":2,
>         "IsDeleted":false,
>         "Project":{
>           "ProjectId":"b924d696-3eae-4116-8443-9a18392d8544",
>           "ProjectName":"Fabrikam",
>           "IsDeleted":false
>         }
>       }
>     }
>   ]
> }
> ```

You can also combine `$expand` and `$select` statements. For example, you can change the previous query to only return the Iteration Name and Iteration Path:

`/WorkItems?$filter=WorkItemId eq 10000&$expand=Iteration($select=IterationId,IterationPath;$expand=Project)`

It returns the following JSON:

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "@odata.context":"https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata#WorkItems(Iteration(IterationId,IterationPath,Project))",
>   "value":[
>     {
>       "WorkItemId":10000,
>       "Revision":3,
>       "Watermark":283397,
>       "Title":"Production deployment and testing for Entitlement API v2 and Subscriber database","WorkItemType":"Task",
>       "ChangedDate":"2014-07-10T19:29:58.41Z",
>       "CreatedDate":"2014-04-19T22:44:58.31Z",
>       "State":"Completed",
>       "Reason":"Completed",
>       "Priority":2,
>       "CompletedWork":10.0,
>       "OriginalEstimate":20.0,
>       "Count":1,
>       "Iteration":{
>         "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46","IterationPath":"Fabrikam\\Sprints\\Sprint 55",
>         "Project":{
>           "ProjectId":"b924d696-3eae-4116-8443-9a18392d8544",
>           "ProjectName":"Fabrikam",
>           "IsDeleted":false
>         }
>       }
>     }
>   ]
> }
> ```

Notice that the result here shows only the IterationId and IterationPath and that the Project is a nested object within the JSON result. Another key item to note is the URL itself. When using a `$select` statement and an `$expand` clause, you must use a semi-colon (;) before the `$expand`. Anything else will result in an error.

<a id="sort-results"></a>

## Sort results, `orderby` option

Specify the `$orderby` option to sort your results or specify the sequence in which results are returned. You can sort in ascending or descending order using keywords `asc` or `desc`, respectively. Some examples are shown  

| Sort by | Clause to include |
|---------|-------------------|
| Work item ID |`/WorkItems?$orderby=WorkItemId` | 
| Work item ID descending |`/WorkItems?$orderby=WorkItemId desc` |  
| Work item type and State | `/WorkItems?$orderby=WorkItemType,State` |
 

## Next steps

> [!div class="nextstepaction"]
> [Project & organization-scoped queries](account-scoped-queries.md)

 
## Related articles

- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)
- [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md)
- [Best practices to use when querying Analytics](../analytics/analytics-best-practices.md) 
- [Supported OData features](odata-supported-features.md)
- [OData v4.0 specification](https://www.odata.org/documentation/)  
- [OData v4.0 Part 2: URL Conventions Plus Errata 02](https://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)

<!--- 
<a id="basic-query"></a>

## Construct a basic query 

::: moniker range="azure-devops"

You construct a basic query by entering the OData URL into a [supported web browser](/azure/devops/server/compatibility#supported-browsers). In the examples provided, replace `{OrganizationName}` and `{ProjectName}` with your organization name and the name of the project that you want to query. 

::: moniker-end

<a id="single-entity"></a>

## Query a single entity set

To query a single entity set&mdash;such as **Areas**, **Projects**, **WorkItems**, or **WorkItemSnapshot**&mdash;add the name of the entity set within the URL: `/Areas`, `/Projects`, `/WorkItems` or `/WorkItemSnapshot`. 

For example, you query Areas by adding `/Areas`. The full URL is:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/Areas 
> ```

It's equivalent to performing a select statement on the entity set and returning everything, all columns and all rows. If you have a large number of work items, it may take several seconds. If you've more than 10,000 work items, [server-side paging is enforced](../analytics/analytics-query-parts.md#server-force-paging).

For a full list of entity sets for work tracking, see [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md).

  
> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/msft-skilling/Content/_odata/v1.0/WorkItems?$filter=(WorkItemType eq 'User Story' or WorkItemType eq 'Bug' or WorkItemType eq 'Backlog Work') AND (State eq 'New' or State eq 'Committed' or State eq 'Active')&$select=WorkItemId, WorkItemType, Title, State 

Instead, you can exclude the ```$select``` clause altogether and just filter the results as follows:

`/WorkItems?$filter=State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=State eq 'In Progress'
> ```

You apply multiple filters by concatenating two or more filters. For example, here we filter for features and tasks that are in the 

`/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'
> ```

-->