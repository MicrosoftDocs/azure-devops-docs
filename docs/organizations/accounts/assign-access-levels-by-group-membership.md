---
title: Add group rule, assign access levels
titleSuffix: Azure DevOps Services
ms.custom: engagement-fy23
description: Automate access level management by creating group rules for Microsoft Entra ID and Azure DevOps groups. Streamline user permissions and project access efficiently.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 11/14/2025
monikerRange: 'azure-devops'
---

# Assign access levels with group rules

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure DevOps provides group-based access levels for Microsoft Entra groups and Azure DevOps groups, allowing you to manage permissions efficiently by assigning access levels to entire groups of users. This article explains how to add a group rule to assign an access level to a group of users.

Assign a group rule to manage both access levels and project memberships. When a user belongs to multiple rules or Microsoft Entra groups with different access levels, they receive the highest level. 

**Example:** If a user belongs to two Microsoft Entra groups—one assigning Stakeholder and the other Basic—the user receives Basic access. 

When a user leaves a Microsoft Entra group, Azure DevOps adjusts their access level according to the group's defined rules. If the group was the user's sole source of access, Azure DevOps automatically removes them from the organization. If the user belongs to other groups, their access level and permissions are reevaluated.

[!INCLUDE [note-group-rules](../security/includes/note-group-rules.md)]

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|
|**Microsoft Entra** |Member of the Microsoft Entra ID that backs your organization. For more information, see [Access via Microsoft Entra FAQs. Microsoft Entra guests can't search the Microsoft Entra ID in the manner required by Azure DevOps](../accounts/faq-azure-access.yml#no-identities)  |

## Add a group rule

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. Select **Users** > **Group rules** > **Add a group rule**. This view shows you all of your created group rules.

   ![Screenshot showing selected Add a group rule button.](media/manage-group-licensing/add-group-rule.png)

	**Group rules** appear only if you're a member of the **Project Collection Administrators** group.  

4. Complete the dialog box for the group for which you want to create a rule. Include an access level for the group and any optional project access for the group. Select **Add**.

   ![Screenshot showing Add a group rule dialog.](media/assign-access-levels/add-group-rule-dialog-new.png)

   A notification displays, showing the rule's status and outcome. If the assignment fails, select **View status** to see the details.

   ![Screenshot showing Group rule completed.](media/assign-access-levels/group-rule-completed-successfully.png)

> [!IMPORTANT]
> - Users don't appear in **All users** until they attempt to sign in for the first time.

## Access level changes

- When a user signs in, group rules automatically adjust their access level if the rule assigns a higher level than their current one. For example: A user with Stakeholder access upgrades to Basic if a group rule assigns Basic.
- If a user already has a higher access level than what the group rule provides, their access stays the same. For example: A user manually assigned Basic access doesn't downgrade when a group rule assigns Stakeholder.

## Manage group members

Group rules for Microsoft Entra ID groups manage membership in the Azure portal. Group rules for Azure DevOps groups manage membership on the **Group rules** screen.

1. Select **Group rules** > :::image type="icon" source="../../media/ellipses-reduced-screen-size.png" border="false"::: > **Manage members**.
   ![Screenshot shows highlighted group rule for managing members.](media/migrate-to-group-based-resource-management/highlight-rule-choose-manage-members.png)

2. Add members, and then select **Add**.

   ![Screenshot of Adding a group member.](media/migrate-to-group-based-resource-management/add-group-members.png)

## Verify group rule

Verify that the resources apply to each group and individual user:

1. Select **All users**.
2. Highlight a user.
3. Select **Summary**.

   :::image type="content" source="media/assign-access-levels/verify-user-summary.png" alt-text="Screenshot showing verification of user summary for group rule.":::

## Remove direct assignments

When a user has a direct assignment and a group rule grants a higher access level, Azure DevOps automatically upgrades the user to the higher level. To manage access levels exclusively through group rules, remove all direct assignments. 

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Users**.

   :::image type="content" source="media/assign-access-levels/select-users-in-organization-settings.png" alt-text="Screenshot showing selected Users tab.":::

4. Select all users with resources for management only by groups.

   ![Screenshot showing Selected group rules for migration.](media/remove-direct-assignments/choose-remove-direct-assignments-preview.png)

5. To confirm that you want to remove the direct assignments, select **Remove**.

   ![Screenshot of confirmation to Remove.](media/remove-direct-assignments/confirm-removal-of-direct-assignments.png)

   If a user isn't a member of any groups, then the user isn't affected.

### FAQs

<a id="more-information"></a>

#### Q: How do Visual Studio Subscriptions work with group rules?

A: Visual Studio Subscribers are always directly assigned via the [Visual Studio Admin Portal](https://manage.visualstudio.com/) and take precedence in Azure DevOps over access levels assigned directly or via group rules. When you view these users from the Users Hub, the License Source always shows as Direct. The only exception is Visual Studio Professional subscribers who are assigned Basic + Test Plans. Since Basic + Test Plans provides more access in Azure DevOps, it takes precedence over a Visual Studio Professional subscription.

#### Q: How do GitHub Enterprise licenses work with group rules? 

A: 
- Azure DevOps checks whether a user has a GitHub Enterprise license when they sign in. It might take up to 24 hours for their access level to update to GitHub Enterprise. Users with GitHub Enterprise automatically receive the GitHub Enterprise access level, which equals Basic access. 
- If a GitHub Enterprise user needs access to Test Plans, assign the Basic + Test Plans license directly or through a group rule.  
- You can't configure a group rule to assign GitHub Enterprise access because GitHub assigns that license directly through its portal. 
- When a user no longer has a valid GitHub Enterprise license: 
  - If your organization configures group rules: The user receives the access specified by their group membership. 
  - If your organization doesn't configure group rules: The user receives the organization’s default access level. 

## Related content

* [Install Active Directory and Microsoft Entra users or groups to a built-in security group](../security/add-ad-aad-built-in-security-groups.md)
* [Learn about accessing your organization with Microsoft Entra ID](access-with-azure-ad.md)
* [Manage Microsoft Entra groups](manage-azure-active-directory-groups.md)
