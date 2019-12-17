---
title: Grunt build and release task
ms.custom: seodec18
description: Grunt build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: FB181C61-BAC3-4568-B340-48ACE15C2519
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
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
      <td><code>gruntFile</code><br/>Grunt File Path</td>
      <td>(Required) Relative path from the repo root to the Grunt script that you want to run. <br/>Default value: <code>gruntfile.js</code></td>
   </tr>
   <tr>
      <td><code>targets</code><br/>Grunt task(s)</td>
      <td>(Optional) Space delimited list of tasks to run. If you leave it blank, the default task will run.</td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2">Advanced</th>
   </tr>
   <tr>
      <td><code>arguments</code><br/>Arguments</td>
      <td>
         <p>Additional arguments passed to Grunt. See <a href="http://gruntjs.com/using-the-cli" data-raw-source="[Using the CLI](https://gruntjs.com/using-the-cli)">Using the CLI</a>.</p>
         <p>Tip: <code>--gruntfile</code> is not needed. This argument is handled by the Grunt file path argument shown above.</p>
      </td>
   </tr>
   <tr>
      <td><code>cwd</code><br/>Working Directory</td>
      <td>(Optional) Current working directory when the script is run.  If you leave it blank, the working directory is the folder where the script is located.<br/>Argument aliases: <code>workingDirectory</code></td>
   </tr>
   <tr>
      <td><code>gruntCli</code><br/>grunt-cli location</td>
      <td>(Required) grunt-cli to run when agent can't find global installed grunt-cli  Defaults to the grunt-cli under node_modules folder of the working directory. <br/>Default value: node_modules/grunt-cli/bin/grunt <br/>Argument aliases: <code>workingDirectory</code></td>
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

See [Sample Gruntfile](https://gruntjs.com/sample-gruntfile).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
