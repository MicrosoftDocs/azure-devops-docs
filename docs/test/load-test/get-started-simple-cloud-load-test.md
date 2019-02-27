---
title: Run URL-based cloud load tests
description: Get app performance data when you load test using the features of Azure DevOps and Microsoft Team Foundation Server (TFS)
ms.assetid: 65E96414-756B-4BD9-92C3-4DDB4C7A6B57
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Run URL-based load tests with Azure DevOps

[!INCLUDE [version-header-devops-services](../_shared/version-header-devops-services.md)] 

[!INCLUDE [loadtest-deprecated-include](../_shared/loadtest-deprecated-include.md)]

You can run a load test on your web app or site directly using Azure DevOps.

<a name="prepareenvir"></a>
## Prepare your environment

* You will need a [Visual Studio Enterprise subscription](https://visualstudio.microsoft.com/products/visual-studio-enterprise-vs)
  (monthly, annual, or MSDN) to run URL-based load tests.

* Create your Azure DevOps subscription if you don't have one already. 

<a name="runtests"></a>
## Run a URL-based load test

1. Sign into Azure DevOps.

1. Go to [!INCLUDE [test-hub-include-adsonly](../_shared/test-hub-include-adsonly.md)], open the **Load test** page, and choose **URL based test**
   from the **+ New** menu.

   ![Start a new load test from the New menu](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-new-test-menu.png)

1. Type a name for the load test, then enter the URL you want to test
   in the center column and in the details pane on the right. For a simple
   load test, leave the **HTTP method** set to **GET**.

   ![Add load test information](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO.png)

   You can add multiple URLs and select the method for each one, such as 
   **POST** or **PUT**. You can also add headers and querystring values
   if you need to send these as part of the request. The URL Load Test
   accesses each of these URLs multiple times using the parameters you 
   specify, and records the results.

1. Open the **Settings** page. Here you can change the parameters of
   the test such as the duration, load pattern, number of users, and
   more. To run the test near to your users, select a **Load location**.
   Then choose **Save**. 

   ![Specify settings, then save the test](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-settings-tab.png)
 
1. When you have set up all the URLs and parameters for your test, start it by
   choosing **Run test**.

   ![Start the test](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-start-test.png)

1. As the test runs, you see live information about the progress
   of the test. You can stop the test by using the **Abort** link on the
   toolbar.

   ![Live information about the running load test](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-progress.png)

<a name="viewresults"></a>
## View the results of the load test

1. When your test is done, look at the results to see how 
   well your app performed. For example, you can see an overview
   of your app's performance in the **Summary** page.
   This page shows all of the main metrics such as average response
   time, user load, requests per second, failed requests, any errors
   that might have occurred, and test usage.

   ![Load test Summary page results](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-summary-tab.png)
 
   The lower section of the **Summary** page shows the settings used
   for the test, and details of the five slowest requests during the test.
   If there are any transaction tests, the page will also show the five slowest of these.
   Use the ![down arrow](_img/_shared/SimpleLoadTestVSO-sort-column.png)
   icon above a column to sort the list based on the contents of that column.

1. Open the **Charts** page to see a graphical representation of 
   the test results over time. The charts show the average
   performance, throughput, errors, and the results of each test 
   request. Hover your mouse pointer over a chart to 
   see more details. 

   ![Load test Charts page results](_img/_shared/LoadTestVSO-charts.png)

1. Open the **Diagnostics** page to see detailed information such as a list
   of errors and status messages.

   ![Load test Diagnostics page results](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-diagnostics-tab.png)

   You can also use the ![arrow](_img/_shared/SimpleLoadTestVSO-summary-errors-icon.png)
   icon in the **Errors** section of the **Summary** page to go directly to the 
   **Diagnostics** page.

   ![Opening the Diagnostics page from the Summary page](_img/_shared/SimpleLoadTestVSO-summary-errors-link.png)

1. Open the **Logs** page to see a list of test runs. Choose the link in
   the **Attachment** column to download the detailed log as a text file.

   ![Load test Logs page results](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-logs-tab.png)

1. To run the same test again, choose **Rerun**.

   ![Rerunning the same test](_img/get-started-simple-cloud-load-test/SimpleLoadTestVSO-rerun-test.png)

### Key metrics

* **Response Time**. The time it takes for your app to respond to requests
  is one of the key metrics for measuring app performance.
  Most apps perform well when a single user is accessing them, but the response
  time can increase dramatically when the app is under load. This can happen
  if resources such as CPU, database or other services are at peak capacity,
  resulting in longer response times.

* **User Load**. The peak user load encountered during the load test run.

* **Failed Requests**. The number of requests that failed, either because
  the app did not respond or due to other issues such as connectivity errors.
  Your app might start throttling requests when under load by discarding new
  requests in order to allow existing requests to be processed.

## Next step

> [!div class="nextstepaction"]
> [View and compare load test runs](performance-reports.md)
