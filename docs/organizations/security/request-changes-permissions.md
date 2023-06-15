---
title: Request an increase in permission levels
titleSuffix: Azure DevOps
description: How-to guide for finding and increasing permission levels needed to perform select tasks in Azure DevOps.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 02/11/2022
---

# Request an increase in permission levels  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To get access to certain tasks, you might need to request an increase to your permissions or be added to a security role. Typically, you'll do this upon receiving an information or error message indicating you have insufficient permissions. Such a message will indicate the permission levels you need. 

Prior to requesting a change in permission levels, make sure you understand the basics by reviewing [Get started with permissions, access, and security groups](about-permissions.md). 

## Common permissions to request

Most users added to the **Contributors** group are granted the permissions they need to perform most tasks. However, the following tasks require membership in the **Project Administrators** group or a change in permissions. 

- **Work tracking** 
	- Add or change **Area Paths** or **Iteration Paths**: Requires elevated permissions to an Area Path or Iteration Path node. To learn more, see [Set work tracking permissions, Create child nodes](set-permissions-access-work-tracking.md#set-permissions-area-path). 
	- Create shared queries or query folders: Requires elevated permissions set for a shared query folder. To learn more, see [Set work tracking permissions, Set permissions on queries or query folders](set-permissions-access-work-tracking.md#work-item-queries). 
	- Change team settings&mdash;such as Kanban board settings: Requires addition as a team administrator. To learn more, see  [Add or remove a team administrator](../settings/add-team-administrator.md)

- **Source code, Git repositories**, the following tasks require elevated permissions for Git repositories or a specific repository. To learn more, see [Set Git repository permissions](../../repos/git/set-git-repository-permissions.md). 
	- Create, delete, or rename a Git repository 
	- Manage repository permissions 
	- Bypass policies 

The following tasks require membership in the **Project Collection Administrators** group or a change in permissions at the collection-level or addition to a specific role.  

- **Collection-level configurations**
	- Create projects: Requires elevated permissions at the [collection level](change-organization-collection-level-permissions.md).  
	- Add, edit, or manage a process: Requires elevated permissions at the collection level or [process-level permissions](set-permissions-access-work-tracking.md#process-permissions).
	- Install, uninstall, or disable extensions: Requires addition to the [Manager role](../../marketplace/grant-permissions.md) for extensions. 
 
For an overview of built-in security groups and default permission assignments, see [Default permissions and access](permissions-access.md). 

## Prerequisites

- To view permissions, you must be a member of the **Project Valid Users** group. Users added to a project are automatically added to this security group. To learn more, see [View permissions for yourself or others](view-permissions.md).
- To look up an administrator for your project or project collection, you must be a member of the **Project Valid Users** group. 


::: moniker range="azure-devops"  
> [!NOTE]  
> Users added to the **Project-Scoped Users** group won't be able to access **Organization Settings** other than the **Overview** section if the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization. For more information including important security-related call-outs, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 

::: moniker-end  

## Review your permission assignments 

Before you request a change to permission levels, review your permission assignments as described in [View permissions for yourself or others](view-permissions.md). 

Verify that your permission assignments are preventing you from accomplishing a task you need to perform. 
 

## Request a change to a permission level or role change

To request a change or increase in your permission levels, take the following actions: 

1. Identify the permissions you need and at what level. Permissions are set at the object, project, and project-collection level. Also, permissions are granted through various roles. To identify the level and permission you need, review the [Permissions lookup guide](permissions-lookup-guide.md). 

1. Identify a person in your organization who can grant you the permissions you need. For example: 
	- To get permissions to manage team settings, [identify the team administrator for your team](../settings/add-team-administrator.md) or a [member of the Project Administrators group](look-up-project-administrators.md). 
	- To change an object-level permission, identify the owner of the object or a member of the **Project Administrators** group. To learn how, see [Set object-level permissions](set-object-level-permissions.md).
	- To change a project-level permission, identify a member of the **Project Administrators** group. See [Look up a project administrator](look-up-project-administrators.md). 
	- To change a project collection-level permission, identify a member of the **Project Collection Administrators** group. See [Look up a project collection administrator](look-up-project-collection-administrators.md).

1. Contact the person you identified in step 2 and make your request. Make sure you specify the permission you want changed. 


## Refresh or re-evaluate your permissions  

After your permission levels are changed, you may need to refresh your permissions for Azure DevOps to recognize the changes. This step is recommended when a change is made to your permission level, role level, or if you are added to a new or different Azure DevOps, Azure Active Directory, or Active Directory security group. When you are added to a new or different security group, your inherited permissions may change. 

By refreshing your permissions, you cause Azure DevOps to re-evaluate your permission assignments. Otherwise, your permission assignments won't be refreshed until you sign-off, close your browser, and sign-in again. 

To refresh your permissions, choose **User settings**, on the **Permissions** page, you can select **Re-evaluate permissions**. This function reevaluates your group memberships and permissions, and then any recent changes take effect immediately.

:::image type="content" source="media/troubleshoot-permissions/re-evaluate-permissions-button.png" alt-text="Reevaluate permissions control":::


## Related articles

- [Permissions lookup guide](permissions-lookup-guide.md)
- [Default permissions and access](permissions-access.md) 
- [Troubleshoot permissions](troubleshoot-permissions.md)
- [Look up a project administrator](look-up-project-administrators.md) 
- [Look up a project collection administrator](look-up-project-collection-administrators.md)
 