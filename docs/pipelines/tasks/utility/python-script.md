---
title: Python Script task
description: Run a Python script in a build or release pipeline
ms.topic: reference
ms.assetid: 6392F95F-7E76-4A18-B3C7-7F078D2F7700
ms.custom: seodec18, devx-track-python
ms.date: 08/24/2020
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

| Argument | Description |
|----------|-------------|
| `scriptSource`<br>Type | (Required) Target script type: File path or Inline |
| `scriptPath`<br>Script Path | (Required when `scriptSource` == `filePath`) Path of the script to execute. Must be a fully qualified path or relative to $(System.DefaultWorkingDirectory). |
| `script`<br>Script | (Required when `scriptSource` == `inline`) The Python script to run |
| `arguments`<br>Arguments | (Optional) A string containing arguments passed to the script. They'll be available through <code>sys.argv</code> as if you passed them on the command line. |
| `pythonInterpreter`<br>Python interpreter | (Optional) Absolute path to the Python interpreter to use. If not specified, the task assumes a Python interpreter is available on the PATH and simply attempts to run the <code>python</code> command. |
| `workingDirectory`<br>Working directory | (Optional) |
| `failOnStderr`<br>Fail on standard error | (Optional) If true, this task will fail if any text is written to `stderr`. |


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Remarks

By default, this task will invoke `python` from the system path.
Run [Use Python Version](../tool/use-python-version.md) to put the version you want in the system path.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
