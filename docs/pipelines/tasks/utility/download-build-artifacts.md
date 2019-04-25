---
title: Download Build Artifacts task
description: Download Build Artifacts task for use in a build or release pipeline
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: a433f589-fce1-4460-9ee6-44a624aeb1fb
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Build Artifacts task

**Azure Pipelines**

Use this task in a build or release pipeline to download build artifacts.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DownloadBuildArtifactsV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Download artifacts produced by</td><td>(Required) Download artifacts produced by the current build, or from a specific build.</td></tr>
<tr><td>Project</td><td>(Required) The project from which to download the build artifacts</td></tr>
<tr><td>Build pipeline</td><td>(Required) Select the build pipeline name</td></tr>
<tr><td>When appropriate, download artifacts from the triggering build.</td><td>(Optional) If checked, this build task will try to download artifacts from the triggering build. If there is no triggering build from the specified pipeline, it will download artifacts from the build specified in the options below.</td></tr>
<tr><td>Build version to download</td><td>(Required) undefined</td></tr>
<tr><td>Branch name</td><td>(Required) Specify to filter on branch/ref name, for example: ```refs/heads/develop```.</td></tr>
<tr><td>Build</td><td>(Required) The build from which to download the artifacts</td></tr>
<tr><td>Download type</td><td>(Required) Download a specific artifact or specific files from the build.</td></tr>
<tr><td>Artifact name</td><td>(Required) The name of the artifact to download</td></tr>
<tr><td>Matching pattern</td><td>(Optional) Specify files to be downloaded as multi line minimatch pattern. [More Information](https://aka.ms/minimatchexamples) <p>The default pattern (\*\*) will download all files across all artifacts in the build. To download all files within artifact drop use drop/**.</p></td></tr>
<tr><td>Destination directory</td><td>(Required) Path on the agent machine where the artifacts will be downloaded</td></tr>
<tr><td>Parallelization limit</td><td>(Optional) Number of files to download simultaneously</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
