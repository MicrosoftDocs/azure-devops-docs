---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 10/20/2023
---

::: moniker range="azure-devops"

> [!NOTE]  
> Security groups are at the organization level, even if they only access a specific project. Some groups might be hidden in the web portal based on user permissions. You can find all group names in an organization using the Azure DevOps CLI tool or REST APIs. For more information, see [Add and manage security groups](../add-manage-security-groups.md).

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops"

> [!NOTE]  
> Security groups are at the collection level, even if they only access a specific project. Some groups might be hidden in the web portal based on user permissions. You can find all group names in a collection using the Azure DevOps CLI tool or REST APIs. For more information, see [Add and manage security groups](../add-manage-security-groups.md).

::: moniker-end

::: moniker range="< azure-devops-2020"

> [!NOTE]  
> Security groups are at the collection level, even if they only access a specific project. Some groups might be hidden in the web portal based on user permissions. You can find all group names in a collection using the REST APIs. For more information, see [Add and manage security groups](/rest/api/azure/devops/security/?view=azure-devops-rest-6.0&preserve-view=true).

::: moniker-end
