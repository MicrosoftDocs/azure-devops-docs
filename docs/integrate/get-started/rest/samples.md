---
title: REST API samples
description: REST API samples for Azure DevOps, including personal access tokens (PATs).
ms.assetid: 9E17A266-051F-403F-A285-7F21D9CC52F0
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.custom: 
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/06/2020
---

# Get started sample

[!INCLUDE [version-all](../../../includes/version-all.md)]

## Personal access tokens

Authenticate with Azure DevOps when you're using the REST APIs or .NET Libraries. Most samples in this article use PATs. PATs are a compact example for authentication. There are many other authentication mechanisms available, including Microsoft Authentication Library, OAuth, and Session tokens. For more information to gauge which is best suited for your scenario, see [Authentication](../authentication/authentication-guidance.md).

Get started with these samples and [create a personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

> [!TIP]
> Personal access tokens are like passwords. Keep them secret. Make sure you save them in a secure location once your personal access token is created.

To provide the personal access token through an HTTP header, first convert it to a Base64 string. The following example shows how to convert to Base64 using C#.  The resulting string can then be provided as an HTTP header in the following format:

``
Authorization: Basic BASE64USERNAME:PATSTRING
``

## REST API

See the following example of getting a list of projects for your organization via REST API. 

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
    client.BaseAddress = new Uri($"https://dev.azure.com/{OrgName}"/);  //url of your organization
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

## .NET Client Libraries

Here, we're using two of the .NET Client Libraries. Make sure these .NET Client Libraries are referenced within your .NET project.

- [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)
- [Microsoft.Visual Studio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)

See the following example of getting a list of projects for your organization via .NET Client Libraries.

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

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Q: Where can I get the source code for the code samples?

A: See the [https://github.com/Microsoft/vsts-restapi-samplecode](https://github.com/Microsoft/vsts-restapi-samplecode).

### Q: Where can I find more information on the .NET library?

A: See the [overview of client libraries](../../concepts/dotnet-client-libraries.md).


<!-- ENDSECTION -->
