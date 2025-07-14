---
title: Legacy SOAP client library samples for Azure DevOps
description: C# samples showing how to integrate with Azure DevOps using legacy SOAP clients (.NET Framework only) - modern REST clients recommended.
ms.assetid: 9ff78e9c-63f7-45b1-a70d-42aa6a9dbc57
ms.subservice: azure-devops-ecosystem
ai-usage: ai-assisted
ms.custom: devx-track-dotnet
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/14/2025
---

# SOAP client library samples for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

> [!WARNING]
> **Legacy technology - modern alternatives recommended**
> 
> These SOAP-based clients are legacy technology and should only be used for:
> - Maintaining existing applications that can't be modernized
> - .NET Framework applications that require SOAP-specific functionality
> 
> For new development, use the modern [REST-based .NET client libraries](samples.md) that offer:
> - ✅ Better performance and reliability
> - ✅ Support for .NET Core, .NET 5+, and .NET Framework
> - ✅ Modern authentication methods (managed identities, service principals)
> - ✅ Async/await patterns and modern C# features
> - ✅ Active development and support

This article contains samples for integrating with Azure DevOps Server and Azure DevOps Services using legacy SOAP clients. These clients are only available in the .NET Framework version and require on-premises or legacy authentication methods.

## Prerequisites and limitations

**Requirements:**
- .NET Framework 4.6.1 or later
- Legacy NuGet packages
- Windows environment for SOAP client support

**Limitations:**
- ❌ No .NET Core or .NET 5+ support
- ❌ Limited modern authentication options
- ❌ No async/await patterns
- ❌ Reduced performance compared to REST clients
- ❌ Limited future support and updates

**Required NuGet packages:**
- [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/) - Legacy SOAP clients
- [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/) - Core Azure DevOps APIs
- [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/) - Connection and authentication
- [Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/) - Interactive authentication flows

## Migration guidance

### Recommended migration path

**Step 1: Assess your current usage**
- Identify SOAP-specific functionality your application uses
- Determine if equivalent REST APIs are available
- Evaluate authentication requirements

**Step 2: Plan migration strategy**
- **Immediate**: Update authentication to use PATs or Microsoft Entra ID
- **Short-term**: Migrate to REST-based clients while keeping .NET Framework
- **Long-term**: Modernize to .NET Core/.NET 5+ with REST clients

**Step 3: Implement migration**
- Start with authentication updates. See the examples that follow.
- Replace SOAP clients with REST equivalents incrementally
- Test thoroughly before deploying to production

For detailed migration guidance, see [.NET client library samples](samples.md).

## Legacy SOAP client examples

### Basic SOAP client usage

> [!IMPORTANT]
> This example shows legacy patterns for reference only. Use [REST-based samples](samples.md) for new development.

```csharp
using Microsoft.TeamFoundation.Client;
using Microsoft.TeamFoundation.WorkItemTracking.Client;
using Microsoft.VisualStudio.Services.Common;
using System;
using System.Linq;

/// <summary>
/// Legacy SOAP client example - use REST clients for new development
/// Creates a work item query, runs it, and displays results
/// </summary>
public static class LegacySoapExample
{
    public static void ExecuteWorkItemQuery(string collectionUri, string teamProjectName, VssCredentials credentials)
    {
        try
        {
            // Create TfsTeamProjectCollection instance with credentials
            using (var tpc = new TfsTeamProjectCollection(new Uri(collectionUri), credentials))
            {
                // Authenticate the connection
                tpc.Authenticate();
                
                // Get the WorkItemStore service (SOAP-based)
                var workItemStore = tpc.GetService<WorkItemStore>();
                
                // Get the project context
                var workItemProject = workItemStore.Projects[teamProjectName];
                
                // Find 'My Queries' folder
                var myQueriesFolder = workItemProject.QueryHierarchy
                    .OfType<QueryFolder>()
                    .FirstOrDefault(qh => qh.IsPersonal);
                
                if (myQueriesFolder != null)
                {
                    const string queryName = "Legacy SOAP Sample";
                    
                    // Check if query already exists
                    var existingQuery = myQueriesFolder
                        .OfType<QueryDefinition>()
                        .FirstOrDefault(qi => qi.Name.Equals(queryName, StringComparison.OrdinalIgnoreCase));
                    
                    QueryDefinition queryDefinition;
                    if (existingQuery == null)
                    {
                        // Create new query with proper WIQL
                        queryDefinition = new QueryDefinition(
                            queryName,
                            @"SELECT [System.Id], [System.WorkItemType], [System.Title], 
                                     [System.AssignedTo], [System.State], [System.Tags] 
                              FROM WorkItems 
                              WHERE [System.TeamProject] = @project 
                                AND [System.WorkItemType] = 'Bug' 
                                AND [System.State] = 'New'
                              ORDER BY [System.CreatedDate] DESC");
                        
                        myQueriesFolder.Add(queryDefinition);
                        workItemProject.QueryHierarchy.Save();
                    }
                    else
                    {
                        queryDefinition = existingQuery;
                    }
                    
                    // Execute the query
                    var workItems = workItemStore.Query(queryDefinition.QueryText);
                    
                    Console.WriteLine($"Found {workItems.Count} work items:");
                    foreach (WorkItem workItem in workItems)
                    {
                        var title = workItem.Fields["System.Title"].Value;
                        var state = workItem.Fields["System.State"].Value;
                        Console.WriteLine($"#{workItem.Id}: {title} [{state}]");
                    }
                    
                    if (workItems.Count == 0)
                    {
                        Console.WriteLine("No work items found matching the query criteria.");
                    }
                }
                else
                {
                    Console.WriteLine("'My Queries' folder not found.");
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error executing SOAP query: {ex.Message}");
            throw;
        }
    }
}
```

