---
title: Visual Studio Test task
description: Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test runner. Test frameworks that have a Visual Studio test adapter such as xUnit, NUnit, Chutzpah, etc. can also be run.
ms.topic: reference
ms.assetid: EF087383-EE5E-42C7-9A53-AB56C98420F9
ms.custom: seodec18
ms.author: shashban
author: shashban
ms.date: 04/21/2020
monikerRange: 'azure-devops'
---

# Visual Studio Test task

**Azure Pipelines**

Use this task to run unit and functional tests (Selenium, Appium, Coded UI test, and more)
using the Visual Studio Test Runner. Other than MSTest-based tests, test frameworks that have a
Visual Studio test adapter, such as xUnit, NUnit, Chutzpah, can also be executed.  

Tests that target the .NET core framework can be executed by specifying the appropriate target framework value in the [.runsettings file](/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file).

Tests can be distributed on multiple agents using version 2 of this task. For more information, see [Run tests in parallel using the Visual Studio Test task](../../test/parallel-testing-vstest.md).

## Check prerequisites

If you're using a Windows self-hosted agent, be sure that your machine has this prerequisite installed:

- [.NET Framework](/dotnet/framework/install/) 4.6.2 or a later version

## Demands 

The agent must have the following capability:

**vstest**

The vstest demand can be satisfied in two ways: 

1. Visual Studio is installed on the agent machine. 

