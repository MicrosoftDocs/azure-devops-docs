---
title: Build ASP.NET apps
description: Automatically build ASP.NET apps in Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 840F4B48-D9F1-4B5F-98D9-00945501FA98
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.custom: seodec18
ms.date: 01/24/2019
monikerRange: '>= tfs-2017'
---

# Build ASP.NET apps

[!INCLUDE [version-tfs-2017-rtm](../../_shared/version-tfs-2017-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

This guidance explains how to build .NET Framework projects. For guidance on .NET Core projects, see [this topic](../../languages/dotnet-core.md).

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

## Example

This example shows how to build an ASP.NET project. To start, [import](../../../repos/git/import-git-repository.md) (into Azure Repos or TFS) or fork (into GitHub) this repo using the following clone URL:

```
https://github.com/Microsoft/devops-project-samples.git
```

The sample repo includes several different projects, and the sample application for this article is located in the following path:

```
https://github.com/Microsoft/devops-project-samples/tree/master/dotnet/aspnet/webapp/Application
```

The sample app is a Visual Studio solution that has two projects: An ASP.NET Web Application project that targets .NET Framework 4.5, and a Unit Test project.

::: moniker range="< azure-devops"
> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. Also, you'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free Azure DevOps organization. Then change the selector in the upper-left corner of this page from Team Foundation Server to **Azure DevOps**.
::: moniker-end

* After you have the sample code in your own repository, create a pipeline using the instructions in [Create your first pipeline](../../create-first-pipeline.md) and select the **ASP.NET Core** template. This automatically adds the tasks required to build the code in the sample repository.

* Save the pipeline and queue a build to see it in action.

## Build environment

::: moniker range="azure-devops"

You can use Azure Pipelines to build your .NET Framework projects without needing to set up any infrastructure of your own. The [Microsoft-hosted agents](../../agents/hosted.md) in Azure Pipelines have several released versions of Visual Studio pre-installed to help you build your projects.
Use the **Hosted VS2017** agent pool to build on Visual Studio 2017 or Visual Studio 15.* versions. Use the **Hosted** agent pool to build using the tools in Visual Studio 2013 or Visual Studio 2015.

To change the agent pool on which to build, select **Tasks**, then select the **Process** node, and finally select the **Agent pool** that you want to use.

You can also use a [self-hosted agent](../../agents/agents.md#install) to run your builds. This is particularly helpful if you have a large repository and you want to avoid downloading the source code to a fresh machine for every build.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../../agents/agents.md#install).
Make sure that you have the necessary version of the Visual Studio installed on the agent.

::: moniker-end

## Build multiple configurations

It is often required to build your app in multiple configurations. The following steps extend the example above to build the app on four configurations: [Debug, x86], [Debug, x64], [Release, x86], [Release, x64].

1. Click the **Variables** tab and modify these variables:

 * `BuildConfiguration` = `debug, release`

 * `BuildPlatform` = `x86, x64`

1. Select **Tasks** and click on the **agent job** to change the options for the job:

 * Select **Multi-configuration**.

 * Specify **Multipliers:** `BuildConfiguration, BuildPlatform`

1. Select **Parallel** if you have multiple build agents and want to build your configuration/platform pairings in parallel.
