---
title: .NET Framework
description: Use .NET Framework to build ASP.NET apps in Azure Pipelines
ms.topic: conceptual
ms.assetid: 840F4B48-D9F1-4B5F-98D9-00945501FA98
ms.custom: seodec18, devx-track-dotnet
ms.date: 01/09/2023
monikerRange: '<= azure-devops'
---

# Build ASP.NET apps with .NET Framework

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

> [!NOTE]
>
> This article focuses on building .NET Framework projects with Azure Pipelines. For help with .NET Core projects, see [.NET Core](../../ecosystems/dotnet-core.md).
## Create your first pipeline

::: moniker range=">=azure-devops-2020"

> Are you new to Azure Pipelines? If so, then we recommend you try this section before moving on to other sections.

::: moniker-end

### Get the code

::: moniker range=">=azure-devops-2020"

[!INCLUDE [include](../../ecosystems/includes/get-code-before-sample-repo.md)]

::: moniker-end

::: moniker range="azure-devops-2019"

Import this repo into your Git repo in Azure DevOps Server 2019:

::: moniker-end

::: moniker range="< azure-devops-2019"

Import this repo into your Git repo in TFS:

::: moniker-end

```
https://github.com/Azure-Samples/app-service-web-dotnet-get-started
```
  

The sample app is a Visual Studio solution that uses .NET 4.8. 


::: moniker range=">=azure-devops-2020"

### Sign in to Azure Pipelines

[!INCLUDE [include](../../ecosystems/includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](../../ecosystems/includes/create-project.md)]

::: moniker-end


::: moniker range="< azure-devops"
> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. Also, you'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free Azure DevOps organization. Then change the selector in the upper-left corner of this page from Team Foundation Server to **Azure DevOps**.
::: moniker-end

* After you have the sample code in your own repository, create a pipeline using the instructions in [Create your first pipeline](../../create-first-pipeline.md) and select the **ASP.NET** template. This automatically adds the tasks required to build the code in the sample repository.

* Save the pipeline and queue a build to see it in action.

## Build environment

::: moniker range=">=azure-devops-2020"

You can use Azure Pipelines to build your .NET Framework projects without needing to set up any infrastructure of your own. The [Microsoft-hosted agents](../../agents/hosted.md) in Azure Pipelines have several released versions of Visual Studio pre-installed to help you build your projects.
* Use `windows-2022` for Windows Server 2022 with Visual Studio 2022

You can also use a [self-hosted agent](../../agents/agents.md#install) to run your builds. This is helpful if you have a large repository and you want to avoid downloading the source code to a fresh machine for every build.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../../agents/agents.md#install).
Make sure that you have the necessary version of the Visual Studio installed on the agent.

## Build multiple configurations

It is often required to build your app in multiple configurations. The following steps extend the example above to build the app on four configurations: [Debug, x86], [Debug, x64], [Release, x86], [Release, x64].

1. Click the **Variables** tab and modify these variables:

   * `BuildConfiguration` = `debug, release`
   * `BuildPlatform` = `x86, x64`

2. Select **Tasks** and click on the **agent job** to change the options for the job:

   * Select **Multi-configuration**.
   * Specify **Multipliers:** `BuildConfiguration, BuildPlatform`

3. Select **Parallel** if you have multiple build agents and want to build your configuration/platform pairings in parallel.
::: moniker-end

::: moniker range=">=azure-devops-2020"

## Restore dependencies

You can use the [NuGet task](/azure/devops/pipelines/tasks/reference/nuget-command-v2) to install and update NuGet package dependencies. 
You can also download NuGet packages from Azure Artifacts, NuGet.org, or some other external or internal NuGet repository with the NuGet task. 

This code restores a solution from a project-scoped feed in the same organization. 

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

::: moniker-end
