---
title: Bulk import or export test cases
titleSuffix: Azure Test Plans  
description: Bulk import and export test cases in Azure Test Plans using CSV or Excel files. Create, update, and manage test cases efficiently with smart field mapping.
#customer intent: As a tester, I want to update existing test cases in bulk so that I can save time on repetitive edits.
ai-usage: ai-assisted
ms.service: azure-devops-test-plans
ms.custom: cross-project, UpdateFrequency3, copilot-scenario-highlight
ms.author: pliaros
author: wisdeom
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/23/2026
ms.update-cycle: 1095-days
---


# Bulk import or export test cases 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

::: moniker range="azure-devops"

Import and export test cases in bulk by using CSV or Microsoft Excel (XLSX) files. You can create new test cases, update existing test cases by ID, or download test cases for external editing. Azure DevOps Services includes an enhanced import wizard with auto-mapping, reusable mapping templates, and multi-sheet XLSX support.

::: moniker-end

::: moniker range="< azure-devops"

Import and export test cases in bulk by using CSV or Microsoft Excel (XLSX) files. You can create new test cases, update existing test cases by ID, or download test cases for external editing.

::: moniker-end

For web portal alternatives like copy, clone, and direct updates, see [Copy or clone test plans, test suites, and test cases](copy-clone-test-items.md). For an overview of test objects and terminology, see [Test objects and terms](test-objects-overview.md).

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

::: moniker range="azure-devops"

[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]

::: moniker-end
 
## Export test cases

1. In **Test Plans**, select a test plan and then a test suite.
1. (Optional) Select :::image type="icon" source="media/icons/column-options.png"::: **Column options** to add fields to the download file. 
1. Select the test cases to export, and then select **Export test cases to CSV** or **Export test cases to XLSX**.

   :::image type="content" source="media/bulk-import-test-case/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

   The export includes **ID**, **Work Item Type**, **Title**, **Test Step**, **Step Action**, **Step Expected**, **Area Path**, **State**, **Assigned To**, and any columns you add through **Column options**. Each test step appears as a separate row.

## Import test cases 

1. In **Test Plans**, select a test plan and then a test suite.
2. Select **Import test cases from CSV/XLSX**.

   :::image type="content" source="media/bulk-import-test-case/choose-import-test-cases.png" alt-text="Screenshot of Import test cases to the selected test suite.":::

::: moniker range="azure-devops"

3. Drag and drop a file, or select **Browse** to choose one. The wizard automatically maps columns to Azure DevOps fields.

::: moniker-end

::: moniker range="< azure-devops"

3. Select **Browse** to choose a CSV or XLSX file.

::: moniker-end

::: moniker range="azure-devops"

   > [!TIP]
   > For CSV files, save with **UTF-8** encoding to preserve special characters. Enclose cell values in double quotes if they contain commas or line breaks.

4. Review the field mappings. The following nine fields are required:
   - **ID** — leave empty for new test cases, or provide an existing ID to update
   - **Work Item Type** — must be `Test Case` (exact spelling and casing)
   - **Title**
   - **Test Step** — sequential step number (`1`, `2`, `3`)
   - **Step Action** 
   - **Step Expected**
   - **Area Path** — must match an existing path (for example, `MyProject\MyArea`)
   - **Assigned To** — valid user in your organization
   - **State** — must be `Design`

   :::image type="content" source="media/bulk-import-test-case/import-wizard-mapping.png" alt-text="Screenshot of the import wizard showing field mapping interface.":::

5. (Optional) To change a mapping, select the field dropdown and choose the correct Azure DevOps field.

   :::image type="content" source="media/bulk-import-test-case/update-field-mapping.png" alt-text="Screenshot shows dropdown menu for optional field mapping updates.":::

   To skip a field, clear the mapping so it shows **Select field...**.

   :::image type="content" source="media/bulk-import-test-case/skip-mapping.png" alt-text="Screenshot shows empty field selection for skipping mapping.":::

6. (Optional) Export the current mapping as a reusable template to share with your team.

7. (Optional) For XLSX files with multiple sheets, select which sheet to import.

   :::image type="content" source="media/bulk-import-test-case/multiple-sheets-selection.png" alt-text="Screenshot showing worksheet selection dialog for XLSX files with multiple sheets.":::

8. Select **Import**. The wizard updates existing test cases with matching IDs.

::: moniker-end

