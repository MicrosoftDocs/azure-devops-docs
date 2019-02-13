---
title: Manage access with Azure Active Directory groups
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to control who can access Azure DevOps with Azure Active Directory groups
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 882E6E07-F407-478A-9DCC-9324493CBE11
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 
monikerRange: 'azure-devops'
---
# Access with Azure Active Directory groups

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

Do you want an easier way to control who can access your team's critical resources and key business assets in Azure DevOps Services?
If you already use Microsoft services like Office 365 or [Azure Active Directory (Azure AD)](https://www.microsoft.com/server-cloud/products/azure-active-directory/), you can use the same identities with your organization.
[Azure AD works with your organization](access-with-azure-ad.md) to control access and authenticate users.

When you organize directory members with [Azure AD groups](https://azure.microsoft.com/documentation/articles/active-directory-manage-groups), you can reuse those groups to manage permissions in bulk for your organization. Just add those groups to the group that you want. For example, add them to built-in groups like Project Collection Administrators or Contributors, or manually created groups like your project management team. Azure AD group members inherit permissions from the Azure DevOps group, so you don't have to manage group members one at a time.

Not familiar with Azure AD, but want to check it out? Learn more about [Azure AD benefits](https://azure.microsoft.com/documentation/articles/active-directory-whatis/)
and differences in how you [control organization access with Microsoft accounts or with Azure AD](access-with-azure-ad.md).

## Prerequisites

* Your organization must be connected to Azure Active Directory. [My organization uses Microsoft accounts only. Can I switch to Azure AD?](faq-azure-access.md#ChangeMSA). Learn how to [connect your organization to Azure AD](connect-organization-to-azure-ad.md).
* You must be a project administrator, project collection administrator, or organization owner. You must also have at least Basic access, not Stakeholder.
* To create and manage Azure AD groups, you must have Azure AD administrator permissions or have the directory administrator delegate those permissions to you in the [Azure portal](https://portal.azure.com).
* Be aware that Azure AD changes might take up to 24 hours to be visible in Azure DevOps.

## Add an Azure AD group to an Azure DevOps group

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

	[Why am I asked to choose between my work or school account and my personal account?](faq-create-organization.md#ChooseOrgAcctMSAcct)

2.  Go to **Organization settings**.

    ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Choose **Security**, select the group you want to add a member to, select **Members**, and then select **Add**.

   ![Add a member to your selected group](_img/manage-azure-ad-groups/admin-settings-security-choose-group-add-member.png)
4. Add groups, and then save your changes.

    ![Bulk add members to a group](_img/manage-azure-ad-groups/bulk-add-groups.png)

    You [invite guests into Azure AD](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/11/inviting-directory-guests-to-aad-backed-vsts-accounts) and into your Azure AD-backed organizations, without waiting for them to accept. This invitation allows you to add those guests to your organization, grant access to projects, assign extensions, and more.

5. Add more users or groups, or save your changes if you're done.
