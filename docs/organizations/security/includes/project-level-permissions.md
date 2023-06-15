---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 02/28/2022
---

::: moniker range=">= azure-devops-2019"
The following table lists the permissions assigned at the project-level. All of these permissions are granted to members of the **Project Administrators** group, except for the **Delete shared Analytics views** and **Edit shared Analytics views** permissions which are not set. For a description of each permission, see [Permissions and groups reference, Groups](../permissions.md#project-level-permissions).
::: moniker-end

::: moniker range="< azure-devops-2019"
The following table lists the permissions assigned at the project-level. All of these permissions are granted to members of the **Project Collection Administrators** group. For a description of each permission, see [Permissions and groups reference, Groups](../permissions.md#project-level-permissions).
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
> [!NOTE]   
> Permissions associated with Analytics requires that the Inherited process model is selected for an on-premises project collection. 
::: moniker-end

:::row:::
   :::column span="":::
      **General**  
      ::: moniker range="azure-devops"
      - Delete team project
      - Edit project-level information
      - Manage project properties
      - Rename team project
      - Suppress notifications for work item updates
      - Update project visibility
      - View project-level information  
      ::: moniker-end
      ::: moniker range=">= azure-devops-2019 < azure-devops"
      - Delete team project
      - Edit project-level information
      - Manage project properties
      - Rename team project
      - Suppress notifications for work item updates
      - View project-level information  
      ::: moniker-end
      ::: moniker range="< azure-devops-2019"
      - Delete team project
      - Edit project-level information
      - Manage project properties
      - Rename team project
      - View project-level information  
      ::: moniker-end
      **Boards**  
      ::: moniker range="azure-devops"
      - Bypass rules on work item updates
      - Change process of team project 
      - Create tag definition
      - Delete and restore work items
      - Move work items out of this project
      - Permanently delete work items
      ::: moniker-end
      ::: moniker range=">= azure-devops-2019 < azure-devops"
      - Bypass rules on work item updates
      - Change process of team project 
      - Create tag definition
      - Delete and restore work items
      - Move work items out of this project
      - Permanently delete work items
      ::: moniker-end
      ::: moniker range="< azure-devops-2019"
      - Create tag definition
      - Delete and restore work items
      - Permanently delete work items
      ::: moniker-end
   :::column-end:::
   :::column span="":::
      ::: moniker range=">= azure-devops-2019"
      **Analytics**  
      - Delete shared Analytics views
      - Edit shared Analytics views
      - View analytics  
      ::: moniker-end
      **Test Plans**  
      - Create test runs
      - Delete test runs
      - Manage test configurations
      - Manage test environments
      - View test runs 
   :::column-end:::
:::row-end:::