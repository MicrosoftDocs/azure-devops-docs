---
title: Download Fileshare Artifacts
titleSuffix: Azure Pipelines & TFS
description: Download Fileshare Artifacts
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 515F989D-28E5-4EB3-99E4-7F81E9977F6C
ms.manager: sriramb
ms.author: omeshp
ms.date: 05/09/2018
monikerRange: 'vsts'
---

# Utility: Download Fileshare Artifacts

**Azure Pipelines**

![](_img/downloadbuildartifacts.png) Download Fileshare Artifacts

::: moniker range="vsts"
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

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

