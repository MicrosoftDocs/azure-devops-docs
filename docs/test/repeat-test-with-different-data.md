---
title: Repeat a test with different data
description: Learn about manual and exploratory testing. Repeat a test with different data in Azure Test Plans and Team Foundation Server.
ms.assetid: C9953A56-9BD6-408B-899B-FAD816B9FC0C
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: sdanie
author: steved0x
monikerRange: '<= azure-devops'
ms.date: 09/14/2021
---

# Repeat a test with different data

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

You add parameters to your [manual test](create-test-cases.md) to repeat the test with different test data.
For example, you can test adding different quantities to a shopping cart from quantities of 1, 5, 10, or 200.

You insert parameters within your test steps for a manual test case. Then, you provide a table of parameter values.
You can add shared parameters to test cases or convert parameters you've recently inserted into shared parameters.
Shared steps and shared parameters are different work item types that can be shared across multiple test cases.
They're linked to test cases through the **Test Cases-Shared Steps** and **Referenced By-References** link types as shown in the following illustration.

![Diagram shows Shared Steps connected to Test Case, which is also connected to Shared Parameters.](media/repeat-test-with-different-data/shared-steps-shared-parameters.png)

With shared steps and shared parameters, you can run multiple test cases with the same data.

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

## Add parameters to a test case
::: moniker range=">=azure-devops-2020"

You can add parameters to your tests.

1. Create a parameter by typing a name preceded by "**@**" in the actions and expected results of your test steps.

   ![Screenshot shows how to enter parameter names and values.](media/repeat-test-with-different-data/parameter-steps-values.png)

1. Underneath the list of steps, add combinations of parameter values.
   You might need to scroll down to see them.
::: moniker-end

::: moniker range="<=azure-devops-2019"

1. Create a parameter by typing a name preceded by "**@**" in the 
   actions and expected results of your test steps.

   ![Creating a parameter](media/repeat-test-with-different-data/repeat-test-with-different-data-01.png)

1. Underneath the list of steps, add combinations of parameter values. 
   You might need to scroll down to see them.
::: moniker-end

## Share parameters between test cases
::: moniker range=">=azure-devops-2020"

You can convert existing parameters to shared parameters so that you can use them and the associated data in other test cases.

1. In an open test case, select **Convert to shared parameters**.

   ![Screenshot shows converting existing parameters to shared parameters.](media/repeat-test-with-different-data/convert-shared-parameters.png)

1. After you've created a shared parameter set, open another test case and add the shared parameter set to that test case.

   ![Screenshot shows adding the shared parameter set to a test case.](media/repeat-test-with-different-data/add-shared-parameter-set.png)

   You can search for the shared parameter set by name.

   The shared parameter set is displayed in the **Parameter values** section after you add it.
   You can now use these parameters in your test case steps.

1. If the test case has different parameter names for these shared parameters, map the shared parameters to the local parameters to use the shared parameter data.

   ![Screenshot shows mapping a shared parameter to a local parameter.](media/repeat-test-with-different-data/map-shared-local-parameter.png)

   When they're correctly mapped, the data associated with the shared parameter is displayed.

1. Add, edit, and rename your shared parameter sets in the **Parameters** page.
   View the test cases that reference them in the **Test cases** pane.

   ![Screenshot shows options to add, edit, view, and rename a shared parameter.](media/repeat-test-with-different-data/shared-parameter-sets.png)

1. Each shared parameter set is a work item. Open the **Properties** page to view or make changes to this work item.
   For example, you can assign owners and track changes.

You can't add more than one shared parameter set to a single test case.
If two test cases share similar data, for example, one test case needs customer ID, name, email, and phone, and the second needs customer ID, name and address, you might consider creating a single shared parameter set containing all of the parameters - even though a few of the columns in the set will remain unused in each test case.

You can import parameter values from an Excel spreadsheet to your shared parameter sets.
Paste the values into your shared parameters grid.
You can also copy the data from your grid back into Excel.

::: moniker-end

::: moniker range="<=azure-devops-2019"

1. Convert existing parameters to shared parameters so that you 
   can use them and the associated data in other test cases.

   ![Converting existing parameters to shared parameters](media/repeat-test-with-different-data/repeat-test-with-different-data-02.png)
 
1. After you've created a shared parameter set, open another 
   test case and add the shared parameter set to that test case. 
   You can search for the shared parameter set by name.

   ![Adding the shared parameter set to a test case](media/repeat-test-with-different-data/repeat-test-with-different-data-03.png)
 
   The shared parameter set is displayed in the **Parameter values**
   section after you add it. You can now use these parameters in 
   your test case steps. 
 
1. If the test case has different parameter names for 
   these shared parameters, map the shared parameters to 
   the local parameters to use the shared parameter data.

   ![Mapping a shared parameter to a local parameter](media/repeat-test-with-different-data/repeat-test-with-different-data-04.png)
 
   When they are correctly mapped, the data associated with the 
   shared parameter is displayed. 
 
1. Add, edit, and rename your shared parameter sets in the 
   **Parameters** page. View the test cases that reference 
   them in the **Test cases** pane.

   ![Adding, editing, viewing, and renaming a shared parameter](media/repeat-test-with-different-data/repeat-test-with-different-data-05.png)
 
