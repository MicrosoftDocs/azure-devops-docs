---
title: Visual Studio Test
description: Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test runner. Test frameworks that have a Visual Studio test adapter such as xUnit, NUnit, Chutzpah, etc. can also be run. Tests can be distributed on multiple agents using this task (version 2).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: EF087383-EE5E-42C7-9A53-AB56C98420F9
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Test: Visual Studio Test

![](_img/vstest.png) Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test runner. Test frameworks that have a Visual Studio test adapter such as xUnit, NUnit, Chutzpah, etc. can also be run. Tests can be distributed on multiple agents using this task (version 2).

::: moniker range=">tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/VsTestV2.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Select tests using</td><td>(Required) <ul><li><b>Test assembly: </b>Use this option to specify one or more test assemblies that contain your tests. You can optionally specify a filter criteria to select only specific tests.</li><li><b>Test plan: </b>Use this option to run tests from your test plan that have an automated test method associated with it.</li><li><b>Test run: </b>Use this option when you are setting up an environment to run tests from the Test hub. This option should not be used when running tests in a continuous integration / continuous deployment (CI/CD) pipeline.</li></td></tr>
<tr><td>Test assemblies</td><td>(Required) Run tests from the specified files.<br>Ordered tests and webtests can be run by specifying the .orderedtest and .webtest files respectively. To run .webtest, Visual Studio 2017 Update 4 or higher is needed. <br><br>The file paths are relative to the search folder. Supports multiple lines of minimatch patterns. [More Information](https://aka.ms/minimatchexamples)</td></tr>
<tr><td>Test plan</td><td>(Required) Select a test plan containing test suites with automated test cases.</td></tr>
<tr><td>Test suite</td><td>(Required) Select one or more test suites containing automated test cases. Test case work items must be associated with an automated test method. [Learn more.](https://go.microsoft.com/fwlink/?linkid=847773)</td></tr>
<tr><td>Test configuration</td><td>(Required) Select Test Configuration.</td></tr>
<tr><td>Test Run</td><td>(Optional) Test run based selection is used when triggering automated test runs from the test hub. This option cannot be used for running tests in the CI/CD pipeline.</td></tr>
<tr><td>Search folder</td><td>(Required) Folder to search for the test assemblies.</td></tr>
<tr><td>Test filter criteria</td><td>(Optional) Additional criteria to filter tests from Test assemblies. For example: `Priority=1|Name=MyTestMethod`. [More information](https://msdn.microsoft.com/en-us/library/jj155796.aspx)</td></tr>
<tr><td>Run only impacted tests</td><td>(Optional) Automatically select, and run only the tests needed to validate the code change. [More information](https://aka.ms/tialearnmore)</td></tr>
<tr><td>Number of builds after which all tests should be run</td><td>(Optional) Number of builds after which to automatically run all tests. Test Impact Analysis stores the mapping between test cases and source code. It is recommended to regenerate the mapping by running all tests, on a regular basis.</td></tr>
<tr><td>Test mix contains UI tests</td><td>(Optional) To run UI tests, ensure that the agent is set to run in interactive mode. Setting up an agent to run interactively must be done before queueing the build / release. Checking this box does <b>not</b> configure the agent in interactive mode automatically. This option in the task is to only serve as a reminder to configure agent appropriately to avoid failures. <br><br> Hosted Windows agents from the VS 2015 and 2017 pools can be used to run UI tests.<br> [More information](https://aka.ms/uitestmoreinfo).</td></tr>
<tr><td>Select test platform using</td><td>(Optional) undefined</td></tr>
<tr><td>Test platform version</td><td>(Optional) The version of Visual Studio test to use. If latest is specified it chooses Visual Studio 2017 or Visual Studio 2015 depending on what is installed. Visual Studio 2013 is not supported. To run tests without needing Visual Studio on the agent, use the ‘Installed by tools installer’ option. Be sure to include the ‘Visual Studio Test Platform Installer’ task to acquire the test platform from nuget.</td></tr>
<tr><td>Path to vstest.console.exe</td><td>(Optional) Optionally supply the path to VSTest.</td></tr>
<tr><td>Settings file</td><td>(Optional) Path to runsettings or testsettings file to use with the tests.</td></tr>
<tr><td>Override test run parameters</td><td>(Optional) Override parameters defined in the `TestRunParameters` section of runsettings file or `Properties` section of testsettings file. For example: `-key1 value1 -key2 value2`. Note: Properties specified in testsettings file can be accessed via the TestContext using Visual Studio 2017 Update 4 or higher </td></tr>
<tr><td>Path to custom test adapters</td><td>(Optional) Directory path to custom test adapters. Adapters residing in the same folder as the test assemblies are automatically discovered.</td></tr>
<tr><td>Run tests in parallel on multi-core machines</td><td>(Optional) If set, tests will run in parallel leveraging available cores of the machine. This will override the MaxCpuCount if specified in your runsettings file. [Click here](https://aka.ms/paralleltestexecution) to learn more about how tests are run in parallel.</td></tr>
<tr><td>Run tests in isolation</td><td>(Optional) Runs the tests in an isolated process. This makes vstest.console.exe process less likely to be stopped on an error in the tests, but tests might run slower. This option currently cannot be used when running with the multi-agent phase setting.</td></tr>
<tr><td>Code coverage enabled</td><td>(Optional) Collect code coverage information from the test run.</td></tr>
<tr><td>Other console options</td><td>(Optional) Other console options that can be passed to vstest.console.exe, as documented <a href="https://aka.ms/vstestotherconsoleoptions" target="_blank">here</a>. <p>These options are not supported and will be ignored when running tests using the ‘Multi agent’ parallel setting of an agent phase or when running tests using ‘Test plan’ option. The options can be specified using a settings file instead.</p></td></tr>
<tr><td>Batch tests</td><td>(Optional) A batch is a group of tests. A batch of tests runs at a time and results are published for that batch. If the phase in which the task runs is set to use multiple agents, each agent picks up any available batches of tests to run in parallel.<br><br><b>Based on number of tests and agents:</b> Simple batching based on the number of tests and agents participating in the test run.<br><br><b>Based on past running time of tests:</b> This batching considers past running time to create batches of tests such that each batch has approximately equal running time.<br><br><b>Based on test assemblies:</b> Tests from an assembly are batched together.</td></tr>
<tr><td>Batch options</td><td>(Optional) Simple batching based on the number of tests and agents participating in the test run. When the batch size is automatically determined, each batch contains `(total number of tests / number of agents)` tests. If a batch size is specified, each batch will contain the specified number of tests.</td></tr>
<tr><td>Number of tests per batch</td><td>(Required) Specify batch size</td></tr>
<tr><td>Batch options</td><td>(Optional) This batching considers past running time to create batches of tests such that each batch has approximately equal running time. Quick running tests will be batched together, while longer running tests may belong to a separate batch. When this option is used with the multi-agent phase setting, total test time is reduced to a minimum.</td></tr>
<tr><td>Running time (sec) per batch</td><td>(Required) Specify the running time (sec) per batch</td></tr>
<tr><td>Do not distribute tests and replicate instead when multiple agents are used in the phase</td><td>(Optional) Choosing this option will not distribute tests across agents when the task is running in a multi-agent phase.<br>Each of the selected test(s) will be repeated on each agent.<br>The option is not applicable when the agent phase is configured to run with no parallelism or with the multi-config option.</td></tr>
<tr><td>Test run title</td><td>(Optional) Provide a name for the test run.</td></tr>
<tr><td>Build platform</td><td>(Optional) Build platform against which the tests should be reported. If you have defined a variable for platform in your build task, use that here.</td></tr>
<tr><td>Build configuration</td><td>(Optional) Build configuration against which the tests should be reported. If you have defined a variable for configuration in your build task, use that here.</td></tr>
<tr><td>Upload test attachments</td><td>(Optional) Opt in/out of publishing run level attachments.</td></tr>
<tr><td>Rerun failed tests</td><td>(Optional) Selecting this option will rerun any failed tests until they pass or the maximum # of attempts is reached.</td></tr>
<tr><td>Do not rerun if test failures exceed specified threshold</td><td>(Optional) Use this option to avoid rerunning tests when failure rate crosses the specified threshold. This is applicable if any environment issues leads to massive failures.<br>You can specify % failures or # of failed tests as a threshold.</td></tr>
<tr><td>% failure</td><td>(Optional) Use this option to avoid rerunning tests when failure rate crosses the specified threshold. This is applicable if any environment issues leads to massive failures.</td></tr>
<tr><td># of failed tests</td><td>(Optional) Use this option to avoid rerunning tests when number of failed test cases crosses specified limit. This is applicable if any environment issues leads to massive failures.</td></tr>
<tr><td>Maximum # of attempts</td><td>(Optional) Specify the maximum # of times a failed test should be retried. If a test passes before the maximum # of attempts is reached, it will not be rerun further.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
