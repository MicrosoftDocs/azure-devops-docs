---
ms.topic: include
---


> [!NOTE]  
> Both Kanban boards and Taskboards support visualizing the flow of work and monitoring metrics to optimize that flow. Kanban boards track requirements, are sprint-independent, and provide a cumulative flow chart for monitoring progress. Each sprint is associated with a Taskboard that supports tracking tasks defined for the sprint. You can monitor progress through capacity charts and the sprint burndown chart. For guidance on using the Taskboard, see [Update and monitor your Taskboard](/azure/devops/boards/sprints/task-board).


## Open your Kanban board from the web portal

Your Kanban board is one of two types of boards available to you. The other is the sprint Taskboard. Kanban boards track requirements, are sprint-independent, and provide a cumulative flow chart for monitoring progress. Each sprint is associated with a Taskboard that supports tracking tasks defined for the sprint. You can monitor progress through capacity charts and the sprint burndown chart. For guidance on using the Taskboard, see [Update and monitor your Taskboard](/azure/devops/boards/sprints/task-board). For an overview of the features supported on each backlog and board, see [Backlogs, boards, and plans](/azure/devops/boards/backlogs/backlogs-boards-plans).


::: moniker range=">= azure-devops-2019"

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

To switch to the [product backlog](/azure/devops/boards/backlogs/create-your-backlog), select **Stories backlog**. To switch to a Taskboard, see [Update and monitor your Taskboard](/azure/devops/boards/sprints/task-board).  

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

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
