---
title: View progress report 
titleSuffix: Azure Test Plans
description: Learn how to view the status of your planned testing using an out-of-the-box Progress Report and lightweight charts.
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: jeom
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 12/08/2021
ms.update-cycle: 1095-days
---

# Track test status

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

View the status of planned tests or monitor testing progress by defining test case or test result charts. For more information about test planning, see [Create test plans and test suites](create-a-test-plan.md). For information about test result terms, see [Test objects and terms](test-objects-overview.md#test-terms).

::: moniker range=">= azure-devops-2020"
To track the progress of more than one test plan or test suite, open the [Progress Report](progress-report.md).
::: moniker-end

## Prerequisites

[!INCLUDE [prerequisites-run](includes/prerequisites-run.md)]

<a id="charts"></a> 

## Track testing progress

Use test results charts to track how your testing is going.
Choose from a fixed set of prepopulated fields related to results.

Add your own charts for test results to visualize what's important for your team.
If you already know how to add a chart, jump to the [examples](#TestResultsExamples) that you can create.

::: moniker range=">=azure-devops-2020"
To add a chart, follow these steps:

1. Select **Test Plans** to open the **Test Plans** page. Open a test plan and then select the **Charts** tab.

2. Under **Charts**, select **New** > **New test result chart**.

   ![Screenshot shows the Charts page with New, then New test result chart selected.](media/track-test-status/new-test-result-chart.png)

3. Select the chart type, in this example, a pie chart.
   Based on the chart, configure the fields that you want to use to group by, or for the rows and columns.

   ![Screenshot of the Configure Chart dialog box where you can enter chart type, name, and other settings.](media/track-test-status/configure-pie-chart.png)

   All charts roll up the information for any child test suites of the test plan or test suite that you selected.

4. Select **OK** to save the chart.
   The chart displays in the **Charts** page for your test plan or test suite.

   ![Screenshot shows the Charts page with the new chart displayed.](media/track-test-status/display-pie-chart.png)

::: moniker-end

<a name="TestResultsExamples"></a>

## Test results examples

This section includes examples of useful charts.

### Check test status for a test suite

Do the following steps to check the test status for a specific test suite.

1. Select **Test Plans** to open the **Test Plans** page, and then select a plan to view a test suite.
2. Select **New** > **New test result chart** to create a test results pie chart.
3. Group by **Outcome**.

::: moniker range=">=azure-devops-2020"
![Screenshot shows the Configure chart dialog box with Pie and Outcome selected.](media/track-test-status/configure-pie-chart.png)
::: moniker-end

### Check status for user stories per sprint

If you created requirement-based test suites in your test plan for your user stories, you can create a chart to review status for user stories that your team is testing in the current sprint.

1. Create a static test suite that groups your requirement-based test suites together.
2. Select that static test suite in the **Test Plans** page.
3. Add a test results stacked bar chart.
4. Select **Suite** as the **Y-axis** and **Outcome** as **Group by**.

::: moniker range=">=azure-devops-2020"
![Screenshot shows a stacked bar chart for a user story with Suite and Outcome selected.](media/track-test-status/user-story-stacked-bar-chart.png)
::: moniker-end

### Check tests for each tester

You can check how many tests that each tester left to run.

1. Select your test plan in the **Test Plans** page and add a test results pivot table chart.
2. Choose **Tester** as **Rows** and **Outcome** as **Columns** pivot.

::: moniker range=">=azure-devops-2020"
![Screenshot shows a pivot table with Tester and Outcome selected.](media/track-test-status/tester-tests-left.png)
::: moniker-end

### Check quality based on the configuration

Use either a stacked bar chart or a pivot table chart.
Specify **Configuration** and **Outcome** as pivots.

### Track why tests are failing

You can track why tests are failing for your team.

For failure analysis, use either a stacked bar chart or a pivot table chart.
Select **Tester** and **Failure type**.

> [!NOTE]
> Failure type for test results can only be set using Microsoft Test Manager.

### Track resolutions for failing tests

You can track the resolution for failing tests for your team.

For resolution analysis, use either a stacked bar chart or a pivot table chart.
Choose **Tester** and **Resolution**.

> [!NOTE]
> Resolution type for test results can only be set using Microsoft Test Manager.

## Track test case status

Use test case charts to find out the progress of your test case authoring.
The charts for test cases give you the flexibility to report on columns that you add to the tests page.
By default, test case fields aren't added to the view in the tests page.

If you already know how to add a chart, jump to the [examples](#ExamplesTestCase) that you can create for test cases.

::: moniker range=">=azure-devops-2020"

1. From the **Define** or **Execute** tabs, add any fields you want to use for your test case chart by using  **Column Options**.
   Those fields appear as choices in the lists for grouping for your test case charts.

2. Select the test plan or test suite for your chart in the **Test Plans** page.
   Under **Charts**, select **New** > **New test case chart**.

   ![Screenshot shows the Charts page with New, then New test case chart selected.](media/track-test-status/new-test-case-chart.png)

   All charts roll up the information for any child test suites of the test plan or test suite that you selected.

3. Select the chart type.
   Based on the chart, configure the fields that you want to use to group by, for rows and columns, or the range for trend charts.

   ![Screenshot shows the Configure chart dialog box where you can select a chart type and other values.](media/track-test-status/configure-chart-values.png)

   You can't group by test suite for the test case charts.

4. Select **OK** to save the chart.
   The chart displays in the **Charts** page for your test plan or test suite.
::: moniker-end

<a name="ExamplesTestCase"></a>

## Test case examples

These examples show common ways to interact with test case results.

### View recent test results

You can view the recent test results for an individual test case.

::: moniker range=">=azure-devops-2020"
1. Select the **Execute** tab in a test suite and then select a test case. 
2. Select **More options** or right-select to open the context menu. 
3. Select **View test result**.

![Screenshot shows the context menu for a test case, with the View test result option selected.](media/track-test-status/view-test-result-option.png)

::: moniker-end

1. View the recent test results for this test case.

::: moniker range=">=azure-devops-2020"
![Screenshot shows the Test Runs pane with information about individual test run.](media/track-test-status/test-case-results.png)
::: moniker-end

### Track burn down by using a stacked area chart

You can track burn down for test case creation.

1. Create a stacked area trend chart to view the burn down for how many test cases are ready to be run.
2. Select **State** for the stack by field and **Ascending** for the sort field.

::: moniker range=">=azure-devops-2020"
![Screenshot shows a stacked area chart with State and ascending value selected.](media/track-test-status/burn-down-stacked-area-chart.png)
::: moniker-end

You can track burn down for automation status.

Use a stacked area trend chart to view the burn down for automated test cases.
Select **Automation status** for the **Stack by** field and **Ascending** for the **Sort** field.

### See test ownership and priorities

If multiple teams own test cases in your test plan, you can see how many test cases each team owns and the priorities of the tests.

If your teams organize by area path, use a test case pie chart.
Select **Area path** for **Group by**.

If you want to know the priorities of these tests, create a stacked bar chart.
Select **Area path** for the **Y-axis** and **Priority** for **Group by**.

### Track test creation status

You can track test creation status for team members by creating a chart that includes the **Assigned to** value.
1. Use a stacked bar chart or a pivot table chart.
2. Select **Assigned to** for **Y-axis** or **Rows**.
3. Select **State** for **Group by** or **Columns**.

<a name="configure-test-widget"></a>

## Share charts on your team's dashboard

Pin a chart to your team's dashboard for all the team to view.
Use the chart's context menu.

::: moniker range=">=azure-devops-2020"
![Screenshot shows the chart context menu with Add to dashboard selected.](media/track-test-status/add-dashboard-chart.png)
::: moniker-end

You can [configure the dashboard widget](../report/dashboards/widget-catalog.md) to show a range of chart types.

> [!NOTE]
> Be a team administrator to configure the dashboard widget, but team members with Stakeholder access can view the charts on the dashboard.

## Related articles

- [Progress report](progress-report.md) 
- [Control how long to keep test results](how-long-to-keep-test-results.md)
- [FAQs for manual testing](reference-qa.yml#trackstatus)
- [Widget catalog](../report/dashboards/widget-catalog.md)
- [Team administration](../organizations/settings/manage-teams.md)
