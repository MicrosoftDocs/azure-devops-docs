---
title: Bash
description: This is an early preview. Run a Bash script on macOS, Linux, or Windows
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6C731C3C-3C68-459A-A5C9-BDE6E6595B5B
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Utility: Bash

![](_img/bash.png) This is an early preview. Run a Bash script on macOS, Linux, or Windows

::: moniker range=">tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/BashV3.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Type</td><td>(Optional) Target script type: File Path or Inline</td></tr>
<tr><td>Script Path</td><td>(Required) Path of the script to execute. Must be a fully qualified path or relative to $(System.DefaultWorkingDirectory).</td></tr>
<tr><td>Arguments</td><td>(Optional) Arguments passed to the PowerShell script. Either ordinal parameters or named parameters.</td></tr>
<tr><td>Script</td><td>(Required) </td></tr>
<tr><td>Working Directory</td><td>(Optional) undefined</td></tr>
<tr><td>Fail on Standard Error</td><td>(Optional) If this is true, this task will fail if any errors are written to the StandardError stream.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
