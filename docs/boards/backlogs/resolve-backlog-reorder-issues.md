---
title: Resolve nest, display, and reorder issues for work items
titleSuffix: Azure Boards
description: Learn how to fix reordering and nesting issues for work items in Azure Boards. Resolve error messages and maintain a natural hierarchy for your backlog.
ms.custom: boards-backlogs
ms.service: azure-devops-boards
ms.assetid: BDEAA5D4-83A3-49FC-BEEB-EE685E92B68B
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/14/2024
#customer intent: as a team member or lead, I want to address warnings or errors that occur in Azure Boards regarding reordering or nesting work items.
---

# Troubleshoot reordering and nesting issues

<a id="display-hierarchy">  </a>

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
<!--- Supports FWLINK https://go.microsoft.com/fwlink/?linkid=529135 --> 

When you reorder, nest, and display work items, Azure Boards expects a [natural hierarchy](#natural-hierarchy-for-work-item-types). The natural hierarchy breaks when you create same-category or same-type links between work items. For example, parent to child links that are bug to bug or user story to user story or *requirements* category to *task* category. Use this article to address error messages when you add links that aren't in the natural hierarchy.

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites.md)]

## You cannot reorder work items and some work items might not be shown

You might see an error similar to one of the following messages:

> - You cannot reorder work items and some work items might not be shown
> - No work item IDs are listed

To address this error, do the following steps:

1. Open your backlog.
1. Review the list of items to identify those items of the same type that are nested.  

   - **Example #1:** The following image shows a user story as a child of another user story.

     :::image type="content" source="media/resolve/nested-user-stories.png" alt-text="Screenshot showing nested user stories on a backlog.":::

   - **Example #2:** The following image shows a bug as a child of a user story. When the backlog displays user stories and bugs at the same level (Requirements category), it results in a nested item that disables the ordering feature.

     :::image type="content" source="media/resolve/nested-user-story-bug.png" alt-text="Screenshot of nested user story and bug.":::

1. Remove any parent-child links that exist among nested items of the same work item type or category, or consider changing the link type to *Related*.
1. Refresh your backlog.

These steps should resolve the issue, and the error message no longer displays.

## Work item can't be reordered because its parent is on the same category

You might see an error similar to one of the following messages:

> - You cannot reorder work items and some work items might not be shown. See work item(s) 7 to either remove the parent to child link or change the link type to Related.
> - Work item 3 can't be reordered because its parent is on the same category.

To address this error, do the following steps:

1. Open the work item listed in the error message.
1. Look for a parent or child link. Make sure this link goes to a work item in the same category as the work item you opened. Look for a link that goes to another work item that appears on the same backlog level as the work item you opened. Depending on your team's bug behavior setting, bugs might appear with requirements or tasks.
1. Remove the problem parent-child link. If you would like to keep these items associated, use *Related* link type instead.

The message no longer displays.

## Work items in progress might disappear on refresh

You might see an error similar to the following message:

> Items added to the backlog might disappear on a refresh because your team project marks them as "in progress". Those items appear when you change the "In progress" filter to Show.

This message indicates that the **In Progress** filter for the backlog is turned off.  

When you refresh your browser, the work items display based on your selected filters. To reset the filters, do the following steps.

::: moniker range=">= azure-devops-2020" 

1. Open your backlog.
1. From the **View options** selector, choose to show or hide **In Progress items**.

   :::image type="content" source="media/create-backlog/in-progress-control-2020.png" alt-text="Screenshot of View options selector, In progress control, version 2020 and later.":::

::: moniker-end
::: moniker range="azure-devops-2019"

1. Open your backlog.
1. From the **View options** selector, choose to show or hide **In Progress items**.

   :::image type="content" source="media/create-backlog/in-progress-control-2019.png" alt-text="Screenshot of View options selector, In progress control, version 2019.":::

::: moniker-end

