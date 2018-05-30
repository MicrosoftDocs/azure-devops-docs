---
title: Gulp build and release task | VSTS or Team Foundation Server
description: Gulp build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: EC168F1F-4B27-4688-87CE-E4D12E885CC5
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Build: Gulp

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/gulp.png) Node.js streaming task based build system

## Demands

gulp

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/GulpV0.0.md)]

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
<td>Gulp file path</td>
<td>Relative path from the repo root to the gulp script that you want to run. The default value is ```gulpfile.js```
</td>
</tr>
<tr>
<td>Gulp task(s)</td>
<td>(Optional) Space delimited list of tasks to run.  If you leave it blank, the default task will run.</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Arguments</td>
<td><p>Additional arguments passed to gulp.</p>
<p>Tip: ```--gulpfile``` is not needed. This argument is handled by the Gulp file path argument shown above.</p>
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
<td>![Build: Gulp](_img/gulp.png)<br/>[Build: Gulp](gulp.md)</td>
<td>
<p>Run your script.</p>
<ul>
<li>Gulp file path: `gulpfile.js`</li>
<li>Advanced, gulp.js location: `node_modules/gulp/bin/gulp.js`</li>
</ul>
</td>
</tr>
</table>


### Build a Node.js app

[Build your Node.js app with Gulp](../../apps/nodejs/build-gulp.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
