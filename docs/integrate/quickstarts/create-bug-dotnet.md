---
title: Create a bug using .NET client libraries in Visual Studio Team Services
description: Use .NET client libraries to create a bug in Visual Studio Team Services.
ms.assetid: ea2e5303-46b5-41d0-b6f5-b3d8ce515a64
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
ms.manager: douge
ms.author: elbatk
ms.date: 06/27/2017
ms.custom: get-started-article
---

# Create a bug in Visual Studio Team Services using .NET client libraries

Creating a new bug (or any work item) is pretty straight forward. You just need to set the field values and send a JSON-Patch object to the REST endpoint.

You can view the sample REST endpoint [here](./api/wit/work-items.md#create-work-item).

There are a few things happening in the code sample below:
0. Create an array of objects to set the field values
0. Convert that array to a serialized json object
0. Send that serialized json object to the REST endpoint

```c#
using System;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
using Microsoft.VisualStudio.Services.WebApi.Patch;
using Microsoft.VisualStudio.Services.Common;

...

public void CreateBug()
{
   string _personalAccessToken = "your personal access token";
   string _projectName = "fabrikam"
   Uri _uri = new Uri("https://account.visualstudio.com");
   VssBasicCredential _credentials = new VssBasicCredential("", _personalAccessToken);

   JsonPatchDocument patchDocument = new JsonPatchDocument();

   //add fields to your patch document
   patchDocument.Add(
       new JsonPatchOperation() {
           Operation = Operation.Add,
           Path = "/fields/System.Title",
           Value = "Authorization Errors"
       }
   );

   patchDocument.Add(
       new JsonPatchOperation() {
           Operation = Operation.Add,
           Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
           Value = "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live Ids) - http://msdn.microsoft.com/en-us/library/live/hh826547.aspx"
       }
   );

   patchDocument.Add(
       new JsonPatchOperation() {
           Operation = Operation.Add,
           Path = "/fields/Microsoft.VSTS.Common.Priority",
           Value = "1"
       }
   );

   patchDocument.Add(
       new JsonPatchOperation() {
           Operation = Operation.Add,
           Path = "/fields/Microsoft.VSTS.Common.Severity",
           Value = "2 - High"
       }
   );

   //use the workItemTrackingHttpClient
   using (WorkItemTrackingHttpClient workItemTrackingHttpClient = new WorkItemTrackingHttpClient(_uri, _credentials))
   {
       //create a work item
       WorkItem result = workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, _projectName, "Bug").Result;
   }
}
```

Contracts used: [WorkItem](../extend/reference/client/api/TFS/WorkItemTracking/Contracts/WorkItem.md), [JSONPatchDocument](../extend/reference/client/api/vss/webapi/Contracts/jsonpatchdocument.md), [JSONPatchOperation](../extend/reference/client/api/vss/webapi/Contracts/jsonpatchoperation.md)