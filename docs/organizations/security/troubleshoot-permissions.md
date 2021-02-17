---
title: Troubleshoot permissions
titleSuffix: Azure DevOps
description: Troubleshoot resolving permissions issues in Azure DevOps.  
ms.assetid: 
ms.technology: devops-security
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/17/2021
--- 

# Troubleshoot permissions

[!INCLUDE [version-all](../../includes/version-all.md)]

Troubleshoot permissions, feature access, and connection access in Azure DevOps.

For more information and a comprehensive reference for each built-in user, group, and permission, see [Security groups, service accounts, and permissions in Azure DevOps](permissions.md). See also [Other areas where permissions might be applied](#other-areas-where-permissions-might-be-applied), which is listed further in this article.

## Look up permissions

You can look up permissions in Azure DevOps based on the following levels:
- object level    
- project level
- organization or project collection level  
- security role   
- team administrator role

For more information about permissions, see [Permissions and groups](permissions.md), and the [Permissions lookup guide](permissions-lookup-guide.md).

::: moniker range=" azure-devops"

## Hide organization settings from users

To restrict users from accessing organization settings, you can enable the **Limit user visibility for projects** preview feature. Examples of restricted users include Stakeholders, Azure Active Directory (Azure AD) guest users, or members of a security group. Once enabled, any user or group added to the Project-Scoped Users group gets restricted from accessing the Organization Settings pages, except for Overview and Projects. They're restricted to accessing only those projects to which they've been added. This preview feature isn't a permission, rather it's a limiting restriction in preview features.

For more information about hiding organization settings from users, see [About projects, Project-scoped User group](../projects/about-projects.md#project-scoped-user-group).

## Refresh permissions on-demand

### Problem

Users get added to an Azure DevOps or Azure AD group. This action grants inherited access to an organization or project. But, they don't get access immediately. Users must either wait or sign out, close their browser, and then sign back in to get their permissions refreshed. 

### Solution

Within **User settings**, on the **Permissions** page, you can select **Reevaluate permissions**. This function reevaluates your group memberships and permissions, and then any recent changes take effect immediately.

:::image type="content" source="media/troubleshoot-permissions/re-evaluate-permissions-button.png" alt-text="Reevaluate permissions control":::

::: moniker-end

::: moniker range="<= azure-devops-2020"

## Find all groups a user belongs to

There are the following two general approaches to investigating which groups a user belongs to.

- Bottom up. Start with a user who's experiencing access failure and use `tbl_GroupMembership` and `tbl_SecurityAccessControlEntry` to find the unwanted *deny* or the missing *allow*.
- Top down. Start with the Project Collection Valid Users group. This approach can be helpful when your permission isn't being enforced and everyone has access.

Tables to ask for:
`tbl_Identity`
`tbl_Group`
`tbl_GroupMembership`
`tbl_IdentityMap`
The following tables exist in both the configuration database and collection database. Make sure to ask for the correct one, based on what host level the failed permission check was done at.
`tbl_SecurityAccessControlEntry` 
`tbl_SecurityInheritance` 

For more information about commands, see [Azure DevOps security group commands](https://docs.microsoft.com/cli/azure/ext/azure-devops/devops/security/group?view=azure-cli-latest)

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

## Permission check failures


For more information about Azure DevOps CLI commands, see [Azure DevOps security group commands](https://docs.microsoft.com/cli/azure/ext/azure-devops/devops/security/group?view=azure-cli-latest)

::: moniker-end

## Trace a permission

Use permission tracing to determine why a user's permissions aren't allowing them access. Learn how a user or an administrator can investigate the inheritance of permissions.

::: moniker range=" azure-devops"

If a user is having permissions issues and you use default security groups or custom groups for permissions, you can investigate where those permissions are coming from by using our permissions tracing. Permissions issues could be because of delayed changes. It can take up to 1 hour for Azure AD group memberships or permissions changes to propagate throughout Azure DevOps. If a user's having issues that don't resolve immediately, wait a day to see if they resolve. For more information about user and access management, see [Manage users and access in Azure DevOps](../accounts/add-organization-users.md) 

::: moniker-end

::: moniker range="< azure-devops"

If a user is having permissions issues and you use default security groups or custom groups for permissions, you can investigate where those permissions are coming from by using our permissions tracing. Permissions issues could be because the user doesn't have the necessary access level. Access levels enable administrators to provide their users base access to the features they need, and only pay for those features. Several features can only be accessed with a Basic access level or higher. For more information about assigning access levels or checking the access level of a user in your organization, see [About access levels](access-levels.md) and [Change access levels](change-access-levels.md).

::: moniker-end

Users can receive their effective permissions either directly or via groups.

Complete the following steps so administrators can understand where exactly those permissions are coming from and adjust them, as needed.

::: moniker range="azure-devops"

1. Select **Project settings** > **Permissions** > **Users**, and then select the user.

   :::image type="content" source="media/permissions-page-enter-user-name.png" alt-text="Enter user name into filter box":::

   You should now have a user-specific view that shows what permissions they have.

2.  To trace why a user does or doesn't have any of the listed permissions, select the information icon next to the permission in question.

   :::image type="content" source="media/select-information-icon.png" alt-text="Select the information icon next to the permission in question":::

The resulting trace lets you know how they're inheriting the listed permission. You can then adjust the user's permissions by adjusting the permissions that are provided to the groups they're in.

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

## Membership in a group that has lesser permissions

Group rule types are ranked in the following order: Subscriber > Basic + Test Plans > Basic > Stakeholder. Users always get the best access level between all the group rules, including Visual Studio (VS) subscription. 

See the following examples, showing how the subscriber detection factors into group rules.

### Example 1: Group rule gives me more access

If I have a VS Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get Basic + Test Plans because what the group rule gives me is greater than my subscription.

### Example 2: Group rule gives me the same access

I have a Visual Studio Test Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get detected as a Visual Studio Test Pro subscriber, because the access is the same as the group rule. I'm already paying for the Visual Studio Test Pro, so I don't want to pay again.

For more information, see the following articles:
- [Permissions and groups reference](permissions.md)
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)

::: moniker range=">= azure-devops-2019"

## Rules applied to a work item type that restrict permissions

Prior to customizing a process, we recommend that you review [Configure and customize Azure Boards](../../boards/configure-customize.md), which provides guidance on how to customize Azure Boards to meet your business needs.

For more information about work item type rules that apply toward restricting permissions, see:

- [Restrict modification of select fields based on a user group](../settings/work/custom-rules.md#restrict-modification-of-select-fields-based-on-a-user-or-group)
- [Restrict modification of closed work items](../settings/work/custom-rules.md#restrict-modification-of-closed-work-items)

For more information, see the following articles:

- [Define area paths and assign to a team](../settings/set-area-paths.md)

::: moniker-end

## Access level restriction

You can assign users or groups of users to one of the following access levels:
- Stakeholder
- Basic
- Basic + Test Plans
- Visual Studio subscription

For information about access level restriction, see [Supported access levels](access-levels.md#supported-access-levels) in Azure DevOps.

## Feature access

To use Azure DevOps features, users must be added to a security group with the appropriate permissions. They must also be granted access to the web portal. Limitations to select features are based on the access level and security group to which a user is assigned.

A user can lose access for the following reasons:

*   The user's Visual Studio subscription has expired. Meanwhile, the user can [work as a Stakeholder](../../organizations/security/get-started-stakeholder.md), or you can give the user Basic access until the user renews their subscription. After the user signs in, Azure DevOps restores access automatically.

*   The Azure subscription used for billing is no longer active. All purchases made with this subscription are affected, including Visual Studio subscriptions. To fix this issue, visit the [Azure account portal](https://portal.azure.com).

*   The Azure subscription used for billing was removed from your organization. Learn more about [linking your organization](../billing/set-up-billing-for-your-organization-vs.md).

*   Your organization has more users with Basic access than the number of users that you're paying for in Azure. Your organization includes five free users with Basic access. If you need to add more users with Basic access, you can [pay for these users](../billing/buy-basic-access-add-users.md). 

Otherwise, on the first day of the calendar month, users who haven't signed in to your organization for the longest time lose access first. If your organization has users who don't need access anymore, [remove them from your organization](../accounts/delete-organization-users.md).

## Other areas where permissions might be applied

- [Custom rules](../settings/work/custom-rules.md#add-a-custom-rule)
- [Custom fields](../settings/work/custom-rules.md#restrict-modification-of-select-fields-based-on-a-user-or-group)
- [Custom backlogs and boards](../settings/work/customize-process-backlogs-boards.md)
- [Custom controls](../settings/work/custom-controls-process.md)
- [Area path permissions](set-permissions-access-work-tracking.md)
- [Work item tags](../../boards/queries/add-tags-to-work-items.md)
- [Moved work items out of a project](../../boards/backlogs/move-change-type.md)
- [Deleted work items](../../boards/backlogs/remove-delete-work-items.md#delete-work-items)
- [Azure Boards Team Administrator permissions and access](../../boards/get-started/permissions-access-boards.md)

## Related articles

- [About permissions](about-permissions.md)  
- [Security and permission management tools](security-tools-reference.md)  
- [Add users to an organization (Azure DevOps Services)](../accounts/add-organization-users.md)  
- [Add users to a team or a project](../../organizations/security/add-users-team-project.md)   
- [Add users to an administrator role](/azure/devops/server/admin/add-administrator)   

