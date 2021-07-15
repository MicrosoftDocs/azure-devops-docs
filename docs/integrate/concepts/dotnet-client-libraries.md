---
title: .NET Client Libraries
description: Easily integrate with Azure DevOps from apps and services on Windows.
ms.assetid: 474cdb4f-9a5e-49fb-84b2-9c540ebcf98b
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 06/16/2021
---

# .NET client libraries

[!INCLUDE [version-all](../../includes/version-all.md)]

Client libraries are available for .NET developers who build Windows apps and services that integrate with Azure DevOps. Client libraries integrate with work item tracking, version control, build, and other services. These packages replace the traditional TFS Client OM installer and make it easy to acquire and redistribute the libraries needed by your app or service.

> [!TIP]
> For more information, see [Azure DevOps REST API Reference](/rest/api/azure/devops).

## Dependency diagram

![Dependency diagram shows the relationship between Services.Client, Services.InteractiveClient, and TeamFoundationServer.Client.](../concepts/media/dotnet-client-libraries-dependancy-diagram.jpg)

## Features

* Downloadable from [nuget.org](https://www.nuget.org/) and easily importable into your Visual Studio projects
* Libraries are licensed for redistribution in your apps and services ([view the license](https://go.microsoft.com/fwlink/?LinkId=329770))
* Access both traditional client object model APIs and [new REST APIs](../rest-api-overview.md)


> [!NOTE]
> REST-based clients only work with Azure DevOps and TFS 2015 or later.
> To learn more about extending and integrating with  Azure DevOps using the client libraries,
> see [Extending Team Foundation](/previous-versions/visualstudio/visual-studio-2013/bb130146(v=vs.120))

## Package and Azure DevOps Server version-mapping table

|Package version|Azure DevOps Server Version|
|---------------|-----------|
|17.x.x| `Azure DevOps Server vNext`|
|16.153.x| `versions >= Azure DevOps Server 2019 Update 1`|
|16.143.x| `versions >= Azure DevOps Server 2019`|
|15.131.x| `versions >= TFS 2018 Update 1`|
|15.112.x| `versions >= TFS 2017 Update 1`|
|14.102.x| `versions >= TFS 2015 Update 3`|
|14.95.x| `versions >= TFS 2015 Update 2`|
|14.89.x| `versions >= TFS 2015 Update 1`|
|14.83.x| `versions >= TFS 2015`|

## REST packages

|Packages and Description  |Binaries  |
|---------|--------------|
|[Microsoft.VisualStudio.Services.Client​](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/)<br/>Provides access to shared platform services, such as organization, profile, identity, security, and more, via public REST APIs.   |`Microsoft.VisualStudio.Services.WebApi.dll`, `Microsoft.VisualStudio.Services.Common.dll`, `Microsoft.TeamFoundation.Common.dll`         |
|[Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/)​ <br/>Provides access to version control, work item tracking, build, and more via public REST APIs. | `Microsoft.TeamFoundation.Build2.WebApi.dll`, `Microsoft.TeamFoundation.Core.WebApi.dll`, `Microsoft.TeamFoundation.WorkItemTracking.Process.WebApi.dll`, `Microsoft.TeamFoundation.SourceControl.WebApi.dll`, `Microsoft.TeamFoundation.TestManagement.WebApi.dll`, and so on. |
|[Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/)​<br/>Supports applications that require interactive sign-in by a user.          | `Microsoft.VisualStudio.Services.Client.Interactive.dll`        |
|[Microsoft.VisualStudio.Services.Release.Client​](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Release.Client/)<br/>Provides access to the Release Service via public REST APIs. |`Microsoft.VisualStudio.Services.ReleaseManagement.WebApi.dll`         |
|[Microsoft.TeamFoundation.DistributedTask.Common.Contracts​](https://www.nuget.org/packages/Microsoft.TeamFoundation.DistributedTask.Common.Contracts)<br/>Provides the models used to access the Distributed Task Service via public REST APIs.         |`Microsoft.TeamFoundation.DistributedTask.Common.Contracts.dll`         |
|[Microsoft.TeamFoundation.DistributedTask.WebApi](https://www.nuget.org/packages/Microsoft.TeamFoundation.DistributedTask.WebApi)<br/>Provides access to the Distributed Task Service via public REST APIs.         | `Microsoft.TeamFoundation.DistributedTask.WebApi.dll`        |
|[Microsoft.VisualStudio.Services.ServiceHooks.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.ServiceHooks.WebApi)​<br/>Provides access to the Service Hooks Service via public REST APIs.         |`Microsoft.VisualStudio.Services.ServiceHooks.WebApi.dll`         |
|[Microsoft.VisualStudio.Services.Gallery.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Gallery.WebApi)<br/>Provides access to the Gallery Service via public REST APIs.         |`Microsoft.VisualStudio.Services.Gallery.WebApi.dll`         |
|[Microsoft.VisualStudio.Services.Notifications.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Notifications.WebApi)​<br/>Provides access to the Notifications Service via public REST APIs.         |`Microsoft.VisualStudio.Services.Notifications.WebApi.dll`         |
|[Microsoft.VisualStudio.Services.ExtensionManagement.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.ExtensionManagement.WebApi)<br/>Provides access to the Extension Management Service via public REST APIs.         |`Microsoft.VisualStudio.Services.ExtensionManagement.WebApi.dll`         |
|[Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi)<br/>Provides access to the Member Entitlement Management Service via public REST APIs.         |`Microsoft.VisualStudio.Services.MemberEntitlementManagement.WebApi.dll`         |
|[Microsoft.VisualStudio.Services.ServiceEndpoints.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.ServiceEndpoints.WebApi)<br/>Provides access to the Service Endpoints via public REST APIs.         |`Microsoft.VisualStudio.Services.ServiceEndpoints.WebApi.dll`         |
|[Microsoft.VisualStudio.Services.Search.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Search.Client)<br/>Provides access to the Search Service via public REST APIs.         |`Microsoft.VisualStudio.Services.Search.Shared.WebApi.dll`, `Microsoft.VisualStudio.Services.Search.WebApi.dll`         |
|[Microsoft.TeamFoundation.PublishTestResults​](https://www.nuget.org/packages/Microsoft.TeamFoundation.PublishTestResults)<br/>This task can be used to Publish test results and upload test attachments on Azure DevOps. The following results formats are supported with this package: 1. JUnit - publish tests from Junit projects, 2. NUnit- publish tests from Nunit projects, 3. VSTest- publish tests from Visual Studio projects, 4. Xunit- publish tests from Xunit projects          |`Microsoft.TeamFoundation.TestClient.PublishTestResults.dll`         |
|[Microsoft.VisualStudio.Services.Audit.WebApi](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Audit.WebApi)​<br/>Provides access to the Audit Service via public REST APIs.|`Microsoft.VisualStudio.Services.Audit.WebApi.dll`   |

> [!TIP]
> If you have an existing Windows application or service that uses the TFS Client Object Model, use Microsoft.TeamFoundationServer.ExtendedClient.

## Soap package

|**Package  and Description**  |**Binaries**  |  
|---------|------------|  
|[Microsoft.TeamFoundationServer.ExtendedClient​](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/)<br/>Work with and manage version control, work items, and build, and other resources from your client application. This package doesn't support Net Standard Client OM. Only use this package when our REST APIs don't offer the functionality you need (for example, creating workspaces in TFVC) |`Microsoft.TeamFoundation.Build.Client.dll`, `Microsoft.TeamFoundation.DeleteTeamProject.dll`, `Microsoft.TeamFoundation.Diff.dll`, `Microsoft.TeamFoundation.Git.Client.dll`, `Microsoft.TeamFoundation.SharePointReporting.Integration.dll`, and so on.    |

## Install

From a NuGet package manager command prompt:

```powershell
PM> Install-Package Microsoft.TeamFoundationServer.ExtendedClient
```

## Pattern for use

Create an authenticated connection to Azure DevOps, and then get an HttpClient for the service you want to work with, and finally call methods against that service.
See the following examples:

```csharp
using Microsoft.VisualStudio.Services.Common;
using Microsoft.VisualStudio.Services.Client;
using Microsoft.TeamFoundation.SourceControl.WebApi;
using Microsoft.VisualStudio.Services.WebApi;

const String c_collectionUri = "https://dev.azure.com/fabrikam";
const String c_projectName = "MyGreatProject";
const String c_repoName = "MyRepo";

// Interactively ask the user for credentials, caching them so the user isn't constantly prompted
VssCredentials creds = new VssClientCredentials();
creds.Storage = new VssClientCredentialStorage();

// Connect to Azure DevOps Services
VssConnection connection = new VssConnection(new Uri(c_collectionUri), creds);

// Get a GitHttpClient to talk to the Git endpoints
using (GitHttpClient gitClient = connection.GetClient<GitHttpClient>())
{
    // Get data about a specific repository
    var repo = gitClient.GetRepositoryAsync(c_projectName, c_repoName).Result;
}
```

Authentication paths that produce an interactive dialog aren't available in the .NET Standard version of the .NET client libraries. When using the .NET Standard version of the .NET client libraries, provide credentials more explicitly to authenticate, as in the following example.

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
        const string pat = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

        static void Main(string[] args)
        {
            var creds = new VssBasicCredential(string.Empty, pat);
            
            // Connect to Azure DevOps Services
            var connection = new VssConnection(new Uri(collectionUri), creds);
            
            // Get a GitHttpClient to talk to the Git endpoints
            using var gitClient = connection.GetClient<GitHttpClient>();
            
            // Get data about a specific repository
            var repo = gitClient.GetRepositoryAsync(projectName, repoName).Result;
        }
    }
}

```

Further authentication samples can be found on our [.NET Samples Page](../get-started/client-libraries/samples.md).

## Reference

You can find detailed, up-to-date reference documentation in the [.NET API browser](https://docs.microsoft.com/dotnet/api/).

## Samples

Check out samples on our [.NET Samples Page](../get-started/client-libraries/samples.md) or directly on our [.NET GitHub Repo](https://github.com/microsoft/azure-devops-dotnet-samples).

::: moniker range=">= azure-devops-2019"

For more information on nuget packages, see [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/).

::: moniker-end

## Known issues

### Interactive authentication dialog doesn't appear when using the Azure DevOps OM in a Single Threaded Apartment (STA)

The interactive authentication dialog doesn't appear in cases where your code is running from a [Single Threaded Apartment](/windows/desktop/com/single-threaded-apartments) (STA).  This issue can commonly occur from [WPF](/dotnet/desktop-wpf/) applications.  To work around this issue, you can change your initialization method to be async and request authentication as in the following example.

```csharp
async void InitAzureDevOps()
{
    Uri _uri = new Uri("https://dev.azure.com/MyAccount/");

    var creds = new VssClientCredentials(new WindowsCredential(false),
                                         new VssFederatedCredential(false),
                                         CredentialPromptType.PromptIfNeeded);

    VssConnection vssConnection = new VssConnection(_uri, creds);
    await vssConnection.ConnectAsync();

    ...

}
```

### Using NetStandard 2.0 versions of the Azure DevOps OM

For version 16.143.1 of our NuGet packages, we support NetStandard 2.0. These packages correlate with Azure DevOps Server 2019 RTW and are fully compatible with Azure DevOps.

### Microsoft.TeamFoundationServer.ExtendedClient package doesn't have NetStandard support

The [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient) currently doesn't support a NetStandard compliant version. This package includes our older SOAP object model, which has been replaced by our newer REST object model.  At this point, we're no longer investing in the older SOAP object model, and have no plans to create a NetStandard version of it.
