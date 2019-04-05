---
title: Organization and project scope queries
titleSuffix: Azure DevOps 
description: How to guide to query the OData Analytics service for an organization or at the project-level in Azure DevOps
ms.prod: devops
ms.technology: devops-analytics
ms.reviewer: kokosins
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 04/05/2019
---

# Project and organization-scoped queries

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

Using the Analytics Service for Azure DevOps, you can construct project or organization-scoped queries to return work items of interest. You run these queries directly in your browser.

Project-scope queries help answer questions about a single project whereas organization-scope queries allow you to answer questions which cross project boundaries. Organization scoped queries require broader user permissions or careful scoping restrictions to ensure that your query isn't blocked due to a lack of project permissions.


[!INCLUDE [temp](../_shared/analytics-preview.md)]


## Prerequisites

::: moniker range="azure-devops"
- You will need to have a project in Azure DevOps. If you don't have one, see [Sign up for free](../../boards/get-started/sign-up-invite-teammates.md).
- If you haven't been added as a project member, [get added now](/azure/devops/organizations/accounts/add-organization-users-from-user-hub). 
- Have the **View Analytics** permission set to **Allow**. See [Grant permissions  to access the Analytics Service](/azure/devops/report/powerbi/analytics-security).
- You will have to have defined several work items. See [Plan and track work](../../boards/get-started/plan-track-work.md).  
::: moniker-end

::: moniker range="azure-devops-2019"
- Install the [Analytics Marketplace extension](../dashboards/analytics-extension.md). To learn more about extensions, see [Install extensions](../../marketplace/install-extension.md). 
- You must be a member of a project. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project). 
- If you haven't been added as a project member, [get added now](/azure/devops/organizations/security/add-users-team-project).  
- Have the **View Analytics** permission set to **Allow**. See [Grant permissions  to access the Analytics Service](/azure/devops/report/powerbi/analytics-security).
- You will have to have defined several work items. See [Plan and track work](../../boards/get-started/plan-track-work.md). 
::: moniker-end

<a id="project-scope" />

## Project-scoped queries

You construct a query by entering the OData URL into a [supported web browser](/tfs/server/compatibility#supported-browsers).  

The base URL for project level queries is:

::: moniker range="azure-devops"

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/
```
In the examples provided, replace `{OrganizationName}` and `{ProjectName}` with your organization name and the name of the project that you want to query. 

::: moniker-end

::: moniker range="azure-devops-2019"

```OData
https://{servername}:{port}/tfs/{OrganizationName}/{ProjectName}/_odata/{version}/
```

> [!NOTE]
> The examples shown in this document are based on a Azure DevOps Services URL, you will need to substitute in your Azure DevOps Server URL.

In the examples provided, make the following replacements:
- `analytics.dev.azure.com` with `{ServerName}:{Port}/tfs/`
- `{OrganizationName}` with your project collection name (default is DefaultCollection) 
- `{ProjectName}` with the name of the project that you want to query. 

::: moniker-end

[!INCLUDE [temp](../_shared/api-versioning.md)]

<a id="work-item-count" />

### Return a count of work items 

For example, the following project-scoped query will return the count of work items for a specific project:  

```OData
https://analytics.dev.azure.com/{OrganizationName}/ProjectA/_odata/v1.0/WorkItems/$count
```


> [!NOTE]
> If you don't have access to all projects in an organization, it is recommended to apply a project filter to all of your queries. When pulling data into client tools such as Power BI Desktop or Excel, using the project path syntax is the best way to ensure that all your data is constrained by the given project. We recommend you use organization-scoped queries only when you need to report on two or more projects.

### Return the areas defined for a project 

Likewise, the following query string will return the areas for a specific project:

```OData
https://analytics.dev.azure.com/{OrganizationName}/ProjectA/_odata/v1.0/Areas
```

This is equivalent to the following filter on an organization-scoped query:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/Areas?
  $filter=Project/ProjectName eq 'ProjectA'
```

<a id="expand-option" />

### Use of the $expand option 

When using a project-scoped query with an ```$expand``` option you aren't required to provide additional filters.

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

<a id="org-scope" />

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

<a id="parent-work-items" />

### Return the parent of all work items

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

<a id="project-level-security" />

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

and will fail if you don't have access to all projects.
	
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

Analytics does not support any cross-level reference for projects using $it alias. As an example, the following query references the root work item's ProjectName using $it alias, which isn't supported:

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
