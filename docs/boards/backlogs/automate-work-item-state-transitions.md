---
title: Set work item automation rules for your team
titleSuffix: Azure Boards   
description: Learn how to set rules to update the state of your team's work items automatically, according to the state of the child tasks.  
ms.service: azure-devops-boards
ms.custom: cross-service
ms.author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/05/2024
---


# Automate work item state transitions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Automatically update the state of a work item according to the state of its child tasks. For example, if one task is changed to `Doing`, then the parent gets set to `Doing`. And if all tasks are in `Closed` state, then the parent gets `Closed`.

Rules are established at the team backlog level and are applicable to all work items at that specific level. You have the flexibility to establish these rules independently for each backlog level, including stories, features, and epics. For example, you can automate the closure of user stories, but keep features and epics open.

> [!IMPORTANT]
> Work item automation rules exclusively pertain to your team’s workflow on the backlog and boards. Other teams within your project can customize their own rules to align with their specific work processes.

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|:-------------|:------------|
|**Permissions**| To configure work item automation rules for your team: [Team Administrator](../../organizations/settings/add-team-administrator.md) role or member of the [**Project Administrators**](../../organizations/security/change-project-level-permissions.md) group.|

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|:-------------|:------------|
|**Permissions**| To configure team settings: [Team Administrator](../../organizations/settings/add-team-administrator.md) role or member of the [**Project Administrators**](../../organizations/security/change-project-level-permissions.md) group.|

::: moniker-end

## Set rules

Do the following steps to set team rules for each backlog level. 

> [!NOTE]
> Work items must belong to the same team; when you close a task in a different team or project, it doesn't trigger the closure of the parent item.

1. Sign in to your project (```https://dev.azure.com/{Your_Organization}/{Your_Project}```).

2. Select **Boards** > **Backlogs** > :::image type="icon" source="../media/icons/gear_icon.png" border="false"::: **Configure team settings**.

   :::image type="content" source="media/backlog-settings.png" alt-text="Screenshot of selection process, Boards, Backlogs, and then Configure team settings.":::

3. Check one or more applicable boxes, which trigger the parent work items on this backlog level, and then select **Save**.

   :::image type="content" source="media/set-team-automation-rules.png" alt-text="Screenshot of team automation rules settings page.":::

   Work item states are set to automatically transition when child items get updated on your backlog.

**Rules applied to sprint board**

These rules operate seamlessly, regardless of where you make updates to the child items, such as on the sprint board, for example.

:::image type="content" source="media/sprintboard-drag-and-drop-update-parent.gif" alt-text="Animation of demo of automation rules for sprintboard, drag and drop child task activates, and then closes the parent user story on the board.":::

**Rules applied to the user stories backlog level**

The following example shows the rules applied to the user stories backlog level.

:::image type="content" source="media/backlog-child-closes-parent.gif" alt-text="Animation of demo of automation rules for simple workflow, closing a child task closes the parent user story on the backlog.":::

**Rules applied to several backlog levels in sync**

The following example shows the rules applied to several backlog levels in sync.

:::image type="content" source="media/rules-applied-several-backlog-levels.gif" alt-text="Animation of demo of automation rules applied to several backlog levels in sync.":::

## FAQs

For answers to the following frequently asked questions, see the [FAQs](../faqs.yml#automation-rules):
- Is there way to make the parent active when a child is active?
- Why are my work items automatically changing state?
- Why are the rules not triggering when I reactivate a child item?  
- Can I set automation rules per work item type or state?
- Can I set up automation rules for user stories but not for features or epics?
- Why are automation rules not working if the child or parent items belongs to a different team or project?

## Related articles

- [Manage and configure team tools](../../organizations/settings/manage-teams.md)
- [Configure team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