2. By using the [Visual Studio Test Platform Installer task](../tool/vstest-platform-tool-installer.md) in the pipeline definition. 

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/VsTestV2.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`testSelector` <br/>Select tests using|(Required) **Test assembly:** Use this option to specify one or more test assemblies that contain your tests. You can optionally specify a filter criteria to select only specific tests.<br/>**Test plan:** Use this option to run tests from your test plan that have an automated test method associated with it. To learn more about how to associate tests with a test case work item, see [Associate automated tests with test cases](../../../test/associate-automated-test-with-test-case.md).<br/>**Test run:** Use this option when you are setting up an environment to [run tests from test plans](../../../test/run-automated-tests-from-test-hub.md). This option should not be used when running tests in a continuous integration/continuous deployment (CI/CD) pipeline. <br/>Default value: `testAssemblies`|
|`testAssemblyVer2`<br/>Test files|(Required) Run tests from the specified files. Ordered tests and webtests can be run by specifying the `.orderedtest` and `.webtest` files respectively. To run `.webtest`, Visual Studio 2017 Update 4 or higher is needed. The file paths are relative to the search folder. Supports multiple lines of minimatch patterns. [More Information](../file-matching-patterns.md) <br/>Default value: `**\\*test*.dll\n!**\\*TestAdapter.dll\n!**\\obj\\**`|
|`testPlan`<br/>Test plan|(Required) Select a test plan containing test suites with automated test cases.|
|`testSuite`<br/>Test suite|(Required) Select one or more test suites containing automated test cases. Test case work items must be associated with an automated test method. [Learn more](../../../test/associate-automated-test-with-test-case.md).|
|`testConfiguration`<br/>Test configuration|(Required) Select Test Configuration.|
|`tcmTestRun`<br/>Test Run|(Optional) Test run based selection is used when triggering [automated test runs from test plans](../../../test/run-automated-tests-from-test-hub.md). This option cannot be used for running tests in the CI/CD pipeline.|
|`searchFolder`<br/>Search folder|(Required) Folder to search for the test assemblies.|
|`testFiltercriteria`<br/>Test filter criteria|(Optional) Additional criteria to filter tests from Test assemblies. <br/>For example: `Priority=1|Name=MyTestMethod`. [More information](/previous-versions/jj155796(v=vs.140))|
|`runOnlyImpactedTests`<br/>Run only impacted tests|(Optional) Automatically select, and run only the tests needed to validate the code change. [More information](../../test/test-impact-analysis.md)|
|`runAllTestsAfterXBuilds`<br/>Number of builds after which all tests should be run|(Optional) Number of builds after which to automatically run all tests. Test Impact Analysis stores the mapping between test cases and source code. It is recommended to regenerate the mapping by running all tests, on a regular basis.|
|`uiTests`<br/>Test mix contains UI tests|(Optional) To run UI tests, ensure that the agent is set to [run in interactive mode](../../agents/agents.md) with autologon enabled. Setting up an agent to run interactively must be done before queueing the build/release. Checking this box does not configure the agent in interactive mode automatically. This option in the task is to only serve as a reminder to configure agent appropriately to avoid failures. Hosted Windows agents from the VS 2015 and 2017 pools can be used to run UI tests.|
|`vstestLocationMethod`<br/>Select test platform using|(Optional) Specify which test platform should be used.|
|`vsTestVersion`<br/>Test platform version|(Optional) The version of Visual Studio test to use. If latest is specified it chooses Visual Studio 2017 or Visual Studio 2015 depending on what is installed. Visual Studio 2013 is not supported. To run tests without needing Visual Studio on the agent, use the `Installed by tools installer` option in the UI or toolsInstaller in YAML. Be sure to include the ‘Visual Studio Test Platform Installer’ task to acquire the test platform from NuGet.|
|`vstestLocation`<br/>Path to vstest.console.exe|(Optional) Specify the path to VSTest.|
|`runSettingsFile`<br/>Settings file|(Optional) Path to `runsettings` or `testsettings` file to use with the tests.Starting with Visual Studio 15.7, it is recommended to use runsettings for all types of tests. To learn more about converting a .testsettings file to a .runsettings file, see [this topic](https://github.com/Microsoft/vstest-docs/blob/master/RFCs/0023-TestSettings-Deprecation.md).|
|`overrideTestrunParameters`<br/>Override test run parameters|(Optional) Override parameters defined in the TestRunParameters section of runsettings file or Properties section of testsettings file. <br/>For example: `-key1 value1 -key2 value2`. **Note:** Properties specified in `testsettings` file can be accessed via the TestContext using Visual Studio 2017 Update 4 or higher|
|`pathtoCustomTestAdapters`<br/>Path to custom test adapters|(Optional) Directory path to custom test adapters. Adapters residing in the same folder as the test assemblies are automatically discovered.|
|`runInParallel`<br/>Run tests in parallel on multi-core machines|(Optional) If set, tests will run in parallel leveraging available cores of the machine. This will override the MaxCpuCount if specified in your runsettings file. Click [here](https://devblogs.microsoft.com/devops/parallel-test-execution) to learn more about how tests are run in parallel.|
|`runTestsInIsolation`<br/>Run tests in isolation|(Optional) Runs the tests in an isolated process. This makes `vstest.console.exe` process less likely to be stopped on an error in the tests, but tests might run slower. This option currently cannot be used when running with the multi-agent job setting.|
|`codeCoverageEnabled`<br/>Code coverage enabled|(Optional) Collect code coverage information from the test run.|
|`otherConsoleOptions`<br/>Other console options|(Optional) Other console options that can be passed to `vstest.console.exe`, as documented [here](/visualstudio/test/vstest-console-options). These options are not supported and will be ignored when running tests using the **Multi agent** parallel setting of an agent job or when running tests using **Test plan** option. The options can be specified using a settings file instead.|
|`distributionBatchType` <br/>Batch tests| (Optional) A batch is a group of tests. A batch of tests runs its tests at the same time and results are published for the batch. If the job in which the task runs is set to use multiple agents, each agent picks up any available batches of tests to run in parallel.<br/>**Based on the number of tests and agents:** Simple batching based on the number of tests and agents participating in the test run.<br/>**Based on past running time of tests:** This batching considers past running time to create batches of tests such that each batch has approximately equal running time.<br/>**Based on test assemblies:** Tests from an assembly are batched together." <br/>Default value: `basedOnTestCases`|
|`batchingBasedOnAgentsOption` <br/>Batch options| (Optional) Simple batching based on the number of tests and agents participating in the test run. When the batch size is automatically determined, each batch contains `(total number of tests / number of agents)` tests. If a batch size is specified, each batch will contain the specified number of tests. <br/>Default value: `autoBatchSize`|
|`customBatchSizeValue` <br/>Number of tests per batch| (Required) Specify batch size <br/>Default value: `10`|
|`batchingBasedOnExecutionTimeOption` <br/>Batch options| (Optional) This batching considers past running time to create batches of tests such that each batch has approximately equal running time. Quick running tests will be batched together, while longer running tests may belong to a separate batch. When this option is used with the multi-agent job setting, total test time is reduced to a minimum.<br/>Default value: `autoBatchSize`|
|`customRunTimePerBatchValue` <br/>Running time (sec) per batch| (Required) Specify the running time (sec) per batch <br/>Default value: `60`|
|`dontDistribute` <br/>Replicate tests instead of distributing when multiple agents are used in the job| (Optional) Choosing this option will not distribute tests across agents when the task is running in a multi-agent job.<br>Each of the selected test(s) will be repeated on each agent.<br>The option is not applicable when the agent job is configured to run with no parallelism or with the multi-config option. <br/>Default value: `False`|
|`testRunTitle` <br/>Test run title| (Optional) Provide a name for the test run|
|`platform`<br/>Build platform|(Optional) Build platform against which the tests should be reported. If you have defined a variable for platform in your build task, use that here.|
|`configuration`<br/>Build configuration|(Optional) Build configuration against which the tests should be reported. If you have defined a variable for configuration in your build task, use that here.|
|`publishRunAttachments`<br/>Upload test attachments|(Optional) Opt in/out of publishing run level attachments. <br/>Default value: `true`|
|`failOnMinTestsNotRun`<br/>Fail the task if a minimum number of tests are not run|(Optional) Use this option to fail the task if a minimum number of tests are not run. This may be useful if any changes to task inputs or underlying test adapter dependencies lead to only a subset of the desired tests to be found. <br/>Default value: `False`|
|`minimumExpectedTests`<br/>Minimum # of tests|(Optional) Specify the minimum # of tests that should be run for the task to succeed. Total tests run is calculated as the sum of passed, failed and aborted tests. <br/>Default value: `1`|
|`diagnosticsEnabled`<br/>Collect advanced diagnostics in case of catastrophic failures|(Optional) Use this option to turn on collection of diagnostic data to troubleshoot catastrophic failures such as test crash. <br/>When this option is checked, a sequence XML file is generated and attached to the test run. The sequence file contains information about the sequence in which tests ran, so that a potentially culprit test can be identified. <br/>Default value: `false`|
|`collectDumpOn`<br/>Collect process dump and attach to test run report|(Optional) Use this option to collect a mini-dump that can be used for further analysis.<br/>**On abort only**: mini-dump will be collected only when test run is aborted. <br/>**Always**: mini-dump will always be collected regardless of whether the test run completes or not.<br/>**Never**: mini-dump will not be collected regardless of whether the test run completes or not|
|`rerunFailedTests`<br/>Rerun failed tests|(Optional) Selecting this option will rerun any failed tests until they pass or the maximum # of attempts is reached.<br/>Default value: `False`|
|`rerunType`<br/>Do not rerun if test failures exceed specified threshold|(Optional) Use this option to avoid rerunning tests when failure rate crosses the specified threshold. This is applicable if any environment issues leads to massive failures.You can specify % failures with `basedOnTestFailurePercentage` or # of failed tests as a threshold with basedOnTestFailureCount.<br/>Default value: `basedOnTestFailurePercentage`|
|`rerunFailedThreshold`<br/>% failure|(Optional) Use this option to avoid rerunning tests when failure rate crosses the specified threshold. This is applicable if any environment issues leads to massive failures <br/>Default value: `30`|
|`rerunFailedTestCasesMaxLimit`<br/># of failed tests|(Optional) Use this option to avoid rerunning tests when number of failed test cases crosses specified limit. This is applicable if any environment issues leads to massive failures and if rerunType is rerunFailedTestCasesMaxLimit. <br/>Default value: `5`|
|`rerunMaxAttempts`<br/>Maximum # of attempts|(Optional) Specify the maximum # of times a failed test should be retried. If a test passes before the maximum # of attempts is reached, it will not be rerun further. <br/>Default value: `3`|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

### How can I run tests that use TestCase as a data source?

To run automated tests that use TestCase as a data source, the following is needed:

1. You must have Visual Studio 2017.6 or higher on the agent machine. Visual Studio Test Platform Installer task cannot be used to run tests that use TestCase as a data source.

1. Create a [PAT](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) that is authorized for the scope “Work Items (full)”.

1. Add a secure Build or Release variable called Test.TestCaseAccessToken with the value set to the PAT created in the previous step.

### I am running into issues when running data-driven xUnit and NUnit tests with some of the task options. Are there known limitations?

Data-driven tests that use xUnit and NUnit test frameworks have some known limitations and cannot be used with the following task options:

1. Rerun failed tests.

1. Distributing tests on multiple agents and batching options.

1. Test Impact Analysis 

The above limitations are because of how the adapters for these test frameworks discover and report data-driven tests.