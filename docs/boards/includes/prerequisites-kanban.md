---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 08/03/2022
---


## Prerequisites

Boards are automatically created when you create a project or add a team. Each team has access to their own product and portfolio boards as described in [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md#each-team-gets-their-own-set-of-tools).

::: moniker range="azure-devops"

* You must connect to a project. If you don't have a project yet, [create one](../get-started/sign-up-invite-teammates.md). 
* You must be added to a [team or project](../../organizations/security/add-users-team-project.md). 
* To add work items and exercise all board features, you must be granted [**Basic** access or higher](../../organizations/security/access-levels.md).
* To view or modify work items, your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* Users with **Stakeholder** access for a private project can add work items and update status through drag-and-drop, but cannot update fields displayed on cards. They can add tasks and change task status. 
* Users with **Stakeholder** access for a public project have full access to board features just like users with **Basic** access. 

::: moniker-end

::: moniker range="azure-devops-2022"

* You must connect to a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md).
* You must be added to a [team or project](../../organizations/security/add-users-team-project.md). 
* To add work items and exercise all board features, you must be granted [**Basic** access or higher](../../organizations/security/access-levels.md).
* To view or modify work items, your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* Users with **Stakeholder** access for a private project can add work items and update status through drag-and-drop, but cannot update fields displayed on cards. They can add tasks and change task status.

::: moniker-end

::: moniker range="< azure-devops-2022"

* You must connect to a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md).
* You must be added to a [team or project](../../organizations/security/add-users-team-project.md). 
* To add work items and exercise all board features, you must be granted [**Basic** access or higher](../../organizations/security/access-levels.md).
* To view or modify work items, your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  
* Users with **Stakeholder** access can't exercise these board features: add work items, drag-and-drop work items to update status, or update fields displayed on cards. They can add tasks and change task status. 

::: moniker-end