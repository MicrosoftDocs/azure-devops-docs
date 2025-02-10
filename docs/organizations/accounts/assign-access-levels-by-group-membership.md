---
title: Add group rule, assign access levels
titleSuffix: Azure DevOps Services
ms.custom: engagement-fy23
description: Learn how to assign access levels with group rules in Microsoft Entra ID and Azure DevOps.
ms.subservice: azure-devops-organizations
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 02/07/2025
monikerRange: 'azure-devops'
---

# Assign access levels with group rules

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure DevOps provides group-based access levels for Microsoft Entra groups and Azure DevOps groups, allowing you to manage permissions efficiently by assigning access levels to entire groups of users. This article explains how to add a group rule to assign an access level to a group of users. Azure DevOps resources are assigned to all members of a group.

Assign a group rule to manage both access levels and project memberships. When a user is assigned to multiple rules or Microsoft Entra groups with different access levels, they receive the highest access level among them. For example, if John is assigned to two Microsoft Entra groups with different group rules—one specifying Stakeholder access and the other Basic access—John receives Basic access.

When a user leaves a Microsoft Entra group, Azure DevOps adjusts their access level according to the group's defined rules. If the group was the user's sole source of access, Azure DevOps automatically removes them from the organization. If the user belongs to other groups, their access level and permissions are reevaluated.

[!INCLUDE [note-group-rules](../security/includes/note-group-rules.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|
|**Microsoft Entra** |Member of the Microsoft Entra ID that backs your organization. For more information, see [Access via Microsoft Entra FAQs. Microsoft Entra guests can't search the Microsoft Entra ID in the manner required by Azure DevOps](../accounts/faq-azure-access.yml#no-identities)  |

## Add group rule

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Permissions**, and then verify that you're a member of the **Project Collection Administrators** group.

   ![Screenshot showing project collection administrators group members.](media/assign-access-levels/project-collection-administrators-group-members-new.png)

4. Select **Users**, and then select **Group rules**. This view shows you all of your created group rules. Select **Add a group rule**.

   ![Screenshot showing selected Add a group rule button.](media/manage-group-licensing/add-group-rule.png)

	**Group rules** appear only if you're a member of the **Project Collection Administrators** group.  

5. Complete the dialog box for the group for which you want to create a rule. Include an access level for the group and any optional project access for the group. Select **Add**.

   ![Screenshot showing Add a group rule dialog.](media/assign-access-levels/add-group-rule-dialog-new.png)

   A notification displays, showing the status and outcome of the rule. If the assignment couldn't be completed, select **View status** to see the details.

   ![Screenshot showing Group rule completed.](media/assign-access-levels/group-rule-completed-successfully.png)

> [!IMPORTANT]
> - Group rules only apply to users without direct assignments and to users added to the group going forward. [Remove direct assignments](#remove-direct-assignments) so the group rules apply to those users.
> - Users don't appear in **All users** until they attempt to sign in for the first time.

## Manage group members

1. Select **Group rules** > :::image type="icon" source="../../media/ellipses-reduced-screen-size.png" border="false"::: > **Manage members**.
   ![Screenshot shows highlighted group rule for managing members.](media/migrate-to-group-based-resource-management/highlight-rule-choose-manage-members.png)

   Keep the existing automation for managing user access levels running as-is (for example, PowerShell scripts). The goal is to ensure that the same resources applied by the automation are accurately reflected for those users.

2. Add members, and then select **Add**.

   ![Screenshot of Adding a group member.](media/migrate-to-group-based-resource-management/add-group-members.png)

   When you assign the same access level to a user, they consume only one access level, regardless of whether the assignment is made directly or through a group.

## Verify group rule

Verify that the resources are applied to each group and individual user. Select **All users**, highlight a user, and then select **Summary**.

:::image type="content" source="media/assign-access-levels/verify-user-summary.png" alt-text="Screenshot showing verification of user summary for group rule.":::

## Remove direct assignments

To manage a user's resources solely through their group memberships, remove any direct assignments. Resources assigned to a user individually remain assigned, regardless of changes to the user's group memberships.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Users**.

   :::image type="content" source="media/assign-access-levels/select-users-in-organization-settings.png" alt-text="Screenshot showing selected Users tab.":::

4. Select all users with resources for management only by groups.

   ![Screenshot showing Selected group rules for migration.](media/remove-direct-assignments/choose-remove-direct-assignments-preview.png)

5. To confirm that you want to remove the direct assignments, select **Remove**.

   ![Screenshot of confirmation to Remove.](media/remove-direct-assignments/confirm-removal-of-direct-assignments.png)

   Direct assignments get removed from the users. If a user isn't a member of any groups, then the user isn't affected.

### FAQs

<a id="more-information"></a>

#### Q: How do Visual Studio Subscriptions work with group rules?

A: Visual Studio Subscribers are always directly assigned via the [Visual Studio Admin Portal](https://manage.visualstudio.com/) and take precedence in Azure DevOps over access levels assigned directly or via group rules. When you view these users from the Users Hub, the License Source always shows as Direct. The only exception are Visual Studio Professional subscribers who are assigned Basic + Test Plans. Since Basic + Test Plans provides more access in Azure DevOps, it takes precedence over a Visual Studio Professional subscription.

## Related articles

* [Install Active Directory and Microsoft Entra users or groups to a built-in security group](../security/add-ad-aad-built-in-security-groups.md)
* [Learn about accessing your organization with Microsoft Entra ID](access-with-azure-ad.md)
* [Manage Microsoft Entra groups](manage-azure-active-directory-groups.md)
