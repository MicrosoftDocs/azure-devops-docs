---
ms.subservice: azure-devops-ecosystem
title: Work with Organization URLs in Azure DevOps Extensions
description: "Azure DevOps URLs: Discover best practices for handling URLs in extensions and integrations. Learn how to keep your tools resilient and compatible."
ms.assetid: 1f27f05e-2c55-4873-ab4a-8c9c0947a7fe
ms.topic: concept-article
ms.custom: UpdateFrequency3
monikerRange: '<= azure-devops'
ms.author: chcomley
ms.reviewer: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Work with URLs in extensions and integrations

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can access Azure DevOps organizational resources and APIs through two URL forms:

| URL form | Example |
|---|---|
| New | `https://dev.azure.com/{organization}` |
| Legacy | `https://{organization}.visualstudio.com` |

Organization-level REST APIs accept either URL form, regardless of when you created the organization. For more information, see the [Azure DevOps Services REST API Reference](/rest/api/azure/devops).

## Primary URL

Each organization has a designated *primary* URL in either the new or legacy form. An administrator can change the primary URL. The default is based on when you created the organization:

| Created | Default primary URL |
|---|---|
| On or after September 10, 2018 | New |
| Before September 10, 2018 | Legacy |

### How the primary URL is used

Azure DevOps uses the primary URL as the base for all URLs it constructs in background jobs and automated scenarios, including:

- Pipeline task environment variables (like `SYSTEM_TEAMFOUNDATIONCOLLECTIONURI`)
- Service hooks event payloads (like URLs in `resourceContainers`)
- Email, Slack, Microsoft Teams, and similar notifications

For example, the following task snippet displays the organization URL:

```powershell
$orgUrl = $env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI
Write-Host $orgUrl
```

The output depends on the organization's primary URL form - either `https://dev.azure.com/{organization}` or `https://{organization}.visualstudio.com`. Make sure your pipelines tasks and service hook consumers handle both URL forms.

## URLs returned in REST APIs

Regardless of an organization's primary URL, URLs returned in the response to a REST API call use the same base URL as the requesting URL. This function ensures that clients calling a REST API using a legacy URL continue to get back URLs in the same (legacy) form. For example, when the Projects REST API is called using a legacy URL, URLs in the response use the legacy form:

### Request

```http
GET https://Fabrikam.visualstudio.com/_apis/projects/MyProject
```

### Response

```javascript
{
  "id": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5",
  "name": "MyProject",
  "url": "https://Fabrikam.visualstudio.com/_apis/projects/MyProject"
}
```

Calling the same API using the new URL (`https://dev.azure.com/Fabrikam/_apis/projects/MyProject`) results in URLs returned in the new URL form.

## Best practices

To keep your extension, tool, or integration resilient to URL changes:

