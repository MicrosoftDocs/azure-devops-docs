---
title: Create a bug using .NET client libraries in Visual Studio Team Services
description: Use .NET client libraries to create a bug in Visual Studio Team Services (VSTS).
ms.assetid: ea2e5303-46b5-41d0-b6f5-b3d8ce515a64
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 06/27/2017
ms.custom: get-started-article
---
# Create a bug in Visual Studio Team Services using .NET client libraries

Creating a new bug (or any work item) is pretty straight forward. You just need to set the field values and send a JSON-Patch object to the REST endpoint.

## Prerequisites
To work on this Quickstart, you'll need the following prerequisites:

* A Visual Studio Team Services (VSTS) account. If you don't have one, you can [create one for free](https://go.microsoft.com/fwlink/?LinkId=307137)
* A Personal Access Token, [find out how to create one](../get-started/authentication/PATs.md)
* A C# development environment, you can use [Visual Studio](https://www.visualstudio.com/vs/)

## Create a C# project in Visual Studio

To learn about C# programming within Visual Studio, find the [Visual Studio C# programming documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/)

## C# code content
There are a few things happening in the code sample below:

0. Authentication
    0. Creating credentials using your PAT
    0. Creating a VSSConnection with your VSTS URI and the credentials
0. Retrieving the client using your VSSConnection
0. Creating the bug
    0. Create an array of objects to set the field values
    0. Convert that array to a serialized json object
    0. Send that serialized json object to the REST endpoint

## C# code snippet
```csharp
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

 
public class CreateBug 
{
    readonly string _uri;
    readonly string _personalAccessToken;
    readonly string _project;

    /// <summary>
    /// Constructor. Manually set values to match your account.
    /// </summary>
    public CreateBug()
    {
        _uri = "https://accountname.visualstudio.com";
        _personalAccessToken = "personal access token";
        _project = "project name";
    }

    /// <summary>
    /// Create a bug using the .NET client library
    /// </summary>
    /// <returns>Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models.WorkItem</returns>    
    public WorkItem CreateBugUsingClientLib()
    {
        Uri uri = new Uri(_uri);
        string personalAccessToken = _personalAccessToken;
        string project = _project;

        VssBasicCredential credentials = new VssBasicCredential("", _personalAccessToken);
        JsonPatchDocument patchDocument = new JsonPatchDocument();

        //add fields and their values to your patch document
        patchDocument.Add(
            new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/System.Title",
                Value = "Authorization Errors"
            }
        );

        patchDocument.Add(
            new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
                Value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http:// msdn.microsoft.com/en-us/library/live/hh826547.aspx"
            }
        );

        patchDocument.Add(
            new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/Microsoft.VSTS.Common.Priority",
                Value = "1"
            }
        );

        patchDocument.Add(
            new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/Microsoft.VSTS.Common.Severity",
                Value = "2 - High"
            }
        );
        VssConnection connection = new VssConnection(uri, credentials);
        WorkItemTrackingHttpClient workItemTrackingHttpClient = connection.GetClient<WorkItemTrackingHttpClient>();

        try
        {
            WorkItem result = workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, project, "Bug").Result;

            Console.WriteLine("Bug Successfully Created: Bug #{0}", result.Id);

            return result;
        }
        catch (AggregateException ex)
        {
            Console.WriteLine("Error creating bug: {0}", ex.InnerException.Message);
            return null;
        }
    }
}
```

## Next steps

* Check out another Quickstart: [Get a list of work items using queries](./work-item-quickstart.md)
* Explore the [integrate samples](../get-started/client-libraries/samples.md)
