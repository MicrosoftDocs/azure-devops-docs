---
title: Add AD/AAD security groups to built-in security groups  for VSTS & TFS
description: Manage large groups of users by adding AD/AAD security groups to built-in security groups 
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
ms.date: 04/17/2018
monikerRange: '>= tfs-2013'
---
# Tutorial: Change individual permissions, grant select access to specific functions

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

The standard way for permissions to accrue to individuals are by adding user accounts to one or more built-in security groups. However, in certain instances, you'll want to grant additional permissions to select individuals, but perhaps not all permissions assigned to the security group. For example, you might want to grant several individuals the ability to add or edit area and iteration paths, but not have all permissions available to members of the Project Administrators group.

The three ways to change permissions for an individual are:

- Create a custom group, define permissions for that group, add the user account to the group
- For object-level permissions: Add the user account and set permissions
- For project or collection-level permissions: Search for the user account and selectively change their permission assignments

In this topic you'll learn how to:
> [!div class="checklist"]
> * Create a custom security group 
> * Set permissions for a custom security group 
> * Add members to a custom security group 
> * Change the permission assignments for an individual user account  

If you are new to administrating permissions and groups, review [About permissions and groups](about-permissions.md) to learn about permission states and inheritance.

[!INCLUDE [temp](../_shared/image-differences.md)]

<a id="create-custom-group" />

## Create a custom security group

Create a custom security group at the project-level or the collection-level. The method for creating a custom security group is the same, no matter at what level you add it. 

1. To create a project-level security group, open the web portal and choose the team project where you want to add users or groups. Choose the ![gear icon](../_img/icons/gear-icon.png) gear icon to open the administrative context.

    <img src="_img/add-users/choose-team-project-click-gear-icon.png" alt="VSTS, TFS 2017, Team Project hub, Click gear icon to open the Admin context" style="border: 1px solid #C3C3C3;" /> 

2. Open the **Security** page and and choose **Create group** to open the dialog for adding a group.

    <img src="_img/change-individual-permissions/create-group-open-dialog.png" alt="Create security group at the account or collection level" style="border: 1px solid #C3C3C3;" /> 

3. Enter a name for the group, and optionally a description.

    For example, here we define a Team Admins group.

    <img src="_img/change-individual-permissions/create-project-level-group-dialog.png" alt="Security group dialog, Add a security group at the project level" style="border: 1px solid #C3C3C3;" />

4. Choose **Create group**.

<a id="set-permissions-custom-group" />

## Set permissions for a custom security group

1. To set permissions for the custom group you just created, click the group name and then set one or more permissions.

    <img src="_img/change-individual-permissions/team-admin-group-set-permissions.png" alt="Set permissions for a project-level custom security group" style="border: 1px solid #C3C3C3;" /> 

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

2. Choose **Save changes**.

<a id="add-members-custom-group" />

## Add members to a custom security group

You add members to a custom security group in the same way you add users to a built-in group. 

1. Choose the security group, choose **Members**, and then choose **Add**.

    <img src="_img/change-individual-permissions/team-admin-group-add-members.png" alt="Web portal, Admin context, Security hub, Add member" style="border: 1px solid #C3C3C3;" /> 

2. Type the name of the user account into the text box. You can type several identities into the text box, separated by commas. The system will automatically search for matches. Choose the match(es) that meets your choice.

    <img src="_img/project-level-permissions-add-a-user.png" alt="Add users and group dialog" style="border: 1px solid #C3C3C3;" />

    > [!NOTE]
    > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

## Change the permission assignments for an individual user account

### To change the permission at a project-level

1. From the project-level **Security** admin page, type the name of the user account in the **Filter users and groups** box and select the account whose permissions you want to change.

    <img src="_img/change-individual-permissions/filter-user-account.png" alt="Filter and select a user account" style="border: 1px solid #C3C3C3;" /> 

2. Change the permissions for the account, setting a permission as **Allow** or **Deny**.

    <img src="_img/change-individual-permissions/set-individual-permissions.png" alt="Set permissions for a single user account" style="border: 1px solid #C3C3C3;" /> 

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

3. Choose **Save changes**.

### To change the permission at a collection level

1. Open the account-level or collection-level **Security** admin page and follow the instructions provided in the previous section for project-level permissions.

    For a description of each collection-level permission, see [Permissions and groups reference, collection-level permissions](permissions.md#collection-level).

### To change the permission at an object-level

1. From the web portal, open the Security dialog for the object whose permissions you want to set. For specific instructions, see these topics:

	> [!div class="mx-tdBreakAll"]
	> |Wiki & Dashboard permissions | DevOps permissions  |Agile/Work tracking permissions |  
	> |-------------|----------|---------|   
	> |- [README & Wiki](../collaborate/manage-readme-wiki-permissions.md)<br/>- [Dashboards](../report/dashboards/dashboard-permissions.md)<br/> |- [Git branch](../git/branch-permissions.md)<br/>- [Git repository](set-git-tfvc-repository-permissions.md)<br/>- [TFVC](set-git-tfvc-repository-permissions.md)<br/>- [Builds](../pipelines/policies/set-permissions.md)<br/>- [Release definition security](../pipelines/policies/set-permissions.md)<br/>- [Approvals and approvers](../pipelines/release/approvals/index.md) |- [Area and iteration paths](../security/set-permissions-access-work-tracking.md)<br/>- [Work item query and folder](../work/track/set-query-permissions.md)<br/>- [Plan permissions](set-permissions-access-work-tracking.md#plan-permissions)|  

2. From the Security dialog, choose **Add** to add a user account. 

	<img src="_img/change-individual-permissions/security-dialog-add-user-account-button.png" alt="Open the Add users or group permissions dialog" style="border: 1px solid #C3C3C3;" />

3. Type the name of the user account, choose search, and select the account you want.

4. Select the user name from the left pane and then update the permission assignments, setting **Allow** or **Deny** for specific permissions. 

    <img src="_img/change-individual-permissions/set-permissions-individual-object-level.png" alt="Set permissions for a single user account" style="border: 1px solid #C3C3C3;" />

    For a description of a specific permission, see [Permissions and groups reference](permissions.md).

5. Choose **Save changes**.

## Next steps

> [!div class="nextstepaction"]
> [Grant or restrict access to select features](restrict-access.md)

## Related articles

- [About permissions and groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)


<!--
You can do a search on an individual user and change one of their permissions. However, the preferred method  

User Voice requests: 
* Hide Work Item Types (WITs) based on permission/security group


Recommended permissions 
Team Admins - allow to create area and iteration paths; shared queries. 
-->
