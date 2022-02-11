---
title: Code Churn tables 
titleSuffix: Azure DevOps Server
description: Learn how to query for data about the changes in the code that is under version control.
ms.technology: devops-analytics
ms.topic: reference
ms.assetid: c158a791-7f9d-4440-aa47-87a9497da9e2
ms.author: kaelli
author: KathrynEE
ms.date: 10/19/2021
---

# Code Churn tables

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

Use FactCodeChurn and the associated dimension tables to query for data. Find out about the changes in the code that is under version control. The fact table contains one record for each revision of a file in each changeset.  
  
For a description of the measures and dimensions that are associated with these tables in the Analysis Services cube, see [Code churn and code coverage](perspective-code-analyze-report-code-churn-coverage.md).  
  
![Fact Table for Code Churn](media/teamproj_factcodechurn.png "TeamProj_FactCodeChurn")  
  
FactCodeChurn is associated with the following dimension tables:  
  
- DimChangeset  
  
- DimDate  
  
- DimFile  
  
- DimTeamProject  
  
For more information, see these articles:
- [Code churn and code coverage](perspective-code-analyze-report-code-churn-coverage.md)   
- [Code Churn](/previous-versions/azure/devops/report/excel/code-churn-excel-report)   
- [Run Coverage tables](run-coverage-tables.md)   
- [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)
