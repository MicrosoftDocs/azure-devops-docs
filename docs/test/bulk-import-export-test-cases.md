---
title: Bulk import or export test cases 
titleSuffix: Azure Test Plans  
description: Import and export test cases in bulk using CSV or Excel files in Azure Test Plans. Create new test cases, update existing ones, and use smart field mapping with reusable templates for team efficiency.
ai-usage: ai-assisted
ms.service: azure-devops-test-plans
ms.custom: cross-project, UpdateFrequency3
ms.author: jeom
author: wisdeom
ms.topic: how-to
monikerRange: '= azure-devops'
ms.date: 11/13/2025
ms.update-cycle: 1095-days
---


# Bulk import or export test cases 

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

Azure Test Plans supports bulk import and export of test cases using CSV or Microsoft Excel (XLSX) file formats. You can create new test cases in a test suite or update existing test cases by providing the test case ID during import. Export operations save test cases to CSV or XLSX files for external editing or sharing.

You have the following options for managing test cases at scale:
- **Bulk operations**: Import and export using CSV/XLSX files for large-scale changes
- **Web portal tools**: Copy, clone, and update test cases directly in the browser for smaller changes

For more information about web portal alternatives, see [Copy or clone test plans, test suites, and test cases](copy-clone-test-items.md).
  
For an overview of test objects and terminology, see [Test objects and terms](test-objects-overview.md).

## Prerequisites

[!INCLUDE [prerequisites-stakeholder](includes/prerequisites-stakeholder.md)] 
 
## Export test cases 

1. From the **Test Plans** > **Test plans** page, choose the test plan with the test suite containing the test cases you want to export. 
 
2. (Optional) Select :::image type="icon" source="media/icons/column-options.png"::: **Column options** to add fields to include in the download file. 

3. To export all test cases for the test suite, select either **Export test cases to CSV** or **Export test cases to XLSX**. 

   :::image type="content" source="media/bulk-import-test-case/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

4. To export a subset of test cases for the test suite, select the test cases to export, choose :::image type="icon" source="../media/icons/more-actions.png"::: **More options**, and select **Export test case(s) to CSV** or **Export test case(s) to XLSX**. 

   :::image type="content" source="media/bulk-import-test-case/export-select-test-cases-test-suite.png" alt-text="Screenshot of selected test cases, export test cases to CSV.":::

   The exported CSV file appears in your **Downloads** folder. 

## Import test cases 

> [!NOTE]
> The newly enhanced import experience features smarter automapping, reusable templates to share with your team, and a more intuitive interface. This feature is rolling out gradually to all users. If you don't see the new interface yet, you can continue using the existing import functionality with the same results.

1. From the **Test Plans** > **Test plans** page, select the test plan containing the test suite where you want to import test cases. 

2. Select the **Import test cases from CSV/XLSX** icon.

   :::image type="content" source="media/bulk-import-test-case/choose-import-test-cases.png" alt-text="Screenshot of Import test cases to the selected test suite.":::

3. To review automapping and mandatory fields, drag and drop a file, or select **Browse** and choose the file to import. The wizard automatically processes the data and maps detected fields using fuzzy matching against your Azure DevOps test case fields.

4. Review the proposed field mappings. The import requires nine mandatory fields to proceed:
   - **ID** - Leave empty for new test cases, provide existing ID to update test cases
   - **Work Item Type** 
   - **Title**
   - **Test Step**
   - **Step Action** 
   - **Step Expected**
   - **Area Path**
   - **Assigned To**
   - **State**

   :::image type="content" source="media/bulk-import-test-case/import-wizard-mapping.png" alt-text="Screenshot of the import wizard showing field mapping interface.":::

5. (Optional) To change a field mapping:
   - Select the dropdown for the field you want to update and choose the correct Azure DevOps field from the list (use search if needed).

   :::image type="content" source="media/bulk-import-test-case/update-field-mapping.png" alt-text="Screenshot shows dropdown menu for optional field mapping updates.":::

   - To skip a field entirely, deselect (uncheck) the current mapping in the dropdown for the field to show "Select field..." option.

   :::image type="content" source="media/bulk-import-test-case/skip-mapping.png" alt-text="Screenshot shows empty field selection for skipping mapping.":::

6. (Optional) Export the current mapping as a reusable template to share with your team or save for future imports with similar column structures.

7. (Optional) If you're importing an XLSX file with multiple sheets, select which sheet to import. You can only import one sheet at a time.

   :::image type="content" source="media/bulk-import-test-case/multiple-sheets-selection.png" alt-text="Screenshot showing worksheet selection dialog for XLSX files with multiple sheets.":::

8. Choose **Import** to complete the process. For existing test cases with IDs provided, some elements might get overwritten during import.

## Use mapping templates and system memory

When you first import a file with a specific column structure, review the field mappings to ensure all fields map correctly to Azure DevOps test case fields.

Azure Test Plans remembers your field mappings for subsequent imports with the same column structure, so you don't need to reconfigure them. However, always review the mappings before completing the import.