If you turn the **In Progress** control off, then items that are in the *Active*, *Committed*, or *Resolved* states or states that map to the [**In Progress** category state](../work-items/workflow-and-state-categories.md) don't appear.

Hide **In Progress items** when you want to forecast work. For more information, see [Forecast your product backlog](../sprints/forecast.md).

> [!NOTE]
>
> - For more information, see [Configure your backlog view](configure-your-backlog-view.md) and [Add custom work item types](../../organizations/settings/work/add-custom-wit.md).
> - For issues that might occur with multi-team ownership, see [Exercising select features with shared area paths](../plans/configure-hierarchical-teams.md#op-issues).
> - To reorder work items on your backlog, have at least Basic access. If you have Stakeholder access, you can't reorder work items. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

## Natural hierarchy for work item types

The following image shows the natural hierarchy for the Agile, Scrum, and Capability Maturity Model Integration (CMMI) processes.

:::image type="content" source="media/resolve/create-hierarchy-with-different-wits.png" alt-text="Diagram of natural hierarchy for the Agile, Scrum, and CMMI processes.":::

## Best practices

**Do:**

- Maintain a flat list, rather than nesting requirements, bugs, and tasks.
- Only create parent-child links one level deep between items that belong to a different category. The category a work item belongs to gets determined by your process levels and your team's selected bug behavior.
- Use the *feature* work item type to group user stories (Agile), issues (Basic), work items (Scrum), or requirements (CMMI). You can map work items to features. This mapping creates parent-child links in the background. For more information, see [Organize your backlog](organize-backlog.md).

**Don't:**

- Create a hierarchy of work items, tasks, and bugs.
- Establish same-category hierarchies, such as parent-child links among work items of the same type. For example, create story-story, bug-bug, task-task, or issue-issue links. The backlog, board, and sprints experiences don't support reordering for same-category hierarchies, because that approach introduces confusion by ordering a work item that doesn't belong at that level.

## Track bugs as requirements or tasks  

Each team has the flexibility to choose to track bugs as requirements, tasks, or neither. See the following guidelines:

- **If you track bugs as *requirements*:** Nest them only under the *Feature* level.

   :::image type="content" source="media/resolve/bugs-as-requirements.png" alt-text="Diagram shows linked bugs like requirements.":::

- **If you track bugs as *tasks*:** Nest them only under the *Requirement* level.

   :::image type="content" source="media/resolve/bugs-as-tasks.png" alt-text="Diagram shows linked bugs like tasks, underneath the Requirement level.":::

For more information, see [Show bugs on backlogs and boards](../../organizations/settings/show-bugs-on-backlog.md).

## Display nested items on backlogs and boards

Sprint backlogs and Taskboards exclusively display the last node in a same-category hierarchy, which is referred to as the leaf node.

### Sprint backlogs and Taskboards

When tasks and bugs link to their parent requirements, they group them correctly on the sprint backlog and Taskboard. When you establish parent-child links between a requirement and a bug, and between the bug and a task, as demonstrated here, the task appears on the sprint backlog and Taskboard, while the bug doesn't.

**Hierarchy of items assigned to a sprint backlog**  

:::image type="content" source="media/resolve/sprint-backlog-hierarchy.png" alt-text="Screenshot of Sprint backlog query with linked bug and task.":::  

**Only leaf nodes appear on sprint backlogs**  

:::image type="content" source="media/resolve/sprint-backlog-leaf-only.png" alt-text="Screenshot of Sprint backlog with leaf node task."::: 

**Only leaf nodes appear on Taskboards**

:::image type="content" source="media/resolve/bugs-appear-on-taskboard.png" alt-text="Screenshot of Sprint board with leaf node task.":::

## Frequently asked questions (FAQs)

### Q: Is there a workaround to display intermediate nodes within a hierarchy?

A: No, not at this time. You can always check the entire list of items assigned to a sprint when you select **Create query**.

## Related articles

- [Set up your backlogs and boards](set-up-your-backlog.md)  
- [Learn about Kanban boards](../boards/kanban-overview.md)  
