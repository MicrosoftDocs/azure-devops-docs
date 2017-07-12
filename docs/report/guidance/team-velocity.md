---
title: Velocity | Team Services & TFS
description: Track team velocity across several sprints using the velocity chart or widget       
ms.technology: vs-devops-reporting  
ms.prod: vs-devops-alm
ms.assetid: 31CBF001-CFF2-49CF-97A1-FDFFEFDDF3AB
ms.manager: douge
ms.author: kaelli
ms.date: 07/12/2017
---


<!--- provides support for FWLINK https://go.microsoft.com/fwlink/?linkid=841878; Update when topic goes live --> 

# Velocity 

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013</b> 

Teams track their velocity to help them determine how much work they can perform sprint-over-sprint. Velocity provides an indication of how much work a team can complete during a sprint based either on a count of work items completed or the sum of estimates made to Effort (PBIs), Story Points (user stories), or Size (requirements). Velocity calculations rely on the team's ability to estimate backlog items. 

Once your team has completed a few sprints, they can use their velocity to [forecast](../../work/scrum/forecast.md) how much of the backlog they can finish within upcoming sprints. 

Use this topic to learn: 

<!--- [!div class="checklist"] -->

![checkmark](../../work/_img/icons/checkmark.png) Differences between the Velocity chart and Velocity widget   
![checkmark](../../work/_img/icons/checkmark.png) How to work with the Velocity chart (work tracking datastore)   
![checkmark](../../work/_img/icons/checkmark.png) Install and configure the Velocity widget (Analytics service)       
![checkmark](../../work/_img/icons/checkmark.png) Required and recommended team activities to support velocity tracking      

There are two velocity charts, the one viewed from the backlog of a team and the one you access by adding the Velocity widget of a dashboard. The Velocity widget enables you to view more sprints and additional information than that provided by the velocity chart.   

>[!NOTE]   
><b>Feature availability:</b> The Velocity widget is available only for Team Services at this time. 

<table>
<tr valign="top">
<td>
**Velocity chart**<br/>
![3 sprint velocity chart](_img/ALM_DS_Velocity_Chrt_S.png) 
</td>
<td>
**Velocity widget**<br/>
![6 sprint velocity widget](_img/team-velocity-six-iterations.png) 
</td>
</tr>
</table>



<a id="velocity-chart">   </a>
## Work with the team velocity chart 
Velocity provides a useful metric for gaining insight into how much work your team can complete during a sprint cycle. Each team is associated with one and only one velocity chart.  

Velocity will vary depending on team capacity, sprint over sprint. However, over time, the velocity should indicate a reliable average that can be used to forecast the full backlog.  

[!INCLUDE [temp](../_shared/image-differences.md)]

1.	From the backlog page, open the velocity chart.  

	![Click the the velocity chart in the upper right area of the page](_img/velocity-forecast-open-chart.png)  

	For charts to appear, your team must perform these activities: 
	- Select sprints for your team  
	- Assign backlog items to sprints   
	- Estimate backlog items by defining the Effort, Story Points, or Size.
 
2.	The chart tracks your estimated backlog work (sum of Effort, Story Points, or Size) that your team has completed (green) in the previous sprints, or that are still in progress (blue).  

	As this chart shows, velocity will fluctuate from sprint-to-sprint for a variety of reasons. However, you can quickly determine the average velocity by averaging the values shown in green for each sprint. You can then plug the average into the Forecast tool.

	<img src="_img/team-velocity-chart-web-7-iterations.png" alt="Web portal, Velocity chart showing seven sprints of in progress and completed work" style="border: 1px solid #CCCCCC;" />

	>[!NOTE]  
	>Work items based on the [Scrum process](../../work/guidance/scrum-process.md) get counted in the chart once their State is set to Committed, whereas items based on the [Agile](../../work/guidance/agile-process.md) and [CMMI](../../work/guidance/cmmi-process.md) processes get counted once their State is set to Active. This behavior is set through the [workflow states to category state mappings](../../work/concepts/workflow-and-state-categories.md). 

<a id="configure-widget"></a>
## Configure the Veocity widget    

You configure your velocity widget for a team. To learn more about teams, see [Add teams and team members](../../work/scale/multiple-teams.md).  

