---
title: Download Build Artifacts task
description: Download Build Artifacts task for use in a build or release pipeline
ms.topic: reference
ms.assetid: a433f589-fce1-4460-9ee6-44a624aeb1fb
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 02/12/2020
monikerRange: 'azure-devops'
---

# Download Build Artifacts task

**Azure Pipelines**

> [!NOTE]
> We recommend upgrading from **build artifacts** (`PublishBuildArtifacts@1` and `DownloadBuildArtifacts@0`) to **[pipeline artifacts](../../artifacts/pipeline-artifacts.md)** (`PublishPipelineArtifact@1` and `DownloadPipelineArtifact@2`) for faster performance. 

Use this task to download build artifacts.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DownloadBuildArtifactsV0.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`buildType`<br/>Download artifacts produced by|(Required) Download artifacts produced by the current build, or from a specific build <br/>Default value: `current`|
|`project`<br/>Project|(Required) The project from which to download the build artifacts|
|`definition`<br/>Build pipeline|(Required) Select the build pipeline name <br/>Argument aliases: `pipeline`|
|`specificBuildWithTriggering`<br/>When appropriate, download artifacts from the triggering build|(Optional) If true, this build task will try to download artifacts from the triggering build. If there is no triggering build from the specified pipeline, it will download artifacts from the build specified in the options below. <br/>Default value: `false`|
|`buildVersionToDownload`<br/>Build version to download|(Required) Specify which version of the build to download.<br/><ul><li> Choose **`latest`** to download the latest available build version</li><li>Choose **`latestFromBranch`** to download the latest available build version of the branch specified by **`branchName`** and tags specified by **`tags`**</li><li>Choose **`specific`** to download the build version specified by buildId</li><ul/>|
|`allowPartiallySucceededBuilds`<br/>Download artifacts even from partially succeeded builds|(Optional) If checked, this build task will try to download artifacts whether the build is succeeded or partially succeeded <br/>Default value: `false`|
|`branchName`<br/>Branch name|(Required) Specify to filter on branch/ref name. <br/>Default value: `refs/heads/master`|
|`buildId`<br/>Build|(Required) The build from which to download the artifacts|
|`tags`<br/>Build tags|(Optional) A comma-delimited list of tags. Only builds with these tags will be returned.|
|`downloadType`<br/>Download type|(Required) Choose whether to download a single artifact or all artifacts of a specific build. <br/>Default value: `single`|
|`artifactName`<br/>Artifact name|(Required) The name of the artifact to download|
|`itemPattern`<br/>Matching pattern|(Optional) Specify files to be downloaded as multi-line minimatch pattern. [More Information](../file-matching-patterns.md).<br/> The default pattern  will download all files across all artifacts in the build if the **`Specific files`** option is selected. To download all files within an artifact drop use **`drop/`** <br/>Default value: `\*\*`|
|`downloadPath`<br/>Destination directory|(Required) Path on the agent machine where the artifacts will be downloaded <br/>Default value: `$(System.ArtifactsDirectory)`|
|`cleanDestinationFolder`<br/>Clean destination folder|(Optional) Delete all existing files in destination folder before artifacts are downloaded <br/>Default value: `false`|
|`parallelizationLimit`<br/>Parallelization limit|(Optional) Number of files to download simultaneously <br/>Default value: `8`|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
