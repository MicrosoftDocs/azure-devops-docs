---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 01/13/2025
---

::: moniker range="azure-devops"

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md). |
| **Permissions** | - Member of the **Contributors** or **Project Administrators** security group. <br>- To view or modify work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). |
| **Access levels** | To add or modify work items: At least [**Basic** access](../../organizations/security/stakeholder-access.md). Users with **Stakeholder** access for public projects have full access to backlog and board features, like users with **Basic** access. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md). |
| **Defined iterations** | To use the **Planning** pane: Ensure your team administrator [defined iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). |

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/security/add-users-team-project.md). |
| **Permissions** | - Member of the **Contributors** or **Project Administrators** security group. <br> - To view or modify work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set to **Allow**. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). |
| **Access levels** | To add or modify work items: At least [**Basic** access](../../organizations/security/stakeholder-access.md). |
| **Defined iterations** | To use the **Planning** pane: Ensure your team administrator [defined iteration (sprint) paths and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md). |

::: moniker-end
