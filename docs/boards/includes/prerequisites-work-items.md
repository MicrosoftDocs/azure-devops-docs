---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 01/13/2025
---


| Category | Requirements |
|--------------|-------------|
| **Permissions** | - To view, follow, and edit work items: **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). <br> - To add tags to work items: Project-level **Create new tag definition** permission set to **Allow**. By default, the **Contributors** group has this permission. |
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md). <br> - To add new tags to work items or to view or follow pull requests: At least [**Basic** access](../../organizations/security/access-levels.md). <br> - To view or follow work items: At least **Stakeholder** access. For more information, see [About access levels](../../organizations/security/access-levels.md). <br> - All project members, including those in the **Readers** group, can send emails containing work items. |

::: moniker range="azure-devops" 
  >[!NOTE]
  >- Provide [Stakeholder access](../../organizations/security/access-levels.md) to members who want to contribute to the discussion and review progress. These are typically members who don't contribute to code, but want to view work items, backlogs, boards, and dashboards. 
  >- By default, all **Contributors** and **Stakeholders** in public projects can add new and existing tags. In private projects, Stakeholders can only add existing tags. To control the ability to create new tags, set the **Create tag definition** permission at the project level. For more information, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).
::: moniker-end

::: moniker range=" < azure-devops"
>[!NOTE]
>- Provide [Stakeholder access](../../organizations/security/access-levels.md) to members who want to contribute to the discussion and review progress. These are typically members who don't contribute to code, but want to view work items, backlogs, boards, and dashboards.
::: moniker-end
