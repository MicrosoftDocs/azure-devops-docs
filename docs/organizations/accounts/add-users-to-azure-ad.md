---
title: Add, delete organization users in Azure Active Directory tenant
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to add and remove organization users in your connected Azure Active Directory (Azure AD).
ms.technology: devops-accounts
ms.assetid: 22ed079f-0321-4c8b-ab06-a289450fb557
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/04/2020
monikerRange: 'azure-devops'
---

# Add & delete users in Azure AD

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

<a name="SetUpCurrentUsers"></a>

In this article, learn how to add users to your tenant in [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/), so you can sign in to Azure DevOps with the same user name and password that you use with Azure AD. You can also enforce policies for accessing your team's critical resources and key assets. Also learn how to remove organization users in Azure AD.

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with Azure DevOps.

## Prerequisites

To add or remove organization users in Azure AD, the following statements must be true.

- You're a member of the [Project Collection Administrators group](/azure/devops/organizations/security/set-project-collection-level-permissions) in Azure DevOps. Organization owners are automatically members of this group.
- You're a global administrator for your organization's Azure AD.
- Your organization is [connected to Azure AD](connect-organization-to-azure-ad.md).

## Add users to Azure AD

1. Sign in to the [Azure portal](https://portal.azure.com). See the following articles for information about signing in.

   * [Create users in the Azure portal](/azure/active-directory/active-directory-create-users)
   * [Add users in the Azure portal](/azure/active-directory/active-directory-users-create-azure-portal)
   * [Why am I asked to choose between a "work or school account" and a "personal account"?](faq-user-and-permissions-management.md#ChooseOrgAcctMSAcct)

2. Add the sign in addresses for all of your organization users to your directory. Include yourself as the organization Owner, if you're not already in the directory.

   See the following description of an example directory:
  
   Jamal is an Azure AD global administrator at Fabrikam and is listed in the Fabrikam directory with a work account (jamalhartnett@fabrikam.com). Jamal is also the organization Owner and a user with a Microsoft account (jamalhartnett@live.com). Jamal wants to keep work history, and so adds the Microsoft account to the Fabrikam directory. If Jamal doesn't need work history, Jamal can use the work account with Azure DevOps. To free up the access used by Jamal's Microsoft account, Jamal must change the organization Owner to the work account.

   Nicole's work account, nicolezamora@fabrikam.com, has the same sign in address as Nicole's Microsoft account. Nicole continues to work seamlessly with the same sign in address.

   Here's what the Fabrikam directory might look like in the Azure portal after Jamal adds users from the organization:

   ![Directory after adding users](media/manage-work-access/azureaddmembers3.png)

   For more information about how to set up users, see [FAQs](faq-user-and-permissions-management.md).

## Delete users from your organization connected to Azure AD

1. [Sign in to the Azure classic portal](https://manage.windowsazure.com/) as the directory administrator in Azure.

   > [!NOTE]
   > You can find the connected Azure AD only through the Azure classic portal.

2. Go to **Azure Active Directory**. Find the Azure AD that's connected to your organization.

   ![Find the directory connected to your organization](media/manage-work-access/azurefindconnecteddirectory.png)

3. Follow [these steps](/azure/active-directory/active-directory-users-delete-user-azure-portal) on the Azure portal.

4. [Remove the user](delete-organization-users.md) from your organization. Reassign the user's access levels, if necessary.

> [!NOTE]
> If you delete the user from Azure AD only, the user might still show up in Azure DevOps, but they can't sign in.

## Related articles

- [Add users to your organization](add-organization-users.md)
- [Add users to a team](../security/add-users-team-project.md#add-users-to-a-team)
- [Add users to a project](../security/add-users-team-project.md#add-users-to-a-project)
- [Add external users](add-external-user.md)
- [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
    
