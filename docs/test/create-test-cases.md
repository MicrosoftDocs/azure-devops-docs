---
title: Create manual test cases
titleSuffix: Azure Test Plans
description: Create manual test cases to test your deliverables and assign testers. Use Excel and manage your test cases.  
ms.assetid: C3C10A82-C7F2-4AB6-9CED-B43DAF722800
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: quickstart
ms.author: jeom
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 11/04/2021
ms.update-cycle: 1095-days
---

# Create manual test cases

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

<a name="test-cases"></a>

Create manual test cases to check that each deliverable meets your users' needs. Manual test cases define individual steps testers perform, including steps that are shared across test cases. To test different data, you specify parameters for the test steps. For more information, see [Share steps between test cases](share-steps-between-test-cases.md) and [Repeat a test with different data](repeat-test-with-different-data.md). For an overview of test artifacts, see [Test objects and terms](test-objects-overview.md).

Organize your test cases by adding them to test plans and test suites, and then assign testers to run the tests. For more information, see [Test objects and terms](test-objects-overview.md).

> [!NOTE]
> Test iterations are designed to support data-driven scenarios, not workflow-driven scenarios.
  From a best practice perspective, if you have two test scenarios where the workflows are
  different, consider creating separate test cases. Also see [FAQs for manual testing](reference-qa.yml#testcases).

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

<a name="createcase"></a>

## Create test cases

::: moniker range=">=azure-devops-2020"
1. If you haven't already, [create a test plan and requirement-based test suites](create-a-test-plan.md).

2. Select a requirement-based test suite and select **New Test Case**.
		
   ![Screenshot showing test cases with New Test Case button highlighted.](media/create-test-cases/new-test-case-button.png)

   > [!NOTE]
   > The [test suite](create-a-test-plan.md) shown here was created from a User Story work item in the team's backlog board. When you add a test case to this kind of suite, the test case automatically links to the backlog item. To create test cases this way, open the context menu for the work item and choose **Add test**.

3. In the new work item, enter a title and select **Click or type here to add a step**.

   ![Screenshot showing the steps entered for a test case.](media/create-test-cases/test-case-steps.png)

4. Add test steps with a description of the action required to carry out the test and the expected results so that any team member can run the test. You can add attachments to a step if you want. Repeat until you add all the steps for the test.

   A test case that you can run gets created.
   
   For more information, see [Share steps](share-steps-between-test-cases.md) and [Copy or clone stories, issues and other work items](../boards/backlogs/copy-clone-work-items.md).

## Assign configurations to test cases

You can specify configurations, such as different operating systems, web browsers, and other variations for your tests.

- Select the test suite > **More options** > **Assign configurations**, and in the dialog box, select your configurations.

![Screenshot showing the Assign configurations to test suite dialog box with some options selected.](media/create-test-cases/assign-configurations-test-suite.png)

   You can also assign configurations to individual test cases. Select one or more test cases, select **More options** > **Assign configuration**.
   
- Make your changes and then **Save**.

For more information, see [Test different configurations](test-different-configurations.md).

## Reorder test cases

You can reorder manual test cases in static suites, requirement-based suites, and query-based suites.

Open a test case, and then use the up and down arrows to change the order.

![Screenshot showing the arrows used to move test steps up or down.](media/create-test-cases/change-step-order.png)

## Add existing test cases to a test suite

Add existing test cases to a test suite with the following actions.

1. Select a test suite. From the **New Test Case** menu, select **Add existing test cases**.

   ![Screenshot showing the Add existing test cases option to select.](media/create-test-cases/add-existing-test-cases.png)

1. Add search clauses, as needed, and then select **Run query**.

   ![Screenshot showing the Add test cases to suite dialog box with the Run query button highlighted.](media/create-test-cases/add-test-case-suite.png)

2. When you find the test cases you want, highlight them and select **Add test cases**.

::: moniker-end

> [!TIP]
> You can create a test case that automatically links to a requirement&mdash;User Story ([Agile](../boards/work-items/guidance/agile-process.md)), Product Backlog Item ([Scrum](../boards/work-items/guidance/scrum-process.md)), Requirement ([CMMI](../boards/work-items/guidance/cmmi-process.md)), or Issue ([Basic](../boards/get-started/plan-track-work.md))&mdash;when you create a test from the board. For more information, see [Add, run, and update inline tests](../boards/boards/add-run-update-tests.md).

## Use the Grid view to edit test cases
::: moniker range=">=azure-devops-2020"

Do the following steps to copy and paste test cases into the **Grid** view.

1. Select the **Grid View** icon.

   ![Screenshot showing the Grid View button used to open the Grid view.](media/create-test-cases/grid-view-button.png)

2. Select one to several test cases, and then select **Edit test case(s) in grid**.

   ![Screenshot showing several test cases selected with the context menu open and Edit test case(s) in grid selected.](media/create-test-cases/edit-multiple-test-cases-grid.png)

3. Add, delete, or clear rows.

   ![Screenshot showing the Grid context menu to insert, delete, or clear rows.](media/create-test-cases/grid-context-menu.png)

4. Optional. To add multiple test cases to the test suite, select **Add test cases using grid**.

   ![Screenshot showing option to add test cases using the Grid view.](media/create-test-cases/add-test-cases-grid.png)
   - In the **List** view, use the column options to select the fields in the test case work item.

   ![Screenshot showing the Column Options button.](media/create-test-cases/column-options.png)

   View and edit these fields when you switch to the **Grid** view.
::: moniker-end

### Use Excel to copy information into a Grid view
::: moniker range=">=azure-devops-2020"
You can copy test cases and test steps from an existing Excel worksheet.
Copy the columns from Excel that you want to use for the title, action, and expected results fields.
Copying doesn't copy column formatting, other than multiline, from the worksheet.
Paste these columns into the **Grid** view, edit if necessary, and save them.

![Screenshot showing the save option for steps copied from Excel to the Grid view.](media/create-test-cases/save-test-cases-grid.png)

You can copy the data from the **Grid** view and paste it into your Excel worksheet.
Copying doesn't copy test step formatting, other than multiline, into the worksheet.

> [!NOTE]
> Don't use the Teams plugin for Excel to add or update test case work items.
> Excel can't parse the format used to store test steps, and in some cases this may affect the formatting of the test case work items.

::: moniker-end

<a name="assigncase"></a>

## Assign testers

::: moniker range=">=azure-devops-2020"
You can reassign test cases so that a different tester can run them.
You can assign all the test cases in a test suite to multiple testers, which is useful for acceptance testing.

Testers need [Basic access](../organizations/security/access-levels.md) to run tests from Azure Test Plans.

1. In the context menu for a test suite, select **Assign testers to run all tests**.

   ![Screenshot showing the Assign testers to run all tests option in a test suite context menu.](media/create-test-cases/assign-testers-all-tests.png)

   The **Select testers to run all the tests in suite** dialog box opens.

1. Add or remove testers from the list. After you select the testers, select **Send email**
   and edit the message as required so they know that tests are ready for them to run.

   ![Screenshot showing Assigning testers to run all tests dialog box with Search users and Send email called out.](media/create-test-cases/select-testers-dialog-box.png)

   The email contains a link that testers can open to see the list of assigned tests.

You can assign an individual test case to a tester.

1. In the **Execute** tab for a test suite, select a test, and then open the context menu.

   ![Screenshot showing the context menu for a test case with the Assign tester option selected.](media/create-test-cases/assign-tester-test-case.png)

1. Select **Assign tester**. Search for and select a tester.

::: moniker-end

## Manage test cases
::: moniker range=">=azure-devops-2020"

You can open a test case to view it or edit it.

1. To open a test case in a test suite, in the **Define** tab, double-select the name of the test case to open.
2. In the **Execute** tab, select a test case, open its context menu, and select **Edit test case**.

![Screenshot showing the Edit test case option for a test case in the context menu.](media/create-test-cases/open-test-case-edit.png)

A test case can be linked to test suites, requirements, and bugs.
To see linked items, in the **Define** tab, open the context menu for a test case, and select **View Linked Items**.

![Screenshot showing the Linked Items dialog box for a test case with options to view Test Suites, Requirements, and Bugs.](media/create-test-cases/view-linked-items.png)

In the **Linked Items** dialog box, you can view **Test Suites**, **Requirements**, and **Bugs**.

## Bulk edit test cases

You can edit more than one test case at a time. Select several test cases in a test suite and select **Edit test case(s)**.

![Screenshot showing the Edit work items dialog box where you can select fields and values for several test cases.](media/create-test-cases/bulk-edit-work-items.png)

Select a **Field** and enter a **Value**. Select **Add new field** to add another field-value pair.

### Use tags for test cases

You can tag test cases and view only the ones with specific tags.
For example, tag all the tests related to signing in so that you can rerun these tests if a bug is fixed for that page.
You can filter on that tag from the **Test Plans** web portal.

To add new tags to add to work items, have at least **Basic** access and have the project-level **Create new tag definition permissions** set to **Allow**. for more information, see [Add work item tags](../boards/queries/add-tags-to-work-items.md).

You can add and edit tags when you edit a test case, or bulk edit tags in the **Grid** view.
You can also create suites based on queries when you use tags.

![Screenshot showing tags for a test case.](media/create-test-cases/test-case-tags.png)

## Rename or remove test cases

You can rename or remove test cases. Open the test case from its context menu.

![Screenshot showing a test case with its context menu with Open test case selected.](media/create-test-cases/open-test-case-option.png)

Here you can rename the test case.

![Screenshot showing a test case with its name selected to edit.](media/create-test-cases/change-test-case-name.png)

Or you can remove the test case from the test suite. From the context menu for the test case, select **Remove**.

![Screenshot showing removed test case.](media/create-test-cases/remove-test-case.png)

To permanently delete test plans and test suites, be a member of the Project Administrators group or have the Area Path node-level [**Manage test plans** or **Manage test suites**](../organizations/security/set-permissions-access-work-tracking.md#manage-test-artifacts) permission set to **Allow**. To manage or delete test artifacts, you must also have your [access level](../organizations/security/access-levels.md) set to **Basic + Test Plans** or **Visual Studio Enterprise**. For more information, see [Delete test artifacts in Azure Boards](../boards/backlogs/delete-test-artifacts.md).
::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related articles

- [Copy or clone stories, issues and other work items](../boards/backlogs/copy-clone-work-items.md)
- [Delete test artifacts in Azure Boards](../boards/backlogs/delete-test-artifacts.md)
- [FAQs for manual testing](reference-qa.yml#testcases)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Test objects and terms](test-objects-overview.md)
