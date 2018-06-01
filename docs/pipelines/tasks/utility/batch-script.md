---
title: Batch script | VSTS or Team Foundation Server
description: Learn all about how you can execute .bat or .cmd scripts when building your code in VSTS and Team Foundation Server (TFS).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E60FC8AE-EDA7-4C1D-BDA5-CDC741FAD3E4
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Utility: Batch script

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/batch-script.png) Run a Windows .bat or .cmd script and optionally allow it to change the environment.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/BatchScriptV1.1.md)]

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
<td>Path</td>
<td><p>Specify the path to the .bat or .cmd script you want to run. The path must be a fully qualified path or a valid path relative to the default working directory.</p>
<p>
In Team Foundation Build, this directory is [$(Build.SourcesDirectory)](../../build/variables.md).</p>
</td>
</tr>
<tr>
<td>Arguments</td>
<td>Specify arguments to pass to the script.</td>
</tr>
<tr>
<tr>
<td>Modify environment</td>
<td>Select this check box if you want environment variable modifications in the script to affect subsequent tasks.</td>
</tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Working folder</td>
<td>Specify the working directory in which you want to run the script. If you leave it empty, the working directory is the folder where the script is located.
</td>
</tr>
<tr>
<td>Fail on standard error</td>
<td>Select this check box if you want the build to fail if errors are written to the StandardError stream.</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

Create ```test.bat``` at the root of your repo:

```bat
@echo off
echo Hello World from %AGENT_NAME%.
echo My ID is %AGENT_ID%.
echo AGENT_WORKFOLDER contents:
@dir %AGENT_WORKFOLDER%
echo AGENT_BUILDDIRECTORY contents:
@dir %AGENT_BUILDDIRECTORY%
echo BUILD_SOURCESDIRECTORY contents:
@dir %BUILD_SOURCESDIRECTORY%
echo Over and out.
```

On the Build tab of a build definition, add this task:

<table>
   <tr>
      <td>![](_img/batch-script.png)<br/>**Utility: Batch Script**</td>
      
<td>
<p>Run test.bat.</p>
<ul>
<li>Path: ```test.bat```</li>
</ul>
      </td>
</tr>
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn about batch files?

[Using batch files](http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/batch.mspx?mfr=true)

### Where can I learn Windows commands?

[An A-Z Index of the Windows CMD  command line](http://ss64.com/nt/)

[!INCLUDE [include](../../_shared/variable-set-in-script-qa.md)]

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
