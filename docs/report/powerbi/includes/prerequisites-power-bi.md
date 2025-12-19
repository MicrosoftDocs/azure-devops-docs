---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.date: 01/13/2025
ms.topic: include
---

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirement |
|--------------|-------------|
| **Access levels** | [Project member](../../organizations/accounts/add-organization-users.md) with at least **Basic** access. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views. |
| **Services** | Enable **Boards**. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization. |
| **Permissions** | - **View Analytics** permission set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md). By default, all Contributors with Basic access are granted access. <br> - To edit shared **Analytics views**: **Edit shared Analytics views** permission set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md). |

::: moniker-end

::: moniker range="<azure-devops"

| Category | Prerequisite |
|--------------|-------------|
| **Access levels** | [Project member](../../organizations/accounts/add-organization-users.md) with at least **Basic** access. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views. |
| **Services** | - Enable **Boards**. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization. Be an account owner or a member of the [**Project Collection Administrators** group](../../../organizations/security/change-organization-collection-level-permissions.md) to add extensions or enable the service. <br>- For Analytics data availability, enable the corresponding service. For example, to query work tracking data, enable **Boards**. If it's disabled, **Analytics views** doesn't display. To re-enable a service, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md). |
| **Feature enablement** | To use **Analytics views**, [enable the Analytics views preview feature](../../../project/navigation/preview-features.md) either for individual users or for the organization. |
| **Permissions** | - **View Analytics** permission  set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md). By default, all Contributors with Basic access are granted access. <br>- To edit shared **Analytics views**: **Edit shared Analytics views** permission set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md). |

::: moniker-end
