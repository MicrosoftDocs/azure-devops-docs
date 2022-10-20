---
title: Query work tracking data using OData 
titleSuffix: Azure DevOps
description: Learn how to generate work item tracking reports for Azure DevOps using OData Analytics.
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.assetid: 0ABC2F7B-AFA5-465F-8DFE-4779D90452CD  
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 10/17/2022
---

# Construct basic queries using OData Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]


Using Analytics for Azure DevOps, you can construct basic and filtered queries to return data of interest. You can run these queries directly in your browser or within Power BI. 

This article builds off information provided in [Query Analytics in Azure DevOps](../analytics/analytics-query-parts.md) and [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md). Also, the queries is this article are focused on retrieving work item data, however, the principles applies for querying other entity sets.


[!INCLUDE [temp](../includes/analytics-preview.md)]

In this article, the base root URL is scoped to a project as shown:  

::: moniker range="azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}
> ``` 

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://{ServerName}:{Port}/tfs/{CollectionName}/{ProjectName}/_odata/{version}
> ```
> [!NOTE]
> The examples shown in this document are based on a Azure DevOps Services URL, you will need to substitute in your Azure DevOps Server URL.

::: moniker-end

All other URL parts are specified as an extra part of the query string.


[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

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


[!INCLUDE [temp](../includes/api-versioning.md)]

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
 
<a id="select-columns" />

## Select specific columns or fields 

Return specific field data by adding a ```$select``` clause. 

For example, to return only the Work Item ID, Work Item Type, Title, and State of work items, add the following clause to your query which specifies the corresponding field properties.   

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State`	

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$select=WorkItemId,WorkItemType,Title,State
> ```

This query is equivalent to selecting all rows in the entity set, but returning only these specific fields.  

> [!NOTE]  
> Property names don't contain any spaces. Your query will fail if you add spaces. OData queries require attention is paid to both spacing and casing. To understand how custom field properties are labeled, see [Metadata reference for Azure Boards, Custom properties](../analytics/entity-reference-boards.md#custom-properties).
.  

<a id="filter-data" />

## Filter your data 

You can filter data by providing a query filter clause. Building on the last query, you can add the following filter clause to only return those work items to return the state "In Progress". 

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=State eq 'In Progress'
> ```

Instead, you can exclude the ```$select``` clause altogether and just filter the results as follows:

`/WorkItems?$filter=State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=State eq 'In Progress'
> ```

You can also apply multiple filters by concatenating two or more filters. Here, we filter for In Progress tasks:

`/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=WorkItemType eq 'Task' and State eq 'In Progress'
> ```

Additionally, you can apply various functions such as `contains`, `startswith`, `endswith` and more. See the [Supported OData features and clauses, Supported functions](odata-supported-features.md#supported-functions). 

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
 



<a id="filter-related-entities" />

## Filter using related entities

Querying work items is helpful, but you'll eventually want to filter by other data such as the Iteration Path, Area Path, or project. To do so, you need to understand the navigation properties of the entity model. 

All entity types are associated with properties and navigation properties. You can filter your queries of entity sets using both these types of properties.  

You can get metadata using `/$metadata` URL as described in [Explore Analytics OData metadata](analytics-metadata.md) or reviewing the  [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md). 

A partial view of the metadata for the `WorkItem` entity is provided in the following code snippet. Properties correspond to a work item field as well as specific data captured by Analytics, such as `LeadTimeDays` and `CycleTimeDays`. Navigation properties correspond to other entity sets, entity types, or specific Analytics data captured for the entity type.   

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Key>
>    <PropertyRef Name="WorkItemId"/>
> </Key>
> <Property Name="WorkItemId" Type="Edm.Int32" Nullable="false">
>    <Annotation Term="Ref.ReferenceName" String="System.Id"/>
>    <Annotation Term="Display.DisplayName" String="Work Item Id"/>
> </Property>
> <Property Name="InProgressDate" Type="Edm.DateTimeOffset">
>    <Annotation Term="Display.DisplayName" String="InProgress Date"/>
>    </Property>
> <Property Name="CompletedDate" Type="Edm.DateTimeOffset">
>    <Annotation Term="Display.DisplayName" String="Completed Date"/>
>    </Property>
> <Property Name="LeadTimeDays" Type="Edm.Double">
>    <Annotation Term="Display.DisplayName" String="Lead Time Days"/>
> </Property>
> <Property Name="CycleTimeDays" Type="Edm.Double">
>    <Annotation Term="Display.DisplayName" String="Cycle Time Days"/>
> </Property>
> <Property Name="InProgressDateSK" Type="Edm.Int32"/>
> <Property Name="CompletedDateSK" Type="Edm.Int32"/>
> <Property Name="AnalyticsUpdatedDate" Type="Edm.DateTimeOffset"/>
> <Property Name="ProjectSK" Type="Edm.Guid" Nullable="false"/>
> <Property Name="WorkItemRevisionSK" Type="Edm.Int32" Nullable="false"/>
> ...
> <NavigationProperty Name="BoardLocations" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.BoardLocation)"/>
> <NavigationProperty Name="Teams" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
> <NavigationProperty Name="InProgressOn" Type="Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
> <ReferentialConstraint Property="InProgressDateSK" ReferencedProperty="DateSK"/>
> </NavigationProperty>
> <NavigationProperty Name="CompletedOn" Type="Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
> <ReferentialConstraint Property="CompletedDateSK" ReferencedProperty="DateSK"/>
> </NavigationProperty>
> <NavigationProperty Name="Revisions" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemRevision)"/>
> <NavigationProperty Name="Links" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItemLink)"/>
> <NavigationProperty Name="Children" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItem)"/>
> <NavigationProperty Name="Parent" Type="Microsoft.VisualStudio.Services.Analytics.Model.WorkItem">
> <ReferentialConstraint Property="ParentWorkItemId" ReferencedProperty="WorkItemId"/>
> </NavigationProperty>
> <NavigationProperty Name="Processes" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.Process)"/>
> <NavigationProperty Name="Descendants" Type="Collection(Microsoft.VisualStudio.Services.Analytics.Model.WorkItem)"/>
> <NavigationProperty Name="Project" Type="Microsoft.VisualStudio.Services.Analytics.Model.Project" Nullable="false">
> <ReferentialConstraint Property="ProjectSK" ReferencedProperty="ProjectSK"/>
> <Annotation Term="Display.DisplayName" String="Project"/>
> ...
> ```
 

<a id="filter-navigation" />

## Filter by a navigation property

How do you use navigation properties to filter results? 

Use the following clause to filter work items based on a specific iteration, for example Iteration 1: 

`/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'`

With the full OData query:

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/WorkItems?$filter=Iteration/IterationPath eq 'Project Name\Iteration 1'
> ```

In this example, `Iteration` is the navigation property name and `IterationPath` corresponds to the full path for the iteration. To use another entity as a filter, put the navigation property followed by a slash followed by the name of the field to filter on.  
<a id="return-related" />

## Return data from related entities

How do you use navigation properties to select related fields?

The user name for custom fields based on an Identity field type isn't directly accessible using a `$select` statement. The following query uses a `$expand` statement to retrieve the user name:

`/WorkItems?$expand=MyIdentityField($select=UserName)`

> [!NOTE]  
> You can't use the navigation property directly in a `$select` statement. Instead, you will need to use `$expand`.  

The previous filtering example for the Iteration Path doesn't return the iteration path  in the results because it's contained in a related entity. To return data in a related entity, add an `$expand` statement:

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration`

It returns the following JSON code.

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "@odata.context":"https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/$metadata#WorkItems(WorkItemId,WorkItemType,Title,State,Iteration)",
>   "value":[
>     {
>       "WorkItemId":10000,
>       "WorkItemType":"Task",
>       "Title":"Some title",
>       "State":"Completed",
>       "Iteration":{
>         "IterationId":"7a2c246e-fc62-41af-ad18-62332017bc46",
>         "Name":"Sprint 55",
>         "Number":13021,
>         "IterationPath":"Fabrikam\\Sprints\\Sprint 55",
>         "StartDate":"2013-09-23T00:00:00Z",
>         "EndDate":"2013-10-11T00:00:00Z",
>         "IterationLevel1":"Fabrikam",
>         "IterationLevel2":"Sprints",
>         "IterationLevel3":"Sprint 55",
>         "Level":2,
>         "IsDeleted":false
>       }
>     }
>   ]
> }
> ```

As you can see, the Iteration Path is expanded in the JSON result and all of the iteration data is returned. It's probably more data than you want.  

To return less data, add a `$select` statement against the iteration as well:

`/WorkItems?$select=WorkItemId,WorkItemType,Title,State&$filter=WorkItemId eq 10000&$expand=Iteration($select=Name,IterationPath)`

It returns the following JSON:

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

## Sort results

You can sort OData results using the `$orderby` clause. You can apply this clause to any OData query as shown:

`/WorkItems?$orderby=WorkItemId`

You can sort in ascending or descending order using keywords `asc` or `desc` correspondingly:

`/WorkItems?&$orderby=WorkItemId desc`

And, you can order by multiple items:

`/WorkItems?$orderby=WorkItemType,State`


## Next steps

> [!div class="nextstepaction"]
> [Project & organization-scoped queries](account-scoped-queries.md)

 
## Related articles

- [Query Analytics in Azure DevOps](../analytics/analytics-query-parts.md)
- [Metadata reference for Azure Boards Analytics](../analytics/entity-reference-boards.md)
- [Best practices to use when querying Analytics](/analytics/analytics-best-practices.md) 
- [Supported OData features](odata-supported-features.md)
- [OData v4.0 specification](https://www.odata.org/documentation/)  
- [OData v4.0 Part 2: URL Conventions Plus Errata 02](https://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html)