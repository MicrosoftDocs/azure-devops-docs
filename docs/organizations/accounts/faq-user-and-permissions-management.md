---
title: Troubleshoot user and permissions management
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Learn the answers to frequently asked questions (FAQs), like the permissions that are required to manage users and user access, manage Visual Studio subscriptions, and more.
ms.technology: devops-accounts
ms.assetid: 7107fb6c-c132-45c2-a0d1-d44e9270e907
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 03/10/2020
monikerRange: '>= tfs-2013'
---

# User and permissions management FAQs

[!INCLUDE [temp](../../includes/version-vsts-tfs-all-versions.md)]

H2s list

Permissions
VS subscriptions
User access
Change app access policies
Add members to projects
Azure Active Directory users and permissions


## Permissions

### Q: Why can't I manage users?

A: To access and manage users at the organization level, you must be a member of the Project Collection Administrators group or the [organization Owner](../accounts/../security/lookup-organization-owner-admin.md). To get added, see [Set permissions at the project- or collection-level](/azure/devops/organizations/security/set-project-collection-level-permissions)

<a name="find-owner"></a>

[!INCLUDE [find-project-collection-administrator](../../includes/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-organization-owner](../../includes/qa-find-organization-owner.md)]

<a name="users-delay"></a>

[!INCLUDE [user-delay](../../includes/qa-user-delay.md)]

## Visual Studio subscriptions

<a name="MSDNSubscriber"></a>

### Q: When do I select "Visual Studio/MSDN Subscriber"?

