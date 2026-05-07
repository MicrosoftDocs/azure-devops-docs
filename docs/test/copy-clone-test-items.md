---
title: Copy or clone test plans, test suites, test cases, and more
titleSuffix: Azure Test Plans  
description: Learn how to copy or clone test plans, test suites, and test cases in Azure Test Plans to streamline your testing process and ensure consistency across iterations.
ms.service: azure-devops-test-plans
ms.custom: cross-project, UpdateFrequency3, copilot-scenario-highlight
ai-usage: ai-assisted
ms.author: pliaros
author: raviLiftr
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 05/07/2026
ms.update-cycle: 1095-days
---

# Copy or clone test plans, test suites, and test cases 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

Several tools support copy, clone, or import operations for test items such as test plans, test suites, and test cases. Test cases describe the steps to take to run a test and validate a feature implementation or bug fix. Test suites group test cases, and optionally other test suites, into a particular order. Test plans define a collection of test suites to run for a particular iteration or release.  
 
Each test case is designed to confirm a specific behavior. Test cases might belong to one or more test suites. However, test suites can belong to only one test plan.  

In general, create a test plan for every major project milestone. Copy, clone, or import operations of test items support the following scenarios: 
- Define a test plan for a new sprint or release based on an existing test plan.
- Import test suites from one test plan to another test plan within the same or different project.  
- Copy test cases for use in different test suites and test plans.
- Share test objects across projects.
- Move test objects from one project to another, possibly to support consolidating projects into a single project.
  
For more information, see [Overview of test objects and terms](test-objects-overview.md).

### What each operation preserves

The following table summarizes what each operation preserves and what it doesn't.

| Item | Copy or clone a test plan | Import a test suite | Copy a test case |
|------|---------------------|-------------------|----------------|
| Test suites and hierarchy | Preserved | Preserved, including subsuites | N/A |
| Test case references | Referenced or duplicated (you choose) | Referenced, not duplicated | Duplicated with new IDs |
| Shared steps | Referenced | Cloned to destination project | Referenced |
| Shared parameters | Referenced | Not cloned | Referenced |
| Test configurations | Preserved | Preserved | N/A |
| Test run history and results | Not preserved | Not preserved | Not preserved |
| Tester assignments | Not preserved | Not preserved | Not preserved |
| Links and attachments | Preserved | Preserved | Optional (you choose) |
| Area and iteration paths | Set to destination values | Inherited from destination plan | Set to destination values |

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

::: moniker range="azure-devops"
[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]
::: moniker-end
 
## Supported copy, clone, and import tools  

You can use the clients or tools listed in the following table to copy, clone, or import test plans, test suites, or test cases.  

:::row:::
   :::column span="1":::
      **Client/tool**  
   :::column-end:::
   :::column span="1":::
      **Test Plans**
   :::column-end:::
   :::column span="1":::
      **Test Suites**
   :::column-end:::
   :::column span="1":::
      **Test Cases**
   :::column-end:::
