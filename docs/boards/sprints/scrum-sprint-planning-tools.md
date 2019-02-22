---
title: Scrum and sprint planning tools
titleSuffix: Azure Boards 
description: Understand the tools available to you to support Scrum and working in sprints in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.custom: boards-sprints
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---


# Scrum and sprint planning tools
 
[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)] 

<!--- ADD WIDGET INFO AS WELL --> 

<a id="sprint-tools">   </a>

Once you've [defined iteration paths (aka sprints) and configured team iterations](../../organizations/settings/set-iteration-paths-sprints.md), you can start using the following tools to plan your sprint.  


## Track team capacity

At the start of each sprint, you'll want to plan the work that your team can commit to. The three Agile tools that support this work include the sprint backlog, capacity planning, and capacity bars. The sprint backlog contains a filtered subset of backlog items whose iteration path corresponds to the current sprint. 

<table valign="top" > 
<tr valign="top" > 
<td width="35%">
<p>
<b>Team capacity planning tool</b>
</p>
<p>By setting team capacity, the team knows exactly the total number of work hours or days the team has for each sprint. With this tool, you set individual team member capacity as well as days off. And, conveniently, you can set holidays or shared days off taken by the entire team. </p>
<p>Setting capacity for each team member working during a sprint causes the capacity bar for that individual to appear. </p>
<p>You [set recurring days off](../../organizations/settings/set-working-days.md), such as weekends, through team settings.</p>
</td>
<td>
![Team capacity planning tool](_img/team-capacity-planning-tool.png) 
</td>
</tr>
<tr valign="top" > 
<td>
<p>
<b>Individual and team capacity bars</b>
</p>
<p>With capacity bars, you can quickly see who is over, at, or under capacity. Capacity bars update with each of these activities: </p>
<ul>
<li>
<p>Tasks are assigned with non-zero remaining work</p>
</li>
<li>
<p>Change in remaining work</p>
</li>
<li>
<p>Date change within the sprint cycle. Individual and team capacity always reflects their capacity from the current day till the end of the sprint.  </p>
</li>
</ul>
<p>Here's how to interpret the capacity colors:</p>
![These colors help you distinguish capacity](_img/capacity-planning-tool-color-chart.png)
</td>
<td width="455px">
![Capacity bars](_img/ALM_DS_CapacityBars_S.png)
</td>
</tr>
</table>


##  Update tasks, monitor burndown 
During a sprint, your team can use the taskboard and sprint burndown chart to track their progress. Your sprint burndown chart provides you with an at-a-glance visual to determine if your team is on track to meet their sprint plan.  
 
<table valign="top">
<tr valign="top" > 
<td width="35%">
<p>
<b>Taskboard</b>
</p>
<p>Your [Taskboard](task-board.md) provides an interactive progress board for work required to complete the sprint backlog. During your sprint you'll want to update the status of tasks and the remaining work for each task. </p>
<p>Updating tasks daily or several times a week yields a smoother burndown chart. </p>
</td>
<td width="520px">
![taskboard](_img/ALM_DS_Task_board_S.png)
</td>
</tr>
<tr valign="top" > 
<td>
<p>
<b>Sprint burndown chart</b>
</p>
<p>You use the [sprint burndown chart](sprint-burndown.md) to mitigate risk and check for scope creep throughout your sprint cycle. The burndown chart reflects the progress made by your team in completing all the work they estimated during their sprint planning meeting. </p>
<p>The ideal trend line always indicates a smooth and steady burndown. The blue area, however, represents what's actually going on. It shows the buildup of work as team members add tasks and the reduction of work as team members complete those tasks.</p>
</td>
<td>
![Sprint burndown chart](_img/ALM_DS_SprntBD_Chrt_S.png)
</td>
</tr>
</table>


<a id="velocity-forecast">  </a>
##  Velocity and forecast 
<p>While you use sprint planning and tracking tools for each sprint, you use the velocity and forecast tools to estimate work that can be completed in future sprints. </p>
<p>Velocity provides a useful metric for gaining insight into how much work your team can complete during a sprint cycle. And, the forecast tool provides a means for determining how much work your team can complete within a sprint based on a specified team velocity. </p>
<p>After your team has worked several sprints, they can use the [velocity chart](../../report/dashboards/velocity-chart-data-store.md) and [forecast](forecast.md) tool to estimate work that can be accomplished in future sprints.  </p>

<table valign="top" > 
<tr valign="top" > 
<td>
<p>
<b>**Velocity chart**</b>
</p>
<p>Each team is associated with one and only one velocity chart. The green bar within the chart indicates the total estimated effort (story points or size) of backlog items (user stories or requirements) completed within the sprint. (Blue corresponds to the estimated effort of items not yet completed.)  </p>
<p>Velocity will vary depending on team capacity, sprint over sprint. However, over time, the velocity should indicate a reliable average that can be used to forecast the full backlog. </p>
<p>By minimizing the variability of backlog item size&mdash;effort or story points&mdash;you gain more reliable velocity metrics.</p>
</td>
<td width="500px">
![Velocity chart](_img/velocity-chart.png)
</td>
</tr>
<tr valign="top" > 
<td>
<p>
**Forecast tool**
</p>
<p>You can use the forecast tool to get an idea of how many and which items you can complete within a sprint. </p>
<p>*By plugging in a velocity, you can see which items are within scope for the set of sprints the team has selected. As shown here, a velocity of 15 indicates that it will take three sprints to complete the work shown. *</p>
</td>
<td>
![Forecast tool](_img/forecast-tool.png)
</td>
</tr>
</table>  


## Related articles 
If you work with several teams, and each team wants their own backlog view, you can [create additional teams](../../organizations/settings/add-teams.md). Each team then gets access to their own set of Agile tools. Each Agile tool filters work items to only include those assigned values under the team's default area path and iteration path.  

- [About Sprints, Scrum and project management](scrum-overview.md)
- [What is Scrum?](/azure/devops/learn/agile/what-is-scrum)
- [Add teams](../../organizations/settings/add-teams.md)  
- [Define iterations for a project](../../organizations/settings/set-iteration-paths-sprints.md) 
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  

