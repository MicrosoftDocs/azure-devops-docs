---
title: OData Analytics query guidelines 
titleSuffix: Azure DevOps
description: Learn how to write good OData queries that access Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 07/21/2023
---

# OData Analytics query guidelines for Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Extension developers can benefit by following the guidelines provided in this article for designing efficient OData queries against Analytics for Azure DevOps. Following these guidelines helps ensure the queries have good performance for execution time and resource consumption. Queries that don't adhere to these guidelines might result in poor performance, with long report wait times, queries that exceed allowed resource consumption, or service blockages. 

[!INCLUDE [temp](../includes/analytics-preview.md)]

These guidelines are our recommendations prefixed with the terms **DO**, **CONSIDER**, **AVOID,** and **DON'T**. Restrictive rules enforced by Analytics contain the **[BLOCKED]** prefix. You should understand the trade-offs between different solutions. Under certain circumstances, you may have data requirements that force you to violate one or more guidelines. Such cases should be rare. We recommend that you have a clear and compelling reason for such decisions.

> [!TIP]
> The examples shown in this document are based on an Azure DevOps Services URL. Use substitutions for on-premises versions.
> 
> [!div class="tabbedCodeSnippets"]
> ```OData
> https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/
> ```

## Error and warning messages

### **✔️ DO** review OData response warnings 

Each query you execute gets checked against a set of predefined rules. Violations are returned back in the OData response following `@vsts.warnings`. Review these warnings as they provide current and context-sensitive information on how to improve your query. 

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "@odata.context": "https://{OrganizationName}.tfsallin.net/_odata/v1.0/$metadata#WorkItems",
>   "@vsts.warnings": [
>     "The specified query does not include a $select or $apply clause which is recommended for all queries."
>   ],
>   ...
> }
> ```

### ✔️ DO review OData error messages 

Queries that violate an OData error rule results in a failed response with a 400 (Bad Request) status code. Associate messages don't appear within the `@vsts.warnings` property. Instead, they generate an error message in the `message` property in the JSON response. 

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "error": {
>   "code": "0",
>   "message": "The query specified in the URI is not valid. The Snapshot tables in Analytics are intended to be used only in an aggregation."
>   }
> }
> ```

<a id="restrictions" />

## Restrictions 


### Do's

