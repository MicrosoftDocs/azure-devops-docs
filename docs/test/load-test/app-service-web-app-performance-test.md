---
title: Test performance from the Azure portal
description: Run Azure web app performance tests to check how your app handles user load. Measure response time and find failures that might indicate problems.
ms.assetid: D39BF037-ADF1-41D7-BA6D-84AADA2A16DE
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Load test with the Azure portal

[!INCLUDE [version-header-devops-services](../_shared/version-header-devops-services.md)] 

[!INCLUDE [loadtest-deprecated-include](../_shared/loadtest-deprecated-include.md)]

Check your web app's performance before you launch it or deploy updates to production by running load tests. 
That way, you can better assess whether your app is ready for release. Feel more
confident that your app can handle the traffic during peak use or at your next marketing push.

<a name="preparetests"></a>
## Prepare your environment

* You'll need an Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

* You'll need an Azure DevOps subscription to keep your performance test history. A suitable subscription will be created 
  automatically when you set up your performance test. Or you can create a new subscription 
  or use an existing subscription if you're the owner. 

* Deploy your app for testing in a non-production environment. 
  Have your app use an App Service plan other than the plan used in production. 
  That way, you don't affect any existing customers or slow down your app in production. 

<a name="singletest"></a>
## Set up and run your performance test

1. Sign in to the [Azure Portal](https://portal.azure.com). 
   To use an Azure DevOps subscription that you own, 
   sign in as the owner.

1. Go to your web app.

   ![Go to Browse All, Web Apps, your web app](_img/app-service-web-app-performance-test/azure-np-web-apps.png)

1. In the **DEVELOPMENT TOOLS** section choose **Performance test**.

   ![Go to Development Tools, Performance Test](_img/app-service-web-app-performance-test/azure-np-web-app-details-tools-expanded.png)
 
1. Now you'll link an Azure DevOps subscription to keep your performance test history. Choose **Set Account**.

   ![Select existing Azure DevOps subscription, or create a new subscription](_img/app-service-web-app-performance-test/azure-np-no-vso-account.png)

1. If you have an Azure DevOps subscription to use, select that. If you don't, create a new one.

   ![Select existing Azure DevOps subscription, or create a new subscription](_img/app-service-web-app-performance-test/azure-np-select-vso-account.png)

1. Choose **+ New** to create a new performance test.

   ![Create, set up, and run your performance test](_img/app-service-web-app-performance-test/azure-np-select-new-performance-test.png)

1. Set the details and run the test. Your web app's default URL is added automatically. 
   You can change the URL to test other pages (HTTP GET requests only). To simulate local conditions and reduce latency, 
   select a location closest to your users for generating load.

   ![Create, set up, and run your performance test](_img/app-service-web-app-performance-test/azure-np-new-performance-test.png)

   You simulate load on your app by generating virtual users (customers) 
   who visit your web site at the same time. This will show how many 
   requests are failing or responding slowly.

   As an example, suppose you have an app that gave out coupons at last year's holiday sale. 
   This event lasted 15 minutes with a peak load of 100 concurrent customers. 
   You want to double the number of customers this year. You also want to improve 
   customer satisfaction by reducing the page load time from 5 seconds to 2 seconds. 
   So, you can test your updated app's performance with 250 users for 15 minutes.

   [What is the maximum test duration and number of concurrent users?](reference-qa.md#qaazure-limits)
   
1. Watch the progress in real time while the test runs. During the first minute, 
   the page loads slower than is required.

   ![Performance test in progress with real-time data](_img/app-service-web-app-performance-test/azure-np-running-perf-test.png)

1. After the test is done, view the final results. You can see that the page loads much faster 
   after the first minute. This helps identify where you might start troubleshooting the problem.

   ![Completed performance test shows results, including failed requests](_img/app-service-web-app-performance-test/azure-np-perf-test-done.png)

<a name="multitest"></a>
## Test multiple URLs

You can also run performance tests incorporating multiple URLs
that represent an end-to-end user scenario by uploading a Visual
Studio Web Test file. Some of the ways you can create a
Visual Studio Web Test file are:

* [Capture traffic using Fiddler and export as a Visual Studio Web Test file](http://docs.telerik.com/fiddler/Save-And-Load-Traffic/Tasks/VSWebTest)
* [Create a load test file in Visual Studio](run-performance-tests-app-before-release.md)

To upload and run a Visual Studio Web Test file:
 
1. Follow the [steps above](#singletest) to open the **New performance test** blade.
   In this blade, choose the CONFIGURE TEST USING option to open the 
   **Configure test using** blade.  

   ![Opening the Configure load testing blade](_img/app-service-web-app-performance-test/multiple-01-authoring-blade.png)

1. Check that the TEST TYPE is set to **Visual Studio Web Test** and select your HTTP Archive file.
   Use the ![folder](_img/app-service-web-app-performance-test/multiple-folder-icon.png) icon to open the file selector dialog.

   ![Uploading a multiple URL Visual Studio Web Test file](_img/app-service-web-app-performance-test/multiple-01-authoring-blade2.png)

   After the file has been uploaded, you see the list of URLs to be tested in the URL DETAILS section.
 
1. Specify the user load and test duration, then choose **Run test**.

   ![Selecting the user load and duration](_img/app-service-web-app-performance-test/multiple-01-authoring-blade3.png)

1. After the test has finished, view the results in the two panes. The left pane
   shows the performance information as a series of charts.

   ![The performance results pane](_img/app-service-web-app-performance-test/multiple-01a-results.png)

   The right pane shows a list of failed requests, with the type of error and the number
   of times it occurred.

   ![The request failures pane](_img/app-service-web-app-performance-test/multiple-01b-results.png)

1. Rerun the test by choosing the **Rerun** icon at the top of the right pane.

   ![Rerunning the test](_img/app-service-web-app-performance-test/multiple-rerun-test.png)

## Next step

> [!div class="nextstepaction"]
> [Add app performance data](get-performance-data-for-load-tests.md)
