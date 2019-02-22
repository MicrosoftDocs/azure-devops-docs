---
title: Gulp build and release task
ms.custom: seodec18
description: Gulp build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: EC168F1F-4B27-4688-87CE-E4D12E885CC5
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Gulp task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to run gulp tasks using the Node.js streaming task based build system.

## Demands

gulp

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/GulpV1.md)]
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
<td>gulp file path</td>
<td>Relative path from the repo root to the gulp script that you want to run. The default value is ```gulpfile.js```
</td>
</tr>
<tr>
<td>gulp task(s)</td>
<td>(Optional) Space delimited list of tasks to run.  If you leave it blank, the default task will run.</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Arguments</td>
<td><p>Additional arguments passed to gulp.</p>
<p>Tip: ```--gulpfile``` is not needed. This argument is handled by the gulp file path argument shown above.</p>
</td>
</tr>
<tr>
<td>Working directory</td>
<td>Current working directory when the script is run.  If you leave it blank, the working directory is the folder where the script is located.</td>
</tr>
<tr>
<td>gulp.js location</td>
<td>gulp.js to run.  The default value is `node_modules/gulp/bin/gulp.js`</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

### Run gulp.js

On the [Build](../../index.md) tab:

<table>
<tr>
<td>![Package: npm](../package/_img/npm.png)<br/>[Package: npm](../package/npm.md)</td>
<td>
<p>Install npm.</p>
<ul>
<li>Command: `install`</li>
</ul>
</td>
</tr>
<tr>
<td>![Build: gulp](_img/gulp.png)<br/>[Build: gulp](gulp.md)</td>
<td>
<p>Run your script.</p>
<ul>
<li>gulp file path: `gulpfile.js`</li>
<li>Advanced, gulp.js location: `node_modules/gulp/bin/gulp.js`</li>
</ul>
</td>
</tr>
</table>


### Build a Node.js app

[Build your Node.js app with gulp](../../languages/javascript.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
