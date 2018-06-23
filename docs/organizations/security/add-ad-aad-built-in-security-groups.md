---
title: Add AD/Azure AD security groups to built-in security groups  for VSTS & TFS
description: Manage large groups of users by adding AD/Azure AD security groups to built-in security groups 
ms.prod: devops
ms.technology: devops-security
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
ms.date: 12/18/2017
monikerRange: '>= tfs-2013'
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

0. Open the web portal and choose the team project where you want to add users or groups. Click the ![gear icon](../../_img/icons/gear-icon.png) gear icon to open the administrative context. 
 
	<img src="_img/add-users/choose-team-project-click-gear-icon.png" alt="VSTS, TFS 2017, Team Project hub, Click gear icon to open the Admin context" style="border: 1px solid #C3C3C3;" /> 

0. Open the **Security** page and under the **Groups** section, choose one of the following:
    -   To add users who will require read-only access to the project, choose **Readers**.
    -   To add users who will contribute fully to this project or who have been granted stakeholder access, choose **Contributors**.
    -   For users who will need to administrate the project, choose **Project Administrators**. 

	If you are adding a user to VSTS for the first time, see [Add account users for VSTS](../accounts/add-account-users-from-user-hub.md?toc=/vsts/organizations/security/toc.json&bc=/vsts/organizations/security/breadcrumb/toc.json).

0. Next, click the **Members** tab.

	Here we choose the Contributors group.

	<img src="_img/add-users/add-members-to-contributors-group.png" alt="Admin context, Security page, Contributors group, Membership page" style="border: 1px solid #C3C3C3;" />

	By default, the default team group and all other teams you add to the team project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

0. Click ![gear icon](../../_img/icons/add-light-icon.png)**Add** to add a user or a user group.

0. Type the name of the user account into the text box. You can type several identities into the text box, separated by commas. The system will automatically search for matches. Click the match(es) that meets your choice.

	<img src="_img/project-level-permissions-add-a-user.png" alt="Add users and group dialog" style="border: 1px solid #C3C3C3;" /> 

	> [!NOTE]
	> The first time you add a user or group to VSTS or TFS,
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just type the friendly name.

## Next steps

> [!div class="nextstepaction"]
> [Change individual permissions, grant select access to specific functions](change-individual-permissions.md)

## Related articles

* [About permissions and groups](about-permissions.md)
* [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)
* [About security and identity](about-security-identity.md)
