---
ms.topic: include
---


## Open your Kanban board from the web portal

Your Kanban board is one of two types of boards available to you. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](/azure/devops/boards/backlogs/backlogs-boards-plans). To switch to the [product backlog](/azure/devops/boards/backlogs/create-your-backlog), choose **Stories backlog**. And, to switch to the [Task board](/azure/devops/boards/sprints/task-board), choose **Sprints** and then choose **Taskboard**.  

> [!NOTE]
> Choose **Previous navigation** when you see a top-level blue bar. Choose **New navigation** if you see a vertical sidebar or if you enabled the **New Navigation** preview feature. The vertical sidebar, along with other navigational features, is enabled when the **New Navigation** preview feature has been enabled for the signed-in user or the organization. To learn how to use the web portal effectively, see [Web portal navigation](/azure/devops/project/navigation/index).    
> 
> For on-premises TFS, choose **Previous Navigation** for guidance. 


# [New navigation](#tab/new-nav)

::: moniker range="vsts"

0. (1) Check that you have selected the right project, (2) choose **Boards>Boards**, and then (3) select the correct team from the team selector menu. 

	![Open your Kanban board](/azure/devops/boards/boards/_img/quickstart/open-kanban-board-agile.png)  

	To choose another team's board, open the selector and select a different team or choose the ![home-icon](/azure/devops/_img/icons/home-icon.png) **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team's board](/azure/devops/boards/boards/_img/quickstart/select-kanban-team-board.png) 

	> [!TIP]    
	> Choose the ![ ](/azure/devops/_img/icons/icon-favorite-star.png) star icon to favorite a team board. Favorited artifacts (![ ](/azure/devops/_img/icons/icon-favorited.png) favorited icon) appear at the top of the team selector list.

0. Check that you have selected **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](/azure/devops/boards/sprints/_img/assign-items-sprint/select-product-backlog-agile.png) 

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

**New navigation** isn't supported on TFS at this time. Choose **Previous navigation** for guidance.

::: moniker-end

# [Previous navigation](#tab/previous-nav)

0. To view your Kanban board, open your (1) project from a web browser and choose (2) **Work**, (3) **Backlogs**, (4) **Stories**, and then (5) **Board**. 

	![Open Portfolio Kanban board, Features](/azure/devops/boards/boards/_img/quickstart/open-kanban-board.png)

	If you don't see **Work**, your screen size may be reduced. Click the three dots (![ ](/azure/devops/_shared/_img/ellipses-reduced-screen-size.png)), then choose **Work**, **Backlogs**, and then **Board**.   

	![Open Work when screen size is reduced](/azure/devops/boards/boards/_img/kanban-quickstart-reduced-screensize.png)   

0.	To choose another team, open the project/team selector and select a different team or choose the **Browse** option. 
	::: moniker range=">= tfs-2017"
	> [!div class="mx-imgBorder"]  
	> ![Choose another team](/azure/devops/boards/sprints/_img/assign-items-sprint/team-selector-backlogs-standard.png) 
	::: moniker-end
	::: moniker range=">= tfs-2013 <= tfs-2015"
	![Choose another team from the project menu](/azure/devops/boards/sprints/_img/capacity/vso-team-selector.png)
	::: moniker-end

0. Your Kanban board displays. 
	::: moniker range=">= tfs-2017"   
	![Kanban board, Agile template](/azure/devops/boards/boards/_img/kanban-basics-intro.png)   
	::: moniker-end   
	::: moniker range=">= tfs-2013 <= tfs-2015"    
	> [!div class="mx-imgBorder"]  
	> ![TFS 2015, Kanban board, Agile template](/azure/devops/boards/boards/_img/overview/kanban-basics-intro-tfs.png)       
	::: moniker-end   


---

