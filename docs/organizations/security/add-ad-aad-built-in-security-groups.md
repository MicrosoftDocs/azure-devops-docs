---
title: Add AD/Azure AD groups to security groups 
titleSuffix: Azure DevOps
description: Manage large groups of users by adding AD/Azure AD groups to built-in security groups 
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 11/20/2019
---

# Add AD/Azure AD users or groups to a built-in security group

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

As described in [About security and identity](about-security-identity.md), there are two main types of built-in security groups: project-level and collection-level. In general, you add users and groups to a project-level group such as Contributors and Readers. For users that need to administrate select features and functions, add them or associated groups to the Build Administrators or Project Administrators groups.

Review [Default permissions and access](permissions-access.md) to gain insight into the default permissions provided to the built-in, project-level security groups.  

::: moniker range="azure-devops"

In this article, learn how to do the following task:
> [!div class="checklist"]
> * Add an Azure AD user or group to a built-in security group

::: moniker-end

::: moniker range="<= azure-devops-2019"

In this article, learn how to do the following task:
> [!div class="checklist"]
> * Add an Active Directory user or group to a built-in security group

::: moniker-end

The method for adding a user or group to a built-in security group is the same, no matter at what level you add them.

<a name="add-users-team-project"></a>

::: moniker range="azure-devops"

## Add Azure AD user or group to a built-in security group 

> [!IMPORTANT]  
> If you are adding a user to Azure DevOps for the first time, see [Add users for Azure DevOps](../accounts/add-organization-users.md?toc=/azure/devops/organizations/security/toc.json&bc=/azure/devops/organizations/security/breadcrumb/toc.json).
> To manage the permissions of an Azure AD group in Azure DevOps, you must first add the Azure AD group to a built-in security group. Once you complete this task, you can then manage your Azure AD group permissions throughout Azure DevOps.

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project settings**, and then **Permissions**.

	![Choose Project settings, and then Permissions](_img/permissions/choose-project-settings-permissions.png)

3. Open **Security** and under the **Groups** section, choose one of the following:
    - To add users who require read-only access to the project, choose **Readers**.
    - To add users who need to contribute fully to the project or who have been granted Stakeholder access, choose **Contributors**.
    - For users who need to administrate the project, choose **Project Administrators**.

4. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](_img/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

5. Choose ![ ](../../_img/icons/add-light-icon.png)**Add** to add a user or a user group.

6. Enter the name of the user into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice.

	![Add users and group dialog](_img/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just enter the friendly name.

#### [Current page](#tab/current-page)

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings**, and then **Security**.

	[![Project Settings>Security](_img/view-permissions/open-security-project-level-vert.png)](_img/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

3. Open **Security** and under the **Groups** section, choose one of the following:
    - To add users who require read-only access to the project, choose **Readers**.
    - To add users who need to contribute fully to the project or who have been granted Stakeholder access, choose **Contributors**.
    - For users who need to administrate the project, choose **Project Administrators**.

4. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](_img/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

5. Choose ![ ](../../_img/icons/add-light-icon.png)**Add** to add a user or a user group.

6. Enter the name of the user into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice.

	![Add users and group dialog](_img/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just enter the friendly name.

::: moniker-end

---

::: moniker range="= azure-devops-2019"

## Add an Active Directory user or group to a built-in security group 

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings**, and then **Security**.

	[![Project Settings>Security](_img/view-permissions/open-security-project-level-vert.png)](_img/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

3. Open **Security** and under the **Groups** section, choose one of the following:
    - To add users who require read-only access to the project, choose **Readers**.
    - To add users who need to contribute fully to the project or who have been granted Stakeholder access, choose **Contributors**.
    - For users who need to administrate the project, choose **Project Administrators**.

4. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](_img/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

5. Choose ![ ](../../_img/icons/add-light-icon.png)**Add** to add a user or a user group.

6. Enter the name of the user into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice.

	![Add users and group dialog](_img/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just enter the friendly name.

::: moniker-end


::: moniker range="<= tfs-2018"

## Add an Active Directory user or group to a built-in security group 

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).  

2. Choose the ![ ](../../_img/icons/gear-icon.png) gear icon to open **Project Settings**.

   ![Open Project Settings, horizontal nav](../../_shared/_img/settings/open-project-settings-horz.png)   

3. Open **Security** and under the **Groups** section, choose one of the following:
    - To add users who require read-only access to the project, choose **Readers**.
    - To add users who need to contribute fully to the project or who have been granted Stakeholder access, choose **Contributors**.
    - For users who need to administrate the project, choose **Project Administrators**. 

4. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](_img/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user automatically inherits Contributor permissions.

5. Choose ![ ](../../_img/icons/add-light-icon.png)**Add** to add a user or a user group.

6. Enter the name of the user into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meet your choice.

	![Add users and group dialog](_img/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just enter the friendly name.

::: moniker-end


## Next steps

> [!div class="nextstepaction"]
> [Change individual permissions, grant select access to specific functions](change-individual-permissions.md)

## Related articles

- [About permissions and groups](about-permissions.md)
- [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
- [About security and identity](about-security-identity.md)
