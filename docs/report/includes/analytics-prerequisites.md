---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 01/13/2025
---

<a id="prerequisites">  </a>

## Prerequisites  

::: moniker range="azure-devops"

- [**Access:**](../../organizations/security/access-levels.md):[Project member](../../organizations/accounts/add-organization-users.md) with at least **Basic** access. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- **Service:** **Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.
- **Permissions:** **View Analytics** permission set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- [**Access:**](../../organizations/security/access-levels.md): [Project member](../../organizations/security/add-users-team-project.md) with at least **Basic** access. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- **Permission:** **View Analytics** permission set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).
- **Service:** 
  - [Analytics service](../dashboards/analytics-extension.md) enabled. Be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to enable it. 
  - **Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.

::: moniker-end
