---
title: Test different configurations
description: Manual and exploratory testing - test different configurations with Azure DevOps and Team Foundation Server (TFS)
ms.assetid: 750F033E-A39E-4C85-BF85-012629C33DE6
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Test different configurations

[!INCLUDE [version-header](_shared/version-header.md)] 

Your users will probably install or run your app 
on a wide variety of configurations, such as different 
operating systems, web browsers, and other variations. 
You will want to run at least some of your tests in 
stages that have those different configurations. 

Use your test plan to decide which tests you want to run 
on which configurations. You have to make sure that when 
you run your tests that you have set up your stages 
for the configurations that you need.

You might draw up a schematic matrix of the combinations that you want to test:

![Test matrix of browser and operating system configurations](_img/_shared/testing-configurations-schematic.png)

Then you can:

* [Create the configurations and variables](#create-configs)
* [Assign the configurations to test plans and test suites](#assign-configs)
* [Run tests with each of the configurations](#run-configs)
* [Track your test results for each configuration](#track-configs)

> **Note**: This feature is available only in Azure DevOps.
In addition, Stakeholders and Basic users cannot create or manage configurations.

[!INCLUDE [feature-availability](_shared/feature-availability.md)] 

<a name="create-configs"></a>
## Create configurations and variables

A test configuration is a combination of configuration variable 
values. Your configuration variables could be, for example, 
operating system, browser, CPU type, database. A configuration 
might be "Windows 8 + 32-bit CPU" or "Windows 10 + 64-bit CPU."

You must create the configuration variables first. Then combine 
multiple variable values to create a configuration.
 
1. Open the **Configurations** page in [!INCLUDE [test-hub-include](_shared/test-hub-include.md)], choose 
   the ![new](_img/plus-and-arrow-icon.png) icon, and select 
   **New configuration variable**.

   ![Adding a new configuration variable](_img/testing-configurations/testing-configurations-01.png)
 
1. Type a name for the variable, such as **Browser**, and type a value.
   Add as many values as you wish to the configuration variable, and then save it.
 
   ![Setting the values for a new configuration variable](_img/testing-configurations/testing-configurations-01b.png)

1. Repeat the steps to create any other configuration variables
   you need. For example, create a configuration variable named **Operating system**
   with the names of each operating system on which you want to test.

   ![Setting the values for an Operating Systems configuration variable](_img/testing-configurations/testing-configurations-01c.png)

1. Choose the ![new](_img/plus-and-arrow-icon.png) icon and select 
   **New test configuration**. 

   ![Adding a new test configuration](_img/testing-configurations/testing-configurations-01a.png)

1. Type a name for the test configuration and add the configuration 
   variables you created. Choose a value for each variable for this configuration.  

   ![Adding variables to the new test configuration](_img/testing-configurations/testing-configurations-02.png)

   Ensure **Assign to new test plans** is checked to make this the default 
   configuration for all the new test plans you create.
 
1. Save your new test configuration. 

<a name="assign-configs"></a>
## Assign configurations to test plans and suites

You can assign configurations to a test plan, a test suite,
or an individual test case. Configurations assigned to a test plan 
or test suite apply to all tests or suites within it.

1. To assign a configuration to a test plan, in the **Test plans** page, open the shortcut
   menu for the plan and choose **Assign configuration to test plan**. 

   ![Assigning a configuration to a test plan](_img/testing-configurations/testing-configurations-03.png)

1. To assign a configuration to a test suite, open the shortcut
   menu for the suite and choose **Assign configuration to test suite**. 

   ![Assigning a configuration to a test suite](_img/testing-configurations/testing-configurations-04.png)

   If you add multiple configurations to a test plan or suite, 
   the tests cases are repeated in the plan or suite with the 
   each of the configurations you have assigned.
 
   ![Multiple configuration assignment to a test suite](_img/testing-configurations/testing-configurations-05.png)
 
1. If necessary, override the default configuration assigned to a test case
   and assign the configuration you need. Select one or more
   test cases, open the shortcut menu, and choose **Assign configurations**. 

   ![Overriding the default configuration assigned to a test case](_img/testing-configurations/testing-configurations-06.png)

1. Search for and select the configurations to assign to these test case(s).

   ![Setting the required configurations for a test case](_img/testing-configurations/testing-configurations-07.png)

<a name="run-configs"></a>
## Run tests with each configuration

1. Set up a testing platform for a particular configuration, such
   as testing the app using Google Chrome on Windows 10.

1. Select and run a test that has this configuration assigned.

   ![Running the test with the configuration assigned](_img/testing-configurations/testing-configurations-07a.png)

   As you run the test, a reminder of the required configuration 
   in shown in the status bar of the Test Runner window.

   ![The required configuration appears in the Test Runner window](_img/testing-configurations/testing-configurations-08.png)

<a name="track-configs"></a>
## Track test results for each configuration

1. Open the **Charts** page for your test plan or test suite, choose 
   **New**, and select **New test result chart**.
 
   ![Creating a new test result chart](_img/testing-configurations/testing-configurations-09.png)

1. Choose the type of chart you require, select **Configuration**
   in the **Group by** list, and choose **OK**.
 
   ![Choosing the type of chart you require](_img/testing-configurations/testing-configurations-10.png)

   A chart is created that can help you track your tests based on configurations. 
   You can pin this chart to your dashboard.

   ![The configuration test result chart](_img/testing-configurations/testing-configurations-11.png)

> If you have a test case that appears in several test plans and test suites, you can set the different configurations for each of these. 
The same test case can have different configuration settings in different test suites and test plans.

## See also

* [Overview of manual and exploratory testing](index.md)
* [Exploratory test and submit feedback directly from your browser](perform-exploratory-tests.md)

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
