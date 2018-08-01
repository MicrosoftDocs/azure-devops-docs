---
title: Add external users to your organization
description: Learn how to invite an external or outside user in your VSTS (Visual Studio Online, VSO, VSTS) organization
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 07/18/2018
monikerRange: 'vsts'
---
# Add external users to your VSTS organization

**VSTS**

If you’re an Azure Active Directory (Azure AD)-backed VSTS organization user who wants to be able to collaborate with external users, you can invite an external user to your VSTS organization. To do so, you must add the identities of your external users to your Azure AD and VSTS organizations. Doing this will also grant the user some additional privileges. Learn more about the [additional organization-level resources](resources-granted-to-project-members.md).

## Prerequisites

* You must set the policy 'External Guest Access' to 'On' for the organization which you would like to invite external users to.

   >[!div class="mx-imgBorder"]
   >![External Guest Access](_img/add-external-user/aad-guest-policy.png)

* You must be a member of the Project Collection Administrators group for the organization which you would like to invite external users to.

* The VSTS organization, to which you want to invite external users, must allow for external invitations. Go to the Organization Settings page to confirm.

* The Azure AD tenant, to which you want to invite external users, must allow you to add new users based on your AAD tenant’s guest policies. Learn [how to become eligible to invite external users on your Azure AD tenant](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-b2b-delegate-invitations).

## Invite external users to your VSTS organization

[!INCLUDE [temp](../../work/_shared/new-agile-hubs-feature.md)]

# [New navigation](#tab/new-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

2. Choose ![gear icon](../../_img/icons/gear-icon.png) **Admin settings**.

   ![Open Admin Settings](_img/_shared/open-admin-settings-vert.png)

3. Choose **Users** and then choose **Add new users**.

   ![Choose Add new users](_img/_shared/add-new-users.png)

4. Enter the external user's email address followed by a semicolon, and then choose **Add**. A warning message will appear indicating that an external user is being added from outside of your directory.

   [!div class="mx-imgBorder"]
   ![Add external user to VSTS](_img/add-external-user/add-external-user-vert.png)

5. Advise the external user to locate the email they received from VSTS and go to the redemption URL. The external user must navigate through an Azure B2B redemption experience, which will add the user to your organization

# [Previous navigation](#tab/previous-nav)

1. Sign in to your VSTS organization (```https://{yourorganization}.visualstudio.com```).

2. Go to the **Users** tab in Settings.

   ![Go to the Users tab in Settings](../../_shared/_img/users-hub-updated-ui.png)

3. Choose **Add new users**.

   ![Choose Add new users](_img/add-external-user/choose-add-new-users.png)

4. Enter the external user's email address followed by a semicolon, and then choose **Add**. A warning message will appear indicating that an external user is being added from outside of your directory.

   >[!div class="mx-imgBorder"]
   >![Add external user to VSTS](_img/add-external-user/add-external-user.png)

5. Advise the external user to locate the email they received from VSTS and go to the Azure B2B redemption URL, which will add the user to your organization.

---

>[!Note]
>If you need to resend the invitation email, go to **Users**, select the user, and choose **Resend invite**.

The external user is added to the VSTS organization to which they were invited and has immediate access.

## Related information

* [What is Azure AD B2B Collaboration?](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b)

* [Migrate to group-based resource management](migrate-to-group-based-resource-management-in-VSTS.md)

* [Assign access levels and extensions to users by group membership](assign-access-levels-and-extensions-by-group-membership.md)
