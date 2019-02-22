---
ms.topic: include
---


## Required and recommended activities   
For your team to gain the greatest utility from the velocity chart, follow these required and recommended tasks.  

**Required:** 
- [Define iteration paths (aka sprints) and configure team iterations](/azure/devops/organizations/settings/set-iteration-paths-sprints) Sprints should be of the same duration. 
- [Define and estimate backlog items](/azure/devops/boards/backlogs/create-your-backlog#estimates). If you work from your team's backlog, the items you create will automatically be assigned to the current sprint (Iteration) and to your team's default Area Path.  
- Update the status of backlog items once work starts and when completed. Only backlog items whose State maps to a metastate of In Progress or Done will show up on the velocity chart or velocity widget. 

**Recommended:**  
*	Define and size backlog items to [minimize variability](/azure/devops/report/dashboards/velocity-guidance.md).  
*	Determine how your team wants to [treat bugs](/azure/devops/organizations/settings/show-bugs-on-backlog). If your team chooses to treat bugs like requirements, bugs will show up on the backlog and be counted within the Velocity chart and forecasting. 
*	[Set your team's area path](/azure/devops/organizations/settings/set-area-paths). The forecast tool will forecast those items based on your team's default settings. These settings can specify to include items in area paths under the team's default or exclude them.     
*	Don't  create a hierarchy of backlog items and bugs. The Kanban board, sprint backlog, and task board only show the last node in a hierarchy, called the leaf node. For example, if you link items within a hierarchy that is four levels deep, only the items at the fourth level appear on the Kanban board, sprint backlog, and task board. <br/>Instead of nesting requirements, bugs, and tasks, we recommend that you maintain a flat list-only creating parent-child links one level deep between items. Use [Features to group requirements or user stories](/azure/devops/boards/backlogs/organize-backlog). You can quickly map stories to features, which creates parent-child links in the background.  
*	At the end of the sprint, update the status of those backlog items that the team has fully completed. Incomplete items should be moved back to the product backlog and considered in a future sprint planning meeting.   