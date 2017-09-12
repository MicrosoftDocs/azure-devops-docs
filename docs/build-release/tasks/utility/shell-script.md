---
title: Shell script
description: How to execute a bash script when building code in VSTS and Team Foundation Server TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 8D152C13-0934-4665-8D08-30E2A7841351
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Utility: Shell script

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![icon](_img/shell-script.png) Run a shell script using bash

## Demands

sh

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
Select if you want this step to fail if any errors are written to the StandardError stream.
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

Create ```test.sh``` at the root of your repo:

```sh
#!/bin/bash
echo "Hello World"
echo "AGENT_WORKFOLDER is $AGENT_WORKFOLDER"
echo "AGENT_WORKFOLDER contents:"
ls -1 $AGENT_WORKFOLDER
echo "AGENT_BUILDDIRECTORY is $AGENT_BUILDDIRECTORY"
echo "AGENT_BUILDDIRECTORY contents:"
ls -1 $AGENT_BUILDDIRECTORY
echo "BUILD_SOURCESDIRECTORY is $BUILD_SOURCESDIRECTORY"
echo "BUILD_SOURCESDIRECTORY contents:"
ls -1 $BUILD_SOURCESDIRECTORY
echo "Over and out."
```

On the [Build tab](../../index.md) of a build definition, add this step:

<table>
<tr>
<td>![](_img/shell-script.png)<br/>**Utility: Shell Script**</td>
<td>
<p>Run test.bat.</p>
<ul>
<li>Script Path: ```test.sh```</li>
</ul>
</td>
</tr>
</table>


## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn about Bash scripts?

[Beginners/BashScripting](https://help.ubuntu.com/community/Beginners/BashScripting) to get started.

[Awesome Bash](https://github.com/alebcay/awesome-shell#awesome-bash) to go deeper.

[!INCLUDE [include](../../concepts/definitions/_shared/variable-set-in-script-qa.md)]

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
