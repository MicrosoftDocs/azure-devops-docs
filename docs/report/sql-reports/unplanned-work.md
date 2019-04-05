---
title: Unplanned Work 
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Use the Unplanned Work report to determine how much work was added to the iteration that was not planned at the start of the iteration.
ms.assetid: 4c174c3c-2e3d-4f09-913d-bbc17b6382a8
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---



# Unplanned Work
[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

Toward the end of an iteration, you can use the Unplanned Work report to determine how much work was added to the iteration that was not planned at the start of the iteration. You can view the unplanned work as measured by work items added, such as tasks, test cases, user stories, and bugs.  
  
 Having unplanned work may be acceptable, especially if the team has scheduled a sufficient buffer for handling the load of unplanned work (for example, bugs). On the other hand, the unplanned work may represent a real problem if the team does not have the capacity to meet it and is forced to cut back on the planned work.  
  
 For information about how to access, refresh, or manage reports, see [Reporting Services Reports](reporting-services-reports.md).  
  
> [!NOTE]
>  This report requires that the team project collection that contains your team project was provisioned with SQL Server Reporting Services. This report is not available if ![Report](_img/icon_reportte.png "Icon_reportTE") **Reports** does not appear when you open Team Explorer and expand your team project node.  
  
**You can use this report to answer the following questions**:<br /><br /> -   How much work was added after the iteration started?<br />-   Is too much work being added during the iteration?
  
 **Required Permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Browser** role in Reporting Services. For more information, see [Add users to team projects](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the Report  
 The Unplanned Work report is useful when the team plans an iteration by identifying all work items that they intend to resolve or close during the course of the iteration. The work items that are assigned to the iteration by the plan completion date of the report are considered planned work. All work items that are added to the iteration after that date are identified as unplanned work.  
  
> [!IMPORTANT]
>  The plan completion date refers to the date when your team finishes planning for the iteration.  
  
 The following illustration shows an example of the Unplanned Work report. This example is fairly healthy because only 10 items were added after the start of the iteration, representing a 16% increase over the work that was planned  
  
 ![Unplanned Work report](_img/procg_reportunplanned.png "ProcG_ReportUnplanned")  
  
 The data about work item count is derived from the cube, and other parameter information comes from the data warehouse.  
  
 You can filter the report in the following ways:  
  
-   Change the start and end dates for the report.  
  
-   Filter the tasks, stories, test cases, and bugs that are counted in the report by specifying one or more iterations, area paths, and types of work items.  
  
 For more information, see [Filtering the Report and Changing the Display](#Changing) later in this article.  
  
### Required Activities for Tracking Unplanned Work  
 For the Unplanned Work report to be useful and accurate, the team must perform the following activities to track work items:  
  
-   At the start of an iteration, review the backlog of user stories, test cases, tasks, and bugs, and assign each to the iteration during which the team will work on them.  
  
-   As work is identified and added to the iteration, update the **Iteration** field of the work item to match the current iteration.  
  
-   (Optional) To support filtering, assign the **Area** that represents the product area to which the work item belongs.  
  
    > [!NOTE]
    >  For information about how to define iteration and area paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
##  <a name="Duration"></a> Setting the Duration of the Iteration  
 To review the amount of unplanned work for a current iteration, you must set the planned end date and the start dates for the report to match those of your current iteration cycle.  
  
#### To change the duration of the iteration  
  
1.  Next to **Plan Completion Date** or **From Date**, click the calendar icon, and then click a date.  
  
2.  Click **View Report**.  
  
##  <a name="Interpreting"></a> Interpreting the Report  
 The Unplanned Work report displays information that you can use to understand how well the team plans its work and whether the team is encountering scope creep during an iteration.  
  
 You can use the Unplanned Work report to understand how well the team is estimating the work that they can complete during an iteration. As a scrum master or project manager, you can use this report to derive historical data about your team. You may want to discuss with your team the idea of having a goal that limits the amount of work added to an iteration to no more than 10% of the planned work.  
  
### Questions That the Report Answers  
 You can review the report to determine the amount of scope creep that has occurred throughout an iteration or over time. Specifically, you can find answers to these questions:  
  
-   What is the delta between planned work at the start of the iteration and work performed?  
  
-   Is too much work being added during the iteration? Is the team expanding the scope of the work?  
  
##  <a name="Changing"></a> Filtering the Report and Changing the Display  
 You can filter the Unplanned Work report or change its display in the following ways:  
  
-   Change the plan completion date and start dates for the report.  
  
    > [!IMPORTANT]
    >  The plan completion date refers to the date when your team finishes planning for the iteration.  
  
-   Filter the user stories, bugs, and tasks that appear in the report by specifying iteration and area paths and types of work items.  
  
 The following illustration shows the available filters and display options:  
  
 ![Filters for Unplanned Work report](_img/procg_unplannedwork.png "ProcG_UnplannedWork")  
  
#### To filter the tasks, user stories, and bugs that appear in the report  
  
1.  Perform one or more of the following actions:  
  
    -   In the **Iteration** or **Area** list, select the check box of each iteration or product area to include.  
  
    -   In the **Work Item Type** list, select the check box of each work item type to include.  
  
2.  Click **View Report**.  
  
## Related notes
 [Reporting Services Reports](reporting-services-reports.md)