---
title: Add and manage inline tests in Azure Boards
titleSuffix: Azure Boards
description: Learn how to add, run, update, and track manual test cases inline in your board work items for lightweight management.
ms.custom: boards-kanban, copilot-scenario-highlight
ms.service: azure-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/20/2026
ai-usage: ai-assisted
#customer intent: As an Azure Boards user, I want to learn how to add, run, and update test cases inline, so I can quickly and easily manage and track tests for board work items.
---

# Add and manage inline tests

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

This article describes how to quickly create, run, update, and track tests inline from work items on your boards in Azure Boards. Tests you create from work items on your board are automatically linked to the work items.

Inline tests let you create, run, and track tests directly on work items in your board without switching tools. This approach is useful when you want to verify acceptance criteria or catch issues quickly during your sprint.

**When to use inline tests:**
- Lightweight testing directly on board work items
- Small number of tests per work item (few quick verifications)
- Team prefers one-pane workflow without switching to Test Plans
- Ad hoc testing or simple manual verification

**When to use the Test Plans hub:**
- Large test suites with many test cases
- Complex test scenarios, test configurations, or environment setup
- Team-wide test planning and metrics
- Exploratory testing with rich tracing

For a full testing platform, see [What is Azure Test Plans?](../../test/overview.md)

Managing inline tests in board work items is similar to managing inline task checklists. For more information about inline tasks, see [Tutorial: Add tasks or child items as checklist items](add-task-checklists.md).

- For an overview of Kanban boards, see [What is a Kanban board?](kanban-overview.md)

