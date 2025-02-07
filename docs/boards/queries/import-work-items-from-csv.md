---
title: Import, update, and export bulk work items with CSV files
titleSuffix: Azure Boards
description: Learn how to import, update, and export work items in bulk from a CSV formatted file in Azure Boards. 
ms.custom: "boards-queries, linked-from-support"
ms.service: azure-devops-boards
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: ">= azure-devops-2019"
ms.date: 11/26/2024
#customer intent: As a team member, I want to import and export work items in CSV format to create or update them in bulk by using Excel.
---

# Import, update, and export bulk work items with CSV files in Azure Boards

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

::: moniker range="> azure-devops-2019"
Import and export work items in bulk using CSV-formatted files in Azure Boards. While you can continue to use Excel for bulk imports and updates, the native import/export feature allows you to manage work items without requiring Excel. For more information, see [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).
::: moniker-end 

::: moniker range="azure-devops-2019"
Export work items in bulk using CSV-formatted files. Although Excel can still be used for bulk imports and updates, the native export feature from Queries enables you to manage work items without relying on Excel. For more information, see [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).
::: moniker-end

## Prerequisites

**Permissions**:
- Export work items: Member of the **Project Administrators** group or **View project-level information** permission set to **Allow**.
- Import work items: Member of the **Project Administrators** or **Team Foundation Administrators** security group.

::: moniker range=">= azure-devops-2020"

## Import new work items

To import work items in bulk, your CSV file must include the **Work Item Type** and **Title** fields. You can include more fields as needed. Follow these guidelines to import a CSV file:

- **Exclude the ID field:** Don't include the **ID** field in your CSV file.
- **Remove project-specific fields:** If the CSV file was exported from a different project, remove fields specific to the source project, such as **Area Path** and **Tags**. For a list of default fields, see [Work Item Field Index](../work-items/guidance/work-item-field.md). 
- **Include the Test Steps field:** When importing test cases, include the **Test Steps** field. For more information, see [Bulk Import or Export Test Cases](../../test/copy-clone-test-items.md).
- Don't include **Assigned To**, **Changed Date**, **Created By**, or **State** fields.
- **Validate required fields:**
  - Ensure the **Work Item Type** and **Title** fields are present in the CSV file.
  - Confirm that the **Work Item Type** corresponds to a valid type in the target project.
  - Verify that all fields in the CSV file match the fields for the work item types in the target project.
- **Handle invalid values:** If the imported CSV file contains work items with invalid values, you must edit and correct these work items after import before they can be saved.

Do the following steps to import new work items.

> [!NOTE]  
> You can import up to 1,000 work items at a time. If you have more than 1,000 work items to import, break them into multiple files and import them separately.

1. Create a local *import.csv* file and open it in Visual Studio Code or Excel.
2. The file must contain the **Work Item Type** and the **Title** fields. You can include other fields as needed. For a list of default fields, see [Work item field index](../work-items/guidance/work-item-field.md).  

   The following example includes the **Priority** field.

   ```csv
   Work Item Type,Title,Priority
   Issue,Fix issues with code,1
   Issue,Merge testing modules,3
   Issue,Open private preview for select customers,2
   Issue,Enable feature for customer champs,2
   Issue,Remove old test code,2
   ```

3. From the web portal for your project, select **Boards** > **Queries** > **Import work items**.

   :::image type="content" source="media/import-csv/open-queries-import.png" alt-text="Screenshot showing the Boards page with Queries, then Import work items selected.":::

4. Select **Choose file**, choose your file, and then select **Import**.

   :::image type="content" source="media/import-csv/import-file.png" alt-text="Screenshot showing Import work items dialog with the Import button highlighted.":::

   The import process loads the imported work items into the queries view in an **unsaved** state. No IDs get assigned.

5. Verify the results and then select **Save items** to save the work items.

   :::image type="content" source="media/import-csv/imported-file.png" alt-text="Screenshot showing Save items for imported work items.":::

   > [!TIP]
   > Don't assign IDs to new work items that you add. Assigning IDs results in an error message.

6. The system highlights those work items with data issues. Resolve the data issues before you save the work items. In this example, an invalid value is in the Priority field. Fix the data by opening the work item directly. Instead, use [bulk edit](../backlogs/bulk-modify-work-items.md) to fix several work items with the same issue.

   :::image type="content" source="media/import-csv/imported-file-error.png" alt-text="Screenshot showing work items with data issues to fix.":::

### Tips

