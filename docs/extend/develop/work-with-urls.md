---
ms.prod: devops
ms.technology: devops-ecosystem
title: Working with URLs in extensions | Azure DevOps Services
description: Best practices for working with URLs in Azure DevOps extensions and integrations
ms.assetid: 1f27f05e-2c55-4873-ab4a-8c9c0947a7fe
ms.topic: conceptual
ms.manager: jillfra
monikerRange: 'azure-devops'
ms.author: wismythe
author: willsmythe
ms.date: 08/31/2018
---

# Best practices for working with URLs in Azure DevOps extensions and integrations

With the introduction of Azure DevOps Services, organizational resources and APIs are now accessible via either of the following URLs:

* `https://dev.azure.com/{organization}` (new)
* `https://{organization}.visualstudio.com` (legacy)

Regardless of when the organization was created, users, tools, and integrations can interact with organization-level REST APIs using either URL. As the developer of an extension, integration, or tool that interacts with Azure DevOps Services, it is important to understand how to properly work with URLs made available to your code and how to properly form URLs when calling REST APIs.
    
## Organization primary URL

Each organization has a designated **primary** URL that is either the new form or the legacy form. The primary URL is used by Azure DevOps Services for constructing URLs in certain scenarios (more details below). The default primary URL for an organization is determined by when the organization was created, but can be changed by an administrator:

| When the organization was created | Default primary URL |
|--------------------------|---------------------|
| On or after 9/10/2018     | New                 |        
| Prior to 9/10/2018        | Legacy              |

### How the primary URL is used

The primary URL is the base URL for all URLs constructed by Azure DevOps in background jobs and other automated scenarios, like:

* URLs provided to Azure Pipelines tasks via environment variables (like `SYSTEM_TEAMFOUNDATIONCOLLECTIONURI`)
* URLs included in service hooks event payloads (like URLs in `resourceContainers`)
* URLs in email, Slack, Microsoft Teams, and similar notifications

For example, the following task snippet displays the organization URL provided to the task:

```powershell
$orgUrl = $env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI
Write-Host $orgUrl
```

If this task is executed on an organization where the primary URL is the new URL form, the output will be `https://dev.azure.com/{organization}`. The same task executed on an organization where the primary URL is the legacy URL form will output `https://{organization}.visualstudio.com`.

It is therefore important that Azure Pipeline tasks and services that receive events from service hooks handle both URL forms.

## URLs returned in REST APIs

Regardless of an organization's primary URL, URLs returned in the response to a REST API call use the same base URL as the requesting URL. This ensures clients calling a REST API using a legacy URL will continue to get back URLs in the same (legacy) form. For example, when the Projects REST API is called using a legacy URL, URLs in the response use the legacy form:

### Request

```http
GET https://Fabrikam.visualstudio.com/_apis/projects/MyProject
```

### Response

```javascript
{
  "id": "ef4de40d-3d96-4b80-a320-cfafe038ae57",
  "name": "MyProject",
  "url": "https://Fabrikam.visualstudio.com/_apis/projects/MyProject"
}
```

Calling the same API using the new URL (`https://dev.azure.com/Fabrikam/_apis/projects/MyProject`) results in URLs returned in the new URL form.

## Best practices

To ensure your extension, tool, or integration is resilient to changing organization URL forms and to possible future changes to the location (domain) of a REST API:

