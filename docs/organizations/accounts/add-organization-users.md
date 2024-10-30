---
title: Add users to organizations and manage access
titleSuffix: Azure DevOps
ms.custom: devx-track-azurecli
description: Learn how to add users to an organization and manage users' access levels (like Stakeholder), direct assignments, invitations, and more.
ms.topic: how-to
ms.subservice: azure-devops-organizations
ms.assetid: 19ac647f-04c1-4ddd-9953-b3ecfa0f1457
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 10/22/2024
---

# Add organization users and manage access

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to add users to your organization and manage user access through direct assignment. For an overview of adding users and related concepts, see [About organization management in Azure DevOps](organization-management.md). Users can include human users, service accounts, and [service principals](../../integrate/get-started/authentication/service-principal-managed-identity.md).

The following types of users can join your Azure DevOps Services organization for free:

* Five users who get [Basic features](https://azure.microsoft.com/services/devops/compare-features/), such as version control, tools for Agile, Java, build, release, and more
* Unlimited users who get [Stakeholder features](https://azure.microsoft.com/services/devops/compare-features/), such as working with your backlog, work items, and queries
* Unlimited [Visual Studio subscribers](https://azure.microsoft.com/services/devops/compare-features/) who also get Basic or Basic + Test Plan features, depending on their subscription level. 

[Need more users with Basic features?](../billing/buy-basic-access-add-users.md)

> [!NOTE]
> For information about inviting external users, see [Add external user](add-external-user.md).

## Prerequisites

* [!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]
* **Organization:** Have an organization. If you don't have an organization, [create one](create-organization.md).

For an overview of the methods supported for adding users to an organization, see [Add and manage user access](organization-management.md#add-users).

## Add users to your organization

Administrators can efficiently manage user access by adding users to an organization, granting them access to the appropriate tooling extensions and service access levels, and assigning them to relevant groups—all from a single view. This streamlined process ensures that new users have the necessary permissions and resources to start contributing immediately.

> [!NOTE]
> If you have a Microsoft Entra ID-backed organization and need to add users who are external to Microsoft Entra ID, first [add external users](add-external-user.md). On the **Tell us about this user** page, under **Type of user**, choose **User with an existing Microsoft account**. After completing those steps, follow these instructions to add the Microsoft Entra ID user to Azure DevOps.

You can add up to 50 users in a single transaction. When you add users, each user receives a notification email with a link to the organization page, allowing them to easily access and start using the organization's resources.

#### [Browser](#tab/browser)

To give other users access to your organization, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Users** > **Add users**.

   ![Select the Users tab, and then select Add users](../../media/add-new-users.png)

4. Enter the following information.

   > [!div class="mx-imgBorder"]  
   >![Web portal, organization admin context, Add new users dialog box](media/add-organization-users-from-user-hub/add-new-users-dialog.png)

   * **Users:** Enter the email addresses (Microsoft accounts) or GitHub usernames of the users. You can add multiple email addresses by separating them with a semicolon `;`. Accepted email addresses appear in red. For more information about GitHub authentication, see [Connect to GitHub/FAQs](../../boards/github/connect-to-github.md#faqs). To add a service principal, enter the display name of the application or managed identity.
     * **Access level:** Set the access level to **Basic** for users who contribute to the code base. For more information, see [About access levels](../security/access-levels.md).  
   * **Add to projects:** Select the project to which you want to add the users.  
   * **Azure DevOps Groups:** Leave as **Project Contributors**, the default security group for users who contribute to your project. For more information, see [Default permissions and access assignments](../security/permissions-access.md).  

   >[!NOTE]
   > Add email addresses for [personal Microsoft accounts](https://account.microsoft.com/account) and IDs for GitHub accounts unless you plan to use [Microsoft Entra ID](/azure/active-directory/fundamentals/active-directory-whatis) to authenticate users and control organization access. If a user doesn't have a Microsoft or GitHub account, ask them to sign up for a [Microsoft account](https://signup.live.com/) or a [GitHub account](https://github.com/join).

5. Select **Add** to complete your invitation.

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

[Add a user](#add-user) | [List users](../security/export-users-audit-log.md#list-users) | [Remove a user](delete-organization-users.md#remove-user) | [Update a user](add-organization-users.md#update-user) | [Show users](add-organization-users.md#show-users)

<a id="add-user"></a>

### Add a user

You can add users to an organization by using the [az devops user add](/cli/azure/devops/user#az-devops-user-add) command. To get started, see [Azure DevOps CLI](../../cli/index.md).

```azurecli
az devops user add –-email-id 
		   --license-type {advanced, earlyAdopter, express, professional, stakeholder}
		   [--send-email-invite {false, true}]
           [--org]
```

#### Parameters

* **email-id**: Required. Enter the Microsoft account's email address for the user organization.
* **license-type**: Required. Enter stakeholder, express, professional, or advanced based on the mapping provided in the following table. For Users who contribute to the code base require express or higher level of license-type. For more information, see [About access levels](../../organizations/security/access-levels.md).
* **send-email-invite**: Optional. Specify whether to send email invite for new user or not.
* **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

The following table provides a mapping of the access level selected through the user interface and the `AccountLicenseType` parameter.

| Access level (user interface)| AccountLicenseType | 
| --------------------------|---------------------|
| Stakeholder | stakeholder | 
| Basic              | express  |  
| Basic + Test Plans | advanced | 

 > [!NOTE]
 > The `earlyAdopter` AccountLicenseType is an internal value used solely by Microsoft.  

#### Example

The following command adds the user with the email address contoso@contoso.com to your organization. It grants stakeholder level access to the user and shows the result in table format.

```azurecli
az devops user add --email-id contoso@contoso.com --license-type stakeholder --output table

ID                                    Display Name          Email                 License Type    Access Level    Status

------------------------------------  --------------------  --------------------  --------------  --------------  --------
35b1952b-ca8c-45b5-a60c-d6b0086aa584  contoso@contoso.com   contoso@contoso.com   stakeholder     Stakeholder     pending 
```


You can also add the user to the project-level **Contributors** group, the default Azure DevOps security group for people who contribute to your project. For more information, see [Add or remove users or groups, manage security groups](../security/add-remove-manage-user-group-security-group.md).

```azurecli
az devops security group membership --group-id vssgp.Uy0xLTktMTU1MTM3NDI0NS0xMTM1NzQ1NzUzLTExNDI0NTQwOTQtMjQ4MjkwODAwNS0xNDU4NjAwODE1LTEtMTY5NTI2NTAyNi00MjM0Mzc1NS0yMTY5ODM4OTczLTI0NDk3NzU5NDE --member-id contoso@contoso.com
```

You can see all security groups in a project using the [az devops security group list](../security/add-manage-security-groups.md) command.

* * *

For more information about user access, read [about access levels](../security/access-levels.md).

> [!NOTE]
> You can add people to projects instead of to your organization. Users are automatically assigned [Basic features](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) if your organization has seats available, or [Stakeholder features](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/) if not. Learn how to [add members to projects](../security/add-users-team-project.md#add-users-to-a-project).
>
> When a user no longer needs access to your organization, [delete them](delete-organization-users.md) from your organization.

## Manage users

From your web browser, you can view and edit certain user information. Using the Azure DevOps CLI, you can see details about a specific user and update their access level.

The Users view displays key information for each user in a table. In this view, you can:

* See and modify assigned service extensions and access levels.
* Multi-select users and bulk edit their extensions and access levels.
* Filter by searching for partial user names, access levels, or extension names.
* See the last access date for each user. This information can help you identify users to remove or lower their access to stay within your license limits. For more information, see [Permissions and access](../security/permissions-access.md).

#### [Browser](#tab/browser)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Users**.

   ![.](../../media/open-organization-settings-users-preview.png)

4. Select a user or group of users. Then, select **Actions ...** at the end of the **Name** column to open the context menu.

In the context menu, choose one of the following options:

* **Change access level**
* **Manage user**
* **Resend invite**
* **Remove direct assignments**
* **Remove from organization** (deletes user)
     ![Select Users, select an item in the context menu](media/manage-users/manage-users-show-context-menu-preview.png)

5. **Save** your changes.

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

[Add a user](add-organization-users.md#add-user) | [List users](../security/export-users-audit-log.md#list-users) | [Remove a user](delete-organization-users.md#remove-user) |[Update a user](#update-user) | [Show users](#show-users)

<a id="update-user"></a>

### Update a user

You can update a user's license type with the [az devops user update](/cli/azure/devops/user#az-devops-user-update) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md). 

```azurecli
az devops user update  --license-type {advanced, earlyAdopter, express, professional, stakeholder}
                      --user [--org]
```

#### Parameters

* **license-type**: License type for the user. Accepted values are advanced, earlyAdopter, express, professional, and stakeholder.
* **user**: The email address or ID of the user.  
* **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

#### Example

The following command updates the license type for email address contoso@contoso.com from **Basic** to **Stakeholder** and shows the result in table format.

```azurecli
az devops user update --license-type stakeholder --user contoso@contoso.com --output table

ID                                    Display Name         Email                License Type    Access Level    Status
------------------------------------  -------------------  -------------------  --------------  --------------  --------

35b1952b-ca8c-45b5-a60c-d6b0086aa584  contoso@contoso.com  contoso@contoso.com  stakeholder     Stakeholder     pending
```

<a id="show-users"></a> 

### Show users

You can show details for users in your organization with the [az devops user show](/cli/azure/devops/user#az-devops-user-show) command. To get started, see [Azure DevOps CLI](../../cli/index.md).

```azurecli
az devops user show --user [--org]
```

#### Parameters

* **user**: The email address or ID of the user.
* **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`.

Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

#### Example

The following command returns user details for the email address contoso@contoso.com in table format.

```azurecli
az devops user show --user contoso@contoso.com --output table

ID                                    Display Name         Email                License Type    Access Level    Status
------------------------------------  -------------------  -------------------  --------------  --------------  --------

35b1952b-ca8c-45b5-a60c-d6b0086aa584  contoso@contoso.com  contoso@contoso.com  stakeholder     Stakeholder     active

```

* * *

## Restrict users' view to organization projects

To restrict certain users' access to organizational information, enable the **Limit user visibility and collaboration to specific projects** preview feature and add the users to the **Project-Scoped Users** group. Once added, users in that group can't access projects that they aren't explicitly added to.

> [!NOTE]
> Users and groups added to the **Project-Scoped Users** group have limited access to project and organization information. They also have restricted access to specific identities through the people picker. For more information, see [Limit user visibility for projects, and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group).

To add users to the new **Project-Scoped Users** group, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Turn on the **Limit user visibility and collaboration to specific projects** preview feature for the organization. For more information, see [Manage preview features](../../project/navigation/preview-features.md).

   > [!TIP]  
   > The **Project-Scoped Users** group only appears under **Permissions** > **Groups** once **Limit user visibility and collaboration to specific projects** preview feature gets enabled.

3. Add users or groups to your project by following the steps in [Add users to a project or team](../security/add-users-team-project.md). When you add users to a team, they automatically get added to both the project and the team group.

4. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

5. Select **Security** > **Permissions** > **Project-Scoped Users**. 
6. Choose the **Members** tab. 
7. Add all users and groups that you want to scope to the project you added them to.

[!INCLUDE [project-scoped-users-important-note](../../includes/project-scoped-users-important-note.md)]

For more information, see [Add or remove users or groups, manage security groups](../security/add-remove-manage-user-group-security-group.md).

[!INCLUDE [project-scoped-users-warning](../../includes/project-scoped-users-warning.md)]

## FAQ

#### Q: Which email addresses can I add?

**A:**

* If your organization is connected to Microsoft Entra ID, you can only add email addresses that are internal to the directory.
  * Add email addresses of users who have ["personal" Microsoft accounts](https://www.microsoft.com/account) unless you authenticate users and control access through [Microsoft Entra ID](/azure/active-directory/fundamentals/active-directory-whatis) using your organization's directory.
* If your organization is connected to your directory, all users must be directory members. They must sign in to Azure DevOps with work or school accounts managed by your directory. If they aren't members, they need to be [added to the directory](add-external-user.md).

![Screenshot shows adding members' sign-in addresses or display names.](media/add-team-members/add-user-or-group-to-project.png)

After you add members to your project, each member receives an invitation email with a link to your organization. They can use this link to sign in and access your project. First-time members might get asked for more details when they sign in to personalize their experience.

#### Q: What if users don't get or lose the invitation email?

**A:**

- For **Organizations connected to Microsoft Entra ID**: If you're [inviting users from outside your Microsoft Entra ID](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b), they must use their email. Removing users from the organization removes both their access and their license. However, any artifacts assigned to them remain unchanged. You can always invite users back into the organization if they exist in the Microsoft Entra tenant. After they're removed from Microsoft Entra ID, you can't assign any new artifacts (work items, pull requests, and so on) to them. The history of artifacts already assigned to the users is preserved.

- For **Organizations with Microsoft accounts**: You can send a link to the project page, included in the invitation email, to new team members. Removing users from the organization removes both their access and their licenses. You can no longer assign any new artifacts (work items, pull requests, and so on) to these users. However, any artifacts previously assigned to them remain unchanged.

### Q: Why can't I add any more members?

**A:** See [Q: Why can't I add any more members to my project?](faq-user-and-permissions-management.yml#q--why-can-t-i-add-any-more-members-to-my-project-).

#### Q: How is *access* different from *permissions*?

**A:** Access levels determine a user's access to specific web portal features based on their subscription. Permissions control a user's ability to perform specific operations, which get governed by security group membership or specific Access Control Level (ACL) assignments made to a user or group.

## Next steps

> [!div class="nextstepaction"]
> [Set up billing](../billing/set-up-billing-for-your-organization-vs.md#set-up-billing)

## Related articles

* [Create a project](../projects/create-project.md)
* [Invite external users](add-external-user.md)
* [Manage access to specific features and functions](../../organizations/security/restrict-access.md)
* [Delete users from Azure DevOps](delete-organization-users.md)
* [Export a list of users and their access levels](../security/export-users-audit-log.md)
