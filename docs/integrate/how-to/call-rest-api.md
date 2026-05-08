---
title: Get started with the REST APIs for Azure DevOps
description: Learn the fundamental concepts and patterns for Azure DevOps REST APIs, including URL structure, authentication methods, HTTP operations, and response handling.
ms.subservice: azure-devops-ecosystem
ms.topic: quickstart
ms.custom: pat-reduction, copilot-scenario-highlight
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 03/31/2026
---

# Get started with the REST APIs

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure DevOps REST APIs provide powerful programmatic access to work items, repositories, builds, releases, and more. Whether you're building custom integrations, automating workflows, or extending Azure DevOps capabilities, understanding the fundamental patterns and concepts is essential for successful implementation.

> [!TIP]
> Ready to start coding? Skip to [REST API samples](../get-started/rest/samples.md) for complete working examples with modern authentication patterns.

This article covers the fundamental concepts and patterns for Azure DevOps REST APIs. For practical implementation examples, see [REST API samples](../get-started/rest/samples.md).

[!INCLUDE [ai-assistance-mcp-server-tip](../../includes/ai-assistance-mcp-server-tip.md)]

## URL structure

The APIs follow a common pattern, as shown in the following example:

```no-highlight
VERB https://{instance}/{collection}/{team-project}/_apis/{area}/{resource}?api-version={version}
```

> [!TIP]
> As APIs evolve, include an API version in every request. This practice helps you avoid unexpected changes in the API that could break your application.

### [Azure DevOps Services](#tab/services)

For Azure DevOps Services, `instance` is `dev.azure.com/{organization}` and `collection` is `DefaultCollection`, so the pattern looks like the following example:

```no-highlight
VERB https://dev.azure.com/{organization}/_apis/{area}/{resource}?api-version={version}
```

**Example endpoint:**
```no-highlight
GET https://dev.azure.com/{organization}/_apis/projects?api-version=7.2
```

### [Azure DevOps Server](#tab/server)

For Azure DevOps Server, `instance` is `{server:port}`. The default port for a non-SSL connection is 8080.

The default collection is `DefaultCollection`, but you can use any collection.

**Examples:**
- SSL: `https://{server}/DefaultCollection/_apis/projects?api-version=7.2`
- Non-SSL: `http://{server}:8080/DefaultCollection/_apis/projects?api-version=7.2`

---

## Authentication

Azure DevOps REST APIs support several authentication methods:

- **Microsoft Entra ID** - Recommended for production applications
- **Personal Access Tokens (PATs)** - Simple authentication for scripts and testing  
- **Service principals and managed identities** - For automated scenarios

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

## Response format

Azure DevOps REST APIs typically return JSON responses. Here's an example response structure:

```json
{
    "value": [
        {
            "id": "00000000-0000-0000-0000-000000000000",
            "name": "Fabrikam-Fiber-TFVC",
            "url": "https://dev.azure.com/fabrikam-fiber-inc/_apis/projects/00000000-0000-0000-0000-000000000000",
            "description": "Team Foundation Version Control projects"
        }
    ],
    "count": 1
}
```

