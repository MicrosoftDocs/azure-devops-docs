---
title: Visual Studio Test task
description: Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test runner. Test frameworks that have a Visual Studio test adapter such as xUnit, NUnit, Chutzpah, etc. can also be run.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: EF087383-EE5E-42C7-9A53-AB56C98420F9
ms.manager: jillfra
ms.custom: seodec18
ms.author: pbora
author: pboraMSFT
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Visual Studio Test task

**Azure Pipelines**

Use this task in a build or release pipeline to run unit and functional tests (Selenium, Appium, Coded UI test, and more)
using the Visual Studio Test Runner. Other than MSTest-based tests, test frameworks that have a
Visual Studio test adapter, such as xUnit, NUnit, Chutzpah, can also be executed.  

Tests that target the .NET core framework can be executed by specifying the appropriate target framework value.  

Tests can be distributed on multiple agents using version 2 of this task. 

## Demands 

The agent must have the following capability:

**vstest**

The vstest demand can be satisfied in two ways: 

1. Visual Studio is installed on the agent machine. 

2. By using the [Visual Studio Test Platform Installer task](../tool/vstest-platform-tool-installer.md) in the pipeline definition. 


::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/VsTestV2.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td><b>testSelector</b><br>Select tests using</td><td>(Required) <ul><li><b>Test assembly: </b>Use this option to specify one or more test assemblies that contain your tests. You can optionally specify a filter criteria to select only specific tests.</li><li><b>Test plan: </b>Use this option to run tests from your test plan that have an automated test method associated with it. To learn more about how to associate tests with a test case work item, see <a href="../../../test/associate-automated-test-with-test-case.md" data-raw-source="[Associate automated tests with test cases](../../../test/associate-automated-test-with-test-case.md)">Associate automated tests with test cases</a>.</li><li><b>Test run: </b>Use this option when you are setting up an environment to <a href="../../../test/run-automated-tests-from-test-hub.md" data-raw-source="[run tests from test plans](../../../test/run-automated-tests-from-test-hub.md)">run tests from test plans</a>. This option should not be used when running tests in a continuous integration /continuous deployment (CI/CD) pipeline.</li></td></tr>
<tr><td><b>testAssemblyVer2</b><br>Test assemblies</td><td>(Required) Run tests from the specified files.<br>Ordered tests and webtests can be run by specifying the .orderedtest and .webtest files respectively. To run .webtest, Visual Studio 2017 Update 4 or higher is needed. <br><br>The file paths are relative to the search folder. Supports multiple lines of minimatch patterns. <a href="https://aka.ms/minimatchexamples" data-raw-source="[More Information](https://aka.ms/minimatchexamples)">More Information</a></td></tr>
<tr><td><b>testPlan</b><br>Test plan</td><td>(Required) Select a test plan containing test suites with automated test cases.</td></tr>
<tr><td><b>testSuite</b><br>Test suite</td><td>(Required) Select one or more test suites containing automated test cases. Test case work items must be associated with an automated test method. <a href="https://go.microsoft.com/fwlink/?linkid=847773" data-raw-source="[Learn more](https://go.microsoft.com/fwlink/?linkid=847773)">Learn more</a>.</td></tr>
<tr><td><b>testConfiguration</b><br>Test configuration</td><td>(Required) Select Test Configuration.</td></tr>
<tr><td><b>tcmTestRun</b><br>Test Run</td><td>(Optional) Test run based selection is used when triggering <a href="../../../test/run-automated-tests-from-test-hub.md" data-raw-source="[automated test runs from test plans](../../../test/run-automated-tests-from-test-hub.md)">automated test runs from test plans</a>. This option cannot be used for running tests in the CI/CD pipeline.</td></tr>
<tr><td><b>searchFolder</b><br>Search folder</td><td>(Required) Folder to search for the test assemblies.</td></tr>
<tr><td><b>testFiltercriteria</b><br>Test filter criteria</td><td>(Optional) Additional criteria to filter tests from Test assemblies. For example: <code>Priority=1|Name=MyTestMethod</code>. <a href="https://msdn.microsoft.com/library/jj155796.aspx" data-raw-source="[More information](https://msdn.microsoft.com/library/jj155796.aspx)">More information</a></td></tr>
<tr><td><b>runOnlyImpactedTests</b><br>Run only impacted tests</td><td>(Optional) Automatically select, and run only the tests needed to validate the code change. <a href="https://aka.ms/tialearnmore" data-raw-source="[More information](https://aka.ms/tialearnmore)">More information</a></td></tr>
<tr><td><b>runAllTestsAfterXBuilds</b><br>Number of builds after which all tests should be run</td><td>(Optional) Number of builds after which to automatically run all tests. Test Impact Analysis stores the mapping between test cases and source code. It is recommended to regenerate the mapping by running all tests, on a regular basis.</td></tr>
<tr><td><b>uiTests</b><br>Test mix contains UI tests</td><td>(Optional) To run UI tests, ensure that the agent is set to <a href="../../agents/agents.md" data-raw-source="[run in interactive mode with autologon enabled](../../agents/agents.md)">run in interactive mode with autologon enabled</a>. Setting up an agent to run interactively must be done before queueing the build / release. Checking this box does <b>not</b> configure the agent in interactive mode automatically. This option in the task is to only serve as a reminder to configure agent appropriately to avoid failures. Hosted Windows agents from the VS 2015 and 2017 pools can be used to run UI tests.</td></tr>
<tr><td><b>vstestLocationMethod</b><br>Select test platform using</td><td>(Optional) Specify which test platform should be used.</td></tr>
<tr><td><b>vsTestVersion</b><br>Test platform version</td><td>(Optional) The version of Visual Studio test to use. If latest is specified it chooses Visual Studio 2017 or Visual Studio 2015 depending on what is installed. Visual Studio 2013 is not supported. To run tests without needing Visual Studio on the agent, use the ‘Installed by tools installer’ option in the UI or <code>toolsInstaller</code> in YAML. Be sure to include the ‘Visual Studio Test Platform Installer’ task to acquire the test platform from NuGet.</td></tr>
<tr><td><b>vstestLocation</b><br>Path to vstest.console.exe</td><td>(Optional) Specify the path to VSTest.</td></tr>
<tr><td><b>runSettingsFile</b><br>Settings file</td><td>(Optional) Path to runsettings or testsettings file to use with the tests.Starting with Visual Studio 15.7, it is recommended to use <a href="/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file" data-raw-source="[runsettings](/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file)">runsettings</a> for all types of tests. To learn more about converting a .testsettings file to a .runsettings file, see <a href="https://github.com/Microsoft/vstest-docs/blob/master/RFCs/0023-TestSettings-Deprecation.md" data-raw-source="[this topic](https://github.com/Microsoft/vstest-docs/blob/master/RFCs/0023-TestSettings-Deprecation.md)">this topic</a>.</td></tr>
<tr><td><b>overrideTestrunParameters</b><br>Override test run parameters</td><td>(Optional) Override parameters defined in the <code>TestRunParameters</code> section of runsettings file or <code>Properties</code> section of testsettings file. For example: <code>-key1 value1 -key2 value2</code>. Note: Properties specified in testsettings file can be accessed via the TestContext using Visual Studio 2017 Update 4 or higher </td></tr>
<tr><td><b>pathtoCustomTestAdapters</b><br>Path to custom test adapters</td><td>(Optional) Directory path to custom test adapters. Adapters residing in the same folder as the test assemblies are automatically discovered.</td></tr>
<tr><td><b>runInParallel</b><br>Run tests in parallel on multi-core machines</td><td>(Optional) If set, tests will run in parallel leveraging available cores of the machine. This will override the MaxCpuCount if specified in your runsettings file. <a href="https://aka.ms/paralleltestexecution" data-raw-source="[Click here](https://aka.ms/paralleltestexecution)">Click here</a> to learn more about how tests are run in parallel.</td></tr>
<tr><td><b>runTestsInIsolation</b><br>Run tests in isolation</td><td>(Optional) Runs the tests in an isolated process. This makes vstest.console.exe process less likely to be stopped on an error in the tests, but tests might run slower. This option currently cannot be used when running with the multi-agent job setting.</td></tr>
<tr><td><b>codeCoverageEnabled</b><br>Code coverage enabled</td><td>(Optional) Collect code coverage information from the test run.</td></tr>
<tr><td><b>otherConsoleOptions</b><br>Other console options</td><td>(Optional) Other console options that can be passed to vstest.console.exe, as documented <a href="https://aka.ms/vstestotherconsoleoptions" target="_blank">here</a>. <p>These options are not supported and will be ignored when running tests using the ‘Multi agent’ parallel setting of an agent job or when running tests using ‘Test plan’ option. The options can be specified using a settings file instead.</p></td></tr>
<tr><td><b>distributionBatchType</b><br>Batch tests</td><td>(Optional) A batch is a group of tests. A batch of tests runs at a time and results are published for that batch. If the job in which the task runs is set to use multiple agents, each agent picks up any available batches of tests to run in parallel.<br><br><b>Based on number of tests and agents:</b> Simple batching based on the number of tests and agents participating in the test run.<br><br><b>Based on past running time of tests:</b> This batching considers past running time to create batches of tests such that each batch has approximately equal running time.<br><br><b>Based on test assemblies:</b> Tests from an assembly are batched together.</td></tr>
<tr><td><b>batchingBasedOnAgentsOption</b><br>Batch options</td><td>(Optional) Simple batching based on the number of tests and agents participating in the test run. When the batch size is automatically determined, each batch contains <code>(total number of tests / number of agents)</code> tests. If a batch size is specified, each batch will contain the specified number of tests.</td></tr>
<tr><td><b>customBatchSizeValue</b><br>Number of tests per batch</td><td>(Required) Specify batch size</td></tr>
<tr><td><b>batchingBasedOnExecutionTimeOption</b><br>Batch options</td><td>(Optional) This batching considers past running time to create batches of tests such that each batch has approximately equal running time. Quick running tests will be batched together, while longer running tests may belong to a separate batch. When this option is used with the multi-agent job setting, total test time is reduced to a minimum.</td></tr>
<tr><td><b>customRunTimePerBatchValue</b><br>Running time (sec) per batch</td><td>(Required) Specify the running time (sec) per batch</td></tr>
<tr><td><b>dontDistribute</b><br>Do not distribute tests and replicate instead when multiple agents are used in the job</td><td>(Optional) Choosing this option will not distribute tests across agents when the task is running in a multi-agent job.<br>Each of the selected test(s) will be repeated on each agent.<br>The option is not applicable when the agent job is configured to run with no parallelism or with the multi-config option.</td></tr>
<tr><td><b>testRunTitle</b><br>Test run title</td><td>(Optional) Provide a name for the test run.</td></tr>
<tr><td><b>platform</b><br>Build platform</td><td>(Optional) Build platform against which the tests should be reported. If you have defined a variable for platform in your build task, use that here.</td></tr>
<tr><td><b>configuration</b><br>Build configuration</td><td>(Optional) Build configuration against which the tests should be reported. If you have defined a variable for configuration in your build task, use that here.</td></tr>
<tr><td><b>publishRunAttachments</b><br>Upload test attachments</td><td>(Optional) Opt in/out of publishing run level attachments.</td></tr>
<tr><td><b>rerunFailedTests</b><br>Rerun failed tests</td><td>(Optional) Selecting this option will rerun any failed tests until they pass or the maximum # of attempts is reached.</td></tr>
<tr><td><b>rerunType</b><br>Do not rerun if test failures exceed specified threshold</td><td>(Optional) Use this option to avoid rerunning tests when failure rate crosses the specified threshold. This is applicable if any environment issues leads to massive failures.<br>You can specify % failures with <code>basedOnTestFailurePercentage</code> or # of failed tests as a threshold with <code>basedOnTestFailureCount</code>.</td></tr>
<tr><td><b>rerunFailedThreshold</b><br>% failure</td><td>(Optional) Use this option to avoid rerunning tests when failure rate crosses the specified threshold. This is applicable if any environment issues leads to massive failures and if <code>rerunType</code> is <code>basedOnTestFailurePercentage</code>.</td></tr>
<tr><td><b>rerunFailedTestCasesMaxLimit</b><br># of failed tests</td><td>(Optional) Use this option to avoid rerunning tests when number of failed test cases crosses specified limit. This is applicable if any environment issues leads to massive failures and if <code>rerunType</code> is <code>rerunFailedTestCasesMaxLimit</code>.</td></tr>
<tr><td><b>rerunMaxAttempts</b><br>Maximum # of attempts</td><td>(Optional) Specify the maximum # of times a failed test should be retried. If a test passes before the maximum # of attempts is reached, it will not be rerun further.</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

### How can I run tests that use TestCase as a data source?

To run automated tests that use TestCase as a data source, the following is needed:
1. You must have Visual Studio 2017.6 or higher on the agent machine. Visual Studio Test Platform Installer task cannot be used to run tests that use TestCase as a data source.
2. Create a [PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) that is authorized for the scope “Work Items (full)”.
3. Add a secure Build or Release variable called Test.TestCaseAccessToken with the value set to the PAT created in the previous step.

### I am running into issues when running data-driven xUnit and NUnit tests with some of the task options. Are there known limitations?
Data-driven tests that use xUnit and NUnit test frameworks have some known limitations and cannot be used with the following task options:
1. Rerun failed tests.
2. Distributing tests on multiple agents and batching options.
3. Test Impact Analysis 

The above limitations are because of how the adapters for these test frameworks discover and report data-driven tests.
