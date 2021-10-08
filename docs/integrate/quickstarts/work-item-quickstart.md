---
title: Get work items programmatically from Azure DevOps Services
description: Use REST APIs to get work items from Azure DevOps Services with queries in your own custom apps.
ms.assetid: e48d9d34-24dd-4e3e-abe8-8f5498e08083
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 06/27/2017
---

# Fetch work items with queries programmatically 

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

A common scenario in Azure DevOps Services is to fetch work items using queries. This article details how to implement that scenario programmatically using our REST APIs or .NET client libraries.

## Prerequisites

You must have the following items:

* An organization in Azure DevOps Services. If you don't have one, you can [create one for free](https://go.microsoft.com/fwlink/?LinkId=307137)
* A Personal Access Token, [find out how to create one](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)
* A C# development environment, you can use [Visual Studio](https://visualstudio.microsoft.com/vs/)

## Create a C# project in Visual Studio

To learn about C# programming within Visual Studio, find the [Visual Studio C# programming documentation](/dotnet/csharp/programming-guide/inside-a-program/)

## C# code content

There are a few things happening in the following code sample:

1. Authenticating
   1. Create credentials using your PAT
   2. Generate the client
2. Get the work items
   1. Create the query you want to use
   2. Get the results for that query
   3. Get each of the work items by ID

## C# code snippet

```cs
// nuget:Microsoft.TeamFoundationServer.Client
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;

public class QueryExecutor
{
    private readonly Uri uri;
    private readonly string personalAccessToken;

    /// <summary>
    ///     Initializes a new instance of the <see cref="QueryExecutor" /> class.
    /// </summary>
    /// <param name="orgName">
    ///     An organization in Azure DevOps Services. If you don't have one, you can create one for free:
    ///     <see href="https://go.microsoft.com/fwlink/?LinkId=307137" />.
    /// </param>
    /// <param name="personalAccessToken">
    ///     A Personal Access Token, find out how to create one:
    ///     <see href="https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops" />.
    /// </param>
    public QueryExecutor(string orgName, string personalAccessToken)
    {
        this.uri = new Uri("https://dev.azure.com/" + orgName);
        this.personalAccessToken = personalAccessToken;
    }

    /// <summary>
    ///     Execute a WIQL (Work Item Query Language) query to return a list of open bugs.
    /// </summary>
    /// <param name="project">The name of your project within your organization.</param>
    /// <returns>A list of <see cref="WorkItem"/> objects representing all the open bugs.</returns>
    public async Task<IList<WorkItem>> QueryOpenBugs(string project)
    {
        var credentials = new VssBasicCredential(string.Empty, this.personalAccessToken);

        // create a wiql object and build our query
        var wiql = new Wiql()
        {
            // NOTE: Even if other columns are specified, only the ID & URL are available in the WorkItemReference
            Query = "Select [Id] " +
                    "From WorkItems " +
                    "Where [Work Item Type] = 'Bug' " +
                    "And [System.TeamProject] = '" + project + "' " +
                    "And [System.State] <> 'Closed' " +
                    "Order By [State] Asc, [Changed Date] Desc",
        };

        // create instance of work item tracking http client
        using (var httpClient = new WorkItemTrackingHttpClient(this.uri, credentials))
        {
            // execute the query to get the list of work items in the results
            var result = await httpClient.QueryByWiqlAsync(wiql).ConfigureAwait(false);
            var ids = result.WorkItems.Select(item => item.Id).ToArray();

            // some error handling
            if (ids.Length == 0)
            {
                return Array.Empty<WorkItem>();
            }

            // build a list of the fields we want to see
            var fields = new[] { "System.Id", "System.Title", "System.State" };

            // get work items for the ids found in query
            return await httpClient.GetWorkItemsBatchAsync(ids, fields, result.AsOf).ConfigureAwait(false);
        }
    }

    /// <summary>
    ///     Execute a WIQL (Work Item Query Language) query to print a list of open bugs.
    /// </summary>
    /// <param name="project">The name of your project within your organization.</param>
    /// <returns>An async task.</returns>
    public async Task PrintOpenBugsAsync(string project)
    {
        var workItems = await this.QueryOpenBugs(project).ConfigureAwait(false);

        Console.WriteLine("Query Results: {0} items found", workItems.Count);

        // loop though work items and write to console
        foreach (var workItem in workItems)
        {
            Console.WriteLine(
                "{0}\t{1}\t{2}",
                workItem.Id,
                workItem.Fields["System.Title"],
                workItem.Fields["System.State"]);
        }
    }
}
```

## Related articles

- [Create a bug](./create-bug-quickstart.md)
- [Integrate samples](../get-started/client-libraries/samples.md)
