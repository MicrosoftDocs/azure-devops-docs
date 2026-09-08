---
title: Set work item automation rules
titleSuffix: Azure Boards   
description: Learn how to set rules to update the state of your team's work items automatically, according to the state of the child tasks.  
ms.service: azure-boards
ai-usage: ai-assisted
ms.custom: cross-service, copilot-scenario-highlight
ms.author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 07/20/2026
---


# Set work item automation rules

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

> [!NOTE]
> This feature is only available in Azure DevOps Services. Azure DevOps Server isn't supported.

Automatically update the state of a work item according to the state of its child tasks. For example, when a child task moves to an active state (such as `Active` or `In Progress`), the parent work item moves to an active state too. When all child tasks reach a completed state (such as `Closed` or `Done`), the parent work item closes automatically.

> [!IMPORTANT]
> Work item automation rules only apply to your team's workflow on the backlog and boards. Other teams within your project can set their own independent rules.

> [!NOTE]
> Rules use **state categories** - not specific state names - so they work consistently across all process templates (Agile, Scrum, CMMI). For example, a rule that closes the parent when all children complete applies regardless of whether your process calls that state `Closed`, `Done`, or `Resolved`.

Establish rules at the team backlog level. These rules apply to all work items at that specific level. You can establish these rules independently for each backlog level, including stories, features, and epics. For example, you can automate the closure of user stories, but keep features and epics open.

[!INCLUDE [ai-assistance-mcp-server-tip.md](../../includes/ai-assistance-mcp-server-tip.md)]

## Prerequisites

| Category | Requirements |
|:-------------|:------------|
|**Project**| An [Azure DevOps project](https://go.microsoft.com/fwlink/?LinkId=307137).|
|**Access levels**| [Basic](../../organizations/security/access-levels.md) or higher. Users with **Stakeholder** access don't have access to Boards navigation or team settings.|
|**Permissions**| To configure work item automation rules for your team: [Team Administrator](../../organizations/settings/add-team-administrator.md) role or member of the [**Project Administrators**](../../organizations/security/change-project-level-permissions.md) group.|

## Set rules

Set team rules for each backlog level. 

> [!NOTE]
> - **Team scope requirement**: Automation rules trigger only when work items belong to the same team. Closing a task in a different team or project doesn't automatically update the parent item's state.
> - **Interface limitation**: Work item state automation rules only function when you update items through Boards, Backlogs, or Sprint views. These rules don't trigger when you update work item states from query results or work item forms.
> - **Reactivation**: Rules don't trigger when a child item moves from a completed state back to an active state. This behavior is by design.

1. Sign in to your project (`https://dev.azure.com/{Your_Organization}/{Your_Project}`).

1. Select **Boards** > **Backlogs** > :::image type="icon" source="../media/icons/gear_icon.png" border="false"::: **Configure team settings**.

   :::image type="content" source="media/backlog-settings.png" alt-text="Screenshot of selection process, Boards, Backlogs, and then Configure team settings.":::

1. Select **Rules**.

1. Select one or more rules to apply at this backlog level, and then select **Save**.

   :::image type="content" source="media/set-team-automation-rules.png" alt-text="Screenshot of team automation rules settings page.":::

   The following rules are available:

   | Rule | When it triggers |
   |------|------------------|
   | **Update parent status to Active when a child status is active** | When any child item moves to an active state category |
   | **Update parent status to Resolved when all child statuses are Resolved or Completed** | When all child items reach a resolved or completed state category |
   | **Update parent status to Closed when all child statuses are Closed or Completed** | When all child items reach a closed or completed state category |

   Rules apply to future state transitions only. Existing work items aren't retroactively updated when you enable rules.

   To apply rules at other backlog levels (such as Features or Epics), open each level's backlog, select **Configure team settings** > **Rules**, and repeat these steps. Each backlog level has its own independent rule configuration.

### Disable rules

To disable a rule, go to **Configure team settings** > **Rules**, clear the applicable checkboxes, and select **Save**. The change takes effect immediately for future state transitions.

### Verify rules are working

To confirm rules are active, update a child item's state from your backlog or board and check that the parent item updates automatically. If the parent doesn't update, confirm both items are assigned to the same team and that you're updating from **Boards**, **Backlogs**, or **Sprints** (not from a query result or work item form).

### Rules applied to the sprint board

These rules also apply when you update child items on the sprint board.

:::image type="content" source="media/sprintboard-drag-and-drop-update-parent.gif" alt-text="Animation of demo of automation rules for sprintboard, drag and drop child task activates, and then closes the parent user story on the board.":::

### Rules applied to the user stories backlog level

The following example shows the rules applied to the user stories backlog level.

:::image type="content" source="media/backlog-child-closes-parent.gif" alt-text="Animation of demo of automation rules for simple workflow, closing a child task closes the parent user story on the backlog.":::

### Rules applied to several backlog levels in sync

The following example shows the rules applied to several backlog levels in sync.

:::image type="content" source="media/rules-applied-several-backlog-levels.gif" alt-text="Animation of demo of automation rules applied to several backlog levels in sync.":::

<a id="use-ai-to-automate-work-item-state-transitions"></a>

## Use AI to automate work item state transitions

You can use AI assistance through the Azure DevOps MCP Server to help you configure and troubleshoot work item automation rules. Here are example prompts you can use:

| Task | Example prompt |
|------|----------------|
| Understand state categories | "Explain how state categories work in Azure Boards and how they map to my Agile process template" |
| Understand state categories | "What's the difference between state categories and state names in Azure Boards?" |
| Plan rule configuration | "Which backlog levels in our project should have automation rules enabled, and what should each rule do?" |
| Plan rule configuration | "What automation rules would you recommend for a team using the Scrum process template?" |
| Troubleshoot rules | "Our parent user stories aren't closing when we close all child tasks — what should I check?" |
| Troubleshoot rules | "Why would automation rules work for one team in our project but not another?" |
| Analyze work item states | "Review the current state of work items in our sprint and identify any parent items that don't match their children's states" |
| Analyze work item states | "Show me which parent features still have active child stories and which should already be closed" |

> [!NOTE]
> These prompts work best when you provide context about your team's process template and backlog configuration. The more specific you are, the better the suggestions.

## Work item automation rules FAQs

### Why are my work items automatically changing state?

If work items change state unexpectedly, your team likely enabled automation rules. Go to **Configure team settings** > **Rules** to review and adjust the active rules.

### Why don't rules trigger when I reactivate a child item?

Rules don't trigger when a child item moves from a completed state back to an active state. This behavior is by design to prevent rules from undoing intentional closures.

### Why don't automation rules work for items in a different team or project?

Rules only trigger when both the parent and child work items belong to the same team. Cross-team and cross-project state changes don't activate automation rules.

For additional questions - including whether you can set rules per work item type and how to automate user stories without affecting features - see the [Automation rules FAQs](../faqs.yml#automation-rules).

## Related content

- [Manage and configure team tools](../../organizations/settings/manage-teams.md)
- [Configure team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
