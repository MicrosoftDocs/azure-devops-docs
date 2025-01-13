---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.date: 01/13/2025
ms.topic: include
---


## Prerequisites


::: moniker range="azure-devops"

| Category | Prerequisite |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/accounts/add-organization-users.md) with at least Basic access. If you aren't a project member, [get added now](../../../organizations/accounts/add-organization-users.md). Anyone with access to the project, except stakeholders, can view Analytics views. |
| **Service availability** | For Analytics data availability, enable the corresponding service. For example, to query work tracking data, enable **Boards**. If it's disabled, **Analytics views** don't display. To re-enable a service, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md). |
| **Feature enablement** | To use **Analytics views**, [enable the Analytics views preview feature](../../../project/navigation/preview-features.md) either for individual users or for the organization. |
| **Permissions** | - **View Analytics** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md). <br>- To use Power BI for Azure DevOps or to exercise an OData query for Analytics: **View Analytics** permission set to *Allow*. By default, all Contributors with Basic access are granted access. <br> - To edit shared **Analytics views**: **Edit shared Analytics views** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md). |

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops"

| Category | Prerequisite |
|--------------|-------------|
| **Project access** | [Project member](../../organizations/accounts/add-organization-users.md) with at least **Basic** access. If you aren't a project member, [get added now](../../../organizations/security/add-users-team-project.md). Anyone with access to the project, except stakeholders, can view Analytics views. |
| **Permissions** | - **View Analytics** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md).<br>- To use Power BI for Azure DevOps or to exercise an OData query for Analytics: **View Analytics** permission set to *Allow*. By default, all Contributors with Basic access are granted access. <br>- To edit shared **Analytics views**: **Edit shared Analytics views** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md). |
| **Service availability** | [Analytics](../../dashboards/analytics-extension.md) installed and enabled. Be an account owner or a member of the [**Project Collection Administrators** group](../../../organizations/security/change-organization-collection-level-permissions.md) to add extensions or enable the service. For Analytics data availability, enable the corresponding service. For example, to query work tracking data, enable **Boards**. If it's disabled, **Analytics views** don't display. To re-enable a service, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md). |
| **Feature enablement** | To use **Analytics views**, [enable the Analytics views preview feature](../../../project/navigation/preview-features.md) either for individual users or for the organization. |

::: moniker-end
