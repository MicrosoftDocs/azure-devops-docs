---
title: Add group rule to assign access levels
titleSuffix: Azure DevOps Services
ms.custom: seodec18, engagement-fy23
description: Learn how to assign access levels with group rules in Azure Active Directory and Azure DevOps.
ms.subservice: azure-devops-organizations
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 08/10/2023
monikerRange: 'azure-devops'
---

# Add a group rule to assign access levels

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure DevOps includes group-based licensing for Azure Active Directory (Azure AD) groups and Azure DevOps groups. Learn how to add a group rule to assign an access level to a group. Resources in Azure DevOps are assigned to all members of the group. Group rules are also used to add users to team projects and other specific groups, like Contributors, Readers, and Administrators.

When users leave the group, the licenses get freed and returned to your pool. You don't need to automate license management to reflect changes in your organizational structure on a per-user basis.

[!INCLUDE [note-group-rules](../security/includes/note-group-rules.md)]

## Prerequisites

- To manage licenses and group rules, you must be a member of the **Project Collection Administrators** group. If you're not a member, [get added as one](../security/change-organization-collection-level-permissions.md).

## Add group rule

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Permissions**, and then verify that you're a member of the **Project Collection Administrators** group.

   ![Project collection administrators group members](media/assign-access-levels/project-collection-administrators-group-members-new.png)

4. Select **Users**, and then select **Group rules**. This view shows you all of your created group rules. Select **Add a group rule**.

   ![Select Add a group rule](media/manage-group-licensing/add-group-rule.png)

	**Group rules** appear only if you're a member of the **Project Collection Administrators** group.  

5. Complete the dialog box for the group for which you want to create a rule. Include an access level for the group and any optional project access for the group. Select **Add**.

   ![Complete add a group rule dialog](media/assign-access-levels/add-group-rule-dialog-new.png)

   A notification displays, showing the status and outcome of the rule. If the assignment couldn't be completed (for example, because your organization didn't have enough purchased licenses), select **View status** to see the details.

   ![Group rule completed](media/assign-access-levels/group-rule-completed-successfully.png)

> [!IMPORTANT]
> Group rules only apply to users without direct assignments and to users added to the group going forward. [Remove direct assignments](#remove-direct-assignments) so the group rules apply to those users.
> Visual Studio Subscribers are always directly assigned via the [Visual Studio Admin Portal](https://manage.visualstudio.com/) and take precedence in Azure DevOps over access levels assigned directly or via group rules. When viewing these users from the Users Hub, the License Source always shows as Direct. The only exception are Visual Studio Professional subscribers who are assigned Basic + Test Plans. Since Basic + Test Plans provides more access in Azure DevOps, it takes precedence over a Visual Studio Professional subscription.

## Manage group members

1. Select **Group rules** > :::image type="icon" source="../../media/ellipses-reduced-screen-size.png" border="false"::: > **Manage members**.
   ![Highlight a group rule and select manage members](media/migrate-to-group-based-resource-management/highlight-rule-choose-manage-members.png)

   > [!NOTE]
   > Leave existing automation for managing access levels for users running as-is (for example, PowerShell). The goal is to reflect the same resources that the automation is applying to those users.

2. Add members, and then select **Add**.

   ![Add group member](media/migrate-to-group-based-resource-management/add-group-members.png)

When you assign the same access level to a user, the user consumes only one access level. User assignments can be made both directly and through a group. No other licenses are required.

> [!NOTE]
> You can assign Group rules to support both access levels and project memberships. Users are granted the highest access level when assigned to more than one rule or Azure AD group which specify different levels of access.  For example, if John is assigned to two Azure AD groups and two different Group rules that specify Stakeholder access and the other Basic access, then John's access level is Basic. 

## Verify group rule

Verify that the resources are applied to each group and individual user. Select **All users**, highlight a user, and then select **Summary**.

:::image type="content" source="media/assign-access-levels/verify-user-summary.png" alt-text="Verify user summary for group rule":::

## Remove direct assignments

To manage a user's resources only by the groups that they're in, remove their direct assignments. Resources assigned to a user via individual assignment stay assigned to the user. This assignment stays whether the resources are assigned or taken away from the user's groups.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select the **Users** tab.

   :::image type="content" source="media/assign-access-levels/select-users-in-organization-settings.png" alt-text="Select the Users tab":::

4. Select all users with resources for management only by groups.

   ![Select group rules for migration](media/remove-direct-assignments/choose-remove-direct-assignments-preview.png)

5. To confirm that you want to remove the direct assignments, select **Remove**.

   ![Remove](media/remove-direct-assignments/confirm-removal-of-direct-assignments.png)

Direct assignments are removed from the users.

> [!NOTE]
> If a user isn't a member of any groups, then the user isn't affected.

## Related articles

* [Install Active Directory and Azure Active Directory users or groups to a built-in security group](../security/add-ad-aad-built-in-security-groups.md)
* [About accessing your organization with Azure AD](access-with-azure-ad.md)
* [Manage Azure Active Directory groups](manage-azure-active-directory-groups.md)
