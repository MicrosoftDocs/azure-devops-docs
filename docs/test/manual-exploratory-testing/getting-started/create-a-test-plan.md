---
title: Create test plans in Visual Studio Team Services
description: Create test plans in Visual Studio Team Services to track manual tests during sprints or milestones
ms.prod: vs-devops-alm
ms.technology: vs-devops-test-manual
ms.topic: get-started-article
ms.assetid: 99FD819E-A861-4F28-A486-FD452DB65D69
ms.manager: douge
ms.author: ahomer
ms.date: 08/12/2016
---

# Create a test plan

**Visual Studio 2017 | Visual Studio 2015 | TFS 2017 | TFS 2015 | [Previous version](https://msdn.microsoft.com/library/dd380763%28v=vs.120%29.aspx)**

Create test plans to track manual testing 
for sprints or milestones. That way, 
you can see when the testing for a 
specific sprint or milestone is complete.

Test plans are used to group together test suites and individual test cases.
This includes static test suites, requirement-based suites, and
[query-based suites](#query-based-suites). You can add individual test cases to a test plan without creating
a test suite if you wish, but using a test suite provides a way to group
test cases for separate testing scenarios within a single test plan.

The **Test Plans** page shows a single test plan. You select the test plan
you want to work with using the ![filter-icon](_img/create-a-test-plan/filter-icon.png)
icon or the drop-down list at the top of the left column.

![Selecting a test plan from the drop-down list](_img/create-a-test-plan/select-test-plan.png)

Test plans, suites, and test cases are stored in Team Services and TFS
as special types of work items.

## Create a test plan containing test suites  

1. If you haven't already, 
[sign up for Visual Studio Team Services](https://www.visualstudio.com/products/visual-studio-team-services-vs), 
[create your team project](../../../setup-admin/get-started.md), 
and [create your backlog](../../../work/backlogs/create-your-backlog.md). 

1. In Visual Studio Team Services, select your team project. 
   (If you haven't been here before, use Browse.)

   ![Select team project from account overview page](_img/create-a-test-plan/SelectTeamProject.png)

1. Go to the **Test Plans** tab of the **Test** hub. Create a test plan for your current sprint.

   ![In test plan explorer, open the New (+) list, then click Test plan](_img/create-a-test-plan/CreateATestPlan1a.png)

1. Name the test plan. Check the area path and iteration.

   ![Add test plan details, then click Create](_img/create-a-test-plan/CreateATestPlan2.png) 

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

##  Try this next

* [Create manual test cases](create-test-cases.md#test-cases) 
  for each test suite.

<a name="qa"></a>
## Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Can I rename my test plan?

A:  Yes, open the test plan from the shortcut menu and rename it.

![Rename a test plan](_img/create-a-test-plan/rename-test-plan.png)

#### Q: Can I permanently delete my test plan?

A:  Yes, do this from the shortcut menu for the test plan.

![Delete a test plan](_img/create-a-test-plan/delete-test-plan.png)

See also [Delete test artifacts](../../../work/backlogs/remove-delete-work-items.md#delete-test)

#### Q: Can I group and reorder my requirement-based test suites together?

A:  Yes, you can create a static test suite that can 
contain any type of test suites - just like folders. 
Drag test suites to group them in a static test plan.
Drag and drop tests to reorder them.

![Use static test suites like folders](_img/create-a-test-plan/AddRequirementSuitesToTestPlan4.png)

<a name="query-based-suites"></a>
#### Q: What are query-based test suites ?

A:  Use a query to group together test cases that have a particular characteristic, 
for example, all tests that have Priority=1. The suite will automatically include 
every test case that is returned by the query that you define.

#### Q: Can I edit other properties of a test plan from the test hub?

A:  You can only do this from Microsoft Test Manager (MTM). If you're using Visual Studio 2017, Visual Studio 2015,
Visual Studio 2013, or Visual Studio 2012 Update 3, you can open a test plan in MTM directly from the Test hub. 
(The most recently installed version of MTM is launched.)

![Open test plan using Microsoft Test Manager](_img/create-a-test-plan/OpenTestPlanMTM.png) 

#### Q: Can I export the test plan to share or review offline?

A:  Yes, you can export test plans, test suites, and test cases. Select the details 
that you want in the report. Then email or print this report for review.

![Right-click a test suite, and choose Export](_img/create-a-test-plan/ExportTestPlanHTML.png)

Change the test case fields in the report by adding or removing columns from 
the list view of the test suite.

#### Q: When I export a test plan, can I just view the data or copy it to a Word document?

A:  Yes, choose Print in the Export dialog box, then choose Cancel in the Print dialog box. 
This displays the data in the report. Select all the text, then copy and paste it 
into a Word document, if you want. All the formatting in the report is retained.

#### Q: When I export a test plan, can I customize the report?

A:  You can only do this if you are using an on-premises Team Foundation Server. 
You can [edit the XSLT file](https://msdn.microsoft.com/library/dd380763.aspx#XSLT).

#### Q: Can I track changes to test plans and test suites that I create with Visual Studio Team Services?

A:  Yes, you can track changes to test plans and test suites. Open the work item 
for the test plan or test suite, then view the work item history.

For test suites, other actions are tracked in the Test Suite Audit field. 
For example, adding and removing test cases from a test suite are tracked in this field.

<!-- ENDSECTION -->

[!INCLUDE [help-and-support-footer](../../_shared/help-and-support-footer.md)] 

