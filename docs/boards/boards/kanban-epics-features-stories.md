---
title: Add features & epics to a board
titleSuffix: Azure Boards
description: Quickly define and view the status of child features, user stories, or backlog items using features or epic boards in Azure Boards and Azure DevOps.
ms.custom: boards-kanban 
ms.service: azure-devops-boards
ms.assetid: 489C612D-983E-47D3-BD1A-F13C5DCD74E2  
ms.topic: tutorial
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 09/26/2025
---

# Add board features and epics

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If you track progress on a backlog with a board, use boards to track epics and features too.

As with [child task checklists for backlog items](add-task-checklists.md), you can quickly define and track child items for features or epics. The following examples show stories defined for features that are in progress and completed.

For more information, see [Define features and epics](../backlogs/define-features-epics.md).

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-kanban.md)]

## Open your board from the web portal

Your board is one of several boards available in a project. For an overview of supported features on backlogs and boards, see [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md). To switch to the product backlog, choose **Stories backlog**. To open the taskboard, choose **Sprints** and then **Taskboard**.

1. Sign in to your project at `https://dev.azure.com/{Your_Organization}/{Your_Project}`.
2. Choose **Boards** > **Boards**.
3. Select the correct team from the team selector menu.

:::image type="content" source="media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot showing how to open your board from the web portal.":::

To choose another team's board, open the selector and pick a different team or choose the :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team boards** option. Use the search box to filter team boards for the project.

> [!div class="mx-imgBorder"]  
> :::image type="content" source="media/quickstart/select-kanban-team-board.png" alt-text="Screenshot showing the team board selector and Browse all team boards option.":::  
>
> [!TIP]  
> Choose the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to favorite a team board. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false":::) appear at the top of the team selector list.

2. Select **Features** or **Epics** from the backlog selector menu.

> [!div class="mx-imgBorder"]  
> :::image type="content" source="media/features-epics/select-portfolio-level.png" alt-text="Screenshot showing how to choose the portfolio backlog level (Features or Epics).":::

## Add epics or features

Add new items to a feature or epic from the item's action menu (the actions icon). For field descriptions used by features and epics, see [Define features and epics](../backlogs/define-features-epics.md).

:::image type="content" source="media/features-epics/add-user-story.png" alt-text="Screenshot showing the feature board context menu and the option to add a user story.":::

To add many items at once, continue typing titles and press Enter after each one. To open a work item and add details, hover over the item and press Enter.

## Related content

- [Kanban board overview](kanban-overview.md)
- [Add tasks or child items as checklists](add-task-checklists.md)
- [Add columns](add-columns.md)
- [Customize cards](../../boards/boards/customize-cards.md)

### REST API resources

To programmatically interact with a board and team settings, see the [REST API, Boards reference](/rest/api/azure/devops/work/boards).
