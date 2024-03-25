---
title: Add, run, update inline tests
titleSuffix: Azure DevOps
description: Learn how to add, run, and quickly update manual test cases
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.date: 04/23/2019
ms.topic: quickstart
monikerRange: '<= azure-devops'
---

# Add, run, update inline tests

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Learn how to add, run, update, and expand and collapse inline tests in Azure DevOps.

To start manual testing, add the test to the user story or bug that you want to test. From the Kanban board, you can define inline tests or a set of manual tests for a backlog item. You also can run these tests and update their status. If you're new to working with the Kanban board, see the [Kanban quickstart](../boards/boards/kanban-quickstart.md).

Tests you create from the Kanban board are automatically linked to the user story or backlog item.  

## Open your Kanban board

::: moniker range=">= azure-devops-2019"

1. From your web browser, open the project for your organization and select **Azure Boards**. If you don't have a project, [create one now](../organizations/projects/create-project.md). If you haven't been added as a team member, [get invited now](../organizations/security/add-users-team-project.md).

	The URL follows this pattern: ```https://dev.azure.com/fabrikamfiber/_boards/board```  

	If you don't see the team or project you want, select ![Azure DevOps icon](../media/icons/project-icon.png) **Azure DevOps** to [browse all projects and teams](../project/navigation/work-across-projects.md).  

2. Select **Boards** to open the Kanban board.

   ![Azure Boards](media/azure-devops-boards-board.png)

::: moniker-end



## Add tests

::: moniker range=">= azure-devops-2019"

1. To add tests, open the menu for a work item.

   ![Add manual test](media/add-manual-test.png)

   Inline tests are the same as test cases in a test suite. A default test plan and test suite automatically get created under which the manual test cases are grouped.  

	For example, a test suite is created for the following user story, and inline tests are added to that suite. User story 314 is highlighted. It has two manual tests defined with the IDs 337 and 341.  

   ![Manual test plan](media/manual-test-plan.png)

2. If you have a number of tests to add, enter each title and select **Enter**.

   ![Work item, add more test cases](media/work-item-add-more-test-cases.png)

	To add details to the test case, open it. You can select the title, double-select the inline item, or open the context menu and choose **Open**.

   ![Open test case from Kanban board](media/open-test-case-form-from-kanban-board.png)

To learn more about how to define tests, see [Create manual tests](../test/create-test-cases.md).

Before you run the test, you must add details.

::: moniker-end



---

## Run a test

::: moniker range=">= azure-devops-2019"

Run the test by selecting ![Run icon](../boards/media/icons/run_query.png) **Run test** from the ![Actions icon](../boards/media/icons/actions-icon.png) actions menu for the inline test.

![Run manual test](media/run-manual-test.png)

Microsoft Test Runner starts in a new browser instance. For information on how to run a test, see [Run manual tests](../test/run-manual-tests.md).
::: moniker-end



## Update the status of a test

::: moniker range=">= azure-devops-2019"

You can update the status of the test from the ![Actions icon](../boards/media/icons/actions-icon.png) actions menu.

![Update status of tests](media/test-update-status.png)

When you update the status of tests, you can [track test results](../test/track-test-status.md).

::: moniker-end



## Expand or collapse inline tests

::: moniker range=">= azure-devops-2019"

When you first open the Kanban board, you'll see an unexpanded view of checklists and tests.

   ![Inline tests collapsed](media/azure-devops-boards-board.png)

Select the inline test summary to expand a collapsed set of tests. Select the same summary to collapse an expanded list.

![Inline tests expanded](media/test-expanded-test-list.png)

::: moniker-end



## Next steps
  
> [!div class="nextstepaction"]
> [Kanban quickstart](../boards/boards/kanban-quickstart.md)

## Related articles
- [Learn more about test case management](../test/create-test-cases.md)
- [Exploratory test your web app directly in your browser](../test/perform-exploratory-tests.md)
- [Essential services](services.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
