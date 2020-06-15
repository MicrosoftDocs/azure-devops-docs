---
title: Gulp build and release task
ms.custom: seodec18
description: Gulp build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: EC168F1F-4B27-4688-87CE-E4D12E885CC5
ms.author: vijayma
author: vijayma
ms.date: 12/17/2019
monikerRange: '>= tfs-2015'
---


# Gulp task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to run gulp tasks using the Node.js streaming task-based build system.

## Demands

gulp

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/GulpV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`gulpFile` <br/>gulp File Path|(Required) Relative path from the repo root of the gulp file script that you want to run. <br/>Default value: gulpfile.js|
|`targets` <br/>gulp Task(s)|(Optional) Space-delimited list of tasks to run. If not specified, the default task will run.|
|`arguments` <br/>Arguments|Additional arguments passed to gulp. <br/>Tip: --gulpfile is not needed since already added via gulpFile input above|
|`cwd` <br/>Working Directory|(Optional) Current working directory when the script is run. Defaults to the folder where the script is located. <br/>Argument aliases: `workingDirectory`|
|`gulpjs` <br/>gulp.js location|(Optional) Path to an alternative gulp.js, relative to the working directory. <br/>Argument aliases: `workingDirectory`|
|`publishJUnitResults` <br/>Publish to Azure Pipelines|Select this option to publish JUnit test results produced by the gulp build to Azure Pipelines <br/>Default value: false|
|`testResultsFiles` <br/>Test Results Files|(Required) Test results files path. Wildcards can be used. For example, \*\*/TEST-\*.xml for all XML files whose name starts with TEST-. <br/>Default value: \*\*/TEST-\*.xml|
|`testRunTitle` <br/>Test Run Title|(Optional) Provide a name for the test run|
|`enableCodeCoverage` <br/>Enable Code Coverage|(Optional) Select this option to enable Code Coverage using Istanbul <br/>Default value: false|
|`testFramework` <br/>Test Framework|(Optional) Select your test framework <br/>Default value: Mocha|
|`srcFiles` <br/>Source Files|(Optional) Provide the path to your source files, that you want to hookRequire ()|
|`testFiles` <br/>Test Script Files|(Required) Provide the path to your test script files <br/>Default value: test/*.js|

## Example

### Run gulp.js

On the [Build](../../index.yml) tab:

<table>
<tr>
<td>

![Package: npm](../package/media/npm.png)

<br/>[Package: npm](../package/npm.md)</td>
<td>
<p>Install npm.</p>
<ul>
<li>Command: <code>install</code></li>
</ul>
</td>
</tr>
<tr>
<td>

![Build: gulp](media/gulp.png)

<br/>[Build: gulp](gulp.md)</td>
<td>
<p>Run your script.</p>
<ul>
<li>gulp file path: <code>gulpfile.js</code></li>
<li>Advanced, gulp.js location: <code>node_modules/gulp/bin/gulp.js</code></li>
</ul>
</td>
</tr>
</table>


### Build a Node.js app

[Build your Node.js app with gulp](../../ecosystems/javascript.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
