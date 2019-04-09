---
title: .NET Client Libraries for Azure DevOps Services (and TFS)
description: Easily integrate with Azure DevOps Services and Team Foundation Server from apps and services on Windows.
ms.assetid: 474cdb4f-9a5e-49fb-84b2-9c540ebcf98b
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# .NET client libraries for Azure DevOps Services (and TFS)

## Overview

For .NET developers building Windows apps and services that integrate with Azure DevOps Services, client libraries are available for integrating with work item tracking, version control, build, and other services are now available. These packages replace the traditional TFS Client OM installer and make it easy to acquire and redistribute the libraries needed by your app or service.

### Features

* Downloadable from nuget.org and easily importable into your Visual Studio projects
* Libraries are licensed for redistribution in your apps and services ([view the license](http://go.microsoft.com/fwlink/?LinkId=329770))
* Access both traditional client object model APIs and [new REST APIs](/rest/api/vsts/index)


> [!NOTE]
> REST-based clients only work with Azure DevOps Services and TFS 2015 (not previous versions of TFS)
> To learn more about extending and integrating with  Azure DevOps Services and Team Foundation Server using the client libraries,
> see [Extending Team Foundation](https://msdn.microsoft.com/library/bb130146.aspx)

### Packages

| Package | Description | Primary usage |
|---------|-------------|---------------|
| [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/) | Integrate with TFS (2012, 2013, 2015) and Azure DevOps Services from desktop-based Windows applications. Work with and manage version control, work items, and build, and other resources from your client application. | Existing Windows apps leveraging an older version of the TFS Client OM. New work item and testing features will not be supported in this package. Please use the [.NET Client Library](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/) based on REST.
| [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/) | Integrate with Team Foundation Server 2015 and Azure DevOps Services from desktop-based, ASP.NET, and other Windows applications. Provides access to version control, work item tracking, build, and more via public REST APIs. | Windows desktop apps and services that need to integrate with TFS 2015 and later and Azure DevOps Services.
| [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/) | Integrate with Team Foundation Server 2015 and Azure DevOps Services from desktop-based, ASP.NET, and other Windows applications. Provides access to shared platform services such as organization, profile, identity, security, and more via public REST APIs. | Windows desktop apps and services that need to interact with "shared platform" services (organization, profile, identity, security, etc).
| [Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/) | Integrate with Team Foundation Server 2015 and Azure DevOps Services from desktop-based Windows applications that require interactive sign-in by a user. | Windows desktop apps not utilizing basic authentication or OAuth for authentication.
| [Microsoft.VisualStudio.Services.DistributedTask.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.DistributedTask.Client/) | Integrate with Team Foundation Server 2015 and Azure DevOps Services from desktop-based, ASP.NET, and other Windows applications. Provides access to the Distributed Task Service via public REST APIs. | Windows desktop apps and services that need to integrate with TFS 2015 and later and Azure DevOps Services.
| [Microsoft.VisualStudio.Services.Release.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Release.Client/) | Integrate with Team Foundation Server 2015 and Azure DevOps Services from desktop-based, ASP.NET, and other Windows applications. Provides access to the Release Service via public REST APIs. | Windows desktop apps and services that need to integrate with TFS 2015 and later and Azure DevOps Services.


> [!TIP]
> If you have an existing Windows app or service that uses the TFS Client Object Model, use Microsoft.TeamFoundationServer.ExtendedClient

### Installing

From a NuGet package manager command prompt:

```cmd
PM> Install-Package Microsoft.TeamFoundationServer.ExtendedClient
```

## Pattern for use

In general, you will first create an authenticated connection to Azure DevOps Services or TFS, then get an HttpClient for the service you want to work with, and finally call methods against that service.
Example:

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
GitHttpClient gitClient = connection.GetClient<GitHttpClient>();

// Get data about a specific repository
var repo = gitClient.GetRepositoryAsync(c_projectName, c_repoName).Result;
```

## Reference

You can find detailed, up-to-date reference documentation in the [Azure DevOps Services .NET SDK API Reference browser](https://docs.microsoft.com/dotnet/api/index?view=azure-devops-dotnet).

## Samples

You can check out samples on our [.NET Samples Page](../get-started/client-libraries/samples.md) or directly on our [.NET GitHub Repo](https://github.com/Microsoft/vsts-dotnet-samples).

## Known issues

### Interactive authentication dialog does not appear when using the Azure DevOps OM in a Single Threaded Apartment (STA)

There is a known issue that prevents the interactive authentication dialog from appearing in cases where your code is running from a [Single Threaded Apartment](https://docs.microsoft.com/en-us/windows/desktop/com/single-threaded-apartments) (STA).  This can commonly occur from [WPF](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/wpf-architecture) applications.  To work around this issue, you can change your initialization method to be async and request authentication as in the following example:

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

Currently our NetStandard 2.0 versions of our binaries are in preview and thus will only be found in our preview NuGet packages.  When referencing our NuGet packages you may get warnings that some of our dependencies may not be fully compatible with your project.

Unfortunately we have some dependencies that do not have specific binaries built for NetStandard for the version we need.  The good news is that portable binaries are fully compatible with NetStandard, and they do supply portable versions of their binaries in their NuGet packages.  You just need to add a fallback in your project file, so it knows which one to prefer.

```xml
<PropertyGroup>
  <AssetTargetFallback>$(AssetTargetFallback);portable-net451+win8</AssetTargetFallback>
</PropertyGroup>
```

You may still get warnings, but these warnings can be suppressed.

We have updated our dependencies in our latest code branch, which updates the Microsoft.AspNet.WebApi.Client to a later version, which has full support for NetStandard.  This also removes our dependencies on the other two packages you are getting warnings for.  These packages will be should be available sometime in March 2019.   Once you reference these new packages, you can remove the AssetTargetFallback, and the warning suppression.

### Microsoft.TeamFoundationServer.ExtendedClient package does not have NetStandard support

The [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient) currently does not support a NetStandard compliant version. This package includes our older SOAP object model, which has been replaced by our newer REST object model.  At this point we are no longer investing in the older SOAP object model, and have no plans to create a NetStandard version of it.
