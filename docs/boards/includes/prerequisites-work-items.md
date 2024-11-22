---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 10/02/2024
---


- **Project access:** Be a [project member](../../organizations/security/add-users-team-project.md).

- **Permissions:**
  - To view, follow, and edit work items, have **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set work tracking permissions](../../organizations/security/set-permissions-access-work-tracking.md).
-	To add tags to work items, have the project-level **Create new tag definition** permission set to **Allow**. By default, the **Contributors** group has this permission.

- **Access levels**: 
  -	To add new tags to work items or to view or follow pull requests, have at least **Basic** access.  
  -	To view or follow work items, have at least **Stakeholder** access. For more information, see [About access levels](../../organizations/security/access-levels.md).
  - All project members, including those in the **Readers** group, can send emails containing work items.

  > [!NOTE]
  > - Provide [Stakeholder access](../../organizations/security/access-levels.md) to members who want to contribute to the discussion and review progress. These are typically members who don't contribute to code, but want to view work items, backlogs, boards, and dashboards. 
  > - **Stakeholders** can't add new tags, even if the permission is explicitly set, due to their access level. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

