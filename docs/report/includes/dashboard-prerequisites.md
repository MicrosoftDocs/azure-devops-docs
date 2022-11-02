---
ms.subservice: azure-devops-analytics
ms.topic: include
ms.date: 10/06/2022
---

<a id="permissions">  </a>

## Prerequisites  

::: moniker range="azure-devops"

- You must be a member of a project. If you don't have a project yet, [create one](../../organizations/accounts/set-up-vs.md). 
- If you haven't been added as a project member, [get added now](../../organizations/accounts/add-organization-users.md).
- Anyone with access to a project, including [**Stakeholders**](../../organizations/security/get-started-stakeholder.md), can view dashboards.
- To add, edit, or manage a team dashboard, you must have **Basic** access, be a member of the team, a member of the Project Adminstrators group, or have [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you.  
- To add, edit, or manage a project dashboard, you must have **Basic** access or have [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you for the select project dashboard.  
- 
::: moniker-end


::: moniker range=">= azure-devops-2020 <= azure-devops-2022"

- You must be a member of a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md). 
- If you haven't been added as a project member, [get added now](../../organizations/accounts/add-organization-users.md).
- Anyone with access to a project, including [**Stakeholders**](../../organizations/security/get-started-stakeholder.md), can view dashboards.
- To add, edit, or manage a team dashboard, you must have **Basic** access, be a member of the team, a member of the Project Adminstrators group, or have [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you. Team members added to the [team administrator role](../../organizations/settings/add-team-administrator.md) can manage permissions for the team. 
- To add, edit, or manage a project dashboard, you must have **Basic** access or have [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you for the select project dashboard. 
- For [Analytics widgets](../dashboards/analytics-widgets.md) to work within a dashboard, you must have [Analytics enabled](../dashboards/analytics-extension.md). 

::: moniker-end


::: moniker range="azure-devops-2019"

- You must be a member of a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md). 
- If you haven't been added as a project member, [get added now](../../organizations/security/add-users-team-project.md).
- Install or enable the [Analytics Marketplace extension](../dashboards/analytics-extension.md). Analytics widgets aren't available if Analytics isn't installed, enabled, or running.  
- Anyone with access to a project, including [**Stakeholders**](../../organizations/security/get-started-stakeholder.md), can view dashboards.
- To add, edit, or manage a team dashboard, you must have **Basic** access, be a member of the team, a member of the Project Adminstrators group, or have [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you. Team members added to the [team administrator role](../../organizations/settings/add-team-administrator.md) can manage permissions for the team.
- For [Analytics widgets](../dashboards/analytics-widgets.md) to work within a dashboard, you must have [Analytics enabled](../dashboards/analytics-extension.md). 

::: moniker-end


::: moniker range="tfs-2018"

- You must be a member of a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md). 
- If you haven't been added as a project member, [get added now](../../organizations/security/add-users-team-project.md).
- Anyone with access to a project, including [**Stakeholders**](../../organizations/security/get-started-stakeholder.md), can view dashboards.
- To add, edit, or manage a team dashboard, you must have **Basic** access, be added to the [team administrator role](../../organizations/settings/add-team-administrator.md), be a member of the Project Adminstrators group, or have [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you.  Team administrators can manage permissions for the team. 

::: moniker-end

> [!NOTE]
> Data displayed within a chart or widget is subject to permissions granted to the signed in user. For example, if a user doesn't have permissions to view work items under an area path, then those items won't display in a query results widget in a dashboard. To learn more, see [FAQs on Azure DevOps dashboards, charts, and reports, Access and permissions](../dashboards/faqs.yml).