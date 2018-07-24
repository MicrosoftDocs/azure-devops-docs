---
title: Navigate to an application or functional area
titleSuffix: VSTS & TFS   
description: Access the application area or change your view
ms.prod: devops
ms.technology: devops-collab
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.date: 07/21/2018
---


# Open a service, page, or settings 

[!INCLUDE [temp](../../_shared/version-tfs-2017-through-vsts.md)] 

From a supported web browser&mdash;such as the latest versions of Edge, Chrome, Safari, or Firefox&mdash;you access the services supported by Visual Studio Team Services (VSTS) or Team Foundation Server (TFS). The web portal provides support for teams to collaborate through the planning, development, and release cycles. You use the web portal to perform both software development and administrative tasks.  

You can manage source code, plan and track work, define builds, run tests, and manage releases. 

::: moniker range="vsts"
If you don't have a project yet, create one in [VSTS](../../user-guide/sign-up-invite-teammates.md?toc=/vsts/project/navigation/toc.json&bc=/vsts/project/navigationbreadcrumb/toc.json). If you don't have access to the project, [get invited to the team](../../organizations/security/add-users-team-project.md).

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
If you don't have a project yet, create one in your [on-premises TFS](../../organizations/projects/create-project.md). If you don't have access to the project, [get invited to the team](../../organizations/security/add-users-team-project.md).

::: moniker-end

[!INCLUDE [temp](../../_shared/new-navigation.md)] 

## Open a service or page

Services support getting work done&mdash;managing code, planning and tracking work, defining and managing pipelines, creating and running tests, and so on. 
# [New navigation](#tab/new-nav)

::: moniker range="vsts"
You open a service by choosing the service from the sidebar and then selecting from the available pages. 

For example, here we select **Work>Backlogs**. 

> [!div class="mx-imgBorder"]  
> ![Open a service, new navigation gif](_img/go-to-app/work-backlogs-selection.gif)

Within the page you may select a specific view or artifact, such as as a team backlog or choose another page. 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end


# [Previous navigation](#tab/previous-nav)

You open a service by choosing it from the horizontal blue bar. Then, select from the available pages.

For example, here we select **Work>Work Items**. 

![Open a service, previous navigation gif](_img/go-to-app/project-app-page-horizontal-selection.png)


---


<a id="project-admin-context" /> 

## Open project settings

Administrators configure resources for a project and manage project-level permissions from the **Project settings** pages. Tasks performed in this context can impact the project and team functions.  For an overview of all project settings, see [Project administrator role and managing projects](../../organizations/settings/about-settings.md#project).

# [New navigation](#tab/new-nav)

::: moniker range="vsts"

0. Choose **Project Settings**.

	> [!div class="mx-imgBorder"]  
	> ![Open project settings](../../_shared/_img/settings/open-project-settings-vert-brn.png)  

0. From there, you can choose a page from the list. Settings are organized based on the service they support. Expand or collapse the major sections such as **Work**, **CI/CD**, **Code**, **Test**, and **Extensions** to select from the list. 

	> [!div class="mx-imgBorder"]  
	> ![Open Project settings](_img/go-to-app/project-setting-hubs.png)  

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end

# [Previous navigation](#tab/previous-nav)

From a user context, open **Settings** by choosing the ![](../../_img/icons/gear_icon.png) gear icon. 

::: moniker range=">= tfs-2018"

<a id="admin-intro" />
<a id="admin-intro-team-services" /> 
 
Open any admin page by choosing it's name. Choose or hover over the ![](../../_img/icons/gear_icon.png) gear icon to access other administrative options. Note that you can choose any of the user-context areas&mdash;**Home**, **Code**, **Work**&mdash;to return to the user context. 

![VSTS, Admin context, team project level](../../_shared/_img/settings/open-project-settings-horz.png) 

::: moniker-end

::: moniker range="tfs-2017"

<a id="admin-intro-tfs-2017-1" />

Open any admin page by choosing it's name. Choose or hover over the ![](../../_img/icons/gear_icon.png) gear icon to access other administrative options. Note that you can choose any of the user-context areas&mdash;**Home**, **Code**, **Work**&mdash;to return to the user context. 

**TFS 2017.2**

![VSTS, Admin context, team project level](_img/go-to-app/work-web-portal_admin-context-project-level-team-services.png)  

**TFS 2017.1**  

![TFS 2017.1, Web portal, Admin context, team project level](_img/go-to-app/work-web-portal_admin-context-project-level-tfs-2017-1.png)  
 
<a id="admin-intro-tfs-2017" /> 

**TFS 2017**

![TFS 2017, Web portal, admin context](_img/go-to-app/web-portal-admin-project-settings-new-nav.png)

::: moniker-end

--- 

<a id="collection-admin-context" /> 

::: moniker range="vsts"
## Open Admin settings 

Account owners and members of the Project Collection Administators group configure resources for all projects or the entire organization, including adding users, from the Admin settings pages. This includes managing permissions at the organization-level. For an overview of all admin settings, see [Project collection administrator role and managing collections of projects](../../organizations/settings/about-settings.md#admin).

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"
## Open Admin settings 

Account owners and members of the Project Collection Administators group configure resources for all projects or the entire project collection from the Admin settings pages. This includes managing permissions at the organization-level. For an overview of all admin settings, see [Project collection administrator role and managing collections of projects](../../organizations/settings/about-settings.md#admin).

::: moniker-end

# [New navigation](#tab/new-nav)

::: moniker range="vsts"

0. Choose the ![](../../_img/icons/project-icon.png) VSTS icon to open **Projects**. Then choose **Admin settings**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Organization settings](../../_img/open-admin-settings-vert.png)  

0. From there, you can choose a page from the list of settings. Settings are organized based on the service they support. Expand or collapse the major sections such as **Work** and **CI/CD** to select a page from the list. 

	> [!div class="mx-imgBorder"]  
	> ![Account settings, Projects](_img/go-to-app/admin-account-settings.png) 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)] 
::: moniker-end

# [Previous navigation](#tab/previous-nav)

0. Choose the ![](../../_img/icons/gear-icon.png) gear icon to open **Account Settings**.

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](../../_shared/_img/settings/open-account-settings.png) 

0. From there, you can choose a page. Settings are organized based on the service they support. 

	> [!div class="mx-imgBorder"]  
	> ![Account settings, Projects](_img/go-to-app/open-admin-settings-horizontal.png) 


---



## Related articles 

- [Project Management](../../organizations/projects/index.md)
- [About team, project, and admin settings ](../../organizations/settings/about-settings.md)