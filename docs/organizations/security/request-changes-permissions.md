---
title: Request an increase in permission levels
titleSuffix: Azure DevOps
description: Learn how to request and increase permission levels in Azure DevOps to perform specific tasks. Follow this guide to identify and resolve permission issues.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 03/09/2026
---

# Request a permission increase

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To access certain tasks, you might need to request higher permissions or be assigned to a specific security role. This scenario typically occurs when you encounter an informational or error message indicating insufficient permissions, which specify the required permission levels.

## Common permissions to request

Most members of the **Contributors** group have the permissions they need to perform most tasks. However, the following tasks require membership in the **Project Administrators** group or a change in permissions. 

- **Work tracking**: 
	- **Add or change area paths or iteration paths**: Requires elevated permissions to an area path or iteration path node. For more information, see [Set work tracking permissions, Create child nodes](set-permissions-access-work-tracking.md#set-permissions-area-path). 
	- **Create shared queries or query folders**: Requires elevated permissions set for a shared query folder. For more information, see [Set work tracking permissions, Set permissions on queries or query folders](set-permissions-access-work-tracking.md#work-item-queries). 
	- **Change team settings, such as board settings**: Requires addition as a team administrator. For more information, see  [Add or remove a team administrator](../settings/add-team-administrator.md).

- **Source code, Git repositories**: The following tasks require elevated permissions for Git repositories or a specific repository. For more information, see [Set Git repository permissions](../../repos/git/set-git-repository-permissions.md). 
	- Create, delete, or rename a Git repository 
	- Manage repository permissions 
	- Bypass policies 

The following tasks require membership in the **Project Collection Administrators** group or a change in permissions at the collection-level or addition to a specific role.  

- **Collection-level configurations**:
	- **Create projects**: Requires elevated permissions at the [collection level](change-organization-collection-level-permissions.md).  
	- **Add, edit, or manage a process**: Requires elevated permissions at the collection level or [process-level permissions](set-permissions-access-work-tracking.md#process-permissions).
	- **Install, uninstall, or disable extensions**: Requires addition to the [Manager role](../../marketplace/grant-permissions.md) for extensions. 
 
For an overview of built-in security groups and default permission assignments, see [Default permissions and access](permissions-access.md). 

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| Permissions | To view permissions and to look up a project administrator: Member of the **Project Valid Users** group. Project members are automatically part of this security group. For more information, see [View permissions for yourself or others](view-permissions.md). |
| Knowledge | Before you request a permission change, ensure you understand the basics by reviewing [Get started with permissions, access, and security groups](about-permissions.md). |

::: moniker range="azure-devops"  
> [!NOTE]  
> If you add users to the **Project-scoped users** group and enable the **Limit user visibility and collaboration to specific projects** preview feature for the organization, those users can't access **Organization settings** other than the **Overview** section. For more information, including important security-related call-outs, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 

::: moniker-end  

## Review your permission assignments 

Before you request a change to permission levels, review your permission assignments as described in [View permissions for yourself or others](view-permissions.md). 

Verify that your permission assignments prevent you from accomplishing a task you need to perform. 

## Request a change to a permission level or role change

To request a change or increase in your permission levels, take the following actions: 

1. Identify the permissions you need and at what level. Set permissions at the object, project, and project-collection levels. Also, grant permissions through various roles. To identify the level and permission you need, review the [Permissions lookup guide](permissions-lookup-guide.md). 

1. Identify a person in your organization who can grant you the permissions you need. For example: 
	- To get permissions to manage team settings, [identify the team administrator for your team](../settings/add-team-administrator.md) or a [member of the Project Administrators group](look-up-project-administrators.md). 
	- To change an object-level permission, identify the owner of the object or a member of the **Project Administrators** group. To learn how, see [Set object-level permissions](set-object-level-permissions.md).
	- To change a project-level permission, identify a member of the **Project Administrators** group. See [Look up a project administrator](look-up-project-administrators.md). 
	- To change a project collection-level permission, identify a member of the **Project Collection Administrators** group. See [Look up a project collection administrator](look-up-project-collection-administrators.md).

1. Contact the person you identified in step 2 and make your request. Ensure you specify the permission you want changed. 

## Refresh or reevaluate your permissions  

After changing your permission levels, you might need to refresh your permissions for Azure DevOps to recognize the updates. Refresh your permissions when:

- **Permission or role changes:** You modify your permission level or role.
- **Security group modifications:** You add yourself to a new or different security group in Azure DevOps, Microsoft Entra ID, or Active Directory.

Getting added to a new security group can alter your inherited permissions.

**Refresh your permissions** to prompt Azure DevOps to reevaluate your permission assignments immediately. If you don't refresh, your permission assignments don't update until you sign out, close your browser, and sign back in.

:::image type="content" source="media/troubleshoot-permissions/re-evaluate-permissions-button.png" alt-text="Reevaluate permissions control":::

## Related content

- [Permissions lookup guide](permissions-lookup-guide.md)
- [Default permissions and access](permissions-access.md) 
- [Troubleshoot permissions](troubleshoot-permissions.md)
- [Look up a project administrator](look-up-project-administrators.md) 
- [Look up a project collection administrator](look-up-project-collection-administrators.md)
 
