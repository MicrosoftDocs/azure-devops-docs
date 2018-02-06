---
title: Guidance on Microsoft Test Manager usage
description: Manual and exploratory testing - Guidance on Microsoft Test Manager usage
ms.assetid: 3ED737AC-6310-472D-8C54-4FF4FEFE66C9
ms.prod: vs-devops-alm
ms.technology: vs-devops-test-manual
ms.manager: douge
ms.author: ahomer
ms.date: 01/18/2018
---

# Guidance on Microsoft Test Manager usage

[!INCLUDE [version-header-ts-tfs15](../_shared/version-header-ts-tfs15.md)] 

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) offer both web-based and client-based solutions for manual testing:

* The **Test Center** in Microsoft Test Manager (MTM) client is a desktop-based manual testing solution, which has traditionally been used by testers for their Manual testing needs (see [Run manual tests with Microsoft Test Manager](run-manual-tests-with-microsoft-test-manager.md)).
* The **Test hub** in VSTS and TFS is a web-based manual testing solution, which works across all platforms and with all browsers. We have invested in Test hub over past two years to provide you better experiences across Plan, Author, Execute and Track phases of Manual testing.

>Because the **Test hub** is a fully featured Test management solution which works across all platforms and with all browsers, 
we **recommend** you use the **Test hub** over Microsoft Test Manager for
all your test management requirements.
You can use Microsoft Test Manager to test your desktop applications by
[launching the Microsoft Test Runner (client) from the **Test hub**](../getting-started/run-manual-tests.md#run-desktop). 

This topic will help you understand why the **Test hub** is a more comprehensive
solution for manual testing compared to Microsoft Test Manager.

## Manual Testing with the Test hub 

The **Test hub** in VSTS and TFS is a fully-featured test
management solution spanning all phases of the testing lifecycle.
The **Test hub** works on all platforms (such as Linux, macOS,
Windows, and others) and all browsers (such as Edge, Chrome, Firefox,
and others). You can easily get started with using manual testing
features right from your Kanban board, and use the **Test hub**
for more advanced manual testing capabilities. 
This topic shows new capabilities introduced in the **Test hub**. 

### Test planning

Create and manage test plans and test suites for your teams with ease with Test hub. Export and share the test plans and test suites with your team or assign multiple testers to execute tests. See below the comparison matrix to know more about the features introduced in Test hub.

**Comparison of 
[test planning with the Test hub](../getting-started/create-a-test-plan.md)
and [test planning with MTM](plan-manual-tests-with-microsoft-test-manager.md)**:

| Test planning capability | Web-based Test hub | Client-based MTM |
| --- | --- | --- |
| Create test plan | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create/Manage suites | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Add/remove tests from test suite | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Assign individual testers to test plan/test suite | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create/edit/assign configurations | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Clone test plan/test suite\*  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Add tests from other test suites\*  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| [Order manual tests within suites (RBS, QBS, Static)](/vsts/release-notes/2016/jun-01-team-services#ordering-of-tests-in-test-hub) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Export test plans and test suites](../reference-qa.md#testcases) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [View test case references across test suites](../reference-qa.md#testcases) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Assign multiple testers to test plans and test suites for user acceptance testing](../getting-started/user-acceptance-testing.md#assign-and-invite-testers) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |

\* These capabilities are included as part of the upcoming version of the [Test Case Explorer](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.TestCaseExplorer)
extension available from [Visual Studio Marketplace](https://marketplace.visualstudio.com/).

### Test authoring

You can easily get started creating test cases right from your Kanban board in the **Work hub**.
Easily add, view, interact with, and execute tests from your Kanban cards,
and create multiple test cases using a grid in the **Test hub**.
Create shared parameters and use them in multiple test cases for data driven testing.

**Comparison of 
[test authoring with the Test hub](../getting-started/create-test-cases.md)
and [test authoring with MTM](plan-manual-tests-with-microsoft-test-manager.md)**:

| Test authoring capability | Web-based Test hub | Client-based MTM |
| --- | --- | --- |
| Create and edit test cases using WIT form | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create and edit shared steps | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| [Bulk author and edit test cases](../reference-qa.md#testcases) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Inline tests on Kanban board](../../work/kanban/add-run-update-tests.md)  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Create and edit shared parameters](../repeat-test-with-different-data.md)  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |

### Test execution

Test your web apps and your desktop apps.

#### Web apps

The **Test hub** provides a browser based Test Runner you can use to test your web apps; for
example, by marking test steps and test outcomes as pass or fail, and collecting diagnostic
information such as system information, image action logs, screen recordings and screen captures
during your tests. 

#### Desktop apps

You can use the browser based Test Runner for running tests on desktop
apps if you only want to mark test steps and test outcomes as pass or fail,
or collect screen recordings during your tests.
If you need other data collection capabilities when testing desktop apps,
you can use the Microsoft Test Runner client that is part of Microsoft Test Manager.
You can launch Microsoft Test Runner client directly from the **Test hub**. 

**Comparison of 
[test execution with web based Test Runner](../getting-started/run-manual-tests.md)
and [test execution with Microsoft Test Runner (client)](run-manual-tests-with-microsoft-test-manager.md)**:

| Test execution capability | Web-based Test Runner for testing web apps | Client-based Test Runner for testing desktop apps |
| --- | --- | --- |
| Bulk mark tests without opening in Test Runner | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Pass or fail tests or test steps using Test Runner | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Inline changes to tests during execution | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Pause and resume tests | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| File bugs during test execution | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Capture screenshots, image action log, and screen recording during test execution | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Update existing bugs during test execution | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Verify bugs | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Assign a Build for the test run | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Assign test settings | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Fast-forward steps using action recording\* | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Collect advanced diagnostic data during manual testing\* | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Connect to a machine in an environment | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |

\* The web-based Test Runner currently does not support Action Recording (fast-forward test steps)
or Advanced Data collection (code coverage, IntelliTrace, and test impact) during your tests.
You can use the Microsoft Test Runner client, launched from the **Test hub**, for these requirements.

### Test tracking

You can easily track your manual testing results using your chosen light-weight chart
types, and pin them to your dashboard to quickly analyze the test results.
View test case result history across test suites and test plans easily by using the
right-hand pane in the **Test plans** tab of the **Test hub**. 
You can also select a retention policy to specify how long you want to keep your
manual testing results.

**Comparison of 
[test result tracking with the Test hub](../getting-started/track-test-status.md)
and [test result tracking with MTM](https://msdn.microsoft.com/library/hh553099%28v=vs.110%29.aspx)**:

| Test tracking capability | Web-based Test hub | Client-based MTM |
| --- | --- | --- |
| Test run and results analysis | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| [Create, configure, and pin light-weight test result charts](../getting-started/track-test-status.md)  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Test run and results retention policy](../getting-started/how-long-to-keep-test-results.md) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [View test results history across test suites and test plans](../reference-qa.md#trackstatus) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |

## Exploratory Testing

Use the light weight
[Test &amp; Feedback browser extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web)
to perform exploratory testing on your web applications.
You can collect rich diagnostic data such as screen captures,
screen recording, and image action logs using this extension.
The extension also has the capability to capture page load data for your
web applications. In the **Test hub** you can view completed exploratory
testing sessions and derive meaningful insights at team or individual level,
and for a specific period.

To explore your desktop applications, you can use the Exploratory Test Runner
client in Microsoft Test Manager by launching it from the **Test hub**.

**Comparison of 
[exploratory testing with the Test &amp; Feedback extension](../getting-started/perform-exploratory-tests.md)
and [exploratory testing with Exploratory runner (client)](exploratory-testing-using-microsoft-test-manager.md)**:

| Exploratory testing capability | Web-based extension for web apps | Client-based Exploratory runner for desktop apps |
| --- | --- | --- |
| Explore user stories | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| File bugs using screen capture and recording, and image action log | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create test cases and tasks | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Exploratory testing session insights | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| [Capture page load performance data](../connected-mode-exploratory-testing.md#create-bugs-or-tasks) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |


## Why the Test hub over Microsoft Test Manager?

As clearly shown above, the **Test hub** is a much richer, faster, and easier-to-use
solution for manual testing compared to the Test Center in MTM. The **Test hub** works on
all platforms and all browsers, and has a rich and modern web UI that improves your testing
experience across all phases of manual testing. 

All the test plans, test suites, test cases, and other test management data you create
using MTM are stored in your VSTS account or TFS, so existing
MTM users can easily get started using the **Test hub**.

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
