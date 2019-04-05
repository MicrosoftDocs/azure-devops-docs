---
title: Permissions and access for charts and dashboards
titleSuffix: Azure DevOps  
description: How to set permissions and access levels to view and configure charts and dashboards
ms.custom: dashboards
ms.technology: devops-analytics
ms.prod: devops
ms.topic: reference
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 03/20/2018
---

# Default permissions and access for charts and dashboards   

[!INCLUDE [temp](../_shared/version-azure-devops-all.md)]

Team members and members of the of the Contributors group for a project can view charts and dashboards. The most common built-in groups include Readers, Contributors, and Project Administrators. For a simplified view of all default permissions assigned to built-in groups, see [Default permissions and access](../../organizations/security/permissions-access.md).  

Stakeholders have limited access to view charts and dashboards. To learn more, see [About access levels](../../organizations/security/access-levels.md).

For an overview of dashboard and chart features, see [Dashboards, charts, & widgets](overview.md). 



::: moniker range=">= tfs-2015" 
## Dashboards, charts, reports, and widgets

You can define and manage dashboards from the web portal, **Dashboard**. For an overview of dashboard and chart features, see [About dashboards, charts, reports, and widgets](overview.md). You set [dashboard permissions at the team level](dashboard-permissions.md) from the team dashboard page. 

::: moniker-end  

::: moniker range="azure-devops"
Users granted Stakeholder access to private projects can't view or create query charts. Stakeholder access to public projects can view and create query charts.
::: moniker-end    

::: moniker range=">= tfs-2015"
[!INCLUDE [temp](../../organizations/security/_shared/report.md)]

::: moniker-end  

::: moniker range="tfs-2013" 
## Dashboards and charts

You can pin charts to a team dashboard **Home** page. 

[!INCLUDE [temp](../../organizations/security/_shared/report.md)]

::: moniker-end  

::: moniker range=">= azure-devops-2019" 

## Power BI Integration and Analytics views

From the web portal **Analytics views**, you can create and manage Analytics views. An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on the Analytics Service data store. The Analytics Service is the reporting platform for Azure DevOps. To learn more, see [What is the Analytics Service?](../../report/powerbi/what-is-analytics.md). 

You set [permissions](../../report/powerbi/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level. Users with **Stakeholder** access have no access to view or edit Analytics views.

[!INCLUDE [temp](../../organizations/security/_shared/analytics.md)]

::: moniker-end


## Related articles
::: moniker range=">= azure-devops-2019" 

- [Work across projects](../../project/navigation/work-across-projects.md)
- [Add a team administrator](../../organizations/settings/add-team-administrator.md) 
- [Set permissions to access the Analytics Service and Analytics views](../powerbi/analytics-security.md)

::: moniker-end

::: moniker range="<= tfs-2018" 

- [Work across projects](../../project/navigation/work-across-projects.md)
- [Add a team administrator](../../organizations/settings/add-team-administrator.md) 

::: moniker-end

