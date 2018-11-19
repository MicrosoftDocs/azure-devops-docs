---
ms.topic: include
---


## Open your Kanban board from the web portal

Your Kanban board is one of two types of boards available to you. For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](/azure/devops/boards/backlogs/backlogs-boards-plans). To switch to the [product backlog](/azure/devops/boards/backlogs/create-your-backlog), select **Stories backlog**. To switch to the [task board](/azure/devops/boards/sprints/task-board), select **Sprints** and then select **Taskboard**.  

> [!NOTE]
> Select **Previous navigation** when you see a top-level blue bar. Select **New navigation** if you see a vertical sidebar or if you enabled the **New Navigation** preview feature. The vertical sidebar, along with other navigational features, is enabled when the **New Navigation** preview feature is enabled for the signed-in user or the organization. To learn how to use the web portal effectively, see [Web portal navigation](/azure/devops/project/navigation/index).    
> 
> For on-premises TFS, select **Previous Navigation** for guidance. 


# [New navigation](#tab/new-nav)

::: moniker range=">= azdevserver-2019"

0. Check that you selected the right project, and select **Boards** > **Boards**. Then select the correct team from the team selector menu. 

	![Open your Kanban board](/azure/devops/boards/boards/_img/quickstart/open-kanban-board-agile.png)  

	To select another team's board, open the selector. Then select a different team, or select the ![home icon](/azure/devops/_img/icons/home-icon.png) **Browse all team boards** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Select another team's board](/azure/devops/boards/boards/_img/quickstart/select-kanban-team-board.png) 

	> [!TIP]    
	> Select the ![ ](/azure/devops/_img/icons/icon-favorite-star.png) star icon to make a team board a favorite. Favorite artifacts (![ ](/azure/devops/_img/icons/icon-favorited.png) favorite icon) appear at the top of the team selector list.

0. Check that you selected **Backlog items** for Scrum, **Stories** for Agile, or **Requirements** for CMMI as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Select product backlog level, Backlog items, Stories, or Requirements](/azure/devops/boards/sprints/_img/assign-items-sprint/select-product-backlog-agile.png) 

::: moniker-end

::: moniker range="<= tfs-2018"

**New navigation** isn't supported on TFS at this time. Select **Previous navigation** for guidance.

::: moniker-end

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2017 <= tfs-2018 || vsts"

0. To view your Kanban board, open your project from a web browser. Select **Work** > **Backlogs** > **Stories**, and then select **Board**. 

	![Open Portfolio Kanban board, features](/azure/devops/boards/boards/_img/quickstart/open-kanban-board.png)

	If you don't see **Work**, your screen size might be reduced. Select the three dots (![ ](/azure/devops/_shared/_img/ellipses-reduced-screen-size.png)) icon. Then select **Work** > **Backlogs** > **Board**.   

	![Open Work when screen size is reduced](/azure/devops/boards/boards/_img/kanban-quickstart-reduced-screensize.png)   

0.	To select another team, open the project and team selector. Select a different team, or select the **Browse** option.  

	> [!div class="mx-imgBorder"]  
	> ![Select another team](/azure/devops/boards/sprints/_img/assign-items-sprint/team-selector-backlogs-standard.png)  

	Your Kanban board appears. 
	  
	![Kanban board, Agile template](/azure/devops/boards/boards/_img/kanban-basics-intro.png)   

::: moniker-end   

::: moniker range="<= tfs-2015"

0. To view your Kanban board, open your project from a web browser. Select **Work** > **Backlogs** > **Stories**, and then select **Board**. 

	![Open Portfolio Kanban board, features](/azure/devops/boards/boards/_img/quickstart/open-kanban-board.png)

	If you don't see **Work**, your screen size might be reduced. Select the three dots (![ ](/azure/devops/_shared/_img/ellipses-reduced-screen-size.png)) icon. Then select **Work** > **Backlogs** > **Board**.   

	![Open Work when screen size is reduced](/azure/devops/boards/boards/_img/kanban-quickstart-reduced-screensize.png)   

0.	To select another team, open the project and team selector. Select a different team, or select the **Browse** option.  

	![Select another team from the project menu](/azure/devops/boards/sprints/_img/capacity/vso-team-selector.png)  

	Your Kanban board appears. 
	 
	> [!div class="mx-imgBorder"]  
	> ![TFS 2015, Kanban board, Agile template](/azure/devops/boards/boards/_img/overview/kanban-basics-intro-tfs.png)  
::: moniker-end   

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

---

