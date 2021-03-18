---
ms.topic: include
---

You can [view and run queries](../queries/view-run-query.md) from the web portal or from the Team Explorer plug-in to Visual Studio. You can modify a query using the [query editor to apply different filter criteria](../queries/using-queries.md). Also, you can [add queries to team dashboards](../../report/dashboards/dashboards.md).  


### Quick tips on shared queries

If you are new to Azure Boards, work tracking, and shared queries, review these tips to learn how you can manage work more effectively:

- To find work items that are assigned to you, add <strong>@Me</strong> as the value for the Assigned To field in one of the query clauses.  
- All valid users with standard access can create queries and folders under the **My Queries** area. To create queries and query folders under **Shared Queries**, you must have the Contribute permission set and have been assigned Basic access or greater. For more information, see [Set permissions on queries](../queries/set-query-permissions.md).
- You can modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, [open the query editor](../queries/using-queries.md).   
- You can open any query in [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../backlogs/office/create-your-backlog-tasks-using-project.md), where you can update the fields of one or more work items and publish your changes to the database for tracking work items.  
- You can [visualize status or progress](../../report/dashboards/charts.md) by creating a pie-chart, column chart, or trend chart for flat-list queries. 

::: moniker range=">= azure-devops-2019"

> [!IMPORTANT]  
> Starting with Visual Studio 2019, the Team Foundation plug-in for Office is deprecating support for Microsoft Project. Project integration and the **TFSFieldMapping** command is not supported for Azure DevOps Server 2019 nor for Azure DevOps Services. You can continue to use Microsoft Excel.  

::: moniker-end