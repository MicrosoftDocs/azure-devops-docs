---
ms.subservice: azure-devops-analytics
ms.topic: include
ms.date: 05/07/2025
---

::: moniker range="azure-devops"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access or specific [dashboard permissions](../dashboards/dashboard-permissions.md). |
| **Permissions** | To add, edit, or manage a team dashboard: A member of the team and a member of the **Project Administrators** group. |

::: moniker-end

::: moniker range=">= azure-devops-2020 <= azure-devops-2022"

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access or specific [dashboard permissions](../dashboards/dashboard-permissions.md). |
| **Permissions** | To add, edit, or manage a team dashboard: A member of the team and a member of the **Project Administrators** group. |
|**Tools** | For [Analytics widgets](../dashboards/analytics-widgets.md) to work with your dashboard: [Analytics enabled](../dashboards/analytics-extension.md).|

::: moniker-end

> [!NOTE]
> Data displayed within a chart or widget is subject to the permissions granted to the signed-in user. For example, if a user doesn't have permissions to view work items under a specific area path, those items don't appear in query-based widgets on the dashboard. For more information, see [FAQs on Azure DevOps dashboards, charts, and reports](../dashboards/faqs.yml).
