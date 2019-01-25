---
title: Work Item Test Result tables
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Use Work Item Test Result tables to query for data about work items that are linked to test results.
ms.assetid: 33dbfef7-c17b-4884-9a33-cfc61a1d7cd6
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---


# Work Item Test Result tables
[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can query for data about work items that are linked to test results by using FactWorkItemTestResult and the associated dimension tables. For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test results](perspective-test-analyze-report-test-results.md).  
  
 ![Fact Table for Work Items linked to Test Results](_img/teamproj_worktestresult.png "TeamProj_WorkTestResult")  
  
 FactWorkItemTestResult is associated with the following dimension tables:  
  
-   DimTeamProject  
  
-   DimTestResult  
  
-   DimWorkItem  
  
## Related notes  
 [Test results](perspective-test-analyze-report-test-results.md)   
 [Test Result tables](test-result-tables.md)   
 [Current Work Item tables](table-reference-current-work-items.md)   
 [Test Management Reports](../excel/test-management-reports.md)   
 [Testing overview](../overview.md)   
 [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)