## Legacy authentication methods

> [!WARNING]
> These authentication methods have security limitations. Migrate to [modern authentication](samples.md#authentication-methods) when possible.

### Personal access token authentication (not recommended)

```csharp
/// <summary>
/// Authenticate SOAP client using Personal Access Token
/// Most secure option for legacy SOAP clients
/// </summary>
public static void AuthenticateWithPAT(string collectionUri, string personalAccessToken)
{
    try
    {
        var credentials = new VssBasicCredential(string.Empty, personalAccessToken);
        
        using (var tpc = new TfsTeamProjectCollection(new Uri(collectionUri), credentials))
        {
            tpc.Authenticate();
            Console.WriteLine($"Successfully authenticated to: {tpc.DisplayName}");
            Console.WriteLine($"Instance ID: {tpc.InstanceId}");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"PAT authentication failed: {ex.Message}");
        throw;
    }
}
```

### Microsoft Entra authentication (Limited support)

```csharp
/// <summary>
/// Microsoft Entra authentication for SOAP services
/// Limited to specific scenarios - prefer REST clients for modern auth
/// </summary>
public static void AuthenticateWithEntraID(string collectionUri)
{
    try
    {
        // Note: Limited authentication options compared to REST clients
        var credentials = new VssAadCredential();
        
        using (var tpc = new TfsTeamProjectCollection(new Uri(collectionUri), credentials))
        {
            tpc.Authenticate();
            Console.WriteLine($"Successfully authenticated with Microsoft Entra ID");
            Console.WriteLine($"Collection: {tpc.DisplayName}");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Microsoft Entra authentication failed: {ex.Message}");
        Console.WriteLine("Consider migrating to REST clients for better authentication support.");
        throw;
    }
}
```

### Interactive authentication (.NET Framework only)

```csharp
/// <summary>
/// Interactive authentication with Visual Studio sign-in prompt
/// Only works in .NET Framework with UI context
/// </summary>
public static void AuthenticateInteractively(string collectionUri)
{
    try
    {
        var credentials = new VssClientCredentials();
        
        using (var tpc = new TfsTeamProjectCollection(new Uri(collectionUri), credentials))
        {
            tpc.Authenticate();
            Console.WriteLine($"Interactive authentication successful");
            Console.WriteLine($"Authenticated user: {tpc.AuthorizedIdentity.DisplayName}");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Interactive authentication failed: {ex.Message}");
        Console.WriteLine("Ensure application has UI context and user interaction is possible.");
        throw;
    }
}
```

### Username/password authentication (Deprecated)

> [!CAUTION]
> Username/password authentication is deprecated and insecure. Use PATs or modern authentication methods instead.

```csharp
/// <summary>
/// Username/password authentication - DEPRECATED AND INSECURE
/// Only use for legacy on-premises scenarios where no alternatives exist
/// </summary>
[Obsolete("Username/password authentication is deprecated. Use PATs or modern authentication.")]
public static void AuthenticateWithUsernamePassword(string collectionUri, string username, string password)
{
    try
    {
        var credentials = new VssAadCredential(username, password);
        
        using (var tpc = new TfsTeamProjectCollection(new Uri(collectionUri), credentials))
        {
            tpc.Authenticate();
            Console.WriteLine("Username/password authentication successful (DEPRECATED)");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Username/password authentication failed: {ex.Message}");
        Console.WriteLine("This method is deprecated. Please migrate to PATs or modern authentication.");
        throw;
    }
}
```

## Complete legacy example

```csharp
using Microsoft.TeamFoundation.Client;
using Microsoft.TeamFoundation.WorkItemTracking.Client;
using Microsoft.VisualStudio.Services.Common;
using System;
using System.Configuration;

/// <summary>
/// Complete example showing legacy SOAP client usage
/// For reference only - use REST clients for new development
/// </summary>
class LegacySoapProgram
{
    static void Main(string[] args)
    {
        try
        {
            // Get configuration (prefer environment variables or secure config)
            var collectionUri = ConfigurationManager.AppSettings["CollectionUri"];
            var projectName = ConfigurationManager.AppSettings["ProjectName"];
            var personalAccessToken = ConfigurationManager.AppSettings["PAT"]; // Store securely
            
            if (string.IsNullOrEmpty(collectionUri) || string.IsNullOrEmpty(projectName))
            {
                Console.WriteLine("Please configure CollectionUri and ProjectName in app.config");
                return;
            }
            
            Console.WriteLine("=== Legacy SOAP Client Example ===");
            Console.WriteLine("WARNING: This uses deprecated SOAP clients.");
            Console.WriteLine("Consider migrating to REST clients for better performance and support.");
            Console.WriteLine();
            
            VssCredentials credentials;
            
            if (!string.IsNullOrEmpty(personalAccessToken))
            {
                // Recommended: Use PAT authentication
                credentials = new VssBasicCredential(string.Empty, personalAccessToken);
                Console.WriteLine("Using Personal Access Token authentication");
            }
            else
            {
                // Fallback: Interactive authentication (requires UI)
                credentials = new VssClientCredentials();
                Console.WriteLine("Using interactive authentication");
            }
            
            // Execute the legacy SOAP example
            LegacySoapExample.ExecuteWorkItemQuery(collectionUri, projectName, credentials);
            
            Console.WriteLine();
            Console.WriteLine("Example completed successfully.");
            Console.WriteLine("For new development, see: https://docs.microsoft.com/azure/devops/integrate/concepts/dotnet-client-libraries");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            Console.WriteLine();
            Console.WriteLine("Migration recommendations:");
            Console.WriteLine("1. Update to REST-based client libraries");
            Console.WriteLine("2. Use modern authentication (managed identities, service principals)");
            Console.WriteLine("3. Migrate to .NET Core/.NET 5+ for better performance");
            
            Environment.Exit(1);
        }
        
        Console.WriteLine("Press any key to exit...");
        Console.ReadKey();
    }
}
```

## Migration to modern clients

### Side-by-side comparison

**Legacy SOAP approach:**
```csharp
// ❌ Legacy SOAP pattern
using (var tpc = new TfsTeamProjectCollection(uri, credentials))
{
    var workItemStore = tpc.GetService<WorkItemStore>();
    var workItems = workItemStore.Query("SELECT * FROM WorkItems");
    // Synchronous, blocking operations
}
```

**Modern REST approach:**
```csharp
// ✅ Modern REST pattern
using var connection = new VssConnection(uri, credentials);
var witClient = connection.GetClient<WorkItemTrackingHttpClient>();
var workItems = await witClient.QueryByWiqlAsync(new Wiql { Query = "SELECT * FROM WorkItems" });
// Asynchronous, non-blocking operations
```

### Key differences

| Feature | Legacy SOAP | Modern REST |
|---------|-------------|-------------|
| **Platform Support** | .NET Framework only | .NET Framework, .NET Core, .NET 5+ |
| **Performance** | Slower, synchronous | Faster, asynchronous |
| **Authentication** | Limited options | Full modern auth support |
| **API Coverage** | Legacy APIs only | Complete REST API coverage |
| **Future Support** | Maintenance only | Active development |
| **Code Patterns** | Synchronous blocking | Async/await patterns |

## Troubleshooting legacy clients

### Common issues and solutions

**Authentication failures:**
- Ensure PATs have appropriate scopes
- Verify organization URL format (include collection for on-premises)
- Check firewall and proxy settings for SOAP endpoints

**Performance problems:**
- SOAP clients are inherently slower than REST
- Consider batch operations where possible
- Migrate to REST clients for better performance

**Platform compatibility:**
- SOAP clients only work on .NET Framework
- Use REST clients for cross-platform support

### Getting help

For legacy SOAP client issues:
1. Check [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html)
2. Review [migration guidance](samples.md) for modern alternatives
3. Consider professional migration services for large applications

## Related resources

**Migration resources:**
- [Modern .NET client library samples](samples.md) - Recommended replacement
- [Authentication guidance](../authentication/authentication-guidance.md) - Modern auth options
- [Azure DevOps REST API reference](/rest/api/azure/devops/) - Complete API documentation

**Legacy documentation:**
- [.NET client libraries concepts](../../concepts/dotnet-client-libraries.md)
- [Azure DevOps authentication samples](https://github.com/microsoft/azure-devops-auth-samples)

> [!IMPORTANT]
> **Planning migration?** Start with [modern .NET client library samples](samples.md) to see current best practices and authentication options.
