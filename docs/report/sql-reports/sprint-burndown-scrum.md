---
title: Sprint Burndown (Scrum)
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Tracks how much work remains in a sprint backlog.
ms.assetid: f7422ba3-c309-4092-87cf-17a83c77ac01
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---


# Sprint Burndown (Scrum)
[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

By reviewing a sprint burndown report, you can track how much work remains in a sprint backlog, understand how quickly your team has completed tasks, and predict when your team will achieve the goal or goals of the sprint.  
  
 This report is very similar to the report available from your team backlog page. The sprint burndown report is built from data in the Analysis Services cube, and the team burndown chart references the WIT data store in real time.  
  
 **Requirements**  
  
-   The on-premises Team Foundation Server (TFS) deployment and the team project collection that contains your team project are configured with SQL Server Reporting Services. This report is not available if ![Report](_img/icon_reportte.png "Icon_reportTE") **Reports** does not appear when you open Team Explorer and expand your team project node.  
  
     If you need to add reporting services to your deployment or reports for a team project, see [Add reports to a team project](../admin/add-reports-to-a-team-project.md).  
  
-   To view the report, you must be assigned or belong to a group that has been assigned the **Browser** role in SQL Server Reporting Services. For more information, see [Grant permissions to view or create reports in TFS](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 A sprint burndown report shows how much work remained at the end of specified intervals during a sprint. The source of the raw data is the sprint backlog. The horizontal axis shows days in a sprint, and the vertical axis measures the amount of work that remains to complete the tasks in the sprint. The work that remains is shown in hours.  
  
 A sprint burndown graph displays the following pieces of data:  
  
-   The Ideal Trend line indicates an ideal situation in which the team burns down all of the effort that remains at a constant rate by the end of the sprint.  
  
-   The In Progress series shows how many hours remain for tasks that are marked as **In Progress** in a sprint.  
  
-   The To Do series shows how many hours remain for tasks that are marked as **To Do** in a sprint.  
  
 Both the In Progress and the To Do series are drawn based on the actual progress of your team as it completes tasks.  
  
 The following illustration shows an example of a sprint burndown graph.  
  
 ![Sprint burndown chart](_img/scrum_sprintburndown.png "Scrum_SprintBurndown")  
  
 You can filter the report by selecting the **Iteration** or **Area**.  
  
### Required activities to support the sprint burndown report  
 For the burndown report to be useful and accurate, your team must perform the following activities for tracking tasks:  
  
-   [Define sprints](../../boards/sprints/define-sprints.md) for your team.  
  
-   [Define tasks for each product backlog item](http://msdn.microsoft.com/f13e32ae-fe77-421a-b524-43b6bcd1a0f3) you're working on within the sprint. If you work from your team's backlog and task board, the items you create will automatically be assigned to the current sprint (**Iteration**) and to your team's default **Area** path.  
  
-   Specify and update the **Remaining Work** field for each task or subtask as it is worked on.  
  
    > [!IMPORTANT]
    >  If you divide a task into subtasks, specify hours only for the subtasks. These hours are rolled up as summary values for the parent task. For more information, see [Address inaccuracies published for summary values](address-inaccuracies-published-for-summary-values.md).  
  
-   Update the **State** of each task as it progresses from **To Do** to **Done**.  
  
##  <a name="Interpreting"></a> Interpreting the report  
 You can review the report to determine the progress that your team has made in a release and answer the following questions:  
  
-   How much work remains in the sprint?  
  
-   Is your team on track to finish all work for the sprint?  
  
-   When will your team finish all work for the sprint?  
  
-   How much work for the sprint is in progress?  
  
## Related notes
 [Scrum process](../../boards/work-items/guidance/scrum-process.md)   
[Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) 