---
title: Create and manage test suites
titleSuffix: Azure Test Plans
description: Learn how to create and manage static, requirement-based, and query-based test suites in Azure Test Plans.
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: how-to
ms.author: pliaros
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 04/09/2026
---

# Create and manage test suites

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Test suites organize test cases within a [test plan](create-a-test-plan.md). Use test suites to group related tests for a sprint, feature, or milestone. Azure Test Plans supports three types of test suites:

- **Static test suites** — Manually organized containers that hold test cases and other test suites. Use them like folders to group related tests.
- **Requirement-based test suites** — Automatically linked to a backlog work item (user story, PBI, requirement). Use them to track test coverage for specific requirements.
- **Query-based test suites** — Dynamically populated by a work item query. Test cases matching the query are automatically included.

For key concepts, see [Test objects and terms](test-objects-overview.md).

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

## Create a static test suite

::: moniker range="<=azure-devops"

1. In your test plan, select **More options** for a test suite, and then select **New Suite** > **Static suite**.
1. Enter a name for the suite.

You can drag and drop test suites to nest them under static suites, and drag test cases to reorder them.

:::image type="content" source="media/create-test-plan/drag-drop-test.png" alt-text="Screenshot shows using drag and drop to move a test.":::

::: moniker-end

<a name="backlog"></a>

## Add a requirement-based test suite

::: moniker range="<=azure-devops"
Add test suites for the backlog items that need manual tests. These tests can be user stories, requirements, or other work items based on your project.

> [!NOTE]
> Requirement tracking is supported only for test cases linked through a **Requirement-based test suite**. Work items include a User Story ([Agile](../boards/work-items/guidance/agile-process.md)), Product Backlog Item ([Scrum](../boards/work-items/guidance/scrum-process.md)), Requirement ([CMMI](../boards/work-items/guidance/cmmi-process.md)), and Issue ([Basic](../boards/get-started/plan-track-work.md)). The association between a requirement work item and manual test execution is only formed when the test case is linked by using a **Requirement-based test suite**.

1. To add a suite to a test plan, select **More options** for the test suite, and then select **New Suite** > **Requirement based suite**.

   :::image type="content" source="media/create-test-suite/add-requirement-based-suite.png" alt-text="Screenshot shows creating a requirement-based test suite.":::

   Use requirement-based suites to group your test cases together.
   That way, you can track the testing status of a backlog item.
   Each test case that you add to a requirement-based test suite is automatically linked to the backlog item.

1. In **Create requirement-based suites**, add one or more clauses to filter your work items by the iteration path for the sprint.
   Run the query to view the matching backlog items.

   :::image type="content" source="media/create-test-plan/add-clauses-run-query.png" alt-text="Screenshot shows adding clauses to filter by iteration and running the query.":::

1. In the list of work items returned by the query, select the backlog items you want to test in this sprint.
   Select **Create suites** to create a requirement-based suite for each one.

   :::image type="content" source="media/create-test-plan/select-requirement-create-suite.png" alt-text="Screenshot shows adding requirement-based suites for your backlog items.":::

::: moniker-end

## Create a query-based test suite

::: moniker range="<=azure-devops"

1. In your test plan, select **More options** for a test suite, and then select **New Suite** > **Query based suite**.
1. Define the query to match the test cases you want. For example, filter by area path, iteration, or state.
1. Select **Create suite**. Test cases that match the query are automatically included and stay in sync as work items change.

> [!NOTE]
> Query-based suites are read-only. You can't manually add or remove test cases. To change the suite contents, update the query.

::: moniker-end

## Track test suite changes

You can track changes to test plans and test suites. Open the work item for the test plan or test suite, and then view the work item history.

For test suites, the **Test Suite Audit** entry under the test suite history tracks other actions such as:

- Adding or removing test cases from a test suite
- Adding or removing testers from a test suite

<a name="findplan"></a>

## Find a test suite in a test plan

::: moniker range="<=azure-devops"
To find a test suite within a test plan, select the :::image type="icon" source="media/create-test-plan/filter-icon.png" border="false"::: filter icon in **Test Plans**. Enter the test suite name to filter the list. Search results are limited to the selected test plan hierarchy.

  :::image type="content" source="media/create-test-suite/filter-select-test-plan.png" alt-text="Screenshot shows finding a test suite in a test plan.":::
::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Create manual test cases](create-test-cases.md#test-cases)

## Related content

- [Create test plans](create-a-test-plan.md)
- [Bulk import or export test cases](bulk-import-export-test-cases.md)
- [Navigate Test Plans](navigate-test-plans.md)
- [Test objects and terms](test-objects-overview.md)
- [FAQs for manual testing](reference-qa.yml)
