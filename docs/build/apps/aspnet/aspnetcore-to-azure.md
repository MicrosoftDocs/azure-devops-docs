---
title: Build and deploy your ASP.NET Core app to Azure
description: Define a continuous integration (CI) build for your an ASP.NET Core app in Visual Studio Team Services or Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: B5F1C4D4-6A3D-48A0-9D88-3E1B7BF5D152
ms.manager: douge
ms.author: alewis
ms.date: 05/23/2017
---

# Build and deploy your ASP.NET Core app to Azure

**Team Services | [TFS 2017 RTM](../../apps/aspnet/ci/build-aspnet-core.md) | Previous versions: [XAML Build](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx), [Release](../../../release/previous-version/release-management-overview.md)**

[!INCLUDE [temp](../../_shared/ci-cd-newbies.md)]

[ASP.NET Core](http://www.asp.net/core) is a lean and composable framework for building web and cloud applications. In this walkthrough we'll show you how to create a continuous integration (CI) and continuous deployment (CD) pipeline to automatically build and deploy your ASP.NET Core app to [Azure](https://azure.microsoft.com/). 

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

[!INCLUDE [temp](_shared/steps.md)]

[!INCLUDE [temp](_shared/setup.md)]

[!INCLUDE [include](../_shared/azure-web-app-setup.md)]

[!INCLUDE [temp](_shared/define-ci-build.md)]

### Create the build definition

In this section we'll create a build definition for the ASP.NET Core web application, starting with an empty definition and adding each step manually. The result will be a .ZIP file for the web application that's stored where it can be accessed by the release definition we'll create in the next section.

<ol>
    [!INCLUDE [include](../../_shared/begin-create-build-definition.md)]

    <li>Select the **ASP.NET Core (PREVIEW)** process.</li>

    <li>As the repository source, select the team project, repository, and branch.</li>

</ol>

### Review the tasks

To get started with a new app, you don't need to modify any of the tasks, but feel free to familiarize yourself with them. You can always make customizations later.

[!INCLUDE [include](_shared/aspnet-core-build-tasks.md)]

### Review the variables

[Variables](../../define/variables.md) give you a convenient way to get key bits of data into various parts of your build process. You refer to a variable using `$(<variable_name>)`. Some variables are pre-defined; others you need to define directly.

On the Variables tab you'll find the following variables:

|Name|Value|
|-|-|
|`BuildConfiguration`|`release`|
|`BuildPlatform`|`any cpu`|

### Select the default agent queue

[!INCLUDE [include](_shared/aspnet-core-build-queue.md)]

### Enable continuous integration (CI)

On the Triggers tab, enable **continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

### Queue and test the build

Save the build definition and queue a new build by selecting the **Queue new build** command.

Once the build is done (after a couple of minutes), click on the build number (such as "Build 332"), click the **Artifacts** tab, and then **Explore** to see the zip file produced by the build. This is the web deploy package that your release definition will consume to deploy your app.

After you've run the build, you're ready to create a release definition to deploy your app to Azure.

[!INCLUDE [include](../_shared/create-release.md)]

[!INCLUDE [include](_shared/commit-build-release.md)]

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](_shared/aspnet-core-build-qa.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- BEGINSECTION class="md-qanda" -->
