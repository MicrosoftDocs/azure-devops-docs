---
title: Plan and track work in Azure Boards
titleSuffix: Azure Boards 
description: Learn how to plan and track work by using Azure Boards using the Agile, Basic, Scrum, or Capability Maturity Model Integration (CMMI) processes.
ms.custom: boards-get-started
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 09/29/2025
#customer intent: As a team member, I want to understand how to use the different processes to manage our team projects.
---

# Plan and track work in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use Azure Boards to plan and track work with the Agile, Basic, Scrum, or Capability Maturity Model Integration (CMMI) processes. For more information about process choices, see [About processes and process templates](../work-items/guidance/choose-process.md).

[!INCLUDE [basic process](../includes/basic-process-note.md)]

#### [Agile process](#tab/agile-process)

The Agile process uses user stories, tasks, bugs, features, and epics to plan and track work. Add user stories and group them into features when you need higher-level planning. Add tasks to a user story to track smaller units of work.

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="media/about-boards/agile-process-wits.png" alt-text="Screenshot showing Agile process work item types in a hierarchy."::: | :::image type="content" source="media/about-boards/agile-hierarchy.png" alt-text="Screenshot showing Agile process hierarchical backlog."::: |

Use the work item form to describe the work, assign owners, track status, and collaborate with the team through the **Discussion** section. This article shows how to add user stories, create child tasks, and update work items from the web portal.

#### [Basic process](#tab/basic-process)

The Basic process provides epics, issues, and tasks. Use issues to represent user stories, bugs, or feature work. Group items under epics and add tasks for implementation details.

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="media/about-boards/basic-process-epics-issues-tasks-2.png" alt-text="Screenshot showing Basic process work item types."::: | :::image type="content" source="media/about-boards/hierarchy-2.png" alt-text="Screenshot showing Basic process hierarchical backlog."::: |

This article explains how to add issues, create child tasks, and update details on the web portal.

#### [Scrum process](#tab/scrum-process)

The Scrum process uses product backlog items, tasks, bugs, features, and epics. Add product backlog items, group them into features, and create child tasks for work tracking.

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="../work-items/guidance/media/ALM_PT_Scrum_WIT_Artifacts.png" alt-text="Screenshot showing Scrum process work item types in a hierarchy.":::  | :::image type="content" source="media/about-boards/scrum-hierarchy-simple.png" alt-text="Screenshot showing Scrum process backlog with parent items.":::  |

This article shows how to add product backlog items, child tasks, and details on the web portal.

#### [CMMI process](#tab/cmmi-process)

The CMMI process uses requirements, tasks, bugs, features, and epics. Start with requirements, group them into features or epics, and add child tasks for implementation.

| Work item types | Backlog hierarchy |
|:------|:---------|
|:::image type="content" source="../work-items/guidance/media/ALM_PT_CMMI_WIT_Artifacts.png" alt-text="Screenshot showing CMMI process work item types in a hierarchy."::: | :::image type="content" source="media/about-boards/cmmi-hierarchy-simple.png" alt-text="Screenshot showing CMMI process requirements backlog with parents.":::  |

This article shows how to add requirements, child tasks, and work item details on the web portal.

