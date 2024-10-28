---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/08/2024
---

<a id="prerequisites">  </a>

## Prerequisites  

::: moniker range="azure-devops"

- [**Access:**](../../organizations/security/access-levels.md) Be a [member of a project](../../organizations/accounts/add-organization-users.md) with **Basic** access or higher. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- **Service:** Have **Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.
- **Permissions:** Have the **View Analytics** permission set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- [**Access:**](../../organizations/security/access-levels.md) Be a [member of a project](../../organizations/security/add-users-team-project.md) with **Basic** access or higher. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- **Permission:** Have the **View Analytics** permission set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).
- **Service:** 
  - Have the [Analytics service](../dashboards/analytics-extension.md) installed and enabled.Be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to install or enable it. 
  - Have **Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.

::: moniker-end
