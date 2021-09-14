---
title: Navigate Test Plans  
description: Learn how to navigate Test Plans. 
ms.technology: devops-test
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '>=azure-devops-2020'
ms.date: 09/14/2021
---


# Navigate Test Plans 

[!INCLUDE [version-2020-rtm](includes/version-2020-rtm.md)]

Learn how to navigate Test Plans to support your test goals and operations. Use the following sections of the Test Plans page to accomplish the corresponding tasks. 
 
- **Mine**: View list of test plans that you created or are of interest to you. 
- **All**: View a list of all test plans defined for the project. 
- **Test plan header**: Locate, favorite, edit, copy or clone a test plan.
- **Test suites tree**: Add, manage, export, or order test suites. Leverage this to also assign configurations and perform user acceptance testing.
- **Define tab**: Collate, add, and manage test cases in a test suite of choice via this tab.
- **Execute tab**: Assign and execute tests via this tab or locate a test result to drill into.
- **Chart tab**: Track test execution and status via charts, which can also be copied to dashboards.

:::image type="content" source="media/navigate/test-plan-overview-2.png" alt-text="Test plans page, navigation elements.":::

To learn about specific test artifacts, see the following articles: 
- [Create test plans and test suites](create-a-test-plan.md)
- [Create manual test cases](create-test-cases.md)
- [Test settings](/test-different-configurations.md)


[!INCLUDE [prerequisites](includes/prerequisites.md)] 

