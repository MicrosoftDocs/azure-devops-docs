---
title: Get work items programmatically from Azure DevOps Services
description: Use REST APIs and .NET client libraries to fetch work items from Azure DevOps Services with queries in your own custom apps.
ms.assetid: e48d9d34-24dd-4e3e-abe8-8f5498e08083
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 07/16/2025
---

# Fetch work items with queries programmatically 

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Fetching work items using queries is a common scenario in Azure DevOps Services. This article explains how to implement this scenario programmatically using REST APIs or .NET client libraries.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Azure DevOps** | - [An organization](https://go.microsoft.com/fwlink/?LinkId=307137)<br>- Access to a project with work items |
|**Authentication** | Choose one of the following methods:<br>- [Microsoft Entra ID authentication](../get-started/authentication/entra.md) (recommended for interactive apps)<br>- [Service Principal authentication](../get-started/authentication/service-principal-managed-identity.md) (recommended for automation)<br>- [Managed Identity authentication](../get-started/authentication/service-principal-managed-identity.md) (recommended for Azure-hosted apps)<br>- [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (for testing) |
|**Development environment**| A C# development environment. You can use [Visual Studio](https://visualstudio.microsoft.com/vs/) |

> [!IMPORTANT]
> For production applications, we recommend using [Microsoft Entra ID authentication](../get-started/authentication/entra.md) instead of Personal Access Tokens (PATs). PATs are suitable for testing and development scenarios. For guidance on choosing the right authentication method, see [Authentication guidance](../get-started/authentication/authentication-guidance.md).

## Authentication options

This article demonstrates multiple authentication methods to suit different scenarios:

### Microsoft Entra ID authentication (Recommended for interactive apps)

For production applications with user interaction, use Microsoft Entra ID authentication:

```xml
<PackageReference Include="Microsoft.TeamFoundationServer.Client" Version="19.225.1" />
<PackageReference Include="Microsoft.VisualStudio.Services.InteractiveClient" Version="19.225.1" />
<PackageReference Include="Microsoft.Identity.Client" Version="4.61.3" />
```

### Service Principal authentication (Recommended for automation)

For automated scenarios, CI/CD pipelines, and server applications:

```xml
<PackageReference Include="Microsoft.TeamFoundationServer.Client" Version="19.225.1" />
<PackageReference Include="Microsoft.Identity.Client" Version="4.61.3" />
```

### Managed Identity authentication (Recommended for Azure-hosted apps)

For applications running on Azure services (Functions, App Service, etc.):

```xml
<PackageReference Include="Microsoft.TeamFoundationServer.Client" Version="19.225.1" />
<PackageReference Include="Azure.Identity" Version="1.10.4" />
```

### Personal Access Token authentication

For development and testing scenarios:

```xml
<PackageReference Include="Microsoft.TeamFoundationServer.Client" Version="19.225.1" />
```

## C# code examples

The following examples show how to fetch work items using different authentication methods.

### Example 1: Microsoft Entra ID authentication (Interactive)

```cs
// NuGet packages:
// Microsoft.TeamFoundationServer.Client
// Microsoft.VisualStudio.Services.InteractiveClient  
// Microsoft.Identity.Client
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

public class EntraIdQueryExecutor
{
    private readonly Uri uri;

    /// <summary>
    /// Initializes a new instance using Microsoft Entra ID authentication.
    /// </summary>
    /// <param name="orgName">Your Azure DevOps organization name</param>
    public EntraIdQueryExecutor(string orgName)
    {
        this.uri = new Uri("https://dev.azure.com/" + orgName);
    }

    /// <summary>
    /// Execute a WIQL query using Microsoft Entra ID authentication.
    /// </summary>
    /// <param name="project">The name of your project within your organization.</param>
    /// <returns>A list of WorkItem objects representing all the open bugs.</returns>
    public async Task<IList<WorkItem>> QueryOpenBugsAsync(string project)
    {
        // Use Microsoft Entra ID authentication
        var credentials = new VssAadCredential();
        var wiql = new Wiql()
        {
            Query = "SELECT [System.Id], [System.Title], [System.State] " +
                    "FROM WorkItems " +
                    "WHERE [Work Item Type] = 'Bug' " +
                    "AND [System.TeamProject] = '" + project + "' " +
                    "AND [System.State] <> 'Closed' " +
                    "ORDER BY [System.State] ASC, [System.ChangedDate] DESC",
        };

        using (var httpClient = new WorkItemTrackingHttpClient(this.uri, new VssCredentials(credentials)))
        {
            try
            {
                var result = await httpClient.QueryByWiqlAsync(wiql).ConfigureAwait(false);
                var ids = result.WorkItems.Select(item => item.Id).ToArray();

                if (ids.Length == 0)
                {
                    return Array.Empty<WorkItem>();
                }

                var fields = new[] { "System.Id", "System.Title", "System.State", "System.CreatedDate" };
                return await httpClient.GetWorkItemsAsync(ids, fields, result.AsOf).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error querying work items: {ex.Message}");
                return Array.Empty<WorkItem>();
            }
        }
    }

    /// <summary>
    /// Print the results of the work item query.
    /// </summary>
    public async Task PrintOpenBugsAsync(string project)
    {
        var workItems = await this.QueryOpenBugsAsync(project).ConfigureAwait(false);
        Console.WriteLine($"Query Results: {workItems.Count} items found");

        foreach (var workItem in workItems)
        {
            Console.WriteLine($"{workItem.Id}\t{workItem.Fields["System.Title"]}\t{workItem.Fields["System.State"]}");
        }
    }
}
```

### Example 2: Service Principal authentication (Automated scenarios)

```cs
// NuGet packages:
// Microsoft.TeamFoundationServer.Client
// Microsoft.Identity.Client
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Identity.Client;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

public class ServicePrincipalQueryExecutor
{
    private readonly Uri uri;
    private readonly string clientId;
    private readonly string clientSecret;
    private readonly string tenantId;

    /// <summary>
    /// Initializes a new instance using Service Principal authentication.
    /// </summary>
    /// <param name="orgName">Your Azure DevOps organization name</param>
    /// <param name="clientId">Service principal client ID</param>
    /// <param name="clientSecret">Service principal client secret</param>
    /// <param name="tenantId">Azure AD tenant ID</param>
    public ServicePrincipalQueryExecutor(string orgName, string clientId, string clientSecret, string tenantId)
    {
        this.uri = new Uri($"https://dev.azure.com/{orgName}");
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.tenantId = tenantId;
    }

    /// <summary>
    /// Execute a WIQL query using Service Principal authentication.
    /// </summary>
    public async Task<IList<WorkItem>> QueryOpenBugsAsync(string project)
    {
        // Acquire token using Service Principal
        var app = ConfidentialClientApplicationBuilder
            .Create(this.clientId)
            .WithClientSecret(this.clientSecret)
            .WithAuthority($"https://login.microsoftonline.com/{this.tenantId}")
            .Build();

        var scopes = new[] { "https://app.vssps.visualstudio.com/.default" };
        var result = await app.AcquireTokenForClient(scopes).ExecuteAsync();

        var credentials = new VssOAuthAccessTokenCredential(result.AccessToken);
        var wiql = new Wiql()
        {
            Query = "SELECT [System.Id], [System.Title], [System.State] " +
                    "FROM WorkItems " +
                    "WHERE [Work Item Type] = 'Bug' " +
                    "AND [System.TeamProject] = '" + project + "' " +
                    "AND [System.State] <> 'Closed' " +
                    "ORDER BY [System.State] ASC, [System.ChangedDate] DESC",
        };

        using (var httpClient = new WorkItemTrackingHttpClient(this.uri, new VssCredentials(credentials)))
        {
            try
            {
                var queryResult = await httpClient.QueryByWiqlAsync(wiql).ConfigureAwait(false);
                var ids = queryResult.WorkItems.Select(item => item.Id).ToArray();

                if (ids.Length == 0)
                {
                    return Array.Empty<WorkItem>();
                }

                var fields = new[] { "System.Id", "System.Title", "System.State", "System.CreatedDate" };
                return await httpClient.GetWorkItemsAsync(ids, fields, queryResult.AsOf).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error querying work items: {ex.Message}");
                return Array.Empty<WorkItem>();
            }
        }
    }
}
```

### Example 3: Managed Identity authentication (Azure-hosted apps)

```cs
// NuGet packages:
// Microsoft.TeamFoundationServer.Client
// Azure.Identity
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

public class ManagedIdentityQueryExecutor
{
    private readonly Uri uri;

    /// <summary>
    /// Initializes a new instance using Managed Identity authentication.
    /// </summary>
    /// <param name="orgName">Your Azure DevOps organization name</param>
    public ManagedIdentityQueryExecutor(string orgName)
    {
        this.uri = new Uri($"https://dev.azure.com/{orgName}");
    }

    /// <summary>
    /// Execute a WIQL query using Managed Identity authentication.
    /// </summary>
    public async Task<IList<WorkItem>> QueryOpenBugsAsync(string project)
    {
        // Use Managed Identity to acquire token
        var credential = new DefaultAzureCredential();
        var tokenRequestContext = new TokenRequestContext(new[] { "https://app.vssps.visualstudio.com/.default" });
        var tokenResult = await credential.GetTokenAsync(tokenRequestContext);

        var credentials = new VssOAuthAccessTokenCredential(tokenResult.Token);
        var wiql = new Wiql()
        {
            Query = "SELECT [System.Id], [System.Title], [System.State] " +
                    "FROM WorkItems " +
                    "WHERE [Work Item Type] = 'Bug' " +
                    "AND [System.TeamProject] = '" + project + "' " +
                    "AND [System.State] <> 'Closed' " +
                    "ORDER BY [System.State] ASC, [System.ChangedDate] DESC",
        };

        using (var httpClient = new WorkItemTrackingHttpClient(this.uri, new VssCredentials(credentials)))
        {
            try
            {
                var queryResult = await httpClient.QueryByWiqlAsync(wiql).ConfigureAwait(false);
                var ids = queryResult.WorkItems.Select(item => item.Id).ToArray();

                if (ids.Length == 0)
                {
                    return Array.Empty<WorkItem>();
                }

                var fields = new[] { "System.Id", "System.Title", "System.State", "System.CreatedDate" };
                return await httpClient.GetWorkItemsAsync(ids, fields, queryResult.AsOf).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error querying work items: {ex.Message}");
                return Array.Empty<WorkItem>();
            }
        }
    }
}
```

### Example 4: Personal Access Token authentication

```cs
// NuGet package: Microsoft.TeamFoundationServer.Client
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

public class PatQueryExecutor
{
    private readonly Uri uri;
    private readonly string personalAccessToken;

    /// <summary>
    /// Initializes a new instance using Personal Access Token authentication.
    /// </summary>
    /// <param name="orgName">Your Azure DevOps organization name</param>
    /// <param name="personalAccessToken">Your Personal Access Token</param>
    public PatQueryExecutor(string orgName, string personalAccessToken)
    {
        this.uri = new Uri("https://dev.azure.com/" + orgName);
        this.personalAccessToken = personalAccessToken;
    }

    /// <summary>
    /// Execute a WIQL query using Personal Access Token authentication.
    /// </summary>
    /// <param name="project">The name of your project within your organization.</param>
    /// <returns>A list of WorkItem objects representing all the open bugs.</returns>
    public async Task<IList<WorkItem>> QueryOpenBugsAsync(string project)
    {
        var credentials = new VssBasicCredential(string.Empty, this.personalAccessToken);
        var wiql = new Wiql()
        {
            Query = "SELECT [System.Id], [System.Title], [System.State] " +
                    "FROM WorkItems " +
                    "WHERE [Work Item Type] = 'Bug' " +
                    "AND [System.TeamProject] = '" + project + "' " +
                    "AND [System.State] <> 'Closed' " +
                    "ORDER BY [System.State] ASC, [System.ChangedDate] DESC",
        };

        using (var httpClient = new WorkItemTrackingHttpClient(this.uri, new VssCredentials(credentials)))
        {
            try
            {
                var result = await httpClient.QueryByWiqlAsync(wiql).ConfigureAwait(false);
                var ids = result.WorkItems.Select(item => item.Id).ToArray();

                if (ids.Length == 0)
                {
                    return Array.Empty<WorkItem>();
                }

                var fields = new[] { "System.Id", "System.Title", "System.State", "System.CreatedDate" };
                return await httpClient.GetWorkItemsAsync(ids, fields, result.AsOf).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error querying work items: {ex.Message}");
                return Array.Empty<WorkItem>();
            }
        }
    }
}
```

## Usage examples

### Using Microsoft Entra ID authentication (Interactive)

```cs
class Program
{
    static async Task Main(string[] args)
    {
        var executor = new EntraIdQueryExecutor("your-organization-name");
        await executor.PrintOpenBugsAsync("your-project-name");
    }
}
```

### Using Service Principal authentication (CI/CD scenarios)

```cs
class Program
{
    static async Task Main(string[] args)
    {
        // These values should come from environment variables or Azure Key Vault
        var clientId = Environment.GetEnvironmentVariable("AZURE_CLIENT_ID");
        var clientSecret = Environment.GetEnvironmentVariable("AZURE_CLIENT_SECRET");
        var tenantId = Environment.GetEnvironmentVariable("AZURE_TENANT_ID");
        
        var executor = new ServicePrincipalQueryExecutor("your-organization-name", clientId, clientSecret, tenantId);
        var workItems = await executor.QueryOpenBugsAsync("your-project-name");
        
        Console.WriteLine($"Found {workItems.Count} open bugs via automation");
        foreach (var item in workItems)
        {
            Console.WriteLine($"Bug {item.Id}: {item.Fields["System.Title"]}");
        }
    }
}
```

### Using Managed Identity authentication (Azure Functions/App Service)

```cs
public class WorkItemQueryFunction
{
    [FunctionName("QueryOpenBugs")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get")] HttpRequest req,
        ILogger log)
    {
        var executor = new ManagedIdentityQueryExecutor("your-organization-name");
        var workItems = await executor.QueryOpenBugsAsync("your-project-name");
        
        return new OkObjectResult(new { 
            Count = workItems.Count,
            Items = workItems.Select(wi => new { 
                Id = wi.Id, 
                Title = wi.Fields["System.Title"],
                State = wi.Fields["System.State"]
            })
        });
    }
}
```

### Using Personal Access Token authentication (Development/Testing)

```cs
class Program
{
    static async Task Main(string[] args)
    {
        var pat = Environment.GetEnvironmentVariable("AZURE_DEVOPS_PAT"); // Never hardcode PATs
        var executor = new PatQueryExecutor("your-organization-name", pat);
        var workItems = await executor.QueryOpenBugsAsync("your-project-name");
        
        Console.WriteLine($"Found {workItems.Count} open bugs");
        foreach (var item in workItems)
        {
            Console.WriteLine($"Bug {item.Id}: {item.Fields["System.Title"]}");
        }
    }
}
```

## Best practices

### Authentication
- **Use Microsoft Entra ID** for interactive applications with user sign-in
- **Use Service Principal** for automated scenarios, CI/CD pipelines, and server applications
- **Use Managed Identity** for applications running on Azure services (Functions, App Service, VMs)
- **Avoid Personal Access Tokens** in production; use only for development and testing
- **Never hardcode credentials** in source code; use environment variables or Azure Key Vault
- **Implement credential rotation** for long-running applications
- **Ensure proper scopes**: Work item queries require appropriate read permissions in Azure DevOps

### Error handling
- **Implement retry logic** with exponential backoff for transient failures
- **Log errors appropriately** for debugging and monitoring
- **Handle specific exceptions** like authentication failures and network timeouts
- **Use cancellation tokens** for long-running operations

### Performance
- **Batch work item retrievals** when querying multiple items
- **Limit query results** using TOP clause for large datasets
- **Cache frequently accessed data** to reduce API calls
- **Use appropriate fields** to minimize data transfer

### Query optimization
- **Use specific field names** instead of SELECT * for better performance
- **Add proper WHERE clauses** to filter results at the server
- **Order results appropriately** for your use case
- **Consider query limits** and pagination for large result sets

## Troubleshooting

### Authentication issues
- **Microsoft Entra ID authentication failures**: Ensure the user has proper permissions and is signed in to Azure DevOps
- **Service Principal authentication failures**: Verify client ID, secret, and tenant ID are correct; check service principal permissions in Azure DevOps
- **Managed Identity authentication failures**: Ensure the Azure resource has a managed identity enabled and proper permissions
- **PAT authentication failures**: Verify the token is valid and has appropriate scopes (`vso.work` for work item access)
- **Token expiration**: Check if your PAT expired and generate a new one if needed

### Query issues
- **Invalid WIQL syntax**: Ensure your Work Item Query Language syntax is correct
- **Project name errors**: Verify the project name exists and is spelled correctly
- **Field name errors**: Use the correct system field names (for example, `System.Id`, `System.Title`)

### Common exceptions
- **VssUnauthorizedException**: Check authentication credentials and permissions
- **ArgumentException**: Verify all required parameters are provided and valid
- **HttpRequestException**: Check network connectivity and service availability

### Performance issues
- **Slow queries**: Add appropriate WHERE clauses and limit result sets
- **Memory usage**: Process large result sets in batches
- **Rate limiting**: Implement retry logic with exponential backoff

## Next steps

- [Learn about authentication options](../get-started/authentication/authentication-guidance.md)
- [Explore REST API samples](../get-started/rest/samples.md)
- [Understanding Work Item Query Language (WIQL)](../../boards/queries/wiql-syntax.md)