1. Assume the form of the organization URL can change over time
2. Avoid parsing a URL in order to construct another URL
3. Don't assume a particular REST API will always reside on the same domain
3. Avoid storing URLs in your service
4. When possible, use Microsoft-provided [.NET](../../integrate/concepts/dotnet-client-libraries.md), TypeScript (web), [Node.js](https://github.com/Microsoft/vsts-node-api), and [Python](https://github.com/Microsoft/vsts-python-api) client libraries when interacting with Azure DevOps

## How to get an organization's URL

With just the organization's name or ID, you can get its base URL using the global Resource Areas REST API (`https://dev.azure.com/_apis/resourceAreas`). This API does not require authentication and provides information about the location (URL) of the organization as well as the base URL for REST APIs, which can live on different domains.

A resource area is a group of related REST API resources and endpoints. Each resource area has a well-known identifier (see the table below). Each resource area has an organization-specific base URL that can be used to form URLs for APIs in that resource area. For example, the base URL for "build" REST APIs for the Fabrikam might be `https://dev.azure.com/Fabrikam`, whereas the base URL for "release management" REST APIs might be `https://vsrm.dev.azure.com/Fabrikam`.

> [!NOTE]
> The Resource Areas REST API returns URLs for the organization based on that organization's designated primary URL.

### With the organization's name

There are a few ways to get the base URL for an organization using its name.

# [HTTP](#tab/http)

#### Request

Replace `{organizationName}` with organization's name, for example "Fabrikam". `79134C72-4A58-4B42-976C-04E7115F32BF` is the ID for the "core" resource area, which is where important resources like "projects" reside.

```
GET https://dev.azure.com/_apis/resourceAreas/79134C72-4A58-4B42-976C-04E7115F32BF
      ?accountName={organizationName}&api-version=5.0-preview.1
```

#### Response

```javascript
{
    "id": "79134C72-4A58-4B42-976C-04E7115F32BF",
    "name": "Core",
    "locationUrl": "https://dev.azure.com/Fabrikam"
}
```

The `locationUrl` reflects the organization's base URL.

# [C# (client library)](#tab/csharpclient)

The Microsoft-provided .NET client library ([Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/16.139.0-preview)) provides a helper class that calls the Resource Areas REST API for you and returns the base URL for an organization.

> Note: the `VssConnectionHelper` class is available in version `16.139.0-preview` and later version of the client library.

```cs
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;
```
```cs
public async Task MyMethod()
{
    string organizationName = ...;
    VssCredentials credentials = ...;

    Uri organizationUrl = await VssConnectionHelper.GetOrganizationUrlAsync(organizationName);
    
    VssConnection connection = new VssConnection(organizationUrl, credentials);
    
    // get a client using connection.GetClient<T>() and do something
}
```

# [C# (generic)](#tab/csharpgeneric)

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

# [Node.js (generic)](#tab/nodejsgeneric)

```javascript
const request = require('request');

let getOrgUrl = function(orgName, callback) {
    let resourceAreaUrl = 'https://dev.azure.com/_apis/resourceAreas/79134C72-4A58-4B42-976C-04E7115F32BF?' + 
      'accountName=' + orgName +
      '&api-version=5.0-preview.1';
    
    request(resourceAreaUrl, { json: true }, (err, res, body) => {
        if (err) { 
            callback(err);   
        } else {
            callback(null, body.locationUrl);
        }
    });
};

getOrgUrl('fabrikam', (err, url) => {
    console.log(url);
});
```

---

### With the organization's ID

To get the URL for an organization using its GUID identifier, use the `hostId` query parameter in the examples above (instead of `accountName`). For example:

```
GET https://dev.azure.com/_apis/resourceAreas/79134C72-4A58-4B42-976C-04E7115F32BF?hostId={organizationId}&api-version=5.0-preview.1
```

## How to get the base URL for a REST API

Starting from an organization's URL, you can use the Resource Areas REST API to look up the correct base URL for any REST API you need to call. This ensures your code is resilient to the location (domain) of a REST API changing in the future and avoids potentially brittle logic.

> [!NOTE]
> If you are using the Microsoft-provided .NET, TypeScript (web), Node.js, or Python client library, URL lookup is handled for you. For example, in .NET when you construct a `VssConnection` and call `GetClient<T>`, the returned client is properly bound to the correct base URL for the REST APIs called by this client.

If you are not using a Microsoft-provided client library:

1. Use the table below to find the resource area ID for the REST API you need to call. The resource area name usually appears after `/_apis/` in the REST API route. For example, the `/_apis/release/definitions` REST API belongs to the `release` resource area, which has an ID of `efc2f575-36ef-48e9-b672-0c6fb4a48ac5`.

2. Call the organization-level Resource Areas REST API (`{organizationUrl}/_apis/resourceAreas/{resourceAreaId}?api-version=5.0-preview.1`) and pass the resource area ID. For example:
   ```
   GET https://dev.azure.com/Fabrikam/_apis/resourceAreas/efc2f575-36ef-48e9-b672-0c6fb4a48ac5?api-version=5.0-preview.1
   ```
    
3. Use the `locationUrl` field from the JSON response as the base URL for calling other REST APIs for this area. In this example, the base URL for Release Management REST APIs is `https://vsrm.dev.azure.com/Fabrikam`.

> Like the global Resource Areas REST API described earlier, no credentials are required to call the organization-level Resource Areas REST API.

### Example: Pipelines task calling an Azure Pipelines releases REST API

In this example, a build task needs to call the Azure Pipelines releases REST API. It forms the correct base URL for this REST API call by using the organization URL (provided in an environment variable) and the Resource Areas REST API. 

> [!NOTE]
> Resource area IDs are fixed and can be safely embedded in tasks and other logic.

```powershell
$orgUrl = $env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI
$releaseManagementAreaId = "efc2f575-36ef-48e9-b672-0c6fb4a48ac5"

# Build the URL for calling the org-level Resource Areas REST API for the RM APIs
$orgResourceAreasUrl = [string]::Format("{0}/_apis/resourceAreas/{1}?api-preview=5.0-preview.1", $orgUrl, $releaseManagementAreaId)

# Do a GET on this URL (this returns an object with a "locationUrl" field)
$results = Invoke-RestMethod -Uri $orgResourceAreasUrl

# The "locationUrl" field reflects the correct base URL for RM REST API calls
$rmUrl = $results.locationUrl

# Construct the URL to the release definitions REST API
$releaseDefinitionsUrl = [string]::Format("{0}/_apis/release/definitions?api-preview=5.0-preview.1", $rmUrl)
```

## Resource area IDs (reference)

This table shows the IDs for common resource areas. See the previous section for details on how to use this table. 

> [!NOTE]
> Resource area IDs are fixed and are consistent across all organizations in Azure DevOps Services.

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
