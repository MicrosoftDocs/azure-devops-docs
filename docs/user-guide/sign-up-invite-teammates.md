---
title: Sign up for Azure DevOps
titleSuffix: Azure DevOps Services
ms.custom: seodec18  
description: Sign up for Azure DevOps with a Microsoft or GitHub account.
ms.technology: devops-new-user 
ms.topic: how-to 
ms.author: chcomley
author: chcomley
ms.date: 03/03/2022
monikerRange: 'azure-devops'
---

# Sign up for Azure DevOps

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Azure DevOps gives you an integrated set of services and tools to manage your software projects, from planning and development through testing and deployment. You can sign up for [Azure DevOps](what-is-azure-devops.md) for free with either a Microsoft or GitHub account.

## Prerequisites

Use either of the following accounts to sign up for Azure DevOps:
- a Microsoft account. If you don't have one, [create a Microsoft account now](https://azure.microsoft.com/services/devops/).
- a GitHub account. If you don't have one, [create a GitHub account now](https://github.com/join).

## Sign up

1. Select the sign-up link for [Azure DevOps](https://azure.microsoft.com/services/devops/).
2. Enter your account credentials and go through the sign-up process. With a GitHub account, you're asked to **Authorize Microsoft-corp**.

> [!NOTE]
> If your GitHub email address is associated with an Azure AD-backed organization in Azure DevOps, you can't sign in with your GitHub account, rather you must sign in with your Azure AD account.

An organization gets created based on the account you used to sign in. 
- If you signed in with a newly created Microsoft account, then your project is automatically created and named after your account name.
- If you signed in with an existing Microsoft account, you can [create a project](../organizations/projects/create-project.md) next.

Sign in to your organization at any time `https://dev.azure.com/{yourorganization}`.

### Enable GitHub invitations

When you create a new Azure DevOps organization with your GitHub account, we turn on the *Invite GitHub users* policy by default. For existing organizations, your administrator can turn on this capability via **Organization settings** > **Policies**. 

Once the setting gets changed, sign out of Azure DevOps, and then from a fresh browser session, sign back in to the organization `dev.azure.com/{organizationName}` or `organizationName.visualstudio.com` with your GitHub credentials. You're recognized as a GitHub user and the GitHub invitation experience is available to you.

![Invite GitHub users policy ](/azure/devops/media/invite-github-users-policy.png)

For more information about GitHub authentication, see [FAQs](../organizations/security/faq-github-authentication.yml).

## Next steps  
 
> [!div class="nextstepaction"]
> [Add users to your organization](../organizations/accounts/add-organization-users.md)

## Related articles

- [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md)
- [Rename your organization](../organizations/accounts/rename-organization.md)
- [Change the location of your organization](../organizations/accounts/change-organization-location.md)
- [Add users to your organization](../organizations/accounts/add-organization-users.md)
- [Create a project](../organizations/projects/create-project.md)
- [Add users or groups to a team or project](../organizations/security/add-users-team-project.md)
