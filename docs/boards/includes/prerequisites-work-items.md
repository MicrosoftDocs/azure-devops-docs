---
ms.service: azure-devops-boards
ms.author: chcomley
author: KathrynEE
ms.topic: include
ms.date: 01/27/2022
---


## Prerequisites

::: moniker range="azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](../get-started/sign-up-invite-teammates.md). 
* You must be added to a project. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To add new tags to add to work items, you must have **Basic** access or higher and have the project-level **Create new tag definition** permissions set to **Allow**. By default, the **Contributors** group has this permission set. Even if the permission is explicitly set for a **Stakeholder**, they won't have permission to add new tags, as they are prohibited through their access level. To learn more, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
* All project members, even those who belong to the **Readers** group, can email work items. 


::: moniker-end

::: moniker range="< azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md).
* You must be added to a project. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* To add new tags to add to work items, you must have **Basic** access or higher and have the project-level **Create new tag definition** permissions set to **Allow**. By default, the **Contributors** group has this permission set. Even if the permission is explicitly set for a **Stakeholder**, they won't have permission to add new tags, as they are prohibited through their access level. To learn more, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md).
* All project members, even those who belong to the **Readers** group, can email work items. 
::: moniker-end