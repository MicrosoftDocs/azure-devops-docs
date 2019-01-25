---
title: Release Burndown
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Shows how quickly your team has delivered backlog items and track how much work the team must still perform to complete a product release.
ms.assetid: 9044206f-c993-451d-bcc8-6f3980c90b3e
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---


# Release Burndown
[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

By reviewing the release burndown report, you can understand how quickly your team has delivered backlog items and track how much work the team must still perform to complete a product release.  
  
> [!NOTE]
>  This report requires that the team project collection that contains your team project was provisioned with SQL Server Reporting Services. This report is not available if ![Report](_img/icon_reportte.png "Icon_reportTE") **Reports** does not appear when you open Team Explorer and expand your team project node.  
  
 **Required permissions**  
  
 To view the report, you must be assigned or belong to a group that has been assigned the **Browser** role in Reporting Services. For more information, see [Grant permissions to view or create reports in TFS](../admin/grant-permissions-to-reports.md).  
  
##  <a name="Data"></a> Data in the report  
 As the following illustration shows, a release burndown graph shows how much work remained at the start of each sprint in a release. The source of the raw data is your product backlog. Each sprint that has been assigned to the team project or team appears along the horizontal axis. The vertical axis indicates the sum of all effort of all active backlog items at the start of each sprint. As the team updates the state of backlog items to Done, the effort remaining decreases.  The amount of estimated effort on the vertical axis is in whatever unit that your scrum team has decided to use (for example, story points, size, or hours).  
  
 ![Release burndown chart](_img/scrum_releaseburndonw.png "Scrum_ReleaseBurndonw")  
  
 You can filter the report by selecting the **Release Path** or **Area**.  
  
### Required activities for tracking release burndown  
 For the burndown graph to be useful and accurate, your team must perform the following activities for tracking work items:  
  
-   Specify the number of releases you want to track and [define the start and end dates for each sprint](http://msdn.microsoft.com/f292f3bc-b472-4399-a7e4-49151d4c0484).  
  
-   Define product backlog items and bugs, and assign each to a sprint or iteration.  (**Iteration** field). Make sure that all backlog items are assigned to your team's area path or subarea.  
  
-   At the start of a release, estimate the **Effort** for each product backlog item and each bug that your team will work on.  
  
-   During the sprint or at the close of each sprint, for each product backlog item and each bug that the team completed, change the **State** to **Done**.  
  
##  <a name="Interpreting"></a> Interpreting the report  
 You can review the report to determine the progress that your team has made in a release and to answer the following questions:  
  
-   How much work remains in the release?  
  
-   How quickly is your team working through the product backlog?  
  
## Related notes 
 [Scrum process](../../boards/work-items/guidance/scrum-process.md)   
[Define area paths](../../organizations/settings/set-area-paths.md) or [Define iteration paths](../../organizations/settings/set-iteration-paths-sprints.md) 