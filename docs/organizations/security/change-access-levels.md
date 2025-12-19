---
title: Change Access Levels
titleSuffix: Azure DevOps 
description: Learn how to set the access level for a user or group based on their license. 
ms.subservice: azure-devops-security
ms.assetid: 84B0D454-09A7-414B-A9E0-FE9A9ACD7E99
ms.topic: how-to
ms.reviewer:  
ms.author: chcomley
author: chcomley
monikerRange: '< azure-devops'
ms.date: 08/12/2025 
---

# Change access levels

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

> [!NOTE]
> This article applies to Azure DevOps Server (on-premises). To manage access levels for Azure DevOps Services (cloud), see [Add organization users and manage access](../accounts/add-organization-users.md).

This article explains how to use access levels to manage access to the functions and features that Azure DevOps Server provides. Access levels are in addition to permissions granted through security groups, which provide or restrict specific tasks. In this article, learn how to change access levels for users and groups. For more information, see [About access levels](access-levels.md).

For a simplified overview of the permissions that are assigned to the most common groups&mdash;Readers, Contributors, and Project Administrators&mdash;and the Stakeholder access group, see [Default permissions quick reference](permissions-access.md).  

[!INCLUDE [version-selector](../../includes/version-selector.md)]

## Prerequisites

| Category | Requirements |
|-------------|-------------|
| **Permissions** | Member of the [**Project Administrators** group](change-project-level-permissions.md#add-members-to-the-project-administrators-group) |
| **Group membership** | To manage access for a large group of users, create either a [Windows, Active Directory, or Azure DevOps security group](/azure/devops/server/admin/setup-ad-groups), and then add users to those groups |
| **Project access** | Ensure users are [members of the project](add-users-team-project.md) |

## Open access levels

You can manage access levels for the collections defined on the application tier. The default access level affects all the projects in all the collections. When you add users or groups to teams, projects, or collections, they get the default access level. To give a different access level to a certain user or group, you need to add them to a nondefault access level.

- From the web portal home page for a project collection (for example, `http://MyServer:8080/tfs/DefaultCollection/`), open **Access levels**. If you're at a project level, choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo and then choose **Access levels**.

   :::image type="content" source="media/change-access-levels/open-access-levels-2019.png" alt-text="Screenshot of web portal, Open Access levels dialog.":::

	If you don't see **Access levels**, you aren't an administrator and need to [get permission](/azure/devops/server/admin/add-administrator).

## Add a user or group to an access level 

Changes you make to the access level settings take effect immediately.

::: moniker range="<=azure-devops"

1. Select the access level you want to manage.

	For example, here we choose **Basic**, and then **Add** to add a group to Basic access.

   :::image type="content" source="media/change-access-levels/basic-access-2019.png" alt-text="Screenshot of Basic access level, adding group." lightbox="media/change-access-levels/basic-access-2019.png":::

1. Enter the name of the user or group into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the matches that meet your choice.

   :::image type="content" source="media/project-level-permissions-add-a-user.png" alt-text="Screenshot of Add users and group dialog.":::

1. Choose **Save changes**. 

::: moniker-end

## Change the access level for a user or group 

To assign a different access level to a user or group, you need to first delete their current access level and then grant them the new one.

Make sure to set each user's access level based on what you purchased for that user. Basic access includes all Stakeholder features. Advanced and Visual Studio Enterprise subscriber access levels include all Basic features.

1. Choose the user or group and then select **Remove**.

   :::image type="content" source="media/change-access-levels/remove-user-from-access-level.png" alt-text="Screenshot of Collection level permissions and groups page.":::

1. Add the user or group to the other access level following the steps provided in the [previous section](#add-a-user-or-group-to-an-access-level).

## Change the default access level

Make sure the default access level is the same as the access you're licensed for. When you set the default access level to Stakeholder, only the users who are given the Basic or a higher level can access more features than the Stakeholder level.

You can set an access level from its page. Choose **Set as default access level** as shown.

::: moniker range="<=azure-devops"

:::image type="content" source="media/change-access-levels/set-stakeholder-as-default-2019.png" alt-text="Screenshot of Stakeholder access level, set as default.":::

::: moniker-end

> [!IMPORTANT]  
> Service accounts get added to the default access level. If you set Stakeholder as the default access level, you must add the Azure DevOps service accounts to the Basic or an advanced access level group.

## Related content

- [About access levels](access-levels.md)
- [Export a list of users and their access levels](export-users-audit-log.md)
- [Default permissions quick reference](permissions-access.md)  
- [Navigate the Azure DevOps web portal](../../project/navigation/index.md)
