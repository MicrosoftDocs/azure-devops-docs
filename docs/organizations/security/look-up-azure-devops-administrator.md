---
title: Look up an Azure DevOps Administrator
titleSuffix: Azure DevOps
description: Learn how to identify members of the Azure DevOps Administrators group on Microsoft Entra.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/12/2024
---

# Look up an Azure DevOps Administrator

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The [**Azure DevOps Administrator**](/entra/identity/role-based-access-control/permissions-reference#azure-devops-administrator) role is managed through Microsoft Entra ID and used for tenant-wide administration:
* **Claim ownership of [orphaned Azure DevOps organizations](../accounts/resolve-orphaned-organization.md)**.
* **[Configure tenant-level policies](../accounts/change-application-access-policies.md)** on the "Microsoft Entra" page in Organization Settings. If you're not an Azure DevOps Administrator, the tenant-level policies on this page won't be visible to you.

Being a [Project Collection Administrator](look-up-project-collection-administrators.md) isn't required for the Azure DevOps Administrator role.
 
## Look up your Azure DevOps Administrators

1. Sign in to the [Azure portal](https://portal.azure.com).  

2. Select "**Microsoft Entra ID**" and find "**Roles and administrators**" on the right sidebar.

3. Search for the "Azure DevOps Administrator" group to see all current assignments to the group.

2. If you want to join the role, contact your tenant administrator to learn how to be assigned this role in your company.