* * *

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - Add work items and use board features: at least [**Basic** access](../../organizations/security/access-levels.md). <br> - Private project: to view boards, open and modify work items, and add child tasks: at least **Stakeholder** access (Stakeholders can't reorder or reparent backlog items or update fields on cards). <br> - Public project: for full access to all Boards features: at least **Stakeholder** access. |
| **Permissions** | Member of the **Contributors** or **Project Administrators** group. |

::: moniker-end

For more information, see [Default permissions and access for Azure Boards](permissions-access-boards.md).

<a id="define-new-work">  </a>

## Open your board

A team board exists for each team in a project. To open a board:

1. Sign in to your organization at `https://dev.azure.com/{Your_Organization}` and go to your project.
1. Select **Boards** > **Boards**.
   :::image type="content" source="media/plan-track-work/open-boards.png" alt-text="Screenshot showing navigation to Boards in the project menu.":::
1. Select a board from the **All Team Boards** dropdown.
   :::image type="content" source="media/plan-track-work/select-from-all-team-boards-dropdown-menu.png" alt-text="Screenshot showing the All Team Boards dropdown.":::

## Add work items to your board

Boards automatically assign the team's default **Area Path** and **Iteration Path** to new work items. See [Manage and configure team tools](../../organizations/settings/manage-teams.md) for team settings.

To add items:

- Agile: On the Stories board, choose **New item**, type a title, and press Enter.
  :::image type="content" source="media/plan-track-work/new-user-story-kanban-board.png" alt-text="Screenshot showing adding a new user story on the Stories board.":::
- Basic: On the Issues board, choose **New item**, type a title, and press Enter.
  :::image type="content" source="media/track-issues/issues-board-new-item.png" alt-text="Screenshot showing adding a new issue on the Issues board.":::
- Scrum: On the Backlog items board, choose **New item**, type a title, and press Enter.
  :::image type="content" source="media/plan-track-work/new-scrum-item-kanban-board.png" alt-text="Screenshot showing adding a new backlog item on the Backlog items board.":::
- CMMI: On the Requirements board, choose **New item**, type a title, and press Enter.
  :::image type="content" source="media/plan-track-work/new-user-story-kanban-board-cmmi.png" alt-text="Screenshot showing adding a new requirement on the Requirements board.":::

The system assigns an ID when you create the work item.

> [!TIP]
> To add features and child items quickly, choose **Features** from the board selector.
>
> :::image type="content" source="media/plan-track-work/choose-features-board.png" alt-text="Screenshot showing the Features board selector.":::

## Add tasks (child items)

To track implementation details, create tasks from a parent work item.

1. Open the parent card's actions menu and choose **Add Task** (the green plus icon).
   :::image type="content" source="media/plan-track-work/add-child-task.png" alt-text="Screenshot showing Add Task from a work item card menu.":::
1. Type the task title and press Enter.
   :::image type="content" source="media/plan-track-work/prep-images-task.png" alt-text="Screenshot showing entering a task title.":::
1. To add multiple tasks quickly, continue typing titles and press Enter after each.

   Tasks inherit the parent's **Area Path** and **Iteration Path** and appear on sprint taskboards.

   You can:
   - Mark a task complete by selecting its checkbox (State changes to **Done**).
   
   :::image type="content" source="media/plan-track-work/mark-tasks-as-done.png" alt-text="Screenshot showing tasks marked as done.":::
   
   - Reorder or reparent tasks by dragging them in the checklist.
   
   :::image type="content" source="media/plan-track-work/reorder-task.png" alt-text="Screenshot showing reordering a task.":::
   
   - Expand or collapse a task checklist.
   
   :::image type="content" source="media/plan-track-work/collapse-task-list.png" alt-text="Screenshot showing a collapsed task checklist.":::

## Open and update a work item

To edit a work item, select its title. Update field values, add a description, or add a discussion note. Use the **Attachments** tab to upload files by drag-and-drop.
:::image type="content" source="media/plan-track-work/user-story-form-add-details.png" alt-text="Screenshot showing details on a user story work item form.":::

When you finish editing, select **Save & Close**.

## Update work status

Drag work item cards between columns to update their State.

- Agile: move cards from **Backlog** → **Active** → **Resolved** → **Closed**.
  :::image type="content" source="media/plan-track-work/update-status.png" alt-text="Screenshot showing moving a card between columns in Agile.":::
- Basic: move cards from **To Do** → **Doing** → **Done**.
  :::image type="content" source="media/track-issues/update-status.png" alt-text="Screenshot showing moving a card between columns in Basic.":::
- Scrum: move cards from **New** → **Approved** → **Committed** → **Done**.
  :::image type="content" source="media/plan-track-work/update-status-scrum.png" alt-text="Screenshot showing moving a card between columns in Scrum.":::
- CMMI: move cards from **Backlog** → **Active** → **Resolved** → **Closed**.
  :::image type="content" source="media/plan-track-work/update-status-cmmi.png" alt-text="Screenshot showing moving a card between columns in CMMI.":::

> [!TIP]
> To add or rename columns, see [About configuring and customizing Azure Boards](../configure-customize.md).

## Field descriptions and task fields

You can use these fields on backlog items and tasks to support planning and capacity tracking.

> [!NOTE]
> Tasks show "h" for hours on the taskboard, but you can track work in any unit your team prefers.

:::row:::
   :::column span="":::
      **Field**
   :::column-end:::
   :::column span="3":::
      **Usage**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Activity](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The type of activity for a task (for example, Development, Testing). See [Determine and set sprint capacity](../sprints/set-capacity.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Discipline](../queries/query-numeric.md) (CMMI process)
   :::column-end:::
   :::column span="3":::
      The discipline for CMMI tasks (for example, Analysis, Development, Test).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Original Estimate](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The estimated work required to complete a task.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Remaining Work](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The amount of work left to finish a task. Use hours or days. Update this field as work progresses; it's used by capacity charts and the sprint burndown.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Completed Work](../queries/query-numeric.md)
   :::column-end:::
   :::column span="3":::
      The time spent implementing a task. Enter this value when you complete the task.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Task Type](/previous-versions/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi) (CMMI only)
   :::column-end:::
   :::column span="3":::
      Select the appropriate task type for CMMI tasks (for example, Corrective Action, Mitigation Action, Planned).
   :::column-end:::
:::row-end:::

[!INCLUDE [discussion comments](../includes/discussion-tip-azure-devops.md)]

## Related content

> [!div class="nextstepaction"]
> [Customize your board](../configure-customize.md)

- [Review Azure Boards FAQs](../faqs.yml) 
- [Add tags to issues or tasks](../queries/add-tags-to-work-items.md)
