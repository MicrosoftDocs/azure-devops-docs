---
ms.topic: include
---

## Invite team members

Give team members access to your organization by adding their email addresses or GitHub usernames to your organization. For GitHub user invitations, ensure you've [enabled the policy, *Invite GitHub users*](../user-guide/sign-up-invite-teammates.md#enable-github-invitations) in **Organization settings** > **Policies** tab.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![Organization settings](/azure/devops/_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](/azure/devops/_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users** > **Add new users**.

   ![Select Add new users](/azure/devops/organizations/accounts/_img/_shared/add-new-users.png)

4. Enter the following information:

   - **Users:** Enter the email addresses (Microsoft accounts) or [GitHub usernames](#enable-github-invitations) for the users. You can add several email addresses by separating them with a semicolon (;). An email address appears in red when it's accepted.  
   - **Access level:** Leave the access level as **Basic** for users who will contribute to the code base. To learn more, see [About access levels](/azure/devops/organizations/security/access-levels).  
   - **Add to project:** Select the project you want to add them to.  
   - **DevOps Groups:** Leave as **Project Contributors**, the default security group for users who will contribute to your project. To learn more, see [Default permissions and access assignments](/azure/devops/organizations/security/permissions-access).  

	> [!NOTE]  
	> Add email addresses for [personal Microsoft accounts](https://account.microsoft.com/account) and IDs for GitHub accounts unless you plan to use [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/) to authenticate users and control organization access. If a user doesn't have a Microsoft or GitHub account, ask the user to [sign up](https://signup.live.com/) for a Microsoft account or a GitHub account.  

5. When you're done, select **Add** to complete your invitation.

