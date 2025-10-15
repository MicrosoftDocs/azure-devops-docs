---
title: Manage tests inline
titleSuffix: Azure Boards
description: Learn how to add, run, update, and track manual test cases on your board for lightweight management in Azure Boards.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: ED3CC394-EE6C-4E12-A2BC-F43A0EE17318  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 10/15/2025
---

# Manage tests inline from boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

This article describes how to quickly create, run, update, and track inline tests from work items on your board in Azure Boards. Tests you create from work items on your board are automatically linked to the work item.

:::image type="content" source="media/i-test-board-intro.png" alt-text="Screenshot showing a Kanban board with an inline tests defined.":::

The UI and processes for managing inline tests are similar to those for managing tasks. For more information, see [Tutorial: Add tasks or child items as checklist items](add-task-checklists.md).

For an overview of Kanban boards, see [What is a Kanban board?](kanban-overview.md) For more information about testing scenarios and capabilities, see [What is Azure Test Plans?](../../test/overview.md)

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md). |
| **Access levels** |To add work items, view or run tests, and use all boards features, at least **Basic** [access](../../organizations/security/access-levels.md). Users with **Stakeholder** access can't view or run tests.|
|**Permissions**|To view or modify work items, **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).|

## Open boards in Azure Boards

To view your team's boards, open your project and select **Boards** > **Boards** from the left navigation menu. On the **Boards** page, select the board you want from the list.

:::image type="content" source="media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot showing opening your board.":::

To see another team's boards, select the board from **All team boards** on the **Boards** page. You can also select the dropdown arrow next to the title on your board page and then select the other board or **View boards directory**.

:::image type="content" source="media/quickstart/select-kanban-team-board.png" alt-text="Screenshot showing selecting another team's board.":::

> [!TIP]
> Select the star icon next to a board name to favorite the board. Favorited boards appear at the top of the board selector list.

## Expand and view inline tests

When you first open a board, you see an unexpanded view of the task and test checklists in work items.

:::image type="content" source="media/i-test-open-board-collapsed-tests.png" alt-text="Screenshot showing Inline tests collapsed.":::

Hover over an inline test icon to show a test summary.

:::image type="content" source="media/hover-test-summary.png" alt-text="Screenshot showing test summary upon hover.":::

Select the test icon to expand the list of tests and other controls, and select the icon again to collapse it.

In the expanded panel, select the **Open test suite** icon to open the test suite in a new browser page.

:::image type="content" source="media/i-test-expanded-test-list.png" alt-text="Screenshot showing inline tests expanded.":::

Select a test to open and edit its test case page.

:::image type="content" source="media/i-test-case-form.png" alt-text="Screenshot showing a test case page.":::

Select the **Work item actions** icon next to a test to show more test options.

:::image type="content" source="media/inline-test-options.png" alt-text="Screenshot showing test case context menu options.":::

The following example shows test suite **285** created for bug **38**, with all inline tests added to that suite. The test suite has three manual tests defined with IDs **284**, **286**, and **287**.

:::image type="content" source="media/i-test-plan-suite.png" alt-text="Screenshot showing inline test cases get added to test suites and test plans.":::

## Add tests inline

You can add test cases to a work item inline. A default test plan and test suite are automatically created for the work item with the manual test cases grouped under them.

To start adding tests, open the **Work item actions** menu for a work item on your board, and select **Add test** from the context menu.

:::image type="content" source="media/i-test-add-test.png" alt-text="Screenshot showing Add test in the context menu of a backlog item.":::

Type the test title and press Enter. You can enter several tests by pressing Enter after adding each test.

:::image type="content" source="media/i-test-story-with-3-inline-tests.png" alt-text="Screenshot showing work item with several test cases added.":::

Before running the test, you must add details. To add details to a test case, open the test case by selecting it in the expanded inline test case list, or by opening its context menu and selecting **Open**.

For more information, see [Plan your tests](../../test/create-a-test-plan.md) and [Create manual tests](../../test/create-test-cases.md).

## Run an inline test 

Run a test by selecting **Run test** from the **Work item actions** menu for the test.

:::image type="content" source="media/i-test-run-test.png" alt-text="Screenshot showing running a test.":::

Microsoft Test Runner starts in a new browser instance. For more information, see [Run manual tests](../../test/run-manual-tests.md).

## Update the test status

To [track test results](../../test/track-test-status.md), you can update the status of an inline test from its **More actions** menu.

:::image type="content" source="media/i-test-update-status.png" alt-text="Screenshot showing completed tasks.":::


## Copy or reparent a test 

To reparent a test, drag and drop the test to a different work item. This action automatically changes the linked relationship of the test and points to the new work item.

:::image type="content" source="media/i-test-drag-reparent.png" alt-text="Screenshot showing dragging a test to reassign it to a different work item.":::

To add a copy of a test to a different work item, hold down the **Ctrl** key while you drag and drop the test to the other work item.

>[NOTE!]
>When you link a test case to a work item by using the **Tested By** link type, the board reflects the test status of the linked test case. However, if a requirement-based suite has multiple configurations, the board only shows the test outcome for the default configuration. To ensure that test cases appear properly on the board, it's best to use **Add test** on the work item or create a requirement-based test suite from the Test Plans hub.

## Next step

> [!div class="nextstepaction"]
> [Install the Test & Feedback extension](../../test/perform-exploratory-tests.md)

## Related content

- [Create manual tests](../../test/create-test-cases.md).  
- [Disable this feature from the common configurations dialog](../../boards/boards/customize-cards.md).
- [Add tasks or child items as checklists](add-task-checklists.md)
- [Create a new branch, drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md)
