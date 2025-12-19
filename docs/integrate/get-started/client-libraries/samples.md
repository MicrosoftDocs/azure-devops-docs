---
title: .NET Client Library Samples for Azure DevOps
description: Learn how to extend and integrate with Azure DevOps by using C# samples with modern authentication and best practices.
ms.assetid: 9ff78e9c-63f7-45b1-a70d-42aa6a9dbc57
ms.subservice: azure-devops-ecosystem
ms.custom: devx-track-dotnet
ai-usage: ai-assisted
ms.topic: concept-article
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/14/2025
---

# .NET client library samples for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Learn how to extend and integrate with Azure DevOps using the [.NET client libraries](../../concepts/dotnet-client-libraries.md) with modern authentication methods and secure coding practices.

## Prerequisites

**Required NuGet packages:**
- [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/) - Core Azure DevOps APIs
- [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/) - Connection and authentication
- [Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/) - Interactive authentication flows

**Authentication recommendations:**
- **Azure-hosted applications**: Use [managed identities](../authentication/service-principal-managed-identity.md)
- **CI/CD pipelines**: Use [service principals](../authentication/service-principal-managed-identity.md) 
- **Interactive applications**: Use [Microsoft Entra authentication](../authentication/entra.md)
- **Legacy scenarios only**: Use [personal access tokens](../authentication/authentication-guidance.md)

> [!IMPORTANT]
> This article shows multiple authentication methods for different scenarios. Choose the most appropriate method based on your deployment environment and security requirements.

## Core connection and work item example

This comprehensive example demonstrates best practices for connecting to Azure DevOps and working with work items:

```csharp
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Client;
using Microsoft.VisualStudio.Services.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/// <summary>
/// Demonstrates secure Azure DevOps integration with proper error handling and resource management
/// </summary>
public class AzureDevOpsService
{
    private readonly VssConnection _connection;
    private readonly WorkItemTrackingHttpClient _witClient;

    public AzureDevOpsService(string organizationUrl, VssCredentials credentials)
    {
        // Create connection with proper credential management
        _connection = new VssConnection(new Uri(organizationUrl), credentials);
        
        // Get work item tracking client (reused for efficiency)
        _witClient = _connection.GetClient<WorkItemTrackingHttpClient>();
    }

    /// <summary>
    /// Creates a work item query, executes it, and returns results with proper error handling
    /// </summary>
    public async Task<IEnumerable<WorkItem>> GetNewBugsAsync(string projectName)
    {
        try
        {
            // Get query hierarchy with proper depth control
            var queryHierarchyItems = await _witClient.GetQueriesAsync(projectName, depth: 2);

            // Find 'My Queries' folder using safe navigation
            var myQueriesFolder = queryHierarchyItems
                .FirstOrDefault(qhi => qhi.Name.Equals("My Queries", StringComparison.OrdinalIgnoreCase));

            if (myQueriesFolder == null)
            {
                throw new InvalidOperationException("'My Queries' folder not found in project.");
            }

            const string queryName = "New Bugs Query";
            
            // Check if query already exists
            var existingQuery = myQueriesFolder.Children?
                .FirstOrDefault(qhi => qhi.Name.Equals(queryName, StringComparison.OrdinalIgnoreCase));

            QueryHierarchyItem query;
            if (existingQuery == null)
            {
                // Create new query with proper WIQL
                query = new QueryHierarchyItem
                {
                    Name = queryName,
                    Wiql = @"
                        SELECT [System.Id], [System.WorkItemType], [System.Title], 
                               [System.AssignedTo], [System.State], [System.Tags] 
                        FROM WorkItems 
                        WHERE [System.TeamProject] = @project 
                          AND [System.WorkItemType] = 'Bug' 
                          AND [System.State] = 'New'
                        ORDER BY [System.CreatedDate] DESC",
                    IsFolder = false
                };
                
                query = await _witClient.CreateQueryAsync(query, projectName, myQueriesFolder.Name);
            }
            else
            {
                query = existingQuery;
            }

            // Execute query and get results
            var queryResult = await _witClient.QueryByIdAsync(query.Id);
            
            if (!queryResult.WorkItems.Any())
            {
                return Enumerable.Empty<WorkItem>();
            }

            // Batch process work items for efficiency
            const int batchSize = 100;
            var allWorkItems = new List<WorkItem>();
            
            for (int skip = 0; skip < queryResult.WorkItems.Count(); skip += batchSize)
            {
                var batch = queryResult.WorkItems.Skip(skip).Take(batchSize);
                var workItemIds = batch.Select(wir => wir.Id).ToArray();
                
                // Get detailed work item information
                var workItems = await _witClient.GetWorkItemsAsync(
                    ids: workItemIds,
                    fields: new[] { "System.Id", "System.Title", "System.State", 
                                   "System.AssignedTo", "System.CreatedDate" });
                
                allWorkItems.AddRange(workItems);
            }

            return allWorkItems;
        }
        catch (Exception ex)
        {
            // Log error appropriately in real applications
            throw new InvalidOperationException($"Failed to retrieve work items: {ex.Message}", ex);
        }
    }

    /// <summary>
    /// Properly dispose of resources
    /// </summary>
    public void Dispose()
    {
        _witClient?.Dispose();
        _connection?.Dispose();
    }
}
```

