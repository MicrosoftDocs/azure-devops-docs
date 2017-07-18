---
title: Add work items | Team Services & TFS  
description: Add work items to plan and manage a software project using Agile tools, Scrum, or Kanban when connected to a team project in Visual Studio Team Services (VSTS).   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 9474A25E-A9D8-433D-8370-C94624B4ACD6  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article 
ms.date: 06/22/2017
---

# Track work and issues, add and update a work item 

**Team Services | TFS 2017 | [Previous versions](add-work-items-tfs.md)**  

>[!IMPORTANT]   
><b>Feature availability: </b>The new work item  experience is currently available from Team Services and the web portal for TFS 2017. This topic describes how to track work using the new form. If you don't see the new form, [your admin may need to enable it](../customize/manage-new-form-rollout.md), or if it's enabled, [you may need to switch to use it](../process/new-work-item-experience.md#switch-new) 
>
>If you connect to TFS 2015 or earlier versions, see [Add work items to plan and track your project (TFS)](add-work-items-tfs.md).  

You add work items to plan and manage your project. You use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.   

<a id="define-new-work">  </a>
## Add a work item 
You can start adding work items once you connect to a team project. If you don't have a team project yet, create one in [Visual Studio Team Services](../../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../../setup-admin/create-team-project.md).

Here we show how to add work items from the web portal. 

1.  Open a browser window and click the Work hub. If you haven't been added as a team member, [get added now](../scale/multiple-teams.md#add-team-members).

	The URL follows this pattern: 
	- Visual Studio Team Services: ```https://{account}.visualstudio.com/{project name}/_backlogs```  
	- Team Foundation Server (on-premises): ```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```  

	If you don't see the team or team project you want, click the ![Team Services icon](../_img/icons/project-icon.png) Team Services icon to [browse all team projects and teams](/team-services/connect/account-home-pages).  

2.	From the Work hub, choose the work item type from the New Work Item list of options. Here, we choose to create an Impediment. <!---Change this to User Story --->   

	<img src="../connect/_img/stakholder-add-work-item-ts.png" alt="Team Services, TFS 2017, Work hub, Add a work item" style="border: 1px solid #CCCCCC;" /> 

	>[!NOTE]  
	>Depending on the process chosen when the team project was created&mdash;[Scrum](../guidance/scrum-process.md), 
	[Agile](../guidance/agile-process.md), or [CMMI](../guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
	>
	> For an overview of all three processes, see [Choose a process](../guidance/choose-process.md). 
	
	Click the ![pin icon](../_img/icons/pin-icon.png) pin icon to have it show up within the Work hub drop down menu. 

	Or, from the Queries page, click the New menu and select the work item type. 

	<img src="_img/cyb-new-work-item-impediment-form.png" alt="Create a new impediment" style="border: 1px solid #CCCCCC;" />

3. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	<img src="_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 1px solid #CCCCCC;" />  

	You can [add tags to any work item to filter backlogs and queries](../track/add-tags-to-work-items.md).

	Work items you add are automatically scoped to your [team's area and iteration paths](../scale/set-team-defaults.md). To change the team context, see [Switch team project or team focus](../how-to/switch-team-context-work.md).

That's it! 

Create as many work items as you need of the type you need to track the work you want to manage.  


## Try this next 

The quickest way to plan your project and add user stories or PBIs is to [create your backlog](../backlogs/create-your-backlog.md) or use your [Kanban board](../kanban/kanban-basics.md).  In a similar manner, if you're adding several tasks to support a sprint, you can do that using the [task board](../scrum/task-board.md). 

For descriptions of each field and work item form control, see [Work item field index](../guidance/work-item-field.md) and [Work item form controls](../concepts/work-item-form-controls.md).  

## Related notes

For additional clients that you can use to add work items, see [Clients that support tracking work items](../../tools.md).

Once you've added several work items, you can use additional features to get notified of changes, create queries, define status and trend charts, plus more. 


<div style="float:left;width:200px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Process guidance</p> 
- [Choose your process](../guidance/choose-process.md)  
- [Agile](../guidance/agile-process.md)   
- [Scrum](../guidance/scrum-process.md)  
- [CMMI](../guidance/cmmi-process.md)   
    
</div>

<div style="float:left;width:240px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Manage</p> 
- [Create your backlog](create-your-backlog.md)  
- [Switch team project or team focus](../how-to/switch-team-context-work.md)       
- [Copy or clone a work item](copy-clone-work-items.md#copy-clone)   
- [Change, move, or delete a work item](remove-delete-work-items.md)   
- [Pre-populate fields using a template](../productivity/work-item-template.md)    
     
</div>

<div style="float:left;width:180px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Track</p>
- [Email work items](../how-to/email-work-items.md)   
- [Tag work items](../track/add-tags-to-work-items.md)  
- [Queries (work items)](../track/using-queries.md)    
- [Share work plans](../track/share-plans.md)   
- [Follow a work item](../../collaborate/follow-work-items.md)   
- [Alerts](../track/alerts-and-notifications.md)        
- [History & audit](../track/history-and-auditing.md)   
- [Work item query charts](../../Report/charts.md)   
</div>



<div style="clear:left;font-size:100%">
</div>

