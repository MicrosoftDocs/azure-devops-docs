---
title: Analytics permissions and security
titleSuffix: Azure DevOps     
description: Required permissions necessary to access Analytics and how to handle project access denied errors
ms.technology: devops-analytics
ms.assetid: 868DC7E6-540C-4F9F-B4A3-7680F1C49FC9
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 06/18/2021
---


# Set permissions to access Analytics and Analytics views

[!INCLUDE [temp](../includes/version-azure-devops.md)]

To use [Power BI for Azure DevOps](overview.md) or to exercise an OData query for Analytics, you must be granted the **View analytics** permission. By default, the **View analytics** permission is set for all Contributors with Basic access. Users granted Stakeholder access don't have permissions to view or edit Analytics views.  

To edit an Analytics view or connect to an Analytics view in Power BI, you must have permissions for that view. 

If you are just adding an Analytics widget to a dashboard or viewing an Analytics widget added to a dashboard, then no special permissions are required. 

> [!NOTE]  
> Analytics does not support security at the area path level. Therefore, if a user has access to a project and can report on that project but they don't have access to work items in specific areas of that project, they can view data through Analytics. Therefore, to protect your data, the best practice is to not allow reporting against Analytics for any user who does not have access to all data within a project.  

## Prerequisites 

- To change permissions at the project level, you need to be a member of the Project Administrators or Project Collection Administrators groups. 
  
To learn more about working with permissions, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).


## Set permissions 

You grant or restrict permissions to a user by setting one or more permissions for Analytics to **Allow** or **Deny** through the project **Permissions** page. By default, all members of the Contributors group are granted access to edit and delete shared Analytics views, and view Analytics data. 


::: moniker range="= azure-devops"

> [!NOTE]   
> To enable the new user interface for the **Project Permissions Settings Page**, see [Enable preview features](../../project/navigation/preview-features.md).

::: moniker-end

#### [Preview page](#tab/preview-page)

::: moniker range="azure-devops"

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project settings**, and then **Permissions**. 

	![Screenshot Project Settings>Permissions.](../../organizations/security/media/permissions/project-settings-permissions.png)  
  
1. Choose the person or group that you want to modify permissions for and then change their permission assignment. 

	For example, here we set the permissions for Chuck Reinhart, denying him permission to delete or modify shared Analytics views, but allowing him to access Analytics data. 

	:::image type="content" source="media/permissions/set-analytics-permissions.png" alt-text="Screenshot of user project-level permissions, Analytics permissions changed.":::

1. Navigate away from the permissions page when done. Changes you made are automatically saved.  

::: moniker-end

::: moniker range="< azure-devops"

Choose the **Current page** tab for information on adding a user to a project. The **Project Permissions Settings Page** preview feature is only available for Azure DevOps Services at this time.

::: moniker-end


#### [Current page](#tab/current-page) 
  
1. Open **Project Settings > Permissions**. For details, see [Set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md). 
  
1. Choose the person or group that you want to modify permissions for and then change their permission assignment. 

	For example, here we set the permissions for Chuck Reinhart, denying him permission to delete or modify shared Analytics views, but allowing him to access Analytics data. 

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>Security>User>Permissions dialog, set Analytics permissions](media/analytics-security-permissions.png) 

	To learn more about working with permissions, see [Security & identity](../../organizations/security/about-security-identity.md).

1. Choose **Save changes** when done. 
--- 



[!INCLUDE [temp](includes/manage-shared-view-permissions.md)]


<a name="access-denied"></a>

## Access denied response 

Analytics is designed to provide accurate data, not data trimmed by your security settings.  

For example, take the following scenario:

- Project A has 200 work items  
- Project B has 100 work items  

If a user with access to both projects issues a query that says "give me the sum of all work items in Project A
and Project B" the result will be 300 which is as expected. Now, say that another user who only has access to
Project B makes the same query, you might expect the query to return 100. However, Analytics will not return
a result at all in the latter case. Instead, it will return a "Project access denied" error. It does this because it could not return the entire dataset, so it returns nothing at all.  

This behavior is different from that provided by the current Work Item Query editor, which would return all
the work items in Project B but nothing from Project A without informing you that there is missing data. 

Because of this scenario, the recommended approach for querying Analytics is to always provide
a project level filter instead of using a global query. For information on providing a project level filter, see [WIT analytics](../extend-analytics/wit-analytics.md).

## Related articles 

-  [Set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md)
-  [Power BI integration overview](overview.md)