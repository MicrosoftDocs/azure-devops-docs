---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 10/28/2024
---

<a id="permissions">  </a>

::: moniker range="azure-devops"
- **Access:** 
  - Be a [member of a project](../../organizations/security/add-users-team-project.md) with at least **Basic** access.
  - To add a widget to a team dashboard, be a member of the team.
- **Permissions:** Be a [team administrator](../../organizations/settings/add-team-administrator.md) or project administrator, or have specific [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you.
- **Feature enablement:** Have **Boards** enabled. If disabled, none of the work tracking Analytics widgets display. To re-enable it, see [Turn a service on or off](../../organizations/settings/set-services.md).
- **Task awareness:** Be aware of the required and recommended tasks, listed later in this article.

::: moniker-end

::: moniker range=" < azure-devops"
- **Access:** 
  - Be a [member of a project](../../organizations/security/add-users-team-project.md) with at least **Basic** access.
  - To add a widget to a team dashboard, be a member of the team.
- **Permissions:** Be a [team administrator](../../organizations/settings/add-team-administrator.md) or project administrator, or have specific [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you.
- **Feature enablement:** 
  - Have [Analytics installed and enabled](../dashboards/analytics-extension.md). Be a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to add extensions or enable the service. Organization owners are automatically added to this group.
  - Have **Boards** enabled. If disabled, none of the work tracking Analytics widgets display. To re-enable it, see [Turn a service on or off](../../organizations/settings/set-services.md).

::: moniker-end
