---
title: Work Item Category tables
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Query for categories of work items defined in Team Foundation Server   
ms.assetid: ae8ea834-400f-4cda-98d4-a7e612c91cce
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---



# Work Item Category tables

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can query for categories of work items by using the FactWorkItemToCategory and DimWorkItemCategory tables. You can organize the results of other work item queries by category if you join these tables with the DimWorkItem by using `FactWorkItemToCategory.WorkItemTypeName = DimWorkItem.System_WorkItemType`.  
  
 For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test cases and work items](perspective-test-analyze-report-work.md).  
  
 ![Fact Tables for Work Item Category](_img/teamproj_factworkitemcategory.png "TeamProj_FactWorkItemCategory")  
  
 FactWorkItemToCategory is associated with the following dimension tables:  
  
-   DimWorkItem  
  
-   DimWorkItemCategory  
  
## Related notes 
-  [Test cases and work items](perspective-test-analyze-report-work.md)   
-  [Use categories to group work item types](../../reference/xml/use-categories-to-group-work-item-types.md)   
-  [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)