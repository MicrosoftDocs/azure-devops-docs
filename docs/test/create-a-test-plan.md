---
title: Create test plans and suites
description: Test tools - Create test plans in Azure Test Plans and Azure DevOps Server to make sure each of the deliverables meets your users needs
ms.assetid: 99FD819E-A861-4F28-A486-FD452DB65D69
ms.technology: devops-test
ms.topic: quickstart
ms.author: sdanie
author: steved0x
monikerRange: '>= tfs-2015'
ms.date: 09/14/2021
---

# Create test plans and test suites

[!INCLUDE [version-header](includes/version-header.md)] 

Create test plans and test suites to track manual testing for sprints or milestones.
That way, you can see when the testing for a specific sprint or milestone is complete.
For more information about manual testing, see [Planned manual testing](overview.md#planned-manual-testing) and [Automated and Manual Testing with Azure Test Plans](https://www.youtube.com/watch?v=LF0hmSysWCg).

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

[!INCLUDE [note-new-ui](includes/note-new-ui.md)] 

<a name="testplan"></a>

## Create a test plan

In general, you create test plans to test requirements. Prior to creating a test plan, therefore, you may want to [define your backlog of requirements](../boards/backlogs/create-your-backlog.md). 

1. From the web portal, open your project and go to **Test Plans**.
   If you already have a test plan, choose **Test Plans** to go to the page that lists all test plans.

   ![Opening the list of test plans page](media/create-a-test-plan/goto-test-plans-page.png)

1. In the **Test Plans** page, choose **New Test Plan** to create a test plan for your current sprint.
 
   ![Creating a new test plan](media/create-a-test-plan/CreateATestPlan1a.png)

1. In **New Test Plan**, enter a name for the test plan.
   Verify that the area path and iteration are set correctly, then choose **Create**.

   ![Adding test plan details](media/create-a-test-plan/CreateATestPlan2.png) 


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
  

## Share work items across your test experience 
****
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



##  Next steps

> [!div class="nextstepaction"]
> [Create manual test cases](create-test-cases.md#test-cases) 

## Related articles

* [Test objects and terms](test-objects-overview.md) 
* [FAQs for manual testing](reference-qa.md#testplans)
* [Link test cases to work items](../boards/queries/link-work-items-support-traceability.md)
