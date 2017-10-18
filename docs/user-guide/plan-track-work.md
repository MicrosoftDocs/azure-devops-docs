---
title: Plan and track work | VSTS
description: Begin planning and tracking work in your new team project on Visual Studio Team Services (VSTS)   
ms.technology: vs-devops-overview 
ms.prod: vs-devops-alm
ms.topic: get-started-article
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 08/24/2017
---

# Plan and track work 

**VSTS**
 
You add work items to plan and manage your project. You use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.   

<a id="define-new-work">  </a>
## Add a work item 
You can start adding work items once you connect to a team project. If you don't have an account or  team project yet, create one in [VSTS](sign-up-invite-teammates.md).

Here we show how to add work items from the web portal. 

0. From your web browser, open the team project for your VSTS account and click the **Code** hub. If you don't have a team project, [create one now](sign-up-invite-teammates.md). If you haven't been added as a team member, [get invited now](sign-up-invite-teammates.md#invite-others).

	The URL follows this pattern: ```https://{account name}.visualstudio.com/{project name}/_backlogs```  

	If you don't see the team or team project you want, click the ![VSTS icon](../work/_img/icons/project-icon.png) VSTS icon to [browse all team projects and teams](account-home-pages.md).  

2.	From the **Work** hub, choose the work item type from the New Work Item list of options. Here, we choose to create a User Story. 

	<img src="../work/backlogs/_img/add-work-items-choose-user-story.png" alt="VSTS, TFS 2017, Work hub, Add a work item" style="border: 2px solid #C3C3C3;" /> 

3. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	<img src="../work/backlogs/_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 2px solid #C3C3C3;" />  

That's it! 

Create as many work items as you need of the type you need to track the work you want to manage.  


## Try this next  
 
> [!div class="nextstepaction"]
> [Add & run manual tests](add-run-manual-tests.md)
 

To quickly add backlog items, such as user stories or requirements, see these topics:  
> [!div class="nextstepaction"]
> [Create your backlog](../work/backlogs/create-your-backlog.md)
> [Kanban quickstart](../work/kanban/kanban-quickstart.md) 

Or, [learn more about planning and tracking work](../work/work-items/index.md).
 

>[!NOTE]  
>Depending on the process chosen when the team project was created&mdash;[Scrum](../work/work-items/guidance/scrum-process.md), 
[Agile](../work/work-items/guidance/agile-process.md), or [CMMI](../work/work-items/guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For an overview of all three processes, see [Choose a process](../work/work-items/guidance/choose-process.md). 