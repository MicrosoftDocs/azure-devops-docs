---
title: Run unit tests with your builds in Azure Pipelines and TFS
description: Get started with continuous testing. Run unit tests with your builds for continuous integration in Azure Pipelines and Team Foundation Server TFS 
ms.assetid: a4a33a7d-fb75-46e0-b74d-91623ae5187e
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.custom: continuous-test
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Run unit tests with your builds

[!INCLUDE [version-header-vs-vsts-tfs](_shared/version-header-vs-vsts-tfs.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Make sure that your app still works after every
check-in and build using Azure Pipelines or Team Foundation Server (TFS) by using test automation.
Find problems earlier by running tests 
automatically with each build. When your build is 
done, review your test results to start resolving 
the problems that you find.

This example shows how to run unit tests with your build
for .NET and ASP.NET apps. It uses the
[Visual Studio Test](test-with-unified-agent-and-phases.md) task.

> Typically you will run unit tests in your build workflow,
and functional tests in your release workflow after your
app is deployed (usually to a QA environment).
Code coverage is available only in the build workflow.

<a name="beforestart"></a>
## Before you start

* [Check in your solution](../../repos/git/overview.md) 
  to Azure Pipelines. Include your test projects.

<a name="createbuild"></a>
## Create a build pipeline

Your build pipeline must include a test task that runs unit tests.
For example, if you're building a Visual Studio solution in Azure Pipelines,
your build pipeline should include a **Visual Studio Test** task. After your 
build starts, this task automatically runs all the unit tests in your 
solution - on the same build machine.

1. If your build pipeline does not contain a test task, add one to it.

   ![Add a VS Test task](_img/getting-started-with-continuous-testing/add-test-task.png)

1. Edit the Visual Studio Test task. You can add filter criteria to run specific tests, enable code coverage, 
   run tests from [other unit test frameworks](reference-qa.md), and so on.

   ![Build pipeline: customize unit test run](_img/getting-started-with-continuous-testing/edit-unit-test-task.png)

   The Visual Studio Test task version 2 supports [Test Impact Analysis](test-impact-analysis.md).
   For information about all the task settings, see [Visual Studio Test task](../tasks/test/vstest.md).

   [How do I pass parameters to my test code from a build pipeline?](reference-qa.md#pass-params)

1. If you also want to test code coverage, set the **Code coverage enabled** checkbox in the
   **Execution options** section.

   ![Enable code coverage testing](_img/getting-started-with-continuous-testing/enable-code-coverage.png)

   When tests are run with this option, code coverage information is collected dynamically and assemblies
   do not need to be instrumented. By default, all assemblies are profiled for collecting coverage information. If you need to
   [exclude specific assemblies and customize code coverage](/visualstudio/test/customizing-code-coverage-analysis),
   use a [.runsettings file](/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file).

   [How do I collect and publish code coverage data if I'm not using the Visual Studio Test task?](reference-qa.md#code-coverage)

1. When you're done, save your build pipeline.

   ![Build pipeline: save](_img/getting-started-with-continuous-testing/save-build-def.png)

<a name="startbuild"></a>
## Start the build

1. Start the build by adding it to the build queue.

   ![Build pipeline: queue build](_img/getting-started-with-continuous-testing/start-build.png) 

1. After the build finishes, you can review the test results to resolve any problems that happened.
   Go to the build summary and open the **Tests** page.

   ![Go to build pipeline, build summary](_img/getting-started-with-continuous-testing/open-summary.png)

<a name="reviewesults"></a><a name="runothertests"></a>

## Next step

> [!div class="nextstepaction"]
> [Review your test results](review-continuous-test-results-after-build.md) 
