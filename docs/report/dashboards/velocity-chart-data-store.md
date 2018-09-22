---
title: View built-in data store velocity chart
titleSuffix: Azure DevOps & TFS 
description: Track team velocity across several sprints using the work tracking datastore velocity chart in Azure DevOps & Team Foundation Server  
ms.technology: devops-analytics  
ms.prod: devops
ms.topic: tutorial
ms.reviewer: greggboe
ms.manager: douge
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 08/06/2018
---

# View and work with the built-in team velocity chart 

[!INCLUDE [temp](../../boards/_shared/version-vsts-tfs-all-versions.md)] 

Teams track their velocity to help them determine how much work they can perform sprint-over-sprint. The built-in team velocity chart provides an indication of how much work a team can complete during a sprint. The chart is only available for the product backlog and is based on the sum of estimates made to Effort (PBIs), Story Points (user stories), or Size (requirements). Velocity calculations rely on the team's ability to estimate backlog items. 

**Example Velocity chart from the work tracking data store**  
![3 sprint velocity chart](_img/ALM_DS_Velocity_Chrt_S.png) 


Use this topic to learn: 

> [!div class="checklist"]
> * How to view and work with the Velocity chart (work tracking datastore)  
> * Required and recommended team activities to support velocity tracking   

Once your team has completed a few sprints, they can use their velocity to [forecast](../../boards/sprints/forecast.md) how much of the backlog they can finish within upcoming sprints. For usage guidance, see [Velocity metrics and usage guidance](velocity-guidance.md).

::: moniker range="vsts"  
> [!NOTE]   
> In addition to the built-in velocity chart, Azure DevOps users have access to the [Velocity widget](team-velocity.md). The Velocity widget enables you to view more sprints and additional information than that provided by the velocity chart. 
::: moniker-end  

<a id="velocity-chart">   </a>
## Work with the built-in team velocity chart 
Velocity provides a useful metric for gaining insight into how much work your team can complete during a sprint cycle. Each team is associated with one and only one velocity chart.  

Velocity will vary depending on team capacity, sprint over sprint. However, over time, the velocity should indicate a reliable average that can be used to forecast the full backlog.  

[!INCLUDE [temp](../../boards/_shared/image-differences-with-wits.md)]  

From your web browser, open your product backlog.  

[!INCLUDE [temp](../../_shared/new-navigation.md)] 

# [New navigation](#tab/new-nav)

::: moniker range="vsts"

0. (1) Check that you have selected the right project, (2) choose **Work>Backlogs**, and then (3) select the correct team from the team selector menu. 

	![Open Work, Backlogs, for a team](../../boards/sprints/_img/assign-items-sprint/open-work-backlogs-agile.png)

	To choose another team, open the selector and select a different team or choose the ![home-icon](../../_img/icons/home-icon.png) **Browse all sprints** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](../../boards/sprints/_img/assign-items-sprint/team-selector-backlogs-agile.png) 

	> [!TIP]    
	> Choose the ![ ](../../_img/icons/icon-favorite-star.png) star icon to favorite a team backlog. Favorited artifacts (![ ](../../_img/icons/icon-favorited.png) favorited icon) appear at the top of the team selector list. 

0. Check that you have selected **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](../../boards/sprints/_img/assign-items-sprint/select-product-backlog-agile.png) 

0. Open the velocity chart.  

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](_img/velocity/velocity-forecast-open-chart-vert.png) 

	For charts to appear, your team must perform these activities: 
	- Select sprints for your team  
	- Assign backlog items to sprints   
	- Estimate backlog items by defining the Effort, Story Points, or Size.
 
2.	The chart tracks your estimated backlog work (sum of Effort, Story Points, or Size) that your team has completed (green) in the previous sprints, or that are still in progress (blue).  

	As this chart shows, velocity will fluctuate from sprint-to-sprint for a variety of reasons. However, you can quickly determine the average velocity by averaging the values shown in green for each sprint. You can then plug the average into the Forecast tool.

	![Web portal, Velocity chart showing seven sprints of in progress and completed work](_img/team-velocity-chart-web-7-iterations.png)  

	> [!NOTE]  
	> Work items based on the [Scrum process](../../boards/work-items/guidance/scrum-process.md) get counted in the chart once their State is set to Committed, whereas items based on the [Agile](../../boards/work-items/guidance/agile-process.md) and [CMMI](../../boards/work-items/guidance/cmmi-process.md) processes get counted once their State is set to Active. This behavior is set through the [workflow states to category state mappings](../../boards/work-items/workflow-and-state-categories.md).


