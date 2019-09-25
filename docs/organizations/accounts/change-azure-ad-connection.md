---
title: Change connection to Azure AD
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to change or switch your organization connection to a different Azure Active Directory
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/25/2019
monikerRange: 'azure-devops'
---

# Change connection to Azure AD

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

If you need to switch your organization connection from one Azure Active Directory (Azure AD) to another, complete the following steps.

For more information about using Azure AD with Azure DevOps, see the [Conceptual overview](access-with-azure-ad.md).

## Prerequisites

Before you disconnect your organization from your directory, and then connect to a new directory, make sure the following is true:
- You're using a Microsoft account, not a school or work account
- You're the organization Owner
- You're in the Project Collection Administrator group (in Organization settings) for the organization 
- You're in the source Azure AD and destination Azure AD as a member. For more information, see how you can [convert an Azure AD guest into a member](faq-add-delete-users.md#q-how-can-i-convert-an-azure-ad-guest-into-a-member).

## Change the Azure AD connection

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.
  
   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Disconnect directory**.

   ![Select the Disconnect directory button](_img/_shared/select-disconnect-directory.png)

4. Sign out, and then sign back in to Azure DevOps.
5. Prepare your mapping list for inviting users to Azure AD.

    1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
    2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.
        
        ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

    3. Select **Users**.
        
        ![Open organization settings, users](../../_shared/_img/settings/open-organization-settings-users-vert.png)

    4. Compare your Azure DevOps email list with your Azure AD email list. Create an Azure AD email address entry for every user who is in the Azure DevOps organization and NOT in the Azure AD. For any user that you don't create an Azure AD email address for, be prepared to invite these users as guests to the Azure AD in future steps.

6. [Connect to Azure AD](connect-organization-to-azure-ad.md), so users can regain access.

   ![Select Azure AD Connect directory](_img/connect-organization-to-aad/select-azure-ad-connect-directory.png)

## Related articles

- [Disconnect your organization from Azure AD](disconnect-organization-from-azure-ad.md)
- [Connect your organization to Azure AD](connect-organization-to-azure-ad.md)
- [Manage Azure AD groups](manage-azure-active-directory-groups.md)



