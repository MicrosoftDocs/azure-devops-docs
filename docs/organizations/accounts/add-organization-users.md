---
title: Add new users to your organization or project
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: How to add users to an organization or project
ms.prod: devops
ms.topic: conceptual
ms.technology: devops-accounts
ms.assetid: 19ac647f-04c1-4ddd-9953-b3ecfa0f1457
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/17/2019
monikerRange: 'azure-devops'
---

# Add users to your organization or project

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

Learn how to add users to your organization, and specify the level of features they can use, such as Basic or Stakeholder.
The following types of users can join your organization for free:

* Five users who get [Basic features](https://azure.microsoft.com/services/devops/compare-features/), such as version control, tools for Agile, Java, build, release, and more
* Unlimited users who get [Stakeholder features](https://azure.microsoft.com/services/devops/compare-features/), such as working with your backlog, work items, and queries
* Unlimited [Visual Studio subscribers](https://azure.microsoft.com/services/devops/compare-features/) who also get Basic features. Additional features, such as [Azure Test Plans](https://azure.microsoft.com/services/devops/test-plans/), can be assigned to users by access level, Basic + Test Plans.


[Need more users with Basic features?](../billing/buy-basic-access-add-users.md)

## How *access* differs from *permissions*

Features that are available to users are controlled by access levels  - the full set of organization resources that a user is entitled to access. Permissions control which of these organization resources the user can act on. To learn more, see [Default permissions and access for Azure DevOps](../../security/permissions-access.md).

## Prerequisites

You must have Project Collection Administrator or organization Owner permissions in Azure DevOps. For more information, see [Set permissions at the project level or project collection level](../security/set-project-collection-level-permissions.md?toc=/azure/devops/organizations/accounts/toc.json&bc=/azure/devops/organizations/accounts/breadcrumb/toc.json).

## Add users to your organization

Administrators can now add users to an organization, grant access to appropriate tooling extensions and service access level,
and add users to groups all in one view. You can add up to 50 users at once. You can add more than 50 users by repeatedly
using this Users view. When you add users, each user receives a notification email with a
link to the organization page.

 > [!NOTE]
 > If you have an Azure Active Directory (Azure AD)-backed organization, and you need to add users who are external to Azure AD, first [add external users](add-external-user.md). On the **Tell us about this user page**, under **Type of user**, be sure to choose **User with an existing Microsoft account**. After you complete those steps, use the following steps to add the Azure AD
 > user to Azure DevOps.


#### [Browser](#tab/browser)

To give other users access to your organization, add their email addresses.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users**, and then select **Add new users** to open the form.

   ![Select Add new users](_img/_shared/add-new-users.png)

4. Enter information into the form.

   > [!div class="mx-imgBorder"]  
   >![Web portal, organization admin context, Add new users dialog box](_img/add-organization-users-from-user-hub/invite-users-add-user-dialog.png)

   - **Users:** Enter the email addresses (Microsoft accounts) or GitHub usernames for the users. You can add several email addresses by separating them with a semicolon (;). An email address appears in red when it's accepted. For more information about GitHub authentication, see [FAQs](../security/faq-github-authentication.md).
   - **Access level:** Leave the access level as **Basic** for users who will contribute to the code base. To learn more, see [About access levels](/azure/devops/organizations/security/access-levels).  
   - **Add to project:** Select the project you want to add them to.  
   - **DevOps Groups:** Leave as **Project Contributors**, the default security group for users who will contribute to your project. To learn more, see [Default permissions and access assignments](/azure/devops/organizations/security/permissions-access).  

	> [!NOTE]  
	> Add email addresses for [personal Microsoft accounts](https://account.microsoft.com/account) and IDs for GitHub accounts unless you plan to use [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/) to authenticate users and control organization access. If a user doesn't have a Microsoft or GitHub account, ask the user to [sign up](https://signup.live.com/) for a Microsoft account or a GitHub account.  
5. Select **Add** to complete your invitation.

<!---
Go to Users:

![go to users](_img/_shared/users-hub-updated.png)

Choose **Add new users** below "Manage users".

![Choose the Add Users button](_img/user-hub/add-users-button-718.png)

Then fill in the "Add new users" dialog:

![Add users by inviting them to the organization](_img/user-hub/add-users.png)

Next steps: [Manage users in table view](manage-users-table-view.md)
-->

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

You can add users through [Azure DevOps CLI](../../cli/get-started.md) to an organization.

1. Add user to an organization

    ```
    az devops user add –-email-id contoso@contoso.com --license-type basic --org https://dev.azure.com/contoso --send-email-invite true
    ```

   * **email-id**: Enter the Microsoft account's email address for the user organization

   * **license-type**: Leave the access level at **Basic** for users who contribute to the code base. To learn more, see [About access levels](../../organizations/security/access-levels.md)

     For details, see [az devops user add command.](https://docs.microsoft.com/cli/azure/ext/azure-devops/devops/user?view=azure-cli-latest#ext-azure-devops-az-devops-user-add)

2. Add the user to a Azure DevOps Group- Project Contributors, the default security group for people who contribute to your project. To learn more, see [Default permissions and access assignments](https://review.docs.microsoft.com/en-us/azure/devops/organizations/security/permissions-access?view=azure-devops).

    ```
    az devops security group membership --group-id vssgp.Uy0xLTktMTU1MTM3NDI0NS0xMTM1NzQ1NzUzLTExNDI0NTQwOTQtMjQ4MjkwODAwNS0xNDU4NjAwODE1LTEtMTY5NTI2NTAyNi00MjM0Mzc1NS0yMTY5ODM4OTczLTI0NDk3NzU5NDE --member-id contoso@contoso.com
    ```
    
    You can see all security groups in a project using the [az devops security group list](/cli/azure/ext/azure-devops/devops/security/group#ext-azure-devops-az-devops-security-group-list) command.

* * *

## Related articles

* [Connect to a project](../../organizations/projects/connect-to-projects.md)
* [Change individual permissions, grant select access to specific functions](../../organizations/security/change-individual-permissions.md)
* [Grant or restrict access to select features and functions](../../organizations/security/restrict-access.md)
* [Delete users from Azure DevOps](delete-organization-users.md)
