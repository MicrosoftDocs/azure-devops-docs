---
title: Build apps with .NET Framework
description: Use .NET Framework to build ASP.NET apps in Azure Pipelines.
ms.topic: how-to
ms.assetid: 840F4B48-D9F1-4B5F-98D9-00945501FA98
ms.custom: devx-track-dotnet
ms.date: 01/12/2026
monikerRange: '<= azure-devops'
# Customer intent: As an Azure DevOps user, I want to build and deploy ASP.NET apps with the .NET Framework so that I can automate my CI/CD workflows and ensure consistent, reliable deployments.
---

# Build ASP.NET apps with .NET Framework

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article describes how to build a .NET Framework project with Azure Pipelines. This guide is intended for Azure DevOps users who are building and deploying ASP.NET applications using the .NET Framework. For .NET Core projects, see [Build, test, and deploy .NET Core apps](../../ecosystems/dotnet-core.md).

## Prerequisites

| **Product** | **Requirements** |
|---|---|
| **Azure DevOps** | - An [Azure DevOps proje](../../../organizations/projects/create-project.md)ct.<br>   - An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../../licensing/concurrent-jobs.md) or you can request a free tier.<br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../../create-first-pipeline.md).<br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp; - To create a pipeline: you must be in the **Contributors** group and the group needs to have *Create build pipeline* permission set to Allow. Members of the [Project Administrators group](../../../organizations/security/permissions.md) can manage pipelines.<br> &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* [role for service connections](../../library/add-resource-protection.md). |
| **.NET Framework** | - A .NET Framework project (version 4.5 or later recommended).<br> - Experience with Visual Studio or another .NET development environment.<br> - The appropriate [.NET Framework SDK](https://dotnet.microsoft.com/download) installed on your local machine. |
| **GitHub** | - A [GitHub](https://github.com) account. <br>   - A [GitHub service connection](../../library/service-endpoints.md) to authorize Azure Pipelines.|

## Create an Azure DevOps project

1. In your Azure DevOps organization or collection, select **New project** or **Create project**.
1. Enter a **Project name**.
1. Select the **Visibility** for your project.
1. Select **Create**.

## Get the sample app

If you do not have an existing ASP.NET project, follow the App Service guide to [Create an ASP.NET 4.8 web app](/azure/app-service/quickstart-dotnetcore#create-an-aspnet-web-app?tabs=netframework48&pivots=development-environment-vs). 

## Create and build the pipeline

After you add the sample code to your own repository, create a pipeline in your Azure DevOps project. For more information, see [Create your first pipeline](../../create-first-pipeline.md).

Select the **ASP.NET** template. This choice automatically adds the *azure-pipelines.yml* file with the tasks required to build the code to the sample repository. The template includes the VSTest@3 task to run tests. The sample repository doesn't contain tests, so you can remove the VSTest@3 task from the pipeline.  

Your pipeline should look like the following example:

::: moniker range="azure-devops"

```yaml
# ASP.NET
# Build and test ASP.NET projects.
# Add steps that publish symbols, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/apps/aspnet/build-aspnet-4

trigger:
- main

pool:
  vmImage: 'windows-latest'

variables:
  solution: '**/*.sln'
  buildPlatform: 'Any CPU'
  buildConfiguration: 'Release'

steps:
- task: NuGetToolInstaller@1

- task: NuGetCommand@2
  inputs:
    restoreSolution: '$(solution)'

- task: VSBuild@1
  inputs:
    solution: '$(solution)'
    msbuildArgs: '/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:PackageLocation="$(build.artifactStagingDirectory)"'
    platform: '$(buildPlatform)'
    configuration: '$(buildConfiguration)'

```

::: moniker-end

::: moniker range="< azure-devops"

```yaml
# ASP.NET
# Build and test ASP.NET projects.
# Add steps that publish symbols, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/apps/aspnet/build-aspnet-4

trigger:
- main

pool: 
  name: default
  
variables:
  solution: '**/*.sln'
  buildPlatform: 'Any CPU'
  buildConfiguration: 'Release'

steps:
- task: NuGetToolInstaller@1

- task: NuGetCommand@2
  inputs:
    restoreSolution: '$(solution)'

- task: VSBuild@1
  inputs:
    solution: '$(solution)'
    msbuildArgs: '/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:PackageLocation="$(build.artifactStagingDirectory)"'
    platform: '$(buildPlatform)'
    configuration: '$(buildConfiguration)'

```

::: moniker-end

Select **Save and run** and select **Jobs** to see the pipeline in action.

To publish the build artifacts, add the following task to the end of your YAML file:

::: moniker range="azure-devops"

```yaml
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(Pipeline.Workspace)'
    artifact: 'myartifact'
    publishLocation: 'pipeline'
```

::: moniker-end

::: moniker range="< azure-devops"

```yaml

- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: drop

```
::: moniker-end


## Build environment

::: moniker range=">=azure-devops"

You can use Azure Pipelines to build your .NET Framework projects without setting up any infrastructure. The [Microsoft-hosted agents](../../agents/hosted.md) in Azure Pipelines include several released versions of Visual Studio to help you build your projects. Use `windows-2025` for Windows Server 2025 with Visual Studio 2022.

You can also use a [self-hosted agent](../../agents/agents.md#install) to run your builds. Using a self-hosted agent is helpful if you have a large repository and you want to avoid downloading the source code to a fresh machine for every build.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../../agents/agents.md#install). Make sure that you have the necessary version of Visual Studio installed on the agent.

::: moniker-end

## Build multiple configurations

You might need to build your app in multiple configurations. The following steps build the example app on four configurations: `Debug, x86`, `Debug, x64`, `Release, x86`, and `Release, x64`.

1. In the pipeline UI, select the **Variables** tab and modify the following variables:

   - `BuildConfiguration` = `debug, release`
   - `BuildPlatform` = `x86, x64`

1. Select **Tasks** and then select **agent job** to change the following options for the job:

   - Select **Multi-configuration**.
   - Specify **Multipliers:** `BuildConfiguration, BuildPlatform`

1. Select **Parallel** if you have multiple build agents and want to build your configuration and platform pairings in parallel.

## Restore dependencies

Use the [NuGet task](/azure/devops/pipelines/tasks/reference/nuget-command-v2) to install and update NuGet package dependencies. You can also use the NuGet task to download NuGet packages from Azure Artifacts, NuGet.org, or other external or internal NuGet repositories.

The following example restores a solution from a project-scoped feed in the same organization.

```yaml
- task: NuGetCommand@2
  inputs:
    command: 'restore'
    feedsToUse: 'select'
    vstsFeed: 'my-project/my-project-scoped-feed'
    includeNuGetOrg: false
    restoreSolution: '**/*.sln'
```

> [!NOTE]
> If you're using Ubuntu 24.04 or higher, you must use the `NuGetAuthenticate` task with the .NET CLI instead of the `NuGetCommand@2` task. See [Support for newer Ubuntu hosted images](/azure/devops/pipelines/tasks/reference/nuget-command-v2#support-for-newer-ubuntu-hosted-images) for more details.

## Related content

- [Publish NuGet packages with Azure Pipelines](../../artifacts/nuget.md)
- [Quickstart: Get started with NuGet packages in Azure Artifacts](../../../artifacts/get-started-nuget.md)
- [Azure Pipelines agents](../../agents/agents.md#install)