---
title: Add, run, and update inline tests | VSTS  
description: Add, run, and update manual test cases via the inline test feature on your Kanban board for lightweight tracking and traceability when working in Visual Studio Team Services (VSTS)    
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: ED3CC394-EE6C-4E12-A2BC-F43A0EE17318  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 10/10/2017
---

#Add, run, and update inline tests

[!INCLUDE [temp](../_shared/dev15-and-ts-version-header.md)]  

>[!NOTE]  
><b>Feature availability: </b>The Kanban board inline tests feature is supported from VSTS and TFS 2017 and later versions.   

Similar to [task checklists](add-task-checklists.md), you can quickly define inline tests, or a set of manual tests, for a backlog item from your Kanban board. Not only can you add tests, you can run them and update their status. If you're new to working with the Kanban board, see [Kanban basics](kanban-basics.md). 


In this topic, you'll learn: 
> [!div class="checklist"] 
> * How to add inline tests to a backlog item from your Kanban board  
> * How to run tests and update the status of tests  
> * How to expand or collapse inline tests   
> * How to reorder or reparent inline tests  

<img src="_img/i-test-board-intro.png" alt="Web portal, Kanban board with several inline tests defined" style="border: 1px solid #C3C3C3;" /> 

Tests you create from the Kanban board are automatically linked to the user story or backlog item.  
 
## Add tests   

1. To start adding tests, open the menu for the work item.  

	<img src="_img/i-test-add-test.png" alt="Open the context menu of a backlog item to add inline test case" style="border: 1px solid #C3C3C3;" /> 

  Adding inline tests is the same as adding test cases to a test suite. A default test plan and test suite are automatically created under which the manual test cases are grouped.  

  For example, a test suite is created for each user story, and all inline tests are added to that suite. Below, user story 152 is highlighted which has three manual tests defined with IDs of 153, 155, and 161.  

	<img src="_img/i-test-plan-suite.png" alt="Inline test cases get added to test suites and test plans" style="border: 1px solid #C3C3C3;" /> 

  To learn more about test plans and test suites, see [Plan your tests](../../manual-test/getting-started/create-a-test-plan.md).  

2. If you have a number of tests to add, simply keep typing each title and click Enter. 

	<img src="_img/i-test-story-with-3-inline-tests.png" alt="Work item with several test cases added" style="border: 1px solid #C3C3C3;" />   

	To add details to the test case, open it. You can click the title, double-click the inline item, or open the context menu and choose Open. 

	<img src="_img/i-test-case-form.png" alt="Open test case form from Kanban board" style="border: 1px solid #C3C3C3;" /> 

See [Create manual tests](../../manual-test/getting-started/create-test-cases.md) to learn more about defining tests. 

Prior to running the test, you must add details. 

## Run test 

Run the test by selecting ![Run icon](../_img/icons/run_query.png) Run test from the ![Actions icon](../_img/icons/actions-icon.png) actions menu for the inline test.  

<img src="_img/i-test-run-test.png" alt="Run a test" style="border: 1px solid #C3C3C3;" />  

Microsoft Test Runner starts in a new browser instance. For details on running a test, see [Run manual tests](../../manual-test/getting-started/run-manual-tests.md).


## Update the status of a test  

You can update the status of the test from the ![Actions icon](../_img/icons/actions-icon.png) actions menu . 

<img src="_img/i-test-update-status.png" alt="Check tasks that are complete" style="border: 1px solid #C3C3C3;" /> 
 
Updating the status of tests enable you to [track test results](../../manual-test/getting-started/track-test-status.md).  

[Why doesn't the Kanban board show the status for test suites and plans already created in the Test hub?](#test-status-kanban)

## Expand or collapse inline tests  

Upon first opening the Kanban board, you'll see an unexpanded view of checklists.

![Inline tests collapsed](_img/i-test-open-board-collapsed-tests.png)

Simply click the inline test summary to expand a collapsed set of tests. Click the same summary to collapse an expanded list. 

![Inline tests expanded](_img/i-test-expanded-test-list.png)

## Copy or reparent a test 

To reparent a test, drag and drop the test onto a different user story.    

![Drag tests to reassign them to a different user story ](_img/i-test-drag-reparent.png)  

This action automatically changes the linked relationship of the test to point to the new user story. 

To create a copy of a test to add to a different user story, select the test, press the CTRL key and then drag and drop the test onto the card of the user story.  


## Related notes

Use inline tests for lightweight traceability and to manage manual tests for user stories or other backlog items that they support. To learn more about test case management, see [Create manual tests](../../manual-test/getting-started/create-test-cases.md).  

If you find that you don't use this feature, you can disable it from the [common configurations dialog](../customize/customize-cards.md#annotations). 

Additional ways you can quickly add linked items and objects to user stories from the Kanban board:
- [Add inline tasks](add-task-checklists.md)
- [Create a new branch, drive Git development](../backlogs/connect-work-items-to-git-dev-ops.md) 

To initate web-based exploratory testing for a user story, you need to install the Exploratory testing , see [Exploratory test your web app directly in your browser](../../manual-test/getting-started/perform-exploratory-tests.md).

<a name="test-status-kanban"></a>
### Test status in the Kanban board

Test integration with the Kanban board makes it easy for teams to get started with manual testing and then take advantage of the full testing capabilities in Test Manager later, when required. When test cases are created from the Kanban board and updated afterwards in Test Manager, the Kanban board shows the correct status. However, integration is not optimized to work in the other direction; for example, when users create requirement-based suites with Test Manager instead of in the Kanban board. We intend to make some major performance improvements to this integration in future releases.


### REST API resources
To programmatically create test cases, see the [Test management (REST API reference)](/vsts/extend/overview).


