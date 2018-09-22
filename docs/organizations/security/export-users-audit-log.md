---
title: Export access level audit log 
titleSuffix: Azure DevOps & TFS
description: Determine the access level-stakeholder, basic, advanced, or VS Enterprise-granted to user accounts  
ms.technology: devops-security
ms.prod: devops
ms.assetid: 
ms.topic: conceptual
ms.manager: douge
ms.reviewer: jrice 
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 09/05/2018
---

# Export a list of users and their access levels

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

<a id="export-audit-log" >  </a>

::: moniker range="vsts" 

You can get a list of users and groups that have access to your Azure DevOps Services account by exporting the audit log. The audit log also indicates which access level has been granted.   

[!INCLUDE [temp](../../_shared/new-navigation.md)]  

::: moniker-end   

# [New navigation](#tab/new-nav)

::: moniker range="vsts"  

0. Choose the ![ ](/azure/devops/_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. Then choose **Admin settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](/azure/devops/_shared/_img/settings/open-admin-settings-vert.png)  

0. Choose **Users**, and then **Export users**. 

	> [!div class="mx-imgBorder"]  
	> ![Export users](_img/export-users-audit/export-new-nav.png)

::: moniker-end  

::: moniker range="<= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  

::: moniker-end  

# [Previous navigation](#tab/previous-nav)

::: moniker range="vsts"  

0. Choose the ![ ](/azure/devops/_img/icons/gear_icon.png) gear icon and select **Organization settings**.

	> [!div class="mx-imgBorder"]  
	> ![Open Organization Settings](/azure/devops/_shared/_img/settings/open-account-settings.png)  

	> [!IMPORTANT]  
	>If you don't see the **Organization settings** option, then you're working from an on-premises TFS. 
	
0. Choose **Users** and **Export users**. 

	<img src="_img/export-users-audit/go-to-users-hub.png" alt="From Users, choose Export users" style="border: 1px solid #C3C3C3;" />  

0. The user log file is saved as a .csv file to your Download folder.   
	To determine the access level assigned to each user or group, open the file in Excel.

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

You can get a list of users and groups that have access to your Team Foundation Server (TFS) by exporting the audit log. The audit log also indicates which access level has been granted.  

0. From the web portal home page for a project, choose the ![ ](/azure/devops/_img/icons/gear_icon.png) gear icon and select **Server settings**. 

	<img src="_img/access-levels-2017-open-admin-context.png" alt="TFS 2017, Web portal, open the Server settings admin context" style="border: 1px solid #C3C3C3;" />  

0. Choose **Access levels**, and then **Export audit log**. 

	<img src="_img/export-users-audit/export-audit-log-tfs.png" alt="Control panel, admin context, Export audit log" style="border: 1px solid #C3C3C3;" />  

0. The user log file is saved as a .csv file to your Download folder.  
	To determine the access level assigned to each user or group, open the file in Excel.

::: moniker-end

## Related articles

- For a description of access levels, see [About access levels](access-levels.md)
- To manage access levels for Azure DevOps, see [Manage users and access in Azure DevOps](../accounts/add-organization-users.md) 
- To manage access levels for TFS, see [Change access levels](change-access-levels.md)
- For Azure DevOps feature availability, see the [Azure DevOps Feature Matrix](https://visualstudio.microsoft.com/pricing/visual-studio-online-feature-matrix-vs)
- For default feature permission and access assignments, see [Default permissions and access](permissions-access.md). 
