---
title: Resolve orphaned organization ownership
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to assign a new owner to an organization when the current owner is inactive.
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

After you delete your organization, it's disabled but available for 28 days. If you change your mind during this time, you can recover your organization. After 28 days, your organization and data are permanently deleted.

## Prerequisites

To change the Owner for an orphaned organization, you must have [*Project Collection Administrator* permissions](faq-change-organization-ownership.md#find-owner-pca).
If no one in the organization has these permissions, contact
[Azure DevOps Support](https://azure.microsoft.com/support/devops).

## Assign new owner to organization


### When you have an Azure DevOps Administrator

Organization owner leaves the company 
Concerned party notices that the organization is orphaned 
Azure DevOps Administrator navigates to the orphaned organization and claims ownership. 
A notification is sent to all Azure DevOps Administrators. 
The Azure DevOps Administrator then transfers ownership to the appropriate user 

### When you don't have an Azure DevOps Administrator

Organization owner leaves the company 
The AAD tenant has no assigned Azure DevOps Administrator, and escalates to his AAD Global Administrator or Privileged Role Administrator (as will be described in documentation) 
The AAD Global Administrator/Privileged Role Administrator assigns the Azure DevOps Administrator role to the appropriate user(s). 
The Azure DevOps Administrator navigates to the orphaned organization and claims ownership. 
A notification is sent to all Azure DevOps Administrators. 
The Azure DevOps Administrator then transfers ownership to the appropriate user 



## Related articles

* [Need help?](faq-delete-restore-organization.md#get-support)
* [Delete your organization from Azure DevOps](delete-your-organization.md)
