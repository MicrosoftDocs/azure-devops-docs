---
title: Bulk import or export of test cases 
titleSuffix: Azure Test Plans  
description: Learn how to bulk import or export test cases in Azure Test Plans.  
ms.service: azure-devops-test-plans
ms.custom: cross-project, UpdateFrequency3
ms.author: jeom
author: wisdeom
ms.topic: how-to
monikerRange: '= azure-devops'
ms.date: 12/04/2023
---


# Bulk import or export of test cases 

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

Azure Test Plans users can bulk import or export test cases using CSV or Microsoft Excel file formats. The import operation supports creation of new test cases into a given test suite or update existing test cases by providing the test case ID. The export operation allows users to export test cases into CSV or Microsoft Excel file (XLSX). While you can continue to use bulk import and updates, you can use the native web-portal based functionality to copy, clone and update the test cases. For more information, see [Copy or clone test plans, test suites, and test cases](copy-clone-test-items.md).
  
For an overview of test objects and terminology, see [Test objects and terms](test-objects-overview.md).   
 
## Export test cases 

1. From the **Test Plans** > **Test plans** page, choose the test plan with the test suite containing the test cases you want to export. 
 
2. (Optional) Select :::image type="icon" source="media/icons/column-options.png"::: **Column options** to add fields to include in the download file. 

3. To export all test cases for the test suite, select either **Export test cases to CSV** or **Export test cases to XLSX**. 

   :::image type="content" source="media/bulk-import-test-case/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

4. To export a subset of test cases for the test suite, select the test cases to export, choose :::image type="icon" source="../media/icons/more-actions.png"::: **More options**, and select **Export test case(s) to CSV** or **Export test case(s) to XLSX**. 

   :::image type="content" source="media/bulk-import-test-case/export-select-test-cases-test-suite.png" alt-text="Screenshot of selected test cases, export test cases to CSV.":::

5. The exported CSV file appears in your **Downloads** folder. 

## Import test cases 

1. From **Test Plans>Test plans** page, choose the test plan with the test suite into which you want to import test cases. 

   :::image type="content" source="media/bulk-import-test-case/choose-import-test-cases.png" alt-text="Screenshot of Import test cases to the selected test suite.":::

2. Choose the file to import from the dialog that opens, and then choose **Import**.

   :::image type="content" source="media/bulk-import-test-case/import-test-cases-dialog.png" alt-text="Screenshot of Import Test Cases dialog.":::

3. Choose **Confirm** in the **Confirm import** dialog that displays. If you specify test cases that are already defined in the test suite, some elements might get over written during import. 

<a id="import-test-cases"></a>

## Update existing test cases

1. To update work items, create a column view that contains all the columns you want to export and possibly edit. Post applying relevant columns to your view, it's time to export the test cases into a CSV or XLSX file. Select **Export to CSV**  or **Export to XLSX** to save the file to your local machine.

   :::image type="content" source="media/bulk-import-test-case/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

2. Make the edits to your test cases. You must not change the **ID** and **Work Item Type** fields. Any other fields you want to include are optional.

