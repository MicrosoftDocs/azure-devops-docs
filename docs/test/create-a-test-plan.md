---
title: Create test plans and suites
description: Test tools - Create test plans in Azure Test Plans and Azure DevOps Server to make sure each of the deliverables meets your users needs
ms.assetid: 99FD819E-A861-4F28-A486-FD452DB65D69
ms.technology: devops-test
ms.topic: quickstart
ms.author: sdanie
author: steved0x
ms.date: 11/15/2019
monikerRange: '>= tfs-2015'
---

# Create test plans and test suites

[!INCLUDE [version-header](includes/version-header.md)] 

Create test plans and test suites to track manual testing for sprints or milestones.
That way, you can see when the testing for a specific sprint or milestone is complete.
For more information about manual testing, see [Planned manual testing](overview.md#planned-manual-testing) and [Automated and Manual Testing with Azure Test Plans](https://www.youtube.com/watch?v=LF0hmSysWCg).

<a name="testplans"></a>

## What are test plans, test suites, and test cases?

[!INCLUDE [test-hub-include](includes/test-hub-include.md)] provides three main types of test management artifacts: test plans, test suites, and test cases.
These elements are stored in your work repository as special types of work items. 
You can export and share them with your team, and benefit from close integration for all of your DevOps tasks.

* **Test plans** group test suites and individual test cases together.
  Test plans include static test suites, requirement-based suites, and [query-based suites](reference-qa.md#query-based-suites).

* **Test suites** group test cases into separate testing scenarios within a single test plan.
  Grouping test cases makes it easier to see which scenarios are complete.

* **Test cases** validate individual parts of your code or app deployment.
  You can ensure your code works correctly, has no errors, and meets business and customer requirements.
  You can add individual test cases to a test plan without creating a test suite, if you wish.
  More than one test suite or test plan can refer to a test case.
  You can effectively reuse test cases without needing to copy or clone them for each suite or plan.
  See [Create manual test cases](create-test-cases.md).

For example, you're building version 1.* of your product and you might create several test cases for that version.
Each of these test cases can be updated, and more added, at any time.
For each development cycle and release of your product, you create a test plan and import the existing test cases into that plan.
You can also, if you wish, divide the test cases into separate test suites within the plan to enable easier management and monitoring of these separate sets of test cases.

After you create your test plan, you [assign test configurations](test-different-configurations.md) and [assign testers](create-test-cases.md#assign-testers) to cover the required test matrix.
These testers [run the tests](run-manual-tests.md) and gauge the quality of the product.
Testers continue testing until the product meets exit criteria.
For the next development cycle and release, you can create a new test plan and reuse the same test cases.
You repeat this development-test-release cycle by importing the same test cases into each new test plan.

The great thing is that, because test plans refer to test cases, updates to a test case automatically reflect in all the test plans and test suites that use it.

In the next version of the product, you can reuse the existing test cases.
However, a better option may be to [copy or clone the test cases](reference-qa.md#creating-manual-test-cases). A copy creates a new baseline. Changes to these new test cases don't affect your previous test plans.

> [!TIP]
> For more information about the ways you can work with test plans, test suites, and test cases, see the [FAQs for manual testing](reference-qa.md#testplans).

[!INCLUDE [feature-availability](includes/feature-availability.md)]

## Prerequisites

To manage test artifacts, you must have the correct permissions and access level.

### Manage test artifacts permissions

You must be a member of the Project Administrators group or have Manage Test Plans and Manage Test Suites [permissions](../organizations/security/set-permissions-access-test.md).

### Access level

::: moniker range="< azure-devops-2019"

To create and edit a test artifact, you must have your [access level set to Advanced](../organizations/security/access-levels.md).
These artifacts include test plan, test suite, test case, test configuration, shared step, and shared parameter.

::: moniker-end

::: moniker range=">= azure-devops-2019"

To create and edit a test artifact, you must have one of the following access levels:

- [Basic + Test plans](../organizations/security/access-levels.md)
- [Visual Studio Enterprise](../organizations/security/access-levels.md)
- [Basic](../organizations/security/access-levels.md) edit test cases, but not create them or other types of test artifacts

Test artifacts include test plan, test suite, test case, test configuration, shared step, and shared parameter.

>[!NOTE]
> Stakeholders can't create or manage test cases. You must have at least Basic access.
See [Default manual testing permissions and access](manual-test-permissions.md).

::: moniker-end

<a name="testplan"></a>

## Create a test plan

If you want to use Azure Test Plans, and haven't done so already, [sign up for Azure DevOps Services](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs).

You need a project. For more information, see [create your project](../organizations/accounts/organization-management.md). Then [create your backlog](../boards/backlogs/create-your-backlog.md).

1. In Azure DevOps Services or Azure DevOps Server, open your project and go to [!INCLUDE [test-hub-include](includes/test-hub-include.md)].
   If you already have a test plan, choose **Test Plans** to go to the page that lists all test plans.

   ![Opening the list of test plans page](media/create-a-test-plan/goto-test-plans-page.png)

1. In the **Test Plans** page, choose **New Test Plan** to create a test plan for your current sprint.
 
   ![Creating a new test plan](media/create-a-test-plan/CreateATestPlan1a.png)

1. In **New Test Plan**, enter a name for the test plan.
   Verify that the area path and iteration are set correctly, then choose **Create**.

   ![Adding test plan details](media/create-a-test-plan/CreateATestPlan2.png) 

> [!TIP]
> You can also create a test plan and a test suite automatically when you create a test from a User Story work item in Azure Boards or Azure DevOps Server.
> Open the shortcut menu for the work item and choose **Add test**.

<a name="backlog"></a>
## Add a requirement-based test suite and select backlog items to test

Now add test suites for the backlog items that need manual tests. These tests could be user stories, requirements, or other work items based your project.

1. To add a suite to a test plan, select the **+** new drop-down list and choose a type of test suite.

   ![Creating a requirement-based test suite](media/create-a-test-plan/AddRequirementSuitesToTestPlan.png) 

   You use requirement-based suites to group your test cases together.
   That way, you can track the testing status of a backlog item.
   Each test case that you add to a requirement-based test suite is automatically linked to the backlog item.

1. In **Create requirement-based suites**, add one or more clauses to filter your work items by the iteration path for the sprint.
   Run the query to view the matching backlog items.

   ![Adding clauses to filter by iteration and running the query to view results](media/create-a-test-plan/AddRequirementSuitesToTestPlan2.png)

1. In the list of work items returned by the query, select the backlog items you want to test in this sprint.
   Choose **Create suites** to create a requirement-based suite for each one.

   ![Adding requirement-based suites for your backlog items](media/create-a-test-plan/AddRequirementSuitesToTestPlan3.png)

<a name="findplan"></a>
## Find a test case in a test plan

In **Test Plans** for your test plan, use the :::image type="icon" source="media/create-a-test-plan/filter-icon.png" border="false"::: filter icon (**1**) to show the search and filter lists (**2**) that help you find the tests you want to work with.
Or filter the list of tests using **Outcome**, **Tester**, and **Configuration** (**3**).

  ![Finding a test plan](media/create-a-test-plan/select-test-plan.png)
  
##  Next steps

> [!div class="nextstepaction"]
> [Create manual test cases](create-test-cases.md#test-cases) 

## See also

* [FAQs for manual testing](reference-qa.md#testplans)
* [Link test cases to work items](../boards/queries/link-work-items-support-traceability.md)
