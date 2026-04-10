---
title: Record actual results for manual test runs
description: Use the Actual Result field in Azure Test Plans to record execution outcomes for each test step during manual test runs.
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: how-to
ms.author: pliaros
ms.reviewer: chcomley
author: pliaros
monikerRange: '<= azure-devops'
ms.date: 04/10/2026
---

# Record actual results for manual test runs

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

> [!IMPORTANT]
> This capability is in **Public Preview**. Functionality may change or be discontinued without notice. Preview capabilities are provided without a Service Level Agreement (SLA) and with limited support.

Use the **Actual Result** (AR) field in Azure Test Plans to record what happened at the moment of manual test execution for each test step.

The Actual Result field is enabled at the test plan level, and the setting is inherited by all suites and their test cases. This supports different ways of working across teams that share the same Azure DevOps organization.

Actual Result data is kept for as long as test run data is kept, based on your existing retention policies.

This capability applies only to manual test execution performed in the web runner.

## Expected Result, Actual Result, and Comment fields

While the three fields are closely related and help provide guidance and clarity during execution and review of test runs, each serves a different purpose:

- **Expected Result**: Defined during test case authoring. It specifies what outcome is needed for a test step to pass.
- **Actual Result**: Filled during live test execution, based on the manual input of the test executor. It is the factual execution outcome and can also serve as audit evidence. Actual Results can be structured and enforced by Azure Test Plans system logic for each test step.
- **Comment**: Also filled in during live test execution, based on the manual input of the test executor. Comments are informal notes and are not structured or enforced by Azure Test Plans system logic.

## Configure the Actual Result setting

1. Navigate to the **More actions** area of the test plan and choose the **Test plan settings** option.

   :::image type="content" source="media/actual-result/test-plan-settings-menu.png" alt-text="Screenshot showing the More actions menu with the Test plan settings option.":::

1. Wait for the pop-up to load, then select the **Test result settings** tab. Check the **Use 'Actual Result' field** option to enable the capability and choose between **Required** or **Optional** mode.

   :::image type="content" source="media/actual-result/test-result-settings-tab.png" alt-text="Screenshot showing the Test result settings tab with the Actual Result field options.":::

### Actual Result modes

| Mode | Description |
|------|-------------|
| **Disabled** | This is the default option. The Actual Result field and logic are not present during execution and have no effect on test execution. |
| **Enabled - Optional** | The field is available in the UI, yet it can be left blank. |
| **Enabled - Required** | The field is available in the UI and must be filled in for steps that have a defined expected result. |

## Fill in actual results during execution

- When enabled, the Actual Result field appears in each test step just after the step is marked as **Pass** or **Fail**. The field supports dedicated text input and step-level attachments.
- In **Enabled - Required** mode, when a test step has a defined **Expected Result** and the step is executed, you must enter an Actual Result to proceed, save, or save and close. Steps without a defined Expected Result, even in required mode, are not required to have an Actual Result input.

## Review runs and their actual results

You can review runs with Actual Results in the **Test Run Hub**. If Actual Results are entered, they're shown next to each step.

The Actual Result field in the Test Run Hub only appears if the test plan's Actual Result setting is enabled. If disabled, it won't show on the result page, even if step results were entered. However, you can always retrieve Actual Result details for each step using the REST API.

## Change the Actual Result setting

Any user with an assigned Azure Test Plans license can change the Actual Result setting at any time for any test plan they have access to.

> [!NOTE]
> It is recommended to change the Actual Result settings only after verifying that there are no "in progress" or "paused" runs under the test plan.

However, even if the setting changes while there are in-progress or paused runs, the applied Actual Result logic is based on the setting status at the moment the (paused) run was (re)initiated.

### Example scenarios

- A run was initiated with the Actual Result setting set to **Enabled - Required**, and during execution the setting changed to **Disabled**. The run will continue to be executed and completed with **Enabled - Required** logic.
- A run was initiated with the Actual Result setting set to **Enabled - Required**, then the run got paused. While paused, the setting was changed to **Disabled**. When the run is continued, its remaining steps will be executed and completed under the **Disabled** logic.

## Programmatic access

You can also get and update Actual Results programmatically using the [Azure DevOps REST API](/rest/api/azure/devops/test/results).
