---
title: Resolve innactive organization ownership
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to assign a new owner to an organization, when the current owner is inactive.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: b81adafa-adac-4e80-baa6-140fb58fbeff
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 01/24/2019
monikerRange: 'azure-devops'
---

# Assign a new owner to your orphaned organization

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

For organizations connected to Azure Active Directory (Azure AD),  if your organization Owner or any other Project Collection Administrators are inactive, you can transfer ownership to another user.

## Prerequisites

You must have *Azure DevOps Administrator* permissions in the [Azure portal](https://ms.portal.azure.com/#home). The Azure DevOps Administrator can only claim ownership of organizations where the current owner and any members of the Project Collection Administrators group are inactive in the backing Azure AD tenant.

## Transfer to new owner

### When you have an Azure DevOps Administrator

When your Azure AD tenant has an assigned Azure DevOps Administrator, complete the following steps.

1. Sign in to an account that's granted the Azure DevOps Administrator role in Azure AD. 



2. Navigate to the orphaned organization and claim ownership.    You're required to provide a short justification. All Azure DevOps Administrators receive a notification.



3. [Transfer ownership of the organization](change-organization-ownership.md) to the appropriate user.
 



### When you don't have an Azure DevOps Administrator

When your Azure AD tenant doesn't have an assigned Azure DevOps Administrator, complete the following steps.

1. Escalate to your Azure AD Global Administrator or Privileged Role Administrator (as will be described in documentation.....) 



2. The Azure AD Global Administrator/Privileged Role Administrator assigns the Azure DevOps Administrator role to the appropriate user(s). 



3. The Azure DevOps Administrator can then navigate to the orphaned organization and claim ownership. They're required to provide a short justification. All Azure DevOps Administrators receive a notification.



4. The Azure DevOps Administrator then [transfers ownership to the appropriate user](change-organization-ownership.md). 



## Related articles

* [Need help?](faq-delete-restore-organization.md#get-support)
* [Delete your organization from Azure DevOps](delete-your-organization.md)
