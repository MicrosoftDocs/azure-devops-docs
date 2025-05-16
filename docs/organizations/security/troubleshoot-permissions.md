---
title: Troubleshoot access, permission issues
titleSuffix: Azure DevOps
description: Find helpful troubleshooting information for resolving access and permission issues in Azure DevOps.  
ms.assetid: 
ms.subservice: azure-devops-security
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/10/2025
--- 

# Troubleshoot access and permission issues

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Due to the extensive security and permission structure of Azure DevOps, you might need to investigate why a user lacks access to a project, service, or feature they expect. Find step-by-step guidance to understand and address issues a user might encounter when connecting to a project or accessing an Azure DevOps service or feature.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Permissions** | To manage permissions or groups at the organization or collection level: Member of the [**Project Collection Administrators** security group](look-up-project-collection-administrators.md). If you created the organization or collection, you're automatically a member of this group. |
| **Recommendation** | Before using this guide, we recommend getting familiar with the following content: <br>- [Get started with permissions, access, and security groups](about-permissions.md) <br>- [Default permissions and access quick reference](permissions-access.md). |

> [!TIP]
> When you create an Azure DevOps security group, label it clearly to indicate whether it's intended to limit access.

You can set permissions at the following levels:
- Object level
- Project level
- Organization or project collection level
- Security role
- Team administrator role

## Common access and permission issues

See the most common reasons a project member can’t access a project, service, or feature: 

