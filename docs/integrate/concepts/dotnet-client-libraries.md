---
title: .NET Client Libraries for Visual Studio Team Services (and TFS)
description: Easily integrate with Visual Studio Team Services and Team Foundation Server from apps and services on Windows.
ms.assetid: 474cdb4f-9a5e-49fb-84b2-9c540ebcf98b
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# .NET client libraries for Visual Studio Team Services (and TFS)

## Overview
For .NET developers building Windows apps and services that integrate with Visual Studio Team Services, client libraries are available for integrating with work item tracking, version control, build, and other services are now available. These packages replace the traditional TFS Client OM installer and make it easy to acquire and redistribute the libraries needed by your app or service.

### Features
* Downloadable from nuget.org and easily importable into your Visual Studio projects
* Libraries are licensed for redistribution in your apps and services ([view the license](http://go.microsoft.com/fwlink/?LinkId=329770))
* Access both traditional client object model APIs and [new REST APIs](../../api/overview.md)
 * Note: REST-based clients only work with Visual Studio Team Services and TFS 2015 (not previous versions of TFS) 
To learn more about extending and integrating with  Visual Studio Team Services and Team Foundation Server using the client libraries, see [Extending Team Foundation](https://msdn.microsoft.com/en-us/library/bb130146.aspx)

### Packages
| Package | Description | Primary usage |
|---------|-------------|---------------|
| [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient/) | Integrate with Microsoft Team Foundation Server (2012, 2013, 2015) and Visual Studio Team Services from desktop-based Windows applications. Work with and manage version control, work items, and build, and other resources from your client application. | Existing Windows apps leveraging an older version of the TFS Client OM. 
| [Microsoft.TeamFoundationServer.Client](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.Client/) | Integrate with Team Foundation Server 2015 and Visual Studio Team Services from desktop-based, ASP.NET, and other Windows applications. Provides access to version control, work item tracking, build, and more via public REST APIs. | Window desktop apps and services that need to integrate with TFS 2015 and later and Visual Studio Team Services.
| [Microsoft.VisualStudio.Services.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Client/) | Integrate with Team Foundation Server 2015 and Visual Studio Team Services from desktop-based, ASP.NET, and other Windows applications. Provides access to shared platform services such as account, profile, identity, security, and more via public REST APIs. | Windows desktop apps and services that need to interact with "shared platform" services (account, profile, identity, security, etc).
| [Microsoft.VisualStudio.Services.InteractiveClient](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.InteractiveClient/) | Integrate with Team Foundation Server 2015 and Visual Studio Team Services from desktop-based Windows applications that require interactive sign-in by a user. | Windows desktop applications not utilizing basic authentication or OAuth for authentication.
| [Microsoft.VisualStudio.Services.DistributedTask.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.DistributedTask.Client/) | Integrate with Team Foundation Server 2015 and Visual Studio Team Services from desktop-based, ASP.NET, and other Windows applications. Provides access to the Distributed Task Service via public REST APIs. | Window desktop apps and services that need to integrate with TFS 2015 and later and Visual Studio Team Services.
| [Microsoft.VisualStudio.Services.Release.Client](https://www.nuget.org/packages/Microsoft.VisualStudio.Services.Release.Client/) | Integrate with Team Foundation Server 2015 and Visual Studio Team Services from desktop-based, ASP.NET, and other Windows applications. Provides access to the Release Service via public REST APIs. | Window desktop apps and services that need to integrate with TFS 2015 and later and Visual Studio Team Services.

Review the [contracts index](../../api/contracts-page.md) to learn more about the .Net client libraries contracts.

<div class="alert alert-info">
**Tip**: If you have an existing Windows app or service that uses the TFS Client Object Model, use Microsoft.TeamFoundationServer.ExtendedClient
</div>