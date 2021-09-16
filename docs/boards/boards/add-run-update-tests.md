---
title: Add, run, and update inline tests
titleSuffix: Azure Boards  
description: Add, run, and update manual test cases on your Kanban board for lightweight tracking in Azure Boards, Azure DevOps, & Team Foundation Server   
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.assetid: ED3CC394-EE6C-4E12-A2BC-F43A0EE17318  
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2017'
ms.date: 09/14/2021
---

# Add, run, and update inline tests

[!INCLUDE [temp](../../includes/dev15-and-ts-version-header.md)]  

Similar to [task checklists](add-task-checklists.md), you can quickly define inline tests, or a set of manual tests cases, for a backlog item from your Kanban board. Not only can you add tests, you can run them and update their status. If you're new to working with the Kanban board, see [Kanban basics](kanban-basics.md). If you're new to testing, see [Exploratory and manual testing scenarios and capabilities](../../test/overview.md).

In this article, you'll learn: 
> [!div class="checklist"]    
> * How to add inline tests to a backlog item from your Kanban board  
> * How to run tests and update the status of tests  
> * How to expand or collapse inline tests   
> * How to reorder or reparent inline tests  

<img src="media/i-test-board-intro.png" alt="Web portal, Kanban board with several inline tests defined" /> 

Tests you create from the Kanban board are automatically linked to the user story or backlog item.  

## Prerequisites

::: moniker range="azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](../get-started/sign-up-invite-teammates.md). 
* You must be added to a [team or project](../../organizations/security/add-users-team-project.md). 
* To add work items and exercise all board features, you must be granted [**Basic** access or higher](../../organizations/security/access-levels.md).
* To view or modify work items, your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
- To view or run tests, you must have **Basic** access or higher. Users with **Stakeholder** access can't view or run tests.  
::: moniker-end

::: moniker range="< azure-devops"
* You must connect to a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md).
* You must be added to a [team or project](../../organizations/security/add-users-team-project.md). 
* To add work items and exercise all board features, you must be granted [**Basic** access or higher](../../organizations/security/access-levels.md).
* To view or modify work items, your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
- To view or run tests, you must have **Basic** access or higher. Users with **Stakeholder** access can't view or run tests.  

::: moniker-end


## Open your Kanban board from the web portal

::: moniker range=">= azure-devops-2019"

1. To view your Kanban board, open your project from a web browser and choose (1) **Work**, (2) **Boards**, and then (3) select the team's board from the selector. 

	![Open your Kanban board](media/quickstart/open-kanban-board-agile.png)  

	To choose another team's board, open the selector and select a different team or choose the :::image type="icon" source="/azure/devops/media/icons/home-icon.png" border="false"::: **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team's board](media/quickstart/select-kanban-team-board.png)  

	> [!TIP]    
	> Choose the :::image type="icon" source="/azure/devops/media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team board. Favorited artifacts (:::image type="icon" source="/azure/devops/media/icons/icon-favorited.png" border="false"::: favorited icon) appear at the top of the team selector list.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

1. To view your Kanban board, open your (1) project from a web browser and choose (2) **Work**, (3) **Backlogs**, (4) **Stories**, and then (5) **Board**. 
	![Taskboard, collapsed backlog items, cloud service](media/quickstart/open-kanban-board.png)

	If you don't see **Work**, your screen size may be reduced. Click the three dots (:::image type="icon" source="/azure/devops/media/ellipses-reduced-screen-size.png" border="false":::, then choose **Work**, **Backlogs**, and then **Board**.   

	![Open Work when screen size is reduced](media/kanban-quickstart-reduced-screensize.png)   

1. To choose another team, open the project/team selector and select a different team or choose the **Browse** option. 

   > [!div class="mx-imgBorder"]  
   > ![Choose another team](../sprints/media/assign-items-sprint/team-selector-backlogs-standard.png) 

2. Your Kanban board displays. 

	![Kanban board, Agile template](media/kanban-basics-intro.png)  

