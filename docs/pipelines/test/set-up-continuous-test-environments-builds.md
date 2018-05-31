---
title: Set up environments to run continuous tests with your builds
description: Set up environments to run continuous test tasks with your build tasks with a build or release definition VSTS and TFS 
ms.assetid: FFD51F1E-C3B7-4FAC-B25D-95ADD6C1A1A0
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Set up environments to run continuous test tasks with your build tasks

[!INCLUDE [version-header-ts-tfs](_shared/version-header-ts-tfs.md)]

To test your app using different platforms and configurations,
set up separate environments to run your app and tests with your
builds in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS).

## Set up machines to run your app and tests

You'll need to set up physical or virtual machines to run your app and tests, for example:

* Windows Server 2012 R2 or higher with IIS to run your app

* Machines with the necessary browsers to run your tests

With VSTS, you can define environments that have physical and virtual machines, such as Azure VMs and Azure resource groups.
With TFS, you can define environments using only physical machines.
Alternatively, you can [create a virtual network isolated environment for your build-deploy-test scenarios](../targets/create-virtual-network.md.

If you want to use a PowerShell script to deploy your app, make sure to:

* Include that script in your solution or project.

* Enable PowerShell Remote on all your machines.

You'll need to install the agent that runs your tests on the machines. For more details, see
[Deploy a Windows build agent](../../pipelines/agents/v2-windows.md).
You might decide to [create Azure VMs](https://docs.microsoft.com/azure/virtual-machines/windows/quick-create-portal)
to install your agents.

## Define a list of machines to run your app and tests

> [!NOTE]
> Previous versions of VSTS and TFS included the capability to define
> **Machine Groups**. However, this feature is no longer available.

As an alternative, consider:

* If you use version 2.x or higher of the [Visual Studio Test](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTestV2/README.md)
  task you can deploy and run unit and functional tests without requiring the **Deploy Test Agent** and **Run Functional Tests** tasks,
  and run tests on platforms that don't have Visual Studio installed by using the 
  [Visual Studio Test Platform](https://blogs.msdn.microsoft.com/devops/2016/07/25/evolving-the-visual-studio-test-platform-part-1/). 
  In this case, you can use [deployment groups](../release/deployment-groups/index.md)
  to define your target machines. For more details, see
  [Testing with unified agents and phases](test-with-unified-agent-and-phases.md).

* A **comma-delimited list** of machine IP addresses or 
  fully-qualified domain names (FQDNs), together with any port information,
  in all your build or release definitions. For example: 

  `dbserver.fabrikam.com,dbserver_int.fabrikam.com:5986,192.168.12.34:5986`
 
* A variable that contains the list of machines. For example, a
  [build or release definition variable](../../pipelines/release/variables.md)
  or a variable defined within a project-wide 
  [variable group](../../pipelines/library/variable-groups.md). For example, you could define the variable
  named **MyMachines** with the value shown above, then include it in
  your tasks using:

  `$(MyMachines)`

  Using a variable means that you can change the list of machines in one place
  and have the change apply to all the tasks that use the variable.

  >If you don't specify a port number, the default (based on the selected protocol)
  will be used. If you are using HTTPS, the IP address or name of the machine should
  match the CN entry in the certificate. Note that you can set the **Test
  Certificate** option in some build, test, and deploy tasks to omit certificate checks.

## See also

* [Testing with unified agents and phases](test-with-unified-agent-and-phases.md).
* [Create a virtual network isolated environment for build-deploy-test scenarios](../targets/create-virtual-network.md
* [Run tests with your builds](getting-started-with-continuous-testing.md)
* [Review continuous test results after a build](review-continuous-test-results-after-build.md)

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
