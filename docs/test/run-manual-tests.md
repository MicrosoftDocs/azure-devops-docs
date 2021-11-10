---
title: Run manual tests
description: Learn about test tools to run manual tests with Azure Test Plans to make sure each of the deliverables meets your user's needs.
ms.assetid: 616919f3-7339-4813-9dcf-82ead3476b1a
ms.technology: devops-test
ms.topic: quickstart
ms.author: sdanie
author: steved0x
monikerRange: '>= tfs-2015'
ms.date: 11/10/2021
---

# Run manual tests

[!INCLUDE [version-header](includes/version-header.md)] 

Run your manual tests and record the test results for each test step 
using Microsoft Test Runner. If you find an issue when testing, 
use Test Runner to create a bug. Test steps, screenshots, and comments 
are automatically included in the bug. 
You can use the web runner for web apps, or the desktop runner for desktop app data collection.  

 
[!INCLUDE [prerequisites-define](includes/prerequisites-run.md)] 

<a name="run-web"></a>

## Run tests for web apps
::: moniker range=">=azure-devops-2020"
1. If you haven't already, [create your manual tests](create-test-cases.md#test-cases).

1. Select a test from a test suite and select **Run for web application**.
      
   ![Screenshot shows how to select and run a specific test.](media/run-manual-tests/run-test-web-application.png)

   Microsoft Test Runner opens and runs in a new browser.

1. Start the app that you want to test.


   ![Screenshot shows Test Runner recording your test results.](media/run-manual-tests/test-runner-results.png)

   Your app doesn't have to run on the same computer as Test Runner.
   You just use Test Runner to record which test steps pass or fail while you manually run a test.

   For example, you might run Test Runner on a desktop computer and run your Windows 8 store app that you test on a Windows 8 tablet.

1. Mark each test step as either passed or failed based on the expected results.

   ![Screenshot shows Test Runner open to a failed test where you can enter a comment.](media/run-manual-tests/test-result-enter-comment.png)

   If a test step fails, you can enter a comment on why it failed or [collect diagnostic data for the test](collect-diagnostic-data.md).

   > [!IMPORTANT]
   >  Any test step that has expected result is called a *validation test step*. Testers must mark a test step with a status if it is a validation test step. The overall result for a test case reflects the status of all the test steps that the tester marked. Therefore, the test case will have a status of failed if the tester marked any test step as failed or not marked.

1. Create a bug to describe what failed. Select **Create bug**.

   ![Screenshot shows Test Runner with Create bug selected and the new bug dialog box open.](media/run-manual-tests/create-bug-test-fail.png)

   The test case is linked to the bug.
   The steps and your comments are automatically added to the bug.

   If Test Runner is running in a web browser window, you can copy a screenshot from the clipboard directly into the bug.

1. You can see any bugs reported during your test session.

   ![Screenshot shows the number of bugs created during the test.](media/run-manual-tests/see-reported-bugs.png)

1. When you've run all your tests, save the results and close Test Runner.
   All the test results are stored in Azure Test Plans.

1. View the testing status for your test suite.
   You see the most recent results for each test.

   ![Screenshot shows the result of running test cases, with outcomes of Active, Failed, and Passed displayed.](media/run-manual-tests/test-case-outcome.png)

1. Open a test and choose the test case in the **Related Work** section.
   Then use the child links in the **Related Work** section of that work item to view the bugs filed by the tester.
   
   ![Screenshot shows the Related Work section of a work item to view bugs filed for that test.](media/run-manual-tests/related-work-shows-bugs.png)  

You can run tests offline and then import the results. For more information, see the [Offline Test Execution extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.OfflineTestExecution).

::: moniker-end

::: moniker range="<=azure-devops-2019"
1. If you haven't already, [create your manual tests](create-test-cases.md#test-cases).

1. Select a test from a test suite and run it.
      
   ![Select and run a specific test](media/run-manual-tests/RunTest_2.png)

   Microsoft Test Runner opens and runs in a new browser.

1. Start the app that you want to test. Your app doesn't have to run on 
   the same computer as Test Runner. You just use Test Runner to record which 
   test steps pass or fail while you manually run a test. For example, you 
   might run Test Runner on a desktop computer and run your Windows 8 store 
   app that you are testing on a Windows 8 tablet.

   ![Use Microsoft Test Runner to record your test results](media/run-manual-tests/RunTestsStartApp.png)