|**Issue**  |**Troubleshooting action**  |
|---------|---------|
|Their access level doesn’t support access to the service or feature.     | To determine whether it's the cause, [determine the user's access level and subscription status](#determine-a-users-access-level-and-subscription-status).        |
|Their membership within a security group doesn’t support access to a feature or they were explicitly denied permission to a feature.   | To determine whether it's the cause, [trace a permission](#trace-a-permission).         |
|The user was recently granted permission but their client needs a refresh to recognize the changes.    | Have the user [refresh or reevaluate their permissions](#refresh-or-reevaluate-permissions).        |
|The user's trying to exercise a feature granted only to a team administrator for a specific team, however they aren't granted that role.   |To add them to the role, see [Add, remove team administrator](../settings/add-team-administrator.md).         |
|The user didn't enable a preview feature.   | Have the user open the Preview features and determine the on/off status for the specific feature. For more information, see [Manage preview features](../../project/navigation/preview-features.md).        |
|Project member was added to a limited scope security group, such as the Project-Scoped Users group.  | To determine whether it's the cause, [look up the user’s security group memberships](#group-rules-with-lesser-permissions).        | 
 
### Less common access and permission issues

Less common reasons for limited access are when one of the following events occurred:

|**Issue**  |**Troubleshooting action**  |
|---------|---------|
|A project administrator disabled a service. In this case, no one has access to the disabled service.    | To determine whether a service is disabled, see [Turn an Azure DevOps service on or off](../settings/set-services.md).        |
|A Project Collection Administrator disabled a preview feature, which disables it for all project members in the organization.    | See [Manage preview features](../../project/navigation/preview-features.md).        |
|Group rules governing the user’s access level or project membership are restricting access.    |See [Determine a user's access level and subscription status](#determine-a-users-access-level-and-subscription-status).         |
|Custom rules were defined to a work item type’s workflow.   |see [Rules applied to a work item type that restrict select operation](#rules-applied-to-a-work-item-type-that-restrict-select-operations).          |

## Determine a user's access level and subscription status

You can assign users or groups of users to one of the following access levels:
- Stakeholder
- Basic
- Basic + Test Plans
- Visual Studio subscription
- GitHub Enterprise

For more information about restricting access levels in Azure DevOps, see [Supported access levels](access-levels.md#supported-access-levels).

To use Azure DevOps features, users must be added to a security group with the appropriate permissions and have access to the web portal. Feature limitations are based on the user's access level and security group.

Users can lose access for the following reasons:

|**Reason for loss of access**  |**Troubleshooting action**|
|---------|---------|
|The user's Visual Studio subscription expired.     | This user can [work as a Stakeholder](../../organizations/security/get-started-stakeholder.md), or you can give the user Basic access until the user renews their subscription. After the user signs in, Azure DevOps restores access automatically.        |
|The Azure subscription used for billing is no longer active.  |  All purchases made with this subscription are affected, including Visual Studio subscriptions. To fix this issue, visit the [Azure account portal](https://portal.azure.com).       |
|The Azure subscription used for billing was removed from your organization.    | Learn more about [linking your organization](../billing/set-up-billing-for-your-organization-vs.md#set-up-billing)        |

Otherwise, users who didn't sign in to your organization for the longest time lose access first. If your organization has users who don't need access anymore, [remove them from your organization](../accounts/delete-organization-users.md).

For more information about permissions, see [Permissions and groups](permissions.md) and the [Permissions lookup guide](permissions-lookup-guide.md).

## Trace a permission

Use permission tracing to determine why a user's permissions aren't allowing them access to a specific feature or function. Learn how a user or an administrator can investigate the inheritance of permissions. To trace a permission from the web portal, open the permission or security page for the corresponding level. For more information, see [Request an increase in permission levels](request-changes-permissions.md).


::: moniker range=" azure-devops"

If a user is having permissions issues, and you use default security groups or custom groups for permissions, use tracing to investigate where those permissions are coming from. Permissions issues could be because of delayed changes. It can take up to 1 hour for Microsoft Entra group memberships or permissions changes to propagate throughout Azure DevOps. If a user's having issues that don't resolve immediately, wait a day to see if they resolve. For more information about user and access management, see [Manage users and access in Azure DevOps](../accounts/add-organization-users.md). 

::: moniker-end

::: moniker range="< azure-devops"

If a user's having permissions issues and you use default security groups or custom groups for permissions, you can investigate where those permissions are coming from by using our permissions tracing. Permissions issues could be because the user doesn't have the necessary access level.

::: moniker-end

Users can receive their effective permissions either directly or via groups.

Complete the following steps so administrators can understand where exactly those permissions are coming from and adjust them, as needed.

::: moniker range=" azure-devops"

1. Select **Project settings** > **Permissions** > **Users**, and then select the user.

   :::image type="content" source="media/permissions-page-enter-user-name.png" alt-text="Screenshot of filter box, enter user name.":::

   You should now have a user-specific view that shows what permissions they have.

2.  To trace why a user does or doesn't have any of the listed permissions, select the information icon next to the permission in question.

   :::image type="content" source="media/select-information-icon.png" alt-text="Screenshot of select the information icon next to the permission in question.":::

The resulting trace lets you know how they're inheriting the listed permission. You can then adjust the user's permissions by adjusting the permissions that are provided to the groups that they're in.

::: moniker-end

::: moniker range="< azure-devops"

1. Select **Project settings** > **Security**, and then enter the user name into the filter box.

   :::image type="content" source="media/security-page-enter-user-name-2019.png" alt-text="Screenshot of enter user name into the filter box, Azure DevOps Server 2019.":::

   You should now have a user-specific view that shows what permissions they have.

2. Trace why a user does or doesn't have any of the listed permissions. Hover over the permission, and then choose **Why**.

   :::image type="content" source="media/permissions-list-view-project-level-information-2019.png" alt-text="Screenshot of Choose Why in permissions list view for project level information, Azure DevOps Server 2019.":::

The resulting trace lets you know how they're inheriting the listed permission. You can then adjust the user's permissions by adjusting the permissions that are provided to the groups they're in.

   :::image type="content" source="media/trace-permission-group-member-inheritance-2019.png" alt-text="Screenshot of Trace showing inherited permissions, Azure DevOps Server 2019.":::

::: moniker-end

For more information, see [Manage access to specific features and functions](restrict-access.md) or [Request an increase in permission levels](request-changes-permissions.md).

<a id="refresh-permissions"></a>

## Refresh or reevaluate permissions

See the following scenario where refreshing or reevaluating permissions might be necessary.

### Problem

::: moniker range=" azure-devops"

Users get added to an Azure DevOps or Microsoft Entra group. This action grants inherited access to an organization or project. But, they don't get access immediately. Users must either wait or sign out, close their browser, and then sign back in to get their permissions refreshed. 

::: moniker-end

::: moniker range=" < azure-devops"

Users get added to an Azure DevOps group. This action grants inherited access to an organization or project. But, they don't get access immediately. Users must either wait or sign out, close their browser, and then sign back in to get their permissions refreshed. 

::: moniker-end

### Solution

Go to :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings** > **Permissions** > **Re-evaluate permissions**. This function reevaluates your group memberships and permissions, and then any recent changes take effect immediately.

:::image type="content" source="media/troubleshoot-permissions/re-evaluate-permissions-button.png" alt-text="Screenshot of Reevaluate permissions control.":::

## Rules applied to a work item type that restrict select operations

Before you customize a process, we recommend that you review [Configure and customize Azure Boards](../../boards/configure-customize.md), which provides guidance on how to customize Azure Boards to meet your business needs.

For more information about work item type rules that apply toward restricting operations, see:

- [Apply rules to workflow states (Inheritance process)](../settings/work/apply-rules-to-workflow-states.md)
- [Sample rule scenarios](../settings/work/rule-samples.md)  
- [Define area paths and assign to a team](../settings/set-area-paths.md)

## Hide organization settings from users

If a user is limited to seeing only their projects or can't access organization settings, the following information might explain why. To restrict users from accessing organization settings, enable the **Limit user visibility and collaboration to specific projects** preview feature. For more information, including important security-related call-outs, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 

::: moniker range=" azure-devops"

Examples of restricted users include Stakeholders, Microsoft Entra guest users, or members of a security group. Once enabled, any user or group added to the Project-Scoped Users group is restricted from accessing the **Organization settings** pages, except for **Overview** and **Projects**. They can only access the projects to which they get added. 

::: moniker-end

::: moniker range=" < azure-devops"

Examples of restricted users include Stakeholders, or members of a security group. Once enabled, any user or group added to the Project-Scoped Users group gets restricted from accessing the Organization Settings pages, except for Overview and Projects. They can only access the projects to which they get added. 

::: moniker-end

For more information, see [Manage your organization, Limit user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group).

::: moniker range=" azure-devops"

## View, add, and manage permissions with CLI

You can view, add, and manage permissions at a granular level with the `az devops security permission` commands. For more information, see [Manage permissions with command line tool](./manage-tokens-namespaces.md).

::: moniker-end

<a id="group-rules-with-lesser-permissions"></a>

::: moniker range=" azure-devops"

## Group rules with lesser permissions

Group rule types are ranked in the following order: Subscriber > Basic + Test Plans > Basic > Stakeholder. 
Users always receive the highest access level available to them across all group rules, including any Visual Studio (VS) subscriptions. 

[!INCLUDE [note-group-rules](includes/note-group-rules.md)]

See the following examples, showing how subscriber detection factors into group rules.

### Example 1: Group rule gives me more access

If I have a VS Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get Basic + Test Plans because what the group rule gives me is greater than my subscription. Group rule assignment always provides the greater access, rather than limiting access.

### Example 2: Group rule gives me the same access

I have a Visual Studio Test Pro subscription and I'm in a group rule that gives me Basic + Test Plans – what happens?

Expected: I get detected as a Visual Studio Test Pro subscriber, because the access is the same as the group rule. I'm already paying for the Visual Studio Test Pro, so I don't want to pay again.

## Work with GitHub

See the following troubleshooting information for deploying code in Azure DevOps with GitHub.

### Problem

You can't bring the rest of your team into the organization and project, despite adding them as members. They receive emails, but when signing in, they get a 401 error. 
### Solution

You might be signed into Azure DevOps with an incorrect identity. Do the following steps:

1. Close all browsers, including browsers that aren't running Azure DevOps.

2. Open a private or incognito browsing session.

3. Go to the following URL: https://aka.ms/vssignout.

   A message displays, "Sign out in progress." After you sign out, you get redirected to `dev.azure.microsoft.com`.

4. Sign in to [Azure DevOps](https://dev.azure.com/VSTS-Catapult) again and choose a different identity.

::: moniker-end

## Other areas where permissions might be applied

- [Area path permissions](set-permissions-access-work-tracking.md)
- [Work item tags](../../boards/queries/add-tags-to-work-items.md)
- [Moved work items out of a project](../../boards/backlogs/move-change-type.md)
- [Deleted work items](../../boards/backlogs/remove-delete-work-items.md#delete-work-items)
- [Quick guide to default permissions and access for Azure Boards](../../boards/get-started/permissions-access-boards.md)
- [Custom rules](../settings/work/custom-rules.md#add-a-custom-rule)
- [Sample custom rule scenarios](../settings/work/rule-samples.md)
- [Custom backlogs and boards](../settings/work/customize-process-backlogs-boards.md)
- [Custom controls](../settings/work/custom-controls-process.md)

## Related articles

- [Manage permissions with the command line tool](manage-tokens-namespaces.md)
- [Change individual or group permissions](/azure/devops/organizations/security/request-changes-permissions)
- [Security overview](security-overview.md)  
- [Add users to an administrator role](/azure/devops/server/admin/add-administrator)
