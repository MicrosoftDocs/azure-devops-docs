---
title: Download Fileshare Artifacts task
description: Download Fileshare Artifacts task for Azure Pipelines and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 515F989D-28E5-4EB3-99E4-7F81E9977F6C
ms.manager: sriramb
ms.custom: seodec18
ms.author: omeshp
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Fileshare Artifacts task

**Azure Pipelines**

Use this task in a build or release pipeline to download fileshare artifacts.

::: moniker range="azure-devops"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DownloadFileshareArtifactsV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Fileshare path</td><td>(Required) Example `\\server\folder`</td></tr>
<tr><td>Artifact name</td><td>(Required) The name of the artifact to download.</td></tr>
<tr><td>Matching pattern</td><td>(Optional) Specify files to be downloaded as multiline minimatch patterns. [More Information](https://aka.ms/minimatchexamples).<p>The default pattern (`\*\*`) will download all files within the artifact.</p></td></tr>
<tr><td>Download path</td><td>(Required) Path on the agent machine where the artifacts will be downloaded.</td></tr>
<tr><td>Parallelization limit</td><td>(Optional) Number of files to download simultaneously.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

