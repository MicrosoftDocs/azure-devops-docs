---
title: Publish Build Artifacts task
description: Publish build artifacts to Azure Pipelines, Team Foundation Server (TFS), or to a file share
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.manager: jillfra
ms.custom: seodec18
ms.author: dastahel
author: davidstaheli
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Publish Build Artifacts task

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015.3**

Use this task in a build pipeline to publish build artifacts to Azure Pipelines, TFS, or a file share.

> [!TIP]
> Looking to get started working with build artifacts? See [Artifacts in Azure Pipelines](../../artifacts/build-artifacts.md).

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/PublishBuildArtifactsV1.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| `pathToPublish`<br/>Path to publish | The folder or file path to publish. This can be a fully-qualified path or a path relative to the root of the repository. Wildcards are not supported. See [Artifacts in Azure Pipelines](../../build/artifacts.md). |
| `ArtifactName`<br/>Artifact name | Specify the name of the artifact that you want to create. It can be whatever you want. For example: `drop` |
| `publishLocation`<br/>Artifact publish location | Choose whether to store the artifact in Azure Pipelines (`Container`), or to copy it to a file share (`FilePath`) that must be accessible from the build agent. To learn more, see [Artifacts in Azure Pipelines](../../artifacts/build-artifacts.md). |
| `TargetPath`<br/>File share path | Specify the path to the file share where you want to copy the files. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. Publishing artifacts from a Linux or macOS agent to a file share is not supported. |
| `Parallel`<br/>Parallel copy (**Azure Pipelines**, **TFS 2018**, or newer) | Select whether to copy files in parallel using multiple threads for greater potential throughput. If this setting is not enabled, a single thread will be used. |
| `ParallelCount`<br/>Parallel count (**Azure Pipelines**, **TFS 2018**, or newer) | Enter the degree of parallelism (the number of threads) used to perform the copy. The value must be at least 1 and not greater than 128. Choose a value based on CPU capabilities of the build agent. Typically, 8 is a good starting value. |
| `FileCopyOptions`<br/>File copy options | Pass additional options to the Robocopy command. |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

[!INCLUDE [example](../_shared/copyfiles-publishbuildartifacts-usage.md)]

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

<!-- ENDSECTION -->
