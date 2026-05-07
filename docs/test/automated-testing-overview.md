---
title: Set up automated testing with Azure Test Plans
titleSuffix: Azure Test Plans
description: Learn how to set up end-to-end automated testing with Azure Test Plans, from creating tests to running them from pipelines and tracking results.
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/07/2026
ai-usage: ai-assisted
ms.update-cycle: 1095-days
---

# Set up automated testing with Azure Test Plans

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Automated testing in Azure Test Plans connects your automated test code to test case work items, so you can run tests on demand from test plans, track results alongside manual tests, and measure requirement-level quality. This article walks through the complete workflow from writing tests to analyzing results.

## End-to-end workflow

Setting up automated testing involves the following steps:

1. **Create automated tests** — Write tests in a supported framework and check them into source control.
1. **Set up a build pipeline** — Create a pipeline that compiles your test project and produces test binaries.
1. **Associate tests with test cases** — Link each automated test method to a test case work item for traceability.
1. **Run automated tests** — Execute tests on demand from Test Plans or as part of CI/CD pipelines.
1. **Review results and track quality** — Analyze pass/fail results, track requirement coverage, and identify trends.

## Prerequisites

[!INCLUDE [prerequisites](includes/prerequisites.md)]

Additionally:

| Category | Requirements |
|--|--|
| **Pipeline permissions** | To run automated tests from test plans, you need release permissions (**Create releases**, **Manage deployments**, **Edit release stage**). For more information, see [Release permissions](../pipelines/policies/permissions.md#release-pipeline-permissions). |
| **Tools** | Visual Studio 2017 or later (Enterprise or Professional) to associate tests from Visual Studio. Not required if you associate tests from the Azure DevOps web portal. |

## Step 1: Create automated tests

Write automated tests using any supported framework and check the test project into Azure Repos or a connected GitHub repository.

### Supported frameworks

| Framework | Associate in Visual Studio | Associate in Azure DevOps |
|---|---|---|
| MSTest v1/v2 | Yes | Yes |
| NUnit | Yes | Yes |
| xUnit | Yes | Yes |
| Selenium | Yes | Yes |
| Coded UI tests | Yes | Yes |
| Python (PyTest) | No | Yes |
| Java (Maven/Gradle) | No | Yes |

For guidance on writing UI tests that run reliably in CI/CD pipelines, see [UI testing considerations](../pipelines/test/ui-testing-considerations.md). For a step-by-step Selenium example, see [Perform UI tests with Selenium](../pipelines/test/continuous-test-selenium.md).

## Step 2: Set up a build pipeline

Create a build pipeline that compiles your test project and produces artifacts containing the test binaries. Both Classic and YAML pipelines are supported.

1. [Create your first pipeline](../pipelines/create-first-pipeline.md) if you don't have one.
1. Make sure your pipeline builds the test project and publishes the test binaries as build artifacts.
1. Use the [Visual Studio Test task](/azure/devops/pipelines/tasks/reference/vstest-v2) or the [Azure Test Plan task](/azure/devops/pipelines/tasks/reference/azure-test-plan-v0) to run and report tests in your pipeline.
1. If your pipeline runs tests, the results appear automatically on the **Tests** tab of the pipeline run.

To publish test results from non-Microsoft test runners, use the [Publish Test Results task](/azure/devops/pipelines/tasks/reference/publish-test-results-v2).

## Step 3: Associate automated tests with test cases

Associating a test method with a test case work item enables:

- **On-demand execution** from Test Plans
- **Requirements traceability** — when test cases link to user stories, automated results show requirement-level quality
- **Unified reporting** — automated and manual test results appear together in the Test Run Hub

You can associate tests from **Visual Studio** or from the **Azure DevOps web portal**:

- **Visual Studio** — Open **Test Explorer**, select a test method, and choose **Associate to Test Case**. Supports .NET frameworks (MSTest, NUnit, xUnit, Selenium, Coded UI).
- **Azure DevOps portal** — Associate from pipeline test results or directly from a test case work item. Supports all frameworks including Python and Java.

For complete instructions, see [Associate automated tests with test cases](associate-automated-test-with-test-case.md).

> [!IMPORTANT]
> You can associate a test method with multiple test cases, but each test case can only have one associated test method.

## Step 4: Run automated tests

### Run from test plans (on demand)

Trigger automated tests directly from **Azure Test Plans** without setting up scheduled builds. Select specific test cases and run them against a build and release pipeline configured in the test plan settings.

For step-by-step instructions, see [Run automated tests from test plans](run-automated-tests-from-test-hub.md).

### Run from pipelines (CI/CD)

Run automated tests as part of your build or release pipeline. Tests execute automatically on every commit or deployment, and results appear on the pipeline's **Tests** tab.

- **Run tests in parallel** — Distribute tests across multiple agents to reduce execution time. See [Run VSTest tests in parallel](../pipelines/test/parallel-testing-vstest.md) or [Run any tests in parallel](../pipelines/test/parallel-testing-any-test-runner.md).
- **Run only impacted tests** — Use Test Impact Analysis to automatically select tests affected by code changes. See [Test Impact Analysis](../pipelines/test/test-impact-analysis.md).

## Step 5: Review results and track quality

### Test results

- **In Test Plans** — View pass/fail results for automated and manual tests together in the [Test Run Hub](test-runs.md). Select any test run to see detailed results, error messages, and stack traces.
- **In Pipelines** — View test results on the **Tests** tab of any pipeline run. See [Review test results](../pipelines/test/review-continuous-test-results-after-build.md).

### Analytics and trends

- **Test Analytics** — Identify top failing tests, track pass rate trends, and analyze failure patterns across builds. See [Test Analytics](../pipelines/test/test-analytics.md).
- **Code coverage** — Measure which parts of your code are exercised by tests. See [Review code coverage results](../pipelines/test/review-code-coverage-results.md).
- **Flaky test management** — Detect and manage tests with non-deterministic results to prevent false build failures. See [Manage flaky tests](../pipelines/test/flaky-test-management.md).

### Requirements traceability

When test cases are linked to requirements (user stories, PBIs), automated test results flow through to show requirement-level quality. Track which requirements pass, fail, or lack test coverage. See [Requirements traceability](../pipelines/test/requirements-traceability.md).

## Related content

- [Associate automated tests with test cases](associate-automated-test-with-test-case.md)
- [Run automated tests from test plans](run-automated-tests-from-test-hub.md)
- [Test objects and terms](test-objects-overview.md)
- [Create and manage test plans](create-a-test-plan.md)
- [Track test status](track-test-status.md)
