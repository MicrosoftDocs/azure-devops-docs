---
title: Add, run, and update inline tests
titleSuffix: VSTS 
description: Add, run, and update manual test cases when working in Visual Studio Team Services  
ms.technology: devops-new-user
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 08/24/2017
ms.topic: quickstart
monikerRange: 'vsts'
---


# Add, run, and update inline tests

**VSTS**

A quick and easy way to start manual testing is to add the test to the user story or bug you want to test. From the Kanban board, you can quickly define inline tests, or a set of manual tests, for a backlog item. Not only can you add tests, you can run them and update their status. If you're new to working with the Kanban board, see [Kanban quickstart](../work/kanban/kanban-quickstart.md). 

Tests you create from the Kanban board are automatically linked to the user story or backlog item.  
 
## Open your Kanban board 

0. From your web browser, open the team project for your VSTS account and click the **Work** hub. If you don't have a team project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The URL follows this pattern: ```https://{account name}.visualstudio.com/{project name}/_backlogs```  

	If you don't see the team or team project you want, click the ![VSTS icon](../work/_img/icons/project-icon.png) VSTS icon to [browse all team projects and teams](account-home-pages.md).  

0. Click **Board** to open the Kanban board. 

## Add tests

0. To start adding tests, open the menu for the work item.  

	<img src="../work/kanban/_img/i-test-add-test.png" alt="Open the context menu of a backlog item to add inline test case" style="border: 2px solid #C3C3C3;" /> 

	Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite are automatically created under which the manual test cases are grouped.  

	For example, a test suite is created for each user story, and all inline tests are added to that suite. Below, user story 152 is highlighted which has three manual tests defined with IDs of 153, 155, and 161.  

	<img src="../work/kanban/_img/i-test-plan-suite.png" alt="Inline test cases get added to test suites and test plans" style="border: 2px solid #C3C3C3;" /> 

	To learn more about test plans and test suites, see [Plan your tests](../test/create-a-test-plan.md).  

2. If you have a number of tests to add, simply keep typing each title and click Enter. 

	<img src="../work/kanban/_img/i-test-story-with-3-inline-tests.png" alt="Work item with several test cases added" style="border: 2px solid #C3C3C3;" />   

	To add details to the test case, open it. You can click the title, double-click the inline item, or open the context menu and choose Open. 

	<img src="../work/kanban/_img/i-test-case-form.png" alt="Open test case form from Kanban board" style="border: 2px solid #C3C3C3;" /> 

See [Create manual tests](../test/create-test-cases.md) to learn more about defining tests. 

> [!IMPORTANT]  
> Prior to running the test, you must add details. 

## Run a test

Run the test by selecting ![Run icon](../work/_img/icons/run_query.png) Run test from the ![Actions icon](../work/_img/icons/actions-icon.png) actions menu for the inline test.  

<img src="../work/kanban/_img/i-test-run-test.png" alt="Run a test" style="border: 2px solid #C3C3C3;" />  

Microsoft Test Runner starts in a new browser instance. For details on running a test, see [Run manual tests](../test/run-manual-tests.md).

## Update the status of a test

You can update the status of the test from the ![Actions icon](../work/_img/icons/actions-icon.png) actions menu . 

<img src="../work/kanban/_img/i-test-update-status.png" alt="Check tasks that are complete" style="border: 2px solid #C3C3C3;" /> 
 
Updating the status of tests enable you to [track test results](../test/track-test-status.md).  

## Expand or collapse inline tests

Upon first opening the Kanban board, you'll see an unexpanded view of checklists.

![Inline tests collapsed](../work/kanban/_img/i-test-open-board-collapsed-tests.png)

Simply click the inline test summary to expand a collapsed set of tests. Click the same summary to collapse an expanded list. 

![Inline tests expanded](../work/kanban/_img/i-test-expanded-test-list.png)

## Try this next

Use inline tests for lightweight traceability and to manage manual tests for user stories or other backlog items that they support. 
  
> [!div class="nextstepaction"]
> [Learn more about test case management](../test/create-test-cases.md)
> [Kanban quickstart](../work/kanban/kanban-quickstart.md) 

To initiate web-based exploratory testing for a user story, you need to install the Exploratory testing , see [Exploratory test your web app directly in your browser](../test/perform-exploratory-tests.md).

