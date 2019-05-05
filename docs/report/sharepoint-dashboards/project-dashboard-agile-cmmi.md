---
title: Project dashboard (Agile and CMMI) | TFS
description: Displays data that helps to monitor task burndown, burn rate, and the product backlog - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: 2423170b-dbcf-4b50-8e1c-360461cc753b
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 12/30/2016
---

# Project dashboard (Agile and CMMI)

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can use the Project dashboard to track team progress toward completing an iteration. This dashboard displays data that helps you monitor task burndown, burn rate, and the product backlog.  


**You can use this dashboard to answer the following questions**:<br /><br /> -   Is the team likely to finish the iteration on time?<br />-   Will the team complete the planned work based on the current burn rate?<br />-   What were the most recent check-ins?  
  
 **Requirements**  
  
 Same requirements defined in [Project portal dashboards](project-portal-dashboards.md).  
  
##  <a name="Data"></a> Data displayed in the dashboard  
 You can use the Project dashboard to understand how much progress the team is making toward completing tasks. To learn about the Web Parts that are displayed on the Project dashboard, refer to the illustration and the table that follow.  
  
 ![Project dashboard &#40;Agile&#41;](_img/procg_dashboard_proj.png "ProcG_Dashboard_Proj")  
  
> [!NOTE]
>  Burndown and burn rate charts, reports ![Step 1](_img/procguid_1.png "ProcGuid_1") and ![Step 2](_img/procguid_2.png "ProcGuid_2"), do not appear when the server that hosts Analysis Services for the team project is not available.  
  
 For more information about how to interpret, update, or customize the charts that appear in the Project dashboard, see the topics that are listed in the following table:  
  
|Web Part|Data displayed|Related topic|  
|--------------|--------------------|-------------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|A visual representation of the cumulative count of all hours that the team spent on all task work items for the past four weeks.<br /><br /> ![Burndown chart](_img/procguid_agileburn.png "ProcGuid_AgileBurn")<br /><br /> The **Ideal Trend** line calculates a slope or trajectory for when work will be completed based on the amount of work remaining and the end date of the report. The line is drawn from the remaining work on the start date to intersect the x-axis on the end date.|[Burndown and Burn Rate](../sql-reports/burndown-and-burn-rate-report.md)|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|Bar chart that shows the actual and required burn rate of the team. The burn rate shows how quickly the team is actually completing planned work and what the rate must be to complete the currently active tasks on schedule.<br /><br /> ![Burn Rate Excel Report](_img/procg_burnrate.png "ProcG_BurnRate")|[Burndown and Burn Rate](../sql-reports/burndown-and-burn-rate-report.md)|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|Team Web Access list of active user stories.|[User Story Progress](../excel/user-story-progress-excel-report-agile.md)|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|List of upcoming events. The list is derived from a SharePoint Web Part.<br /><br /> ![Import Events Web part](_img/sharepoint_dashboard.png "SharePoint_Dashboard")|Not applicable|  
|![Step 5](_img/procguid_6.png "ProcGuid_6")|Count of active, resolved, and closed work items. You can open the list of work items by choosing each number. This list is derived from a Team Web Access Web Part.<br /><br /> ![Project Work Items Web part](_img/twsa_dashprojectwi.png "TWSA_DashProjectWI")|Not applicable|  
|![Step 6](_img/procguid_6a.png "ProcGuid_6a")|List of recent builds and their status. You can view more details about a specific build by choosing it. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Builds Web part](_img/twsa_dashbuilds.png "TWSA_DashBuilds")<br /><br /> **Legend**:<br /><br /> ![Build in Progress](_img/icon_buildstatus_1.gif "Icon_BuildStatus_1"): Build not started<br /><br /> ![Build Not Started](_img/icon_buildstatus_2.gif "Icon_BuildStatus_2"): Build in progress<br /><br /> ![Build Succeeded](_img/icon_buildstatus_3.gif "Icon_BuildStatus_3"): Build succeeded<br /><br /> ![Build Failed](_img/icon_buildstatus_4.gif "Icon_BuildStatus_4"): Build failed<br /><br /> ![Build Stopped](_img/icon_buildstatus_5.gif "Icon_BuildStatus_5"): Build stopped<br /><br /> ![Build Partially Succeeded](_img/icon_buildstatus_6.gif "Icon_BuildStatus_6"): Build partially succeeded|[Run, monitor, and manage](../../pipelines/overview.md)|  
|![Step 7](_img/procguid_7.png "ProcGuid_7")|List of the most recent check-ins. You can view more details about a specific check-in by choosing it. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Checkins Web part](_img/twsa_dashcheckins.png "TWSA_DashCheckins")|[Manage pending changes](../../repos/tfvc/develop-code-manage-pending-changes.md)|  
  
##  <a name="RequiredActivities"></a> Required activities for tracking task burndown and burn rate  
 For the reports that appear in the Project dashboard to be useful and accurate, the team must perform the following activities:  
  
