---
title: Show bugs on backlogs and boards | VSTS & TFS
description: For your team, choose how bugs appear on Agile tool product, sprint/scrum  backlogs, and Kanban and task boards 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 27DCB879-30F6-44F3-998A-755DF66D6E24
ms.manager: douge
ms.author: kaelli
ms.date: 04/06/2017
---

# Show bugs on backlogs and boards  

<b>VSTS | TFS 2017 | TFS 2015 | TFS 2013.4 </b>

>[!NOTE]  
>**Feature availability**: This feature is available from VSTS and the web portal for TFS 2013.4 and later versions. 

As your team identifies code defects or bugs, they can add them to the backlog and track them similar to requirements. Or, they can schedule them to be fixed within a sprint along with other tasks. 
 
When you track bugs as requirements, they'll show up on the product backlog and Kanban board. When you track bugs similar to tasks, they'll show up on the sprint backlogs and task boards.

>[!NOTE]  
>If you want to track custom WITs on your backlogs or boards, you can.<br/>
> - For Team Services and the Inheritance process model, see [Customize your backlogs or boards for a process](../process/customize-process-backlogs-boards.md).   
> - For Hosted XML and On-premises XML process models, see [Add a work item type to a backlog and board](add-wits-to-backlogs-and-boards.md).
>  
>For an overview of process models, see [Customize your work tracking experience](../customize/customize-work.md).  


## Set your team's preferences for tracking bugs  

>[!NOTE]  
>**Feature availability**: You can manage all your team settings from a common configuration dialog from VSTS or the web portal for TFS 2015 Update 1 or later version.  

1. (VSTS and TFS 2015.1 and later versions) From your team's backlog page, click the ![gear icon](../_img/icons/team-settings-gear-icon.png) (gear icon) to open the common configuration team settings.  

	![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png) 

	(TFS 2015 or TFS 2013.4) Click the ![gear icon](../_img/icons/team-settings-gear-icon.png), (gear icon) to open the administration page.  

	![Gear icon provides access to admin pages](../_img/icons/ALM_OpenAdminContext.png)

	From the Overview tab, choose the team whose settings you want to configure, and then click **Settings**.

2. Click the **Working with bugs** tab and choose from the three options available.

	* Choose the first option when your team wants to manage bugs similar to requirements. Bugs can be estimated and tracked against team velocity and cumulative flow. Bugs will be associated with the Requirements category.  

	* Choose the second option when your team wants to manage bugs similar to tasks. Remaining work can be tracked for bugs and tracked against the sprint capacity and burndown. Bugs will be associated with the Task category. 

	* Choose the last option if your team manages bugs separate from requirements or tasks. Bugs will be associated with the Bugs category. 

	>[!NOTE]  
	>Because this setting affects all team members' view of the team backlogs and boards, you must be a team administrator to change the setting. Changing the setting is disabled if you're not a team administrator. Go [here to get added as a team administrator](../scale/add-team-administrator.md).
	
	**VSTS**  
	
	<img src="_img/show-bugs-settings-ts.png" alt="VSTS, web portal, team settings dialog, Working with bugs tab" style="border: 2px solid #C3C3C3;" />
	
	**TFS 2017**   
	<img src="_img/show-bugs-settings-2017.png" alt="TFS, web portal, team settings dialog, Working with bugs tab" style="border: 2px solid #C3C3C3;" />
	
	**TFS 2015, TFS 2013**  
	
	<img src="_img/team-settings.png" alt="TFS 2015, web portal, team settings admin page, Working with bugs" style="border: 2px solid #C3C3C3;" />
 	  
3. To see the changes, open or refresh the team's [backlog](../backlogs/create-your-backlog.md), [sprint backlog pages](../scrum/sprint-planning.md), or [Kanban board](../kanban/kanban-basics.md).  

> [!TIP]  
> If, after refreshing a backlog or board, and you don't see bugs where you expect them, review [How backlogs and boards display hierarchical (nested) items](../troubleshoot/resolve-backlog-reorder-issues.md). Only leaf nodes of nested items will appear on the Kanban or task boards.  

## Related notes

Bugs are a common item that teams want to track, and choose how they track it. See [Manage bugs](../backlogs/manage-bugs.md) for more guidance. 

However, what if you want to track other work item types (WITs) on your backlogs and boards?  

You can add other WITs&#8212;such as change requests, issues, or impediments&#8212; by customizing your process or team project, based on the process model you use. For details, see [Customize your work tracking experience](customize-work.md).

Other quickly configurable options you can make:
- [Customize cards on the Kanban board or task board](customize-cards.md)
- [Enable backlog levels of interest to your team](../customize/select-backlog-navigation-levels.md) 
- [Configure team settings](../scale/manage-team-assets.md)  


### Nested items  
As indicated in this topic, bugs can appear alongside user stories (requirements or product backlog items) or tasks. You don't need to link bugs to one of these items in order to manage them.

When you manage bugs with requirements or with tasks, they'll show up on one or more of your Agile tool backlogs and boards. However, if you nest items&mdash;create parent-child links of items that belong in either the Requirements or Task categories&mdash;then not all items may appear on your backlogs and boards. To learn more about how nested items are treated, see [How backlogs and boards display hierarchical (nested) items](../troubleshoot/resolve-backlog-reorder-issues.md).

###Error TF400917  

The following error indicates that there is a misconfiguration in either your ProcessConfiguration or Categories definition files. 

```TF400917: The current configuration is not valid for this feature. This feature cannot be used until you correct the configuration.```

To resolve the error, review the information provided in [Add bugs or other work item types to backlogs or boards](add-wits-to-backlogs-and-boards.md) to make sure that you have configured your XML definition files correctly.     

