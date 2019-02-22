---
title: Delete or remove users from an organization connected to Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Understand how to delete users from Azure DevOps connected to Azure Active Directory (Azure AD) via the Azure portal
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: eb0d51c2-fb28-4c55-9fcd-33a5942130f0
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: 'azure-devops'
---

# Delete users from your organization connected to Azure Active Directory

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

For more information, see the [conceptual overview](access-with-azure-ad.md) about how to use Azure Active Directory (Azure AD) with Azure DevOps.

You can [delete the user from each organization](delete-organization-users.md) where you need to remove them. If you delete the user from Azure AD only, the user might still show up in Azure DevOps, but they won't be able to sign in.

## Delete users

1. [Sign in to the Azure classic portal](https://manage.windowsazure.com/) as the directory administrator in Azure.

   > [!NOTE]
   > You can find the connected Azure AD only through the Azure classic portal.

2. Go to **Azure Active Directory**. Find the Azure AD that's connected to your organization.

   ![Find the directory connected to your organization](_img/manage-work-access/azurefindconnecteddirectory.png)

3. Follow [these steps](/azure/active-directory/active-directory-users-delete-user-azure-portal) on the Azure portal.

4. [Remove the user](delete-organization-users.md) from your organization. Reassign the user's access levels, if necessary.

## Related articles

- [Add users to your organization in Azure DevOps](add-organization-users.md)
- [Add users to Azure AD](add-users-to-azure-ad.md)