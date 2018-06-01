---
title: Get Application Insights performance data with load tests
description: Get app performance data from Application Insights using the features of the Test hub in Microsoft VSTS and TFS
ms.assetid: 5658166B-CA7F-4C6B-B55D-AE745FB78D5C
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Get app performance data with your load tests

[!INCLUDE [version-header-vs-ts](../_shared/version-header-vs-ts.md)]

<a name="ApplicationInsights"></a>

When you load test your app in the cloud using Visual Studio Team Services (VSTS), 
you can compare app performance with virtual user load using 
[Application Insights](https://azure.microsoft.com/documentation/articles/app-insights-overview/).
Then, by doing a quick root cause analysis, you can figure out which code 
is causing performance problems.

1. Download and install 
   [Visual Studio Enterprise](https://www.visualstudio.com/downloads/download-visual-studio-vs), 
   if you haven't already done so.

1. [Enable Azure Active Directory](../../accounts/access-with-azure-ad.md)
   for your VSTS account, if you haven't already done so.

1. [Link your VSTS account with your Azure subscription](../../accounts/connect-account-to-aad.md),
   if you haven't already done so.

1. Sign in to your VSTS account from your web browser to refresh the Azure Resources Manager access token. 
   The token is valid for 12 hours in the context of VSTS.

   - If you have already signed, you must sign out and then sign in again.<p />

1. [Set up your load test project to run in the cloud](getting-started-with-performance-testing.md#LoadTestVSIDE), 
   if you haven't already done so.

1. With your load test project open in Visual Studio Enterprise, open the 
   **Run Settings** section and select your active run settings. Open the
   shortcut menu and choose **Get Performance Data from Application Insights**.  

   ![Choosing Get Performance Data from Application Insights](_img/get-performance-data-for-load-tests/get-load-test-insights-01.png)

1. Select the apps you want to monitor and the performance counters 
   you want to view while your load test runs.

   ![Select the apps to monitor and performance counters](_img/get-performance-data-for-load-tests/get-load-test-insights-02.png)

   The counters you selected are shown in the load test project.
 
   ![Performance counters shown in the load test project](_img/get-performance-data-for-load-tests/get-load-test-insights-03.png)
 
1. Queue a load test run and view the performance data from 
   Application Insights while your load test runs. The data might 
   take a few minutes to appear.

   ![To view the performance counters when your load test runs, click Application](_img/get-performance-data-for-load-tests/get-load-test-insights-04.png)

   Application counters are correlated with user load so that you can 
   understand which issues might cause performance problems that you find.
 
   >The counter samples have a sampling rate of one minute irrespective of 
   the sampling rate configured in your load test project. 

1. To do a more detailed analysis for any performance issue, or to do a 
   quick root cause analysis, go to Application Insights.

   ![To get more performance details, click Go to Application Insights](_img/get-performance-data-for-load-tests/LoadTestGoToAppInsights.png)

## See also

* [FAQs for load testing](reference-qa.md#qaappinsights)
* [Load test with Visual Studio](getting-started-with-performance-testing.md) 
* [Load test with VSTS](get-started-simple-cloud-load-test.md) 
* [Load test with Azure portal](app-service-web-app-performance-test.md) 
* [Tutorial: Run load tests before release](run-performance-tests-app-before-release.md) 
* [Analyze load test results using the Load Test Analyzer](https://docs.microsoft.com/visualstudio/test/analyze-load-test-results-using-the-load-test-analyzer)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