::: moniker range="< azure-devops"

   > [!TIP]
   > For CSV files, save with **UTF-8** encoding to preserve special characters. Enclose cell values in double quotes if they contain commas or line breaks.

4. Select **Import**. The file must include the required columns: **ID**, **Work Item Type**, **Title**, **Test Step**, **Step Action**, **Step Expected**, **Assigned To**, and **State**. The import wizard imports the file directly without a mapping review step.

   > [!NOTE]
   > For Azure DevOps Server, **Area Path** isn't a required field for import. The import process doesn't modify the Area Path value, so you can remove that column from your CSV file.

::: moniker-end

### Example CSV file structure

Each test step is a separate row. Repeat the **ID**, **Title**, and other fields on each row, and increment the **Test Step** number:

```csv
ID,Work Item Type,Title,Test Step,Step Action,Step Expected,Area Path,Assigned To,State
,Test Case,Verify login page,1,Navigate to the login page,Login page displays,MyProject\Web,user@contoso.com,Design
,Test Case,Verify login page,2,Enter valid credentials and select Sign in,User is redirected to the dashboard,MyProject\Web,user@contoso.com,Design
,Test Case,Verify login page,3,Select Sign out,User returns to the login page,MyProject\Web,user@contoso.com,Design
,Test Case,Verify search,1,Enter a search term in the search box,Search results display,MyProject\Web,user@contoso.com,Design
```

Leave the **ID** column empty to create new test cases, or provide an existing ID to update. All rows for the same test case must share the same **Title** and field values.

::: moniker range="azure-devops"

## Use mapping templates

Azure Test Plans remembers field mappings for future imports with the same column structure. You can export a mapping as a reusable template so team members don't need to configure mappings individually. Save templates for different file structures you use regularly.

:::image type="content" source="media/bulk-import-test-case/mapping-download-template.png" alt-text="Screenshot shows no template selected and link to download current mapping as template.":::

If you modify mappings after importing a template, the system alerts you to prevent accidental changes.

:::image type="content" source="media/bulk-import-test-case/mapping-no-longer-based-on-template.png" alt-text="Screenshot shows message stating that changes made means mapping is no longer based on the uploaded template.":::

::: moniker-end

## Update existing test cases

1. (Optional) Select :::image type="icon" source="media/icons/column-options.png"::: **Column options** to add fields you want to edit.
1. Export the test cases to CSV or XLSX. For details, see [Export test cases](#export-test-cases).

   :::image type="content" source="media/bulk-import-test-case/export-test-cases-test-suite.png" alt-text="Screenshot of Export test cases from the selected test suite.":::

1. Edit the file. Don't change the **ID** or **Work Item Type** fields.

   > [!IMPORTANT]
   > Reimporting a test case with a matching ID **replaces all existing test steps** with the steps in your file. Missing steps are removed. Always export the full test case before editing.

1. Save the file and reimport it. For details, see [Import test cases](#import-test-cases). Each import creates a new revision visible on the **History** tab of each affected test case.

For common questions about import errors, mandatory headers, supported work item types, and limitations, see [Troubleshooting and FAQs](reference-qa.yml).

::: moniker range="azure-devops"
<a id="use-ai-assistance"></a>

## Use AI to manage test cases at scale

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your test cases in bulk by using natural language prompts.

### Example prompts for bulk test case management

| Task | Example prompt |
|------|----------------|
| List test cases for export | `Show all test cases in test suite <67890> in project <Contoso>` |
| Find test cases to update | `List all test cases in <Contoso> with Priority = <1> and State = <Design>` |
| Bulk update test cases | `Update all test cases in area path <Contoso\\Checkout> to set Priority = <2>` |
| Identify incomplete test cases | `Find test cases in <Contoso> that have no test steps defined` |
| Audit test case fields | `List test cases in test plan <12345> that are missing the Automation Status field` |
| Find stale test cases | `List test cases in <Contoso> that haven't been run in the last 90 days` |
| Spot duplicates before export | `Find test cases in project <Contoso> that have the same title` |
| Summarize test coverage gaps | `Show test suites in test plan <12345> that have fewer than 3 test cases` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) is especially helpful for troubleshooting complex bulk test case operations.
> - To avoid using stale or cached data from previous queries, add to your prompt, "Do not use previously fetched data."

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related content

- [Create test plans and test suites](create-a-test-plan.md)
- [Create test cases](create-test-cases.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Test objects and terms](test-objects-overview.md)
