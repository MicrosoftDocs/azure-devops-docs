---
title: About pipeline tests
description: Understand terms used in test report and test analytics
ms.assetid: 7C6E8651-FD90-40EB-8E0F-1AE48360B5DB
ms.topic: conceptual
ms.custom: "continuous-test, seodec18"
ms.author: vinojos
author: vinodjo
ms.date: 12/07/2018
monikerRange: '<= azure-devops'
---

# About pipeline tests

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes commonly used terms used in pipeline [test report](review-continuous-test-results-after-build.md) and [test analytics](test-analytics.md).

::: moniker range="tfs-2018"

[!INCLUDE [temp](../includes/concept-rename-note.md)]

::: moniker-end

| Term | Definition |
| ---- | ---------- |
| **Duration** | Time elapsed in execution of a **test**, **test run**, or **entire test execution** in a build or release pipeline. |
| **Owner** | Owner of a **test** or **test run**. The test owner is typically specified as an attribute in the test code. See [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task to view the mapping of the **Owner** attribute for supported test result formats. |
| **Failing build** | Reference to the **build** having the first occurrence of consecutive failures of a test case. |
| **Failing release** | Reference to the **release** having the first occurrence of consecutive failures of a test case. |
| **Outcome** | There are 15 possible outcomes for a test result: Aborted, Blocked, Error, Failed, Inconclusive, In progress, None, Not applicable, Not executed, Not impacted, Passed, Paused, Timeout, Unspecified, and Warning.<br />Some of the commonly used outcomes are:<br />- **Aborted**: Test execution terminated abruptly due to internal or external factors, e.g., bad code, environment issues.<br />- **Failed**: Test not meeting the desired outcome.<br />- **Inconclusive**: Test without a definitive outcome.<br />- **Not executed**: Test marked as skipped for execution.<br />- **Not impacted**: Test not impacted by the code change that triggered the pipeline.<br />- **Passed**: Test executed successfully.<br /> - **Timeout**: Test execution duration exceeding the specified threshold. |
| **Flaky test** | A test with non-deterministic behavior. For example, the test may result in different outcomes for the same configuration, code, or inputs. |
| **Filter** | Mechanism to search for the test results within the result set, using the available attributes. [Learn more](review-continuous-test-results-after-build.md). |
| **Grouping** | An aid to organizing the test results view based on available attributes such as **Requirement**, **Test files**, **Priority**, and more. Both [test report](review-continuous-test-results-after-build.md) and [test analytics](test-analytics.md) provide support for grouping test results. |
| **Pass percentage** | Measure of the success of test outcome for a single instance of execution or over a period of time. |
| **Priority** | Specifies the degree of importance or criticality of a test. Priority is typically specified as an attribute in the test code. See [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task to view the mapping of the **Priority** attribute for supported test result formats.|
| **Test analytics** | A [view of the historical test data](test-analytics.md) to provide meaningful insights. |
| **Test case** | Uniquely identifies a single test within the specified branch. |
| **Test files** | Group tests based on the way they are packaged; such as files, DLLs, or other formats. |
| **Test report** | A [view of single instance of test execution](review-continuous-test-results-after-build.md) in the pipeline that contains details of status and help for troubleshooting, traceability, and more. |
| **Test result** | Single instance of execution of a test case with a specific outcome and details. |
| **Test run** | Logical grouping of test results based on:<br />- **Test executed using built-in tasks**: All tests executed using a single task such as [Visual Studio Test](/azure/devops/pipelines/tasks/reference/vstest-v2), [Ant](/azure/devops/pipelines/tasks/reference/ant-v1), [Maven](/azure/devops/pipelines/tasks/reference/maven-v3), [Gulp](/azure/devops/pipelines/tasks/reference/gulp-v1), [Grunt](/azure/devops/pipelines/tasks/reference/grunt-v0) or [Xcode](/azure/devops/pipelines/tasks/reference/xcode-v5) will be reported under a single test run<br />- **Results published using [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task**: Provides an option to group all test results from one or more test results files into a single run, or individual runs per file<br />- **Tests results published using API(s)**: [API(s)](/rest/api/azure/devops/test/runs) provide the flexibility to create test runs and organize test results for each run as required. |
| **Traceability** | Ability to [trace](requirements-traceability.md) forward or backward to a requirement, bug, or source code from a test result. |

[!INCLUDE [help-and-support-footer](includes/help-and-support-footer.md)]