1. Each shared parameter set is a work item. Open the **Properties**
   page to view or make changes to this work item. For example, 
   you can assign owners and track changes.

You can't add more than one shared parameter set to a single test case. If two test cases share similar data, for example, one test case needs
customer ID, name, email, and phone, and the second needs customer ID, name and address, you might consider creating a single shared parameter set
containing all of the parameters - even though a few of the columns in the set will remain unused in each test case. 

You can import parameter values from an Excel spreadsheet to your shared parameter sets.
Paste the values into your shared parameters grid.
You can also copy the data from your grid back into Excel.

::: moniker-end

## Run a test case with parameters
::: moniker range=">=azure-devops-2020"
You can run a test case that uses parameters.

1. Select a test case with parameters and start running it.
   The Test Runner shows the first row of parameter values.

   ![Screenshot shows Test Runner displaying the first row of parameter values.](media/repeat-test-with-different-data/run-test-case-parameters.png)

1. When you've completed the steps, mark the test passed or failed.
   Then go on to the next iteration of the test, which uses the next row of parameter values.  

   ![Screenshot shows going on to the next iteration of the test.](media/repeat-test-with-different-data/next-iteration.png)

1. Use the menu to navigate to other iterations.

   ![Screenshot shows navigating to other iterations.](media/repeat-test-with-different-data/navigate-iterations.png)

1. If any of the parameter values are incorrect, fix them without canceling the test by choosing **Edit** from step's shortcut menu.
::: moniker-end

::: moniker range="<=azure-devops-2019"

1. Select a test case with parameters and start running it.
   The Test Runner shows the first row of parameter values.
 
   ![Test Runner showing the first row of parameter values](media/repeat-test-with-different-data/repeat-test-with-different-data-06.png)

1. When you've completed the steps, mark the test passed or failed.
   Then go on to the next iteration of the test, which uses the next 
   row of parameter values.  

   ![Going on to the next iteration of the test](media/repeat-test-with-different-data/repeat-test-with-different-data-07.png)

1. Use the drop-down to navigate to other iterations.

   ![Navigating to other iterations](media/repeat-test-with-different-data/repeat-test-with-different-data-08.png)

1. If any of the parameter values are incorrect, fix them 
   without canceling the test by choosing **Edit** from step's
   shortcut menu.
::: moniker-end

## Review the test results 
::: moniker range=">=azure-devops-2020"

The outcome of the test is based on a precedence hierarchy of all the iteration outcomes. The hierarchy order is Paused, Failed, Blocked, Passed, Not Applicable, and Unspecified (Active). For example, if you marked any iteration as failed and all the rest as passed, the outcome of the entire test is shown as failed. This result is different from test cases that don't have parameters, where the outcome displays the status of the last run.

To review test results, from the **Execute** tab, select a test point. Select **More options** or right-click to open the context menu. Select **View test results**.

![Screenshot shows selecting the View test results option from the context menu.](media/repeat-test-with-different-data/select-view-test-result.png)

You can view the results in the **Test Case Results** dialog box.

![Screenshot shows test results for a test point.](media/repeat-test-with-different-data/view-test-results.png)
::: moniker-end

::: moniker range="<=azure-devops-2019"

The outcome of the test is based on a precedence hierarchy of all the iteration outcomes. The hierarchy order is Paused, Failed, Blocked, Passed, Not Applicable, and Unspecified (Active). For example, if you marked any iteration as failed and all the rest as passed, the outcome of the entire test is shown as failed. This is different from test cases that do not have parameters, where the outcome displays the status of the last run.

1. Check the test result by opening the details pane.

   ![Checking the test result in the details pane](media/repeat-test-with-different-data/repeat-test-with-different-data-09.png)
 
1. Double-click a test result to view the test run details, 
   and the test results for each iteration.

   ![Viewing the test run details](media/repeat-test-with-different-data/repeat-test-with-different-data-10.png)
::: moniker-end

## Speed up test iterations by using record and playback

It can be error-prone and tedious to work through a long table of 
parameter combinations. To speed up things, create an action 
recording when you run the test with the first set of parameter 
values, and then play it back for the other sets.

1. Use Azure Test Plans to [run the test](run-manual-tests.md).

1. Select **Create action recording** before you choose **Start**.

1. Complete the first test iteration and then move on to the next one.

1. Mark each step as passed or failed as you work. Enter parameter 
   values in the application exactly as displayed in the test script.

1. Choose **Play** to run the test with the next set of parameter values. 
   Your actions will be played back automatically, but you must still 
   verify the results. 

Record and playback doesn't work with all applications.
For details, see [Supported configurations and platforms for coded UI tests and action recordings](/visualstudio/test/supported-configurations-and-platforms-for-coded-ui-tests-and-action-recordings).

## Related articles

* [FAQs for manual testing](reference-qa.yml#repeatdifferent)
* [Overview of manual and exploratory testing](index.yml)
* [Testing different configurations](test-different-configurations.md)
* [Collect diagnostic data](collect-diagnostic-data.md)
* [Manage test results](how-long-to-keep-test-results.md)