### Pre-requisites
In order to add a Velocity widget to a dashboard, you must have the following in place:  
- Installed the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics). You must be an account owner or a member of the [Project Collection Administrator group](../../setup-admin/add-administrator-tfs.md) to add extensions.  
- [Added the widget to a dashboard](../add-widget-to-dashboard.md). You must be a [team administrator](../../work/scale/manage-team-assets.md#add-team-admin) or have [permissions to add and edit dashboards](../dashboards.md#set-permissions). 

> [!NOTE]   
> While the Velocity widget uses the Analytics data store, access to the data store for other report purposes is not supported at this time. 

### Configuration dialog 
1. If you haven't yet added the [Analyics Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-analytics), do that now. 

2. If you haven't yet [added the Velocity widget to your dashboard](../add-widget-to-dashboard.md), do that now.  

3. Click the ![Actions icon](../_img/icons/actions-icon.png) actions icon and choose the Configure option to open the configuration dialog. 
	
	Modify the title, select the team, and then choose either the backlog level or work item type to track. Select whether you want to track a count of work items or a sum of a numeric field. The most common summed field is that of Effort, Story Points, or Size.     

	<img src="_img/team-velocity-config-dialog.png" alt="Configure dialog, Velocity widget" style="border: 1px solid #CCCCCC;" />    

4. Specify the number of sprints you want to view. The default is 6 and the maximum is 20.    

5. (Optional) Select the check boxes to show additional information for work completed later than planned for each sprint. 

6. Click Save when done. The following image shows an example Velocity chart showing 6 sprints of data. 
   
	<img src="_img/team-velocity-six-iterations.png" alt="Example Velocity widget, 6 iterations" style="border: 1px solid #CCCCCC;" />  


## Required and recommended activities   

For your team to gain the greatest utility from the velocity chart or velocity widget, follow these required and recommended tasks.  

**Required:** 
*	[Define sprints for the team project](../../work/customize/modify-areas-iterations.md) - Sprints should be of the same duration. 
*	[Select sprints for each team](../../work/scale/set-team-defaults.md#activate)
*	[Define and estimate backlog items](../../work/backlogs/create-your-backlog.md#estimates). If you work from your team's backlog, the items you create will automatically be assigned to the current sprint (Iteration) and to your team's default Area Path.  
*	Update the status of backlog items once work starts and when completed. Only backlog items whose State maps to a metastate of In Progress or Done will show up on the velocity chart or velocity widget. 

**Recommended:**  
*	Define and size backlog items to [minimize variability](#minimize-variability).  
*	Determine how your team wants to [treat bugs](../../work/customize/show-bugs-on-backlog.md). If your team chooses to treat bugs like requirements, bugs will show up on the backlog and be counted within the Velocity chart and forecasting. 
*	[Set your team's area path](../../work/customize/modify-areas-iterations.md). The forecast tool will forecast those items based on your team's default settings. These settings can specify to include items in area paths under the team's default or exclude them.     
*	Don't  create a hierarchy of backlog items and bugs. The Kanban board, sprint backlog, and task board only show the last node in a hierarchy, called the leaf node. For example, if you link items within a hierarchy that is four levels deep, only the items at the fourth level appear on the Kanban board, sprint backlog, and task board. <br/>Instead of nesting requirements, bugs, and tasks, we recommend that you maintain a flat list─only creating parent-child links one level deep between items. Use [Features to group requirements or user stories](../../work/backlogs/organize-backlog.md). You can quickly map stories to features, which creates parent-child links in the background.  
*	At the end of the sprint, update the status of those backlog items that the team has fully completed. Incomplete items should be moved back to the product backlog and considered in a future sprint planning meeting.   

## Try this next
Now that you understand how to work with velocity, you can use it to [forecast your sprints](../../work/scrum/forecast.md) and support your team's [sprint planning activities](../../work/scrum/sprint-planning.md).

## Related notes

*	[Define sprints for the team project](../../work/customize/modify-areas-iterations.md)  
*	[Select sprints for a team](../../work/scale/set-team-defaults.md)  
*	Use the [task board](../../work/scrum/task-board.md) to track work during your sprint
*	Monitor the [sprint burndown chart](../../work/scrum/sprint-burndown.md) to determine if your team is on track to complete the sprint plan

### Industry resources
- [How Should We Use Velocity?](https://www.scrumalliance.org/community/articles/2013/2013-april/how-should-we-use-velocity)  
- [Velocity Is Not the Goal](https://www.scrumalliance.org/community/articles/2017/march/sprint-velocity-sense-and-nonsense)   
- [How to Calculate and Use Velocity to Help Your Team and Your Projects](https://www.scrumalliance.org/community/articles/2014/february/velocity)

### Add other teams
If you work with several teams, and each team wants to work with their own backlog view, velocity chart, and forecast tool, you can [add teams](../../work/scale/multiple-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items to only include those whose assigned area paths and iteration paths meet those [set for the team](../../work/scale/set-team-defaults.md). 


<a id="minimize-variability" >    </a>

### Minimize variability in your estimates 
Variability increases uncertainty. By minimizing the variability of your estimates, you increase the likelihood of more reliable velocity metrics and forecast results.  

Estimates, by their nature, don't reflect reality. They represent a best guess by the team as to the effort required to complete an item, relative to the effort of other items on the backlog. 


### Velocity is not a KPI 

While the Velocity chart provides a measure of the team's ability to deliver work over time, you shouldn't confuse it as a key performance indicator of the team. 

Velocity simply provides an aid to determine team capacity. Nothing more, nothing less. Asking a team to increase their velocity, basically asks them to accomplish more with the same resources. This request will mostly likely lead to "Story points inflation" and lead to less desirable outcomes. 


### Other types of velocity charts

While the velocity chart provides a measure of Effort, Story Points, or Size that gets completed sprint-over-sprint, there may be other types of velocity that you may want to track. You can create similar charts by creating a work item query and [chart the count of or sum of items](../charts.md).  

For example, you can create a chart of the number of Product backlog items and bugs completed for the last several sprints. For examples on creating this type of chart, see [Query by numeric fields](../../work/track/query-numeric.md).

![Velocity count of backlog items and bugs](_img/ALM_VF_VelocityCountItems.png) 