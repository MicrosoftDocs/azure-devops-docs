---
title: Repeat a test with different data
description: Learn about manual and exploratory testing. Repeat a test with different data in Azure Test Plans.
ms.assetid: C9953A56-9BD6-408B-899B-FAD816B9FC0C
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: jeom
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 09/14/2021
---

# Repeat a test with different data

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

Add parameters to your [manual test](create-test-cases.md) to repeat the test with different test data. For example, you can test adding different quantities to a shopping cart from quantities of 1, 5, 10, or 200.

Insert parameters within your test steps for a manual test case. Then, provide a table of parameter values. You can add shared parameters to test cases or convert parameters you recently inserted into shared parameters. Shared steps and shared parameters are different work item types that can be shared across multiple test cases. They're linked to test cases through the **Test Cases-Shared Steps** and **Referenced By-References** link types as shown in the following illustration.

![Diagram shows Shared Steps connected to Test Case, which is also connected to Shared Parameters.](media/repeat-test-with-different-data/shared-steps-shared-parameters.png)

With shared steps and shared parameters, you can run multiple test cases with the same data.

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

## Add parameters to a test case

::: moniker range=">=azure-devops-2020"

Do the following steps to add parameters to your tests.

1. Create a parameter by typing a name preceded by "**@**" in the actions and expected results of your test steps.

   ![Screenshot shows how to enter parameter names and values.](media/repeat-test-with-different-data/parameter-steps-values.png)

1. Underneath the list of steps, add combinations of parameter values.
   You might need to scroll down to see them.
::: moniker-end

## Share parameters between test cases
::: moniker range=">=azure-devops-2020"

Do the following steps to convert existing parameters to shared parameters, so you can use them and the associated data in other test cases.

1. In an open test case, select **Convert to shared parameters**.

   ![Screenshot shows converting existing parameters to shared parameters.](media/repeat-test-with-different-data/convert-shared-parameters.png)

2. After you create a shared parameter set, open another test case and add the shared parameter set to that test case.

   ![Screenshot shows adding the shared parameter set to a test case.](media/repeat-test-with-different-data/add-shared-parameter-set.png)

   You can search for the shared parameter set by name.

   The shared parameter set displays in the **Parameter values** section after you add it.
   You can now use these parameters in your test case steps.

3. If the test case has different parameter names for these shared parameters, map the shared parameters to the local parameters to use the shared parameter data.

   ![Screenshot shows mapping a shared parameter to a local parameter.](media/repeat-test-with-different-data/map-shared-local-parameter.png)

   When they're correctly mapped, the data associated with the shared parameter is displayed.

4. Add, edit, and rename your shared parameter sets in the **Parameters** page.
   View the test cases that reference them in the **Test cases** pane.

   ![Screenshot shows options to add, edit, view, and rename a shared parameter.](media/repeat-test-with-different-data/shared-parameter-sets.png)

5. Each shared parameter set is a work item. Open the **Properties** page to view or make changes to this work item.
   For example, you can assign owners and track changes.

You can't add more than one shared parameter set to a single test case.
If two test cases share similar data, you might consider creating a single shared parameter set, which contains all of the parameters, even though a few of the columns in the set remain unused in each test case. For example, one test case needs customer ID, name, email, and phone, and the second needs customer ID, name and address.

You can import parameter values from an Excel spreadsheet to your shared parameter sets.
Paste the values into your shared parameters grid.
You can also copy the data from your grid back into Excel.

::: moniker-end

## Run a test case with parameters
::: moniker range=">=azure-devops-2020"
Do the following steps to run a test case that uses parameters.

1. Select a test case with parameters and start running it.
   The Test Runner shows the first row of parameter values.

   ![Screenshot shows Test Runner displaying the first row of parameter values.](media/repeat-test-with-different-data/run-test-case-parameters.png)

1. When you complete the steps, mark the test passed or failed. Go on to the next iteration of the test, which uses the next row of parameter values.  

   ![Screenshot shows going on to the next iteration of the test.](media/repeat-test-with-different-data/next-iteration.png)

1. Use the menu to navigate to other iterations.

   ![Screenshot shows navigating to other iterations.](media/repeat-test-with-different-data/navigate-iterations.png)

1. If any of the parameter values are incorrect, fix them without canceling the test by choosing **Edit** from step's shortcut menu.
::: moniker-end

## Review the test results 
::: moniker range=">=azure-devops-2020"

The outcome of the test is based on a precedence hierarchy of all the iteration outcomes. The hierarchy order is Paused, Failed, Blocked, Passed, Not Applicable, and Unspecified (Active). For example, if you marked any iteration as *failed* and all the rest as *passed*, the outcome of the entire test shows as *failed*. This result is different from test cases that don't have parameters, where the outcome displays the status of the last run.

To review test results, from the **Execute** tab, select a test point. Select **More options** or right-click to open the context menu. Select **View test results**.

![Screenshot shows selecting the View test results option from the context menu.](media/repeat-test-with-different-data/select-view-test-result.png)

You can view the results in the **Test Case Results** dialog box.

![Screenshot shows test results for a test point.](media/repeat-test-with-different-data/view-test-results.png)
::: moniker-end

## Related articles

* [FAQs for manual testing](reference-qa.yml#repeatdifferent)
* [Overview of manual and exploratory testing](index.yml)
* [Testing different configurations](test-different-configurations.md)
* [Collect diagnostic data](collect-diagnostic-data.md)
* [Manage test results](how-long-to-keep-test-results.md)
