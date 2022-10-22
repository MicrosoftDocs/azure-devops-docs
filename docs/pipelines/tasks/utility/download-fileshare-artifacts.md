---
title: Download Fileshare Artifacts task
description: Download Fileshare Artifacts task for Azure Pipelines and TFS
ms.assetid: 515F989D-28E5-4EB3-99E4-7F81E9977F6C
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Fileshare Artifacts task

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use this task to download fileshare artifacts.

::: moniker range="azure-devops"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DownloadFileshareArtifactsV0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Fileshare path</td><td>(Required) Example <code>\server\folder</code></td></tr>
<tr><td>Artifact name</td><td>(Required) The name of the artifact to download.</td></tr>
<tr><td>Matching pattern</td><td>(Optional) Specify files to be downloaded as multiline minimatch patterns. <a href="/azure/devops/pipelines/tasks/file-matching-patterns" data-raw-source="[More Information](../file-matching-patterns.md)">More Information</a>.<p>The default pattern (<code>**</code>) will download all files within the artifact.</p></td></tr>
<tr><td>Download path</td><td>(Required) Path on the agent machine where the artifacts will be downloaded.</td></tr>
<tr><td>Parallelization limit</td><td>(Optional) Number of files to download simultaneously.</td></tr>
</tr>
</table>

### [Task control options](../../process/tasks.md#controloptions)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.