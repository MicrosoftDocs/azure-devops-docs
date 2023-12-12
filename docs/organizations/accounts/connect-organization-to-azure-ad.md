---
title: Connect organization to Microsoft Entra ID
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to connect your organization to your Microsoft Entra ID
ms.subservice: azure-devops-organizations
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 05/11/2022
monikerRange: 'azure-devops'
---

# Connect your organization to Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to connect your Azure DevOps organization to [Microsoft Entra ID](/azure/active-directory/fundamentals/active-directory-whatis). You can sign in with the same username and password that you use with Microsoft services. Add members to your Azure DevOps organization who are already a part of your work organization. You can also enforce policies for accessing your team's critical resources and key assets. 

For more information about using Microsoft Entra ID with Azure DevOps, see the [conceptual overview](access-with-azure-ad.md).

## Prerequisites

- Have 100 or fewer users in your organization. If your organization has more than 100 users, [contact Support](https://azure.microsoft.com/support/devops/) for help with connecting to Microsoft Entra ID. 
- You must be a [member of the **Project Collection Administrators** group](../security/look-up-project-collection-administrators.md) or the [**organization Owner**](../security/look-up-organization-owner.md) to make the connection.
- Ensure that you exist in Microsoft Entra ID as a *member*. For more information, see [how you can convert a Microsoft Entra ID *guest* into a *member*](./faq-azure-access.yml#how-can-i-convert-an-azure-ad-guest-into-a-member).
- Inform users of the upcoming change.
   There's no downtime during this change, but users are affected. Let them know before you begin that there's a short series of steps they need to complete. As your company transitions from Microsoft account (MSA) to Microsoft Entra identities, your users' benefits continue with their new identity, as long as their emails match.
- Delete unwanted users from your organization. For example, you can remove a user who left the company and is no longer an employee.
- Prepare your mapping list for inviting users to Microsoft Entra ID.

    1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
    2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.
        
        ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

    3. Select **Users**.
        
        ![Open organization settings, users](../../media/settings/open-organization-settings-users-vert.png)

    4. Compare your Azure DevOps email list with your Microsoft Entra ID email list. Create a Microsoft Entra ID email address entry for every user who's in the Azure DevOps organization and not in the Microsoft Entra ID. Afterward, you can [invite users as guests](add-external-user.md) who don't have Microsoft Entra ID email addresses.
    
> [!NOTE]
> Ensure you're using Microsoft Entra Public. Connecting Azure DevOps Services organizations to Microsoft Entra Government and accessing Azure DevOps Services with user accounts from Microsoft Entra Government isn't supported.

<a name='connect-your-organization-to-azure-ad'></a>

## Connect your organization to Microsoft Entra ID

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)
3. Select **Microsoft Entra ID**, and then select **Connect directory**.

   ![Select Connect directory to connect your organization to Microsoft Entra ID](media/shared/select-azure-ad-connect-directory.png)

4. Select a directory from the dropdown menu, and then select **Connect**.

   ![Select your Microsoft Entra ID, and then Connect](media/shared/select-directory-connect.png)
   
   If you can't find your directory, contact your Microsoft Entra administrator and request that they add you as a member to the Microsoft Entra ID.

5. Select **Sign out**.

   ![Connect success dialog - select Sign out](media/shared/connect-success-dialog.png)

    Your organization is now connected to your Microsoft Entra ID.

6. Confirm that the process is complete. Sign out, and then open your browser in a private session and sign in to your organization with your Microsoft Entra ID or work credentials.

7. Sign back in to Azure DevOps and map any disconnected members to their Microsoft Entra identities. Or, you can invite them as guests into the Microsoft Entra ID. For more information, see the [FAQs](./faq-azure-access.yml#faq-connect).

   ![Select Resolve to invite unmapped users](media/shared/azure-ad-select-resolve-for-disconnected-users.png)

   ![Mapping disconnected users](media/shared/resolve-disconnected-users.png)

## Inform users of the completed change

When you inform your users of the completed change, include the following tasks for each user in the organization to complete:

- Clear the cache for the [Git Credential Manager](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/blob/master/Docs/Faq.md#q-why-is-gitexe-failing-to-authenticate-after-linkingunlinking-your-visual-studio-team-services-organization-from-azure-active-directory) if you use Visual Studio or the Git command-line tool. Delete the *%LocalAppData%\GitCredentialManager\tenant.cache* file on each client machine. 
- [Regenerate new personal access tokens](use-personal-access-tokens-to-authenticate.md). Complete the following steps:

    a. In Azure DevOps, open your **User profile**, and then select **Security** from the resulting dropdown menu.

     ![Select from your profile dropdown menu, Security](media/shared/select-security-profile-menu.png)

    b. Select **Personal access tokens**, and then select **New Token**.
    
     ![Select New Token](media/shared/select-personal-access-tokens-new-token.png)

    c. Complete the form, and then select **Create**.

     ![Create new token](media/shared/create-new-personal-access-token.png)

    d. When the token is created, copy it, as it can't be viewed again.

- Request that SSH keys be manually cleared by [Support](https://azure.microsoft.com/support/devops/), and then recreate SSH keys. Complete the following steps.

    a. In Azure DevOps, open your **User profile**, and then select **Security** from the resulting dropdown menu.

     ![Select from your profile dropdown menu, Security](media/shared/select-security-profile-menu.png)

    b. Select **SSH public keys**, and then select **Add**.

     ![Screenshot that shows adding an SSH public key.](media/shared/user-settings-security-ssh.png)

    c. Enter a description and key data, and then select **Save**.

     ![Add info to create SSH key](media/shared/add-ssh-public-key-info.png)

    d. When the token's created, copy it, as it can't be viewed again.

- [Rename your Microsoft account](https://support.microsoft.com/help/11545/microsoft-account-rename-your-personal-account) to a different email that doesn't conflict with your Microsoft Entra identity. Doing so ensures that you won't be prompted to choose between accounts.
- Adjust your Visual Studio subscription if the UPN used inside your Azure DevOps organization has changed. You can have it reassigned to your new UPN, or set that UPN as the alternate account inside the subscription. For more information, see [how to add an alternate account to your subscription](/visualstudio/subscriptions/vs-alternate-identity#add-an-alternate-account-to-your-subscription).

## Related articles

* [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
* [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
* [Disconnect from Microsoft Entra ID](disconnect-organization-from-azure-ad.md)
* [Change Microsoft Entra connection](change-azure-ad-connection.md)
* [Frequently asked questions (FAQs) about connecting, disconnecting, or changing your Microsoft Entra ID](./faq-azure-access.yml)
