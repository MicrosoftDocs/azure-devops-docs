---
ms.topic: include
ms.subservice: azure-devops-organizations
ms.author: chcomley
author: chcomley
---

## User action required: Microsoft Entra ID connection completed

Your Azure DevOps organization is now connected to Microsoft Entra ID. Complete these steps to ensure seamless access with your new work credentials:

### Immediate steps (required for all users)

1. **Sign out of Azure DevOps completely** to clear your current session.

1. **Clear your browser cache** to remove stored authentication data:
   - **Browser cache**: Clear cookies and cached data for Azure DevOps (dev.azure.com)
   - **Git Credential Manager cache**: If you use Visual Studio or Git command-line tools, delete the `%LocalAppData%\GitCredentialManager\tenant.cache` file on each client machine

1. **Sign back in to Azure DevOps** using your Microsoft Entra ID (work) credentials instead of your personal Microsoft account.

### Authentication updates (complete as needed)

**Recommended: Use modern authentication methods**
With Microsoft Entra ID connection, you can now use more secure authentication options:
- **Git Credential Manager** with Microsoft Entra ID sign-in (recommended for Git operations)
- **Integrated authentication** through Visual Studio and other Microsoft tools
- **Conditional access policies** and multifactor authentication for enhanced security

**Personal Access Tokens (PATs) - Use only when necessary:**
> [!IMPORTANT]
> Personal Access Tokens are less secure than modern authentication methods. Use PATs only for scenarios where modern authentication isn't supported (such as certain automation tools or legacy integrations).

**SSH Keys:**
If you use SSH for Git operations, add your SSH key to your new Microsoft Entra ID profile:

1. In Azure DevOps, select your **profile picture**, then select **Security** from the dropdown menu.
      
   :::image type="content" source="../media/shared/select-security-profile-menu.png" alt-text="Screenshot showing Security selection emphasized.":::

2. Select **SSH public keys**, then select **Add**.

   :::image type="content" source="../media/shared/user-settings-security-ssh.png" alt-text="Screenshot that shows adding an SSH public key.":::

3. Enter a description and paste your public key data, then select **Save**.

   :::image type="content" source="../media/shared/add-ssh-public-key-info.png" alt-text="Screenshot showing info dialog for creating SSH key.":::

4. Copy the key details for your records, as you can't view the full key again.

### Account conflict resolution

**Microsoft Account (MSA) rename:**
To avoid being prompted to choose between accounts during sign-in, [rename your personal Microsoft account](https://support.microsoft.com/help/11545/microsoft-account-rename-your-personal-account) to use a different email address that doesn't conflict with your work email.

**Visual Studio subscription adjustment (if applicable):**
If your User Principal Name (UPN) changed during this transition, update your Visual Studio subscription:
- Reassign the subscription to your new UPN, or
- Set the new UPN as an alternate account in your subscription

For detailed guidance, see [how to add an alternate account to your subscription](/visualstudio/subscriptions/vs-alternate-identity#add-an-alternate-account-to-your-subscription).

> [!TIP]
> If you encounter any issues during this transition, contact your organization's administrator or IT support team for assistance.
