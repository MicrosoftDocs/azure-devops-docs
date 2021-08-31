---
title: Default Wiki and social tool permissions
titleSuffix: Azure DevOps 
description: Default permission and access assignments made to social tools such as alerts, Wiki, and feedback for Azure DevOps 
ms.technology: devops-collab
ms.assetid:  
ms.author: chcomley
author: chcomley
ms.topic: reference
ms.date: 12/17/2018  
monikerRange: '>= tfs-2017'
---

# Default permissions and access set for collaboration tools

[!INCLUDE [temp](../../includes/version-tfs-2017-through-vsts.md)]

Collaboration tools encompass READMEs, team project Wikis, notifications, feedback, and search.  

Most of these tools are available to you if you're added as a team member or a member of the Contributors group for a team project. The most common built-in groups include Readers, Contributors, and Project Administrators. For a simplified view of all default permissions assigned to built-in groups, see [Default permissions and access](../../organizations/security/permissions-access.md).  

Stakeholders have limited access to view charts and dashboards. To learn more, see [About access levels](../../organizations/security/access-levels.md).

[!INCLUDE [temp](../../organizations/security/includes/wiki.md)]

## Manage permissions

To manage permissions for a collaboration tool, see the following articles:

- [Manage README & Wiki permissions (security)](manage-readme-wiki-permissions.md?toc=/azure/devops/project/wiki/toc.json&bc=/azure/devops/project/wiki/breadcrumb/toc.json)
- [Set feedback permissions](../feedback/give-permissions-feedback.md?toc=/azure/devops/project/feedback/toc.json&bc=/azure/devops/project/wiki/project/feedback/toc.json )

To manage notifications, see the following articles:

- [Manage personal notifications](../../notifications/manage-your-personal-notifications.md?bc=%252fazure%252fdevops%252fnotifications%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fnotifications%252ftoc.json)
- [Manage team notifications](../../notifications/manage-team-group-global-organization-notifications.md?bc=%252fazure%252fdevops%252fnotifications%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252fnotifications%252ftoc.json)

>[!NOTE]
>There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).

## Related articles

- [Work across projects](../navigation/work-across-projects.md)
- [Add a team administrator](../../organizations/settings/add-team-administrator.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)