---
ms.prod: devops
ms.technology: devops-ecosystem
title: Working with URLs in extensions | Azure DevOps Services
description: Best practices for working with URLs in Azure DevOps extensions and integrations
ms.assetid: 1f27f05e-2c55-4873-ab4a-8c9c0947a7fe
ms.topic: conceptual
ms.manager: douge
monikerRange: 'vsts'
ms.author: wismythe
author: willsmythe
ms.date: 08/31/2018
---

# Best practices for working with URLs in Azure DevOps extensions

Azure DevOps Services organizations are accessible to users, tools (like Git), extensions, and integrations via either of the following URLs:

* `https://dev.azure.com/{org}` (new)
* `https://{org}.visualstudio.com` (legacy)

Regardless of when the organization was created, both URL forms are supported.

When users navigate to the root legacy URL of an organization (e.g. `https://fabrikam.visualstudio.com`), they will be automatically redirected to the new URL (e.g. `https://dev.azure.com/fabrikam`). 

As the developer of an extension, integration, or tool that interacts with Azure DevOps Services, it is important to understand how to properly handle URLs provided to you and how to properly build URLs to APIs and resources.
    
## URLs returned in REST APIs

When a REST API request (or any web request) is made for a resource in an organization (regardless of when the organization was created), URLs returned in the response will use the same base URL as the requesting URL. This ensures clients making REST API calls using legacy URLs will continue to get back URLs in the same form. 

For example, when the Project REST API is called using a legacy URL, the URL in the response is in the legacy form:

```http
GET https://fabrikam.visualstudio.com/_apis/projects/myproject
```
```javascript
{
  "id": "ef4de40d-3d96-4b80-a320-cfafe038ae57",
  "name": "MyProject",
  "url": "https://fabrikam.visualstudio.com/_apis/projects/myproject"
}
```

Calling the same API using the new URL `https://dev.azure.com/fabrikam/_apis/projects/myproject` will result in URLs returned in the new URL form.

## Organization primary URL

Each organization has a designated **primary** URL that is either the new form or the legacy form. The primary URL is used by Azure DevOps for constructing URLs in certain scenarios (more details below). The default primary URL for an organization is determined by when the organization was created, but can be changed by an administrator:

| When organization was created | Default primary URL |
|--------------------------|---------------------|
| On or after 9/5/2018     | New                 |        
| Prior to 9/5/2018        | Legacy              |

### When the primary URL is used

The primary URL is the base for all URLs constructed by Azure DevOps in background jobs or other automated scenarios, including but not limited to:

* URLs provided to pipeline tasks via environment variables like `SYSTEM_TEAMFOUNDATIONCOLLECTIONURI`
* URLs included with service hooks event payloads, including URLs in `resourceContainers`
* URLs in email, Slack, Microsoft Teams, and similar notifications

For example, the following pipeline task snippet outputs the organization URL provided to the task via an environment variable:

```powershell
$orgUrl = $env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI
Write-Host $orgUrl
```

Depending on the primary URL of the organization where this task is executing, the output will either be  `https://fabrikam.visualstudio.com` (legacy form) or `https://dev.azure.com/fabrikam` (new form).

Therefore, it is important for scripts packaged as pipeline tasks, services that receive events from service hooks, and other code that receives URLs are able to support these different URL formats.

## Best practices

To ensure your extensions, tools, and integrations are resilient to different organization URL forms, and also future changes to the location of specific APIs:

1. Assume the format of the organization URL can change over time
2. Never parse a URL in order to construct another URL
3. Never assume a particular REST API will always reside on the same domain
3. Avoid storing URLs
4. When possible, use the Microsoft-provided .NET, Node.js, and Python client libraries when interacting with Azure DevOps

## How to get an organization's URL

### Using its name

To get the correct base URL for an organization using its name, use the `Resource Areas` REST API. With this API, you can properly construct a client connection (if using a Microsoft-provided client library) or construct URLs to specific REST APIs.

#### C# example using Microsoft.VisualStudio.Services.Client

> Note: the `VssConnectionHelper` class referenced in this example is available in version `16.139.0-preview` and later versions of [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/16.139.0-preview).

```cs
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;
```
```cs
public async Task<VssConnection> GetConnection(
    string organizationName,
    VssCredentials credentials)
{
    Uri organizationUrl = await VssConnectionHelper.GetOrganizationUrlAsync(organizationName);
    
    return new VssConnection(organizationUrl, credentials);
}
```

#### C# example

```cs
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
```

```cs
static readonly HttpClient s_client = new HttpClient();
static readonly string s_locationServiceUrl = "https://dev.azure.com";
static readonly Guid s_defaultResourceAreaId = Guid.Parse("79134C72-4A58-4B42-976C-04E7115F32BF");

public async Task<Uri> GetOrganizationUrl(string organizationName)
{
    string requestUrl = $"{s_locationServiceUrl}/_apis/resourceAreas/{s_defaultResourceAreaId}?accountName={organizationName}&api-version=5.0-preview.1";

    HttpResponseMessage response = await s_client.GetAsync(requestUrl);

    if (response.StatusCode == HttpStatusCode.OK)
    {
        var resourceArea = await response.Content.ReadAsAsync<JObject>();

        if (resourceArea != null)
        {
            return new Uri(resourceArea["locationUrl"].ToString());
        }
    }
    
    return null;
}
```

