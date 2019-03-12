---
title: Create manual tests
description: Test tools - Create manual tests in Azure DevOps and TFS to make sure each of the deliverables meets your users needs
ms.assetid: C3C10A82-C7F2-4AB6-9CED-B43DAF722800
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Create manual test cases

[!INCLUDE [version-header](_shared/version-header.md)] 

<a name="test-cases"></a>
Create manual test cases to check that each of the deliverables 
meet your users' needs. Organize your test cases by adding them
to test plans and test suites. Then choose which testers you want to run 
the tests.

[What are test plans, test suites, and test cases?](create-a-test-plan.md#testplans)

[!INCLUDE [feature-availability](_shared/feature-availability.md)] 

**Note**: Stakeholders cannot create or manage test cases. You must have at least Basic access.
See [Default manual testing permissions and access](manual-test-permissions.md).

<a name="createcase"></a>
## Create test cases

1. If you haven't already, 
   [create a test plan and requirement-based test suites](create-a-test-plan.md).

1. Select a requirement-based test suite. In the right-hand pane, choose **+** (New)
   and then choose **New test case**.

   ![Selecting the test suite for a backlog item and adding a new test case](_img/create-test-cases/CreateTest_1.png)

   > The [test suite](create-a-test-plan.md) shown here was created from a User Story work item in the team's backlog board. 
   > When you add a test case to this kind of suite, the test case is automatically linked to the backlog item.
   > To create test cases this way, open the shortcut menu for the work item and choose **Add test**.    

1. Choose the **Click or type here to add a step** link and add test steps
   with a description of the action required to carry out the test and the
   expected results so that any team member can run the test.
   You can add attachments to a step if you want. Repeat until you have added
   all the steps for the test. Now you've created a test case that you can run.

   ![Creating the steps for a new manual test case](_img/create-test-cases/CreateTest_3.png)

   [How can I find an existing test case within a test plan?](create-a-test-plan.md#findplan)
   
   [How do I add multiple test cases at the same time?](reference-qa.md#add-multiple-test-cases)

> Test iterations are designed to support data-driven scenarios, not workflow-driven scenarios.
  From a best practice perspective, if you have two test scenarios where the workflows are
  different, consider creating separate test cases. Also see the [FAQs for manual testing](reference-qa.md#testcases).

<a name="assigncase"></a>
## Assign testers

1. You can reassign test cases so that another tester can 
   run them. Select the tests that you want to reassign. Then 
   open the shortcut menu (choose the "..." ellipses or right-click) 
   and select the tester you want to run the tests.

   ![Reassigning tests to a different tester](_img/create-test-cases/AssignTester.png)

   Or, you can assign all the test cases in a test suite to multiple testers. 
   This is useful for acceptance testing. Open the shortcut menu for the test plan
   and choose **Assign testers to run all tests**. 
   
   ![Assigning testers to run all tests](_img/create-test-cases/AssignMultipleTesters.png)

1. Add or remove testers from the list. After you select the testers, tick the **Send email**
   checkbox and edit the message as required so they know that tests are ready for them to run.

   ![Send emails to testers](_img/create-test-cases/AssignMultipleTestersEmail.png)

   The email contains a link that testers can open to see the list of assigned tests.
   Testers need just [Basic access](https://visualstudio.microsoft.com/products/visual-studio-online-Basic-vs)
   to run tests from Azure Test Plans.

## See also

* [FAQs for manual testing](reference-qa.md#testcases)
* [Link test cases to work items](../boards/queries/link-work-items-support-traceability.md)

##  Next step

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)
