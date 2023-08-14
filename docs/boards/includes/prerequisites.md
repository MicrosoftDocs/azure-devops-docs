---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/26/2023
---


## Prerequisites

Backlogs automatically get created when you create a project or add a team. Each team has access to their own product, portfolio, and sprint backlogs as described in [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md#each-team-gets-their-own-set-of-tools).

::: moniker range="azure-devops"

* You must be [added to a project](../../organizations/security/add-users-team-project.md) as a member of the **Contributors** or **Project Administrators** security group. 
* To add or modify work items, you must be granted [**Stakeholder** access or higher](../../organizations/security/stakeholder-access.md).
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To use the **Planning** pane, your team administrator must [define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).  

> [!NOTE]  
> Users with **Stakeholder** access for public projects have full access to backlog and board features, like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

::: moniker-end

::: moniker range="< azure-devops"

* You must be [added to a project](../../organizations/security/add-users-team-project.md) as a member of the **Contributors** or **Project Administrators** security group.
* To add or modify work items, you must be granted [**Stakeholder** access or higher](../../organizations/security/stakeholder-access.md).
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To use the **Planning** pane, your team administrator must [define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).
::: moniker-end
