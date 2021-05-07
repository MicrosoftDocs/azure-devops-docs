---
title: Integration best practices with REST APIs
titleSuffix: Azure DevOps Services 
description: Best practices when integrating with the REST APIs for Azure DevOps Services
ms.technology: devops-ecosystem
ms.assetid: 9E1F3FD7-E1C1-44D9-B265-5368B3BD621E
ms.author: liho
ms.date: 07/15/2020
---

<!--- Supports FWLINK:  https://go.microsoft.com/fwlink/?LinkId=692096   --> 

# Best integration practices

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Azure DevOps Services, like many Software-as-a-Service solutions, uses multi-tenancy to reduce costs and to enhance scalability and performance.  This multi-tenancy leaves users vulnerable to performance issues and even outages when other users of their shared resources have spikes in their consumption. To combat these problems, Azure DevOps Services enforces [Rate Limits](./rate-limits.md) to limit the resources individuals can consume and the number of requests they can make to certain commands. When these limits are exceeded, later requests may be either delayed or blocked. 

For many teams, Azure DevOps Services is one of several tools that are used to effectively run an organization. So, tools and integrations between services get built to improve efficiencies. For example, you may have application that automatically creates a bug in Azure DevOps Services when an error gets logged. If you aren't careful, automated tools can get out of control executing a high rate of requests. These requests will quickly cause Azure DevOps Services to enforce rate limits to your organization. To help reduce your risk of hitting the rate limits, follow these best practices when using the REST APIs to integrate with Azure DevOps Services

## Push only actionable work items
Only push actionable items into Azure DevOps Services that your team plans to engage on or address in the future. Keep work items out of Azure DevOps Services until necessary. 

For example, don't attempt to store telemetry data in Azure DevOps.

## Maintain your own data store
Don't add work items into Azure DevOps Services for the sake of having them all in one place. Azure DevOps Services isn't designed as a data storage service. Maintain your own data store.

## Batch your changes
Doing single operations is slow and expensive, which is the leading cause for performance issues and rate limiting. Batch your changes into a single call. See our [batch documentation](/previous-versions/azure/devops/integrate/previous-apis/wit/batch) and [sample code](/previous-versions/azure/devops/integrate/previous-apis/wit/samples) for guidance.

## Limit your revisions
Many revisions on a single work item create bloat and cause performance problems. We recommend doing the following tasks:

* Reduce your updates by batching your field changes. Don't update just one field at a time.
* If you have changes to multiple work items, batch those changes into a single post.
* Keep the number of revisions to a minimum to avoid revision limits

## Optimize queries
Optimize your queries to return a modest number of results. Complex conditions and filters can lead to long running queries. Keep your queries execution time under 30 seconds to avoid threshold failures.

#### Query performance tips
* Place a date or range-limiting clause near the top whenever possible
* Reduce the number of clauses that use the 'Ever' operator
* Reduce the number of clauses that use the 'Contains' operator, except for Tags
    - Use the 'Contains Words' operator when available
    - 'Contains' operator on long text fields is expensive
* When possible, avoid the '<>' and not operators
* Avoid using the 'In Group' operator on large groups
* Minimize the amount of 'Or' operators used and ensure you still have top-level scoping before using
* Avoid using an OR clause between an 'In Group' operator and Area or Iteration Paths
* When possible, reduce the number of overall clauses to achieve your goal
* When possible, avoid sorting on anything other than core fields such as ID
* If you want to sort on a custom field, it does best if you're using it in your filters
* If querying, specify a Project if possible. Otherwise the query gets scoped to the entire collection and could take dramatically longer than it needs to. Uncheck "Query across projects on the top-right corner" of the query editor

#### Query across projects
* If the query requires search across projects, specify which Project it's looking for
* When possible, use "Tags" instead of "Keywords" (unless searching for partial text of a string is needed)
* Don't forget about Azure DevOps Services dashboard charts, as behind each chart are queries (and trending view impact performance the worst)

## Handle failures gracefully
Updates and queries fail when resource limits or frequency of utilization crosses the limit threshold. For example, a query that runs longer than 30 seconds will return the following error:

```VS402335: The timeout period (30 seconds) elapsed prior to completion of the query or the server is not responding.```

When you're consuming the REST APIs, make sure your code is designed to handle failures appropriately.

## Limit your links
Limit the number of links per work item as much as possible. We recommend that you try to keep the number of links to a minimum to avoid link limits.

> [!IMPORTANT]
> We'll enforce work item revision and link limits in the near future. These limits will be determined by performance monitoring and customer feedback.

## Queries for reporting
Using queries and individual get work item calls is the number one way to get rate limits enforced on your organization. Don't execute queries to return large lists of work items. Use the reporting [work item links](/rest/api/azure/devops/wit/reporting%20work%20item%20links) and [work item revisions](/rest/api/azure/devops/wit/reporting%20work%20item%20revisions) REST APIs instead.

For more information, see our [C# Sample on GitHub](https://github.com/sferg-msft/vsts-wit-reporting-example).

## Related articles

- [.NET client libraries](dotnet-client-libraries.md)
- [Migration guide](migration-guide.md)
- [Service hooks](service-hooks.md)
- [REST API versioning](rest-api-versioning.md)