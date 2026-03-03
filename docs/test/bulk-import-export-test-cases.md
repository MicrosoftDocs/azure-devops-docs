---
title: Bulk import or export test cases
titleSuffix: Azure Test Plans  
description: Bulk import and export test cases in Azure Test Plans using CSV or Excel files. Create, update, and manage test cases efficiently with smart field mapping.
#customer intent: As a tester, I want to update existing test cases in bulk so that I can save time on repetitive edits.
ai-usage: ai-assisted
ms.service: azure-devops-test-plans
ms.custom: cross-project, UpdateFrequency3
ms.author: pliaros
author: wisdeom
ms.topic: how-to
monikerRange: '= azure-devops'
ms.date: 03/02/2026
ms.update-cycle: 1095-days
---


# Bulk import or export test cases 

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

Azure Test Plans supports bulk import and export of test cases using CSV or Microsoft Excel (XLSX) file formats. You can create new test cases in a test suite or update existing test cases by providing the test case ID during import. Export operations save test cases to CSV or XLSX files for external editing or sharing.

You have the following options for managing test cases at scale:
- **Bulk operations**: Import and export using CSV or XLSX files for large-scale changes.
- **Web portal tools**: Copy, clone, and update test cases directly in the browser for smaller changes.

For more information about web portal alternatives, see [Copy or clone test plans, test suites, and test cases](copy-clone-test-items.md).
  
For an overview of test objects and terminology, see [Test objects and terms](test-objects-overview.md).

## Prerequisites

[!INCLUDE [prerequisites-stakeholder](includes/prerequisites-stakeholder.md)] 
 
## Export test cases 

1. Go to **Test Plans** > **Test plans**, select a test plan, and then select a test suite to display its test cases.
1. (Optional) Select :::image type="icon" source="media/icons/column-options.png"::: **Column options** to add fields to the download file. 
1. Select all test cases or select specific test cases, and then select **Export test cases to CSV** or **Export test cases to XLSX**.

   :::image type="content" source="media/bulk-import-test-case/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

   The file downloads to your local machine.

## Import test cases 

1. Go to **Test Plans** > **Test plans**, select a test plan, and then select a test suite from the suite tree.
2. Select **Import test cases from CSV/XLSX**.

   :::image type="content" source="media/bulk-import-test-case/choose-import-test-cases.png" alt-text="Screenshot of Import test cases to the selected test suite.":::

3. Drag and drop a file, or select **Browse** to choose a file. The wizard automatically maps detected columns to Azure DevOps fields.

4. Review the field mappings. The following nine fields are required:
   - **ID** - Leave empty for new test cases, or provide an existing ID to update
   - **Work Item Type** - Must be `Test Case` (exact spelling and casing)
   - **Title**
   - **Test Step** - Sequential number for each step (`1`, `2`, `3`)
   - **Step Action** 
   - **Step Expected**
   - **Area Path** - Must match an existing area path (for example, `MyProject\MyArea`)
   - **Assigned To** - Valid user in your organization (display name or email)
   - **State** - Must be `Design`

   :::image type="content" source="media/bulk-import-test-case/import-wizard-mapping.png" alt-text="Screenshot of the import wizard showing field mapping interface.":::

5. (Optional) To change a mapping, select the field dropdown and choose the correct Azure DevOps field.

   :::image type="content" source="media/bulk-import-test-case/update-field-mapping.png" alt-text="Screenshot shows dropdown menu for optional field mapping updates.":::

   To skip a field, deselect the current mapping so it shows **Select field...**.

   :::image type="content" source="media/bulk-import-test-case/skip-mapping.png" alt-text="Screenshot shows empty field selection for skipping mapping.":::

6. (Optional) Export the current mapping as a reusable template to share with your team.

7. (Optional) For XLSX files with multiple sheets, select which sheet to import. You can only import one sheet at a time.

   :::image type="content" source="media/bulk-import-test-case/multiple-sheets-selection.png" alt-text="Screenshot showing worksheet selection dialog for XLSX files with multiple sheets.":::

8. Select **Import**. Existing test cases with matching IDs get updated and might be overwritten.

## Use mapping templates

