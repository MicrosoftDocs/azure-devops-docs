---
title: Change individual or group permissions
titleSuffix: Azure DevOps
description: Learn how to add custom security groups, change permissions for groups or individuals tutorial
ms.technology: devops-security
ms.assetid: 
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 06/22/2020
---


# Change individual or group permissions

[!INCLUDE [version-all](../../includes/version-all.md)]

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

If you're new to managing permissions and groups, review [Get started with permissions, access, and security groups](about-permissions.md)to learn about permission states and inheritance.


## Prerequisites

* To manage permissions or groups at the project level, you must be a member of the Project Administrators Group or have your **Edit project-level information** set to Allow. If you created the project, you are automatically added as a member of this group. 
* To manage permissions or groups at the collection or instance level, you must be a member of the Project Collection Administrators Group or have your **Edit instance-level information** set to Allow. If you created the organization or collection, you are automatically added as a member of this group. 

[!INCLUDE [temp](../../includes/image-differences.md)]

<a id="create-custom-group" />

## Create a custom security group

Create a custom security group at the project-level or the collection-level. The method for creating a custom security group is the same, no matter at what level you add it. 

To create a project-level security group, open the web portal and choose the project where you want to add users or groups. 

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Choose **Project settings > Permissions**.

   ![Choose Project settings, and then the Permissions page](media/permissions/choose-project-settings-permissions.png)  

2. Choose **New group** to open the dialog for adding a group.

   ![Select New group to open dialog for adding group](media/permissions/permissions-select-new-group.png)

3. Enter a name for the group, select users or groups for membership, optionally add a description, and then choose **Create**.

   ![Create group dialog](media/permissions/create-group-dialog.png)

#### [Current page](#tab/current-page) 

1. Choose **Project settings** > **Security**.

    *To see the full image, select to expand*.

    [![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

2. Choose **Create group** to open the dialog for adding a group.

    > [!div class="mx-imgBorder"]
    > ![Create a custom security group](media/change-individual-permissions/create-group-open-dialog.png)" 

3. Enter a name for the group, and optionally a description.

    For example, here we define a Team Admins group.

    ![Security group dialog, Add a security group at the project level](media/change-individual-permissions/create-project-level-group-dialog.png)

4. Choose **Create group**.

* * *

::: moniker-end

::: moniker range="= azure-devops-2019 || azure-devops-2020"

1. Choose **Project settings** > **Security**.

    *To see the full image, select to expand*.

    [![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

2. Choose **Create group** to open the dialog for adding a group.

    > [!div class="mx-imgBorder"]
    > ![Create a custom security group](media/change-individual-permissions/create-group-open-dialog.png)" 

3. Enter a name for the group, and optionally a description.

    For example, here we define a Team Admins group.

    ![Security group dialog, Add a security group at the project level](media/change-individual-permissions/create-project-level-group-dialog.png)

4. Choose **Create group**.

::: moniker-end

::: moniker range="<= tfs-2018"

1. Open **Project Settings**. Choose the ![gear icon](media/icons/gear_icon.png) gear settings icon, and choose **Security**. 

    > [!div class="mx-imgBorder"]
    > ![Open Project Settings>Security, previous nav](media/view-permissions/open-project-level-security-horz.png)

2. Choose **Create group** to open the dialog for adding a group.

    > [!div class="mx-imgBorder"]
    > ![Create a custom security group](media/change-individual-permissions/create-group-open-dialog.png)" 

3. Enter a name for the group, and optionally a description.

    For example, here we define a Team Admins group.

    ![Security group dialog, Add a security group at the project level](media/change-individual-permissions/create-project-level-group-dialog.png)

4. Choose **Create group**.

::: moniker-end

<a id="set-permissions-custom-group" />

## Set permissions for a custom security group

1. To set permissions for the custom group you  created, choose the group name and then set one or more permissions.

    > [!div class="mx-imgBorder"]
    > ![Set permissions for a project-level custom security group](media/change-individual-permissions/team-admin-group-set-permissions.png)  

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

2. Choose **Save changes**.

<a id="add-members-custom-group" />

## Add members to a custom security group

You add members to a custom security group in the same way you add users to a built-in group. 

1. Choose the security group, choose **Members**, and then choose **Add**.

    > [!div class="mx-imgBorder"]
    > ![Security>Members page, Add member](media/change-individual-permissions/team-admin-group-add-members.png)  

2. Enter the user identity into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice.

    ![Add users and group dialog](media/project-level-permissions-add-a-user.png) 

    > [!NOTE]
    > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

## Change individual permission at the project-level

1. From the project-level **Security** page, enter the user identity in the **Filter users and groups** box. Then, select the account whose permissions you want to change.

    > [!div class="mx-imgBorder"]
    > ![Filter and select a user account](media/change-individual-permissions/filter-user-account.png)  

2. Change the permission, setting a permission as **Allow** or **Deny**.

    ![Change the permission for a single user account.](media/change-individual-permissions/set-individual-permissions.png)  

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

3. Choose **Save changes**.

### Change individual permission at the collection-level

1. Open the user-level or collection-level **Security** admin page and follow the instructions provided in the previous section for project-level permissions.

    For a description of each collection-level permission, see [Permissions and groups reference, collection-level permissions](permissions.md#collection-level).

### Change individual permission at an object-level

From the web portal, open the Security dialog for the object whose permissions you want to set. For specific instructions, see the following articles:


:::row:::
   :::column span="1":::
   Area
   :::column-end:::
   :::column span="1":::
   Task
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Wiki &amp; Dashboard permissions
   :::column-end:::
   :::column span="1":::
   
   
   - [README &amp; Wiki](../../project/wiki/manage-readme-wiki-permissions.md)
   - [Dashboards](../../report/dashboards/dashboard-permissions.md)
   

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   DevOps (code, build, test, release) permissions 
   :::column-end:::
   :::column span="1":::
   
   
   - [Git branch](../../repos/git/branch-permissions.md)
   - [Git repository](../../repos/git/set-git-repository-permissions.md)
   - [TFVC](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Builds](../../pipelines/policies/set-permissions.md)
   - [Release pipeline security](../../pipelines/policies/set-permissions.md)
   - [Approvals and approvers](../../pipelines/release/approvals/index.md) 
   

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Work tracking permissions
   :::column-end:::
   :::column span="1":::
   
   
   - [Area and iteration paths](../../organizations/security/set-permissions-access-work-tracking.md)
   - [Work item query and folder](../../boards/queries/set-query-permissions.md)
   - [Plan permissions](set-permissions-access-work-tracking.md)  

   :::column-end:::
:::row-end:::


1. From the Security dialog, choose **Add**.  

    ![Open the Add users or group permissions dialog](media/change-individual-permissions/security-dialog-add-user-account-button.png)

2. Enter the user ID, choose search, and then make your selection in the left pane.

3. Update the permission setting to **Allow** or **Deny** for specific permissions. 

    ![Set permissions for a single user account](media/change-individual-permissions/set-permissions-individual-object-level.png)

    For a description of specific permissions, see [Permissions and groups reference](permissions.md).

4. Choose **Save changes**.

## Next steps

> [!div class="nextstepaction"]
> [Grant or restrict access to select features](restrict-access.md)

## Related articles

- [Permissions lookup guide](permissions-lookup-guide.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
- [Troubleshoot permissions](troubleshoot-permissions.md)

