---
title: Manage teams, configure team tools 
titleSuffix: Azure DevOps
description: Administrators learn how access team tools, add users, configure backlogs, iteration paths, Kanban boards, and more in Azure DevOps. 
ms.subservice: azure-devops-settings
ms.custom: teams
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 02/28/2023
---

# Manage and configure team tools

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If you're a team administrator, you have the flexibility to tailor your backlogs and boards to align with your team's workflow. In case you require a new team, you can ask a Project Administrator group member to create one for you, which takes only a minute. Team administrators have the ability to set up and oversee all team tools.

Team administrators perform the following tasks for team tools: 
- [Add team members](#add-users-to-a-team)
- [Add another team administrator](#add-an-administrator) 
- [Configure areas and iteration paths](#configure-team-areas-and-iterations)
- [Configure backlogs, boards, and general settings](#configure-team-backlogs)
- [Configure and manage team dashboards](#add-and-manage-team-dashboards)
- [Configure team notifications](#manage-notifications) 

## Prerequisites

- To perform any team configuration task, you must be a team administrator for the team to be modified, or be a member of the **Project Administrators** group. For more information, see [Change project-level permissions](../security/change-project-level-permissions.md).  
- To add a team, you must be a member of the **Project Administrators** group. For more information, see [Add teams](add-teams.md).

[!INCLUDE [temp](../../boards/includes/note-configure-customize.md)]

::: moniker range=">= azure-devops-2019"

## Open your team profile

Open your team profile to quickly access items defined for your team.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```), and then open your project.
2. Select **Project settings** > **Teams** > your team name.

   :::image type="content" source="media/open-project-settings-teams-cloud.png" alt-text="Screenshot of sequence to open a team.":::

::: moniker-end

## Add users to a team
 
Tools like capacity planning, team alerts, and dashboard widgets operate within the scope of a team. They automatically access the user information of team members to facilitate planning tasks or issue alerts.

To add users to a team, see [Add users to a project or specific team](../security/add-users-team-project.md).

:::image type="content" source="media/add-team-member.png" alt-text="Screenshot of Add button highlighted, to add team member.":::

All members of a team can favorite team artifacts and define work item templates. For more information, see: 
- [Set personal or team favorites](../../project/navigation/set-favorites.md)
- [Use templates to add and update work items](../../boards/backlogs/work-item-template.md).

If team members don't have access to all the features they want, make sure they have [the permissions needed for those features](../security/set-permissions-access-work-tracking.md).  

## Add an administrator

When you add a team to a project, a Project Administrator should [add one or more team administrators](add-team-administrator.md). 

:::image type="content" source="media/add-administrator.png" alt-text="Screenshot of Add button highlighted, to add an administrator.":::

## Configure team areas and iterations 

Many Agile tools rely on the team's configured area and iteration paths. For more information, see [About teams and Agile tools](about-teams-and-settings.md). 

After project administrators add the project's area and iteration paths using [Set area paths](set-area-paths.md) and [Set iteration paths](set-iteration-paths-sprints.md), team administrators can choose the relevant area and iteration paths for their team. These settings influence a wide range of Agile tools that the team can access.

:::image type="content" source="media/manage-iterations-areas.png" alt-text="Screenshot of Iterations and areas highlighted.":::

Settings include making the following associations for each team:  

- **Select team area paths**   
	Can select the default area path(s) associated with the team. These settings affect many Agile tools available to the team.	
- **Select team iteration paths or sprints** 
	Can select the default area path(s) associated with the team. These settings affect many Agile tools available to the team. 
 
For more information, see [Define area paths and assign to a team](set-area-paths.md) and 
[Define iteration paths and configure team iterations](set-iteration-paths-sprints.md). 

<a id="configure-team-backlogs" />

## Configure team backlogs, boards, and general settings 

As a team administrator, you have the flexibility to customize your team's workflow to suit your needs. One way to do so is by choosing which backlog levels are active for your team. For instance, a feature team might only want to display the product backlog, while a management team might prefer to show the feature and epic backlogs only. Also, you can choose how to treat bugs within your workflow, either as user stories and requirements or as tasks.

Another way to customize your team's workflow is by selecting non-working days for the team. By doing so, sprint planning and tracking tools can automatically take these days off into account when calculating capacity and sprint burndown.

Most of these team settings can be easily configured from the common configuration dialog, providing a convenient way to manage your team's workflow in one central location.

[!INCLUDE [temp](../../boards/includes/setup-backlogs-boards.md)]

::: moniker range=">= azure-devops-2022"

1. Check that you selected the correct project, and then choose **Boards** > **Boards**, and select the correct team from the team selector dropdown menu. For more information, see [Use breadcrumbs and selectors to navigate and open artifacts](../../project/navigation/use-breadcrumbs-selectors.md).
   :::image type="content" source="media/open-kanban-board-cloud.png" alt-text="Screenshot of steps to open the kanban board.":::

2. Choose **Team settings** :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: to configure the board and set general team settings.  

   :::image type="content" source="media/general-board-settings-cloud.png" alt-text="Screenshot of gear icon selection for general board settings.":::

3. Choose a tab under any of the sections&mdash;**Cards, Board**, **Charts**, and **General**&mdash;to configure the cards or boards, the cumulative flow chart, or other team settings. When you're done configuring the settings, select **Save and close**.   

	:::image type="content" source="media/team-settings-page.png" alt-text="Screenshot of team settings page.":::

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops-2022"

1. Check that you selected the right project, (2) choose **Boards** > **Boards**, and then (3) select the correct team from the team selector menu.

	> [!div class="mx-imgBorder"]
	> ![Open Kanban board, versions Azure DevOps Server 2019 and on.](../../boards/boards/media/quickstart/open-kanban-board-agile.png)

2. Make sure that you select the team backlog or board that you want to configure using the team selector. To learn more, see [Use breadcrumbs and selectors to navigate and open artifacts](../../project/navigation/use-breadcrumbs-selectors.md). 

3. Choose the product or portfolio backlog from the board-selection menu. 
	> [!div class="mx-imgBorder"]
	> ![Choose board level, vert nav](media/configure-team/choose-board-level-vert.png)

4. Choose **Team settings** :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: to configure the board and set general team settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings for a team, vert nav](media/configure-team/open-board-settings.png)  

5. Choose a tab under any of the sections&mdash;**Cards, Board**, **Charts**, and **General**&mdash;to configure the cards or boards, the cumulative flow chart, or other team settings.   

	> [!div class="mx-imgBorder"]
	> ![Common configuration dialog team settings](media/configure-team/common-configuration-dialog.png)

::: moniker-end  

::: moniker range="tfs-2018"

1. Make sure that you select the team from the project/team selector. You can switch your team focus to one that you've recently viewed from the project/team selector. If you don't see the team or project you want, choose **Browse&hellip;** or choose **Azure DevOps** :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: to [access the **Projects** page](../../project/navigation/work-across-projects.md).  

	![Choose another team from the project menu](../../media/work-web-portal-ts-switch-team-focus.png)

2. Open **Work** > **Backlogs** > **Board**. 

	> [!div class="mx-imgBorder"]
	>![Open Kanban board, versions TFS 2017-2018.](../../boards/boards/media/kanban-basics-intro.png)  

3. Choose the board you want to configure and then choose **Team settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: to configure the board and set general team settings.  
 
	For example, from the Kanban board ...  

	> [!div class="mx-imgBorder"]
	> ![Kanban board, open common configuration settings, versions TFS 2017-2018.](media/configure-team/open-settings-vsts-horz.png)

4. Choose a tab under **Cards** or **Board** to configure the cards and Kanban board columns and swimlanes.  

	> [!div class="mx-imgBorder"]  
	> ![Common configuration dialog team settings]../.../boards/boards/media/customize-cards/common-config-141.png)

::: moniker-end  

Team administrators have complete control over customizing their team's Kanban boards for both the product and portfolio backlogs. To set up a Kanban board, you can define the columns and work-in-progress (WIP) limits through the common configuration dialog. For more information, see [Kanban overview](../../boards/boards/kanban-overview.md) and [Kanban quickstart](../../boards/boards/kanban-quickstart.md).

For detailed information on each configuration option, you can explore the following articles:

---
:::row:::
   :::column span="1":::
      **General**
      - [Backlogs](select-backlog-navigation-levels.md)
      - [Working days](set-working-days.md)
      - [Working with bugs](show-bugs-on-backlog.md)            
      **Cards**
      - [Add fields](../../boards/boards/customize-cards.md)
      - [Define styles](../../boards/boards/customize-cards.md#define-style-rules-to-highlight-cards)
      - [Add tag colors](../../boards/boards/customize-cards.md#assign-a-color-to-a-tag)
      - [Enable annotations](../../boards/boards/customize-cards.md#enable-annotations)
      - [Configure inline tests](../../boards/boards/customize-cards.md#configure-inline-tests)
   :::column-end:::
   :::column span="1":::
      **Boards**
      ::: moniker range=">= azure-devops-2019"
      - [Add columns](../../boards/boards/add-columns.md)  
      - [Split columns](../../boards/boards/split-columns.md)    
      - [WIP limits](../../boards/boards/wip-limits.md)    
      - [Definition of Done](../../boards/boards/definition-of-done.md)   
      - [Add swimlanes](../../boards/boards/expedite-work.md)
      - [Card reordering](../../boards/boards/customize-cards.md#reorder-cards)
      - [Configure status badges](../../boards/github/configure-status-badges.md)
      ::: moniker-end
      ::: moniker range="tfs-2018"
      - [Add columns](../../boards/boards/add-columns.md)
      - [Split columns](../../boards/boards/split-columns.md)    
      - [WIP limits](../../boards/boards/wip-limits.md)    
      - [Definition of Done](../../boards/boards/definition-of-done.md)  
      - [Add swimlanes](../../boards/boards/expedite-work.md)
      - [Reorder cards](../../boards/boards/customize-cards.md#reorder-cards)
      ::: moniker-end
      **Chart**
      - [Configure cumulative flow chart](../../report/dashboards/cumulative-flow.md)
   :::column-end:::
:::row-end:::
---

## Configure sprint taskboards 

::: moniker range=">= azure-devops-2020" 

Similar to Kanban boards, you can customize each sprint taskboard to support information-rich color-coded cards and columns. For more information, see [Customize sprint taskboards](../../boards/sprints/customize-taskboard.md). 

::: moniker-end

::: moniker range="< azure-devops-2020" 

Similar to Kanban boards, each sprint taskboard can be customized to support information-rich, color-coded cards. For more information, see [Customize sprint taskboards](../../boards/sprints/customize-taskboard.md). 

::: moniker-end

:::image type="content" source="media/configure-sprint-taskboard.png" alt-text="Screenshot of taskboard selection.":::

<a id="add-and-manage-team-dashboards" /> 

## Add and manage team dashboards   

::: moniker range=">= azure-devops-2019"
By default, all team members can add and edit team dashboards. In addition, team administrators can manage permissions for team dashboards. For more information, see [Add and manage dashboards](../../report/dashboards/dashboard-permissions.md#set-permissions).  
::: moniker-end  

::: moniker range="tfs-2018"  
Team administrators can add, configure, and manage permissions for team dashboards. For more information, see [Add and manage dashboards](../../report/dashboards/dashboard-permissions.md#set-permissions).   
::: moniker-end

:::image type="content" source="media/manage-team-dashboards.png" alt-text="Screenshot of dashboard button surrounded by red square.":::

<a id="team-description" />

## Update team name, description, and image

::: moniker range=">= azure-devops-2020"

Team settings also include the team name, description, and team profile image. To add a team picture, select the image icon. The maximum file size is 2.5 MB.


![Screenshot to Update team profile picture.](media/team-defaults/update-team-profile-pic-preview.png)

::: moniker-end

::: moniker range="<= azure-devops-2019"

Team settings also include the team name, description, and team profile image. To add a team picture. Open the Team Profile and choose the picture icon. The maximum file size is 4 MB.

::: moniker-end

## Manage notifications 

Team administrators have the ability to add and edit alerts, allowing the team to receive email notifications as changes occur to work items, code reviews, source control files, and builds. Various alerts are pre-defined for each team. For more information, see [Manage team alerts](../../organizations/notifications/manage-team-group-global-organization-notifications.md).

:::image type="content" source="media/manage-notifications.png" alt-text="Screenshot of highlighted Notifications button.":::

## Related articles

- [About projects and scaling your organization](../projects/about-projects.md)
- [About teams and Agile tools](about-teams-and-settings.md)  
- [Add teams](add-teams.md) 
- [Add a team administrator](add-team-administrator.md)