**For team productivity:**
- Export your current mapping as a reusable template to share with team members
- This eliminates the need for each team member to configure mappings individually

**For personal efficiency:**
- Create and save mapping templates for different file structures you use regularly
- Import the appropriate template along with your data to avoid reconfiguring mappings each time

   :::image type="content" source="media/bulk-import-test-case/mapping-download-template.png" alt-text="Screenshot shows no template selected and link to download current mapping as template.":::

**Template change notifications:**
The system alerts you when you modify mappings after importing a template, helping prevent accidental changes to established team standards.

:::image type="content" source="media/bulk-import-test-case/mapping-no-longer-based-on-template.png" alt-text="Screenshot shows message stating that changes made means mapping is no longer based on the uploaded template.":::

> [!TIP]
> Mapping templates are optional productivity features. Use them when they help streamline your import workflow or maintain consistency across your team.

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
|**/syncsuite**:`id`|Optional. Specifies the suite ID for the test suite in your test plan to which you want to add the test cases that you import. This suite can't be a dynamic suite or a query-based suite. If you specify a test suite to synchronize to update tests, the unsupported tests get removed from the test suite but not from the test plan itself.|

## Frequently asked questions

### Q: Can I create new test cases and update existing ones in the same file?

A: Yes! Use a single CSV/XLSX file for both operations:

- **New test cases**: Leave the ID field empty
- **Existing test cases**: Include the test case ID and work item type

### Q: How do I identify and resolve errors in my import file?

A: The import wizard validates your file and displays errors at multiple stages:

**During file upload:**
- The wizard immediately detects file format issues, unsupported file types, or corrupted files

**During field mapping:**
- Missing mandatory headers are highlighted in red
- Invalid field mappings show warning indicators
- Unmapped required fields prevent import from proceeding

**Before import completion:**
- A final validation check identifies data format issues, invalid characters, or constraint violations
- All errors must be resolved before the import can proceed

:::image type="content" source="media/bulk-import-test-case/import-errors.png" alt-text="Screenshot of Import Test Cases error dialog.":::

**Common errors and solutions:**
- **Missing mandatory headers**: Add the required column headers with exact spelling
- **Invalid data formats**: Check date formats, numeric values, and text length limits
- **Incorrect field mappings**: Verify that columns map to the correct Azure DevOps fields
- **Unsupported characters**: Remove special characters that aren't supported in field values
- **Empty required fields**: Ensure all mandatory fields contain valid data

**To resolve errors:**
1. Note the specific error messages displayed in the wizard
2. Cancel the current import if needed
3. Fix the issues in your CSV/XLSX file
4. Reupload the corrected file and review the field mappings
5. Complete the import once all validation checks pass

### Q: What work item types does the import operation support?

A: The test case import feature supports only **Test Case** work items.

**For shared steps:**

- **Existing shared steps**: You can reference existing shared steps by including their ID in your CSV/XLSX file
- **New shared steps**: The import doesn't create new shared steps. You must create them first using the web interface:
  1. Open a test case in the UI
  2. Select **Create shared steps** 
  3. Once created, reference the shared step ID in your import file

   :::image type="content" source="media/bulk-import-test-case/shared-steps-reference-in-csv.png" alt-text="Screenshot of shared step reference in CSV.":::

> [!NOTE]
> If you include both a shared step reference and step details in the same CSV/XLSX row, the import updates the existing shared steps work item. To only reference shared steps without modifying them, don't include step details in the import file.

For other work item types like User Stories, Tasks, or Bugs, use the Azure Boards bulk import functionality. For more information, see [Bulk import or update (CSV)](../boards/queries/import-work-items-from-csv.md).

### Q: What are the mandatory headers for import CSV/XLSX files?

A: Include the following headers in every import file with exact spelling:

* **ID**: Work item ID for the test case. Leave blank for new test cases; provide existing ID to update test cases.
* **Work Item Type**: Must be 'Test Case' or 'Shared Steps' (use these exact keywords).
* **Title**: Test case name (can contain letters, numbers, and special characters).
* **Test Step**: Order number for each test step in the sequence.
* **Step Action**: Actions the tester performs during this step.
* **Step Expected**: Expected result after completing the action.

### Q: What are the limitations for import or export operations?

A: Consider the following limitations when importing or exporting test cases:

* **Test case state**: Test cases must be in Design state during import
* **Title length**: Test case titles can't exceed 128 characters
* **File size**: JSON objects created during import and export have a 20-MB limit. If import fails, try importing a smaller subset of test cases
* **Permissions**: You must have permissions for the area and iteration paths of the test plan and test suite you're importing to or exporting from
* **Related links**: Operations fail if the test case has more than 1,000 related links

##  Next step

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related content

- [Create test plans and test suites](create-a-test-plan.md)
- [Create test cases](create-test-cases.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Repeat a test with different data](repeat-test-with-different-data.md)
- [Test objects and terms](test-objects-overview.md) 
- [Create a query based on build and test integration fields](../boards/queries/build-test-integration.md)
