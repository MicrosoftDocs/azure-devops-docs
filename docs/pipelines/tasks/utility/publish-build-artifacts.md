---
title: Publish Build Artifacts task
description: Publish build artifacts to Azure Pipelines, Team Foundation Server (TFS), or to a file share
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
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
| Path to publish | Path to the folder or file you want to publish. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. (`$(Build.ArtifactStagingDirectory)`) is the most common value and is what should be used in most cases. Subdirectories of the specified path will not be published. Wildcards in the path are not supported. See [Artifacts in Azure Pipelines](../../build/artifacts.md). |
| Artifact name | Specify the name of the artifact that you want to create. It can be whatever you want. For example: `drop` |
| Artifact publish location | In most cases, Azure Pipelines/TFS (`Server` on **TFS 2018 RTM** and older) is the best and simplest option. Otherwise, choose a file share and then specify a few more arguments (see below). If left empty or `container` is specified, it will have the same effect as specifying `Azure Pipelines/TFS`. To learn more, see [Artifacts in Azure Pipelines](../../artifacts/build-artifacts.md). |
| File share path | Specify the path to the file share where you want to copy the files. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. Publishing artifacts from a Linux or macOS agent to a file share is not supported. |
| Parallel copy (**Azure Pipelines**, **TFS 2018**, or newer) | Select whether to copy files in parallel using multiple threads for greater potential throughput. If this setting is not enabled, a single thread will be used. |
| Parallel count (**Azure Pipelines**, **TFS 2018**, or newer) | Enter the degree of parallelism (the number of threads) used to perform the copy. The value must be at least 1 and not greater than 128. Choose a value based on CPU capabilities of the build agent. Typically, 8 is a good starting value. |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

[!INCLUDE [example](../_shared/copyfiles-publishbuildartifacts-usage.md)]

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

<!-- ENDSECTION -->