The response is [JSON](https://json.org/), which is generally what you get back from the REST APIs, although there are a few exceptions, like [Git blobs](/rest/api/azure/devops/git/blobs).

> [!TIP]
> For complete working examples showing how to parse these responses, see [REST API samples](../get-started/rest/samples.md).

## HTTP methods and operations

Azure DevOps REST APIs use standard HTTP methods:

| Method | Used for... | Example |
|:-------|:------------|:--------|
| GET    | Get a resource or list of resources | Get projects, work items |
| POST   | Create a resource, or get resources using advanced queries | Create work items, query work items |
| PUT    | Create or completely replace a resource | Replace a build definition, update a policy |
| PATCH  | Update specific fields of a resource | Update work item fields |
| DELETE | Delete a resource | Delete work item |

> [!TIP]
> For practical examples of each HTTP method with complete code samples, see [REST API samples](../get-started/rest/samples.md).

### Request headers and content

When you provide a request body (usually with POST, PUT, and PATCH), include appropriate headers:

```http
Content-Type: application/json
```

For PATCH operations on work items, use:

```http
Content-Type: application/json-patch+json
```

### HTTP method override

Some web proxies support only the HTTP verbs GET and POST. They don't support more modern HTTP verbs like PATCH and DELETE.
If your calls might pass through one of these proxies, send the actual verb by using a POST method with a header to override the method.
For example, you might want to [update a work item](/rest/api/azure/devops/wit/work-items/update) (`PATCH _apis/wit/workitems/3`), but you might have to go through a proxy that only allows GET or POST.
You can pass the proper verb (PATCH in this case) as an HTTP request header parameter and use POST as the actual HTTP method.

```no-highlight
POST https://dev.azure.com/fabrikam-fiber-inc/_apis/wit/workitems/3
```

```http
X-HTTP-Method-Override: PATCH
```

```json
{
   (PATCH request body)
}
```

## Response codes

Understanding HTTP response codes helps you handle API responses appropriately:

| Response | Meaning | Notes |
|:---------|:--------|:------|
| 200      | Success | Response body contains requested data |
| 201      | Created | Resource successfully created |
| 204      | Success | No response body (common with DELETE) |
| 400      | Bad Request | Invalid parameters or request body |
| 401      | Unauthorized | Authentication failed or missing |
| 403      | Forbidden | User lacks permission for operation |
| 404      | Not Found | Resource doesn't exist or no permission to view |
| 409      | Conflict | Request conflicts with current resource state |

## API versioning

Azure DevOps REST APIs are versioned to ensure applications continue working as APIs evolve.

### Guidelines

* **Always specify the API version** with every request (**required**)
* Format API versions as: `{major}.{minor}` or `{major}.{minor}-{stage}` (for example, `7.2`, `7.2-preview`)
* Use specific preview revisions when available: `7.2-preview.1`, `7.2-preview.2`
* Upgrade to released versions when preview APIs are deprecated

### Usage

Specify the API version as a URL query parameter:

```no-highlight
GET https://dev.azure.com/{organization}/_apis/projects?api-version=7.2
```

Or in the request header:

```http
Accept: application/json;api-version=7.2
```

For supported versions, see [REST API versioning](../concepts/rest-api-versioning.md#supported-versions).

## More resources

For practical implementation guidance and complete code examples, see:

* [REST API samples](../get-started/rest/samples.md) - Complete examples with Microsoft Entra ID authentication
* [Authentication guidance](../get-started/authentication/authentication-guidance.md) - Detailed authentication options
* [REST API versioning](../concepts/rest-api-versioning.md) - API lifecycle information
* [Microsoft Entra OAuth](../get-started/authentication/entra-oauth.md) - OAuth implementation with Microsoft Entra ID

<a id="use-ai-assistance"></a>

## Use AI to build REST API calls

If you connect [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md) to your AI agent in agent mode, you can use natural language prompts to generate and troubleshoot REST API calls.

| Task | Example prompt |
|------|----------------|
| Build a GET request | `Show me how to construct a GET request to list all projects in my Azure DevOps organization using the REST API` |
| Construct a POST body | `Generate the JSON-patch body for creating a work item using the Azure DevOps REST API` |
| Handle authentication | `Write C# code to call the Azure DevOps REST API with a Bearer token from Microsoft Entra ID` |
| Explore API areas | `What Azure DevOps REST API endpoints are available for managing Git pull requests?` |
| Parse API responses | `Show me how to deserialize an Azure DevOps REST API response into C# objects and handle pagination with continuation tokens` |
| Debug API errors | `I'm getting a 400 error when calling the Azure DevOps work item update API — help me understand the correct PATCH format` |

> [!NOTE]
> Agent mode and the MCP Server use natural language, so you can adjust these prompts or ask follow-up questions to refine the results.

## Next step

> [!div class="nextstepaction"]
> [Try REST API samples](../get-started/rest/samples.md)