> [!NOTE] 
> Most operations under the **Define** tab are only available to users with [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access level or equivalent. Most operations under the **Execute** tab can be exercised by users granted a **Basic** access level.

test-plans-list.png




## The "Mine" page

The **Mine** page shows a list of test plans that are of interest to you.
This includes plans for teams you are a member of, and test plans you have marked as favorites.
You can expand and hide the plans for each team to make it easier to locate or review specific team plans. Use the shortcut menu to edit or delete the selected plan.

:::image type="content" source="media/navigate/mine-page-more-options-menu.png" alt-text="Mine page, menu options to edit or delete a test plan.":::

Show the filter controls to help you find plans if you have a large number of plans in the list.
Filter the plans by name, team, state, or iteration. 

:::image type="content" source="media/navigate/filter-options.png" alt-text="Filter a test plans list."::: 

## The "All" page

The **All** page shows a list of all test plans.
Filter test plans, and edit and delete plans using the shortcut menu, in the same way as in the **Mine** page. Use this page to add any test plan to your favorites list. 

:::image type="content" source="media/navigate/all-page-favorite-test-plan.png" alt-text="The All list of test plans, favorite a test plan."::: 

You can also add a plan to your favorites list while you are viewing it.

:::image type="content" source="media/navigate/test-plan-favorite.png" alt-text="Add a plan to your favorites list."::: 
 

<a name="testplanheader"></a>

## Test plan header

:::image type="content" source="media/navigate/test-plan-header.png" alt-text="test plan header page":::

### Test plan tasks  

Use the Test Plan header, to do one of the following tasks:  

- Mark or unmark a test plan as a favorite  
- Easily navigate among your favorite test plans
- View the iteration path of the test plan, which clearly indicates if the test plan is **Current** or **Past**
- Navigate to the Test Progress report via the **View report** link
- Navigate back to the **All/Mine** Test Plans page by choosing :::image type="icon" source="media/navigate/all-test-plans-icon.png" border="false"::: **All test plans**.


### Test plan context menu options 

Choose the :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More options** to open the context menu for the Test Plan to perform one of the following actions: 

- **Copy test plan**: Quickly copy the current test plan.  
- **Edit test plan**: Edit the Test Plan work item form to define work item fields or add to the description or discussion.
- **Test plan settings**: Configure the Test Run settings (to associate build or release pipelines) and the Test Outcome settings.

:::image type="content" source="media/navigate/test-plan-header.png" alt-text="Test plan content menu options.":::

## Configure test plan settings

Choose **Test plan settings** to configure test runs or test outcomes. 

:::image type="content" source="media/navigate/test-plan-settings-dialog-undefined.png" alt-text="Test plan settings dialog, undefined.":::

### Copy test plan 

We recommend creating a new Test Plan per sprint/release. When doing so, generally you can copy the Test Plan for the prior cycle and with few changes the copied test plan is ready for the new cycle. Use the **Copy test plan** menu option. This option lets you copy or clone test plans within a project.

:::image type="content" source="media/navigate/copy-test-plan.png" alt-text="copy test plan page":::



<a name="testsuitestree"></a>

## Test suites header and tree

:::image type="content" source="media/navigate/test-suites-tree.png" alt-text="Test suites tree menu options":::

### Test suites header tasks 

The Test suite header allows you to perform the following tasks:

- **Expand/collapse**: Choose the :::image type="icon" source="media/navigate/expand-collapse-icons.png" border="false"::: **Expand All/Collapse All** toolbar options  to expand or collapse the suite hierarchy tree.
- **Show test points from child suites**: Choose the :::image type="icon" source="media/navigate/show-test-points-from-child-nodes-icon.png" border="false":::  **Show test points from child suites** toolbar option, which is only visible when you are in the **Execute** tab, to view all the test points for the given suite and its children in one view for easier management of test points without having to navigate to individual suites one at a time. 
- **Order suites**: Drag/drop suites to either reorder the hierarchy of suites or move them from one suite hierarchy to another within the test plan. 


###  Test suites context menu options 

Choose the :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More options**  to open the context menu for the Test Suite and perform one of the following actions: 

- **Create new suites**: You can create one of three different types of suites: 
	- Choose **Static suite** to organize your tests within a folder suite.
	- Choose **Requirement-based suite** to directly link to the requirements/user stories for seamless traceability.
	- Choose **Query-based suite** to dynamically organize test cases that meet a query criteria.
- **Assign configurations**: Assign configurations for the suite. For example, assign *Chrome*, *Firefox*, *EdgeChromium*, which then become applicable to all existing or new test cases that you add later to the suite. 
- **Export**: Export the test plan properties, test suite properties along with details of the test cases and test points as either an email or print to pdf.  
- **Open test suite work item**: This option allows you to edit the Test suite work item form to manage the work item fields.
- **Assign testers to run all tests**: This option is very useful for User Acceptance testing (UAT) scenarios where the same test needs to be run/executed by multiple testers, generally belonging to different departments. 
- **Rename/Delete**: These options allow you to manage the suite name or remove the suite and its content from the test plan.
- **Import test suites**: Use this option to import test cases present in other suites from same or other test plans and even across projects. More details below.


**Export test suite dialog**  
:::image type="content" source="media/navigate/export-dialog.png" alt-text="Define tab, Export test suite dialog.":::

**Import test suites**

Reuse the suites you have created and import them into the current suite/plan. You can select the **Project**, **Test Plan**, and **Test Suite** from which you want to import the tests. Depending upon the suite you select, the entire hierarchy of that suite and corresponding test cases are imported into the current plan. Note that the test cases are added as a reference and not a clone or copy. 

:::image type="content" source="media/navigate/import-test-suites-dialog.png" alt-text="Test suites tree import overview.":::




<a name="definetab"></a>

## Define and organize test cases

From the **Define** tab, you can collate, add, and manage test cases for a test suite. Whereas you use the [**Execute** tab](#executetab) for assigning test points and executing them. 

:::image type="content" source="media/navigate/define-tab-tasks.png" alt-text="Define tab task overview.":::
 

### Define test case tasks 

From the **Define** tab you can exercise the following tasks:

- **New Test Case**:
	- **Add Test Case**: Create a new test case using the work item form and automatically add it to the suite.
	- **Add existing test cases**: Open a dialog to query for existing test cases that you can select from and add to the test suite.   
	- **Add New test case using grid**: Create one or more test cases using the test cases grid view and automatically add them to the suite.
- **Order test cases**: Reorder test cases by dragging/dropping one or more test cases within a given suite. The order of test cases only applies to manual test cases and not to automated tests.
- **Move test cases from one suite to another**: Using drag/drop, move test cases from one test suite to another. 

**Add existing test cases to a test suite dialog**

:::image type="content" source="media/navigate/add-test-cases-to-suite-dialog.png" alt-text="**Define** tab, add existing test cases dialog.":::

### Define tab toolbar options

:::image type="content" source="media/navigate/define-tab-toolbar-2.png" alt-text="**Define** tab, toolbar options.":::

From the **Define** tab, toolbar, you can exercise the following options: 

- **Export test cases to CSV**: Export existing test cases to a CSV file and make changes using Excel.
- **Import test cases from CSV**: Import changes made to test cases from a CSV file. 
- **Grid View**: Use the grid mode for viewing or editing multiple test cases along with test steps.
- **Toggle full screen mode**: Expand the view by choosing full screen mode. 
- **Filter**: Choose :::image type="icon" source="media/navigate/filter-icon.png" border="false"::: **Filter**  to toggle the filter toolbar to filter the list of test cases.
- **Column options**: Add or remove fields to display and sort on. The list of columns available for selection are primarily the fields from the test case work item form. 

### Define test case context menu options 

:::image type="content" source="media/navigate/define-tab-context-menu.png" alt-text="Define tab context menu page.":::

The context menu on the Test case node within the **Define** tab provides the following options:

- **Open/edit test case work item form**: This option allows you to edit a Test case using the work item form wherein you edit the work item fields including test steps.
- **Edit test cases**: This option allows you to bulk edit Test case work item fields. However, you cannot use this option to bulk edit test steps. 
- **Edit test cases in grid**: This option allows you to bulk edit the selected test cases including test steps using the grid view.
- **Assign configurations**: This option allows you to override the suite level configurations with test case level configurations. 
- **Remove test cases**: This option allows you to remove the test cases from the given suite. It does not change the underlying test case work item though. 
- **Create a copy/clone of test cases**: Create a copy or clone selected test cases.  
- **View linked items**: Review items linked to a test case.  

### Copy or clone test cases 

Choose **Copy test case** to copy or clone a test case. Specify the destination project, destination test plan and destination test suite in which to create the copy/cloned test case. In addition, you can also specify whether you want to include existing links/attachments to flow into the cloned copy. 

:::image type="content" source="media/navigate/copy-test-cases.png" alt-text="Define tab copy test cases menu option and dialog.":::


### View linked item 

Use **View linked items** option, to review objects linked to the test case. Choose each tab to view the links listed under the linked object type: 
- **Test Suites**
- **Requirements**: Includes any work item that belongs to the Requirements Category, such as User Stories (Agile), Product Backlog Items (Scrum), Requirements (CMMI), or a custom work item type.
- **Bugs**: Includes bugs that have been filed as part of test execution and any work items that belong to the Bug Category that have been linked to the test case.
 
:::image type="content" source="media/navigate/view-linked-items.png" alt-text="Define tab, View linked items dialog.":::
  

### Bulk update using the Grid view

Choose the :::image type="icon" source="media/navigate/grid-icon.png" border="false"::: **Grid View**  to perform bulk updates to the test cases.  

:::image type="content" source="media/navigate/grid-view.png" alt-text="Define tab, grid view.":::

Click within a cell to edit the text in that cell. Right-click within a cell to choose an option to **Insert row**, **Delete row**, or **Clear row**.  Choose :::image type="icon" source="media/navigate/bulk-save-icon.png" border="false"::: **Save test cases** to perform a bulk save of your changes. Or, choose :::image type="icon" source="media/navigate/grid-refresh.png" border="false"::: **Refresh** to clear your changes. When complete, choose **Close Grid**. 

:::image type="content" source="media/navigate/grid-view-cell-options.png" alt-text="Define tab, grid view, cell options.":::

<a name="executetab"></a>

## Execute tests  

Use the **Execute** tab to assign test points or run tests.   

:::image type="content" source="media/navigate/execute-tab-test-points-overview.png" alt-text="Execute tab overview.":::

**What is a test point?** Test cases by themselves are not executable. When you add a test case to a test suite then test point(s) are generated. A test point is a unique combination of test case, test suite, configuration, and tester.  
For example, if you have a test case named *Test login functionality* and you add two configurations for the Edge and Chrome browsers, you have two test points. You can execute or run each of these test points. On execution, test results are generated. Through the test results view, or execution history, you can see all executions of a test point. The latest execution for the test point is what you see in the **Execute** tab.  

Test cases are reusable entities. By including them in a test plan or suite, test points are generated. By executing test points, you determine the quality of the product or service under development.


### Execute tasks 

From the **Execute** tab you can do one of the following tasks:

- **Bulk mark test points**: Quickly mark the outcome of or more test points&mdash;**Passed**, **Failed**, **Blocked** or **Not Applicable**&mdash;without having to run the test case via the Test runner.  
- **Run test points**:Run the test cases by individually going through each test step and marking them pass/fail using a Test runner. Depending upon the application you are testing, you can use the **Web Runner** for testing a "web application" or the **Desktop Runner** for testing desktop or web applications. Invoke **Run with options** to specify a **Build** against which the testing you want to perform. 
- **Column options**: Add or remove columns. The list of columns available for selection are associated with test points, such as Run by, Assigned Tester, Configuration, etc. 
- **Toggle Full screen view**: View the contents of the page in a full screen mode. 
- **Filter**: Filter the list of test points using the fields of a test case **Title**, **ID**, **Outcome**, **Tester**, **Configuration**, **Assigned To**, or **State**.   You can also sort the list by choosing a column header.

 
### Change column options

Choose :::image type="icon" source="media/navigate/column-options-icon.png" border="false"::: **Column options** to open the Column options dialog. Add or remove columns and drag and drop them in the order you want. 

:::image type="content" source="media/navigate/column-options.png" alt-text="Column options dialog.":::


### Test Points context menu options 

:::image type="content" source="media/navigate/test-point-node-context-menu.png" alt-text="Execute tab, test point node More options menu.":::

Choose the :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More options** to open the context menu for a Test Point node to perform one of the following actions:

- **View execution history**: View the execution history for the test case in a side pane. You can move across the test points or open the detailed execution history from the pane.
- **Mark Outcome**: Quickly mark the outcome of the test points&mdash;**Passed**, **Failed**, **Blocked** or **Not Applicable**.
- **Run** - Initiate a test runner with options to **Run for web application**, **Run for desktop**, **Run with options**.
- **Reset test to active**: Reset the test outcome to **Active**, ignoring the last outcome of the test point. 
- **Edit test case**: Open the work item form, optionally edit work item fields including test steps.
- **Assign tester**: Assign the test points to a tester for test execution.

To learn more about executing tests, see [Run manual tests](run-manual-tests.md) and [Run automated tests from test plans](run-automated-tests-from-test-hub.md).


## Chart test cases and test results 

From the chart tab you can create various test case or test result charts. To learn how, see [Track test status, Charts](track-test-status.md#charts). 

## Next steps

> [!div class="nextstepaction"]
> [Create test plans and test suites](create-a-test-plan.md)
 

## Related articles

- [Run manual tests](run-manual-tests.md) 
- [Run automated tests from test plans](run-automated-tests-from-test-hub.md)
- [Track test status](track-test-status.md). 
- [About pipeline tests](../pipelines/test/test-glossary.md)
- [What are extensions?](../extend/overview.md) 
- [Test Planning and Management Guide](/archive/blogs/visualstudioalmrangers/test-planning-and-management-guide-updated).
 

### REST APIs 

- [Test Management REST API](/rest/api/azure/devops/test) 
