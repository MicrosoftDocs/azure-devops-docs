---
title: Switch to another Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18, engagement-fy23
description: Learn how to change or switch your organization connection to a different Azure Active Directory.
ms.subservice: azure-devops-organizations
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 06/06/2023
monikerRange: 'azure-devops'
---

# Change your organization connection to a different Azure AD

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to switch your organization connection from one Azure Active Directory (Azure AD) to another. When you change directories, your project resources remain unaffected.

For more information about using Azure AD with Azure DevOps, see the [Conceptual overview](access-with-azure-ad.md).

## Prerequisites

- You must be a Project Collection Administrator group for the organization.
- You must be a member or a guest in the source Azure AD and a member in the destination Azure AD. For more information, see how to [convert an Azure AD guest into a member](faq-azure-access.yml).
- Confirm there are 100 or fewer users in your organization. If your organization has more than 100 users, [contact Support](https://azure.microsoft.com/support/devops/) to resolve any disconnected users. You can map them to their Azure AD identities in the new tenant.
- Request that SSH keys get manually cleared by [Support](https://azure.microsoft.com/support/devops/) before you switch directories. You can find the steps for how to recreate SSH keys [further in this article](#inform-users-of-the-completed-change). For more information, see the [FAQ](faq-azure-access.yml).
- Don't add the users from the destination Azure AD into the Azure DevOps organization.
- If you [add any new custom domains](/azure/active-directory/fundamentals/add-custom-domain) to your Azure AD directory, contact [Support](https://azure.microsoft.com/support/devops/) before you migrate customers over to the new custom domain as this action breaks the mapping for existing identities. 

> [!IMPORTANT]
> Users and groups who inherit membership and permissions from an Azure AD group, will no longer inherit those permissions after the transfer. Azure AD groups that were added to your Azure DevOps organization don't get transferred and will cease to exist in your organization when the Azure AD connection is changed. All permissions and membership relationships made with these Azure AD groups will also cease to exist after the transfer.
          

## Change the Azure AD connection

1. Sign into your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing highlighted Organization settings button.":::

3. Select **Azure Active Directory**, and then **Switch directory**.

   :::image type="content" source="media/change-azure-ad-connection.md/select-switch-directory.png" alt-text="Screenshot showing Switch directory button emphasized.":::

4. Select a directory from the dropdown menu, and then select **Connect**.

   :::image type="content" source="media/shared/select-directory-connect.png" alt-text="Screenshot showing Azure AD dropdown menu, and then Connect button emphasized.":::

   If you can't find your directory, contact your Azure AD administrator to request that they add you as a member to the Azure AD.

5. Select **Sign out**.

   :::image type="content" source="media/shared/connect-success-dialog.png" alt-text="Screenshot showing Sign out button emphasized.":::

    Your organization connects to your Azure AD.

6. Confirm that the process is complete. Sign out, and then open your browser in a private session and sign in to your organization with your Azure AD or work credentials.

7. If some members are disconnected, sign back in to Azure DevOps and map them to their Azure AD identities. Or, you can invite them as guests into the Azure AD. For more information, see the [FAQs](./faq-azure-access.yml#faq-connect).

   :::image type="content" source="media/shared/azure-ad-select-resolve-for-disconnected-users.png" alt-text="Screenshot showing Resolve button emphasized.":::

   :::image type="content" source="media/shared/resolve-disconnected-users.png" alt-text="Screenshot showing Resolve disconnected users dialog.":::

## Inform users of the completed change

When you inform your users of the completed change, include the following tasks for each user in the organization to complete.

### Clear cache for Git Credential Manager

If you use Visual Studio or the Git command-line too, clear the cache for the [Git Credential Manager](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/blob/master/Docs/Faq.md#q-why-is-gitexe-failing-to-authenticate-after-linkingunlinking-your-visual-studio-team-services-organization-from-azure-active-directory). Delete the *%LocalAppData%\GitCredentialManager\tenant.cache* file on each client machine.

### Regenerate new PATs

Complete the steps in [Use personal access tokens](use-personal-access-tokens-to-authenticate.md).

### Recreate SSH keys

Complete the following steps to recreate your SSH keys.

1. In Azure DevOps, open your **profile**, and then select **Security** from the resulting dropdown menu.

   :::image type="content" source="media/shared/select-security-profile-menu.png" alt-text="Screenshot showing Security selection emphasized.":::

2. Select **SSH public keys**, and then select **Add**.

   :::image type="content" source="media/shared/user-settings-security-ssh.png" alt-text="Screenshot that shows adding an SSH public key.":::

3. Enter a description and key data, and then select **Save**.

   :::image type="content" source="media/shared/add-ssh-public-key-info.png" alt-text="Screenshot showing info dialog for creating SSH key.":::

4. Copy your key and put it in a safe place, as you can't view it again.

### Rename your MSA

[Rename your Microsoft account](https://support.microsoft.com/help/11545/microsoft-account-rename-your-personal-account) to a different email that doesn't conflict with your Azure AD identity. Doing so ensures that you aren't prompted to choose between accounts.

### Adjust your VS subscription

If the UPN used inside your organization changed, adjust your Visual Studio subscription. You can reassign the subscription to your new UPN, or set that UPN as the alternate account inside the subscription. For more information, see [how to add an alternate account to your subscription](/visualstudio/subscriptions/vs-alternate-identity#add-an-alternate-account-to-your-subscription).

## Related articles

- [Rename a project](../projects/rename-project.md)
- [Rename an organization](rename-organization.md)
- [Get a list of organizations backed by Azure AD](get-list-of-organizations-connected-to-azure-active-directory.md)
- [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Disconnect your organization from Azure AD](disconnect-organization-from-azure-ad.md)
