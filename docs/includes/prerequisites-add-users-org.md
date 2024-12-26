---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 02/10/2022
---



::: moniker range="azure-devops"  
 
* **Project membership**: Be a member of a [project](../organizations/projects/create-project.md). 
* **Permissions**: 
  * To add users to or remove users from a team, be a [Team Administrator](../organizations/settings/add-team-administrator.md) or be a member of one of the administrative groups.  
  * To add users to or remove users from a project, be a member of the [**Project Administrators** group](../organizations/security/change-project-level-permissions.md).
  * To add users or manage users for an organization, be a member of the [**Project Collection Administrators** group](../organizations/security/change-organization-collection-level-permissions.md). Organization owners are automatically members of this group.
* **Policies**: If your organization is connected to Microsoft Entra ID, enable the [Allow team and project administrators to invite new users](../organizations/security/restrict-invitations.md) policy for team administrators or members of the Project Administrators group for adding new users. 


::: moniker-end
