---
title: Add AD/Azure AD security groups to built-in security groups 
titleSuffix: Azure DevOps Services & TFS
description: Manage large groups of users by adding AD/Azure AD security groups to built-in security groups 
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 08/06/2017
---
---
# Add AD/Azure AD users or groups to a built-in security group

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

As described in [About security and identity](about-security-identity.md), there are two main types of built-in security groups: project-level and collection-level. In general, you add user accounts and groups to a project-level group such as Contributors and Readers. For users that will need to administrate select features and functions, you add them or associated groups to the Build Administrators or Project Administrators group.

Review [Default permissions and access](permissions-access.md) to gain insight into the default permissions provided to the built-in, project-level security groups.  

In this topic you'll learn how to:
> [!div class="checklist"]
> * Add an AD/Azure AD user or group to a built-in security group

The method for adding a user or group to a built-in security group is the same, no matter at what level you add them. 

<a name="add-users-team-project"></a>

## Add an AD/Azure AD user or group to a built-in security group 

::: moniker range="vsts"  
> [!IMPORTANT]  
> If you are adding a user to Azure DevOps for the first time, see [Add account users for Azure DevOps](../accounts/add-organization-users.md?toc=/azure/devops/organizations/security/toc.json&bc=/azure/devops/organizations/security/breadcrumb/toc.json).
::: moniker-end  

[!INCLUDE [temp](../../_shared/new-navigation.md)]  

# [New navigation](#tab/new-nav)

::: moniker range="vsts"  

0. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

0. Choose **Project Settings** and then **Security**.

	[ ![Project Settings>Security](_img/view-permissions/open-security-project-level-vert.png)](_img/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

0. Open **Security** and under the **Groups** section, choose one of the following:
    - To add users who will require read-only access to the project, choose **Readers**.
    - To add users who will contribute fully to this project or who have been granted stakeholder access, choose **Contributors**.
    - For users who will need to administrate the project, choose **Project Administrators**. 

0. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](_img/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

1. Choose ![](../../_img/icons/add-light-icon.png)**Add** to add a user or a user group.

2. Enter the name of the user account into the text box. You can type several identities into the text box, separated by commas. The system will automatically search for matches. Choose the match(es) that meets your choice.

	![Add users and group dialog](_img/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just type the friendly name.

::: moniker-end  

::: moniker range=">= tfs-2015  <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  


# [Previous navigation](#tab/previous-nav)

0. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).  

0.  Choose the ![](../../_img/icons/gear-icon.png) gear icon to open **Project Settings**.

   ![Open Project Setttings, horizontal nav](../../_shared/_img/settings/open-project-settings-horz.png)   

0. Open **Security** and under the **Groups** section, choose one of the following:
    - To add users who will require read-only access to the project, choose **Readers**.
    - To add users who will contribute fully to this project or who have been granted stakeholder access, choose **Contributors**.
    - For users who will need to administrate the project, choose **Project Administrators**. 

0. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](_img/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

1. Choose ![](../../_img/icons/add-light-icon.png)**Add** to add a user or a user group.

2. Enter the name of the user account into the text box. You can type several identities into the text box, separated by commas. The system will automatically search for matches. Choose the match(es) that meets your choice.

	![Add users and group dialog](_img/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just type the friendly name.

---

## Next steps

> [!div class="nextstepaction"]
> [Change individual permissions, grant select access to specific functions](change-individual-permissions.md)

## Related articles

* [About permissions and groups](about-permissions.md)
* [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
* [About security and identity](about-security-identity.md)
