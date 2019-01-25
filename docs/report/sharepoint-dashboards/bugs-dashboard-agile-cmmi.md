---
title: Bugs dashboard (Agile and CMMI) 
titleSuffix: TFS
description: Monitor Bug activity for a team project by using the Bugs dashboard - Team Foundation Server  
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: ecd05065-521c-451f-acd9-efde10fa1822
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.date: 12/30/2016
---

# Bugs dashboard (Agile and CMMI)

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]


You can monitor Bug activity for a team project by using the Bugs dashboard, which shows the following charts:  
  
-   Bug burndown  
  
-   The rate at which the team is finding, resolving, and closing Bugs over time  
  
-   The count of priority Bugs over time  
  
-   The current count of active Bugs that are assigned to each team member  
  
     You access dashboards through your team project portal. You can access the Bugs dashboard only if that portal has been enabled and is provisioned to use SharePoint Server Enterprise Edition. For more information, see [Project portal dashboards](project-portal-dashboards.md).  
  
**You can use this dashboard to answer the following questions**:<br /><br /> -   How quickly is the team resolving and closing bugs?<br />-   Is the team fixing bugs quickly enough to finish on time?<br />-   How many bugs is the team reporting, resolving, and closing per day?<br />-   Is the team resolving priority 1 bugs before priority 2 and 3 bugs?<br />-   Does any team member have a backlog of priority 1 bugs that warrant redistribution?<br />-   What is the status of last night's build?<br />-   What were the most recent check-ins?
  
 **Requirements**  
  
 Same requirements defined in [Project portal dashboards](project-portal-dashboards.md).  
  
##  <a name="Data"></a> Data that appears in the dashboard  
 The team can use the Bugs dashboard to understand how well the team is finding, resolving, and closing bugs. To learn about the Web Parts that are displayed on the Bugs dashboard, refer to the illustration and the table that follow.  
  
 ![Bugs Dashboard](_img/procguid_dashbugs.png "ProcGuid_DashBugs")  
  
> [!NOTE]
>  Burndown, trend, and bar charts, reports ![Step 1](_img/procguid_1.png "ProcGuid_1") through ![Step 4](_img/procguid_4.png "ProcGuid_4"), do not appear when the server that hosts Analysis Services for the team project is not available.  
  
 For more information about how to interpret, update, or customize the charts that appear in the Bugs dashboard, see the topics that are listed in the following table.  
  
|Web Part|Data displayed|Related topic|  
|--------------|--------------------|-------------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|A visual representation of the cumulative count of all Bugs, grouped by their state, for the past four weeks.<br /><br /> ![Bug Progress Excel Report](_img/procguid_excelbug.png "ProcGuid_ExcelBug")|[Bug Progress](../excel/bug-progress-excel-report.md)|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|Line chart that shows the rolling average of the number of Bugs that the team has opened, resolved, and closed for the past four weeks. The rolling average is based on the seven days before the date for which it is calculated.<br /><br /> ![Bug Trends report](_img/procguid_bugtrends.png "ProcGuid_BugTrends")|[Bug Trends](../excel/bug-trends-excel-report.md)|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|A visual representation of the cumulative count of all Bugs, grouped by their priority, for the past four weeks.<br /><br /> ![Bugs by priority chart](_img/procguid_bypriority.png "ProcGuid_ByPriority")|[Bugs by Priority](../excel/bugs-by-priority-excel-report.md)|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|A horizontal bar chart with the total count of active Bugs that each team member has currently assigned to them, grouped by priority.<br /><br /> ![Bugs by Assignment chart](_img/procguid_byassignment.png "ProcGuid_ByAssignment")|[Bugs by Assignment](../excel/bugs-by-assignment-excel-report.md)|  
|![Step 5](_img/procguid_6.png "ProcGuid_6")|List of the active Bugs. The list is derived from a Team Web Access Web Part.<br /><br /> ![Bug Trends report](_img/procguid_bugtrends.png "ProcGuid_BugTrends")|[Workbooks](workbooks.md)|  
|![Step 6](_img/procguid_6a.png "ProcGuid_6a")|List of upcoming events. The list is derived from a SharePoint Web Part.<br /><br /> ![Import Events Web part](_img/sharepoint_dashboard.png "SharePoint_Dashboard")|Not applicable|  
|![Step 7](_img/procguid_7.png "ProcGuid_7")|Count of active, resolved, and closed work items. You can open the list of work items by choosing each number. This list is derived from a Team Web Access Web Part.<br /><br /> ![Project Work Items Web part](_img/twsa_dashprojectwi.png "TWSA_DashProjectWI")|Not applicable|  
|![Step 8](_img/procguid_8.png "ProcGuid_8")|List of recent builds and their status. You can view more details about a build by choosing it. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Builds Web part](_img/twsa_dashbuilds.png "TWSA_DashBuilds")<br /><br /> **Legend**:<br /><br /> ![Build in Progress](_img/icon_buildstatus_1.gif "Icon_BuildStatus_1"): Build not started<br /><br /> ![Build Not Started](_img/icon_buildstatus_2.gif "Icon_BuildStatus_2"): Build in progress<br /><br /> ![Build Succeeded](_img/icon_buildstatus_3.gif "Icon_BuildStatus_3"): Build succeeded<br /><br /> ![Build Failed](_img/icon_buildstatus_4.gif "Icon_BuildStatus_4"): Build failed<br /><br /> ![Build Stopped](_img/icon_buildstatus_5.gif "Icon_BuildStatus_5"): Build stopped<br /><br /> ![Build Partially Succeeded](_img/icon_buildstatus_6.gif "Icon_BuildStatus_6"): Build partially succeeded|[Run, monitor, and manage](../../pipelines/overview.md)|  
|![9](_img/procguid_9.png "ProcGuid_9")|List of the most recent check-ins. You can view more details about a specific check-in by choosing it. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Checkins Web part](_img/twsa_dashcheckins.png "TWSA_DashCheckins")|[Manage pending changes](../../repos/tfvc/develop-code-manage-pending-changes.md)|  
  