::: moniker-end

## Add tests   

1. To start adding tests, open the menu for the work item.  

	> [!div class="mx-imgBorder"]  
	> ![Open the context menu of a backlog item to add inline test case](media/i-test-add-test.png)   

	Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite are automatically created under which the manual test cases are grouped.

	For example, a test suite is created for each user story, and all inline tests are added to that suite. Below, user story 152 is highlighted which has three manual tests defined with IDs of 153, 155, and 161.  

	![Inline test cases get added to test suites and test plans](media/i-test-plan-suite.png) 

	To learn more about test plans and test suites, see [Plan your tests](../../test/create-a-test-plan.md).  

2. If you have a number of tests to add, simply keep typing each title and click Enter. 

	<img src="media/i-test-story-with-3-inline-tests.png" alt="Work item with several test cases added" />   

	To add details to the test case, open it. You can click the title, double-click the inline item, or open the context menu and choose Open. 

	<img src="media/i-test-case-form.png" alt="Open test case form from Kanban board" /> 

See [Create manual tests](../../test/create-test-cases.md) to learn more about defining tests. 

Prior to running the test, you must add details. 

## Run test 

Run the test by selecting ![Run icon](../media/icons/run_query.png) Run test from the   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  actions menu for the inline test.  

<img src="media/i-test-run-test.png" alt="Run a test" />  

Microsoft Test Runner starts in a new browser instance. For details on running a test, see [Run manual tests](../../test/run-manual-tests.md).


## Update the status of a test  

You can update the status of the test from the   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  actions menu . 

<img src="media/i-test-update-status.png" alt="Check tasks that are complete" /> 
 
Updating the status of tests enable you to <a href="../../test/track-test-status.md" data-raw-source="[track test results](../../test/track-test-status.md)">track test results</a>.  

[Why doesn't the Kanban board show the status for test suites and plans already created in **Test**?](#test-status-kanban)

## Expand or collapse inline tests  

Upon first opening the Kanban board, you'll see an unexpanded view of checklists.

![Inline tests collapsed](media/i-test-open-board-collapsed-tests.png)

Simply click the inline test summary to expand a collapsed set of tests. Click the same summary to collapse an expanded list. 

![Inline tests expanded](media/i-test-expanded-test-list.png)

## Copy or reparent a test 

To reparent a test, drag and drop the test onto a different user story.    

![Drag tests to reassign them to a different user story ](media/i-test-drag-reparent.png)  

This action automatically changes the linked relationship of the test to point to the new user story. 

To create a copy of a test to add to a different user story, select the test, press the CTRL key and then drag and drop the test onto the card of the user story.  


## Related articles

Use inline tests for lightweight traceability and to manage manual tests for user stories or other backlog items that they support. To learn more about test case management, see [Create manual tests](../../test/create-test-cases.md).  

If you find that you don't use this feature, you can disable it from the [common configurations dialog](../../boards/boards/customize-cards.md#annotations). 

Additional ways you can quickly add linked items and objects to user stories from the Kanban board:
- [Add tasks or child items as checklists](add-task-checklists.md)
- [Create a new branch, drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md) 

To initiate web-based exploratory testing for a user story, you need to install the [Test & Feedback Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web). For details, see [Install the Test & Feedback extension](../../test/perform-exploratory-tests.md).

<a name="test-status-kanban"></a>
### Test status in the Kanban board

Test integration with the Kanban board makes it easy for teams to get started with manual testing and then take advantage of the full testing capabilities in Test Manager later, when required. When test cases are created from the Kanban board and updated afterwards in Test Manager, or vice-versa, when users create requirement-based suites with Test Manager and update them in Test Manager, the Kanban board shows the correct status. However, the Test status in Kanban board does not work if the requirement-based suite has more than one configuration assigned to it. In such scenario, the Kanban board only shows the test outcome for the default configuration. Hence, it is recommended to use Test Manager to manage/track the testing progress across multiple configurations. 
