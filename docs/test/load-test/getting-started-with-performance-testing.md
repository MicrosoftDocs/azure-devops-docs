---
title: Load test in the cloud with VSTS
description: Performance test your app with cloud-based load tests using the features of the Test hub in Visual Studio and Microsoft VSTS
ms.assetid: 50d0dafd-ae7c-4028-9e4a-687f062e0179
ms.prod: devops
ms.technology: devops-test
ms.topic: quickstart
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

<a name="cloudloadtest"></a>
# Load test your app in the cloud using Visual Studio and VSTS

[!INCLUDE [version-header-vs-ts](../_shared/version-header-vs-ts.md)] 

Check your app or web site's performance before you launch it or deploy updates to production.
Find problems before your customers do. Start running 
[cloud-based load tests](https://www.visualstudio.com/features/vso-cloud-load-testing-vs) 
in almost no time with Visual Studio and Visual Studio Team Services (VSTS).

> This example shows how to execute a cloud load test using Visual Studio. You can also
[run cloud-based load tests directly using the VSTS portal](get-started-simple-cloud-load-test.md),
or [run load tests locally with Visual Studio](https://docs.microsoft.com/visualstudio/test/quickstart-create-a-load-test-project).

<a name="LoadTestVSIDE"></a>
## Prepare your environment

* [Download and install Visual Studio Enterprise](https://www.visualstudio.com/downloads/download-visual-studio-vs), 
  if you don't already have it.

* [Create a VSTS account](https://www.visualstudio.com/products/visual-studio-team-services-vs), 
  if you don't have one already. You can have any access 
  level assigned to you in VSTS 
  when you use Visual Studio Enterprise to run load tests.

* If you don't have a load test project, 
  use our sample load test project with your web site or app. 
  Just provide the address for the web site that you want to test. 
  Or, if you have a load test project, jump ahead to 
  [connecting to VSTS](#ConnectVSOnline) to run the load tests.

<a name="article10"></a>
## Get the sample load test project

1.  [Download the sample load test project](https://code.msdn.microsoft.com/Getting-started-with-17a52e95), 
   unblock the zip file in its **Properties** dialog,
   and unzip the files into a local folder on your computer.

1.  Open the **GettingStartedWithLoadTesting.sln** solution
   in Visual Studio Enterprise.

1.  Open the **SampleWebTest.webtest** file. 
   Replace the URL with the URL of your app's web page.

   ![Open SampleWebTest.webtest. In Properties window, replace URL with your web page address](_img/getting-started-with-performance-testing/LoadTest_ReplaceURL.png)

<a name="ConnectVSOnline"></a>
## Connect to your VSTS account

Before you can run load tests in the cloud, 
connect Visual Studio to your VSTS account.

1. In Team Explorer, connect to your VSTS account.

   ![Connect to your VSTS account](_img/getting-started-with-performance-testing/LoadTestConnect1.png)

1. Connect to one of your projects.
 
   ![Select Projects](_img/getting-started-with-performance-testing/LoadTestConnect2.png)

   - If you haven't connected to your VSTS 
     account before, add your account to the server list.

     ![Click Servers to add your VSTS account](_img/getting-started-with-performance-testing/LoadTestConnect3.png)

   - Enter your VSTS account name 
     (your-account-name**.visualstudio.com**).

     ![Enter your account name](_img/getting-started-with-performance-testing/LoadTestConnect4.png)

   - If you're prompted to sign in to VSTS, do that now.

1. Select your VSTS account from the list, 
   then choose your project. Now you can connect.
    
   ![Choose your project](_img/getting-started-with-performance-testing/LoadTestConnect6.png)

<a name="article14"></a>
## Run and analyze your load test

1. In Solution Explorer, open the load test that you want to run.

   ![Solution Explorer: double-click your load test](_img/getting-started-with-performance-testing/OpenLoadTest.png)

1. To run your test closer to where your users are,
   select a location closer to your users. 

   ![Edit load test to set location](_img/CLT_LoadTestSetLocation.png)

   ![Select location](_img/getting-started-with-performance-testing/CLT_LoadTestPickLocation.png)

1. Now run your load test. This will run in the cloud 
   using VSTS.

   ![On the load test toolbar, click Run](_img/getting-started-with-performance-testing/LoadTestRun.png)

   Your test appears in the queue and waits for its turn to run. 
   When VSTS is ready to run your test, the test status 
   changes to "Acquiring resources".

   ![Your load test appears in the queue](_img/getting-started-with-performance-testing/LoadTestQueued.png)

   A large test run might take up to 10 minutes while 
   VSTS sets up virtual machines and agents for you.

1. You can watch your app's performance while the test runs. 
   Look at the details to review errors, warnings, or other information 
   about your test.

   ![Running your load test show the performance](_img/LoadTestInProgress.png)

1. When the test is done, download the report to view the results.

   ![Click Download to save the report](_img/getting-started-with-performance-testing/LoadTestDownloadReport.png)

   ![Click View Report to view results](_img/getting-started-with-performance-testing/LoadTestViewReport.png)

   The results include performance counter data, threshold violations, and error information.

1. Review your test's details. Find the number of users where your 
   app's performance fails to meet your requirements by examining the 
   step load pattern for virtual users.

   ![View load test run details](_img/getting-started-with-performance-testing/LoadTestDetail.png)

1. Fix any performance issues that you find in your app's code, 
   then rerun the test. 

1. To [simulate real-world loads](https://msdn.microsoft.com/library/ff406975%28v=vs.140%29.aspx) 
   more closely, you can refine your test by specifying web performance 
   test properties, load test scenario properties, and
   [run settings properties](https://docs.microsoft.com/visualstudio/test/load-test-run-settings-properties).

## Next step

> [!div class="nextstepaction"]
> [Add app performance data](get-performance-data-for-load-tests.md)
