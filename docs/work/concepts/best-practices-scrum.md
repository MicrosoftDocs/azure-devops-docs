---
title: Sprint and scrum best practices | Team Services & TFS
description: Best practice guidance to implement scrum and use sprint tools in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 1E2F0BDC-C267-4724-86E8-E4BBD75B50B2
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/22/2017
---


# Sprint and scrum best practices 
 
<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b>  




<a id="sprint-planning-meeting">  </a>
### Sprint planning meetings 

Much of sprint planning involves a negotiation between the product owner and the team to determine the focus and work to tackle in the upcoming sprint. It's useful to time-box the planning meeting, restricting it to 4 hours or less. 

In the first part of the meeting, your product owner meets with your team to discuss the user stories that might be included in the sprint. Your product owner will share information and answer any questions that your team has about those stories. This conversation might reveal details such as data sources, user interface layout, response time expectations, and considerations for security and usability. Your team should capture these details within the backlog items form. During this part of the meeting, your team learns what it must build.

As you plan your sprints, you may discover additional requirements that you should capture and add to your backlog. Before your sprint planning meeting, you'll want to [refine your backlog](best-practices-product-backlog.md#groom) to make sure that it is well defined and in priority order. 

Also, setting a sprint goal as part of your planning efforts can help the team stay focused on what's most important for each sprint. 

After you've planned your sprint, you may want to [share the plan](../scrum/sprint-planning.md#share) with key stakeholders. 

You can learn more about conducting your sprint planning meeting from these resources: 
*	[What is Scrum?](https://www.visualstudio.com/learn/what-is-scrum/)
*	[Sprint planning](https://msdn.microsoft.com/library/hh765982.aspx) white paper
*	[The Scrum Guide](http://www.scrumguides.org/scrum-guide.html)
*	[Build and manage the product backlog](https://msdn.microsoft.com/library/hh765982.aspx) white paper




<a id="set-sprint-goals">  </a>
###Set sprint goals
 
Scrum teams use sprint goals to focus their sprint activities. They often set this goal during their sprint planning meeting. The goal summarizes what the team wants to accomplish by the end of the sprint. By explicitly stating the goal, you create shared understanding within the team of the core objective. The sprint goal can also help guide the team when conflicts arise around priorities. 
<a id="tips-from-trenches" />

>###Tips from the trenches: Define sprint goals 
>The sprint goal defines what the product owner and the team consider as the ultimate target to accomplish that sprint. 
>It's not a random selection of backlog items that don't really have a relationship, but a short piece of text that captures 
>what the team should try to accomplish. Normally the product owner comes up with the sprint goal before selecting a 
>number of items for the next sprint. The items for that sprint should all fit that common goal.
>
>Sprint goals can be feature oriented, but might also have a large process component such as deployment automation or test automation. 
>For example:
> - This sprint we will focus on a very simple user story and we will use it to prove that the proposed solution will work.  
> - This sprint will revolve around implementing the security features that will properly secure the administration section of the website.  
> - This sprint will be about integrating the most important payment gateways so that we can start collecting money.  
> 
> Setting the sprint goals helps the team to stay focused. 
> It will make it easier to define priority of tasks within a sprint and it will probably 
help limit the number of stakeholders and end-users that are involved. 
> 
> During the sprint review the most important question you should ask yourself is whether you managed to achieve the sprint goal. 
> How many stories you actually completed comes second. If the goal is accomplished, the sprint succeeds, even if not all stories were finished.
> 
> Contributed by [Jesse Houwing](http://blog.jessehouwing.nl/), Visual Studio devops Ranger and a senior consultant working for Avanade Netherlands.
