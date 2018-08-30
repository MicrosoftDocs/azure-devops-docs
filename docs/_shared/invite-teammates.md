---
ms.topic: include
---

## Invite teammates

You provide others access to your organization by adding their email addresses to your organization.

1. Sign in to your Azure DevOps organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](/azure/devops/_shared/_img/icons/gear-icon.png) **Admin settings**.

   ![Open Admin Settings](/azure/devops/_shared/_img/settings/open-admin-settings-vert.png)

3. Choose **Users** and then choose **Add new users**.

   ![Choose Add new users](/azure/devops/organizations/accounts/_img/_shared/add-new-users.png)

4. Complete the form.

   - **Users:** Enter the email address (Microsoft account address) for the user. You can add several email addresses by separating them with a semicolon (;). Note that the email addresses display in red when they are accepted.
     > [!Note]
     > You must add email addresses for [personal Microsoft accounts](https://account.microsoft.com/account?lang=en-US) unless you plan to use [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/) to authenticate users and control organization access.
     > If your users don't have Microsoft accounts, have them [sign up](https://signup.live.com/).
   - **Access level:** Leave the Access level at Basic for those users who will contribute to the code base. To learn more, see [About access levels](/azure/devops/organizations/security/access-levels).
   - **Add to project:** Select the project that you named in the previous procedure.
   - **DevOps Groups:** Leave this entry at Project Contributors, the default security group for users who will contribute to your project. Tl learn more, see [Default permissions and access assignments](/azure/devops/organizations/security/permissions-access).

5. When you're done, choose **Add** to complete your invitation.