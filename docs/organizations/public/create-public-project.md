---
title: Create a public project
titleSuffix: Azure DevOps Services Public Project  
description: Create or add a public project to your Azure DevOps Services organization 
ms.technology: devops-public-projects
ms.prod: devops
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

A public project is similar to any other project that you add to your Azure DevOps Services organization. Each project provides a repository for source code and a place for a group of people to plan, track progress, and collaborate on building software solutions. 

A public project allows non members of a project and users who aren't signed in read-only, limited access to the project's artifacts and services. For details, see [Default roles & access for public projects](default-roles-access-public.md).   

You can add a public project to your existing organization, or create an Azure DevOps organization and create a public project at that time. If you want to make an existing private project public, you can [change the project's visibility](make-project-public.md).


## Prerequisites

- You must have an Azure DevOps organization created. If you don't have one, [do that now](../../user-guide/sign-up-invite-teammates.md).   
- As an Azure DevOps organization owner, you can create projects. If you're not the owner, then you must be [a member of the Project Collection Administrators Group](../security/set-project-collection-level-permissions.md#collection-level) or have your [**Create new projects** permission](../security/set-project-collection-level-permissions.md#collection-level) set to **Allow**.


## Enable anonymous access to projects for your organization

Before you can create a public project, you must enable anonymous access for your Azure DevOps organization.

[!INCLUDE [temp](../../_shared/new-navigation.md)] 

# [New navigation](#tab/new-nav)

0. From your web browser, sign-in to Azure DevOps. You must be signed in to create a public project. 

0. Choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. Then choose **Admin settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)  

0. Choose the **Policy** page, and select **On** for **Anonymous access to projects**.     

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](_img/create-public-project/open-policy-vert.png) 

# [Previous navigation](#tab/previous-nav)

0. From your web browser, sign-in to Azure DevOps. You must be signed in to create a public project. 

0. Choose the ![](../../_img/icons/gear-icon.png) gear icon to open **Organization Settings**.

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](../../_shared/_img/settings/open-account-settings-horz-brn.png) 

0. Choose the **Policy** page, and select **On** for **Anonymous access to projects**.     

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](_img/create-public-project/turn-on-anonymous-access.png)  


---


## Add a public project to your organization 

# [New navigation](#tab/new-nav)

0. Choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. 

	> [!div class="mx-imgBorder"]  
	> ![Open organizational settings](../../_shared/_img/settings/open-projects-hub-vert-brn.png)  

0. Choose **Create Project**.

	> [!div class="mx-imgBorder"]  
	> ![Choose New Project](_img/create-public-project/add-proj-vert-brn.png)  

0. Provide a name for your project and choose **Public**. Keep the remaining defaults, or select the initial source control type and process for work item tracking. 

	> [!div class="mx-imgBorder"]  
	> ![Create new project formt](_img/create-public-project/create-new-project-form-new-nav.png)

0. Upon successful completion, the welcome page displays.

	> [!div class="mx-imgBorder"]  
	> ![Project creation confirmation dialog, new nav](../projects/_img/create-project/project-creation-complete-new-nav.png)

	Select one of the following tasks to get started:  
	- **Invite** to begin [adding others to your project](../security/add-users-team-project.md). Note, if this is your first project, then you must first [invite users to your organization](../accounts/add-team-members.md). 
	- **Boards** to begin [adding work items](../../boards/work-items/view-add-work-items.md).
	- **Repos** to open [Repos>Files](../../repos/git/clone.md) page where you can clone or import a repository, or initialize a README file for your project summary page.
	- **Pipelines** to start [defining a pipeline](../../pipelines/index.md).
	- **Test Plans** to start [defining test plans and test suites](../../test/create-a-test-plan.md).
	- [Manage your services](../settings/set-services.md) to disable the visibility of one or more services.

To get started managing your project, see [Get started as an administrator](../../user-guide/project-admin-tutorial.md). 

# [Previous navigation](#tab/previous-nav)

0. Choose the ![](../../_img/icons/project-icon.png) Azure DevOps logo to open **Projects**. 

	> [!div class="mx-imgBorder"]  
	> ![Open organizational settings, prev nav](_img/create-public-project/open-org-hub.png)  

0. Choose **New Project**.

	> [!div class="mx-imgBorder"]  
	> ![Choose New Project](_img/create-public-project/choose-new-project.png)  

0. Provide a name for your project and choose **Public**. Keep the remaining defaults, or select the initial source control type and process for work item tracking. 

	> [!div class="mx-imgBorder"]  
	> ![Create new project formt](_img/create-public-project/add-public-project-form.png)

0. Upon successful completion, you'll see a page similar to the following image. From this page you can add code to your repository or build code from an external repository. For details, see  [Share your project vision](../../project/wiki/project-vision-status.md).  

	> [!div class="mx-imgBorder"]  
	> ![Public project created page](_img/create-public-project/public-project-created.png)


---


## Share the URL of your public project

Once created, an [anonymous user](glossary-public.md#anonymous-user) or [public user](glossary-public.md#public-user) can view the contents of your public project. 
 
To provide instant access, share the URL of your public project with those people you want to have access to the project in a read-only mode. For example, you can share this portion of the URL shown under **Clone to your computer**.  

`https://dev.azure.com/OrganizationName/ProjectName/`


## Try this next
> [!div class="nextstepaction"]
> [Invite users to contribute to your public project](invite-users-public.md)


## Related articles 

- [Differences and limitations for non-members of a public project](feature-differences.md)