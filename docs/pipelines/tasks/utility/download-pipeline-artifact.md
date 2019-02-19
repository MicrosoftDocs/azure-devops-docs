---
title: Download Pipeline Artifact task
description: Download Pipeline Artifact task to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: a433f589-fce1-4460-9ee6-44a624aeb1fb
ms.manager: hdixon
ms.custom: seodec18
ms.author: midenn
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Pipeline Artifact task

Use this task in a build or release pipeline to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline.

::: moniker range="azure-devops"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DownloadPipelineArtifactV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| targetPath | The target path where the contents of the pipeline artifact will be placed. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). |
| artifactName | The name of the artifact that you want to download. |
| pipelineId | The ID of the Pipeline to download from. For example: `1764` |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