- [✔️ DO limit the query to the project(s) you have access to](#restrict-query-project)
- [✔️ DO specify project filter inside the `$expand` clause if your expansion could include data in other, potentially inaccessible projects](#restrict-project-filter)
- [✔️ DO wait or stop the operation if your query exceeds usage limits](#restrict-wait-stop)
- [✔️ DO wait or stop the operation if your query fails with a timeout](#question-41065)
- [✔️ DO include `DateSK` or `DateValue` column in `groupby` clause when you aggregate over snapshot tables](#restrict-aggregate-snapshot)
- [✔️ DO explicitly address entities with filter clauses](#restrict-explicit-address-entities)
- [✔️ DO use `WorkItemRevisions` entity set to load all the revisions for a given work item](#restrict-workitem-revisions)
- [✔️ DO use batch endpoint for long queries](#restrict-do-use-batch-endpoint)
- [✔️ DO specify time zone when filtering on date columns](#restrict-time-zone)

### Consider 

- [✔️ CONSIDER querying using the project-scoped endpoint](#project-scoped-endpoint)

### Blocked 

- [❌ [BLOCKED] DON'T use snapshot entities for anything other than aggregations](#odata_snapshot_without_aggregation)
- [❌ [BLOCKED] DON'T use entity keys in resource paths for entity addressing](#restrict-blocked-entity-keys)
- [❌ [BLOCKED] DON'T expand `Revisions` on `WorkItem` entity](#restrict-blocked-revisions)
- [❌ [BLOCKED] DON'T group on distinct columns](#odata_query_distinct_columns_in_last_groupby)
- [❌ [BLOCKED] DON'T use `countdistinct` aggregation](#odata_query_with_countdistinct_not_supported)
- [❌ [BLOCKED] DON'T use batch endpoint for sending multiple queries](#odata_batch_query_size_invalid)
- [❌ [BLOCKED] DON'T use queries that result in more than 800 columns](#odata_query_result_width_invalid)

### Avoid 

- [❌ AVOID aggregations that can result in arithmetic overflow](#restrict-avoid-aggregations)
- [❌ AVOID creating long queries](#question-41401)


<a id="restrict-query-project"> </a>

### ✔️ DO limit the query to the project(s) you have access to

If your query targets data from a project you don't have access to, the query returns a "Project access denied" message. To ensure that you have access, make sure your **View analytics** permission is set to Allow for all projects that you query. To learn more, see [Permissions required to access Analytics](../powerbi/analytics-security.md).

If you don't have access to a project, the following message displays: 

><em>The query results include data in one or more projects for which you don't have access. Add one or more projects filters to specify the project(s) you have access to in 'WorkItems' entity. If you are using $expand or navigation properties, project filter is required for those entities.</em>

<!---One of the core principles of Analytics is that one query returns the same result for all users of fails in a user does not have permissions to the data. There are no implicit filters added based on who runs the query. One consequence is that you, the query author, have to pay attention to project filters to make sure that the target audience can execute them. 

If a query tries to access the data in a project for which you don't have access, you get the following error message.-->

To work around this problem, you can either explicitly add a project filter, or use the [project-scoped endpoint](#project-scoped-endpoint) as explained later in this article.

For example, the following query fetches work items that belong to projects named `{projectSK1}` and `{projectSK2}`.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=ProjectSK eq {projectSK1} or ProjectSK eq {projectSK2}
>   &$select=WorkItemId, Title
> ```

<a id="restrict-project-filter"> </a>

### ✔️ DO specify project filter inside the `$expand` clause if your expansion could include data in other, potentially inaccessible projects

When you expand navigation properties, there's a chance that you end up referencing data from other, inaccessible projects. If you reference inaccessible data, you receive the same error message listed previously, *"The query results include data in one or more projects...*". Similarly, you can resolve this problem by adding explicit project filters to control the expanded data.

You can do so in the regular `$filter` clause for simple navigation properties. For example, the following query explicitly asks for `WorkItemLinks` where both the link and its target exist in the same project.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItemLinks?
>   $filter=ProjectSK eq {projectSK} and TargetWorkItem/ProjectSK eq {projectSK}
>   &$select=LinkTypeReferenceName, SourceWorkItemId, TargetWorkItemId
>   &$expand=TargetWorkItem($select=WorkItemId, Title)
> ```

Instead, you can move the filter to `$filter` expand option in the `$expand` clause. However, it changes the semantic of the query. For example, the following query gets all the links from a given project and conditionally expands the target only if it exists in the same project. Although valid, this approach might cause confusion as it may be difficult to determine whether a property isn't expanded because it's `null` or because it was filtered out. Use this solution only if you really need this particular behavior.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItemLinks?
>   $filter=ProjectSK eq {projectSK}
>   &$select=LinkTypeReferenceName, SourceWorkItemId, TargetWorkItemId
>   &$expand=TargetWorkItem($filter=ProjectSK eq {projectSK}; $select=WorkItemId, Title)
> ```

The `$filter` expand option is useful when you use the expand collection property such as `Children` in `WorkItems` entity set. For example, the following query returns all work items from a given project together with all their children that belong in the same project. 

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=ProjectSK eq {projectSK}
>   &$select=WorkItemId, Title
>   &$expand=Children($filter=ProjectSK eq {projectSK}; $select=WorkItemId, Title)
> ```

Specify the filter if you expand one of the following properties:
* `WorkItems` entity set: `Parent`, `Children`
* `WorkItemLinks` entity set: `TargetWorkItem`.

<a name="project-scoped-endpoint"></a>

### ✔️ CONSIDER querying using the project-scoped endpoint

If you're interested in data from a single project, we recommend you use the project-scoped OData endpoint (`/{ProjectName}/_odata/v1.0`). It avoids the problems described in the preceding two sections, and implicitly filters data to the one project, the referenced entity set, and all the expanded navigation properties.

With this simplification, the queries from the previous section could be rewritten to the following form. Not only did the filter in the expand clause disappear, but also there's no need for the filter on the main entity set.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItemLinks?
>   &$select=LinkTypeReferenceName, SourceWorkItemId, TargetWorkItemId
>   &$expand=TargetWorkItem($select=WorkItemId, Title)
> ```

The query for work item children is also much shorter and simpler.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}//WorkItems?
>   &$select=WorkItemId, Title
>   &$expand=Children($select=WorkItemId, Title)
> ```

You can apply this solution only when your focus is data from a single project. For cross-project reporting, you have to use filtering strategies described in the previous sections.

<a id="restrict-wait-stop"> </a>

### ✔️ DO wait or stop the operation if your query exceeds usage limits

If you execute many queries, or the queries require many resources to run, you might exceed service limits and get temporarily blocked. If you exceed the service limits, stop your operation as chances are that the next query you send fails with the same error message.

>*Request was blocked due to exceeding usage of resource '{resource}' in namespace '{namespace}'.*

For more information on rate limiting, see [Rate limits](../../integrate/concepts/rate-limits.md). 
To learn how to design efficient OData queries, refer to [Performance Guidelines](#performance-guidelines) later in this article.

<a name="question-41065"></a>

### ✔️ DO wait or stop the operation if your query fails with a timeout

Similar to exceeding usage limits, you should wait or stop the operation if your query comes across a timeout. It could signal a transient problem, so you may retry once to see if the problem resolves. However, persistent timeouts indicate that the query is probably too expensive to run. Further retries only result in exceeding usage limits and you get blocked.

>*TF400733: The request has been canceled: The request has exceeded request timeout, please try again.*

Timeouts indicate that a query requires optimization. To learn how to design efficient OData queries, see [Performance guidelines](#performance-guidelines) later in this article.

<a name="odata_snapshot_without_aggregation"></a>

### ❌ [BLOCKED] DON'T use snapshot entities for anything other than aggregations

Snapshot entity sets with the `Snapshot` suffix are special because they're modeled as *daily snapshots*. You can use them to get a state of entities as they were at the end of each day in the past. For example, if you queried `WorkItemSnapshot` and filter to a single `WorkItemId`, you would get one record for each day since the work item was created. Loading directly all of this data would be expensive and most likely would exceed usage limits and be blocked. However, aggregations on these entities are both allowed and recommended. In fact, the snapshot entity sets were designed with aggregation scenarios in mind.

For example, the following query gets the number of work items as by date to observe how it grew in January 2020.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItemSnapshot?
>   $apply=
>     filter(DateSK ge 20200101 and DateSK le 20200131)/
>     groupby((DateSK), aggregate($count as Count))
> ```

To learn more about aggregations, see [Aggregate data](aggregated-data-analytics.md).

<a id="restrict-aggregate-snapshot"> </a>

### ✔️ DO include `DateSK` or `DateValue` column in `groupby` clause when you aggregate over snapshot tables
 
Since all snapshot entities are modeled as **daily snapshot tables**, you should always include one of the day properties (`DateSK` or `DateValue`) in the grouping clause. Otherwise, the result may appear incorrectly inflated. 

For example, if you grouped `WorkItemSnapshot` only by `AssignedTo` property and aggregate it with count, all the numbers of work items assigned to people would be multiplied by the number of days when each assignment was active. While you may have a situation where it's the outcome you want, such cases are rare.

<a id="restrict-blocked-entity-keys"> </a>

### ❌ [BLOCKED] DON'T use entity keys in resource paths for entity addressing

OData syntax provides a way to access a particular entity by including its keys directly in the URL segments. For more information, see [OData Version 4.0. Part 2: URL Conventions - 4.3 Addressing Entities](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc453752340). Although OData allows such addressing, Analytics blocks it. Inclusion within a query results in the following error.

><em>The query specified in the URI is not valid. Analytics doesn't support key or property navigation like WorkItems(Id) or WorkItem(Id)/AssignedTo. If you getting that error in PowerBI, please, rewrite your query to avoid incorrect folding that causes N+1 problem.</em>

As the error messages hints, certain client tools can abuse direct entity addressing. Instead of loading all the data in a single request, such clients might choose to query for each entity independently. This practice is discouraged as it can result in a high number of requests. Instead, we recommend you use explicit entity addressing as explained in the following section.

<a id="restrict-explicit-address-entities"> </a>

### ✔️ DO explicitly address entities with filter clauses

If you want to fetch data for a single entity, you should use the same approach as for a collection of entities, and explicitly define filters in the `$filter` clause.

For example, the following query gets a single work item by its identifier.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=WorkItemId eq {id}
>   &$select=WorkItemId, Title
> ```

If you're not sure which properties you should include in such a filter, you can look it up in the metadata. See [Construct OData queries for Analytics, URL components to query the metadata](../analytics/analytics-query-parts.md#query-metadata). Properties are in the `Key` element of the `EntityType`. For example, `WorkItemId` and `Revision` are key columns for the `WorkItemRevision` entity.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntityType Name="WorkItemRevision">
>   <Key>
>     <PropertyRef Name="WorkItemId"/>
>     <PropertyRef Name="Revision"/>
>   </Key>
>   [...]
> </EntityType>
> ```

<a id="restrict-blocked-revisions"> </a>

### ❌ [BLOCKED] DON'T expand `Revisions` on `WorkItem` entity

The Analytics data model disallows certain types of expansions. One of them, which might be surprising to some, is the `Revisions` collection property on the `WorkItem` entity. If you try to expand this property, you receive the following error message.

>*The query specified in the URI is not valid. The property 'Revisions' cannot be used in the $expand query option.*

This restriction was put in place to encourage everyone to use the recommended solution, which is fetching revisions from `WorkItemRevisions` as explained in the following section.

<a id="restrict-workitem-revisions"> </a>

### ✔️ DO use `WorkItemRevisions` entity set to load all the revisions for a given work item

Use `WorkItemRevisions` each time you want to fetch the full history for a work item or a collection of work items. 

For example, the following query returns all the revisions of a work item with the `{id}` identifier.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItemRevisions?
>   $filter=WorkItemId eq {id}
>   &$select=WorkItemId, Title
> ```

If you care about the full history for all the work items that match certain criteria, express it using a filter on the `WorkItem` navigation property. For example, the following query gets all the revisions of all the currently active work items.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItemRevisions?
>   $filter=WorkItem/State eq 'Active'
>   &$select=WorkItemId, Title
> ```


<a name="odata_query_distinct_columns_in_last_groupby"></a>

### ❌ [BLOCKED] DON'T group on distinct columns

You use a grouping operation to reduce the number of records. Using distinct columns in the `groupby` clause indicates a problem, and the query fails immediately. Should you accidentally run into this situation, you receive the following error message. 

> *One or more of the columns specified in the groupby clause of this query are not recommended.*

To resolve this problem, remove the distinct column from the `groupby` clause.

<a name="odata_query_with_countdistinct_not_supported"></a>

### ❌ [BLOCKED] DON'T use `countdistinct` aggregation

Analytics doesn't support the `countdistinct` function, even though OData does. While we plan to add support in the future, it currently isn't available. A query that contains this function returns the following error message.

> *Queries which apply a count distinct with an aggregation are not supported.*

<a id="restrict-avoid-aggregations"> </a>

### ❌ AVOID aggregations that can result in arithmetic overflow

In rare cases, an aggregation query may run into problems with arithmetic overflow. For example, it can happen when you sum some numeric properties that aren't intended for summing, such as `StackRank` in the work item entities. Since the [OData Extension for Data Aggregation](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html) standard doesn't provide a way to cast a property to a different type, the only way to solve this problem is to remove the problematic property from the aggregation.

<a id="restrict-do-use-batch-endpoint"> </a>

### ✔️ DO use batch endpoint for long queries

You can incur problems with long queries. Particularly, problems might occur when:
- You query a project with many custom fields.
- Your query is constructed programmatically. 

The current limit of OData queries sent with `HTTP GET` is 3,000 characters. If you  exceed it, you get back a "*404 Not Found*" response.

```http
HTTP/1.1 404 Not Found
Content-Length: 0
```

To resolve this problem, use the OData batch endpoint as explained in the specification, [OData Version 4.0. Part 1: Protocol - 11.7 Batch Requests](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752313). Batch capability was primarily designed to group multiple operations into a single `HTTP` request payload, but you can also use it as a workaround for the query length limitation. By sending an `HTTP POST` request, you can pass a query of an arbitrary length and the service correctly interprets it. 

<a name="odata_batch_query_size_invalid"></a>

### ❌ [BLOCKED] DON'T use batch endpoint for sending multiple queries

We restrict use of the batch endpoint from handling a batch of multiple requests. A single request can still have only one query. If you try to send a batch of several queries, the operation fails with the following error message. The only solution is to split queries into multiple requests.

*Analytics doesn't support processing of multiple operations that the current batch message contains. Analytics uses OData batch in order to support POST requests, but requires that you limit the operation to a single request.*

<a name="odata_query_result_width_invalid"></a>

### ❌ [BLOCKED] DON'T use queries that result in more than 800 columns

We restrict queries that result in more than 800 columns. If you aren't selective enough in which columns your query returns you may receive the following error message.

> VS403670: The specified query returns 'N' columns which is higher than the allowed limit of 800 columns. Please, use explicit $select (including within the $expand) options to limit number of columns.

Add a $select clause to your query, and to $expand operations in your query, to avoid exceeding this limit.

<a name="question-41401"></a>

### ❌ AVOID creating long queries

We recommend that you evaluate your approach whenever you construct a long query. While there are many scenarios that need a long query (for example, complex filters or a long list of properties), typically they provide an early indicator of a suboptimal design. 

When your query contains many entity keys in the query (for example, `WorkItemId eq {id 1} or WorkItemId eq {id 2} or ...`), you can probably rewrite it. Instead of passing the identifiers, try to define some other criteria that select the same set of entities. Sometimes may need to modify your process (for example, add a new field or tag), but it's typically worth it. Queries that use more abstract filters are easier to maintain and have a greater potential to work better.

Another scenario that tends to generate long queries occurs when you include many individual dates (for example, `DateSK eq {dateSK 1} or DateSK eq {dateSK 2} or ...`). Look for  another pattern that you can use to create a more abstract filter. For example, the following query returns all work items that were created on Monday. 

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=CreatedOn/DayOfWeek eq 2
>   &$select=WorkItemId, Title, State
> ```

<a id="restrict-time-zone"> </a>

### ✔️ DO specify time zone when filtering on date columns

The time zone (`Edm.DateTimeOffset`) exposes all date and time information with an offset that matches the [organization's time zone settings](../../organizations/accounts/change-time-zone.md). This data is precise and simple to interpret at the same time. Another nonobvious consequence is that all the filters have to pass the time zone information as well. If you skip it, you get the following error message.

> *The query specified in the URI is not valid. No datetime offset was specified.  Please use either of these formats YYYY-MM-ddZ to specify everything since midnight or yyyy-MM-ddThh:mm-hh:mm (ISO 8601 standard representation of dates and times) to specify the offset.*

To solve this problem, add the time zone information. For example, assuming that the organization is configured to display data in "*(UTC-08:00) Pacific Time (US & Canada)*" time zone, the following query gets all the work items created since the beginning of 2020.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=CreatedDate ge 2020-01-01T00:00:00-08:00
>   &$select=WorkItemId, Title, State
> ```

The same solution works for time zones with positive offsets, however, the plus character (`+`) has a special meaning in the URI and you must handle it correctly. If you specify `2020-01-01T00:00:00+08:00` (with a `+` character) as your starting point, you get the following error.

> *The query specified in the URI is not valid. Syntax error at position 31 in 'CreatedDate ge 2020-01-01T0000 08:00'.*

To solve it, replace the `+` character with its encoded version, `%2B`. For example, assuming that the organization is configured to display data in "*(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi*" time zone, the following query returns all the work items created since the beginning of 2020.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=CreatedDate ge 2020-01-01T00:00:00%2B08:00
>   &$select=WorkItemId, Title, State
> ```

An alternative approach is to use date surrogate key properties as they don't keep the time zone information. For example, the following query returns all the work items created since the beginning of 2020 regardless of the organization's settings.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=CreatedDateSK ge 20200101
>   &$select=WorkItemId, Title, State
> ```

<a id="performance-guidance" />

## Performance guidelines

### Do's

- [✔️ DO measure the effect of implementing a performance guideline](#measure-impact)
- [✔️ DO use aggregation extensions](#use-aggregation)
- [✔️ DO specify columns in the `$select` clause](#specify-columns)
- [✔️ DO specify columns in the `$select` expand option inside the `$expand` clause](#specify-columns-select)
- [✔️ DO define a filter on `RevisedDateSK` when you query for historical work items data (`WorkItemRevisions` or `WorkItemSnapshot` entity sets)](#perf-define-filter)
- [✔️ DO use weekly or monthly snapshots for trend queries that span a long time period](#perf-snapshots) 
- [✔️ DO use `Tags` collection property on work items when filtering by tags](#perf-tags) 
- [✔️ DO use `TagNames` property if you want to display all the tags on a work item as text](#perf-tagnames) 
- [✔️ DO use server-driven paging](#perf-paging) 
- [✔️ DO use `$top` query option to limit the number of records](#perf-top)


### Don't's

- [❌ DON'T use `tolower` and `toupper` functions to do case-insensitive comparison](#perf-case-sensitive) 
- [❌ DON'T use unbounded expansion with `$levels=max`](#perf-unbounded) 
- [❌ DON'T use `$top` and `$skip` query options to implement client-driven paging](#perf-no-top-skip) 

### Consider

- [✔️ CONSIDER writing queries to return small numbers of records](#perf-small-number) 
- [✔️ CONSIDER limiting the number of selected properties to minimum](#perf-limit-number) 
- [✔️ CONSIDER filtering on date surrogate key properties (`DateSK` suffix)](#perf-filter-date) 
- [✔️ CONSIDER filtering on surrogate key columns](#perf-filter-surrogate)
- [✔️ CONSIDER passing `vsts.analytics.maxsize` preference in the header](#perf-max-size)


### Avoid

- [❌ AVOID using `Parent`, `Children`, or `Revisions` properties in the `$filter` or `$expand` clauses](#perf-avoid-parent-child)

<a id="measure-impact"> </a>

### ✔️ DO measure the effect of implementing a performance guideline

As with any performance recommendations, you shouldn't blindly implement them. Instead, always capture the baseline and **measure** the effect of changes you make. All of the guidelines were created based on the interactions with clients of Analytics who had specific requirements and challenges. These recommendations were considered general and potentially useful for anyone who designs similar queries. However, in rare cases, following the guidelines could have no effect or even a negative effect on the performance. You do need to measure the difference to notice it. Should this happen,  provide feedback in the [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html) portal.

There are many options to measure performance. The simplest one is to run two versions of the same query directly in the browser. Observe the time it takes in the developer tools. For example, you can use [Network panel](/microsoft-edge/devtools-guide/network#network-request-list) in [Microsoft Edge F12 Developer Tools](/microsoft-edge/devtools-guide)). Another option is to capture this information using [Fiddler Web Debugger Tool](/windows/win32/win7appqual/fiddler-web-debugger-tool). 

Whatever your approach is, run both queries multiple times. For example, run the queries 30 times each to have a sufficiently large sample set. Then figure out the performance characteristics. Analytics follows multi-tenant architecture. So, other operations occurring at the same time can affect the duration of your queries. 

<a id="use-aggregation"> </a>

### ✔️ DO use aggregation extensions

By far the best thing you can do to improve performance of your queries is to use aggregation extension - [OData Extension for Data Aggregation](https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html). With the aggregation extension, ask the service to summarize data server-side and return a smaller response than what you can fetch by applying the same function client-side. Finally, Analytics is optimized for this type of queries, so make use of it. 

To learn more, see [Aggregate data](aggregated-data-analytics.md).

<a id="specify-columns"> </a>

### ✔️ DO specify columns in the `$select` clause

Specify the columns you care about in the `$select` clause. Analytics is built on top of a *Columnstore Index* technology. That means that data is both storage and query processing is column-based. By reducing the set of properties, you reference in `$select` clause you can reduce the number of columns that have to be scanned and improve the overall performance of the query.

For example, the following query specifies the columns for work items.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $select=WorkItemId, Title, State
> ```
> 
> [!NOTE]
> Azure DevOps supports process customization. Some administrators use this feature and create hundreds of custom fields. If you omit the `$select` clause, your query returns all fields, including custom fields.

<a id="specify-columns-select"> </a>

### ✔️ DO specify columns in the `$select` expand option inside the `$expand` clause

Similarly to the `$select` clause guidelines, specify the properties in the `$select` expand option within the `$expand` clause. It's easy to forget, but if you omit it, your response contains all the properties from the expanded object.

For example, the following query specifies the columns for both the work item and its parent.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $select=WorkItemId, Title, State
>   &$expand=Parent($select=WorkItemId, Title, State)
> ```

<a id="perf-define-filter"> </a>

### ✔️ DO define a filter on `RevisedDateSK` when you query for historical work items data (`WorkItemRevisions` or `WorkItemSnapshot` entity sets)

When you query for historical data, the chances are that you're interested in the most recent period (for example, 30 days, 90 days). Because of how work items entities are implemented,  there's a convenient way for you to write such queries to get great performance. Each time you update a work item it creates a new revision and records this action in the `System.RevisedDate` field, which makes it perfect for history filters.

In Analytics, the revised date is shown in the `RevisedDate` (`Edm.DateTimeOffset`) and `RevisedDateSK` (`Edm.Int32`) properties. For best performance, use the latter. It's the date *surrogate key* and it represents the date when a revision was created or it has `null` for active, incompleted revisions. If you want all the dates since the `{startDate}` inclusive, add the following filter to your query.

`RevisedDateSK eq null or RevisedDateSK gt {startDateSK}`

For example, the following query returns the number of work items for each day since the beginning of 2020. Notice that apart from the obvious filter on `DateSK` column there's a second filter on `RevisedDateSK`. Although it may seem redundant, it helps the query engine to filter out revisions that aren't in scope and significantly improves query performance.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/v1.0/WorkItemSnapshot?
>   $apply=
>     filter(DateSK gt 20200101)/
>     filter(RevisedDateSK eq null or RevisedDateSK gt 20200101)/
>     groupby(
>       (DateValue), 
>       aggregate($count as Count)
>     )
> ```
> 
> [!NOTE]
> We came up with this recommendation when we were working on Burndown widgets. Initially we defined filters only for `DateSK` but we couldn't get this query to scale well for organizations with large datasets. During query profiling, we noticed that `DateSK` doesn't filter revisions well. Only after we added a filter on `RevisedDateSK` were we able to get great performance at scale.<br/>
> ~ *Product Team*

<a id="perf-snapshots"> </a>

### ✔️ DO use weekly or monthly snapshots for trend queries that span a long time period  

By default, all the snapshot tables are modeled as *daily snapshot fact* tables. If you query for a time range it gets a value for each day. Long time ranges result in a large number of records. If you don't need such high precision, you can use weekly or even monthly snapshots. 

You can do so with other filter expressions to remove days that don't finish a given week or month. Use the `IsLastDayOfPeriod` property, which was added to Analytics with this scenario in mind. This property is of type `Microsoft.VisualStudio.Services.Analytics.Model.Period` and can determine if a day finishes in different periods (for example, weeks, months, and so on).

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EnumType Name="Period" IsFlags="true">
>   <Member Name="None" Value="0"/>
>   <Member Name="Day" Value="1"/>
>   <Member Name="WeekEndingOnSunday" Value="2"/>
>   <Member Name="WeekEndingOnMonday" Value="4"/>
>   <Member Name="WeekEndingOnTuesday" Value="8"/>
>   <Member Name="WeekEndingOnWednesday" Value="16"/>
>   <Member Name="WeekEndingOnThursday" Value="32"/>
>   <Member Name="WeekEndingOnFriday" Value="64"/>
>   <Member Name="WeekEndingOnSaturday" Value="128"/>
>   <Member Name="Month" Value="256"/>
>   <Member Name="Quarter" Value="512"/>
>   <Member Name="Year" Value="1024"/>
>   <Member Name="All" Value="2047"/>
> </EnumType>
> ```

Since `Microsoft.VisualStudio.Services.Analytics.Model.Period` is defined as an enum with flags, use the OData [`has`](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868681) operator and specify full type for the period literals.

> [!div class="tabbedCodeSnippets"]
> ```OData
> IsLastDayOfPeriod has Microsoft.VisualStudio.Services.Analytics.Model.Period'Month'
> ```

For example, the following query returns a count of work items that were defined  on the last day of each month.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItemSnapshot?
>   $apply=
>     filter(IsLastDayOfPeriod has Microsoft.VisualStudio.Services.Analytics.Model.Period'Month')/
>     groupby(
>       (DateValue), 
>       aggregate($count as Count)
>     )
> ```


<a name="question-18172"></a>
<a id="perf-tags"> </a>

### ✔️ DO use `Tags` collection property on work items when filtering by tags

You can use the  `TagNames` property with the `contains` function to determine if a work has been marked with a specific tag. This approach, however, might result in slow queries, especially when checking for multiple tags at the same time. For best performance and results, use the `Tags` navigation property instead.

For example, the following query gets all the work items that were tagged with a `{tag}`.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=Tags/any(t:t/TagName eq '{tag}')
>   &$select=WorkItemId, Title, State
> ```

This approach also works great when you need to filter on multiple tags. For example, the following query returns all work items that were tagged with `{tag1}` **or** `{tag2}`

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=Tags/any(t:t/TagName eq {tag1} or t/TagName eq {tag2})
>   &$select=WorkItemId, Title, State
> ```

You can also combine these filters with an "and" operator. For example, the following query gets all the work items that were tagged with both `{tag1}` **and** `{tag2}`

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=Tags/any(t:t/TagName eq {tag1}) and Tags/any(t:t/TagName eq {tag2})
>   &$select=WorkItemId, Title, State
> ```

<a id="perf-tagnames"> </a>

### ✔️ DO use `TagNames` property if you want to display all the tags on a work item as text

Navigation property `Tags`, described in the previous section, is great for filtering. However, working with them presents some challenges as the query returns tags in a nested collection. The data model also contains a `TagNames` primitive property (`Edm.String`), which we added to simplify tags consumption scenarios. It's a single text value that contains a list of all the tags combined with a semi-colon "; " separator. Use this property when all you care about is displaying tags together. You can combine it with the tags filters described previously.

For example, the following query gets all the work items that were tagged with a `{tag}`. It returns the work item ID, title, state, and a text representation of combined tags.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=Tags/any(t:t/TagName eq '{tag}')
>   &$select=WorkItemId, Title, State, TagNames
> ```
> 
> [!IMPORTANT]
> Property `TagNames` has a length limit of 1024 characters. It contains a set of tags that fit within that limit. If a work item has many tags or the tags are very long, then `TagNames` don't contain the full set and `Tag` navigation property should be used instead.


<a id="perf-case-sensitive"> </a>

### ❌ DON'T use `tolower` and `toupper` functions to do case-insensitive comparison

If you've worked with other systems, you might expect to use the `tolower` or `toupper` functions for the case-insensitive comparison. With Analytics, all the string comparisons are case-insensitive by default, so you don't need to apply any functions to explicitly handle it.

For example, the following query gets all the work items tagged with "QUALITY," "quality," or any other case combination of this word.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=Tags/any(t:t/TagName eq 'quality')
>   &$select=WorkItemId, Title, State, TagNames
> ```

<a id="perf-unbounded"> </a>

### ❌ DON'T use unbounded expansion with `$levels=max`

OData has the capability to expand all the levels of a hierarchical structure. For example, work item tracking has some entities where an unbounded expansion could be applied. This operation works only for organizations with a small amount of data. It doesn't scale well for larger datasets. Don't use it at all if:
- You're working with large datasets.
- You're developing a widget and you have no control over where the widget gets installed.

<a id="perf-paging"> </a>

### ✔️ DO use server-driven paging

If you ask for a set that is too large to be sent in a single response, Analytics applies paging. The response includes only a partial set and a link that allows retrieving the next partial set of items. This strategy is described in the OData specification - [OData Version 4.0. Part 1: Protocol - Server-Driven Paging](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Server-Driven_Paging). By letting the service control the paging, you get the best performance as the `skiptoken` has been carefully design for each entity to be as efficient as possible.

The link to the next page is included in the `@odata.nextLink` property.

> [!div class="tabbedCodeSnippets"]
> ```JSON
> {
>   "@odata.context": "https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/$metadata#WorkItems(*)",
>   "value": [
>     ...
>   ],
>   "@odata.nextLink":"https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?$skiptoken=12345"}
> ```
> 
> [!NOTE]
> Most existing OData clients can handle server-driven paging automatically. For example this strategy is already used by the following tools: Power BI, SQL Server Integration Services and Azure Data Factory.

<a id="perf-no-top-skip"> </a>

### ❌ DON'T use `$top` and `$skip` query options to implement client-driven paging

With other REST APIs, you might have implemented client-driven paging with `$top` and `$skip` query options. Don't use them with Analytics. There are several problems with this approach and performance is one of them. Instead, adopt the server-driven paging strategy described in the previous section.


<a id="perf-top"> </a>

### ✔️ DO use `$top` query option to limit the number of records

Query option `$top` is only discouraged when used together with `$skip`. If in your reporting scenario you need only a subset of records (for example, sample), it's fine to use `$top` query option. Additionally, if you need to rank records according to some criteria, you should always use `$top` in combination with `$orderby` to get stable result with top ranked records.


<a id="perf-small-number"> </a>

### ✔️ CONSIDER writing a query to return small number of records

Writing a query to return small number of records is the most intuitive guideline. Always aim to fetch only the data you really care about. You can achieve it by making most of the powerful filtering capabilities available in the OData query language.

<a id="perf-limit-number"> </a>
<a name="odata_query_too_wide"></a>

### ✔️ CONSIDER limiting the number of selected properties to a minimum

Some project administrators heavily customize their processes by adding custom fields. Heavy customization can lead to performance issues when fetching all the available columns on wide entities (for example, `WorkItems`). Analytics is built on top of a *Columnstore Index* technology. That means that data is both storage and query processing is column-based. So, the more properties that a query references, the more expensive it's to process. Always aim to limit the set of properties in your queries to what you really care about in your reporting scenario.

<a id="perf-filter-date"> </a>

### ✔️ CONSIDER filtering on date surrogate key properties (`DateSK` suffix)

There are many ways you can define a date filter. You can filter on the date property directly (for example, `CreatedDate`), its navigation counterpart (for example, `CreatedOnDate`), or its surrogate key representation (for example, `CreatedDate`). The last option yields the best performance and is preferred when the reporting requirements allow for it.

For example, the following query gets all the work items created since the beginning of 2020.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=CreatedDateSK ge 20200101
> ```

<a id="perf-filter-surrogate"> </a>

### ✔️ CONSIDER filtering on surrogate key columns

If you want to filter the data on the value of a related object (for example, filtering a work item on the project name), you always have two choices. You can either use the navigation property (for example, `Project/ProjectName`) or capture the *surrogate key* up-front and use it directly in the query (for example, `ProjectSK`).

If you're building a widget, we recommend you use the latter option. When the key is passed as part of the query, the number of entity sets that have to be touched is reduced and the performance improves.

For example, the following query filters `WorkItems` using `ProjectSK` property rather than `Project/ProjectName` navigation property.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=ProjectSK eq {projectSK}
> ```

<a id="perf-avoid-parent-child"> </a>
<a name="odata_query_parent_child_relations"></a>

### ❌ AVOID using `Parent`, `Children`, or `Revisions` properties in the `$filter` or `$expand` clauses

Work items are the most expensive entities in the whole data model. They have several navigation properties that you can use to access related work items: `Parent`, `Children`, `Revisions`. Every time you use them within a query, however, expect a decline in performance. Always question if you really need one of these properties and potentially update your design. 

For example, instead of expanding `Parent`, you can fetch more work items and use `ParentWorkItemId` property to reconstruct the full hierarchy client-side. Carry out such optimization on a case-by-case basis.


<a id="perf-max-size"> </a>

### ✔️ CONSIDER passing `VSTS.Analytics.MaxSize` preference in the header

When you execute a query, you don't know the number of records that the query returns. Either send another query with aggregations or follow all the next links and fetch the entire dataset. Analytics respects `VSTS.Analytics.MaxSize` preference, which lets you fail fast in those instances that the dataset is bigger than what your client can accept. 

This option is helpful in data export scenarios. To use it, you have to add `Prefer` header to your HTTP request and set `VSTS.Analytics.MaxSize` to a non-negative value. The `VSTS.Analytics.MaxSize` value represents the maximum number of records you can accept. If you set it to zero, then a default value of 200 K gets used.

For example, the following query returns work items if the dataset is smaller or equal to 1000 records.

```http
GET https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems HTTP/1.1
User-Agent: {application}
Prefer: VSTS.Analytics.MaxSize=1000
OData-MaxVersion: 4.0
Accept: application/json;odata.metadata=minimal
Host: analytics.dev.azure.com/{OrganizationName}
```
If the dataset exceeds the limit of 1000 records, the query immediately fails with the following error.

> *Query result contains 1,296 rows and it exceeds maximum allowed size of 1000. Please reduce the number of records by applying additional filters*


<a id="style"> </a>

## Query style guidelines

- [✔️ DO use `$count` virtual property in the aggregation methods](#style-count)
- [❌ AVOID using `$count` virtual property in the URL segment](#style-avoid-count)
- [❌ AVOID mixing `$apply` and `$filter` clauses in a single query](#style-avoid-mix)
- [✔️ CONSIDER using parameter aliases to separate volatile parts of the query](#style-aliases)
- [✔️ CONSIDER structuring your query to match the OData evaluation order](#style-match-order)
- [✔️ CONSIDER reviewing OData capabilities described in the metadata annotations](#style-metadata)


<a id="style-count"> </a>

### ✔️ DO use `$count` virtual property in the aggregation methods

Some entities expose `Count` property. They make some reporting scenarios easier when the data gets exported to a different storage. However, you shouldn't use these columns in aggregations in OData queries. Use  the `$count` virtual property instead.

For example, the following query returns the total number of work items.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $apply=aggregate($count as Count)
> ```

<a id="style-avoid-count"> </a>

### ❌ AVOID using `$count` virtual property in the URL segment

Although OData standard allows you to use `$count` virtual property for entity sets (for example, `_odata/v1.0/WorkItems/$count`), not all clients can interpret the response correctly. So, it's recommended to use aggregations instead.

For example, the following query returns the total number of work items.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $apply=aggregate($count as Count)
> ```

<a id="style-aliases"> </a>

### ✔️ CONSIDER using parameter aliases to separate volatile parts of the query

Parameter aliases provide an elegant solution to extract volatile parts like parameter values from the main query text. You can use them in expressions that evaluate:
- A primitive value
- A complex value
- A collection of primitive or complex values.

For more information, see [OData Version 4.0. Part 2: URL Conventions - 5.1.1.13 Parameter Aliases](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868740). Parameters are useful when the query text is used as a template that can be instantiated with user supplied values.

For example, the following query uses `@createdDateSK` parameter to separate the value from the filter expression.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=CreatedDateSK ge @createdDateSK
>   &$select=WorkItemId, Title, State
>   &@createdDateSK=20200101
> ```

<a id="style-avoid-mix"> </a>

### ❌ AVOID mixing `$apply` and `$filter` clauses in a single query

If you want to add `filter` to your query, you have two options. You can either do it with the `$filter` clause or the `$apply=filter()` combination. Each one of these options works great on its own, but combining them together might lead to some unexpected results. 

Despite the expectation one might have, OData clearly defines an order of the evaluation. Also, the `$apply` clause has priority over `$filter`. For this reason, you should choose one or another but avoid these two filter options in a single query. It's important if the queries are generated automatically.

For example, the following query first filters work items by `StoryPoint gt 5`, aggregates results by are path and finally filters the result by `StoryPoints gt 2`. With this evaluation order, the query always returns an empty set.

> [!div class="tabbedCodeSnippets"]
> ```OData
> https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
>   $filter=StoryPoints gt 2
>   $apply=
>     filter(StoryPoints gt 5)/
>     groupby(
>       (Area/AreaPath),
>       aggregate(StoryPoints with sum as StoryPoints)
>     )
> ```

<a id="style-match-order"> </a>

### ✔️ CONSIDER structuring your query to match the OData evaluation order

Because mixing `$apply` and `filter` clauses in a single query can lead to potential confusion, we recommend you structure your query clauses to match the evaluation order. 

1. `$apply`
2. `$filter`
3. `$orderby`
4. `$expand`
5. `$select`
6. `$skip`
7. `$top`


<a id="style-metadata"> </a>

### ✔️ CONSIDER reviewing OData capabilities described in the metadata annotations

When you're unsure about which OData capabilities Analytics supports, you can look up annotations in the metadata. The [OASIS Open Data Protocol (OData) Technical Committee](https://www.oasis-open.org/committees/odata/) in a [TC GitHub repository](https://github.com/oasis-tcs/odata-vocabularies/blob/master/vocabularies/Org.OData.Capabilities.V1.md) maintains a list of available annotations.

For example, the list of supported filter functions is available in `Org.OData.Capabilities.V1.FilterFunctions` annotation on the entity container.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <Annotation Term="Org.OData.Capabilities.V1.FilterFunctions">
>   <Collection>
>   <String>contains</String>
>   <String>endswith</String>
>   [...]
>   </Collection>
> </Annotation>
> ```

Another useful annotation is `Org.OData.Capabilities.V1.ExpandRestrictions`, which explains which navigation properties you can't use in the `$expand` clause. For example, the following annotation explains that `Revisions` in the `WorkItems` entity set can't be expanded.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <EntitySet Name="WorkItems" EntityType="Microsoft.VisualStudio.Services.Analytics.Model.WorkItem">
>   [...]
>   <Annotation Term="Org.OData.Capabilities.V1.ExpandRestrictions">
>     <Record>
>       <PropertyValue Property="Expandable" Bool="true"/>
>       <PropertyValue Property="NonExpandableProperties">
>         <Collection>
>           <NavigationPropertyPath>Revisions</NavigationPropertyPath>
>         </Collection>
>       </PropertyValue>
>     </Record>
>   </Annotation>
> </EntitySet>
> ```



## Related articles

- [Construct OData queries for Analytics](../analytics/analytics-query-parts.md)
- [Query work item tracking data](wit-analytics.md)
- [Aggregate data](aggregated-data-analytics.md)
- [Query trend data](querying-for-trend-data.md)
- [Query work item links](work-item-links.md)
- [Supported functions & clauses](odata-supported-features.md)  
- [Work tracking, process, and project limits](../../organizations/settings/work/object-limits.md) 