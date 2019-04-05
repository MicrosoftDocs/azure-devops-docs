---
title: Stories Overview Report (Agile)
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Lists all user stories, filtered by area and iteration and in order of importance.
ms.assetid: 2b21601e-c737-4eda-b836-87517e19cf63
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---

# Stories Overview Report (Agile)

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

The Stories Overview report lists all user stories, filtered by area and iteration and in order of importance. For information about how to open this report, refresh the data, or manage reports, see [Reporting Services Reports](reporting-services-reports.md).  
  
> [!NOTE]  
>  This report requires that the team project collection that contains your team project was provisioned with SQL Server Reporting Services. This report is not available if ![Report](_img/icon_reportte.png "Icon_reportTE") **Reports** does not appear when you open Team Explorer and expand your team project node.  
  

**You can use this report to answer the following questions**:<br /><br /> -   How much work does each story require?<br />-   How much work has the team completed for each story?<br />-   Are the tests for each story passing?<br />-   How many active bugs does each story have? 
  
 **Required Permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Browser** role in Reporting Services. For more information, see [Grant permissions to view or create reports in TFS](../admin/grant-permissions-to-reports.md).  
  
<a name="Data"></a> 
## Data in the report  
 The Stories Overview report presents a snapshot of the work that has been performed for the filtered set of user stories to the current date, as the following illustration shows:  
  
 ![Stories Overview example report](_img/procguid_agilereports.png "ProcGuid_AgileReports")  
  
 This report displays the following information for each user story that it lists:  
  
 **Work Progress**  
  
-   **% Hours Completed**: A numeric value and visual representation that shows the percentage of completed work based on the rollup of baseline and completed hours for all tasks that are linked to the user story or its child stories.  
  
-   **Hours Remaining**: A numeric value for the rollup of all remaining hours for all tasks that are linked to the user story or its child stories.  
  
 **Test Status**  
  
-   **Test Points**: A numeric value that represents the number of pairings of test cases with test configurations in a specific test suite. For more information about test points, see [Reporting on testing progress for test plans](../../test/track-test-status.md).  
  
-   **Test Results**: A numeric value and visual representation that shows the percentage of test cases, grouped according to the status of their most recent test run, where the options are **Passed** (green), **Failed** (red), or **Not Run** (black).  
  
-   **Bugs**: A numeric value and visual representation that shows the number of bugs that are linked to the test case or user story, where the options are **Active** (blue) and **Resolved** (gold). If a user story is linked to one or more child stories, the values represent a rollup of all bugs for the user story and its child stories.  
  
### User Stories that Appear in the Report  
 The Stories Overview report lists and highlights user stories according to the following criteria:  
  
-   Stories appear in order of their importance, based on their assigned ranking.  
  
-   Stories appear in bold type when they are in the active or resolved state.  
  
-   Stories appear in normal type when they are in the closed state.  
  
-   Stories appear in gray type when their assigned iteration or area is outside the filtered set, but they have tasks or child stories that are within the filtered set of iterations or product areas.  
  
    > [!NOTE]  
    >  For information about how to define iteration and area paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
### Required Activities for Tracking Work Items  
 For the Stories Overview report to be useful and accurate, the team must perform the following activities to track work items:  
  
-   Define user stories and tasks, create a **Child** link from each task to a user story, and create a **Child** link from any subtasks to its parent task.  
  
-   Define and update the **Completed** and **Remaining** fields for each task or subtask during the iteration or release.  
  
    > [!IMPORTANT]  
    >  If you subdivide a task into subtasks, team members should specify hours only for the subtasks. These hours are rolled up as summary values for the parent task and user story.  
  
-   Define test cases, and create a **Tested By** link from each test case to a user story.   
  
-   For each bug, create either a **Tested By** link to the test case that identified the code defect or a **Related** link to the user story to which the bug relates.  
  
-   Set the **State** of each bug to **Resolved** when it is fixed.  
  
-   Specify the **Iteration** and **Area** paths for each story, task, test case, and bug.  
  
    > [!NOTE]  
    >  For information about how to define iteration and area paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .  
  
<a name="Interpreting"></a> 
## Interpreting the Report  
 The Stories Overview report shows overall work progress in the three areas that are important to completing and closing a user story:  
  
-   Tasks implemented to complete the user story.  
  
-   Test cases run to ensure the quality of the implemented user stories.  
  
-   Bugs identified that indicate problems with the quality of the user stories.  
  
 Depending on your area of focus, you can filter the report in the following ways:  
  
-   Specify the **Iteration** and **Area** paths of interest.  
  
     For more information, see [Filtering the Report](#Changing) later in this article.  
  
-   Click ![Expand](_img/icon_expand.gif "Icon_Expand") or ![Collapse](_img/icon_collapse.gif "Icon_Collapse") to expand or collapse a user story and display child stories. Parent stories display a rollup of all task hours that are assigned to it and its child stories.  
  
### Questions that the report answers  
 You can review the report to determine the overall progress for each user story of interest. For example, you can find answers to the following questions:  
  
#### Work Progress  
  
-   Does the amount of work that remains for each story correspond to your expectations?  
  
-   Are top-ranked stories being implemented first?  
  
-   How many tests are defined for each story? How many tests are passing?  
  
-   What user stories are being implemented that have no test cases defined for them?  
  
#### Quality Progress  
  
-   How many test cases have run for each story, and how many have passed?  
  
-   How many active bugs does each story have?  
  
-   Are bugs being found for stories that are being tested?  
  
-   Are bugs being resolved or are they remaining active?  
  
#### Risk Assessment  
  
-   Which stories are at risk?  
  
-   Which stories are not stable enough for release?  
  
-   Which stories can the team ship today?  
  
### Healthy version of the report  
 A healthy Stories Overview report shows more progress on stories that appear near the top of the report. As the following illustration shows, the team has accomplished more work for those stories that appear first in the report. Stories are always listed according to their ranking.  
  
 ![Example of Healthy Stories Progress](_img/procguid_healthy.png "ProcGuid_Healthy")  
  
### Unhealthy version of the report  
 An unhealthy Stories Overview report shows one or more of the following indications:  
  
-   The team is making more progress on stories that have a lower rank than on stories that have a higher rank.  
  
-   More test are failing than are passing.  
  
-   Tests are failing for a story, but no bug work items are being created.  
  
<a name="Changing"></a> 
## Filter the report  
 You can filter the Stories Overview report to show only those user stories that are defined for the iterations or product areas that you specify.  
  
#### To specify which user stories appear in the report  
  
1.  In the **Iteration** or **Area** list, select the check box of each iteration or product area to include.  
  
2.  Click **View Report** to refresh the report based on the new filter criteria.  
  
## Related notes
- [Reporting Services Reports](reporting-services-reports.md)  
