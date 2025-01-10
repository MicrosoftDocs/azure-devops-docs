---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.date: 12/18/2020
ms.topic: include
---


## Prerequisites

::: moniker range="azure-devops"

- [**Access level:**](../../organizations/security/access-levels.md) Be a [member of a project](../../organizations/accounts/add-organization-users.md) with at least **Basic** access. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- - **Service:** **Boards** must be enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.
- **Permission:** 
  - The **View Analytics** permission must be set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md). By default, all Contributors with Basic access are granted access. To edit shared **Analytics views**, have the ***Edit shared Analytics views** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md).

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- [**Access level:**](../../organizations/security/access-levels.md) Be a [member of a project](../../organizations/accounts/add-organization-users.md) with at least **Basic** access. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views.
- **Service:** 
  - **Boards** must be enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization. Be an account owner or a member of the [**Project Collection Administrators** group](../../../organizations/security/change-organization-collection-level-permissions.md) to add extensions or enable the service. 
  - For Analytics data to be available, the corresponding service must be enabled. For example, to query work tracking data, **Boards** must be enabled. If it is disabled, **Analytics views** won't be displayed. To re-enable a service, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md)
- To use **Analytics views**, [enable the Analytics views preview feature](../../../project/navigation/preview-features.md) either for individual users or for the organization. 
- **Permission:** 
  - The **View Analytics** permission must be set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md). By default, all Contributors with Basic access are granted access. To edit shared **Analytics views**, have the ***Edit shared Analytics views** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md).

::: moniker-end
