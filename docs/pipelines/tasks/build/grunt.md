---
title: Grunt build and release task
ms.custom: seodec18
description: Grunt build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: FB181C61-BAC3-4568-B340-48ACE15C2519
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Grunt task
 
[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

Use this task in a build or release pipeline to run Grunt tasks using the JavaScript Task Runner.

## Demands

The build agent must have the following capability:

 * Grunt

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/GruntV0.md)]
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
<td>Grunt File Path</td>
<td>Relative path from the repo root to the Grunt script that you want to run. The default value is ```gruntfile.js```
</td>
</tr>
<tr>
<td>Grunt task(s)</td>
<td>(Optional) Space delimited list of tasks to run. If you leave it blank, the default task will run.</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Arguments</td>
<td>
<p>Additional arguments passed to Grunt. See [Using the CLI](http://gruntjs.com/using-the-cli).</p><p>Tip: ```--gruntfile``` is not needed. This argument is handled by the Grunt file path argument shown above.</p>
</td>
</tr>
<tr>
<td>Working directory</td>
<td>Current working directory when the script is run.  If you leave it blank, the working directory is the folder where the script is located.</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

See [Sample Gruntfile](http://gruntjs.com/sample-gruntfile).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
