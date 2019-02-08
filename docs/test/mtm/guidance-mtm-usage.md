---
title: Guidance on MTM usage
description: Manual and exploratory testing - Guidance on Microsoft Test Manager usage when you want to test web applications
ms.assetid: 3ED737AC-6310-472D-8C54-4FF4FEFE66C9
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/01/2018
monikerRange: '>= tfs-2015'
---

# Guidance on Microsoft Test Manager usage

[!INCLUDE [version-inc-vs](../_shared/version-inc-vs.md)]

Azure DevOps and Team Foundation Server (TFS) offer a web-based solution for manual testing. [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] is a web-based manual testing solution, which works across all platforms and with all browsers. It provides experiences across Plan, Author, Execute and Track stages of Manual testing.

In the past, we have also shipped a client based solution as Microsoft Test Manager. The Test Center in Microsoft Test Manager client is a desktop-based manual testing solution, which has traditionally been used by testers for their manual testing needs (see [Run manual tests with Microsoft Test Manager](run-manual-tests-with-microsoft-test-manager.md)). 

>[!NOTE]
>[!INCLUDE [mtm-deprecate-message](../_shared/mtm-deprecate-message.md)] This topic will help you understand why [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] is a more comprehensive solution for manual testing compared to Microsoft Test Manager.

### Supported combinations

| Client | TFS 2015 | TFS 2017 | TFS 2018 | Azure DevOps Server 2019 | Azure DevOps Server vNext | Azure DevOps Services |
| --- | --- | --- | --- | --- | --- | --- |
| Microsoft Test Manager 2015 | Yes | Yes | Yes | Yes | No | Up to Jan 1, 2020 |
| Microsoft Test Manager 2017 | No | Yes | Yes | Yes | No | Up to Jan 1, 2020 |

## Manual Testing 

[!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] is a fully-featured test management solution spanning all stages of the testing lifecycle. It works on all platforms (such as Linux, macOS, Windows, and others) and all browsers (such as Edge, Chrome, Firefox, and others). You can easily get started using manual testing
features right from your Kanban board, and use it for more advanced manual testing capabilities. This topic describes the capabilities included in [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)]. 

### Test planning

Create and manage test plans and test suites for your teams with ease. Export and share the test plans and test suites with your team or assign multiple testers to execute tests. See the comparison matrix below for more information about these features.

Comparison of [test planning with [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)]](../create-a-test-plan.md) and [test planning with Microsoft Test Manager](plan-manual-tests-with-microsoft-test-manager.md):

| Test planning capability | Web-based test features | Client-based Microsoft Test Manager |
| --- | --- | --- |
| Create test plan | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create/Manage suites | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Add/remove tests from test suite | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Assign individual testers to test plan/test suite | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create/edit/assign configurations | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Clone test plan/test suite\*  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Add tests from other test suites\*  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Order manual tests within suites (RBS, QBS, Static) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| Export test plans and test suites | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| View test case references across test suites | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| Assign multiple testers to test plans and test suites for user acceptance testing | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |

*These capabilities are included as part of the [Test Case Explorer](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.TestCaseExplorer) extension available from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

### Test authoring

You can easily get started creating test cases right from your Kanban board in the **Work hub**. Easily add, view, interact with, and execute tests from your Kanban cards, and create multiple test cases using a grid in [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)]. Create shared parameters and use them in multiple test cases for data driven testing.

Comparison of [test authoring with [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)]](../create-test-cases.md) and [test authoring with Microsoft Test Manager](plan-manual-tests-with-microsoft-test-manager.md):

| Test authoring capability | Web-based test features | Client-based Microsoft Test Manager |
| --- | --- | --- |
| Create and edit test cases using WIT form | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create and edit shared steps | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Bulk author and edit test cases | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Inline tests on Kanban board](../../boards/boards/add-run-update-tests.md)  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Create and edit shared parameters](../repeat-test-with-different-data.md)  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |

### Test execution
Test your web apps and your desktop apps.

[!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] provides a browser based Test Runner and a client based Test Runner which you can use to test your web and desktop apps.
Using either runner, you can mark test steps and test outcomes as pass or fail, and collect diagnostic information such as system information, image action logs, screen recordings and screen captures during your tests. Alternatively, you can use the Microsoft Test Runner client that is part of Microsoft Test Manager. 

Comparison of [test execution with web based Test Runner](../run-manual-tests.md) and [test execution with Microsoft Test Runner desktop client](run-manual-tests-with-microsoft-test-manager.md):

| Test execution capability | Web-based test features | Client-based Microsoft Test Manager |
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

The test runners offered through the web-based hub does not support Action Recording (fast-forward test steps), Advanced Data collection (code coverage, IntelliTrace, and test impact) during your tests and Connecting to a machine in an environment. These 3 capabilities were not leveraged by our customers much and hence not being taken forward. You may however use the Microsoft Test Runner client, launched from [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)], for these requirements if really required.

### Test tracking

You can easily track your manual testing results using your chosen light-weight chart types, and pin them to your dashboard to quickly analyze the test results.
View test case result history across test suites and test plans easily by using the right-hand pane in the **Test plans** page of [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)]. 
You can also select a retention policy to specify how long you want to keep your manual testing results.

| Test tracking capability | Web-based test features | Client-based Microsoft Test Manager |
| --- | --- | --- |
| Test run and results analysis | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| [Create, configure, and pin light-weight test result charts](../track-test-status.md)  | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| [Test run and results retention policy](../how-long-to-keep-test-results.md) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |
| View test results history across test suites and test plans | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |

## Exploratory Testing

Use the lightweight [Test &amp; Feedback browser extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web) to perform exploratory testing on your web applications.
You can collect rich diagnostic data such as screen captures, screen recording, and image action logs using this extension.
The extension also has the capability to capture page load data for your web applications. In [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] you can view completed exploratory
testing sessions and derive meaningful insights at team or individual level, and for a specific period.

To explore your desktop applications, you can use the Exploratory Test Runner client in Microsoft Test Manager by launching it from [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)].

**Comparison of 
[exploratory testing with the Test &amp; Feedback extension](../perform-exploratory-tests.md)
and [exploratory testing with Exploratory runner (client)](exploratory-testing-using-microsoft-test-manager.md)**:

| Exploratory testing capability | Web-based extension for web apps | Client-based Exploratory runner for desktop apps |
| --- | --- | --- |
| Explore user stories | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| File bugs using screen capture and recording, and image action log | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Create test cases and tasks | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| Exploratory testing session insights | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) |
| [Capture page load performance data](../connected-mode-exploratory-testing.md#create-bugs-or-tasks) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![yes](../_img/table-yes.png) | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![no](../_img/table-no.png) |


## Conclusion

[!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] is a richer, faster, and easier-to-use solution for manual testing as compared to the Test Center in Microsoft Test Manager. It works on all platforms and all browsers, and has a rich and modern web UI that improves your testing experience across all stages of manual testing.

All the test plans, test suites, test cases, results and other test management data you create using Microsoft Test Manager are stored in Azure DevOps or TFS. Hence, existing Microsoft Test Manager users can easily get started using [!INCLUDE [test-hub-include-nolink](../_shared/test-hub-include-nolink.md)] without any data loss.

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
