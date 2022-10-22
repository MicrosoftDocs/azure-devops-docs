---
ms.service: azure-devops-boards
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 05/20/2022
---


## Prerequisites

Backlogs are automatically created when you create a project or add a team. Each team has access to their own product, portfolio, and sprint backlogs as described in [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md#each-team-gets-their-own-set-of-tools).

::: moniker range="azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](../get-started/sign-up-invite-teammates.md). 
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To add or modify work items, you must be granted **Stakeholder** access or higher. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To use the **Planning** pane, the sprints that you want to assign work to must have been selected for your team by a team administrator. To learn more, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).  

> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to backlog and board features just like users with **Basic** access. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).


::: moniker-end

::: moniker range="< azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md).
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To add or modify work items, you must be granted **Stakeholder** access or higher. For details, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To use the **Planning** pane, the sprints that you want to assign work to must have been selected for your team by a team administrator. To learn more, see [Define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).  

::: moniker-end