::: moniker-end  

::: moniker range=">= tfs-2013  <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  

# [Previous navigation](#tab/previous-nav)

1.	From the backlog page, open the velocity chart.  

	![Choose the velocity chart in the upper right area of the page](_img/velocity/velocity-forecast-open-chart.png)  

	For charts to appear, your team must perform these activities: 
	- Select sprints for your team  
	- Assign backlog items to sprints   
	- Estimate backlog items by defining the Effort, Story Points, or Size.
 
2.	The chart tracks your estimated backlog work (sum of Effort, Story Points, or Size) that your team has completed (green) in the previous sprints, or that are still in progress (blue).  

	As this chart shows, velocity will fluctuate from sprint-to-sprint for a variety of reasons. However, you can quickly determine the average velocity by averaging the values shown in green for each sprint. You can then plug the average into the Forecast tool.

	![Web portal, Velocity chart showing seven sprints of in progress and completed work](_img/team-velocity-chart-web-7-iterations.png)  

	> [!NOTE]  
	> Work items based on the [Scrum process](../../boards/work-items/guidance/scrum-process.md) get counted in the chart once their State is set to Committed, whereas items based on the [Agile](../../boards/work-items/guidance/agile-process.md) and [CMMI](../../boards/work-items/guidance/cmmi-process.md) processes get counted once their State is set to Active. This behavior is set through the [workflow states to category state mappings](../../boards/work-items/workflow-and-state-categories.md).

---
	
## Required and recommended activities   

For your team to gain the greatest utility from the velocity chart, follow these required and recommended tasks.  

**Required:** 
*	[Define sprints for the project](../../organizations/settings/set-iteration-paths-sprints.md) - Sprints should be of the same duration. 
*	[Select sprints for each team](../../organizations/settings/set-team-defaults.md#activate)
*	[Define and estimate backlog items](../../boards/backlogs/create-your-backlog.md#estimates). If you work from your team's backlog, the items you create will automatically be assigned to the current sprint (Iteration) and to your team's default Area Path.  
*	Update the status of backlog items once work starts and when completed. Only backlog items whose State maps to a metastate of In Progress or Done will show up on the velocity chart or velocity widget. 

**Recommended:**  
*	Define and size backlog items to [minimize variability](velocity-guidance.md).  
*	Determine how your team wants to [treat bugs](../../organizations/settings/show-bugs-on-backlog.md). If your team chooses to treat bugs like requirements, bugs will show up on the backlog and be counted within the Velocity chart and forecasting. 
*	[Set your team's area path](../../organizations/settings/set-area-paths.md). The forecast tool will forecast those items based on your team's default settings. These settings can specify to include items in area paths under the team's default or exclude them.     
*	Don't  create a hierarchy of backlog items and bugs. The Kanban board, sprint backlog, and task board only show the last node in a hierarchy, called the leaf node. For example, if you link items within a hierarchy that is four levels deep, only the items at the fourth level appear on the Kanban board, sprint backlog, and task board. <br/>Instead of nesting requirements, bugs, and tasks, we recommend that you maintain a flat list-only creating parent-child links one level deep between items. Use [Features to group requirements or user stories](../../boards/backlogs/organize-backlog.md). You can quickly map stories to features, which creates parent-child links in the background.  
*	At the end of the sprint, update the status of those backlog items that the team has fully completed. Incomplete items should be moved back to the product backlog and considered in a future sprint planning meeting.   

## Add other teams
If you work with several teams, and each team wants to work with their own backlog view, velocity chart, and forecast tool, you can [add teams](../../organizations/settings/add-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items to only include those whose assigned area paths and iteration paths meet those [set for the team](../../organizations/settings/set-team-defaults.md). 


## Try this next

> [!div class="nextstepaction"]
> [Velocity guidance](velocity-guidance.md)

 
