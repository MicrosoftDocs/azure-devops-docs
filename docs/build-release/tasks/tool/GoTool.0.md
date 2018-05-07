---
title: Go Tool Installer
description: Finds or downloads specific version of Go tool into tools cache and adds it to the PATH. Use this task to change the version of Go Lang used in subsequent tasks
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 334727F4-9495-4F9D-A391-FC621D671474
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'VSTS'
---

# Tool: Go Tool Installer

![](_img/gotool.png) Finds or downloads specific version of Go tool into tools cache and adds it to the PATH. Use this task to change the version of Go Lang used in subsequent tasks

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Version</td><td>(Required) Go tool version to download and install. Example: 1.9.3</td></tr>
<tr><td>GOPATH</td><td>(Optional) Value for the GOPATH environment variable.</td></tr>
<tr><td>GOBIN</td><td>(Optional) Value for the GOBIN environment variable.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

::: moniker range="vsts"

## YAML snippet

```YAML
# Go Tool Installer
# Finds or downloads specific version of Go tool into tools cache and adds it to the PATH. Use this task to change the version of Go Lang used in subsequent tasks
- task: GoTool@0
  inputs:
    #version: '1.10' 
    #goPath: # Optional
    #goBin: # Optional
```

::: moniker-end

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