1. Mark each test step as either passed or failed based on the expected results. If a test step fails, you can enter a comment on why it failed  or
   [collect diagnostic data for the test](collect-diagnostic-data.md).

   ![Mark test steps](media/run-manual-tests/RunTest_3.png)

   > [!IMPORTANT]
   >  Any test step that has expected result is called a validation test step. Testers must mark a test step with a status if it is a validation test step. The overall result for a test case reflects the status of all the test steps that the tester marked. Therefore, the test case will have a status of failed if the tester marked any test step as failed or not marked.
 
1. Create a bug to describe what failed.

   ![Submit a bug](media/run-manual-tests/RunTest_4.png)

   The steps and your comments are automatically added to the bug. Also, 
   the test case is linked to the bug.

   If Test Runner is running in a web browser window, 
   you can copy a screenshot from the clipboard directly into the bug.

1. You can see any bugs that you have reported during your test session.

   ![Bugs logged](media/run-manual-tests/RunTest_5.png)

1. When you've run all your tests, save the results and close Test Runner. 
   All the test results are stored in Azure DevOps.
   [How do I resume testing, or run one or more tests again?](reference-qa.md#qanda)

1. View the testing status for your test suite.
   You see the most recent results for each test.

   ![View test results](media/run-manual-tests/RunTest_8.png)

1. Open a test and choose the test case in the **Related Work** section.
   Then use the **Child** links in the **Related Work** section of that 
   work item to view the bugs filed by the tester.
   
   ![View bugs filed](media/run-manual-tests/view-bugs.png)  

[Can I run tests offline and then import the results?](reference-qa.md#runoffline)
::: moniker-end

<a name="run-desktop"></a>

## Run tests for desktop apps
::: moniker range=">=azure-devops-2020"

If you want to collect more diagnostic data for your desktop application, run your tests using Test Runner client.

1. Launch Test Runner from Azure Test Plans by selecting **Run for desktop application** from the dropdown menu.

   ![Screenshot shows launching the Test Runner client.](media/run-manual-tests/run-test-desktop-application.png)

1. Download and install the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload) if you haven't already set it up:

   ![Screenshot shows the Run for desktop application dialog box with options to download and launch Test Runner.](media/run-manual-tests/tr-atp-launch.png)

   > [!NOTE]
   > Check that the Test Runner client is available for your platform. Currently, the Test Runner client is available only for x64.

1. Select **Launch** and start testing as described in the previous section. For more information about data collection, see [Collect diagnostic data while testing](collect-diagnostic-data.md).

::: moniker-end

::: moniker range="<=azure-devops-2019"

If you want to collect more diagnostic data for your desktop application, run your tests using Test Runner client:

1. Launch the test runner client from Azure Test Plans by choosing **Run for desktop application** from the **Run** menu. 

   ![Launching the test runner client](media/shared/collect-diagnostic-data-16.png)

1. **Download** and install the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload) if you haven't already set it up:

   ![Download and launch Test runner](media/run-manual-tests/tr-atp-launch.png)

   > [!NOTE]
   > Check that the Test Runner client is available for your platform. Currently, the Test Runner client is available only for x64.

