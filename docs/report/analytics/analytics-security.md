---
title: Analytics service security, permissions | Team Services  
description: Required permissions necessary to access the Analytics service and how to handle project access denied errors
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 868DC7E6-540C-4F9F-B4A3-7680F1C49FC9
ms.manager: douge
ms.author: kaelli
ms.date: 05/21/2017
---

# Permissions required to access the Analytics service

**Team Services**  

[!INCLUDE [temp](../_shared/analytics-preview.md)]

The Analytics service implements a subset of the security found in the Team Services operational store. The security container in the Analytics service is at the team project level.   

>[!NOTE]  
>The Analytics service does not support security at the area path level. Therefore, if a user has access to a team project and can report on that project but they don't have access to work items in specific areas of that project, they can view data through the Analytics service. Therefore, to protect your data, the best practice is to not allow reporting against the Analytics service for any user who does not have access to all data within a team project.  

Security is granted by giving a user the **View analytics** permission in Visual Studio Team Services. 

<img src="_img/analytics_permission.png" alt="Analytics Permission dialog" style="border: 1px solid #CCCCCC;" />

**The whole truth or nothing at all**

The Analytics service is designed to provide accurate data - not data trimmed by your security settings.  

For example, take the following scenario:

Project A has 200 work items  

Project B has 100 work items  

If a user with access to both projects issues a query that says "give me the sum of all work items in Project A
and Project B" the result will be 300 which is as expected. Now, say that another user who only has access to
Project B makes the same query the expected results might be 100. However, the Analytics service will not return
a result at all in the latter case. Instead, it will return a "Project access denied" error. The reason for this is that
in requesting a specific set of data the service could not return the "truth" so it returns nothing at all. 

This behavior is different from that provided by the current Work Item Query editor which would return you all
the work items in Project B but nothing from Project A without informing you that there is missing data. 

Because of this scenario, the recommended approach for querying the Analytics Service is to always provide
a project level filter instead of using a global query. For information on providing a project level filter, see [WIT analytics](wit-analytics.md).

##Related notes 

-  [Power BI integration overview](../powerbi/overview.md)

<!--- 
[WIT analytics](wit-analytics.md)  
[Aggregate data](aggregated-data-analytics.md)
[Overview of the analytics service](overview-analytics-service.md)
 -->

