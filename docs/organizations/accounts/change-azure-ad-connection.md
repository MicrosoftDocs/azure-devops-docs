---
title: Switch to another Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to change or switch your organization connection to a different Azure Active Directory.
ms.technology: devops-accounts
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/07/2021
monikerRange: 'azure-devops'
---

# Change your organization connection to another Azure AD

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

If you need to switch your organization connection from one Azure Active Directory (Azure AD) to another, complete the following steps.

For more information about using Azure AD with Azure DevOps, see the [Conceptual overview](access-with-azure-ad.md).

## Prerequisites

Before you switch your organization directory, make sure the following statements are true:

- You're in the Project Collection Administrator group (in Organization settings) for the organization.
- You're a member or a guest in the source Azure AD and in the destination Azure AD.
- There are 100 or fewer users in your organization. If your organization has more than 100 users, [contact Support](https://azure.microsoft.com/support/devops/) for help with changing your Azure AD.

Do the following task:

- Request that SSH keys be manually cleared by [Support](https://azure.microsoft.com/support/devops/). You can find the steps for how to recreate SSH keys [further in this article](#inform-users-of-the-completed-change).

## Change the Azure AD connection

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Azure Active Directory**, and then **Switch directory**.

   ![Select Switch directory](media/change-azure-ad-connection.md/select-switch-directory.png)

4. Select a directory from the dropdown menu, and then select **Connect**.

   ![Select your Azure AD, and then Connect](media/shared/select-directory-connect.png)
   If you can't find your directory, contact your Azure AD administrator and request that they add you as a member to the Azure AD.

5. Select **Sign out**.

   ![Connect success dialog - select Sign out](media/shared/connect-success-dialog.png)

    Your organization is now connected to your Azure AD.

6. Confirm that the process is complete. Sign out, and then open your browser in a private session and sign in to your organization with your Azure AD or work credentials.

7. If some members are disconnected, sign back in to Azure DevOps and map them to their Azure AD identities. Or, you can invite them as guests into the Azure AD. For more information, see the [FAQs](/azure/devops/organizations/accounts/faq-azure-access#faq-connect).

   ![Select Resolve to invite unmapped users](media/shared/azure-ad-select-resolve-for-disconnected-users.png)

   ![Mapping disconnected users](media/shared/resolve-disconnected-users.png)

## Inform users of the completed change

When you inform your users of the completed change, include the following tasks for each user in the organization to complete:

- [Change your organization connection to another Azure AD](#change-your-organization-connection-to-another-azure-ad)
  - [Prerequisites](#prerequisites)
  - [Change the Azure AD connection](#change-the-azure-ad-connection)
  - [Inform users of the completed change](#inform-users-of-the-completed-change)
    - [Clear cache for Git Credential Manager](#clear-cache-for-git-credential-manager)
    - [Regenerate new PATs](#regenerate-new-pats)
    - [Recreate SSH keys](#recreate-ssh-keys)
    - [Rename your MSA](#rename-your-msa)
    - [Adjust your VS subscription](#adjust-your-vs-subscription)
  - [Related articles](#related-articles)

### Clear cache for Git Credential Manager

If you use Visual Studio or the Git command-line too, clear the cache for the [Git Credential Manager](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/blob/master/Docs/Faq.md#q-why-is-gitexe-failing-to-authenticate-after-linkingunlinking-your-visual-studio-team-services-organization-from-azure-active-directory). Delete the *%LocalAppData%\GitCredentialManager\tenant.cache* file on each client machine.

### Regenerate new PATs

Complete the following steps to [Regenerate new personal access tokens](use-personal-access-tokens-to-authenticate.md).

1. In Azure DevOps, open your **profile**, and then select **Security** from the resulting dropdown menu.

   ![Select from your profile dropdown menu, Security](media/shared/select-security-profile-menu.png)

2. Select **Personal access tokens**, and then select **New Token**.

   ![Select New Token to create](media/shared/select-personal-access-tokens-new-token.png)

3. Complete the form, and then select **Create**.

   ![Create new token](media/shared/create-new-personal-access-token.png)

4. When the token is created, copy it, as it can't be viewed again.

### Recreate SSH keys

Complete the following steps to recreate your SSH keys.

1. In Azure DevOps, open your **profile**, and then select **Security** from the resulting dropdown menu.

   ![Select from your profile dropdown menu, Security](media/shared/select-security-profile-menu.png)

2. Select **SSH public keys**, and then select **Add**.

   ![Screenshot that shows adding a SSH public key.](media/shared/user-settings-security-ssh.png)

3. Enter a description and key data, and then select **Save**.

   ![Add info to create SSH key](media/shared/add-ssh-public-key-info.png)

4. Cope your token, as it can't be viewed again.

### Rename your MSA

[Rename your Microsoft account](https://support.microsoft.com/help/11545/microsoft-account-rename-your-personal-account) to a different email that doesn't conflict with your Azure AD identity. Doing so ensures that you won't be prompted to choose between accounts.

### Adjust your VS subscription

If the UPN used inside your organization changed, adjust your Visual Studio subscription. You can reassign the subscription to your new UPN, or set that UPN as the alternate account inside the subscription. For more information, see [how to add an alternate account to your subscription](/visualstudio/subscriptions/vs-alternate-identity#add-an-alternate-account-to-your-subscription).

## Related articles

- [Get a list of organizations backed by Azure AD](get-list-of-organizations-connected-to-azure-active-directory.md)
- [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Disconnect your organization from Azure AD](disconnect-organization-from-azure-ad.md)
- [Connect your organization to Azure AD](connect-organization-to-azure-ad.md)
- [Frequently asked questions (FAQs) about connecting, disconnecting, or changing your Azure AD](/azure/devops/organizations/accounts/faq-azure-access#connect-to-disconnect-from-or-change-azure-ad-connection)
