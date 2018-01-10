---
title: Analytics Service permissions and security
titleSuffix: VSTS     
description: Required permissions necessary to access the Analytics Service and how to handle project access denied errors
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 868DC7E6-540C-4F9F-B4A3-7680F1C49FC9
ms.manager: douge
ms.author: kaelli
ms.date: 11/13/2017
---

# Permissions required to access the Analytics Service

**VSTS**  

To use [Power BI for VSTS](index.md) or to exercise an OData query for the Analytics Service, you must be granted the **View analytics** permission. By default, the **View analytics** permission is set for all project valid users. 

If you are just adding an Analytics widget to a dashboard or viewing an Analytics widget added to a dashboard, then no special permissions are required. 

The Analytics Service implements a subset of the security found in the VSTS operational store. The security container in the Analytics Service is at the team project level.   

Security is granted by giving a user the **View analytics** permission through the team project admin Security page.    

<img src="../analytics/_img/analytics-permissions.png" alt="Analytics Permission dialog" style="border: 1px solid #C3C3C3;" />

>[!NOTE]  
>The Analytics Service does not support security at the area path level. Therefore, if a user has access to a team project and can report on that project but they don't have access to work items in specific areas of that project, they can view data through the Analytics Service. Therefore, to protect your data, the best practice is to not allow reporting against the Analytics Service for any user who does not have access to all data within a team project.  

To learn more about working with permissions, see [Security & Identity](../../security/index.md).


<a name="access-denied"></a>
## Access denied response

**The whole truth or nothing at all**

The Analytics Service is designed to provide accurate data, not data trimmed by your security settings.  

For example, take the following scenario:

- Project A has 200 work items  
- Project B has 100 work items  

If a user with access to both projects issues a query that says "give me the sum of all work items in Project A
and Project B" the result will be 300 which is as expected. Now, say that another user who only has access to
Project B makes the same query, you might expect the query to return 100. However, the Analytics Service will not return
a result at all in the latter case. Instead, it will return a "Project access denied" error. It does this because it could not return the entire data set, so it returns nothing at all.  

This behavior is different from that provided by the current Work Item Query editor, which would return all
the work items in Project B but nothing from Project A without informing you that there is missing data. 

Because of this scenario, the recommended approach for querying the Analytics Service is to always provide
a project level filter instead of using a global query. For information on providing a project level filter, see [WIT analytics](../extend-analytics/wit-analytics.md).

## Related notes 

-  [Power BI integration overview](../powerbi/overview.md)
