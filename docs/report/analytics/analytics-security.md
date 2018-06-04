---
title: Analytics Service permissions and security
titleSuffix: VSTS     
description: Required permissions necessary to access the Analytics Service and how to handle project access denied errors
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: 868DC7E6-540C-4F9F-B4A3-7680F1C49FC9
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: 'vsts'
ms.date: 11/13/2017
---

# Set permissions to access the Analytics Service and Analytics views

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

To use [Power BI for VSTS](index.md) or to exercise an OData query for the Analytics Service, you must be granted the **View analytics** permission. By default, the **View analytics** permission is set for all project valid users. 

To edit an Analytics view or connect to an Analytics view in Power BI, you must have permissions for that view. 

If you are just adding an Analytics widget to a dashboard or viewing an Analytics widget added to a dashboard, then no special permissions are required. 

## Set permissions to access the Analytics Service

The Analytics Service implements a subset of the security found in the VSTS operational store. The security container in the Analytics Service is at the team project level.   

You grant permissions to a user by setting the **View analytics** permission to Allow through the team project admin Security page.    

0. Open the admin context from the user/team project context, click the ![](../../_img/icons/gear-icon.png) gear settings icon, and click the **Security** tab.
  
0. Choose the group that you want to modify permissions for and then set the **View analytics** permission. 

	<img src="./_img/analytics-permissions.png" alt="Analytics Permission dialog" style="border: 1px solid #C3C3C3;" />

	To learn more about working with permissions, see [Security & Identity](../../security/index.md).

> [!NOTE]  
> The Analytics Service does not support security at the area path level. Therefore, if a user has access to a team project and can report on that project but they don't have access to work items in specific areas of that project, they can view data through the Analytics Service. Therefore, to protect your data, the best practice is to not allow reporting against the Analytics Service for any user who does not have access to all data within a team project.  


[!INCLUDE [temp](_shared/manage-shared-view-permissions.md)]


<a name="access-denied"></a>
## Access denied response 

The Analytics Service is designed to provide accurate data, not data trimmed by your security settings.  

For example, take the following scenario:

- Project A has 200 work items  
- Project B has 100 work items  

If a user with access to both projects issues a query that says "give me the sum of all work items in Project A
and Project B" the result will be 300 which is as expected. Now, say that another user who only has access to
Project B makes the same query, you might expect the query to return 100. However, the Analytics Service will not return
a result at all in the latter case. Instead, it will return a "Project access denied" error. It does this because it could not return the entire dataset, so it returns nothing at all.  

This behavior is different from that provided by the current Work Item Query editor, which would return all
the work items in Project B but nothing from Project A without informing you that there is missing data. 

Because of this scenario, the recommended approach for querying the Analytics Service is to always provide
a project level filter instead of using a global query. For information on providing a project level filter, see [WIT analytics](../extend-analytics/wit-analytics.md).

## Related articles 

-  [Power BI integration overview](../powerbi/overview.md)
