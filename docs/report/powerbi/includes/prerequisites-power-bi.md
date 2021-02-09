---
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.prod: devops
ms.date: 12/18/2020
ms.topic: include
---


## Prerequisites


::: moniker range="azure-devops"

- You must be a member of a project with Basic access or higher. If you haven't been added as a project member, [get added now](../../../organizations/accounts/add-organization-users.md). Anyone with access to the project, except stakeholders, can view Analytics views.
- For Analytics data to be available, the corresponding service must be enabled. For example, to query work tracking data, **Boards** must be enabled. If it is disabled, **Analytics views** won't be displayed. To re-enable a service, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md)
- To use **Analytics views**, [enable the Analytics Views preview feature](../../../project/navigation/preview-features.md) either for individual users or for the organization. 
- Also, you must have your ***View Analytics**  permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md).
- To use Power BI for Azure DevOps or to exercise an OData query for Analytics, you must must have your **View Analytics** permission set to *Allow*. By default, all Contributors with Basic access are granted access. To edit shared **Analytics views**, you must have your ***Edit shared Analytics views** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md).

::: moniker-end



::: moniker range=">= azure-devops-2019 < azure-devops"

- You must be a member of a project with Basic access or higher. If you haven't been added as a project member,  [get added now](../../../organizations/security/add-users-team-project.md). Anyone with access to the project, except stakeholders, can view Analytics views.
- [Verify that Analytics](../../dashboards/analytics-extension.md) is installed, and if not, then enable it. You must be an account owner or a member of the [Project Collection Administrator group](../../../organizations/security/set-project-collection-level-permissions.md) to add extensions or enable the service. 
- For Analytics data to be available, the corresponding service must be enabled. For example, to query work tracking data, **Boards** must be enabled. If it is disabled, **Analytics views** won't be displayed. To re-enable a service, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md)
- To use **Analytics views**, [enable the Analytics Views preview feature](../../../project/navigation/preview-features.md) either for individual users or for the organization. 
- Also, you must have your ***View Analytics**  permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md).
- To use Power BI for Azure DevOps or to exercise an OData query for Analytics, you must must have your **View Analytics** permission set to *Allow*. By default, all Contributors with Basic access are granted access. To edit shared **Analytics views**, you must have your **Edit shared Analytics views** permission set to *Allow*. For more information, see [Grant permissions to access the Analytics service](../analytics-security.md).

::: moniker-end
