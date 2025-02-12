---
ms.subservice: azure-devops-analytics
ms.topic: include
ms.date: 10/28/2024
---


::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least **Basic** access or specific [dashboard permissions](../dashboards/dashboard-permissions.md). |
| **Permissions** | To add, edit, or manage a team dashboard: Member of the team and member of the **Project Administrators** group. |

::: moniker-end

::: moniker range=">= azure-devops-2020 <= azure-devops-2022"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least **Basic** access or specific [dashboard permissions](../dashboards/dashboard-permissions.md). |
| **Permissions** | To add, edit, or manage a team dashboard: Member of the team and member of the **Project Administrators** group. |
|**Tools** | For [Analytics widgets](../dashboards/analytics-widgets.md) to work with your dashboard: [Analytics enabled](../dashboards/analytics-extension.md).|

::: moniker-end

::: moniker range="azure-devops-2019"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md)<br>- At least **Basic** access or specific [dashboard permissions](../dashboards/dashboard-permissions.md). |
| **Permissions** | To add, edit, or manage a team dashboard: Member of the team and member of the **Project Administrators** group or assigned to the [team administrator role](../../organizations/settings/add-team-administrator.md). |
|**Tools** | - [Analytics Marketplace extension](../dashboards/analytics-extension.md). Analytics widgets aren't available if Analytics isn't installed, enabled, or running.<br>- For [Analytics widgets](../dashboards/analytics-widgets.md) to work with your dashboard: [Analytics enabled](../dashboards/analytics-extension.md).|

::: moniker-end

> [!NOTE]
> Data displayed within a chart or widget is subject to the permissions granted to the signed-in user. For example, if a user doesn't have permissions to view work items under a specific area path, those items don't display in a query results widget on the dashboard. For more information, see [FAQs about using dashboards](../dashboards/faqs.yml).
