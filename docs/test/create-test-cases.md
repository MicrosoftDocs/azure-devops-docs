---
title: Create and manage manual test cases
titleSuffix: Azure Test Plans
description: Create and manage manual test cases in Azure Test Plans to validate deliverables, assign testers, and organize your testing process. Start improving quality now.
#customer intent: As a tester, I want to create manual test cases so that I can validate deliverables against user requirements.
ms.assetid: C3C10A82-C7F2-4AB6-9CED-B43DAF722800
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3, copilot-scenario-highlight
ms.topic: how-to
ms.author: pliaros
ms.reviewer: chcomley
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 04/09/2026
ai-usage: ai-assisted
ms.update-cycle: 1095-days
---

# Create and manage manual test cases

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

<a id="test-cases"></a>

Create manual test cases to validate that each deliverable meets user requirements. Test cases define the individual steps testers perform, and can include [shared steps](share-steps-between-test-cases.md) and [parameters for data-driven testing](repeat-test-with-different-data.md). Organize test cases in [test plans and test suites](create-a-test-plan.md), and then assign testers to run them.

For key concepts, see [Test objects and terms](test-objects-overview.md).

> [!NOTE]
> Test iterations are for data-driven scenarios, not workflow-driven ones. If two test scenarios follow different workflows, create separate test cases. For more information, see [FAQs for manual testing](reference-qa.yml#test-cases).

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

::: moniker range="azure-devops"
[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]
::: moniker-end

## Create test cases

1. If you didn't already, [create a test plan](create-a-test-plan.md).

1. Select a requirement-based test suite and select **New Test Case**.
		
   :::image type="content" border="true" source="media/create-test-cases/new-test-case-button.png" alt-text="Screenshot showing test cases with New Test Case button highlighted.":::

   > [!NOTE]
   > This test suite links to a User Story work item from the backlog. When you add a test case to a requirement-based suite, you automatically link it to the backlog item. You can also create test cases directly from the backlog by opening the context menu for a work item and selecting **Add test**.

1. Enter a title and select **Click or type here to add a step**.

   :::image type="content" border="true" source="media/create-test-cases/test-case-steps.png" alt-text="Screenshot showing the steps entered for a test case.":::

1. Add test steps with an **Action** and **Expected Result** for each step. You can add attachments to any step.

   :::image type="content" border="true" source="media/create-test-cases/add-attachment-test-case.png" alt-text="Screenshot showing test case with links button highlighted.":::

   For more information, see [Share steps](share-steps-between-test-cases.md) and [Copy or clone stories, issues, and other work items](../boards/backlogs/copy-clone-work-items.md).

## Open a test case

To open a test case, double-select its name in the **Define** tab, or select it in the **Execute** tab, open the context menu, and select **Edit test case**. For more information, see [Define tab context menu options](navigate-test-plans.md#define-tab-more-options).

:::image type="content" border="true" source="media/create-test-cases/open-test-case-edit.png" alt-text="Screenshot showing the Edit test case option for a test case in the context menu.":::

You can link a test case to test suites, requirements, and bugs.
To see linked items, in the **Define** tab, open the context menu for a test case, and select **View Linked Items**. For more information, see [View linked items](navigate-test-plans.md#view-linked-items).

:::image type="content" border="true" source="media/create-test-cases/view-linked-items.png" alt-text="Screenshot showing the Linked Items dialog box for a test case with options to view Test Suites, Requirements, and Bugs.":::

## Assign configurations to test cases

By using configurations, you can run the same test across different operating systems, browsers, or other variations. Assign configurations at the suite level or to individual test cases.

1. Select the test suite, and then select **More options** > **Assign configurations**.

   :::image type="content" border="true" source="media/create-test-cases/assign-configurations.png" alt-text="Screenshot showing the Assign configurations selection in the More options dropdown menu.":::

1. In the dialog box, select your configurations and then select **Save**.

   :::image type="content" border="true" source="media/create-test-cases/assign-configurations-test-suite.png" alt-text="Screenshot showing the Assign configurations to test suite dialog box with some options selected.":::

To assign configurations to individual test cases, select one or more test cases, and then select **More options** > **Assign configuration**.

For more information, see [Test different configurations](test-different-configurations.md).

[!INCLUDE [configuration-inheritance-warning](includes/configuration-inheritance-warning.md)]

## Reorder test cases

The reorder method depends on the suite type:

| Suite type | How to reorder |
|---|---|
| **Static suite** | Drag and drop test cases in the test case list. |
| **Requirement-based suite** | Reorder the backlog items in the [backlog view](../boards/backlogs/create-your-backlog.md). |
| **Query-based suite** | Modify the [query's sort columns](../boards/queries/using-queries.md). |

## Reorder test steps

Select a test step and use the **up** and **down** arrows to move it. You can select and move multiple steps together.

:::image type="content" border="true" source="media/create-test-cases/change-step-order.png" alt-text="Screenshot showing the arrows used to move test steps up or down.":::

> [!TIP]
> If several test cases share the same steps, use [shared steps](share-steps-between-test-cases.md) to keep them in sync. Updating a shared step applies the change to all test cases that reference it.

## Add existing test cases to a test suite

Add existing test cases to a test suite by using the following steps.

1. Select a test suite. From the **New Test Case** menu, select **Add existing test cases**.

   :::image type="content" border="true" source="media/create-test-cases/add-existing-test-cases.png" alt-text="Screenshot showing the Add existing test cases option to select.":::

1. Add search clauses, as needed, and then select **Run query**.

   :::image type="content" border="true" source="media/create-test-cases/add-test-case-suite.png" alt-text="Screenshot showing the Add test cases to suite dialog box with the Run query button highlighted.":::

1. When you find the test cases you want, select them and choose **Add test cases**.

> [!TIP]
> You can create a test case that automatically links to a requirement - User Story ([Agile](../boards/work-items/guidance/agile-process.md)), Product Backlog Item ([Scrum](../boards/work-items/guidance/scrum-process.md)), Requirement ([CMMI](../boards/work-items/guidance/cmmi-process.md)), or Issue ([Basic](../boards/get-started/plan-track-work.md)) - when you create a test from the board. For more information, see [Add, run, and update inline tests](../boards/boards/add-run-update-tests.md).

## Use the Grid view to edit test cases
::: moniker range="<=azure-devops"

By using the Grid view, you can edit test cases directly and copy data between Excel and your test cases.

1. Select the **Grid View** icon.

   :::image type="content" border="true" source="media/create-test-cases/grid-view-button.png" alt-text="Screenshot showing the Grid View button used to open the Grid view.":::

1. Select one or more test cases, and then select **Edit test cases in grid**.

   :::image type="content" border="true" source="media/create-test-cases/edit-multiple-test-cases-grid.png" alt-text="Screenshot showing several test cases selected with the context menu open and Edit test case(s) in grid selected.":::

1. Add, delete, or clear rows.

   :::image type="content" border="true" source="media/create-test-cases/grid-context-menu.png" alt-text="Screenshot showing the Grid context menu to insert, delete, or clear rows.":::

1. To add multiple test cases to the test suite, select **Add test cases using grid**.

   :::image type="content" border="true" source="media/create-test-cases/add-test-cases-grid.png" alt-text="Screenshot showing option to add test cases using the Grid view.":::

   In the **List** view, use column options to select the fields in the test case work item. You can view and edit these fields when you switch to the **Grid** view.

   :::image type="content" border="true" source="media/create-test-cases/column-options.png" alt-text="Screenshot showing the Column Options button.":::

You can also copy test cases and test steps from Excel. Copy the columns for title, action, and expected results, and then paste them into the **Grid** view. Only multiline formatting is preserved when copying between Excel and the Grid.

:::image type="content" border="true" source="media/create-test-cases/save-test-cases-grid.png" alt-text="Screenshot showing the save option for steps copied from Excel to the Grid view.":::

> [!NOTE]
> Don't use the Teams plugin for Excel to add or update test case work items. Excel can't parse the format that stores test steps, which can corrupt test case formatting.

::: moniker-end

## Assign testers

::: moniker range="<=azure-devops"
Assign test cases so that different testers can run them. You can assign all test cases in a test suite to multiple testers, which is useful for acceptance testing.

Testers need [Basic access](../organizations/security/access-levels.md) to run tests from Azure Test Plans.

1. In the context menu for a test suite, select **Assign testers to run all tests**.

   :::image type="content" border="true" source="media/create-test-cases/assign-testers-all-tests.png" alt-text="Screenshot showing the Assign testers to run all tests option in a test suite context menu.":::

   The **Select testers to run all the tests in suite** dialog opens.

1. Add or remove testers from the list. After you select the testers, select **Send email**
   and edit the message so they know that tests are ready for them to run.

   :::image type="content" border="true" source="media/create-test-cases/select-testers-dialog-box.png" alt-text="Screenshot showing Assigning testers to run all tests dialog box with Search users and Send email called out.":::

   The email contains a link that testers can open to see the list of assigned tests.

## Assign an individual test case to a tester

1. In the **Execute** tab for a test suite, select a test, and then open the context menu.

   :::image type="content" border="true" source="media/create-test-cases/assign-tester-test-case.png" alt-text="Screenshot showing the context menu for a test case with the Assign tester option selected.":::

1. Select **Assign tester**. Search for and select a tester.

::: moniker-end

## Bulk edit test cases

You can edit more than one test case at a time. Select several test cases in a test suite and select **Edit test cases**. For more information, see [Export, import, and bulk update of test-specific work items](test-objects-overview.md#export-import-and-bulk-update-of-test-specific-work-items).

:::image type="content" border="true" source="media/create-test-cases/bulk-edit-work-items.png" alt-text="Screenshot showing the Edit work items dialog box where you can select fields and values for several test cases.":::

Select a **Field** and enter a **Value**. Select **Add new field** to add another field-value pair.

## Use tags for test cases

Tag test cases to filter and group them. For example, tag all sign-in tests so you can quickly rerun them after a bug fix. You can filter by tag in the **Test Plans** web portal and create query-based suites from tags.

To add new tags, you need at least **Basic** access and the project-level **Create new tag definition** permission set to **Allow**. For more information, see [Add work item tags](../boards/queries/add-tags-to-work-items.md).

You can add tags when editing a test case or bulk edit tags in the **Grid** view.

:::image type="content" border="true" source="media/create-test-cases/test-case-tags.png" alt-text="Screenshot showing tags for a test case.":::

## Rename or remove test cases

You can rename or remove test cases from a test suite.

**Rename a test case**: Open the test case from the context menu, and then edit the name.

:::image type="content" border="true" source="media/create-test-cases/open-test-case-option.png" alt-text="Screenshot showing a test case with its context menu with Open test case selected.":::

:::image type="content" border="true" source="media/create-test-cases/change-test-case-name.png" alt-text="Screenshot showing a test case with its name selected to edit.":::

**Remove a test case**: From the context menu for the test case, select **Remove**.

:::image type="content" border="true" source="media/create-test-cases/remove-test-case.png" alt-text="Screenshot showing removed test case.":::

::: moniker-end

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to manage test cases

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your test cases by using natural language prompts.

### Example prompts for test case management

| Task | Example prompt |
|------|----------------|
| Create a test case | `Create a new test case in <Contoso> project titled '<Verify login with valid credentials>'` |
| List test cases | `Show all test cases in test suite <67890> in project <Contoso>` |
| Find unassigned test cases | `List test cases in test plan <12345> that have no tester assigned` |
| Update test cases | `Update work item <5678> to set State = <Ready> and Priority = <2>` |
| Search by keyword | `Find all test cases in <Contoso> that contain 'checkout' in the title` |
| Identify stale tests | `List test cases in <Contoso> project that haven't been run in the last 90 days` |
| Check test case coverage | `Show all active test cases in area path <Contoso\\Payments> grouped by state` |
| Find tests without steps | `List test cases in test plan <12345> that have no test steps defined` |
| Spot duplicate test cases | `Find test cases in project <Contoso> that have the same title` |
| Review high-priority gaps | `Show test cases in area path <Contoso\\Payments> with Priority = <1> that have State = <Design>` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) is especially helpful for troubleshooting complex test case scenarios.
> - To avoid using stale or cached data from previous queries, add to your prompt, "Do not use previously fetched data."

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related content

- [Copy or clone stories, issues and other work items](../boards/backlogs/copy-clone-work-items.md)
- [Delete test artifacts in Azure Boards](../boards/backlogs/delete-test-artifacts.md)
- [FAQs for manual testing](reference-qa.yml#test-cases)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Test objects and terms](test-objects-overview.md)
