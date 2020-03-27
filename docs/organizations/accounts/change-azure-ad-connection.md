---
title: Switch to another Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to change or switch your organization connection to a different Azure Active Directory
ms.technology: devops-accounts
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 02/27/2020
monikerRange: 'azure-devops'
---

# Change your organization connection to another Azure AD

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

If you need to switch your organization connection from one Azure Active Directory (Azure AD) to another, complete the following steps.

For more information about using Azure AD with Azure DevOps, see the [Conceptual overview](access-with-azure-ad.md).

## Prerequisites

Before you switch your organization directory, make sure the following is true:
- You're in the Project Collection Administrator group (in Organization settings) for the organization 
- You're a member or a guest in the source Azure AD and in the destination Azure AD

## Change the Azure AD connection

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Azure Active Directory**, and then **Switch directory**.

   ![Select Switch directory button](media/change-azure-ad-connection.md/select-switch-directory.png)

4. Select a directory from the dropdown menu, and then select **Connect**.

   ![Select your Azure AD, and then Connect](media/shared/select-directory-connect.png)
   If you can't find your directory, contact your Azure AD administrator and request that they add you as a member to the Azure AD.

5. Select **Sign out**.

   ![Connect success dialog - select Sign out](media/shared/connect-success-dialog.png)

    Your organization is now connected to your Azure AD.

6. Confirm that the process is complete. Sign out, and then open your browser in a private session and sign in to your organization with your Azure AD or work credentials.

7. If you have disconnected members, sign back in to Azure DevOps and map them to their Azure AD identities or invite them as guests into the Azure AD. See [FAQs](faq-azure-access.md#faq-connect) for further information.

   ![Select Resolve to invite unmapped users](media/shared/azure-ad-select-resolve-for-disconnected-users.png)

   ![Mapping disconnected users](media/shared/resolve-disconnected-users.png)

## Related articles

- [Disconnect your organization from Azure AD](disconnect-organization-from-azure-ad.md)
- [Connect your organization to Azure AD](connect-organization-to-azure-ad.md)
- [Manage Azure AD groups](manage-azure-active-directory-groups.md)
- [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)



