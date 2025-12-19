---
ms.topic: include
---

## Sign up with a GitHub account

> [!NOTE]
> If your GitHub email address is associated with an organization in Azure DevOps [connected to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md), you can't sign in with your GitHub account. Sign in with your Microsoft Entra account instead.

1. If you don't have one, [create a GitHub account](https://github.com/join).
2. Go to [Azure DevOps](https://azure.microsoft.com/services/devops/) and select **Get started with Azure**.
3. Select **Sign in with GitHub**.
4. Enter your account credentials and go through the sign-up process. You're asked to **Authorize Microsoft-corp**.

   Azure DevOps creates an organization. Sign in to your organization at any time `https://dev.azure.com/{Your_Organization}`.
   Azure DevOps turns on the *External guest access* policy by default. 
   
   ![Screenshot of the Invite GitHub users policy.](../media/invite-github-users-policy.png)

An organization gets created based on the account you used to sign in. Sign in to your organization at any time, (`https://dev.azure.com/{Your_Organization}`).

You can rename and delete your organization, or change the organization location. For more information, see [Manage organizations](../organizations/accounts/organization-management.md).

### Enable GitHub invitations

Creating a new Azure DevOps organization with your GitHub username turns on the External guest access policy by default. For existing organizations, your administrator can turn on this capability via **Organization settings** > **Policies** tab. 

Once the setting gets changed, sign out of Azure DevOps, and then from a fresh browser session, sign back in to the organization `dev.azure.com/{Organization_Name}` or `organizationName.visualstudio.com` with your GitHub credentials. You're recognized as a GitHub user and the GitHub invitation experience is available to you.

For more information about GitHub authentication, see [Connect to GitHub/FAQs](../boards/github/connect-to-github.md#faqs).
