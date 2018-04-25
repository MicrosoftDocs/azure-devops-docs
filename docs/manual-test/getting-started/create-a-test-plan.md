---
title: Create a test plan - manual testing in VSTS
description: Create test plans in VSTS to track manual tests during sprints or milestones
ms.assetid: 99FD819E-A861-4F28-A486-FD452DB65D69
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Create a test plan and test suite

[!INCLUDE [version-header-ts-tfs](../_shared/version-header-ts-tfs.md)] 

Create test plans to track manual testing 
for sprints or milestones. That way, 
you can see when the testing for a 
specific sprint or milestone is complete.

Test plans are used to group together test suites and individual test cases.
This includes static test suites, requirement-based suites, and
[query-based suites](../reference-qa.md#query-based-suites). You can add individual test cases to a test plan without creating
a test suite if you wish, but using a test suite provides a way to group
test cases for separate testing scenarios within a single test plan.

[!INCLUDE [feature-availability](../_shared/feature-availability.md)] 

**Note**: Stakeholders cannot create or manage test plans. You must have at least Basic access.
See [Default manual testing permissions and access](../manual-test-permissions.md).

<a name="testplan"></a>
## Create a test plan

1. If you haven't already, 
   [sign up for VSTS](https://www.visualstudio.com/products/visual-studio-team-services-vs), 
   [create your team project](../../accounts/account-management.md), 
   and [create your backlog](../../work/backlogs/create-your-backlog.md). 

1. In VSTS, open your team project.

1. Go to the **Test Plans** tab of the **Test** hub. Create a test plan for your current sprint.

   ![In test plan explorer, open the New (+) list, then click Test plan](_img/create-a-test-plan/CreateATestPlan1a.png)

1. Name the test plan. Check the area path and iteration. Then choose **Create*.

   ![Add test plan details, then click Create](_img/create-a-test-plan/CreateATestPlan2.png) 

<a name="backlog"></a>
## Add a test suite and select backlog items to test

1. Now add test suites for the backlog items that need manual tests. 
   (These backlog items could be user stories, requirements, or other 
   work items based on the setup of your team project.)

   ![In test plan explorer pane, New (+) list, then click Requirement-based suite](_img/create-a-test-plan/AddRequirementSuitesToTestPlan.png) 

   You use requirement-based suites to group your test cases together. 
   That way, you can track the testing status of a backlog item. 
   Each test case that you add to a requirement-based test suite is 
   automatically linked to the backlog item.

1. Add a clause to filter by the iteration path for the sprint. 
   Run the query to view the matching backlog items.

   ![Add clause to filter by iteration, then run query to view results](_img/create-a-test-plan/AddRequirementSuitesToTestPlan2.png)

1. Select the backlog items that you want to test this sprint. 
   Add them as requirements to your test plan by creating test suites from them.

   ![Select backlog items, then click Create suites](_img/create-a-test-plan/AddRequirementSuitesToTestPlan3.png)

   Now you've created a requirement-based test suite for each backlog item.

<a name="findplan"></a>
## Find a test plan

* The **Test Plans** page shows a single test plan. Use the
  ![filter-icon](_img/create-a-test-plan/filter-icon.png) icon or the drop-down
  list at the top of the left column select the test plan you want to work with.

  ![Selecting a test plan from the drop-down list](_img/create-a-test-plan/select-test-plan.png)

Test plans, suites, and test cases are stored in VSTS and TFS as special types of work items.
   
## See also

* [FAQs for manual testing](../reference-qa.md#testplans)
* [Link test cases to work items](../../work/track/link-work-items-support-traceability.md)

##  Next step

> [!div class="nextstepaction"]
> [Create manual test cases](create-test-cases.md#test-cases) 
