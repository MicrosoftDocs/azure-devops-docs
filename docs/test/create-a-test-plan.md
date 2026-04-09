---
title: Create and manage test plans
titleSuffix: Azure Test Plans
description: Learn how to create, rename, and delete test plans in Azure Test Plans.
ms.assetid: 99FD819E-A861-4F28-A486-FD452DB65D69
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3, copilot-scenario-highlight
ai-usage: ai-assisted
ms.topic: how-to
ms.author: pliaros
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 04/08/2026
ms.update-cycle: 1095-days
---

# Create and manage test plans

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Create test plans and test suites to track manual testing for sprints or milestones.
By using this approach, you can see when the testing for a specific sprint or milestone is complete.
For more information about manual testing, see [What is Azure Test Plans?](overview.md)

## Share work items across your test experience

For example, you're building version 1.* of your product and you might create several test cases for that version. You can update each of these test cases and add more at any time.
For each development cycle and release of your product, you create a test plan and import the existing test cases into that plan. To manage and monitor these separate sets of test cases more easily, you can also divide the test cases into separate test suites within the plan.

After you create your test plan, [assign test configurations](test-different-configurations.md) and [assign testers](create-test-cases.md#assign-testers) to cover the required test matrix.
These testers [run the tests](run-manual-tests.md) and gauge the quality of the product.
Testers continue testing until the product meets exit criteria.
For the next development cycle and release, you can create a new test plan and reuse the same test cases.
Repeat this development-test-release cycle by importing the same test cases into each new test plan.

Because test plans refer to test cases, updates to a test case automatically reflect in all the test plans and test suites that use it.

In the next version of the product, you can reuse the existing test cases. However, a better option might be to [copy or clone the test cases](copy-clone-test-items.md). A copy creates a new baseline. Changes to these new test cases don't affect your previous test plans.

## Prerequisites

[!INCLUDE [prerequisites-define](includes/prerequisites-define.md)] 

::: moniker range="azure-devops"
[!INCLUDE [ai-assistance-mcp-server-tip](../includes/ai-assistance-mcp-server-tip.md)]
::: moniker-end

<a name="testplan"></a>

## Create a test plan

::: moniker range="<=azure-devops"
In general, you create test plans to test requirements. Before you create a test plan, [define your backlog of requirements](../boards/backlogs/create-your-backlog.md).

1. Sign in to your Azure DevOps project and select **Test Plans** > **Test Plans**.

   :::image type="content" source="media/create-a-test-plan/open-test-plans.png" alt-text="Screenshot of opening the list of test plans page.":::

2. Select **+ New Test Plan**.

   :::image type="content" source="media/create-a-test-plan/new-test-plan.png" alt-text="Screenshot of creating a new test plan.":::

3. Enter a name for the test plan, verify that the area path and iteration are set correctly, and then select **Create**.

   :::image type="content" source="media/create-a-test-plan/test-plan-name-path-iteration.png" alt-text="Screenshot of adding test plan details.":::

   The test plan is created and you can start [adding test suites](create-test-suites.md) and [test cases](create-test-cases.md).

::: moniker-end

## Rename a test plan

::: moniker range="<=azure-devops"

To rename a test plan, use the following steps:

1. Select **Test Plans**.

2. Next to the test plan name, select **More Actions** > **Edit**.

   :::image type="content" source="media/create-a-test-plan/rename-edit-test-plan.png" alt-text="Screenshot shows option to edit a test plan.":::

3. Change the name and then select **Save & Close**.

   You can also update the area path, iteration, and other test plan settings from this dialog.

::: moniker-end

## Delete a test plan

::: moniker range="<=azure-devops"

To delete a test plan, use the following steps:

1. Select **Test Plans**.

2. Next to the test plan name, select **More Actions**:::image type="icon" source="../media/icons/more-actions.png" border="false"::: > **Delete**.

3. The **Delete test artifacts** dialog box explains exactly what gets deleted. Enter the test plan ID to confirm that you want to delete, and then select **Delete**.

   :::image type="content" border="true" source="media/create-a-test-plan/delete-test-artifacts.png" alt-text="Screenshot shows delete test artifacts dialog box.":::

> [!NOTE]
> Deleted test plans are moved to the **Test Plan Recycle Bin** and can be restored within 14 days by using the REST API. For more information, see [Restore deleted test plans and test suites using REST API](/azure/devops/release-notes/roadmap/2025/testplans/restore-deleted-test-plans).

::: moniker-end

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to manage test plans

If you configure the [Azure DevOps MCP Server](../mcp-server/mcp-server-overview.md), you can use AI assistants to manage your test plans and suites by using natural language prompts.

### Example prompts for test plan management

| Task | Example prompt |
|------|----------------|
| Create a test plan | `Create a new test plan in <Contoso> project called '<Sprint 5 Regression Tests>'` |
| List test plans | `List all test plans in <Contoso> project` |
| Create a test suite | `Create a static test suite called '<Checkout Flow>' under test plan <12345>` |
| Query test cases in a suite | `Show all test cases in test suite <67890> in project <Contoso>` |
| Find untested areas | `List test suites in test plan <12345> that have no test cases assigned` |
| Check test plan coverage | `Show all requirement-based test suites in test plan <12345> and their associated work items` |
| Compare sprint plans | `List test suites in test plan <12345> and test plan <54321> side by side` |
| Find unlinked test cases | `Show test cases in project <Contoso> that aren't in any test suite` |
| Audit test plan readiness | `List test cases in test plan <12345> that have State = <Design> and no test steps defined` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) is especially helpful for troubleshooting complex test planning scenarios.
> - To avoid using stale or cached data from previous queries, add to your prompt, "Do not use previously fetched data."

::: moniker-end

## Next step

> [!div class="nextstepaction"]
> [Create and manage test suites](create-test-suites.md)

## Related content

* [Create and manage test suites](create-test-suites.md)
* [Create manual test cases](create-test-cases.md)
* [Bulk import or export test cases](bulk-import-export-test-cases.md)
* [Test objects and terms](test-objects-overview.md) 
* [FAQs for manual testing](reference-qa.yml)
* [End-to-end traceability](../cross-service/end-to-end-traceability.md)
