---
title: Publish Pipeline Artifacts task
description: Publish artifacts to Azure Pipelines.
ms.topic: reference
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 11/02/2022
monikerRange: azure-devops
---

# Publish Pipeline Artifacts task

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use this task in a pipeline to publish your artifacts(note that publishing is NOT supported in release pipelines. It's supported in multi-stage pipelines, build pipelines, and yaml pipelines).

> [!NOTE]
> Publish Pipeline Artifacts is not supported in on-premises. Please use [Publish Build Artifacts](./publish-build-artifacts.md) if you're using Azure DevOps Server or TFS 2018.

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishPipelineArtifactV1.md)]

> [!NOTE]
> The `publish` and `download` keywords are shortcuts for the PublishPipelineArtifact@1 and DownloadPipelineArtifact@2 tasks. See [steps.publish](/azure/devops/pipelines/yaml-schema/steps-publish) and [steps.download](/azure/devops/pipelines/yaml-schema/steps-download) for more details.

## Arguments

| Argument | Description |
| -------- | ----------- |
| `path`<br/>File or directory path | (Required) Path to the folder or file you want to publish. Wildcards aren't supported. The path must be a fully qualified path or a valid path relative to the root directory of your repository. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). |
| `artifactName`<br/>Artifact name | (Optional) Specify the name of the artifact that you want to create. It can be whatever you want. For example: *drop* |
| `artifactType`<br/>Artifact publish location | (Optional) Artifacts publish location. Choose whether to publish your file as a pipeline artifact, or to copy it to a file share that must be accessible from the pipeline agent. Options: pipeline, filepath. Default value: pipeline |
| `fileSharePath`<br/>File share path | (Optional) Required when `artifactType` = `filepath`. The file share path that the artifact will be published to. This can include variables. For example: `\server\folderName` |
| `parallel`<br/>Parallel copy | (Optional) Select whether to copy files in parallel using multiple threads. If this setting isn't enabled, one thread will be used. Default value: false|
| `parallelCount`<br/>Parallel count | (Optional) Enter the degree of parallelism, or number of threads used to publish a package. The value must be at least 1 and not greater than 128. |
| `properties`<br/>Custom properties | (Optional) Enter custom properties to associate with the artifact. Valid JSON string expected with all keys having the prefix 'user-'. |

> [!TIP]
> You can use the [.artifactignore](../../../artifacts/reference/artifactignore.md) file to control which files should be published.

## Example

```yaml
pool:
  name: Azure Pipelines
  demands: maven

steps:
- task: Maven@3
  displayName: 'Maven my-app/pom.xml'
  inputs:
    mavenPomFile: 'my-app/pom.xml'

- task: CopyFiles@2
  displayName: 'Copy Files to: $(build.artifactstagingdirectory)'
  inputs:
    SourceFolder: '$(system.defaultworkingdirectory)'
    Contents: '**/*.jar'
    TargetFolder: '$(build.artifactstagingdirectory)'
  condition: succeededOrFailed()

- task: PublishPipelineArtifact@1
  displayName: 'Publish Pipeline Artifact'
  inputs:
    artifact: drop
    properties: '{ "user-1": "testProp"}'
```

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

<!-- ENDSECTION -->

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

