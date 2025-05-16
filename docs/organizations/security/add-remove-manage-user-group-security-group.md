---
title: Add or remove users or groups
titleSuffix: Azure DevOps
description: How-to guide to add or remove users or groups to security groups and manage security groups in Azure DevOps.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 10/20/2023
--- 

# Use security groups to manage users and groups

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To manage permissions and access, use security groups. You can use default or custom groups to set permissions. You can add users and groups to multiple groups. For instance, you add most developers to the **Contributors** group. When they join a team, they also join the team’s group.

For more information, see the following articles: 

  - [Add Active Directory / Microsoft Entra users or groups to a built-in security group](add-ad-aad-built-in-security-groups.md)
  - [Add users & manage access](../accounts/add-organization-users.md)  
  - [Add users or groups to a team or project](add-users-team-project.md)  
  - [Remove user accounts](/azure/active-directory/add-users-azure-active-directory#delete-a-user) 
  - [Manage access using permissions](restrict-access.md)
  - [Change project-level permissions](../security/change-project-level-permissions.md)
  - [Change project collection-level permissions](../security/change-organization-collection-level-permissions.md)

Users inherit permissions from the group(s) that they belong to. If a permission is set to **Allow** for one group and **Deny** for another group to which the user belongs, then their effective permission assignment is **Deny**. For more information, see [About permissions/Inheritance](about-permissions.md#security-groups-and-membership).  

## How Azure DevOps uses security groups 

Azure DevOps uses security groups for the following purposes: 

- Determine permissions allocated to a group or user 
- Determine access level allocated to a group or user
- Filter work item queries based on membership within a group 
- Use **@mention** of a project-level group to send email notifications to members of that group
- Send team notifications to members of a team group 
- Add a group to a role-based permission
- Set object-level permissions to a security group 

[!INCLUDE [version-all](./includes/hidden-security-groups.md)]
 
## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| - To manage permissions or groups at the project level: Member of the **Project Administrators** security group.<br>- To manage permissions or groups at the collection level: Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.  |

::: moniker range="azure-devops"
> [!NOTE]  
> Users added to the **Project-Scoped Users** group can't access most **Organization settings** pages, including permissions. For more information, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 
::: moniker-end

<a id="create-custom-group"></a> 

## Create a custom security group 

Create a project-level group when you want to manage permissions at the project- or object-level for a project. Create a collection-level group when you want to manage permissions at the collection level. For more information, see [Change project-level permissions](../security/change-project-level-permissions.md) and [Change project collection-level permissions](../security/change-organization-collection-level-permissions.md).
::: moniker range="azure-devops"
> [!NOTE]   
> To turn on the **Project Permissions Settings Page** or the **Organization Permissions Settings Page v2** preview pages, see [Enable preview features](../../project/navigation/preview-features.md). Both preview pages provide a group settings page that the current page doesn't. 
::: moniker-end

::: moniker range="azure-devops"

#### [Preview page](#tab/preview-page)

### Create a project-level group 

1. Open the web portal and select the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Select **Project settings** > **Permissions**. 

	![Screenshot, open Project settings, Permissions.](media/permissions/project-settings-permissions.png)

3. Select **New Group** to open the dialog for adding a group. 

### Create a project collection-level group

1. Open the web portal and select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps icon, and then select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**. 

    ![Screenshot of opening Organization settings.](../../media/settings/open-admin-settings-vert-2.png)  

2. Under **Security**, select **Permissions**, and then choose **New group** to open the dialog for adding a group. 

   ![Screenshot showing creating a security group at the organization-level.](media/project-collection/organization-permissions-add-group.png)  

### Define the new group  

1. In the dialog that opens, enter a **Name** for the group. Optionally, add members and a description for the group. 
 
    For example, here we define a Work Tracking Administrators group.  

    :::image type="content" source="media/project-collection/create-new-group-at-org-level.png" alt-text="Screenshot of the security group dialog, Add a security group at the organization-level.":::

2. Choose **Create** when you're done. 

#### [Current page](#tab/current-page) 

### Create a project-level group 

1. Open the web portal and select the project where you want to add users or groups. 

2. Select **Project settings** > **Security**. 

	:::image type="content" source="media/add-groups/create-group.png" alt-text="Screenshot of Create group button.":::

1. Select **Create Group** to open the dialog for adding a group. 

### Create a project collection-level group

1. Open the web portal and select the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps icon, then  :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings** > **Security**.

    ![Screenshot of Opening Organization settings.](../../media/settings/open-admin-settings-vert-2.png)  

1. Under **Security**, choose **Permissions**, and then choose **New group** to open the dialog for adding a group. 

    ![Screenshot of Creating a security group at the organization-level.](media/project-collection/organization-permissions-add-group.png)  

### Define the new group

1. In the dialog that opens, enter a **Name** for the group. Optionally, add members and a description for the group. 
 
    For example, here we define a Work Tracking Administrators group.  

   ![Screenshot of security group dialog, Add a security group at the organization-level.](media/project-collection/create-new-group-at-org-level.png)  

2. Select **Create** when you're done. 

---

::: moniker-end

::: moniker range="<azure-devops"

1. Open the web portal and select the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Select **Project settings** > **Security**.

	*To see the full image, select to expand*.

	[![Screenshot of Project Settings, Security page.](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Under **Groups**, choose one of the following options:
   - **Readers**: To add users who require read-only access to the project, choose.
   - **Contributors**: To add users who contribute fully to this project or who have been granted Stakeholder access.
   - **Project Administrators**: To add users who need to administrate the project. For more information, see [Change project-level permissions](change-project-level-permissions.md).

4. Select the **Members** tab.

   Here we choose the **Contributors** group.

	![Screenshot showing the security page, Contributors group, Membership page.](media/add-users/add-members-to-contributors-group.png)  

   The default team group, and any other teams you add to the project, get included as members of the **Contributors** group. Add a new user as a member of a team instead, and the user automatically inherits Contributor permissions. 

    > [!TIP]
    > Managing users is much easier [using groups](../../organizations/security/about-permissions.md), not individual users.

5. Choose :::image type="icon" source="../../media/icons/add-light-icon.png" border="false"::: **Add** to add a user or a user group.

6. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. choose the match(es) that meets your requirements.

	![Screenshot showing Add users and group dialog, server version.](media/project-level-permissions-add-a-user.png)  

   The first time you add a user or group to Azure DevOps, you can't browse to it or check the friendly name. After the identity gets added, you can just enter the friendly name.

7. Choose **Save changes** when you're done. 

8. (Optional) You can customize a user's permission for other functionality in the project. For example, in [areas and iterations](set-permissions-access-work-tracking.md) or [shared queries](../../boards/queries/set-query-permissions.md).

   > [!NOTE]
   > Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

::: moniker-end

<a id="project-level"></a>

## Add users or groups to a security group

As roles and responsibilities change, you might need to change the permission levels for individual members of a project. The easiest way to do that is to add the user or a group of users to either a default or custom security group.  If roles change, you can then remove the user from a group.

Here we show how to add a user to the built-in **Project Administrators** group. The method is similar no matter what group you're adding. If your organization is connected to Microsoft Entra ID or Active Directory, then you can add security groups defined in those directories to Azure DevOps security groups. For more information, see [Add Active Directory / Microsoft Entra users or groups to a built-in security group](add-ad-aad-built-in-security-groups.md). If you need to add more than 10k users or groups to an Azure DevOps security group, we recommend adding an Azure Directory / Microsoft Entra group containing the users, instead of adding the users directly.

::: moniker range="azure-devops"

> [!NOTE]   
> To turn on the **Project Permissions Settings Page** or the **Organization Permissions Settings Page v2** preview pages, see [Enable preview features](../../project/navigation/preview-features.md). Both preview pages provide a group settings page that the current page doesn't. 
::: moniker-end

::: moniker range="azure-devops"

#### [Preview page](#tab/preview-page) 

1. Open the **Permissions** page for either the project-level or organization-level as described in the previous section, [Create a custom security group](#create-custom-group).   

1. Choose the security group whose members you want to manage, then choose the **Members** tab, and then choose **Add**. 

	For example, here we choose the **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Project Settings > Permissions, Add member](media/project-collection/project-admin-members-add.png) 

2. Enter the name of the user account into the text box and then select from the match that appears. You can enter several identities recognized by the system into the **Add users and/or groups** box. The system automatically searches for matches. Choose the matches that meet your choices. 

    > [!div class="mx-imgBorder"]  
    > ![Add users and group dialog, preview page.](media/project-collection/add-member-project-admin.png)  

    > [!NOTE]   
    > Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

3. Select **Save**. 

#### [Current page](#tab/current-page) 

1. Open the **Permissions** page for either the project-level or organization-level as described in the previous section, [Create a custom security group](#create-custom-group). 

1. Choose the security group whose members you want to manage, then choose the **Members** tab, and then choose **Add**. 

	For example, here we choose the **Project Administrators** group, **Members**, and then **Add**.   

    ![Screenshot of Project Settings>Security, Add member.](media/project-level-permissions-add-member.png) 

2. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice. 

    ![Screenshot of Add users and group dialog, current page.](media/project-level-permissions-add-a-user.png)  

    > [!NOTE]   
    > Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

3. Choose **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

* * *

::: moniker-end 

::: moniker range="<azure-devops"

1. Open the **Permissions** page for either the project-level or organization-level as described in the previous section, [Create a custom security group](#create-custom-group). 

1. Choose the security group whose members you want to manage, then choose the **Members** tab, and then choose **Add**.  

	For example, here we choose the **Project Administrators** group, **Members**, and then **Add**.   
 
    ![Screenshot of Project Settings, Security, Add member page.](media/project-level-permissions-add-member.png) 

1. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice. 

    ![Screenshot of Add users and group dialog, on-premises.](media/project-level-permissions-add-a-user.png)  

    > [!NOTE]   
    > Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

2. Choose **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

::: moniker-end 

## Change permissions for a user or group 

Because permissions are defined at different levels, review the following articles to open the dialog for the permissions you want to change:  

- [Object-level permissions](set-object-level-permissions.md)
- [Project-level permissions](change-project-level-permissions.md)
- [Collection-level permissions](change-organization-collection-level-permissions.md)
 
## Remove users or groups from a security group

::: moniker range="azure-devops"

1. For the user or group you want to remove, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More options** > **Remove**. 

    ![Screenshot of Remove a user, cloud version.](media/project-collection/remove-admin-member-s157.png)  

2. Select **Delete** to confirm removal of the group member.  

    ![Screenshot of Remove user confirmation dialog, cloud version.](media/project-collection/delete-member-confirm-dialog.png)  

::: moniker-end  

::: moniker range="< azure-devops"

- To remove a user from a group, choose **Remove** next to the user's name that you want to remove. 

    ![Screenshot of Remove user confirmation dialog, on-premises versions.](media/project-collection/remove-admin-member-server.png)  

::: moniker-end    

## Manage group settings 

::: moniker range="azure-devops" 

> [!NOTE]   
> To turn on the **Project Permissions Settings Page** or the **Organization Permissions Settings Page v2** preview pages, see [Enable preview features](../../project/navigation/preview-features.md). Both preview pages provide a group settings page that the current page doesn't. 

#### [Preview page](#tab/preview-page) 

1. Open the **Permissions** page for either the project-level or organization-level as described earlier in this article, [Create a custom security group](#create-custom-group). 

1. Choose the **Settings** tab. You can change a group description, add a group image, or delete a group through the group **Settings** page. 

From the **Project settings > Permissions** or **Organization settings** > **Permissions** page, choose the group you want to manage, and then choose **Settings**.  

For example, here we open the Settings for the Work Tracking Administrators group. 

![Screenshot of Open group settings, preview page.](media/project-collection/group-settings.png) 

You can modify the group name, group description, upload an image, or delete the group.  

#### [Current page](#tab/current-page) 

You can change a group description or add a group image by editing the group profile. Or, delete a group through the group **Delete** menu option. 

### Manage project-level groups 

1. From the **Project settings** > **Security** page, select the group you want to manage, and choose from the **Edit** menu to either **Edit profile** or **Delete**. 
    For example, here we open the **Edit profile** for the Stakeholder Access group.  

    ![Screenshot of Edit group profile.](media/project-collection/edit-group-profile-delete-project-level-current.png)   

    . . . and change the description. You can change the name of the group as well. 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Edit group profile description](media/project-collection/edit-project-level-group-current.png)   

2. Choose **Save** to save your changes.

### Manage organization-level groups 

1. From the **Organization > Settings > Security** page, choose the group you want to manage, and hover over the context menu and select **Edit Group** or **Delete Group**.  

    For example, here we open the **Edit Group** for the Work Tracking Administrators group.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of context menu for Custom group](media/project-collection/org-permissions-group-edit-delete-v1.png)   

    . . . and change the description. You can change the name of the group as well. 

    > [!div class="mx-imgBorder"]  
    > ![Edit group profile description, cloud version](media/project-collection/edit-org-group-dialog-v1.png)   

1. Choose **Save** to save your changes.

::: moniker-end

* * *

::: moniker range="< azure-devops" 

You can change a group name, description, add a group image, or delete a group. 

1. From the **Project > Settings > Security** or **Organization > Settings > Security** page, choose the group you want to manage

2. Choose from the **Edit** menu to either **Edit profile** or **Delete**. 

    For example, here we open the **Edit profile** for the Stakeholder Access group.  

    > [!div class="mx-imgBorder"]  
    > ![Open Edit group profile, on-premises versions.](media/project-collection/edit-group-profile-delete-project-level-current.png)   

    . . . and change the description. You can change the name of the group as well. 

    > [!div class="mx-imgBorder"]  
    > ![Edit group dialog profile description, on-premises versions.](media/project-collection/edit-project-level-group-current.png)   

3. Choose **Save** to save your changes.

## On-premises deployments

For on-premises deployments, see these other articles: 

- [Add a user as an Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator) 
- [Azure DevOps Server service account groups](/azure/devops/server/admin/service-accounts-dependencies)  

::: moniker-end  

::: moniker range="< azure-devops"

If your on-premises deployment is integrated with SQL Server Reports, you need to manage membership for those products separately from their websites. See [Grant permissions to view or create SQL Server reports in TFS](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports).

::: moniker-end 

## Next steps

> [!div class="nextstepaction"]
> [Manage projects](../projects/about-projects.md)

## Related articles
 
- [Set object-level permissions](set-object-level-permissions.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions lookup reference](permissions-lookup-guide.md)
- [Permissions and groups reference](permissions.md)
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)
