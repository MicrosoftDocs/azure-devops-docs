---
title: Migrate from WIT Client OM to REST APIs
titleSuffix: Azure DevOps Services
description: Step-by-step migration guide for upgrading from legacy WIT Client OM to modern REST-based .NET client libraries with secure authentication.
ms.subservice: azure-devops-ecosystem
ai-usage: ai-assisted
ms.topic: conceptual
ms.assetid: 30272A34-2CE1-41B3-BA7A-815D69309CBE
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 07/14/2025
---

<!--- Supports FWLINK: https://go.microsoft.com/fwlink/?LinkId=692096 -->

# Migrate from WIT Client OM to REST APIs

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> **Legacy technology replacement required**
> 
> The [WIT Client OM](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient) (Work Item Tracking Client Object Model) is legacy technology that should be replaced with modern [REST-based .NET client libraries](dotnet-client-libraries.md). Migration provides better performance, security, and cross-platform support.

This guide helps you migrate your .NET code from the deprecated WIT Client OM to modern REST APIs. The migration offers significant benefits:

**✅ Modern advantages:**
- Asynchronous operations for better performance
- Modern authentication with managed identities and service principals  
- Cross-platform support (.NET Core, .NET 5+, and .NET Framework)
- Active development and ongoing support

**❌ Legacy limitations:**
- Limited to .NET Framework and Windows only
- Synchronous, blocking operations
- Outdated authentication methods

## Migration overview

**Step 1:** Update NuGet packages - Replace WIT Client OM with modern REST client packages
**Step 2:** Update authentication - Migrate to secure, modern authentication methods
**Step 3:** Convert operations - Replace synchronous calls with asynchronous REST operations

For detailed code examples and step-by-step migration samples, see the [GitHub Azure DevOps WIT Client OM Migration Guide](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide).

## Common scenarios migration table

The following table shows how to migrate common work item operations from legacy WIT Client OM to modern REST APIs:

