---
title: Troubleshoot access, permission issues
titleSuffix: Azure DevOps
description: Find helpful troubleshooting information for resolving access and permission issues in Azure DevOps.  
ms.assetid: 
ms.technology: devops-security
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 03/12/2021
--- 

# Troubleshoot access and permission issues

[!INCLUDE [version-all](../../includes/version-all.md)]

Because Azure DevOps security and permission structure is extensive, you may find yourself needing to investigate why you or a project member doesn’t have the access to a project, service, or feature that they expect to have. Find step-by-step guidance to understand and address problems a project member may be having in connecting to a project or accessing an Azure DevOps service or feature. 

Before using this guide, we recommend that you review the following articles: 
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Default permissions and access quick reference.](permissions-access.md) 
- [Quick reference index to Azure DevOps security](quick-reference-index-security.md)  

> [!TIP]
> When you're creating an Azure DevOps security group, label it in a way that is easy to discern if it is created to limit access.

## Common access and permission issues

Permissions get set at one of the following levels:
- object level
- project level
- organization or project collection level
- security role
- team administrator role

To trace a permission from the web portal, open the permission or security page for the corresponding level. To learn how, see [Change individual permissions](change-individual-permissions.md).

See the following most common reasons a project member can’t access a project, service, or feature: 

- Their access level doesn’t support access to the service or feature. To discover if this is the cause, you want to determine the users access level and subscription status.   
- Their membership within a security group doesn’t support access to a feature or they have been explicitly denied permission to a feature. To discover if this is the cause, [trace a permission](#trace-a-permission). 
- The user has been recently granted permission, however a refresh is required for their client to recognize the changes. Have them perform a **Refresh/re-evaluate permissions**.  
- The user is trying to exercise a feature granted only to a team administrator for a specific team however they haven’t been granted that role. To add them to the role, see [Add, remove team administrator](../settings/add-team-administrator.md) .
- The user hasn’t enabled a preview feature. To troubleshoot, have them open the Preview features and determine the on/off status for the specific feature. See [Manage preview features](../../project/navigation/preview-features.md).
- Project member has been added to a limited scope security group, such as the Project-Scoped Users group. To discover if this is a cause, look up the user’s permission memberships.  
 
Less common reasons for limited access occur when one of the following events has occurred: 

- A project admin has disabled a service. In this case, no one has access to the disabled service.  To determine if a service has been disabled, see [Turn an Azure DevOps service on or off](../settings/set-services.md).
- A Project Collection Administrator has disabled a preview feature, which disables it for all project members in the organization. See [Manage preview features](../../project/navigation/preview-features.md).
- Group rules governing the user’s access level or project membership  can restrict access. To troubleshoot, see Membership in a group that has less access or permissions.
- Custom rules have been defined to a work item type’s workflow. To investigate, see [Rules applied to a work item type that restrict select operations](#rules-applied-to-a-work-item-type-that-restrict-permissions). 

## Determine a user's access level and subscription status

You can assign users or groups of users to one of the following access levels:
- Stakeholder
- Basic
- Basic + Test Plans
- Visual Studio subscription

For more information about access level restriction, see [Supported access levels](access-levels.md#supported-access-levels) in Azure DevOps.

To use Azure DevOps features, users must be added to a security group with the appropriate permissions. They also need access to the web portal. Limitations to select features are based on the access level and security group to which a user is assigned.

A user can lose access for the following reasons:

- The user's Visual Studio subscription has expired. Meanwhile, the user can [work as a Stakeholder](../../organizations/security/get-started-stakeholder.md), or you can give the user Basic access until the user renews their subscription. After the user signs in, Azure DevOps restores access automatically.
- The Azure subscription used for billing is no longer active. All purchases made with this subscription are affected, including Visual Studio subscriptions. To fix this issue, visit the [Azure account portal](https://portal.azure.com).
- The Azure subscription used for billing was removed from your organization. Learn more about [linking your organization](../billing/set-up-billing-for-your-organization-vs.md).

Otherwise, on the first day of the calendar month, users who haven't signed in to your organization for the longest time lose access first. If your organization has users who don't need access anymore, [remove them from your organization](../accounts/delete-organization-users.md).

For more information about permissions, see [Permissions and groups](permissions.md), and the [Permissions lookup guide](permissions-lookup-guide.md).

## Trace a permission

Use permission tracing to determine why a user's permissions aren't allowing them access to a specific feature or function. Learn how a user or an administrator can investigate the inheritance of permissions.

::: moniker range=" azure-devops"

If a user's having permissions issues and you use default security groups or custom groups for permissions, you can investigate where those permissions are coming from by using our permissions tracing. Permissions issues could be because of delayed changes. It can take up to 1 hour for Azure AD group memberships or permissions changes to propagate throughout Azure DevOps. If a user's having issues that don't resolve immediately, wait a day to see if they resolve. For more information about user and access management, see [Manage users and access in Azure DevOps](../accounts/add-organization-users.md). 

::: moniker-end

::: moniker range="< azure-devops"

If a user's having permissions issues and you use default security groups or custom groups for permissions, you can investigate where those permissions are coming from by using our permissions tracing. Permissions issues could be because the user doesn't have the necessary access level.

::: moniker-end

Users can receive their effective permissions either directly or via groups.

Complete the following steps so administrators can understand where exactly those permissions are coming from and adjust them, as needed.

::: moniker range="azure-devops"

1. Select **Project settings** > **Permissions** > **Users**, and then select the user.

   :::image type="content" source="media/permissions-page-enter-user-name.png" alt-text="Enter user name into filter box":::

   You should now have a user-specific view that shows what permissions they have.

2.  To trace why a user does or doesn't have any of the listed permissions, select the information icon next to the permission in question.

   :::image type="content" source="media/select-information-icon.png" alt-text="Select the information icon next to the permission in question":::

The resulting trace lets you know how they're inheriting the listed permission. You can then adjust the user's permissions by adjusting the permissions that are provided to the groups that they're in.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Select **Project settings** > **Security**, and then enter the user name into the filter box.

   :::image type="content" source="media/security-page-enter-user-name-2019.png" alt-text="Enter user name into the filter box":::

   You should now have a user-specific view that shows what permissions they have.

2. Trace why a user does or doesn't have any of the listed permissions. Hover over the permission, and then choose **Why**.

   :::image type="content" source="media/permissions-list-view-project-level-information-2019.png" alt-text="Choose Why in permissions list view for project level information":::

The resulting trace lets you know how they're inheriting the listed permission. You can then adjust the user's permissions by adjusting the permissions that are provided to the groups they're in.

   :::image type="content" source="media/trace-permission-group-member-inheritance-2019.png" alt-text="Trace showing inherited permissions":::

::: moniker-end

::: moniker range="<= tfs-2018"

1.	Go to the Security page for the project that the user is having access problems.
2.	Enter their name into the box in the upper left-hand corner.
   
   ![Enter user name to view permissions](media/security-page-enter-user-name.png)

   You should now have a user-specific view that shows what permissions they have.

3.	Trace why a user does or doesn't have any of the listed permissions. Hover over the permission, and then choose **Why**.

   :::image type="content" source="media/permissions-list-view-project-level-information.png" alt-text="Select Why to trace the permissions":::

The resulting trace lets you know how they're inheriting the listed permission. You can then adjust the user's permissions by adjusting those permissions provided to the groups they're in.

::: moniker-end

For more information, see [Grant or restrict access to select features and functions](restrict-access.md) or [Change individual permissions](change-individual-permissions.md).

## Refresh or reevaluate permissions

### Problem

::: moniker range=" azure-devops"

Users get added to an Azure DevOps or Azure AD group. This action grants inherited access to an organization or project. But, they don't get access immediately. Users must either wait or sign out, close their browser, and then sign back in to get their permissions refreshed. 

::: moniker-end

::: moniker range=" < azure-devops"

Users get added to an Azure DevOps group. This action grants inherited access to an organization or project. But, they don't get access immediately. Users must either wait or sign out, close their browser, and then sign back in to get their permissions refreshed. 

::: moniker-end

### Solution

Within **User settings**, on the **Permissions** page, you can select **Reevaluate permissions**. This function reevaluates your group memberships and permissions, and then any recent changes take effect immediately.

:::image type="content" source="media/troubleshoot-permissions/re-evaluate-permissions-button.png" alt-text="Reevaluate permissions control":::

::: moniker-end

## Rules applied to a work item type that restrict select operations

Before you customize a process, we recommend that you review [Configure and customize Azure Boards](../../boards/configure-customize.md), which provides guidance on how to customize Azure Boards to meet your business needs.

For more information about work item type rules that apply toward restricting permissions, see:

- [Apply rules to workflow states (Inheritance process)](../settings/work/apply-rules-to-workflow-states.md)
- [Restrict modification of select fields based on a user group](../settings/work/custom-rules.md#restrict-modification-of-select-fields-based-on-a-user-or-group)
- [Restrict modification of closed work items](../settings/work/custom-rules.md#restrict-modification-of-closed-work-items)

For more information, see the following articles:

- [Define area paths and assign to a team](../settings/set-area-paths.md)

::: moniker-end

## Hide organization settings from users

If a user's limited to seeing only their projects, or from seeing the organization settings, the following information may explain why. To restrict users from accessing organization settings, you can enable the **Limit user visibility for projects** preview feature. 

::: moniker range=" azure-devops"

Examples of restricted users include Stakeholders, Azure Active Directory (Azure AD) guest users, or members of a security group. Once enabled, any user or group added to the Project-Scoped Users group gets restricted from accessing the Organization Settings pages, except for Overview and Projects. They're restricted to accessing only those projects to which they've been added. 

::: moniker-end

::: moniker range=" <= azure-devops"

Examples of restricted users include Stakeholders, or members of a security group. Once enabled, any user or group added to the Project-Scoped Users group gets restricted from accessing the Organization Settings pages, except for Overview and Projects. They're restricted to accessing only those projects to which they've been added. 


::: moniker-end

For more information about hiding organization settings from users, see [About projects, Project-scoped User group](../projects/about-projects.md#project-scoped-user-group).

::: moniker range=" azure-devops"

## View, add, and manage permissions with CLI

You can view, add, and manage permissions at a more granular level with the `az devops security permission` commands. For more information, see [Manage permissions with command line tool](https://docs.microsoft.com/azure/devops/organizations/security/manage-tokens-namespaces?view=azure-devops).

::: moniker-end

::: moniker range=" < azure-devops-2019"

### Use tools to fix permission

You can use the following tools to fix a user's permission issue.

- TFSSecurity.exe - TFSSecurity is a command-line tool that can be used to view and update and delete permissions or groups. 

Example usage:
`tfssecurity /a+ Identity "81e4e4b5-bde0-4f2c-a7a5-4d25c2e8a81f\" Read "Project Collection Valid Users" ALLOW /collection:{collectionUrl}`
`tfssecurity /a- Identity "3c7a0a47-27b4-4def-8d42-aab9b405fc8a\" Write n:"[Project1]\Contributors" DENY /collection:{collectionUrl}`

- Use the public sproc

Example usage:
Use `prc_pSetAccessControlEntry` or `prc_pRemoveAccessControlEntries` to add or remove ACEs directly from the security tables if TFSSecurity doesn't work for you.

For more information, see [Use TFSSecurity to manage groups and permissions for Azure DevOps](https://docs.microsoft.com/azure/devops/server/command-line/tfssecurity-cmd?view=azure-devops-2020).

::: moniker-end

## Membership in a security group with lesser permissions

::: moniker range=" azure-devops"

## Group rules with lesser permissions

Group rule types are ranked in the following order: Subscriber > Basic + Test Plans > Basic > Stakeholder. 
Users always get the best access level between all the group rules, including Visual Studio (VS) subscription. 

See the following examples, showing how the subscriber detection factors into group rules.

### Example 1: Group rule gives me more access

If I have a VS Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get Basic + Test Plans because what the group rule gives me is greater than my subscription. Group rule assignment always provides the greater access, rather than limiting access.

### Example 2: Group rule gives me the same access

I have a Visual Studio Test Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get detected as a Visual Studio Test Pro subscriber, because the access is the same as the group rule. I'm already paying for the Visual Studio Test Pro, so I don't want to pay again.

::: moniker-end

## Work with GitHub


### Problem
You're trying to deploy code in Azure DevOps with GitHub. The issue is that you can't bring the rest of your team into the organization and project, despite your adding them as organization and project members. They receive emails but when signing in they receive an error 401. 

### Solution

Complete the following steps.

1.Close all browsers, including browsers that aren't running Azure DevOps.

2.Open a private or incognito browsing session.

3.Go to this URL: https://aka.ms/vssignout.

You see a message that says, "Sign out in progress." After you sign out, you're redirected to the Azure DevOps @dev.azure.microsoft.com webpage.

4.Sign in to [Azure DevOps](https://dev.azure.com/{organizationName}) again. Select your other identity.


<!--->
## Other 

Where are all the default permissions and groups? See security/permissions

Add external users
Turn on External guest access policy - link to add-external-user

Dashboard
Wiki
Project-level
feedback
organization
extension management

see stackoverflow


https://docs.microsoft.com/en-us/azure/devops/organizations/security/manage-tokens-namespaces?view=azure-devops manage permissions with command line tool


-->

::: moniker range=">= azure-devops-2019"

## Other areas where permissions might be applied

- [Area path permissions](set-permissions-access-work-tracking.md)
- [Work item tags](../../boards/queries/add-tags-to-work-items.md)
- [Moved work items out of a project](../../boards/backlogs/move-change-type.md)
- [Deleted work items](../../boards/backlogs/remove-delete-work-items.md#delete-work-items)
- [Azure Boards Team Administrator permissions and access](../../boards/get-started/permissions-access-boards.md)
- [Custom rules](../settings/work/custom-rules.md#add-a-custom-rule)
- [Custom fields](../settings/work/custom-rules.md#restrict-modification-of-select-fields-based-on-a-user-or-group)
- [Custom backlogs and boards](../settings/work/customize-process-backlogs-boards.md)
- [Custom controls](../settings/work/custom-controls-process.md)

::: moniker-end

## Related articles

- [Change individual or group permissions](change-individual-permissions.md)
- [Security and permission management tools](security-tools-reference.md)  
- [Add users to an organization (Azure DevOps Services)](../accounts/add-organization-users.md)  
- [Add users to a team or a project](../../organizations/security/add-users-team-project.md)   
- [Add users to an administrator role](/azure/devops/server/admin/add-administrator)   
