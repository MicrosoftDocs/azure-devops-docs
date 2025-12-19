---
ms.topic: include
ms.subservice: azure-devops-organizations
ms.author: chcomley
author: chcomley
---

## Inform users of the completed Microsoft Entra change

When you inform your users of the completed change, provide them with the following tasks to do:

1. Sign out of Azure DevOps.
2. Clear browser cache.
    If you use Visual Studio or the Git command-line too, clear the cache for the [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager/). Delete the *%LocalAppData%\GitCredentialManager\tenant.cache* file on each client machine.
3. Sign in to Azure DevOps using Microsoft Entra ID or work credentials.
4. Reconfigure any personal access tokens (PATs) or SSH keys, if necessary.

   - **PATs:** Complete the steps in [Use personal access tokens](../use-personal-access-tokens-to-authenticate.md).
   - **SSH keys:**
    1. In Azure DevOps, open your **profile**, and then select **Security** from the resulting dropdown menu.
      
    :::image type="content" source="../media/shared/select-security-profile-menu.png" alt-text="Screenshot showing Security selection emphasized.":::

    2. Select **SSH public keys**, and then select **Add**.

    :::image type="content" source="../media/shared/user-settings-security-ssh.png" alt-text="Screenshot that shows adding an SSH public key.":::

    3. Enter a description and key data, and then select **Save**.

    :::image type="content" source="../media/shared/add-ssh-public-key-info.png" alt-text="Screenshot showing info dialog for creating SSH key.":::

    4. Copy your key and put it in a safe place, since you can't view it again.

5. Rename your Microsoft account (MSA). [Rename your MSA](https://support.microsoft.com/help/11545/microsoft-account-rename-your-personal-account) to a different email that doesn't conflict with your Microsoft Entra identity. Doing so ensures that you aren't prompted to choose between accounts.

6. (Optional) Adjust your visual Studio (VS) subscription. If the UPN used inside your organization changed, adjust your Visual Studio subscription. You can reassign the subscription to your new UPN, or set that UPN as the alternate account inside the subscription. For more information, see [how to add an alternate account to your subscription](/visualstudio/subscriptions/vs-alternate-identity#add-an-alternate-account-to-your-subscription).
