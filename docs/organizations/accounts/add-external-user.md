---
title: Add, invite external users, guest users to your organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to invite an outside or external user to your organization
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 10/16/2019
monikerRange: 'azure-devops'
---

# Add external users to your organization

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

Learn how to invite external users to your organization, if you access Azure DevOps via Azure Active Directory (Azure AD). To do so, you must add the identities of those users to your Azure AD and organizations. Doing this also grants the users some additional privileges. Learn more about the [additional organization-level resources](resources-granted-to-project-members.md).

## Prerequisites

* You must set the policy **External guest access** to **On** for the organization that you want to invite external users to.

   >[!div class="mx-imgBorder"]
   >![External guest access](_img/add-external-user/guest-access.png)

* You must be a member of the Project Collection Administrators  or Project Administrators group for the organization that you want to invite external users to.

* The Azure AD tenant to which you want to invite external users must allow you to add new users based on your Azure Active Directory guest policies. Learn [how to become eligible to invite external users on your Azure AD tenant](/azure/active-directory/active-directory-b2b-delegate-invitations).

## Invite external user

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users**, and then select **Add users**.

   [:::image type="content" source="../../_shared/_img/add-new-users.png" alt-text="Select the Users tab, and then select Add users":::]

4. Complete the form based on the following guidance, and then select **Add**.

	- **Users**: Enter the email address for the user account. You can add several email addresses by separating them with a semicolon (;). Note that for Microsoft accounts (MSAs), the email addresses display in red.
	- **Access level**: You can add up to 5 users (total including your own user account) with *Basic* access. Otherwise, you can add an unlimited number of users with *Stakeholder* access. In public projects, both the Stakeholder and the Basic access level grant full access to **Code**, **Work**, and **Build and Release**, but Stakeholders only get partial access to **Test** and **Dashboards**.  To learn more, see [Default roles & access for public projects](../public/default-roles-access-public.md).
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
