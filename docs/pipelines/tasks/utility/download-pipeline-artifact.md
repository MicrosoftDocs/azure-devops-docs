---
title: Download Pipeline Artifacts task
description: Download Pipeline Artifacts task to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline
ms.topic: reference
ms.assetid: a433f589-fce1-4460-9ee6-44a624aeb1fb
ms.manager: hdixon
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 12/15/2020
monikerRange: azure-devops
---

# Download Pipeline Artifacts task

Use this task to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline.

> [!NOTE]
> For more information, including Azure CLI commands, see [downloading artifacts](../../artifacts/pipeline-artifacts.md?tabs=yaml#download-artifacts).

::: moniker range="azure-devops"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DownloadPipelineArtifactV2.md)]

> [!NOTE]
> The `publish` and `download` keywords are shortcuts for the **Publish Pipeline Artifact** task. You can use them in your pipeline to publish and download artifacts. For more information, see [Publish](../../yaml-schema.md#publish) and [Download](../../yaml-schema.md#download) in the YAML schema.

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| `source`<br/>Download artifacts produced by | (Required) Download artifacts produced by the current pipeline run, or from a specific pipeline run.<br/>Options: `current`, `specific` <br/>Default value: `current` <br/>Argument aliases: `buildType` |
| `project`<br/>Project | (Required) The project name or GUID from which to download the pipeline artifacts. |
| `pipeline`<br/>Build Pipeline | (Required) The definition ID of the build pipeline.<br/>Argument aliases: `definition` |
| `preferTriggeringPipeline`<br/>When appropriate, download artifacts from the triggering build | (Optional) A boolean specifying whether to download artifacts from a triggering build.<br/>Default value: `false` <br/>Argument aliases: `specificBuildWithTriggering` |
| `runVersion`<br/>Build version to download | (Required) Specifies which build version to download. Options: `latest`, `latestFromBranch`, `specific` <br/>Default value: `latest`<br/>Argument aliases: `buildVersionToDownload` |
| `runBranch`<br/>Branch Name | Specify to filter on branch/ref name. For example: `refs/heads/develop`. <br/>Default value: `refs/heads/master` <br/>Argument aliases: `branchName` |
| `runId`<br/>Build | (Required) The build from which to download the artifacts. For example: `1764` <br/>Argument aliases: `pipelineId`, `buildId` |
| `tags`<br/>Build Tags | (Optional) A comma-delimited list of tags. Only builds with these tags will be returned. |
| `allowPartiallySucceededBuilds`<br/>Download artifacts from partially succeeded builds | (Optional) If checked, this build task will try to download artifacts whether the build is succeeded or partially succeeded <br/>Default value: `false` |
| `allowFailedBuilds`<br/>Download artifacts from failed builds | (Optional) If checked, this build task will try to download artifacts whether the build is succeeded or failed <br/>Default value: `false` |
| `artifact`<br/>Artifact Name | (Optional) The name of the artifact to download. If left empty, all artifacts associated to the pipeline run will be downloaded. <br/>Argument aliases: `artifactName` |
| `patterns`<br/>Matching Patterns | (Optional) One or more file matching patterns (new line delimited) that limit which files get downloaded. [More Information on file matching patterns](../file-matching-patterns.md) <br/>Default value: *\*<br/>Argument aliases: `itemPattern` |
| `path`<br/>Destination Directory | (Required) Directory to download the artifact files. Can be relative to the pipeline workspace directory or absolute. If multi-download option is applied (by leaving an empty artifact name), a sub-directory will be created for each. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). <br/>Default value: $(Pipeline.Workspace) <br/>Argument aliases: `targetPath`, `downloadPath` |
| `checkDownloadedFiles`<br/>Check downloaded files | (Optional) If checked, this build task will check that all files are fully downloaded. <br/>Default value: `false` |
| `retryDownloadCount`<br/>Retry count | (Optional) Number of times to retry downloading a build artifact if the download fails. <br/>Default value: `4` |

> [!NOTE]
> If you want to consume artifacts as part of CI/CD flow, refer to the download shortcut [here](../../yaml-schema.md#download).

## Examples

### Download a specific artifact

```YAML
# Download an artifact named 'WebApp' to 'bin' in $(Build.SourcesDirectory)
- task: DownloadPipelineArtifact@2
  inputs:
    artifact: 'WebApp'
    path: $(Build.SourcesDirectory)/bin
```

### Download artifacts from a specific project/pipeline

```YAML
# Download artifacts from a specific pipeline.
- task: DownloadPipelineArtifact@2
  inputs:
    source: 'specific'
    project: 'FabrikamFiber'
    pipeline: 12
    runVersion: 'latest'
```

### Download artifacts from a specific branch

```YAML
# Download artifacts from a specific branch with a tag
- task: DownloadPipelineArtifact@2
  inputs:
    source: 'specific'
    project: 'FabrikamFiber'
    pipeline: 12
    runVersion: 'latestFromBranch'
    runBranch: 'refs/heads/master'
    tags: 'testTag'
```

### Download an artifact from a specific build run

```YAML
# Download an artifact named 'WebApp' from a specific build run to 'bin' in $(Build.SourcesDirectory)
- task: DownloadPipelineArtifact@2
  inputs:
    source: 'specific'
    artifact: 'WebApp'
    path: $(Build.SourcesDirectory)/bin
    project: 'FabrikamFiber'
    pipeline: 12
    runVersion: 'specific'
    runId: 40
```

## FAQ

### How can I find the ID of the Pipeline I want to download an artifact from? 

You can find the ID of the pipeline in the 'Pipeline variables'. The pipeline ID is the [system.definitionId](../../build/variables.md?tabs=yaml#system-variables) variable. 

## Open source

This task is open source [on GitHub](https://github.com/microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
