---
title: Change individual or group permissions
titleSuffix: Azure DevOps
description: Add custom security groups, change permissions for groups or individuals tutorial
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 04/25/2019
---


# Change individual or group permissions

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

The standard way to set permissions is by adding them to one or more built-in security groups. However, sometimes you may want to grant additional permissions to select users, where not all permissions are assigned to the security group. For example, if you want to give some users the ability to add or edit area and iteration paths, but don't want them to have all permissions available to members of the Project Administrators group.

You can change individual permissions in one of the following three ways:

- Create a custom Azure DevOps security group, define permissions for that group, add the user account to the group
- For object-level permissions: Add the user account and set permissions
- For project or collection-level permissions: Search for the user account and selectively change their permission assignments

In this article you learn how to do the following tasks:
> [!div class="checklist"]
> * Create a custom security group 
> * Set permissions for a custom security group 
> * Add members to a custom security group 
> * Change the permission assignments for an individual user 

If you're new to managing permissions and groups, review [About permissions and groups](about-permissions.md) to learn about permission states and inheritance.

[!INCLUDE [temp](../../_shared/image-differences.md)]

<a id="create-custom-group" />

## Create a custom security group

Create a custom security group at the project-level or the collection-level. The method for creating a custom security group is the same, no matter at what level you add it. 

To create a project-level security group, open the web portal and choose the project where you want to add users or groups. 


::: moniker range=">= azure-devops-2019"

1. Choose **Project Settings** > **Security**.

	*To see the full image, click to expand*.

	[![Project Settings>Security](_img/view-permissions/open-security-project-level-vert.png)](_img/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

2. Choose **Create group** to open the dialog for adding a group.

	> [!div class="mx-imgBorder"]
	> ![Create a custom security group](_img/change-individual-permissions/create-group-open-dialog.png)" 

3. Enter a name for the group, and optionally a description.

    For example, here we define a Team Admins group.

    ![Security group dialog, Add a security group at the project level](_img/change-individual-permissions/create-project-level-group-dialog.png)

4. Choose **Create group**.
::: moniker-end


::: moniker range="<= tfs-2018"

1. Open **Project Settings**. Choose the ![gear icon](_img/icons/gear_icon.png) gear settings icon, and choose **Security**. 

	> [!div class="mx-imgBorder"]
	> ![Open Project Settings>Security, previous nav](_img/view-permissions/open-project-level-security-horz.png)

2. Choose **Create group** to open the dialog for adding a group.

	> [!div class="mx-imgBorder"]
	> ![Create a custom security group](_img/change-individual-permissions/create-group-open-dialog.png)" 

3. Enter a name for the group, and optionally a description.

    For example, here we define a Team Admins group.

    ![Security group dialog, Add a security group at the project level](_img/change-individual-permissions/create-project-level-group-dialog.png)

4. Choose **Create group**.

::: moniker-end

<a id="set-permissions-custom-group" />

## Set permissions for a custom security group

1. To set permissions for the custom group you  created, choose the group name and then set one or more permissions.

	> [!div class="mx-imgBorder"]
	> ![Set permissions for a project-level custom security group](_img/change-individual-permissions/team-admin-group-set-permissions.png)  

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

2. Choose **Save changes**.

<a id="add-members-custom-group" />

## Add members to a custom security group

You add members to a custom security group in the same way you add users to a built-in group. 

0. Choose the security group, choose **Members**, and then choose **Add**.

	> [!div class="mx-imgBorder"]
	> ![Security>Members page, Add member](_img/change-individual-permissions/team-admin-group-add-members.png)  

1. Enter the user identity into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice.

    ![Add users and group dialog](_img/project-level-permissions-add-a-user.png) 

    > [!NOTE]
    > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

## Change individual permission at the project-level

1. From the project-level **Security** page, enter the user identity in the **Filter users and groups** box. Then, select the account whose permissions you want to change.

	> [!div class="mx-imgBorder"]
	> ![Filter and select a user account](_img/change-individual-permissions/filter-user-account.png)  

2. Change the permission, setting a permission as **Allow** or **Deny**.

    ![Set permissions for a single user account](_img/change-individual-permissions/set-individual-permissions.png)  

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

3. Choose **Save changes**.

### Change individual permission at the collection-level

1. Open the user-level or collection-level **Security** admin page and follow the instructions provided in the previous section for project-level permissions.

    For a description of each collection-level permission, see [Permissions and groups reference, collection-level permissions](permissions.md#collection-level).

### Change individual permission at an object-level

From the web portal, open the Security dialog for the object whose permissions you want to set. For specific instructions, see the following articles:


<table width="80%">
<tbody valign="top">
<tr>
<th width="35%">Area</th>
<th width="65%">Task</th>
</tr>
<tr>
<td>Wiki & Dashboard permissions</td>
<td>
<ul>
<li>[README & Wiki](../../project/wiki/manage-readme-wiki-permissions.md)</li>
<li>[Dashboards](../../report/dashboards/dashboard-permissions.md)</li>
</ul>
</td>
</tr>
<tr>
<td>DevOps (code, build, test, release) permissions </td>
<td>
<ul>
<li>[Git branch](../../repos/git/branch-permissions.md)</li>
<li>[Git repository](set-git-tfvc-repository-permissions.md)</li>
<li>[TFVC](set-git-tfvc-repository-permissions.md)</li>
<li>[Builds](../../pipelines/policies/set-permissions.md)</li>
<li>[Release pipeline security](../../pipelines/policies/set-permissions.md)</li>
<li>[Approvals and approvers](../../pipelines/release/approvals/index.md)</li> 
</ul>
</td>
</tr>
<tr>
<td>Work tracking permissions</td>
<td>
<ul>
<li>[Area and iteration paths](../../organizations/security/set-permissions-access-work-tracking.md)</li>
<li>[Work item query and folder](../../boards/queries/set-query-permissions.md)</li>
<li>[Plan permissions](set-permissions-access-work-tracking.md#plan-permissions)</li>  
</ul>
</td>
</tr>
</tbody>
</table>

1. From the Security dialog, choose **Add**. 

	<img src="_img/change-individual-permissions/security-dialog-add-user-account-button.png" alt="Open the Add users or group permissions dialog" style="border: 1px solid #C3C3C3;" />

2. Enter the user ID, choose search, and then make your selection in the left pane.

3. Update the permission setting to **Allow** or **Deny** for specific permissions. 

    <img src="_img/change-individual-permissions/set-permissions-individual-object-level.png" alt="Set permissions for a single user account" style="border: 1px solid #C3C3C3;" />

    For a description of specific permissions, see [Permissions and groups reference](permissions.md).

4. Choose **Save changes**.

## Next steps

> [!div class="nextstepaction"]
> [Grant or restrict access to select features](restrict-access.md)

## Related articles

- [Permissions lookup guide](permissions-lookup-guide.md)
- [About permissions and groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)


