﻿---
title: Add, invite guest users to your organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to invite an outside or external user to your organization
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 11/20/2019
monikerRange: 'azure-devops'
---

# Add external users to your organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this article, learn how to invite external users to your organization, if you access Azure DevOps via Azure Active Directory (Azure AD). To do so, you must add the identities of those users to your Azure AD and organizations. Doing this also grants the users some additional privileges. For more information see [additional organization-level resources](resources-granted-to-project-members.md).

## Prerequisites

* Set the policy **External guest access** to **On** for the organization that you want to invite external users to.

> [!NOTE]   
> To enable the new user interface for the New user hub, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Current page](#tab/current-page)

   >[!div class="mx-imgBorder"]
   >![External guest access](_img/add-external-user/guest-access.png)

#### [Preview page](#tab/preview-page) 

   ![External guest access turned on](_img/add-external-user/guest-access-preview.png)

* * *

* You must be a member of the Project Collection Administrators  or Project Administrators group for the organization that you want to invite external users to.

* The Azure AD tenant, to which you want to invite external users, must allow adding new users, per your Azure AD guest policies. For more information, see [how to become eligible to invite external users on your Azure AD tenant](/azure/active-directory/active-directory-b2b-delegate-invitations).

## Invite external user

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users**, and then select **Add users**.
   
   ![Select the Users tab, and then select Add users](../../_shared/_img/add-new-users.png)

4. Complete the form based on the following guidance, and then select **Add**.

	- **Users**: Enter the email address for the user account. You can add several email addresses by separating them with a semicolon (;). For Microsoft accounts (MSAs), the email addresses display in red.
	- **Access level**: You can add up to five users (total including your own user account) with *Basic* access. Otherwise, you can add an unlimited number of users with *Stakeholder* access. In public projects, both Stakeholder and Basic access levels grant full access to **Code**, **Work**, and **Build and Release**. But, Stakeholders only get partial access to **Test** and **Dashboards**. For more information, see [Default roles & access for public projects](../public/default-roles-access-public.md).
	- **Add to projects**: Select each public project that you want to add the user to.  
	- **Azure DevOps Groups**: Leave this entry at Project Contributors, the default security group for people who contribute to your project. To learn more, see [Default permissions and access assignments](../security/permissions-access.md).
	- **Send email invites**: Check the box next to "Send email invites" to invite your new users via their email addresses.

    :::image type="content" source="../public/_img/invite-users/add-new-users-dialog.png" alt-text="Add new users dialog":::

5. Advise the external user to locate the email that they received from Azure DevOps and select the URL link. This final step adds the user to your organization.

>[!Note]
>If you need to resend the invitation email, go to **Users**, select the user, and select **Resend invite**.

The external user is added to the organization to which they were invited and has immediate access.

## Related articles

* [What is Azure AD B2B collaboration?](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b)

* [Migrate to group-based resource management](migrate-to-group-based-resource-management-in-VSTS.md)

* [Assign access levels and extensions to users by group membership](assign-access-levels-and-extensions-by-group-membership.md)
