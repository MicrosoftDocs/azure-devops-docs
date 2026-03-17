---
title: Run automated tests from test plans
description: Run automated tests on-demand from test plans in Azure Test Plans with a build or release pipeline.
ms.assetid: 2886C58B-0F4B-4C0C-A248-3980CA629FD8 
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3, copilot-scenario-highlight
ai-usage: ai-assisted
ms.topic: how-to 
ms.author: pliaros
author: wisdeom
ms.date: 03/17/2026
ms.update-cycle: 1095-days
---

# Run automated tests from test plans

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

Run automated tests on demand directly from **Azure Test Plans** without setting up scheduled builds or releases. Select specific tests to rerun after infrastructure fixes or new builds, and give testers a simple way to trigger automated tests without pipeline expertise.

<a id="prerequisites"></a>

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Access levels** | **Basic** access or higher. To manage test plans, suites, and configurations, you need [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access or a [Visual Studio Enterprise](https://visualstudio.microsoft.com/vs/enterprise/), [Test Professional](https://visualstudio.microsoft.com/vs/test-professional/), or [MSDN Platforms](https://visualstudio.microsoft.com/msdn-platforms/) subscription. |
| **Permissions** | **Edit work items in this node**, **Manage test plans**, and **Manage test suites** — set to **Allow** under the corresponding **Area Path**. You also need release permissions (create, manage, edit stage, manage deployment). For more information, see [Release permissions](../pipelines/policies/permissions.md#release-pipeline-permissions). |
| **Tools** | A [test plan](create-a-test-plan.md) with automated tests [associated with test methods](associate-automated-test-with-test-case.md). <br> A [build pipeline](../pipelines/apps/aspnet/build-aspnet-4.md) that produces builds containing the test binaries. <br> An app to test, deployed via [build and release workflows](../pipelines/get-started/what-is-azure-pipelines.md) or used for on-demand testing. |

::: moniker range="azure-devops"
[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]
::: moniker-end

## Set up your environment

1. In **Test Plans**, open the shortcut menu for your test plan and select **Test plan settings**.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/test-plan-settings.png" alt-text="Screenshot shows choosing Test plan settings.":::

1. Select the build pipeline that generates builds containing your test binaries. You can choose a specific build number or let the system use the latest build automatically. Both Classic and YAML build pipelines are supported.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/test-plan-settings-modal-build-selection.png" alt-text="Screenshot shows selecting the build and build number.":::

1. Select a release pipeline created from the **Run automated tests from Test Manager** template, then select the stage for test execution. If you don't have one, select **Create new** to create a release pipeline with a single stage and the **Visual Studio Test** task already added. Both Classic and YAML release pipelines are supported.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/test-plan-settings-modal-build-new-release-pipeline.png" alt-text="Screenshot shows selecting a release pipeline or creating a new one.":::

   For more information, see [How do I pass parameters to my test code from a pipeline?](reference-qa.yml#how-do-i-pass-parameters-to-my-test-code-from-a-pipeline)

1. Assign meaningful names to the release pipeline and stage.

1. If Visual Studio isn't installed on the agent computer, add the [Visual Studio Test Platform Installer task](/azure/devops/pipelines/tasks/reference/visual-studio-test-platform-installer-v1) to the pipeline definition.

1. Add the [Visual Studio Test task](/azure/devops/pipelines/tasks/reference/vstest-v3) to the release pipeline and configure it as follows:
 
   * Verify that you're using **version 3** of the Visual Studio Test task.

   * Set **Select tests using** to **Test run**. For more information, see [How does the "Test run" setting work?](reference-qa.yml#how-does-the--test-run--setting-in-the-visual-studio-test-task-work)

   * Set **vsTestVersion** to **toolsInstaller**. 

   * **UI tests on physical browsers or thick clients**: The agent must run as an interactive process with autologon enabled. Configure the agent *before* you queue the build or release. The **Test mix contains UI tests** checkbox is a reminder only — it doesn't configure the agent automatically. For headless browsers, interactive mode isn't required. For more information, see [Should the agent run in interactive mode or as a service?](reference-qa.yml#should-the-agent-run-in-interactive-mode-or-as-a-service)

   * Select how the test platform gets provisioned and which version of Visual Studio or test platform location to use.

   * **Input parameters** (app URLs, connection strings, etc.): Select the relevant settings file from the build artifacts. Use the **Publish build artifacts** task if the file isn't included in the artifacts. You can override values at runtime with the **Override test run parameters** setting.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/vstest-configuration.png" alt-text="Screenshot shows checking the task version number setting."::: 

     For information about the option settings of the Visual Studio Test task, see [Visual Studio Test task](/azure/devops/pipelines/tasks/reference/vstest-v3).

1. In the **Agent job**, verify the deployment queue targets the machines where you want to run the tests. Add demands if your tests require specific agents from the pool.

   To distribute tests across multiple agents, set **Parallelism** to **Multiple executions** and specify the number of agents.

1. On the **Pipeline** page, verify that the build pipeline containing the test binaries is linked as an artifact source.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/run-auto-tests-from-hub-106.png" alt-text="Screenshot shows verifying the linked build artifacts.":::
 
1. **Save** the release pipeline.

1. If you created a new release pipeline in step 3, return to the **Test plan settings** dialog and select the release pipeline and stage you saved.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/run-auto-tests-from-hub-107.png" alt-text="Screenshot shows selecting the release pipeline and stage.":::

## Run the automated tests

1. In **Test Plans**, open the test plan and select a test suite that contains automated tests.

1. Select the test cases to run, and then select **Run for web application**.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/executing-automated-tests.png" alt-text="Screenshot shows selecting Run test.":::

   The system validates your selection (automated tests only, it skips manual tests), confirms the Visual Studio Test task is configured correctly, verifies your release permissions, creates a test run, and triggers a release to the selected stage.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/test-results.png" alt-text="Screenshot shows starting the test execution.":::

1. Select **View test run** to monitor progress. Failed test results include the error message, stack trace, console logs, and attachments.
 
1. After execution completes, the **Run summary** page shows an overview of the results. Use the **Release** link to open the release that ran the tests and view the release logs.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/run-summary.png" alt-text="Screenshot shows the test run summary.":::

   > [!NOTE]
   > Manually attaching files isn't supported for automated test results.

1. On the **Test results** page, select any test to see detailed debugging information.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/test-run-results.png" alt-text="Screenshot shows viewing the test results details.":::

1. To see all runs, go to the **Runs** page and select any run to open its detailed view.

   :::image type="content" border="true" source="media/run-automated-tests-from-test-hub/test-results-overview.png" alt-text="Screenshot shows the Runs page with an overview of all test runs.":::

   > [!TIP]
   > If your tests don't run, see [What are the typical errors when automated tests don't run?](reference-qa.yml#what-are-the-typical-errors-when-automated-tests-don-t-run)

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to manage automated tests

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your automated test execution by using natural language prompts.

### Example prompts for automated test management

| Task | Example prompt |
|------|----------------|
| Find automated test cases | `List test cases in test plan <12345> where Automation Status = <Automated>` |
| Check test results | `Show the latest test run results for test plan <12345> in project <Contoso>` |
| Find failing tests | `List test cases in <Contoso> that failed in the most recent test run` |
| View test run history | `Show all test runs in project <Contoso> from the last 7 days` |
| Identify unautomated tests | `List test cases in test suite <67890> where Automation Status = <Not Automated>` |
| Track test progress | `Show the pass rate for automated tests in test plan <12345>` |
| Spot flaky tests | `Find test cases in test plan <12345> that have both passed and failed results in the last 5 test runs` |
| Analyze failure trends | `List test cases in area path <Contoso\\Checkout> that failed more than 3 times in the last 30 days` |
| Find slow tests | `Show automated test cases in test plan <12345> sorted by average run duration, longest first` |
| Audit automation gaps | `List test cases in <Contoso> with Priority = <1> where Automation Status = <Not Automated>` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) is especially helpful for troubleshooting complex automated test scenarios.
> - To avoid using stale or cached data from previous queries, add to your prompt, "Do not use previously fetched data."

::: moniker-end

## Related content

* [Troubleshooting and FAQs](reference-qa.yml)
* [Associate automated tests with test cases](associate-automated-test-with-test-case.md)
* [Associate automated test results with requirements](../pipelines/test/requirements-traceability.md)
* [Continuous testing scenarios and capabilities](index.yml)
