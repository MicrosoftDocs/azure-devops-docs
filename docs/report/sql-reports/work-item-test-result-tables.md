---
title: Work Item Test Result tables
titleSuffix: Azure DevOps Server
description: Learn how to use Work Item Test Result tables to query for data about work items that are linked to test results.
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: 33dbfef7-c17b-4884-9a33-cfc61a1d7cd6
ms.author: kaelli
author: KathrynEE
ms.date: 10/20/2021
---

# Work Item Test Result tables
[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

You can query for data about work items that are linked to test results by using FactWorkItemTestResult and the associated dimension tables. For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test results](perspective-test-analyze-report-test-results.md).  
  
![Fact Table for Work Items linked to Test Results](media/teamproj_worktestresult.png "TeamProj_WorkTestResult")  
  
FactWorkItemTestResult is associated with the following dimension tables:  
  
- DimTeamProject  
  
- DimTestResult  
  
- DimWorkItem  
  
For more information, see these articles:
- [Test results](perspective-test-analyze-report-test-results.md)   
- [Test Result tables](test-result-tables.md)   
- [Current Work Item tables](table-reference-current-work-items.md)   
- [Test Management Reports](/previous-versions/azure/devops/report/excel/test-management-reports)   
- [Testing overview](../dashboards/overview.md)   
- [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)