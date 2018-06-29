---
title: Plan and track work 
titleSuffix: VSTS
description: Begin planning and tracking work in your new team project on Visual Studio Team Services  
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: 'vsts'
ms.date: 12/11/2017
---


# Plan and track work 

**VSTS**
 
You add work items to plan and manage your project. You use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.   

Here we show how to add work items from the web portal and view work items you've created. 

<a id="define-new-work">  </a>

## Prerequisites

You can start adding work items once you connect to a team project. If you don't have an account or  team project yet, create one in [VSTS](sign-up-invite-teammates.md).

## Add a work item 

0. From your web browser, open the team project for your VSTS account. If you don't have a team project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The web browser URL follows this pattern: ```https://{account name}.visualstudio.com/{project name}```  

	You can use this URL to quickly open the team project, substituting the {account name} and {project name} with your specific account and project name (remove braces). 

	If you don't see the team or team project you want, click the ![VSTS icon](../work/_img/icons/project-icon.png) VSTS icon to [browse all team projects and teams](account-home-pages.md).  

2.	Click **Work>New Work Items** and choose the work item type you want.  Here, we choose to create a **User Story**. 

	<img src="../work/backlogs/_img/add-work-items-choose-user-story.png" alt="VSTS, TFS 2017, Work hub, Add a work item" style="border: 2px solid #C3C3C3;" /> 

	If you don't see the **Work** hub, your screen size may be reduced. Click the three dots (![elipses](../_shared/_img/ellipses-reduced-screen-size.png)), then click **Work**, **New Work Items**, and then choose the work item type you want. 

	![Open Work hub when screen size is reduced](_img/plan-track-work/open-work-hub-reduced-screen-size.png) 

3. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	<img src="../work/backlogs/_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 2px solid #C3C3C3;" />  

	That's it! 

Create as many work items as you need of the type you need to track the work you want to manage.  


>[!NOTE]  
>Depending on the process chosen when the team project was created&mdash;[Scrum](../work/work-items/guidance/scrum-process.md), 
[Agile](../work/work-items/guidance/agile-process.md), or [CMMI](../work/work-items/guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](../work/work-items/guidance/choose-process.md). 


## View the work items you've just created  

To view work items you just created, open the **Work Items** page. Since this feature is in preview, you'll need to turn it on. 

0. From your user account menu, click the **Preview features** option.   

	<img src="../_shared/_img/preview-features-open.png" alt="Open Preview Features" style="border: 1px solid #C3C3C3;" /> 

0. Click the slider for the **New Work Items Hub** feature so that the slider is on.  

	<img src="_img/plan-track-work/turn-on-new-work-items-hub.png" alt="Enable New Work Items Hub Preview feature" style="border: 1px solid #C3C3C3;" /> 

0. Now, click the **Work** hub, the **Work Items** page, and then **My activity**. This page lists all work items you've recently viewed, created, or modified. 

	<img src="_img/plan-track-work/view-work-item-activity.png" alt="Work hub, Work Items page, Add a work item" style="border: 2px solid #C3C3C3;" />

0. To view any work item listed, click the title. 

For more information on using the Work Items page, see [View and add work items](../work/work-items/view-add-work-items.md).


## Try this next  
 
> [!div class="nextstepaction"]
> [Add & run manual tests](add-run-manual-tests.md)
 

To quickly add backlog items, such as user stories or requirements, see these topics:  
> [!div class="nextstepaction"]
> [Create your backlog](../work/backlogs/create-your-backlog.md)
> [Kanban quickstart](../work/kanban/kanban-quickstart.md) 

Or, [learn more about planning and tracking work](../work/work-items/index.md).
 
