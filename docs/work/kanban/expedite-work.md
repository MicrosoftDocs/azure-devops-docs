---
title: Expedite work with swimlanes
titleSuffix: VSTS & TFS
ms.global_help.title: Add swimlanes
description: Use swimlanes to differentiate different types of work you track on the Kanban board in Visual Studio Team Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 0BBD90C3-7156-4027-B100-9E46F5BD53FB
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 03/20/2018
---

# Expedite work with swimlanes

<b>VSTS | TFS 2018 | TFS 2017 | TFS 2015</b> 

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
Your Kanban board supports your ability to visualize the flow of work as it moves from new to done. When you add swimlanes, you can also visualize the status of work that supports different service-level classes. You can create a swimlane to represent any other dimension that supports your tracking needs.    

For example, you can create three swimlanes&mdash;Expedite, Standard, and Park&mdash;to track high-priority work, standard work, and work that's currently blocked.  

<img src="_img/ALM_EW_IntroChart_3C.png" alt="Kanban board showing three swimlanes" style="border: 2px solid #C3C3C3;" />

> [!TIP]
>Type **o** to expand all swimlanes and **u** to collapse all swimlanes. To move the focus up or down, enter the ![Up/Down arrow](../_img/icons/Arrow_Up.png)![ ](../_img/icons/Arrow_Down.png) up/down arrows. For more tips, see [kanban board keyboard shortcuts](kanban-board-keyboard-shortcuts.md).


## Types of swimlanes  
You can use swimlanes to sort work on your Kanban board to track items that you differentiate as follows: 
*	High priority items  
*	Service-level class  
*	Date-driven requirement  
*	Dependency for or from another team   
*	Blocked items  
*	Technical debt or other engineering work that's not a specific user story  

## Track work in swimlanes  
Once you've set up your swimlanes, you can drag items into a swimlane as well as reorder them within the lane.  

<img src="_img/ALM_EW_MoveToNewLane.png" alt="Kanban board, Drag items into a swimlane" style="border: 2px solid #C3C3C3;" />

You can also focus on a single swimlane by collapsing all other lanes.

<img src="_img/ALM_EW_CollapseLanes.png" alt="Kanban board, Collapsed swimlanes" style="border: 1px solid #C3C3C3;" /> 
::: moniker-end

	
## Configure swimlanes 
So, what swimlanes will support your tracking needs?  

Once you've identified one or two, add them to your working Kanban board.  

1. From your Kanban board, click ![settings icon](../_img/icons/team-settings-gear-icon.png) and as needed, click Swimlanes.  

	<img src="../customize/_img/kanban-card-customize-open-settings.png" alt="Kanban board, open common configuration settings" style="border: 1px solid #C3C3C3;" /> 

	If you're not a team admin, [get added as one](../scale/add-team-administrator.md). Only team and project admins can customize the Kanban board.

2.	Click ![add icon](../_img/icons/add_icon.png) and enter the name of the swimlane you want to add.       
	::: moniker range="vsts || >= tfs-2017 <= tfs-2018"    	
	<img src="_img/kanban-board-add-swimlane.png" alt="Kanban board, Add a swimlane" style="border: 1px solid #C3C3C3;" />     

	The default lane appears unlabeled on the Kanban board. You can rename it to anything you like, however, you can't delete it. Also, you can rename it directly from the Kanban board.
	::: moniker-end   
	::: moniker range="tfs-2015"   
	**For TFS 2015.1 and later versions**       
	<img src="_img/kanban-board-add-swimlane.png" alt="Kanban board, Add a swimlane" style="border: 1px solid #C3C3C3;" />     
	The default lane appears unlabeled on the Kanban board. You can rename it to anything you like, however, you can't delete it. Also, you can rename it directly from the Kanban board.    
	**For TFS 2015**    
	![Add a swimlane](_img/ALM_SW.AddLane.png)     
	The default lane is automatically renamed to Standard when you add a second lane. You can rename it to anything you like, however, you can't delete it.   
	::: moniker-end    
    
3.	To reorder your swimlanes, simply grab the lane and move it up or down.   
	<img src="_img/ALM_EW_ReorderLanes.png" alt="Kanban board, Open swimlanes" style="border: 2px solid #C3C3C3;" />   

4.	If you need to delete a lane, first move all items out of the lane, and then click Delete from the lane's context menu.      
	<img src="_img/ALM_EW_DeleteLane.png" alt="Kanban board, Delete a swimlane" style="border: 2px solid #C3C3C3;" />   

  
## Related articles

As you can see, swimlanes provides another way to organize and visualize the flow of work using [Kanban](kanban-basics.md). Here are a few more options you have for customizing the look and feel of your Kanban board.   

*	[Add columns](add-columns.md)  
*	[Work in Progress limits](wip-limits.md)   
*	[Split columns](split-columns.md)   
*	[Definition of Done](definition-of-done.md)   
*	[Customize cards](../customize/customize-cards.md)   
*	[Show bugs on backlogs and boards](../customize/show-bugs-on-backlog.md)   



::: moniker range="vsts || >= tfs-2017 <= tfs-2018"		
### Tracking lane moves  

<!---**VSTS and TFS 2015.1 and later versions**-->
You can track Kanban board swimlane moves using the [Board Lane field](../track/query-by-workflow-changes.md#kanban_query_fields). 
::: moniker-end

::: moniker range="tfs-2015"
### Tracking lane moves  

**For TFS 2015.1 and later versions**  

You can track Kanban board swimlane moves using the [Board Lane field](../track/query-by-workflow-changes.md#kanban_query_fields).  

**For TFS 2015**

Similar to the way [column moves are tracked](add-columns.md), swimlane moves are captured in the history field.  

<img src="_img/ALM_EW_HistorySwimLanes.png" alt="Work item form, History tab, History of a swimlane move" style="border: 1px solid #C3C3C3;" />   

For TFS 2015 and earlier versions, you can't [query](../track/using-queries.md) for all items in a particular swimlane. To perform such a query, you'd have to assign a value to a field, such as the Priority field, or [tag](../track/add-tags-to-work-items.md) each item in a similar way.  

::: moniker-end


###REST API resources
To programmatically interact with the Kanban board and other team settings, see the [REST API, Boards reference](https://docs.microsoft.com/en-us/rest/api/vsts/work/boards).




<!---
> [!NOTE]   
> Swimlanes is a supported feature in TFS 2015 and later versions. Consider upgrading to a later TFS version. 
> -->