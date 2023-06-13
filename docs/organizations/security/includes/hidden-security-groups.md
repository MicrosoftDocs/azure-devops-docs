---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 04/04/2022
---

::: moniker range="azure-devops"

> [!NOTE]  
> All security groups are organization-level entities, even those groups that only have permissions to a specific project. From the web portal, visibility of some security groups may be limited based on user permissions. However, you can discover the names of all groups in an organization using the **azure devops** CLI tool or our REST APIs. To learn more, see [Add and manage security groups](../add-manage-security-groups.md).

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops"

> [!NOTE]  
> All security groups are collection-level entities, even those groups that only have permissions to a specific project. From the web portal, visibility of some security groups may be limited based on user permissions. However, you can discover the names of all groups in an organization using the **azure devops** CLI tool or our REST APIs. To learn more, see [Add and manage security groups](../add-manage-security-groups.md).

::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE]  
> All security groups are collection-level entities, even those groups that only have permissions to a specific project. From the web portal, visibility of some security groups may be limited based on user permissions. However, you can discover the names of all groups in an organization using the REST APIs. To learn more, see [Add and manage security groups](/rest/api/azure/devops/security/?view=azure-devops-rest-6.0&preserve-view=true).

::: moniker-end
