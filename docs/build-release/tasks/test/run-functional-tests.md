---
title: VSTS and TFS Build and Test - Run Functional Tests step
ms.assetid: DAA55EF5-A6A2-4962-80A0-7D25E64D1DE2
description: Run Coded UI/Selenium/Functional tests on a set of machines using the Test Agent to integrate cloud-based load tests into your build and release pipelines
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Test: Run Functional Tests

[!INCLUDE [temp](../../_shared/version-tfs-2015-update.md)]

![icon](_img/run-functional-tests-icon.png)
Run Coded UI tests, Selenium tests, and functional tests on a set of machines using the test agent.
Use this task when you want to run tests on remote machines, and you cannot run
tests on the build machine.

## Demands and prerequisites

This task must be preceded by a **Visual Studio Test Agent Deployment** task.

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Machines** | A comma-separated list of machine FQDNs or IP addresses, optionally including the port number. The maximum is 32 machines (or 32 agents). Can be:<br />- The name of an <a href="https://azure.microsoft.com/en-gb/documentation/articles/resource-group-overview/">Azure Resource Group</a>.<br />- A comma-delimited list of machine names. Example: `dbserver.fabrikam.com,dbserver_int.fabrikam.com:5986,192.168.34:5986`<br />- An output variable from a previous task. |
| **Test Drop Location** | Required. The location on the test machine(s) where the test binaries have been copied by a <a href="../deploy/windows-machine-file-copy.md">Windows Machine File Copy</a> or <a href="../deploy/azure-file-copy.md">Azure File Copy</a> task. System environment variables from the test agent machines can be used to specify the drop location. Examples: `c:\tests` and `%systemdrive%\Tests` |
| **Test Selection** | Required. Whether the tests are to be selected from test assemblies or from a test plan. |
| **Test Assembly** | Required when **Test Selection** is set to **Test Assembly**. The test assemblies from which the tests should be executed. Paths are relative to the sources directory.<br />- Separate multiple paths with a semicolon.<br />- Default is `**\*test*.dll`<br />- For JavaScript tests, enter the path and name of the **.js** files containing the tests.<br />- Wildcards can be used. Example: `**\commontests\*test*.dll; **\frontendtests\*test*.dll` |
| **Test Filter criteria** | Optional when **Test Selection** is set to **Test Assembly**. A filter to specify the tests to execute within the test assembly files. Works the same way as the `/TestCaseFilter` option of <a href="https://msdn.microsoft.com/en-us/library/jj155796.aspx">vstest.console.exe</a>. Example: **Priority=1 \| Name=MyTestMethod** |
| **Test Plan** | Required if **Test Suite** is not specified when **Test Selection** is set to **Test Plan**. Select a test plan already configured for this account. |
| **Test Suite** | Required if **Test Plan** is not specified when **Test Selection** is set to **Test Plan**. Select a test suite from the selected test plan. |
| **Test Configuration** | Optional when **Test Selection** is set to **Test Plan**. Select a test configuration from the selected test plan. |
| **Run Settings File** | Optional. The path to a `.runsettings` or `.testsettings` file on the build machine. Can be the path to a file in the repository or a file on disk. Use `$(Build.SourcesDirectory)` to specify the project root folder. |
| **Override Test Run Parameters** | Optional. A string containing parameter overrides for parameters defined in the `TestRunParameters` section of the `.runsettings` file. Example: `Platform=$(platform);Port=8080` |
| **Code Coverage Enabled** | When set, the task will collect code coverage information during the run and upload the results to the server. Supported for .NET and C++ projects only. |
| **Distribute tests by number of machines** | When checked, distributes tests based on the number of machines, instead of distributing tests at the assembly level, irrespective of the container assemblies passed to the task. |
| **Test Run Title** | Optional. A name for this test run, used to identify it for reporting and in comparison with other test runs. |
| **Platform** | Optional. The build platform against which the test run should be reported. Used only for reporting.<br />- If you are using the **Build - Visual Studio** template, this is automatically defined, such as `x64` or `x86`<br />- If you have defined a variable for platform in your build task, use that here. |
| **Configuration** | Optional. The build configuration against which the test run should be reported. Used only for reporting.<br />- If you are using the **Build - Visual Studio** template, this is automatically defined, such as `Debug` or `Release`<br />- If you have defined a variable for configuration in your build task, use that here. |
| **Test Configurations** | Optional. A string that contains the filter(s) to report the configuration on which the test case was run. Used only for reporting with Microsoft Test Manager (MTM). <br />- Syntax: {expression for test method name(s)} **:** {configuration ID from MTM}<br />- Example: `FullyQualifiedName~Chrome:12` to report all test methods that have **Chrome** in the **Fully Qualified Name** and map them to configuration ID **12** defined in MTM.<br />- Use ```DefaultTestConfiguration:{Id}``` as a catch-all. |
| **Application Under Test Machines** | A list of the machines on which the Application Under Test (AUT) is deployed, or on which a specific process such as W3WP.exe is running. Used to collect code coverage data from these machines. Use this in conjunction with the **Code Coverage Enabled** setting. The list can be a comma-delimited list of machine names or an output variable from an earlier task. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

