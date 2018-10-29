---
title: Run manual tests - manual testing in Azure DevOps TestTools
description: Test tools - Run manual tests in Azure DevOps and TFS to make sure each of the deliverables meets your users needs
ms.assetid: 616919f3-7339-4813-9dcf-82ead3476b1a
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Run manual tests

[!INCLUDE [version-header](_shared/version-header.md)] 

Run your manual tests and record the test results for each test step 
using Microsoft Test Runner. If you find an issue when testing, 
use Test Runner to create a bug. Test steps, screenshots, and comments 
are automatically included in the bug. 
You can use the web runner for web apps, or the desktop runner for desktop app data collection.  

> You just need [Basic access](https://visualstudio.microsoft.com/team-services/compare-features/) 
to run tests that have been assigned to you with Azure DevOps. 
Learn more about the [access](https://visualstudio.microsoft.com/pricing/visual-studio-online-pricing-vs) 
that you need for more advanced testing features.

[!INCLUDE [feature-availability](_shared/feature-availability.md)] 

<a name="run-web"></a>
## Run tests for web apps

1. If you haven't already, [create your manual tests](create-test-cases.md#test-cases).

1. Select a test from a test suite and run it.
      
   ![Select and run a specific test](_img/run-manual-tests/RunTest_2.png)

   Microsoft Test Runner opens and runs in a new browser.

1. Start the app that you want to test. Your app doesn't have to run on 
   the same computer as Test Runner. You just use Test Runner to record which 
   test steps pass or fail while you manually run a test. For example, you 
   might run Test Runner on a desktop computer and run your Windows 8 store 
   app that you are testing on a Windows 8 tablet.

   ![Use Microsoft Test Runner to record your test results](_img/run-manual-tests/RunTestsStartApp.png)

1. Mark each test step as either passed or failed based on the expected results. 
   If a test step fails, you can enter a comment on why it failed  or
   [collect diagnostic data for the test](collect-diagnostic-data.md).

   ![Mark test steps](_img/run-manual-tests/RunTest_3.png)

1. Create a bug to describe what failed.

   ![Submit a bug](_img/run-manual-tests/RunTest_4.png)

   The steps and your comments are automatically added to the bug. Also, 
   the test case is linked to the bug.

   If Test Runner is running in a web browser window, 
   you can copy a screenshot from the clipboard directly into the bug.

1. You can see any bugs that you have reported during your test session.

   ![Bugs logged](_img/run-manual-tests/RunTest_5.png)

1. When you've run all your tests, save the results and close Test Runner. 
   All the test results are stored in Azure DevOps.
   [How do I resume testing, or run one or more tests again?](reference-qa.md#qanda)

1. View the testing status for your test suite.
   You see the most recent results for each test.

   ![View test results](_img/run-manual-tests/RunTest_8.png)

1. Open a test and choose the test case in the **Related Work** section.
   Then use the **Child** links in the **Related Work** section of that 
   work item to view the bugs filed by the tester.
   
   ![View bugs filed](_img/run-manual-tests/view-bugs.png)  

[Can I run tests offline and then import the results?](reference-qa.md#runoffline)

<a name="run-desktop"></a>
## Run tests for desktop apps

If the only data you want to collect from your desktop app
is screen recordings, use the web-based Microsoft Test Runner 
in the same way as [described above](#run-web) for web apps.

If you want to collect more diagnostic data for your desktop application,
run your tests using Azure Test Runner:

1. **Download** and install the [Azure Test Runner desktop client](http://aka.ms/ATRDownload) if you haven't already set it up. 

1. Launch the test runner client from the Azure Test Plans section in Azure DevOps by choosing **Run for desktop application** from the **Run** menu. 

1. Choose **Launch** and start testing in the same way as [described above](#run-web) for web apps. See [collect diagnostic data for the test](collect-diagnostic-data.md) for more information about data collection. 

You can also run your tests using [Microsoft Test Manager client](mtm/run-manual-tests-with-microsoft-test-manager.md):

1. Launch the test runner 
   client from the [!INCLUDE [test-hub-include](_shared/test-hub-include.md)] by choosing **Run with options**
   from the **Run** menu.

   ![Launching the test runner client](_img/_shared/collect-diagnostic-data-16.png)

1. In the **Run with options** dialog, select **Microsoft 
   Test Runner 2017 or later**, choose the data collectors you 
   want to enable, and optionally select a build to associate 
   with your test run.

   ![Selecting the Test Runner and options](_img/_shared/run-manual-tests-19.png)

1. Choose **OK** to start testing. For more information, see
   [Collect diagnostic data](collect-diagnostic-data.md#collect-desktop).

[Can I run tests offline and then import the results?](reference-qa.md#runoffline)

## See also

*  [FAQs for manual testing](reference-qa.md#runtests)

## Next step

> [!div class="nextstepaction"]
> [View your test progress](track-test-status.md)
