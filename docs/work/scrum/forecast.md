---
title: Forecasting  
description: Use the forecast tool to determine how much work your team can deliver across several sprints    
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: C46ED4AA-4B8F-4D5D-BC51-52F6D67BF8C6
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 01/05/2018
---

# Forecast your product backlog

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Teams use the forecast tool to help in their sprint planning efforts. By plugging in a value for the [team velocity](../../report/dashboards/velocity-chart-data-store.md), the forecast tool will show which items in the backlog can be completed within future sprints.  Both tools are team-specific tools that rely on the team's ability to estimate backlog items. Once your team has completed a sprint or two, they can use the team velocity  to forecast how much of the backlog they can finish within the upcoming sprints. 

Use this topic to learn: 

> [!div class="checklist"] 
> * How to forecast upcoming sprints     
> * Required and recommended team activities to support forecasting       

[!INCLUDE [temp](../_shared/image-differences.md)]
 

<a id="forecasting">   </a> 

## Forecast upcoming sprints

You can use the forecast tool to get an idea of how many items you can complete within a sprint. By plugging in a velocity, you can see which items are within scope for the set of sprints the team has activated.   

<img src="_img/forecast-tool-settings.png" alt="Web portal, Backlog, Forecast On" style="border: 1px solid #C3C3C3;" />

To forecast your product backlog, perform the following actions: 

