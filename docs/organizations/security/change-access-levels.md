---
title: Change access levels for users or groups
titleSuffix: Azure DevOps 
description: Learn how to set the access level for a user or group based on their license 
ms.technology: devops-security
ms.assetid: 84B0D454-09A7-414B-A9E0-FE9A9ACD7E99
ms.topic: conceptual
ms.reviewer:  
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 06/02/2019
---

# Change access levels for users or groups

[!INCLUDE [version-all](../../includes/version-all.md)]

Users must be added to a group with the appropriate permissions, to connect and use the functions and features that Azure DevOps Server provides. To use select web portal features, they must also belong to the access level that enables access to that feature. For an overview of each access level, see [About access levels](access-levels.md).

This article applies to managing access levels for project collections defined on an on-premises Azure DevOps. To manage access levels for the Azure DevOps Services (the cloud service), see [Add users to your organization or project](../accounts/add-organization-users.md). For Azure DevOps feature availability, see the [Azure DevOps Feature Matrix](../../user-guide/alm-devops-features.md).

> [!IMPORTANT]  
> Make sure that you select the correct version of this article for Azure DevOps Services or Azure DevOps Server, renamed from Team Foundation Server (TFS). The version selector is located above the table of contents. <br/>
> ![Content version selector](/azure/devops/media/version-selector.png)

For a simplified overview of the permissions that are assigned to the most common groups&mdash;Readers, Contributors, and Project Administrators&mdash;and the Stakeholder access group, see [Permissions and access](permissions-access.md).  

::: moniker range="< azure-devops"

> [!NOTE]  
> Even if you set a user or group's access level, you must [add them to a project](add-users-team-project.md) for them to connect to a project and access features available through a supported client or the web portal.

Make sure to set each user's access level based on what you've purchased for that user. Basic access includes all Stakeholder features - Basic + Test Plans, Advanced and Visual Studio Enterprise subscriber access levels include all Basic features. In the images provided below, the circled features indicate the features made available from the previous access level.

<a id="manage-access" >  </a>

## Prerequisites

* You must be a member of the Administrators group. If you aren't a member, [get added now](/azure/devops/server/admin/add-administrator).
* <a id="add-user" />If you're managing access for a large group of users, it's a best practice to first create either a [Windows group, a group in Active Directory, or Azure DevOps security group](/azure/devops/server/admin/setup-ad-groups), and then add individuals to those groups.

::: moniker-end

::: moniker range="< azure-devops"

## Open access levels

You manage access levels for the collections defined on the application tier. The default access level you set applies to all projects defined for all collections. Users or groups that you add to teams, projects, or collections are granted the access level that you set as the default. To change the access level for a specific group or user, add them specifically to a non-default access level.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

- From the web portal home page for a project collection (for example, `http://MyServer:8080/tfs/DefaultCollection/`), open **Access levels**. If you are at a project level, choose the :::image type="icon" source="/azure/devops/media/icons/project-icon.png" border="false"::: Azure DevOps logo and then choose **Access levels**.

	> [!div class="mx-imgBorder"]  
	> ![web portal, Open Access levels dialog](media/change-access-levels/open-access-levels-2019.png)

	If you don't see **Access levels**, you aren't an administrator and don't have permission. [Here's how to get permissions](/azure/devops/server/admin/add-administrator).

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

From a user context, open **Server Settings** by choosing the :::image type="icon" source="../../boards/media/icons/gear_icon.png" border="false"::: gear icon. The tabs and pages available differ depending on which settings level you access.

- From the web portal home page for a project (for example, `http://MyServer:8080/tfs/DefaultCollection/MyProject/`), open **Server settings**.

	<img src="media/access-levels-2017-open-admin-context.png" alt="TFS 2017, Web portal, open the Server settings admin context" />  

::: moniker-end


::: moniker range=">= tfs-2013 <= tfs-2015"

- From the web portal home page for a project (for example, `http://MyServer:8080/tfs/DefaultCollection/MyProject/`), open administration settings.

	![Open the administration page](media/ALM_CAL_OpenAdminPage.png)

::: moniker-end


<a id="add" /> 

::: moniker range="< azure-devops"

## Add a user or group to an access level 

Changes you make to the access level settings take affect immediately. You can add or change the access level for a user or group through this interface. 

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Select the access level you want to manage.

	For example, here we choose **Basic**, and then **Add** to add a group to Basic access.
 
	> [!div class="mx-imgBorder"]  
	> ![Basic access level, add group](media/change-access-levels/basic-access-2019.png)

1. Enter the name of the user or group into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the matches that meet your choice.

	> [!div class="mx-imgBorder"]  
	> ![Add users and group dialog](media/project-level-permissions-add-a-user.png)  

1. Choose **Save changes**. 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

1. From **Access levels**, select the access level you want to manage. For example, here we choose **Stakeholder**, and then **Add** to add a group to Stakeholder access.

	<img src="media/access-levels-2017-stakeholder-access.png" alt="TFS 2017, Web portal, Server settings admin context, Access levels, Stakeholder access level, Add user or group" />

	If you don't see **Access levels**, you aren't a TFS administrator and don't have permission. [Here's how to get permissions](/azure/devops/server/admin/add-administrator).

2. Enter the name of the user or group into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the matches that meet your choice.

	> [!div class="mx-imgBorder"]  
	> ![Add users and group dialog](media/project-level-permissions-add-a-user.png)  

3. Choose **Save changes**.

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"

1. From the Access levels page, select the access level you want to manage. For example, here we add a group to Stakeholder access.

	<img src="media/change-access-levels-stakeholder-add-user.png" alt="Stakeholder access level, Add Windows user or group" />

	If you don't see **Access levels**, you aren't an administrator and don't have permission. Learn more about [how to get permissions](/azure/devops/server/admin/add-administrator).

::: moniker-end

::: moniker range="< azure-devops"

## Change the access level for a user or group 

To change the access level for a user or group, first remove them from their existing access level, and then add them to the access level you want them to have. 

1. Choose the user or group and then select **Remove**.

	> [!div class="mx-imgBorder"]  
	> ![Collection level permissions and groups](media/change-access-levels/remove-user-from-access-level.png)  

2. Add the user or group to the other access level following the steps provided in the [previous section](#add).

::: moniker-end


<a id="set-default" >  </a>

::: moniker range="< azure-devops"

## Change the default access level

Change the default access level to match the access you have licenses for. If you change the default access level to Stakeholder, all users not explicitly added to the Basic or an advanced level are limited to the features provided through Stakeholder access.

You set an access level from its page. Choose **Set as default access level** as shown.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"
> [!div class="mx-imgBorder"]  
> ![Stakeholder access level, set as default](media/change-access-levels/set-stakeholder-as-default-2019.png)
::: moniker-end

::: moniker range="<= tfs-2018"
<img src="media/change-access-levels-set-default.png" alt="Admin context, Control panel, Access levels, Stakeholder tab, set as default access level" />  
::: moniker-end

::: moniker range="< azure-devops"
> [!IMPORTANT]  
> Service accounts are added to the default access level. If you set Stakeholder as the default access level, you must add the Azure DevOps service accounts to the Basic or an advanced access level  group.
::: moniker-end

<a id="guide-features-access" >  </a>

## Guide to features and access levels

For details on the features available to each access level, see [About access levels](access-levels.md).

## Related articles

- [About access levels](access-levels.md)
- [Export a list of users and their access levels](export-users-audit-log.md)
- [Default permissions and access](permissions-access.md)  
- [Web portal navigation](../../project/navigation/index.md)