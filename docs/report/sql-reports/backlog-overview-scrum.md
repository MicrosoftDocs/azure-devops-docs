---
title: Backlog overview (Scrum) 
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Reports the lists of all product backlog items (PBIs) - Team Foundation Server  
ms.assetid: b3e2c54e-99de-47d1-9fa5-08539ff31c87
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 10/17/17
---



# Backlog overview (Scrum)

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

The Backlog Overview report lists all product backlog items (PBIs), both active and completed. It doesn't include bugs. The report presents a snapshot of the work that has been performed for the filtered set of PBIs.  
  
 ![Backlog Overview report](_img/alm_pg_agile_addbug.png "ALM_PG_Agile_AddBug")  
  
 To learn how to open the report, refresh the data, or manage reports, see [Reporting Services Reports](reporting-services-reports.md).  
  
 Use this report to answer the following questions:  
  
|Work progress|Quality progress and risk assessment|  
|-------------------|------------------------------------------|  
|-   How much work does each PBI require?<br />-   Does the amount of work that remains for each PBI correspond to your expectations?<br />-   Are top-ranked PBIs being implemented first?<br />-   How many tests are defined for each PBI? How many tests are passing?<br />-   Which PBIs don't have test cases?|-   How many test cases have run for each PBI, and how many have passed?<br />-   Which PBIs are at risk?<br />-   Which PBIs are not stable enough for release?<br />-   Which PBIs can the team ship today?|  
  
 **Requirements**  
  
-   This report requires that the team project collection that contains your team project was provisioned with SQL Server Reporting Services. This report is not available if ![Report](_img/icon_reportte.png "Icon_reportTE") **Reports** does not appear when you open Team Explorer and expand your team project node.  
  
-   To view the report, you must be assigned or belong to a group that has been assigned a **Browser** or **Content Manager** role in Reporting Services. For more information, see [Grant permissions to view or create reports in TFS](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 This report displays the following information for each PBI that it lists:  
  
|Work Progress|Test Status|  
|-------------------|-----------------|  
|-   **Hours Breakdown**: A visual representation that shows the percentage of completed work based on the rollup of remaining hours for all tasks that are linked to the PBI or its child PBIs.<br />-   **To Do**: A rollup of the remaining hours for tasks in the To Do state that are linked to the PBI or its child PBIs.<br />-   **In Progress**: A rollup of the remaining hours for tasks in the In Progress state that are linked to the PBI or its child PBIs.|-   **Test Points**: A numeric value that represents the number of pairings of test cases with test configurations in a specific test suite. For more information about test points, see [Reporting on testing progress for test plans](../../test/track-test-status.md).<br />-   **Test Results**: A numeric value and visual representation that shows the percentage of test cases, grouped according to the status of their most recent test run, where the options are **Passed** (green), **Failed** (red), or **Not Run** (black).|  
  
###  <a name="Interpreting"></a> Healthy and unhealthy versions of the report  
 A healthy report shows more progress on PBIs that appear near the top of the report.  
  
 An unhealthy report indicates progress on PBIs that have a lower rank than on PBIs that have a higher rank, or that more tests are failing than passing.  
  
### PBIs that appear in the report  
 The report lists and highlights PBIs according to the following criteria:  
  
-   PBIs appear in order of their importance, based on their assigned ranking (Backlog Priority field).  
  
-   PBIs appear in bold type when they are in the New, Approved, or Committed states.  
  
-   PBIs appear in normal type when they are in the Done state.  
  
-   PBIs appear in gray type when their assigned iteration or area is outside the filtered set, but they have tasks or child PBIs that are within the filtered set of iterations or product areas.  
  
### Required activities to track the backlog  
 To populate the report with useful data, the team performs the following activities:  
  
-   Define PBIs and tasks. Make sure that tasks are linked to their parent PBIs through a **Child** link. Also, create a **Child** link from any subtasks to its parent task. For more information, see [Define the tasks required to implement PBIs and bugs](http://msdn.microsoft.com/34c866ea-a130-4371-bfc4-a3d9f87dccca).  
  
     If you subdivide a task into subtasks, specify hours only for the subtasks. Hours are roll up as summary values for the parent task and PBI.  
  
-   Define and update the **State** and **Remaining** fields for each task or subtask during the iteration or release.  
  
-   Define test cases and link test cases to their parent PBIs using the **Tested By** link. See [Create your tests](../../test/create-test-cases.md).  
  
-   Specify the **Iteration** and **Area** paths for each PBI, task, and test case.  
  
     For information about how to define iteration and area paths, see [Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) .
