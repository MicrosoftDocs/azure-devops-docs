---
title: Python Script task
description: Run a Python script in a build or release pipeline
ms.topic: reference
ms.assetid: 6392F95F-7E76-4A18-B3C7-7F078D2F7700
ms.custom: seodec18, devx-track-python
ms.author: macoope
author: vtbassmatt
ms.date: 05/21/2020
monikerRange: azure-devops
---

# Python Script task

**Azure Pipelines**

Use this task to run a Python script.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PythonScriptV0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Type</td><td>(Required) Target script type: File path or Inline</td></tr>
<tr><td>Script Path</td><td>(Required when targetType == filePath) Path of the script to execute. Must be a fully qualified path or relative to $(System.DefaultWorkingDirectory).</td></tr>
<tr><td>Script</td><td>(Required when targetType == inline) The Python script to run</td></tr>
<tr><td>Arguments</td><td>(Optional) A string containing arguments passed to the script. They'll be available through <code>sys.argv</code> as if you passed them on the command line.</td></tr>
<tr><td>Python interpreter</td><td>(Optional) Absolute path to the Python interpreter to use. If not specified, the task assumes a Python interpreter is available on the PATH and simply attempts to run the <code>python</code> command.</td></tr>
<tr><td>Working directory</td><td>(Optional) undefined</td></tr>
<tr><td>Fail on standard error</td><td>(Optional) If this is true, this task will fail if any text are written to the stderr stream.</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Remarks

By default, this task will invoke `python` from the system path.
Run [Use Python Version](../tool/use-python-version.md) to put the version you want in the system path.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
