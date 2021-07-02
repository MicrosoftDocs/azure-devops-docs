---
title: New test plans page   
description: New Test Plans page
ms.assetid: FFBBD2F9-C1C5-4273-916A-28834B794CC3
ms.technology: devops-test
ms.topic: conceptual
ms.author: sdanie
author: steved0x
ms.date: 06/12/2020
monikerRange: '>=azure-devops-2020'
---
# New Test Plans page

[!INCLUDE [version-2020-rtm](includes/version-2020-rtm.md)]

[!INCLUDE [feature-availability](includes/feature-availability.md)] 

A new Test Plans Page (Test Plans*) for your planned testing needs is available for Azure DevOps Services and Azure DevOps Server 2020. The new page provides you with streamlined views to help you focus on the task at hand - be it test planning, authoring, execution, or tracking. It is also clutter-free and consistent with the rest of Azure DevOps offering. We hope that you find it easy and intuitive to use.

This new page has been in public preview for past few quarters and is the default for all Test Plans users. During this time, we have continued to add the missing features/capabilities and address the feedback you have been providing us. We are almost towards the end of this journey and now are ready to pull out the old page by **the end of November 2020**. We highly recommend leveraging the new page and [sharing your feedback](#feedback) with us. However, if you absolutely need to leverage the prior page then enable it using the information provided in [Manage or enable features](../project/navigation/preview-features.md).

## Overview


> [!NOTE]   
> Any action performed in either page will reflect on the other too since the backend data store is the same.


:::image type="content" source="media/new-test-plans-page/test-plan-overview.png" alt-text="test plan overview page":::

The new Test Plans page has total of six sections of which the first four are new, while the Charts & Extensibility sections are the existing functionality. 
1. **Test plan header**: Use this to locate, favorite, edit, copy or clone a test plan.
2. **Test suites tree**: Use this to add, manage, export, or order test suites. Leverage this to also assign configurations and perform user acceptance testing.
3. **Define tab**: Collate, add, and manage test cases in a test suite of choice via this tab.
4. **Execute tab**: Assign and execute tests via this tab or locate a test result to drill into.
5. **Chart tab**: Track test execution and status via charts, which can also be pinned to dashboards.
6. **Extensibility**: Supports the [current extensibility points](../extend/overview.md) within the product.

Lets take a broad stroke view of these new sections below.


<a name="testplanheader"></a>

## Test plan header

:::image type="content" source="media/new-test-plans-page/test-plan-header.png" alt-text="test plan header page":::

**Tasks** 

The Test Plan header allows you to perform the following tasks:

- Mark a test plan as favorite 
- Unmark a favorited test plan
- Easily navigate among your favorite test plans
- View the iteration path of the test plan, which clearly indicates if the test plan is Current or Past
- View the quick summary of the Test Progress report with a link to navigate to the report
- Navigate back to the All/Mine Test Plans page


**Context menu options**

The context menu on the Test Plan header provides the following options:

- *Copy test plan*: This is a new option that allows you to quickly copy the current test plan. More details below.
- *Edit test plan*: This option allows you to edit the Test Plan work item form to manage the work item fields.
- *Test plan settings*: This option allows you to configure the Test Run settings (to associate build or release pipelines) and the Test Outcome settings


***Copy test plan (new capability)***

:::image type="content" source="media/new-test-plans-page/copy-test-plan-dialog.png" alt-text="copy test plan page":::

We recommend creating a new Test Plan per sprint/release. When doing so, generally the Test Plan for the prior cycle can be copied over and with few changes the copied test plan is ready for the new cycle. To make this process easy, we have enabled a 'Copy test plan' capability on the new page. By leveraging 'Copy test plan' capability, you can copy or clone test plans within the project. Its backing REST API is covered [here](/rest/api/azure/devops/testplan/test%20plan%20clone/clone%20test%20plan?view=azure-devops-rest-5.1&preserve-view=true). The API lets you copy/clone a test plan across projects too.<br>
For more guidelines on Test Plans usage, refer [here](/archive/blogs/visualstudioalmrangers/test-planning-and-management-guide-updated).


<a name="testsuitestree"></a>

## Test suites tree

:::image type="content" source="media/new-test-plans-page/test-suites-tree.png" alt-text="test suites tree page":::

**Tasks** 

The Test suite header allows you to perform the following tasks:

- *Expand/collapse*: This toolbar option allows you to expand or collapse the suite hierarchy tree.
- *Show test points from child suites*: This toolbar option is only visible when you are in the "Execute" tab. This allows you to view all the test points for the given suite and its children in one view for easier management of test points without having to navigate to individual suites one at a time. 
- *Order suites*: You can drag/drop suites to either reorder the hierarchy of suites or move them from one suite hierarchy to another within the test plan. 


**Context menu options**

The context menu on the Test suites tree provides the following options:

- *Create new suites*: You can create three different types of suites as follows: 
	- Use static suite or folder suite to organize your tests.
	- Use requirement-based suite to directly link to the requirements/user stories for seamless traceability.
	- Use query-based to dynamically organize test cases that meet a query criteria.
- *Assign configurations*: You can assign configurations for the suite (example: Chrome, Firefox, EdgeChromium) and these would then be applicable to all the existing test cases or new test cases that you add later to this suite. 
- *Export as pdf/email*: Export the Test plan properties, test suite properties along with details of the test cases and test points as either "email" or "print to pdf".
- *Open test suite work item*: This option allows you to edit the Test suite work item form to manage the work item fields.
- *Assign testers to run all tests*: This option is very useful for User Acceptance testing (UAT) scenarios where the same test needs to be run/executed by multiple testers, generally belonging to different departments. 
- *Rename/Delete*: These options allow you to manage the suite name or remove the suite and its content from the test plan.
- *Import test suites*: Use this option to import test cases present in other suites from same or other test plans and even across projects. More details below.


***Import test suites (new capability)***

:::image type="content" source="media/new-test-plans-page/import-test-suites.png" alt-text="test suites tree import page":::

It is now easier to reuse the suites you have created already and import them into the current suite/plan. You can select the project, test plan, and test suite from which you want to import the tests. Depending upon the suite selected, the entire hierarchy of that suite and corresponding test cases are imported into the current plan. Note that the test cases are added as a reference and not a clone/copy. 


<a name="definetab"></a>

## Define tab

:::image type="content" source="media/new-test-plans-page/define-tab-toolbar.png" alt-text="define tab page":::

Define tab lets you collate, add, and manage test cases for a test suite. Whereas the execute tab is for assigning test points and executing them. 

> The Define tab and certain operations are only available to users with [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access level or equivalent. Everything else should be exercisable by a user with 'Basic' access level.


**Tasks** 

The Define tab allows you to perform the following tasks:

- *Add New test case using work item form*: This option allows you to create a new test case using the work item form. The test case created will automatically be added to the suite. 
- *Add New test case using grid*: This option allows you to create one or more test cases using the test cases grid view. The test cases created will automatically be added to the suite. 
- *Add Existing test cases using a query*: This option allows you to add existing test cases to the suite by specifying a query. 
- *Order test cases by drag/drop*: You can reorder test cases by dragging/dropping of one or more test cases within a given suite. The order of test cases only applies to manual test cases and not to automated tests.
- *Move test cases from one suite to another*: Using drag/drop, you can move test cases from one test suite to another. 
- *Export / Import as CSV*: Using this option, you can export the existing test cases to Excel CSV file, make changes to the CSV file and then import the file back into the suite. This has been one of the most requested features and we are happy to share that we are opening this for beta testing. See [here for more options.](https://pkuma-msft.github.io/azure-test-plans/articles/testcase-import-export-csv.html)
- *Show grid*: You can use the grid mode for viewing/editing test cases along with test steps.
- *Full screen view*: You can view the contents of the entire Define tab in a full screen mode using this option. 
- *Filtering*: Using the filter bar, you can filter the list of test cases using the fields of "test case title", "assigned to" and "state". You can also sort the list by clicking on the column headers.
- *Column options*: You can manage the list of columns visible in the Define tab using "Column options". The list of columns available for selection are primarily the fields from the test case work item form. 


**Context menu options**

:::image type="content" source="media/new-test-plans-page/define-tab-context-menu.png" alt-text="define tab context menu page":::

The context menu on the Test case node within the Define tab provides the following options:

- *Open/edit test case work item form*: This option allows you to edit a Test case using the work item form wherein you edit the work item fields including test steps.
- *Edit test cases*: This option allows you to bulk edit Test case work item fields. However, you cannot use this option to bulk edit test steps. 
- *Edit test cases in grid*: This option allows you to bulk edit the selected test cases including test steps using the grid view.
- *Assign configurations*: This option allows you to override the suite level configurations with test case level configurations. 
- *Remove test cases*: This option allows you to remove the test cases from the given suite. It does not change the underlying test case work item though. 
- *Create a copy/clone of test cases*: This option allows you to create a copy/clone of selected test cases. See below for more details.
- *View linked items*: This option allows you to look at the linked items for a given test case. See below for more details. 


***Copy/clone test cases (new capability)***

:::image type="content" source="media/new-test-plans-page/copy-test-cases.png" alt-text="define tab copy test cases page":::

For scenarios where you want to copy/clone a test case, you can use the "Copy test case" option. You can specify the destination project, destination test plan and destination test suite in which to create the copy/cloned test case. In addition, you can also specify whether you want to include existing links/attachments to flow into the cloned copy. 


***View linked items (new capability)***

:::image type="content" source="media/new-test-plans-page/view-linked-items.png" alt-text="define tab view linked items page":::

Traceability among test artifacts, requirements and bugs is a critical value proposition of the Test Plans product. Using the "View linked items" option, you can easily look at all the linked Requirements that this test case is linked with, all the Test suites/Test plans where this test case has been used and all the bugs that have been filed as part of test execution. 


<a name="executetab"></a>

## Execute tab

:::image type="content" source="media/new-test-plans-page/execute-tab-toolbar.png" alt-text="execute tab page":::

Define tab lets you collate, add and manage test cases for a test suite. Whereas the execute tab is for assigning test points and executing them. 

**What is a test point?** Test cases by themselves are not executable. When you add a test case to a test suite then test point(s) are generated. A test point is a unique combination of test case, test suite, configuration, and tester. Example: if you have a test case as "Test login functionality" and you add 2 configurations to it as Edge and Chrome then this results in 2 test points. Now these test points can be executed. On execution, test results are generated. Through the test results view (execution history) you can see all executions of a test point. The latest execution for the test point is what you see in the execute tab. <br>
Hence, test cases are reusable entities. By including them in a test plan or suite, test points are generated. By executing test points, you determine the quality of the product or service being developed.

One of the primary benefits of the new page is for users who mainly do test execution/tracking (need to have only 'Basic' access level), they are not overwhelmed by the complexity of suite management (define tab is hidden for such users). 

> The Define tab and certain operations are only available to users with [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access level or equivalent. Everything else, including the "Execute" tab should be exercisable by a user with 'Basic' access level.


**Tasks** 

The Execute tab allows you to perform the following tasks:

- *Bulk mark test points*: This option allows you to quickly mark the outcome of the test points - passed, failed, blocked or not applicable, without having to run the test case via the Test runner. The outcome can be marked for one or multiple test points at one go. 
- *Run test points*: This option allows you to run the test cases by individually going through each test step and marking them pass/fail using a Test runner. Depending upon the application you are testing, you can use the "Web Runner" for testing a "web application" or the "desktop runner" for testing desktop and/or web applications. You can also invoke the "Run with options" to specify a Build against which the testing you want to perform. 
- *Column options*: You can manage the list of columns visible in the Execute tab using "Column options". The list of columns available for selection are associated with test points, such as Run by, Assigned Tester, Configuration, etc. 
- *Full screen view*: You can view the contents of the entire Execute tab in a full screen mode using this option. 
- *Filtering*: Using the filter bar, you can filter the list of test points using the fields of "test case title", "assigned to", "state", "test outcome", "Tester" and "Configuration". You can also sort the list by clicking on the column headers.


**Context menu options**

:::image type="content" source="media/new-test-plans-page/execute-tab-context-menu.png" alt-text="execute tab context menu page":::

The context menu on the Test point node within the Execute tab provides the following options:

- *Mark test outcome*: Same as above, allows you to quickly mark the outcome of the test points - passed, failed, blocked or not applicable.
- *Run test points*: Same as above, allows you to run the test cases via test runner.
- *Reset test to active*: This option allows you to reset the test outcome to active, thereby ignoring the last outcome of the test point. 
- *Open/edit test case work item form*: This option allows you to edit a Test case using the work item form wherein you edit the work item fields including test steps.
- *Assign tester*: This option allows you to assign the test points to testers for test execution.
- *View test result*: This option allows you to view the latest test outcome details including the outcome of each test step, comments added or bugs filed. 
- *View execution history*: This option allows you to view the execution history for the test case in a side panel. You can move across the test points or open the detailed execution history from the panel - refer below image

:::image type="content" source="media/new-test-plans-page/execute-tab-execution-history.png" alt-text="execute tab execution history":::

<a name="feedback"></a>

## Provide feedback
Thank you for all the feedback you have provided on this page. We have tried to address most of the feedback submitted and have filled all the functionality gaps. As such, we are reaching towards the end of this journey and plan to pull out the old page soon. 

Reach us at [community forum](https://developercommunity.visualstudio.com/content/problem/post.html?space=21) for any queries. In the process, share screenshots as appropriate.
