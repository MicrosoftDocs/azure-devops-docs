---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 11/02/2023
---


## Prerequisites

When you create a project or a team, backlogs get created automatically. Each team has access to their own product, portfolio, and sprint backlogs.

::: moniker range="azure-devops"

|Prerequisite  |Description  |
|---------|---------|
|Project Administrator or Contributor member     | You must be [added to a project](../../organizations/security/add-users-team-project.md) as a member of the **Contributors** or **Project Administrators** security group.        |
|Stakeholder access     | To add or modify work items, you must be granted *Stakeholder* [access or higher](../../organizations/security/stakeholder-access.md). Users with **Stakeholder** access for public projects have full access to backlog and board features, like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).       |
|Contributor member or Allow perms on     | To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md).         |
|Defined iterations   |To use the **Planning** pane, your team administrator must [define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).         |


::: moniker-end

::: moniker range="< azure-devops"

|Prerequisite  |Description  |
|---------|---------|
|Project Administrator or Contributor member     | You must be [added to a project](../../organizations/security/add-users-team-project.md) as a member of the **Contributors** or **Project Administrators** security group.        |
|Stakeholder access     | To add or modify work items, you must be granted *Stakeholder* [access or higher](../../organizations/security/stakeholder-access.md).        |
|Contributor member or Allow perms on     | To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md).         |
|Defined iterations   |To use the **Planning** pane, your team administrator must [define iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md).         |

::: moniker-end
