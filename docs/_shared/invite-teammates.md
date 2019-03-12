---
ms.topic: include
---

## Invite team members

Give a team member access to your organization by adding their email address to your organization.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![Organization settings](/azure/devops/_shared/_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](/azure/devops/_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users** > **Add new users**.

   ![Select Add new users](/azure/devops/organizations/accounts/_img/_shared/add-new-users.png)

4. Complete the form by entering or selecting the following information:

   - **Users:** Enter the email addresses (Microsoft account) for the users. You can add several email addresses by separating them with a semicolon (;). An email address appears in red when it's accepted.  
   - **Access level:** Leave the access level as **Basic** for users who will contribute to the code base. To learn more, see [About access levels](/azure/devops/organizations/security/access-levels).  
   - **Add to project:** Select the project you named in the preceding procedure.  
   - **DevOps Groups:** Leave as **Project Contributors**, the default security group for users who will contribute to your project. To learn more, see [Default permissions and access assignments](/azure/devops/organizations/security/permissions-access).  

	> [!NOTE]  
	> You must add email addresses for [personal Microsoft accounts](https://account.microsoft.com/account) unless you plan to use [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/) to authenticate users and control organization access. If a user doesn't have a Microsoft account, ask the user to [sign up](https://signup.live.com/) for a Microsoft account.  

5. When you're done, select **Add** to complete your invitation.