3. Save the file and import it back to the test suite (see [import section](#import-test-cases).) 

## Import automated test cases (TCM) 

To import automated test cases to a test suite, use `tcm testcase /import`. You must specify a .dll file for the test assembly that contains your tests. 

```tcm 
tcm testcase /import /collection:teamprojectcollectionurl /teamproject:project
             /storage:path
             [/maxpriority:priority]
             [/minpriority:priority]
             [/category:filter]
             [/syncsuite:id [/include]]
             [/login:username,[password]]
```


| Parameter | Description |  
|----------|------------|  
|**/storage**:`path`|Specifies the path and name of the test assembly that contains your automated tests that you want to import.| 
|**/maxpriority**:`priority`|Optional. Specifies which tests to import based on the maximum priority of the test method. For example, if the parameter is `/maxpriority:1`, only tests with a priority attribute for the test method less than or equal to 1 are imported as test cases from the assembly.| 
|**/minpriority**:`priority`|Optional. Specifies which tests to import based on the minimum priority of the test method. For example, if the parameter is `/minpriority:2`, only tests with a priority attribute for the test method equal or greater than 2 are imported as test cases from the assembly.| 
|**/category**:`filter`|Optional. Specifies which tests to import based on the category of each test method in the test assembly. You can use this parameter together with `/syncsuite` to import tests with a certain category into a specific test suite.<br/> For more information about test categories, see [Run unit tests with Test Explorer](/visualstudio/test/run-unit-tests-with-test-explorer).| 
|**/syncsuite**:`id`|Optional. Specifies the suite ID for the test suite in your test plan to which you want to add the test cases that you import. This suite can't be a dynamic suite or a query-based suite. If you specify a test suite to synchronize to update tests, the unsupported tests get removed from the test suite but not from the test plan itself.  |

## FAQs

### Q: Can I import new test cases and update existing cases in the same CSV/XLSX file?

A: Absolutely! Leave the Test case ID field empty for any new work items. For existing test cases you want to update, provide the respective 'Test case ID' and 'Work item type' values. 

### Q: How do I know if my imported file has errors?

A: Any problems with the formatting of your CSV/XLSX file appear in the import view in the web-portal. You can't import the work items until the formatting and syntax is correct.

:::image type="content" source="media/bulk-import-test-case/import-errors.png" alt-text="Screenshot of Import Test Cases error dialog.":::

### Q: Does import operation support all work item types?

A: No, all work items aren't supported. The Test case import only supports the following work item types:

- Test Case

Important for referencing shared steps in test case using import functionality:

- A shared steps work item must already exist, and its ID can be referenced in the CSV. The CSV or XLSX import functionality does not support creating a new shared steps work item if it is referenced without an ID, and the import will fail with an "invalid column" error.

- You can create new shared steps work item from a test case work item UI and **using create shared steps option** in it.

- Once the shared steps work item is created, you can refer the ID of the shared step in CSV.

:::image type="content" source="media/bulk-import-test-case/shared-steps-reference-in-csv.png" alt-text="Screenshot of shared step reference in CSV.":::

- Note that if the shared steps work item reference is provided along with steps in the CSV or XLSX, it will update the shared steps work item. Therefore, if you only want to provide a reference to the shared steps, do not add steps to it in the CSV or XLSX.

Azure Boards has a separate bulk import functionality using CSV files. For more information, see [Bulk import or update (CSV)](../boards/queries/import-work-items-from-csv.md).

### Q: What are the mandatory headers to include in Import CSV/XLSX file?

A: Ensure every import file has the following headers (with the exact spelling): 
* **ID**: The ID of the work item you're trying to import. For new test case creation, leave this field blank.
* **Work Item Type:** Test case import method only supports 'Test case' and 'Shared Steps.' Use these exact keywords when providing work item type information.
* **Title:** The title of the test case you want to create or update, which can be an alpha-numeric value.
* **Test Step:** Steps defined in a test case are in an ordered list. You need to provide the order number of each test step.
* **Step Action:** Defines the actions a manual tester needs to undertake while executing the test step.
* **Step Expected:** The expected outcome of a given action. 


### Q: What are the limitations to import or export operations?

A: Ensure to follow the below limitations:
* The test case state column must be in Design state.
* The test case title length must not exceed 128 characters.
* There's a limit of 20 MB on JSON objects created during import and export. If the import fails, try the operation with small subset of the test cases.
* The user performing the import must have permissions on the area and iteration paths for test plan and test suite they're planning to import or export.
* Copy and Import operations fail if the related link count exceeds 1000 for the test case.

##  Next steps

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related articles

- [Create test plans and test suites](create-a-test-plan.md)
- [Create test cases](create-test-cases.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Test objects and terms](test-objects-overview.md) 
- [Create a query based on build and test integration fields](../boards/queries/build-test-integration.md) 
- [Customize and manage the test experience](/previous-versions/azure/devops/reference/witadmin/tcm-customize-manage-test-experience) 
