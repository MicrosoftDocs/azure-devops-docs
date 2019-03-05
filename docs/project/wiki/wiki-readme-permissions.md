---
title: Default Wiki and social tool permissions in Azure DevOps
titleSuffix: Azure DevOps 
description: Default permission and access assignments made to social tools such as alerts, Wiki, and feedback for Azure DevOps 
ms.technology: devops-collab
ms.prod: devops
ms.assetid:  
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: reference
ms.date: 12/17/2018  
monikerRange: '>= tfs-2017'
---

# Default permissions and access set for collaboration tools

[!INCLUDE [temp](../../_shared/version-tfs-2017-through-vsts.md)]

Collaboration tools encompass READMEs, team project Wikis, notifications, feedback, and semantic search.  

Most of these tools are available to you if you're added as a team member or a member of the Contributors group for a team project. The most common built-in groups include Readers, Contributors, and Project Administrators. For a simplified view of all default permissions assigned to built-in groups, see [Default permissions and access](../../organizations/security/permissions-access.md).  

Stakeholders have limited access to view charts and dashboards. To learn more, see [About access levels](../../organizations/security/access-levels.md).

[!INCLUDE [temp](../../organizations/security/_shared/wiki.md)]

## Manage permissions

To manage permissions for a collaboration tool, see the following articles:

- [Manage README & Wiki permissions (security)](manage-readme-wiki-permissions.md?toc=/azure/devops/project/wiki/toc.json&bc=/azure/devops/project/wiki/breadcrumb/toc.json)
- [Set feedback permissions](../feedback/give-permissions-feedback.md?toc=/azure/devops/project/feedback/toc.json&bc=/azure/devops/project/wiki/project/feedback/toc.json )

To manage notifications, see the following articles:

- [Manage personal notifications](../../notifications/howto-manage-personal-notifications.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)
- [Manage team notifications](../../notifications/howto-manage-team-notifications.md?toc=/azure/devops/notifications/toc.json&bc=/azure/devops/notifications/breadcrumb/toc.json)

>[!NOTE]
>There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/ref/command-line/tfssecurity-cmd#collection-level-permissions).

## Related articles

- [Work across projects](../navigation/work-across-projects.md)
- [Add a team administrator](../../organizations/settings/add-team-administrator.md)
- [Permissions and groups reference](../../organizations/security/permissions.md)