##  <a name="Activities"></a> Required activities for tracking bugs  
 For the reports that appear in the Bugs dashboard to be useful and accurate, the team must perform the following activities:  
  
-   Define Bugs, and specify their **Iteration** and **Area** paths.  
  
-   Assign each Bug to the team member who is working to resolve or close it.  
  
-   Specify the **Priority** of each Bug.  
  
-   Update the **State** of each Bug as the team fixes, verifies, and closes it.  
  
##  <a name="Using"></a> Monitor active bugs and bug trends  
 Team members can use the Bugs dashboard to determine whether they are managing the list of active Bugs according to established team goals and agile practices. By unit testing each increment of code before check-in, the team can reduce the overall number of bugs that the team must find. A team that focuses on being able to ship each increment of code removes defects incrementally and minimizes ongoing bugs.  
  
 By using the Bugs dashboard, the team can answer the following questions:  
  
-   Is the number of active Bugs acceptable based on team goals? Is the team postponing too many Bugs?  
  
-   Is the team finding, fixing, and closing Bugs quickly enough to meet expectations and at a rate that matches previous development cycles?  
  
-   Is the team addressing high priority bugs before lower priority bugs?  
  
-   Does any team member need help in resolving bugs?  
  
###  <a name="Progress"></a> Bug progress indicators  
  
|Indicator|Questions to ask|  
|---------------|----------------------|  
|**The band for active Bugs is becoming wider**. If the width of the team's band for active Bugs is increasing, the Bug backlog is growing. The team is finding more Bugs than it can resolve or close.<br /><br /> A widening band of active Bugs might indicate that a bottleneck is slowing the team's ability to resolve and close Bugs.|-   Are team members being reallocated to other, non-priority tasks?<br />-   Are other issues blocking the team's ability to resolve and fix Bugs?|  
|**The number of active Bugs is not changing**. A flat trend in the number of active Bugs indicates that the team is not finding Bugs.|-   Is the test coverage sufficient?<br />-   Are other issues blocking the team's ability to find Bugs?|  
|**The number of resolved or closed Bugs is not changing**. When the number of Bugs that the team is resolving or closing remains flat for long periods of time, team members might not be able to resolve or close Bugs.|-   Are team priorities correctly set?<br />-   Are team members overallocated on other tasks?<br />-   Are team members correctly tracking their Bug status?|  
  
###  <a name="Trend"></a> Bug trend indicators  
  
|Indicator|Questions to ask|  
|---------------|----------------------|  
|**The team is resolving many Bugs in each time period**. A high resolution rate usually indicates that the team is making good progress.|-   Is the team promptly closing the Bugs that it resolves? The rate of closure should resemble the rate of resolution.<br />-   Is the team reactivating Bugs at an acceptable rate?|  
|**The team is resolving Bugs quickly but not closing them**. Team members who are assigned to verify fixes might be spread too thin, or different priorities might keep those team members from closing resolved Bugs.|-   Are test resources over-allocated?<br />-   Should the team revisit test priorities?<br />     For more information about these metrics, see [Test](test-dashboard-agile-cmmi.md).|  
|**The team is finding few bugs in each time period**. The team might struggle to find bugs in a high-quality solution or with ineffective testing.|-   Do the metrics for code coverage, code churn, or test progress indicate a problem with the code or testing?<br />     For more information about these metrics, see [Quality](quality-dashboard-agile-cmmi.md).|  
|**The team is finding about the same number of bugs in successive time periods**. If the team finds the same number of bugs week after week or iteration after iteration, you might investigate the underlying cause. Early in the testing cycle, the tests might not be rigorous or advanced enough to find many bugs. In early iterations, this situation is expected. However, as the product matures, tests should exercise broader scenarios and integrations.|-   Are the test cases adequate to test the user stories that the team is developing?<br />-   Have the tests become stale or are they testing the wrong functionality?<br />-   Is the test team rigorously testing each user story?<br />     For more information about these metrics, see [Test](test-dashboard-agile-cmmi.md).|  
|**The team is finding many bugs in each time period**. The team might find bugs easily in sloppy code, in newly integrated code, with effective testing, or during a specific event, such as a bug bash.|-   Do the metrics for code coverage, code churn, or test progress indicate a problem with the code or testing?<br />     For more information about these metrics, see [Quality](quality-dashboard-agile-cmmi.md).|  
  
###  <a name="PriorityDistribution"></a> Bug priority and distribution  
  
|Indicator|Questions to ask|  
|---------------|----------------------|  
|**The number of active higher priority Bugs is larger than the number of active lower priority Bugs**. When the number of high priority Bugs is much larger than the number of lower priority bugs, the team might be focusing on lower priority items first.|-   Is the team fixing bugs in the order of priority set by the team?<br />-   Are issues blocking the team's ability to fix the higher priority bugs?|  
|**Bug assignments are not evenly distributed**. The team might consider reassigning work when many Bugs are assigned to one or two team members and only a few to other team members.|-   Should the team balance the workload by reassigning Bugs?|  
  
## Related notes  
 [Project portal dashboards](project-portal-dashboards.md)