---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 01/13/2025
---
 

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | Anyone with access to the project, including Stakeholders, can view Analytics views. For more information about other prerequisites regarding service and feature enablement and general data tracking activities, see [Permissions and prerequisites to access Analytics](../analytics/analytics-permissions-prerequisites.md). |
|**Services**| **Azure Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.|

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views. For Stakeholders: **View Analytics** permission set to **Allow**.<br>- For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).<br>- For more information about other prerequisites regarding service and feature enablement and general data tracking activities, see [Permissions and prerequisites to access Analytics](../analytics/analytics-permissions-prerequisites.md). |
|**Services**| - **Azure Boards** enabled. If it's disabled, **Analytics views** doesn't display. [Reenable it](../../organizations/settings/set-services.md) either for individual users or for the entire organization.<br>- [Analytics service](../dashboards/analytics-extension.md) enabled. Be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to enable it.|

::: moniker-end
