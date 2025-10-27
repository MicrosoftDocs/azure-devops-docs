---
title: Manage sprint timelines
titleSuffix: Azure Boards
description: Learn how to set and add dates for sprints, releases, or iterations to implement Scrum in Azure Boards.
ms.custom: boards-sprints
ms.service: azure-devops-boards
ms.assetid: 1DB81E71-36D7-43A5-9C9A-38AA1777715A
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 10/27/2025
#customer intent: As an Azure Boards project administrator, I want to set dates and assign teams to sprints and iterations so I can assign teams their own boards and backlogs to manage.
---

# Manage sprint timelines 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

In the Scrum framework, teams plan and track work item assignments in regular time intervals called *sprints*. To use the Scrum and sprint planning cadence, you assign start and end dates for your team's sprints. This article describes how to set the iteration dates for sprints.

Agile tools use the **Iteration path** field to track sprints and releases. Iteration paths and sprints are shared resources by all the teams that use them. Teams can choose a two or three-week cadence, but you can also specify shorter or longer sprint cycles or create a release schedule that encompasses several sprints.

Use the guidance in this article to set or change sprint dates. To define iteration paths and tree structure or associate teams with sprints, see [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Permissions** | To change sprint dates: Member of the [Project Administrators](../../organizations/security/change-project-level-permissions.md) group, or **Edit this node** permission for the iteration child node, which is the team name. By default, the user who created the project has these permissions. For more information, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md) or [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md). | 

<a id="quick-start-schedule">   </a>
## Start scheduling sprints

Projects come with several predefined sprints that aren't associated with any dates. To quickly get started scheduling sprints, you can use these default sprints to assign start and end dates for your team's sprints.

1. In your Azure DevOps project, select **Boards** > **Sprints** from the left navigation menu. The **Sprints** page opens to your team's **Taskboard** view. Select the **Backlogs** tab.

   :::image type="content" source="media/define-sprints/open-sprint-backlog.png" alt-text="Screenshot that shows opening the Backlog tab of the Sprint page for a team.":::

1. To select a different team, select the dropdown arrow next to the team name and choose a different team or **View sprints directory** from the selector.

   :::image type="content" source="media/define-sprints/set-sprint-dates-scrum-agile.png" alt-text="Screenshot that shows the selector for choosing another team.":::

1. At the top of the **Backlogs** page, select **Set dates**.

1. On the **Edit iteration** screen, select the calendar icons to select the start date and end date, or enter them directly, and then select **Save and close**.

   :::image type="content" source="media/define-sprints/edit-iteration-set-sprint-dates.png) " alt-text="Screenshot that shows the Edit iteration screen.":::

The **Backlogs** page now shows the sprint dates, and you can start [planning your first sprint](assign-work-sprint.md).

:::image type="content" source="media/define-sprints/sprint-dates-set-scrum-agile.png" alt-text="Screenshot that shows Sprint dates set.":::

<a id="schedule"></a>
## Schedule sprints for other teams and releases

Defining sprints other than the default sprints is a two-step process. First you [define the sprints for your project](../../organizations/settings/set-area-paths.md), and then you [select the sprints for each team to use](../../organizations/settings/set-iteration-paths-sprints.md). This system supports teams that work on different sprint cadences. For more information, see [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md).

:::image type="content" source="media/define-sprints-project-level.png" alt-text="Diagram that shows defining project sprints." border="false"::: :::image type="content" source="media/define-sprints-team-level.png" alt-text="Diagram that shows selecting team sprints." border="false":::

When you define sprints, you define the picklist of values available for the **Iteration path** field to assign work to sprints, milestones, or releases. If you have several teams, releases, and sprint cadences to schedule, or to create child iterations, you can use the project settings.

If you work with several teams and each team wants their own backlog view, you can [create more teams](../../organizations/settings/add-teams.md). Each team gets access to their own set of Agile tools filtered to work items for that team's default area path and iteration path.

The following screenshot shows the list of iterations for a project in **Project Settings** > **Boards**.

:::image type="content" source="media/define-sprints/set-sprint-dates.png" alt-text="Screenshot that shows sprints for a team in Project Settings.":::

Each sprint selected for a team gives that team a sprint backlog, taskboard, and other sprint planning and tracking tools to use. In the following example, the **Management** team has access to a sprint backlog, capacity planning tool, and taskboard for each of their sprints. For more information, see [Implement Scrum practices for your team in Azure Boards](scrum-overview.md).

:::image type="content" source="media/define-sprints/selected-team-iterations-agile.png" alt-text="Screenshot that shows selected sprints for a team in Backlogs.":::

## Next step

> [!div class="nextstepaction"]
> [Assign work to a sprint](assign-work-sprint.md)

## Related content 

- [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md)
- [Create more teams](../../organizations/settings/add-teams.md)
- [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)

