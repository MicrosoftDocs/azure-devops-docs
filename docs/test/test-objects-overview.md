---
title: Test objects and terms
titleSuffix: Azure Test Plans
description: Understand the different test objects and terms that support manual or automated testing.
ms.technology: devops-test
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2015'
ms.date: 09/14/2021
---


# Test objects and terms

A number of test-specific objects and terms are used when working within Azure Test Plans. 


<a name="testplans"></a>

## Test-specific work item types 

You add and group three main types of test management work item types: test plans, test suites, and test cases. To support sharing of various test steps and test parameters, you define shared steps and shared parameters. These objects are stored in the work data store as specific types of work items. You can export and share these work items in a similar manner as you do with work items. 


![Test management work item types](../boards/work-items/guidance/media/ALM_PT_WITS_TestExperience.png)

The following table describes the work item types used to support the Azure DevOps test experience. Test-specific work items link together using the link types shown in the previous image.  



---
:::row:::
   :::column span="1":::
     **Work item type**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
     **Test plans**
   :::column-end:::
   :::column span="3":::
      Are used to group test suites and individual test cases. To define a test plan, see [Create test plans and test suites](create-a-test-plan.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Test suite**
   :::column-end:::
   :::column span="3":::
      Group test cases into separate testing scenarios within a single test plan. Grouping test cases makes it easier to see which scenarios are complete. When creating a test suite, you can specify one of three types: 
      - **Static test suites**: Used to group test cases under a single test suite. 
      - [**Requirement-based suites**](create-a-test-plan.md#backlog): Select one or more requirements from a query which are then linked to the test suite. 
      - [**Query-based suites**](reference-qa.md#query-based-suites): Select one or more requirements which are then linked to the test suite. 
      The [**Test Suite Type**](../boards/queries/build-test-integration.md) read-only field indicates the type of suite selected. To add test suites, see [Create test plans and test suites](create-a-test-plan.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Test cases**
   :::column-end:::
   :::column span="3":::
      Define the steps used to test code or an app for deployment. Define test cases to ensure your code works correctly, has no errors, and meets business and customer requirements. You can add individual test cases to a test plan without creating a test suite. More than one test suite or test plan can refer to a test case. You can effectively reuse test cases without needing to copy or clone them for each suite or plan. There are two types of test cases: 
      - [**Manual**](create-test-cases.md): Test cases that define different steps that you run using Test Runner or other supported client. 
      - [**Automated**](run-automated-tests-from-test-hub): 
      > [!TIP]
      > You can create a test case that automatically links to a requirement&mdash;User Story ([Agile](../boards/work-items/guidance/agile-process.md)), Product Backlog Item ([Scrum](../boards/work-items/guidance/scrum-process.md)), Requirement ([CMMI](../boards/work-items/guidance/cmmi-process.md)), or Issue ([Basic](../boards/get-started/plan-track-work.md))&mdash;when you create a test from the Kanban board. To learn more, see [Add, run, and update inline tests](../boards/boards/add-run-update-tests.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Shared steps**
   :::column-end:::
   :::column span="3":::
      Use to share steps between multiple test cases. For example, log-in and verify steps for signing into an application are steps that can be shared across a number of test cases. To learn how, see [Share steps between test cases](share-steps-between-test-cases.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Shared parameters**
   :::column-end:::
   :::column span="3":::
      Use to specify different parameters for executing test a test step within a test case. To learn how, see [Repeat a test with different data](repeat-test-with-different-data.md). 
   :::column-end:::
:::row-end:::

### Customize test-specific work item types

For the Inherited process, you can customize test plans, test suites, and test cases. For the On-premises XML process, you can customize all test-specific work item types. See [Customize work tracking objects to support your team's processes](../reference/customize-work.md). 

For definitions of each test field, see [Query based on build and test integration fields](../boards/queries/build-test-integration.md).

## Glossary of test terms 

| Term | Definition |
| ---- | ---------- |
| **Duration** | Time elapsed in execution of a **test**, **test run**, or **entire test execution** in a build or release pipeline. |
| **Owner** | Owner of a **test** or **test run**. The test owner is typically specified as an attribute in the test code. See [Publish Test Results](../pipelines/tasks/test/publish-test-results.md) task to view the mapping of the **Owner** attribute for supported test result formats. |
| **Failing build** | Reference to the **build** having the first occurrence of consecutive failures of a test case. |
| **Failing release** | Reference to the **release** having the first occurrence of consecutive failures of a test case. |
| **Outcome** | There are 15 possible outcomes for a test result: Aborted, Blocked, Error, Failed, Inconclusive, In progress, None, Not applicable, Not executed, Not impacted, Passed, Paused, Timeout, Unspecified, and Warning.<br />Some of the commonly used outcomes are:<br />- **Aborted**: Test execution terminated abruptly due to internal or external factors, e.g., bad code, environment issues.<br />- **Failed**: Test not meeting the desired outcome.<br />- **Inconclusive**: Test without a definitive outcome.<br />- **Not executed**: Test marked as skipped for execution.<br />- **Not impacted**: Test not impacted by the code change that triggered the pipeline.<br />- **Passed**: Test executed successfully.<br /> - **Timeout**: Test execution duration exceeding the specified threshold. |
| **Flaky test** | A test with non-deterministic behavior. For example, the test may result in different outcomes for the same configuration, code, or inputs. |
| **Filter** | Mechanism to search for the test results within the result set, using the available attributes. To learn more, see [Review test results](../pipelines/test/review-continuous-test-results-after-build.md). |
| **Grouping** | An aid to organizing the test results view based on available attributes such as **Requirement**, **Test files**, **Priority**, and more. Both [test report](../pipelines/test/review-continuous-test-results-after-build.md) and [test analytics](test-analytics.md) provide support for grouping test results. |
| **Pass percentage** | Measure of the success of test outcome for a single instance of execution or over a period of time. |
| **Priority** | Specifies the degree of importance or criticality of a test. Priority is typically specified as an attribute in the test code. See [Publish Test Results](../tasks/test/publish-test-results.md) task to view the mapping of the **Priority** attribute for supported test result formats.|
| **Test analytics** | A [view of the historical test data](../pipelines/test/test-analytics.md) to provide meaningful insights. |
| **Test case** | Uniquely identifies a single test within the specified branch. |
| **Test files** | Group tests based on the way they are packaged; such as files, DLLs, or other formats. |
| **Test report** | A [view of single instance of test execution](../pipelines/test/review-continuous-test-results-after-build.md) in the pipeline that contains details of status and help for troubleshooting, traceability, and more. |
| **Test result** | Single instance of execution of a test case with a specific outcome and details. |
| **Test run** | Logical grouping of test results based on:<br />- **Test executed using built-in tasks**: All tests executed using a single task such as [Visual Studio Test](../pipelines/tasks/test/vstest.md), [Ant](../pipelines/tasks/build/ant.md), [Maven](../pipelines/tasks/build/maven.md), [Gulp](../pipelines/tasks/build/gulp.md), [Grunt](../pipelines/tasks/build/grunt.md) or [Xcode](../pipelines/tasks/build/xcode.md) will be reported under a single test run<br />- **Results published using [Publish Test Results](../pipelines/tasks/test/publish-test-results.md) task**: Provides an option to group all test results from one or more test results files into a single run, or individual runs per file<br />- **Tests results published using API(s)**: [API(s)](/rest/api/vsts/test/runs) provide the flexibility to create test runs and organize test results for each run as required. |
| **Traceability** | Ability to [trace](../pipelines/test/requirements-traceability.md) forward or backward to a requirement, bug, or source code from a test result. |
| **Test points** | Test cases by themselves are not executable. When you add a test case to a test suite then test point(s) are generated. A test point is a unique combination of test case, test suite, configuration, and tester. For example, if you have a test case named Test login functionality and you add two configurations for the *Edge* and *Chrome* browsers, you have two test points. You can execute or run each of these test points. On execution, test results are generated. Through the test results view, or execution history, you can see all executions of a test point. The latest execution for the test point is what you see in the Execute tab.


## Share work items across your test experience 

For example, you're building version 1.* of your product and you might create several test cases for that version.
Each of these test cases can be updated, and more added, at any time.
For each development cycle and release of your product, you create a test plan and import the existing test cases into that plan.
You can also, if you wish, divide the test cases into separate test suites within the plan to enable easier management and monitoring of these separate sets of test cases.

After you create your test plan, you [assign test configurations](test-different-configurations.md) and [assign testers](create-test-cases.md#assign-testers) to cover the required test matrix.
These testers [run the tests](run-manual-tests.md) and gauge the quality of the product.
Testers continue testing until the product meets exit criteria.
For the next development cycle and release, you can create a new test plan and reuse the same test cases.
You repeat this development-test-release cycle by importing the same test cases into each new test plan.

The great thing is that, because test plans refer to test cases, updates to a test case automatically reflect in all the test plans and test suites that use it.

In the next version of the product, you can reuse the existing test cases.
However, a better option may be to [copy or clone the test cases](reference-qa.md#creating-manual-test-cases). A copy creates a new baseline. Changes to these new test cases don't affect your previous test plans.

> [!TIP]
> For more information about the ways you can work with test plans, test suites, and test cases, see the [FAQs for manual testing](reference-qa.md#testplans).

