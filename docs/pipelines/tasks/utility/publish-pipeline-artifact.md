---
title: Publish Pipeline Artifacts task
description: Publish artifacts to Azure Pipelines.
ms.topic: reference
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 01/26/2022
monikerRange: azure-devops
---

# Publish Pipeline Artifacts task

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use this task in a pipeline to publish your artifacts(note that publishing is NOT supported in release pipelines. It is supported in multi-stage pipelines, build pipelines, and yaml pipelines).

> [!TIP]
> Looking to get started with build artifacts? See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md).

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishPipelineArtifactV1.md)]

> [!NOTE]
> The `publish` and `download` keywords are shortcuts for the **Publish Pipeline Artifact** task. You can use them in your pipeline to publish and download artifacts. For more information, see [Publish](/azure/devops/pipelines/yaml-schema/steps-publish) and [Download](/azure/devops/pipelines/yaml-schema/steps-download) in the YAML schema.

## Arguments

| Argument | Description |
| -------- | ----------- |
| targetPath | (Required) Path to the folder or file you want to publish. Wildcards are not supported. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). <br/>Argument aliases: `path` |
| artifactName | (Optional) Specify the name of the artifact that you want to create. It can be whatever you want. For example: `drop` <br/>Argument aliases: `artifact` |
| artifactType | (Required) Artifacts publish location. Choose whether to publish your file as a pipeline artifact, or to copy it to a file share that must be accessible from the pipeline agent. Options: pipeline, filepath. Default value: pipeline <br/>Argument aliases: `publishLocation` |
| fileSharePath | (Optional) The file share path that the artifact will be published to. This can include variables. Required when `artifactType` = `filepath`. E.g: `\server\folderName` |
| parallel | (Optional) Select whether to copy files in parallel using multiple threads. If this setting is not enabled, one thread will be used. Default value: false| 
| parallelCount | (Optional) Enter the degree of parallelism, or number of threads used to publish a package. The value must be at least 1 and not greater than 128. | 

> [!TIP]
> You can use the [.artifactignore](../../../artifacts/reference/artifactignore.md) file to to control which files will be published.
## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

<!-- ENDSECTION -->

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

