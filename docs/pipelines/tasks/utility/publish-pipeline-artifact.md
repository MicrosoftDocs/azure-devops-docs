---
title: Publish Pipeline Artifacts task
description: Publish artifacts to Azure Pipelines.
ms.topic: reference
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 08/12/2022
monikerRange: azure-devops
---

# Publish Pipeline Artifacts task

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use this task in a pipeline to publish your artifacts(note that publishing is NOT supported in release pipelines. It's supported in multi-stage pipelines, build pipelines, and yaml pipelines).

> [!TIP]
> Looking to get started with build artifacts? See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md).

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishPipelineArtifactV1.md)]

> [!NOTE]
> The `publish` and `download` keywords are shortcuts for the PublishPipelineArtifact@1 and DownloadPipelineArtifact@2 tasks. See [steps.publish](/azure/devops/pipelines/yaml-schema/steps-publish) and [steps.download](/azure/devops/pipelines/yaml-schema/steps-download) for more details.

## Arguments

| Argument | Description |
| -------- | ----------- |
| `path`<br/>File or directory path | (Required) Path to the folder or file you want to publish. Wildcards aren't supported. The path must be a fully qualified path or a valid path relative to the root directory of your repository. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). |
| `artifactName`<br/>Artifact name | (Optional) Specify the name of the artifact that you want to create. It can be whatever you want. For example: *drop* |
| `artifactType`<br/>Artifact publish location | (Required) Artifacts publish location. Choose whether to publish your file as a pipeline artifact, or to copy it to a file share that must be accessible from the pipeline agent. Options: pipeline, filepath. Default value: pipeline |
| `fileSharePath`<br/>File share path | (Optional) The file share path that the artifact will be published to. This can include variables. Required when `artifactType` = `filepath`. For example: `\server\folderName` |
| `parallel`<br/>Parallel copy | (Optional) Select whether to copy files in parallel using multiple threads. If this setting isn't enabled, one thread will be used. Default value: false|
| `parallelCount`<br/>Parallel count | (Optional) Enter the degree of parallelism, or number of threads used to publish a package. The value must be at least 1 and not greater than 128. |
| `properties`<br/>Custom properties | (Optional) Enter custom properties to associate with the artifact. Valid JSON string expected with all keys having the prefix 'user-'. |

> [!TIP]
> You can use the [.artifactignore](../../../artifacts/reference/artifactignore.md) file to control which files will be published.
## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

<!-- ENDSECTION -->

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

