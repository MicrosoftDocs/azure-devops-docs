---
title: Create a bug using REST APIs in Visual Studio Team Services
description: Use REST APIs to create a bug in Visual Studio Team Services.
ms.assetid: 30efe2e5-2150-4640-adf3-c4f0f5ef9e16
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
ms.manager: douge
ms.author: elbatk
ms.date: 06/27/2017
ms.custom: get-started-article
---

# Create a bug in Visual Studio Team Services using HTTP calls with REST

Creating a new bug (or any work item) is pretty straight forward. You just need to set the field values and send a JSON-Patch object to the REST endpoint.

You can view the sample REST endpoint (Create Work Item) [here](https://review.docs.microsoft.com/en-us/rest/api/vsts/workitemtracking/createworkitem?branch=master).

## Prerequisites
To work on this Quickstart, you'll need the following prerequisites:

* A Visual Studio Team Services account
* A Personal Access Token, [find out how to create one](../get-started/authentication/PATs.md)
* A C# development environment, you can use [Visual Studio](https://www.visualstudio.com/vs/)


## Content  

There are a few things happening in the code sample below:
0. Authentication
    0. Creating credentials using your PAT
    0. Creating a VSSConnection with your VSTS URI and the credentials
0. Retrieving the client using your VSSConnection
0. Creating the bug
    0. Create an array of objects to set the field values
    0. Convert that array to a serialized json object
    0. Send that serialized json object to the REST endpoint



## C# Code
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    /// Create a bug using direct HTTP
    /// </summary>     
    public WorkItem CreateBugUsingHTTP()
    {
        string uri = _uri;
        string personalAccessToken = _personalAccessToken;
        string project = _project;
        string credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", personalAccessToken)));

        Object[] patchDocument = new Object[4];

        patchDocument[0] = new { op = "add", path = "/fields/System.Title", value = "Authorization Errors" };
        patchDocument[1] = new { op = "add", path = "/fields/Microsoft.VSTS.TCM.ReproSteps", value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/en-us/library/live/hh826547.aspx" };
        patchDocument[2] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Priority", value = "1" };
        patchDocument[3] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Severity", value = "2 - High" };

        using (var client = new HttpClient())
        {
            //set our headers
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", credentials);

            //serialize the fields array into a json string
            var patchValue = new StringContent(JsonConvert.SerializeObject(patchDocument), Encoding.UTF8, "application/json-patch+json");

            var method = new HttpMethod("PATCH");
            var request = new HttpRequestMessage(method, uri + "/" + project + "/_apis/wit/workitems/$Bug?api-version=2.2") { Content = patchValue };
            var response = client.SendAsync(request).Result;

            //if the response is successful, set the result to the workitem object
            if (response.IsSuccessStatusCode)
            {
                var workItem = response.Content.ReadAsAsync<WorkItem>().Result;

                Console.WriteLine("Bug Successfully Created: Bug #{0}", workItem.Id);
                return workItem;                    
            }
            else
            {
                Console.WriteLine("Error creating bug: {0}", response.Content);
                return null;
            }
        }
    }
}
```

Contracts used: [WorkItem](../../extend/reference/client/api/TFS/WorkItemTracking/Contracts/WorkItem.md), [JSONPatchDocument](../../extend/reference/client/api/vss/webapi/Contracts/jsonpatchdocument.md), [JSONPatchOperation](../../extend/reference/client/api/vss/webapi/Contracts/jsonpatchoperation.md)

## Next Steps

* Check out another Quickstart: [Get a list of work items using queries](./work-item-rest.md)
* Explore the [REST API](../get-started/rest/samples.md) or [.NET client library](../get-started/client-libraries/samples.md) samples