---
title: View permissions and effective access
titleSuffix: Azure DevOps
description: Learn how to view permissions, check effective permissions for a user or group, and troubleshoot access issues in Azure DevOps.
ms.subservice: azure-devops-security
ai-usage: ai-assisted
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.update: 90-days
ms.date: 01/12/2026
---

# View permissions and effective access

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows how to view permissions and check effective access for users and groups at the organization, project, and repository (or other object) levels. It explains permission states (Allow, Deny, Inherit), how inheritance and group membership affect effective permissions, and steps to troubleshoot common access issues.

What you learn:
- Where to view permission assignments in the web portal
- How to check effective permissions for users and groups
- Common reasons permissions don't work as expected (inheritance, denies, Stakeholder access, Microsoft Entra ID group mapping)

Quick steps:
1. Open **Organization settings** or **Project settings** > **Security** (or **Permissions**)
2. Select the object (project, repository, or group) and view assigned permissions
3. Use the Users/Groups or Effective Permissions UI to inspect effective access
4. If needed, examine group memberships and deny rules that override allows

> [!NOTE]
> Permission management features and UI vary slightly between Azure DevOps Services (cloud) and on-premises Azure DevOps Server. The following guidance calls out UI differences where applicable.

## Permission model basics

Permissions in Azure DevOps use three assignment states:
- **Allow**—explicitly grants a permission
- **Deny**—explicitly denies a permission and overrides Allow
- **Inherit**—no explicit assignment at this level; the permission is inherited from parent scopes or group membership

Effective permissions are computed by evaluating assignments across:
- The object itself (project, repo, area path, etc.)
- Parent scopes (collection, organization, project)
- Group memberships (built-in groups, custom groups, Microsoft Entra ID groups)
- Explicit Deny assignments (take precedence)

What "effective" permissions mean:

Effective permissions are the net access a user or group actually has on an object after Azure DevOps evaluates every relevant permission assignment. The system combines explicit Allow and Deny assignments across the object, parent scopes, and all group memberships; explicit Deny entries take priority. In practice, "effective permissions" show the final result (what someone can actually do), not every individual assignment that contributed to that result.

For a deep dive on permission resolution and inheritance, see [About permissions, Permission states](about-permissions.md).

## Where to view permissions

You can view permissions at multiple places in the web portal depending on the object:

- Organization or collection level: **Organization settings** > **Security** (or O**rganization settings** > **Permissions**).
- Project level: **Project settings** > **Permissions** (or **Project settings** > **Security** in older UIs).
- Repository, pipeline, board, or other resource: Open the resource, then **Settings** or **Security** (for example, **Repos** > select **repository** > **Security**).

The **Security**/**Permissions** page shows assigned groups and users and a permission matrix you can filter by user or group.

## Check effective permissions (UI)

::: moniker range="azure-devops"
1. Sign in to `https://dev.azure.com/{Your_Organization}`.
2. Go to the object you want to inspect (Organization, Project, Repository, etc.).
3. Select **Project settings** or **Organization settings** > **Permissions** (or **Security**).
4. Choose **Users** or **Groups**, select the identity you want to inspect, then view the permission grid.
5. Use any provided "Effective permissions" link or button (if present) to calculate the final effective permission for the selected identity on the chosen object.

    :::image type="content" source="media/view-permissions/open-security-project-level-vert.png" alt-text="Open security or permissions for a project.":::
::: moniker-end

::: moniker range="<azure-devops"
1. Sign in to your server or collection portal.
2. Go to **Project settings** > **Security** (or Organization/Collection settings > Security).
3. Select the group or user and examine the permission matrix. Use the filter and effective-permission controls in the dialog.
::: moniker-end

## Check effective permissions (command line / REST)

If you prefer automation, use the REST API to read ACLs or the Azure DevOps CLI/PowerShell modules to script permission checks. Look up the security namespace for the resource and evaluate ACL bits to compute effective access.

## Common scenarios and troubleshooting

- Deny overrides Allow: An explicit Deny on any scope wins. Check for denies on higher or lower scopes and across group memberships.
- Membership in multiple groups: Effective permissions combine group assignments; a Deny in any group applies.
- Inheritance from parent scopes: If a permission is Inherit at the current level, check parent scopes for assignments.
- Microsoft Entra ID group mapping: If users are added through Microsoft Entra groups, ensure the correct group is synced to Azure DevOps and that the group's membership is what you expect.
- Stakeholder access limits: Users with Stakeholder access experience limited feature availability regardless of permission assignments—verify access level if a user can't perform an action.
- Dynamic or temporary access: Some policies (like conditional access) or external provisioning might affect sign-in/access—check Microsoft Entra conditional access policies if sign-in fails.

Quick troubleshooting checklist
1. Confirm the user account being used to sign in (matches the identity shown in Azure DevOps).
2. Inspect the user's direct and indirect group memberships.
3. Search for any explicit Deny assignments at the object and parent scopes.
4. Check the user's access level (Stakeholder vs Basic) and licensing limits.
5. If you're using Microsoft Entra groups, confirm group sync and membership.
6. If needed, use REST/CLI to list ACLs for the resource and evaluate programmatically.

## Audit and history

Use the audit logs (Organization settings > Audit logs) to track changes to security groups, permission assignments, and membership changes if your organization has auditing enabled. Audit events can help trace when a permission or membership was changed.

## Useful links and tools

- [About permissions and security groups](about-permissions.md)
- [Set object-level permissions](set-object-level-permissions.md)
- [Permissions lookup guide](permissions-lookup-guide.md)
- [Manage users and groups](add-remove-manage-user-group-security-group.md)

## Next step

> [!div class="nextstepaction"]
> [Change project-level permissions or group membership](change-project-level-permissions.md)

## Related content

- [Security groups, service accounts, and permissions reference](permissions.md)
- [Manage and configure team tools](../../organizations/settings/manage-teams.md)
- [Stakeholder access quick reference](stakeholder-access.md)
