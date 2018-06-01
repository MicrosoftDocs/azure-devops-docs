---
title: Python Script
description: Run a Python script.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6392F95F-7E76-4A18-B3C7-7F078D2F7700
ms.manager: brcrista
ms.author: brcrista
ms.date: 05/17/2018
monikerRange: 'vsts'
---

# Utility: Python Script

![](_img/pythonscript.png) Run a Python script.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/PythonScriptV0.0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Type</td><td>(Required) Target script type: File path or Inline</td></tr>
<tr><td>Script Path</td><td>(Required when targetType == filePath) Path of the script to execute. Must be a fully qualified path or relative to $(System.DefaultWorkingDirectory).</td></tr>
<tr><td>Script</td><td>(Required when targetType == inline) The Python script to run</td></tr>
<tr><td>Arguments</td><td>(Optional) Arguments passed to the script execution, available through `sys.argv`.</td></tr>
<tr><td>Python interpreter</td><td>(Optional) Absolute path to the Python interpreter to use. If not specified, the task will use the interpreter in PATH.</td></tr>
<tr><td>Working directory</td><td>(Optional) undefined</td></tr>
<tr><td>Fail on standard error</td><td>(Optional) If this is true, this task will fail if any text are written to the stderr stream.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
