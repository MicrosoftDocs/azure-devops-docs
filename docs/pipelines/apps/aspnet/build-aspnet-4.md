---
title: Build apps with .NET Framework
description: Use .NET Framework to build ASP.NET apps in Azure Pipelines.
ms.topic: conceptual
ms.assetid: 840F4B48-D9F1-4B5F-98D9-00945501FA98
ms.custom: devx-track-dotnet
ms.date: 07/09/2024
monikerRange: '<= azure-devops'
---

# Build ASP.NET apps with .NET Framework

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article describes how to build a .NET Framework project with Azure Pipelines. For .NET Core projects, see [Build, test, and deploy .NET Core apps](../../ecosystems/dotnet-core.md).

## Create an Azure DevOps project

1. In your Azure DevOps organization or collection, select **New project** or **Create project**.
1. Enter a **Project name**.
1. Select the **Visibility** for your project.
1. Select **Create**.

## Get the sample app

The sample app is a Visual Studio solution that uses .NET 4.8. To get the app, fork the GitHub repo at `https://github.com/Azure-Samples/app-service-web-dotnet-get-started`.

## Create and build the pipeline

Once you have the sample code in your own repository, create a pipeline in your Azure DevOps project by using the instructions in [Create your first pipeline](../../create-first-pipeline.md).

Select the **ASP.NET** template. This choice automatically adds the tasks required to build the code in the sample repository.

Select **Save and run** to see the pipeline in action.

## Build environment

::: moniker range=">=azure-devops"

You can use Azure Pipelines to build your .NET Framework projects without needing to set up any infrastructure of your own. The [Microsoft-hosted agents](../../agents/hosted.md) in Azure Pipelines have several released versions of Visual Studio preinstalled to help you build your projects. Use `windows-2022` for Windows Server 2022 with Visual Studio 2022.

You can also use a [self-hosted agent](../../agents/agents.md#install) to run your builds. Using a self-hosted agent is helpful if you have a large repository and you want to avoid downloading the source code to a fresh machine for every build.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../../agents/agents.md#install). Make sure that you have the necessary version of the Visual Studio installed on the agent.

### Build multiple configurations

You might need to build your app in multiple configurations. The following steps build the example app on four configurations: `Debug, x86`, `Debug, x64`, `Release, x86`, and `Release, x64`.

1. In the pipeline UI, select the **Variables** tab and modify the following variables:

   - `BuildConfiguration` = `debug, release`
   - `BuildPlatform` = `x86, x64`

1. Select **Tasks** and then select **agent job** to change the following options for the job:

   - Select **Multi-configuration**.
   - Specify **Multipliers:** `BuildConfiguration, BuildPlatform`

1. Select **Parallel** if you have multiple build agents and want to build your configuration/platform pairings in parallel.

::: moniker-end

## Restore dependencies

You can use the [NuGet task](/azure/devops/pipelines/tasks/reference/nuget-command-v2) to install and update NuGet package dependencies. You can also use the NuGet task to download NuGet packages from Azure Artifacts, NuGet.org, or other external or internal NuGet repositories.

The following code restores a solution from a project-scoped feed in the same organization.

```yaml
# Restore from a project scoped feed in the same organization
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    feedsToUse: 'select'
    vstsFeed: 'my-project/my-project-scoped-feed'
    includeNuGetOrg: false
    restoreSolution: '**/*.sln'
```

## Related content

- [Create your first pipeline](../../create-first-pipeline.md)
- [Build, test, and deploy .NET Core apps](../../ecosystems/dotnet-core.md)
- [Azure Pipelines agents](../../agents/agents.md#install)