Azure Test Plans remembers your field mappings for future imports with the same column structure. Always review mappings before completing an import.

You can export your current mapping as a reusable template for your team, so each member doesn't need to configure mappings individually. You can also save templates for different file structures you use regularly.

:::image type="content" source="media/bulk-import-test-case/mapping-download-template.png" alt-text="Screenshot shows no template selected and link to download current mapping as template.":::

If you modify mappings after importing a template, the system alerts you to prevent accidental changes to established team standards.

:::image type="content" source="media/bulk-import-test-case/mapping-no-longer-based-on-template.png" alt-text="Screenshot shows message stating that changes made means mapping is no longer based on the uploaded template.":::

## Update existing test cases

1. (Optional) Select :::image type="icon" source="media/icons/column-options.png"::: **Column options** to add fields you want to edit to the view.
2. Export the test cases to CSV or XLSX. For details, see [Export test cases](#export-test-cases).

   :::image type="content" source="media/bulk-import-test-case/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

3. Edit the file. Don't change the **ID** or **Work Item Type** fields.

4. Save the file and import it back to the test suite. For details, see [Import test cases](#import-test-cases). 

## Frequently asked questions

### Q: Can I create new test cases and update existing ones in the same file?

A: Yes. In the same CSV or XLSX file, leave the **ID** field empty for new test cases and include the existing ID for updates.

### Q: How do I identify and resolve import errors?

A: The import wizard validates your file at each stage - file upload, field mapping, and before final import. Errors display inline and you must resolve them before the import can proceed.

:::image type="content" source="media/bulk-import-test-case/import-errors.png" alt-text="Screenshot of Import Test Cases error dialog.":::

**Common errors and solutions:**

| Error | Solution |
|-------|----------|
| Missing mandatory headers | Add the required column headers with exact spelling. |
| Invalid field value found | Check that **Work Item Type** is exactly `Test Case`, **State** is `Design`, **Area Path** matches an existing path (for example, `MyProject\MyArea`), **Assigned To** is a valid user, and **Test Step** is a number. |
| Invalid data formats | Check date formats, numeric values, and text length limits. |
| Incorrect field mappings | Verify that columns map to the correct Azure DevOps fields. |
| Empty required fields | Ensure all mandatory fields contain valid data. |

To fix errors, note the error messages, correct your CSV or XLSX file, reupload the file, and complete the import.

### Q: What work item types does import support?

A: The import process supports only **Test Case** work items. To reference existing shared steps, include their ID in your file. The import can't create new shared steps - create them in the web interface first, then reference their ID.

:::image type="content" source="media/bulk-import-test-case/shared-steps-reference-in-csv.png" alt-text="Screenshot of shared step reference in CSV.":::

> [!NOTE]
> If you include both a shared step reference and step details in the same row, the import updates the shared steps work item. To reference shared steps without modifying them, omit step details.

For other work item types (User Stories, Tasks, Bugs), see [Bulk import or update (CSV)](../boards/queries/import-work-items-from-csv.md).

### Q: What are the mandatory headers for import files?

A: Include the following nine headers with exact spelling:

| Header | Description |
|--------|-------------|
| **ID** | Leave blank for new test cases; provide existing ID for updates. |
| **Work Item Type** | Must be `Test Case` or `Shared Steps`. |
| **Title** | Test case name. |
| **Test Step** | Order number for each step. |
| **Step Action** | Actions the tester performs. |
| **Step Expected** | Expected result after the action. |
| **Area Path** | Must match an existing area path (for example, `MyProject\MyArea`). |
| **Assigned To** | Valid user in your organization. |
| **State** | Must be `Design`. |

### Q: What are the limitations for import or export?

A: The following limitations apply:

* Test cases must be in **Design** state during import.
* Test case titles can't exceed 128 characters.
* Import and export files have a 20-MB size limit. Import smaller subsets if the operation fails.
* You must have permissions for the area and iteration paths of the target test plan and test suite.
* Operations fail if a test case has more than 1,000 related links.

##  Next step

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related content

- [Create test plans and test suites](create-a-test-plan.md)
- [Create test cases](create-test-cases.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Test objects and terms](test-objects-overview.md)