A: Assign this access level to users who have active, valid [Visual Studio subscriptions](#EligibleMSDNSubscriptions). Azure DevOps automatically recognizes and validates Visual Studio subscribers who have Azure DevOps as a benefit. You need the email address that's associated with the subscription.

For example, if a user selects **Visual Studio/MSDN Subscriber**, but the user doesn't have a valid, active Visual Studio subscription, they can work only [as a Stakeholder](../../organizations/security/get-started-stakeholder.md).

<a name="EligibleMSDNSubscriptions"></a>

### Q: Which Visual Studio subscriptions can I use with Azure DevOps?

A:  See [Azure DevOps benefits for Visual Studio subscribers](/visualstudio/subscriptions/vs-vsts).

<a name="enterprise-professional"></a>

<a name="ValidateMSDNSubscription"></a>

#### Q: Why won't my Visual Studio subscription validate?

A: See [Why won't Azure DevOps recognize my Visual Studio subscription?](/visualstudio/subscriptions/vs-alternate-identity#faq)

<a name="why-access-changed"></a>

### Q: Why do Visual Studio subscriber access levels change after a subscriber signs in?

A: Azure DevOps recognizes Visual Studio subscribers. Azure DevOps automatically assigns a user access that's based on the user's subscription and not on the current access level that's assigned to the user.

<a name="subscription-expired"></a>

### Q: What happens if a user's subscription expires?

A: If no other access levels are available, users can [work as Stakeholders](../../organizations/security/get-started-stakeholder.md). To restore access, a user must renew their subscription.

<a name="extension-transition"></a>

### Q: What happened to Visual Studio Online Professional?

A: In 2016, we replaced Visual Studio Online Professional with the [Visual Studio Professional monthly subscription](https://marketplace.visualstudio.com/items/ms.vs-professional-monthly). Customers who'd been purchasing Visual Studio Online Professional were able to continue purchasing it after that point, but it wasn't available to new customers. On September 30, 2019, we'll officially retire Visual Studio Online Professional. As a courtesy, billing for it stopped after August 1, 2019.

When Visual Studio Online Professional is retired, any users that are still assigned to it are assigned to the best [Azure DevOps access level](https://azure.microsoft.com/email/?destination=%2Fen-us%2Fpricing%2Fdetails%2Fdevops%2Fazure-devops-services%2F&m=00000000-0000-0000-0000-000000000000&u=aeo-preview&l=azure-devops-services) available to your organization. As a result, your Professional users' access may be downgraded to Basic or Stakeholder. To avoid being downgraded, buy a Visual Studio Professional monthly subscription and assign your Professional users to it. The monthly subscription has the same monthly cost as Visual Studio Online Professional.

Follow these instructions to identify if you have Professional users, buy a monthly subscription, and assign them to it by September 30, 2019:

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Users** and filter by access level to show only Professional users.

   ![Sort by Access Level - Professional](media/shared/sort-by-professional-access-level.png)

4. Buy a [Visual Studio Professional monthly subscription](https://azure.microsoft.com/email/?destination=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dms.vs-professional-monthly&m=00000000-0000-0000-0000-000000000000&u=aeo-preview&l=items_2).
5. Assign your Professional users to the subscription in the [Visual Studio subscriptions administration portal](https://azure.microsoft.com/email/?destination=https%3A%2F%2Fmanage.visualstudio.com%2FSubscribers&m=00000000-0000-0000-0000-000000000000&u=aeo-preview&l=Subscribers).

If you don't complete these steps by September 30, 2019, and your users are downgraded to Basic or Stakeholder access, you may restore their Professional access at any time by following the instructions above.

## User access

### Q: What does "Last Access" mean in the All Users view?

The value in **Last Access** is the last date a user accessed any resources or services. Accessing Azure DevOps includes using *organizationname*.visualstudio.com directly and using resources or services indirectly. For example, you might use the [Azure Artifacts](https://azure.microsoft.com/services/devops/artifacts/) extension, or you can push code to Azure DevOps from a Git command line or IDE.

<a name="paid-basic-access-join-other-organizations"></a>

[!INCLUDE [can-paid-Basic-users-join-other-organizations](../../includes/qa-can-paid-basic-users-join-other-organizations.md)]

<a name="feature-access"></a>

[!INCLUDE [no-access-existing-features](../../includes/qa-no-access-existing-features.md)]

<a name="stopped-features"></a>

### Q: Why does a user lose access to some features?

A: A user can lose access for the following reasons (although the user can continue to [work as a Stakeholder](../../organizations/security/get-started-stakeholder.md)):

*    The user's Visual Studio subscription has expired. Meanwhile, the user can [work as a Stakeholder](../../organizations/security/get-started-stakeholder.md), or you can give the user Basic access until the user renews their subscription. After the user signs in, Azure DevOps restores access automatically.

*    The Azure subscription used for billing is no longer active. All purchases made with this subscription are affected, including Visual Studio subscriptions. To fix this issue, visit the [Azure account portal](https://portal.azure.com).

*    The Azure subscription used for billing was removed from your organization. Learn more about [linking your organization](../../billing/set-up-billing-for-your-organization-vs.md).

*    Your organization has more users with Basic access than the number of users that you're paying for in Azure. Your organization includes five free users with Basic access. If you need to add more users with Basic access, you can [pay for these users](../../billing/buy-basic-access-add-users.md). 

    Otherwise, on the first day of the calendar month, users who haven't signed in to your organization for the longest time lose access first. If your organization has users who don't need access anymore, [remove them from your organization](delete-organization-users.md).


## Change app access policies for your organization

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

<a name="Oauth"></a>

#### Q: How do personal access tokens differ from alternate authentication credentials?

A:  Personal access tokens are a more convenient and secure replacement for alternate authentication credentials. You can limit a token's use to a specific lifetime, to an organization, and to [scopes](../../integrate/index.md) of activities that the token authorizes. Learn more about [personal access tokens](use-personal-access-tokens-to-authenticate.md).

#### Q: If I deny access to one authentication method in one organization, does that affect all the organizations that I own?

A:  No, you can still use that method in all the other organizations that you own. [Personal access tokens](use-personal-access-tokens-to-authenticate.md) apply to specific organizations or to all organizations, based on your selection when you created the token.

#### Q:  If I deny access to an authentication method, then allow access again, will the apps that need access continue to work?

A:  Yes, those apps continue to work.

## Leaving your organization FAQs

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

In this article, find the following frequently asked questions and answers (FAQs) about removing yourself from an organization if the owner is unavailable or inactive.

#### Q: How do I remove myself from an organization when the owner isn't available to remove me?

A: To remove yourself from an organization, do the following steps:

1. Go to [aex.dev.azure.com](https://aex.dev.azure.com).
2. Select the organization, and then choose **Leave**.

    ![Member removing their self from the organization](media/faq/member-leave-organization.png)

3. Confirm that you want to **Leave** the organization.

    ![confirm-removal-from-organization.png](media/faq/confirm-removal-from-organization.png)



# Troubleshoot managing group-based licensing

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

In this article, find the following frequently asked questions and answers (FAQs) about managing group-based licensing.

#### Q: Will my users lose their access level and project membership if I remove a group rule?

A: Users in the group **TestGroup** lose access to group resources if the users haven't been explicitly assigned to the resources or assigned via a different group rule.

> [!div class="mx-imgBorder"]
> ![remove-test-group-group-rule-managing_group-based-licensing](media/faq/remove-test-group-rule.png)

#### Q: Will my Azure DevOps or Azure AD group be deleted if I remove its group rule?

A: No. Your groups won't be deleted.

#### Q: What does the option "Remove <group> from all project level groups" do?

A: This option removes the Azure DevOps or Azure AD group from any project-level default groups, such as **Project Readers** or **Project Contributors**.

#### Q: What determines the final access level if a user is in more than one group?

A: Group rule types are ranked in the following order: Subscriber > Basic + Test Plans > Basic > Stakeholder.
Users always get the best access level between all the group rules, including VS subscription.

See the following examples, showing how the subscriber detection factors into group rules.

**Example 1**: group rule gives me more access

If I have a VS Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get Basic + Test Plans because what the group rule gives me is greater than my subscription.

**Example 2**: group rule gives me the same access

I have a Visual Studio Test Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get detected as a Visual Studio Test Pro subscriber, because the access is the same as the group rule (and I'm already paying for the Visual Studio Test Pro, so I wouldn't want to pay again).

## Add administrators to projects and project collections

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

#### Q: When do I need to add someone to the Project Collection Administrator role in Azure DevOps?

A: It varies. For most organizations that use Azure DevOps, Project Collection Administrators manage the collections that members of the **Team Foundation Administrators** group create. Members of the **Project Collection Administrators** group don't create the collections themselves. Project collection administrators also perform many operations that are required to maintain the collection. Operations include creating team projects, adding users to groups, modifying the settings for the collection, and so on.

#### Q: What are the optimal permissions to administer a project collection across all of its components and dependencies?

A: Project collection administrators must be members of the following groups or have the following permissions:

- Team Foundation Server: A member of the **Project Collection Administrators** group, or have the appropriate [collection-level permissions](../../organizations/security/permissions.md#collection) set to **Allow**.

- SharePoint Products: If the collection is configured with a site collection resource, then a member of the **Site Collection Administrators** group.

- Reporting Services: If the collection is configured with reporting resources, then a member of the **Team Foundation Content Manager** group.

#### Q: I'm an admin, but I don't have permission to add a Project Collection Administrator. What do I need?

A: The following permissions are required:

- You must belong to the **Project Collection Administrators** group, or your **View Server-Level Information** and **Edit Server-Level Information** permissions must be set to **Allow**.

- To add permissions for SharePoint Products, you must be a member of the **Site Collection Administrators** or **Farm Administrators** groups for SharePoint Products.

- To add permissions for Reporting Services, you must be a member of the **Content Managers** or **Team Foundation Content Managers** groups for Reporting Services.

> [!Important]
> To perform administrative tasks like creating project collections, your user requires administrative permissions. The service account that the Team Foundation Background Job Agent uses must have certain permissions granted to it. For more information, see [Service accounts and dependencies in Team Foundation Server](/azure/devops/server/admin/service-accounts-dependencies) and [Team Foundation Background Job Agent](/azure/devops/server/architecture/background-job-agent).

#### Q: Where can I find information about each individual permission?

A: You can find detailed information about individual permissions and their relationship to default security groups in the [Permission and groups reference](../../organizations/security/permissions.md). To give a user project administration permissions, complete the following steps:

1. From the team page, select the settings icon ![Settings icon](media/admin-gear-icon.png) to go to the team administration page.

2. Add the user to the **Project Administrators** group.

## Add members to projects

[!INCLUDE [temp](../../includes/version-vsts-tfs-all-versions.md)]

<a name="cant-add-users"></a>

#### Q: Why can't I add any more members to my project?

A: Your organization is free for the first five users with Basic access. You can add unlimited Stakeholders and Visual Studio subscribers for no extra charge. After you assign all five free users with Basic access, you can continue adding Stakeholders and Visual Studio subscribers.

To add six or more users with Basic access, you need to [set up billing in Azure](../billing/set-up-billing-for-your-organization-vs.md). Then you can [pay for more users who need Basic access](../billing/buy-basic-access-add-users.md), return to your organization, [add these users, and assign them Basic access](add-organization-users.md). When billing is set up, you can pay monthly for the extra users' access. And you can cancel at any time.

If you need more Visual Studio subscriptions, learn [how to buy subscriptions](../billing/change-azure-subscription.md).

<a name="WhyCantSignIn"></a>

### Q: Why can't some users sign in?

A: This problem might happen because users must sign in with Microsoft accounts unless your organization controls access with Azure Active Directory (Azure AD). If your organization is connected to Azure AD, users must be directory members to get access. See [How do I find out if my organization uses Azure Active Directory (Azure AD)?](#ConnectedDirectory) 

If you're an Azure AD administrator, you can add users to the directory. If you're not, work with the directory administrator to add them. Learn [how to control organization access with Azure AD](access-with-azure-ad.md).

<a name="feature-access"></a>

[!INCLUDE [no-access-existing-features](../../includes/qa-no-access-existing-features.md)]

### Q: Why did some users lose access to certain features?

A: Loss of access might happen for [different reasons](faq-user-and-permissions-management.md#stopped-features).  

<a name="ConnectedDirectory"></a>

[!INCLUDE [does-organization-use-azuread](../../includes/qa-does-organization-use-azuread.md)]

<a name="RemovePeople"></a>

### Q: How do I remove users from my organization?

A: Learn [how to delete users](delete-organization-users.md) across all projects in your organization. If you paid for more users but don't need their organization access anymore, you must reduce your paid users to avoid charges.

#### Q: Why can't I find members from my connected Azure AD, even though I'm the Azure AD global admin?

A: You're probably a guest in the Azure AD instance that backs Azure DevOps. By default, Azure AD guests can't search in Azure AD. That's why you aren't finding users in your connected Azure AD to add to your organization.

First, check to see if you're an Azure AD guest:

1. Go to the **Settings** section of your organization. Look at the **Azure Active Directory** section at the bottom. Make a note of the tenant that backs your organization.
2. Sign in to the new Azure portal, portal.azure.com. Check your user profile in the tenant from step 1. Check the **User type** value shown as follows: 

    ![Check user type in the Azure portal](media/faq/check-user-type-in-Azure-portal.png)

If you're an Azure AD guest, do one of the following:

* Have another Azure DevOps admin, who isn't an Azure AD guest, manage the users in Azure DevOps for you. Members of the Project Collection Administrators group inside Azure DevOps can administer users.
* Have the Azure AD admin remove you from the connected Azure AD and re-add you. The admin needs to make you an Azure AD member rather than a guest. See **Can Azure AD B2B users be added as members instead of guests?**
* Change the **User Type** of the Azure AD guest by using Azure AD PowerShell. This is an advanced topic, and we don't advise it. But it works and allows the user to query Azure AD from Azure DevOps  thereafter.

1. [Download and install Azure AD PowerShell module](/powershell/module/azuread/?view=azureadps-2.0).
2. Open PowerShell and run the following cmdlets.

    a. Connect to Azure AD:

    ```
    C:\Users\rajr> Connect-AzureAD
    ```

    b. Find the **objectId** of the user:

    ```
    C:\Users\rajr> Get-AzureADUser
    ```

    c. Check the **usertype** attribute for this user to see if they're a guest or member:

    ```
    C:\Users\rajr> Get-AzureADUser -objectId cd7d47bf-1c6e-4839-b765-13edcd164e66
    ```

    d. Change the **usertype** from **member** to **guest**:

    ```
    C:\Users\rajr> Set-AzureADUser -objectId cd7d47bf-1c6e-4839-b765-13edcd164e66 -UserType Member
    ```

<a name="users-delay"></a>

[!INCLUDE [user-delay](../../includes/qa-user-delay.md)]

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../includes/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../includes/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../includes/qa-why-cant-sign-in-msa-azuread-account.md)]

<a name="find-pca-owner"></a>

[!INCLUDE [find-project-collection-administrator](../../includes/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-organization-owner](../../includes/qa-find-organization-owner.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../../includes/qa-get-vsts-support.md)]


