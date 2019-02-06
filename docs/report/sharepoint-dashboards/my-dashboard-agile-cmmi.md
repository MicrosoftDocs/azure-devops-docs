---
title: My Dashboard (Agile and CMMI) 
titleSuffix: TFS
description: Use SharePoint My Dashboard to monitor tasks and quickly access to work items that are assigned - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.assetid: e05d8187-c5cc-423a-b977-6ce5ad52abc4
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 12/30/2016
---

# My Dashboard (Agile and CMMI)

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

You can monitor your tasks and quickly access work items that are assigned to you by using My Dashboard. You can use this dashboard to answer the following questions:  
  
-   What is the next set of tasks, bugs, or test cases that I should act on?  
  
-   What is the status of the team's most recent builds?  
  
 **Requirements**  
  
 See requirements listed in [Project portal dashboards](project-portal-dashboards.md).  
  
##  <a name="Data"></a> Data that appears in the dashboard  
 You can use My Dashboard to review and access your work items. To learn about the Web Parts that are displayed on My Dashboard, refer to the illustration and the table that follow. You can open the list of Tasks, Bugs, and Test Cases in either Team Web Access or Team Explorer by using one of the following team queries: My Tasks, My Bugs, or My Test Cases.  
  
 ![Web parts for My Dashboard](_img/procguid_dashboardmy.png "ProcGuid_DashboardMy")  
  
|Web Part|Data displayed|  
|--------------|--------------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|**My Tasks**: List of all tasks that are not closed and that are assigned to the team member who is logged on to the site. This list is derived from the My Tasks shared query.|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|**My Bugs**: List of all bugs that are not closed and that are assigned to the team member who is logged on to the site. This list is derived from the My Bugs shared query.|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|**My Test Cases**: List of all test cases that are not closed and that are assigned to the team member who is logged on to the site. This list is derived from the My Test Cases shared query.|  
|![Step 7](_img/procguid_7.png "ProcGuid_7")|List of upcoming events. This list is derived from a SharePoint Web Part.<br /><br /> ![Import Events Web part](_img/sharepoint_dashboard.png "SharePoint_Dashboard")|  
|![Step 8](_img/procguid_8.png "ProcGuid_8")|Count of active, resolved, and closed work items. You can open the list of work items by choosing each number. This list is derived from a Team Web Access Web Part.<br /><br /> ![Project Work Items Web part](_img/twsa_dashprojectwi.png "TWSA_DashProjectWI")|  
|![9](_img/procguid_9.png "ProcGuid_9")|List of recent builds and their build status. You can view more details by choosing a specific build. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Builds Web part](_img/twsa_dashbuilds.png "TWSA_DashBuilds")<br /><br /> **Legend**:<br /><br /> ![Build in Progress](_img/icon_buildstatus_1.gif "Icon_BuildStatus_1"): Build not started<br /><br /> ![Build Not Started](_img/icon_buildstatus_2.gif "Icon_BuildStatus_2"): Build in progress<br /><br /> ![Build Succeeded](_img/icon_buildstatus_3.gif "Icon_BuildStatus_3"): Build succeeded<br /><br /> ![Build Failed](_img/icon_buildstatus_4.gif "Icon_BuildStatus_4"): Build failed<br /><br /> ![Build Stopped](_img/icon_buildstatus_5.gif "Icon_BuildStatus_5"): Build stopped<br /><br /> ![Build Partially Succeeded](_img/icon_buildstatus_6.gif "Icon_BuildStatus_6"): Build partially succeeded|  
|![10](_img/procguid_10.png "ProcGuid_10")|List of the most recent check-ins. You can view more details by choosing a specific check-in. This list is derived from a Team Web Access Web Part.<br /><br /> ![Recent Checkins Web part](_img/twsa_dashcheckins.png "TWSA_DashCheckins")|  
  
##  <a name="Activities"></a> Required work item tracking activities  
 For the reports that My Dashboard shows to be useful and accurate, the team must perform the following activities:  
  
-   Define tasks, bugs, and test cases, and assign each work item to the team member who is currently working to resolve or close it.  
  
-   Update the **State** of each work item the team fixes, verifies, and closes it.  
  
## Related notes 
 [Project portal dashboards](project-portal-dashboards.md)