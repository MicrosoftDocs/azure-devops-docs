---
title: Publish Pipeline Artifacts task
description: Publish artifacts to Azure Pipelines.
ms.topic: reference
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 01/05/2021
monikerRange: azure-devops
---

# Publish Pipeline Artifacts task

**Azure Pipelines**

Use this task in a pipeline to publish your artifacts(note that publishing is NOT supported in release pipelines. It is supported in multi-stage pipelines, build pipelines, and yaml pipelines).

> [!TIP]
> Looking to get started with build artifacts? See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md).

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishPipelineArtifactV1.md)]

> [!NOTE]
> The `publish` and `download` keywords are shortcuts for the **Publish Pipeline Artifact** task. You can use them in your pipeline to publish and download artifacts. For more information, see [Publish](../../yaml-schema.md#publish) and [Download](../../yaml-schema.md#download) in the YAML schema.

## Arguments

| Argument | Description |
| -------- | ----------- |
| targetPath | Path to the folder or file you want to publish. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. See [Publishing artifacts](../../artifacts/pipeline-artifacts.md#publishing-artifacts). |
| artifactName | Your artifact name. You can specify any name you want. For example: `drop` |
| [!INCLUDE [control-options-arguments-md](../includes/control-options-arguments-md.md)] | |

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

<!-- ENDSECTION -->

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