## Authentication methods

### Microsoft Entra authentication (Recommended)

For applications that support interactive authentication or have Microsoft Entra tokens:

```csharp
using Microsoft.VisualStudio.Services.Client;
using Microsoft.VisualStudio.Services.Common;

/// <summary>
/// Authenticate using Microsoft Entra ID credentials
/// Recommended for interactive applications and modern authentication scenarios
/// </summary>
public static VssConnection CreateEntraConnection(string organizationUrl, string accessToken)
{
    // Use Microsoft Entra access token for authentication
    var credentials = new VssOAuthAccessTokenCredential(accessToken);
    return new VssConnection(new Uri(organizationUrl), credentials);
}

/// <summary>
/// For username/password scenarios (less secure, avoid when possible)
/// </summary>
public static VssConnection CreateEntraUsernameConnection(string organizationUrl, string username, string password)
{
    var credentials = new VssAadCredential(username, password);
    return new VssConnection(new Uri(organizationUrl), credentials);
}
```

### Service principal authentication

For automated scenarios and CI/CD pipelines:

```csharp
using Microsoft.Identity.Client;
using Microsoft.VisualStudio.Services.Client;

/// <summary>
/// Authenticate using service principal with certificate (most secure)
/// Recommended for production automation scenarios
/// </summary>
public static async Task<VssConnection> CreateServicePrincipalConnectionAsync(
    string organizationUrl, 
    string clientId, 
    string tenantId, 
    X509Certificate2 certificate)
{
    try
    {
        // Create confidential client application with certificate
        var app = ConfidentialClientApplicationBuilder
            .Create(clientId)
            .WithCertificate(certificate)
            .WithAuthority(new Uri($"https://login.microsoftonline.com/{tenantId}"))
            .Build();

        // Acquire token for Azure DevOps
        var result = await app
            .AcquireTokenForClient(new[] { "https://app.vssps.visualstudio.com/.default" })
            .ExecuteAsync();

        // Create connection with acquired token
        var credentials = new VssOAuthAccessTokenCredential(result.AccessToken);
        return new VssConnection(new Uri(organizationUrl), credentials);
    }
    catch (Exception ex)
    {
        throw new AuthenticationException($"Failed to authenticate service principal: {ex.Message}", ex);
    }
}

/// <summary>
/// Service principal with client secret (less secure than certificate)
/// </summary>
public static async Task<VssConnection> CreateServicePrincipalSecretConnectionAsync(
    string organizationUrl,
    string clientId,
    string tenantId,
    string clientSecret)
{
    var app = ConfidentialClientApplicationBuilder
        .Create(clientId)
        .WithClientSecret(clientSecret)
        .WithAuthority(new Uri($"https://login.microsoftonline.com/{tenantId}"))
        .Build();

    var result = await app
        .AcquireTokenForClient(new[] { "https://app.vssps.visualstudio.com/.default" })
        .ExecuteAsync();

    var credentials = new VssOAuthAccessTokenCredential(result.AccessToken);
    return new VssConnection(new Uri(organizationUrl), credentials);
}
```

