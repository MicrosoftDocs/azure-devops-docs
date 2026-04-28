---
title: Test different configurations
description: Learn how to test different configurations in Azure Test Plans by creating configuration variables, assigning configurations to test plans and suites, and tracking results.
ms.assetid: 750F033E-A39E-4C85-BF85-012629C33DE6
ms.service: azure-devops-test-plans
ms.topic: how-to
ms.author: pliaros
author: rohit-batra
ms.update-cycle: 1095-days
ms.custom: UpdateFrequency3, sfi-image-nochange
monikerRange: '<= azure-devops'
ms.date: 04/28/2026
---

# Test different configurations

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

Users install or run your app on a wide variety of configurations, such as different operating systems, web browsers, and other variations. Run at least some of your tests in stages that have those different configurations.

Use test plans to decide which tests to run on which configurations. Make sure that when you run your tests, you set up your stages for the configurations that you need.

In this article, you learn how to:

> [!div class="checklist"]
> - [View existing configurations and variables](#view-configs)
> - [Create configurations and variables](#create-configs)
> - [Assign configurations to test plans and suites](#assign-configs)
> - [Run tests with each configuration](#run-tests-with-each-configuration)
> - [Track test results for each configuration](#track-test-results-for-each-configuration)

The following schematic matrix shows example combinations that you might want to test:

:::image type="content" source="media/shared/testing-configurations-schematic.png" alt-text="Diagram that shows a test matrix of browser and operating system configurations.":::

## Prerequisites

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md). |
| **Access levels** | To add test configurations: Project-level **Manage test configurations** permission set to **Allow**. By default, members of the Contributors and Project Administrator groups have this permission.|

For more information, refer to [Manual test access and permissions](manual-test-permissions.md).

[!INCLUDE [prerequisites-tcm](includes/prerequisites-tcm.md)]

<a name="view-configs"></a>

## View configurations and variables

View the configurations that are already available to run your tests.

# [Browser](#tab/browser)

View a list of test configurations and configuration variables from the **Configurations** page.

1. In your project, select **Test Plans** > **Configurations** from the left navigation area.

   All test configurations and variables currently available for your test plans appear.

   :::image type="content" source="media/testing-configurations/viewing-test-configurations.png" alt-text="Screenshot of the Configurations page showing test configurations and variables.":::

1. Select a configuration or variable to view more information in the pane on the right.

# [TCM CLI](#tab/tcm-cli)

Use `tcm configs /list` to view the configurations available for the test plans and test suites in your project. When you don't specify optional parameters, the command lists all test configurations for the team project.

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
::: moniker range="<=azure-devops"

A test configuration is a combination of configuration variable values.
Your configuration variables could be, for example, operating system, browser, CPU type, database.
A configuration might be "Windows 8 + 32-bit CPU" or "Windows 10 + 64-bit CPU."

Create the configuration variables first, then combine multiple variable values to create a configuration.

1. Open the **Configurations** page in the **Test Plans** web portal, select the **+** icon, and select **New configuration variable**.

   :::image type="content" source="media/testing-configurations/new-configuration-variable.png" alt-text="Screenshot of the New configuration variable option in the New menu.":::

1. Enter a name for the variable, such as **Browser**, and a description. Select **Add new value**, and then add a value. Add as many values as you need to the configuration variable, and then save it.

   :::image type="content" source="media/testing-configurations/add-values-configuration-variable.png" alt-text="Screenshot of adding values to a new configuration variable.":::

1. Repeat the steps to create any other configuration variables you need. For example, create a configuration variable named **Operating system** with the names of each operating system on which you want to test.

   :::image type="content" source="media/testing-configurations/operating-system-configuration.png" alt-text="Screenshot of setting values for an Operating Systems configuration variable.":::

1. Select the **+** icon and select **New test configuration**.

   :::image type="content" source="media/testing-configurations/new-test-configuration.png" alt-text="Screenshot of the New test configuration option in the New menu.":::

1. Enter a name for the test configuration and add the configuration variables you created. Choose a value for each variable for this configuration.

   :::image type="content" source="media/testing-configurations/add-variables-testing-configuration.png" alt-text="Screenshot of adding variables to the new test configuration.":::

   Make sure **Assign to new test plans** is selected to make this configuration the default for all new test plans you create.

1. Save your new test configuration.
::: moniker-end

<a name="assign-configs"></a>

## Assign configurations to test plans and suites
::: moniker range="<=azure-devops"

You can assign configurations to a test suite or an individual test case. Configurations assigned to a test suite apply to all tests or suites within it.

1. To assign a configuration to a test suite, in the **Test plans** page, select a plan. In the **Test Suites** area, select a test suite and select **More options** or right-click to open the context menu and then select **Assign configuration**.

   :::image type="content" source="media/testing-configurations/assign-configuration-menu-option.png" alt-text="Screenshot of the Assign configuration menu option for a test suite.":::

   If you add multiple configurations to a test suite, the test cases are repeated with each of the configurations you assigned.

   :::image type="content" source="media/testing-configurations/multiple-configuration-test-suite.png" alt-text="Screenshot of multiple configurations assigned to a test suite.":::

1. If necessary, override the default configuration assigned to a test case and assign the configuration you need. Select one or more test cases, open the context menu, and select **Assign configuration**.

   :::image type="content" source="media/testing-configurations/assign-configuration-test-cases.png" alt-text="Screenshot of assigning a configuration to test cases.":::

1. Search for and select the configurations to assign to the test cases.

   :::image type="content" source="media/testing-configurations/select-configuration-test-case.png" alt-text="Screenshot of selecting configurations for a test case.":::
::: moniker-end

[!INCLUDE [configuration-inheritance-warning](includes/configuration-inheritance-warning.md)]

## Run tests with each configuration
::: moniker range="<=azure-devops"

Set up a testing platform for a particular configuration, such as testing the app using Google Chrome on Windows 10.

1. Select and run a test that has this configuration assigned.

   :::image type="content" source="media/testing-configurations/run-test-configuration.png" alt-text="Screenshot of a test with a specific configuration and the Run for web application option selected.":::

   As you run the test, a reminder of the configuration appears in the status bar.

   :::image type="content" source="media/testing-configurations/configuration-status-bar.png" alt-text="Screenshot of the configuration for this test in the status bar.":::
::: moniker-end

## Track test results for each configuration
::: moniker range="<=azure-devops"

1. Open the **Charts** page for your test suite, select **New**, and select **New test result chart**.

   :::image type="content" source="media/testing-configurations/new-test-case-chart-option.png" alt-text="Screenshot of the New test result chart menu option.":::

1. Choose a chart type, like a pie chart or bar chart, and then select **Group by** > **Configuration** and choose **OK**.

   :::image type="content" source="media/testing-configurations/select-configuration-chart.png" alt-text="Screenshot of choosing a configuration option for group by in the configure chart dialog box.":::

   A chart is created that helps you track your tests based on configurations. You can pin this chart to your dashboard.

   :::image type="content" source="media/testing-configurations/configuration-result-chart.png" alt-text="Screenshot of a bar chart showing test results for Not run, Passed, and Failed by configuration.":::

If a test case appears in several test suites, you can set different configurations for each suite. The same test case can have different configuration settings in different test suites and test plans.
::: moniker-end

## Related content

- [Create and manage manual test cases](create-test-cases.md)
- [Create a test plan](create-a-test-plan.md)
- [Run manual tests](run-manual-tests.md)
- [Manage test runs](test-runs.md)
- [FAQs for manual testing](reference-qa.yml)
* [Exploratory test and submit feedback directly from your browser](perform-exploratory-tests.md)

 
