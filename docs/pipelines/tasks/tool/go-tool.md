---
title: Go Tool Installer task
description: Finds or downloads a specific version of the Go tool into the tools cache and adds it to the PATH
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 334727F4-9495-4F9D-A391-FC621D671474
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Go Tool Installer task

**Azure Pipelines**

Use this task in a build or release pipeline to find or download a specific version of the Go tool into the
tools cache and add it to the PATH. Use the task to change the version of Go Lang used in subsequent tasks.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/GoToolV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Version</td><td>(Required) Go tool version to download and install. Example: 1.9.3</td></tr>
<tr><td>GOPATH</td><td>(Optional) Value for the GOPATH environment variable.</td></tr>
<tr><td>GOBIN</td><td>(Optional) Value for the GOBIN environment variable.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
