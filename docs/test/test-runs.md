---
title: Manage test runs in Azure DevOps Test Plans
description: Learn how to create, view, and manage test runs using the new Test Run Hub experience in Azure DevOps Test Plans.
ms.service: azure-devops-test-plans
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 12/19/2025
monikers: 'azure-devops'
---

# Manage test runs in Azure DevOps Test Plans

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Azure DevOps Test Plans provides a new Test Run Hub experience for managing test execution. This enhanced interface helps teams track test progress, analyze results, and maintain quality across development cycles.

> [!NOTE]
> The new **Test Run Hub** experience is a public **Preview feature** that's automatically enabled for all organizations. This feature can change at any time during the preview period.
>
> To disable it, go to **Preview features** and look for the feature flag named **New Test Run Hub** and set the toggle to **Off**. If you [disable this feature](../project/navigation/preview-features.md), share your feedback to help us improve it.
>  
> If you don't see the new experience in your organization yet, it's normal as the rollout is gradual.

## What is a test run?

A test run is a container that captures the execution of one or more test cases in Azure DevOps. It tracks the outcome, duration, and execution details for a specific testing session. Test runs are automatically created when you execute test cases from a test plan or pipeline.

Test runs help teams:

- **Monitor quality trends**: Track test progress and pass rates over time
- **Identify issues quickly**: Spot regressions, failures, and blocked tests
- **Maintain test history**: Audit and analyze historical execution data for insights

## Access test runs

To view test runs:

1. In your Azure DevOps project, select **Test Plans**.
2. Select **Runs**.

   :::image type="content" source="media/test-runs/run-option-test-plans-side-menu.png" alt-text="Screenshot showing the Runs option in the Test Plans side menu.":::

   The test runs page displays all available test runs, both manual and automated, with filtering and search capabilities.

   :::image type="content" source="media/test-runs/test-runs-landing-page.png" alt-text="Screenshot of the test runs landing page showing the list of available test runs.":::

## Search and filter test runs

The Test Run Hub provides several ways to find specific test runs:

### Default filters

- **Timeline**: Past seven days (default)
- **Run type**: Manual runs (default)

### Search capabilities

- Search by test run ID (exact match only) - *this search capability overwrites all other filters*
- Filter by timeline, run type, and other attributes
- Use the dropdown filters in the search bar

> [!TIP]
> - Filter selections and column widths persist across sessions until you clear them manually.
> - Search filters work additively.
> - A maximum of 5,000 results can appear in the Test Run Hub UI.

### Customize columns

To configure which columns display, do the following steps:

1. Select **Column options** in the top right.

   :::image type="content" source="media/test-runs/column-options-open.png" alt-text="Screenshot showing how to open the column options menu.":::

2. Choose the columns you want to see.
3. Select **Apply**.

   :::image type="content" source="media/test-runs/column-options.png" alt-text="Screenshot showing the column options configuration dialog for test runs.":::

> [!TIP]
> The Pipeline Run column applies to automated runs only, and relates to both Build and Release Pipelines.

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
- **Comments**: Run-level comments (supports Markdown formatting, tagging users by entering `@`, work items `#`, and pull requests `!`)
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

1. In the test run details, select **+ Add attachments**.
2. Choose your files and upload them.

:::image type="content" source="media/test-runs/adding-attachments-run.png" alt-text="Screenshot showing how to add attachments to a test run.":::

Once attachments are present you can view, download, or delete them as needed.

:::image type="content" source="media/test-runs/run-attachments-list.png" alt-text="Screenshot of the test run attachments list with options to download or delete files.":::

> [!TIP]
> - Preview images and PDF files by selecting the filename.
> - Run-level attachments are separate from individual test result attachments. Each test result can have its own attachments, which you can access through the attachment tabs in the test result details.

## Work with test case results

### View and configure results

The test case results section allows you to:

- Review individual test outcomes
- Customize column display (similar to the main runs page)
- Link test results to Azure DevOps work items

> [!TIP]
> The default _Outcome_ filter for _Automated_ test runs is set to _Failed or Aborted_ to accelerate the analysis. For _Manual_ test runs, which typically have lower volume, results remain unfiltered by default.

:::image type="content" source="media/test-runs/test-case-results.png" alt-text="Screenshot of the test case results section showing individual test outcomes.":::

### Link to work items

To associate test results with bugs or other work items:

1. Select the checkboxes for the test cases you want to link
   
:::image type="content" source="media/test-runs/marked-case-item-relation.png" alt-text="Screenshot showing test cases marked for linking to work items.":::

2. Choose to create a new bug or link to an existing work item.
3. Complete the linking process.

## Analyze detailed test results

Select any test case to view detailed results including:

- **Test result summary**: Overview of the test execution
- **Linked work items**: Associated bugs and other work items; click the "+ Add" button of the section to relate anything needed!  
- **Test steps**: Provides detailed step-by-step results, including outcomes and comments. Enable the "Show images" option to preview the captured screenshots inline.
- **Analysis information**: Post-execution analysis and next actions
- **Attachments**: All test result-specific attachments

> [!TIP]
> For Automated runs, the default Test Case Result filter is set to _Failed_ or _Aborted_ to accelerate the analysis.

:::image type="content" source="media/test-runs/detailed-test-case-results.png" alt-text="Screenshot of the detailed test case results page showing comprehensive test information.":::

### Analysis information

The analysis section helps structure post-execution review:

- Available for all test results after execution
- Failed, paused, and blocked cases have more triage fields
- Comments are specific to analysis (separate from run or result comments)

:::image type="content" source="media/test-runs/analysis.png" alt-text="Screenshot showing the analysis information section for detailed test case review.":::

> [!TIP]
> To add more options to any dropdown, for example, more failure types, use the Azure DevOps REST APIs.


## Programmatic access

You can also manage test runs programmatically using the [Azure DevOps REST API](/rest/api/azure/devops/test).
