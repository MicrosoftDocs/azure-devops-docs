---
title: Create a public project
titleSuffix: VSTS Public Project  
description: Create or add a public project to your Visual Studio Team Services account 
ms.technology: devops-public-projects
ms.prod: devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
ms.date: 07/02/2018
monikerRange: 'vsts'
---

# Create a public project

[!INCLUDE [temp](_shared/version-public-projects.md)]  

A public project is similar to any other project that you add to your Visual Studio Team Services (VSTS) organization. Each project provides a repository for source code and a place for a group of people to plan, track progress, and collaborate on building software solutions. 

A public project allows non members of a project and users who aren't signed in read-only, limited access to the project's artifacts and services. For details, see [Default roles & access for public projects](default-roles-access-public.md).   

You can add a public project to your existing organization, or create a VSTS organization and create a public project at that time. If you want to make an existing private project public, you can [change the project's visibility](make-project-public.md).


## Prerequisites

- You must have a VSTS organization created. If you don't have one, [do that now](../../user-guide/sign-up-invite-teammates.md).   
- As a VSTS organization owner, you can create projects. If you're not the owner, then you must be [a member of the Project Collection Administrators Group](../security/set-project-collection-level-permissions.md#collection-level) or have your [**Create new projects** permission](../security/set-project-collection-level-permissions.md#collection-level) set to **Allow**.


## Enable anonymous access to projects for your organization

Before you can create a public project, you must enable anonymous access for your VSTS organization.

[!INCLUDE [temp](_shared/navigation.md)] 

# [Horizontal navigation](#tab/horizontal)

0. From your web browser, sign-in to VSTS. You must be signed in to create a public project. 

0. Choose the ![](../../_img/icons/gear-icon.png) gear icon to open **Account Settings**.

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](../../_img/open-account-settings-horz-brn.png) 

0. Choose the **Policy** page, and select **On** for **Anonymous access to projects**.     

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](_img/create-public-project/turn-on-anonymous-access.png)  

# [Vertical navigation](#tab/vertical)

0. From your web browser, sign-in to VSTS. You must be signed in to create a public project. 

0. Choose the ![](../../_img/icons/project-icon.png) VSTS icon to open **Projects**. Then choose **Admin settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](../../_img/open-admin-settings-vert.png)  

0. Choose the **Policy** page, and select **On** for **Anonymous access to projects**.     

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](_img/create-public-project/open-policy-vert.png) 

---


## Add a public project to your organization 


# [Horizontal navigation](#tab/horizontal)

0. Choose the ![](../../_img/icons/project-icon.png) VSTS icon to open **Projects**. .

	> [!div class="mx-imgBorder"]  
	> ![Open organizational hub](_img/create-public-project/open-org-hub.png)  

0. Choose **New Project**.

	> [!div class="mx-imgBorder"]  
	> ![Choose New Project](_img/create-public-project/choose-new-project.png)  

0. Provide a name for your project and choose **Public**. Keep the remaining defaults, or select the initial source control type and process for work item tracking. 

	> [!div class="mx-imgBorder"]  
	> ![Create new project formt](_img/create-public-project/add-public-project-form.png)

0. Upon successful completion, you'll see a page similar to the following image. From this page you can add code to your repository or build code from an external repository. 

	> [!div class="mx-imgBorder"]  
	> ![Public project created page](_img/create-public-project/public-project-created.png)


# [Vertical navigation](#tab/vertical)

0. Choose the ![](../../_img/icons/project-icon.png) VSTS icon to open **Projects**. 

	> [!div class="mx-imgBorder"]  
	> ![Open organizational hub](_img/create-public-project/open-projects-hub-vert-brn.png)  

0. Choose **New Project**.

	> [!div class="mx-imgBorder"]  
	> ![Choose New Project](_img/create-public-project/add-proj-vert-brn.png)  

0. Provide a name for your project and choose **Public**. Keep the remaining defaults, or select the initial source control type and process for work item tracking. 

	> [!div class="mx-imgBorder"]  
	> ![Create new project formt](_img/create-public-project/add-public-project-form.png)

0. Upon successful completion, you'll see a page similar to the following image. From this page you can add code to your repository or build code from an external repository. 

	> [!div class="mx-imgBorder"]  
	> ![Public project created page](_img/create-public-project/public-project-created.png)


---


## Share the URL of your public project

Once created, an [anonymous user](glossary-public.md#anonymous-user) or [public user](glossary-public.md#public-user) can view the contents of your public project. 
 
To provide instant access, share the URL of your public project with those people you want to have access to the project in a read-only mode. For example, you can share this portion of the URL shown under **Clone to your computer**.  

`https://public1.visualstudio.com/MyPublicProject/`


## Try this next
> [!div class="nextstepaction"]
> [Invite users to contribute to your public project](invite-users-public.md)


## Related articles 

- [Differences and limitations for non-members of a public project](feature-differences.md)