---
title: Go Tool Installer
titleSuffix: Azure Pipelines & TFS
description: Finds or downloads specific version of Go tool into tools cache and adds it to the PATH. Use this task to change the version of Go Lang used in subsequent tasks
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 334727F4-9495-4F9D-A391-FC621D671474
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Tool: Go Tool Installer

![](_img/gotool.png) Finds or downloads specific version of Go tool into tools cache and adds it to the PATH. Use this task to change the version of Go Lang used in subsequent tasks

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

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
