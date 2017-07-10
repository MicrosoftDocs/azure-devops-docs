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

# Create a bug in Visual Studio Team Services using REST APIs

Creating a new bug (or any work item) is pretty straight forward. You just need to set the field values and send a JSON-Patch object to the REST endpoint.

You can view the sample REST endpoint [here](./api/wit/work-items.md#create-work-item).

## Prerequsites
To complete this quickstart, you'll need:

* A C# editor, [Visual Studio Code](https://code.visualstudio.com/) was used for this quickstart.
* An updated version of [Node](https://nodejs.org/en/).

## Create a Team Services bug progammatically using REST APIs

There are a few things happening in the code sample below:
0. Create an array of objects to set the field values
0. Convert that array to a serialized json object
0. Send that serialized json object to the REST endpoint

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

...

public void CreateBug()
{
   string _personalAccessToken = "your personal access token";
   string _credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", _personalAccessToken)));

   Object[] patchDocument = new Object[4];

   patchDocument[0] = new { op = "add", path = "/fields/System.Title", value = "Authorization Errors" };
   patchDocument[1] = new { op = "add", path = "/fields/Microsoft.VSTS.TCM.ReproSteps", value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/en-us/library/live/hh826547.aspx" };
   patchDocument[2] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Priority", value = "1" };
   patchDocument[3] = new { op = "add", path = "/fields/Microsoft.VSTS.Common.Severity", value = "2 - High" };

   //use the httpclient
   using (var client = new HttpClient())
   {
       //set our headers
       client.DefaultRequestHeaders.Accept.Clear();
       client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
       client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", _credentials);

       //serialize the fields array into a json string
       var patchValue = new StringContent(JsonConvert.SerializeObject(patchDocument), Encoding.UTF8, "application/json-patch+json"); 

       var method = new HttpMethod("PATCH");
       var request = new HttpRequestMessage(method, "https://accountname.visualstudio.com/fabrikam/_apis/wit/workitems/$Bug?api-version=2.2") { Content = patchValue };
       var response = client.SendAsync(request).Result;

       //if the response is successfull, set the result to the workitem object
       if (response.IsSuccessStatusCode)
       {
           var result = response.Content.ReadAsStringAsync().Result;
       }
   }
}
```

Contracts used: [WorkItem](../../extend/reference/client/api/TFS/WorkItemTracking/Contracts/WorkItem.md), [JSONPatchDocument](../../extend/reference/client/api/vss/webapi/Contracts/jsonpatchdocument.md), [JSONPatchOperation](../../extend/reference/client/api/vss/webapi/Contracts/jsonpatchoperation.md)