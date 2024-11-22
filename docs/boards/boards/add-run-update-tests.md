---
title: Add, run, and update inline tests
titleSuffix: Azure Boards  
description: Add, run, and update manual test cases on your board for lightweight tracking in Azure Boards and Azure DevOps.   
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: ED3CC394-EE6C-4E12-A2BC-F43A0EE17318  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 09/10/2024
---

# Add, run, and update inline tests

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

Similar to [task checklists](add-task-checklists.md), you can quickly define inline tests, or a set of manual tests cases, for a backlog item from your board. Not only can you add tests, you can run them and update their status. If you're new to working with the board, see [Kanban board overview](kanban-overview.md). If you're new to testing, see [Exploratory and manual testing scenarios and capabilities](../../test/overview.md).

<img src="media/i-test-board-intro.png" alt="Screenshot showing Web portal, board with several inline tests defined." /> 

Tests that you create from the board automatically get linked to the user story or backlog item.  

## Prerequisites

::: moniker range="azure-devops"
- **Project and team access:**
  - [Connect to a project](../get-started/sign-up-invite-teammates.md). If you don't have a project, create one.
  - [Add yourself to a team or project](../../organizations/security/add-users-team-project.md).

- **Access levels:** To add work items, view or run tests, and use all boards features, have at least [**Basic** access](../../organizations/security/access-levels.md). Users with **Stakeholder** access can't view or run tests.

- **Permissions:**
  - To view or modify work items, set **View work items in this node** and **Edit work items in this node** permissions to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md). 
::: moniker-end

::: moniker range="< azure-devops"
- **Project and team access:**
  - [Connect to a project](../../organizations/projects/create-project.md). If you don't have a project, create one.
  - [Add yourself to a team or project](../../organizations/security/add-users-team-project.md).

- **Access levels:** To add work items, view or run tests, and use all board features, have at least [**Basic** access](../../organizations/security/access-levels.md). Users with **Stakeholder** access can't view or run tests.

- **Permissions:**
  - Set **View work items in this node** and **Edit work items in this node** permissions to **Allow** to view or modify work items. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).
::: moniker-end

## Open your board from the web portal

1. To view your board, open your project from a web browser and choose (1) **Work**, (2) **Boards**, and then (3) select the team's board from the selector. 

	![Screenshot showing Opening your board action.](media/quickstart/open-kanban-board-agile.png)  

	To choose another team's board, open the selector and select a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing selecting another team's board.](media/quickstart/select-kanban-team-board.png)  

	> [!TIP]    
	> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team board. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list.

## Add inline tests   

1. To start adding tests, open the menu for the work item.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing Open context menu of a backlog item to add inline test case.](media/i-test-add-test.png)   

	Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite automatically get created under which the manual test cases are grouped.

	For example, a test suite is created for each user story, and all inline tests are added to that suite. In the following example, user story 152 is highlighted which has three manual tests defined with IDs of 153, 155, and 161.  

	![Screenshot showing  Inline test cases get added to test suites and test plans.](media/i-test-plan-suite.png) 

	For more information, see [Plan your tests](../../test/create-a-test-plan.md).  

2. If you have many tests to add, keep entering each title and select **Enter**. 

	<img src="media/i-test-story-with-3-inline-tests.png" alt="Screenshot showing Work item with several test cases added." />   

	To add details to the test case, open it. You can select the title, double-click the inline item, or open the context menu and choose Open. 

	<img src="media/i-test-case-form.png" alt="Screenshot showing opening a test case form from board." /> 

See [Create manual tests](../../test/create-test-cases.md) to learn more about defining tests. 

Before running the test, you must add details. 

## Run the inline test 

Run the test by selecting ![Run icon](../media/icons/run_query.png) Run test from the   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  actions menu for the inline test.  

<img src="media/i-test-run-test.png" alt="Screenshot showing running a test." />  

Microsoft Test Runner starts in a new browser instance. For more information, see [Run manual tests](../../test/run-manual-tests.md).

## Update the status of an inline test from the action menu 

You can update the status of the test from the   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  actions menu. 

<img src="media/i-test-update-status.png" alt="Screenshot showing completed tasks." /> 
 
Updating the status of tests lets you <a href="../../test/track-test-status.md" data-raw-source="[track test results](../../test/track-test-status.md)">track test results</a>.  

## Expand or collapse inline tests  

When you first open a board, you're presented with an unexpanded view of checklists.

![Screenshot showing Inline tests collapsed.](media/i-test-open-board-collapsed-tests.png)

Hover over the inline test summary to show a test summary.

:::image type="content" source="media/hover-test-summary.png" alt-text="Screenshot showing test summary upon hover.":::

Select the inline test summary to expand a collapsed set of tests. Select the same summary to collapse an expanded list. 

![Screenshot showing Inline tests expanded.](media/i-test-expanded-test-list.png)

## Copy or reparent a test 

To reparent a test, drag and drop the test to a different user story.    

![Screenshot showing Drag tests to reassign them to a different user story.](media/i-test-drag-reparent.png)  

This action automatically changes the linked relationship of the test and points to the new user story. 

To create a copy of a test to add to a different user story, select the test, select the CTRL key, and then drag and drop the test onto the user story card.

## Link a test case to a work item

When you link a test case to a work item using the "Tested By" link type, the board reflects the test status of the linked test case. However, if the requirement-based suite has multiple configurations, the board only shows the test outcome for the default configuration.

## Next steps

> [!div class="nextstepaction"]
> [Install the Test & Feedback extension](../../test/perform-exploratory-tests.md)

## Related articles

- [Create manual tests](../../test/create-test-cases.md).  
- [Disable this feature from the common configurations dialog](../../boards/boards/customize-cards.md).
- [Add tasks or child items as checklists](add-task-checklists.md)
- [Create a new branch, drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md)
