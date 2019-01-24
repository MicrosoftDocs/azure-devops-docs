---
title: Visual Studio Test Agent Deployment task
description: Deploy and configure the Test Agent to run tests on a set of machines to integrate cloud-based load tests into your build and release pipelines
ms.assetid: 9A2D83B7-305A-4A67-ABA9-2B028A573EA0
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Visual Studio Test Agent Deployment task

[!INCLUDE [version-tfs-2015-rtm](../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

::: moniker range=">= tfs-2018"

This task is deprecated in Azure Pipelines and TFS 2018 and later. Use version 2.x or higher of the [Visual Studio Test](vstest.md)
task together with [jobs](../../process/phases.md) to run unit and functional tests on the universal agent.
For more details, see [Testing with unified agents and jobs](../../test/test-with-unified-agent-and-phases.md).

::: moniker-end

## TFS 2017 and earlier

Use this task in a build or release pipeline to deploy and configure the test agent to run tests on a set of machines.
The test agent deployed by this task can collect data or run distributed tests using the [Visual Studio Test](vstest.md) task.

### Demands and prerequisites

This task requires the target computer to have:

* Windows 7 Service Pack 1 or Windows 2008 R2 Service Pack 2 or higher
* .NET 4.5 or higher
* PSRemoting enabled by running the [Enable-PSRemoting](https://technet.microsoft.com/library/hh849694.aspx) PowerShell script

#### Windows Remote Management (WinRM)

[!INCLUDE[deploy-winrm-setup](../_shared/deploy-winrm-setup.md)]

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DeployVisualStudioTestAgentV2.md)]
::: moniker-end

### Arguments

| Argument | Description |
| -------- | ----------- |
| **Machines** | A comma-separated list of machine FQDNs or IP addresses, optionally including the port number. The maximum is 32 machines (or 32 agents). Can be:<br />- The name of an <a href="https://azure.microsoft.com/documentation/articles/resource-group-overview/">Azure Resource Group</a>.<br />- A comma-delimited list of machine names. Example: `dbserver.fabrikam.com,dbserver_int.fabrikam.com:5986,192.168.34:5986`<br />- An output variable from a previous task. |
| **Admin Login** | The username of either a domain or a local administrative account on the target host(s). This parameter is required when used with a list of machines. It is optional when specifying a machine group and, if specified, overrides the credential settings defined for the machine group.<br />- Formats such as **username**, **domain\username**, **machine-name\username**, and **.\username** are supported.<br />- UPN formats such as **username@domain.com** and built-in system accounts such as **NT Authority\System** are not supported. |
| **Password** | The password for the administrative account specified above. This parameter is required when used with a list of machines. It is optional when specifying a machine group and, if specified, overrides the credential settings defined for the machine group. Consider using a secret variable global to the build or release pipeline to hide the password. Example: `$(passwordVariable)` |
| **Protocol** | The protocol that will be used to connect to the target host, either **HTTP** or **HTTPS**. |
| **Agent Configuration - Username** | Required. The username that the test agent will use. Must be an account on the test machines that has administrative permissions.<br />- Formats such as **username**, **domain\username**, **machine-name\username**, and **.\username** are supported.<br />- UPN formats such as **username@domain.com** and built-in system accounts such as **NT Authority\System** are not supported. |
| **Agent Configuration - Password** | Required. The password for the **Username** for the test agent. To protect the password, create a [variable](../../build/variables.md) and use the "padlock" icon to hide it. |
| **Agent Configuration - Run UI tests** | When set, the test agent will run as an interactive process. This is required when interacting with UI elements or starting applications during the tests. For example, Coded UI or Selenium tests that are running on full fidelity browsers will require this option to be set. |
| **Agent Configuration - Enable data collection only** | When set, the test agent will return previously collected data and not re-run the tests. At present this is only available for Code Coverage. Also see Q&A section below. |
| **Advanced - Test agent version** | The version of the test agent to use. |
| **Advanced - Test agent location** | Optional. The path to the test agent (<a href="http://go.microsoft.com/fwlink/?LinkId=536423">vstf_testagent.exe</a>) if different from the default path.<br />- If you use a copy of the test agent located on your local computer or network, specify the path to that instance.<br />- The location must be accessible by either the build agent (using the identity it is running under) or the test agent (using the identity configured above).<br />- For Azure test machines, the web location can be used. |
| **Advanced - Update test agent** | If set, and the test agent is already installed on the test machines, the task will check if a new version of the test agent is available. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

> The task supports a maximum of 32 machines/agents.

### Supported scenarios

Use this task for:

* Running automated tests against on-premises standard environments 
* Running automated tests against existing Azure environments
* Running automated tests against newly provisioned Azure environments

The supported options for these scenarios are:

* **TFS**
  - On-premises and Azure Pipelines<p />
* **Build and release agents**
  - Hosted and on-premises agents are supported.
  - The agent must be able to communicate with all test machines.
    If the test machines are on-premises behind a firewall, an Azure Pipelines Microsoft-hosted agent
    cannot be used because it will not be able to communicate with the test machines.
  - The agent must have Internet access to download test agents.
    If this is not the case, the test agent must be manually 
    downloaded, uploaded to a network location accessible to
    the agent, and the **Test Agent Location** parameter used 
    to specify the location. The user must manually check for 
    new versions of the agent and update the test machines.<p /> 
* **Continuous integration/continuous deployment workflows**
  - Build/deploy/test tasks are supported in both build and 
    release workflows.<p /> 
* **Machine group configuration**
  - Only Windows-based machines are supported inside a 
    machine group for build/deploy/test tasks. Linux, macOS, or 
    other platforms are not supported inside a machine group.
  - Installing any version of Visual Studio on any of the 
    test machines is not supported.
  - Installing any older version of the test agent on any of the 
    test machines is not supported.<p /> 
* **Test machine topologies**
  - Azure-based test machines are fully supported, both 
    existing test machines and newly provisioned test machines.
  - Machines with the test agent installed must have network access 
    to the TFS instance in use. Network-isolated test machines 
    are not supported.
  - Domain-joined test machines are supported.
  - Workgroup-joined test machines must use HTTPS authentication 
    configured during machine group creation.<p />
* **Usage Error Conditions**
  - Using the same test machines across different machine groups, 
    and running builds (with any build/deploy/test tasks) in 
    parallel against those machine groups is not supported.
  - Cancelling an in-progress build or release that contains
    any build/deploy/test tasks is not supported. If you do 
    cancel, behavior of subsequent builds may be unpredictable.
  - Cancelling an ongoing test run queued through build/deploy/test 
    tasks is not supported.
  - Configuring the test agent and running tests as a 
    non-administrator, or by using a service account, is not supported.
  - Running tests for Universal Windows Platform apps is not 
    supported. Use the [Visual Studio Test task](vstest.md) 
    to run these tests.

### Example

* [Testing in Continuous Integration and Continuous Deployment Workflows](http://blogs.msdn.com/b/visualstudioalm/archive/2015/06/28/10618066.aspx)

### More information

* [Using the Visual Studio Agent Deployment task on machines not connected to the internet](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/05/using-visual-studio-agent-deployment-task-on-machines-not-connected-to-the-internet/)
* [Set up automated testing for your builds](https://msdn.microsoft.com/Library/vs/alm/Test/automated-tests/set-up-automated-testing-builds)
* [Source code for this task](https://github.com/Microsoft/vso-agent-tasks/blob/master/Tasks/DeployVisualStudioTestAgentV2/README.md)

### Related tasks

* [Visual Studio Test](vstest.md)
* [Azure File Copy](../deploy/azure-file-copy.md)
* [Windows Machine File Copy](../deploy/windows-machine-file-copy.md)
* [PowerShell on Target Machines](../deploy/powershell-on-target-machines.md)

### Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

#### When would I use the Enable Data Collection Only option?

An example would be in a client-server application 
model, where you deploy the test agent on the servers
and use another task to deploy the test agent
to test machines. This enables you to collect data 
from both server and client machines without 
triggering the execution of tests on the server 
machines.

[!INCLUDE [qa-test-azurerg-machine-group](../_shared/qa-test-azurerg-machine-group.md)]

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [test-help-support-shared](../../_shared/test-help-support-shared.md)]
