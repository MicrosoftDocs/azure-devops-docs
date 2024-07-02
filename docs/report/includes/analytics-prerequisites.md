---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/02/2024
---

<a id="prerequisites">  </a>

## Prerequisites  

::: moniker range="azure-devops"

- [**Access level:**](../../organizations/security/access-levels.md) You must be a [member of a project](../../organizations/accounts/add-organization-users.md) with **Basic** access or higher. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- **Service:** **Boards** must be enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.
- **Permission:** The **View Analytics** permission must be set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- [**Access level:**](../../organizations/security/access-levels.md) You must be a [member of a project](../../organizations/security/add-users-team-project.md) with **Basic** access or higher. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- **Service:** 
  - The [Analytics service](../dashboards/analytics-extension.md) must be installed and enabled.You must be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to install or enable it. 
  - **Boards** must be enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.
- **Permission:** The **View Analytics** permission must be set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).

::: moniker-end