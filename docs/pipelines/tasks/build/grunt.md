---
title: Grunt build and release task
ms.custom: seodec18
description: Grunt build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: FB181C61-BAC3-4568-B340-48ACE15C2519
ms.author: vijayma
author: vijayma
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---

# Grunt task
 
[!INCLUDE [temp](../../includes/version-tfs-2015-update.md)]

Use this task to run Grunt tasks using the JavaScript Task Runner.

## Demands

The build agent must have the following capability:

 * Grunt

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/GruntV0.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`gruntFile` <br/>Grunt File Path|(Required) Relative path from the repo root to the Grunt script that you want to run. <br/>Default value: gruntfile.js|
|`targets` <br/>Grunt task(s)|(Optional) Space delimited list of tasks to run. If you leave it blank, the default task will run.|
|`arguments` <br/>Arguments|Additional arguments passed to Grunt. See [Using the CLI](http://gruntjs.com/using-the-cli). <br/>Tip: --gruntfile is not needed. This argument is handled by the Grunt file path argument shown above.|
|`cwd` <br/>Working Directory|(Optional) Current working directory when the script is run.  If you leave it blank, the working directory is the folder where the script is located. <br/>Argument aliases: `workingDirectory`|
|`gruntCli` <br/>grunt-cli location|(Required) grunt-cli to run when agent can't find global installed grunt-cli  Defaults to the grunt-cli under node_modules folder of the working directory. <br/>Default value: node_modules/grunt-cli/bin/grunt <br/>Argument aliases: `workingDirectory`|
|`publishJUnitResults` <br/>Publish to Azure Pipelines|Select this option to publish JUnit test results produced by the Grunt build to Azure Pipelines <br/>Default value: false|
|`testResultsFiles` <br/>Test Results Files|(Required) Test results files path. Wildcards can be used. For example, **/TEST-*.xml for all XML files whose name starts with TEST-. <br/>Default value: **/TEST-*.xml|
|`testRunTitle` <br/>Test Run Title|(Optional) Provide a name for the test run|
|`enableCodeCoverage` <br/>Enable Code Coverage|(Optional) Select this option to enable Code Coverage using Istanbul <br/>Default value: false|
|`testFramework` <br/>Test Framework|(Optional) Select your test framework <br/>Default value: Mocha|
|`srcFiles` <br/>Source Files|(Optional) Provide the path to your source files which you want to hookRequire ()|
|`testFiles` <br/>Test Script Files|(Required) Provide the path to your test script files <br/>Default value: test/*.js|

## Example

See [Sample Gruntfile](https://gruntjs.com/sample-gruntfile).

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
