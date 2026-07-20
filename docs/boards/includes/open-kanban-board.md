---
ms.service: azure-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/16/2026
---

Use **Boards** and **Taskboards** for different planning views:

- Use **Boards** to track requirement-level work across iterations and monitor flow with tools like the cumulative flow diagram (CFD).
- Use **Taskboards** to track sprint task execution, capacity, and burndown.

For Taskboard guidance, see [Update and monitor your Taskboard](../sprints/task-board.md).


## Open your board from the web portal

::: moniker range="azure-devops"

1. Sign in to your project (`https://dev.azure.com/{Your_Organization}/{Your_Project}`).

1. Select **Boards** > **Boards**, and then select the correct team in the team selector.

	:::image type="content" source="../boards/media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot shows opening a board for a specified team.":::  

	To switch to another team board, open the selector. Then choose another team, select :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team boards**, or enter a keyword to filter the team backlog list.

	:::image type="content" source="../boards/media/quickstart/select-kanban-team-board.png" alt-text="Screenshot shows selecting another team's board."::: 

	> [!TIP]
	> Select the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to make a team board a favorite. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorite icon) appear at the top of the team selector list.

1. Select the correct backlog level: **Backlog items** for Scrum, **Stories** for Agile, or **Requirements** for CMMI.

	:::image type="content" source="../sprints/media/assign-items-sprint/select-product-backlog-agile.png" alt-text="Screenshot shows selecting product backlog level, Backlog items, Stories, or Requirements."::: 

To switch to the [product backlog](../backlogs/create-your-backlog.md), select **Stories backlog**. To switch to a Taskboard, see [Update and monitor your Taskboard](../sprints/task-board.md).

::: moniker-end

::: moniker range="< azure-devops"

1. Select your project, and then select **Boards** > **Boards**.

1. Select the correct team in the team selector.

	:::image type="content" source="../boards/media/quickstart/open-kanban-board-agile.png" alt-text="Screenshot shows how to open a board for your team.":::  

	To switch to another team board, open the selector. Then choose another team, select :::image type="icon" source="../../media/icons/home-icon.png" border="false"::: **Browse all team boards**, or enter a keyword to filter the team backlog list.

    :::image type="content" source="../boards/media/quickstart/select-kanban-team-board.png" alt-text="Screenshot shows selecting another team's board."::: 

	> [!TIP]
	> Select the :::image type="icon" source="../../media/icons/icon-favorite-star.png" border="false"::: star icon to make a team board a favorite. Favorited artifacts (:::image type="icon" source="../../media/icons/icon-favorited.png" border="false"::: favorite icon) appear at the top of the team selector list.

1. Select the correct backlog level: **Backlog items** for Scrum, **Stories** for Agile, or **Requirements** for CMMI.

    :::image type="content" source="../sprints/media/assign-items-sprint/select-product-backlog-agile.png" alt-text="Screenshot shows selecting Backlog items, or, if relevant, Stories or Requirements."::: 

To switch to the [product backlog](../backlogs/create-your-backlog.md), select **Stories backlog**. To switch to a Taskboard, see [Update and monitor your Taskboard](../sprints/task-board.md).

::: moniker-end
