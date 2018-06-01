---
title: Account and project scope queries
titleSuffix: VSTS 
description: How to guide to query the OData Analytics service for an account or at the project-level in Visual Studio Team Services
ms.prod: devops
ms.technology: devops-analytics
ms.date: 11/13/2017
ms.reviewer: kokosins
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: 'vsts'
ms.date: 11/13/2017
---

# Project and account-scoped queries

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

Using the Analytics Service for Visual Studio Team Services (VSTS), you can construct project or account-scoped queries to return work items of interest. You run these queries directly in your browser.

Project-scope queries help answer questions about a single project whereas account-scope queries allow you to answer questions which cross project boundaries. Account scoped queries require broader user permissions or careful scoping restrictions to ensure that your query isn€™t blocked due to a lack of project permissions.


[!INCLUDE [temp](../_shared/analytics-preview.md)]

## Prerequistes 

- You will need to have a VSTS account and team project. If you don't have one, see [Sign up for a free VSTS account](../../user-guide/sign-up-invite-teammates.md).
- You will have to have defined several work items. See [Plan and track work](../../user-guide/plan-track-work.md). 
- Install the [Analytics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). To learn more about extensions, see [Install VSTS extensions](../../marketplace/install-vsts-extension.md). 


## Project-scoped queries
Base URL for project level queries:

```OData
https://{account}.analytics.visualstudio.com/{project}/_odata/v1.0
```

The following project-scoped query will return the count of work items for a specific project:  

>[!NOTE]
>If you don€™t have access to all projects in an account, it is recommended to apply a project filter to all of your queries. When pulling data into client tools such as Power BI Desktop or Excel, using the project path syntax is the best way to ensure that all your data is constrained by the given project. We recommend you use account-scoped queries only when you need to report on two or more projects.


```OData
https://{account}.analytics.visualstudio.com/ProjectA/_odata/v1.0/WorkItems/$count
```

Likewise, this query string will return the areas for a specific project:

```OData
https://{account}.analytics.visualstudio.com/ProjectA/_odata/v1.0/Areas
```

This is equivalent to the following filter on an account-scoped query:

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/Areas?
  $filter=Project/ProjectName eq 'ProjectA'
```

When using a project-scoped query with an ```$expand``` option you are not required to provide additional filters.

For example, the following project-scoped filter:

``` odata
https://{account}.analytics.visualstudio.com/ProjectA/_odata/v1.0/WorkItems?
  $expand=Parent
```

is filtered automatically to enforce security:

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=ProjectName eq 'ProjectA'
  &$expand=Parent($filter=ProjectName eq 'ProjectA')
```
##  Account-scoped queries  

The Base URL for account level queries is as shown:

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0
```

When using an account-scoped query with an ```$expand``` option you must provide an additional filter.

For example, the following account-scoped query, which uses an ```$expand``` to retrieve the children of all work items&hellip;
	
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Children
```

&hellip;requires an additional filter to verify the children are limited to the specified project:
	
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Children($filter=Project/ProjectName eq 'ProjectA')
```

The following query, which uses an ```$expand``` option to retrieve the parent of all work items&hellip;

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Parent

```

requires an additional filter to verify the parent is limited to the specified project:

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=Project/ProjectName eq 'ProjectA'
  &$expand=Parent($filter=Project/ProjectName eq 'ProjectA')
```

Without the additional filter, the request will fail if the parent of any work item references work items in a project that you do not have read access to.


## Project-level security restrictions

The Analytics Service has a few additional restrictions on query syntax related to project level security.

The `any` or `all` filters apply to the base Entity on an `$expand`.  For filters based on a Project we explicitly ignore the filter when using an `$expand`:

For example, the following query&hellip;

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=ProjectName eq 'ProjectA'
  &$expand=Children($filter=Project/ProjectName eq 'ProjectA')
```

&hellip;is interpreted as:
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=ProjectName eq 'ProjectA'
  &$expand=Children
```

and will fail if you don€™t have access to all projects.
	
To workaround the restriction, you need to add an extra expression in the `$filter`:

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $filter=ProjectName eq 'ProjectA' and Children/any(r: r/ProjectName eq 'ProjectA')
  &$expand=Children
```

Using `$level` is only supported if you have access to all projects in the collection or when using a project-scoped query:
	
```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $expand=Children($levels=2;$filter=ProjectName eq 'ProjectA')
```

Analytics does not support any cross-level reference for projects using $it alias. As an example, the following query references the root work item€™s ProjectName using $it alias, which isn€™t supported:

```OData
https://{account}.analytics.visualstudio.com/_odata/v1.0/WorkItems?
  $expand=Links(
    $expand=TargetWorkItem;
    $filter=TargetWorkItem/Project/ProjectName eq $it/Project/ProjectName)
```

## Try this next
> [!div class="nextstepaction"]
> [Query aggregate data](aggregated-data-analytics.md)

## Related articles
- [Query guidelines](odata-query-guidelines.md) 
