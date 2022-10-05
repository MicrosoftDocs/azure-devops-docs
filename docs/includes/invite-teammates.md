---
ms.topic: include
---


## Invite users


Invite users to your organization by adding their email address or GitHub ID to your organization. For GitHub user invitations, ensure you've enabled the policy, *Invite GitHub users* in **Organization settings** > **Policies**.

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![Organization settings](../media/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../media/settings/open-admin-settings-vert.png)

3. Select **Users** > **Add users**.

   :::image type="content" source="../media/add-new-users.png" alt-text="Select Add users":::

4. Enter the following information:

   - **Users**: Enter email addresses (Microsoft accounts) or GitHub usernames. Separate them with a semicolon (;).
   - **Access level**: Leave the access level as **Basic** for users to contribute to the code base. For more information, see [About access levels](../organizations/security/access-levels.md).  
   - **Add to project**: Select the project to which you want to add the users.  
   - **DevOps Groups**: Leave as **Project Contributors**, the default security group for users who will contribute to your project. For more information, see [Default permissions and access assignments](../organizations/security/permissions-access.md).  

5. When you're done, select **Add** to complete your invitation.
