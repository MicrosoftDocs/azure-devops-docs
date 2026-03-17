---
title: Create test plans and suites
description: Learn about Test tools and how to create test plans in Azure DevOps.
ms.assetid: 99FD819E-A861-4F28-A486-FD452DB65D69
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3, copilot-scenario-highlight
ai-usage: ai-assisted
ms.topic: how-to
ms.author: pliaros
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 03/17/2026
ms.update-cycle: 1095-days
---

# Create test plans and test suites

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Create test plans and test suites to track manual testing for sprints or milestones.
By using this approach, you can see when the testing for a specific sprint or milestone is complete.
For more information about manual testing, see [What is Azure Test Plans?](overview.md)

## Share work items across your test experience

For example, you're building version 1.* of your product and you might create several test cases for that version. You can update each of these test cases and add more at any time.
For each development cycle and release of your product, you create a test plan and import the existing test cases into that plan. To manage and monitor these separate sets of test cases more easily, you can also divide the test cases into separate test suites within the plan.

After you create your test plan, [assign test configurations](test-different-configurations.md) and [assign testers](create-test-cases.md#assign-testers) to cover the required test matrix.
These testers [run the tests](run-manual-tests.md) and gauge the quality of the product.
Testers continue testing until the product meets exit criteria.
For the next development cycle and release, you can create a new test plan and reuse the same test cases.
Repeat this development-test-release cycle by importing the same test cases into each new test plan.

Because test plans refer to test cases, updates to a test case automatically reflect in all the test plans and test suites that use it.

In the next version of the product, you can reuse the existing test cases. However, a better option might be to [copy or clone the test cases](copy-clone-test-items.md). A copy creates a new baseline. Changes to these new test cases don't affect your previous test plans.

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

::: moniker range="azure-devops"
[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]
::: moniker-end

<a name="testplan"></a>

## Create a test plan

::: moniker range="<=azure-devops"
In general, you create test plans to test requirements. Before you create a test plan, [define your backlog of requirements](../boards/backlogs/create-your-backlog.md).

1. Sign in to your Azure DevOps project and select **Test Plans** > **Test Plans**.

   :::image type="content" source="media/create-a-test-plan/open-test-plans.png" alt-text="Screenshot of opening the list of test plans page.":::

2. Select **+ New Test Plan**.

   :::image type="content" source="media/create-a-test-plan/new-test-plan.png" alt-text="Screenshot of creating a new test plan.":::

3. Enter a name for the test plan, verify that the area path and iteration are set correctly, and then select **Create**.

   :::image type="content" source="media/create-a-test-plan/test-plan-name-path-iteration.png" alt-text="Screenshot of adding test plan details.":::

### Rename a test plan

To rename a test plan, use the following steps:

1. Select **Test Plans**.

2. Next to the test plan name, select **More Actions** > **Edit**.

   :::image type="content" source="media/create-a-test-plan/rename-edit-test-plan.png" alt-text="Screenshot shows option to edit a test plan.":::

3. Change the name and then select **Save & Close**.

You can make other changes to the test plan here.

### Delete a test plan

To delete a test plan, use the following steps:

1. Select **Test Plans**.

2. Next to the test plan name, select **More Actions** > **Delete**.

3. The **Permanently delete test artifacts** dialog box explains exactly what gets deleted. Enter the test plan ID to confirm that you want to delete, and then select **Permanently delete**.

   :::image type="content" source="media/create-a-test-plan/permanently-delete-test-artifacts.png" alt-text="Screenshot shows permanently delete test artifacts dialog box.":::

::: moniker-end

<a name="backlog"></a>

## Add a requirement-based test suite

::: moniker range="<=azure-devops"
Now add test suites for the backlog items that need manual tests. These tests could be user stories, requirements, or other work items based on your project.

> [!NOTE]
> Requirement tracking is supported only for test cases linked through a **Requirement-based test suite**. Work items include a User Story ([Agile](../boards/work-items/guidance/agile-process.md)), Product Backlog Item ([Scrum](../boards/work-items/guidance/scrum-process.md)), Requirement ([CMMI](../boards/work-items/guidance/cmmi-process.md)), and Issue ([Basic](../boards/get-started/plan-track-work.md)). The association between a requirement work item and manual test execution is only formed when the test case is linked by using a **Requirement-based test suite**.

1. To add a suite to a test plan, select **More options** for the test suite, and then select **New Suite** > **Requirement based suite**.

   :::image type="content" source="media/create-a-test-plan/add-requirement-based-suite.png" alt-text="Screenshot shows creating a requirement-based test suite.":::

   Use requirement-based suites to group your test cases together.
   That way, you can track the testing status of a backlog item.
   Each test case that you add to a requirement-based test suite is automatically linked to the backlog item.

1. In **Create requirement-based suites**, add one or more clauses to filter your work items by the iteration path for the sprint.
   Run the query to view the matching backlog items.

   :::image type="content" source="media/create-a-test-plan/add-clauses-run-query.png" alt-text="Screenshot shows adding clauses to filter by iteration and running the query.":::

1. In the list of work items returned by the query, select the backlog items you want to test in this sprint.
   Select **Create suites** to create a requirement-based suite for each one.

   :::image type="content" source="media/create-a-test-plan/select-requirement-create-suite.png" alt-text="Screenshot shows adding requirement-based suites for your backlog items.":::

::: moniker-end

## Work with test suites

Azure Test Plans supports three types of test suites:

- **Static test suites** — Manually organized containers that hold test cases and other test suites. Use them like folders to group related tests.
- **Requirement-based test suites** — Automatically linked to a backlog work item (user story, PBI, requirement). See [Add a requirement-based test suite](#backlog).
- **Query-based test suites** — Dynamically populated by a work item query. Test cases matching the query are automatically included.

### Create a static test suite

::: moniker range="<=azure-devops"

1. In your test plan, select **More options** for a test suite, and then select **New Suite** > **Static suite**.
2. Enter a name for the suite.

You can drag and drop test suites to nest them under static suites, and drag test cases to reorder them.

:::image type="content" source="media/create-a-test-plan/drag-drop-test.png" alt-text="Screenshot shows using drag and drop to move a test.":::

::: moniker-end

### Create a query-based test suite

::: moniker range="<=azure-devops"

1. In your test plan, select **More options** for a test suite, and then select **New Suite** > **Query based suite**.
2. Define the query to match the test cases you want. For example, filter by area path, iteration, or state.
3. Select **Create suite**. Test cases that match the query are automatically included and stay in sync as work items change.

> [!NOTE]
> Query-based suites are are read-only. You can't manually add or remove test cases. To change the suite contents, update the query.

::: moniker-end

### Track test suite changes

You can track changes to test plans and test suites. Open the work item for the test plan or test suite, and then view the work item history.

For test suites, the **Test Suite Audit** field tracks other actions. For example, it tracks adding and removing test cases from a test suite.

### Export test cases

Export test plans, test suites, and test cases.

::: moniker range="<=azure-devops"
Select **Export test cases to CSV**.

:::image type="content" source="media/create-a-test-plan/export-test-cases.png" alt-text="Screenshot shows a test plan selected and the Export test cases to CSV option.":::
::: moniker-end

Change the test case fields in the report by adding or removing columns from the list view of the test suite.

> [!IMPORTANT]
> You can't export more than 75 test suites in a single operation.
> The email supports up to 1 MB of data.

<a name="findplan"></a>

## Find a test case in a test plan

::: moniker range="<=azure-devops"
In **Test Plans** for your test plan, use the :::image type="icon" source="media/create-a-test-plan/filter-icon.png" border="false"::: filter icon to show the search and filter list. It can help you find the tests you want.

  :::image type="content" source="media/create-a-test-plan/filter-select-test-plan.png" alt-text="Screenshot shows finding a test plan.":::
::: moniker-end

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to manage test plans

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your test plans and suites by using natural language prompts.

### Example prompts for test plan management

| Task | Example prompt |
|------|----------------|
| Create a test plan | `Create a new test plan in <Contoso> project called '<Sprint 5 Regression Tests>'` |
| List test plans | `List all test plans in <Contoso> project` |
| Create a test suite | `Create a static test suite called '<Checkout Flow>' under test plan <12345>` |
| Query test cases in a suite | `Show all test cases in test suite <67890> in project <Contoso>` |
| Find untested areas | `List test suites in test plan <12345> that have no test cases assigned` |
| Check test plan coverage | `Show all requirement-based test suites in test plan <12345> and their associated work items` |
| Compare sprint plans | `List test suites in test plan <12345> and test plan <54321> side by side` |
| Find unlinked test cases | `Show test cases in project <Contoso> that aren't in any test suite` |
| Audit test plan readiness | `List test cases in test plan <12345> that have State = <Design> and no test steps defined` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) is especially helpful for troubleshooting complex test planning scenarios.
> - To avoid using stale or cached data from previous queries, add to your prompt, "Do not use previously fetched data."

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Create manual test cases](create-test-cases.md#test-cases) 

## Related content

* [Test objects and terms](test-objects-overview.md) 
* [FAQs for manual testing](reference-qa.yml)
* [End-to-end traceability](../cross-service/end-to-end-traceability.md)
