---
title: REST API samples for Azure DevOps
description: Learn REST API basics with practical samples for Azure DevOps Services, including authentication patterns and common operations.
ms.assetid: 9E17A266-051F-403F-A285-7F21D9CC52F0
ai-usage: ai-assisted
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
ms.custom: devx-track-dotnet
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/16/2025
---

# REST API samples for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article provides practical REST API examples for Azure DevOps Services. These samples demonstrate common operations like retrieving projects, managing work items, and using secure authentication patterns with Microsoft Entra ID.

> [!IMPORTANT]
> These samples use Microsoft Entra ID authentication, which is the recommended approach for production applications. While personal access tokens (PATs) can be used for simple scripts, Microsoft Entra ID provides better security and governance capabilities.

## Authentication overview

Azure DevOps REST APIs support several authentication methods:

- **Microsoft Entra ID** - Recommended for production applications (used in these samples)
- **Personal Access Tokens (PATs)** - Simple authentication for scripts and testing
- **OAuth 2.0** - For third-party applications
- **Service principals** - For automated scenarios

[!INCLUDE [use-microsoft-entra-reduce-pats](../../../includes/use-microsoft-entra-reduce-pats.md)]

### Microsoft Entra ID authentication

For Microsoft Entra ID authentication, you'll need to register an application and obtain an access token. Here's how to authenticate using the Microsoft Authentication Library (MSAL):

First, install the required NuGet package:

```xml
<PackageReference Include="Microsoft.Identity.Client" Version="4.61.3" />
```

```csharp
using Microsoft.Identity.Client;
using System.Net.Http.Headers;

public async Task<string> GetAccessTokenAsync()
{
    var app = PublicClientApplicationBuilder
        .Create("{your-client-id}")
        .WithAuthority("https://login.microsoftonline.com/{your-tenant-id}")
        .WithRedirectUri("http://localhost")
        .Build();

    var scopes = new[] { "https://app.vssps.visualstudio.com/.default" };
    
    try
    {
        var result = await app.AcquireTokenInteractive(scopes).ExecuteAsync();
        return result.AccessToken;
    }
    catch (MsalException ex)
    {
        Console.WriteLine($"Authentication failed: {ex.Message}");
        throw;
    }
}
```

## REST API samples

### List projects (GET)

Retrieve all projects in your organization:

#### C# example

```csharp
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Identity.Client;

public async Task<string> GetProjectsAsync(string organization)
{
    using var client = new HttpClient();
    
    // Get Microsoft Entra ID access token
    var entraIdAccessToken = await GetAccessTokenAsync();
    
    // Set base address and headers
    client.BaseAddress = new Uri($"https://dev.azure.com/{organization}/");
    client.DefaultRequestHeaders.Accept.Clear();
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    
    // Add authentication header
    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", entraIdAccessToken);
    
    try
    {
        var response = await client.GetAsync("_apis/projects?api-version=7.2");
        response.EnsureSuccessStatusCode();
        
        return await response.Content.ReadAsStringAsync();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Request failed: {ex.Message}");
        throw;
    }
}
```

#### PowerShell example

```powershell
# Install required module if not already installed
# Install-Module -Name MSAL.PS -Force

Import-Module MSAL.PS

$clientId = "your-client-id"
$tenantId = "your-tenant-id"
$organization = "your-organization"

# Get access token
$token = Get-MsalToken -ClientId $clientId -TenantId $tenantId -Scopes "https://app.vssps.visualstudio.com/.default"

$headers = @{
    'Authorization' = "Bearer $($token.AccessToken)"
    'Accept' = 'application/json'
}

$uri = "https://dev.azure.com/$organization/_apis/projects?api-version=7.2"

try {
    $response = Invoke-RestMethod -Uri $uri -Method Get -Headers $headers
    Write-Host "Retrieved $($response.count) projects"
    $response.value | ForEach-Object { Write-Host "- $($_.name)" }
}
catch {
    Write-Error "Failed to retrieve projects: $($_.Exception.Message)"
}
```

### Create work item (POST)

Create a new work item in your project:

#### C# example

