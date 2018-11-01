---
title: Plan and track work 
titleSuffix: Azure DevOps
description: Begin planning and tracking work in your new project in Azure DevOps 
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: chcomley
author: chcomley
robots: NOINDEX, NOFOLLOW
ms.topic: quickstart
monikerRange: '>= tfs-2013'
ms.date: 09/10/2018
---

# Quickstart: Plan and track work in Azure DevOps

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Add work items to plan and manage your project. Use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.

In this quickstart, you learn how to add work items from the web portal and view work items that you've created.

<a id="define-new-work">  </a>

## Prerequisites

You can add work items after you connect to a project. If you don't have an organization or project yet, create one in [Azure DevOps](sign-up-invite-teammates.md).

## Add a work item

[!INCLUDE [temp](../_shared/new-navigation.md)]

# [New navigation](#tab/new-nav)

1. From your web browser, open the project for your organization. If you don't have a project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The web browser URL follows this pattern: ```https://dev.azure.com/{yourorganization}/{yourproject}```  

	You can use this URL to quickly open the project. Replace {yourorganization} and {yourproject} with your specific organization and project name, and remove the braces.

	If you don't see the project that you want, choose the ![Azure DevOps icon](../_img/icons/project-icon.png) Azure DevOps icon to [browse all projects and teams](../project/navigation/work-across-projects.md).  

	![Browse all projects](_img/plan-track-work/browse-all-projects-vert.png)

1.	Select **Azure Boards** > **Work Items**.

    >![Select Boards and Work Items to create a new work item](_img/plan-track-work/project-select-work-items-vert.png)

1. Choose **New Work Item** and select the work item type that you want. Here, we choose to create a **Feature**.

   >![Choose New Work Item and type](_img/plan-track-work/new-work-item-select-type-vert.png)

1. Enter a title and then **Save** the work item. Before you can change the **State** from its initial default value, you must save it.  

	That's it!

# [Previous navigation](#tab/previous-nav)

1. From your web browser, open the project for your organization. If you don't have a project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The web browser URL follows this pattern: ```https://dev.azure.com/{yourorganization}/{yourproject}```  

	You can use this URL to quickly open the project. Replace the {organization name} and {project name} with your specific organization and project name, and remove the braces. 

	If you don't see the team or project that you want, choose the ![Azure DevOps icon](../_img/icons/project-icon.png) Azure DevOps icon to [browse all projects and teams](../project/navigation/work-across-projects.md).  

1.	Select **Work** > **New Work Items** and choose the work item type that you want. Here, we choose to create a **User Story**. 

	<img src="../boards/backlogs/_img/add-work-items-choose-user-story.png" alt="Azure DevOps Services, TFS 2017, Work, Add a work item" style="border: 2px solid #C3C3C3;" /> 

	If you don't see the **Work** option, your screen size might be reduced. Select the ellipsis (...) (![ellipsis](../_shared/_img/ellipses-reduced-screen-size.png)), then choose **Work** > **New Work Items**, and then choose the work item type that you want.

	![Open Work when screen size is reduced](_img/plan-track-work/open-work-hub-reduced-screen-size.png) 

1. Enter a title and then save the work item. Before you can change the **State** from its initial default value, you must save it.  

	<img src="../boards/backlogs/_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 2px solid #C3C3C3;" />  

	That's it!
---

Create as many work items as you need. Use the types that you need to track the work that you want to manage.  

>[!NOTE]  
>Depending on the process that was chosen when the project was created&mdash;[Scrum](../boards/work-items/guidance/scrum-process.md), 
[Agile](../boards/work-items/guidance/agile-process.md), or [CMMI](../boards/work-items/guidance/cmmi-process.md)&mdash;the types of work items that you can create differ. For example, backlog items might be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three types are similar: they describe the customer value to deliver and the work to perform.
>
> For an overview of all three processes, see [Choose a process](../boards/work-items/guidance/choose-process.md).


## View your created work items  

# [New navigation](#tab/new-nav)

1. Go to your project and select **Azure Boards** > **Work Items**.

   ![In your project, select Work and Work Items](_img/plan-track-work/project-select-work-items-vert.png)

1. To view any work item in the list, select the title.

# [Previous navigation](#tab/previous-nav)

1. Select **Work** > **Work Items** > **My activity**. This page lists all of the work items that you recently viewed, created, or modified.

	<img src="_img/plan-track-work/view-work-item-activity.png" alt="Work, Work Items page, Add a work item" style="border: 2px solid #C3C3C3;" />

1. To view any work item in the list, select the title.

---

For more information on how to use the **Work Items** page, see [View and add work items](../boards/work-items/view-add-work-items.md).

## Try these next steps
 
> [!div class="nextstepaction"]
> [Add and run manual tests](add-run-manual-tests.md)
 
To quickly add backlog items, such as user stories or requirements, see these articles:  
> [!div class="nextstepaction"]
> [Create your backlog](../boards/backlogs/create-your-backlog.md)
> [Kanban quickstart](../boards/boards/kanban-quickstart.md) 

Learn more about [planning and tracking work](../boards/work-items/index.md).
 
