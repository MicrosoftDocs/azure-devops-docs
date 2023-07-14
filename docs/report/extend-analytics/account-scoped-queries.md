---
title: Project and organization or collection-scoped OData queries
titleSuffix: Azure DevOps 
description: Learn how to query OData Analytics for a project or an organization or collection in Azure DevOps.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 12/13/2022
---

# Project and organization-scoped queries

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Using Analytics for Azure DevOps, you can construct queries that are scoped to a project or an organization or collection.  You can run these queries directly in your browser or within Power BI. 

Project-scope queries help answer questions about a single project whereas organization and collection scoped queries allow you to answer questions that cross project boundaries. Organization and collection scoped queries require broader user permissions or careful scoping restrictions to ensure that your query isn't blocked due to a lack of permissions.

[!INCLUDE [temp](../includes/analytics-preview.md)]

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

> [!IMPORTANT]
> If you don't have access to all projects in an organization, it is recommended that you apply a project filter to all of your queries. When pulling data into client tools such as Power BI or Excel, using the project path syntax is the best way to ensure that all your data is constrained by the given project. We recommend you use organization-scoped or collection-scoped queries only when you need to report on two or more projects.


<a id="project-scope" />

## Project-scoped queries

You construct a query by entering the OData URL into a [supported web browser](/azure/devops/server/compatibility#supported-browsers).  

The base URL for a project-level OData query is as shown in the following syntax. 


# [**Cloud** (Azure DevOps Services](#tab/cloud)

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/
```
In the examples provided, replace `{OrganizationName}` and `{ProjectName}` with your names of your organization and project that you want to query. 

# [**On-premises** (Azure DevOps Server](#tab/on-premises)

```OData
https://{servername}:{port}/tfs/{CollectionName}/{ProjectName}/_odata/{version}/
```

In the examples provided, make the following replacements:
- `analytics.dev.azure.com` with `{ServerName}:{Port}/tfs/`
- `{CollectionName}` with your project collection name (default is `DefaultCollection`) 
- `{ProjectName}` with the name of the project that you want to query. 

***


> [!NOTE]
> The remaining examples provided in this article are based on a Azure DevOps Services URL. You will need to substitute in your Azure DevOps Server URL to exercise the examples.  


<a id="work-item-count" />

### Return a count of work items 

For example, the following project-scoped query returns the count of work items for a specific project.  

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v1.0/WorkItems/$count
```

For example, a query of the Fabrikam Fiber project returns a count of 7126 work items. Deleted work items aren't included in the count.   
```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v1.0/WorkItems/$count

7126
```
 

### Return project Area Paths

Likewise, the following query string will return the areas for a specific project:

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v1.0/Areas
```

It's equivalent to the following filter on an organization-scoped query:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/Areas?
  $filter=Project/ProjectName eq '{ProjectName}'
```


For example, a query of the Fabrikam Fiber project returns all properties defined for an Area Path as no `$select` operator is applied in the query. 
```OData
https://analytics.dev.azure.com/fabrikam/Fabrikam Fiber/_odata/v1.0/Areas
```

The following example shows the data returned for a single Area Path.

```OData
ProjectSK	"56af920d-393b-4236-9a07-24439ccaa85c"
AreaSK	"26be05fd-e68a-4fcb-833f-497f6bee45f2"
AreaId	"26be05fd-e68a-4fcb-833f-497f6bee45f2"
AreaName	"Service Delivery"
Number	55373
AreaPath	"Fabrikam Fiber\\Service Delivery"
AreaLevel1	"Fabrikam Fiber"
AreaLevel2	"Service Delivery"
AreaLevel3	null
AreaLevel4	null
AreaLevel5	null
AreaLevel6	null
AreaLevel7	null
AreaLevel8	null
AreaLevel9	null
AreaLevel10	null
AreaLevel11	null
AreaLevel12	null
AreaLevel13	null
AreaLevel14	null
Depth	1
``` 

<a id="expand-option" />

### Use of the $expand option 

When using a project-scoped query with an `$expand` option, you aren't required to provide other filters.

For example, the following project-scoped filter:

``` odata
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v1.0/WorkItems?
  $expand=Parent
```

is filtered automatically to enforce security:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq '{ProjectName}'
  &$expand=Parent($filter=ProjectName eq '{ProjectName}')
```

<a id="org-scope" />

##  Organization-scoped queries  

The Base URL for organization level queries is as shown:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/v1.0
```

When using an organization-scoped query with an `$expand` option, you must provide another filter.

For example, the following organization-scoped query, which uses an `$expand` to retrieve the children of all work items.

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq '{ProjectName}'
  &$expand=Children
```

It requires another filter to verify the children are limited to the specified project:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq '{ProjectName}'
  &$expand=Children($filter=Project/ProjectName eq '{ProjectName}')
```
<!---
In the following example, the 

https://analytics.dev.azure.com/msft-skilling/_odata/v1.0/WorkItems?
  $filter=Project/ProjectName eq 'Content'
  &$expand=Children($filter=Project/ProjectName eq 'Content')
  &$select=WorkItemId, Title, State
  &$top=10

-->

<a id="parent-work-items" />

### Return the parent of all work items

The following query, which uses an `$expand` option to retrieve the parent of all work items.

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq '{ProjectName}'
  &$expand=Parent
```

It requires another filter to verify the parent is limited to the specified project:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq '{ProjectName}'
  &$expand=Parent($filter=Project/ProjectName eq '{ProjectName}')
```

Without the other filter, the request will fail if the parent of any work item references work items in a project that you don't have read access to.

<a id="project-level-security" />

## Project-level security restrictions

Analytics has a few more restrictions on query syntax related to project level security.

The `any` or `all` filters apply to the base entity on an `$expand`.  For filters based on a project, we explicitly ignore the filter when using an `$expand`:

For example, the following query:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq '{ProjectName}'
  &$expand=Children($filter=Project/ProjectName eq '{ProjectName}')
```

Is interpreted as:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq '{ProjectName}'
  &$expand=Children
```

and will fail if you don't have access to all projects.

To work around the restriction, you need to add an extra expression in the `$filter`:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq '{ProjectName}' and Children/any(r: r/ProjectName eq '{ProjectName}')
  &$expand=Children
```

Using `$level` is only supported if you have access to all projects in the collection or when using a project-scoped query:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $expand=Children($levels=2;$filter=ProjectName eq '{ProjectName}')
```

Analytics doesn't support any cross-level reference for projects using the `$it` clause. As an example, the following query references the root work item's `ProjectName` using `$it` alias, which isn't supported:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $expand=Links(
    $expand=TargetWorkItem;
    $filter=TargetWorkItem/Project/ProjectName eq $it/Project/ProjectName)
```

## Next step

> [!div class="nextstepaction"]
> [Query aggregate data](aggregated-data-analytics.md)

## Related articles

- [Query guidelines](odata-query-guidelines.md)
