---
title: Integration best practices with REST APIs
titleSuffix: Azure DevOps Services 
description: Best practices for integrating Azure DevOps Services with REST APIs.
ms.subservice: azure-devops-ecosystem
ms.assetid: 9E1F3FD7-E1C1-44D9-B265-5368B3BD621E
ms.custom: content-health, FY22Q3, freshness
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 05/31/2022
---

<!--- Supports FWLINK:  https://go.microsoft.com/fwlink/?LinkId=692096   --> 

# Best integration practices

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Tools and integrations between services get built to improve efficiencies for Azure DevOps Services. If you aren't careful, automated tools can get out of control executing a high rate of requests. The requests quickly cause Azure DevOps Services to enforce [rate limits](./rate-limits.md) to your organization. To help reduce your risk of hitting the rate limits, follow these best practices when you're using the REST APIs to integrate with Azure DevOps Services. 

## Push only actionable work items

Only push actionable items into Azure DevOps Services that your team plans to engage on or address in the future. Keep work items out of Azure DevOps Services until necessary. For example, don't attempt to store telemetry data in Azure DevOps.

## Maintain your own data store

Don't add work items into Azure DevOps Services for the sake of having them all in one place. Azure DevOps Services isn't designed as a data storage service. Maintain your own data store.

## Batch your changes
Doing single operations is slow and expensive, which is the leading cause for performance issues and rate limiting. Batch your changes into a single call. See our [batch documentation](/previous-versions/azure/devops/integrate/previous-apis/wit/batch) and [sample code](/previous-versions/azure/devops/integrate/previous-apis/wit/samples) for guidance.

## Limit your revisions

Many revisions on a single work item create bloat and cause performance problems. We recommend doing the following tasks:

* Reduce your updates by batching your field changes. Don't update just one field at a time.
* If you have changes to multiple work items, batch those changes into a single action.
* Keep the number of revisions to a minimum to avoid revision limits.

> [!NOTE]   
> A work item revision limit of 10,000 is in effect for updates made through the REST API for Azure DevOps Services. This limit restricts updates from the REST API, however, updates from the web portal are not affected.  


## Optimize queries

Optimize your queries to return a modest number of results. Complex conditions and filters can lead to long-running queries. Keep your queries execution time under 30 seconds to avoid threshold failures.

#### Query performance tips

* Place a date or range-limiting clause near the top of a query whenever possible.
* Reduce the number of clauses that use the *Ever* operator.
* Reduce the number of clauses that use the *Contains* operator, except for Tags.
    - Use the *Contains Words* operator when available.
    - Don't use the *Contains* operator on long text fields, as it's expensive.
* Avoid the '<>' and not operators when possible.
* Avoid using the *In Group* operator for large groups.
* Minimize the amount of *Or* operators and ensure you still have top-level scoping before using.
* Avoid using an *OR* clause between an *In Group* operator and Area or Iteration Paths.
* Reduce the number of overall clauses to achieve your goal when possible.
* Avoid sorting on anything other than core fields, such as *ID*, when possible.
* If you want to sort on a custom field, use it in your filters.
* Specify a project if possible. Otherwise, the query gets scoped to the entire collection and could take dramatically longer than it needs to. Uncheck "Query across projects on the top-right corner" of the query editor.

#### Query across projects

* If the query requires search across projects, specify which project you're looking for.
* Use *tags* instead of *keywords* when possible, unless you're searching for partial text of a string.

## Handle failures gracefully

Updates and queries fail when resource limits or frequency of utilization crosses the limit threshold. For example, a query that runs longer than 30 seconds returns the following error:

```VS402335: The timeout period (30 seconds) elapsed prior to completion of the query or the server is not responding.```

When you're consuming the REST APIs, make sure you design your code to handle failures appropriately.

## Limit your links

Limit the number of links per work item as much as possible, to avoid enforcement of link limits.

> [!IMPORTANT]
> We'll enforce work item revision and link limits in the near future. These limits will be determined by performance monitoring and customer feedback.

## Don't use queries for reporting

Using queries and individual *get work item* calls is the top way to get rate limits enforced on your organization. Don't execute queries to return large lists of work items. Use the reporting [work item links](/rest/api/azure/devops/wit/reporting%20work%20item%20links) and [work item revisions](/rest/api/azure/devops/wit/reporting%20work%20item%20revisions) REST APIs instead.

For more information, see our [C# sample on GitHub](https://github.com/sferg-msft/vsts-wit-reporting-example).

## Related articles

- [.NET client libraries](dotnet-client-libraries.md)
- [Migration guide](migration-guide.md)
- [Service hooks](service-hooks.md)
- [REST API versioning](rest-api-versioning.md)
