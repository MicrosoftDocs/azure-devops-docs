---
title: Integration best practices with REST APIs
titleSuffix: Azure DevOps Services 
description: Best practices when integrating with the REST APIs for Azure DevOps Services
ms.technology: devops-collab
ms.prod: devops
ms.assetid: 9E1F3FD7-E1C1-44D9-B265-5368B3BD621E
ms.manager: jillfra
ms.author: dahellem
ms.date: 01/25/2017
---

<!--- Supports FWLINK:  http://go.microsoft.com/fwlink/?LinkId=692096   --> 

# Best Practices

**Azure DevOps Services**

Azure DevOps Services, like many Software-as-a-Service solutions, uses multi-tenancy to reduce costs and to enhance scalability and performance. This leaves users vulnerable to performance issues and even outages when other users of their shared resources have spikes in their consumption. To combat these problems, Azure DevOps Services enforces [Rate Limits](./rate-limits.md) to limit the resources individuals can consume and the number of requests they can make to certain commands. When these limits are exceeded, subsequent requests may be either delayed or blocked. 

For many teams, Azure DevOps Services is one of several tools that are used to effectively run an organization. Therefore tools and integrations between services are built to improve efficiencies. For example, you may have application that automatically creates a bug in Azure DevOps Services when an error is logged. If you are not careful, automated tools can get out of control executing a high rate of requests. This will quickly cause Azure DevOps Services to enforce rate limits to your organization. To help reduce your risk of hitting the rate limits, follow these best practices when using the REST API's to integrate with Azure DevOps Services

##Push only actionable work items
Only push items into Azure DevOps Services when it is an actionable work item that your team actually going to engage on or address in the future. Keep work items out of Azure DevOps Services until absolutely necessary. 

For example, don't attempt to store telemetry data in Azure DevOps.

##Maintain your own data store
Don't add work items into Azure DevOps Services for the sake of having them all in one place. Azure DevOps Services is not designed as a data storage service. You should maintain your own data store.

##Batch your changes
Doing single operations is slow and expensive. This is the leading cause for performance issues and rate limiting. Batch your changes into a single call. See our [batch documentation](/azure/devops/integrate/previous-apis/wit/batch) and [sample code](/azure/devops/integrate/previous-apis/wit/samples) for guidance.

##Limit your revisions
Many revisions on a single work items creates bloat and causes performance problems. We recommend the following:

* Reduce your updates by batching your field changes. Don't update just one field at a time.
* If you have changes to multiple work items, batch those changes into a single post.
* Keep the number of revisions to a minimum to avoid revision limits

##Optimize queries
Optimize your queries to return a modest number of results. Complex conditions and filters can lead to long running queries. Keep your queries execution time under 30 seconds to avoid threshold failures.

####Query Performance Tips
* Place a date or range limiting clause near the top whenever possible
* Reduce the number of clauses that use the 'Ever' operator
* Reduce the number of clauses that use the 'Contains' operator, except for Tags
    - Use the 'Contains Words' operator when available
    - 'Contains' operator on long text fields is particularly expensive
* When possible, avoid the '<>' and not operators
* Avoid using the 'In Group' operator on large groups
* Minimize the number of Ors and ensure you still have top level scoping before the Ors
* Avoid using an OR clause between an 'In Group' operator and Area or Iteration Paths.
* When possible, reduce the number of overall clauses to achieve your objective
* When possible, avoid sorting on anything other than core fields such as ID
* If you want to sort on a custom field it performs best if you are using it in your filters
* If querying, specify a Project if possible. Otherwise the query gets scoped to the entire collection and could take dramatically longer than it needs to. Uncheck "Query across projects on the top right corner" of the query editor.

####Query Across projects
* If the query does require search across projects, specify which Project it is looking for.
* When possible, use "Tags" instead of "Keywords" (unless searching for partial text of a string is needed)
* Don't forget about Azure DevOps Services dashboard charts, as behind each charts are queries (and trending view impact performance the worst).

##Handle failures gracefully
Updates and queries will fail when resource limits or frequency of utilization crosses the limit threshold. For example, a query that runs longer than 30 seconds will return the following error:

```VS402335: The timeout period (30 seconds) elapsed prior to completion of the query or the server is not responding.```

When consuming the REST API's, make sure your code is designed to handle failures appropriately.

##Limit your links
Limit the number of links per work item as much as possible. We recommend that you try and keep the number of links to a minimum to avoid link limits.

> We will be enforcing work item revision and link limits in the near future. These limits will be determined by performance monitoring and customer feedback.

## Queries for Reporting
Using queries and individual get work item calls is the number one way to get rate limits enforced on your organization. Don't execute queries to return large lists of work items. Use the reporting [work item links](/rest/api/vsts/wit/reporting%20work%20item%20links) and [work item revisions](/rest/api/vsts/wit/reporting%20work%20item%20revisions) REST API's instead.

You can see our [C# Sample on GitHub](https://github.com/sferg-msft/vsts-wit-reporting-example)