- Don't assume a fixed organization URL form. It can change over time.
- Don't parse or store URLs to construct other URLs.
- Don't assume a REST API always resides on the same domain.
- Use Microsoft-provided client libraries ([.NET](../../integrate/concepts/dotnet-client-libraries.md), [Node.js](https://github.com/Microsoft/vsts-node-api), [Python](https://github.com/Microsoft/vsts-python-api)) when possible, because they handle URL resolution automatically.

## Get an organization's URL

You can resolve an organization's base URL from its name or ID by using the global Resource Areas REST API (`https://dev.azure.com/_apis/resourceAreas`). This API doesn't require authentication.

A *resource area* is a group of related REST API endpoints identified by a fixed GUID. Each resource area can have a different base URL for each organization. For example, Fabrikam's *build* APIs might use `https://dev.azure.com/Fabrikam`, while *release management* APIs use `https://vsrm.dev.azure.com/Fabrikam`.

> [!NOTE]
> The Resource Areas REST API returns URLs based on the organization's designated [primary URL](#primary-url).

### By organization name

# [HTTP](#tab/http)

Replace `{organizationName}` with the organization's name. The GUID `79134C72-4A58-4B42-976C-04E7115F32BF` identifies the *core* resource area, which contains resources like *projects*.

#### Request

```http
GET https://dev.azure.com/_apis/resourceAreas/79134C72-4A58-4B42-976C-04E7115F32BF
      ?accountName={organizationName}&api-version=5.0-preview.1
```

#### Response

```json
{
    "id": "79134C72-4A58-4B42-976C-04E7115F32BF",
    "name": "Core",
    "locationUrl": "https://dev.azure.com/Fabrikam"
}
```

The `locationUrl` field contains the organization's base URL.

# [C# (client library)](#tab/csharpclient)

The [.NET client library](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client) provides `VssConnectionHelper`, which calls the Resource Areas REST API and returns the organization's base URL.

```csharp
using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

public async Task MyMethod()
{
    string organizationName = "Fabrikam";
    VssCredentials credentials = new VssBasicCredential(string.Empty, "your-pat");

    Uri organizationUrl = await VssConnectionHelper.GetOrganizationUrlAsync(organizationName);
    VssConnection connection = new VssConnection(organizationUrl, credentials);

    // Use connection.GetClient<T>() to call APIs
}
```

# [C# (generic)](#tab/csharpgeneric)

```csharp
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

static readonly HttpClient s_client = new HttpClient();
const string CoreResourceAreaId = "79134C72-4A58-4B42-976C-04E7115F32BF";

public async Task<Uri?> GetOrganizationUrl(string organizationName)
{
    string requestUrl = $"https://dev.azure.com/_apis/resourceAreas/{CoreResourceAreaId}?accountName={organizationName}&api-version=5.0-preview.1";

    var response = await s_client.GetAsync(requestUrl);

    if (response.StatusCode == HttpStatusCode.OK)
    {
        var resourceArea = await response.Content.ReadFromJsonAsync<JsonElement>();
        string? locationUrl = resourceArea.GetProperty("locationUrl").GetString();
        if (locationUrl != null)
        {
            return new Uri(locationUrl);
        }
    }

    return null;
}
```

# [Node.js](#tab/nodejsgeneric)

```javascript
const coreResourceAreaId = "79134C72-4A58-4B42-976C-04E7115F32BF";

async function getOrgUrl(orgName) {
    const url = `https://dev.azure.com/_apis/resourceAreas/${coreResourceAreaId}?accountName=${orgName}&api-version=5.0-preview.1`;
    const response = await fetch(url);

    if (response.ok) {
        const body = await response.json();
        return body.locationUrl;
    }

    return null;
}

const orgUrl = await getOrgUrl("fabrikam");
console.log(orgUrl);
```

---

### By organization ID

To resolve the URL by organization GUID instead of name, use the `hostId` query parameter (instead of `accountName`):

```http
GET https://dev.azure.com/_apis/resourceAreas/79134C72-4A58-4B42-976C-04E7115F32BF?hostId={organizationId}&api-version=5.0-preview.1
```

## Get the base URL for a REST API

Use the organization-level Resource Areas REST API to look up the correct base URL for any REST API. This approach keeps your code resilient when API domains change.

> [!NOTE]
> Microsoft-provided client libraries (.NET, TypeScript, Node.js, Python) handle URL lookup automatically. For example, `VssConnection.GetClient<T>()` in .NET returns a client that's already bound to the correct base URL.

If you aren't using a client library:

1. Find the resource area ID for the API you need in the [resource area ID table](#resource-area-ids). The area name usually appears after `/_apis/` in the route. For example, `/_apis/release/definitions` belongs to the `release` area (`aaaabbbb-0000-cccc-1111-dddd2222eeee`).

1. Call the organization-level Resource Areas REST API with that ID:

    ```http
    GET https://dev.azure.com/Fabrikam/_apis/resourceAreas/aaaabbbb-0000-cccc-1111-dddd2222eeee?api-version=5.0-preview.1
    ```

1. Use the `locationUrl` field from the response as the base URL. In this example, the Release Management base URL is `https://vsrm.dev.azure.com/Fabrikam`.

No credentials are required for the Resource Areas REST API.

### Example: Call the Releases REST API from a pipeline task

This pipeline task resolves the correct base URL for the Releases REST API using the organization URL from the `SYSTEM_TEAMFOUNDATIONCOLLECTIONURI` environment variable.

> [!NOTE]
> Resource area IDs are fixed and can be safely embedded in tasks and other logic.

```powershell
$orgUrl = $env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI
$releaseManagementAreaId = "aaaabbbb-0000-cccc-1111-dddd2222eeee"

# Look up the base URL for Release Management APIs
$orgResourceAreasUrl = "${orgUrl}_apis/resourceAreas/${releaseManagementAreaId}?api-version=5.0-preview.1"
$results = Invoke-RestMethod -Uri $orgResourceAreasUrl
$rmUrl = $results.locationUrl

# Call the release definitions API
$releaseDefinitionsUrl = "${rmUrl}/_apis/release/definitions?api-version=5.0-preview.1"
```

## Resource area IDs

The following table lists IDs for common resource areas. Resource area IDs are fixed and consistent across all Azure DevOps Services organizations.

| Resource area ID | Name |
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
|b3be7473-68ea-4a81-bfc7-9530baaa19ad|NuGet|
|4c83cfc1-f33a-477e-a789-29d38ffca52e|npm|
|45fb9450-a28d-476d-9b0f-fb4aedddff73|package|
|7ab4e64e-c4d8-4f50-ae73-5ef2e21642a5|packaging|
|2e0bf237-8973-4ec9-a581-9c3d679d1776|pipelines|
|fb13a388-40dd-4a04-b530-013a739c72ef|policy|
|8ccfef3d-2b87-4e99-8ccb-66e343d2daa8|profile|
|aaaabbbb-0000-cccc-1111-dddd2222eeee|release|
|57731fdf-7d72-4678-83de-f8b31266e429|reporting|
|ea48a0a1-269c-42d8-b8ad-ddc8fcdcf578|search|
|3b95fb80-fdda-4218-b60e-1052d070ae6b|test|
|c83eaf52-edf3-4034-ae11-17d38f25404c|testresults|
|8aa40520-446d-40e6-89f6-9c9f9ce44c48|tfvc|
|970aa69f-e316-4d78-b7b0-b7137e47a22c|user|
|5264459e-e5e0-4bd8-b118-0985e68a4ec5|wit|
|1d4f49f9-02b9-4e26-b826-2cdb6195f2a9|work|
|85f8c7b6-92fe-4ba6-8b6d-fbb67c809341|worktracking|

## Navigate programmatically with the HostNavigationService

The `IHostNavigationService` interface enables extensions to interact with the parent host frame. Extensions can use it to read and set the URL hash, navigate to URLs, reload the page, and manage query parameters.

```typescript
import * as SDK from "azure-devops-extension-sdk";
import { CommonServiceIds, IHostNavigationService } from "azure-devops-extension-api";

const navService = await SDK.getService<IHostNavigationService>(CommonServiceIds.HostNavigationService);
```

### Hash value

```typescript
// Get the current hash
const hash = await navService.getHash();
console.log("Host hash value: " + hash);

// Listen for hash changes
navService.onHashChanged((hash: string) => {
    console.log("Hash changed to: " + hash);
});

// Set hash (adds a new browser history entry)
navService.setHash("new-hash-value");

// Replace hash (no new history entry)
navService.replaceHash("replaced-hash-value");
```

### Navigation and windows

```typescript
// Navigate the host page
navService.navigate("https://dev.azure.com/myorg/myproject");

// Open a new browser window
navService.openNewWindow("https://dev.azure.com/myorg/myproject", "height=400,width=600");
```

### Reload and document title

```typescript
navService.reload();
navService.setDocumentTitle("My Custom Page Title");
```

### Query parameters

```typescript
// Get current query parameters
const params = await navService.getQueryParams();
console.log(params);

// Set query parameters (pass empty string to remove a parameter)
navService.setQueryParams({ myParam: "value", removeMe: "" });
```

For the full API, see [IHostNavigationService](/javascript/api/azure-devops-extension-api/ihostnavigationservice) and [CommonServiceIds](/javascript/api/azure-devops-extension-api/commonserviceids).

## Next step

> [!div class="nextstepaction"]
> [Make your extension or integration public](../publish/overview.md)
