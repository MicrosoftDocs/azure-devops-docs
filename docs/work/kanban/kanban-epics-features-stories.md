---
title: Kanban features & epics | Team Services 
description: Quickly define and view the status of child features, user stories, or product backlog items when working in the Kanban features or epic boards in Visual Studio Team Services (VSTS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 489C612D-983E-47D3-BD1A-F13C5DCD74E2  
ms.manager: douge
ms.author: kaelli
ms.date: 05/10/2017
---


# Kanban board features and epics  

<b>Team Services | TFS 2017 | TFS 2015 </b>


If you use Kanban to track progress on your backlog, you can also use Kanban boards to track epics and features.  

And, just as with [child task checklists for backlog items](add-task-checklists.md), you can quickly define and track the progress of child items for your features or epics. Here we see several stories defined for features, both in progress and those completed.    

<img src="_img/features-with-stories.png" alt="Web portal, Features Kanban board with several user stories defined" style="border: 1px solid #CCCCCC;" />

>[!NOTE]  
><b>Feature availability: </b>Child checklists for feature and epic Kanban boards are supported from Team Services and TFS 2017.  

## Add items    

Add new items to a feature or epic through the item's ![actions icon](../_img/icons/actions-icon.png) Action menu. For descriptions of fields used to support features and epics, see [Define features and epics](../backlogs/define-features-epics.md). 

<img src="_img/features-add-story.png" alt="Web portal, Feature Kanban board, Open the context menu of a feature to add a story" style="border: 1px solid #CCCCCC;" /> 


#### Checklist controls and keyboard shortcuts

| Keys                  | Function     | 
|--------------------------|-----------------| 
| Home  | Select the first card  | 
| Arrow | Select the next card  | 
| TAB | Select the context menu  | 
| ARROW + ENTER/SPACE | Select action  |  
| Enter | Open card work item  |  



If you have a number of items to add, simply keep typing your task titles and click Enter. 

If you have details you want to add about to a work item, hover over the item and press Enter.  
 

##Related notes

If you're new to working with the Kanban board, see [Kanban basics](kanban-basics.md)

For additional guidance on working with checklist on a Kanban board, see [Add task checklists](add-task-checklists.md). You can perform the same operations for the features and epics Kanban boards as you do with the Kanban board for the product backlog. This includes:    

- Mark an item as done  
- Reorder and reparent work items  
- Assign work items to sprints   

To customize the columns, swimlanes, or cards for each Kanban board, make sure you first select the board and then click the gear icon to open the Settings dialog. See these topics for details: 

* [Add columns](add-columns.md)  
* [WIP limits](wip-limits.md)  
* [Add swimlanes, expedite work](expedite-work.md)   
* [Split columns](split-columns.md)   
* [Definition of Done](definition-of-done.md)  
* [Customize cards](../customize/customize-cards.md)  

[!INCLUDE [temp](../_shared/kanban-board-controls.md)]  

[!INCLUDE [temp](../_shared/live-updates.md)]  

###REST API resources
To programmatically create work items, see the [Work API reference](https://www.visualstudio.com/en-us/integrate/api/wit/batch).
