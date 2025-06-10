---
title: REST API samples
description: REST API samples for Azure DevOps, including personal access tokens (PATs).
ms.assetid: 9E17A266-051F-403F-A285-7F21D9CC52F0
ai-usage: ai-assisted
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
ms.custom: devx-track-dotnet
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 06/10/2025
---

# REST API samples for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Most samples in this article use personal access tokens (PATs). While PATs are a compact example for authentication, we don't recommend using them for production applications. There are many other authentication mechanisms available, including Microsoft Authentication Library, OAuth, and Session tokens. For more information to gauge which is best suited for your scenario, see [Authentication guidance](../authentication/authentication-guidance.md).

For more information, see [Azure DevOps REST API Reference](/rest/api/azure/devops/?view=azure-devops-rest-7.2&preserve-view=true) and [Get started with REST APIs](../../how-to/call-rest-api.md).

## Authentication

Authenticate with Azure DevOps when using the REST APIs or .NET Libraries by following these steps:

- **Create a PAT:**  
  Start with these samples and [create a personal access token (PAT)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

- **Preferred Microsoft Entra authentication:**  
  [!INCLUDE [use-microsoft-entra-reduce-pats](../../../includes/use-microsoft-entra-reduce-pats.md)]

- **Use Basic Authentication with a PAT:**  
  1. Convert your PAT to a Base64-encoded string in the format `username:PAT` (the username can be empty).
  2. Add the encoded string to the `Authorization` HTTP header.

   **Example using Basic Authentication with curl:**

   ```bash
   curl -u :{yourPAT} https://dev.azure.com/{organization}/_apis/projects?api-version=7.2-preview.1
   ```

## GET request samples

The following C# and curl requests return a JSON response containing the list of all projects in a specified organization:

```cs
using System.Net.Http;
using System.Net.Http.Headers;

...

//encode your personal access token                   
string credentials = Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "", personalAccessToken)));

ListOfProjectsResponse.Projects viewModel = null;

//use the httpclient
using (var client = new HttpClient())
{
    client.BaseAddress = new Uri($"https://dev.azure.com/{OrgName}/");  //url of your organization
    client.DefaultRequestHeaders.Accept.Clear();
    client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", credentials); 

    //connect to the REST endpoint            
    HttpResponseMessage response = client.GetAsync("_apis/projects?stateFilter=All&api-version=1.0").Result;
          
    //check to see if we have a successful response
    if (response.IsSuccessStatusCode)
    {
        //set the viewmodel from the content in the response
        viewModel = response.Content.ReadAsAsync<ListOfProjectsResponse.Projects>().Result;
                
        //var value = response.Content.ReadAsStringAsync().Result;
    }   
}
```


```curl 
-u username:PAT https://dev.azure.com/{organization}/_apis/projects?api-version=6.0
```

## POST request samples

The following curl request creates a new work item of the "Task" type in a specified project:

```curl 
-u username:PAT -X POST -H "Content-Type: application/json" \
-d '{"fields": {"System.Title": "New Work Item"}}' \
https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/$Task?api-version=6.0
```

## PUT request samples

The following curl request updates an existing work item by changing its state to "In Progress":

```curl
 -u username:PAT -X PATCH -H "Content-Type: application/json-patch+json" \
-d '[{"op": "add", "path": "/fields/System.State", "value": "In Progress"}]' \
https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/{id}?api-version=6.0
```

## DELETE request samples

The following curl request deletes an existing work item from a specified project:

```curl 
-u username:PAT -X DELETE \
https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/{id}?api-version=6.0
```

## .NET Client Libraries

Here, we're using two of the .NET Client Libraries. Make sure you reference the following .NET Client Libraries within your .NET project.

- [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)
- [Microsoft.Visual Studio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)

The following example gets a list of projects for your organization via .NET Client Libraries:

```cs
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;

...

//create uri and VssBasicCredential variables
Uri uri = new Uri(url);
VssBasicCredential credentials = new VssBasicCredential("", personalAccessToken);

using (ProjectHttpClient projectHttpClient = new ProjectHttpClient(uri, credentials))
{
    IEnumerable<TeamProjectReference> projects = projectHttpClient.GetProjects().Result;                    
}

```

## Error handling

## FAQs

<!-- BEGINSECTION class="md-qanda" -->

### Q: Where can I get the source code for the code samples?

A: See the [https://github.com/Microsoft/vsts-restapi-samplecode](https://github.com/Microsoft/vsts-restapi-samplecode).

### Q: Where can I find more information on the .NET library?

A: See the [overview of client libraries](../../concepts/dotnet-client-libraries.md).


<!-- ENDSECTION -->
