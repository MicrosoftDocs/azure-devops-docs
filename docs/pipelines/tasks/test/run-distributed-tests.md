---
title: Run Functional Tests
description: Deprecated
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D353D6A2-E361-4A8F-8D8C-123BEBB71028
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Test: Run Distributed Tests

![](_img/runvisualstudiotestsusingtestagent.png) Deprecated: This task and its companion task (Visual Studio Test Agent Deployment) are deprecated. Use the 'Visual Studio Test' task instead. The VSTest task can run unit as well as functional tests. Run tests on one or more agents using the multi-agent phase setting. Use the 'Visual Studio Test Platform' task to run tests without needing Visual Studio on the agent. VSTest task also brings new capabilities such as automatically rerunning failed tests.

::: moniker range=">tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/RunDistributedTestsV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Machines</td><td>(Required) Provide a comma separated list of machine IP addresses or FQDNs. Eg: `dbserver.fabrikam.com or 192.168.12.34` Or provide output variable of other tasks. Eg: `$(variableName)` Or provide a Machine Group Name</td></tr>
<tr><td>Test Drop Location</td><td>(Required) Location where the test binaries have been dropped in the agent machine(s) as part of the 'Windows Machine File Copy' or 'Azure File Copy' task. System Environment Variables can also be used in location string. e.g., `%systemdrive%\Tests`, `%temp%\DropLocation` etc.</td></tr>
<tr><td>Test Selection</td><td>(Required) Select the way you want to run tests : using Test Assemblies or using Test Plan.</td></tr>
<tr><td>Test Plan</td><td>(Required) Select a Test Plan.</td></tr>
<tr><td>Test Suite</td><td>(Required) Select Test Suites from the Test Plan.</td></tr>
<tr><td>Test Configuration</td><td>(Required) Select Test Configuration.</td></tr>
<tr><td>Test Assembly</td><td>(Required) Test binaries to run tests on. Wildcards can be used. For example, `**\*test*.dll;` for all dlls containing 'test' in their name.</td></tr>
<tr><td>Test Filter criteria</td><td>(Optional) Optionally specify the test case filter criteria. For example, `Owner=james&Priority=1`</td></tr>
<tr><td>Run Settings File</td><td>(Optional) Path to runsettings or testsettings file to use with the tests.</td></tr>
<tr><td>Override Test Run Parameters</td><td>(Optional) Override parameters defined in the `TestRunParameters` section of runsettings file or `Properties` section of testsettings file. For example: `AppURL=$(DeployURL);Port=8080`. Note: Properties specified in testsettings file can be accessed via the TestContext using Test Agent 2017 Update 4 or higher.</td></tr>
<tr><td>Code Coverage Enabled</td><td>(Optional) Whether code coverage needs to be enabled.</td></tr>
<tr><td>Distribute tests by number of machines</td><td>(Optional) Tests will be distributed based on the number of machines provided instead of number of test containers. Note that tests within a dll might also be distributed to multiple machines.</td></tr>
<tr><td>Test Run Title</td><td>(Optional) Provide a name for the Test Run.</td></tr>
<tr><td>Platform</td><td>(Optional) Platform against which the tests should be reported. If you have defined a variable for platform in your build task, use that here.</td></tr>
<tr><td>Configuration</td><td>(Optional) Configuration against which the tests should be reported. If you have defined a variable for configuration in your build task, use that here.</td></tr>
<tr><td>Test Configurations</td><td>(Optional) Optionally associate a test case filter against a test configuration ID. Syntax: &lt;Filter1&gt;:&lt;Id1&gt;;DefaultTestConfiguration:&lt;Id3&gt;. For example: `FullyQualifiedName~Chrome:12`</td></tr>
<tr><td>Application Under Test Machines</td><td>(Optional) Comma separated list of machines or output variable or Machine Group Name on which server processes such as W3WP.exe is running</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
