---
title: Add, run, update inline tests
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to add, run, and quickly update manual test cases
ms.technology: devops-new-user
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 02/14/2019
ms.topic: quickstart
monikerRange: '>= tfs-2013'
---

# Quickstart: Add, run, and update inline tests

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

In this quickstart, you learn how to add, run, and update inline tests in Azure DevOps Services.

A quick and easy way to start manual testing is to add the test to the user story or bug you want to test. From the Kanban board, you can quickly define inline tests, or a set of manual tests, for a backlog item. Not only can you add tests, you also can run them and update their status. If you're new to working with the Kanban board, see [Kanban quickstart](../boards/boards/kanban-quickstart.md).

Tests you create from the Kanban board are automatically linked to the user story or backlog item.  

## Open your Kanban board

::: moniker range=">= azure-devops-2019"

1. From your web browser, open the project for your organization and select **Azure Boards**. If you don't have a project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The URL follows this pattern: ```https://dev.azure.com/fabrikamfiber/_boards/board```  

	If you don't see the team or project you want, select the ![Azure DevOps icon](../_img/icons/project-icon.png) to [browse all projects and teams](../project/navigation/work-across-projects.md).  

2. Select **Boards** to open the Kanban board.

   ![Azure Boards](_img/azure-devops-boards-board.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. From your web browser, open the project for your organization and select **Azure Boards**. If you don't have a project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The URL follows this pattern: ```https://dev.azure.com/fabrikamfiber/_backlogs/board```  

	If you don't see the team or project you want, select the ![Azure DevOps icon](../_img/icons/project-icon.png) Azure DevOps icon to [browse all projects and teams](../project/navigation/work-across-projects.md).  

2. Select **Board** to open the Kanban board.

    ![Azure DevOps backlogs board](_img/azure-devops-backlogs-board.png)

::: moniker-end

## Add tests

::: moniker range=">= azure-devops-2019"

1. To add tests, open the menu for a work item.

   ![Add manual test](_img/add-manual-test.png)

   Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite are automatically created under which the manual test cases are grouped.  

	For example, a test suite is created for the following user story, and inline tests are added to that suite. User story 314 is highlighted. It has two manual tests defined with the IDs 337 and 341.  

   ![Manual test plan](_img/manual-test-plan.png)

2. If you have a number of tests to add, enter each title and select **Enter**.

   ![Work item add more test cases](_img/work-item-add-more-test-cases.png)

	To add details to the test case, open it. You can select the title, double-select the inline item, or open the context menu and choose **Open**.

   ![Open test case from Kanban board](_img/open-test-case-form-from-kanban-board.png)

To learn more about how to define tests, see [Create manual tests](../test/create-test-cases.md).

Prior to running the test, you must add details.

::: moniker-end

::: moniker range="<= tfs-2018"

1. To add tests, open the menu for the work item.

	<img src="../boards/boards/_img/i-test-add-test.png" alt="Open the context menu of a backlog item to add inline test case" style="border: 2px solid #C3C3C3;" />

	Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite are automatically created under which the manual test cases are grouped.  

	For example, a test suite is created for each user story, and all inline tests are added to that suite. The following user story 152 is highlighted. It has three manual tests defined with the IDs 153, 155, and 161.  

	<img src="../boards/boards/_img/i-test-plan-suite.png" alt="Inline test cases get added to test suites and test plans" style="border: 2px solid #C3C3C3;" /> 

	To learn more about test plans and test suites, see [Plan your tests](../test/create-a-test-plan.md).  

2. If you have a number of tests to add, enter each title and select **Enter**.

	<img src="../boards/boards/_img/i-test-story-with-3-inline-tests.png" alt="Work item with several test cases added" style="border: 2px solid #C3C3C3;" />   

	To add details to the test case, open it. You can select the title, double-select the inline item, or open the context menu and choose **Open**.

	<img src="../boards/boards/_img/i-test-case-form.png" alt="Open test case form from Kanban board" style="border: 2px solid #C3C3C3;" />

To learn more about how to define tests, see [Create manual tests](../test/create-test-cases.md).

Prior to running the test, you must add details.

::: moniker-end

---

## Run a test

::: moniker range=">= azure-devops-2019"

Run the test by selecting ![Run icon](../boards/_img/icons/run_query.png) **Run test** from the ![Actions icon](../boards/_img/icons/actions-icon.png) actions menu for the inline test.

![Run manual test](_img/run-manual-test.png)

Microsoft Test Runner starts in a new browser instance. For information on how to run a test, see [Run manual tests](../test/run-manual-tests.md).
::: moniker-end

::: moniker range="<= tfs-2018"

Run the test by selecting ![Run icon](../boards/_img/icons/run_query.png) **Run test** from the ![Actions icon](../boards/_img/icons/actions-icon.png) actions menu for the inline test.  

<img src="../boards/boards/_img/i-test-run-test.png" alt="Run a test" style="border: 2px solid #C3C3C3;" />  

Microsoft Test Runner starts in a new browser instance. For information on how to run a test, see [Run manual tests](../test/run-manual-tests.md).
::: moniker-end

## Update the status of a test

::: moniker range=">= azure-devops-2019"

You can update the status of the test from the ![Actions icon](../boards/_img/icons/actions-icon.png) actions menu.

![Update status of tests](_img/test-update-status.png)

When you update the status of tests, you can [track test results](../test/track-test-status.md).

::: moniker-end

::: moniker range="<= tfs-2018"

You can update the status of the test from the ![Actions icon](../boards/_img/icons/actions-icon.png) actions menu.

   ![Pass test](_img/pass-test.png)

When you update the status of tests, you can [track test results](../test/track-test-status.md).  

::: moniker-end

## Expand or collapse inline tests

::: moniker range=">= azure-devops-2019"

When you first open the Kanban board, you'll see an un-expanded view of checklists and tests.

   ![Inline tests collapsed](_img/azure-devops-boards-board.png)

Select the inline test summary to expand a collapsed set of tests. Select the same summary to collapse an expanded list.

![Inline tests expanded](_img/test-expanded-test-list.png)

::: moniker-end

::: moniker range="<= tfs-2018"  

When you first open the Kanban board, you'll see an un-expanded view of checklists.

   ![Inline tests collapsed](../boards/boards/_img/i-test-open-board-collapsed-tests.png)

Select the inline test summary to expand a collapsed set of tests. Select the same summary to collapse an expanded list.

   ![Inline tests expanded](../boards/boards/_img/i-test-expanded-test-list.png)

::: moniker-end

## Next steps

Use inline tests for lightweight traceability and to manage manual tests for user stories or other backlog items that they support.
  
> [!div class="nextstepaction"]
> [Learn more about test case management](../test/create-test-cases.md)
> [Kanban quickstart](../boards/boards/kanban-quickstart.md)

To initiate web-based exploratory testing for a user story, you must install the Exploratory testing. For more information, see how to [Exploratory test your web app directly in your browser](../test/perform-exploratory-tests.md).

