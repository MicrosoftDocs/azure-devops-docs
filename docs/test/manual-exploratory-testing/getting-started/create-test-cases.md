---
title: Create manual tests - Visual Studio Team Services and Team Foundation Server
description: Create manual tests in Visual Studio Team Services and TFS to make sure your deliverables meet users' needs
ms.prod: vs-devops-alm
ms.technology: vs-devops-test-manual
ms.assetid: C3C10A82-C7F2-4AB6-9CED-B43DAF722800
ms.topic: get-started-article
ms.manager: douge
ms.author: ahomer
ms.date: 08/14/2016
---

# Create manual test cases

**Visual Studio 2017 | Visual Studio 2015 | TFS 2017 | TFS 2015 | [Previous version](https://msdn.microsoft.com/library/dd286729%28v=vs.120%29.aspx)**

<a name="test-cases"></a>
Create manual test cases to check that each of the deliverables 
meet your users' needs. Organize your test cases by adding test 
cases to test suites. Then choose which testers you want to run 
the tests.

1.  If you haven't already, 
   [create a test plan and requirement-based test suites](create-a-test-plan.md).

2.  Select a requirement-based test suite, and then create a 
   test case for that suite.

   ![Select the test suite for a backlog item, then choose New | New Test Case](_img/create-test-cases/CreateTest_1.png)

   The test suite that you selected was created from a backlog item. 
   When you add a test case to this kind of suite, the test case is 
   linked automatically to the backlog item.

3.  Add test steps with actions and expected results so that 
   any team member can run the test. You can add attachments to 
   a step if you want.

   ![Create steps for a new manual test case](_img/create-test-cases/CreateTest_3.png)

   Now you've created a test case that you can run.

4.  You can reassign test cases so that another tester can 
   run them. Select the tests that you want to reassign. Then 
   open the shortcut menu (choose the "..." ellipses or right-click) 
   and select the tester you want to run the tests.

   ![Reassign tests to a different tester](_img/create-test-cases/AssignTester.png)

   Or, you can assign all the test cases in a test suite to multiple testers. 
   This is useful for acceptance testing.
   
   ![On the test suite shortcut menu, choose Assign testers to run all tests](_img/create-test-cases/AssignMultipleTesters.png)

   After you select the testers, you can email them so they
   know the tests are ready for them to run. (You just need 
   [Basic access](https://www.visualstudio.com/products/visual-studio-online-Basic-vs)
   to run tests from Visual Studio Team Services.)

   ![Assign testers to run all tests and send emails to them](_img/create-test-cases/AssignMultipleTestersEmail.png)

##  Try this next

* [Run manual tests](run-manual-tests.md)

<a name="qa"></a>
##  Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Can I rename or permanently delete test cases?

A: Yes. Open the test case from its shortcut menu.

![Open a test case for editing](_img/create-test-cases/open-test-case.png)

Then rename it.

![Rename a test case](_img/create-test-cases/rename-test-case.png)

Or permanently delete it.

![Delete a test case](_img/create-test-cases/delete-test-case.png)

See also [Delete test artifacts](../../../work/backlogs/remove-delete-work-items.md#delete-test)

#### Q: Can I add an extra line to a test step?

A:  Yes, press Shift+Enter in the action or expected 
results field to add an extra line.

#### Q: How do I insert a test step into a test case?

A:  Select a test step. Press Alt+P to insert a new test step 
above the selected step.

#### Q: Is there a way to quickly add multiple test cases at the same time?

A:  Yes, use the grid view when you add test cases to 
the test suite.

![Create new test cases using the grid](_img/create-test-cases/NewTestCasesUsingGrid.png)

On the grid shortcut menu, you can add, delete, or clear rows.

![Use the grid's shortcut menu to insert, delete, or clear rows](_img/create-test-cases/GridContextMenu.png)

Switch between Grid and List views using the View menu at the right of the window.

![Use the View menu to switch between List and Grid views](_img/create-test-cases/GridViewSwitch.png)

#### Q: Can I bulk edit multiple test cases?

A:  Yes, switch the view from List to Grid. The grid shows 
all the test cases for the current test suite and all the 
test steps for those cases. This is a helpful view if you 
want to review your test cases with other team members. 
When you review, you can update and add new test cases.

![To change from list to grid view, choose List ](_img/create-test-cases/ChangeToGridView.png)

Or, you can filter and sort the test cases in list view. Then select 
just the ones that you want to bulk edit using the grid.

![Select test cases in listview to bulk edit in grid view](_img/create-test-cases/GridEditSelected.png)

To return to the test suite view, switch the view 
from Grid back to List.

#### Q: Can I copy test cases and test steps from an existing Excel worksheet?

A:  Yes, copy the columns from Excel that you want to use for 
the title, action, and expected results fields. No column 
formatting, other than multiline, is copied from the
worksheet. Paste these columns into the grid view, 
edit if necessary, and save them. (This is supported only with 
Internet Explorer and Chrome browsers.)

![Save copied test cases in grid view](_img/create-test-cases/SaveTestCasesInGrid.png)

#### Q: Can I copy test cases from the grid to an Excel worksheet?

A:  Yes, copy the data from the grid and paste it into your 
Excel worksheet. No test step formatting, other than multiline, 
is copied into the worksheet. (This is supported only 
with Internet Explorer and Chrome browsers.)

#### Q: Can I edit other fields in the grid view?

A:  Yes, in List view use the column options to select the fields in the test 
case work item.

![Use column options to select fields to edit](_img/create-test-cases/UseColumnOptions.png)

You can then view and edit these fields when you switch to 
the grid view.

#### Q: Can I reorder test cases in a test suite?

A: Yes, you can reorder manual test cases in static suites, 
requirement-based suites, and query-based suites. Choose 
**Order tests** on the tool bar, then drag and drop one or more tests.
Or open the shortcut menu for a test to move it to the top or to another
position. After reordering the tests, you can sort them by the 
**Order** field and then run them in that order with the web runner. 

![Order test cases](_img/create-test-cases/OrderTestCases.png)

#### Q: Can I tag test cases so that I can see only tests with specific tags?

A:  Yes, you can tag test cases in a suite with any tag that 
you want. For example, tag all the tests related to login so that 
you can rerun these tests if a bug is fixed for the login page. 
Then you can filter on that tag from the Test hub. 

You can add and edit tags when you edit a test case, or bulk edit tags 
in the grid view. You can also create suites based on queries when
you use tags.

![In Test hub, on the Test Plan tab, choose or add tags from the test case pane](_img/create-test-cases/TestHubTags.png)

#### Q: Can I share test steps between test cases?

A:  Yes, choose the steps that you want to share. Find out more about 
[sharing test steps](../mtm/share-steps-between-test-cases.md).

![Create shared test steps](_img/create-test-cases/CreateSharedSteps.png)

#### Q: Can I add parameters to a test case so it can run multiple times with different data?

A:  Yes, choose a test step, and then add the parameter. Find out more about
[repeating test steps with different data](../repeat-test-with-different-data.md).

![Add parameter to test step](./_img/create-test-cases/AddParameters1.png)

#### Q: Can I share parameter data between test cases?

A:  Yes. That way, test cases with the same parameters can run with same data, 
so you get consistent results. To share parameter data, convert your existing
parameters to shared parameters.

![In the Parameters section, choose Convert to shared parameters](_img/create-test-cases/ConvertSharedParameters.png)

After you create a shared parameter set, open another test case, 
and add the shared parameter set to that test case. Find out more about 
[sharing parameters](https://msdn.microsoft.com/library/dd997832.aspx#SharedParameters).

Add, edit, and rename your shared parameter sets on the Parameters tab. 
In the test cases pane, view the test cases that use those parameters.

![On the Parameters tab, turn on the test cases pane to view tests cases with shared parameters](_img/create-test-cases/ManageSharedParameters.png)

Each shared parameter set is a work item. On the Properties tab, 
you can view or make changes to this work item. For example, 
you can assign owners and track changes.

#### Q: Can I import parameter values from an Excel spreadsheet to my shared parameter sets?

A:  Yes, copy the data from your Excel spreadsheet and paste it into your 
shared parameters grid. You can also copy the data from your grid back 
into Excel, if necessary.

#### Q: How can I find out if a test case was added to other test suites?

A:  Select a test case, then view the test suites details. The Associated
test suites pane shows you any test suite for any test plan that contains 
this test case. This includes all team projects. 

Click the associated test suite to view it. To view the team project and the test 
plan for that test suite, move your pointer over the test suite.

![On Tests tab, click details pane. Select test suites in the test details pane](_img/create-test-cases/TestSuites.png) 

#### Q: What happens when I delete a test case from a requirement-based test suite?

A:  The test case still exists in your team project, but the 
test case is removed from the test suite. Also, it's no 
longer linked to the backlog item for that test suite.

<a name="ViewAssignedTests"></a>
#### Q: Why do I see the wrong test suite and tests when I click 'View Tests' from the notification email about tests that are assigned to me?

A:  This might happen if you were prompted to enter sign-in 
credentials for Visual Studio Team Services when you clicked this link. 
Without signing out from Visual Studio Team Services, click 'View Tests' 
again to see the correct test suite and tests.

<!-- ENDSECTION --> 

## See also

* [Create a test plan](create-a-test-plan.md)
* [Run manual tests](run-manual-tests.md)
* [Exploratory test web apps in a browser](perform-exploratory-tests.md)
* [User acceptance tests](user-acceptance-testing.md)
* [Track test status](track-test-status.md)
* [Use code coverage to determine how much code is being tested](https://msdn.microsoft.com/library/dd537628.aspx)
* [Control how long to keep test results in Visual Studio Team Services](how-long-to-keep-test-results.md)

[!INCLUDE [help-and-support-footer](../../_shared/help-and-support-footer.md)] 
