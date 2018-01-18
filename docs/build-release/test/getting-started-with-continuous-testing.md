---
title: Run tests with your builds
description: Get started with continuous testing. Run tests with your builds for continuous integration in VSTS and Team Foundation Server TFS 
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: a4a33a7d-fb75-46e0-b74d-91623ae5187e
ms.topic: get-started-article
ms.manager: douge
ms.author: ahomer
ms.date: 01/18/2018
---

# Run tests with your builds

[!INCLUDE [version-header-vs-vsts-tfs](_shared/version-header-vs-vsts-tfs.md)]

Make sure that your app still works after every 
check-in and build using Visual Studio Team Services (VSTS) or Team Foundation Server (TFS). 
Find problems earlier by running tests 
automatically with each build. When your build is 
done, review your test results to start resolving 
the problems that you find.

This quickstart shows how to run unit tests with your build
for .NET and ASP.NET apps. It uses the
[Visual Studio Test](test-with-unified-agent-and-phases.md) task. 

<a name="beforestart"></a>
## Before you start

* [Check in your solution](../../git/overview.md) 
  to VSTS. Include your test projects.

<a name="createbuild"></a>
## Create a build definition

Your build definition must include a test task that runs unit tests. 
For example, if you're building a Visual Studio solution in VSTS,
your build definition should include a **Visual Studio Test** task. After your 
build starts, this task automatically runs all the unit tests in your 
solution - on the same build machine. 

1. If your build definition does not contain a test task, add one to it.

   ![Add a VS Test task](_img/getting-started-with-continuous-testing/add-test-task.png)

1. Edit the Visual Studio Test task. You can add filter criteria to run specific tests, enable code coverage, 
   run tests from [other unit test frameworks](reference-qa.md), and so on.

   ![Build definition: customize unit test run](_img/getting-started-with-continuous-testing/edit-unit-test-task.png)

   For information about the option settings of the Visual Studio Test task, see:
   
   * [Visual Studio Test version 1](https://github.com/Microsoft/vsts-tasks/blob/releases/m109/Tasks/VsTest/README.md)
   * [Visual Studio Test version 2](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTest/README.md)

   > The Visual Studio Test task version 2 supports Test Impact Analysis (TIA). See [Speed up testing with Test Impact Analysis](test-impact-analysis.md).

1. When you're done, save your build definition.

   ![Build definition: save](_img/getting-started-with-continuous-testing/save-build-def.png)

<a name="startbuild"></a>
## Start the build

1. Start the build by adding it to the build queue.

   ![Build definition: queue build](_img/getting-started-with-continuous-testing/start-build.png) 

1. After the build finishes, you can review the test results to resolve any problems that happened. Go to the build to open the build summary.

   ![Go to Build hub, build definition, build summary](_img/getting-started-with-continuous-testing/open-summary.png)

<a name="reviewesults"></a>
## Review the results

1. Open the test run results summary and compare your test results
   between this build and the last build. Here you'll find changes in new, failed, and passed tests, 
   how long these tests took to run, how long these tests have been failing, and more.
   Organize your test results and open bugs directly for failed tests.

   ![Compare test result summaries between builds](_img/getting-started-with-continuous-testing/build-summary-test-result-metrics.png)

1. To start debugging a failed test, open the test and review the resulting error and stack trace.

   ![Error and stack trace for a failed test](_img/getting-started-with-continuous-testing/build-error-message.png)
 
<a name="runothertests"></a>
## Next step

> [!div class="nextstepaction"]
> [Review your test results](review-continuous-test-results-after-build.md) 