### Managed identity authentication

For Azure-hosted applications (recommended for cloud scenarios):

```csharp
using Azure.Identity;
using Azure.Core;
using Microsoft.VisualStudio.Services.Client;

/// <summary>
/// Authenticate using managed identity (most secure for Azure-hosted apps)
/// No credentials to manage - Azure handles everything automatically
/// </summary>
public static async Task<VssConnection> CreateManagedIdentityConnectionAsync(string organizationUrl)
{
    try
    {
        // Use system-assigned managed identity
        var credential = new ManagedIdentityCredential();
        
        // Acquire token for Azure DevOps
        var tokenRequest = new TokenRequestContext(new[] { "https://app.vssps.visualstudio.com/.default" });
        var tokenResponse = await credential.GetTokenAsync(tokenRequest);

        // Create connection with managed identity token
        var credentials = new VssOAuthAccessTokenCredential(tokenResponse.Token);
        return new VssConnection(new Uri(organizationUrl), credentials);
    }
    catch (Exception ex)
    {
        throw new AuthenticationException($"Failed to authenticate with managed identity: {ex.Message}", ex);
    }
}

/// <summary>
/// Use user-assigned managed identity with specific client ID
/// </summary>
public static async Task<VssConnection> CreateUserAssignedManagedIdentityConnectionAsync(
    string organizationUrl, 
    string managedIdentityClientId)
{
    var credential = new ManagedIdentityCredential(managedIdentityClientId);
    var tokenRequest = new TokenRequestContext(new[] { "https://app.vssps.visualstudio.com/.default" });
    var tokenResponse = await credential.GetTokenAsync(tokenRequest);

    var credentials = new VssOAuthAccessTokenCredential(tokenResponse.Token);
    return new VssConnection(new Uri(organizationUrl), credentials);
}
```

### Interactive authentication (.NET Framework only)

For desktop applications requiring user sign-in:

```csharp
/// <summary>
/// Interactive authentication with Visual Studio sign-in prompt
/// .NET Framework only - not supported in .NET Core/.NET 5+
/// </summary>
public static VssConnection CreateInteractiveConnection(string organizationUrl)
{
    var credentials = new VssClientCredentials();
    return new VssConnection(new Uri(organizationUrl), credentials);
}
```

### Personal access token authentication (Legacy)

> [!WARNING]
> Personal access tokens are being deprecated. Use modern authentication methods instead. See [Authentication guidance](../authentication/authentication-guidance.md) for migration options.

```csharp
/// <summary>
/// Personal Access Token authentication (legacy - use modern auth instead)
/// Only use for migration scenarios or when modern auth isn't available
/// </summary>
public static VssConnection CreatePATConnection(string organizationUrl, string personalAccessToken)
{
    var credentials = new VssBasicCredential(string.Empty, personalAccessToken);
    return new VssConnection(new Uri(organizationUrl), credentials);
}
```

## Complete usage examples

### Azure Function with managed identity

```csharp
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

public class AzureDevOpsFunction
{
    private readonly ILogger<AzureDevOpsFunction> _logger;

    public AzureDevOpsFunction(ILogger<AzureDevOpsFunction> logger)
    {
        _logger = logger;
    }

    [Function("ProcessWorkItems")]
    public async Task<string> ProcessWorkItems(
        [TimerTrigger("0 0 8 * * MON")] TimerInfo timer)
    {
        try
        {
            var organizationUrl = Environment.GetEnvironmentVariable("AZURE_DEVOPS_ORG_URL");
            var projectName = Environment.GetEnvironmentVariable("AZURE_DEVOPS_PROJECT");

            // Use managed identity for secure authentication
            using var connection = await CreateManagedIdentityConnectionAsync(organizationUrl);
            using var service = new AzureDevOpsService(organizationUrl, connection.Credentials);

            var workItems = await service.GetNewBugsAsync(projectName);
            
            _logger.LogInformation($"Processed {workItems.Count()} work items");
            
            return $"Successfully processed {workItems.Count()} work items";
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to process work items");
            throw;
        }
    }
}
```

### Console application with service principal

