---
title: .NET client libraries
description: Learn how to use Azure DevOps .NET client libraries to integrate work items, Git repositories, builds, and pipelines into your C# applications and Windows services.
ms.assetid: 474cdb4f-9a5e-49fb-84b2-9c540ebcf98b
ai-usage: ai-assisted
ms.subservice: azure-devops-ecosystem
ms.custom: devx-track-dotnet
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/02/2025
#customer intent: As a .NET developer, I want to integrate my C# applications with Azure DevOps services like work items, Git repositories, builds, and pipelines using official client libraries and REST APIs.
---

# .NET client libraries

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Client libraries are available for .NET developers who build Windows apps and services that integrate with Azure DevOps. Client libraries integrate with work item tracking, version control, build, and other services. These packages make it easy to acquire and redistribute the libraries needed by your app or service.

> [!TIP]
> Find the corresponding .NET client class and API method, using [.NET Client Library Samples](../get-started/client-libraries/samples.md) and [Azure DevOps API Reference](/rest/api/azure/devops).

## Dependency diagram

![Dependency diagram shows the relationship between Services.Client, Services.InteractiveClient, and TeamFoundationServer.Client.](../concepts/media/dotnet-client-libraries-dependancy-diagram.jpg)

## Features of .NET Client Libraries

The .NET client libraries for Azure DevOps offer several key features that make it easy to integrate with services in Azure DevOps from your Windows applications and services:

