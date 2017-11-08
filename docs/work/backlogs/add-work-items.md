---
title: Add work items | VSTS & TFS  
description: Add work items to plan and manage a software project using Agile tools, Scrum, or Kanban when connected to a team project in Visual Studio Team Services (VSTS).   
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 9474A25E-A9D8-433D-8370-C94624B4ACD6  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 09/28/2017
---

# Add and follow a work item 

<b>VSTS | TFS 2018 | TFS 2017</b> 

<!---
>If you connect to TFS 2015 or earlier versions, see [Add work items to plan and track your project (TFS)](add-work-items-tfs.md).  
-->

You add work items to plan and manage your project. You use different types of work items to track different types of work&mdash;such as user stories or product backlog items, tasks, bugs, or issues. You can describe the work to be done, assign work, track status, and coordinate efforts within your team.   

<a id="define-new-work">  </a>
## Add a work item 
You can start adding work items once you connect to a team project. If you don't have a team project yet, create one in [VSTS](../../accounts/set-up-vs.md)<!---or set one up in an [on-premises TFS](../../accounts/create-team-project.md)-->.

Here we show how to add work items from the web portal. 

>[!IMPORTANT]   
><b>Feature availability: </b>The new work item  form is available from VSTS and TFS 2017 and later versions. This topic describes how to track work using the new form. If you don't see the new form, [your admin may need to enable it](../customize/manage-new-form-rollout.md), or if it's enabled, [you may need to switch to use it](../customize/process/new-work-item-experience.md#switch-new). 

1.  From the **Work** hub, choose the work item type from the New Work Item list of options. Here, we choose to create a User Story. 

	<img src="_img/add-work-items-choose-user-story.png" alt="VSTS, TFS 2017, Work hub, Add a work item" style="border: 1px solid #C3C3C3;" /> 

	>[!NOTE]  
	>Depending on the process chosen when the team project was created&mdash;[Scrum](../work-items/guidance/scrum-process.md), 
	[Agile](../work-items/guidance/agile-process.md), or [CMMI](../work-items/guidance/cmmi-process.md)&mdash;the types of work items you can create will differ. For example, backlog items may be called product backlog items (Scrum), user stories (Agile), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
	>
	> For an overview of all three processes, see [Choose a process](../work-items/guidance/choose-process.md). 
	
	Click the ![pin icon](../_img/icons/pin-icon.png) pin icon to have it show up within the Work hub drop down menu. 
<!---
	Or, from the Queries page, click the New menu and select the work item type. 

	<img src="_img/cyb-new-work-item-impediment-form.png" alt="Create a new impediment" style="border: 2px solid #C3C3C3;" />
-->
3. Enter a title and then save the work item. Before you can change the State from its initial default, you must save it.  

	<img src="_img/add-new-work-item-vsts-user-story.png" alt="Agile process, User story work item form" style="border: 1px solid #C3C3C3;" />  

	You can [add tags to any work item to filter backlogs and queries](../track/add-tags-to-work-items.md).

	Work items you add are automatically scoped to your [team's area and iteration paths](../scale/set-team-defaults.md). To change the team context, see [Switch team project or team focus](../../teams/switch-team-context.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json).

That's it! 

Create as many work items as you need of the type you need to track the work you want to manage.  

## Follow a work item

When you want to track the progress of a single work item, click the ![Follow icon](../_img/icons/follow-icon.png) icon. This signals the system to notify you when changes are made to the work item.  

<img src="_img/follow-work-item.png" alt="VSTS Work item form, Follow icon control" style="border: 1px solid #CCCCCC;" />  

You'll only receive notifications when other members of your team modifies the work item, such as adding to the discussion, changing a field value, or adding an attachment. 

Notifications are sent to your preferred email address, which which [you can change from your account preferences](../../notifications/change-email-address.md).  

To stop following changes, click the ![Following icon](../../work/_img/icons/following-icon.png)  icon.
 
>[!IMPORTANT]
>For on-premises TFS, [you must configure an SMTP sever](../../tfs-server/admin/setup-customize-alerts.md) in order for team members to receive notifications.  

## Try this next  

From the **Work** hub you can add the most common types of work items. To quickly add backlog items, such as user stories or requirements, see these topics:  
> [!div class="nextstepaction"]
> [Create your backlog](create-your-backlog.md)
> [Kanban quickstart](../kanban/kanban-quickstart.md) 


For additional clients that you can use to add work items, see [Clients that support tracking work items](../../user-guide/tools.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json ).

Once you've added several work items, you can use additional features to get notified of changes, create queries, define status and trend charts, plus more.  

For descriptions of each field and work item form control, see [Work item field index](../work-items/guidance/work-item-field.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json ) and [Work item form controls](../work-items/work-item-form-controls.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json ).  


