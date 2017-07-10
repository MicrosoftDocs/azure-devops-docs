---
title: Package Management in Team Services and TFS
description: Use package management to host and share NuGet packages and npm modules with Visual Studio Team Services or Team Foundation Server
ms.assetid: 7F863543-2AFF-4726-A86A-4CF81DE98DCE
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.manager: douge
ms.author: amullans
ms.date: 08/10/2016
---

# Package Management in Team Services and TFS

**Team Services | TFS 2017 Update 1**

Host your NuGet packages and npm modules in **Team Services** and **Team Foundation Server 2017 Update 1** using Package Management feeds. 

<img alt="Welcome to package mangement" src="_shared/_img/bo-package-push.svg" height="300px">

>[!NOTE]
>Package Management is an **[extension](http://go.microsoft.com/fwlink/?LinkId=723595)** that makes it easy to discover, install, and publish packages.
>It's deeply integrated with other Team Services and TFS hubs like Build so that package management can become a seamless part of your existing workflows.
>The extension must be installed from the Marketplace to create or consume packages.

## Package Management Overview

Package Management introduces the concept of multiple *feeds* that can be used to organize and control access to your packages. If you're familiar with using packages from [NuGet.org](https://www.nuget.org) or modules from [npmjs](https://www.npmjs.com), you can think of those places each as a single feed. You may also have heard feeds called *repositories*.

## Get started using Package Management
Get up and running with NuGet or npm in Team Services and TFS in just a few minutes with the [NuGet quick start](get-started-nuget.md) and [npm quick start](get-started-npm.md).

If you haven't used packages before, see the [conceptual introduction](what-is-packaging.md). When you're ready to get started, [install and license Package Management](install.md).

<a name="content-summary"></a>

## Articles

### Feeds and permissions

<table class="table table-striped table-bordered">
<thead class="thead-inverse">
<tr>
<th class="col-md-3">Article</th>
<th class="col-md-9">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Create feeds](feeds/create-feed.md)</td>
<td>Learn how to create feeds for Package Management in both Team Services and TFS.</td>
</tr>
<tr>
<td>[Set permissions](feeds/feed-permissions.md)</td>
<td>Configure how each of your teams or team members can interact with specific feeds. Options include Reader, Contributor, and Owner.</td>
</tr>
<tr>
<td>[Communicate package quality using views](feeds/views.md)</td>
<td>Categorize your packages as prerelease or release to indicate package quality.</td>
</tr>
<tr>
<td>[Learn about common identities](feeds/common-identities.md)</td>
<td>Learn about identities used in Visual Studio Team Services and TFS that can be targetted for permissions configurations.</td>
</tr>
<tr>
<td>[Understand immutability](feeds/immutability.md) </td>
<td>Understand the immutable nature of packages and how to work around it if you have any issues with broken or incorrect packages.</td>
</tr>
<tr>
<td>[Integrate with REST APIs](https://visualstudio.com/docs/integrate/api/packaging/overview)</td>
<td>Learn more about the Packaging API to interact with feeds and packages.</td>
</tr>
</tbody>
</table>

### NuGet packages

<table class="table table-striped table-bordered">
<thead class="thead-inverse">
<tr>
<th class="col-md-3">Article</th>
<th class="col-md-9">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Publish NuGet packages](nuget/publish.md)</td>
<td>Learn how to publish a NuGet package to Team Services and TFS.</td>
</tr>
<tr>
<td>[Consume packages in Visual Studio](nuget/consume.md) </td>
<td>Learn how to configure your NuGet feeds and packages for consumption, including setting up proper authentication.</td>
</tr>
<tr>
<td>Use [NuGet](nuget/nuget-exe.md) or [dotnet](nuget/dotnet-exe.md) with Team Services</td>
<td>Find out how to set up credentials and authentication to set up NuGet or dotnet with Team Services using Package Management.</td>
</tr>
<tr>
<td>Use [NuGet or dotnet with TFS](nuget/tfs.md)</td>
<td>Find out how to set up credentials and authentication to set up NuGet or dotnet with Team Foundation Server using Package Management.</td>
</tr>
<tr>
<td>[Setup developer environments for large teams](nuget/bootstrap-nuget.md)</td>
<td>Learn about setting up a multi-developer environment for your NuGet package management system.</td>
</tr>
<tr>
<td>[Unlist or delete a package](nuget/unlist-delete.md)</td>
<td>Find out how to remove a NuGet package from a feed in Team Services and TFS.</td>
</tr>
<tr>
<td>[Migrate from file shares](nuget/move-from-fileshares.md)</td>
<td>Learn how to move your NuGet packages to the clouds with hosted feeds.</td>
</tr>
</tbody>
</table>

### npm packages

<table class="table table-striped table-bordered">
<thead class="thead-inverse">
<tr>
<th class="col-md-3">Article</th>
<th class="col-md-9">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Set up your npmrc](npm/npmrc.md)</td>
<td>Set up your .npmrc configuration files to store feed URLs and credentials for proper authentication.</td>
</tr>
<tr>
<td>[Use packages from npmjs.com](npm/upstream-sources.md)</td>
<td>Learn about enabling npmjs.com as an upstream source for your feed in Team Services or TFS.</td>
</tr>
<tr>
<td>[Publish packages](npm/publish.md)</td>
<td>Learn how to publish an npm package to Team Services and TFS.</td>
</tr>
<tr>
<td>[Install packages](npm/install.md)</td>
<td>Use the npm client to install npm modules/packages from your feed or from npmjs.com if you've configured upstream sources.</td>
</tr>
<tr>
<td>[Use npm scopes](npm/scopes.md)</td>
<td>Find out the proper way to configure packages with npm scopes.</td>
</tr>
<tr>
<td>[Deprecate or unpublish a package](npm/deprecate-unpublish.md) </td>
<td>Learn how to deprecrate or uninstall an npm package completely.</td>
</tr>
</tbody>
</table>

### Continuous delivery

<table class="table table-striped table-bordered">
<thead class="thead-inverse">
<tr>
<th class="col-md-3">Article</th>
<th class="col-md-9">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Package CI overview](build/overview.md)</td>
<td>Discover the landing page for learning how to integrate your packages into your Team Services and TFS builds.</td>
</tr>
<tr>
<td>[NuGet in Team Build](build/team-build-nuget.md)</td>
<td>Use Team Build to restore and publish NuGet packages.</td>
</tr>
<tr>
<td>[npm in Team Build](build/team-build-npm.md)</td>
<td>Use Team Build to restore and publish npm packages.</td>
</tr>
<tr>
<td>[NuGet in Jenkins](build/jenkins.md)</td>
<td>Use Jenkins to restore and publish NuGet packages.</td>
</tr>
</tbody>
</table>

## Continuously integrate packages
Automate the packing and publishing of NuGet packages.

* [Restore and publish packages in Team Build](build/team-build.md)
* [Publish packages from Jenkins](build/jenkins.md) 

## Versions and compatability
Some package management services are only compatible with specific versions of TFS. Check out the table below to see compatibility.

| Product       | Team Services | TFS                         |
|---------------|---------------|-----------------------------|
| **NuGet**     | Yes           | TFS 2017                    |
| **npm**       | Yes           | TFS 2017 Update 1 and newer |

## Other package types
Need to host other package types (Maven, Docker, Cocoapods, etc.)? Tell us on the [Package Management UserVoice](https://visualstudio.uservoice.com/forums/330519-team-services/category/145266-package-management).