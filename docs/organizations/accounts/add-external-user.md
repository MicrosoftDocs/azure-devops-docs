---
title: Add, invite guest external users to your organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to invite an external user or outside guest to your organization
ms.subservice: azure-devops-organizations
ms.assetid: ec935536-6a5e-4b62-adf2-4207a70440bd
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 05/09/2022
monikerRange: 'azure-devops'
---

# Add external users to your organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to invite external users to your organization. If you access Azure DevOps via Azure Active Directory (Azure AD), you must add the identities of those users to your Azure AD. Doing so also grants the users more privileges. For more information, see [more organization-level resources](../projects/resources-granted-to-project-members.md).

## Prerequisites


* You must be a member of the Project Collection Administrators or Project Administrators group for the organization that you want to invite external users to.

* The Azure AD tenant, to which you want to invite external users, must allow adding new users, per your Azure AD guest policies. For more information, see [how to become eligible to invite external users on your Azure AD tenant](/azure/active-directory/active-directory-b2b-delegate-invitations).

* The user policy, **External guest access**, must be **On** for the organization that you want to invite external users to. See the following image example.
   * Team and Project Administrators can only invite external users if the user policy, **Allow team and project administrators to invite new users**, is **On**. For more information, see [Restrict invitations from Project and Team Administrators](../security/restrict-invitations.md).
   * If instead the *Invite GitHub users* policy displays, you're recognized as a GitHub user and so the GitHub invitation experience is available. For more information, see [Enable GitHub invitations](../../repos/get-started/sign-up-invite-teammates.md).

![External guest access turned on](media/add-external-user/guest-access-preview.png)

> [!TIP]
> We recommend using a different email or user principal name (UPN) for your personal and business accounts, rather than using the same, even though it's allowed. This eliminates the challenge of disambiguating between your business and personal accounts when the email/UPN is the same.

## Invite external user

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Users**, and then select **Add users**.
   
   ![Select the Users tab, and then select Add users](../../media/add-new-users.png)

4. Complete the form based on the following guidance, and then select **Add**.

    - **Users**: Enter the email address for the user. You can add several email addresses by separating them with a semicolon (;). For Microsoft accounts (MSAs), the email addresses display in red.
    - **Access level**: You can add up to five users with *Basic* access. You're included as one of the five users. Otherwise, you can add an unlimited number of users with *Stakeholder* access. In public projects, both Stakeholder and Basic access levels grant full access to **Code**, **Work**, and **Build and Release**. But, Stakeholders only get partial access to **Test** and **Dashboards**. For more information, see [Default roles & permissions](../security/permissions-access.md).
    - **Add to projects**: Select each public project that you want to add the user to.  
    - **Azure DevOps Groups**: Leave this entry at Project Contributors, the default security group for people who contribute to your project. For more information, see [Default permissions and access assignments](../security/permissions-access.md).
    - **Send email invites**: Check this box to invite your new users via their email addresses.

5. Advise the external user to locate the email that they received from AzureDevOps@microsoft.com with the subject, **You have been invited to an Azure DevOps project** and select **Join now**. This final step adds the user to your organization. The invitation looks similar to the following image.

    :::image type="content" source="media/add-external-user/external-user-email-invitation.png" alt-text="External user's invitation email":::

>[!Note]
>If you need to resend the invitation email, go to **Users**, select the user, and then select **Resend invite**.

The external user is added to the organization to which they were invited and has immediate access.

A guest user can add other guest users to the organization after being granted the Guest Inviter role in Azure AD.

## Related articles

* [What is Azure AD B2B collaboration?](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b)
* [Migrate to group-based resource management](./assign-access-levels-by-group-membership.md)
* [Assign access levels to users by group membership](assign-access-levels-by-group-membership.md)
* [Restrict invitations to new users](../security/restrict-invitations.md)
