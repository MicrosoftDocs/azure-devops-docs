---
title: Test different configurations
description: Learn about manual and exploratory testing. You can test different configurations with Azure Test Plans and Team Foundation Server.
ms.assetid: 750F033E-A39E-4C85-BF85-012629C33DE6
ms.service: azure-devops-test-plans
ms.topic: conceptual
ms.author: jeom
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 12/20/2021
ms.update-cycle: 1095-days
ms.custom:
  - UpdateFrequency3
  - sfi-image-nochange
---

# Test different configurations

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

Your users will probably install or run your app 
on a wide variety of configurations, such as different 
operating systems, web browsers, and other variations. 
You will want to run at least some of your tests in 
stages that have those different configurations. 

Use your test plans to decide which tests you want to run 
on which configurations. You have to make sure that when 
you run your tests that you have set up your stages 
for the configurations that you need.

You might draw a schematic matrix of the combinations that you want to test:

![Test matrix of browser and operating system configurations](media/shared/testing-configurations-schematic.png)

Then you can:

* [View available configurations and variables](#view-configs)
* [Create configurations and variables](#create-configs)
* [Assign the configurations to test plans and test suites](#assign-configs)
* [Run tests with each of the configurations](#run-configs)
* [Track your test results for each configuration](#track-configs)

## Prerequisites

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md). |
| **Access levels** | To add test configurations: Project-level **Manage test configurations** permission set to **Allow**. By default, this permission is granted to members of the Contributors and Project Administrator groups.|

For more information, see [Manual test access and permissions](manual-test-permissions.md).

[!INCLUDE [prerequisites-tcm](includes/prerequisites-tcm.md)]

<a name="view-configs"></a>

## View configurations and variables

You often want to see the configurations that are already available to run your tests.

# [Browser](#tab/browser)

You can view a list of test configurations and configuration variables from the **Configurations** page.

While in your project, select **Test Plans** > **Configurations** from the left navigation area. Here you'll see all of the test configurations and variables currently available for your test plans.

:::image type="content" source="media/testing-configurations/viewing-test-configurations.png" alt-text="Screenshot of Query Editor, Query test plans.":::

Select a configuration or variable to see more information about it in the window to the right.

# [TCM CLI](#tab/tcm-cli)

Use `tcm configs /list` to view the configurations available for the test plans and test suites in your project. When no optional parameters are specified, all test configurations are listed for the team project.

```tcm
tcm configs /list [/querytext:query] /collection:teamprojectcollectionurl
            /teamproject:project [/login:username,[password]]
```

| Parameter | Description |  
|----------|------------|
|**/querytext**:`query`| Optional. Specifies the query to use to list a subset of test configurations.    |

[!INCLUDE [prerequisites-define](includes/common-tcm-parameters.md)]

**Example**

The following command lists the test configurations available in the *Fabrikam Fiber* project hosted in the *fabrikamprime* organization. The **ID** corresponds to the configuration **Name**. For example, configuration ID *9* is aligned with the *Google Chrome on Windows 10* test configuration.

```tcm
tcm configs /list /collection:https://dev.azure.com/fabrikamprime /teamproject:"Fabrikam Fiber"

Id        Name
--------- ----------------------------------------------------------------
2         Windows 8
7         Windows 7
9         Google Chrome on Windows 10
```

***

<a name="create-configs"></a>

## Create configurations and variables
::: moniker range=">=azure-devops-2020"

A test configuration is a combination of configuration variable values.
Your configuration variables could be, for example, operating system, browser, CPU type, database.
A configuration might be "Windows 8 + 32-bit CPU" or "Windows 10 + 64-bit CPU."

Create the configuration variables first.
Then combine multiple variable values to create a configuration.

1. Open the **Configurations** page in the **Test Plans** web portal, select the **+** icon, and select **New configuration variable**.

   ![Screenshot shows the New configuration variable option in New menu.](media/testing-configurations/new-configuration-variable.png)

1. Type a name for the variable, such as **Browser**, and a description.
   Select **Add new value**, and then add a value.
   Add as many values as you wish to the configuration variable, and then save it.

   ![Screenshot shows adding values to a new configuration variable.](media/testing-configurations/add-values-configuration-variable.png)

1. Repeat the steps to create any other configuration variables you need.
   For example, create a configuration variable named **Operating system** with the names of each operating system on which you want to test.

   ![Screenshot shows setting the values for an Operating Systems configuration variable.](media/testing-configurations/operating-system-configuration.png)

1. Select the **+** icon and select  **New test configuration**.

   ![Screenshot shows the New test configuration option in the New menu.](media/testing-configurations/new-test-configuration.png)

1. Type a name for the test configuration and add the configuration variables you created.
   Choose a value for each variable for this configuration.  

   ![Screenshot shows adding variables to the new test configuration.](media/testing-configurations/add-variables-testing-configuration.png)

   Be sure that **Assign to new test plans** is checked to make this configuration the default for all the new test plans you create.

1. Save your new test configuration.
::: moniker-end

<a name="assign-configs"></a>

## Assign configurations to test plans and suites
::: moniker range=">=azure-devops-2020"

You can assign configurations to a test suite or an individual test case.
Configurations assigned to a test suite apply to all tests or suites within it.

1. To assign a configuration to a test suite, in the **Test plans** page, select a plan.
   In the **Test Suites** area, select a test suite and select **More options** or right-click to open the context menu and then select **Assign configuration**.

   ![Screenshot shows Assign configuration menu option.](media/testing-configurations/assign-configuration-menu-option.png)

   If you add multiple configurations to a test suite, the tests cases are repeated with each of the configurations you have assigned.

   ![Screenshot shows multiple configuration assignment to a test suite.](media/testing-configurations/multiple-configuration-test-suite.png)

1. If necessary, override the default configuration assigned to a test case and assign the configuration you need.
   Select one or more test cases, open the context menu, and select **Assign configuration**.

   ![Screenshot shows assigning a configuration assigned to a test case.](media/testing-configurations/assign-configuration-test-cases.png)

1. Search for and select the configurations to assign to the test cases.

   ![Screenshot shows setting configurations for a test case.](media/testing-configurations/select-configuration-test-case.png)
::: moniker-end

<a name="run-configs"></a>

## Run tests with each configuration
::: moniker range=">=azure-devops-2020"

Set up a testing platform for a particular configuration, such as testing the app using Google Chrome on Windows 10.

1. Select and run a test that has this configuration assigned.

   ![Screenshot shows a test with a specific configuration and the Run for web application option selected.](media/testing-configurations/run-test-configuration.png)

   As you run the test, a reminder of the configuration appears in the status bar.

   ![Screenshot shows the configuration for this test in the status bar.](media/testing-configurations/configuration-status-bar.png)
::: moniker-end

<a name="track-configs"></a>

## Track test results for each configuration
::: moniker range=">=azure-devops-2020"

1. Open the **Charts** page for your test suite, select **New**, and select **New test result chart**.

   ![Screenshot shows the New test result chart menu option.](media/testing-configurations/new-test-case-chart-option.png)

1. Choose a type of chart, like a pie chart or bar chart, and then select **Group by** > **Configuration** and choose **OK**.

   ![Screenshot shows choosing a configuration option for group by in the configure chart dialog box.](media/testing-configurations/select-configuration-chart.png)

   A chart is created that can help you track your tests based on configurations.
   You can pin this chart to your dashboard.

   ![Screenshot shows a bar chart with values for Not run, Passed, and Failed.](media/testing-configurations/configuration-result-chart.png)

If you have a test case that appears in several test suites, you can set the different configurations for each suite.
The same test case can have different configuration settings in different test suites and test plans.
::: moniker-end

## Related articles

* [Overview of manual and exploratory testing](index.yml)
* [Exploratory test and submit feedback directly from your browser](perform-exploratory-tests.md)

 
