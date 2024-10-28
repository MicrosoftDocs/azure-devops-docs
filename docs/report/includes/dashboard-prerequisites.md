---
ms.subservice: azure-devops-analytics
ms.topic: include
ms.date: 10/28/2024
---

<a id="permissions">  </a>

## Prerequisites  

::: moniker range="azure-devops"

- **Access:**
  - Anyone with access to a project, including [**Stakeholders**](../../organizations/security/get-started-stakeholder.md), can view dashboards.
  - Be a [member of the project](../../organizations/accounts/add-organization-users.md) and have at least **Basic** access or have specific [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you.
- **Permissions:**
  - **Team dashboards**: To add, edit, or manage a team dashboard, meet the following requirements:
    - Be a member of the team.
    - Be a member of the Project Administrators group.

::: moniker-end

::: moniker range=">= azure-devops-2020 <= azure-devops-2022"

- **Access:**
  - Anyone with access to a project, including [**Stakeholders**](../../organizations/security/get-started-stakeholder.md), can view dashboards.
  - Be a [member of the project](../../organizations/accounts/add-organization-users.md) and have at least **Basic** access, have specific [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you, or be a member of the Project Administrators group.
- **Tools:** Have [Analytics enabled](../dashboards/analytics-extension.md) for [Analytics widgets](../dashboards/analytics-widgets.md) to work with your dashboard.

::: moniker-end

::: moniker range="azure-devops-2019"

- **Access:**
  - Anyone with access to a project, including [**Stakeholders**](../../organizations/security/get-started-stakeholder.md), can view dashboards.
  - Be a [member of the project](../../organizations/accounts/add-organization-users.md) and have **Basic** access, have specific [dashboard permissions](../dashboards/dashboard-permissions.md) granted to you for the selected dashboard, be a member of the Project Administrators group, or be assigned to the [team administrator role](../../organizations/settings/add-team-administrator.md).
- **Tools:**
  - Install or enable the [Analytics Marketplace extension](../dashboards/analytics-extension.md). Analytics widgets aren't available if Analytics isn't installed, enabled, or running.
  - Have [Analytics enabled](../dashboards/analytics-extension.md) for [Analytics widgets](../dashboards/analytics-widgets.md) to work with your dashboard.

::: moniker-end

> [!NOTE]
> Data displayed within a chart or widget is subject to the permissions granted to the signed-in user. For example, if a user doesn't have permissions to view work items under a specific area path, those items don't display in a query results widget on the dashboard. For more information, see [FAQs about using dashboards](../dashboards/faqs.yml).
