---
title: Show bugs on backlogs and boards
titleSuffix: VSTS & TFS 
description: Choose how bugs appear on Agile tools in Visual Studio Team Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 27DCB879-30F6-44F3-998A-755DF66D6E24
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 03/20/2018
---

# Show bugs on backlogs and boards  


[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]


As your team identifies code defects or bugs, they can add them to the backlog and track them similar to requirements. Or, they can schedule them to be fixed within a sprint along with other tasks. 
 
When you track bugs as requirements, they'll show up on the product backlog and Kanban board. When you track bugs similar to tasks, they'll show up on the sprint backlogs and task boards. If you want to track additional work item types (WITs) or custom WITs on your backlogs or boards, you can. See [Add other work item types to backlogs or boards](#add-other-wits) later in this topic.

## Set your team's preferences for tracking bugs  
<!---
> [!NOTE]    
>**Feature availability**: You can manage all your team settings from a common configuration dialog from VSTS and TFS 2015.1 and later versions.
-->  

1. From your team's backlog page, click the ![gear icon](../_img/icons/team-settings-gear-icon.png) (gear icon) to open the common configuration team settings.  
	::: moniker range="vsts || >= tfs-2017 <= tfs-2018"  
	![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png) 
	::: moniker-end
	::: moniker range="tfs-2015" 
	**TFS 2015.1**
	![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png) 
	**TFS 2015**
	Click the ![gear icon](../_img/icons/team-settings-gear-icon.png), (gear icon) to open the administration page.  

	![Gear icon provides access to admin pages](../_img/icons/ALM_OpenAdminContext.png)

	From the Overview tab, choose the team whose settings you want to configure, and then click **Settings**.
	::: moniker-end
	::: moniker range="tfs-2013"
	Click the ![gear icon](../_img/icons/team-settings-gear-icon.png), (gear icon) to open the administration page. Requires TFS 2013.4 or later version.  

	![Gear icon provides access to admin pages](../_img/icons/ALM_OpenAdminContext.png)

	From the Overview tab, choose the team whose settings you want to configure, and then click **Settings**.
	::: moniker-end

2. Click the **Working with bugs** tab and choose from the three options available.

	* Choose the first option when your team wants to manage bugs similar to requirements. Bugs can be estimated and tracked against team velocity and cumulative flow. Bugs will be associated with the Requirements category.  

	* Choose the second option when your team wants to manage bugs similar to tasks. Remaining work can be tracked for bugs and tracked against the sprint capacity and burndown. Bugs will be associated with the Task category. 

	* Choose the last option if your team manages bugs separate from requirements or tasks. Bugs will be associated with the Bugs category. 

	> [!NOTE]    
	> Because this setting affects all team members' view of the team backlogs and boards, you must be a team administrator to change the setting. Changing the setting is disabled if you're not a team administrator. Go [here to get added as a team administrator](../scale/add-team-administrator.md).
	
	::: moniker range="vsts || >= tfs-2018"  	
	<img src="_img/show-bugs-settings-ts.png" alt="VSTS, web portal, team settings dialog, Working with bugs tab" style="border: 2px solid #C3C3C3;" />
	::: moniker-end
	::: moniker range="tfs-2017"     
	<img src="_img/show-bugs-settings-2017.png" alt="TFS, web portal, team settings dialog, Working with bugs tab" style="border: 2px solid #C3C3C3;" />
	::: moniker-end
	::: moniker range=">= tfs-2013 <= tfs-2015"  
	<img src="_img/team-settings.png" alt="TFS 2015, web portal, team settings admin page, Working with bugs" style="border: 2px solid #C3C3C3;" />
	::: moniker-end 

3. To see the changes, open or refresh the team's [backlog](../backlogs/create-your-backlog.md), [sprint backlog pages](../scrum/sprint-planning.md), or [Kanban board](../kanban/kanban-basics.md).

> [!TIP]  
> If, after refreshing a backlog or board, and you don't see bugs where you expect them, review [How backlogs and boards display hierarchical (nested) items](../backlogs/resolve-backlog-reorder-issues.md). Only leaf nodes of nested items will appear on the Kanban or task boards.  


<a id="add-other-wits" /> 
## Add other work item types to your backlogs or boards

Bugs are a common item that teams want to track, and choose how they track it. See [Manage bugs](../backlogs/manage-bugs.md) for more guidance. 

However, what if you want to track other work item types (WITs) on your backlogs and boards?  

::: moniker range="vsts"  
You can add other WITs&#8212;such as change requests, issues, or impediments&#8212; by customizing your process or team project, based on the process model you use. For details,  
- For the Inheritance process model, see [Customize your backlogs or boards for a process](../customize/process/customize-process-backlogs-boards.md).   
- For Hosted XML and On-premises XML process models, see [Add a work item type to a backlog and board](add-wits-to-backlogs-and-boards.md).
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"    
You can add other WITs&#8212;such as change requests, issues, or impediments&#8212; by customizing your process or team project, based on the process model you use. For details, see [Add a work item type to a backlog and board](add-wits-to-backlogs-and-boards.md).
::: moniker-end
For an overview of process models, see [Customize your work tracking experience](../customize/customize-work.md).  


## Related articles
Other quickly configurable options you can make:
- [Customize cards on the Kanban board or task board](customize-cards.md)
- [Enable backlog levels of interest to your team](../customize/select-backlog-navigation-levels.md) 
- [Configure team settings](../scale/manage-team-assets.md)  

### Nested items  
As indicated in this topic, bugs can appear alongside user stories (requirements or product backlog items) or tasks. You don't need to link bugs to one of these items in order to manage them.

When you manage bugs with requirements or with tasks, they'll show up on one or more of your Agile tool backlogs and boards. However, if you nest items&mdash;create parent-child links of items that belong in either the Requirements or Task categories&mdash;then not all items may appear on your backlogs and boards. To learn more about how nested items are treated, see [How backlogs and boards display hierarchical (nested) items](../backlogs/resolve-backlog-reorder-issues.md).
