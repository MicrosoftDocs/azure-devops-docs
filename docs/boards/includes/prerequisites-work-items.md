---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/11/2023
---

## Prerequisites

::: moniker range="azure-devops"

* You must be [added to a project](../../organizations/security/add-users-team-project.md).
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To add new tags to add to work items, you must have **Basic** access or higher and have the project-level **Create new tag definition** permissions set to **Allow**. By default, the **Contributors** group has this permission set. Even if the permission is explicitly set for a **Stakeholder**, they don't have permission to add new tags, as they're prohibited through their access level. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
* All project members, even members in the **Readers** group, can send emails containing work items. 

::: moniker-end

::: moniker range="< azure-devops"

* You must be [added to a project](../../organizations/security/add-users-team-project.md).
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To add new tags to add to work items, you must have **Basic** access or higher and have the project-level **Create new tag definition** permissions set to **Allow**. By default, the **Contributors** group has this permission set. Even if the permission is explicitly set for a **Stakeholder**, they don't have permission to add new tags, as they're prohibited through their access level. For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
* All project members, even members in the **Readers** group, can send emails containing work items. 
::: moniker-end
