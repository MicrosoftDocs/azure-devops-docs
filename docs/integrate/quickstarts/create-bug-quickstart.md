---
title: Create a bug using .NET client libraries in Azure DevOps
description: Use .NET client libraries to create a bug in Azure DevOps Services with modern authentication methods.
ms.assetid: ea2e5303-46b5-41d0-b6f5-b3d8ce515a64
ms.subservice: azure-devops-ecosystem
ai-usage: ai-assisted
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/16/2025
ms.custom: quickstart, devx-track-dotnet
---

# Create a bug in Azure DevOps Services using .NET client libraries

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Creating work items programmatically is a common automation scenario in Azure DevOps Services. This article shows how to create a bug (or any work item) using .NET client libraries with modern authentication methods.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Azure DevOps** | - [An organization](https://go.microsoft.com/fwlink/?LinkId=307137)<br>- Access to a project where you can create work items |
|**Authentication** | Choose one of the following:<br>- [Microsoft Entra ID authentication](../get-started/authentication/entra.md) (recommended)<br>- [Personal Access Token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (for testing) |
|**Development environment**| A C# development environment. You can use [Visual Studio](https://visualstudio.microsoft.com/vs/) |

> [!IMPORTANT]
> For production applications, we recommend using [Microsoft Entra ID authentication](../get-started/authentication/entra.md) instead of Personal Access Tokens. PATs are suitable for testing and development scenarios. For guidance on choosing the right authentication method, see [Authentication guidance](../get-started/authentication/authentication-guidance.md).

## Authentication options

This article demonstrates multiple authentication methods to suit different scenarios:

### Microsoft Entra ID authentication (Recommended for user apps)

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

The following examples show how to create work items using different authentication methods.

### Example 1: Microsoft Entra ID authentication (Interactive)

```cs
// NuGet packages:
// Microsoft.TeamFoundationServer.Client
// Microsoft.VisualStudio.Services.InteractiveClient  
// Microsoft.Identity.Client
using System;
using System.Threading.Tasks;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;
using Microsoft.VisualStudio.Services.WebApi.Patch;
using Microsoft.VisualStudio.Services.WebApi.Patch.Json;

public class EntraIdBugCreator
{
    private readonly Uri uri;

    /// <summary>
    /// Initializes a new instance using Microsoft Entra ID authentication.
    /// </summary>
    /// <param name="orgName">Your Azure DevOps organization name</param>
    public EntraIdBugCreator(string orgName)
    {
        this.uri = new Uri($"https://dev.azure.com/{orgName}");
    }

    /// <summary>
    /// Create a bug using Microsoft Entra ID authentication.
    /// </summary>
    /// <param name="project">The name of your project</param>
    /// <param name="title">Bug title</param>
    /// <param name="reproSteps">Reproduction steps</param>
    /// <param name="priority">Priority level (1-4)</param>
    /// <param name="severity">Severity level</param>
    /// <returns>The created WorkItem</returns>
    public async Task<WorkItem> CreateBugAsync(string project, string title, string reproSteps, int priority = 2, string severity = "3 - Medium")
    {
        // Use Microsoft Entra ID authentication
        var credentials = new VssAadCredential();
        var patchDocument = new JsonPatchDocument();

        // Add required and optional fields
        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/System.Title",
            Value = title
        });

        if (!string.IsNullOrEmpty(reproSteps))
        {
            patchDocument.Add(new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
                Value = reproSteps
            });
        }

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Priority",
            Value = priority.ToString()
        });

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Severity",
            Value = severity
        });

        using (var connection = new VssConnection(this.uri, new VssCredentials(credentials)))
        {
            var workItemTrackingHttpClient = connection.GetClient<WorkItemTrackingHttpClient>();

            try
            {
                var result = await workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, project, "Bug").ConfigureAwait(false);
                Console.WriteLine($"Bug successfully created: Bug #{result.Id}");
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating bug: {ex.Message}");
                throw;
            }
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
using System.Threading.Tasks;
using Microsoft.Identity.Client;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;
using Microsoft.VisualStudio.Services.WebApi.Patch;
using Microsoft.VisualStudio.Services.WebApi.Patch.Json;

public class ServicePrincipalBugCreator
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
    public ServicePrincipalBugCreator(string orgName, string clientId, string clientSecret, string tenantId)
    {
        this.uri = new Uri($"https://dev.azure.com/{orgName}");
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.tenantId = tenantId;
    }

    /// <summary>
    /// Create a bug using Service Principal authentication.
    /// </summary>
    public async Task<WorkItem> CreateBugAsync(string project, string title, string reproSteps, int priority = 2, string severity = "3 - Medium")
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
        var patchDocument = new JsonPatchDocument();

        // Add work item fields
        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/System.Title",
            Value = title
        });

        if (!string.IsNullOrEmpty(reproSteps))
        {
            patchDocument.Add(new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
                Value = reproSteps
            });
        }

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Priority",
            Value = priority.ToString()
        });

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Severity",
            Value = severity
        });

        using (var connection = new VssConnection(this.uri, new VssCredentials(credentials)))
        {
            var workItemTrackingHttpClient = connection.GetClient<WorkItemTrackingHttpClient>();

            try
            {
                var workItem = await workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, project, "Bug").ConfigureAwait(false);
                Console.WriteLine($"Bug successfully created: Bug #{workItem.Id}");
                return workItem;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating bug: {ex.Message}");
                throw;
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
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;
using Microsoft.VisualStudio.Services.WebApi.Patch;
using Microsoft.VisualStudio.Services.WebApi.Patch.Json;

public class ManagedIdentityBugCreator
{
    private readonly Uri uri;

    /// <summary>
    /// Initializes a new instance using Managed Identity authentication.
    /// </summary>
    /// <param name="orgName">Your Azure DevOps organization name</param>
    public ManagedIdentityBugCreator(string orgName)
    {
        this.uri = new Uri($"https://dev.azure.com/{orgName}");
    }

    /// <summary>
    /// Create a bug using Managed Identity authentication.
    /// </summary>
    public async Task<WorkItem> CreateBugAsync(string project, string title, string reproSteps, int priority = 2, string severity = "3 - Medium")
    {
        // Use Managed Identity to acquire token
        var credential = new DefaultAzureCredential();
        var tokenRequestContext = new TokenRequestContext(new[] { "https://app.vssps.visualstudio.com/.default" });
        var tokenResult = await credential.GetTokenAsync(tokenRequestContext);

        var credentials = new VssOAuthAccessTokenCredential(tokenResult.Token);
        var patchDocument = new JsonPatchDocument();

        // Add work item fields
        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/System.Title",
            Value = title
        });

        if (!string.IsNullOrEmpty(reproSteps))
        {
            patchDocument.Add(new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
                Value = reproSteps
            });
        }

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Priority",
            Value = priority.ToString()
        });

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Severity",
            Value = severity
        });

        using (var connection = new VssConnection(this.uri, new VssCredentials(credentials)))
        {
            var workItemTrackingHttpClient = connection.GetClient<WorkItemTrackingHttpClient>();

            try
            {
                var workItem = await workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, project, "Bug").ConfigureAwait(false);
                Console.WriteLine($"Bug successfully created: Bug #{workItem.Id}");
                return workItem;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating bug: {ex.Message}");
                throw;
            }
        }
    }
}
```

### Example 4: Personal Access Token authentication

```cs
// NuGet package: Microsoft.TeamFoundationServer.Client
using System;
using System.Threading.Tasks;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi;
using Microsoft.TeamFoundation.WorkItemTracking.WebApi.Models;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;
using Microsoft.VisualStudio.Services.WebApi.Patch;
using Microsoft.VisualStudio.Services.WebApi.Patch.Json;

public class PatBugCreator
{
    private readonly Uri uri;
    private readonly string personalAccessToken;

    /// <summary>
    /// Initializes a new instance using Personal Access Token authentication.
    /// </summary>
    /// <param name="orgName">Your Azure DevOps organization name</param>
    /// <param name="personalAccessToken">Your Personal Access Token</param>
    public PatBugCreator(string orgName, string personalAccessToken)
    {
        this.uri = new Uri($"https://dev.azure.com/{orgName}");
        this.personalAccessToken = personalAccessToken;
    }

    /// <summary>
    /// Create a bug using Personal Access Token authentication.
    /// </summary>
    /// <param name="project">The name of your project</param>
    /// <param name="title">Bug title</param>
    /// <param name="reproSteps">Reproduction steps</param>
    /// <param name="priority">Priority level (1-4)</param>
    /// <param name="severity">Severity level</param>
    /// <returns>The created WorkItem</returns>
    public async Task<WorkItem> CreateBugAsync(string project, string title, string reproSteps, int priority = 2, string severity = "3 - Medium")
    {
        var credentials = new VssBasicCredential(string.Empty, this.personalAccessToken);
        var patchDocument = new JsonPatchDocument();

        // Add required and optional fields
        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/System.Title",
            Value = title
        });

        if (!string.IsNullOrEmpty(reproSteps))
        {
            patchDocument.Add(new JsonPatchOperation()
            {
                Operation = Operation.Add,
                Path = "/fields/Microsoft.VSTS.TCM.ReproSteps",
                Value = reproSteps
            });
        }

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Priority",
            Value = priority.ToString()
        });

        patchDocument.Add(new JsonPatchOperation()
        {
            Operation = Operation.Add,
            Path = "/fields/Microsoft.VSTS.Common.Severity",
            Value = severity
        });

        using (var connection = new VssConnection(this.uri, new VssCredentials(credentials)))
        {
            var workItemTrackingHttpClient = connection.GetClient<WorkItemTrackingHttpClient>();

            try
            {
                var result = await workItemTrackingHttpClient.CreateWorkItemAsync(patchDocument, project, "Bug").ConfigureAwait(false);
                Console.WriteLine($"Bug successfully created: Bug #{result.Id}");
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating bug: {ex.Message}");
                throw;
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
        var bugCreator = new EntraIdBugCreator("your-organization-name");
        
        var bug = await bugCreator.CreateBugAsync(
            project: "your-project-name",
            title: "Authorization Errors with Microsoft Accounts",
            reproSteps: "Our authorization logic needs to allow for users with Microsoft accounts (formerly Live IDs) - https://docs.microsoft.com/library/live/hh826547.aspx",
            priority: 1,
            severity: "2 - High"
        );
        
        Console.WriteLine($"Created bug with ID: {bug.Id}");
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
        
        var bugCreator = new ServicePrincipalBugCreator("your-organization-name", clientId, clientSecret, tenantId);
        
        var bug = await bugCreator.CreateBugAsync(
            project: "your-project-name",
            title: "Automated Bug Report",
            reproSteps: "Issue detected by automated testing...",
            priority: 2,
            severity: "3 - Medium"
        );
        
        Console.WriteLine($"Automated bug created: #{bug.Id}");
    }
}
```

### Using Managed Identity authentication (Azure Functions/App Service)

```cs
public class BugReportFunction
{
    [FunctionName("CreateBugReport")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequest req,
        ILogger log)
    {
        var bugCreator = new ManagedIdentityBugCreator("your-organization-name");
        
        var bug = await bugCreator.CreateBugAsync(
            project: "your-project-name",
            title: "Function-detected Issue",
            reproSteps: "Issue reported via Azure Function...",
            priority: 3,
            severity: "4 - Low"
        );
        
        return new OkObjectResult($"Bug created: {bug.Id}");
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
        var bugCreator = new PatBugCreator("your-organization-name", pat);
        
        var bug = await bugCreator.CreateBugAsync(
            project: "your-project-name",
            title: "Sample Bug Title",
            reproSteps: "Steps to reproduce the issue...",
            priority: 2,
            severity: "3 - Medium"
        );
        
        Console.WriteLine($"Bug created successfully: #{bug.Id}");
    }
}
```

## Work item field reference

When creating work items, you'll commonly use these fields:

### Required fields
- **System.Title**: The work item title (required for all work item types)
- **System.WorkItemType**: Automatically set when specifying the type in the API call

### Common optional fields
- **Microsoft.VSTS.TCM.ReproSteps**: Detailed reproduction steps
- **Microsoft.VSTS.Common.Priority**: Priority level (1=highest, 4=lowest)
- **Microsoft.VSTS.Common.Severity**: Severity classification
- **System.Description**: General description or additional details
- **System.AssignedTo**: Person responsible for the work item
- **System.AreaPath**: Area classification
- **System.IterationPath**: Iteration/sprint assignment

### Priority values
- **1**: Critical/Highest priority
- **2**: High priority  
- **3**: Medium priority (default)
- **4**: Low priority

### Common severity values
- **1 - Critical**: System unusable, blocking progress
- **2 - High**: Major functionality broken
- **3 - Medium**: Some functionality broken (default)
- **4 - Low**: Minor issues or cosmetic problems

## Best practices

### Authentication
- **Use Microsoft Entra ID** for interactive applications with user sign-in
- **Use Service Principal** for automated scenarios, CI/CD pipelines, and server applications
- **Use Managed Identity** for applications running on Azure services (Functions, App Service, VMs)
- **Avoid Personal Access Tokens** in production; use only for development and testing
- **Never hardcode credentials** in source code; use environment variables or Azure Key Vault
- **Implement credential rotation** for long-running applications
- **Ensure proper scopes**: Work item creation requires appropriate permissions in Azure DevOps

### Error handling
- **Implement proper exception handling** for authentication and API failures
- **Validate field values** before attempting to create work items
- **Handle field validation errors** returned by the API
- **Use async/await patterns** for better application responsiveness

### Performance
- **Batch operations** when creating multiple work items
- **Cache connections** when making multiple API calls
- **Use appropriate timeout values** for long-running operations
- **Implement retry logic** with exponential backoff for transient failures

### Data validation
- **Validate required fields** before API calls
- **Check field permissions** and work item type rules
- **Sanitize user input** to prevent injection attacks
- **Follow project-specific field requirements** and naming conventions

## Troubleshooting

### Authentication issues
- **Microsoft Entra ID authentication failures**: Ensure the user has proper permissions to create work items
- **Service Principal authentication failures**: Verify client ID, secret, and tenant ID are correct; check service principal permissions in Azure DevOps
- **Managed Identity authentication failures**: Ensure the Azure resource has a managed identity enabled and proper permissions
- **PAT authentication failures**: Verify the token has `vso.work_write` scope and hasn't expired
- **403 Forbidden errors**: Check project permissions and work item type access

### Field validation errors
- **Required field missing**: Ensure all required fields are included in the patch document
- **Invalid field values**: Verify field values match the expected format and allowed values
- **Field not found**: Check field names are spelled correctly and exist for the work item type
- **Read-only field errors**: Some fields cannot be set during creation (e.g., System.CreatedBy)

### Common exceptions
- **VssUnauthorizedException**: Authentication failed or insufficient permissions
- **VssServiceException**: Server-side validation errors or API issues
- **ArgumentException**: Invalid parameters or malformed patch document
- **JsonReaderException**: Issues with JSON serialization/deserialization

### Performance issues
- **Slow API responses**: Check network connectivity and Azure DevOps service status
- **Memory usage**: Dispose of connections and clients properly
- **Rate limiting**: Implement appropriate delays between API calls

## Next steps

- [Get work items with queries](./work-item-quickstart.md)
- [Learn about authentication options](../get-started/authentication/authentication-guidance.md)
- [Explore more integration samples](../get-started/client-libraries/samples.md)
- [Understanding work item fields](../../boards/work-items/work-item-fields.md)
