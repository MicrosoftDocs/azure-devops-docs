---
title: Organization and project-scoped queries
titleSuffix: Azure DevOps 
description: Learn how to query OData Analytics for an organization or at the project-level in Azure DevOps.
ms.technology: devops-analytics 
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= azure-devops-2019'
ms.date: 09/30/2021
---

# Project and organization-scoped queries

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Using Analytics for Azure DevOps, you can construct project or organization-scoped queries to return work items of interest. You run these queries directly in your browser.

Project-scope queries help answer questions about a single project whereas organization-scope queries allow you to answer questions that cross project boundaries. Organization scoped queries require broader user permissions or careful scoping restrictions to ensure that your query isn't blocked due to a lack of project permissions.


[!INCLUDE [temp](../includes/analytics-preview.md)]


## Prerequisites

::: moniker range="azure-devops"

- You'll need to have a project in Azure DevOps. If you don't have one, see [Sign up for free](../../boards/get-started/sign-up-invite-teammates.md).
- If you haven't been added as a project member, [get added now](../../organizations/accounts/add-organization-users.md). 
- Have the **View Analytics** permission set to **Allow**. See [Grant permissions  to access Analytics](../powerbi/analytics-security.md).
- You'll have to have defined several work items. See [Plan and track work](../../boards/get-started/plan-track-work.md).  

::: moniker-end


::: moniker range=">= azure-devops-2019 < azure-devops"

- [Verify that Analytics](../dashboards/analytics-extension.md)] is installed, and if not, then enable it. You must be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to add extensions or enable the service. 
- You must be a member of a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md). 
- If you haven't been added as a project member, [get added now](../../organizations/security/add-users-team-project.md).  
- Have the **View Analytics** permission set to **Allow**. See [Grant permissions  to access Analytics](../powerbi/analytics-security.md).
- You'll have to have defined several work items. See [Plan and track work](../../boards/get-started/plan-track-work.md). 

::: moniker-end

<a id="project-scope" />

## Project-scoped queries

You construct a query by entering the OData URL into a [supported web browser](/azure/devops/server/compatibility#supported-browsers).  

The base URL for project level queries is:

::: moniker range="azure-devops"

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/
```
In the examples provided, replace `{OrganizationName}` and `{ProjectName}` with your organization name and the name of the project that you want to query. 

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

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

[!INCLUDE [temp](../includes/api-versioning.md)]

<a id="work-item-count" />

### Return a count of work items 

For example, the following project-scoped query will return the count of work items for a specific project:  

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v1.0/WorkItems/$count
```


> [!NOTE]
> If you don't have access to all projects in an organization, it is recommended to apply a project filter to all of your queries. When pulling data into client tools such as Power BI Desktop or Excel, using the project path syntax is the best way to ensure that all your data is constrained by the given project. We recommend you use organization-scoped queries only when you need to report on two or more projects.

### Return the areas defined for a project 

Likewise, the following query string will return the areas for a specific project:

```OData
https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/v1.0/Areas
```

It's equivalent to the following filter on an organization-scoped query:

```OData
https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/Areas?
  $filter=Project/ProjectName eq '{ProjectName}'
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

The `any` or `all` filters apply to the base Entity on an `$expand`.  For filters based on a Project, we explicitly ignore the filter when using an `$expand`:

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

Analytics doesn't support any cross-level reference for projects using $it alias. As an example, the following query references the root work item's ProjectName using $it alias, which isn't supported:

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
