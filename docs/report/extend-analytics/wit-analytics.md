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
monikerRange: '>= azure-devops-2019'
ms.date: 01/19/2023
---

# Define basic queries using OData Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]


Using Analytics for Azure DevOps, you can construct basic and filtered queries to return data of interest. You can run these queries directly in your browser or within Power BI. 

This article builds off information provided in [Construct OData queries for Analytics](../analytics/analytics-query-parts.md) and [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md). Also, the queries in this article are focused on retrieving work tracking entity sets, however, the principles apply for querying other entity sets.

In this article you'll learn how to define queries that return the following data:  

> [!div class="checklist"]  
> - Count of items (no other data)
> - Count of items and data
> - Properties defined for Areas or Iteration Paths
> - Selected columns or fields
> - Filtered data  
> - Return data for Identity, Area Path, and Iteration Path fields
> - Filter by a navigation property
> - Query a date range
> - Nest expand statements
> - Sort results, orderby option
 

[!INCLUDE [temp](../includes/analytics-preview.md)]


[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

> [!NOTE]  
> In this article, the OData query URL is defined for Azure DevOps Services. To construct a similar query for an on-premises server, see the guidance provided in [Construct OData queries for Analytics](../analytics/analytics-query-parts.md). We encourage you to adjust the queries provided for your organization and project to get familiar with querying OData using your browser. 


<a id="return-count-items" />

## Return a count of items (no other data)  

To learn about the number of items or entities defined in an organization or project, specify `$apply=aggregate($count as Count)` query option. For example, the following queries return the number of projects, work items, Area Paths, and users defined for an organization. 

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/v4.0-preview/Projects?$apply=aggregate($count as Count)
> https://analytics.dev.azure.com/{OrganizationName}/_odata/v4.0-preview/WorkItems?$apply=aggregate($count as Count)
> https://analytics.dev.azure.com/{OrganizationName}/_odata/v4.0-preview/Areas?$apply=aggregate($count as Count)
> https://analytics.dev.azure.com/{OrganizationName}/_odata/v4.0-preview/Users?$apply=aggregate($count as Count)
> ```
 
> [!TIP] 
> Cross-project queries fail when the user running the query doesn't have access to all the projects. Read more about requirements in [Project and organization-scoped queries](account-scoped-queries.md).

### Project count

> [!div class="tabbedCodeSnippets"]
> ```OData
> @odata.context	"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Projects(Count)"
> value	
>    0	
>      @odata.id	null
>      Count	    28
> ```

### Work item count
> [!div class="tabbedCodeSnippets"]
> ```OData
> @odata.context	"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#WorkItems(Count)"
> value	
>   0	
>      @odata.id	null
>      Count	    1166
> ```

### Area count
> [!div class="tabbedCodeSnippets"]
> ```OData
> @odata.context	"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Areas(Count)"
> value	
>   0	
>      @odata.id	null
>      Count	    70
> ```


### User count

> [!div class="tabbedCodeSnippets"]
> ```OData
> @odata.context	"https://analytics.dev.azure.com/fabrikam/_odata/v4.0-preview/$metadata#Areas(Count)"
> value	
>   0	
>      @odata.id	null
>      Count	    16
> ```


<a id="return-count-items-with-data" />

## Return a count of items and data 

To return a count of items along with select data for the items, specify the `$count=true` query option. For example, the following queries return a count of work items, Area Paths, and users defined for a project along with the specified properties. For valid properties, see [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md) and [Calendar date, Project, and User metadata reference for Azure DevOps Analytics](../analytics/entity-reference-general.md).

> [!TIP]  
> If you don't specify the properties to return, Analytics will return all properties defined for the specified entity type. 

> [!div class="tabbedCodeSnippets"]
> ```OData 
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v4.0-preview/WorkItems?$count=true&$select=WorkItemId,Title,WorkItemType 
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v4.0-preview/Areas?$count=true&$select=AreaName,AreaPath 
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v4.0-preview/Users?$count=true&$select=UserName,UserEmail
> ```
  
 
## Areas or Iterations properties

To look up the `AreaSK` or `IterationSK`, or other property of an **Area Path** or **Iteration Path**, use the following queries. 

<a id="areask" />

### Return the AreaSK for a specific Area Path 

The following query specifies to return the `AreaSK` property defined for the *Fabrikam Fiber\Service Delivery\Internet* **Area Path**. To specify other properties defined for the `Areas` entity set, see [Metadata reference for Azure Boards Analytics, Areas](../analytics/entity-reference-boards.md#areas).

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Areas?$filter=AreaPath eq 'Fabrikam Fiber\Service Delivery\Internet' &$select=AreaSK
> ```

The query returns the following data.  

> [!div class="tabbedCodeSnippets"]
> ```OData
> {
>   "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#Areas(AreaSK)",
>   "value": [
>     {
>       "AreaSK": "637dc203-0549-4415-9663-b6358ac27d21"
>     }
>   ]
> }
> ```

<a id="iterationsk" />

### Return the IterationSK for a specific Iteration Path 

The following query specifies to return the `IterationSK` property defined for the *Fabrikam Fiber\Release 1\Sprint 3* **Iteration Path**. To specify other properties defined for the `Iterations` entity set, see [Metadata reference for Azure Boards Analytics, Iterations](../analytics/entity-reference-boards.md#iterations).

> [!div class="tabbedCodeSnippets"]
> ```OData
>https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/Iterations?$filter=IterationPath eq 'Fabrikam Fiber\Release 1\Sprint 3' &$select=IterationSK
> ```

The query returns the following data.  

> [!div class="tabbedCodeSnippets"]
> ```OData
> {
>   "@odata.context": "https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#Iterations(IterationSK)",
>   "value": [
>     {
>       "IterationSK": "862e961a-ac7a-4fcc-9ebc-8afd0c12fed5"
>     }
>   ]
> }
> ```
 
<a id="select-columns" />

## Return specific properties or fields 

To return specific properties or work item fields, add a `$select` clause that specifies the property names. 

For example, to return the **Work Item ID**, **Work Item Type**, **Title**, and **State** of work items, add the following clause to your query. This clause specifies the properties that correspond to the named fields.  

> [!NOTE]  
> Property names don't contain any spaces. Your query will fail if you add spaces. OData queries require attention is paid to both spacing and casing. To understand how custom field properties are labeled, see [Metadata reference for Azure Boards, Custom properties](../analytics/entity-reference-boards.md#custom-properties).

Here we specify to return the top three work items. 

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$top=3
> ```

Analytics returns the following data. 

> [!div class="tabbedCodeSnippets"]
> ```OData
> @odata.context	"https://analytics.dev.azure.com/fabrikam/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State)"
> value	
>    0	
>       WorkItemId    462
>       Title         "Test case"
>       WorkItemType  "Test Case"
>       State         "Design"
>    1	
>       WorkItemId	   491
>       Title          "Change color settings"
>       WorkItemType   "Shared Steps"
>       State          "Active"
>    2	
>       WorkItemId	   461
>       Title          "Test impediment"
>       WorkItemType   "Impediment"
>       State          "Open"
> ```
.  

<a id="filter-data" />

## Filter your data 


To filter an entity set to return select items, specify a `$filter` clause that specifies the criteria the items must meet. Building on the last query, here we add a filter clause to only return *Feature* work item types that are in the  *In Progress* state.

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=State eq 'In Progress'`

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v4.0-preview/WorkItems?$filter=WorkItemType eq 'Feature' and State eq 'In Progress'&$select=WorkItemId,Title,AssignedTo,State
> ```

Analytics returns the following data. 


> [!div class="tabbedCodeSnippets"]
> ```OData
> 	
> @odata.context	"https://analytics.dev.azure.com/kelliott/Fabrikam%20Fiber/_odata/v4.0-preview/$metadata#WorkItems(WorkItemId,Title,State)"
> value	
>   0	
>       WorkItemId	380
>       Title	"Refresh web look, feel, performance factors"
>       State	"In Progress"
>   1	
>       WorkItemId	480
>       Title	"Customer Phone - Phase 1"
>       State	"In Progress"
>   2	
>       WorkItemId	493
>       Title	"Change initial view"
>       State	"In Progress"
>   3	
>       WorkItemId	479
>       Title	"Customer Web - Phase 1"
>       State	"In Progress"
>   4	
>       WorkItemId	551
>       Title	"Mobile feedback"
>       State	"In Progress"
> ```


## Specify several filter clauses

You can use `AND` and `OR` to specify several filter clauses. 

For example, the following query specifies to return work items of type *User Story*, *Bug*, and *Backlog Work* (a custom work item type) that are in the *New*, *Committed*, or *Active* states. Use parenthesis to group filter clauses as needed. 

Additionally, you can apply various functions such as `contains`, `startswith`, `endswith` and more. See the [Supported OData features and clauses, Supported functions](odata-supported-features.md#supported-functions). 


<a id="filter-navigation-field" />

## Return data for Identity, Area Path, and Iteration Path fields
 
Select properties are associated with navigational properties and aren't directly accessible using the `$select` statement. You must use an `$expand` statement to return the data of interest. These properties are often associated with several properties of their own. For example, with Identity fields, you can specify to return the user name or the user email. 

The following table provides examples of how to expand several of these properties. 

| Type fields | Referenced property | Example clauses to include |
|-------------|-------------------|-------------------|
| DateTime  | `DateSK`      | `$expand=CreatedDate($select=Date)` or<br/>`$expand=CreatedDate($select=WeekStartingDate)`  | 
| Identity  | `UserSK`      | `$expand=AssignedTo($select=UserName)` or<br/>`$expand=AssignedTo($select=UserEmail)` | 
| Area      | `AreaSK`      | `$expand=Area($select=AreaName)` or<br/>`$expand=Area($select=AreaPath)` | 
| Iteration | `IterationSK` | `$expand=Iteration($select=IterationName)` or<br/>`$expand=Iteration($select=IterationPath)` or<br/>`$expand=Iteration($select=StartDate)`| 
| Project	| `ProjectSK`   | `$expand=Project($select=ProjectName)` | 
| Team 	    | `TeamSK`      | `$expand=Teams($select=TeamName)` | 

To specify several properties that need to be expanded, you specify them in a single expand clause within a comman-delimited list. 

`$expand=AssignedTo($select=UserName),Iteration($select=IterationPath),Area($select=AreaPath)`



<a id="filter-navigation" />

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

<a id="return-related" />


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



<a id="date-range-queries" /> 

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

<a id="sort-results" />

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
<a id="basic-query" />

## Construct a basic query 

::: moniker range="azure-devops"

You construct a basic query by entering the OData URL into a [supported web browser](/azure/devops/server/compatibility#supported-browsers). In the examples provided, replace `{OrganizationName}` and `{ProjectName}` with your organization name and the name of the project that you want to query. 

::: moniker-end

::: moniker range="azure-devops-2019"

You construct a basic query by entering the OData URL into a [supported web browser](/azure/devops/server/compatibility#supported-browsers). In the examples provided, make the following replacements:
- `analytics.dev.azure.com` with `{ServerName}:{Port}/tfs/`
- `{OrganizationName}` with your project collection name (default is DefaultCollection) 
- `{ProjectName}` with the name of the project that you want to query. 

::: moniker-end


<a id="single-entity" />

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