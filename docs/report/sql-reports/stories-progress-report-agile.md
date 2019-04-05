---
title: Stories Progress Report (Agile) 
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Lists all user stories, filtered by product area and iteration in order of importance.
ms.assetid: 1478227b-50b9-4ef1-be5b-838cd5a5467b
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---


# Stories Progress Report (Agile)
[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

The Stories Progress report lists all user stories, filtered by product area and iteration in order of importance.  
  
 For information about how to access, refresh, or manage reports, see [Reporting Services Reports](reporting-services-reports.md).  
  
> [!NOTE]
>  This report requires that the team project collection that contains your team project was provisioned with SQL Server Reporting Services. This report is not available if ![Report](_img/icon_reportte.png "Icon_reportTE") **Reports** does not appear when you open Team Explorer and expand your team project node.  
  
 
**You can use this report to answer the following questions**:<br /><br /> -   How much progress has the team made toward completing the work for each story?<br />-   How much work must the team still perform to implement each user story?<br />-   How much work did the team perform in the last calendar period?
  
 **Required Permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Browser** role in Reporting Services. For more information, see [Add users to team projects](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the Report  
 The Stories Progress report shows the status of completion as determined by the tasks that have been defined to implement the user story, as the following illustration shows. The data in the report is derived from the data warehouse.  
  
 ![Example Stories Progress Report](_img/procguid_repstoriesprogress.png "ProcGuid_RepStoriesProgress")  
  
 This report displays the following information for each user story that appears in the report:  
  
-   **Progress (% Completed)**: Numeric value that represents the percentage of completed work based on the rollup of baseline and completed hours for all tasks that are linked to the user story or its child stories.  
  
-   **Hours Completed**: A visual representation of the completed hours, displayed as a dark green bar.  
  
-   **Recently Completed**: A visual representation of those hours completed within the time interval specified for **Recent (Calendar) Days**, displayed as a light green bar.  
  
-   **Hours Remaining**: Rollup of all remaining hours for all tasks that are linked to the user story or its child stories.  
  
    > [!NOTE]
    >  The report displays active user stories in bold type and closed user stories in normal type.  
  
### User Stories that Appear in the Report  
 The Stories Progress report lists and highlights user stories according to the following criteria:  
  
-   Stories appear in order of their importance, based on their assigned ranking.  
  
-   Stories appear in bold type when they are in the active or resolved state.  
  
-   Stories appear in normal type when they are in the closed state.  
  
-   Stories appear in gray type when their assigned iteration or area is outside the filtered set but they have tasks or child stories that are within the filtered set of iterations or product areas.  
  
### Required Activities for Tracking Work Items  
 For the Stories Progress report to be useful and accurate, the team must perform the following activities:  
  
-   Define user stories and tasks, create a **Child** link from each task to the story that it implements, and create a **Child** link from any subtask to its parent task.  
  
-   Define and update the **Completed** and **Remaining** fields for each task or subtask during the iteration or release  
  
    > [!IMPORTANT]
    >  If you subdivide a task into subtasks, specify hours only for the subtasks. These hours are rolled up as summary values for the parent task and user story.  
  
-   Specify the **Iteration** and **Area** paths for each story and task.  
  
    > [!NOTE]
    >  For information about how to define iteration and area paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
##  <a name="Interpreting"></a> Interpreting the Report  
 Depending on your area of focus, you can filter the report in the following ways:  
  
-   Specify the **Iteration** and **Area** paths of interest.  
  
-   Change the **Recent (Calendar) Days**.  
  
     By default, the value of this field is seven days.  
  
-   Click ![Expand](_img/icon_expand.gif "Icon_Expand") or ![Collapse](_img/icon_collapse.gif "Icon_Collapse") to expand or collapse a user story and display child stories. Parent stories display a rollup of all task hours that are assigned to it and its child stories.  
  
 For more information, see [Filtering the Report and Changing the Display](#Changing) later in this article.  
  
### Questions That the Report Answers  
 You can review the report to determine how much work the team performed for the past week or recent period. Specifically, you can find answers to the following questions:  
  
-   **On which stories did the team make progress, and which are almost complete**?  
  
     Stories on which the team made progress will show a significant light green band within the progress bar.  
  
     Stories that are almost complete will indicate a high **Progress (% Completed)**, the progress bar will be almost completely green, and few hours will be listed in the **Hours Remaining** column.  
  
-   **Which stories did the team not work on**?  
  
     Stories that were not worked on will not show any light green band within the progress bar.  
  
-   **Which user stories have the most work still to be completed?**  
  
     Stories that require the most work to complete will show a significant blue band within the progress bar and a large number of hours in the **Hours Remaining** column.  
  
-   **Is work on any story blocked?**  
  
     Stories that show no light green band in the progress bar might indicate a blocking issue.  
  
     If the team has not completed any work on a story for several weeks, you might want to determine why and identify any blocking or resource issues.  
  
-   **Can we deliver everything that we planned? Which goals should we re-scope or cut?**  
  
     Based on the stories that are still active, you might want to defer some stories to a later iteration so that the team can focus on completing other stories in the current iteration.  
  
### Healthy Version of Report  
 A healthy Stories Progress report shows that the team recently completed work (light green) on all stories that are expected to be in progress, as the following illustration shows.  
  
 ![Example of Healthy Stories Progress](_img/procguid_healthy.png "ProcGuid_Healthy")  
  
### Unhealthy Version of Report  
 An unhealthy Stories Progress report might show one or more of the following indications:  
  
-   **One or more stories show no work**.  
  
     Stories that have 0% progress or 0 hours remaining have no tasks or estimated effort defined for them. You might want to verify whether tasks to implement the user story are both assigned correctly and linked to the user story.  
  
-   **Many user stories have no recently completed work**.  
  
     When several stories indicate no or very small amounts of recently completed work, team progress is slow. You might investigate the cause of the slow progress and determine whether you should resolve or track blocking issues.  
  
##  <a name="Changing"></a> Filtering the Report and Changing the Display  
 You can filter the Stories Progress report or change its display in the following ways:  
  
-   Filter the list of stories that appear by changing the iteration or area paths.  
  
-   Change the time interval that determines what is considered recent.  
  
     The amount of **Recently Completed** work is the work that the team performed or added during the interval specified by **Recent (Calendar) Days**. To determine whether the team performed any work in the last week, you set the value to 7 days. To determine how much work the team completed in the last month, you set the value to 30 days.  
  
-   Change the scale that is used to show progress.  
  
     You can view the report in absolute scale or in 100% scale. Absolute scale shows progress relative to work that the team performed on all user stories in the report, and 100% scale shows progress specific to the baseline of work for each user story.  
  
 The following illustration shows the available filters and display options.  
  
 ![Filters for Stories Progress report](_img/procguid_progressfilters.png "ProcGuid_ProgressFilters")  
  
#### To filter the user stories that appear in the report  
  
1.  In the **Iteration** or **Area** list, select the check box of each iteration or product area to include.  
  
    > [!NOTE]
    >  For information about how to define iteration and area paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
2.  Click **View Report** to refresh the display based on the new filter criteria.  
  
#### To change the time interval that determines recent activity  
  
1.  In the **Recent (Calendar) Days** box, type the number of days to be considered as the recent time interval.  
  
2.  Click **View Report** to refresh the display based on the new interval.  
  
#### To change the scale that displays user story progress  
  
1.  In the **Display Option** list, click one of the following options:  
  
    -   **Absolute Scale**: Displays the progress of hours completed and remaining as a percentage of the baseline, which appears relative to all user stories in the report.  
  
    -   **100% Scale**: Displays the progress of hours completed and remaining as a percentage of the baseline for each story, which is always 100%.  
  
2.  Click **View Report** to refresh the display based on the new scale.  
  
## Related notes
 [Reporting Services Reports](reporting-services-reports.md)