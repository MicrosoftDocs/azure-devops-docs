---
title: Sprint burndown | VSTS & TFS  
description: Review Scrum progress during and at the end of a sprint when working in Visual Studio Team Services (VSTS) and Team Foundation Server 
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 706331A0-3758-4575-9B51-AC828F57161B
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 08/02/2017
---


# Sprint burndown 
 
[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Throughout your sprint, you can monitor the sprint burndown chart to determine if your team is on track to complete its [sprint plan](sprint-planning.md). 

Use this topic to learn

> [!div class="checklist"]   
> * How to view current and past sprint burndowns 
> * Required and recommended activities to support sprint burndown    

For usage guidance, see [Burndown guidance](../../report/dashboards/burndown-guidance.md).


>[!NOTE]  
>The system automatically builds a sprint burndown chart based on the tasks and Remaining Work estimates you define and update throughout the sprint cycle. For details, see [Sprint planning](sprint-planning.md) and [Task board](task-board.md).  To open the sprint burndown chart, jump to the section [Open sprint burndown chart](#open-chart).   

<table>
<tr valign="top">
<td width="35%">

<p>A healthy sprint burndown chart will look something like this. The *Ideal Trend* line connects the two points: </p>
-	**(1)** Team's total capacity at the start of the sprint     
-	**(2)** 0 Remaining Work at the end of the sprint.  

<p>The slope represents the rate at which the team needs to burn down work to finish the sprint on time. </p>

<p>The actual graph, the blue area, represents the total amount of planned sprint work and how it changes throughout the course of the sprint. The blue area corresponds to the sum of all Remaining Work set for all sprint tasks, and possibly bugs, that have the current sprint as their iteration path.  </p>
</td>
<td>
![Healthy sprint burndown chart](_img/ALM_SB_IntroHealthyChart.png)
</td>
</tr>
</table>
 
 

<a id="open-chart">  </a>
###Open sprint burndown chart 
Click the chart to display it in a larger view. 

![Open sprint burndown chart](_img/sprint-burndown-open-chart.png)

>[!NOTE]  
>You can't add the system-generated sprint burndown chart to a dashboard. However, you can add the [Sprint burndown widget](../../report/dashboards/widget-catalog.md#sprint-burndown-widget), which captures the same information for the current sprint, to a dashboard. 


In particular you can review your sprint burndown charts to show the team patterns in execution. The burndown charts maintain a record of the team's ability to plan and estimate.  

| Sprint 1   |  Sprint 2  | Sprint 3 | 
|------------|------------|----------| 
|![Sprint 1](_img/ALM_SB_Chart_S1_225.png) |![Sprint 2](_img/ALM_SB_Chart_S2_225.png)  |![Sprint 3](_img/ALM_SB_Chart_S3_225.png) |

Teams may find it useful to review this record periodically during their sprint retrospectives. It may spark useful discussions and lead to setting one or more sprint goals, such as: 
*	How does our projected velocity match up to our actual velocity? 
*	How can we more accurately determine how much we will be able to accomplish in a sprint? 
*	How can we complete work at a more regular pace throughout the sprint?


## Required and recommended activities   

In order to access the sprint burndown chart and use it to monitor your sprint progress, your team must perform the following actions.  

**Required:** 
*	[Schedule sprints for your team](define-sprints.md).  
*	[Define and estimate tasks](sprint-planning.md#define-tasks) for each product backlog item you're working on in the sprint. If you work from your team's backlog and task board, the items you create will automatically be assigned to the current sprint (Iteration) and to your team's default Area Path.  
*	[Update Remaining Work for each sprint task](task-board.md#update-tasks) as work progresses.  

**Recommended:**  
*	Define tasks that take a day or less to complete to lessen the impact of poor estimates.  
*	Don't divide tasks into subtasks. If you divide a task into subtasks, specify hours only for the subtasks. These hours are rolled up as summary values for the parent task.   
*	Update Remaining Work daily or several times within a week to support monitoring and achieve a smoother burndown chart.  
*	At the end of the sprint, update the task status of completed tasks and determine how to handle incomplete tasks.  

<a id="past-sprints">  </a>
##Current and past sprint burndown charts
As you complete each sprint, the system maintains a history of your activity. You can always review past sprints and sprint burndown charts by choosing the sprint listed under the Past section.  

<img src="_img/ALM_DS_PastSprints.png" alt="Past sprints provide historical record" style="border: 2px solid #C3C3C3;" />

##Try this next
In addition to the sprint burndown chart, teams can review the velocity at which they work sprint over sprint. The velocity chart tracks how many backlog items your team works on in a sprint.  

You can use your team [velocity](../../report/dashboards/velocity-chart-data-store.md) as input into the [forecast](forecast.md) tool to help plan your sprints.   


##Related notes

You can learn more about defining, planning, and executing your sprints from these topics:  
*	[Schedule sprints](define-sprints.md)  
*	[Sprint planning](sprint-planning.md)  
*	[Task board](task-board.md)  


And, from these industry resources:  
*	[Understanding the Scrum Burndown Chart](http://www.methodsandtools.com/archive/scrumburndown.php)  
*	[Task sizing in Agile software development](http://www.solutionsiq.com/task-sizing-in-agile-software-development/)  

<!---
[//]: TBD - when have more time and when dashboards become more evident
[//]: # ###Other types of burndown charts
[//]: #  Release burndown 
-->

For on-premises TFS deployments, you can [specify the format that appears&mdash;**h** for hours or **d** for days&mdash;for the remaining work field](../customize/reference/process-configuration-xml-element.md#fields).  

<a id="empty-chart">  </a>
### Empty sprint burndown chart 
If your sprint burndown chart appears empty, check the following:
- Have you assigned tasks to the sprint associated with the chart?
- Have you assigned remaining work to the tasks assigned to the sprint? 
- Are the parent work items of the tasks assigned to the same sprint? If not, the tasks may appear in another sprint associated with the parent item. 


 