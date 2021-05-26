---
title: Shell Script task
description: Execute a bash script when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 8D152C13-0934-4665-8D08-30E2A7841351
ms.custom: seodec18
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Shell Script task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to run a shell script using bash.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Demands

sh

::: moniker range="> tfs-2018"

## YAML snippet

```YAML
- task: ShellScript@2
  inputs:
    scriptPath:
    #args: '' # Optional
    #disableAutoCwd: false # Optional
    #cwd: '' # Optional
    #failOnStandardError: false
```
::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Script Path</td>
<td>
Relative path from the repo root to the shell script file that you want to run.
</td>
</tr>
<tr>
<td>Arguments</td>
<td>
Arguments that you want to pass to the script.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Working Directory</td>
<td>
Working directory in which you want to run the script.  If you leave it empty it is folder where the script is located.
</td>
</tr>
<tr>
<td>Fail on Standard Error</td>
<td>
Select if you want this task to fail if any errors are written to the StandardError stream.
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Example

Create ```test.sh``` at the root of your repo.
We recommend creating this file from a Linux environment (such as a real Linux machine or Windows Subsystem for Linux) so that line endings are correct.
Also, don't forget to `chmod +x test.sh` before you commit it.

```sh
#!/bin/bash
echo "Hello World"
echo "AGENT_WORKFOLDER is $AGENT_WORKFOLDER"
echo "AGENT_WORKFOLDER contents:"
ls -1 $AGENT_WORKFOLDER
echo "AGENT_BUILDDIRECTORY is $AGENT_BUILDDIRECTORY"
echo "AGENT_BUILDDIRECTORY contents:"
ls -1 $AGENT_BUILDDIRECTORY
echo "SYSTEM_HOSTTYPE is $SYSTEM_HOSTTYPE"
echo "Over and out."
```

On the [Build tab](../../index.yml) of a build pipeline, add this task:

<table>
<tr>
<td>

:::image type="icon" source="media/shell-script.png" border="false":::

<br/>**Utility: Shell Script**</td>
<td>
<p>Run test.bat.</p>
<ul>
<li>Script Path: <code>test.sh</code></li>
</ul>
</td>
</tr>
</table>

This example also works with release pipelines.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn about Bash scripts?

[Beginners/BashScripting](https://help.ubuntu.com/community/Beginners/BashScripting) to get started.

[Awesome Bash](https://github.com/alebcay/awesome-shell#awesome-bash) to go deeper.

[!INCLUDE [include](../../includes/variable-set-in-script-qa.md)]

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