```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

class Program
{
    static async Task Main(string[] args)
    {
        // Configure logging and configuration
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .AddEnvironmentVariables()
            .Build();

        using var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());
        var logger = loggerFactory.CreateLogger<Program>();

        try
        {
            var settings = configuration.GetSection("AzureDevOps");
            var organizationUrl = settings["OrganizationUrl"];
            var projectName = settings["ProjectName"];
            var clientId = settings["ClientId"];
            var tenantId = settings["TenantId"];
            var clientSecret = settings["ClientSecret"]; // Better: use Key Vault

            // Authenticate with service principal
            using var connection = await CreateServicePrincipalSecretConnectionAsync(
                organizationUrl, clientId, tenantId, clientSecret);
            
            using var service = new AzureDevOpsService(organizationUrl, connection.Credentials);

            // Process work items
            var workItems = await service.GetNewBugsAsync(projectName);
            
            foreach (var workItem in workItems)
            {
                Console.WriteLine($"Bug {workItem.Id}: {workItem.Fields["System.Title"]}");
            }

            logger.LogInformation($"Successfully processed {workItems.Count()} work items");
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Application failed");
            Environment.Exit(1);
        }
    }
}
```

## Best practices

### Security considerations

**Credential management:**
- **Never hardcode credentials** in source code
- Use **Azure Key Vault** for storing secrets
- Prefer **managed identities** for Azure-hosted applications
- Use **certificates over client secrets** for service principals
- **Rotate credentials regularly** following security policies

**Access control:**
- Apply **principle of least privilege**
- Use **specific scopes** when acquiring tokens
- **Monitor and audit** authentication events
- Implement **conditional access policies** where appropriate

### Performance optimization

**Connection management:**
- **Reuse VssConnection instances** across operations
- **Pool HTTP clients** through the connection object
- **Implement proper disposal** patterns
- **Configure timeouts** appropriately

**Batch operations:**
- **Process work items in batches** (recommended: 100 items)
- **Use parallel processing** for independent operations
- **Implement retry logic** with exponential backoff
- **Cache frequently accessed data** when appropriate

### Error handling

```csharp
public async Task<T> ExecuteWithRetryAsync<T>(Func<Task<T>> operation, int maxRetries = 3)
{
    var retryCount = 0;
    var baseDelay = TimeSpan.FromSeconds(1);

    while (retryCount < maxRetries)
    {
        try
        {
            return await operation();
        }
        catch (Exception ex) when (IsTransientError(ex) && retryCount < maxRetries - 1)
        {
            retryCount++;
            var delay = TimeSpan.FromMilliseconds(baseDelay.TotalMilliseconds * Math.Pow(2, retryCount));
            await Task.Delay(delay);
        }
    }

    // Final attempt without catch
    return await operation();
}

private static bool IsTransientError(Exception ex)
{
    return ex is HttpRequestException ||
           ex is TaskCanceledException ||
           (ex is VssServiceException vssEx && vssEx.HttpStatusCode >= 500);
}
```

## Migration guidance

### From PATs to modern authentication

**Step 1: Assess current usage**
- Identify all applications using PATs
- Determine deployment environments (Azure vs. on-premises)
- Evaluate security requirements

**Step 2: Choose replacement method**
- **Azure-hosted**: Migrate to managed identities
- **CI/CD pipelines**: Use service principals
- **Interactive apps**: Implement Microsoft Entra authentication
- **Desktop apps**: Consider device code flow

**Step 3: Implementation**
- Update authentication code using the previous examples
- Test thoroughly in development environment
- Deploy incrementally to production
- Monitor for authentication issues

For detailed migration guidance, see [Replace PATs with Microsoft Entra tokens](../authentication/entra.md#migration-from-legacy-authentication).

## Related resources

- [Authentication guidance for Azure DevOps](../authentication/authentication-guidance.md)
- [Service principals and managed identities](../authentication/service-principal-managed-identity.md)
- [Microsoft Entra authentication](../authentication/entra.md)
- [.NET client libraries concepts](../../concepts/dotnet-client-libraries.md)
- [Azure DevOps authentication samples](https://github.com/microsoft/azure-devops-auth-samples)
- [Microsoft identity platform documentation](/entra/identity-platform/)
