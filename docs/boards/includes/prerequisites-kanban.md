---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 09/11/2024
---

Boards automatically get created when you create a project or add a team. Each team has access to their own product and portfolio boards as described in [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md#each-team-gets-their-own-set-of-tools).

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md). <br> - To add work items and use all board features: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - Users with **Stakeholder** access: <br> - Public project: Full access to board features, similar to users with Basic access. <br> - Private project: Can add work items and update status through drag-and-drop but can't update fields displayed on cards, and can add tasks and change task status. |
| **Permissions** | To view or modify work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md). |

::: moniker-end

::: moniker range="azure-devops-2022"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md). <br> - To add work items and use all board features: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - Users with **Stakeholder** access for a private project can add work items and update status through drag-and-drop but can't update fields displayed on cards. They can add tasks and change task status. |
| **Permissions** | To view or modify work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md). |

::: moniker-end

::: moniker range="< azure-devops-2022"

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md). <br> - To add work items and use all board features: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - Users with **Stakeholder** access can't use these board features: Add work items, drag-and-drop work items to update status, or update fields displayed on cards. They can add tasks and change task status. |
| **Permissions** | To view or modify work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md). |

::: moniker-end