-   Define tasks.  
  
-   Specify and update the **Completed** and **Remaining** fields for each task as the team works on it.  
  
    > [!IMPORTANT]
    >  If you subdivide a task into subtasks, specify hours only for the subtasks. These hours are rolled up as summary values for the parent task and the user story.  
  
-   Update the **State** of each task as it progresses from **Active** to **Closed**.  
  
-   (optional) Specify the **Iteration** and **Area** paths for each work item if you want to filter by those fields.  
  
##  <a name="Using"></a> Track an iteration  
 By using the Project dashboard, product owners and the team can view the team's progress and determine whether the team is making sufficient progress.  
  
###  <a name="Modify"></a> Modify the Task Burndown Report for an iteration  
 To track an iteration by using the Project Dashboard, you must modify the parameters for the Task Burndown and Burn Rate reports in Report Manager to reflect the start and end dates for your iteration. By default, the start date is five days before the current date.  
  
##### To modify the Task Burndown and Burn Rate reports to correspond to a specific iteration  
  
1.  In the dashboard navigation panel, choose **Reports**.  
  
2.  In Report Manager, choose **Dashboards**, and then choose **Burndown**.  
  
3.  Choose **Properties**, and then choose **Parameters**.  
  
4.  For the **StartDateParam** parameter, choose **Override Default**, and type the iteration start date in the text box with the format mm/dd/yyyy.  
  
5.  For the **EndDateParam** parameter, choose **Override Default**, and type the iteration end date in the text box with the format mm/dd/yyyy.  
  
6.  Choose **Apply**.  
  
7.  At the top of Report Manager, choose the **Dashboards** navigation link, and then choose **Burn Rate**.  
  
8.  Repeat steps 3 through 6.  
  
9. Return to the Project Dashboard, and refresh the browser.  
  
10. Verify that the **Task Burndown** chart shows the new start and end dates.  
  
##### To switch between displaying work hours and number of work items in the Task Burndown or Burn Rate reports  
  
1.  In the dashboard navigation panel, choose **Reports**.  
  
2.  In Report Manager, choose **Dashboards**, and then choose **Burndown** or **Burn Rate**.  
  
3.  Choose **Properties**, and then choose **Parameters**.  
  
4.  In the **YAxis** list, choose one of the following options:  
  
    -   **Hours of Work** displays the cumulative number of work hours for all tasks that are defined for the iteration.  
  
    -   **Number of Work Items** displays the cumulative number of work items, grouped by state, that are defined for the iteration.  
  
5.  Choose **Apply**.  
  
##### To display different trend lines in the Task Burndown report  
  
1.  In the dashboard navigation panel, choose **Reports**.  
  
2.  In Report Manager, choose **Dashboards**, and then choose **Burndown**.  
  
3.  Choose **Properties**, and then Choose **Parameters**.  
  
4.  In the **TrendLineParameter** list, choose one of the following options:  
  
    -   **Display Actual** displays a band that is based on the actual burndown. The band intersects the x-axis when the iteration is expected to finish.  
  
    -   **Display Ideal** displays a straight line from the remaining work at the start date to the x-axis on the end date.  
  
    -   **Display Both** displays both the actual and ideal trend lines.  
  
    -   **None** does not display a trend line.  
  
5.  Choose **Apply**.  
  
6.  Return to the Project Dashboard, and refresh the browser.  
  
###  <a name="Progress"></a> Monitor progress  
 To monitor team progress, you can review the **Task Burndown (hours)** report for the following types of indicators:  
  
-   **Has Completed Work stopped increasing in the Task Burndown (hours) report?**  
  
     One or more issues might be blocking progress or the team might not be resolving and closing work items that it has completed, fixed, and verified.  
  
-   **Is the team adding or expanding the scope of work during the iteration?**  
  
     Significant increases over time to the amount of Remaining Work may indicate poor estimations or scope creep. That is, either the team did not accurately estimate the work at the start of the iteration or the team added features after the iteration started. When required effort is larger than estimated effort, team members might be underestimating the difficulty, time, or other factors. You should investigate the root causes. For example, you might want to determine how granular the Tasks are.  
  
-   **Do changes in the reports match your expectations?**  
  
     Dashboard reports reflect work that the team is tracking. You should expect the reports to change according to the decisions and changes that the team makes about the work. If the team reallocates work to another iteration or decides to add work for an iteration, those one or more reports on the Project dashboard should reflect those decisions.  
  
 If the slope of the **Remaining Work** is progressing near or under the **Ideal Trend** line, the team is executing well against the iteration plan. However, if the **Remaining Work** slope is higher than the **Ideal Trend** line, the team will probably not complete all planned tasks before the end of the iteration.  
  
## Related notes 
 [Project portal dashboards](project-portal-dashboards.md)