---
title: Add, run, and update inline tests
titleSuffix: VSTS 
description: Add, run, and update manual test cases when working in Visual Studio Team Services  
ms.technology: devops-new-user
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 08/01/2018
ms.topic: quickstart
monikerRange: 'vsts'
---


# Add, run, and update inline tests

**VSTS**

A quick and easy way to start manual testing is to add the test to the user story or bug you want to test. From the Kanban board, you can quickly define inline tests, or a set of manual tests, for a backlog item. Not only can you add tests, you can run them and update their status. If you're new to working with the Kanban board, see [Kanban quickstart](../work/kanban/kanban-quickstart.md). 

Tests you create from the Kanban board are automatically linked to the user story or backlog item.  
 
## Open your Kanban board

[!INCLUDE [temp](../work/_shared/new-agile-hubs-feature.md)]

# [New navigation](#tab/new-nav)

1. From your web browser, open the project for your VSTS organization and click the **Work** hub. If you don't have a team project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The URL follows this pattern: ```https://{organization name}.visualstudio.com/{project name}/_backlogs```  

	If you don't see the team or project you want, choose the ![VSTS icon](../_img/icons/project-icon.png) VSTS icon to [browse all projects and teams](../project/navigation/work-across-projects.md).  

2. Select **Boards** to open the Kanban board.

# [Previous navigation](#tab/prev-nav)

1. From your web browser, open the team project for your VSTS organization and choose the **Work** hub. If you don't have a team project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The URL follows this pattern: ```https://{organization name}.visualstudio.com/{project name}/_backlogs```  

	If you don't see the team or project you want, choose the ![VSTS icon](../_img/icons/project-icon.png) VSTS icon to [browse all projects and teams](../project/navigation/work-across-projects.md).  

2. Select **Board** to open the Kanban board.

---

## Add tests

# [New navigation](#tab/new-nav)

1. To start adding tests, open the menu for a work item.

   ![Add manual test](_img/add-manual-test.png)

   Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite are automatically created under which the manual test cases are grouped.  

	For example, a test suite is created for the following user story and inline tests are added to that suite. User story 314 is highlighted, which has two manual tests defined with IDs of 337 and 341.  

   ![Manual test plan](_img/manual-test-plan.png)

2. If you have a number of tests to add, simply keep entering each title and choose **Enter**.

   ![work item add more test cases](_img/work-item-add-more-test-cases.png)

	To add details to the test case, open it. You can select the title, double-select the inline item, or open the context menu and choose **Open**. 

   ![Open test case from kanban board](_img/open-test-case-form-from-kanban-board.png)

See [Create manual tests](../test/create-test-cases.md) to learn more about defining tests. 

> [!IMPORTANT]  
> Prior to running the test, you must add details.  

# [Previous navigation](#tab/prev-nav)

1. To start adding tests, open the menu for the work item.

	<img src="../work/kanban/_img/i-test-add-test.png" alt="Open the context menu of a backlog item to add inline test case" style="border: 2px solid #C3C3C3;" /> 

	Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite are automatically created under which the manual test cases are grouped.  

	For example, a test suite is created for each user story, and all inline tests are added to that suite. Below, user story 152 is highlighted which has three manual tests defined with IDs of 153, 155, and 161.  

	<img src="../work/kanban/_img/i-test-plan-suite.png" alt="Inline test cases get added to test suites and test plans" style="border: 2px solid #C3C3C3;" /> 

	To learn more about test plans and test suites, see [Plan your tests](../test/create-a-test-plan.md).  

2. If you have a number of tests to add, simply keep entering each title and choose Enter. 

	<img src="../work/kanban/_img/i-test-story-with-3-inline-tests.png" alt="Work item with several test cases added" style="border: 2px solid #C3C3C3;" />   

	To add details to the test case, open it. You can select the title, double-select the inline item, or open the context menu and choose **Open**.

	<img src="../work/kanban/_img/i-test-case-form.png" alt="Open test case form from Kanban board" style="border: 2px solid #C3C3C3;" /> 

See [Create manual tests](../test/create-test-cases.md) to learn more about defining tests.

> [!IMPORTANT]  
> Prior to running the test, you must add details.

---

## Run a test

# [New navigation](#tab/new-nav)

Run the test by selecting ![Run icon](../work/_img/icons/run_query.png) **Run test** from the ![Actions icon](../work/_img/icons/actions-icon.png) actions menu for the inline test.

![Run manual test](_img/run-manual-test.png)

Microsoft Test Runner starts in a new browser instance. For details on running a test, see [Run manual tests](../test/run-manual-tests.md).

# [Previous navigation](#tab/prev-nav)

Run the test by selecting ![Run icon](../work/_img/icons/run_query.png) Run test from the ![Actions icon](../work/_img/icons/actions-icon.png) actions menu for the inline test.  

<img src="../work/kanban/_img/i-test-run-test.png" alt="Run a test" style="border: 2px solid #C3C3C3;" />  

Microsoft Test Runner starts in a new browser instance. For details on running a test, see [Run manual tests](../test/run-manual-tests.md).

---

## Update the status of a test

# [New navigation](#tab/new-nav)

You can update the status of the test from the ![Actions icon](../work/_img/icons/actions-icon.png) actions menu. 

<img src="../work/kanban/_img/i-test-update-status.png" alt="Check tasks that are complete" style="border: 2px solid #C3C3C3;" /> 
 
Updating the status of tests enable you to [track test results](../test/track-test-status.md).

# [Previous navigation](#tab/prev-nav)

You can update the status of the test from the ![Actions icon](../work/_img/icons/actions-icon.png) actions menu.

   ![pass-test](_img/pass-test.png)
 
Updating the status of tests enable you to [track test results](../test/track-test-status.md).  

---

## Expand or collapse inline tests

# [New navigation](#tab/new-nav)

Upon first opening the Kanban board, you'll see an un-expanded view of checklists and tests.

   ![Inline tests collapsed](_img/open-board-collapsed-tests.png)

Simply select the inline test summary to expand a collapsed set of tests. Select the same summary to collapse an expanded list.

![Inline tests expanded](_img/test-expanded-test-list.png)

# [Previous navigation](#tab/prev-nav)

Upon first opening the Kanban board, you'll see an un-expanded view of checklists.

![Inline tests collapsed](../work/kanban/_img/i-test-open-board-collapsed-tests.png)

Simply select the inline test summary to expand a collapsed set of tests. Select the same summary to collapse an expanded list.

![Inline tests expanded](../work/kanban/_img/i-test-expanded-test-list.png)

---

## Next steps

Use inline tests for lightweight traceability and to manage manual tests for user stories or other backlog items that they support.
  
> [!div class="nextstepaction"]
> [Learn more about test case management](../test/create-test-cases.md)
> [Kanban quickstart](../work/kanban/kanban-quickstart.md)

To initiate web-based exploratory testing for a user story, you need to install the Exploratory testing , see [Exploratory test your web app directly in your browser](../test/perform-exploratory-tests.md).