#### Node.js example

```javascript
const request = require('request');

let getOrgUrl = function(orgName, callback) {
    let resourceAreaUrl = 'https://dev.azure.com/_apis/resourceAreas/79134C72-4A58-4B42-976C-04E7115F32BF?accountName=' + orgName + '&api-version=5.0-preview.1';
    
    request(resourceAreaUrl, { json: true }, (err, res, body) => {
        if (err) { 
            callback(err);   
        } else {
            callback(null, body.locationUrl);
        }
    });
};

getOrgUrl("fabrikam", (err, url) => {
    console.log(url);
});
```

### Using its ID

For the REST examples in the previous section, replace the `accountName` query parameter with `hostId`. For example:

```
https://dev.azure.com/_apis/resourceAreas/79134C72-4A58-4B42-976C-04E7115F32BF?hostId={organizationId}&api-version=5.0-preview.1
```

## How to get the base URL for an API

If you already have an organization's base URL (because it was provided directly to your code or your code used one of the examples above to get the URL using the organization's name or ID), you can use it to get the proper base URL for any API you need to call. This ensures your code is resilient to APIs moving to another different domain and avoids hard-coded URLs or URL parsing in your code.

### Example: PowerShell build task calling a Release Management REST API

In the following example, a build task forms the URL to a release management REST API, which resides on a different domain (`vsrm.dev.azure.com`) than the default domain of the organization (`dev.azure.com`).

```powershell
$orgUrl = $env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI

# Using the provided organization URL, construct the URL to call the Resource Area REST API
# Note: "efc2f575-36ef-48e9-b672-0c6fb4a48ac5" is the ID for the Release Management resource area
$orgResourceAreasUrl = [string]::Format("{0}/_apis/resourceAreas/efc2f575-36ef-48e9-b672-0c6fb4a48ac5?api-preview=5.0-preview.1", $orgUrl)

# Invoke the Resource Area REST API. This returns an object with a "locationUrl" field.
$results = Invoke-RestMethod -Uri $orgResourceAreasUrl

# Base URL for release management API calls.
$rmUrl = $results.locationUrl

# Using the location URL for the RM APIs, construct the full URL to the release definitions REST API.
$releaseDefinitionsUrl = [string]::Format("{0}/_apis/release/definitions?api-preview=5.0-preview.1", $rmUrl)
```

## Resource areas (reference)

To ensure your code is properly constructing the base URL to an Azure DevOps REST API, find the ID for the API and use it with the Resource Area REST API above. Resource area IDs are fixed and consistent across all Azure DevOps organizations.

> If you are using the Microsoft-provided .NET, Python, or Node.js client libraries, URL lookup is handled automatically for you.

| Resource Area ID | Name |
|---|---|
|0d55247a-1c47-4462-9b1f-5e2125590ee6|account|
|5d6898bb-45ec-463f-95f9-54d49c71752e|build|
|79bea8f8-c898-4965-8c51-8bbc3966faa8|collection|
|79134c72-4a58-4b42-976c-04e7115f32bf|core|
|31c84e0a-3ece-48fd-a29d-100849af99ba|dashboard|
|a0848fa1-3593-4aec-949c-694c73f4c4ce|delegatedAuth|
|6823169a-2419-4015-b2fd-6fd6f026ca00|discussion|
|a85b8835-c1a1-4aac-ae97-1c3d0ba72dbd|distributedtask|
|7bf94c77-0ce1-44e5-a0f3-263e4ebbf327|drop|
|6c2b0933-3600-42ae-bf8b-93d4f7e83594|extensionManagement|
|67349c8b-6425-42f2-97b6-0843cb037473|favorite|
|4e080c62-fa21-4fbc-8fef-2a10a2b38049|git|
|4e40f190-2e3f-4d9f-8331-c7788e833080|graph|
|68ddce18-2501-45f1-a17b-7931a9922690|memberEntitlementManagement|
|b3be7473-68ea-4a81-bfc7-9530baaa19ad|nuget|
|4c83cfc1-f33a-477e-a789-29d38ffca52e|npm|
|45fb9450-a28d-476d-9b0f-fb4aedddff73|package|
|7ab4e64e-c4d8-4f50-ae73-5ef2e21642a5|packaging|
|2e0bf237-8973-4ec9-a581-9c3d679d1776|pipelines|
|fb13a388-40dd-4a04-b530-013a739c72ef|policy|
|8ccfef3d-2b87-4e99-8ccb-66e343d2daa8|profile|
|efc2f575-36ef-48e9-b672-0c6fb4a48ac5|release|
|57731fdf-7d72-4678-83de-f8b31266e429|reporting|
|ea48a0a1-269c-42d8-b8ad-ddc8fcdcf578|search|
|3b95fb80-fdda-4218-b60e-1052d070ae6b|test|
|c83eaf52-edf3-4034-ae11-17d38f25404c|testresults|
|8aa40520-446d-40e6-89f6-9c9f9ce44c48|tfvc|
|970aa69f-e316-4d78-b7b0-b7137e47a22c|user|
|5264459e-e5e0-4bd8-b118-0985e68a4ec5|wit|
|1d4f49f9-02b9-4e26-b826-2cdb6195f2a9|work|
|85f8c7b6-92fe-4ba6-8b6d-fbb67c809341|worktracking|