[!INCLUDE [ai-assistance-mcp-server-tip.md](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| Project access | [Project member](../../organizations/security/add-users-team-project.md). |
| Access levels |To add work items, view or run tests, and use all boards features, at least **Basic** [access](../../organizations/security/access-levels.md). Users with **Stakeholder** access can't view or run tests.|
|**Permissions**|To view or modify work items, set **View work items in this node** and **Edit work items in this node** permissions to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).|

## What you can do with inline tests

By using inline tests, you can:

- **Add tests** to work items directly from your board
- **Run tests** to verify functionality and acceptance criteria
- **Update test status** to reflect pass, fail, or blocked results
- **Reparent tests** to reassign between work items
- **Copy tests** to reuse across multiple work items

Each task has step-by-step instructions in the sections that follow.

## Open boards in Azure Boards

1. To view your team's board, open your Azure DevOps project and select **Boards** > **Boards** from the left navigation menu.

   :::image type="content" source="media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot showing opening your board.":::

1. To view a different board, select the arrow next to the title on your board page and select the other board or **View boards directory** from the dropdown list. You can also select a board under **All team boards** on the **Boards** directory page.

   :::image type="content" source="media/quickstart/select-kanban-team-board.png" alt-text="Screenshot showing selecting another team's board.":::

> [!TIP]
> Select the star icon next to a board name to favorite the board. Favorited boards appear at the top of the board selector list.

## Expand and view inline tests

When you first open a board, the task and test checklists in work items are collapsed.

:::image type="content" source="media/i-test-open-board-collapsed-tests.png" alt-text="Screenshot showing inline tests collapsed.":::

1. Hover over an inline test icon to show a test summary.

   :::image type="content" source="media/hover-test-summary.png" alt-text="Screenshot showing test summary upon hover.":::

1. Select the test icon to expand the list of tests and other controls. To collapse the list and controls, select the icon again.

1. In the expanded panel, select a test from the list to open and edit its test case page.

   :::image type="content" source="media/i-test-case-form.png" alt-text="Screenshot showing a test case page.":::

1. In the expanded panel, select the **Work item actions** icon next to a test to show context menu options.

   :::image type="content" source="media/inline-test-options.png" alt-text="Screenshot showing test case context menu options.":::

1. Select the **Open test suite** icon to open the test suite for the work item in a new browser page.

   :::image type="content" source="media/i-test-expanded-test-list.png" alt-text="Screenshot showing inline tests expanded.":::

   The following example shows test suite **285** created for bug **38**, with three inline test cases added to the suite.

   :::image type="content" source="media/i-test-plan-suite.png" alt-text="Screenshot showing inline test cases get added to test suites and test plans.":::

## Add tests inline

When you add test cases to a board work item inline, the process automatically creates a default test plan and test suite for the work item, with the test cases grouped under them.

1. To add tests to a work item on your board, open the **Work item actions** menu for the work item and select **Add test** from the context menu. You can also select an existing inline test icon in a work item, and then select **Add test** in the expanded test panel.

   :::image type="content" source="media/i-test-add-test.png" alt-text="Screenshot showing Add test in the context menu of a backlog item.":::

1. In the expanded panel, enter the new test title and press Enter. You can add multiple tests by pressing Enter after adding each test.

   :::image type="content" source="media/i-test-story-with-3-inline-tests.png" alt-text="Screenshot showing work item with several test cases added.":::

For more information, see [Plan your tests](../../test/create-a-test-plan.md) and [Create manual tests](../../test/create-test-cases.md).

## Run an inline test

Before running a new test, you must add details. To add details to a test case, open it by selecting it in the inline test case list, or by selecting **Open** in its context menu.

Run the test by selecting **Run test** from the context menu for the test.

:::image type="content" source="media/i-test-run-test.png" alt-text="Screenshot showing running a test.":::

Microsoft Test Runner starts in a new browser instance. For more information, see [Run manual tests](../../test/run-manual-tests.md).

## Update test status

To [track test status](../../test/track-test-status.md), update the status of an inline test from its context menu.

:::image type="content" source="media/i-test-update-status.png" alt-text="Screenshot showing completed tasks.":::

## Reparent or copy a test

To reparent a test, drag and drop the test to a different work item. This action automatically changes the linked relationship of the test and points to the new work item.

The following example shows the **TEST: Cancel order form** test being moved from the **Cancel order form** item to the **Customer account history** item.

:::image type="content" source="media/i-test-drag-reparent.png" alt-text="Screenshot showing dragging a test to reassign it to a different work item.":::

To copy a test to a different work item, hold down the Ctrl key while you drag and drop the test to the other work item.

> [!NOTE]
> When you link a test case to a work item by using the **Tested By** link type, the board reflects the test status of the linked test case. However, if a requirement-based suite has multiple configurations, the board only shows the test outcome for the default configuration. To ensure that test cases appear properly on the board, it's better to use **Add test** on the work item or create a requirement-based test suite from the Test Plans hub.

## Troubleshoot inline tests

### Test Runner doesn't launch

If Test Runner fails to open in a new browser window:

1. Verify your browser allows pop-ups from `dev.azure.com`
1. Confirm JavaScript is enabled
1. Check your browser is [compatible with Azure DevOps](/azure/devops/server/compatibility#supported-browsers).
1. Verify you have **View test runs** permission on the project

### Can't reparent or copy a test

To reparent or copy a test between work items, you must have:

- **Edit work items in this node** permission on both the source and target work items
- The test must be in the same project (cross-project reparenting isn't supported)

If you see a "permission denied" error, check your project permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).

### Tests don't appear inline after adding

If you add a test but it doesn't appear in the inline test panel:

1. Refresh the board page
1. Verify the test case was created in the default test suite for the work item
1. Check that you're viewing the work item on the board (not in the details panel)

### Test status doesn't appear on board

If a test is linked using the **Tested By** link type but shows no status:

- For requirement-based test suites with multiple configurations, the board only shows the test outcome for the default configuration
- To ensure test statuses appear correctly, use **Add test** on the work item instead of manually linking test cases
- See [Track test status](../../test/track-test-status.md) for status update procedures

### Slow or timeout when adding or running many tests

Inline test operations work best for small test suites (3–5 tests per work item). If you experience slowness:

- Use the [Test Plans hub](../../test/overview.md) for large test suites.
- Run tests one at a time instead of using batch operations.
- Check your network connection and browser performance.

### Test case doesn't have required fields

Before you can run a test, the test case must include:

- **At least one test step**
- **Expected result** for each step

If you see a validation error, open the test case form and add steps. For more information, see [Create manual test cases](../../test/create-test-cases.md).

<a id="use-ai-to-manage-tests"></a>

## Use AI to manage inline tests

You can use AI assistance through the Azure DevOps MCP Server to help you manage inline tests. Here are example prompts you can use:

| Task | Example Prompt |
|------|---|
| Create test cases | "Help me create test cases that verify these acceptance criteria for the user story" |
| Create test cases | "Generate test cases to cover the main user workflows in this feature" |
| Create test cases | "What test cases would you recommend for this purchase flow?" |
| Create test cases | "Create edge-case test scenarios for the login functionality" |
| Organize and manage tests | "Help me organize these inline tests into logical test suites" |
| Organize and manage tests | "Should I use inline tests or move this to the Test Plans hub? Here's my scenario..." |
| Organize and manage tests | "What's a good naming convention for test cases?" |
| Track test status | "Show me which tests are currently passing and which need work" |
| Track test status | "Help me summarize the test status for this sprint" |
| Track test status | "Analyze these test failures and suggest fixes" |
| Test coverage and strategy | "Suggest a testing strategy for this complex user story" |
| Test coverage and strategy | "What areas of this feature might not have enough test coverage?" |
| Test coverage and strategy | "Help me prioritize which tests to run first" |

> [!NOTE]
> These prompts work best when you provide context about your work items, test scenarios, and acceptance criteria. The more specific you are, the better the suggestions.

## Next step

> [!div class="nextstepaction"]
> [Install the Test & Feedback extension](../../test/perform-exploratory-tests.md)

## Related content

- [Create manual test cases](../../test/create-test-cases.md)
- [Customize cards on a board](../../boards/boards/customize-cards.md)
- [Tutorial: Add tasks or child items as checklist items](add-task-checklists.md)
- [Drive Git development from a work item in Azure Boards](../backlogs/connect-work-items-to-git-dev-ops.md)