- **Downloadable from NuGet.org**: Easily import the libraries into your Visual Studio projects by downloading them from [NuGet.org](https://www.nuget.org/).
- **Licensed for redistribution**: The libraries are licensed for redistribution in your apps and services. You can [view the license](https://go.microsoft.com/fwlink/?LinkId=329770) for more details.
- **Access to APIs**: Gain access to both traditional client object model APIs and [REST APIs](/rest/api/azure/devops/?view-azure-devops-rest-7.2&preserve-view=true) to interact with Azure DevOps programmatically.

## Package and Azure DevOps version-mapping table

The following table maps the package versions of the .NET client libraries to the corresponding versions of Azure DevOps Server. Use this table to determine which package version corresponds to your Azure DevOps version.

|Package version|Azure DevOps version|
|---------------|---------------------|
|16.205.x| `versions >= Azure DevOps Server 2022` |
|16.170.x| `versions >= Azure DevOps Server 2020`|

For the latest preview versions, see the [NuGet packages gallery](https://www.nuget.org/packages?q=azure+devops+.net).

## REST packages

The following table lists the .NET client libraries available for accessing various services via public REST APIs. These packages can be downloaded from NuGet.org and provide the necessary binaries to integrate with Azure DevOps.

|Packages and description  |Binaries  |
|--------------------------|----------|
|[Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)<br/>Provides access to shared platform services via public REST APIs, like organization, profile, identity, security, and more. |`Microsoft.VisualStudio.Services.WebApi.dll`, `Microsoft.VisualStudio.Services.Common.dll`, `Microsoft.TeamFoundation.Common.dll` |
|[Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)<br/>Provides access to version control, work item tracking, build, and more via public REST APIs. | `Microsoft.TeamFoundation.Build2.WebApi.dll`, `Microsoft.TeamFoundation.Core.WebApi.dll`, `Microsoft.TeamFoundation.WorkItemTracking.Process.WebApi.dll`, `Microsoft.TeamFoundation.SourceControl.WebApi.dll`, `Microsoft.TeamFoundation.TestManagement.WebApi.dll`, and so on. |
|[Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/)<br/>Supports applications that require interactive sign-in by a user. | `Microsoft.VisualStudio.Services.Client.Interactive.dll` |
|[Microsoft.VisualStudio.Services.Release.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Release.Client/)<br/>Provides access to the Release Service via public REST APIs. |`Microsoft.VisualStudio.Services.ReleaseManagement.WebApi.dll` |
|[Microsoft.TeamFoundation.DistributedTask.Common.Contracts](https://www.nuget.org/packages/Microsoft.TeamFoundation.DistributedTask.Common.Contracts)<br/>Provides the models used to access the Distributed Task Service via public REST APIs. |`Microsoft.TeamFoundation.DistributedTask.Common.Contracts.dll` |
|[Microsoft.TeamFoundation.DistributedTask.WebApi](https://www.nuget.org/packages/Microsoft.TeamFoundation.DistributedTask.WebApi)<br/>Provides access to the Distributed Task Service via public REST APIs. | `Microsoft.TeamFoundation.DistributedTask.WebApi.dll` |
|[Microsoft.VisualStudio.Services.ServiceHooks.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.ServiceHooks.WebApi/)<br/>Provides access to the Service Hooks Service via public REST APIs. |`Microsoft.VisualStudio.Services.ServiceHooks.WebApi.dll` |
|[Microsoft.VisualStudio.Services.Gallery.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Gallery.WebApi/)<br/>Provides access to the Gallery Service via public REST APIs. |`Microsoft.VisualStudio.Services.Gallery.WebApi.dll` |
|[Microsoft.VisualStudio.Services.Notifications.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Notifications.WebApi/)<br/>Provides access to the Notifications Service via public REST APIs. |`Microsoft.VisualStudio.Services.Notifications.WebApi.dll` |
|[Microsoft.VisualStudio.Services.ExtensionManagement.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.ExtensionManagement.WebApi/)<br/>Provides access to the Extension Management Service via public REST APIs. |`Microsoft.VisualStudio.Services.ExtensionManagement.WebApi.dll` |
|[Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi/)<br/>Provides access to the Member Entitlement Management Service via public REST APIs. |`Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi.dll` |
|[Microsoft.VisualStudio.Services.ServiceEndpoints.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.ServiceEndpoints.WebApi/)<br/>Provides access to the Service Endpoints via public REST APIs. |`Microsoft.VisualStudio.Services.ServiceEndpoints.WebApi.dll` |
|[Microsoft.VisualStudio.Services.Search.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Search.Client/)<br/>Provides access to the Search Service via public REST APIs. |`Microsoft.VisualStudio.Services.Search.Shared.WebApi.dll`, `Microsoft.VisualStudio.Services.Search.WebApi.dll` |
|[Microsoft.TeamFoundation.PublishTestResults](https://www.nuget.org/packages/Microsoft.TeamFoundation.PublishTestResults/)<br/>This task can be used to publish test results and upload test attachments on Azure DevOps. The following results formats are supported with this package: 1. JUnit - publish tests from JUnit projects, 2. NUnit - publish tests from NUnit projects, 3. VSTest - publish tests from Visual Studio projects, 4. Xunit - publish tests from Xunit projects. |`Microsoft.TeamFoundation.TestClient.PublishTestResults.dll` |
|[Microsoft.VisualStudio.Services.Audit.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Audit.WebApi/)<br/>Provides access to the Audit Service via public REST APIs. |`Microsoft.VisualStudio.Services.Audit.WebApi.dll` |
|[Microsoft.Azure.Pipelines.Policy.Client](https://www.nuget.org/packages/Microsoft.Azure.Pipelines.Policy.Client/)<br/>Provides access to the pipeline approvals, checks, and authorization via public REST APIs. |`Microsoft.Azure.Pipelines.Policy.Client.dll` |

> [!TIP]
> **Legacy SOAP APIs**: If you have an existing Windows application that uses the TFS Client Object Model, use `Microsoft.TeamFoundationServer.ExtendedClient` for SOAP-based APIs. This package is only recommended when REST APIs don't provide the specific functionality you need (such as TFVC workspace creation). This package doesn't support .NET Standard and Microsoft is no longer investing in SOAP-based APIs.

## Soap package

The following table lists the .NET client libraries available for accessing various services via SOAP APIs. These packages can be downloaded from NuGet.org and provide the necessary binaries to integrate with Azure DevOps. Only use these packages when the REST APIs don't offer the functionality you need, for example, creating workspaces in TFVC.

|**Package and description**  |**Binaries**  |  
|-----------------------------|--------------|  
|[Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/)<br/>Work with and manage version control, work items, build, and other resources from your client application. This package doesn't support Net Standard Client OM. Only use this package when our REST APIs don't offer the functionality you need (for example, creating workspaces in TFVC). |`Microsoft.TeamFoundation.Build.Client.dll`, `Microsoft.TeamFoundation.DeleteTeamProject.dll`, `Microsoft.TeamFoundation.Diff.dll`, `Microsoft.TeamFoundation.Git.Client.dll`, `Microsoft.TeamFoundation.SharePointReporting.Integration.dll`, and so on. |

## Install

Install from a NuGet package manager command prompt:

```powershell
PM> Install-Package Microsoft.TeamFoundationServer.ExtendedClient
```

## Connect

To create an authenticated connection to Azure DevOps, get an HttpClient for the service you want to work with, and then call methods against that service.

See the following examples:

```csharp
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.Client;
using Microsoft.TeamFoundation.SourceControl.WebApi;
using Microsoft.VisualStudio.Services.WebApi;

const string collectionUri = "https://dev.azure.com/fabrikam";
const string projectName = "MyGreatProject";
const string repoName = "MyRepo";
const string accessToken = "your-microsoft-entra-id-token";

Uri orgUrl = new Uri(collectionUri);

// Connect to Azure DevOps using Microsoft Entra ID token
VssConnection connection = new VssConnection(orgUrl, new VssBasicCredential(string.Empty, accessToken));

// Get a GitHttpClient to talk to the Git endpoints
using (GitHttpClient gitClient = connection.GetClient<GitHttpClient>())
{
    // Get data about a specific repository
    var repo = gitClient.GetRepositoryAsync(projectName, repoName).Result;
}
```

Authentication paths that produce an interactive dialog aren't available in the .NET Standard version of the .NET client libraries. When you're using the .NET Standard version, provide your credentials more explicitly to authenticate, like in the following example.

```csharp
using System;
using Microsoft.TeamFoundation.SourceControl.WebApi;
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.WebApi;

namespace ConsoleApp1
{
    class Program
    {
        const string collectionUri = "https://dev.azure.com/fabrikam";
        const string projectName = "MyGreatProject";
        const string repoName = "MyRepo";
        const string accessToken = "your-microsoft-entra-id-token";

        static void Main(string[] args)
        {
            var creds = new VssBasicCredential(string.Empty, accessToken);
            
            // Connect to Azure DevOps Services using Microsoft Entra ID token
            var connection = new VssConnection(new Uri(collectionUri), creds);
            
            // Get a GitHttpClient to talk to the Git endpoints
            using var gitClient = connection.GetClient<GitHttpClient>();
            
            // Get data about a specific repository
            var repo = gitClient.GetRepositoryAsync(projectName, repoName).Result;
        }
    }
}

```

> [!TIP]
> **Microsoft Entra ID authentication**: The previous examples use Microsoft Entra ID tokens for authentication. For more information, see [Authenticate to Azure DevOps using Microsoft Entra](../get-started/authentication/entra.md).

For more authentication samples, see [.NET Samples](../get-started/client-libraries/samples.md).

## Reference

For more information and for up-to-date reference documentation, see the [.NET API browser](/dotnet/api/).

## Samples

Check out samples on our [.NET Samples Page](../get-started/client-libraries/samples.md).

For more information on NuGet packages, see [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/).

## Known issues

### Interactive authentication dialog doesn't appear when using the Azure DevOps OM in a Single Threaded Apartment (STA)

The interactive authentication dialog doesn't appear in cases where your code is running from a [Single Threaded Apartment](/windows/desktop/com/single-threaded-apartments) (STA). This issue can commonly occur from [WPF](/dotnet/desktop-wpf/) applications. To work around this issue, you can change your initialization method to be async and request authentication as in the following example.

```csharp
async void InitAzureDevOps()
{
    Uri _uri = new Uri("https://dev.azure.com/MyAccount/");

    var creds = new VssClientCredentials(new WindowsCredential(false),
                                         new VssFederatedCredential(false),
                                         CredentialPromptType.PromptIfNeeded);

    VssConnection vssConnection = new VssConnection(_uri, creds);
    CancellationTokenSource source = new CancellationTokenSource();
    CancellationToken token = source.Token;
    await vssConnection.ConnectAsync(token);

    ...

}
```

### Using NetStandard 2.0 versions of the Azure DevOps OM

For version 16.143.1 of our NuGet packages, we support NetStandard 2.0. These packages correlate with Azure DevOps Server and are fully compatible with Azure DevOps.

### Microsoft.TeamFoundationServer.ExtendedClient package doesn't have NetStandard support

The [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient) doesn't support a NetStandard compliant version. 

> [!IMPORTANT]
> This package includes our older SOAP object model, which we replaced by our newer REST object model. We're no longer investing in the older SOAP object model, and have no plans to create a NetStandard version of it.