| **Scenario** | **Legacy WIT Client OM** | **Modern REST API** |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Get list of work items                            | [WorkItemStore.Query](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                                                                                    | [Work Items - List](/rest/api/azure/devops/wit/work-items/list)                                          |
| Get single work item                              | [WorkItemStore.GetWorkItem](/previous-versions/visualstudio/visual-studio-2013/bb140391%28v%3dvs.120%29)                                                                                              | [Work Items - Get Work Item](/rest/api/azure/devops/wit/work-items/get-work-item)                    |
| Create new work item                              | [WorkItem](</previous-versions/visualstudio/visual-studio-2013/bb179831(v%3dvs.120)>)                                                                                                                 | [Work Items - Create](/rest/api/azure/devops/wit/work-items/create)                                      |
| Update existing work item                         | [WorkItem.Fields](</previous-versions/visualstudio/visual-studio-2013/bb164805(v%3dvs.120)>)                                                                                                          | [Work Items - Update](/rest/api/azure/devops/wit/work-items/update#update-a-field)      |
| Validate a work item                              | [WorkItem.IsValid()](</previous-versions/visualstudio/visual-studio-2013/bb140421(v%3dvs.120)>),<br/>[WorkItem.Validate()](</previous-versions/visualstudio/visual-studio-2013/bb140427(v%3dvs.120)>) | [Work Items - Update (validate only)](/rest/api/azure/devops/wit/work-items/update#validate-only-update) |
| Create a link to an existing work item            | [WorkItem.WorkItemLinks.Add](</previous-versions/visualstudio/visual-studio-2013/bb140132(v%3dvs.120)>)                                                                                               | [Work Items - Update (add link)](/rest/api/azure/devops/wit/work-items/update#add-a-link)               |
| Add a comment                                     | [WorkItem.History](</previous-versions/visualstudio/visual-studio-2013/bb164807(v%3dvs.120)>)                                                                                                         | [Work Items - Update (add comment)](/rest/api/azure/devops/wit/work-items/update#update-a-field)       |
| Create a hyperlink                                | [WorkItem.Links.Add()](/previous-versions/visualstudio/visual-studio-2013/bb140133%28v%3dvs.120%29)                                                                                                   | [Work Items - Update (add hyperlink)](/rest/api/azure/devops/wit/work-items/update#add-a-hyperlink)     |
| Add an attachment                                 | [WorkItem.Attachments.Add()](/previous-versions/visualstudio/visual-studio-2013/bb164795%28v%3dvs.120%29)                                                                                             | [Work Items - Update (add attachment)](/rest/api/azure/devops/wit/work-items/update#add-an-attachment) |
| Query work items using WIQL                       | [WorkItemStore.Query()](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                                                                                  | [Wiql - Query by Wiql](/rest/api/azure/devops/wit/wiql/query%20by%20wiql)                                  |
| Run an existing query to get work items | [WorkItemStore.Query()](/previous-versions/visualstudio/visual-studio-2013/bb140399%28v%3dvs.120%29)                                           | [Wiql - Query by ID](/rest/api/azure/devops/wit/wiql/query%20by%20id)                                      |
| Get list of work item types for project      | [Category.WorkItemTypes](/previous-versions/visualstudio/visual-studio-2013/ff733906%28v%3dvs.120%29)                                                                                                 | [Work Item Types - List](/rest/api/azure/devops/wit/work-item-types/list)                              |
| Get work item type details                        | [Category.WorkItemTypes](/previous-versions/visualstudio/visual-studio-2013/ff733906%28v%3dvs.120%29)                                                                                                 | [Work Item Types - Get](/rest/api/azure/devops/wit/work-item-types/get)                                |
| Get list of fields for a work item type           | [WorkItemType.FieldDefinitions](/previous-versions/visualstudio/visual-studio-2013/bb164788%28v%3dvs.120%29)                                                                                          | [Work Item Types Field - List](/rest/api/azure/devops/wit/work-item-types-field/list)                |
| Get field details                                 | [WorkItemType.FieldDefinitions](/previous-versions/visualstudio/visual-studio-2013/bb164788%28v%3dvs.120%29)                                                                                          | [Work Item Types Field - Get](/rest/api/azure/devops/wit/work-item-types-field/get)                  |

## Authentication migration

**Legacy authentication (❌ Replace):**
```csharp
// WIT Client OM with basic authentication
using (var tpc = new TfsTeamProjectCollection(new Uri(collectionUri)))
{
    tpc.Authenticate();
    var workItemStore = tpc.GetService<WorkItemStore>();
}
```

**Modern authentication (✅ Recommended):**
```csharp
// REST client with managed identity (for Azure-hosted apps)
var credentials = new VssAzureIdentityCredential();
using var connection = new VssConnection(new Uri(collectionUri), credentials);
var witClient = connection.GetClient<WorkItemTrackingHttpClient>();

// Alternative: Service principal for CI/CD
// var credentials = new VssServicePrincipalCredential(clientId, clientSecret, tenantId);

// Alternative: PAT for development/testing
// var credentials = new VssBasicCredential(string.Empty, personalAccessToken);
```

## Next steps and resources

### 📖 Essential migration resources
- **[Modern .NET client library samples](../get-started/client-libraries/samples.md)** - Production-ready code examples with modern authentication
- **[Authentication guidance](../get-started/authentication/authentication-guidance.md)** - Choose the right authentication method for your scenario
- **[.NET client libraries concepts](dotnet-client-libraries.md)** - Understanding the modern client architecture

### 🔧 Code examples and tools
- **[Migration guide with code samples](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide)** - GitHub repository with detailed migration examples
- **[Work Item Tracking REST API documentation](/rest/api/azure/devops/wit/)** - Complete API reference with examples

### 🆘 Support and community
- **[Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html)** - Ask questions and get help
- **[Migration guide issues](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide/issues)** - Report missing scenarios or get specific help

### 🔄 Related migrations
- **[Migrate data from Azure DevOps Server to Azure DevOps Services](../../migrate/migration-overview.md)** - Service migration guidance
- **[Legacy SOAP client samples](../get-started/client-libraries/soapSamples.md)** - Reference for other legacy client patterns

> [!TIP]
> **Start your migration:** Begin with [authentication guidance](../get-started/authentication/authentication-guidance.md) to choose the right approach, then see [.NET client library samples](../get-started/client-libraries/samples.md) for working code examples.
