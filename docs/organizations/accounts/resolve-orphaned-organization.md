---
title: Resolve orphaned organization ownership
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to assign a new owner to an organization when the current owner is inactive or has left the company.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: b81adafa-adac-4e80-baa6-140fb58fbeff
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 01/16/2019
monikerRange: 'azure-devops'
---

# Assign a new owner to your orphaned organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

For organizations backed by Azure AD,  if your organization Owner and any other Project Collection Administrators have left the company, you can transfer ownership to another user.

## Prerequisites

You must have [*Azure DevOps Administrator* permissions]() in the [Azure portal]().

## Transfer to new owner



### When you have an Azure DevOps Administrator

1. Sign in to the [Azure portal](https://portal.azure.com) as Azure DevOps Administrator.
2. Find the orphaned organization and claim ownership. 
   All Azure DevOps Administrators receive a notification. 
3. Transfer ownership to the appropriate user. 

### When you don't have an Azure DevOps Administrator

When your Azure AD tenant doesn't have an assigned Azure DevOps Administrator, complete the following steps:

1. Escalate to Azure AD Global Administrator or Privileged Role Administrator (as will be described in documentation.....) 
2. The Azure AD Global Administrator/Privileged Role Administrator assigns the Azure DevOps Administrator role to the appropriate user(s). 
3. The Azure DevOps Administrator navigates to the orphaned organization and claims ownership. 
   All Azure DevOps Administrators receive a notification. 
4. The Azure DevOps Administrator then transfers ownership to the appropriate user 



## Related articles

* [Need help?](faq-delete-restore-organization.md#get-support)
* [Delete your organization from Azure DevOps](delete-your-organization.md)
