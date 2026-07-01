---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/01/2026
---


| Category | Requirements |
|--------------|-------------|
| Permissions | **To view, follow, and edit work items**: <br> - **View work items in this node** (Allow) <br> - **Edit work items in this node** (Allow) <br> By default, the **Contributors** group has these permissions. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md). <br><br> **To add new tags**: <br> - Project-level **Create tag definition** permission (Allow) <br> By default, the **Contributors** group has this permission. |
| Access levels | - [Project member](../../organizations/security/add-users-team-project.md) <br><br> **To add new tags or follow pull requests**: At least [**Basic**](../../organizations/security/access-levels.md#supported-access-levels) <br><br> **To view or follow work items**: At least [**Stakeholder**](../../organizations/security/access-levels.md) <br><br> **To send emails with work items**: Must be a member of the **Contributors** group |

::: moniker range="azure-devops"
> [!NOTE]
> - Assign **Stakeholder** access to members who want to review progress and discuss work items but don't contribute to code. They can view work items, backlogs, boards, and dashboards.
> - By default, **Contributors** and **Stakeholders** in public projects can add new and existing tags. In private projects, only **Contributors** can add new tags. To change tag creation permissions, set the **Create tag definition** permission at the project level. For more information, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).
::: moniker-end

::: moniker range="< azure-devops"
> [!NOTE]
> - Assign **Stakeholder** access to members who want to review progress and discuss work items but don't contribute to code. They can view work items, backlogs, boards, and dashboards.
::: moniker-end
