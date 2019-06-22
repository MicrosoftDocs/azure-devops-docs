---
title: Download Pipeline Artifact task
description: Download Pipeline Artifact task to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: a433f589-fce1-4460-9ee6-44a624aeb1fb
ms.manager: hdixon
ms.custom: seodec18
ms.author: wismyth
author: willsmythe
ms.date: 06/21/2019
monikerRange: 'azure-devops'
---

# Download Pipeline Artifact task

Use this task in a build or release pipeline to download pipeline artifacts from earlier stages in this pipeline, or from another pipeline.

::: moniker range="azure-devops"
## YAML snippet 
[!INCLUDE [temp](../_shared/yaml/DownloadPipelineArtifactV2.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| source | Download artifacts produced by the current pipeline run, or from a specific pipeline run. Options: `current`, `specific` |
| preferTriggeringPipeline | A boolean specifying whether to download artifacts from a triggering build. |
| tags | A coma-delimited list of tags. Only builds with these tags will be returned. |
| artifact | The name of the artifact to download. If left empty, all artifacts associated to the pipeline run will be downloaded. |
| patterns | One or more file matching patterns (new line delimited) that limit which files get downloaded. [More Information on file matching patterns](../file-matching-patterns.md) |
| path | Directory to download the artifact files. Can be relative to the pipeline workspace directory or absolute. If multi-download option is applied (by leaving an empty artifact name), a sub-directory will be created for each. See [Artifacts in Azure Pipelines](../../artifacts/pipeline-artifacts.md). |
| project | The project from which to download the pipeline artifacts. |
| pipeline | The name of the build pipeline. |
| runVersion | Specifies which build version to download. Options: `latest`, `latestFromBranch`, `specific` |
| runBranch | Specify to filter on branch/ref name, for example: `refs/heads/develop`. |
| runId | The build from which to download the artifacts. For example: `1764` |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

## Open source

This task is open source [on GitHub](https://github.com/microsoft/azure-pipelines-agent). Feedback and contributions are welcome.
