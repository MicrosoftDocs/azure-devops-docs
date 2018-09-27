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

# Quickstart: Plan and track work

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Add work items to plan and manage your project. Use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.

In this quickstart, you learn how to add work items from the web portal and view work items you've created.

<a id="define-new-work">  </a>

## Prerequisites

You can start adding work items once you connect to a project. If you don't have an organization or project yet, create one in [Azure DevOps](sign-up-invite-teammates.md).

## Add a work item

[!INCLUDE [temp](../boards/_shared/new-agile-hubs-feature.md)]

# [New navigation](#tab/new-nav)

1. From your web browser, open the project for your organization. If you don't have a project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The web browser URL follows the following pattern: ```https://dev.azure.com/{yourorganization}/{yourproject}```  

	You can use this URL to quickly open the project, substituting {yourorganization} and {yourproject} with your specific organization and project name (remove braces).

	If you don't see the project you want, choose the ![Azure DevOps icon](../_img/icons/project-icon.png) Azure DevOps icon to [browse all projects and teams](../project/navigation/work-across-projects.md).  

	![Browse all projects](_img/plan-track-work/browse-all-projects-vert.png)

2.	Select **Azure Boards** > **Work Items**. 

    >![Select Boards and Work Items to create a new work item](_img/plan-track-work/project-select-work-items-vert.png)

3. Choose **New Work Item** and select the work item type you want.  Here, we choose to create a **Feature**. 

   >![Choose New Work Item and type](_img/plan-track-work/new-work-item-select-type-vert.png)

4. Enter a title and then **Save** the work item. Before you can change the State from its initial default, you must save it.  

	That's it!

# [Previous navigation](#tab/previous-nav)

1. From your web browser, open the project for your organization. If you don't have a project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The web browser URL follows this pattern: ```https://dev.azure.com/{yourorganization}/{yourproject}```  

	You can use this URL to quickly open the project, substituting the {organization name} and {project name} with your specific organization and project name (remove braces). 

	If you don't see the team or project you want, choose the ![Azure DevOps icon](../_img/icons/project-icon.png) Azure DevOps icon to [browse all projects and teams](../project/navigation/work-across-projects.md).  

2.	Select **Work** > **New Work Items** and choose the work item type you want.  Here, we choose to create a **User Story**. 

	<img src="../boards/backlogs/_img/add-work-items-choose-user-story.png" alt="Azure DevOps Services, TFS 2017, Work, Add a work item" style="border: 2px solid #C3C3C3;" /> 

	If you don't see **Work**, your screen size may be reduced. Select the three dots (![elipses](../_shared/_img/ellipses-reduced-screen-size.png)), then choose **Work** > **New Work Items**, and then choose the work item type you want.

	![Open Work when screen size is reduced](_img/plan-track-work/open-work-hub-reduced-screen-size.png) 

1. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	<img src="../boards/backlogs/_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 2px solid #C3C3C3;" />  

	That's it!
---

Create as many work items as you need of the type you need to track the work you want to manage.  

>[!NOTE]  
>Depending on the process chosen when the project was created&mdash;[Scrum](../boards/work-items/guidance/scrum-process.md), 
[Agile](../boards/work-items/guidance/agile-process.md), or [CMMI](../boards/work-items/guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](../boards/work-items/guidance/choose-process.md).


## View the work items you've just created  

# [New navigation](#tab/new-nav)

1. Go to your project and select **Azure Boards** > **Work Items**.

   ![In your project, select Work and Work Items](_img/plan-track-work/project-select-work-items-vert.png)
2. To view any work item listed, select the title.

# [Previous navigation](#tab/previous-nav)

1. Select the **Work** > **Work Items** > **My activity**. This page lists all work items you've recently viewed, created, or modified.

	<img src="_img/plan-track-work/view-work-item-activity.png" alt="Work, Work Items page, Add a work item" style="border: 2px solid #C3C3C3;" />

2. To view any work item listed, select the title.

---

For more information on using the Work Items page, see [View and add work items](../boards/work-items/view-add-work-items.md).

## Try this next  
 
> [!div class="nextstepaction"]
> [Add & run manual tests](add-run-manual-tests.md)
 
To quickly add backlog items, such as user stories or requirements, see these topics:  
> [!div class="nextstepaction"]
> [Create your backlog](../boards/backlogs/create-your-backlog.md)
> [Kanban quickstart](../boards/boards/kanban-quickstart.md) 

Or, [learn more about planning and tracking work](../boards/work-items/index.md).
 
