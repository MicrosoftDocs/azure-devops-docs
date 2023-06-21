---
title: Permissions and access for charts and dashboards
titleSuffix: Azure DevOps  
description: How to set permissions and access levels to view and configure charts and dashboards in Azure DevOps.
ms.custom: dashboards
ms.subservice: azure-devops-analytics
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---

# Default permissions and access for charts and dashboards   

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Team members and members of the Contributors group for a project can view charts and dashboards. The most common built-in groups include Readers, Contributors, and Project Administrators. For a simplified view of all default permissions assigned to built-in groups, see [Default permissions and access](../../organizations/security/permissions-access.md).  

Stakeholders have limited access to view charts and dashboards. To learn more, see [About access levels](../../organizations/security/access-levels.md).

For an overview of dashboard and chart features, see [Dashboards, charts, & widgets](overview.md). 


## Dashboards, charts, reports, and widgets

You can define and manage dashboards from the web portal, **Dashboard**. For an overview of dashboard and chart features, see [About dashboards, charts, reports, and widgets](overview.md). You set [dashboard permissions at the team level](dashboard-permissions.md) from the team dashboard page. 

::: moniker range="azure-devops"
Users granted Stakeholder access to private projects can't view or create query charts. Stakeholder access to public projects can view and create query charts.
::: moniker-end    



[!INCLUDE [temp](../../organizations/security/includes/report.md)]


::: moniker range=">= azure-devops-2019" 

## Power BI Integration and Analytics views

From the web portal **Analytics views**, you can create and manage Analytics views. An Analytics view provides a simplified way to specify the filter criteria for a Power BI report based on Analytics data. Analytics is the reporting platform for Azure DevOps. To learn more, see [What is Analytics?](../../report/powerbi/what-is-analytics.md). 

You set [permissions](../../report/powerbi/analytics-security.md) for the service at the project level, and for shared Analytics views at the object level. Users with **Stakeholder** access have no access to view or edit Analytics views.

[!INCLUDE [temp](../../organizations/security/includes/analytics.md)]

::: moniker-end


## Related articles

::: moniker range=">= azure-devops-2019" 

- [Work across projects](../../project/navigation/work-across-projects.md)
- [Add a team administrator](../../organizations/settings/add-team-administrator.md) 
- [Set permissions to access Analytics data and Analytics views](../powerbi/analytics-security.md)

::: moniker-end

::: moniker range="tfs-2018" 

- [Work across projects](../../project/navigation/work-across-projects.md)
- [Add a team administrator](../../organizations/settings/add-team-administrator.md) 

::: moniker-end

