---
title: Address inaccuracies published for summary values 
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: troubleshooting
description: Corrects the reports with hours that are counted twice with this procedure - Team Foundation Server 
ms.assetid: 09e8e02d-9ecb-4012-9ee0-cebb89372096
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 10/31/2017
---


# Address inaccuracies published for summary values

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

If you see that hours are counted twice in reports that contain task hours, you can correct the problem with the procedure in this article. The Progress dashboard and the Burndown and Burn Rate and Remaining Work reports may show double-counting of work hours.  
  
> [!NOTE]  
>  When you use Office Project to create parent and child tasks, it assigns parent tasks the rollup of hours that are defined for all its child tasks. Rollup hours are not published to Team Foundation so that the hours are not double-counted in certain reports. The Microsoft Project mapping file attribute, **IfSummaryRefreshOnly**, suppresses the publication to Team Foundation of the hours that are assigned to summary tasks. You can view the rollup of hours for summary tasks in Office Project but not in Team Foundation. For more information, see [Customize the Microsoft Project field mapping file](../../reference/xml/map-microsoft-project-fields-to-tf-fields.md).  
  
 When both summary tasks and their child tasks contain hours in the effort fields, you essentially have double-counting of the level of task effort. To address these inaccuracies, you must clear the **Original Estimate** (or **Baseline Work** for team projects that have been upgraded), **Remaining Work**, and **Completed Work** fields for the summary or parent tasks.  
  
 **Required Permissions**  
  
 To perform this procedure, you must be a member of the **Contributors** group or your **View work items in this node** and **Edit work items in this node** permissions must be set to **Allow**. For more information, see [Permission reference](../../organizations/security/set-project-collection-level-permissions.md).  
  
### To clear the hour fields of parent or summary tasks  
  
1.  In Team Explorer, expand the **Work Items** node for your team project, and locate the **Work Items with Summary Values** team query.  
  
     This query is located either in the **Team Queries** folder or the **Planning and Tracking** folder under the **Team Queries** folder.  
  
2.  Run the query.  
  
3.  Select ![Collapse all](_img/icon_collapseall.png "Icon_CollapseAll") (Collapse All) so that only parent or summary work items appear in the query results.  
  
4.  Press CTRL+A to highlight the parent work items that are listed.  
  
5.  Open the context menu for one of the work items, and then choose ![Open in Microsoft Excel](_img/icon_openinexcel.png "Icon_openInExcel")**Open in Microsoft Excel**.  
  
    > [!IMPORTANT]  
    >  Export the query results to Office Excel with the rows collapsed. This condition exports only the parent or summary tasks.  
  
6.  In the Excel document, for the area and iteration paths that you are managing, clear the values in the following three columns:  
  
    -   **Original Estimate**  
    -   **Remaining Work**  
    -   **Completed Work**  
  
7.  (Optional) Save the Excel file.  
  
    > [!NOTE]  
    > The work items in this list are based on the work item IDs and not a work item query. To address inaccuracies that may occur later, you must repeat steps 1 through 6.  
  
8.  On the **Team** tab, choose **Publish**.  
  
9. Wait two or more hours for the Analysis Services cube to register the changes.  
  
     The default refresh frequency for the relational data warehouse is two minutes, and for the cube, two hours. For more information, see [Change a process control setting for the data warehouse or Analysis Services cube](../admin/change-a-process-control-setting.md).  
  
10. Verify that the changes have been picked up by viewing the Progress dashboard or other work report.  
  
## Related notes 
 [Add or change Project-to-TFS field mapping](../../reference/xml/add-or-change-how-project-fields-map-to-tfs-fields.md)   
 [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md)