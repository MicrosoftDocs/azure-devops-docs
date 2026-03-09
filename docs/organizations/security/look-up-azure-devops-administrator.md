---
title: Look up an Azure DevOps Administrator
titleSuffix: Azure DevOps
description: Learn how to identify members of the Azure DevOps Administrators group on Microsoft Entra.
ms.subservice: azure-devops-security
ai-usage: ai-assisted
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 03/09/2026
---

# Look up an Azure DevOps Administrator

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

The [**Azure DevOps Administrator**](/entra/identity/role-based-access-control/permissions-reference#azure-devops-administrator) role is a Microsoft Entra role for tenant-wide administration of Azure DevOps. Members of this role can:

* [Claim ownership of orphaned organizations](../accounts/resolve-orphaned-organization.md) when the current owner and all Project Collection Administrators are inactive
* [Configure tenant-level policies](../accounts/change-application-access-policies.md) on the **Microsoft Entra** page in Organization Settings
* [Restrict organization creation](../accounts/azure-ad-tenant-policy-restrict-org-creation.md) across the tenant
* [Manage PAT policies](../accounts/manage-pats-with-policies-for-administrators.md) across all organizations in the tenant, including restricting PAT creation scope and enforcing maximum lifespan

If you're not an Azure DevOps Administrator, you can't see the tenant-level policies on the **Microsoft Entra** page in Organization Settings.

> [!NOTE]
> The Azure DevOps Administrator role is different from the [Project Collection Administrator](look-up-project-collection-administrators.md) role. Project Collection Administrators manage a specific organization or collection, while Azure DevOps Administrators manage tenant-level policies across all organizations connected to a Microsoft Entra tenant. You don't need to be a Project Collection Administrator to be an Azure DevOps Administrator, and vice versa.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Access to the [Azure portal](https://portal.azure.com) with a Microsoft Entra account in the tenant.|

## Look up your Azure DevOps Administrators

1. Sign in to the [Azure portal](https://portal.azure.com).

2. Select **Microsoft Entra ID** > **Roles and administrators**.

3. Search for **Azure DevOps Administrator** to see all current role assignments.

## Get the Azure DevOps Administrator role assigned

If you need the Azure DevOps Administrator role, contact your Microsoft Entra tenant administrator. They can assign the role in the Azure portal under **Microsoft Entra ID** > **Roles and administrators** > **Azure DevOps Administrator**. The role can be assigned to individual users or Microsoft Entra groups.

> [!NOTE]
> Changes to role assignments might take up to an hour to propagate to Azure DevOps.

## Related content

- [Resolve orphaned organizations](../accounts/resolve-orphaned-organization.md)
- [Change application connection and security policies](../accounts/change-application-access-policies.md)
- [Manage personal access tokens using policies](../accounts/manage-pats-with-policies-for-administrators.md)
- [Look up a project collection administrator](look-up-project-collection-administrators.md)
- [Change the organization owner](../accounts/change-organization-ownership.md)
