---
title: Publish Pipeline Artifacts task
description: Publish artifacts to Azure Pipelines.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.manager: hdixon
ms.custom: seodec18
ms.author: midenn
author: mitchdenny
ms.date: 12/07/2018
---

# Publish Pipeline Artifact task

**Azure Pipelines**

Use this task in a build pipeline to publish pipeline artifacts to Azure Pipeline (note that publishing is only supported in build pipelines).

> [!TIP]
> Looking to get started working with build artifacts? See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md).

## Demand

None

## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PublishPipelineArtifactV0.md)]

## Arguments

| Argument | Description |
| -------- | ----------- |
| targetPath | Path to the folder or file you want to publish. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. Typically, you'll specify `$(Build.ArtifactStagingDirectory)`. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). |
| artifactName | Specify the name of the artifact that you want to create. It can be whatever you want. For example: `drop` |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

<!-- ENDSECTION -->
