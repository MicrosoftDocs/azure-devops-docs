---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 10/02/2024
---

## Prerequisites

- **Project access:** Be [added to a project](../../organizations/security/add-users-team-project.md).

- **Permissions:**
  - Have **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has these permissions. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).
  - To add new tags to work items, have **Basic** access or higher and the project-level **Create new tag definition** permission set to **Allow**. By default, the **Contributors** group has this permission. Note: **Stakeholders** cannot add new tags, even if the permission is explicitly set, due to their access level. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).

- **Email work items:** All project members, including those in the **Readers** group, can send emails containing work items.

