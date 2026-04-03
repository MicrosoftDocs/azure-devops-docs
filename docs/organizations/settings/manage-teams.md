---
title: Manage Teams and Configure Team Tools 
titleSuffix: Azure DevOps
description: Learn how administrators can access team tools, add users, configure backlogs, iteration paths, boards, and more in Azure DevOps. 
ms.subservice: azure-devops-settings
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 04/02/2026
ms.custom: teams, sfi-image-nochange
---

# Manage and configure team tools

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

As a team administrator, you can configure backlogs, boards, and other team tools to match your team's workflow. If you need a new team, ask a member of the Project Administrators group to [create one](add-teams.md).

This article covers the following team administrator tasks:
- [Add team members](#add-users-to-a-team)
- [Add another team administrator](#add-an-administrator) 
- [Configure areas and iteration paths](#configure-team-areas-and-iterations)
- [Configure backlogs, boards, and general settings](#configure-team-backlogs)
- [Add and manage team dashboards](#add-and-manage-team-dashboards)
- [Configure team notifications](#manage-notifications) 

## Prerequisites

|Category | Requirements |
|--------------|-------------|
|**Permissions** |- To manage teams: [Team administrator](add-team-administrator.md) or member of the [Project Administrators](../security/change-project-level-permissions.md) group.<br>- To add a team: Member of the [Project Administrators](../security/change-project-level-permissions.md) group. For more information, see [Add teams](add-teams.md).|

[!INCLUDE [temp](../../boards/includes/note-configure-customize.md)]

## Open your team profile

Open your team profile to quickly access items defined for your team.

1. Sign in to your project:
   `https://dev.azure.com/<your-organization>/<your-project>`

1. Select **Project settings** > **Teams**, and then select your team.

   :::image type="content" source="media/open-project-settings-teams-cloud.png" alt-text="Screenshot of sequence to open a team." lightbox="media/open-project-settings-teams-cloud.png":::

## Add users to a team
 
Tools like capacity planning, team alerts, and dashboard widgets operate within the scope of a team. They automatically access the user information of team members to facilitate planning tasks or issue alerts.

To add users to a team, see [Add users to a project or specific team](../security/add-users-team-project.md).

:::image type="content" source="media/add-team-member.png" alt-text="Screenshot of Add button highlighted, to add team member.":::

All members of a team can favorite team artifacts and define work item templates. For more information, see: 
- [Set personal or team favorites](../../project/navigation/set-favorites.md)
- [Use work item templates](../../boards/backlogs/work-item-template.md)

If team members don't have access to all the features they want, make sure they have [permissions needed for those features](../security/set-permissions-access-work-tracking.md).  

## Add an administrator

When you add a team to a project, a Project Administrator should [add one or more team administrators](add-team-administrator.md). 

:::image type="content" source="media/add-administrator.png" alt-text="Screenshot of Add button highlighted, to add an administrator.":::

## Configure team areas and iterations 

Many Agile tools rely on the team's configured area and iteration paths. For more information, see [About teams and Agile tools](about-teams-and-settings.md). 

After project administrators add the project's area and iteration paths by using [area paths](set-area-paths.md) and [iteration paths](set-iteration-paths-sprints.md), team administrators can choose the relevant area and iteration paths for their team. These settings influence a wide range of Agile tools that the team can access.

:::image type="content" source="media/manage-iterations-areas.png" alt-text="Screenshot of Iterations and areas highlighted.":::

For each team, make the following associations.

- **Select team area paths**: Select the default area paths associated with the team. These settings affect many Agile tools available to the team.	
- **Select team iteration paths or sprints**: Select the default iteration paths associated with the team. These settings affect many Agile tools available to the team. 
 
For more information, see [Define area paths and assign to a team](set-area-paths.md) and 
[Define iteration paths and configure team iterations](set-iteration-paths-sprints.md). 

<a id="configure-team-backlogs"></a>

## Configure team backlogs, boards, and general settings 

You can configure the following settings for your team from the common configuration dialog:

- **Active backlog levels** — Choose which backlogs to show. For example, a feature team might show only the product backlog, while a management team shows only feature and epic backlogs.
- **Bug behavior** — Track bugs as requirements (user stories) or as tasks.
- **Nonworking days** — Exclude days from capacity and sprint burndown calculations.
- **Automation rules** — [Update work items automatically when child item states change](../../boards/work-items/automate-work-item-state-transitions.md).

[!INCLUDE [temp](../../boards/includes/setup-backlogs-boards.md)]

::: moniker range=">= azure-devops-2022"

1. Check that you selected the correct project, and then choose **Boards** > **Boards**. Select the correct team from the team selector dropdown menu. For more information, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).
   
   :::image type="content" source="media/open-kanban-board-cloud.png" alt-text="Screenshot of steps to open the board.":::

1. Choose **Team settings** to configure the board and set general team settings.  

   :::image type="content" source="media/general-board-settings-cloud.png" alt-text="Screenshot of gear icon selection for general board settings.":::

1. Choose a tab under **General**, **Cards**, **Board**, or **Charts** to configure the cards or boards, the cumulative flow chart, or other team settings. When you're done configuring the settings, select **Save and close**.   

	:::image type="content" source="media/team-settings-page.png" alt-text="Screenshot of team settings page.":::

::: moniker-end

Team administrators have complete control over customizing their team's boards for both the product and portfolio backlogs. To set up a board, you can define the columns and work-in-progress (WIP) limits through the common configuration dialog. For more information, see [Board overview](../../boards/boards/kanban-overview.md) and [Board quickstart](../../boards/boards/kanban-quickstart.md).

For detailed information on each configuration option, see the following articles:

|Category |Articles |
|---------|---------|
|General  |- [Backlogs](select-backlog-navigation-levels.md)<br>- [Working with bugs](show-bugs-on-backlog.md)         |
|Cards    | - [Add fields](../../boards/boards/customize-cards.md)<br>- [Define styles](../../boards/boards/customize-cards.md#define-style-rules-to-highlight-cards)<br>- [Add tag colors](../../boards/boards/customize-cards.md)<br>- [Enable annotations](../../boards/boards/customize-cards.md)<br>- [Configure inline tests](../../boards/boards/customize-cards.md#configure-inline-tests)        |
|Chart    | - [Configure cumulative flow chart](../../report/dashboards/cumulative-flow.md)        |
|Boards   | - [Add columns](../../boards/boards/add-columns.md)<br>- [Split columns](../../boards/boards/add-columns.md#split-columns)<br>- [WIP limits](../../boards/boards/wip-limits.md)<br>- [Definition of Done](../../boards/boards/add-columns.md#definition-of-done)<br>- [Add swimlanes](../../boards/boards/expedite-work.md)<br>- [Card reordering](../../boards/boards/customize-cards.md#reorder-cards)<br>- [Configure status badges](../../boards/github/configure-status-badges.md)        |

## Configure sprint taskboards 

::: moniker range="<=azure-devops"

Like boards, you can customize each sprint taskboard to support information-rich, color-coded cards and columns. For more information, see [Customize sprint taskboards](../../boards/sprints/customize-taskboard.md). 

::: moniker-end

:::image type="content" source="media/configure-sprint-taskboard.png" alt-text="Screenshot of taskboard selection.":::

<a id="add-and-manage-team-dashboards"></a> 

## Add and manage team dashboards   

By default, all team members can add and edit team dashboards. In addition, team administrators can manage permissions for team dashboards. For more information, see [Add and manage dashboards](../../report/dashboards/dashboard-permissions.md).  

:::image type="content" source="media/manage-team-dashboards.png" alt-text="Screenshot of dashboard button surrounded by red square.":::

<a id="team-description"></a>

## Update team name, description, and image

::: moniker range="<=azure-devops"

Team settings also include the team name, description, and team profile image. To add a team picture, select the image icon. The maximum file size is 2.5 MB and 2560 x 1,024 px. The image is resized to 200 x 200.

:::image type="content" source="media/team-defaults/update-team-profile-pic-preview.png" alt-text="Screenshot to update team profile picture.":::

::: moniker-end

## Manage notifications 

Team administrators can add and edit alerts, so the team receives email notifications when changes occur to work items, code reviews, source control files, and builds. Each team has predefined alerts. For more information, see [Manage team alerts](../../organizations/notifications/manage-team-group-global-organization-notifications.md).

:::image type="content" source="media/manage-notifications.png" alt-text="Screenshot of highlighted Notifications button.":::

## Related content

- [About projects and scaling your organization](../projects/about-projects.md)
- [About teams and Agile tools](about-teams-and-settings.md)  
- [Create or add a team](add-teams.md) 
- [Add or remove a team administrator](add-team-administrator.md)
- [Automate work item state transitions](../../boards/work-items/automate-work-item-state-transitions.md)