> The task supports a maximum of 32 machines/agents.

## Scenarios

Typical scenarios include:

* Tests that require additional installations on the test machines, such as different browsers for Selenium tests
* Coded UI tests
* Tests that require a specific operating system configuration
* To execute a large number of unit tests more quickly by using multiple test machines

Use this task to:

* Run automated tests against on-premises standard environments
* Run automated tests against existing Azure environments
* Run automated tests against newly provisioned azure environments

You can run unit tests, integration tests, functional tests -
in fact any test that you can execute using the Visual Studio
test runner ([vstest](https://msdn.microsoft.com/en-us/library/jj155800.aspx)).

Using multiple machines in a Machine Group enables
the task to run parallel distributed execution of tests.
Parallelism is at the test assembly level, not at individual
test level.

These scenarios are supported for:

* **TFS on-premises and VSTS**

* **Build agents**
  - [Hosted](../../concepts/agents/hosted.md) and [on-premises](../../concepts/agents/agents.md) agents.
  - The build agent must be able to communicate with all test machines. If the test machines
    are on-premises behind a firewall, the hosted build agents cannot be used.
  - The build agent must have access to the Internet to download test agents. If this
    is not the case, the test agent must be manually downloaded and deployed to a network
    location that is accessible by the build agent, and a **Visual Studio Test Agent Deployment**
    task used with an appropriate path for the **Test Agent Location** parameter.
    Automatic checking for new test agent versions is not supported in this topology.

* **CI/CD workflow**
  - The BDT tasks are supported in both build and release management definitions.

* **Machine group configuration**
  - Only Windows machines are supported when using BDT tasks inside a Machine Group. Using
    Linux, macOS, or other platforms inside a Machine Group with BDT tasks is not supported.
  - Installing any version or release of Visual Studio on any of the test machines is not supported.
  - Installing an older version of the test agent on any of the test machines is not supported.

* **Test machine topologies**
  - Azure-based test machines are fully supported, both existing test machines and newly provisioned machines.
  - Domain-joined test machines are supported.
  - Workgroup-joined test machines must have HTTPS authentication enabled and configured during creation of the Machine Group.
  - Test agent machines must have network access to the Team Foundation Server instance. Test machines isolated on the network are not supported.

* **Usage Error Conditions**
  - Running tests across different Machine Groups, and running builds
    (with any BDT tasks) in parallel against these Machine Groups is not supported.
  - Cancelling an in-progress build or release with BDT tasks is not
    supported. If you do so, subsequent builds may not behave as expected.
  - Cancelling an in-progress test run queued through BDT tasks is not supported.
  - Configuring a test agent and running tests under a non-administrative
    account or under a service account is not supported.

## More information

* [Using the Visual Studio Agent Deployment task on machines not connected to the internet](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/05/using-visual-studio-agent-deployment-task-on-machines-not-connected-to-the-internet/)
* [Set up environments to run continuous test tasks with your builds](../../test/set-up-continuous-test-environments-builds.md)
* [Testing in Continuous Integration and Continuous Deployment Workflows](https://blogs.msdn.microsoft.com/visualstudioalm/2015/05/29/testing-in-continuous-integration-and-continuous-deployment-workflows/)

## Related tasks

* [Deploy Azure Resource Group](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureResourceGroupDeployment)
* [Azure File Copy](https://github.com/Microsoft/vso-agent-tasks/tree/master/Tasks/AzureFileCopy)
* [Windows Machine File Copy](../deploy/windows-machine-file-copy.md)
* [PowerShell on Target Machines](../deploy/powershell-on-target-machines.md)
* [Visual Studio Test Agent Deployment](visual-studio-test-agent-deployment.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-test-azurerg-machine-group](../_shared/qa-test-azurerg-machine-group.md)]

[!INCLUDE [qa-test-run-settings-file](../_shared/qa-test-run-settings-file.md)]

[!INCLUDE [qa-test-customize-code-coverage](../_shared/qa-test-customize-code-coverage.md)]

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
