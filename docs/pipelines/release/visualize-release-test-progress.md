---
title: Visualize release pipelines progress and test summary
description: View summary and progress of release pipelines and test results
ms.topic: conceptual
ms.author: rabououn
author: ramiMSFT
ms.date: 06/15/2021
monikerRange: '>= tfs-2018'
---

# View release progress and test summary


## Visualize release progress

::: moniker range=">= azure-devops-2019"

The user interface provides a visual representation of the current status of the release pipeline, making it easier to understand what’s happening and surfaces appropriate details and actions at different stages of the deployment.

:::image type="content" source="media/release-progress-devops.png" alt-text="View release progress status Azure DevOps Services":::

::: moniker-end

::: moniker range="= tfs-2018"

The release progress view provides live updates of deployment progress and one-click access to further details. The user interface provides a visual representation of the current status of the release pipeline, making it easier to understand what’s happening and surfaces appropriate details and actions at different stages of the deployment.

:::image type="content" source="media/release-progress-view.png" alt-text="User interface to view the release progress status":::

::: moniker-end


::: moniker range="= tfs-2015"

## View build results

The build results view provides insights into the multiple components that make up your build. The user interface gives a snapshot view of the status of your current and previous builds. You can also view your logs, issues, commits, and all the work items related to your build.

:::image type="content" source="media/build-status-view.png" alt-text="View your build results TFS 2015":::

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Review test summary

During test execution, a test might spawn multiple instances of tests that contribute to the overall outcome. A few examples include: tests that rerun due to failures, tests composed of an ordered combination of other tests (e.g. ordered test), or tests having different instances based on provided input parameter (data-driven tests). Since these tests are related they need to be reported together with the overall outcome derived based on the individual test outcomes. The summary page provides insights on the result of the test runs related to your pipeline.

:::image type="content" source="media/test-results.png" alt-text="Test results summary":::

> [!NOTE]
> Metrics in the test summary section (e.g. Total tests, Passed, etc.), are computed using the root level of the hierarchy rather than each individual iteration of the tests.

::: moniker-end

## Related articles

- [Release pipelines overview](./index.md)
- [Classic release pipelines](./define-multistage-release-process.md)
- [Stage templates in Azure Pipelines](./env-templates.md)