:::row-end:::
---
::: moniker range="<=azure-devops"
:::row:::
   :::column span="1":::
      **Web portal**  
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy](#copy-test-plans-portal)
   :::column-end:::
   :::column span="1":::
      ✔️ [Import](#import-test-suites-portal)
   :::column-end:::
   :::column span="1":::
       ✔️ [Copy](#copy-test-case) 
       ✔️ [Bulk export/import](bulk-import-export-test-cases.md)  
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="<=azure-devops"
:::row:::
   :::column span="1":::
      **Web portal (Grid)**  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy and paste](#copy-paste)
   :::column-end:::
:::row-end:::
::: moniker-end

:::row:::
   :::column span="1":::
      **Work item form**  
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️ [Copy](../boards/backlogs/copy-clone-work-items.md)
   :::column-end:::
:::row-end:::

::: moniker range="<=azure-devops"
:::row:::
   :::column span="1":::
      **REST API**  
   :::column-end:::
   :::column span="1":::
      ✔️ [Clone](/rest/api/azure/devops/testplan/test-plan-clone/clone-test-plan) 
   :::column-end:::
   :::column span="1":::
      ✔️ [Clone](/rest/api/azure/devops/testplan/test-suite-clone/clone-test-suite)
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
::: moniker-end

## List test plans or test suites 

When you perform copy, clone, or import operations related to test plans or test suites, you need their unique ID. This identifier helps you target the specific plan or suite you want to work with. By knowing the assigned ID, you can streamline your testing processes and ensure accurate replication or transfer of test-related data. 


<a id="query"></a>

To generate a list of test plans, test suites, or other test objects, follow these steps:

1. Select **Boards** > **Queries** from your project. 
2. Enter the parameter `Work Item Type=Test Plan` in your query editor. You can list all test plans defined for the team project. 
3. Select the **Query across projects** checkbox. 
   The query lists all test plans defined for all projects. For more information, see [Define a work item query](../boards/queries/using-queries.md).
4. **Run** the query. 

> [!TIP]
> While test plans, test suites, and test cases are related to each other, you can't view the relationships through a work item query. Link types don't link test plans, test suites, and test cases. Only shared steps and shared parameters link to test cases. Also, test cases link to user stories or other work items that they test. 

:::image type="content" source="media/copy-clone/query-test-plans.png" alt-text="Screenshot of Query Editor.":::

<a id="clone-test-plan"></a> 
<a id="copy-test-plans-portal"></a>

## Copy or clone test plans  

When you create a new test plan for each sprint or release, consider cloning the test plan from the prior cycle. With minimal adjustments, the copied test plan fits the new cycle. This practice streamlines the planning process and ensures consistency across iterations.

Cloning is especially useful when you need to branch your application into two versions. After cloning, you can modify tests independently for each version without affecting the other. It’s an efficient way to manage testing efforts while maintaining separation between different application variants.

:::image type="content" source="media/copy-clone/clone-test-plan-conceptual.png" alt-text="Conceptual image, clone test plan.":::

::: moniker range="<=azure-devops"

1. Select **Test Plans** > **Test plans** from your project.
2. Choose the test plan you want to copy from the **Mine** or **All** page.  
3. Select :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions** > **Copy test plan**. This option lets you copy or clone test plans within a project. 

	:::image type="content" source="media/copy-clone/copy-test-plan-menu-selection.png" alt-text="Screenshot showing Test Plan More Actions menu, copy test plan option.":::

4. Enter the name of the new test plan, and select an **Area Path** and **Iteration Path** for the plan.  

	:::image type="content" source="media/copy-clone/copy-test-plan-dialog.png" alt-text="Screenshot showing Copy test plan dialog.":::

	- Choose one of the two radio buttons based on the following guidance:  
	   - **Reference existing test cases**: The cloned test plan points to the same test cases as the source plan. Changes to a test case appear in both plans, and test results are shared. Choose this option when you plan to merge the two branches eventually and want to keep the same requirements for functionality that you already implemented and tested.  
	   - **Duplicate existing test cases**: The cloned test plan creates new copies of each test case with new IDs. Each copy has an independent lifecycle — changes to one copy don't affect the other. The duplicated test cases link to the same requirements as the originals. Choose this option when you want separate test cases maintained independently across branches or releases.  

	If you duplicate existing test cases, the copied test cases get assigned the **Area Path** and **Iteration Path** you specified for the cloned test plan. 

	For more information, see [About area and iteration (sprint) paths](../organizations/settings/about-areas-iterations.md).

   The page refreshes to display the newly copied test plan. 

	:::image type="content" source="media/copy-clone/copied-test-plan.png" alt-text="Screenshot showing Copied test plan, browser view.":::

5. Update any [query-based suites](create-a-test-plan.md) that you copied to use the new area and iteration paths.  

6. If you cloned automated test cases, specify a build and release pipeline in the destination test plan. Automated test method associations are preserved during cloning, but the destination plan must reference the correct build to run those tests. For more information, see [Run automated tests from test plans](run-automated-tests-from-test-hub.md).

::: moniker-end

<a id="import-test-suites-portal"></a>
<a id="clone-test-suite"></a> 

## Import or clone test suites 

When you create the test plan for a new sprint, you often want to repeat some of the tests from the previous sprints. This approach helps you make sure that the functionality you already implemented still works.

:::image type="content" source="media/copy-clone/copy-test-suite-conceptual.png" alt-text="Conceptual image, copy test suites.":::
 
> [!NOTE]
> - When you import a test suite to a new project, the new suite contains copies of all test cases in the source suite. However, it doesn't retain any historical data like the previous test runs, related bugs, or old results.
> - The process also clones and creates shared steps that the test cases in the destination project reference.
> - You can't clone test cases from and to the same test plan, even into a different suite. To accomplish this scenario, you must first move the test cases to a different, temporary test plan. Then, use the temporary test plan as the source plan and clone the test cases back to the source test plan by putting the ID into the destination test plan place. This process also duplicates shared steps present in the test cases. 
> - Suite import copies all links from source suite to new suite, except child and clone-tracking links. 
> - Affects/Affected By links on the source suite create reciprocal links on the target work items.
> - Repeated imports from the same source accumulate links on the source Test Plan work item.
When the 1000-link limit is reached, the import fails with the error TF237201. Workaround: Periodically remove unnecessary **Affected By** links from the source Test Plan work item by using the REST API.

::: moniker range="<=azure-devops"

When you work with Azure Test Plans, you can import a test suite from one test plan into another test plan within the same project or across projects. This process copies or clones the test suite and creates a new test suite. Additionally, this process duplicates any subtest suites. The process doesn't duplicate the test cases that the test suites reference. Instead, the cloned test suites reference those test cases.

> [!IMPORTANT]
> When you import across projects, the process doesn't automatically carry over area paths and iteration paths from the source project. The imported test suite inherits the area and iteration paths from the destination test plan. Review and update these paths after import to ensure they match your project structure.

::: moniker-end

To use the same test cases in different suites and plans, copy and paste test cases by using the **Grid** view.

::: moniker range="<=azure-devops"

1. Select **Test Plans** > **Test plans**.
2. Choose the test plan where you want to import a test suite from the **Mine** or **All** page.
3. Select :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions** > **Import test suites**. This option lets you import test suites from another test plan. 

	:::image type="content" source="media/copy-clone/import-test-suites.png" alt-text="Screenshot showing Test Suite More Actions menu, Import test suites option.":::

4. In the opened dialog, select the project if the test plan resides within a different project. Otherwise, enter the Test Plan Name or ID and Test Suite Name or ID. You can also select the name or ID from the dropdown menus.
5. **Create** the import. You can only import one suite from a test plan at a time. 

	:::image type="content" source="media/copy-clone/import-suites-from-test-plan-dialog.png" alt-text="Screenshot showing Import suites from a Test Plan dialog.":::

   The following message displays: 

	:::image type="content" source="media/copy-clone/import-suites-message-1.png" alt-text="Screenshot showing Import suites initiated message.":::

6. When the import operation completes, the following message displays. Select **Refresh** to refresh your browser. 

	:::image type="content" source="media/copy-clone/import-suites-message-2.png" alt-text="Screenshot showing Import suites completed message.":::

	The portal displays the newly added test suite. 

	:::image type="content" source="media/copy-clone/imported-test-suite-displayed.png" alt-text="Screenshot showing Imported test suite displayed.":::
 
::: moniker-end

::: moniker range="<=azure-devops"

<a id="copy-test-case"></a> 

## Copy test case

From the web portal, you can copy test cases from within a project or another project to a test suite, or you can use the **Grid** view to [copy and paste test cases](#copy-paste) from one suite to another. Optionally, you can [bulk import and export test cases](bulk-import-export-test-cases.md). 

> [!TIP] 
> Don't copy test cases when you want to test with [different configurations](test-different-configurations.md) or [different data](repeat-test-with-different-data.md). 

You can copy test cases from either within a project or from another project within the organization or collection. You can choose to include all links and attachments during the copying process.

1. Select **Test Plans** > **Test plans**.
2. Choose the test plan that contains one or more test cases you want to copy from the **Mine** or **All** page. 
3. Select the test suite that contains one or more test cases you want to copy. 
4. From the **Define** page, select the check box for all test cases you want to copy. 

5. Select  :::image type="icon" source="../media/icons/more-actions.png" border="false"::: **More actions** > **Copy test case**.   
  
	:::image type="content" source="media/copy-clone/copy-test-cases-menu-selection.png" alt-text="Screenshot showing Test Cases More Actions menu, copy test cases option.":::

6. Choose the project from the dropdown menu, and then enter the test plan name or ID and test suite name or ID. You can also select the name or ID from the dropdown menus.

	:::image type="content" source="media/copy-clone/copy-test-cases-dialog.png" alt-text="Screenshot showing Copy test cases dialog.":::

7. (Optional) Select the check boxes for **Include existing links** and **Include existing attachments**. 
8. **Create** the copy.

	The background copy operation depends on the quantity and complexity of the selected test cases. After completion, a notification is sent to you confirming the operation’s success and a link to the test suite where the copied test cases reside.

::: moniker-end

<a id="copy-paste"></a> 

## Copy and paste test case (Grid view)

When you manage test cases, copying and pasting is a valuable technique for reusing the same tests across various suites and plans. For example, you might have a comprehensive test suite and want to create a more focused subset of tests within another suite. The **Define** > **Grid** view supports both editing test cases and copying them to different test suites. For more information, see [Create test cases, Use the Grid view to edit test cases](create-test-cases.md#use-the-grid-view-to-edit-test-cases).
 
> [!TIP]  
> Don't copy test cases when you want to test with [different configurations](test-different-configurations.md) or [different data](repeat-test-with-different-data.md). 

You can copy test cases from the **Grid** view for one test plan and test suite to another test plan and test suite. 

1. From the **Test Plans** > **Test plans** page, choose the test suite containing one or more test cases you want to copy. Within the **Define** tab, select :::image type="icon" source="../extend/media/use-a-control/grid.png" border="false"::: **Grid View**. 

2. Highlight the rows you want to copy, and then enter **CTRL+C**.

	:::image type="content" source="media/copy-clone/copy-paste-test-cases.png" alt-text="Screenshot showing Copy test cases from Grid view.":::

3. Select a different test suite from the same or different plan and paste with **CTRL+V**. If you don't select a different suite, nothing happens when you paste, because each suite can only have one reference to any test case. 

4. Choose :::image type="icon" source="media/icons/save-test-cases.png" border="false"::: **Save test cases**. 

	The new test cases save with new IDs assigned.  

	:::image type="content" source="media/copy-clone/copy-paste-test-cases-saved.png" alt-text="Screenshot showing saved test cases pasted into Grid view.":::

::: moniker range="<=azure-devops"

## REST APIs

You can copy and clone test plans and test suites by using the following REST APIs: 
- [Test Plan Clone - Clone Test Plan](/rest/api/azure/devops/testplan/test-plan-clone/clone-test-plan)
- [Test Suite Clone - Clone Test Suite](/rest/api/azure/devops/testplan/test-suite-clone/clone-test-suite)
::: moniker-end

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to copy and clone test items

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage test plans, suites, and cases by using natural language prompts.

### Example prompts for copying and cloning test items

| Task | Example prompt |
|------|----------------|
| List test plans | `List all test plans in <Contoso> project` |
| View test suites | `Show all test suites in test plan <12345> in project <Contoso>` |
| Find test cases to copy | `List all test cases in test suite <67890> that have State = <Ready>` |
| Check plan coverage | `Show all test suites in test plan <12345> and the count of test cases in each` |
| Compare plans | `List test suites in test plan <12345> and test plan <54321> side by side` |
| Find duplicate test cases | `Find test cases in <Contoso> project with the same title` |
| Identify gaps across sprints | `Show test cases in test plan <12345> that don't exist in test plan <54321>` |
| Find shared test cases | `List test cases that appear in more than one test suite in project <Contoso>` |
| Prepare for cloning | `Show all test suites in test plan <12345> that contain automated test cases` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) is especially helpful for troubleshooting complex copy and clone operations.
> - To avoid using stale or cached data from previous queries, add to your prompt, "Do not use previously fetched data."

::: moniker-end

##  Next step

> [!div class="nextstepaction"]
> [Run manual tests](run-manual-tests.md)

## Related content

- [Create test plans and test suites](create-a-test-plan.md)
- [Create test cases](create-test-cases.md)
- [Share steps between test cases](share-steps-between-test-cases.md)
- [Test different configurations](test-different-configurations.md)
- [Test objects and terms](test-objects-overview.md)

