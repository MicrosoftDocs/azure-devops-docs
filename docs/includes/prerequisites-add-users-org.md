---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 01/13/2025
---



::: moniker range="azure-devops"  

| Category | Requirements |
|--------------|-------------|
| **Project access** | Member of a [project](../organizations/projects/create-project.md). |
| **Permissions** | - To add users to or remove users from a team: [Team Administrator](../organizations/settings/add-team-administrator.md) or member of one of the administrative groups. <br> - To add users to or remove users from a project: Member of the [**Project Administrators** group](../organizations/security/change-project-level-permissions.md). <br> - To add users or manage users for an organization: Member of the [**Project Collection Administrators** group](../organizations/security/change-organization-collection-level-permissions.md). Organization owners are automatically members of this group. |
| **Policies** | If your organization is connected to Microsoft Entra ID: Enable the [Allow team and project administrators to invite new users](../organizations/security/restrict-invitations.md) policy for team administrators or members of the Project Administrators group for adding new users. |

::: moniker-end
