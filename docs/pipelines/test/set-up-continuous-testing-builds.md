---
title: Set up continuous testing for your builds - test automation tools
description: Set up continuous testing for your builds in Microsoft VSTS and Team Foundation Server (TFS) with a build or release definition 
ms.assetid: 7849EF41-BE1A-4342-B1DA-583DB6DD1831
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual 
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Set up continuous testing for your builds

[!INCLUDE [version-header-ts-tfs](_shared/version-header-ts-tfs.md)]

Find problems early after changes are checked in and built by running continuous tests using Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) and test automation.

**NOTE**: You can use version 2.x or higher of the [Visual Studio Test](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTestV2/README.md) task to deploy and run
unit and functional tests without requiring the **Deploy Test Agent** and **Run Functional Tests** tasks,
and run tests on platforms that don't have Visual Studio installed by using the 
[Visual Studio Test Platform](https://blogs.msdn.microsoft.com/devops/2016/07/25/evolving-the-visual-studio-test-platform-part-1/). 

For more details, see [Testing with unified agents and phases](test-with-unified-agent-and-phases.md).

## Before you start

* [Create a build definition](../../pipelines/overview.md) that builds your solution after each check-in, using continuous integration.

* [Set up environments](set-up-continuous-test-environments-builds.md) to run your app and tests remotely in a distributed environment after each build.

## Set up app deployment for your build

1. In VSTS or TFS, go to your project.

1. Go to your build definition and open it for editing.

   ![Edit build definition](_img/edit-build-definition.png)
   
1. Choose the **+** icon for the process phase and add tasks to deploy your app for testing. For example, if you're testing a Visual Studio solution
   and want to use the **Window Machine File Copy** and **PowerShell on Target Machines** tasks:

   ![Add File Copy and PowerShell tasks](_img/set-up-continuous-testing-builds/add-file-copy-powershell-steps.png)

1. Add the details to copy your app from its drop location to its test environment:

   * Source folder for your app

   * List of machines where you want to deploy your app

   * Credentials to connect to the target machines

   * Target folder where to put your app

   ![Build definition, copy app details](_img/set-up-continuous-testing-builds/copy-app-test-environment.png)

   > If you use the list of machines in more than one task, consider defining
   a variable that contains the list of machines. For example, a
   [build or release definition variable](../../pipelines/release/variables.md)
   or a variable defined within a project-wide 
   [variable group](../../pipelines/library/variable-groups.md).
   Using a variable means that you can change the list of machines in one place
   and have the change apply to all the tasks that use the variable.

1. Add the details to deploy your app using PowerShell.

   * List of machines where you want to deploy your app

   * Credentials to connect to the target machines  

   * Path to the PowerShell script used to deploy your app

   ![Add task to deploy app with PowerShell](_img/set-up-continuous-testing-builds/run-powershell-details.png)

1. Save your build definition.

   ![Build definition: save](_img/set-up-continuous-testing-builds/save-build-definition.png)

## Set up test deployment for your build

**NOTE**: You can use version 2.x of the [Visual Studio Test](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTestV2/README.md) task to deploy and run
unit and functional tests without requiring the **Deploy Test Agent** and **Run Functional Tests** tasks,
and run tests on platforms that don't have Visual Studio installed by using the 
[Visual Studio Test Platform](https://blogs.msdn.microsoft.com/devops/2016/07/25/evolving-the-visual-studio-test-platform-part-1/). 

If you want to use the **Deploy Test Agent** and **Run Functional Tests** tasks:

1. In your build definition, add a **Window Machine File Copy** task with these details to deploy your tests:

   * Source folder for your tests

   * List of machines where you want to run your tests

   * Credentials to connect to the target machines  

   * Target folder where to put your tests

   ![Build definition, copy tests](_img/set-up-continuous-testing-builds/copy-tests.png)

1. Add a task with these details to deploy the test agent for running your tests:

   * List of machines where you want to deploy the test agent

   * Credentials to connect to the target machines  

   * Credentials for the deployment agents, so the test agent can run in your test environment

   ![Build definition: deploy test agent details](_img/set-up-continuous-testing-builds/deploy-test-agent.png)

1. Save your build definition.

   ![Build definition: save](_img/set-up-continuous-testing-builds/save-build-definition.png)

## Set up your tests to run with your build

1. In your build definition, add a task with these details to run your tests with the test agent:

   * List of machines where you want to run your tests

   * Folder where you put your tests

   ![Build definition: Run tests with test agent](_img/set-up-continuous-testing-builds/run-tests-with-test-agent.png)

1. Save your build definition and queue a build to check your test run.

   ![Build definition: queue build](_img/queue-build.png)

1. After your build is done, [review your test results](review-continuous-test-results-after-build.md).

## See also

* [Visual Studio Test task](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTestV2/README.md)
* [Visual Studio Test Platform](https://blogs.msdn.microsoft.com/devops/2016/07/25/evolving-the-visual-studio-test-platform-part-1/)
* [Set up environments for continuous testing with your builds](set-up-continuous-test-environments-builds.md)
* [Review continuous test results after a build](review-continuous-test-results-after-build.md)
* [Run tests with your builds](getting-started-with-continuous-testing.md)
* [End-to-end example of continuous testing](example-continuous-testing.md)
* [Speed up testing with Test Impact Analysis](test-impact-analysis.md)
* [Run tests in parallel](run-tests-in-parallel.md)

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
