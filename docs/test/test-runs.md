---
title: Manage test runs in Azure Test Plans
description: Learn how to create, view, and manage test runs using the new Test Run Hub experience in Azure Test Plans.
ms.service: azure-devops-test-plans
ms.subservice: test-execution
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 07/15/2025
monikers: '>= azure-devops-2020'
---

# Manage test runs in Azure Test Plans

Azure Test Plans provides a new Test Run Hub experience for managing test execution. This enhanced interface helps teams track test progress, analyze results, and maintain quality across development cycles.

> [!NOTE]
> The new Test Run Hub experience is automatically enabled for all organizations. You can disable it by going to **Preview features** and turning off **New Test Run Hub**.

## What is a test run?

A test run is a container that captures the execution of one or more test cases in Azure DevOps. It represents a specific instance of test execution and tracks the outcome, duration, and related details of test case execution. Test runs are typically created when test cases are executed from a test plan or a pipeline.

Test runs help teams:

- Monitor test progress and quality trends
- Identify regressions or failures quickly  
- Audit and analyze historical test data

## Access test runs

To view test runs:

1. In your Azure DevOps project, select **Test Plans**.
2. Select **Runs** from the left navigation.

:::image type="content" source="media/test-runs/runs-menu-option.png" alt-text="Screenshot showing the Runs option in the Test Plans side menu.":::

The test runs page displays all available test runs with filtering and search capabilities.

:::image type="content" source="media/test-runs/test-runs-landing-page.png" alt-text="Screenshot of the test runs landing page showing the list of available test runs.":::

## Search and filter test runs

The Test Run Hub provides several ways to find specific test runs:

### Default filters

- **Timeline**: Past 7 days (default)
- **Run type**: Manual runs (default)

### Search capabilities

- Search by test run ID (partial matches supported)
- Filter by timeline, run type, and other attributes
- Use the dropdown filters in the search bar

:::image type="content" source="media/test-runs/search-bar-filters.png" alt-text="Screenshot showing the search bar with dropdown filters for test runs.":::

> [!TIP]
> Filter selections persist across sessions until manually cleared. All search filters are additive - ensure your timeline filter includes the period when older runs were executed.

### Customize columns

To configure which columns display:

1. Select **Column options** in the top right.
2. Choose the columns you want to see.
3. Select **Apply**.

:::image type="content" source="media/test-runs/column-options-configuration.png" alt-text="Screenshot showing the column options configuration dialog for test runs.":::

> [!NOTE]
> Pipeline Run and Pipeline Run Tested columns apply to automated runs only.

## Test run states

Test runs can have one of three states based on their test case results:

| State | Test case results | Description |
|-------|-------------------|-------------|
| **Completed** | All test cases passed | The test run finished successfully with all tests passing |
| **Completed** | One or more excluded cases, rest passed | The run completed with some tests marked as not applicable |
| **Needs investigation** | One or more failed cases | The test run finished with test failures requiring attention |
| **Needs investigation** | One or more blocked cases | The test run finished with blocked tests |
| **In progress** | One or more paused cases | The run is paused and can be resumed later |

## View test run details

When you select a test run, the details page provides comprehensive information:

### Run summary

The main page includes:

- **Pass rate**: Percentage of executed cases that passed (excluding "Not applicable" cases)
- **Comments**: Run-level comments (supports Markdown formatting)
- **Test case results**: Outcome of each test case (Passed, Failed, Not Executed)
- **Test run metadata**: Execution details including who ran the test, when, and the environment
- **Attachments and logs**: Screenshots, logs, and other artifacts from execution

:::image type="content" source="media/test-runs/run-main-view.png" alt-text="Screenshot of the main test run view showing summary information and test case results.":::

### Analytics dashboard

Each test run includes a predefined analytics dashboard that breaks down results by:

- Outcome
- Priority  
- Configuration
- Failure type
- Resolution

You can filter dashboard tiles by selecting subcategory text to focus on specific insights.

:::image type="content" source="media/test-runs/run-analytics.png" alt-text="Screenshot of the test run analytics dashboard showing breakdowns by outcome, priority, and other metrics.":::

:::image type="content" source="media/test-runs/subcategory-tile-filtering.png" alt-text="Screenshot showing how to filter subcategory tiles in the analytics dashboard.":::

## Manage attachments

### Run-level attachments

To add attachments to a test run:

1. In the test run details, select **+ Add**.
2. Choose your files and upload them.
3. View, download, or delete attachments as needed.

:::image type="content" source="media/test-runs/adding-attachments.png" alt-text="Screenshot showing how to add attachments to a test run.":::

:::image type="content" source="media/test-runs/run-attachments-list.png" alt-text="Screenshot of the test run attachments list with options to download or delete files.":::

> [!NOTE]
> - Images and PDF files can be previewed by selecting the filename
> - Run-level attachments are separate from individual test result attachments

### Test result attachments

Individual test results can have their own attachments, accessible through the dedicated attachment tabs in the test result details.

## Work with test case results

### View and configure results

The test case results section allows you to:

- Review individual test outcomes
- Customize column display (similar to the main runs page)
- Link test results to Azure DevOps work items

:::image type="content" source="media/test-runs/test-case-results.png" alt-text="Screenshot of the test case results section showing individual test outcomes.":::

### Link to work items

To associate test results with bugs or other work items:

1. Select the checkboxes for the test cases you want to link.
2. Choose to create a new bug or link to an existing work item.
3. Complete the linking process.

:::image type="content" source="media/test-runs/marked-case-for-item-relation.png" alt-text="Screenshot showing test cases marked for linking to work items.":::

## Analyze detailed test results

Select any test case to view detailed results including:

- **Test result summary**: Overview of the test execution
- **Linked work items**: Associated bugs and other work items  
- **Test steps**: Detailed step-by-step results with outcomes and comments
- **Analysis information**: Post-execution analysis and next actions
- **Attachments**: All test result-specific attachments

:::image type="content" source="media/test-runs/detailed-test-case-results.png" alt-text="Screenshot of the detailed test case results page showing comprehensive test information.":::

### Analysis information

The analysis section helps structure post-execution review:

- Available for all test results after execution
- Failed, paused, and blocked cases have additional triage fields
- Comments are specific to analysis (separate from run or result comments)

## Programmatic access

You can also manage test runs programmatically using the [Azure DevOps REST API](/rest/api/azure/devops/test).

## Next steps

- [Create and run manual tests](../../../test/create-test-cases.md)
- [Run tests from test plans](../../../test/run-manual-tests.md)
- [Analyze test results and trends](../../../test/track-test-status.md)
