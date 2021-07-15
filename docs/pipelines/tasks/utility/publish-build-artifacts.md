---
title: Publish Build Artifacts task
description: Publish build artifacts to Azure Pipelines, Team Foundation Server (TFS), or to a file share
ms.topic: reference
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Publish Build Artifacts task

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015.3**

> [!NOTE]
> This task is deprecated. If you're using Team Foundation Server 2017 or newer, we recommend that you use the [Pipeline Artifacts](../../artifacts/pipeline-artifacts.md) task instead.

Use this task in a build pipeline to publish build artifacts to Azure Pipelines, TFS, or a file share.

## Demands

None

::: moniker range=">= tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishBuildArtifactsV1.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| `pathToPublish`<br/>Path to publish<br/>*required* | The folder or file path to publish. This can be a fully-qualified path or a path relative to the root of the repository. Wildcards are not supported. See [Artifacts in Azure Pipelines](../../artifacts/artifacts-overview.md).<br/>Default value: `$(Build.ArtifactStagingDirectory)` |
| `ArtifactName`<br/>Artifact name<br/>*required* | Specify the name of the artifact that you want to create. It can be whatever you want.<br/>Default value: `drop` |
| `publishLocation`<br/>Artifact publish location<br/>*required* | Choose whether to store the artifact in Azure Pipelines (`Container`), or to copy it to a file share (`FilePath`) that must be accessible from the build agent. To learn more, see [Artifacts in Azure Pipelines](../../artifacts/build-artifacts.md).<br/>Default value: `Container` |
| `TargetPath`<br/>File share path<br/>*required*, if `publishLocation=FilePath` | Specify the path to the file share where you want to copy the files. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. Publishing artifacts from a Linux or macOS agent to a file share is not supported. |
| `Parallel`<br/>Parallel copy (**Azure Pipelines**, **TFS 2018**, or newer) | Select whether to copy files in parallel using multiple threads for greater potential throughput. If this setting is not enabled, a single thread will be used. |
| `ParallelCount`<br/>Parallel count (**Azure Pipelines**, **TFS 2018**, or newer) | Enter the degree of parallelism (the number of threads) used to perform the copy. The value must be at least 1 and not greater than 128. Choose a value based on CPU capabilities of the build agent. <br/>Default value: `8` |
| `FileCopyOptions`<br/>File copy options | Pass additional options to the Robocopy command. For example, the recursive minimatch pattern `**/*`. |
| [!INCLUDE [control-options-arguments-md](../includes/control-options-arguments-md.md)] | |

> [!NOTE]
> You cannot use **Bin**, **App_Data** and other folder names reserved by IIS as an Artifact name because this content is not served in response to Web requests. Please see [ASP.NET Web Project Folder Structure](/previous-versions/ex526337(v=vs.140)) for more details.

::: moniker range=">= tfs-2018"

[!INCLUDE [example](../includes/copyfiles-publishbuildartifacts-usage.md)]

::: moniker-end

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

<!-- ENDSECTION -->
