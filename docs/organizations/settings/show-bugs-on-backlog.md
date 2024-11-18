---
title: Show bugs on backlogs and boards
titleSuffix: Azure DevOps 
description: Choose how to get bugs and user stories to appear on Agile tools in Azure Boards. You can track bugs as requirements or tasks.
ms.service: azure-devops-boards
ms.custom: teams. engagement-fy23
ms.assetid: 27DCB879-30F6-44F3-998A-755DF66D6E24
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 11/12/2024
#customer intent: As a team administrator, I want to be able to track code defects as part of the backlog in Azure Boards so the team can track them in the same way as requirements or tasks.
---

# Show bugs on backlogs and boards  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As your team identifies code defects or bugs, they can add them to the backlog and track them similar to tracking requirements. You can schedule bugs to be fixed within a sprint along with other tasks.

When you track bugs as *requirements*, they appear on the product Backlogs and boards. When you track bugs as *tasks*, the bugs appear on Sprint Backlogs and Taskboards. For more information about other work item types, see [Add other work item types to backlogs or boards](#add-other-wits).

You can define your team's tracking setting for the [Agile](../../boards/work-items/guidance/agile-process.md), [Scrum](../../boards/work-items/guidance/scrum-process.md), and [Capability Maturity Model Integration (CMMI)](../../boards/work-items/guidance/cmmi-process.md) processes. The Bug work item type isn't defined for the [Basic](../../boards/get-started/plan-track-work.md) process, so there isn't a team setting for Basic. Instead, you should track bugs and code defects using the Issue work item type.

[!INCLUDE [requirements-term](../../boards/includes/note-requirements-terms.md)]

[!INCLUDE [prerequisites](includes/prerequisites-team-settings.md)]

## Choose from options for bug tracking

The following table summarizes the options teams have for tracking bugs. Before you make your choice, we recommend you review the information provided in [Define, capture, triage, and manage bugs](../../boards/backlogs/manage-bugs.md), which provides an overview of the Bug work item type and supported tools for managing bugs.

[!INCLUDE [bug track options](../../boards/includes/show-bugs-matrix-options.md)]

## Set your team preference for bug tracking

You can change settings from a backlog or board view, or from **Project settings** > **Team configuration**.

:::image type="content" source="media/working-with-bugs-navigation.png" alt-text="Screenshot showing sequence of navigation selection for working with bugs from project settings." lightbox="media/working-with-bugs-navigation.png":::

The following steps show how to change it from the board view.

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`) and select your project.
2. [Open your board](../../boards/boards/kanban-quickstart.md). If you're not a team administrator, [get added as one](add-team-administrator.md). Only team and project administrators can customize the board.
3. Choose **Board settings** :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: to configure the board and set general team settings.

   :::image type="content" source="media/configure-team/open-board-settings.png" alt-text="Screenshot shows the Open board settings button for a team.":::  

4. Choose **Working with bugs** and then choose the option that best meets your team's way of working.

   :::image type="content" source="media/show-bugs-dialog.png" alt-text="Screenshot shows the Settings page with the Working with bugs tabs selected.":::  

5. When you're done with your changes, choose **Save**.  

6. To see the changes, open or refresh the team's [backlog](../../boards/backlogs/create-your-backlog.md) or [board](../../boards/boards/kanban-overview.md).

## Nest items

When you manage bugs with requirements or tasks, they appear on one or more of your Agile tool backlogs and boards. However, if you nest items, by creating parent-child links of items that belong in either the Requirements or Task categories, not all items can appear on your backlogs and boards. To learn more about how nested items are treated, see [Troubleshoot reordering and nesting issues](../../boards/backlogs/resolve-backlog-reorder-issues.md).

> [!TIP]  
> If, after refreshing a backlog or board, you don't see bugs where you expect to see them, review [Troubleshoot reordering and nesting issues](../../boards/backlogs/resolve-backlog-reorder-issues.md). Only leaf nodes of nested items appear on the or task boards.  
>
<a id="add-other-wits"></a> 

## Add other work item types to your backlogs or boards

Bugs are a common item that teams want to track, and choose how they track them. For more information, see [Manage bugs](../../boards/backlogs/manage-bugs.md).

However, what if you want to track other work item types on your backlogs and boards?

You can add other work item types by customizing your process or project, based on the process model that you use. These items include change requests, issues, and impediments.

- For the Inheritance process model, see [Customize your backlogs or boards](work/customize-process-backlogs-boards.md).
- For Hosted XML and On-premises XML process models, see [Add a work item type to a backlog and board](../../reference/add-wits-to-backlogs-and-boards.md).

For an overview of process models, see [Customize your work tracking experience](../../reference/customize-work.md).  

## Create, list, and manage bugs

Bugs that are managed with requirements can be added through the [product backlog](../../boards/backlogs/create-your-backlog.md) or [board](../../boards/boards/kanban-quickstart.md). When bugs are managed along with tasks, you can add them to a [sprint backlog or task board](../../boards/sprints/add-tasks.md). Or, capture them using other tools. For more information, see [Define, triage, and manage bugs](../../boards/backlogs/manage-bugs.md).

> [!TIP]
> Effort should automatically be part of a bug. If you don't see it, customize the bug work item type for it to appear.

You can review bugs defined for your project by creating a query and specifying the **Work Item Type=Bug**. Or, open a predefined query: **Active Bugs** (Agile and CMMI) or **Work in Progress** (Scrum).  

## Related articles

- [Define, capture, triage, and manage bugs](../../boards/backlogs/manage-bugs.md)
- [Select backlog navigation levels for your team](select-backlog-navigation-levels.md)
- [Manage teams and configure team tools](manage-teams.md)
- [View, run, or email a work item query](../../boards/queries/view-run-query.md)
- [Query by assignment or workflow changes](../../boards/queries/query-by-workflow-changes.md)