1. Choose **Launch** and start testing the same way as [described above](#run-web) for web apps. For more information about data collection, see [Collect diagnostic data while testing](collect-diagnostic-data.md).

[Can I run tests offline and then import the results?](reference-qa.md#runoffline)
::: moniker-end

## Use test options
::: moniker range=">=azure-devops-2020"

### Run all tests

You can run all the tests in a test suite at once.

Select a test suite and select **Run for web application** or **Run for desktop application** to run all the active tests.

![Screenshot shows how to select and run all active tests in a test suite.](media/run-manual-tests/run-test-test-suite.png)

If you haven't run a test yet, its state is active.
You can reset the state of a test to active if you want to rerun it.  

### Run tests for a build

You can choose a build to run tests against.

1. From the dropdown, select **Run with options**.

   ![Screenshot shows running a test for web application with options.](media/run-manual-tests/run-web-application-test-options.png)

1. Select the build you want.

1. ![Screenshot shows the Run with options dialog box with a build selected.](media/run-manual-tests/run-test-select-build.png)

   Any bug filed during the run will automatically be associated with the selected build.
   The test outcome will be published against that build.

   > [!NOTE]
   > The selected build must be from the project in which the tests are defined.

### Modify a test step during a test run

You can fix problems with your test steps while the test is still running. Select the **Edit test step** icon.

![Screenshot shows how to select the edit icon to edit test steps.](media/run-manual-tests/edit-icon-test-run.png)

You can insert, reorder, or delete steps.
You can also edit the text itself.

![Screenshot shows the tool to edit test steps when you run a test.](media/run-manual-tests/edit-test-step.png)

### Add a screenshot

You can add a screenshot to the test results while running a test.

If you use Google Chrome or Firefox, use the web runner to take screenshots of the web app while testing.
For Microsoft Internet Explorer or Microsoft Edge browsers, or for desktop app testing, use the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload).

![Screenshot shows the button for capturing a screenshot during a test.](media/run-manual-tests/test-capture-screen.png)

For more information, see [Collect diagnostic data](collect-diagnostic-data.md#web-screenshot).

### Capture actions from a test

You can capture your actions on the application as a log.

If you use Google Chrome or Firefox, use the web runner capture your actions on the web app as image logs while testing.
For Microsoft Internet Explorer or Microsoft Edge browsers, or for desktop app testing, use the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload).

![Screenshot show the button for capturing an image action log from the app.](media/run-manual-tests/test-capture-action.png)

For more information, see [Collect diagnostic data](collect-diagnostic-data.md#web-log).

### Capture screen recordings of your app being tested

You can capture screen recordings of my app during testing.

If you use Google Chrome or Firefox, use the web runner to capture screen recordings of your web and desktop apps while testing.
For Microsoft Internet Explorer or Microsoft Edge browsers, or for desktop app testing, use the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload).

![Screenshot show the button for capturing a screen recording from the app.](media/run-manual-tests/test-capture-screen-recording.png)

For more information, see [Collect diagnostic data](collect-diagnostic-data.md#web-recording).

::: moniker-end

::: moniker range="<=azure-devops-2019"
### Run all tests

You can run all the tests in a test suite at once.

Select a test suite and select **Run** to run all the active tests.

![Screenshot shows how to run all active tests in a test suite.](media/run-manual-tests/RunTestsRunSuite.png)

If you haven't run a test yet, its state is active.
You can reset the state of a test to active if you want to rerun it.  

### Run tests for a build

You can choose a build to run tests against.

1. Choose **Run** and then select **Run with options**.

   ![Screenshot shows Run selected and Run with options available.](media/shared/collect-diagnostic-data-16.png)

1. Select the build you want.

1. ![Screenshot shows the Run with options dialog box with a build.](media/run-manual-tests/select-build-for-webrunner.png)

   Any bug filed during the run will automatically be associated with the selected build.
   The test outcome will be published against that build.

   > [!NOTE]
   > The selected build must be from the project in which the tests are defined.

### Modify a test step during a test run

You can fix problems with your test steps while the test is still running. Select the **Edit test step** icon.

![Screenshot shows how to select the edit icon to modify test steps.](media/run-manual-tests/RunTest_11.png)

You can insert, reorder, or delete steps.
You can also edit the text itself.

![Screenshot shows the tool to modify test steps when you run a test.](media/run-manual-tests/RunTest_9.png)

### Add a screenshot

You can add a screenshot to the test results while running a test.

If you use Google Chrome or Firefox, use the web runner to take screenshots of the web app while testing.
For Microsoft Internet Explorer or Microsoft Edge browsers, or for desktop app testing, use the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload).

![Screenshot shows the button for capturing a screenshot.](media/shared/collect-diagnostic-data-01.png)

For more information, see [Collect diagnostic data](collect-diagnostic-data.md#web-screenshot).

### Capture actions from a test

You can capture your actions on the application as a log.

If you use Google Chrome or Firefox, use the web runner capture your actions on the web app as image logs while testing.
For Microsoft Internet Explorer or Microsoft Edge browsers, or for desktop app testing, use the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload).

![Screenshot show the button to capture an image action log from the app.](media/shared/collect-diagnostic-data-06.png)

For more information, see [Collect diagnostic data](collect-diagnostic-data.md#web-log).

### Capture screen recordings of your app being tested

You can capture screen recordings of my app during testing.

If you use Google Chrome or Firefox, use the web runner to capture screen recordings of your web and desktop apps while testing.
For Microsoft Internet Explorer or Microsoft Edge browsers, or for desktop app testing, use the [Test Runner desktop client](https://aka.ms/ATPTestRunnerDownload).

![Screenshot show the button to capture a screen recording from the app.](media/shared/collect-diagnostic-data-11.png)

For more information, see [Collect diagnostic data](collect-diagnostic-data.md#web-recording).

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [View your test progress](track-test-status.md)

## Related articles

- [FAQs for manual testing](reference-qa.md#runtests)
