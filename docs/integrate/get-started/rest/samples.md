---
title: REST API samples for Azure DevOps Services and Team Foundation Server
description: REST API samples for Azure DevOps Services and Team Foundation Server.
ms.assetid: 9E17A266-051F-403F-A285-7F21D9CC52F0
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/25/2016
---

# Get started sample

## Personal Access Tokens

When using the REST APIs or .NET Libraries, you need to authenticate with Azure DevOps Services. Most samples on this site use Personal Access Tokens as they're a compact example for authenticating with the service.  However, there are a variety of authentication mechanisms available for Azure DevOps Services including ADAL, OAuth and Session Tokens.  Refer to the [Authentication](../authentication/authentication-guidance.md) section for guidance on which one is best suited for your scenario.

To get started with these samples [create a personal access token](../authentication/PATs.md).

<div class="alert alert-info">
Tip: Personal access tokens are like passwords. Keep them secret. Make sure you save them in a secure location once your personal access token is created.
</div>

If you wish to provide the personal access token through an HTTP header, you must first convert it to a Base64 string (the following example shows how to convert to Base64 using C#).  The resulting string can then be provided as an HTTP header in the format:
```
Authorization: Basic BASE64PATSTRING
``` 

## REST API

Here is an example getting a list of projects for your organization. 

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
    client.BaseAddress = new Uri("https://dev.azure.com/{OrgName}");  //url of your organization
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

## .Net Client Libraries

In this example we are using two of the .Net Client Libraries. Make sure these are referenced within your .net project.

[TFS Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)

[Microsoft Visual Studio Services Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)

Here is a simple example getting a list of projects for your organization. 

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

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Where can I get the source code for the code samples?

A: See the [https://github.com/Microsoft/vsts-restapi-samplecode](https://github.com/Microsoft/vsts-restapi-samplecode).

#### Q: Where can I find more information on the .NET library?

A: Yes, see the [overview of client libraries](../client-libraries/dotnet.md)


<!-- ENDSECTION --> 