```csharp
using System.Text;
using Newtonsoft.Json;

public async Task<string> CreateWorkItemAsync(string organization, string project)
{
    using var client = new HttpClient();
    
    // Get Microsoft Entra ID access token
    var entraIdAccessToken = await GetAccessTokenAsync();
    
    // Set base address and headers
    client.BaseAddress = new Uri($"https://dev.azure.com/{organization}/");
    client.DefaultRequestHeaders.Accept.Clear();
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", entraIdAccessToken);
    
    var workItem = new
    {
        fields = new
        {
            SystemTitle = "Sample work item",
            SystemDescription = "Created via REST API with Microsoft Entra ID",
            SystemTags = "api; sample; entra-id"
        }
    };
    
    var json = JsonConvert.SerializeObject(workItem);
    var content = new StringContent(json, Encoding.UTF8, "application/json");
    
    try
    {
        var response = await client.PostAsync($"{project}/_apis/wit/workitems/$Task?api-version=7.2", content);
        response.EnsureSuccessStatusCode();
        
        return await response.Content.ReadAsStringAsync();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Request failed: {ex.Message}");
        throw;
    }
}
```

#### PowerShell example

```powershell
Import-Module MSAL.PS

$clientId = "your-client-id"
$tenantId = "your-tenant-id"
$organization = "your-organization"
$project = "your-project"

# Get access token
$token = Get-MsalToken -ClientId $clientId -TenantId $tenantId -Scopes "https://app.vssps.visualstudio.com/.default"

$headers = @{
    'Authorization' = "Bearer $($token.AccessToken)"
    'Content-Type' = 'application/json'
}

$body = @{
    fields = @{
        'System.Title' = 'Sample work item'
        'System.Description' = 'Created via REST API with Microsoft Entra ID'
        'System.Tags' = 'api; sample; entra-id'
    }
} | ConvertTo-Json

$uri = "https://dev.azure.com/$organization/$project/_apis/wit/workitems/`$Task?api-version=7.2"

try {
    $response = Invoke-RestMethod -Uri $uri -Method Post -Headers $headers -Body $body
    Write-Host "Work item created with ID: $($response.id)"
}
catch {
    Write-Error "Failed to create work item: $($_.Exception.Message)"
}
```

### Update work item (PATCH)

Update an existing work item's state:

#### C# example

```csharp
using System.Text;
using Newtonsoft.Json;

public async Task<string> UpdateWorkItemAsync(string organization, string project, int workItemId)
{
    using var client = new HttpClient();
    
    // Get Microsoft Entra ID access token
    var entraIdAccessToken = await GetAccessTokenAsync();
    
    // Set base address and headers
    client.BaseAddress = new Uri($"https://dev.azure.com/{organization}/");
    client.DefaultRequestHeaders.Accept.Clear();
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", entraIdAccessToken);
    
    var patchOperations = new[]
    {
        new
        {
            op = "add",
            path = "/fields/System.State",
            value = "In Progress"
        },
        new
        {
            op = "add",
            path = "/fields/System.AssignedTo",
            value = "user@example.com"
        }
    };
    
    var json = JsonConvert.SerializeObject(patchOperations);
    var content = new StringContent(json, Encoding.UTF8, "application/json-patch+json");
    
    try
    {
        var response = await client.PatchAsync($"{project}/_apis/wit/workitems/{workItemId}?api-version=7.2", content);
        response.EnsureSuccessStatusCode();
        
        return await response.Content.ReadAsStringAsync();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Request failed: {ex.Message}");
        throw;
    }
}
```

#### PowerShell example

```powershell
Import-Module MSAL.PS

$clientId = "your-client-id"
$tenantId = "your-tenant-id"
$organization = "your-organization"
$project = "your-project"
$workItemId = 123  # Replace with actual work item ID

# Get access token
$token = Get-MsalToken -ClientId $clientId -TenantId $tenantId -Scopes "https://app.vssps.visualstudio.com/.default"

$headers = @{
    'Authorization' = "Bearer $($token.AccessToken)"
    'Content-Type' = 'application/json-patch+json'
}

$body = @(
    @{
        op = "add"
        path = "/fields/System.State"
        value = "In Progress"
    },
    @{
        op = "add"
        path = "/fields/System.AssignedTo"
        value = "user@example.com"
    }
) | ConvertTo-Json

$uri = "https://dev.azure.com/$organization/$project/_apis/wit/workitems/$workItemId?api-version=7.2"