- **Parent-child links:** You can add parent-child links between work items you import by indenting the title columns, as shown in [Can I import a CSV file that have parent-child links?](#tree-items). However, you can't specify any other link types when you import or update work items.
- **Default State field:** When you import new work items, the **State** field is set to *New* by default. You can't specify a different state during the import process. If you need to change the state of imported work items, use the following workaround:

  1. Import the work items with the default *New* state.
  1. Export the imported work items to a CSV file.
  1. Update the **State** field values in the exported CSV file.
  1. Reimport the updated CSV file to set the desired states.

- **Default Area and Iteration fields:** The **Area** and **Iteration** fields default to the top-level node. This behavior occurs because the import process doesn't have the context for these fields unless explicitly specified in the CSV file. To set specific **Area** and **Iteration** paths during import, ensure these fields are included in your CSV file with the correct values. For example:

  ```csv
  Title,Description,Area Path,Iteration Path
  "Sample Work Item","This is a sample description.","Project\Team","Project\Sprint 1"
  ```

## Update existing work items

1. To update work items, create a query that contains all the columns you want to export and possibly edit. Save your query and select **Export to CSV** to save the *data.csv* file to your local machine.

   :::image type="content" source="media/import-csv/export-query.png" alt-text="Screenshot showing work items in a query with the option to Export to CSV selected.":::

   The exported file should look similar to the following example:

   ```csv
   ID,Work Item Type,Title,Assigned To,State,Tags
   "272","Issue","Fix issues with code","Active","",
   "273","Issue","Merge testing modules","Active","",
   "274","Issue","Open private preview for select customers","Active","",
   "275","Issue","Enable feature for customer champs","Active","",
   "276","Issue","Remove old test code","Active","",
   ```

1. Make the edits to your work items. Your CSV file must contain the **ID**, **Work Item Type**, and **Title** fields. Any other fields you want to include are optional.

   > [!NOTE]
   > When you import identity fields, enter the name and email in the following format `"Display Name <email>"`. For example, to assign work to Jamal Hartnett, specify `"Jamal Hartnett <fabrikamfiber4@hotmail.com>"`. If you specify a value that isn't recognized as a valid user to the system, you may encounter problems with the import.

   In the following example, we change values on existing working items.

   ```csv
   ID,Work Item Type,Title,Assigned To,State,Tags
   "272","Issue","Fix issues with code","Jamal Hartnett <fabrikamfiber4@hotmail.com>","Active",
   "273","Issue","Merge testing modules","Jamal Hartnett <fabrikamfiber4@hotmail.com>","Active",
   "274","Issue","Open private preview for select customers","Raisa Pokrovskaya <fabrikamfiber5@hotmail.com>","Active",
   "275","Issue","Enable feature for customer champs","Raisa Pokrovskaya <fabrikamfiber5@hotmail.com>","Active",
   "276","Issue","Remove old test code","Christie Church <fabrikamfiber1@hotmail.com>","Active",
   ```

1. Save the file and import, as described in the previous section.

1. The results list with work items that contain value changes appear highlighted in bold. Select **Save Items** to apply the changes.

   :::image type="content" source="media/import-csv/bulk-update-import.png" alt-text="Screenshot showing Import Work Items with the option to Save items.":::

1. Work items with data issues get highlighted in red and must be resolved before you can save them. In this example, an invalid value appears in the Assigned To field. Fix the data by opening the work item directly. You can use bulk edit if you have many work items with the same issue.

   :::image type="content" source="media/import-csv/import-update-error-1.png" alt-text="Screenshot showing an invalid value appearing in the Assigned To field.":::

::: moniker-end 

## Export list as a CSV file

From any query, you can export a list of work items as a comma-delimited list. [Open the query](view-run-query.md), select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and then select **Export to CSV**.

::: moniker range="azure-devops-2019"
> [!NOTE]
> Requires Azure DevOps Server 2019 Update 1 or later version.
::: moniker-end

:::image type="content" source="../work-items/media/email/export.png" alt-text="Screenshot showing Export a query as CSV.":::

::: moniker range=">= azure-devops-2020"

## Export and import work items to a different project

You can use this feature to export work items from one project and import them to another project. But, before you import them to another project, you must remove the work item ID. You get an error if you attempt to import new work items to a project with an ID specified.
::: moniker-end 

## Import HTML fields

HTML fields, such as descriptions and acceptance criteria, include rich text formatting. To ensure this formatting is preserved, do the following tasks:

1. Ensure your CSV file includes HTML tags within the relevant fields.
1. Import the CSV file into Excel.

Excel might handle multi-line text fields differently, so it's important to check the formatting after import. Replace lines ending in `CRLF` by surrounding sentences with `<p>... </p>`.

For example, you can import the following work item, which includes three lines of text in the **Description** field.

```csv
Work Item Type,Title,Description
"Product Backlog Item","Hello World Web Site - 8","<p><strong>&nbsp;You can include bold text</strong></p><p><em>&nbsp;And italic text</em></p><p><u>&nbsp;Underline text</u></p>"
```

## Convert multi-line fields to plaintext

To disable HTML in multi-line fields to ensure that they're plaintext, use the `witadmin changefield` command. For more information, see [Manage Work Item Fields](../../reference/witadmin/manage-work-item-fields.md).

Example command:

```cmd
witadmin changefield /collection:CollectionURL /n:FieldName /type:PlainText
```

## Handle formatting inconsistencies

When you work with HTML fields across different Microsoft products, you might encounter formatting inconsistencies. Here are some tips to handle these issues:

- Review the formatting after importing to ensure it meets your requirements.
- Use appropriate HTML tags and structures to minimize discrepancies. You can add multiple tags separated by a semicolon. For more information, see [Tasks you can and can't do with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).

For more information on managing HTML content and ensuring compatibility, see [Provide help text, hyperlinks, or web content on a work item form](../../reference/xml/provide-help-text-hyperlinks-web-content-form.md).

::: moniker range=">= azure-devops-2020"

## Unsupported work item types

The CSV import doesn't support the following work item types:

- Code Review Request
- Code Review Response
- Feedback Request
- Feedback Response
- Test Case
- Test Plan
- Test Suite
- Shared Parameter

For more information, see [Bulk import or export test cases](../../test/copy-clone-test-items.md).

::: moniker-end

::: moniker range=">= azure-devops-2020"

## FAQs

### Q: Can I import new items and update existing items in the same CSV file?

A: Absolutely! Leave the ID field empty for any new work items. In the following example, the last entry for an Epic doesn't specify an ID.

```csv
ID,Work Item Type,Title,Assigned To,State,Priority,Tags
"16504","Issue","Fix issues with code",,"To Do","1",
"16505","Issue","Merge testing modules",,"To Do","3",
"16506","Issue","Open private preview for select customers",,"To Do","2",
"16507","Issue","Enable feature for customer champs",,"To Do","2",
"16508","Issue","Remove old test code",,"To Do","2",
,"Epic","Track Telemetry for data imports",,"To Do","2",
```

<a id="tree-items"></a> 

### Q: Can I import a CSV file that has parent-child links?

A: Yes, you can add child work items by indenting title columns. The following example adds three child issues under the already defined Epic.

```CSV
ID,Work Item Type,Title 1,Title 2,Assigned To,State,Priority,Tags
"165","Epic","Track Telemetry for data imports",,,"To Do","2",
,"Issue",,"Fix issues with code",,"To Do","1",
,"Issue",,"Open private preview for select customers",,"To Do","2",
,"Issue",,"Enable feature for customer champs",,"To Do","2",
```

:::image type="content" source="media/import-csv/import-add-child-items.png" alt-text="Screenshot showing Excel view.":::

### Q: How do I know if my imported file has errors?

A: You can test by adding tags with spaces and hyphens, for example, and include it in the export. The import should match the same format. Any problems with the formatting of your CSV file appear in the Results page of the import view. You can't import the work items until the formatting and syntax is correct.

:::image type="content" source="media/import-csv/import-error.png" alt-text="Screenshot showing a CSV Error in the Import Work Items page.":::

The work item results always list the data errors found for individual work items. Fix each error either from the web portal, or in the CSV file and import again.

### Q: Why am I getting errors for some identity values?

A: When you use the Web UI, the identity picker goes through extra steps to validate the user. First it checks to see if the person is a valid user in the org. If not, it searches on the identity in Microsoft Entra ID. If the user's in Microsoft Entra ID but not in the org, that user gets added to the valid identities.

When you import from CSV, for performance reasons, the identity picker doesn't go through these extra steps. It only checks to see if there's a matching User Principal Name (UPN) already in the org. If it doesn't find a matching UPN, it reports that the identity is unknown.

::: moniker-end 

## Related articles

- [Access the Work Item Field Index](../work-items/guidance/work-item-field.md)
- [Bulk Add or Modify Work Items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)
- [Consult FAQs: Work in Excel Connected to Azure Boards](../backlogs/office/faqs.yml)
