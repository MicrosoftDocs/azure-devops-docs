---
title: Change the owner of an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to assign a different user as the owner for your organization. Also learn what permissions are required to make updates.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 01/09/2020
monikerRange: 'azure-devops'
---

# Change the organization owner

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

As roles and responsibilities change, you can change the owner for your organization. In this article, learn how to update the organization owner in Azure DevOps.

For organizations backed by Azure AD,  if your organization Owner and any other Project Collection Administrators have left the company, you can [transfer ownership to another user](#resolve-orphaned-organization-ownership).  


<a name="ChangeOwner"></a>

## Prerequisites

To change the organization Owner, you must have [*Project Collection Administrator* or *organization Owner* permissions](faq-change-organization-ownership.md#find-owner-pca).
If no one in the organization has these permissions, contact
[Azure DevOps Support](https://azure.microsoft.com/support/devops).

Make sure the new owner has completed the following tasks:

* Signed in to your organization, created a profile, and agreed to the Terms of Service.
* Accessed the organization at least once after creating an initial profile.

   ![Last access date](_img/change-organization-ownership/user-last-access.png)

## Change organization Owner

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Select "Organization settings"](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Overview**, and then **Change owner**.  

   ![Select Overview, and then Change owner](_img/change-organization-ownership/change-organization-owner.png)

4. Select a user from the dropdown menu, or search for a user by entering the user's name, and then select **Change**.

   ![Enter and save a new organization Owner](_img/change-organization-ownership/save-new-organization-owner.png)

   Your organization has a new owner.

## Resolve orphaned organization ownership

### When there's an Azure DevOps Administrator

Organization owner leaves the company 
Concerned party notices that the organization is orphaned 
Azure DevOps Administrator navigates to the orphaned organization and claims ownership. 
A notification is sent to all Azure DevOps Administrators. 
The Azure DevOps Administrator then transfers ownership to the appropriate user 

### When there's no Azure DevOps Administrator

Organization owner leaves the company 
The AAD tenant has no assigned Azure DevOps Administrator, and escalates to his AAD Global Administrator or Privileged Role Administrator (as will be described in documentation) 
The AAD Global Administrator/Privileged Role Administrator assigns the Azure DevOps Administrator role to the appropriate user(s). 
The Azure DevOps Administrator navigates to the orphaned organization and claims ownership. 
A notification is sent to all Azure DevOps Administrators. 
The Azure DevOps Administrator then transfers ownership to the appropriate user 


 

 
