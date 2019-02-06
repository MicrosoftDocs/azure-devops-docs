---
title: Get work items programmatically from Azure DevOps Services
description: Use REST APIs to get work items from Azure DevOps Services with queries in your own custom apps.
ms.assetid: e48d9d34-24dd-4e3e-abe8-8f5498e08083
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 06/27/2017
---

# Fetch work items with queries programmatically in Azure DevOps Services

A common scenario in Azure DevOps Services is to fetch work items using queries. This guide details how to implement that scenario programmatically using our REST APIs or .NET client libraries. 

## Prerequisites
To work on this Quickstart, you'll need the following prerequisites:

* An organization in Azure DevOps Services. If you don't have one, you can [create one for free](https://go.microsoft.com/fwlink/?LinkId=307137)
* A Personal Access Token, [find out how to create one](../get-started/authentication/PATs.md)
* A C# development environment, you can use [Visual Studio](https://visualstudio.microsoft.com/vs/)

## Create a C# project in Visual Studio

To learn about C# programming within Visual Studio, find the [Visual Studio C# programming documentation](/dotnet/csharp/programming-guide/inside-a-program/)

## C# code content
There are a few things happening in the code sample below:

1. Authenticating
    0. Create credentials using your PAT
    0. Generate the client
1. Get the work items
    0. Create the query you want to use
    0. Get the results for that query
    0. Get each of the work items by ID

## C# code snippet
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
using Microsoft.VisualStudio.Services.WebApi.Patch;
using Microsoft.VisualStudio.Services.WebApi;
using System.Net.Http.Headers;
using System.Net.Http;
using Newtonsoft.Json;
 
public class ExecuteQuery
{
    readonly string _uri;
    readonly string _personalAccessToken;
    readonly string _project;

    /// <summary>
    /// Constructor. Manually set values to match yourorganization. 
    /// </summary>
    public ExecuteQuery()
    {
        _uri = "https://dev.azure.com/{orgName}";
        _personalAccessToken = "personal access token";
        _project = "project name";
    }

    /// <summary>
    /// Execute a WIQL query to return a list of bugs using the .NET client library
    /// </summary>
    /// <returns>List of Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models.WorkItem</returns>
    public async List<WorkItem> RunGetBugsQueryUsingClientLib()
    {
        Uri uri = new Uri(_uri);
        string personalAccessToken = _personalAccessToken;
        string project = _project;

        VssBasicCredential credentials = new VssBasicCredential("", _personalAccessToken);

        //create a wiql object and build our query
        Wiql wiql = new Wiql()
        {
            Query = "Select [State], [Title] " +
                    "From WorkItems " +
                    "Where [Work Item Type] = 'Bug' " +
                    "And [System.TeamProject] = '" + project + "' " +
                    "And [System.State] <> 'Closed' " +
                    "Order By [State] Asc, [Changed Date] Desc"
        };

        //create instance of work item tracking http client
        using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(uri, credentials))
        {
            //execute the query to get the list of work items in the results
            WorkItemQueryResult workItemQueryResult = await workItemTrackingHttpClient.QueryByWiqlAsync(wiql);

            //some error handling                
            if (workItemQueryResult.WorkItems.Count() != 0)
            {
                //need to get the list of our work item ids and put them into an array
                List<int> list = new List<int>();
                foreach (var item in workItemQueryResult.WorkItems)
                {
                    list.Add(item.Id);
                }
                int[] arr = list.ToArray();

                //build a list of the fields we want to see
                string[] fields = new string[3];
                fields[0] = "System.Id";
                fields[1] = "System.Title";
                fields[2] = "System.State";

                //get work items for the ids found in query
                var workItems = await workItemTrackingHttpClient.GetWorkItemsAsync(arr, fields, workItemQueryResult.AsOf);

                Console.WriteLine("Query Results: {0} items found", workItems.Count);

                //loop though work items and write to console
                foreach (var workItem in workItems)
                {
                    Console.WriteLine("{0}          {1}                     {2}", workItem.Id, workItem.Fields["System.Title"], workItem.Fields["System.State"]);
                }

                return workItems;
            }

            return null;
        }
    }
}
```

## Next Steps

* Check out another Quickstart: [Create a bug](./create-bug-quickstart.md)
* Explore the [integrate samples](../get-started/client-libraries/samples.md)
