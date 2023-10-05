---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 01/25/2022
---

<a id="prerequisites">  </a>

## Prerequisites  

::: moniker range="azure-devops"

- You must be a member of a project with **Basic** access or higher. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views. To learn more about access levels, see [About access levels](../../organizations/security/access-levels.md).
- If you haven't been added as a project member, [get added now](../../organizations/accounts/add-organization-users.md). 
- **Boards** must be enabled. If it's disabled, **Analytics views** won't be displayed. To re-enable **Boards**, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md)
- The [Analytics view preview features must be enabled](../../project/navigation/preview-features.md) either for individual users or for the organization. 
- The **View Analytics** permission must be set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- You must be a member of a project with **Basic** access or higher. Anyone with access to the project, except those granted **Stakeholder** access, can view Analytics views. To learn more about access levels, see [About access levels](../../organizations/security/access-levels.md).
- If you haven't been added as a project member, [get added now](../../organizations/security/add-users-team-project.md). 
- The [Analytics service](../dashboards/analytics-extension.md)] must be installed and enabled.You must be an account owner or a member of the [**Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md) to install or enable it. 
- **Boards** must be enabled. If it's disabled, **Analytics views** won't display. To re-enable **Boards**, see [Turn an Azure DevOps service on or off](../../organizations/settings/set-services.md).
- The **View Analytics** permission must be set to **Allow**. For more information, see [Grant permissions to access the Analytics service](../powerbi/analytics-security.md).

::: moniker-end