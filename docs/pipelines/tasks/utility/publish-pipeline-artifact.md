---
title: Publish Pipeline Artifacts task
description: Publish artifacts to Azure Pipelines.
ms.topic: reference
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 10/07/2019
monikerRange: azure-devops
---

# Publish Pipeline Artifacts task

**Azure Pipelines**

Use this task in a pipeline to publish artifacts for the Azure Pipeline (note that publishing is NOT supported in release pipelines. It is supported in multi stage pipelines, build pipelines, and yaml pipelines).

> [!TIP]
> Looking to get started working with build artifacts? See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md).

## Demand

None

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishPipelineArtifactV1.md)]

## Arguments


| Argument | Description |
| -------- | ----------- |
| targetPath | Path to the folder or file you want to publish. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). |
| artifactName | Specify the name of the artifact that you want to create. It can be whatever you want. For example: `drop` |
| [!INCLUDE [control-options-arguments-md](../includes/control-options-arguments-md.md)] | |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

<!-- ENDSECTION -->
