---
ms.service: azure-devops-boards
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/22/2021
---

You can [view and run queries](../queries/view-run-query.md) from the web portal or from the Team Explorer plug-in to Visual Studio. You can also modify a query using the [query editor to apply different filter criteria](../queries/using-queries.md) and [add queries to team dashboards](../../report/dashboards/dashboards.md).  

### Tips for shared queries

Manage work more effectively with the following tips:

- Find work items assigned to you by adding **@Me** as the value for the Assigned To field in one of the query clauses.  
- Modify any query by adding criteria to focus on a product area, an iteration, or another field. To modify a query, [open the query editor](../queries/using-queries.md).   
- Open any query in [Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) where you can update the fields of one or more work items and publish your changes to the database for tracking work items.  
- [Visualize status or progress](../../report/dashboards/charts.md) by creating a pie-chart, column chart, or trend chart for flat-list queries. 
- All valid users with standard access can create queries and folders under the **My Queries** area. To create queries and query folders under **Shared Queries**, you must have the Contribute permission set and have been assigned Basic access or greater. For more information, see [Set permissions on queries](../queries/set-query-permissions.md).

::: moniker range=">= azure-devops-2019"

> [!IMPORTANT]  
> Starting with Visual Studio 2019, the Azure DevOps plug-in for Office has deprecated support for Microsoft Project. Project integration and the **TFSFieldMapping** command is not supported for Azure DevOps Server 2019 and later versions, including Azure DevOps Services. You can continue to use Microsoft Excel.  

::: moniker-end
