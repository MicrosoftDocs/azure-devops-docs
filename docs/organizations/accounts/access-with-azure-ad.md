---
title: Access your Azure DevOps Services organization with Azure Active Directory
description: Learn how to authenticate users and control access to your Azure DevOps Services organization the same way you can with Microsoft services like Office 365 and Azure AD
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: c9aecaaf-9dfb-4877-84b4-60da253e3dc2
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
/ms.date: 09/10/2018
monikerRange: 'vsts'
---

# Access Azure DevOps Services with Azure Active Directory

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

Do you want to authenticate users and control access to
your Azure DevOps Services organization the same way that you
can with Microsoft services like Office 365 and Azure?
If your Azure DevOps Services organization was created with a Microsoft account,
you can connect your Azure DevOps Services organization to your
organization's directory (tenant) in
[Azure Active Directory (Azure AD)](/azure/active-directory/fundamentals/active-directory-whatis).
You can then sign in to Azure DevOps Services with the same username
and password that you use with these Microsoft services.
You can also enforce policies for accessing
your team's critical resources and key assets.

> To use existing on-premises identities with Azure DevOps Services,
> you can integrate on-premises directories with Azure AD by using
> [Azure AD Connect](https://azure.microsoft.com/documentation/articles/active-directory-aadconnect/).
> To switch your Azure DevOps Services organization to another directory,
> learn [how to change your directory in Azure AD](change-organization-location.md).

## How does Azure Active Directory control access to Azure DevOps Services?

Your Azure DevOps Services organization authenticates users
through your organization's directory so that
only users who are members or guests in that directory can
get access to your Azure DevOps Services organization.
When users are removed from your directory
(for example, because they've moved elsewhere),
they can't access your organization anymore.
Only specific [Azure AD administrators](https://azure.microsoft.com/documentation/articles/active-directory-assign-admin-roles/)
can manage users in your directory,
so they control who can get access to your Azure DevOps Services organization.

Without Azure AD, you're solely responsible for
controlling Azure DevOps Services organization access.
And all users must sign in with Microsoft accounts.

<a name="permissions"></a>

## What do I need to set up an existing Azure DevOps Services instance with Azure AD?

You need the following:

* [Ownership of the Azure DevOps Services organization](faq-add-delete-users.md#find-owner) that you want to connect to Azure AD.

* A ["full" Azure subscription](https://azure.microsoft.com/pricing/purchase-options/),
such as a [Pay-As-You-Go subscription](https://azure.microsoft.com/offers/ms-azr-0003p/),
associated with Azure Active Directory and at
least co-administrator permissions for your subscription.
You'll need both to make your directory appear in the Azure portal,
so that you can link your subscription and connect 
Azure AD to your Azure DevOps Services organization. Learn about
[Azure subscription co-administrator permissions](../billing/add-backup-billing-managers.md).

  [Want to use Office 365 Azure AD with Azure DevOps Services?](faq-azure-access.md#o365aad)

* Global administrator permissions for your directory so you can add current Azure DevOps Services users to that directory.

Otherwise, work with your directory's global administrator to add users.
Learn more about [Azure AD administrators](/azure/active-directory/users-groups-roles/directory-assign-admin-roles).

  To check your permissions, [sign in to the Azure portal](https://ms.portal.azure.com) with your
  work or school account. Go to your directory.

  > [!div class="mx-imgBorder"]  
  >![Check that you're a global administrator](_img/access-with-azure-ad/check-your-role-azure-active-directory.png)

You must add your Microsoft account to Azure AD.

Although directory membership isn't required to
connect your Azure DevOps Services organization to Azure AD, it makes sure that you can sign in and
access your Azure DevOps Services organization after you connect to Azure AD. Otherwise, your Microsoft account will not have access to
your Azure DevOps Services organization.

## What happens to current users?

Your work in Azure DevOps Services is associated with your sign-in address.
After your Azure DevOps Services organization is connected to your directory,
users will continue working seamlessly if their
sign-in addresses appear in the connected directory.
If they don't, you'll have to [add those users to your directory](add-users-to-aad.md#SetUpCurrentUsers).
Your organization might have policies about adding users to the directory,
so find out more first.

### What if we can't use the same sign-in addresses?  

You'll have to add these users to the directory with new work or school accounts.
If they have existing work or school accounts, they can use those instead. Their work in Azure DevOps Services
won't be lost and will stay with their current Azure DevOps Services sign-in addresses.  You must add them as new
users to Azure DevOps Services, reassign access levels, and readd them to any projects. Users can migrate work that they want to keep,
except for their work history. Learn [how to manage Azure DevOps Services organization users](add-organization-users-from-user-hub.md).

### What happens to tools that use my credentials, like alternate credentials?  

Alternate credentials won't work anymore for
tools that run outside a web browser, like the Git command-line tool.  You'll have
to [set up your credentials](http://support.microsoft.com/kb/2991274/) again for the Azure DevOps Services organization that you connected.

## What if I accidentally delete a user in Azure AD?

You should [restore the user](/azure/active-directory/active-directory-users-restore), rather than create a new one. If you create a new user, even with the same email address, this user will not be associated with the previous identity.

## Manage organization access with Azure AD

* [Add Azure DevOps Services users to Azure AD](add-users-to-aad.md)
* [Connect your Azure DevOps Services organization to Azure AD](connect-organization-to-aad.md)
* [Disconnect your Azure DevOps Services organization from Azure AD](disconnect-organization-from-aad.md)
* [Delete users from Azure DevOps Services connected to Azure AD](delete-users-from-services-aad.md)