try {
    $response = Invoke-RestMethod -Uri $uri -Method Patch -Headers $headers -Body $body
    Write-Host "Work item $workItemId updated successfully"
}
catch {
    Write-Error "Failed to update work item: $($_.Exception.Message)"
}
```

### Delete work item (DELETE)

Remove a work item from your project:

#### C# example

```csharp
public async Task<bool> DeleteWorkItemAsync(string organization, string project, int workItemId)
{
    using var client = new HttpClient();
    
    // Get Microsoft Entra ID access token
    var entraIdAccessToken = await GetAccessTokenAsync();
    
    // Set base address and headers
    client.BaseAddress = new Uri($"https://dev.azure.com/{organization}/");
    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", entraIdAccessToken);
    
    try
    {
        var response = await client.DeleteAsync($"{project}/_apis/wit/workitems/{workItemId}?api-version=7.2");
        response.EnsureSuccessStatusCode();
        
        Console.WriteLine($"Work item {workItemId} deleted successfully");
        return true;
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Request failed: {ex.Message}");
        throw;
    }
}
```

## .NET client libraries

For .NET applications, use the Azure DevOps .NET client libraries for better type safety and easier development.

### Installation

Add these NuGet packages to your project:

```xml
<PackageReference Include="Microsoft.TeamFoundationServer.Client" Version="19.225.1" />
<PackageReference Include="Microsoft.VisualStudio.Services.Client" Version="19.225.1" />
<PackageReference Include="Microsoft.Identity.Client" Version="4.61.3" />
```

### Get projects using .NET client

```csharp
using Microsoft.TeamFoundation.Core.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;
using Microsoft.Identity.Client;

public async Task<IEnumerable<TeamProjectReference>> GetProjectsAsync(string organizationUrl)
{
    var uri = new Uri(organizationUrl);
    
    // Get Microsoft Entra ID access token
    var entraIdAccessToken = await GetAccessTokenAsync();
    var credentials = new VssOAuthAccessTokenCredential(entraIdAccessToken);
    
    using var connection = new VssConnection(uri, credentials);
    using var projectClient = connection.GetClient<ProjectHttpClient>();
    
    try
    {
        var projects = await projectClient.GetProjects();
        return projects;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error retrieving projects: {ex.Message}");
        throw;
    }
}
```

### Create work item using .NET client

```csharp
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.WebApi.Patch;
using Microsoft.VisualStudio.Services.WebApi.Patch.Json;
using Microsoft.Identity.Client;

public async Task<WorkItem> CreateWorkItemAsync(string organizationUrl, string project)
{
    var uri = new Uri(organizationUrl);
    
    // Get Microsoft Entra ID access token
    var entraIdAccessToken = await GetAccessTokenAsync();
    var credentials = new VssOAuthAccessTokenCredential(entraIdAccessToken);
    
    using var connection = new VssConnection(uri, credentials);
    using var witClient = connection.GetClient<WorkItemTrackingHttpClient>();
    
    var patchDocument = new JsonPatchDocument
    {
        new JsonPatchOperation
        {
            Operation = Operation.Add,
            Path = "/fields/System.Title",
            Value = "Sample work item created via .NET client with Microsoft Entra ID"
        },
        new JsonPatchOperation
        {
            Operation = Operation.Add,
            Path = "/fields/System.Description", 
            Value = "This work item was created using the Azure DevOps .NET client library with Microsoft Entra ID authentication"
        }
    };
    
    try
    {
        var workItem = await witClient.CreateWorkItemAsync(patchDocument, project, "Task");
        return workItem;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error creating work item: {ex.Message}");
        throw;
    }
}
```

## Error handling

Always implement proper error handling in your applications:

```csharp
try
{
    var response = await client.GetAsync(requestUri);
    response.EnsureSuccessStatusCode();
    var content = await response.Content.ReadAsStringAsync();
    // Process successful response
}
catch (HttpRequestException ex)
{
    // Handle HTTP-related errors
    Console.WriteLine($"HTTP Error: {ex.Message}");
}
catch (TaskCanceledException ex) when (ex.InnerException is TimeoutException)
{
    // Handle timeout
    Console.WriteLine("Request timed out");
}
catch (Exception ex)
{
    // Handle other errors
    Console.WriteLine($"Unexpected error: {ex.Message}");
}
```

## Best practices

- **Use Microsoft Entra ID**: Use Microsoft Entra ID authentication over PATs for production applications
- **Use HTTPS**: Always use secure connections for API calls
- **Handle rate limits**: Implement retry logic with exponential backoff
- **Cache responses**: Store frequently accessed data to reduce API calls
- **Use specific API versions**: Pin to specific versions to avoid breaking changes
- **Validate inputs**: Always validate user inputs before making API calls
- **Log appropriately**: Log API interactions for debugging, but never log credentials
- **Token management**: Implement proper token caching and refresh logic for Microsoft Entra ID tokens

## Related content

- [Azure DevOps REST API Reference](/rest/api/azure/devops/?view=azure-devops-rest-7.2&preserve-view=true)
- [Get started with REST APIs](../../how-to/call-rest-api.md)
- [Authentication guidance](../authentication/authentication-guidance.md)
- [.NET client libraries overview](../../concepts/dotnet-client-libraries.md)
- [Rate limits and throttling](../../concepts/rate-limits.md)
