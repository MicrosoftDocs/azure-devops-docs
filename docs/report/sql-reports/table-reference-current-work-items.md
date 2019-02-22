---
title: Current Work Item tables 
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Query for data about the current state of bugs, task, and other type of work items 
ms.assetid: 8f70c31b-1c6f-4d5b-8413-3948a298d879
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---

# Current Work Item tables

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]


You can query for data about the current state of bugs, tasks, and other types of work items by using the FactCurrentWorkItem table and the associated dimension tables.  
  
 For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test cases and work items](perspective-test-analyze-report-work.md).  
  
 ![Fact Table for Current Work Items](_img/teamproj_currentworkitem.png "TeamProj_CurrentWorkItem")  
  
 FactCurrentWorkItem is associated with the following dimension tables:  
  
-   DimArea  
  
-   DimIteration  
  
-   DimPerson  
  
-   DimTeamProject  
  
-   DimWorkItem  
  
## Related notes 
-  [Test cases and work items](perspective-test-analyze-report-work.md)   
-  [Work Item History tables](work-item-history-tables.md)   
-  [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)