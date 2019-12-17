---
title: Gulp build and release task
ms.custom: seodec18
description: Gulp build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: EC168F1F-4B27-4688-87CE-E4D12E885CC5
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 12/17/2019
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
      <td><code>gulpFile</code><br/>gulp File Path</td>
      <td>(Required) Relative path from the repo root of the gulp file script that you want to run. <br/>Default value: <code>gruntfile.js</code></td>
   </tr>
   <tr>
      <td><code>targets</code><br/>gulp Task(s)</td>
      <td>(Optional) Space delimited list of tasks to run. If not specified, the default task will run.</td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Advanced</th>
   </tr>
   <tr>
      <td><code>arguments</code><br/>Arguments</td>
      <td>
         <p>Additional arguments passed to gulp.</p>
         <p>Tip: <code>--gulpfile</code> is not needed since already added via gulpFile input above</p>
      </td>
   </tr>
   <tr>
      <td><code>cwd</code><br/>Working Directory</td>
      <td>(Optional) Current working directory when the script is run. Defaults to the folder where the script is located.<br/>Argument aliases: <code>workingDirectory</code></td>
   </tr>
   <tr>
      <td><code>gulpjs</code><br/>gulp.js location</td>
      <td>(Optional) Path to an alternative gulp.js, relative to the working directory.<br/>Argument aliases: <code>workingDirectory</code></td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">JUnit Test Results</th>
   </tr>
   <tr>
      <td><code>publishJUnitResults</code><br/>Publish to Azure Pipelines</td>
      <td>Select this option to publish JUnit test results produced by the Grunt build to Azure Pipelines<br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>testResultsFiles</code><br/>Test Results Files</td>
      <td>(Required) Test results files path. Wildcards can be used. For example, <code>**/TEST-*.xml</code> for all XML files whose name starts with TEST-.<br/>Default value: **/TEST-*.xml
      </td>
   </tr>
   <tr>
      <td><code>testRunTitle</code><br/>Test Run Title</td>
      <td>(Optional) Provide a name for the test run
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Code Coverage</th>
   </tr>
   <tr>
      <td><code>enableCodeCoverage</code><br/>Enable Code Coverage</td>
      <td>(Optional) Select this option to enable Code Coverage using Istanbul<br/>Default value: false
      </td>
   </tr>
   <tr>
      <td><code>testFramework</code><br/>Test Framework</td>
      <td>(Optional) Select your test framework <br/>Default value: Mocha
      </td>
   </tr>
   <tr>
      <td><code>srcFiles</code><br/>Source Files</td>
      <td>(Optional) Provide the path to your source files which you want to hookRequire ()
      </td>
   </tr>
   <tr>
      <td><code>testFiles</code><br/>Test Script Files</td>
      <td>(Required) Provide the path to your test script files <br/>Default value: test/*.js
      </td>
   </tr>
   [!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Example

### Run gulp.js

On the [Build](../../index.yml) tab:

<table>
<tr>
<td>

![Package: npm](../package/_img/npm.png)

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

![Build: gulp](_img/gulp.png)

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

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../_shared/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
