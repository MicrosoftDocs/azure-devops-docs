---
title: Manage test runs in Azure DevOps Test Plans
description: Learn how to create, view, and manage test runs using the Test Run Hub in Azure DevOps Test Plans.
ms.service: azure-devops-test-plans
ms.custom: copilot-scenario-highlight
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 03/17/2026
monikers: 'azure-devops'
---

# Manage test runs in Azure DevOps Test Plans

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Use the Test Run Hub to track test execution, analyze results, and maintain quality across development cycles.

> [!NOTE]
> The Test Run Hub is rolling out to [General Availability (GA)](https://devblogs.microsoft.com/devops/the-new-test-run-hub-is-going-generally-available/). The GA experience might not be available in your organization yet.

[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]

A test run captures the execution of one or more test cases – recording outcome, duration, and environment. The system automatically creates test runs when you run test cases from a test plan or pipeline.

Test runs help teams:

- **Monitor quality trends** – Track pass rates and test progress over time.
- **Identify issues quickly** – Spot regressions, failures, and blocked tests.
- **Maintain test history** – Audit and analyze historical execution data.

## Access test runs

In your Azure DevOps project, select **Test Plans** > **Runs**.

:::image type="content" source="media/test-runs/run-option-test-plans-side-menu.png" border="true" alt-text="Screenshot showing the Runs option in the Test Plans side menu.":::

The test runs page lists all manual and automated runs with filtering and search capabilities.

:::image type="content" source="media/test-runs/test-runs-landing-page.png" border="true" alt-text="Screenshot of the test runs landing page showing the list of available test runs.":::

## Search and filter test runs

The Test Run Hub defaults to manual runs from the past seven days. Use the dropdown filters to narrow results by timeline, run type, and other attributes. To find a specific run, search by test run ID (exact match) - an ID search overrides all other active filters.

> [!TIP]
> Filter selections and column widths persist across sessions until you clear them. Filters work additively, and the Test Run Hub displays a maximum of 5,000 results.

To customize which columns appear:

1. Select **Column options**.

   :::image type="content" source="media/test-runs/column-options-open.png" border="true" alt-text="Screenshot showing the Column options button location in the test runs interface.":::

2. Choose the columns you want, and then select **Apply**.

   :::image type="content" source="media/test-runs/column-options.png" border="true" alt-text="Screenshot showing the Column options dialog with available column selections.":::

> [!TIP]
> The **Pipeline Run** column applies to automated runs only. It shows the build name for build-triggered runs and the release name for release-triggered runs. 

## Test run states

The test run state reflects the aggregate outcome of its test cases:

| State | Condition | Description |
|-------|-----------|-------------|
| **Completed** | All cases passed | All tests passed successfully. |
| **Completed** | Some cases excluded, rest passed | Tests marked *Not applicable* were excluded; remaining tests passed. |
| **Needs investigation** | One or more cases failed | Test failures require attention. |
| **Needs investigation** | One or more cases blocked | Blocked tests prevented full execution. |
| **In progress** | One or more cases paused | The run is paused and can be resumed. |

## View test run details

Select a test run to open its details page.

### Run summary

| Element | Description |
|---------|-------------|
| **Pass rate** | Percentage of executed cases that passed. Cases marked *Not applicable* are excluded. |
| **Comments** | Run-level comments with Markdown formatting. Tag users by using `@`, link work items by using `#`, and reference pull requests by using `!`. |
| **Test case results** | Outcome of each test case: Passed, Failed, or Not Executed. |
| **Test run metadata** | Who ran the test, when it ran, and which environment was used. |
| **Attachments and logs** | Screenshots, logs, and other artifacts captured during execution. |

The following example shows a test run summary with pass rate, test case outcomes, and metadata:

:::image type="content" source="media/test-runs/run-main-view.png" border="true" alt-text="Screenshot of the main test run view showing summary information and test case results.":::

### Analytics dashboard

Each test run includes an analytics dashboard that breaks down results by outcome, priority, configuration, failure type, and resolution.

:::image type="content" source="media/test-runs/run-analytics.png" border="true" alt-text="Screenshot of the test run analytics dashboard showing breakdowns by outcome, priority, and other metrics.":::

Select subcategory text on any tile to filter the dashboard to that insight:

:::image type="content" source="media/test-runs/subcategory-tile-filtering.png" border="true" alt-text="Screenshot showing how to select subcategory text on a tile to filter the analytics dashboard.":::

## Manage attachments

To add attachments to a test run:

1. In the test run details, select **+ Add attachments**.
2. Select your files and upload them.

   :::image type="content" source="media/test-runs/adding-attachments-run.png" border="true" alt-text="Screenshot showing how to add attachments to a test run.":::

You can then view, download, or delete attachments.

:::image type="content" source="media/test-runs/run-attachments-list.png" border="true" alt-text="Screenshot of the test run attachments list with options to download or delete files.":::

> [!TIP]
> Select a filename to preview images and PDFs inline. Run-level attachments are separate from test result attachments. To view result-specific files, open the result details and select the **Attachments** tab.

## Work with test case results

Review individual test outcomes and customize column display from the test case results section.

> [!TIP]
> For automated runs, the default **Outcome** filter is set to **Failed or Aborted** to accelerate triage. For manual runs, the default filter is unfiltered.

:::image type="content" source="media/test-runs/test-case-results.png" border="true" alt-text="Screenshot of the test case results section showing individual test outcomes.":::

### Link results to work items

To associate test results with bugs or other work items:

1. Select the checkboxes for the test cases you want to link.

   :::image type="content" source="media/test-runs/marked-case-item-relation.png" border="true" alt-text="Screenshot showing test cases marked for linking to work items.":::

2. Create a new bug or link to an existing work item.

## Analyze detailed test results

Select any test case to view its detailed results:

| Section | Description |
|---------|-------------|
| **Test result summary** | Execution overview for the selected test case. |
| **Linked work items** | Associated bugs and work items. Select **+ Add** to link more. By default, only work items directly linked to the test result appear, not items linked indirectly through test methods. |
| **Test steps** | Step-by-step outcomes and comments. Enable **Show images** to preview captured screenshots inline. |
| **Analysis information** | Post-execution analysis and next actions. |
| **Attachments** | Files attached to this specific test result. |

:::image type="content" source="media/test-runs/detailed-test-case-results.png" border="true" alt-text="Screenshot of the detailed test case results page showing comprehensive test information.":::

### Analysis information

The analysis section helps structure post-execution review:

- Available for all test results after execution
- Failed, paused, and blocked cases have more triage fields
- Comments are specific to analysis (separate from run or result comments)

:::image type="content" source="media/test-runs/analysis.png" border="true" alt-text="Screenshot showing the analysis information section for detailed test case review.":::

> [!TIP]
> To add more options to any dropdown, such as more failure types, use the [Azure DevOps REST APIs](/rest/api/azure/devops/test).

<a id="use-ai-assistance"></a>

## Use AI to manage test runs

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your test runs by using natural language prompts.

### Example prompts for test run management

| Task | Example prompt |
|------|----------------|
| View recent test runs | `Show all test runs in project <Contoso> from the last 7 days` |
| Check test run results | `Show the results of test run <56789> in project <Contoso>` |
| Find failing tests | `List all failed test cases in the most recent test run for test plan <12345>` |
| Analyze test trends | `Show test run pass rates for project <Contoso> over the last 30 days` |
| Track test progress | `Show the count of passed, failed, and not-run test cases in test plan <12345>` |
| Find blocked tests | `List test cases in test run <56789> that have outcome = <Blocked>` |
| Compare two test runs | `Compare the results of test run <56789> and test run <56790> in project <Contoso>` |
| Find untested areas | `List area paths in project <Contoso> with no test runs in the last 14 days` |
| Identify longest-running tests | `Show the 10 test cases with the longest execution time in test run <56789>` |
| Surface regressions | `List test cases that passed in test run <56789> but failed in test run <56790>` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) is especially helpful for troubleshooting complex test run scenarios.
> - To avoid using stale or cached data from previous queries, add to your prompt, "Do not use previously fetched data."

## Related content

- [Create test plans and test suites](create-a-test-plan.md)
- [Create test cases](create-test-cases.md)
- [Run manual tests](run-manual-tests.md)
- [Run automated tests from test plans](run-automated-tests-from-test-hub.md)
- [Test Plans FAQs](reference-qa.yml)