*	Open your product backlog. You can only forecast the product backlog of Stories, Backlog items, or Requirements.
*	Set **Forecast** to **On** and enter your team's predicted velocity.If the Forecasting bar doesn't appear, set Parents to Hide. 
*	Set **In progress** items to **Hide** to hide those items that that won't be counted in the forecast. The forecast tool ignores Scrum items set to Committed or Done and Agile and CMMI items set to Active, Resolved, or Completed. 
*	Select enough [future sprints for your team](../scale/set-team-defaults.md#activate) to forecast your entire product backlog.
*	Check the results manually to understand discrepancies in what you expect and what the forecast tool displays.  
*	Check the amount of effort (Effort, Story Points, or Size) forecasted per sprint. 
*	Question forecast results where the effort of an item is near to, or greater than, team velocity.  

The tool draws lines for each future sprint selected by the team. The Forecast lines show how much work your team should be able to complete in future sprints. Typically, items above the first line are already in progress for the current sprint. Items that fall between the first and second forecast lines indicate what can be completed in the named sprint.   



### VSTS and TFS 2018 and later versions

In this example, a Velocity of 20 is used. The forecast tool limits the number of items shown between the forecast lines to those that can be completed within the sprint or using unused velocity points from the previous sprint. 

The forecast tool shows between two and four items can be worked on during Iterations 2 thorugh 6 based on the amount of Story Points assigned to each user story or bug. The forecast logic carries over velocity points from one sprint to the next. 

- **Iteration 2**: 13 Story Points, items 1 and 2 can be completed; 7 velocity points are carried over to the next sprint
- **Iteration 3**: 24 Story Points, items 3 through 5 can be completed; 3 (=20+7-24) velocity points are carried over to the next sprint   
- **Iteration 4**: 21 Story points, items 6 through 8 can be completed; 2 (=20+3-21) velocity points are carried over to the next sprint   
- **Iteration 5**: 16 Story points, items 9 through  12 can be completed; 6 (=20+2-16) velocity points are carried over to the next sprint   
- **Iteration 6**: 23 Story points, items 13 through 16 can be completed; 3 (=20+6-23) velocity points are carried over to the next sprint   

<img src="_img/forecast-s125.png" alt="Web portal, Backlog, Forecast On" style="border: 1px solid #C3C3C3;" />
 
### TFS 2017.2 and TFS 2017.3 

>[!NOTE]  
>The forecast logic changed for TFS 2017.2. Previously, the forecast tool limited the number of items shown between the forecast lines to those that could be completed within the sprint or using unused velocity points from the previous sprint. 
>
>Now, all items listed between the lines can be started in the sprint labeled by the first line, but may not be completed within the sprint. The amount of effort (Effort, Story Points, Size) that can't be completed in one sprint are carried over to the next sprint. For example, for a velocity of 15, if Item 1 has 35 Effort points, 20 Effort points are carried over to next sprint, then again 5 Effort points are carried over to the sprint after that.

In this example, a Velocity of 15 is used. The forecast tool shows between two and four items can be started or completed during the first six sprints based on the amount of Effort assigned to each work item. The forecast logic carries over effort points from one sprint to the next. 

- **Sprint 1**: 19 Effort points, items 1 and 2 can be completed and item 3 can be started; 4 Effort points are carried over into the next sprint.
- **Sprint 2**: 13 Effort points, item 3 from the previous sprint can be completed, item 4 can be completed, and item 5 can be started; 2 Effort points are carried over into the next sprint.
- **Sprint 3**: 15 Effort points, item 5 from the previous sprint and items 6 through 8 can be completed, and item 9 can be started; 2 Effort points are carried over into the next sprint. 
- **Sprint 4**: 13 Effort points, item 9 from the previous sprint and items 10 and 11 can be completed; no Effort points are carried over into the next sprint.
- **Sprint 5**: 19 Effort points, items 12 and 13 can be completed and item 14 can be started; 4 Effort points are carried over into the next sprint.

<img src="_img/vel-forecast-forecast-ts.png" alt="Web portal, Backlog, Forecast On" style="border: 1px solid #C3C3C3;" />

### TFS 2013 - TFS 2017.1 

The forecast tool shows only those work items that can be completed within a sprint between the forecast lines. Unused velocity points from one sprint are considered in the forecast of the following sprint. The forecasted sprint is listed along with the last item that can be completed during that sprint. 

In this example, a velocity of 20 is used. The first two items with a total of 13 Effort points can be completed in Sprint 2.

In summary:  
- **Sprint 2**: 13 Effort points, items 1 and 2 can be completed; 7 velocity points are carried over to the next sprint  
- **Sprint 3**: 24 Effort points, items 3 through 5 can be completed; 3 (=20+7-24) velocity points are carried over to the next sprint  
- **Sprint 4**: 21 Effort points, items 6 through 8 can be completed; 2 (=20+3-21) velocity points are carried over to the next sprint     
- **Sprint 5**: 16 Effort points, items 9 through  12 can be completed; 6 (=20+2-16) velocity points are carried over to the next sprint    
- **Sprint 6**: 19 Effort points, items 13 through 15 can be completed; 3 (=20+6-23) velocity points are carried over to the next sprint     

<img src="_img/ALM_VF_Forecast_1.png" alt="Web portal, Enter a velocity to show forecast lines" style="border: 1px solid #C3C3C3;" />

## Determine the velocity needed to complete all items in the backlog
Another way to use the forecast tool is to enter different velocity values until all the backlog items are complete within a given set of sprints. This provides an estimate of what velocity is required to complete your backlog of items. 

You can then assess the delta between the current team's velocity and the required velocity to determine what additional resources are required to meet production demands within a required time. 

## Required and recommended activities   

Here's what needs to happen for you and your team to gain the greatest utility from the velocity chart and forecast tool.  

**Required:** 
*	[Define sprints for the team project](../customize/set-iteration-paths-sprints.md) - Sprints should be of the same duration. 
*	[Select sprints for each team](../scale/set-team-defaults.md#activate)
*	[Define and estimate backlog items](../backlogs/create-your-backlog.md#estimates). If you work from your team's backlog, the items you create will automatically be assigned to the current sprint (Iteration) and to your team's default Area Path.  
*	Update the status of backlog items once work starts and when completed. Only backlog items whose State maps to a metastate of In Progress or Done show up on the velocity chart. 

**Recommended:**  
*	Define and size backlog items to [minimize variability](../../report/dashboards/velocity-guidance.md#minimize-variability).  
*	Determine how your team wants to [treat bugs](../customize/show-bugs-on-backlog.md). If your team chooses to treat bugs like requirements, bugs will show up on the backlog and be counted within the Velocity chart and forecasting. 
*	[Set your team's area path](../scale/set-team-defaults.md). The forecast tool will forecast those items based on your team's default settings. These settings can specify to include items in area paths under the team's default or exclude them.     
*	Don't  create a hierarchy of backlog items and bugs. The Kanban board, sprint backlog, and task board only show the last node in a hierarchy, called the leaf node. For example, if you link items within a hierarchy that is four levels deep, only the items at the fourth level appear on the Kanban board, sprint backlog, and task board. <br/>Instead of nesting requirements, bugs, and tasks, we recommend that you maintain a flat list─only creating parent-child links one level deep between items. Use [Features to group requirements or user stories](../backlogs/organize-backlog.md). You can quickly map stories to features, which creates parent-child links in the background.  
*	At the end of the sprint, update the status of those backlog items that the team has fully completed. Incomplete items should be moved back to the product backlog and considered in a future sprint planning meeting.   
 
## Try this next
Now that you understand how to work with forecasting, you can use this tool to support your team's [sprint planning activities](sprint-planning.md).

## Related notes

*	[Team velocity](../../report/dashboards/velocity-chart-data-store.md)  
*	[Define sprints for the team project](../customize/set-iteration-paths-sprints.md)  
*	[Select sprints for a team](../scale/set-team-defaults.md)  
*	Use the [task board](task-board.md) to track work during your sprint
*	Monitor the [sprint burndown chart](task-board.md) to determine if your team is on track to complete the sprint plan

### Add other teams
If you work with several teams, and each team wants to work with their own backlog, velocity chart, and forecast tool, you can [create additional teams](../scale/multiple-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items to only include those whose assigned area paths and iteration paths meet those [set for the team](../scale/set-team-defaults.md). 


 