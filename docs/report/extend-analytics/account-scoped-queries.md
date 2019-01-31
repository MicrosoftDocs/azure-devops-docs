---
title: Organization and project scope queries
titleSuffix: Azure DevOps Services 
description: How to guide to query the OData Analytics service for an organization or at the project-level in Azure DevOps
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: kokosins
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 11/1/2018
---

# Project and organization-scoped queries

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

Using the Analytics Service for Azure DevOps, you can construct project or organization-scoped queries to return work items of interest. You run these queries directly in your browser.

Project-scope queries help answer questions about a single project whereas organization-scope queries allow you to answer questions which cross project boundaries. Organization scoped queries require broader user permissions or careful scoping restrictions to ensure that your query isn't blocked due to a lack of project permissions.


[!INCLUDE [temp](../_shared/analytics-preview.md)]

## Prerequisites 

- Install the [Analytics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). To learn more about extensions, see [Install extensions](../../marketplace/install-extension.md). 


## Project-scoped queries
Base URL for project level queries:

::: moniker range="azure-devops"

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/
```

::: moniker-end

::: moniker range=">= azure-devops-2019"

```OData
https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/
```
>[!NOTE]
>The examples shown in this document are based on a Azure DevOps Services URL, you will need to substitute in your Azure DevOps Server URL
::: moniker-end

The following project-scoped query will return the count of work items for a specific project:  

>[!NOTE]
>If you don't have access to all projects in an organization, it is recommended to apply a project filter to all of your queries. When pulling data into client tools such as Power BI Desktop or Excel, using the project path syntax is the best way to ensure that all your data is constrained by the given project. We recommend you use organization-scoped queries only when you need to report on two or more projects.


```OData
https://analytics.dev.azure.com/{OrganizationName}/ProjectA/_odata/v1.0/WorkItems/$count
```

Likewise, this query string will return the areas for a specific project:

```OData
https://analytics.dev.azure.com/{OrganizationName}/ProjectA/_odata/v1.0/Areas
```

This is equivalent to the following filter on an organization-scoped query:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/Areas?
  $filter=Project/ProjectName eq 'ProjectA'
```

When using a project-scoped query with an ```$expand``` option you are not required to provide additional filters.

For example, the following project-scoped filter:

``` odata
https://analytics.dev.azure.com/{OrganizationName}/ProjectA/_odata/v1.0/WorkItems?
  $expand=Parent
```

is filtered automatically to enforce security:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq 'ProjectA'
  &$expand=Parent($filter=ProjectName eq 'ProjectA')
```
##  Organization-scoped queries  

The Base URL for organization level queries is as shown:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/v1.0
```

When using an organization-scoped query with an ```$expand``` option you must provide an additional filter.

For example, the following organization-scoped query, which uses an ```$expand``` to retrieve the children of all work items&hellip;
	
```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Children
```

&hellip;requires an additional filter to verify the children are limited to the specified project:
	
```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Children($filter=Project/ProjectName eq 'ProjectA')
```

The following query, which uses an ```$expand``` option to retrieve the parent of all work items&hellip;

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Parent

```

requires an additional filter to verify the parent is limited to the specified project:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Parent($filter=Project/ProjectName eq 'ProjectA')
```

Without the additional filter, the request will fail if the parent of any work item references work items in a project that you do not have read access to.


## Project-level security restrictions

The Analytics Service has a few additional restrictions on query syntax related to project level security.

The `any` or `all` filters apply to the base Entity on an `$expand`.  For filters based on a Project we explicitly ignore the filter when using an `$expand`:

For example, the following query&hellip;

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq 'ProjectA'
  &$expand=Children($filter=Project/ProjectName eq 'ProjectA')
```

&hellip;is interpreted as:
```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq 'ProjectA'
  &$expand=Children
```

and will fail if you don€™t have access to all projects.
	
To workaround the restriction, you need to add an extra expression in the `$filter`:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $filter=ProjectName eq 'ProjectA' and Children/any(r: r/ProjectName eq 'ProjectA')
  &$expand=Children
```

Using `$level` is only supported if you have access to all projects in the collection or when using a project-scoped query:
	
```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $expand=Children($levels=2;$filter=ProjectName eq 'ProjectA')
```

Analytics does not support any cross-level reference for projects using $it alias. As an example, the following query references the root work item€™s ProjectName using $it alias, which isn€™t supported:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/WorkItems?
  $expand=Links(
    $expand=TargetWorkItem;
    $filter=TargetWorkItem/Project/ProjectName eq $it/Project/ProjectName)
```

## Try this next
> [!div class="nextstepaction"]
> [Query aggregate data](aggregated-data-analytics.md)

## Related articles
- [Query guidelines](odata-query-guidelines.md) 
