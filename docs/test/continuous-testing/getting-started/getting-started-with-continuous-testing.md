---
title: Get started with continuous testing - Run tests with your builds - Visual Studio Team Services
description: Get started with continuous testing. Run tests with your builds for continuous integration 
ms.prod: vs-devops-alm
ms.technology: vs-devops-test-continuous
ms.assetid: a4a33a7d-fb75-46e0-b74d-91623ae5187e
ms.topic: get-started-article
ms.manager: douge
ms.author: ahomer
ms.date: 07/03/2017
---

# Get started with continuous testing

**Team Services | TFS 2017 | TFS 2015 | [Previous version](https://msdn.microsoft.com/library/ee702477%28v=vs.120%29.aspx)**  

Make sure that your app still works after every 
check-in and build using Visual Studio Team Services. 
Find problems earlier by running tests 
automatically with each build. When your build is 
done, review your test results to start resolving 
the problems that you find.

In this example, you'll learn how to:

* [Prepare your environment](#beforestart)
* [Create a build definition](#createbuild)
* [Start the build](#startbuild)
* [Review the results](#reviewesults)

<a name="beforestart"></a>
## Before you start

This overview shows how to get started by running 
unit tests with your build. 

1. [Check in your solution](../../../tfvc/overview.md) 
   to Visual Studio Team Services. Include your test projects.

1. [Create a build definition](../../../build-release/overview.md) 
   that builds your solution after each check-in, 
   using continuous integration.

When you're ready to 
[run other continuous tests](#runothertests), such as 
system tests, under more realistic conditions, 
create environments from physical or virtual 
machines that you've already set up. Then set up 
your build to run your app and tests in the 
environments that you created.

>You can create and use a test lab instead of using Team Services or Team Foundation Server. For more information, see
[Use a lab environment for your devops](https://docs.microsoft.com/visualstudio/test/lab-management/using-a-lab-environment-for-your-application-lifecycle)

<a name="createbuild"></a>
## Create a build definition

Your build definition must include a test task that runs unit tests. 
For example, if you're building a Visual Studio solution in Team Services,
your build definition should include a **Visual Studio Test** task. After your 
build starts, this task automatically runs all the unit tests in your 
solution - on the same build machine. 

1. If your build definition does not contain a test task, add one to it.

   ![Add a VS Test task](_img/getting-started-with-continuous-testing/add-test-task.png)

1. Edit the Visual Studio Test task. You can add filter criteria to run specific tests, enable code coverage, 
   run tests from [other unit test frameworks](../reference-qa.md), and so on.
   For information about the option settings of the Visual Studio Test task, see
   [Run Tests using Visual Studio task](https://github.com/Microsoft/vsts-tasks/blob/master/Tasks/VsTest/README.md).

   ![Build definition: customize unit test run](_img/getting-started-with-continuous-testing/edit-unit-test-task.png)

   > The Visual Studio Test task version 2 supports Test Impact Analysis (TIA). See [these blog posts](https://blogs.msdn.microsoft.com/visualstudioalm/tag/tia/).

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
## Next steps

* [Review your test results](review-continuous-test-results-after-build.md) 
* [Testing with unified agents and phases](../test-with-unified-agent-and-phases.md)

## See also

* [Q &amp; A for continuous testing](../reference-qa.md)
* [End-to-end example of continuous testing](../example-continuous-testing.md)
* [Run Selenium tests](continuous-test-selenium.md)
* [Test Java applications](continuous-test-java.md)

Also see the blog posts and videos listed in the **References** section.

[!INCLUDE [help-and-support-footer](../../_shared/help-and-support-footer.md)] 
