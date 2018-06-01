---
title: View and compare your Visual Studio load test runs 
description: Get started with web performance tests - view and compare your load test runs using the features of the Test hub in Microsoft VSTS
ms.assetid: 1A1A725F-4A6A-4652-AFD1-FC7C9A248A7B
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# View and compare your load test runs

[!INCLUDE [version-header-vs-ts](../_shared/version-header-vs-ts.md)] 

You can review past load test runs or current runs started by 
anyone on your team, at any time. You can also compare two
test runs to see the gain or loss in performance, and other
information.

<a name="openvs"></a>
## Open a load test in Visual Studio

1. Open your load test project, open the **Load test** menu, and choose
   **Load Test Manager**. 

   ![Open Load Test Manager](_img/performance-reports/LoadTestManager.png)

1. The **Load Test Manager** page shows all of the load test runs started by you 
   and all of your team members.

   ![View all the past and current load test runs](_img/performance-reports/LoadTestManagerView.png)

> Also see [Analyze Load Test Results Using the Load Test Analyzer](https://docs.microsoft.com/visualstudio/test/analyze-load-test-results-using-the-load-test-analyzer).

<a name="opents"></a>
## Open a load test in VSTS

* If you are running URL-based or Apache JMeter load tests, you
  can see the list of all the test runs in Visual Studio Team
  Services **Load test** list. 

  ![List of load test runs in VSTS](_img/performance-reports/LoadTestViewListTS.png)

<a name="filterselect"></a>
## Filter and select a load test

1. Filter the list of  load tests by state, date, or user who created the test run.

   ![Filter load test runs by state, date, or user](_img/performance-reports/LoadTestFilterView.png)

1. Select a test run and open the shortcut menu (in VSTS you can
   use the ![down arrow](_img/performance-reports/LoadTestListMenu-icon.png) 
   icon) to see details of the test run, or stop a running test. 

   ![Shortcut menu commands for a test run](_img/performance-reports/LoadTestListShortcutMenu.png)

   >You can also open a test run by double-clicking it with your mouse.

<a name="comparetests"></a>
## Compare two test runs

1. To compare two test runs, select them in the list by
   holding _CTRL_ while clicking with the mouse. Then choose
   the **Compare two runs** icon on the toolbar, or open the shortcut
   menu for one of the test runs and choose **Compare**.

   ![Comparing two test runs](_img/performance-reports/LoadTestSelectTwoCompare.png)

1. In the comparison page you see the names of the two tests
   and, at the top of the page, a **Summary** section that lists
   the prime performance factors for each test, then the difference
   from the baseline as a percentage (the color of this text 
   indicates a gain or loss in performance).  

   ![The Summary section of the test run comparison page](_img/performance-reports/LoadTestCompareSummaryView.png)

   Use the links in the first row, the names and IDs of the test
   runs, to open the detailed view of that test run.

1. The **Charts** section of the page shows a graphical comparison
   of performance for the two test runs. The default is a chart for
   the response time and user load. Choose a different pair of factors
   from the dropdown menu to see more performance comparisons.

   ![The Charts section of the test run comparison page](_img/performance-reports/LoadTestCompareChartsView.png)

1. The **Test settings** section lists the primary settings 
   specified for the two test runs. Again, the names and IDs
   of the tests are hyperlinks that open the details of that test.

   ![The Test Settings section of the test run comparison page](_img/performance-reports/LoadTestCompareTestSettings.png)

## Next step

> [!div class="nextstepaction"]
> [Record and replay tests](record-and-replay-cloud-load-tests.md)
